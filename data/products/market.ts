/**
 * 市场视图派生层（兼容旧 utils/pluginData 的消费方）
 */
import { products } from './entities'

/** 市场应用（形状兼容旧 AppData） */
export interface MarketApp {
  id: number
  name: string
  description: string
  icon: string
  image: string
  category: string
  originalPrice: number
  discountPrice: number
  date: string
}

/** 市场分类（原 pluginData categories） */
export const marketCategories = [
  { id: 'all', name: '全部应用' },
  { id: 'recommend', name: '官方推荐' },
  { id: 'independent', name: '独立系统' },
  { id: 'extension', name: '扩展应用' },
  { id: 'video', name: '图像视频' },
  { id: 'writing', name: '智能写作' },
  { id: 'enterprise', name: '企业工具' },
  { id: 'efficiency', name: '效率工具' }
]

/** 市场应用列表（按原数字 id 排序，id >= 50 为 PHP 源码系统） */
export const marketApps: MarketApp[] = products
  .filter(p => p.market && p.market.id !== undefined)
  .sort((a, b) => (a.market!.id ?? 0) - (b.market!.id ?? 0))
  .map(p => ({
    id: p.market!.id!,
    name: p.name,
    description: p.market!.description ?? p.description,
    icon: p.icon ?? '',
    image: p.image ?? '',
    category: p.market!.category,
    originalPrice: p.market!.originalPrice,
    discountPrice: p.market!.discountPrice,
    date: p.market!.date ?? ''
  }))
