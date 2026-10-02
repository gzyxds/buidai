import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

function loadIcons(pkg: string): Set<string> {
  return new Set(
    Object.keys(
      JSON.parse(fs.readFileSync(`node_modules/@iconify-json/${pkg}/icons.json`, 'utf8')).icons
    )
  )
}

const sets = {
  heroicons: loadIcons('heroicons'),
  lucide: loadIcons('lucide'),
  ph: loadIcons('ph'),
  'simple-icons': loadIcons('simple-icons')
}

const prefixes = ['heroicons-solid', 'heroicons', 'lucide', 'ph', 'simple-icons']

function isValidIcon(name: string): boolean {
  let prefix: string | null = null
  let n: string | null = null
  for (const p of prefixes) {
    if (name.startsWith(`i-${p}-`)) {
      prefix = p
      n = name.slice(2 + p.length + 1)
      break
    }
  }
  if (!prefix || !n) return false
  const set = prefix === 'heroicons-solid' ? sets.heroicons : sets[prefix as keyof typeof sets]
  return prefix === 'heroicons-solid' ? set.has(n + '-20-solid') : set.has(n)
}

function walk(d: string, acc: string[] = []): string[] {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) {
      if (!/node_modules|dist|\.nuxt|\.output|\.git|\.data|参考设计|项目文档/.test(e.name))
        walk(p, acc)
    } else if (/\.(vue|ts|md)$/.test(e.name)) acc.push(p)
  }
  return acc
}

describe('全站图标名校验', () => {
  it('所有源码中的 iconify 图标名均存在于对应集合', () => {
    const files = [
      ...walk('pages'),
      ...walk('components'),
      ...walk('data'),
      ...walk('utils'),
      ...walk('content'),
      ...walk('layouts'),
      'app.vue',
      'app.config.ts'
    ]
    const invalid: string[] = []
    for (const f of files) {
      const src = fs.readFileSync(f, 'utf8')
      for (const m of src.matchAll(
        /i-(?:heroicons-solid|heroicons|lucide|ph|simple-icons)-[a-z0-9-]+/g
      )) {
        if (!isValidIcon(m[0])) invalid.push(`${m[0]} (${f})`)
      }
    }
    expect(invalid, `非法图标名：\n${invalid.join('\n')}`).toEqual([])
  })
})

describe('图标组件标签残留检查', () => {
  it('模板中不得再有未转换的图标组件标签（如 <XxxIcon）', () => {
    const files = [...walk('pages'), ...walk('components'), ...walk('layouts')]
    const leftover: string[] = []
    for (const f of files) {
      const src = fs.readFileSync(f, 'utf8')
      for (const m of src.matchAll(/<[A-Z][A-Za-z]*Icon\b/g)) {
        if (m[0] !== '<UIcon') leftover.push(`${m[0]} (${f})`)
      }
    }
    expect(leftover, `未转换的图标组件标签：\n${leftover.join('\n')}`).toEqual([])
  })
})
