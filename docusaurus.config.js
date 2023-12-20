// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '咸鱼结社WIKI',
  tagline: '躺平摆烂',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // 设置站点所在的/<baseUrl>/路径名
  // 对于GitHub页面部署，通常是'/<projectName>/'
  baseUrl: '/',

  // GitHub页面部署配置。
  // 如果你不使用GitHub页面，你不需要这些。
  organizationName: 'facebook', //通常你的GitHub /用户名。
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

// 即使你不使用国际化，你也可以使用这个字段来设置
// 有用的元数据，如HTML语言。例如，如果您的网站是中文的，您就可以
// 可能需要将"en"替换为"zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 请将此更改为您的repo。
          // 删除“编辑此页”链接。
          editUrl:
            'https://github.com/MueoFish',
        },
        blog: {
          showReadingTime: true,
          // 请将此更改为您的repo。
          // 删除“编辑此页”链接。
          editUrl:
            'https://github.com/MueoFish',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为项目的社交卡
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '咸鱼结社',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '快速开始',
          },
          {
            href: 'https://github.com/MueoFish',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/',
              },
              {
                label: 'ChatGPT',
                to: '/docs/category/chatgpt-指南',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ群聊',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=U6Fei9eiBmiLpzb4BT7a9-VXPQcsHpqI&authKey=T61IF1EmSYd9ls36d45YEYGdxqKXDsSGR7MWJ8ACOxwbofoSetDibpSWNWsjUFZ6&noverify=0&group_code=458483214',
              },
              {
                label: 'Discord',
                href: '#',
              },
            ],
          },
          {
            title: '关于',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} 咸鱼结社. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
