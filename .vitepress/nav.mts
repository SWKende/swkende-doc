export default [
  { text: "首页", link: "/" },
  {
    text: "博客",
    activeMatch: "/博客/",
    items: [
      {
        text: "HTML",
        link: "/博客/HTML/index",
        activeMatch: "/博客/HTML/",
      },
      { text: "Vue", link: "/博客/Vue/index", activeMatch: "/博客/Vue/" },
    ],
  },
  { text: "学习记录", activeMatch: "/学习记录/", link: "/学习记录/index" },
  // { text: "百度", link: "https://www.baidu.com/", target: "_self" },
];
