(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{481:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说说你对选择排序的理解-如何实现-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对选择排序的理解-如何实现-应用场景"}},[t._v("#")]),t._v(" 面试官：说说你对选择排序的理解？如何实现？应用场景？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/50a05ed0-2671-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("选择排序（Selection sort）是一种简单直观的排序算法，无论什么数据进去都是 "),a("code",[t._v("O(n²)")]),t._v("的时间复杂度，所以用到它的时候，数据规模越小越好")]),t._v(" "),a("p",[t._v("其基本思想是：首先在未排序的数列中找到最小(or最大)元素，然后将其存放到数列的起始位置")]),t._v(" "),a("p",[t._v("然后再从剩余未排序的元素中继续寻找最小(or最大)元素，然后放到已排序序列的末尾")]),t._v(" "),a("p",[t._v("以此类推，直到所有元素均排序完毕")]),t._v(" "),a("p",[t._v("举个例子，一个数组为 56、12、80、91、29，其排序过程如下：")]),t._v(" "),a("ul",[a("li",[t._v("第一次遍历时，从下标为 1 的位置即 56 开始，找出关键字值最小的记录 12，同下标为 0 的关键字 56 交换位置。此时数组为 12、56、80、91、20")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/60bd2050-2671-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("第二次遍历时，从下标为 2 的位置即 56 开始，找出最小值 20，同下标为 2 的关键字 56 互换位置，此时数组为12、20、80、91、56")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/6b04cf40-2671-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("第三次遍历时，从下标为 3 的位置即 80 开始，找出最小值 56，同下标为 3 的关键字 80 互换位置，此时数组为 12、20、56、91、80")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/757f4e00-2671-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("第四次遍历时，从下标为 4 的位置即 91 开始，找出最小是 80，同下标为 4 的关键字 91 互换位置，此时排序完成，变成有序数组")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/757f4e00-2671-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"二、如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、如何实现"}},[t._v("#")]),t._v(" 二、如何实现")]),t._v(" "),a("p",[t._v("从上面可以看到，对于具有 "),a("code",[t._v("n")]),t._v(" 个记录的无序表遍历 "),a("code",[t._v("n-1")]),t._v(" 次，第"),a("code",[t._v("i")]),t._v(" 次从无序表中第 "),a("code",[t._v("i")]),t._v(" 个记录开始，找出后序关键字中最小的记录，然后放置在第 "),a("code",[t._v("i")]),t._v(" 的位置上")]),t._v(" "),a("p",[t._v("直至到从第"),a("code",[t._v("n")]),t._v("个和第"),a("code",[t._v("n-1")]),t._v("个元素中选出最小的放在第"),a("code",[t._v("n-1")]),t._v("个位置")]),t._v(" "),a("p",[t._v("如下动画所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2019/03/selectionSort.gif",alt:""}})]),t._v(" "),a("p",[t._v("用代码表示则如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectionSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" minIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        minIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("minIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 寻找最小的数")]),t._v("\n                minIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将最小数的索引保存")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("minIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("minIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("第一次内循环比较"),a("code",[t._v("N - 1")]),t._v("次，然后是"),a("code",[t._v("N-2")]),t._v("次，"),a("code",[t._v("N-3")]),t._v("次，……，最后一次内循环比较1次\n共比较的次数是 "),a("code",[t._v("(N - 1) + (N - 2) + ... + 1")]),t._v("，求等差数列和，得 "),a("code",[t._v("(N - 1 + 1)* N / 2 = N^2 / 2")]),t._v("，舍去最高项系数，其时间复杂度为 "),a("code",[t._v("O(N^2)")])]),t._v(" "),a("p",[t._v("从上述也可以看到，选择排序是一种稳定的排序")]),t._v(" "),a("h2",{attrs:{id:"三、应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[t._v("#")]),t._v(" 三、应用场景")]),t._v(" "),a("p",[t._v("和冒泡排序一致，相比其它排序算法，这也是一个相对较高的时间复杂度，一般情况不推荐使用")]),t._v(" "),a("p",[t._v("但是我们还是要掌握冒泡排序的思想及实现，这对于我们的算法思维是有很大帮助的")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://baike.baidu.com/item/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F/9762418")]),t._v(" "),a("li",[t._v("https://zhuanlan.zhihu.com/p/29889599")]),t._v(" "),a("li",[t._v("http://data.biancheng.net/view/72.html")])])])}),[],!1,null,null,null);s.default=e.exports}}]);