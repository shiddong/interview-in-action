/*
 * @File: 文件名
 * @Description: 文件描述
 * @Author: shiddong <shiddong@outlook.com>
 * @Date: 2020-08-16 18:28:06
 * @LastEditors: shiddong
 * @LastEditTime: 2020-08-18 07:31:18
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
        link: "/javascript/类型",
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
      "/javascript/": ["", ["类型", "类型"], ["深拷贝", "深拷贝"]],
      "/algorithm/": ["", "foo"],
    },
    sidebarDepth: 2,
  },
};
