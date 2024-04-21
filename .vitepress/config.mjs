import { defineConfig } from "vitepress";
import nav from "./nav.mjs";
import sidebar from "./sidebar.mjs";
import { set_sidebar } from "./utils/auto_sidebar.mjs"; // 改成自己的路径

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
    sidebar,
    // sidebar: { "/docs/博客": set_sidebar("/docs/博客") },
    // sidebar: false, // 关闭侧边栏
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
});
