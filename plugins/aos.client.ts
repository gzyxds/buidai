import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * AOS (Animate On Scroll) 动画库初始化插件
 *
 * @description
 * 负责在客户端挂载时初始化 AOS 动画库。
 * 配合页面元素上的 `data-aos` 属性实现滚动时的入场动画效果。
 * 仅在客户端运行 (文件名后缀 .client.ts 且内含 window 判断)。
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    // 在应用挂载后初始化 AOS
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 800,         // 动画持续时间 (ms)
        easing: 'ease-out-cubic', // 缓动函数
        once: true,            // 动画是否只播放一次 (向下滚动播放，向上滚动不回放)
        offset: 50,            // 触发动画的偏移量 (px)
        delay: 50,             // 动画延迟时间 (ms)
      })
    })
  }
})
