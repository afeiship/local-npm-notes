module.exports = {
  base: '/npm-notes/',
  title: 'Npm notes',
  host: '0.0.0.0',
  description: 'Npm notes',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://ws4.sinaimg.cn/large/006tKfTcly1g1ne1gs3udj30dw08cwep.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: ['/args/001-pass-args.md']
      }
    ]
  }
};
