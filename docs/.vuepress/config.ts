import { defineConfig } from 'vuepress/config'

export default defineConfig({
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
        rel: 'shortcut icon',
        href: '/favicon.ico',
        type: 'image/x-icon'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/favicon.png'
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
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docsBranch: 'main',
    docsDir: 'docs',
    docsRepo: 'tlyboy/docs',
    editLinkText: '在 GitHub 上编辑此页',
    editLinks: true,
    lastUpdated: '上次更新',
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档简介',
        link: '/guide/'
      },
      {
        text: '学习路线',
        link: 'https://www.bilibili.com/read/cv14612853?spm_id_from=333.999.0.0'
      }
    ],
    repo: 'tlyboy/docs',
    sidebar: 'auto',
    sidebarDepth: 2,
    smoothScroll: true
  },
  title: 'Guany 的文档'
})
