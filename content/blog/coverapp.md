---
title: '大字报·Pro - Cover Generator'
description: '🎨 复古胶片风格 | 📱 公众号封面生成器 | 🖥️ 跨平台桌面应用'
date: 2025-12-18
category: '开源项目'
tags: ['React', 'Tauri', 'Vite', 'TailwindCSS', '设计工具']
image: 'https://nuxt.com/assets/design-kit/icon-green.png'
---

# 📽️ 大字报·Pro - Cover Generator

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Tauri-2.9-FFC131?style=flat-square&logo=tauri" alt="Tauri">
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss" alt="TailwindCSS">
</p>

<p align="center">
  <strong>🎨 复古胶片风格 | 📱 公众号封面生成器 | 🖥️ 跨平台桌面应用</strong>
</p>

---

## ✨ 特性亮点

- **胶片颗粒效果** - 使用 Canvas 生成高斯噪点，叠加 Overlay 混合模式，还原真实胶片质感
- **16+ 古典字体** - 内置汇文明朝、京华老宋、霞鹜文楷等多款精选中文古风字体
- **拖拽式排版** - 主标题、副标题、作者署名独立拖拽、缩放、行高调整
- **公众号尺寸适配** - 预设公众号首图 (2.35:1)、次图 (1:1)、拼接图等常用比例
- **高清导出** - 3x 分辨率渲染，基于 SVG 的 html-to-image，字体无损导出
- **渐变背景** - 支持纯色与径向渐变背景，6 款精心调配色彩预设
- **跨平台** - 基于 Tauri 2.0，支持 macOS / Windows / Linux

---

## 📸 预览

![Cover Generator Preview](./docs/preview.png)

---

## 🚀 快速开始

### 前置要求

- [Node.js](https://nodejs.org/) >= 18.x
- [Rust](https://rustup.rs/) (若需构建桌面应用)

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/zjp1997720/cover-app.git
cd cover-app

# 进入桌面应用目录
cd cover-app-tauri

# 安装依赖
npm install

# 启动开发服务器 (仅 Web)
npm run dev

# 启动 Tauri 桌面应用
npm run tauri dev
```

### 构建生产版本

```bash
# 构建 Web 版本
npm run build

# 构建桌面应用 (macOS DMG)
npm run tauri build
```

---

## 📁 项目结构

```
cover-app/
├── cover-app-tauri/          # 🖥️ Tauri 桌面应用
│   ├── src/                  # React 源代码
│   │   ├── App.jsx           # 主组件 - 封面生成器核心逻辑
│   │   ├── assets/fonts/     # 本地字体文件 (16 款)
│   │   └── index.css         # 全局样式 & @font-face
│   ├── src-tauri/            # Rust 后端
│   │   ├── src/              # Tauri 核心代码
│   │   ├── icons/            # 应用图标
│   │   └── tauri.conf.json   # Tauri 配置
│   └── package.json
├── cover-app/                # 📱 纯 Web 版本 (早期开发)
├── CoverGenerator.jsx        # 原始单文件组件 (参考)
└── PROJECT_HANDOVER.md       # 项目交接文档
```

---

## 🎨 内置字体

| 分类 | 字体名称 |
|------|---------|
| **明朝/宋体** | 汇文明朝、京华老宋、香萃刻宋、古越轩粗明、造字工房朗宋、方正颜宋 |
| **楷书** | 霞鹜文楷、江西拙楷、字酷堂清楷、方正苏新诗柳楷、王汉宗颜楷 |
| **书法** | 黄庭坚书法、禹卫书法行书 |
| **艺术** | 新蒂雪山体、遥寄相思 |
| **现代** | 思源宋体、思源黑体、等宽字体 |

---

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.2 | 前端框架 |
| Tauri | 2.9 | 跨平台桌面应用 |
| Vite | 7.2 | 构建工具 |
| TailwindCSS | 3.4 | 样式框架 |
| html-to-image | 1.11 | 高清图片导出 |
| lucide-react | 0.555 | 图标库 |

---

## 📝 使用指南

1. **编辑文本** - 在左侧控制面板输入主标题、副标题和作者信息
2. **选择字体** - 从 16+ 款古典字体中选择合适的风格
3. **调整布局** - 直接拖拽画布中的元素，调整位置和大小
4. **设置背景** - 选择纯色或渐变背景，开启/关闭胶片颗粒效果
5. **选择尺寸** - 根据需求选择公众号首图、次图或其他比例
6. **导出图片** - 点击"下载高清封面"按钮导出 3x 高清 PNG

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

---

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源许可证。

---

## 🙏 致谢

- 感谢所有开源字体作者的无私贡献
- 灵感来源于复古胶片摄影与古籍印刷美学

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/zjp1997720">zjp1997720</a>
</p>
