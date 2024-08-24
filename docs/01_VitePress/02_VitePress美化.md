# VitePress美化

::: tip 参考链接
[VitePress 快速上手中文教程](https://vitepress.yiov.top/) —— 主要就是参考着人家做的<br>
以下优化是我个人觉得喜欢的，上面这个链接是真的很全面，你肯定能找到自己喜欢的配置<br>

[Demo](https://swkende.github.io/vitepress-doc/) —— 这是文章中的 demo
:::

### 准备工作

首先我们要新建文件和目录，目录结构参考这个图片，内容我们先保留为空

![新建目录结构](/VitePress/02/新建目录结构.png)

> 接下来复制粘贴以下内容到对应的文件中，注意文件名

::: code-group

```css [var.css]
/* var.css */
:root {
  --vp-c-brand-1: #18794e;
  --vp-c-brand-2: #299764;
  --vp-c-brand-3: #30a46c;
}

.dark {
  --vp-c-brand-1: #3dd68c;
  --vp-c-brand-2: #30a46c;
  --vp-c-brand-3: #298459;
}
/* 以前的vp-c-brand已弃用 */

:root {
  /* hero标题渐变色 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    120deg,
    #bd34fe,
    #41d1ff
  );

  /*hero logo背景渐变色 */
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #bd34fe 50%,
    #47caff 50%
  );
  --vp-home-hero-image-filter: blur(40px);
}

/* 也可自行单独修改brand按钮 */
/* :root {
  --vp-button-brand-border: #F6CEEC;
  --vp-button-brand-text: #F6CEEC;
  --vp-button-brand-bg: #D939CD;

  --vp-button-brand-hover-border: #F6CEEC;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-hover-bg: #D939CD;

  --vp-button-brand-active-border: #F6CEEC;
} */
```

```css [index.css]
/* index.css */
@import "./var.css";
```

```ts [index.ts]
import DefaultTheme from "vitepress/theme";
import "./style/index.css"; //引入自定义的样式

export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
};
```

:::

::: tip 准备工作完成后
当你做完以上步骤后，你会发现你的 `主页` 应该发生了变化，变得好看了<br>
如果你是懂 css 样式的话，这一步开始你就已经可以做一些自己喜欢的优化了<br>
如果看不懂没事，一步一步复制也能达到还不错的效果<br>
`我就是复制别人的，后期有空再修改成自己喜欢的颜色，嘿嘿嘿`
:::

![美化后的主页不带图片](/VitePress/02/美化后的主页不带图片.png)

::: danger 补充首页图片
到这一步其实还少了一个地方，就是首页的图片，图片背景也有一个渐变，我们需要自行找一个图片，然后在根目录下创建一个 `public` 文件夹，然后将想要的图片放进去，就像是这样

![创建public](/VitePress/02/创建public.png)

然后在 `index.md` 中填入以下代码

```md{5,6,7}
hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: My great project tagline
  image: // [!code focus]
    src: /home-icon.png // [!code focus]
    alt: 背景图 // [!code focus]
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
```

刷新一下，是不是一下子就生动多了

![美化后的主页带图片](/VitePress/02/美化后的主页带图片.png)

:::

至此前期准备工作就算是完成了

### Badge 颜色

::: tip 代码部分
之前有人提到我的这个颜色怎么弄的，其实就是在 `var.css` 加了一些样式

::: code-group

```css [var.css]
/* 提示框背景颜色 */
:root {
  --vp-custom-block-tip-bg: var(--vp-c-green-soft);
}

/* 提示框 */
.custom-block.tip {
  border-color: var(--vp-c-green-2);
}

/* 警告框 */
.custom-block.warning {
  /* border-color: #d97706; */
  border-color: var(--vp-c-yellow-2);
}

/* 危险框 */
.custom-block.danger {
  /* border-color: #f43f5e; */
  border-color: var(--vp-c-red-2);
}
```

:::

::: info 效果
再看看你的 badge，是不是漂亮多了，当然你也可以继续优化 `Info` 和 `Details`

![美化Badge](/VitePress/02/美化Badge.png)
:::

### 毛玻璃

::: tip 代码部分
在 `theme/style` 目录下创建一个 `blur.css` 然后复制以下代码进去<br>
然后再到 `index.css` 引入

::: code-group

```css [blur.css]
/* .vitepress/theme/style/blur.css */
:root {
  /* 首页导航 */
  .VPNavBar {
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(10px);
  }

  /* 文档页导航两侧 */
  .VPNavBar:not(.home) {
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(10px);
  }

  @media (min-width: 960px) {
    /* 文档页导航两侧 */
    .VPNavBar:not(.home) {
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(10px);
    }

    /* 首页下滑后导航两侧 */
    .VPNavBar:not(.has-sidebar):not(.home.top) {
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(10px);
    }
  }

  @media (min-width: 960px) {
    /* 文档页导航中间 */
    .VPNavBar:not(.home.top) .content-body {
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(10px);
    }

    /* 首页下滑后导航中间 */
    .VPNavBar:not(.has-sidebar):not(.home.top) .content-body {
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(10px);
    }
  }

  /* 分割线 */

  @media (min-width: 960px) {
    /* 文档页分割线 */
    .VPNavBar:not(.home.top) .divider-line {
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(10px);
    }

    /* 首页分割线 */
    .VPNavBar:not(.has-sidebar):not(.home.top) .divider {
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(10px);
    }
  }

  /* 搜索框 VPNavBarSearchButton.vue */
  .DocSearch-Button {
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(10px);
  }

  /* 移动端大纲栏 */
  .VPLocalNav {
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(10px);
    /* 隐藏分割线 */
    /* border-bottom: 5px solid var(--vp-c-gutter); */
    border-bottom: 0px;
  }
}
```

```css{3} [index.css]
/* index.css */
@import "./var.css";
@import "./blur.css";
```

:::

::: info 效果
然后你就能获得类似以下的效果，如果是暗色模式会更加适合哦

![毛玻璃特效](/VitePress/02/毛玻璃特效.png)
:::

### 不蒜子浏览量插件

你们应该注意到了我的首页有个浏览量的插件，这个是下载了 `不蒜子` 插件并做了一个封装实现的<br>
我们先下载插件

```sh
pnpm add -D busuanzi.pure.js
```

::: tip 代码部分
接下来就要封装一下，在 `theme/components` 中创建 `DataPanel.vue` 组件<br>
其中 `heart.gif` 这个图片可以自行替换，我就随便找了一个有意思的图片贴上去了

::: code-group

```vue [DataPanel.vue]
<script setup lang="ts"></script>

<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <span class="text">
          本站总访问量
          <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
        </span>
        <img src="./heart.gif" alt="heart" width="100" height="100" />
        <span class="text">
          本站访客数
          <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
        </span>
      </section>
    </div>
  </div>
</template>

<style scoped>
.panel {
  margin-top: 12px;
  margin-bottom: 8px;
}

.container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  width: 100%;
  min-height: 32px;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  font-weight: 500;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}

.text {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
```

然后需要在 `theme/index.ts` 中引入我们刚弄好的组件，以及添加不蒜子的配置

::: code-group

```ts{4,5,6,11,12,13,14,15,16,17,18} [index.ts]
// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";

import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";


export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("DataPanel", DataPanel);//注册全局组件
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  },
};
```

好，最后再到首页，直接把这个放到最下面就行

::: code-group

```md [index.md]
<DataPanel />
```

:::

::: info 效果
现在你应该能看到这样的效果，有数字就对了，部署后就会是真实的数字

![浏览量效果图](/VitePress/02/浏览量效果图.png)
:::

### 五彩纸屑

花里胡哨的部分，但是我喜欢嘿嘿嘿，继续下载插件

```sh
pnpm add -D canvas-confetti
```

::: tip 代码部分
一样是在 `theme/components` 中创建 `Confetti.vue` 组件<br>
接下来和上面不蒜子套路一样，我就放一起表示了
::: code-group

```vue [Confetti.vue]
<script setup lang="ts">
import confetti from "canvas-confetti";

/* 纸屑 */
confetti({
  particleCount: 100,
  spread: 170,
  origin: { y: 0.6 },
});
</script>
```

```ts{4,9} [index.ts]
// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";

import Confetti from "./components/Confetti.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("Confetti", Confetti); //注册全局组件
  },
};
```

```md [index.md]
<Confetti />
```

:::

::: info 效果
回到首页，刷新一下，漂亮吧

![五彩纸屑效果](/VitePress/02/五彩纸屑效果.png)
:::
