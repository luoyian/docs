import { defineConfig } from 'vuepress/config'

export default defineConfig({
  title: 'Guany 的文档',
  description: '这是我的新文档',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.tlyboy.com/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Guany 的文档',
      description: '这是我的新文档'
    }
  },
  themeConfig: {
    logo: 'https://cdn.tlyboy.com/img/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档简介',
        link: '/guide/'
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    repo: 'tlyboy/docs',
    docsRepo: 'tlyboy/docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
  markdown: {
    lineNumbers: true
  }
})
