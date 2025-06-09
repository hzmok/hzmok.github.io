# Hzmook DevSpace

一个现代化的开发者个人网站，展示开发资源、项目经验和技术博客。

## 功能特点

- 🎨 现代化UI设计
- 📱 响应式布局，支持移动端
- 🚀 平滑滚动和动画效果
- 🎯 资源收藏展示
- 💡 项目经验分享
- 📝 技术博客系统

## 技术栈

- Vue.js 3
- CSS3 (变量、Flexbox、Grid)
- Font Awesome 图标
- 原生JavaScript

## 项目结构

```
src/
├── assets/
│   └── styles/
│       ├── variables.css    # CSS变量定义
│       └── global.css       # 全局样式
├── components/
│   ├── layout/
│   │   ├── Header.vue      # 页面头部组件
│   │   └── Footer.vue      # 页面底部组件
│   └── BackToTop.vue       # 返回顶部组件
├── utils/
│   ├── date.js             # 日期处理工具
│   ├── dom.js              # DOM操作工具
│   ├── storage.js          # 本地存储工具
│   ├── device.js           # 设备检测工具
│   └── performance.js      # 性能优化工具
├── App.vue                 # 主应用组件
├── main.js                 # 应用入口
└── index.html             # HTML模板
```

## 开发指南

1. 克隆项目
```bash
git clone [项目地址]
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 样式指南

- 使用CSS变量实现主题定制
- 采用BEM命名规范
- 响应式断点：
  - 移动端：< 768px
  - 平板：768px - 1024px
  - 桌面：> 1024px

## 组件说明

### Header组件
- 响应式导航栏
- 移动端菜单切换
- 平滑滚动定位

### Footer组件
- 社交媒体链接
- 版权信息
- 快速导航

### BackToTop组件
- 滚动监听
- 平滑返回顶部

## 工具函数

### date.js
- 日期格式化
- 时间计算

### dom.js
- 复制到剪贴板
- 生成唯一ID

### storage.js
- 本地存储封装
- 数据持久化

### device.js
- 设备类型检测
- 浏览器特性检测

### performance.js
- 防抖函数
- 节流函数

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License

## 作者

[您的名字]

## 更新日志

### v1.0.0
- 初始版本发布
- 基础功能实现
- 响应式布局支持 