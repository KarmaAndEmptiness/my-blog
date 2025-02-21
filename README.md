# My Blog

一个使用 Vue 2 构建的个人博客系统，支持 Markdown 文章编写、代码高亮、目录导航等功能。

## 功能特点

- 💡 基于 Vue 2 + Vue Router + Vuex 构建
- 📝 支持 Markdown 文章编写
- 🎨 代码高亮显示（使用 highlight.js）
- 📑 文章目录自动生成（使用 tocbot）
- 📱 响应式设计，支持移动端访问
- 🏷️ 文章标签分类
- 📅 文章归档功能
- 🔍 文章搜索功能
- 🔄 异步组件加载
- 💫 平滑的加载动画

## 技术栈

- Vue 2.7.16
- Vue Router 3.x
- Vuex 2.x
- Webpack 4.47.0
- Babel 7.24.4
- Sass
- Bootstrap
- highlight.js
- marked
- tocbot
- Mock.js（用于开发环境数据模拟）

## 开发环境要求

- Node.js >= 14
- pnpm >= 6

## 安装和运行

1. 克隆项目
```bash
git clone <repository-url>
cd my-blog
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm serve
```

4. 构建生产版本
```bash
pnpm build
```

## 项目结构

```
my-blog/
├── public/              # 静态资源
│   ├── index.html      # HTML 模板
│   └── favicon.ico     # 网站图标
├── src/                # 源代码
│   ├── assets/         # 资源文件
│   ├── components/     # 公共组件
│   ├── router/         # 路由配置
│   ├── store/          # Vuex 状态管理
│   ├── styles/         # 样式文件
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   └── index.js        # 入口文件
├── mock/               # Mock 数据
├── webpack.config.js   # Webpack 配置
└── package.json        # 项目配置文件
```

## 主要功能说明

### 文章展示
- 支持 Markdown 格式
- 自动生成文章目录
- 代码块语法高亮
- 响应式布局

### 导航功能
- 文章列表
- 标签分类
- 归档时间线
- 关于页面
- 友情链接

### 性能优化
- 组件懒加载
- 代码分割
- 样式优化
- 图片资源优化

## 部署说明

项目默认配置为部署在 `/blog/` 路径下，如需修改可在以下文件中更改：

1. `webpack.config.js` 中的 `publicPath`
2. `router/index.js` 中的 `base_url`

## 开发注意事项

1. 开发环境使用 Mock.js 模拟数据，生产环境需要配置实际的后端 API
2. 文章内容建议放在 `mock/data/articles` 目录下
3. 开发时注意保持代码风格一致
4. 提交代码前请确保没有 ESLint 错误

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建一个 Pull Request

## 许可证

[ISC License](LICENSE)

## 作者

halo 