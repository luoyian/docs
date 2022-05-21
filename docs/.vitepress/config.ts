import { defineConfig } from 'vitepress'

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
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    algolia: {
      apiKey: 'XZ7GZTQ4V5',
      indexName: 'netlify_4e2c0a0f-413e-4fd7-ba46-0de60b4158d8_main_all',
      appId: 'b7c915394735dec7b9c0bc1cf53d25ae'
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
    sidebar: 'auto'
  },
  title: 'Guany 的文档'
})
