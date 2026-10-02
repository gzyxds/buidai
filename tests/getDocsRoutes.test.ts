import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getDocsRoutes } from '../utils/getDocsRoutes'

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

  it('剥离文件名数字前缀并生成路由（1.start.md -> /docs/introduction/start）', () => {
    seed({ introduction: ['1.start.md', '2.docker-installation.md'] })
    expect(getDocsRoutes().sort()).toEqual(['/docs', '/docs/introduction/docker-installation', '/docs/introduction/start'])
  })

  it('index.md 映射为父目录路由', () => {
    seed({ '1.introduction': ['index.md'] })
    expect(getDocsRoutes().sort()).toEqual(['/docs', '/docs/introduction'])
  })

  it('剥离目录名数字前缀', () => {
    seed({ '1.introduction': ['2.docker-installation.md'] })
    expect(getDocsRoutes()).toContain('/docs/introduction/docker-installation')
    expect(getDocsRoutes()).not.toContain('/docs/1.introduction/docker-installation')
  })

  it('忽略非 Markdown 文件', () => {
    seed({ introduction: ['note.txt', '1.start.md'] })
    expect(getDocsRoutes()).not.toContain('/docs/introduction/note')
  })

  it('递归处理嵌套目录', () => {
    seed({
      introduction: ['1.start.md'],
      'framework/advanced': ['define.md']
    })
    expect(getDocsRoutes().sort()).toEqual([
      '/docs',
      '/docs/framework/advanced/define',
      '/docs/introduction/start'
    ])
  })

  it('始终包含 /docs 索引路由', () => {
    seed({ introduction: ['1.start.md'] })
    expect(getDocsRoutes()).toContain('/docs')
  })
})
