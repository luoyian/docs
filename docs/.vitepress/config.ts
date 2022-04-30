import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  description: '📄 这是我的新文档。',
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
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    algolia: {
      apiKey: '52dcb219269358d38f9ff9c076401746',
      indexName: 'tlyboy',
      appId: 'J78J84FFDK'
    },
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
        text: '文档简介',
        link: '/guide/'
      },
      {
        text: '学习路线',
        link: 'https://www.bilibili.com/read/cv14612853?spm_id_from=333.999.0.0'
      }
    ],
    repo: 'tlyboy/docs',
    repoLabel: 'GitHub',
    sidebar: {
      '/guide/': [{ text: '文档简介', link: '/guide/' }]
    }
  },
  title: 'Guany 的文档'
})
