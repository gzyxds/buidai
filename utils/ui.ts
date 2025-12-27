/**
 * UI 常量定义
 * 
 * 集中管理项目中使用的 UI 相关常量，避免魔法数字
 */

/**
 * 滚动相关常量
 */
export const SCROLL = {
  /** 触发导航栏样式变化的滚动阈值（像素） */
  THRESHOLD: 10,
  
  /** 滚动到标题时的偏移量（像素），用于避免被固定头部遮挡 */
  HEADING_OFFSET: 100,
  
  /** TOC 交叉观察器的上边距（用于高亮当前章节） */
  TOC_OBSERVER_TOP_MARGIN: '-100px',
  
  /** TOC 交叉观察器的下边距（百分比） */
  TOC_OBSERVER_BOTTOM_MARGIN: '-66%'
} as const

/**
 * 布局相关常量
 */
export const LAYOUT = {
  /** 顶部导航栏高度（像素） */
  HEADER_HEIGHT: 72,
  
  /** 移动端断点（像素） */
  MOBILE_BREAKPOINT: 768
} as const

/**
 * 动画相关常量
 */
export const ANIMATION = {
  /** 打字机效果 - 打字速度（毫秒） */
  TYPEWRITER_TYPING_SPEED: 100,
  
  /** 打字机效果 - 删除速度（毫秒） */
  TYPEWRITER_DELETING_SPEED: 30,
  
  /** 打字机效果 - 句子完成后暂停时间（毫秒） */
  TYPEWRITER_PAUSE_AFTER_COMPLETE: 2000,
  
  /** 打字机效果 - 开始新句子前暂停时间（毫秒） */
  TYPEWRITER_PAUSE_BEFORE_NEW: 500
} as const

/**
 * 跑马灯相关常量
 */
export const MARQUEE = {
  /** 移动端显示的图片数量 */
  MOBILE_IMAGE_COUNT: 10,
  
  /** 桌面端显示的图片数量 */
  DESKTOP_IMAGE_COUNT: 16
} as const
