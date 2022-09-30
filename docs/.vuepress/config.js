module.exports = {
  title: 'Guany 的文档',
  description: '这是我的新文档',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.svg'
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
    logo: '/assets/img/logo.svg',
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
        text: '开发环境',
        link: '/dev/wt'
      }
    ],
    sidebar: {
      '/dev/': ['wt', 'wsl2', 'ubuntu', 'docker', 'powershell', 'vscode', 'git', 'ssh']
    },
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
}
