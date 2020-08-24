/*
 * @File: vuepress config
 * @Description: 全局配置文件
 * @Author: shiddong <shiddong@outlook.com>
 * @Date: 2020-08-16 18:28:06
 * @LastEditors: shiddong
 * @LastEditTime: 2020-08-24 23:45:24
 * @FilePath: /interview-in-action/docs/.vuepress/config.js
 */

module.exports = {
  theme: "reco",
  title: "Interview",
  description: "前端面试实战",
  author: "shiddong",
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
        // {
        //   title: "原理",
        //   path: "/javascript/原理.md",
        //   initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        // },
        {
          title: "类型",
          path: "/javascript/类型/",
          children: ["/javascript/类型/深拷贝.md", "/javascript/类型/类型.md"],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
      ],
      "/algorithm/": [
        {
          title: "哈希表",
          path: "/algorithm/哈希表/",
          children: [
            "/algorithm/哈希表/1.两数之和.md",
            "/algorithm/哈希表/136.只出现一次的数字.md",
            "/algorithm/哈希表/202.快乐数.md",
          ],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
        {
          title: "二分查找",
          path: "/algorithm/二分查找/",
          children: ["/algorithm/二分查找/35.搜索插入位置.md"],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
        {
          title: "动态规划",
          path: "/algorithm/动态规划/",
          children: ["/algorithm/动态规划/53.最大子序和.md"],
          initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        },
      ],
    },
  },
};
