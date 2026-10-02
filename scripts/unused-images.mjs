import fs from 'node:fs'
import path from 'node:path'

const imgExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico', '.avif'])

function walk(d, acc, excluded) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) {
      if (!excluded(p)) walk(p, acc, excluded)
    } else {
      acc.push(p)
    }
  }
  return acc
}

const imgs = walk('public', [], p => /node_modules|dist|\.nuxt|\.output|\.git|\.data/.test(p))
  .filter(p => imgExts.has(path.extname(p).toLowerCase()))
  .map(p => p.split(path.sep).join('/').replace(/^public/, ''))

const srcDirs = ['pages', 'components', 'content', 'utils', 'data', 'assets']
const srcFiles = []
for (const d of srcDirs) {
  walk(d, srcFiles, p => /node_modules|dist|\.nuxt|\.output|\.git|\.data|public/.test(p))
}
srcFiles.push('app.config.ts', 'nuxt.config.ts', 'content.config.ts')
const blob = srcFiles.map(f => { try { return fs.readFileSync(f, 'utf8') } catch { return '' } }).join('\n')

const unused = imgs.filter(img => !blob.includes(img))

console.log('public 图片总数: ' + imgs.length)
console.log('未被引用的: ' + unused.length + ' 个')
let totalBytes = 0
for (const u of unused) { try { totalBytes += fs.statSync('public' + u).size } catch {} }
console.log('总体积: ' + (totalBytes / 1024 / 1024).toFixed(1) + ' MB\n')

unused.sort((a, b) => {
  const sa = (() => { try { return fs.statSync('public' + a).size } catch { return 0 } })()
  const sb = (() => { try { return fs.statSync('public' + b).size } catch { return 0 } })()
  return sb - sa
})

console.log('未引用清单（按体积降序）:')
for (const u of unused) {
  let kb = 0
  try { kb = Math.round(fs.statSync('public' + u).size / 1024) } catch {}
  console.log('  ' + String(kb).padStart(6) + ' KB  ' + u)
}
