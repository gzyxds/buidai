import type { Product } from '../types'

/**
 * 产品实体：智言AI
 */
const product: Product = {
  slug: 'chat-bot',
  /** 显示名 */
  name: '智言AI',
  /** 通用短描述 */
  description:
    '基于大语言模型的智能客服与对话系统，支持多轮对话、上下文理解与意图识别。提供完整的对话管理、知识库集成和数据分析能力。',
  /** 演示视图（原 demoProducts id: chat-bot） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: '智言AI',
    /** 演示视图副标题 */
    subtitle: '智能客服与对话系统',
    /** 演示视图专属描述 */
    description:
      '基于大语言模型的智能客服与对话系统，支持多轮对话、上下文理解与意图识别。提供完整的对话管理、知识库集成和数据分析能力。',
    /** 演示视图图标 */
    icon: 'i-heroicons-chat-bubble-left-right',
    /** 演示视图封面 */
    image: '/plugin/Nanobanana.png',
    /** 演示视图标签 */
    tags: ['大语言模型', '智能客服', '多轮对话'],
    features: ['多轮对话', '上下文理解', '意图识别', '知识库集成', '数据分析'],
    platforms: [
      {
        title: 'PC演示前台',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://www.buidai.com',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '站点管理端',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://www.buidai.com/admin',
        account: 'demo',
        password: 'demo123'
      },
      {
        title: 'SaaS平台端',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://www.buidai.com/saas',
        account: '联系客服',
        password: '联系客服'
      },
      {
        title: 'WAP演示',
        icon: 'i-heroicons-device-phone-mobile',
        url: 'https://www.buidai.com/mobile',
        account: '自行注册',
        password: '自行注册'
      }
    ]
  }
}

export default product
