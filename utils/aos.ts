import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * AOS (Animate On Scroll) 初始化工具函数
 *
 * @description
 * 初始化 AOS 动画库。
 * 应在组件挂载 (onMounted) 时调用。
 * 配合页面元素上的 `data-aos` 属性实现滚动时的入场动画效果。
 */
export const initAOS = () => {
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 800,         // 动画持续时间 (ms)
      easing: 'ease-out-cubic', // 缓动函数
      once: true,            // 动画是否只播放一次
      offset: 50,            // 触发动画的偏移量 (px)
      delay: 50,             // 动画延迟时间 (ms)
    })
  }
}
