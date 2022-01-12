(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{579:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/RsdcQ9umo09R6cfnwXZlrQ"}},[a("img",{attrs:{src:"https://img.shields.io/badge/PDF下载-代码随想录-blueviolet",alt:""}})]),s._v(" "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/b66DFkOp8OOxdZC_xLZxfw"}},[a("img",{attrs:{src:"https://img.shields.io/badge/刷题-微信群-green",alt:""}})]),s._v(" "),a("a",{attrs:{href:"https://space.bilibili.com/525438321"}},[a("img",{attrs:{src:"https://img.shields.io/badge/B站-代码随想录-orange",alt:""}})]),s._v(" "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/QVF6upVMSbgvZy8lHZS3CQ"}},[a("img",{attrs:{src:"https://img.shields.io/badge/知识星球-代码随想录-blue",alt:""}})])]),s._v(" "),a("p",{attrs:{align:"center"}},[a("strong",[s._v("欢迎大家"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/tqCxrMEU-ajQumL1i8im9A"}},[s._v("参与本项目")]),s._v("，贡献其他语言版本的代码，拥抱开源，让更多学习算法的小伙伴们收益！")])]),s._v(" "),a("h1",{attrs:{id:"看了这么多代码-谈一谈代码风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#看了这么多代码-谈一谈代码风格"}},[s._v("#")]),s._v(" 看了这么多代码，谈一谈代码风格！")]),s._v(" "),a("p",[s._v("最近看了很多录友在"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/wZRTrA9Rbvgq1yEkSw4vfQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("leetcode-master"),a("OutboundLink")],1),s._v("上提交的代码，发现很多录友的代码其实并不规范，这一点平时在交流群和知识星球里也能看出来。")]),s._v(" "),a("p",[s._v("很多录友对代码规范应该不甚了解，代码看起来并不舒服。")]),s._v(" "),a("p",[s._v("所以呢，我给大家讲一讲代码规范，我主要以C++代码为例。")]),s._v(" "),a("p",[s._v("需要强调一下，代码规范并不是仅仅是让代码看着舒服，这是一个很重要的习惯。")]),s._v(" "),a("h2",{attrs:{id:"题外话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题外话"}},[s._v("#")]),s._v(" 题外话")]),s._v(" "),a("p",[s._v("工作之后，"),a("strong",[s._v("特别是在大厂，看谁的技术牛不牛逼，不用看谁写出多牛逼的代码，就代码风格扫一眼，立刻就能看出来是正规军还是野生程序员")]),s._v("。")]),s._v(" "),a("p",[s._v("很多人甚至不屑于了解代码规范，认为实现功能就行，这种观点其实在上个世纪是很普遍的，因为那时候一般写代码不需要合作，自己一个人撸整个项目，想怎么写就怎么写。")]),s._v(" "),a("p",[s._v("现在一些小公司，甚至大公司里的某些技术团队也不注重代码规范，赶进度撸出功能就完事，这种情况就要分两方面看：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("第一种情况：这个项目在业务上具有巨大潜力，需要抢占市场，只要先站住市场就能赚到钱，每年年终好几十万，那项目前期还关心啥代码风格，赶进度把功能撸出来，赚钱就完事了，例如12年的微信，15年的王者荣耀。这些项目都是后期在不断优化的。")])]),s._v(" "),a("li",[a("p",[s._v("第二种情况：这个项目没赚到钱，半死不活的，代码还没有设计也没有规范，这样对技术人员的伤害就非常大了。")])])]),s._v(" "),a("p",[a("strong",[s._v("而不注重代码风格的团队，99.99%都是第二种情况")]),s._v("，如果你赶上了第一种情况，那就恭喜你了，本文下面的内容可以不用看了，哈哈。")]),s._v(" "),a("h2",{attrs:{id:"代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码规范"}},[s._v("#")]),s._v(" 代码规范")]),s._v(" "),a("h3",{attrs:{id:"变量命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量命名"}},[s._v("#")]),s._v(" 变量命名")]),s._v(" "),a("p",[s._v("这里我简单说一说规范问题。")]),s._v(" "),a("p",[a("strong",[s._v("权威的C++规范以Google为主")]),s._v("，我给大家下载了一份中文版本，在公众号「代码随想录」后台回复：googlec++编程规范，就可以领取。")]),s._v(" "),a("p",[a("strong",[s._v("具体的规范要以自己团队风格为主")]),s._v("，融入团队才是最重要的。")]),s._v(" "),a("p",[s._v("我先来说说变量的命名。")]),s._v(" "),a("p",[s._v("主流有如下三种变量规则：")]),s._v(" "),a("ul",[a("li",[s._v("小驼峰、大驼峰命名法")]),s._v(" "),a("li",[s._v("下划线命名法")]),s._v(" "),a("li",[s._v("匈牙利命名法")])]),s._v(" "),a("p",[s._v("小驼峰，第一个单词首字母小写，后面其他单词首字母大写。例如 "),a("code",[s._v("int myAge;")])]),s._v(" "),a("p",[s._v("大驼峰法把第一个单词的首字母也大写了。例如："),a("code",[s._v("int MyAge;")])]),s._v(" "),a("p",[s._v("通常来讲 java和go都使用驼峰，C++的函数和结构体命名也是用大驼峰，"),a("strong",[s._v("大家可以看到题解中我的C++代码风格就是小驼峰，因为leetcode上给出的默认函数的命名就是小驼峰，所以我入乡随俗")]),s._v("。")]),s._v(" "),a("p",[s._v("下划线命名法是名称中的每一个逻辑断点都用一个下划线来标记，例如："),a("code",[s._v("int my_age")]),s._v("，"),a("strong",[s._v("下划线命名法是随着C语言的出现流行起来的，如果大家看过UNIX高级编程或者UNIX网络编程，就会发现大量使用这种命名方式")]),s._v("。")]),s._v(" "),a("p",[s._v("匈牙利命名法是：变量名 = 属性 + 类型 + 对象描述，例如："),a("code",[s._v("int iMyAge")]),s._v("，这种命名是一个来此匈牙利的程序员在微软内部推广起来，然后推广给了全世界的Windows开发人员。")]),s._v(" "),a("p",[s._v("这种命名方式在没有IDE的时代，可以很好的提醒开发人员遍历的意义，例如看到iMyAge，就知道它是一个int型的变量，而不用找它的定义，缺点是一旦该变量的属性，那么整个项目里这个变量名字都要改动，所以带来代码维护困难。")]),s._v(" "),a("p",[a("strong",[s._v("目前IDE已经很发达了，都不用标记变量属性了，IDE就会帮我们识别了，所以基本没人用匈牙利命名法了")]),s._v("，虽然我不用IDE，VIM大法好。")]),s._v(" "),a("p",[s._v("我做了一下总结如图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201119173039835.png",alt:"编程风格"}})]),s._v(" "),a("h3",{attrs:{id:"水平留白-代码空格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水平留白-代码空格"}},[s._v("#")]),s._v(" 水平留白（代码空格）")]),s._v(" "),a("p",[s._v("经常看到有的同学的代码都堆在一起，看起来都费劲，或者是有的间隔有空格，有的没有空格，很不统一，有的同学甚至为了让代码精简，把所有空格都省略掉了。")]),s._v(" "),a("p",[s._v("大家如果注意我题解上的代码风格，我的空格都是有统一规范的。")]),s._v(" "),a("p",[a("strong",[s._v("我所有题解的C++代码，都是严格按照Google C++编程规范来的，这样代码看起来就让人感觉清爽一些")]),s._v("。")]),s._v(" "),a("p",[s._v("我举一些例子：")]),s._v(" "),a("p",[s._v("操作符左右一定有空格，例如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("i = i + 1;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("分隔符（"),a("code",[s._v(",")]),s._v(" 和"),a("code",[s._v(";")]),s._v("）前一位没有空格，后一位保持空格，例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int i, j;\nfor (int fastIndex = 0; fastIndex < nums.size(); fastIndex++)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("大括号和函数保持同一行，并有一个空格例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("while (n) {\n    n--;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("控制语句（while，if，for）前都有一个空格，例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("while (n) {\n    if (k > 0) return 9;\n    n--;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("以下是我刚写的力扣283.移动零的代码，大家可以看一下整体风格，注意空格的细节！")]),s._v(" "),a("div",{staticClass:"language-CPP line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("moveZeroes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" slowIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fastIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fastIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fastIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("slowIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" slowIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("这里关于大括号是否要重启一行？")]),s._v(" "),a("p",[s._v("Google规范是 大括号和 控制语句保持同一行的，我个人也很认可这种写法，因为可以缩短代码的行数，特别是项目中代码行数很多的情况下，这种写法是可以提高阅读代码的效率。")]),s._v(" "),a("p",[s._v("当然我并不是说一定要按照Google的规范来，"),a("strong",[s._v("代码风格其实统一就行，没有严格的说谁对谁错")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("如果还是学生，使用C++的话，可以按照题解中我的代码风格来，还是比较标准的。")]),s._v(" "),a("p",[s._v("如果不是C++就自己选一种代码风格坚持下来，")]),s._v(" "),a("p",[s._v("如果已经工作的录友，就要融入团队的代码风格了，团队怎么写，自己就怎么来，毕竟不是一个人在战斗。")]),s._v(" "),a("p",[s._v("就酱，以后我还会陆续分享，关于代码，求职，学习工作之类的内容。")]),s._v(" "),a("hr"),s._v(" "),a("ul",[a("li",[s._v("作者微信："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/b66DFkOp8OOxdZC_xLZxfw",target:"_blank",rel:"noopener noreferrer"}},[s._v("程序员Carl"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("B站视频："),a("a",{attrs:{href:"https://space.bilibili.com/525438321",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码随想录"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("知识星球："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/QVF6upVMSbgvZy8lHZS3CQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码随想录"),a("OutboundLink")],1),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码.jpg",width:"450"}})])])])])}),[],!1,null,null,null);t.default=e.exports}}]);