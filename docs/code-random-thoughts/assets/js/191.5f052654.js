(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{576:function(s,t,a){"use strict";a.r(t);var n=a(54),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/RsdcQ9umo09R6cfnwXZlrQ"}},[a("img",{attrs:{src:"https://img.shields.io/badge/PDF下载-代码随想录-blueviolet",alt:""}})]),s._v(" "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/b66DFkOp8OOxdZC_xLZxfw"}},[a("img",{attrs:{src:"https://img.shields.io/badge/刷题-微信群-green",alt:""}})]),s._v(" "),a("a",{attrs:{href:"https://space.bilibili.com/525438321"}},[a("img",{attrs:{src:"https://img.shields.io/badge/B站-代码随想录-orange",alt:""}})]),s._v(" "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/QVF6upVMSbgvZy8lHZS3CQ"}},[a("img",{attrs:{src:"https://img.shields.io/badge/知识星球-代码随想录-blue",alt:""}})])]),s._v(" "),a("p",{attrs:{align:"center"}},[a("strong",[s._v("欢迎大家"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/tqCxrMEU-ajQumL1i8im9A"}},[s._v("参与本项目")]),s._v("，贡献其他语言版本的代码，拥抱开源，让更多学习算法的小伙伴们收益！")])]),s._v(" "),a("p",[s._v("现在很多企业都在牛客上进行面试，"),a("strong",[s._v("很多录友和我反馈说搞不懂牛客上输入代码的ACM模式")]),s._v("。")]),s._v(" "),a("p",[s._v("什么是ACM输入模式呢？ 就是自己构造输入数据格式，把要需要处理的容器填充好，OJ不会给你任何代码，包括include哪些函数都要自己写，最后也要自己控制返回数据的格式。")]),s._v(" "),a("p",[s._v("而力扣上是核心代码模式，就是把要处理的数据都已经放入容器里，可以直接写逻辑，例如这样：")]),s._v(" "),a("div",{staticClass:"language-CPP line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("minimumTotal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" triangle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("如果大家从一开始学习算法就一直在力扣上的话，突然切到牛客网上的ACM模式会很不适应")]),s._v("。")]),s._v(" "),a("p",[s._v("因为我上学的时候就搞ACM，在POJ（北大的在线判题系统）和ZOJ（浙大的在线判题系统）上刷过6、7百道题目了，对这种ACM模式就很熟悉。")]),s._v(" "),a("p",[s._v("接下来我给大家讲一下ACM模式应该如何写。")]),s._v(" "),a("p",[s._v("这里我拿牛客上 腾讯2020校园招聘-后台 的面试题目来举一个例子，本题我不讲解题思路，只是拿本题为例讲解ACM输入输出格式。")]),s._v(" "),a("p",[s._v("题目描述：")]),s._v(" "),a("p",[s._v("由于业绩优秀，公司给小Q放了 n 天的假，身为工作狂的小Q打算在在假期中工作、锻炼或者休息。他有个奇怪的习惯：不会连续两天工作或锻炼。只有当公司营业时，小Q才能去工作，只有当健身房营业时，小Q才能去健身，小Q一天只能干一件事。给出假期中公司，健身房的营业情况，求小Q最少需要休息几天。")]),s._v(" "),a("p",[s._v("输入描述:\n第一行一个整数  表示放假天数\n第二行 n 个数 每个数为0或1,第 i 个数表示公司在第 i 天是否营业\n第三行 n 个数 每个数为0或1,第 i 个数表示健身房在第 i 天是否营业\n（1为营业 0为不营业）")]),s._v(" "),a("p",[s._v("输出描述:\n一个整数，表示小Q休息的最少天数")]),s._v(" "),a("p",[s._v("示例一：\n输入:\n4\n1 1 0 0\n0 1 1 0")]),s._v(" "),a("p",[s._v("输出:\n2")]),s._v(" "),a("p",[s._v("这道题如果要是力扣上的核心代码模式，OJ应该直接给出如下代码：")]),s._v(" "),a("div",{staticClass:"language-CPP line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" work"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" gym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理逻辑")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("以上代码中我们直接写核心逻辑就行了，work数组，gym数组都是填好的，直接拿来用就行，处理完之后 return 结果就完事了。")]),s._v(" "),a("p",[s._v("那么看看ACM模式我们要怎么写呢。")]),s._v(" "),a("p",[s._v("ACM模式要求写出来的代码是直接可以本地运行的，所以我们需要自己写include哪些库函数，构造输入用例，构造输出用例。")]),s._v(" "),a("p",[s._v("拿本题来说，为了让代码可以运行，需要include这些库函数：")]),s._v(" "),a("div",{staticClass:"language-CPP line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<vector>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("然后开始写主函数，来处理输入用例了，示例一 是一个完整的测试用例，一般我们测了一个用例还要测第二个用例，所以用：while(cin>>n) 来输入数据。")]),s._v(" "),a("p",[s._v("这里输入的n就是天数，得到天数之后，就可以来构造work数组和gym数组了。")]),s._v(" "),a("p",[s._v("此时就已经完成了输入用例构建，然后就是处理逻辑了，最后返回结果。")]),s._v(" "),a("p",[s._v("完整代码如下：")]),s._v(" "),a("div",{staticClass:"language-CPP line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<vector>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gym")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("work")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" cin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" work"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" cin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" gym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理逻辑")]),s._v("\n\n        cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("可以看出ACM模式要比核心代码模式多写不少代码，相对来说ACM模式更锻炼代码能力，而核心代码模式是把侧重点完全放在算法逻辑上。")]),s._v(" "),a("p",[a("strong",[s._v("国内企业现在很多都用牛客来进行面试，所以这种ACM模式大家还有必要熟悉一下")]),s._v("，以免面试的时候因为输入输出搞不懂而错失offer。")]),s._v(" "),a("p",[s._v("如果大家有精力的话，也可以去POJ上去刷刷题，POJ是ACM选手首选OJ，输入模式也是ACM模式。")]),s._v(" "),a("hr"),s._v(" "),a("ul",[a("li",[s._v("作者微信："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/b66DFkOp8OOxdZC_xLZxfw",target:"_blank",rel:"noopener noreferrer"}},[s._v("程序员Carl"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("B站视频："),a("a",{attrs:{href:"https://space.bilibili.com/525438321",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码随想录"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("知识星球："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/QVF6upVMSbgvZy8lHZS3CQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码随想录"),a("OutboundLink")],1),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码.jpg",width:"450"}})])])])])}),[],!1,null,null,null);t.default=r.exports}}]);