/**
 * 图片加载失败处理工具
 *
 * 全站三处散落的 fallback 实现收敛于此：
 * - data/products/demo.ts：替换为默认产品图
 * - components/landing/ProductShowcase.vue：替换为占位图
 * - components/landing/HeroSection.vue：隐藏图片
 *
 * @param event 图片 error 事件
 * @param fallbackUrl 传入则替换 src，缺省则隐藏图片
 */
export function handleImageError(event: Event, fallbackUrl?: string): void {
  const img = event.target as HTMLImageElement
  if (!img) {return}

  if (fallbackUrl) {
    // 防止 fallback 图自身也加载失败时陷入无限重试
    if (img.src !== fallbackUrl) {
      img.src = fallbackUrl
    }
  } else {
    img.style.display = 'none'
  }
}
