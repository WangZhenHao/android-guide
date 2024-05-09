import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  base: '/android-guide/',
  outDir: '../dist',
  lang: 'en-US',
  title: 'android入门学习',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档仓库', link: 'https://github.com/WangZhenHao/android-guide' },
      { text: '安卓开发教程', link: 'https://developer.android.com/courses/android-basics-compose/unit-1' }
    ],

    sidebar: [
      {
        text: '准备工作',
        items: [
          { text: 'android-stdio安装和使用', link: '/start/env' },
          { text: '基础布局', link: '/start/basicLayout' },
          { text: 'Kotlin语法', link: '/start/kotlin' },
          { text: '常见的compose', link: '/start/jetpackCompose' },
          { text: '摇色子案例', link: '/start/buttonApp' },
          { text: "自动化测试", link: "/start/automatedTest_2_3" }
        ],
      },
      {
        text: "进阶",
        items: [
          { text: '更多kotlin语法-1',link: '/advance/kotlinMore' },
          { text: '更多kotlin语法-2',link: '/advance/kotlinMore2' },
          { text: '列表滚动',link: '/advance/scrollableList_3_2' },
          { text: '构建优美的app',link: '/advance/buildApp_3_3' },
          { text: '架构组件',link: '/advance/architectureComponent_4_1' },
          { text: '导航',link: '/advance/navigation_4_2' },
        ]
      }
    ],
  },
});
