import { defineConfig } from "vitepress";
import nav from "./nav.mjs";
import sidebar from "./sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/swkende-doc/",
  title: "SWKende",
  description: "基于VitePress建站",
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/SWKende" }],
  },
});
