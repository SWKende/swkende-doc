export default [
  { text: "首页", link: "/" },
  {
    text: "博客",
    activeMatch: "/博客/",
    items: [
      {
        text: "HTML",
        activeMatch: "/博客/HTML/",
        link: "/博客/HTML/index",
      },
      { text: "Vue", activeMatch: "/博客/Vue/", link: "/博客/Vue/index" },
    ],
  },
  { text: "学习记录", activeMatch: "/学习记录/", link: "/学习记录/index" },
  // { text: "百度", link: "https://www.baidu.com/", target: "_self" },
];
