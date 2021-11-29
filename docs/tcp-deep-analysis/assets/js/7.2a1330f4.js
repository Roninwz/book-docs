(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{392:function(t,a,v){"use strict";v.r(a);var _=v(54),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"深入理解-tcp-协议-从原理到实战-挖坑的张师傅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-tcp-协议-从原理到实战-挖坑的张师傅"}},[t._v("#")]),t._v(" 深入理解 TCP 协议：从原理到实战 - 挖坑的张师傅")]),t._v(" "),v("blockquote",[v("p",[t._v("掘金是一个帮助开发者成长的社区，是给开发者用的 Hacker News，给设计师用的 Designer News，和给产品经理用的 Medium。掘金的技术文章由稀土上聚集的技术大牛和极客共同编辑为你筛选出最优质的干货，其中包括：Android、iOS、前端、后端等方面的内容。用户每天都可以在这里找到技术世界的头条内容。与此同时，掘金内还有沸点、掘金翻译计划、线下活动、专栏文章等内容。即使你是 GitHub、StackOverflow、开源中国的用户，我们相信你也可以在这里有所收获。")])]),t._v(" "),v("h2",{attrs:{id:"小册食用指南"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小册食用指南"}},[t._v("#")]),t._v(" 小册食用指南")]),t._v(" "),v("p",[t._v("这本小册是比较偏底层原理的，有不少的章节是需要抓包实验的，在这里我提供了一份小册食用指南，帮助你更好的阅读这本小册。")]),t._v(" "),v("h2",{attrs:{id:"需要什么基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#需要什么基础"}},[t._v("#")]),t._v(" 需要什么基础")]),t._v(" "),v("p",[t._v("要想阅读这本小册，你需要具备基本的网络知识，比如在学校里上过网络课或者自学过相关的知识。")]),t._v(" "),v("p",[t._v("对于完全缺乏网络基础知识的读者，建议先随便选取一本成系统的计算机网络相关的书籍，先大致了解计算机网络到底是做什么的，才能更好的理解本小册想要表达的内容。")]),t._v(" "),v("p",[t._v("这本小册需要你了解基本的 linux 命令行操作，比如 ssh 登录服务器、vim、基本的文件命令等。")]),t._v(" "),v("p",[t._v("这些知识不是这本小册重点介绍的内容，网上也有很多教程。如果遇到什么问题，可以直接联系我帮助解决。")]),t._v(" "),v("h2",{attrs:{id:"关于环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于环境"}},[t._v("#")]),t._v(" 关于环境")]),t._v(" "),v("p",[t._v("我的实验环境是 Mac 上用 Parallels Desktop 启动的 CentOS 7 Linux 虚拟机。强烈建议你在 Linux 环境下完成这本小册的实验。CentOS 官网："),v("a",{attrs:{href:"https://www.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.centos.org/"),v("OutboundLink")],1),t._v(" ，推荐的版本是当前最新的 CentOS 7 版本。")]),t._v(" "),v("p",[t._v("CentOS 7 默认的防火墙不是 iptables，而是 firewall，但是我更偏好 iptables，你可以用下面的命令关掉它")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("// 停止 firewall 服务\nsystemctl stop firewalld.service\n// 禁止开机启动\nsystemctl disable firewalld.service\n\n// 安装 iptables\nyum install -y iptables \n")])])]),v("p",[t._v("Parallels Desktop 是付费的工具，你也可以使用免费的 VirtualBox 运行 CentOS 虚拟机。虚拟机简单易用、安全、效率高，而且可以比较方便的做快照、克隆、备份、迁移，可以随时创建多个虚拟机进行测试，不用担心改了什么配置造成系统崩溃、无法复原等问题。")]),t._v(" "),v("h2",{attrs:{id:"关于文章内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于文章内容"}},[t._v("#")]),t._v(" 关于文章内容")]),t._v(" "),v("p",[t._v("TCP 的知识浩如烟海，我把自己工作中遇到的最频繁的、觉得最重要的内容抽取了出来，写成了这本小册，大概覆盖了下面这些内容")]),t._v(" "),v("ul",[v("li",[t._v("基本概念：TCP 头部、MTU、MSS等概念")]),t._v(" "),v("li",[t._v("TCP 的面向连接、可靠、流协议说的是什么")]),t._v(" "),v("li",[t._v("TCP 的 11 种状态如何模拟以及如何互相转换")]),t._v(" "),v("li",[t._v("如何模拟同时打开、同时关闭")]),t._v(" "),v("li",[t._v("半连接、全连接队列是什么，backlog 参数有什么作用")]),t._v(" "),v("li",[t._v("快速打开的原理是什么")]),t._v(" "),v("li",[t._v("TCP SYN Flood 攻击背后的原理")]),t._v(" "),v("li",[t._v("TCP 最不好理解的 TIME_WAIT 状态是什么")]),t._v(" "),v("li",[t._v("SO_REUSEADDR、SO_LINGER 选项对网络编程有什么影响")]),t._v(" "),v("li",[t._v("TCP 有 7 个定时器是哪些，分别在什么条件下起作用")]),t._v(" "),v("li",[t._v("流量控制、滑动窗口、拥塞控制、快重传、慢启动等概念")]),t._v(" "),v("li",[t._v("keepalive 机制")]),t._v(" "),v("li",[t._v("Nagle 算法、延迟确认的相爱相杀")]),t._v(" "),v("li",[t._v("网络学习相关的工具介绍：telnet、nc、tcpdump、wireshark、lsof、iptables、scapy 等")]),t._v(" "),v("li",[t._v("wireshark 那些难以看懂的提示是什么意思")]),t._v(" "),v("li",[t._v("协议栈测试工具 packetdrill 的使用")]),t._v(" "),v("li",[t._v("如何杀掉一条 TCP 连接")]),t._v(" "),v("li",[t._v("常见网络面试题分析")])]),t._v(" "),v("p",[t._v("小册的内容会持续更新，如果觉得更好的实验方式，或者有更清晰易懂的讲解方法，我会进行修改。")]),t._v(" "),v("h2",{attrs:{id:"关于面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于面试题"}},[t._v("#")]),t._v(" 关于面试题")]),t._v(" "),v("p",[t._v("面试题目前还在大量搜集整理中，小册上更新得还不够多，我的目标是每一节都有两到三个练习题，让大家能巩固本节所学的知识。还需要较多的时间，我会慢慢补充上来。最后有一节内容是关于练习题解答的。")]),t._v(" "),v("h2",{attrs:{id:"关于阅读顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于阅读顺序"}},[t._v("#")]),t._v(" 关于阅读顺序")]),t._v(" "),v("p",[t._v("小册部分把工具篇大部分放到了最后几节，需要的时候可以进行针对性的查阅。单独把工具 packetdrill 拎到了最前面，因为这个工具实在是太重要了，很多实验都是用这个工具进行模拟重现。除了工具篇，建议你按小册写的顺序依次阅读，中间会穿插讲解很多的知识。")]),t._v(" "),v("h2",{attrs:{id:"关于答疑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于答疑"}},[t._v("#")]),t._v(" 关于答疑")]),t._v(" "),v("p",[t._v("TCP 的知识体系复杂，在多年的演进过程中也留下了很多坑，大家遇到任何疑惑的地方可以随时加我的微信（zhangya_no1）进行联系或者在群里提问，我会在业余时间尽力解答大家所提的问题。对一些比较典型的问题，我会汇总更新到群里并把它补充到小册的文章中，希望能跟大家一起共建。")]),t._v(" "),v("p",[t._v("欢迎关注我的公众号，虽然现在还没有什么内容。不过我会慢慢写一些偏原理一点的分布式理论、网络协议、编程语言相关的东西，随缘。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/26/16b947a508706ee8",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"授人以鱼不若授人以渔"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#授人以鱼不若授人以渔"}},[t._v("#")]),t._v(" 授人以鱼不若授人以渔")]),t._v(" "),v("p",[t._v("TCP 协议是基础中的基础，也是一门实验性比较强的知识。网络包看不见、摸不着，抓包才是让网络包现出原型的好办法。这本小册更多的想介绍一些工具和方法，让大家都有能力去模拟、去做实验、去抓包，当通过抓包验证到自己的想法的时候，那种喜悦只有自己能体会到了，😁。")]),t._v(" "),v("h2",{attrs:{id:"参考书籍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考书籍"}},[t._v("#")]),t._v(" 参考书籍")]),t._v(" "),v("p",[t._v("在最后一篇文章中，我会把小册推荐的所有书籍都列出来，作为开篇，我建议你拥有下面两本书籍：")]),t._v(" "),v("ul",[v("li",[t._v("经典著作《TCP/IP 详解（卷一）》")]),t._v(" "),v("li",[t._v("林沛满老师的《Wireshark网络分析就这么简单》")])]),t._v(" "),v("p",[t._v("这两本书籍可以作为案头工具书，遇到相关的知识可以去书中找找书上是如何解释的，交叉印证自己的想法。")]),t._v(" "),v("h2",{attrs:{id:"最后"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),v("p",[t._v("让我们开启 TCP 协议的学习之旅吧。")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/book/6844733788681928712/section/6844733788795174920",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),v("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);