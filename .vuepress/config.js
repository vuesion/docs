const path = require('path');

module.exports = {
    base: '/docs/',
    dest: path.join(path.resolve(__dirname), '../dist'),
    locales: {
        '/en/': {
            lang: 'en',
            title: 'Vuesion',
            description:
                'Vuesion is a boilerplate that helps product teams build faster than ever with fewer headaches and modern best practices across engineering & design.',
        },
    },
    head: [
        ['script', {}, `(function customScript() {
            window.addEventListener('load', () => {
              var version = window.location.pathname.includes('v4') ? 'v4' : 'v3';
              var homeLink = document.querySelector('.home-link');

              if (homeLink) {
                homeLink.setAttribute('href', '/docs/en/' + version + '/');
                homeLink.setAttribute('onclick', "document.location='/docs/en/" + version + "/';return false;");
              }
            });
        })()`],
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
                content: '#0f3191',
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
                color: '#0f3191',
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
                content: '#0f3191',
            },
        ],
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/logo.png',
        repo: 'vuesion/vuesion',
        docsRepo: 'vuesion/docs',
        editLinks: true,
        smoothScroll: true,
        locales: {
            '/en/': {
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                nav: [
                    {
                        text: 'Interactive Demo',
                        link: 'https://vuesion.herokuapp.com/',
                    },
                    {
                        text: 'Design System',
                        link: 'https://vuesion.herokuapp.com/storybook',
                    },
                    {
                        text: 'Discord',
                        link: 'https://discord.gg/59x5cg2',
                    },
                    {
                        text: 'Versions',
                        items: [
                            {text: 'v3', link: '/en/v3/'},
                            {text: 'v4', link: '/en/v4/'}
                        ]
                    }
                ],
                sidebar: {
                    '/en/v3/': [
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
                    '/en/v4/': [
                        {
                            title: 'Getting started',
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
                                'guide/contribute',
                                'guide/update',
                                ['https://nuxtjs.org/docs/2.x/deployment/deploying-to-21yunbox', 'Deployment'],
                                'guide/npm-scripts',
                                'FAQ',
                            ],
                        },
                    ],
                },
            }
        },
    },
};
