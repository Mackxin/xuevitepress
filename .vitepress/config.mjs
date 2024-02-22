import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/xuevitepress/',
  title: "宝小宝",
  description: "xiaobao",
  head: [["link", { rel: "icon", href: "/xuevitepress/ico.ico" }]],
  themeConfig: {
    siteTitle: '宝小宝',
    logo: "/bao.svg",
    lastUpdated: true,
    lastUpdatedText: "最新更新",
    outlineTitle: "本页目录",
    markdown: {
      theme: {
        light: "material-lighter",
        dark: "material-darker",
      },
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Vitepress', link: '/vitepress/' },
      { text: '关于', link: '/about/' },
      {
        text: '文档',
        items: [
          { text: 'Git', link: '/git' },
          { text: '动漫', link: '/cartoon/' },
          { text: '开源', link: '/kaiyuan/' },
          { text: '下载', link: '/download/' },
          { text: '小白', link: '/xiaobai/' }
        ]
      },
      { text: '宝小宝', link: 'http://baoxiaobao.asia' }
    ],

    sidebar: [
      {
        text: '文档',
        collapsed: true,
        items: [
          { text: 'git教程', link: '/git' }
        ]
      },
      {
        text: 'Vitepress',
        collapsed: true,
        items: [
          { text: '学习', link: '/vitepress/' },
          { text: '01.安装必备软件', link: 'vitepress/01.安装必备软件' },
          { text: '02.准备工作', link: 'vitepress/02.准备工作' },
          { text: '03.安装向导', link: 'vitepress/03.安装向导' },
          { text: '04.新建.gitignore的文件', link: 'vitepress/04.新建.gitignore文件' },
          { text: '05.推送本地代码到服务器', link: 'vitepress/05.推送本地代码到服务器' },
          { text: '06.开启GithubActions', link: 'vitepress/06.开启GithubActions' },
          { text: '07.css样式没有加载', link: 'vitepress/07.css样式没有加载' },
          { text: '08.添加标签栏的图标', link: 'vitepress/08.添加标签栏的图标' },
          { text: '09.顶部导航右边社交配置', link: 'vitepress/09.顶部导航右边社交配置' },
          { text: '10.首页配置', link: 'vitepress/10.首页配置' },
          { text: '11.页脚配置', link: 'vitepress/11.页脚配置' },
          { text: '12.文档右边侧边栏配置', link: 'vitepress/12.文档右边侧边栏配置' },
          { text: '13.最后更新时间配置', link: 'vitepress/13.最后更新时间配置' },
          { text: '14.上一页下一页', link: 'vitepress/14.上一页下一页' },
          { text: '15.自定义编辑链接', link: 'vitepress/15.自定义编辑链接' }
        ]
      },
      {
        text: '宝下载',
        collapsed: false,
        items: [
          { text: '宝下载', link: '/download/' },
          { text: 'B站视频下载', link: '/download/bilibili' }
        ]
      },
      {
        text: '动漫',
        collapsed: true,
        items: [
          { text: '动漫', link: '/cartoon/' }
        ]
      },
      {
        text: '开源',
        collapsed: true,
        items: [
          { text: 'GitHub', link: '/kaiyuan/' }
        ]
      },
      {
        text: '小白',
        collapsed: true,
        items: [
          { text: '小白', link: '/xiaobai/' },
          { text: '新手', link: '/xiaobai/xinshou' }
        ]
      },
      {
        text: '关于宝',
        collapsed: false,
        items: [
          { text: '宝小宝', link: '/about/' },
        ]
      }
    ],

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
    docFooter: { 
      prev: '上一文', 
      next: '下一文' 
    },
    editLink: {
      pattern: 'https://github.com/Mackxin/xuevitepress/edit/main/:path',
      text: '到你的GitHub页面上编辑'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mackxin/xuevitepress' },
      {
        icon: {
          svg: '<svg t="1706340521261" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4230" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#ff1d55" p-id="4231"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#ff1d55" p-id="4232"></path></svg>'
        },
        link: 'https://space.bilibili.com/15289301',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024-BaoXiaoBao <a href="http://baoxiaobao.asia/" target="_blank">👽宝小宝</a>'
    }
  }
})
