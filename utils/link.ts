/**
 * 友情链接数据结构定义
 */
export interface FriendLink {
  /** 链接名称 */
  name: string
  /** 链接地址 */
  url: string
  /** 图标类名 (可选) */
  icon?: string
  /** 链接描述 (可选) */
  description?: string
}

/**
 * 友情链接列表
 * 用于页脚底部的友情链接展示
 */
export const friendLinks: FriendLink[] = [
  { name: 'Nanobanana 香蕉绘画', url: '/product/banana', description: '开源免费的 AI 图像生成系统' },
  { name: 'AI短剧小说创作', url: '/product/drama', description: '开源免费的网文短剧写作系统' },
  { name: 'AI数字人系统', url: '/product/human', description: '开源免费的虚拟形象克隆系统' },
  { name: '即梦AI', url: '/product/jimeng', description: '开源免费的 AI 视频生成系统' },
  { name: '即梦AI绘画', url: '/product/jmdraw', description: 'AI绘画系统,AI系统源码,AI绘画生成系统' },
  { name: '电商试衣换装', url: '/product/model', description: '开源免费的AI模特换装系统' },
  { name: 'AI音乐', url: '/product/music', description: '开源免费的 AI 音乐生成系统' },
  { name: 'AI PPT', url: '/product/ppt', description: '开源免费的智能演示文稿制作工具' },
  { name: 'AI简历', url: '/product/resume', description: '开源免费的智能简历生成与分析系统' },
  { name: 'Sora 视频生成引擎', url: '/product/sora', description: '开源免费的 AI 视频创作系统' },
  { name: '视频混剪助手', url: '/product/videoclip', description: '开源免费的视频剪辑软件' },
  { name: '小红书创作助手', url: '/product/xhs', description: '开源免费的 AI 文案生成系统' },
  { name: '艺创AI', url: 'https://www.urlnet.cn' },
  { name: '企业知识库', url: 'https://www.urlnet.cn' },
  { name: '优刻云', url: 'https://www.urlnet.cn' },
  { name: 'AI数字人', url: 'https://www.urlnet.cn' },
  { name: 'AI绘画', url: 'https://www.urlnet.cn' },
  { name: '论文创作', url: 'https://www.urlnet.cn' },
  { name: 'PaYphp', url: 'https://www.urlnet.cn' },
  { name: '172号卡', url: 'https://www.urlnet.cn' }
]
