/*
 * @File: vuepress config
 * @Description: 全局配置文件
 * @Author: shiddong <shiddong@outlook.com>
 * @Date: 2020-08-16 18:28:06
 * @LastEditors: shiddong
 * @LastEditTime: 2020-08-22 18:29:38
 * @FilePath: /interview-in-action/docs/.vuepress/config.js
 */

module.exports = {
  theme: "reco",
  title: "Interview",
  description: "前端面试实战",
  base: "/interview-in-action/",
  themeConfig: {
    nav: [
      {
        text: "算法",
        link: "/algorithm/",
      },
      {
        text: "JS",
        link: "/javascript/",
      },
      {
        text: "HTML",
        link: "/html/",
      },
      {
        text: "CSS",
        link: "/css/",
      },
      {
        text: "React",
        link: "/react/",
      },
      {
        text: "Github",
        link: "https://github.com/shiddong/interview-in-action",
      },
    ],
    lastUpdated: "Last Updated",
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    smoothScroll: true,
    sidebar: {
      "/javascript/": [
        {
          title: "原理",
          path: "/javascript/原理.md",
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
        {
          title: "类型",
          path: "/javascript/类型/",
          children: ["/javascript/类型/深拷贝.md", "/javascript/类型/类型.md"],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
      ],
    },
  },
};
