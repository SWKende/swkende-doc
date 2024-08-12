import { defineConfig } from "vitepress";
import nav from "./nav.mjs";
import AutoSidebarPlugin from "vitepress-auto-sidebar-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/swkende-doc/",
  title: "SWKende",
  description: "基于VitePress建站",
  head: [["link", { rel: "icon", href: "logo.svg" }]],
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.svg",
    outlineTitle: "目录",
    outline: [2, 6],
    nav,
    socialLinks: [{ icon: "github", link: "https://github.com/SWKende" }],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
  vite: {
    plugins: [
      AutoSidebarPlugin({
        // 如果不指定 `srcDir`，则默认使用 `vitepress` 的 `srcDir`
        srcDir: "./docs",
        sort: (a, b) => a.text.localeCompare(b.text),
      }),
    ],
  },
});
