import { defineConfig } from "vitepress";
import nav from "./nav.mjs";
import { generateSidebar } from "vitepress-sidebar";

const vitepressSidebarOptions = {
  documentRootPath: "/docs",
  collapsed: false, //折叠组关闭
  collapseDepth: 2, //折叠组2级菜单
  removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
  prefixSeparator: "_", //删除前缀的符号
};

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
    sidebar: generateSidebar(vitepressSidebarOptions),
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
  //markdown配置
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true,
    },
  },
});
