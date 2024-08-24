# VitePress 优化

::: tip 参考链接
[VitePress 快速上手中文教程](https://vitepress.yiov.top/) —— 主要就是参考着人家做的<br>
以下优化是我个人觉得喜欢的，上面这个链接是真的很全面，你肯定能找到自己喜欢的配置<br>

[Demo](https://swkende.github.io/vitepress-doc/) —— 这是文章中的 demo
:::

### 自动侧边栏

之前用的是 `node:fs` 模块的方式自动生成侧边栏的，但是使用体验感觉一般般 ~~应该是我不会用~~<br>
现在用的是 `vitepress-sidebar` 插件来自动生成，当创建目录的时候，需要 `重启` 一下就会自动生成<br>
首先先安装插件

```sh
pnpm add -D vitepress-sidebar
```

::: info 代码部分
在 `.vitepress/configs.mts` 添加如下配置，具体配置项可以到作者[这里查看](https://vitepress-sidebar.jooy2.com/guide/api)

```ts{3,5,6,7,8,9,10,11,18,20}
// .vitepress/configs.mts
import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";  // [!code focus]

const vitepressSidebarOptions = {  // [!code focus]
  documentRootPath: "/docs",  // [!code focus]
  collapsed: false, //折叠组关闭   // [!code focus]
  collapseDepth: 2, //折叠组2级菜单   // [!code focus]
  removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用  // [!code focus]
  prefixSeparator: "_", //删除前缀的符号  // [!code focus]
};  // [!code focus]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-doc/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "docs",//等下需要新建一个目录，统一放这里  // [!code focus]
  themeConfig: {
    sidebar: generateSidebar(vitepressSidebarOptions),  // [!code focus]
    ...
```

:::

::: info 创建目录以及准备文件
接下来需要新建 docs 目录，并且将之前的文件移动到里面，如果你也是和我一步一步新建项目过来的<br>
那么这个时候需要将 `public`、`api-examples.md`、`markdown-examples.md`、`index.md`移动到 `docs` 目录下<br>
并且像我这样创建文件夹并归纳一下

![目录结构](/VitePress/03/目录结构.png)

到这一步以及基本完成了，右上角的菜单指向还需要稍微修改一下

```ts{12,13,14,15,16}
// .vitepress/configs.mts
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-doc/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "docs",//等下需要新建一个目录，统一放这里
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },// [!code focus]
      { text: 'Examples', link: '/01_官方示例文件/markdown-examples', },// [!code focus]
      { text: '其他', link: '/02_自己加的文件/01_测试图片', }// [!code focus]
    ],
    sidebar: generateSidebar(vitepressSidebarOptions),
  }
})

```

<br>

:::

::: tip 效果

这一切完成之后，重启项目，右上角点击其他，你就能发现自己的菜单自动生成了<br>
不用再操心菜单的事情了

![自动生成侧边栏](/VitePress/03/自动生成侧边栏.png)
:::

### 图片缩放

这个功能其实蛮实用的，原本的 vitepress 的图片点击了根本不能放大，有时候看图中的小字看不清，用了这个插件，就能缩放了

```sh
pnpm add -D medium-zoom

```

::: info 代码部分
在 `.vitepress/theme/index.ts` 添加以下代码

```ts{4,5,6,10,11,12,13,14,15,16,17,18,19,20,21,22,23}
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import mediumZoom from 'medium-zoom';// [!code focus]
import { onMounted, watch, nextTick } from 'vue';// [!code focus]
import { useRoute } from 'vitepress';// [!code focus]

export default {
    extends: DefaultTheme,
    setup() {// [!code focus]
      const route = useRoute();// [!code focus]
      const initZoom = () => {// [!code focus]
        // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认 // [!code focus]
        mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能// [!code focus]
      };// [!code focus]
      onMounted(() => {// [!code focus]
        initZoom(); // [!code focus]
      }); // [!code focus]
      watch(  // [!code focus]
        () => route.path,// [!code focus]
        () => nextTick(() => initZoom())// [!code focus]
      );// [!code focus]
    },// [!code focus]
}
```

然后还需要到 `.vitepress/theme/style/var.css` 中添加以下样式，防止放大后，背后没有遮盖<br>

```css
/* .vitepress/theme/style/var.css */
.medium-zoom-overlay {
  z-index: 30;
}
.medium-zoom-image {
  z-index: 9999 !important; /* 给的值是21，但是实测盖不住，直接999 */
}
```

:::

::: tip 效果
[Demo](https://swkende.github.io/vitepress-doc/02_自己加的文件/01_测试图片.html)这是文章中的 demo，你也可以点击之前的图片，你会发现也有缩放效果
:::
