/**
 * 演示视图派生层（兼容旧 data/demoProducts 的消费方）
 */
import { products } from './entities'
import { handleImageError as handleImageErrorWithFallback } from '../../utils/image'

/** 演示平台（形状兼容旧 DemoPlatform） */
export interface ProductDemo {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  image: string
  status: 'online' | 'beta' | 'coming'
  tags: string[]
  features: string[]
  platforms: {
    title: string
    icon: string
    url: string
    account: string
    password: string
  }[]
}

/** 演示分类（形状兼容旧 ProductCategory） */
export interface ProductCategory {
  id: string
  name: string
  icon: string
  products: ProductDemo[]
}

/** 默认产品图片路径 */
export const DEFAULT_PRODUCT_IMAGE = '/images/buidai.webp'

/** 状态文本映射 */
const STATUS_TEXT_MAP: Record<string, string> = {
  online: '已上线',
  beta: 'Beta',
  coming: '即将上线'
}

/** 状态样式类映射 */
const STATUS_CLASS_MAP: Record<string, string> = {
  online: 'bg-green-500 text-white',
  beta: 'bg-indigo-500 text-white',
  coming: 'bg-neutral-400 text-white'
}

export function getStatusText(status: string): string {
  return STATUS_TEXT_MAP[status] || status
}

export function getStatusClass(status: string): string {
  return STATUS_CLASS_MAP[status] || 'bg-neutral-400 text-white'
}

/** 产品图片缺失时回退到默认图 */
export function getProductImageUrl(path: string | undefined): string {
  return path || DEFAULT_PRODUCT_IMAGE
}

/** 图片加载失败时替换为默认图（实现收敛于 utils/image.ts） */
export const handleImageError = (event: Event) => handleImageErrorWithFallback(event, DEFAULT_PRODUCT_IMAGE)

const DEMO_CATEGORY_META = [
  { id: 'independent', name: '独立系统', icon: 'i-heroicons-shopping-bag' },
  { id: 'extension', name: '扩展应用', icon: 'i-heroicons-sparkles' }
]

/** 演示分类列表（形状兼容旧 categories） */
export const demoCategories: ProductCategory[] = DEMO_CATEGORY_META.map(cat => ({
  ...cat,
  products: products
    .filter(p => p.demo && p.demo.category === cat.id)
    .map(p => ({
      id: p.slug,
      title: p.demo!.title ?? p.name,
      subtitle: p.demo!.subtitle ?? '',
      description: p.demo!.description ?? p.description,
      icon: p.demo!.icon ?? p.icon ?? '',
      image: p.demo!.image ?? p.image ?? '',
      status: p.demo!.status,
      tags: p.demo!.tags ?? p.tags ?? [],
      features: p.demo!.features,
      platforms: p.demo!.platforms
    }))
}))
