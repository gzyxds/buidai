/**
 * AOS (Animate On Scroll) 初始化工具函数
 *
 * @description
 * 异步初始化 AOS 动画库，减小初始包体积。
 * 应在组件挂载 (onMounted) 时调用。
 * 配合页面元素上的 `data-aos` 属性实现滚动时的入场动画效果。
 */
export const initAOS = async () => {
  if (typeof window !== 'undefined') {
    try {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')

      AOS.init({
        duration: 800,         // 动画持续时间 (ms)
        easing: 'ease-out-cubic', // 缓动函数
        once: true,            // 动画是否只播放一次
        offset: 50,            // 触发动画的偏移量 (px)
        delay: 50,             // 动画延迟时间 (ms)
        disable: 'mobile'      // 移动端禁用以提升滚动流畅度
      })
    } catch {
      return
    }
  }
}
