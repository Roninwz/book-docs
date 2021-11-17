(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{437:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。")]),t._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("这是一道考察二进制的题目")]),t._v(" "),a("p",[t._v("二进制或运算符"),a("code",[t._v("（or）")]),t._v("：符号为|，表示若两个二进制位都为"),a("code",[t._v("0")]),t._v("，则结果为"),a("code",[t._v("0")]),t._v("，否则为"),a("code",[t._v("1")]),t._v("。")]),t._v(" "),a("p",[t._v("二进制与运算符"),a("code",[t._v("（and）")]),t._v("：符号为&，表示若两个二进制位都为"),a("code",[t._v("1")]),t._v("，则结果为"),a("code",[t._v("1")]),t._v("，否则为"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("p",[t._v("二进制否运算符"),a("code",[t._v("（not）")]),t._v("：符号为~，表示对一个二进制位取反。")]),t._v(" "),a("p",[t._v("异或运算符"),a("code",[t._v("（xor）")]),t._v("：符号为^，表示若两个二进制位不相同，则结果为1，否则为0")]),t._v(" "),a("p",[t._v("左移运算符"),a("code",[t._v("m << n")]),t._v("表示把m左移n位，左移n位的时候，最左边的n位将被丢弃，同时在最右边补上"),a("code",[t._v("n")]),t._v("个"),a("code",[t._v("0")]),t._v("，比如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00001010")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00101000")]),t._v("\n")])])]),a("p",[t._v("右移运算符"),a("code",[t._v("m >> n")]),t._v("表示把"),a("code",[t._v("m")]),t._v("右移"),a("code",[t._v("n")]),t._v("位，右移"),a("code",[t._v("n")]),t._v("位的时候，最右边的n位将被丢弃，同时在最左边补上"),a("code",[t._v("n")]),t._v("个"),a("code",[t._v("0")]),t._v("，比如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00001010")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00000010")]),t._v("\n")])])]),a("p",[t._v("我们可以让目标数字和一个数字做与运算")]),t._v(" "),a("p",[t._v("这个用户比较的数字必须只有一位是"),a("code",[t._v("1")]),t._v("其他位是"),a("code",[t._v("0")]),t._v("，这样就可以知道目标数字的这一位是否为"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("p",[t._v("所以用于比较的这个数字初始值为"),a("code",[t._v("1")]),t._v("，比较完后让"),a("code",[t._v("1")]),t._v("左移"),a("code",[t._v("1")]),t._v("位，这样就可以依次比较所有位是否为"),a("code",[t._v("1")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NumberOf1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);