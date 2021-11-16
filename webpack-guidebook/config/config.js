const config = {
  mode: 'site',
  title: 'Webpack Guidebook',
  description: 'Webpack 完全知识体系',
  base: '/book-docs/webpack-guidebook/',
  publicPath: '/book-docs/webpack-guidebook/',
  outputPath: '../docs/webpack-guidebook',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/webpack-guidebook-favicon.svg',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/tsejx/webpack-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
