---
category: 入门指南
title: Docker安装
navigation:
  title: Docker安装
  icon: i-lucide-box
description: 通过Docker一键部署 必定AI
---

## Docker方式安装

通过Docker一键部署 必定AI

## 环境准备

### 最低配置要求

CPU：≥2核（建议4核）
内存：≥4GB RAM（建议8GB）
存储：≥5GB 空闲空间

在使用Docker部署必定AI之前，请确保您的系统已经安装了以下软件：

- Docker (版本 20.10.0 或更高)
- Docker Compose (正常情况下已随Docker一起安装)

您可以通过以下命令检查它们是否已正确安装：

::code-group
```bash [检查 Docker 版本]
docker --version
```

```bash [检查 Docker Compose 版本]
docker compose version
```
::

## 部署步骤

### 1. 获取代码

::code-group
```bash [Github]
git clone https://github.com/BidingCC/必定AI.git ./必定AI
```

```bash [Gitee]
git clone https://gitee.com/BidingCC/必定AI.git ./必定AI
```
::

### 2. 配置环境变量

在运行 Docker 命令前，首先需要配置环境变量。请确保项目根目录下存在 .env 文件。您可以从示例文件复制并修改：

::code-group
```bash [进入项目根目录]
cd 必定AI
```

```bash [复制环境变量配置文件]
cp .env.example .env
```
::

然后根据您的需求编辑 .env 文件。如果本地部署且无特殊需求，则无需修改，如果需要部署到线上环境，则需要配置前端接口域名 APP_DOMAIN。

### 3. 启动服务

完成环境变量配置后，在项目根目录执行以下命令启动所有服务：

::code-group
```bash [启动服务]
docker compose up -d
```
::

拉取完所有镜像之后，需要5~10分钟等待项目构建完成（取决于设备性能和网络环境），具体进度可以查看nodejs服务日志。

当日志出现 ➜ Local: http://localhost:4090⁠ 等字样，则表示项目构建完成。

本地部署访问地址：http://localhost:4090/install 进行站点初始化配置