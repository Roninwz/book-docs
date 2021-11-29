const sidebarArr = require('./config/createSidebar.js');
module.exports = {
  title: '技术文档',
  description: '技术文档',
  base: '/book-docs/vue-depth-analysis/',
  port: '10100',
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    defaultTheme: 'light',
    sidebar: sidebarArr,
  },
};
