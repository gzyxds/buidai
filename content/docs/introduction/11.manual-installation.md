---
category: 入门指南
title: 手动安装
navigation:
  title: 手动安装
  icon: i-lucide-terminal
description: 通过手动方式部署 BuildingAI
---

## 手动安装

通过手动安装 BuildingAI

## 环境准备

### 依赖要求

- NodeJS ≥22 [官网下载地址](https://nodejs.org/)
- PostgreSQL ≥15 [官网下载地址](https://www.postgresql.org/)
- Redis ≥6.2 [官网下载地址](https://redis.io/)

### 验证安装

安装好之后验证是否安装成功：

::code-group
```bash [验证 NodeJS 版本]
node -v
```

```bash [验证 npm 版本]
npm -v
```

```bash [验证 PostgreSQL 版本]
psql --version
```

```bash [验证 Redis 版本]
redis-cli --version
```
::

## 部署步骤

### 1. 拉取代码到本地

::code-group
```bash [Gitee仓库]
git clone https://gitee.com/BidingCC/BuildingAI.git
```

```bash [Github仓库]
git clone https://github.com/BidingCC/BuildingAI.git
```
::

### 2. 安装依赖

如果网络慢，可以先配置淘宝镜像：

::code-group
```bash [配置淘宝镜像]
npm config set registry https://registry.npmmirror.com
```

```bash [安装 pnpm]
npm install -g pnpm
```

```bash [进入项目目录]
cd BuildingAI
```

```bash [安装依赖]
pnpm install
```
::

### 3. 配置环境变量

::code-group
```bash [复制环境变量配置文件]
cp .env.example .env
```
::

根据你的实际环境配置，编辑 .env 文件，配置数据库连接、Redis连接等环境变量配置。

```env
# Base
# 项目名称
APP_NAME=BuildingAI
# if you deploy to production, please set this to real url
# 项目域名
APP_DOMAIN=
# Server
# 后端服务端口
SERVER_PORT=4090
# 是否启用 CORS
SERVER_CORS_ENABLED=true
# CORS 允许的来源
SERVER_CORS_ORIGIN=*
# 是否显示详细的错误信息
SERVER_SHOW_DETAILED_ERRORS=false
# 是否是演示环境
SERVER_IS_DEMO_ENV=false
# PM2
# PM2 应用名称
PM2_APP_NAME=buildingai
# PM2 实例数量
PM2_INSTANCES=1
# PM2 执行模式
PM2_EXEC_MODE=cluster
# PM2 最大内存
PM2_MAX_MEMORY=1G
# PM2 是否监控
PM2_WATCH=false
# PM2 日志目录
PM2_LOG_DIR=../../logs/pm2
# PM2 自动重启
PM2_AUTORESTART=true
# PM2 日志日期格式
PM2_LOG_DATE_FORMAT=YYYY-MM-DD HH:mm:ss Z
# JWT
# JWT 密钥
JWT_SECRET=buildingai
# JWT 过期时间
JWT_EXPIRES_IN=1d
# Database
# 数据库类型
DB_TYPE=postgres
# 数据库主机
DB_HOST=localhost
# 数据库端口
DB_PORT=5432
# 数据库用户名
DB_USERNAME=postgres
# 数据库密码
DB_PASSWORD=postgres
# 数据库名称
DB_DATABASE=buildingai
# 自动同步数据库（生产环境请勿开启）
DB_SYNCHRONIZE=false
# 自动同步数据库（开发环境）
DB_DEV_SYNCHRONIZE=true
# 是否记录数据库日志
DB_LOGGING=true
# Redis
# Redis 主机
REDIS_HOST=localhost
# Redis 端口
REDIS_PORT=6379
# Redis 用户名
REDIS_USERNAME=
# Redis 密码
REDIS_PASSWORD=
# Redis 数据库
REDIS_DB=0
# Redis 最大重连次数
REDIS_MAX_RECONNECT_ATTEMPTS=5
# Redis 重连延迟
REDIS_RECONNECT_DELAY=3000
# Cache
# 缓存过期时间
CACHE_TTL=86400
# 缓存最大项数
CACHE_MAX_ITEMS=1000
# Logs
# "log" | "error" | "warn" | "debug" | "verbose" | "fatal"
# 日志级别
LOG_LEVELS=error,warn,debug,fatal
# 写入日志级别
LOG_WRITE_LEVELS=error,warn,debug,fatal,log
# 是否写入日志
LOG_TO_FILE=true
# 是否打印数据库结构
LOG_DATABASE_SCHEMA=false
# 日志清理间隔
LOG_CLEAN_INTERVAL=3
# Web
# 开发环境前端地址
VITE_DEVELOP_APP_BASE_URL=http://localhost:4090
# if you deploy to production, please set this to real url
VITE_PRODUCTION_APP_BASE_URL=
# 前端 API 前缀
VITE_APP_WEB_API_PREFIX=/api
# 后端 API 前缀
VITE_APP_CONSOLE_API_PREFIX=/consoleapi
# Docker
# NPM 镜像地址
NPM_REGISTRY_URL=https://registry.npmmirror.com
# Docker 容器后缀
DOCKER_CONTAINER_SUFFIX=
# Docker 内存限制
DOCKER_MEMORY_LIMIT=6144M
# Docker CPU 限制
DOCKER_CPU_LIMIT=2.0
# Docker 内存保留
DOCKER_MEMORY_RESERVATION=512M
# This option will make the database and Redis ports in the Docker container fixed.
# 固定数据库端口
POSTGRES_EXTERNAL_PORT=
# 固定 Redis 端口
REDIS_EXTERNAL_PORT=
```

### 4. 启动服务

数据库实体会自动同步，无需单独操作

#### 一键启动所有服务

::code-group
```bash [一键启动]
cd /BuildingAI
pnpm start
```
::

#### 单独启动服务

::code-group
```bash [单独启动server]
cd /BuildingAI/packages/api
pnpm dev
```

```bash [单独启动web]
cd /BuildingAI/packages/web/buildingai-ui
pnpm dev
```
::

## 访问地址

本地部署访问地址：http://localhost:4090