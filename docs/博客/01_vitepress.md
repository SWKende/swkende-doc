# 📔GitHub + VitePress，或许是你做笔记的新路子

::: info 前言
为什么我开始转入 VitePress，主要是因为好玩，一直想搭建一个个人博客，稍微了解了一下 VitePress 就狠狠的爱上了，实在是太简便太舒服了
<br>
还能结合 GitHub，部署个人网站，入门门槛极低
<br>
身为~~熟练掌握~~Vue 的搬砖员，只要你愿意，你能玩出花(PS:真的可以玩出花，[你看](https://vitepress.yiov.top/))
<br>
主要介绍搭建工作以及部分配置，本篇不会着重介绍创建项目以及项目结构
:::

<br>

::: tip 参考链接（站在巨人的肩膀上才能看的更远）
[VitePress 快速上手中文教程](https://vitepress.yiov.top/) —— 实在是太全面了 😍<br>
[AlbertZhang 的文档站](https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html) —— 原本有 b 站视频的，截至当前发现下架了 😕<br>
[GitHub Actions 工作流自动化的入门核心](https://www.bilibili.com/video/BV1aT421y7Ar/?vd_source=e36103031144dca10ac67f24e861ac18) —— 嘿嘿嘿我的蛋老师 😚<br>
[Markdown 语法](https://markdown.com.cn) —— 忘了语法就看看 🤨<br>
[Bilibili 技术胖](https://www.bilibili.com/video/BV1bC411V7du/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=e36103031144dca10ac67f24e861ac18) —— 他停更了，催更 😂
:::

### 创建 VitePress

::: code-group

```sh [pnpm]
pnpm add -D vitepress
```

```sh [yarn]
yarn add -D vitepress
```

```sh [npm]
npm add -D vitepress
```

:::

### 部署到 GitHub

上传 github 前，先在项目根目录下创建`.github/workflows/deploy.yml`文件
::: tip 提示
在此之前，可以先看看[GitHub Actions 工作流自动化的入门核心](https://www.bilibili.com/video/BV1aT421y7Ar/?vd_source=e36103031144dca10ac67f24e861ac18)这个视频，有助于理解接下来的代码
<br>
当然，我是从vitepress官网直接复制的，嘿嘿嘿
:::

```yaml
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
