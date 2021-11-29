(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{429:function(_,v,t){"use strict";t.r(v);var e=t(54),s=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("这篇文章我们来详细了解一下三次握手，很多人会说三次握手这么简单，还需要讲吗？其实三次握手背后有很多值得我们思考和深究的地方。")]),_._v(" "),t("h2",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),t("p",[_._v("一次经典的三次握手的过程如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518ccedac1b6e",alt:""}})]),_._v(" "),t("p",[_._v("三次握手的最重要的是交换彼此的 ISN（初始序列号），序列号怎么计算来的可以暂时不用深究，我们需要重点掌握的是包交互过程中序列号变化的原理。")]),_._v(" "),t("p",[_._v("1、客户端发送的一个段是 SYN 报文，这个报文只有 SYN 标记被置位。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518cceddbdcf6",alt:""}})]),_._v(" "),t("p",[_._v("SYN 报文不携带数据，但是它占用一个序号，下次发送数据序列号要加一。客户端会随机选择一个数字作为初始序列号（ISN）")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[_._v("为什么 SYN 段不携带数据却要消耗一个序列号呢？\n")])])]),t("p",[_._v("这是一个好问题，不占用序列号的段是不需要确认的（都没有内容确认个啥），比如 ACK 段。SYN 段需要对方的确认，需要占用一个序列号。后面讲到四次挥手那里 FIN 包也有同样的情况，在那里我们会用一个图来详细说明。")]),_._v(" "),t("p",[_._v("关于这一点，可以记住如下的规则：")]),_._v(" "),t("blockquote",[t("p",[_._v("凡是消耗序列号的 TCP 报文段，一定需要对端确认。如果这个段没有收到确认，会一直重传直到达到指定的次数为止。")])]),_._v(" "),t("p",[_._v("2、服务端收到客户端的 SYN 段以后，将 SYN 和 ACK 标记都置位")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518ccee187690",alt:""}})]),_._v(" "),t("p",[_._v("SYN 标记的作用与步骤 1 中的一样，也是同步服务端生成的初始序列号。ACK 用来告知发送端之前发送的 SYN 段已经收到了，「确认号」字段指定了发送端下次发送段的序号，这里等于客户端 ISN 加一。 与前面类似 SYN + ACK 端虽然没有携带数据，但是因为 SYN 段需要被确认，所以它也要消耗一个序列号。")]),_._v(" "),t("p",[_._v("3、客户端发送三次握手最后一个 ACK 段，这个 ACK 段用来确认收到了服务端发送的 SYN 段。因为这个 ACK 段不携带任何数据，且不需要再被确认，这个 ACK 段不消耗任何序列号。")]),_._v(" "),t("p",[_._v("一个最简单的三次握手过程的wireshark 抓包如下：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518ccee4d8711",alt:""}})]),_._v(" "),t("p",[_._v('在 wireshark 中 SEQ 和 ACK 号都是绝对序号，一般而言这些序号都较大，为了便于分析，我们一般都会显示相对序列号，在 wireshark 的"Edit->Preferences->Protocols->TCP"菜单里可以进行设置显示相对序列号，')]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518ccee326db4",alt:""}})]),_._v(" "),t("p",[_._v("除了交换彼此的初始序列号，三次握手的另一个重要作用是交换一些辅助信息，比如最大段大小（MSS）、窗口大小（Win）、窗口缩放因子（WS)、是否支持选择确认（SACK_PERM）等，这些都会在后面的文章中重点介绍。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518ccee5c7c01",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"初始序列号-initial-sequence-number-isn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始序列号-initial-sequence-number-isn"}},[_._v("#")]),_._v(" 初始序列号（Initial Sequence Number, ISN）")]),_._v(" "),t("p",[_._v("初始的序列号并非从 0 开始，通信双方各自生成，一般情况下两端生成的序列号不会相同。生成的算法是 ISN 随时间而变化，会递增的分配给后续的 TCP 连接的 ISN。")]),_._v(" "),t("p",[_._v("一个建议的算法是设计一个假的时钟，每 4 微妙对 ISN 加一，溢出 2^32 以后回到 0，这个算法使得猜测 ISN 变得非常困难。")]),_._v(" "),t("blockquote",[t("p",[_._v("ISN 能设置成一个固定值呢？")])]),_._v(" "),t("p",[_._v("答案是不能，TCP 连接四元组（源 IP、源端口号、目标 IP、目标端口号）唯一确定，所以就算所有的连接 ISN 都是一个固定的值，连接之间也是不会互相干扰的。但是会有几个严重的问题")]),_._v(" "),t("p",[_._v("1、出于安全性考虑。如果被知道了连接的ISN，很容易构造一个在对方窗口内的序列号，源 IP 和源端口号都很容易伪造，这样一来就可以伪造 RST 包，将连接强制关闭掉了。如果采用动态增长的 ISN，要想构造一个在对方窗口内的序列号难度就大很多了。")]),_._v(" "),t("p",[_._v("2、因为开启 SO_REUSEADDR 以后端口允许重用，收到一个包以后不知道新连接的还是旧连接的包因为网络的原因姗姗来迟，造成数据的混淆。如果采用动态增长的 ISN，那么可以保证两个连接的 ISN 不会相同，不会串包。")]),_._v(" "),t("h2",{attrs:{id:"三次握手的状态变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手的状态变化"}},[_._v("#")]),_._v(" 三次握手的状态变化")]),_._v(" "),t("p",[_._v("三次握手过程的状态变化图如下")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518cd1664fa5d",alt:""}})]),_._v(" "),t("p",[_._v("对于客户端而言：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("初始的状态是处于 "),t("code",[_._v("CLOSED")]),_._v(" 状态。CLOSED 并不是一个真实的状态，而是一个假想的起点和终点。")])]),_._v(" "),t("li",[t("p",[_._v("客户端调用 connect 以后会发送 SYN 同步报文给服务端，然后进入 "),t("code",[_._v("SYN-SENT")]),_._v(" 阶段，客户端将保持这个阶段直到它收到了服务端的确认包。")])]),_._v(" "),t("li",[t("p",[_._v("如果在 "),t("code",[_._v("SYN-SENT")]),_._v(" 状态收到了服务端的确认包，它将发送确认服务端 SYN 报文的 ACK 包，同时进入 ESTABLISHED 状态，表明自己已经准备好发送数据。")])])]),_._v(" "),t("p",[_._v("对于服务端而言：")]),_._v(" "),t("ul",[t("li",[_._v("初始状态同样是 "),t("code",[_._v("CLOSED")]),_._v(" 状态")]),_._v(" "),t("li",[_._v("在执行 bind、listen 调用以后进入 "),t("code",[_._v("LISTEN")]),_._v("状态，等待客户端连接。")]),_._v(" "),t("li",[_._v("当收到客户端的 SYN 同步报文以后，会回复确认同时发送自己的 SYN 同步报文，这时服务端进入 "),t("code",[_._v("SYN-RCVD")]),_._v(" 阶段等待客户端的确认。")]),_._v(" "),t("li",[_._v("当收到客户端的确认报文以后，进入"),t("code",[_._v("ESTABLISHED")]),_._v(" 状态。这时双方可以互相发数据了。")])]),_._v(" "),t("h2",{attrs:{id:"如何构造一个-syn-sent-状态的连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何构造一个-syn-sent-状态的连接"}},[_._v("#")]),_._v(" 如何构造一个 SYN_SENT 状态的连接")]),_._v(" "),t("p",[_._v("使用我们前面介绍的 packetdrill 可以轻松构造一个 SYN_SENT 状态的连接（发出 SYN 包对端没有回复的状况）")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[_._v("// 新建一个 server socket\n+0   socket(..., SOCK_STREAM, IPPROTO_TCP) = 3\n\n// 客户端 connect\n+0 connect(3, ..., ...) = -1\n")])])]),t("p",[_._v("执行 netstat 命令可以看到")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[_._v("netstat -atnp | grep -i 8080                                                                                                    \ntcp        0      1 192.168.46.26:42678     192.0.2.1:8080          SYN_SENT    3897/packetdrill\n")])])]),t("p",[_._v("执行 tcpdump 抓包"),t("code",[_._v("sudo tcpdump -i any port 8080 -nn -U -vvv -w test.pcap")]),_._v("，使用 wireshark 可以看到没有收到对端 ACK 的情况下，SYN 包重传了 6 次，这个值是由"),t("code",[_._v("/proc/sys/net/ipv4/tcp_syn_retries")]),_._v("决定的， 在我的 Centos 机器上，这个值等于 6")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[_._v("cat /proc/sys/net/ipv4/tcp_syn_retries\n6\n")])])]),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/13/16b518cd1915a8c3",alt:""}})]),_._v(" "),t("p",[_._v("6次重试（65s = 1s+2s+4s+8s+16s+32s)以后放弃重试，connect 调用返回 -1，调用超时，如果是用 Java 等语言就会返回"),t("code",[_._v("java.net.ConnectException: Connection timed out")]),_._v("异常")]),_._v(" "),t("h2",{attrs:{id:"同时打开"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同时打开"}},[_._v("#")]),_._v(" 同时打开")]),_._v(" "),t("p",[_._v("TCP 支持同时打开，但是非常罕见，使用场景也比较有限，不过我们还是简单介绍一下。它们的包交互过程是怎么样的？TCP 状态变化又是怎么样的呢？")]),_._v(" "),t("p",[_._v("包交互的过程如下图")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/14/16b5693e5d32aef9",alt:""}})]),_._v(" "),t("p",[_._v("以其中一方为例，记为 A，另外一方记为 B")]),_._v(" "),t("ul",[t("li",[_._v("最初的状态是"),t("code",[_._v("CLOSED")])]),_._v(" "),t("li",[_._v("A 发起主动打开，发送 "),t("code",[_._v("SYN")]),_._v(" 给 B，然后进入"),t("code",[_._v("SYN-SENT")]),_._v("状态")]),_._v(" "),t("li",[_._v("A 还在等待 B 回复的 "),t("code",[_._v("ACK")]),_._v(" 的过程中，收到了 B 发过来的 "),t("code",[_._v("SYN")]),_._v("，what are you 弄啥咧，A 没有办法，只能硬着头皮回复"),t("code",[_._v("SYN+ACK")]),_._v("，随后进入"),t("code",[_._v("SYN-RCVD")])]),_._v(" "),t("li",[_._v("A 依旧死等 B 的 ACK")]),_._v(" "),t("li",[_._v("好不容易等到了 B 的 ACK，对于 A 来说连接建立成功")])]),_._v(" "),t("p",[_._v("同时打开在通信两端时延比较大情况下比较容易模拟，我还没有在本地模拟成功。")]),_._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),t("p",[_._v("这篇文章主要介绍了三次握手的相关的内容，我们来回顾一下。")]),_._v(" "),t("p",[_._v("首先介绍了三次握手交换 ISN 的细节：")]),_._v(" "),t("ul",[t("li",[_._v("SYN 段长度为 0 却需要消耗一个序列号，原因是 SYN 段需要对端确认")]),_._v(" "),t("li",[_._v("ACK 段长度为 0，不消耗序列号，也不用对端确认")]),_._v(" "),t("li",[_._v("ISN 不能从一个固定的值开始，原因是处于安全性和避免前后连接互相干扰")])]),_._v(" "),t("p",[_._v("接下来首次介绍了 TCP 的状态机，TCP 的这 11 中状态的变化是 TCP 学习的重中之重。")]),_._v(" "),t("p",[_._v("接下来用 packetdrill 轻松构造了一个 SYN_SENT 状态的 TCP 连接，随后通过这个例子介绍了这本小册第一个 TCP 定时器「连接建立定时器」，这个定时器会在发送第一个 SYN 包以后开启，如果没有收到对端 ACK，会重传指定的次数。")]),_._v(" "),t("p",[_._v("最后我们介绍了同时打开这种比较罕见的建立连接的方式。")]),_._v(" "),t("h2",{attrs:{id:"作业题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作业题"}},[_._v("#")]),_._v(" 作业题")]),_._v(" "),t("p",[_._v("1、TCP 协议三次握手建立一个连接，第二次握手的时候服务器所处的状态是（）")]),_._v(" "),t("ul",[t("li",[_._v("A、SYN_RECV")]),_._v(" "),t("li",[_._v("B、ESTABLISHED")]),_._v(" "),t("li",[_._v("C、SYN-SENT")]),_._v(" "),t("li",[_._v("D、LAST_ACK")])]),_._v(" "),t("p",[_._v("2、下面关于三次握手与connect()函数的关系说法错误的是（）")]),_._v(" "),t("ul",[t("li",[_._v("A、客户端发送 SYN 给服务器")]),_._v(" "),t("li",[_._v("B、服务器只发送 SYN 给客户端")]),_._v(" "),t("li",[_._v("C、客户端收到服务器回应后发送 ACK 给服务器")]),_._v(" "),t("li",[_._v("D、connect() 函数在三次握手的第二次返回")])]),_._v(" "),t("p",[_._v("欢迎你在留言区留言，和我一起讨论。")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/book/6844733788681928712/section/6844733788820373517",target:"_blank",rel:"noopener noreferrer"}},[_._v("Source"),t("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=s.exports}}]);