"use strict"; (self.webpackChunkjjbook = self.webpackChunkjjbook || []).push([[2617], { 9613: function (e, t, n) { n.d(t, { Zo: function () { return s }, kt: function () { return m } }); var a = n(9496); function r(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } function l(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); t && (a = a.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n } function i(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? l(Object(n), !0).forEach((function (t) { r(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } function o(e, t) { if (null == e) return {}; var n, a, r = function (e, t) { if (null == e) return {}; var n, a, r = {}, l = Object.keys(e); for (a = 0; a < l.length; a++)n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]); return r }(e, t); if (Object.getOwnPropertySymbols) { var l = Object.getOwnPropertySymbols(e); for (a = 0; a < l.length; a++)n = l[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]) } return r } var p = a.createContext({}), b = function (e) { var t = a.useContext(p), n = t; return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n }, s = function (e) { var t = b(e.components); return a.createElement(p.Provider, { value: t }, e.children) }, u = { inlineCode: "code", wrapper: function (e) { var t = e.children; return a.createElement(a.Fragment, {}, t) } }, c = a.forwardRef((function (e, t) { var n = e.components, r = e.mdxType, l = e.originalType, p = e.parentName, s = o(e, ["components", "mdxType", "originalType", "parentName"]), c = b(n), m = r, k = c["".concat(p, ".").concat(m)] || c[m] || u[m] || l; return n ? a.createElement(k, i(i({ ref: t }, s), {}, { components: n })) : a.createElement(k, i({ ref: t }, s)) })); function m(e, t) { var n = arguments, r = t && t.mdxType; if ("string" == typeof e || r) { var l = n.length, i = new Array(l); i[0] = c; var o = {}; for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]); o.originalType = e, o.mdxType = "string" == typeof e ? e : r, i[1] = o; for (var b = 2; b < l; b++)i[b] = n[b]; return a.createElement.apply(null, i) } return a.createElement.apply(null, n) } c.displayName = "MDXCreateElement" }, 6171: function (e, t, n) { n.r(t), n.d(t, { frontMatter: function () { return o }, contentTitle: function () { return p }, metadata: function () { return b }, toc: function () { return s }, default: function () { return c } }); var a = n(5900), r = n(4750), l = (n(9496), n(9613)), i = ["components"], o = { sidebar_label: "\u5de5\u7a0b\u5316\uff1aBabel \u7684\u539f\u7406", sidebar_position: 3 }, p = "Babel \u7684\u539f\u7406", b = { unversionedId: "book2/engineer-babel", id: "book2/engineer-babel", isDocsHomePage: !1, title: "Babel \u7684\u539f\u7406", description: "\u76f8\u5173\u95ee\u9898", source: "@site/docs/book2/engineer-babel.md", sourceDirName: "book2", slug: "/book2/engineer-babel", permalink: "/book-docs/awesome-interview/book2/engineer-babel", tags: [], version: "current", sidebarPosition: 3, frontMatter: { sidebar_label: "\u5de5\u7a0b\u5316\uff1aBabel \u7684\u539f\u7406", sidebar_position: 3 }, sidebar: "tutorialSidebar", previous: { title: "\u6d4f\u89c8\u5668\uff1a\u5783\u573e\u56de\u6536\u673a\u5236", permalink: "/book-docs/awesome-interview/book2/browser-garbage" }, next: { title: "\u6846\u67b6\uff1aReact Fiber \u7684\u4f5c\u7528\u548c\u539f\u7406", permalink: "/book-docs/awesome-interview/book2/frame-react-fiber" } }, s = [{ value: "\u76f8\u5173\u95ee\u9898", id: "\u76f8\u5173\u95ee\u9898", children: [], level: 2 }, { value: "\u56de\u7b54\u5173\u952e\u70b9", id: "\u56de\u7b54\u5173\u952e\u70b9", children: [], level: 2 }, { value: "\u77e5\u8bc6\u70b9\u6df1\u5165", id: "\u77e5\u8bc6\u70b9\u6df1\u5165", children: [{ value: "1. AST \u62bd\u8c61\u8bed\u6cd5\u6811", id: "1-ast-\u62bd\u8c61\u8bed\u6cd5\u6811", children: [], level: 3 }, { value: "2. Babel \u7f16\u8bd1\u6d41\u7a0b", id: "2-babel-\u7f16\u8bd1\u6d41\u7a0b", children: [{ value: "\u4e09\u5927\u6b65\u9aa4", id: "\u4e09\u5927\u6b65\u9aa4", children: [], level: 4 }], level: 3 }, { value: "3. Babel \u63d2\u4ef6\u7cfb\u7edf", id: "3-babel-\u63d2\u4ef6\u7cfb\u7edf", children: [{ value: "\u5e38\u89c1 presets", id: "\u5e38\u89c1-presets", children: [], level: 4 }, { value: "\u7f16\u5199 Babel \u63d2\u4ef6", id: "\u7f16\u5199-babel-\u63d2\u4ef6", children: [], level: 4 }, { value: "\u6df1\u5165 Babel \u8f6c\u6362\u9636\u6bb5", id: "\u6df1\u5165-babel-\u8f6c\u6362\u9636\u6bb5", children: [], level: 4 }], level: 3 }], level: 2 }, { value: "\u53c2\u8003\u8d44\u6599", id: "\u53c2\u8003\u8d44\u6599", children: [], level: 2 }], u = { toc: s }; function c(e) { var t = e.components, n = (0, r.Z)(e, i); return (0, l.kt)("wrapper", (0, a.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, l.kt)("h1", { id: "babel-\u7684\u539f\u7406" }, "Babel \u7684\u539f\u7406"), (0, l.kt)("h2", { id: "\u76f8\u5173\u95ee\u9898" }, "\u76f8\u5173\u95ee\u9898"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Babel \u662f\u4ec0\u4e48"), (0, l.kt)("li", { parentName: "ul" }, "Babel \u6709\u4ec0\u4e48\u7528"), (0, l.kt)("li", { parentName: "ul" }, "\u538b\u7f29\u4ee3\u7801\u5982\u4f55\u5b9e\u73b0")), (0, l.kt)("h2", { id: "\u56de\u7b54\u5173\u952e\u70b9" }, "\u56de\u7b54\u5173\u952e\u70b9"), (0, l.kt)("p", null, (0, l.kt)("inlineCode", { parentName: "p" }, "JS \u7f16\u8bd1\u5668"), " ", (0, l.kt)("inlineCode", { parentName: "p" }, "AST"), " ", (0, l.kt)("inlineCode", { parentName: "p" }, "\u63d2\u4ef6\u7cfb\u7edf")), (0, l.kt)("p", null, "Babel \u662f ", (0, l.kt)("strong", { parentName: "p" }, "JavaScript \u7f16\u8bd1\u5668"), "\uff1a\u4ed6\u80fd\u8ba9\u5f00\u53d1\u8005\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u76f4\u63a5\u4f7f\u7528\u5404\u7c7b\u65b9\u8a00\uff08\u5982 TS\u3001Flow\u3001JSX\uff09\u6216\u65b0\u7684\u8bed\u6cd5\u7279\u6027\uff0c\u800c\u4e0d\u9700\u8981\u8003\u8651\u8fd0\u884c\u73af\u5883\uff0c\u56e0\u4e3a Babel \u53ef\u4ee5\u505a\u5230\u6309\u9700\u8f6c\u6362\u4e3a\u4f4e\u7248\u672c\u652f\u6301\u7684\u4ee3\u7801\uff1bBabel \u5185\u90e8\u539f\u7406\u662f\u5c06 JS \u4ee3\u7801\u8f6c\u6362\u4e3a ", (0, l.kt)("strong", { parentName: "p" }, "AST"), "\uff0c\u5bf9 AST \u5e94\u7528\u5404\u79cd\u63d2\u4ef6\u8fdb\u884c\u5904\u7406\uff0c\u6700\u7ec8\u8f93\u51fa\u7f16\u8bd1\u540e\u7684 JS \u4ee3\u7801\u3002"), (0, l.kt)("h2", { id: "\u77e5\u8bc6\u70b9\u6df1\u5165" }, "\u77e5\u8bc6\u70b9\u6df1\u5165"), (0, l.kt)("h3", { id: "1-ast-\u62bd\u8c61\u8bed\u6cd5\u6811" }, "1. AST \u62bd\u8c61\u8bed\u6cd5\u6811"), (0, l.kt)("p", null, (0, l.kt)("strong", { parentName: "p" }, "\u7b80\u5355\u5b9a\u4e49"), "\uff1a\u4ee5\u6811\u7684\u5f62\u5f0f\u6765\u8868\u73b0\u7f16\u7a0b\u8bed\u8a00\u7684\u8bed\u6cd5\u7ed3\u6784\u3002"), (0, l.kt)("p", null, (0, l.kt)("img", { parentName: "p", src: "https://user-images.githubusercontent.com/17002181/124874255-1742bd80-dffa-11eb-9fcf-2a2f9e130334.png", alt: "image" })), (0, l.kt)("p", null, "\u5229\u7528\u5728\u7ebf ", (0, l.kt)("a", { parentName: "p", href: "https://astexplorer.net/" }, "playground"), " \u8c03\u8bd5\uff0c\u53ef\u4ee5\u5bf9 AST \u6709\u4e2a\u76f4\u89c2\u611f\u53d7\uff1a\u751f\u6210\u7684\u6811\u6709\u591a\u4e2a\u8282\u70b9\uff0c\u8282\u70b9\u6709\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u4e0d\u540c\u7c7b\u578b\u8282\u70b9\u6709\u4e0d\u540c\u7684\u5c5e\u6027\u3002"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-js" }, 'const custom = "HZFE";\n')), (0, l.kt)("p", null, (0, l.kt)("img", { parentName: "p", src: "https://user-images.githubusercontent.com/17002181/124893664-7fe76580-e00d-11eb-8937-a6b7719643f4.png", alt: "image" })), (0, l.kt)("p", null, "AST \u662f\u6e90\u4ee3\u7801\u7684\u9ad8\u6548\u8868\u793a\uff0c\u80fd\u4fbf\u6377\u7684\u8868\u793a\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u7684\u7ed3\u6784\u3002\u9002\u7528\u4e8e\u505a\u4ee3\u7801\u5206\u6790\u6216\u8f6c\u6362\u7b49\u9700\u6c42\u3002\u4e4b\u6240\u4ee5\u7528\u6811\u6765\u8fdb\u884c\u5206\u6790\u6216\u8f6c\u6362\uff0c\u662f\u56e0\u4e3a\u6811\u80fd\u4f7f\u5f97\u7a0b\u5e8f\u4e2d\u7684\u6bcf\u4e00\u8282\u70b9\u6070\u597d\u88ab\u8bbf\u95ee\u4e00\u6b21\uff08\u524d\u5e8f\u6216\u540e\u5e8f\u904d\u5386\uff09\u3002"), (0, l.kt)("p", null, (0, l.kt)("strong", { parentName: "p" }, "\u5e38\u89c1\u4f7f\u7528\u573a\u666f"), "\uff1a\u4ee3\u7801\u538b\u7f29\u6df7\u6dc6\u529f\u80fd\u53ef\u4ee5\u501f\u52a9 AST \u6765\u5b9e\u73b0\uff1a\u5206\u6790 AST\uff0c\u57fa\u4e8e\u5404\u79cd\u89c4\u5219\u8fdb\u884c\u4f18\u5316\uff08\u5982 IF \u8bed\u53e5\u4f18\u5316\uff1b\u79fb\u9664\u4e0d\u53ef\u8bbf\u95ee\u4ee3\u7801\uff1b\u79fb\u9664 debugger \u7b49\uff09\uff0c\u4ece\u800c\u751f\u6210\u66f4\u5c0f\u7684 AST \u6811\uff0c\u6700\u7ec8\u8f93\u51fa\u7cbe\u7b80\u7684\u4ee3\u7801\u7ed3\u679c\u3002"), (0, l.kt)("h3", { id: "2-babel-\u7f16\u8bd1\u6d41\u7a0b" }, "2. Babel \u7f16\u8bd1\u6d41\u7a0b"), (0, l.kt)("h4", { id: "\u4e09\u5927\u6b65\u9aa4" }, "\u4e09\u5927\u6b65\u9aa4"), (0, l.kt)("p", null, (0, l.kt)("img", { parentName: "p", src: "https://user-images.githubusercontent.com/17002181/124876479-9f29c700-dffc-11eb-9eef-a4bc85ebb6be.png", alt: "image" })), (0, l.kt)("ol", null, (0, l.kt)("li", { parentName: "ol" }, (0, l.kt)("p", { parentName: "li" }, (0, l.kt)("strong", { parentName: "p" }, "\u89e3\u6790\u9636\u6bb5"), "\uff1aBabel \u9ed8\u8ba4\u4f7f\u7528 ", (0, l.kt)("strong", { parentName: "p" }, "@babel/parser"), " \u5c06\u4ee3\u7801\u8f6c\u6362\u4e3a AST\u3002\u89e3\u6790\u4e00\u822c\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a\u8bcd\u6cd5\u5206\u6790\u548c\u8bed\u6cd5\u5206\u6790\u3002"), (0, l.kt)("ul", { parentName: "li" }, (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("strong", { parentName: "li" }, "\u8bcd\u6cd5\u5206\u6790"), "\uff1a\u5bf9\u8f93\u5165\u7684\u5b57\u7b26\u5e8f\u5217\u505a\u6807\u8bb0\u5316(tokenization)\u64cd\u4f5c\u3002"), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("strong", { parentName: "li" }, "\u8bed\u6cd5\u5206\u6790"), "\uff1a\u5904\u7406\u6807\u8bb0\u4e0e\u6807\u8bb0\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u6700\u7ec8\u5f62\u6210\u4e00\u9897\u5b8c\u6574\u7684 AST \u7ed3\u6784\u3002"))), (0, l.kt)("li", { parentName: "ol" }, (0, l.kt)("p", { parentName: "li" }, (0, l.kt)("strong", { parentName: "p" }, "\u8f6c\u6362\u9636\u6bb5"), "\uff1aBabel \u4f7f\u7528 ", (0, l.kt)("strong", { parentName: "p" }, "@babel/traverse"), " \u63d0\u4f9b\u7684\u65b9\u6cd5\u5bf9 AST \u8fdb\u884c\u6df1\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u8c03\u7528\u63d2\u4ef6\u5bf9\u5173\u6ce8\u8282\u70b9\u7684\u5904\u7406\u51fd\u6570\uff0c\u6309\u9700\u5bf9 AST \u8282\u70b9\u8fdb\u884c\u589e\u5220\u6539\u64cd\u4f5c\u3002")), (0, l.kt)("li", { parentName: "ol" }, (0, l.kt)("p", { parentName: "li" }, (0, l.kt)("strong", { parentName: "p" }, "\u751f\u6210\u9636\u6bb5"), "\uff1aBabel \u9ed8\u8ba4\u4f7f\u7528 ", (0, l.kt)("strong", { parentName: "p" }, "@babel/generator"), " \u5c06\u4e0a\u4e00\u9636\u6bb5\u5904\u7406\u540e\u7684 AST \u8f6c\u6362\u4e3a\u4ee3\u7801\u5b57\u7b26\u4e32\u3002"))), (0, l.kt)("h3", { id: "3-babel-\u63d2\u4ef6\u7cfb\u7edf" }, "3. Babel \u63d2\u4ef6\u7cfb\u7edf"), (0, l.kt)("p", null, "Babel \u7684\u6838\u5fc3\u6a21\u5757 @babel/core\uff0c@babel/parser\uff0c@babel/traverse \u548c @babel/generator \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7f16\u8bd1\u6d41\u7a0b\u3002\u800c\u5177\u4f53\u7684\u8f6c\u6362\u903b\u8f91\u9700\u8981\u63d2\u4ef6\u6765\u5b8c\u6210\u3002"), (0, l.kt)("p", null, "\u5728\u4f7f\u7528 Babel \u65f6\uff0c\u6211\u4eec\u53ef\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6307\u5b9a plugin \u548c preset\u3002\u800c preset \u53ef\u4ee5\u662f plugin \u548c preset \u4ee5\u53ca\u5176\u4ed6\u914d\u7f6e\u7684\u96c6\u5408\u3002Babel \u4f1a\u9012\u5f52\u8bfb\u53d6 preset\uff0c\u6700\u7ec8\u83b7\u53d6\u4e00\u4e2a\u5927\u7684 plugins \u6570\u7ec4\uff0c\u7528\u4e8e\u540e\u7eed\u4f7f\u7528\u3002"), (0, l.kt)("h4", { id: "\u5e38\u89c1-presets" }, "\u5e38\u89c1 presets"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "@babel/preset-env"), (0, l.kt)("li", { parentName: "ul" }, "@babel/preset-typescript"), (0, l.kt)("li", { parentName: "ul" }, "@babel/preset-react"), (0, l.kt)("li", { parentName: "ul" }, "@babel/preset-flow")), (0, l.kt)("p", null, "\u6700\u5e38\u89c1\u7684 @babel/preset-env \u9884\u8bbe\uff0c\u5305\u542b\u4e86", (0, l.kt)("a", { parentName: "p", href: "https://github.com/babel/babel/blob/master/packages/babel-compat-data/data/plugins.json" }, "\u4e00\u7ec4"), "\u6700\u65b0\u6d4f\u89c8\u5668\u5df2\u652f\u6301\u7684 ES \u8bed\u6cd5\u7279\u6027\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u76ee\u6807\u8fd0\u884c\u73af\u5883\u8303\u56f4\uff0c\u81ea\u52a8\u6309\u9700\u5f15\u5165\u63d2\u4ef6\u3002"), (0, l.kt)("h4", { id: "\u7f16\u5199-babel-\u63d2\u4ef6" }, "\u7f16\u5199 Babel \u63d2\u4ef6"), (0, l.kt)("p", null, "Babel \u63d2\u4ef6\u7684\u5199\u6cd5\u662f\u501f\u52a9", (0, l.kt)("strong", { parentName: "p" }, "\u8bbf\u95ee\u8005\u6a21\u5f0f"), "\uff08Visitor Pattern\uff09\u5bf9\u5173\u6ce8\u7684\u8282\u70b9\u5b9a\u4e49\u5904\u7406\u51fd\u6570\u3002\u53c2\u8003\u4e00\u4e2a\u7b80\u5355 Babel \u63d2\u4ef6\u4f8b\u5b50\uff1a"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-js" }, "module.exports = function () {\n  return {\n    pre() {},\n    // \u5728 visitor \u4e0b\u6302\u8f7d\u5404\u79cd\u611f\u5174\u8da3\u7684\u8282\u70b9\u7c7b\u578b\u7684\u76d1\u542c\u65b9\u6cd5\n    visitor: {\n      /**\n       * \u5bf9 Identify \u7c7b\u578b\u7684\u8282\u70b9\u8fdb\u884c\u5904\u7406\n       * @param {NodePath} path\n       */\n      Identifier(path) {\n        path.node.name = path.node.name.toUpperCase();\n      },\n    },\n    post() {},\n  };\n};\n")), (0, l.kt)("p", null, "\u4f7f\u7528\u8be5 Babel \u63d2\u4ef6\u7684\u6548\u679c\u5982\u4e0b\uff1a"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-js" }, '// input\n\n// index.js\nfunction hzfe() {}\n\n// .babelrc\n{\n  "plugins": ["babel-plugin-yourpluginname"]\n}\n')), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-js" }, "// output\nfunction HZFE() {}\n")), (0, l.kt)("h4", { id: "\u6df1\u5165-babel-\u8f6c\u6362\u9636\u6bb5" }, "\u6df1\u5165 Babel \u8f6c\u6362\u9636\u6bb5"), (0, l.kt)("p", null, "\u5728\u8f6c\u6362\u9636\u6bb5\uff0cBabel \u7684\u76f8\u5173\u65b9\u6cd5\u4f1a\u83b7\u5f97\u4e00\u4e2a\u63d2\u4ef6\u6570\u7ec4\u53d8\u91cf\uff0c\u7528\u4e8e\u540e\u7eed\u7684\u64cd\u4f5c\u3002\u63d2\u4ef6\u7ed3\u6784\u53ef\u53c2\u8003\u4ee5\u4e0b\u63a5\u53e3\u3002"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-ts" }, "interface Plugin {\n  key: string | undefined | null;\n  post: Function | void;\n  pre: Function | void;\n  visitor: Object;\n  parserOverride: Function | void;\n  generatorOverride: Function | void;\n  // ...\n}\n")), (0, l.kt)("p", null, (0, l.kt)("strong", { parentName: "p" }, "\u8f6c\u6362\u9636\u6bb5"), "\uff0cBabel \u4f1a\u6309\u4ee5\u4e0b\u987a\u5e8f\u6267\u884c\u3002\u8be6\u7ec6\u903b\u8f91\u53ef\u67e5\u770b", (0, l.kt)("a", { parentName: "p", href: "https://github.com/babel/babel/blob/a647b9ea6bdd510f0d80b58dbea66828016ffe00/packages/babel-core/src/transformation/index.ts#L76" }, "\u6e90\u7801"), "\uff1a"), (0, l.kt)("ol", null, (0, l.kt)("li", { parentName: "ol" }, "\u6267\u884c\u6240\u6709\u63d2\u4ef6\u7684 pre \u65b9\u6cd5\u3002"), (0, l.kt)("li", { parentName: "ol" }, "\u6309\u9700\u6267\u884c visitor \u4e2d\u7684\u65b9\u6cd5\u3002"), (0, l.kt)("li", { parentName: "ol" }, "\u6267\u884c\u6240\u6709\u63d2\u4ef6\u7684 post \u65b9\u6cd5\u3002")), (0, l.kt)("p", null, "\u4e00\u822c\u6765\u8bf4\uff0c\u5199 Babel \u63d2\u4ef6\u4e3b\u8981\u4f7f\u7528\u5230\u7684\u662f visitor \u5bf9\u8c61\uff0c\u8fd9\u4e2a visitor \u5bf9\u8c61\u4e2d\u4f1a\u4e66\u5199\u5bf9\u4e8e\u5173\u6ce8\u7684 AST \u8282\u70b9\u7684\u5904\u7406\u903b\u8f91\u3002\u800c\u4e0a\u9762\u6267\u884c\u987a\u5e8f\u4e2d\u7684\u7b2c\u4e8c\u6b65\u6240\u6307\u7684 visitor \u5bf9\u8c61\uff0c\u662f\u6574\u5408\u81ea\u5404\u63d2\u4ef6\u7684 visitor\uff0c\u6700\u7ec8\u5f62\u6210\u4e00\u4e2a\u5927\u7684 visitor \u5bf9\u8c61\uff0c\u5927\u81f4\u7684\u6570\u636e\u7ed3\u6784\u53ef\u53c2\u8003\u4ee5\u4e0b\u63a5\u53e3\uff1a"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-ts" }, "// \u4e66\u5199\u63d2\u4ef6\u65f6\u7684 visitor \u7ed3\u6784\ninterface VisitorInPlugin {\n  [ASTNodeTypeName: string]:\n    | Function\n    | {\n        enter?: Function;\n        exit?: Function;\n      };\n}\n\n// babel \u6700\u7ec8\u6574\u5408\u7684 visitor \u7ed3\u6784\ninterface VisitorInTransform {\n  [ASTNodeTypeName: string]: {\n    // \u4e0d\u540c\u63d2\u4ef6\u5bf9\u76f8\u540c\u8282\u70b9\u7684\u5904\u7406\u4f1a\u5408\u5e76\u4e3a\u6570\u7ec4\n    enter?: Function[];\n    exit?: Function[];\n  };\n}\n")), (0, l.kt)("p", null, "\u5728\u5bf9 AST \u8fdb\u884c", (0, l.kt)("strong", { parentName: "p" }, "\u6df1\u5ea6\u4f18\u5148\u904d\u5386"), "\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u521b\u5efa TraversalContext \u5bf9\u8c61\u6765\u628a\u63a7\u5bf9 NodePath \u8282\u70b9\u7684\u8bbf\u95ee\uff0c\u8bbf\u95ee\u65f6\u8c03\u7528\u5bf9\u8282\u70b9\u6240\u5b9a\u4e49\u7684\u5904\u7406\u65b9\u6cd5\uff0c\u4ece\u800c\u5b9e\u73b0\u6309\u9700\u6267\u884c visitor \u4e2d\u7684\u65b9\u6cd5\u3002\u8be6\u7ec6\u5b9e\u73b0\u8bf7\u770b ", (0, l.kt)("a", { parentName: "p", href: "https://github.com/babel/babel/tree/bc1b9537b00499f462aa3ac0d49e30314a66f413/packages/babel-traverse" }, "babel-traverse"), " \u4e2d\u7684\u6e90\u7801\u3002"), (0, l.kt)("h2", { id: "\u53c2\u8003\u8d44\u6599" }, "\u53c2\u8003\u8d44\u6599"), (0, l.kt)("ol", null, (0, l.kt)("li", { parentName: "ol" }, (0, l.kt)("a", { parentName: "li", href: "https://en.wikipedia.org/wiki/Abstract_syntax_tree" }, "AST")), (0, l.kt)("li", { parentName: "ol" }, (0, l.kt)("a", { parentName: "li", href: "https://github.com/jamiebuilds/babel-handbook" }, "Babel-handbook")), (0, l.kt)("li", { parentName: "ol" }, (0, l.kt)("a", { parentName: "li", href: "https://github.com/estree/estree" }, "estree")), (0, l.kt)("li", { parentName: "ol" }, (0, l.kt)("a", { parentName: "li", href: "https://en.wikipedia.org/wiki/Visitor_pattern" }, "\u8bbf\u95ee\u8005\u6a21\u5f0f")))) } c.isMDXComponent = !0 } }]);