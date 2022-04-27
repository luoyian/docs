import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/docs/',
  title: 'Guany 的文档',
  description: 'Guany 的文档',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
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
  themeConfig: {
    docsBranch: 'main',
    docsRepo: 'tlyboy/docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nextLinks: true,
    prevLinks: true,
    logo: '/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '简介',
        link: '/guide/'
      }
    ],
    repo: 'tlyboy/docs',
    repoLabel: 'GitHub',
    sidebar: 'auto'
  },
  markdown: {
    lineNumbers: true
  }
})
