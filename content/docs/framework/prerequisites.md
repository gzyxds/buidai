---
category: 进阶教程
title: 前置准备
description: 本地运行 BuildingAI 之前的环境准备指南，包括 Docker、NodeJS 和 pnpm 的安装。
navigation:
  title: 前置准备
  icon: i-lucide-database
---

为了更好的开发体验，我们提供了一些工具配置、项目说明，以便于您更好的开发。

本地运行 BuildingAI 之前，你首先需要安装一些开发环境依赖项：

- Docker
- NodeJS
- pnpm

## 环境准备

### Docker

#### MacOS

- **Download for Mac – Apple Silicon**

如果是 Intel 芯片的 Mac 则点击下面的链接下载：

- **Download for Mac – Intel Chip**

#### Windows

- **Download for Windows – AMD64**
- **Download for Windows – ARM64**

下载完成之后打开安装包，按照安装指引进行安装。安装完成之后，可以打开终端，输入下列命令并回车运行：

```bash
docker --version
# 安装成功则会打印如下类似版本号信息
# Docker version 2x.x.x, build xxxxxxx
```

### NodeJS

#### 通过 nvm 安装和管理（推荐）

> 使用 nvm 安装和管理 Node.js 之前，请先卸载掉所有已安装的 Node.js！

**MacOS**

下载并安装 nvm：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

代替重启 shell：

```bash
\. "$HOME/.nvm/nvm.sh"
```

下载并安装 Node.js：

```bash
nvm install 22
```

验证 Node.js 版本：

```bash
node -v # Should print "v22.xx.x".
```

验证 npm 版本：

```bash
npm -v # Should print "11.x.x".
```

**Windows**

下载地址

下载完成之后打开安装包，按照安装指引进行安装。安装时，切勿修改默认安装路径，否则可能会导致 nvm 无法正常工作。

安装完成之后，可以打开终端，输入下列命令并回车运行：

```bash
nvm --version
# 安装成功则会打印如下类似版本号信息
# 1.2.x
```

下载并安装 Node.js：

```bash
nvm install 22
```

验证 Node.js 版本：

```bash
node -v # Should print "v22.xx.x".
```

验证 npm 版本：

```bash
npm -v # Should print "11.x.x".
```

#### 通过官方安装包安装（v22.21.1）

**MacOS**

- Download for Mac

**Windows**

- Download for Windows – x64
- Download for Windows – x86
- Download for Windows – ARM64

下载完成后，打开安装包，按照安装指引进行安装。安装完成之后，可以打开终端，输入下列命令并回车运行：

```bash
node -v # Should print "v22.21.1".
npm -v # Should print "11.x.x".
```

更多安装方式可以通过 Node.js 官网查看。

### pnpm

安装完 Node.js 之后，可以通过 npm 安装 pnpm：

```bash
npm install -g pnpm
```

验证安装：

```bash
pnpm --version
```

如果输出版本号，则说明安装成功。

---

🎉 恭喜你，到此为止所有环境已经准备完毕！
