(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{547:function(s,t,a){s.exports=a.p+"assets/img/1.581c531e.png"},670:function(s,t,a){"use strict";a.r(t);var n=a(33),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"链表中倒数第-k-个结点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链表中倒数第-k-个结点"}},[s._v("#")]),s._v(" 链表中倒数第 k 个结点")]),s._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),n("p",[s._v("输入一个链表，输出该链表中倒数第 k 个结点。")]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("准备两个指针："),n("code",[s._v("p1")]),s._v("和"),n("code",[s._v("p2")]),s._v("，初始时让"),n("code",[s._v("p1")]),s._v("和"),n("code",[s._v("p2")]),s._v("都指向链表头部，然后让"),n("code",[s._v("p1")]),s._v("不动，让"),n("code",[s._v("p2")]),s._v("往前走"),n("code",[s._v("K")]),s._v("步，这样"),n("code",[s._v("p1")]),s._v("和"),n("code",[s._v("p2")]),s._v("就相差了"),n("code",[s._v("K")]),s._v("个结点，然后让"),n("code",[s._v("p1")]),s._v("和"),n("code",[s._v("p2")]),s._v("同时向前走，当"),n("code",[s._v("p2")]),s._v("走到链表最后一个节点"),n("code",[s._v("null")]),s._v("时，此时"),n("code",[s._v("p1")]),s._v("所在的节点即为链表中倒数第 k 个结点，如图：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(547),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*function ListNode(x){\n    this.val = x;\n    this.next = null;\n}*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("FindKthToTail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 让p1先走k步")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处包含处理一种边界情况：当链表只有5个结点而要求倒数第6个结点时")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 要求倒数第6个结点，则p1应向前走6步，而p1走到第5步时已经走到链表末尾null了，")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时循环如果还未结束，那就说明是出现了这种边界情况，返回null即可")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);