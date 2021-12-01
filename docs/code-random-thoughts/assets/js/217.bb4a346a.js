(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{603:function(r,t,e){"use strict";e.r(t);var a=e(54),_=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"本周小结-回溯算法系列二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本周小结-回溯算法系列二"}},[r._v("#")]),r._v(" 本周小结！（回溯算法系列二）")]),r._v(" "),e("blockquote",[e("p",[r._v("例行每周小结")])]),r._v(" "),e("h2",{attrs:{id:"周一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周一"}},[r._v("#")]),r._v(" 周一")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求组合总和（二）"),e("OutboundLink")],1),r._v("中讲解的组合总和问题，和以前的组合问题还都不一样。")]),r._v(" "),e("p",[r._v("本题和"),e("a",{attrs:{href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求组合问题！"),e("OutboundLink")],1),r._v("，"),e("a",{attrs:{href:"https://programmercarl.com/0216.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CIII.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求组合总和！"),e("OutboundLink")],1),r._v("和区别是：本题没有数量要求，可以无限重复，但是有总和的限制，所以间接的也是有个数的限制。")]),r._v(" "),e("p",[r._v("不少录友都是看到可以重复选择，就义无反顾的把startIndex去掉了。")]),r._v(" "),e("p",[e("strong",[r._v("本题还需要startIndex来控制for循环的起始位置，对于组合问题，什么时候需要startIndex呢？")])]),r._v(" "),e("p",[r._v("我举过例子，如果是一个集合来求组合的话，就需要startIndex，例如："),e("a",{attrs:{href:"https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求组合问题！"),e("OutboundLink")],1),r._v("，"),e("a",{attrs:{href:"https://programmercarl.com/0216.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CIII.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求组合总和！"),e("OutboundLink")],1),r._v("。")]),r._v(" "),e("p",[r._v("如果是多个集合取组合，各个集合之间相互不影响，那么就不用startIndex，例如："),e("a",{attrs:{href:"https://programmercarl.com/0017.%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：电话号码的字母组合"),e("OutboundLink")],1)]),r._v(" "),e("p",[e("strong",[r._v("注意以上我只是说求组合的情况，如果是排列问题，又是另一套分析的套路，后面我再讲解排列的时候就重点介绍")]),r._v("。")]),r._v(" "),e("p",[r._v("最后还给出了本题的剪枝优化，如下：")]),r._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("for (int i = startIndex; i < candidates.size() && sum + candidates[i] <= target; i++)\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br")])]),e("p",[r._v("这个优化如果是初学者的话并不容易想到。")]),r._v(" "),e("p",[e("strong",[r._v("在求和问题中，排序之后加剪枝是常见的套路！")])]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求组合总和（二）"),e("OutboundLink")],1),r._v("第一个树形结构没有画出startIndex的作用，"),e("strong",[r._v("这里这里纠正一下，准确的树形结构如图所示：")])]),r._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201123202227835.png",alt:"39.组合总和"}})]),r._v(" "),e("h2",{attrs:{id:"周二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周二"}},[r._v("#")]),r._v(" 周二")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0040.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CII.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求组合总和（三）"),e("OutboundLink")],1),r._v("中依旧讲解组合总和问题，本题集合元素会有重复，但要求解集不能包含重复的组合。")]),r._v(" "),e("p",[e("strong",[r._v("所以难就难在去重问题上了")]),r._v("。")]),r._v(" "),e("p",[r._v("这个去重问题，相信做过的录友都知道有多么的晦涩难懂。网上的题解一般就说“去掉重复”，但说不清怎么个去重，代码一甩就完事了。")]),r._v(" "),e("p",[r._v("为了讲解这个去重问题，"),e("strong",[r._v("我自创了两个词汇，“树枝去重”和“树层去重”")]),r._v("。")]),r._v(" "),e("p",[r._v("都知道组合问题可以抽象为树形结构，那么“使用过”在这个树形结构上是有两个维度的，一个维度是同一树枝上“使用过”，一个维度是同一树层上“使用过”。"),e("strong",[r._v("没有理解这两个层面上的“使用过” 是造成大家没有彻底理解去重的根本原因")]),r._v("。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201123202817973.png",alt:"40.组合总和II1"}})]),r._v(" "),e("p",[r._v("我在图中将used的变化用橘黄色标注上，可以看出在candidates[i] == candidates[i - 1]相同的情况下：")]),r._v(" "),e("ul",[e("li",[r._v("used[i - 1] == true，说明同一树支candidates[i - 1]使用过")]),r._v(" "),e("li",[r._v("used[i - 1] == false，说明同一树层candidates[i - 1]使用过")])]),r._v(" "),e("p",[e("strong",[r._v("这块去重的逻辑很抽象，网上搜的题解基本没有能讲清楚的，如果大家之前思考过这个问题或者刷过这道题目，看到这里一定会感觉通透了很多！")])]),r._v(" "),e("p",[r._v("对于去重，其实排列问题也是一样的道理，后面我会讲到。")]),r._v(" "),e("h2",{attrs:{id:"周三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周三"}},[r._v("#")]),r._v(" 周三")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：分割回文串"),e("OutboundLink")],1),r._v("中，我们开始讲解切割问题，虽然最后代码看起来好像是一道模板题，但是从分析到学会套用这个模板，是比较难的。")]),r._v(" "),e("p",[r._v("我列出如下几个难点：")]),r._v(" "),e("ul",[e("li",[r._v("切割问题其实类似组合问题")]),r._v(" "),e("li",[r._v("如何模拟那些切割线")]),r._v(" "),e("li",[r._v("切割问题中递归如何终止")]),r._v(" "),e("li",[r._v("在递归循环中如何截取子串")]),r._v(" "),e("li",[r._v("如何判断回文")])]),r._v(" "),e("p",[r._v("如果想到了"),e("strong",[r._v("用求解组合问题的思路来解决 切割问题本题就成功一大半了")]),r._v("，接下来就可以对着模板照葫芦画瓢。")]),r._v(" "),e("p",[e("strong",[r._v("但后序如何模拟切割线，如何终止，如何截取子串，其实都不好想，最后判断回文算是最简单的了")]),r._v("。")]),r._v(" "),e("p",[r._v("除了这些难点，"),e("strong",[r._v("本题还有细节，例如：切割过的地方不能重复切割所以递归函数需要传入i + 1")]),r._v("。")]),r._v(" "),e("p",[r._v("所以本题应该是一个道hard题目了。")]),r._v(" "),e("p",[e("strong",[r._v("本题的树形结构中，和代码的逻辑有一个小出入，已经判断不是回文的子串就不会进入递归了，纠正如下：")])]),r._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201123203228309.png",alt:"131.分割回文串"}})]),r._v(" "),e("h2",{attrs:{id:"周四"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周四"}},[r._v("#")]),r._v(" 周四")]),r._v(" "),e("p",[r._v("如果没有做过"),e("a",{attrs:{href:"https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：分割回文串"),e("OutboundLink")],1),r._v("的话，"),e("a",{attrs:{href:"https://programmercarl.com/0093.%E5%A4%8D%E5%8E%9FIP%E5%9C%B0%E5%9D%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：复原IP地址"),e("OutboundLink")],1),r._v("这道题目应该是比较难的。")]),r._v(" "),e("p",[r._v("复原IP照"),e("a",{attrs:{href:"https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：分割回文串"),e("OutboundLink")],1),r._v("就多了一些限制，例如只能分四段，而且还是更改字符串，插入逗点。")]),r._v(" "),e("p",[r._v("树形图如下：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201123203735933.png",alt:"93.复原IP地址"}})]),r._v(" "),e("p",[r._v("在本文的树形结构图中，我已经把详细的分析思路都画了出来，相信大家看了之后一定会思路清晰不少！")]),r._v(" "),e("p",[r._v("本题还可以有一个剪枝，合法ip长度为12，如果s的长度超过了12就不是有效IP地址，直接返回！")]),r._v(" "),e("p",[r._v("代码如下：")]),r._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("if (s.size() > 12) return result; // 剪枝\n\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br"),e("span",{staticClass:"line-number"},[r._v("2")]),e("br")])]),e("p",[r._v("我之前给出的C++代码没有加这个限制，也没有超时，因为在第四段超过长度之后，就会截止了，所以就算给出特别长的字符串，搜索的范围也是有限的（递归只会到第三层），及时就会返回了。")]),r._v(" "),e("h2",{attrs:{id:"周五"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周五"}},[r._v("#")]),r._v(" 周五")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0078.%E5%AD%90%E9%9B%86.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("回溯算法：求子集问题！"),e("OutboundLink")],1),r._v("中讲解了子集问题，"),e("strong",[r._v("在树形结构中子集问题是要收集所有节点的结果，而组合问题是收集叶子节点的结果")]),r._v("。")]),r._v(" "),e("p",[r._v("如图：")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/202011232041348.png",alt:"78.子集"}})]),r._v(" "),e("p",[r._v("认清这个本质之后，今天的题目就是一道模板题了。")]),r._v(" "),e("p",[r._v("其实可以不需要加终止条件，因为startIndex >= nums.size()，本层for循环本来也结束了，本来我们就要遍历整颗树。")]),r._v(" "),e("p",[r._v("有的同学可能担心不写终止条件会不会无限递归？")]),r._v(" "),e("p",[r._v("并不会，因为每次递归的下一层就是从i+1开始的。")]),r._v(" "),e("p",[r._v("如果要写终止条件，注意："),e("code",[r._v("result.push_back(path);")]),r._v("要放在终止条件的上面，如下：")]),r._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("result.push_back(path); // 收集子集，要放在终止添加的上面，否则会漏掉自己\nif (startIndex >= nums.size()) { // 终止条件可以不加\n    return;\n}\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br"),e("span",{staticClass:"line-number"},[r._v("2")]),e("br"),e("span",{staticClass:"line-number"},[r._v("3")]),e("br"),e("span",{staticClass:"line-number"},[r._v("4")]),e("br")])]),e("h2",{attrs:{id:"周六"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周六"}},[r._v("#")]),r._v(" 周六")]),r._v(" "),e("p",[r._v("早起的哈希表系列没有总结，所以"),e("a",{attrs:{href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E6%80%BB%E7%BB%93.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("哈希表：总结篇！（每逢总结必经典）"),e("OutboundLink")],1),r._v("如约而至。")]),r._v(" "),e("p",[r._v("可能之前大家做过很多哈希表的题目，但是没有串成线，总结篇来帮你串成线，捋顺哈希表的整个脉络。")]),r._v(" "),e("p",[r._v("大家对什么时候各种set与map比较疑惑，想深入了解红黑树，哈希之类的。")]),r._v(" "),e("p",[e("strong",[r._v("如果真的只是想清楚什么时候使用各种set与map，不用看那么多，把"),e("a",{attrs:{href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("关于哈希表，你该了解这些！"),e("OutboundLink")],1),r._v("看了就够了")]),r._v("。")]),r._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),e("p",[r._v("本周我们依次介绍了组合问题，分割问题以及子集问题，子集问题还没有讲完，下周还会继续。")]),r._v(" "),e("p",[e("strong",[r._v("我讲解每一种问题，都会和其他问题作对比，做分析，所以只要跟着细心琢磨相信对回溯又有新的认识")]),r._v("。")]),r._v(" "),e("p",[r._v("最近这两天题目有点难度，刚刚开始学回溯算法的话，按照现在这个每天一题的速度来，确实有点快，学起来吃力非常正常，这些题目都是我当初学了好几个月才整明白的，哈哈。")]),r._v(" "),e("p",[e("strong",[r._v("所以大家能跟上的话，已经很优秀了！")])]),r._v(" "),e("p",[r._v("还有一些录友会很关心leetcode上的耗时统计。")]),r._v(" "),e("p",[r._v("这个是很不准确的，相同的代码多提交几次，大家就知道怎么回事了。")]),r._v(" "),e("p",[r._v("leetcode上的计时应该是以4ms为单位，有的多提交几次，多个4ms就多击败50%，所以比较夸张，如果程序运行是几百ms的级别，可以看看leetcode上的耗时，因为它的误差10几ms对最终影响不大。")]),r._v(" "),e("p",[e("strong",[r._v("所以我的题解基本不会写击败百分之多少多少，没啥意义，时间复杂度分析清楚了就可以了")]),r._v("，至于回溯算法不用分析时间复杂度了，都是一样的爆搜，就看谁剪枝厉害了。")]),r._v(" "),e("p",[r._v("一些录友表示最近回溯算法看的实在是有点懵，回溯算法确实是晦涩难懂，可能视频的话更直观一些，我最近应该会在B站（同名：「代码随想录」）出回溯算法的视频，大家也可以看视频在回顾一波。")]),r._v(" "),e("p",[e("strong",[r._v("就酱，又是充实的一周，做好本周总结，迎接下一周，冲！")])]),r._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码.jpg",width:"450"}})])])}),[],!1,null,null,null);t.default=_.exports}}]);