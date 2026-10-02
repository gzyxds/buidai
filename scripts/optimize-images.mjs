/**
 * 一次性图片资产瘦身脚本（P1#5，用后即删）
 *
 * - public/ 下 PNG/JPG > 200KB → 转真 WebP（宽 ≤1440、q82），输出到 ASCII 文件名
 * - WebP > 500KB → 原名重压缩（q78）
 * - 非 ASCII 文件名 → ASCII 别名（小文件仅改名）
 * - 产出映射 JSON（供引用替换与 width/height 属性填写）
 */
import sharp from 'sharp'
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const PUBLIC = 'public'
const CONVERT_MIN_KB = 200
const WEBP_RECOMPRESS_MIN_KB = 500
const WIDTH_CAP = 1440

/** 非 ASCII 文件名 → ASCII 别名（不含扩展名） */
const ASCII_NAME_MAP = {
  'AI合同': 'ai-contract',
  'AI思维导图': 'ai-mindmap',
  'AI直播短视频数字人': 'ai-digital-human-live',
  'AI短剧小说创作': 'ai-drama-novel',
  'AI简历': 'ai-resume',
  'AI证件照': 'ai-id-photo',
  'AI音乐': 'ai-music',
  'GEO优化排名工具': 'geo-rank-tool',
  'Sora2短剧视频创作': 'sora2-drama',
  '写作助手': 'writing-assistant',
  '即梦AI绘画': 'jimeng-draw',
  '即梦AI视频': 'jimeng-video',
  '艺创aigc': 'yichuang-aigc'
}

/** 收集全部文件 */
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) { walk(p, out) } else { out.push(p) }
  }
  return out
}

const files = walk(PUBLIC)
const urlMap = []   // { from, to, width, height, kbBefore, kbAfter }
const failures = []

for (const file of files) {
  const ext = extname(file).toLowerCase()
  const kb = statSync(file).size / 1024
  const dir = file.slice(0, file.length - basename(file).length)
  const stem = basename(file, ext)
  const asciiStem = ASCII_NAME_MAP[stem] ?? stem

  try {
    // PNG/JPG → WebP（真 WebP 输出、宽度封顶）
    if ((ext === '.png' || ext === '.jpg' || ext === '.jpeg') && kb > CONVERT_MIN_KB) {
      const out = join(dir, `${asciiStem}.webp`)
      const info = await sharp(file)
        .rotate()
        .resize({ width: WIDTH_CAP, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(out)
      urlMap.push({
        from: `/${file.replaceAll('\\', '/')}`,
        to: `/${out.replaceAll('\\', '/')}`,
        width: info.width, height: info.height,
        kbBefore: Math.round(kb), kbAfter: Math.round(info.size / 1024)
      })
      continue
    }

    // WebP 重压缩（含 placeholder.webp 这类扩展名与实际格式不符的文件）
    if (ext === '.webp' && kb > WEBP_RECOMPRESS_MIN_KB) {
      const info = await sharp(file)
        .rotate()
        .resize({ width: WIDTH_CAP, withoutEnlargement: true })
        .webp({ quality: 78, effort: 4 })
        .toFile(`${file}.tmp.webp`)
      // 简单防劣化：压缩收益 >20% 才替换
      if (info.size < statSync(file).size * 0.8) {
        statSync(`${file}.tmp.webp`) // 确保生成
        const { renameSync, unlinkSync } = await import('node:fs')
        unlinkSync(file)
        renameSync(`${file}.tmp.webp`, file)
        urlMap.push({
          from: `/${file.replaceAll('\\', '/')}`, to: `/${file.replaceAll('\\', '/')}`,
          width: info.width, height: info.height,
          kbBefore: Math.round(kb), kbAfter: Math.round(info.size / 1024), recompressed: true
        })
      } else {
        const { unlinkSync } = await import('node:fs')
        unlinkSync(`${file}.tmp.webp`)
        urlMap.push({
          from: `/${file.replaceAll('\\', '/')}`, to: `/${file.replaceAll('\\', '/')}`,
          width: info.width, height: info.height, kbBefore: Math.round(kb), skipped: true
        })
      }
      continue
    }

    // 非 ASCII 文件名（小文件，仅改名）
    if (asciiStem !== stem) {
      const out = join(dir, `${asciiStem}${ext}`)
      const { renameSync } = await import('node:fs')
      renameSync(file, out)
      urlMap.push({
        from: `/${file.replaceAll('\\', '/')}`, to: `/${out.replaceAll('\\', '/')}`,
        width: null, height: null, kbBefore: Math.round(kb), renamedOnly: true
      })
    }
  } catch (err) {
    failures.push({ file, error: String(err) })
  }
}

writeFileSync('scripts/_optimize-map.json', JSON.stringify(urlMap, null, 2))
const saved = urlMap.reduce((s, m) => s + (m.kbBefore && m.kbAfter ? m.kbBefore - m.kbAfter : 0), 0)
console.log(`converted/recompressed: ${urlMap.length}, saved: ${(saved / 1024).toFixed(1)} MB`)
if (failures.length) {
  console.error('FAILURES:')
  for (const f of failures) { console.error(f.file, f.error) }
}
