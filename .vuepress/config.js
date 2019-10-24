const path = require('path');

module.exports = {
  base: '/docs/',
  dest: path.join(path.resolve(__dirname), '../dist'),
  locales: {
    '/en/': {
      lang: 'en',
      title: 'vuesion',
      description:
        'The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'vuesion',
      description:
        '一个灵活的、可扩展的、自定的，已经准备好用于生产的渐进式网络应用样板，聚焦于性能、开发速度和最佳实践',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`,
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#f43b6c',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: `/icons/apple-touch-icon-152x152.png`,
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#f43b6c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#f43b6c',
      },
    ],
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'vuesion/docs',
    editLinks: true,
    locales: {
      '/en/': {
        label: 'English',
        selectText: '中文',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'FAQ',
            link: '/en/FAQ',
          },
          {
            text: 'Guide',
            link: '/en/introduction',
          },
          {
            text: 'Interactive Demo',
            link: 'https://vuesion.herokuapp.com/',
          },
          {
            text: 'Components',
            link: 'https://vuesion.herokuapp.com/storybook',
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/59x5cg2',
          },
          {
            text: 'Slack',
            link: 'https://slack-vuesion.herokuapp.com/',
          },
        ],
        sidebar: {
          '/en/': [
            {
              title: 'Getting started',
              collapsable: false,
              children: [
                'FAQ',
                'guide/install',
                'guide/run',
                'guide/test',
                'guide/i18n',
                'guide/cli',
                'guide/clean-up',
                'guide/vuex',
                'guide/build',
                'guide/config',
                'guide/contribute',
                'guide/update',
                'guide/deployment',
              ],
            },
            {
              title: 'Tutorials',
              collapsable: false,
              children: ['tutorials/redirects', 'tutorials/prefetch-and-state-transfer', 'tutorials/third-party', 'tutorials/deploy-with-firebase'],
            },
            {
              title: 'Docs',
              collapsable: false,
              children: ['docs/style-guide', 'docs/pwa', 'docs/npm-scripts'],
            },
          ],
        },
      },
      '/zh-cn/': {
        label: '简体中文',
        selectText: 'English',
        editLinkText: '在GitHub上编辑这页',
        nav: [
          {
            text: '指南',
            link: '/zh-cn/introduction',
          },
          {
            text: '交互演示',
            link: 'https://vuesion.herokuapp.com/',
          },
          {
            text: '组件',
            link: 'https://vuesion.herokuapp.com/storybook',
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/59x5cg2',
          },
          {
            text: '交流',
            link: 'https://slack-vuesion.herokuapp.com/',
          },
        ],
        sidebar: {
          '/zh-cn/': [
            {
              title: '开始',
              collapsable: false,
              children: [
                'guide/install',
                'guide/run',
                'guide/test',
                'guide/i18n',
                'guide/cli',
                'guide/clean-up',
                'guide/vuex',
                'guide/build',
                'guide/config',
                'guide/contribute',
                'guide/update',
              ],
            },
            {
              title: '文档',
              collapsable: false,
              children: ['docs/style-guide', 'docs/npm-scripts', 'docs/i18n', 'docs/storybook', 'docs/redirects'],
            },
          ],
        },
      },
    },
  },
};
