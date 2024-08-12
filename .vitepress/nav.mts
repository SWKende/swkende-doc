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
  { text: "杂项", activeMatch: "/杂项/", link: "/杂项/index" },
  { text: "掘金", link: "https://juejin.cn/" },
];
