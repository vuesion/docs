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
        '/ru/': {
            lang: 'ru-Ru',
            title: 'Vuesion',
            description:
                'Vuesion - стартовая сборка Vue JS для быстрого прототипирования с готовой архитектурой для больших приложений',
        },
        '/ko/': {
            lang: 'ko',
            title: 'Vuesion',
            description:
                'Vuesion은 설계 전반에 사용할 수 있는 최신 사례들을 활용하여, 팀이 고민거리 없이 신속하게 서비스를 구축할 수 있도록 돕는 VueJS 보일러 플레이트입니다.',
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
                            title: 'General',
                            collapsable: false,
                            children: [
                                'introduction',
                                'FAQ'
                            ],
                        },
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
                                'guide/design-system',
                                'guide/contribute',
                                'guide/update',
                                ['https://nuxtjs.org/docs/2.x/deployment/deploying-to-21yunbox', 'Deployment'],
                                'guide/npm-scripts',
                            ],
                        },
                    ],
                },
            },
            '/ru/': {
                label: 'Русский',
                editLinkText: 'Редактировать эту страницу на GitHub',
                nav: [
                    {
                        text: 'Интерактивное Демо',
                        link: 'https://vuesion.herokuapp.com/',
                    },
                    {
                        text: 'Дизайн-система',
                        link: 'https://vuesion.herokuapp.com/storybook',
                    },
                    {
                        text: 'Discord',
                        link: 'https://discord.gg/59x5cg2',
                    },
                    {
                        text: 'Версии',
                        items: [
                            {text: 'v4', link: '/en/v4/'}
                        ]
                    }
                ],
                sidebar: {
                    '/ru/v4/': [
                        {
                            title: 'General',
                            collapsable: false,
                            children: [
                                'introduction',
                                'FAQ'
                            ],
                        },
                        {
                            title: 'Начало работы',
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
                            ],
                        },
                    ],
                },
            },
            '/ko/': {
                label: '한국어',
                editLinkText: 'GitHub에서 현재 페이지 수정하기',
                nav: [
                    {
                        text: '인터렉티브 데모',
                        link: 'https://vuesion.herokuapp.com/',
                    },
                    {
                        text: '디자인 시스템',
                        link: 'https://vuesion.herokuapp.com/storybook',
                    },
                    {
                        text: '디스코드',
                        link: 'https://discord.gg/59x5cg2',
                    },
                    {
                        text: '버전',
                        items: [
                            {text: 'v3 (영문)', link: '/en/v3/'},
                            {text: 'v4', link: '/ko/v4/'}
                        ]
                    }
                ],
                sidebar: {
                    '/ko/v4/': [
                        {
                            title: '일반',
                            collapsable: false,
                            children: [
                                'introduction',
                                'FAQ'
                            ],
                        },
                        {
                            title: '시작하기',
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
                                ['https://nuxtjs.org/docs/2.x/deployment/deploying-to-21yunbox', '배포하기'],
                                'guide/npm-scripts',
                            ],
                        },
                    ],
                },
            }
        },
    },
};
