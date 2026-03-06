import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenClaw 실전 가이드',
  tagline: 'AI 에이전트 게이트웨이 — Skills 특화 학습 자료',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages 배포 설정
  url: 'https://restnfeel.github.io',
  baseUrl: '/vibe_coding_openclaw/',

  organizationName: 'restnfeel',
  projectName: 'vibe_coding_openclaw',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/restnfeel/vibe_coding_openclaw/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'OpenClaw 가이드',
      logo: {
        alt: 'OpenClaw Guide',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '가이드',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Skills 실습',
        },
        {
          href: 'https://docs.openclaw.ai/',
          label: '공식 문서',
          position: 'right',
        },
        {
          href: 'https://github.com/restnfeel/vibe_coding_openclaw',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '기초',
          items: [
            { label: '소개', to: '/' },
            { label: '아키텍처', to: '/architecture' },
            { label: '설치 & 설정', to: '/installation' },
          ],
        },
        {
          title: 'Skills 실습',
          items: [
            { label: 'Skills 개요', to: '/skills-overview' },
            { label: 'Skills 만들기', to: '/skills-creating' },
            { label: 'Skills 고급 활용', to: '/skills-advanced' },
          ],
        },
        {
          title: '실전',
          items: [
            { label: '도구 & 채널', to: '/tools-channels' },
            { label: 'CloudType 배포', to: '/cloudtype-deploy' },
            { label: '체크리스트', to: '/checklist' },
          ],
        },
        {
          title: '링크',
          items: [
            { label: 'OpenClaw 공식', href: 'https://docs.openclaw.ai/' },
            { label: 'ClawHub', href: 'https://clawhub.com/' },
            { label: 'CloudType', href: 'https://cloudtype.io/ko' },
            { label: 'GitHub', href: 'https://github.com/restnfeel/vibe_coding_openclaw' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} restnfeel. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python', 'diff', 'yaml', 'markdown'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
