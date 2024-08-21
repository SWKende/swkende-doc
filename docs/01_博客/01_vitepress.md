# 📔GitHub + VitePress，或许是你做笔记的新路子

::: info 前言
为什么我开始转入 VitePress，主要是因为好玩，一直想搭建一个个人博客，稍微了解了一下 VitePress 就狠狠的爱上了，实在是太简便太舒服了
<br>
还能结合 GitHub，部署个人网站，入门门槛极低
<br>
身为 ~~熟练掌握~~ Vue 的搬砖工，只要你愿意，你也能玩出花（PS：真的可以玩出花，[你看](https://vitepress.yiov.top/)）
<br>
本篇主要介绍搭建工作以及部分配置，不会着重介绍创建项目以及项目结构
:::

::: tip 参考链接（站在巨人的肩膀上才能看的更远）
[VitePress 快速上手中文教程](https://vitepress.yiov.top/) —— 实在是太全面了 😍<br>
[AlbertZhang 的文档站](https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html) —— 原本有 b 站视频的，截至当前发现下架了 😕<br>
[GitHub Actions 工作流自动化的入门核心](https://www.bilibili.com/video/BV1aT421y7Ar/?vd_source=e36103031144dca10ac67f24e861ac18) —— 嘿嘿嘿我的蛋老师 😚<br>
[Markdown 语法](https://markdown.com.cn) —— 忘了语法就看看 🤨<br>
[Bilibili 技术胖](https://www.bilibili.com/video/BV1bC411V7du/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=e36103031144dca10ac67f24e861ac18) —— 他停更了，催更 😂
:::

### 创建 VitePress

1. 进入你的工作目录，创建一个文件夹，比如 `vitepress-doc`
2. 进入 `vitepress-doc`

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

3. 初始化向导

::: code-group

```sh [pnpm]
pnpm vitepress init
```

```sh [yarn]
yarn vitepress init
```

```sh [npm]
npx vitepress init
```

:::
此时你的目录应该是这样的，这里少加了`.gitignore`，记得手动加上
::: details .gitignore

```
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

:::
![初始化vitepress](/01_vitepress/初始化vitepress.png)

### 部署到 GitHub

上传 github 前，先在项目根目录下创建`.github/workflows/deploy.yml`文件
::: tip 提示
在此之前，可以先看看[GitHub Actions 工作流自动化的入门核心](https://www.bilibili.com/video/BV1aT421y7Ar/?vd_source=e36103031144dca10ac67f24e861ac18)这个视频，有助于理解接下来的代码
<br>
官网中也有相关配置，这里是修改后的，以便于直接复制就能部署
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
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3 # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: |
          pnpm docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: .vitepress/dist

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
        uses: actions/deploy-pages@v2
```

::: danger 此时会出现构建失败
编辑好`.github/workflows/deploy.yml`后，就可以直接上传的到 GitHub 当中啦，但是这个时候肯定会构建失败，因为我们还没有配置 Actions
:::
![Actions未设置](/01_vitepress/Actions未设置.png)

接下来就需要配置 Actions 了，在`Settting` -> `Pages` -> `Build and deployment` -> `Branch` -> `选择main` -> `Save`<br>

![设置Actions](/01_vitepress/设置Actions.png)

接下来等待工作流跑完，这里需要等个几分钟.....<br>

当我们在看到 `Code` 中看到绿点，就说明完成了，让我来打开看看[https://swkende.github.io/vitepress-doc/](https://swkende.github.io/vitepress-doc/)，这里对应你的仓库链接，需要修改一下url

![css丢失情况](/01_vitepress/css丢失情况.png)
::: danger 敲多麻袋
我样式呢？？？
:::

咳咳，原来是我没配置 base，导致了打包后丢失 css 样式，小问题，到 `.vitepress` -> `config.mjs` 加一个<br>
PS：[这里是我写的文档](https://swkende.github.io/swkende-doc/01_博客/01_vitepress.html)，用 vitepress 展示代码还有聚焦效果，简直太帅了

```js{4}
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/vitepress-doc/",// [!code focus]
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    ...
```

OK，再次上传代码，这次肯定没问题了<br>
等待几分钟，刷新页面，然后大功告成！

![部署后正常情况](/01_vitepress/部署后正常情况.png)

::: tip 最后
当然这里这是简单的说明如何部署，还没介绍怎么配置，怎么美化之类的，修行之路靠个人，而如今，<strong>你已经在道路上了</strong><br>
[Demo 文档站](https://swkende.github.io/vitepress-doc/) —— 文章中的示例 DEMO<br>
[SWKende 的文档站](https://swkende.github.io/swkende-doc/) —— 我个人的文档站，还在持续更新中
:::
