import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getDocsRoutes } from '../build/getDocsRoutes'

let cwdSpy: ReturnType<typeof vi.spyOn>
let tmp: string

function seed(relDirs: Record<string, string[]>) {
  for (const [dir, files] of Object.entries(relDirs)) {
    const abs = join(tmp, 'content/docs', dir)
    mkdirSync(abs, { recursive: true })
    for (const f of files) {
      writeFileSync(join(abs, f), '')
    }
  }
}

beforeEach(() => {
  tmp = mkdtempSync(join(tmpdir(), 'docs-routes-'))
  cwdSpy = vi.spyOn(process, 'cwd').mockReturnValue(tmp)
})

afterEach(() => {
  cwdSpy.mockRestore()
  rmSync(tmp, { recursive: true, force: true })
})

describe('getDocsRoutes', () => {
  it('content/docs 目录不存在时返回空数组', () => {
    expect(getDocsRoutes()).toEqual([])
  })

  it('文件名即 slug（start.md -> /docs/introduction/start）', () => {
    seed({ introduction: ['start.md', 'docker-installation.md'] })
    expect(getDocsRoutes().sort()).toEqual(['/docs', '/docs/introduction/docker-installation', '/docs/introduction/start'])
  })

  it('index.md 映射为父目录路由', () => {
    seed({ introduction: ['index.md'] })
    expect(getDocsRoutes().sort()).toEqual(['/docs', '/docs/introduction'])
  })

  it('目录名原样保留（不做任何前缀剥离）', () => {
    seed({ introduction: ['start.md'] })
    expect(getDocsRoutes()).toContain('/docs/introduction/start')
  })

  it('忽略非 Markdown 文件', () => {
    seed({ introduction: ['note.txt', 'start.md'] })
    expect(getDocsRoutes()).not.toContain('/docs/introduction/note')
  })

  it('递归处理嵌套目录', () => {
    seed({
      introduction: ['start.md'],
      'framework/advanced': ['define.md']
    })
    expect(getDocsRoutes().sort()).toEqual([
      '/docs',
      '/docs/framework/advanced/define',
      '/docs/introduction/start'
    ])
  })

  it('始终包含 /docs 索引路由', () => {
    seed({ introduction: ['start.md'] })
    expect(getDocsRoutes()).toContain('/docs')
  })
})
