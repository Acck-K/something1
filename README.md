# Aicoke 的个人博客

基于 GitHub Pages 的静态个人博客，莫兰迪色系 + 磨砂玻璃按钮 + 幼圆字体。
纯静态，无需任何构建步骤，上传即可访问。

## 目录结构

```
web/                        ← 仓库根目录，下面这些文件要放在根目录
├── index.html              首页
├── articles.html           文章列表
├── about.html              关于
├── posts/
│   └── zhiyueliang.html    文章正文：纸月亮
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   └── main.js
├── images/
│   └── IMG_1466.JPG
├── .nojekyll               （空文件，告诉 GitHub 不要用 Jekyll 处理，必需）
└── README.md
```

---

## 部署方法一：网页拖拽上传（不用装 git，最省事）

1. 打开 https://github.com/new 新建一个仓库，例如取名 `blog`，选 **Public**，点 **Create repository**。

2. 在仓库页面点 **Add file → Upload files**。

3. 打开 `E:\treafiles\web` 文件夹，**全选里面的内容**
   （`index.html`、`articles.html`、`about.html`、`posts`、`css`、`js`、`images`、`.nojekyll`、`README.md`），
   一起拖进浏览器里的上传框。

   > ⚠️ **关键一步**：拖的是文件夹 **里面的内容**，不要把 `web` 文件夹本身拖进去。
   > 如果拖成 `web/index.html`，网站打开会是 404——因为 GitHub 只在**根目录**找 `index.html`。
   > 拖错的补救办法：进到 `web` 文件夹，把里面所有东西再拖一次到仓库根目录，然后删掉多余的 `web` 文件夹。

4. 拉到页面底部，点 **Commit changes**。

5. 进入仓库 **Settings → 左侧 Pages**：
   - **Source** 选 `Deploy from a branch`
   - **Branch** 选 `main`，目录选 `/ (root)`
   - 点 **Save**

6. 等 1~2 分钟刷新页面，顶部会出现绿色提示，访问地址是：

   ```
   https://<你的用户名>.github.io/<仓库名>/
   ```

   例如用户名 `aicoke`、仓库名 `blog` → `https://aicoke.github.io/blog/`

   > 如果仓库名恰好叫 `<你的用户名>.github.io`，地址就是 `https://<你的用户名>.github.io/`。

---

## 部署方法二：用 git 推送

```bash
cd E:/treafiles/web
git init
git add .
git commit -m "blog"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

推送完成后，同样在 **Settings → Pages** 里选 `main` + `/ (root)` 即可。

`git add .` 会自动带上 `.nojekyll`（隐藏文件），不用额外操作。

---

## 以后新增一篇文章

1. 复制 `posts/zhiyueliang.html`，改名为新文章的文件名（建议用英文或拼音，避免链接编码问题）；
2. 替换 `<title>`、`.article-title` 里的标题，以及 `.article-body` 里的正文段落；
3. 在 `articles.html`（也可同时在 `index.html` 的「最新文章」里）复制一个 `<li class="post-item">`，把 `href` 指向新文件；
4. 把新文件拖到仓库的 `posts/` 文件夹里，提交。

---

## 常见问题

| 现象 | 原因 | 解决 |
|---|---|---|
| 打开是 404 | 上传时多套了一层文件夹（如 `web/index.html`） | 把文件移到仓库根目录，或把 Pages 目录改成 `/docs` 之类对应位置 |
| 页面没样式（白底黑字） | `css/` 文件夹没上传，或大小写不一致 | 确认仓库里有 `css/styles.css`、`css/responsive.css` |
| 图片不显示 | `images/` 没上传，或文件名大小写不符 | GitHub 路径**区分大小写**，`IMG_1466.JPG` 不能写成 `img_1466.jpg` |
| 改了没生效 | 浏览器缓存 / Pages 还在构建 | 强制刷新（Ctrl+F5），或等 1~2 分钟 |
| 想自定义域名 | — | Settings → Pages → Custom domain |
