(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{574:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-spa首屏加载速度慢的怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-spa首屏加载速度慢的怎么解决"}},[s._v("#")]),s._v(" 面试官：SPA首屏加载速度慢的怎么解决？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/24617c00-3acc-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),s._v(" "),a("h2",{attrs:{id:"一、什么是首屏加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是首屏加载"}},[s._v("#")]),s._v(" 一、什么是首屏加载")]),s._v(" "),a("p",[s._v("首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容")]),s._v(" "),a("p",[s._v("首屏加载可以说是用户体验中"),a("strong",[s._v("最重要")]),s._v("的环节")]),s._v(" "),a("h3",{attrs:{id:"关于计算首屏时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于计算首屏时间"}},[s._v("#")]),s._v(" 关于计算首屏时间")]),s._v(" "),a("p",[s._v("利用"),a("code",[s._v("performance.timing")]),s._v("提供的数据：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/2e2491a0-3acc-11eb-85f6-6fac77c0c9b3.png",alt:"image.png"}})]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("DOMContentLoad")]),s._v("或者"),a("code",[s._v("performance")]),s._v("来计算出首屏时间")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方案一：")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first contentful painting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方案二：")]),s._v("\nperformance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getEntriesByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first-contentful-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("startTime\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// performance.getEntriesByName("first-contentful-paint")[0]')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 会返回一个 PerformancePaintTiming的实例，结构如下：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first-contentful-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  entryType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  startTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("507.80000002123415")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  duration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"二、加载慢的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、加载慢的原因"}},[s._v("#")]),s._v(" 二、加载慢的原因")]),s._v(" "),a("p",[s._v("在页面渲染的过程，导致加载速度慢的因素可能如下：")]),s._v(" "),a("ul",[a("li",[s._v("网络延时问题")]),s._v(" "),a("li",[s._v("资源文件体积是否过大")]),s._v(" "),a("li",[s._v("资源是否重复发送请求去加载了")]),s._v(" "),a("li",[s._v("加载脚本的时候，渲染内容堵塞了")])]),s._v(" "),a("h2",{attrs:{id:"三、解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、解决方案"}},[s._v("#")]),s._v(" 三、解决方案")]),s._v(" "),a("p",[s._v("常见的几种SPA首屏优化方式")]),s._v(" "),a("ul",[a("li",[s._v("减小入口文件积")]),s._v(" "),a("li",[s._v("静态资源本地缓存")]),s._v(" "),a("li",[s._v("UI框架按需加载")]),s._v(" "),a("li",[s._v("图片资源的压缩")]),s._v(" "),a("li",[s._v("组件重复打包")]),s._v(" "),a("li",[s._v("开启GZip压缩")]),s._v(" "),a("li",[s._v("使用SSR")])]),s._v(" "),a("h3",{attrs:{id:"减小入口文件体积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减小入口文件体积"}},[s._v("#")]),s._v(" 减小入口文件体积")]),s._v(" "),a("p",[s._v("常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("vue-router")]),s._v("配置路由的时候，采用动态加载路由的形式")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" \n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Blogs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ShowBlogs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/ShowBlogs.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件")]),s._v(" "),a("h3",{attrs:{id:"静态资源本地缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源本地缓存"}},[s._v("#")]),s._v(" 静态资源本地缓存")]),s._v(" "),a("p",[s._v("后端返回资源问题：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("采用"),a("code",[s._v("HTTP")]),s._v("缓存，设置"),a("code",[s._v("Cache-Control")]),s._v("，"),a("code",[s._v("Last-Modified")]),s._v("，"),a("code",[s._v("Etag")]),s._v("等响应头")])]),s._v(" "),a("li",[a("p",[s._v("采用"),a("code",[s._v("Service Worker")]),s._v("离线缓存")])])]),s._v(" "),a("p",[s._v("前端合理利用"),a("code",[s._v("localStorage")])]),s._v(" "),a("h3",{attrs:{id:"ui框架按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui框架按需加载"}},[s._v("#")]),s._v(" UI框架按需加载")]),s._v(" "),a("p",[s._v("在日常使用"),a("code",[s._v("UI")]),s._v("框架，例如"),a("code",[s._v("element-UI")]),s._v("、或者"),a("code",[s._v("antd")]),s._v("，我们经常性直接引用整个"),a("code",[s._v("UI")]),s._v("库")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ElementUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" TableColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MessageBox "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"组件重复打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件重复打包"}},[s._v("#")]),s._v(" 组件重复打包")]),s._v(" "),a("p",[s._v("假设"),a("code",[s._v("A.js")]),s._v("文件是一个常用的库，现在有多个路由使用了"),a("code",[s._v("A.js")]),s._v("文件，这就造成了重复下载")]),s._v(" "),a("p",[s._v("解决方案：在"),a("code",[s._v("webpack")]),s._v("的"),a("code",[s._v("config")]),s._v("文件中，修改"),a("code",[s._v("CommonsChunkPlugin")]),s._v("的配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("minChunks")]),s._v("为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件")]),s._v(" "),a("h3",{attrs:{id:"图片资源的压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片资源的压缩"}},[s._v("#")]),s._v(" 图片资源的压缩")]),s._v(" "),a("p",[s._v("图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素")]),s._v(" "),a("p",[s._v("对于所有的图片资源，我们可以进行适当的压缩")]),s._v(" "),a("p",[s._v("对页面上使用到的"),a("code",[s._v("icon")]),s._v("，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻"),a("code",[s._v("http")]),s._v("请求压力。")]),s._v(" "),a("h3",{attrs:{id:"开启gzip压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启gzip压缩"}},[s._v("#")]),s._v(" 开启GZip压缩")]),s._v(" "),a("p",[s._v("拆完包之后，我们再用"),a("code",[s._v("gzip")]),s._v("做一下压缩 安装"),a("code",[s._v("compression-webpack-plugin")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cnmp i compression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("vue.congig.js")]),s._v("中引入并修改"),a("code",[s._v("webpack")]),s._v("配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CompressionPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'compression-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为生产环境修改配置...")]),s._v("\n            config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CompressionPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$|\\.html$|\\.css")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//匹配文件名")]),s._v("\n                    threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对超过10k的数据进行压缩")]),s._v("\n                    deleteOriginalAssets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否删除原文件")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("在服务器我们也要做相应的配置 如果发送请求的浏览器支持"),a("code",[s._v("gzip")]),s._v("，就发送给它"),a("code",[s._v("gzip")]),s._v("格式的文件 我的服务器是用"),a("code",[s._v("express")]),s._v("框架搭建的 只要安装一下"),a("code",[s._v("compression")]),s._v("就能使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const compression = require('compression')\napp.use(compression())  // 在其他中间件使用之前调用\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"使用ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用ssr"}},[s._v("#")]),s._v(" 使用SSR")]),s._v(" "),a("p",[s._v("SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器")]),s._v(" "),a("p",[s._v("从头搭建一个服务端渲染是很复杂的，"),a("code",[s._v("vue")]),s._v("应用建议使用"),a("code",[s._v("Nuxt.js")]),s._v("实现服务端渲染")]),s._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结：")]),s._v(" "),a("p",[s._v("减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化")]),s._v(" "),a("p",[s._v("下图是更为全面的首屏优化的方案")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/4fafe900-3acc-11eb-85f6-6fac77c0c9b3.png",alt:"image.png"}})]),s._v(" "),a("p",[s._v("大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化")]),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[s._v("https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session")]),s._v(" "),a("li",[s._v("https://www.chengrang.com/how-browsers-work.html")]),s._v(" "),a("li",[s._v("https://juejin.cn/post/6844904185264095246")]),s._v(" "),a("li",[s._v("https://vue3js.cn/docs/zh")])])])}),[],!1,null,null,null);t.default=e.exports}}]);