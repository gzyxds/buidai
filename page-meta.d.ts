/**
 * 页面自定义 meta 类型增强（directory-structure/app/pages.md 官方模式）
 *
 * layouts/default.vue 依赖 definePageMeta({ frameSides: true }) 决定是否
 * 渲染两侧竖带装饰层，此处补充类型声明，去掉布局里的运行时强转。
 */
declare module '#app' {
  interface PageMeta {
    /** 渲染超宽屏两侧竖带装饰层（grid-border 设计系统） */
    frameSides?: boolean
  }
}

// 官方要求：类型增强文件必须包含 import/export
export {}
