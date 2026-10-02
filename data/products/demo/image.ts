import type { Product } from '../types'

/**
 * 产品实体：图像创作
 */
const product: Product = {
  slug: 'image',
  /** 显示名 */
  name: '图像创作',
  /** 通用短描述 */
  description:
    '图像创作是一个综合型的AI绘画应用，对接 gpt-image-2、即梦、可灵等多家主流 AI 绘画模型。支持多参考图融合创作，自由自定义图片尺寸与分辨率；内置 AI 提示词扩写、同款生成、再次生成等实用能力，一键高清下载作品，零基础轻松创作插画、头像、壁纸等多元创意画作。',
  /** 演示视图（原 demoProducts id: Image） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: '图像创作',
    /** 演示视图副标题 */
    subtitle: 'AI智能生成工具',
    /** 演示视图专属描述 */
    description:
      '图像创作是一个综合型的AI绘画应用，对接 gpt-image-2、即梦、可灵等多家主流 AI 绘画模型。支持多参考图融合创作，自由自定义图片尺寸与分辨率；内置 AI 提示词扩写、同款生成、再次生成等实用能力，一键高清下载作品，零基础轻松创作插画、头像、壁纸等多元创意画作。',
    /** 演示视图图标 */
    icon: 'i-heroicons-photo',
    /** 演示视图封面 */
    image: '/plugin/img2.png',
    /** 演示视图标签 */
    tags: ['AI绘画', '文生图', '多模型'],
    features: ['文生图', '多参考图融合', '自定义尺寸分辨率', '提示词扩写', '高清下载'],
    platforms: [
      {
        title: '联系客服',
        icon: 'i-heroicons-chat-bubble-left-right',
        url: 'https://www.buidai.com/',
        account: '联系客服',
        password: '联系客服'
      }
    ]
  }
}

export default product
