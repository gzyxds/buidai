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

/** 安全读取文件，失败返回空串 */
const readIfExists = f => {
  try {
    return fs.readFileSync(f, 'utf8')
  } catch {
    return ''
  }
}

/** 安全获取文件字节数，失败返回 0 */
const sizeOf = f => {
  try {
    return fs.statSync(f).size
  } catch {
    return 0
  }
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
const blob = srcFiles.map(readIfExists).join('\n')

const unused = imgs.filter(img => !blob.includes(img))

console.log('public 图片总数: ' + imgs.length)
console.log('未被引用的: ' + unused.length + ' 个')
const totalBytes = unused.reduce((sum, u) => sum + sizeOf('public' + u), 0)
console.log('总体积: ' + (totalBytes / 1024 / 1024).toFixed(1) + ' MB\n')

unused.sort((a, b) => sizeOf('public' + b) - sizeOf('public' + a))

console.log('未引用清单（按体积降序）:')
for (const u of unused) {
  const kb = Math.round(sizeOf('public' + u) / 1024)
  console.log('  ' + String(kb).padStart(6) + ' KB  ' + u)
}
