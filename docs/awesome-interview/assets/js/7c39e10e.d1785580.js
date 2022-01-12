"use strict"; (self.webpackChunkjjbook = self.webpackChunkjjbook || []).push([[5582], { 9613: function (e, n, t) { t.d(n, { Zo: function () { return s }, kt: function () { return y } }); var r = t(9496); function a(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e } function i(e, n) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); n && (r = r.filter((function (n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), t.push.apply(t, r) } return t } function l(e) { for (var n = 1; n < arguments.length; n++) { var t = null != arguments[n] ? arguments[n] : {}; n % 2 ? i(Object(t), !0).forEach((function (n) { a(e, n, t[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function (n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n)) })) } return e } function p(e, n) { if (null == e) return {}; var t, r, a = function (e, n) { if (null == e) return {}; var t, r, a = {}, i = Object.keys(e); for (r = 0; r < i.length; r++)t = i[r], n.indexOf(t) >= 0 || (a[t] = e[t]); return a }(e, n); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (r = 0; r < i.length; r++)t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]) } return a } var c = r.createContext({}), o = function (e) { var n = r.useContext(c), t = n; return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t }, s = function (e) { var n = o(e.components); return r.createElement(c.Provider, { value: n }, e.children) }, f = { inlineCode: "code", wrapper: function (e) { var n = e.children; return r.createElement(r.Fragment, {}, n) } }, u = r.forwardRef((function (e, n) { var t = e.components, a = e.mdxType, i = e.originalType, c = e.parentName, s = p(e, ["components", "mdxType", "originalType", "parentName"]), u = o(t), y = a, m = u["".concat(c, ".").concat(y)] || u[y] || f[y] || i; return t ? r.createElement(m, l(l({ ref: n }, s), {}, { components: t })) : r.createElement(m, l({ ref: n }, s)) })); function y(e, n) { var t = arguments, a = n && n.mdxType; if ("string" == typeof e || a) { var i = t.length, l = new Array(i); l[0] = u; var p = {}; for (var c in n) hasOwnProperty.call(n, c) && (p[c] = n[c]); p.originalType = e, p.mdxType = "string" == typeof e ? e : a, l[1] = p; for (var o = 2; o < i; o++)l[o] = t[o]; return r.createElement.apply(null, l) } return r.createElement.apply(null, t) } u.displayName = "MDXCreateElement" }, 4454: function (e, n, t) { t.r(n), t.d(n, { frontMatter: function () { return p }, contentTitle: function () { return c }, metadata: function () { return o }, toc: function () { return s }, default: function () { return u } }); var r = t(5900), a = t(4750), i = (t(9496), t(9613)), l = ["components"], p = { sidebar_label: "\u57fa\u7840\uff1aTypeScript \u4e2d\u7684 Interface \u548c Type Alias", sidebar_position: 7 }, c = "TypeScript \u4e2d\u7684 Interface \u548c Type Alias", o = { unversionedId: "book3/js-ts-interface-type", id: "book3/js-ts-interface-type", isDocsHomePage: !1, title: "TypeScript \u4e2d\u7684 Interface \u548c Type Alias", description: "\u76f8\u5173\u95ee\u9898", source: "@site/docs/book3/js-ts-interface-type.md", sourceDirName: "book3", slug: "/book3/js-ts-interface-type", permalink: "/book-docs/awesome-interview/book3/js-ts-interface-type", tags: [], version: "current", sidebarPosition: 7, frontMatter: { sidebar_label: "\u57fa\u7840\uff1aTypeScript \u4e2d\u7684 Interface \u548c Type Alias", sidebar_position: 7 }, sidebar: "tutorialSidebar", previous: { title: "\u57fa\u7840\uff1aJavaScript \u5f02\u6b65\u7f16\u7a0b", permalink: "/book-docs/awesome-interview/book3/js-async" }, next: { title: "\u6837\u5f0f\uff1a\u79fb\u52a8\u7aef\u81ea\u9002\u5e94\u7684\u5e38\u89c1\u624b\u6bb5", permalink: "/book-docs/awesome-interview/book3/css-mobile-adaptive" } }, s = [{ value: "\u76f8\u5173\u95ee\u9898", id: "\u76f8\u5173\u95ee\u9898", children: [], level: 2 }, { value: "\u56de\u7b54\u5173\u952e\u70b9", id: "\u56de\u7b54\u5173\u952e\u70b9", children: [], level: 2 }, { value: "\u77e5\u8bc6\u70b9\u6df1\u5165", id: "\u77e5\u8bc6\u70b9\u6df1\u5165", children: [{ value: "1. Interface \u548c Type \u7684\u76f8\u540c\u70b9", id: "1-interface-\u548c-type-\u7684\u76f8\u540c\u70b9", children: [{ value: "1.1 \u53ef\u63cf\u8ff0\u5bf9\u8c61/\u51fd\u6570", id: "11-\u53ef\u63cf\u8ff0\u5bf9\u8c61\u51fd\u6570", children: [], level: 4 }, { value: "1.2 \u53ef\u6269\u5c55", id: "12-\u53ef\u6269\u5c55", children: [], level: 4 }, { value: "1.3 class Implements", id: "13-class-implements", children: [], level: 4 }], level: 3 }, { value: "2. Interface \u548c Type \u7684\u4e0d\u540c\u70b9", id: "2-interface-\u548c-type-\u7684\u4e0d\u540c\u70b9", children: [{ value: "2.1 \u57fa\u672c\u7c7b\u578b\u522b\u540d\u3001\u8054\u5408\u7c7b\u578b\u3001\u5143\u7ec4", id: "21-\u57fa\u672c\u7c7b\u578b\u522b\u540d\u8054\u5408\u7c7b\u578b\u5143\u7ec4", children: [], level: 4 }, { value: "2.2 \u58f0\u660e\u5408\u5e76", id: "22-\u58f0\u660e\u5408\u5e76", children: [], level: 4 }, { value: "2.3 \u52a8\u6001\u5c5e\u6027", id: "23-\u52a8\u6001\u5c5e\u6027", children: [], level: 4 }], level: 3 }], level: 2 }, { value: "\u53c2\u8003\u8d44\u6599", id: "\u53c2\u8003\u8d44\u6599", children: [], level: 2 }], f = { toc: s }; function u(e) { var n = e.components, t = (0, a.Z)(e, l); return (0, i.kt)("wrapper", (0, r.Z)({}, f, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "typescript-\u4e2d\u7684-interface-\u548c-type-alias" }, "TypeScript \u4e2d\u7684 Interface \u548c Type Alias"), (0, i.kt)("h2", { id: "\u76f8\u5173\u95ee\u9898" }, "\u76f8\u5173\u95ee\u9898"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Interface \u548c Type Alias \u7684\u4f5c\u7528"), (0, i.kt)("li", { parentName: "ul" }, "Interface \u548c Type Alias \u7684\u76f8\u540c\u70b9"), (0, i.kt)("li", { parentName: "ul" }, "Interface \u548c Type Alias \u7684\u533a\u522b")), (0, i.kt)("h2", { id: "\u56de\u7b54\u5173\u952e\u70b9" }, "\u56de\u7b54\u5173\u952e\u70b9"), (0, i.kt)("p", null, (0, i.kt)("inlineCode", { parentName: "p" }, "\u7c7b\u578b\u7ea6\u675f"), " ", (0, i.kt)("inlineCode", { parentName: "p" }, "\u6269\u5c55"), " ", (0, i.kt)("inlineCode", { parentName: "p" }, "\u7c7b\u578b\u5408\u5e76")), (0, i.kt)("p", null, "Interface \u548c Type Alias\uff08Type \u522b\u540d\uff0c\u4e0b\u6587\u7b80\u79f0 Type\uff09\u662f TypeScript \u4e2d\u4e24\u4e2a\u975e\u5e38\u91cd\u8981\u4e14\u5e38\u7528\u7684\u6982\u5ff5\u3002\u5728\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d\uff0cInterface \u548c Type \u4e3b\u8981\u8d77\u5230\u7c7b\u578b\u7684\u9650\u5236\u548c\u89c4\u8303\u7684\u4f5c\u7528\uff0c\u5b83\u4eec\u4e0d\u5173\u5fc3\u5b9e\u73b0\u7ec6\u8282\uff0c\u53ea\u89c4\u5b9a\u548c\u9650\u5236\u7c7b\u6216\u53d8\u91cf\u5fc5\u987b\u63d0\u4f9b\u5bf9\u5e94\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"), (0, i.kt)("p", null, "Interface \u548c Type \u6838\u5fc3\u7684\u533a\u522b\u662f Type \u4e0d\u53ef\u5728\u5b9a\u4e49\u540e\u91cd\u65b0\u6dfb\u52a0\u5185\u5bb9\uff0c\u800c Interface \u5219\u603b\u662f\u53ef\u4ee5\u6269\u5c55\u65b0\u5185\u5bb9\u3002\u76f8\u6bd4 Interface\uff0cType \u5e76\u6ca1\u6709\u5b9e\u9645\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b\uff0c\u800c\u662f\u521b\u5efa\u4e00\u4e2a\u5f15\u7528\u67d0\u4e2a\u7c7b\u578b\u7684\u540d\u5b57\u3002"), (0, i.kt)("h2", { id: "\u77e5\u8bc6\u70b9\u6df1\u5165" }, "\u77e5\u8bc6\u70b9\u6df1\u5165"), (0, i.kt)("p", null, "\u603b\u4f53\u6765\u8bf4\uff0cInterface \u548c Type \u4e24\u8005\u975e\u5e38\u76f8\u4f3c\uff0cInterface \u7684\u7279\u6027\u5927\u90e8\u5206\u90fd\u53ef\u4ee5\u4f7f\u7528 Type \u5b9e\u73b0\uff0c\u5728\u5927\u591a\u6570\u573a\u666f\u4e0b\u90fd\u53ef\u4ee5\u4efb\u610f\u9009\u62e9 Interface \u6216 Type \u5b9e\u73b0\u529f\u80fd\u3002\u6839\u636e\u8fd9\u4e24\u8005\u8bbe\u8ba1\u4e0a\u7684\u5f02\u540c\uff0c\u53ef\u4ee5\u603b\u7ed3\u51fa\u4e24\u8005\u4f7f\u7528\u4e0a\u7684\u76f8\u540c\u70b9\u548c\u4e0d\u540c\u70b9\u3002"), (0, i.kt)("h3", { id: "1-interface-\u548c-type-\u7684\u76f8\u540c\u70b9" }, "1. Interface \u548c Type \u7684\u76f8\u540c\u70b9"), (0, i.kt)("h4", { id: "11-\u53ef\u63cf\u8ff0\u5bf9\u8c61\u51fd\u6570" }, "1.1 \u53ef\u63cf\u8ff0\u5bf9\u8c61/\u51fd\u6570"), (0, i.kt)("p", null, "Interface \u548c Type \u90fd\u53ef\u4ee5\u63cf\u8ff0\u5bf9\u8c61\u548c\u51fd\u6570\u3002"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-typescript" }, "// Interface\ninterface IHzfe {\n  name: string;\n}\ninterface GetHZFE {\n  (): string;\n}\n\n// Type\ntype THzfe = {\n  name: string;\n};\ntype GetHZFE = () => string;\n")), (0, i.kt)("h4", { id: "12-\u53ef\u6269\u5c55" }, "1.2 \u53ef\u6269\u5c55"), (0, i.kt)("p", null, "Interface \u548c Type \u90fd\u53ef\u4ee5\u6269\u5c55\u7c7b\u578b\u3002"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-typescript" }, "// Interface\ninterface IHzfe {\n  name: string;\n}\ninterface IShfe extends IHzfe {\n  location: string;\n}\n\n// Type\ntype THzfe = {\n  name: string;\n};\ntype TShfe = THzfe & { location: string };\n")), (0, i.kt)("p", null, "\u53e6\u5916\uff0cInterface \u7684 extends \u548c Type \u7684\u4ea4\u53c9\u7c7b\u578b\u6709\u4e00\u4e9b\u7ec6\u5fae\u533a\u522b\uff1aextends \u4e2d\u7684\u540c\u540d\u5b57\u6bb5\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u517c\u5bb9\u7684\u3002\u800c\u4ea4\u53c9\u7c7b\u578b\u4e2d\u51fa\u73b0\u4e86\u540c\u540d\u5b57\u6bb5\u4e14\u7c7b\u578b\u4e0d\u540c\u65f6\uff0c\u5219\u7c7b\u578b\u4e00\u822c\u662f never\u3002"), (0, i.kt)("h4", { id: "13-class-implements" }, "1.3 class Implements"), (0, i.kt)("p", null, "Interface \u548c Type \u63cf\u8ff0\u7684\u7c7b\u578b\u90fd\u53ef\u4ee5\u88ab class \u5b9e\u73b0\u3002"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-typescript" }, '// Interface\ninterface IHzfe {\n  name: string;\n}\n\n// Type\ntype THzfe = {\n  name: string;\n};\n\nclass HZFE1 implements IHzfe {\n  name = "HZFEStudio";\n}\nclass HZFE2 implements THzfe {\n  name = "HZFEStudio";\n}\n')), (0, i.kt)("h3", { id: "2-interface-\u548c-type-\u7684\u4e0d\u540c\u70b9" }, "2. Interface \u548c Type \u7684\u4e0d\u540c\u70b9"), (0, i.kt)("h4", { id: "21-\u57fa\u672c\u7c7b\u578b\u522b\u540d\u8054\u5408\u7c7b\u578b\u5143\u7ec4" }, "2.1 \u57fa\u672c\u7c7b\u578b\u522b\u540d\u3001\u8054\u5408\u7c7b\u578b\u3001\u5143\u7ec4"), (0, i.kt)("p", null, "\u7531\u4e8e Type \u5b9a\u4e49\u7684\u5b9e\u9645\u662f\u4e00\u4e2a\u522b\u540d\uff0c\u6240\u4ee5 Type \u53ef\u4ee5\u63cf\u8ff0\u4e00\u4e9b\u57fa\u672c\u7c7b\u578b\u3001\u8054\u5408\u7c7b\u578b\u548c\u5143\u7ec4\u7684\u522b\u540d\u3002"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-typescript" }, "// \u57fa\u672c\u7c7b\u578b\ntype HZFEMember = number;\n\n// \u8054\u5408\u7c7b\u578b\ntype HZFEMemberTechStack = string | string[];\n\n// \u5143\u7ec4\ntype HZFEMember = [number, string];\n")), (0, i.kt)("h4", { id: "22-\u58f0\u660e\u5408\u5e76" }, "2.2 \u58f0\u660e\u5408\u5e76"), (0, i.kt)("p", null, "Interface \u53ef\u4ee5\u91cd\u590d\u5b9a\u4e49\uff0c\u5e76\u5c06\u5408\u5e76\u6240\u6709\u58f0\u660e\u7684\u5c5e\u6027\u4e3a\u5355\u4e2a\u63a5\u53e3\u3002\u800c Type \u4e0d\u53ef\u91cd\u590d\u5b9a\u4e49\u3002"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-typescript" }, '// Interface\ninterface IHzfe {\n  name: string;\n}\ninterface IHzfe {\n  member: number;\n}\n\nconst hzfe: IHzfe = { name: "HZFE", member: 17 };\n')), (0, i.kt)("h4", { id: "23-\u52a8\u6001\u5c5e\u6027" }, "2.3 \u52a8\u6001\u5c5e\u6027"), (0, i.kt)("p", null, "Type \u53ef\u4ee5\u4f7f\u7528 in \u5173\u952e\u5b57\u52a8\u6001\u751f\u6210\u5c5e\u6027\uff0c\u800c Interface \u7684\u7d22\u5f15\u503c\u5fc5\u987b\u662f string \u6216 number \u7c7b\u578b\uff0c\u6240\u4ee5 Interface \u5e76\u4e0d\u652f\u6301\u52a8\u6001\u751f\u6210\u5c5e\u6027\u3002"), (0, i.kt)("pre", null, (0, i.kt)("code", { parentName: "pre", className: "language-typescript" }, 'type HZFELanguage = "JavaScript" | "Go";\ntype HZFEProjects = {\n  [key in HZFELanguage]?: string[];\n};\n\nconst hzfeProjects: HZFEProjects = {\n  JavaScript: ["xx", "xx"],\n};\n')), (0, i.kt)("h2", { id: "\u53c2\u8003\u8d44\u6599" }, "\u53c2\u8003\u8d44\u6599"), (0, i.kt)("ol", null, (0, i.kt)("li", { parentName: "ol" }, (0, i.kt)("a", { parentName: "li", href: "https://www.typescriptlang.org/" }, "TypScript - Typed JavaScript at Any Scale")))) } u.isMDXComponent = !0 } }]);