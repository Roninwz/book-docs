(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{674:function(r,t,e){"use strict";e.r(t);var a=e(54),_=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[r._v("我刚刚开始讲解贪心系列的时候就说了，贪心系列并不打算严格的从简单到困难这么个顺序来讲解。")]),r._v(" "),e("p",[r._v("因为贪心的简单题可能往往过于简单甚至感觉不到贪心，如果我连续几天讲解简单的贪心，估计录友们一定会不耐烦了，会感觉贪心有啥好学的。")]),r._v(" "),e("p",[r._v("但贪心的难题又真的有点难，所以我是简单困难交错着讲的，这样大家就感觉难度适中，而且贪心也没有什么框架和套路，所以对刷题顺序要求没有那么高。")]),r._v(" "),e("p",[r._v("但在贪心系列，我发的题目难度会整体呈现一个阶梯状上升，细心的录友们应该有所体会。")]),r._v(" "),e("p",[r._v("在刚刚讲过的回溯系列中，大家可以发现我是严格按照框架难度顺序循序渐进讲解的，"),e("strong",[r._v("和贪心又不一样，因为回溯法如果题目顺序没选好，刷题效果会非常差！")])]),r._v(" "),e("p",[r._v("同样回溯系列也不允许简单困难交替着来，因为前后题目都是有因果关系的，"),e("strong",[r._v("相信跟着刷过回溯系列的录友们都会明白我的良苦用心，哈哈")]),r._v("。")]),r._v(" "),e("p",[e("strong",[r._v("每个系列都有每个系列的特点，我都会根据特点有所调整，大家看我每天的推送的题目，都不是随便找一个到就推送的，都是先有整体规划，然后反复斟酌具体题目的结果")]),r._v("。")]),r._v(" "),e("p",[r._v("那么在贪心总结篇里，我按难易程度以及题目类型大体归个类。")]),r._v(" "),e("p",[r._v("贪心大总结正式开始：")]),r._v(" "),e("h2",{attrs:{id:"贪心理论基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贪心理论基础"}},[r._v("#")]),r._v(" 贪心理论基础")]),r._v(" "),e("p",[r._v("在贪心系列开篇词"),e("a",{attrs:{href:"https://programmercarl.com/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("关于贪心算法，你该了解这些！"),e("OutboundLink")],1),r._v("中，我们就讲解了大家对贪心的普遍疑惑。")]),r._v(" "),e("ol",[e("li",[r._v("贪心很简单，就是常识？")])]),r._v(" "),e("p",[r._v("跟着一起刷题的录友们就会发现，贪心思路往往很巧妙，并不简单。")]),r._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[r._v("贪心有没有固定的套路？")])]),r._v(" "),e("p",[r._v("贪心无套路，也没有框架之类的，需要多看多练培养感觉才能想到贪心的思路。")]),r._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[r._v("究竟什么题目是贪心呢？")])]),r._v(" "),e("p",[r._v("Carl 个人认为：如果找出局部最优并可以推出全局最优，就是贪心，如果局部最优都没找出来，就不是贪心，可能是单纯的模拟。（并不是权威解读，一家之辞哈）")]),r._v(" "),e("p",[r._v("但我们也不用过于强调什么题目是贪心，什么不是贪心，那就太学术了，毕竟学会解题就行了。")]),r._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[r._v("如何知道局部最优推出全局最优，有数学证明么？")])]),r._v(" "),e("p",[r._v("在做贪心题的过程中，如果再来一个数据证明，其实没有必要，手动模拟一下，如果找不出反例，就试试贪心。面试中，代码写出来跑过测试用例即可，或者自己能自圆其说理由就行了")]),r._v(" "),e("p",[r._v("就像是 要用一下 1 + 1 = 2，没有必要再证明一下 1 + 1 究竟为什么等于 2。（例子极端了点，但是这个道理）")]),r._v(" "),e("p",[r._v("相信大家读完"),e("a",{attrs:{href:"https://programmercarl.com/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("关于贪心算法，你该了解这些！"),e("OutboundLink")],1),r._v("，就对贪心有了一个基本的认识了。")]),r._v(" "),e("h2",{attrs:{id:"贪心简单题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贪心简单题"}},[r._v("#")]),r._v(" 贪心简单题")]),r._v(" "),e("p",[r._v("以下三道题目就是简单题，大家会发现贪心感觉就是常识。是的，如下三道题目，就是靠常识，但我都具体分析了局部最优是什么，全局最优是什么，贪心也要贪的有理有据！")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://programmercarl.com/0455.%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：分发饼干"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/1005.K%E6%AC%A1%E5%8F%96%E5%8F%8D%E5%90%8E%E6%9C%80%E5%A4%A7%E5%8C%96%E7%9A%84%E6%95%B0%E7%BB%84%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：K 次取反后最大化的数组和"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0860.%E6%9F%A0%E6%AA%AC%E6%B0%B4%E6%89%BE%E9%9B%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：柠檬水找零"),e("OutboundLink")],1)])]),r._v(" "),e("h2",{attrs:{id:"贪心中等题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贪心中等题"}},[r._v("#")]),r._v(" 贪心中等题")]),r._v(" "),e("p",[r._v("贪心中等题，靠常识可能就有点想不出来了。开始初现贪心算法的难度与巧妙之处。")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://programmercarl.com/0376.%E6%91%86%E5%8A%A8%E5%BA%8F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：摆动序列"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0738.%E5%8D%95%E8%B0%83%E9%80%92%E5%A2%9E%E7%9A%84%E6%95%B0%E5%AD%97.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：单调递增的数字"),e("OutboundLink")],1)])]),r._v(" "),e("h3",{attrs:{id:"贪心解决股票问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贪心解决股票问题"}},[r._v("#")]),r._v(" 贪心解决股票问题")]),r._v(" "),e("p",[r._v("大家都知道股票系列问题是动规的专长，其实用贪心也可以解决，而且还不止就这两道题目，但这两道比较典型，我就拿来单独说一说")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：买卖股票的最佳时机 II"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0714.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA%E5%90%AB%E6%89%8B%E7%BB%AD%E8%B4%B9.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：买卖股票的最佳时机含手续费"),e("OutboundLink")],1)])]),r._v(" "),e("h3",{attrs:{id:"两个维度权衡问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两个维度权衡问题"}},[r._v("#")]),r._v(" 两个维度权衡问题")]),r._v(" "),e("p",[r._v("在出现两个维度相互影响的情况时，两边一起考虑一定会顾此失彼，要先确定一个维度，再确定另一个一个维度。")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://programmercarl.com/0135.%E5%88%86%E5%8F%91%E7%B3%96%E6%9E%9C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：分发糖果"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：根据身高重建队列"),e("OutboundLink")],1)])]),r._v(" "),e("p",[r._v("在讲解本题的过程中，还强调了编程语言的重要性，模拟插队的时候，使用 C++中的 list（链表）替代了 vector(动态数组)，效率会高很多。")]),r._v(" "),e("p",[r._v("所以在"),e("a",{attrs:{href:"https://programmercarl.com/%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97%EF%BC%88vector%E5%8E%9F%E7%90%86%E8%AE%B2%E8%A7%A3%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：根据身高重建队列（续集）"),e("OutboundLink")],1),r._v("详细讲解了，为什么用 list（链表）更快！")]),r._v(" "),e("p",[e("strong",[r._v("大家也要掌握自己所用的编程语言，理解其内部实现机制，这样才能写出高效的算法！")])]),r._v(" "),e("h2",{attrs:{id:"贪心难题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贪心难题"}},[r._v("#")]),r._v(" 贪心难题")]),r._v(" "),e("p",[r._v("这里的题目如果没有接触过，其实是很难想到的，甚至接触过，也一时想不出来，所以题目不要做一遍，要多练！")]),r._v(" "),e("h3",{attrs:{id:"贪心解决区间问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贪心解决区间问题"}},[r._v("#")]),r._v(" 贪心解决区间问题")]),r._v(" "),e("p",[r._v("关于区间问题，大家应该印象深刻，有一周我们专门讲解的区间问题，各种覆盖各种去重。")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://programmercarl.com/0055.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：跳跃游戏"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0045.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8FII.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：跳跃游戏 II"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0452.%E7%94%A8%E6%9C%80%E5%B0%91%E6%95%B0%E9%87%8F%E7%9A%84%E7%AE%AD%E5%BC%95%E7%88%86%E6%B0%94%E7%90%83.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：用最少数量的箭引爆气球"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0435.%E6%97%A0%E9%87%8D%E5%8F%A0%E5%8C%BA%E9%97%B4.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：无重叠区间"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0763.%E5%88%92%E5%88%86%E5%AD%97%E6%AF%8D%E5%8C%BA%E9%97%B4.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：划分字母区间"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/0056.%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：合并区间"),e("OutboundLink")],1)])]),r._v(" "),e("h3",{attrs:{id:"其他难题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他难题"}},[r._v("#")]),r._v(" 其他难题")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0053.%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：最大子序和"),e("OutboundLink")],1),r._v(" 其实是动态规划的题目，但贪心性能更优，很多同学也是第一次发现贪心能比动规更优的题目。")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://programmercarl.com/0134.%E5%8A%A0%E6%B2%B9%E7%AB%99.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：加油站"),e("OutboundLink")],1),r._v("可能以为是一道模拟题，但就算模拟其实也不简单，需要把 while 用的很娴熟。但其实是可以使用贪心给时间复杂度降低一个数量级。")]),r._v(" "),e("p",[r._v("最后贪心系列压轴题目"),e("a",{attrs:{href:"https://programmercarl.com/0968.%E7%9B%91%E6%8E%A7%E4%BA%8C%E5%8F%89%E6%A0%91.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("贪心算法：我要监控二叉树！"),e("OutboundLink")],1),r._v("，不仅贪心的思路不好想，而且需要对二叉树的操作特别娴熟，这就是典型的交叉类难题了。")]),r._v(" "),e("h2",{attrs:{id:"贪心每周总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贪心每周总结"}},[r._v("#")]),r._v(" 贪心每周总结")]),r._v(" "),e("p",[r._v("周总结里会对每周的题目中大家的疑问、相关难点或者笔误之类的进行复盘和总结。")]),r._v(" "),e("p",[r._v("如果大家发现文章哪里有问题，那么在周总结里或者文章评论区一定进行了修正，保证不会因为我的笔误或者理解问题而误导大家，哈哈。")]),r._v(" "),e("p",[r._v("所以周总结一定要看！")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://programmercarl.com/%E5%91%A8%E6%80%BB%E7%BB%93/20201126%E8%B4%AA%E5%BF%83%E5%91%A8%E6%9C%AB%E6%80%BB%E7%BB%93.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("本周小结！（贪心算法系列一）"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/%E5%91%A8%E6%80%BB%E7%BB%93/20201203%E8%B4%AA%E5%BF%83%E5%91%A8%E6%9C%AB%E6%80%BB%E7%BB%93.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("本周小结！（贪心算法系列二）"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/%E5%91%A8%E6%80%BB%E7%BB%93/20201217%E8%B4%AA%E5%BF%83%E5%91%A8%E6%9C%AB%E6%80%BB%E7%BB%93.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("本周小结！（贪心算法系列三）"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://programmercarl.com/%E5%91%A8%E6%80%BB%E7%BB%93/20201224%E8%B4%AA%E5%BF%83%E5%91%A8%E6%9C%AB%E6%80%BB%E7%BB%93.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("本周小结！（贪心算法系列四）"),e("OutboundLink")],1)])]),r._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),e("p",[r._v("贪心专题汇聚为一张图：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20211110121605.png",alt:""}})]),r._v(" "),e("p",[r._v("这个图是 "),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/QVF6upVMSbgvZy8lHZS3CQ",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码随想录知识星球"),e("OutboundLink")],1),r._v(" 成员："),e("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/footprint/185251215558842",target:"_blank",rel:"noopener noreferrer"}},[r._v("青"),e("OutboundLink")],1),r._v("所画，总结的非常好，分享给大家。")]),r._v(" "),e("p",[r._v("很多没有接触过贪心的同学都会感觉贪心有啥可学的，但只要跟着「代码随想录」坚持下来之后，就会发现，贪心是一种很重要的算法思维而且并不简单，贪心往往妙的出其不意，触不及防！")]),r._v(" "),e("p",[e("strong",[r._v("回想一下我们刚刚开始讲解贪心的时候，大家会发现自己在坚持中进步了很多！")])]),r._v(" "),e("p",[r._v("这也是「代码随想录」的初衷，只要一路坚持下来，不仅基础扎实，而且进步也是飞速的。")]),r._v(" "),e("p",[e("strong",[r._v("在这十八道贪心经典题目中，大家可以发现在每一道题目的讲解中，我都是把什么是局部最优，和什么是全局最优说清楚")]),r._v("。")]),r._v(" "),e("p",[r._v("这也是我认为判断这是一道贪心题目的依据，如果找不出局部最优，那可能就是一道模拟题。")]),r._v(" "),e("p",[r._v("不知不觉又一个系列结束了，同时也是 2020 年的结束。")]),r._v(" "),e("p",[e("strong",[r._v("一个系列的结束，又是一个新系列的开始，我们将在明年第一个工作日正式开始动态规划，来不及解释了，录友们上车别掉队，我们又要开始新的征程！")])]),r._v(" "),e("h2",{attrs:{id:"其他语言版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他语言版本"}},[r._v("#")]),r._v(" 其他语言版本")]),r._v(" "),e("p",[r._v("Java：")]),r._v(" "),e("p",[r._v("Python：")]),r._v(" "),e("p",[r._v("Go：")]),r._v(" "),e("hr"),r._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码一.jpg",width:"500"}})])])}),[],!1,null,null,null);t.default=_.exports}}]);