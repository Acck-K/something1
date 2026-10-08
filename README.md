# Aicoke 的个人博客

这是一个基于 GitHub Pages 搭建的静态个人博客，使用莫兰迪色系、磨砂玻璃风格按钮与幼圆字体设计。

## 目录结构

```
web/
├── index.html              # 首页
├── articles.html           # 文章列表
├── about.html              # 关于
├── posts/
│   └── zhiyueliang.html    # 文章正文：纸月亮
├── css/
│   ├── styles.css          # 主样式
│   └── responsive.css      # 移动端适配
├── js/
│   └── main.js             # 导航高亮等交互
└── images/
    └── IMG_1466.JPG        # 博客配图
```

## 页面导航

顶部导航三个按钮相互跳转，当前页面会自动高亮：

- **首页** `index.html` — 欢迎语 + 最新文章入口
- **文章** `articles.html` — 文章列表，点击进入正文
- **关于** `about.html` — 个人简介

所有页面使用相对路径，放在 GitHub Pages 的用户站或项目子目录下都能正常访问。

## 新增一篇文章

1. 复制 `posts/zhiyueliang.html`，改名为新文章的文件名；
2. 替换 `<title>`、`.article-title` 与 `.article-body` 里的正文段落；
3. 在 `articles.html`（以及需要时 `index.html`）的 `.post-list` 里复制一个 `<li>`，把链接指向新文件。

## 部署到 GitHub Pages

1. 把本目录内容推送到仓库：

   ```bash
   git init
   git add .
   git commit -m "blog"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```

2. 打开仓库 **Settings → Pages**，Source 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`，保存；
3. 稍等片刻，访问 `https://<你的用户名>.github.io/<仓库名>/` 即可。

> 如果仓库名就是 `<你的用户名>.github.io`，访问地址则为 `https://<你的用户名>.github.io/`。
