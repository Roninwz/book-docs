(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{618:function(r,t,e){"use strict";e.r(t);var _=e(54),a=Object(_.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("blockquote",[e("p",[r._v("哈希表总结篇如约而至")])]),r._v(" "),e("h1",{attrs:{id:"哈希表理论基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哈希表理论基础"}},[r._v("#")]),r._v(" 哈希表理论基础")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("关于哈希表，你该了解这些！"),e("OutboundLink")],1),r._v("中，我们介绍了哈希表的基础理论知识，不同于枯燥的讲解，这里介绍了都是对刷题有帮助的理论知识点。")]),r._v(" "),e("p",[e("strong",[r._v("一般来说哈希表都是用来快速判断一个元素是否出现集合里")]),r._v("。")]),r._v(" "),e("p",[r._v("对于哈希表，要知道"),e("strong",[r._v("哈希函数")]),r._v("和"),e("strong",[r._v("哈希碰撞")]),r._v("在哈希表中的作用.")]),r._v(" "),e("p",[r._v("哈希函数是把传入的 key 映射到符号表的索引上。")]),r._v(" "),e("p",[r._v("哈希碰撞处理有多个 key 映射到相同索引上时的情景，处理碰撞的普遍方式是拉链法和线性探测法。")]),r._v(" "),e("p",[r._v("接下来是常见的三种哈希结构：")]),r._v(" "),e("ul",[e("li",[r._v("数组")]),r._v(" "),e("li",[r._v("set（集合）")]),r._v(" "),e("li",[r._v("map（映射）")])]),r._v(" "),e("p",[r._v("在 C++语言中，set 和 map 都分别提供了三种数据结构，每种数据结构的底层实现和用途都有所不同，在"),e("a",{attrs:{href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("关于哈希表，你该了解这些！"),e("OutboundLink")],1),r._v("中我给出了详细分析，这一知识点很重要！")]),r._v(" "),e("p",[r._v("例如什么时候用 std::set，什么时候用 std::multiset，什么时候用 std::unordered_set，都是很有考究的。")]),r._v(" "),e("p",[e("strong",[r._v("只有对这些数据结构的底层实现很熟悉，才能灵活使用，否则很容易写出效率低下的程序")]),r._v("。")]),r._v(" "),e("h1",{attrs:{id:"哈希表经典题目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哈希表经典题目"}},[r._v("#")]),r._v(" 哈希表经典题目")]),r._v(" "),e("h2",{attrs:{id:"数组作为哈希表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组作为哈希表"}},[r._v("#")]),r._v(" 数组作为哈希表")]),r._v(" "),e("p",[r._v("一些应用场景就是为数组量身定做的。")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("242.有效的字母异位词"),e("OutboundLink")],1),r._v("中，我们提到了数组就是简单的哈希表，但是数组的大小是受限的！")]),r._v(" "),e("p",[r._v("这道题目包含小写字母，那么使用数组来做哈希最合适不过。")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("383.赎金信"),e("OutboundLink")],1),r._v("中同样要求只有小写字母，那么就给我们浓浓的暗示，用数组！")]),r._v(" "),e("p",[r._v("本题和"),e("a",{attrs:{href:"https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("242.有效的字母异位词"),e("OutboundLink")],1),r._v("很像，"),e("a",{attrs:{href:"https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("242.有效的字母异位词"),e("OutboundLink")],1),r._v("是求 字符串 a 和 字符串 b 是否可以相互组成，在"),e("a",{attrs:{href:"https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("383.赎金信"),e("OutboundLink")],1),r._v("中是求字符串 a 能否组成字符串 b，而不用管字符串 b 能不能组成字符串 a。")]),r._v(" "),e("p",[r._v("一些同学可能想，用数组干啥，都用 map 不就完事了。")]),r._v(" "),e("p",[e("strong",[r._v("上面两道题目用 map 确实可以，但使用 map 的空间消耗要比数组大一些，因为 map 要维护红黑树或者符号表，而且还要做哈希函数的运算。所以数组更加简单直接有效！")])]),r._v(" "),e("h2",{attrs:{id:"set-作为哈希表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-作为哈希表"}},[r._v("#")]),r._v(" set 作为哈希表")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0349.%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("349. 两个数组的交集"),e("OutboundLink")],1),r._v("中我们给出了什么时候用数组就不行了，需要用 set。")]),r._v(" "),e("p",[r._v("这道题目没有限制数值的大小，就无法使用数组来做哈希表了。")]),r._v(" "),e("p",[e("strong",[r._v("主要因为如下两点：")])]),r._v(" "),e("ul",[e("li",[r._v("数组的大小是有限的，受到系统栈空间（不是数据结构的栈）的限制。")]),r._v(" "),e("li",[r._v("如果数组空间够大，但哈希值比较少、特别分散、跨度非常大，使用数组就造成空间的极大浪费。")])]),r._v(" "),e("p",[r._v("所以此时一样的做映射的话，就可以使用 set 了。")]),r._v(" "),e("p",[r._v("关于 set，C++ 给提供了如下三种可用的数据结构：（详情请看"),e("a",{attrs:{href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("关于哈希表，你该了解这些！"),e("OutboundLink")],1),r._v("）")]),r._v(" "),e("ul",[e("li",[r._v("std::set")]),r._v(" "),e("li",[r._v("std::multiset")]),r._v(" "),e("li",[r._v("std::unordered_set")])]),r._v(" "),e("p",[r._v("std::set 和 std::multiset 底层实现都是红黑树，std::unordered_set 的底层实现是哈希， 使用 unordered_set 读写效率是最高的，本题并不需要对数据进行排序，而且还不要让数据重复，所以选择 unordered_set。")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("202.快乐数"),e("OutboundLink")],1),r._v("中，我们再次使用了 unordered_set 来判断一个数是否重复出现过。")]),r._v(" "),e("h2",{attrs:{id:"map-作为哈希表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map-作为哈希表"}},[r._v("#")]),r._v(" map 作为哈希表")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("1.两数之和"),e("OutboundLink")],1),r._v("中 map 正式登场。")]),r._v(" "),e("p",[r._v("来说一说：使用数组和 set 来做哈希法的局限。")]),r._v(" "),e("ul",[e("li",[r._v("数组的大小是受限制的，而且如果元素很少，而哈希值太大会造成内存空间的浪费。")]),r._v(" "),e("li",[r._v("set 是一个集合，里面放的元素只能是一个 key，而两数之和这道题目，不仅要判断 y 是否存在而且还要记录 y 的下标位置，因为要返回 x 和 y 的下标。所以 set 也不能用。")])]),r._v(" "),e("p",[r._v("map 是一种"),e("code",[r._v("<key, value>")]),r._v("的结构，本题可以用 key 保存数值，用 value 在保存数值所在的下表。所以使用 map 最为合适。")]),r._v(" "),e("p",[r._v("C++提供如下三种 map：：（详情请看"),e("a",{attrs:{href:"https://programmercarl.com/%E5%93%88%E5%B8%8C%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("关于哈希表，你该了解这些！"),e("OutboundLink")],1),r._v("）")]),r._v(" "),e("ul",[e("li",[r._v("std::map")]),r._v(" "),e("li",[r._v("std::multimap")]),r._v(" "),e("li",[r._v("std::unordered_map")])]),r._v(" "),e("p",[r._v("std::unordered_map 底层实现为哈希，std::map 和 std::multimap 的底层实现是红黑树。")]),r._v(" "),e("p",[r._v("同理，std::map 和 std::multimap 的 key 也是有序的（这个问题也经常作为面试题，考察对语言容器底层的理解），"),e("a",{attrs:{href:"https://programmercarl.com/0001.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("1.两数之和"),e("OutboundLink")],1),r._v("中并不需要 key 有序，选择 std::unordered_map 效率更高！")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("454.四数相加"),e("OutboundLink")],1),r._v("中我们提到了其实需要哈希的地方都能找到 map 的身影。")]),r._v(" "),e("p",[r._v("本题咋眼一看好像和"),e("a",{attrs:{href:"https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("18. 四数之和"),e("OutboundLink")],1),r._v("，"),e("a",{attrs:{href:"https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("15.三数之和"),e("OutboundLink")],1),r._v("差不多，其实差很多！")]),r._v(" "),e("p",[e("strong",[r._v("关键差别是本题为四个独立的数组，只要找到 A[i] + B[j] + C[k] + D[l] = 0 就可以，不用考虑重复问题，而"),e("a",{attrs:{href:"https://programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("18. 四数之和"),e("OutboundLink")],1),r._v("，"),e("a",{attrs:{href:"https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("15.三数之和"),e("OutboundLink")],1),r._v("是一个数组（集合）里找到和为 0 的组合，可就难很多了！")])]),r._v(" "),e("p",[r._v("用哈希法解决了两数之和，很多同学会感觉用哈希法也可以解决三数之和，四数之和。")]),r._v(" "),e("p",[r._v("其实是可以解决，但是非常麻烦，需要去重导致代码效率很低。")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("15.三数之和"),e("OutboundLink")],1),r._v("中我给出了哈希法和双指针两个解法，大家就可以体会到，使用哈希法还是比较麻烦的。")]),r._v(" "),e("p",[r._v("所以 18. 四数之和，15.三数之和都推荐使用双指针法！")]),r._v(" "),e("h1",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),e("p",[r._v("对于哈希表的知识相信很多同学都知道，但是没有成体系。")]),r._v(" "),e("p",[r._v("本篇我们从哈希表的理论基础到数组、set 和 map 的经典应用，把哈希表的整个全貌完整的呈现给大家。")]),r._v(" "),e("p",[e("strong",[r._v("同时也强调虽然 map 是万能的，详细介绍了什么时候用数组，什么时候用 set")]),r._v("。")]),r._v(" "),e("p",[r._v("相信通过这个总结篇，大家可以对哈希表有一个全面的了解。")]),r._v(" "),e("hr"),r._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码一.jpg",width:"500"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);