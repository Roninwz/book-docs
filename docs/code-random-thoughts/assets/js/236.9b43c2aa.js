(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{622:function(a,s,t){"use strict";t.r(s);var r=t(54),v=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"回溯算法理论基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回溯算法理论基础"}},[a._v("#")]),a._v(" 回溯算法理论基础")]),a._v(" "),t("h2",{attrs:{id:"题目分类大纲如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目分类大纲如下"}},[a._v("#")]),a._v(" 题目分类大纲如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210219192050666.png",width:"600",alt:"回溯算法大纲"}})]),a._v(" "),t("p",[a._v("可以配合我的 B 站视频："),t("a",{attrs:{href:"https://www.bilibili.com/video/BV1cy4y167mM/",target:"_blank",rel:"noopener noreferrer"}},[a._v("带你学透回溯算法（理论篇）"),t("OutboundLink")],1),a._v(" 一起学习！")]),a._v(" "),t("h2",{attrs:{id:"什么是回溯法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是回溯法"}},[a._v("#")]),a._v(" 什么是回溯法")]),a._v(" "),t("p",[a._v("回溯法也可以叫做回溯搜索法，它是一种搜索的方式。")]),a._v(" "),t("p",[a._v("在二叉树系列中，我们已经不止一次，提到了回溯，例如"),t("a",{attrs:{href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E9%80%92%E5%BD%92%E5%B8%A6%E7%9D%80%E5%9B%9E%E6%BA%AF.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("二叉树：以为使用了递归，其实还隐藏着回溯"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("p",[a._v("回溯是递归的副产品，只要有递归就会有回溯。")]),a._v(" "),t("p",[t("strong",[a._v("所以以下讲解中，回溯函数也就是递归函数，指的都是一个函数")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"回溯法的效率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回溯法的效率"}},[a._v("#")]),a._v(" 回溯法的效率")]),a._v(" "),t("p",[a._v("回溯法的性能如何呢，这里要和大家说清楚了，"),t("strong",[a._v("虽然回溯法很难，很不好理解，但是回溯法并不是什么高效的算法")]),a._v("。")]),a._v(" "),t("p",[t("strong",[a._v("因为回溯的本质是穷举，穷举所有可能，然后选出我们想要的答案")]),a._v("，如果想让回溯法高效一些，可以加一些剪枝的操作，但也改不了回溯法就是穷举的本质。")]),a._v(" "),t("p",[a._v("那么既然回溯法并不高效为什么还要用它呢？")]),a._v(" "),t("p",[a._v("因为没得选，一些问题能暴力搜出来就不错了，撑死了再剪枝一下，还没有更高效的解法。")]),a._v(" "),t("p",[a._v("此时大家应该好奇了，都什么问题，这么牛逼，只能暴力搜索。")]),a._v(" "),t("h2",{attrs:{id:"回溯法解决的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回溯法解决的问题"}},[a._v("#")]),a._v(" 回溯法解决的问题")]),a._v(" "),t("p",[a._v("回溯法，一般可以解决如下几种问题：")]),a._v(" "),t("ul",[t("li",[a._v("组合问题：N 个数里面按一定规则找出 k 个数的集合")]),a._v(" "),t("li",[a._v("切割问题：一个字符串按一定规则有几种切割方式")]),a._v(" "),t("li",[a._v("子集问题：一个 N 个数的集合里有多少符合条件的子集")]),a._v(" "),t("li",[a._v("排列问题：N 个数按一定规则全排列，有几种排列方式")]),a._v(" "),t("li",[a._v("棋盘问题：N 皇后，解数独等等")])]),a._v(" "),t("p",[t("strong",[a._v("相信大家看着这些之后会发现，每个问题，都不简单！")])]),a._v(" "),t("p",[a._v("另外，会有一些同学可能分不清什么是组合，什么是排列？")]),a._v(" "),t("p",[t("strong",[a._v("组合是不强调元素顺序的，排列是强调元素顺序")]),a._v("。")]),a._v(" "),t("p",[a._v("例如：{1, 2} 和 {2, 1} 在组合上，就是一个集合，因为不强调顺序，而要是排列的话，{1, 2} 和 {2, 1} 就是两个集合了。")]),a._v(" "),t("p",[a._v("记住组合无序，排列有序，就可以了。")]),a._v(" "),t("h2",{attrs:{id:"如何理解回溯法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何理解回溯法"}},[a._v("#")]),a._v(" 如何理解回溯法")]),a._v(" "),t("p",[t("strong",[a._v("回溯法解决的问题都可以抽象为树形结构")]),a._v("，是的，我指的是所有回溯法的问题都可以抽象为树形结构！")]),a._v(" "),t("p",[a._v("因为回溯法解决的都是在集合中递归查找子集，"),t("strong",[a._v("集合的大小就构成了树的宽度，递归的深度，都构成的树的深度")]),a._v("。")]),a._v(" "),t("p",[a._v("递归就要有终止条件，所以必然是一颗高度有限的树（N 叉树）。")]),a._v(" "),t("p",[a._v("这块可能初学者还不太理解，后面的回溯算法解决的所有题目中，我都会强调这一点并画图举相应的例子，现在有一个印象就行。")]),a._v(" "),t("h2",{attrs:{id:"回溯法模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回溯法模板"}},[a._v("#")]),a._v(" 回溯法模板")]),a._v(" "),t("p",[a._v("这里给出 Carl 总结的回溯算法模板。")]),a._v(" "),t("p",[a._v("在讲"),t("a",{attrs:{href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("二叉树的递归"),t("OutboundLink")],1),a._v("中我们说了递归三部曲，这里我再给大家列出回溯三部曲。")]),a._v(" "),t("ul",[t("li",[a._v("回溯函数模板返回值以及参数")])]),a._v(" "),t("p",[a._v("在回溯算法中，我的习惯是函数起名字为 backtracking，这个起名大家随意。")]),a._v(" "),t("p",[a._v("回溯算法中函数返回值一般为 void。")]),a._v(" "),t("p",[a._v("再来看一下参数，因为回溯算法需要的参数可不像二叉树递归的时候那么容易一次性确定下来，所以一般是先写逻辑，然后需要什么参数，就填什么参数。")]),a._v(" "),t("p",[a._v("但后面的回溯题目的讲解中，为了方便大家理解，我在一开始就帮大家把参数确定下来。")]),a._v(" "),t("p",[a._v("回溯函数伪代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("void backtracking(参数)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("回溯函数终止条件")])]),a._v(" "),t("p",[a._v("既然是树形结构，那么我们在讲解"),t("a",{attrs:{href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("二叉树的递归"),t("OutboundLink")],1),a._v("的时候，就知道遍历树形结构一定要有终止条件。")]),a._v(" "),t("p",[a._v("所以回溯也有要终止条件。")]),a._v(" "),t("p",[a._v("什么时候达到了终止条件，树中就可以看出，一般来说搜到叶子节点了，也就找到了满足条件的一条答案，把这个答案存放起来，并结束本层递归。")]),a._v(" "),t("p",[a._v("所以回溯函数终止条件伪代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("if (终止条件) {\n    存放结果;\n    return;\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ul",[t("li",[a._v("回溯搜索的遍历过程")])]),a._v(" "),t("p",[a._v("在上面我们提到了，回溯法一般是在集合中递归搜索，集合的大小构成了树的宽度，递归的深度构成的树的深度。")]),a._v(" "),t("p",[a._v("如图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210130173631174.png",alt:"回溯算法理论基础"}})]),a._v(" "),t("p",[a._v("注意图中，我特意举例集合大小和孩子的数量是相等的！")]),a._v(" "),t("p",[a._v("回溯函数遍历过程伪代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {\n    处理节点;\n    backtracking(路径，选择列表); // 递归\n    回溯，撤销处理结果\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("for 循环就是遍历集合区间，可以理解一个节点有多少个孩子，这个 for 循环就执行多少次。")]),a._v(" "),t("p",[a._v("backtracking 这里自己调用自己，实现递归。")]),a._v(" "),t("p",[a._v("大家可以从图中看出"),t("strong",[a._v("for 循环可以理解是横向遍历，backtracking（递归）就是纵向遍历")]),a._v("，这样就把这棵树全遍历完了，一般来说，搜索叶子节点就是找的其中一个结果了。")]),a._v(" "),t("p",[a._v("分析完过程，回溯算法模板框架如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("void backtracking(参数) {\n    if (终止条件) {\n        存放结果;\n        return;\n    }\n\n    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {\n        处理节点;\n        backtracking(路径，选择列表); // 递归\n        回溯，撤销处理结果\n    }\n}\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[t("strong",[a._v("这份模板很重要，后面做回溯法的题目都靠它了！")])]),a._v(" "),t("p",[a._v("如果从来没有学过回溯算法的录友们，看到这里会有点懵，后面开始讲解具体题目的时候就会好一些了，已经做过回溯法题目的录友，看到这里应该会感同身受了。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("本篇我们讲解了，什么是回溯算法，知道了回溯和递归是相辅相成的。")]),a._v(" "),t("p",[a._v("接着提到了回溯法的效率，回溯法其实就是暴力查找，并不是什么高效的算法。")]),a._v(" "),t("p",[a._v("然后列出了回溯法可以解决几类问题，可以看出每一类问题都不简单。")]),a._v(" "),t("p",[a._v("最后我们讲到回溯法解决的问题都可以抽象为树形结构（N 叉树），并给出了回溯法的模板。")]),a._v(" "),t("p",[a._v("今天是回溯算法的第一天，按照惯例 Carl 都是先概述一波，然后在开始讲解具体题目，没有接触过回溯法的同学刚学起来有点看不懂很正常，后面和具体题目结合起来会好一些。")]),a._v(" "),t("hr"),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码一.jpg",width:"500"}})])])}),[],!1,null,null,null);s.default=v.exports}}]);