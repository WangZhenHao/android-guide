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
          { text: '摇色子案例', link: '/start/buttonApp' }
        ],
      }
    ],
  },
});
