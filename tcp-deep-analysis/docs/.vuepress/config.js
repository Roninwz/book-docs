const sidebarArr = require('./config/createSidebar.js');
console.log('my console sidebarArr : ', sidebarArr);
module.exports = {
  title: '技术文档',
  description: '技术文档',
  base: '/book-docs/tcp-deep-analysis/',
  port: '10100',
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    defaultTheme: 'light',
    sidebar: sidebarArr,
  },
};
