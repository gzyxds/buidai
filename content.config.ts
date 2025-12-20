import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // 博客文章集合配置
    blog: defineCollection({
      type: 'page', // 集合类型：页面
      source: 'blog/*.md', // 数据源路径匹配规则
      schema: z.object({
        tags: z.array(z.string()), // 标签数组
        category: z.string(), // 分类名称
        date: z.date(), // 发布日期
        image: z.string().optional() // 封面图片（可选）
      })
    }),
    // 文档集合配置
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.md', // 递归匹配 docs 目录下所有 markdown 文件
      schema: z.object({
        title: z.string(), // 文档标题
        description: z.string(), // 文档描述
        links: z.array(z.object({ // 相关链接数组（可选）
          label: z.string(), // 链接文本
          icon: z.string(), // 链接图标
          to: z.string(), // 链接地址
          target: z.string().optional(), // 打开方式（可选）
        })).optional()
      })
    }),
    // 更新日志集合配置
    update: defineCollection({
      type: 'page',
      source: 'update/*.md', // 匹配 update 目录下所有 markdown 文件
      schema: z.object({
        title: z.string(), // 版本标题
        description: z.string(), // 版本简介
        date: z.string(), // 发布日期字符串
        image: z.string().optional(), // 版本配图（可选）
        to: z.string().optional(), // 详情链接（可选）
        target: z.string().optional(), // 链接打开方式（可选）
        isMajor: z.boolean().optional(), // 是否为主要版本更新（可选）
        authors: z.array(z.object({ // 作者列表（可选）
          name: z.string(), // 作者姓名
          avatar: z.object({ // 作者头像信息
            src: z.string(), // 头像地址
            alt: z.string() // 头像替代文本
          })
        })).optional()
      })
    })
  }
})

