(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{404:function(t,_,e){"use strict";e.r(_);var v=e(54),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("讲完前面建立连接、断开连接的过程，整个 TCP 协议的 11 种状态都出现了。TCP 之所以复杂，是因为它是一个有状态的协议。如果这个时候祭出下面的 TCP 状态变化图，估计大多数人都会懵圈，不要慌，我们会把上面的状态一一解释清楚。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/22/16b7c9fb02bff057",alt:""}})]),t._v(" "),e("p",[t._v("上面这个图是网络上有人用 Latex 画出来了，很赞。不过有一处小错误，我修改了一下，如果感兴趣的话可以从我的 github 上进行下载，链接："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/tree/master/tcp_connection_management",target:"_blank",rel:"noopener noreferrer"}},[t._v("tcp-state-machine.tex"),e("OutboundLink")],1),t._v("，在 "),e("a",{attrs:{href:"https://www.overleaf.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("overleaf"),e("OutboundLink")],1),t._v(" 的网站可以进行实时预览。")]),t._v(" "),e("p",[e("strong",[t._v("1、CLOSED")])]),t._v(" "),e("p",[t._v("这个状态是一个「假想」的状态，是 TCP 连接还未开始建立连接或者连接已经彻底释放的状态。因此"),e("code",[t._v("CLOSED")]),t._v("状态也无法通过 "),e("code",[t._v("netstat")]),t._v(" 或者 "),e("code",[t._v("lsof")]),t._v(" 等工具看到。")]),t._v(" "),e("p",[t._v("从图中可以看到，从 CLOSE 状态转换为其它状态有两种可能：主动打开（Active Open）和被动打开（Passive Open）")]),t._v(" "),e("ul",[e("li",[t._v("被动打开：一般来说，服务端会监听一个特定的端口，等待客户端的新连接，同时会进入"),e("code",[t._v("LISTEN")]),t._v("状态，这种被称为「被动打开」")]),t._v(" "),e("li",[t._v("主动打开：客户端主动发送一个"),e("code",[t._v("SYN")]),t._v("包准备三次握手，被称为「主动打开（Active Open）」")])]),t._v(" "),e("p",[e("strong",[t._v("2、LISTEN")])]),t._v(" "),e("p",[t._v("一端（通常是服务端）调用 bind、listen 系统调用监听特定端口时进入到"),e("code",[t._v("LISTEN")]),t._v("状态，等待客户端发送 "),e("code",[t._v("SYN")]),t._v(" 报文三次握手建立连接。")]),t._v(" "),e("p",[t._v("在 Java 中只用一行代码就可以构造一个 listen 状态的 socket。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("ServerSocket serverSocket = new ServerSocket(9999);\n")])])]),e("p",[t._v("ServerSocket 的构造器函数最终调用了 bind、listen，接下来就可以调用 accept 接收客户端连接请求了。")]),t._v(" "),e("p",[t._v("使用 netstat 进行查看")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("netstat -tnpa | grep -i 9999                     \ntcp6       0      0 :::9999     :::*                    LISTEN      20096/java       \n")])])]),e("p",[t._v("处于"),e("code",[t._v("LISTEN")]),t._v("状态的连接收到"),e("code",[t._v("SYN")]),t._v("包以后会发送 "),e("code",[t._v("SYN+ACK")]),t._v(" 给对端，同时进入"),e("code",[t._v("SYN-RCVD")]),t._v("阶段")]),t._v(" "),e("p",[e("strong",[t._v("3、SYN-SENT")])]),t._v(" "),e("p",[t._v("客户端发送 "),e("code",[t._v("SYN")]),t._v(" 报文等待 "),e("code",[t._v("ACK")]),t._v(" 的过程进入 "),e("code",[t._v("SYN-SENT")]),t._v("状态。同时会开启一个定时器，如果超时还没有收到"),e("code",[t._v("ACK")]),t._v("会重发 SYN。")]),t._v(" "),e("p",[t._v("使用 packetdrill 可以非常快速的构造一个处于"),e("code",[t._v("SYN-SENT")]),t._v("状态的连接，完整的代码见："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_state/syn_sent.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("syn_sent.pkt"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("+0 socket(..., SOCK_STREAM, IPPROTO_TCP) = 3\n")])])]),e("p",[t._v("​"),e("br"),t._v("\n+0 connect(3, ..., ...) = -1")]),t._v(" "),e("p",[t._v("运行上面的脚本，然后使用 netstat 命令查看连接状态l")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("netstat -atnp | grep -i 8080                                                                                                    \ntcp        0      1 192.168.46.26:42678     192.0.2.1:8080          SYN_SENT    3897/packetdrill\n")])])]),e("p",[e("strong",[t._v("4、SYN-RCVD")])]),t._v(" "),e("p",[t._v("服务端收到"),e("code",[t._v("SYN")]),t._v("报文以后会回复 "),e("code",[t._v("SYN+ACK")]),t._v("，然后等待对端 ACK 的时候进入"),e("code",[t._v("SYN-RCVD")]),t._v("，完整的代码见："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_state/state_syn_rcvd.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("state_syn_rcvd.pkt"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("+0  < S 0:0(0) win 65535  <mss 100>\n+0  > S. 0:0(0) ack 1 <...>\n// 故意注释掉下面这一行\n// +.1 < . 1:1(0) ack 1 win 65535\n")])])]),e("p",[e("strong",[t._v("5、ESTABLISHED")])]),t._v(" "),e("p",[e("code",[t._v("SYN-SENT")]),t._v("或者"),e("code",[t._v("SYN-RCVD")]),t._v("状态的连接收到对端确认"),e("code",[t._v("ACK")]),t._v("以后进入"),e("code",[t._v("ESTABLISHED")]),t._v("状态，连接建立成功。")]),t._v(" "),e("p",[t._v("把上面例子中脚本的注释取消掉，三次握手成功就会进入"),e("code",[t._v("ESTABLISHED")]),t._v("状态。")]),t._v(" "),e("p",[t._v("从图中可以看到"),e("code",[t._v("ESTABLISHED")]),t._v("状态的连接有两种可能的状态转换方式:")]),t._v(" "),e("ul",[e("li",[t._v("调用 close 等系统调用主动关闭连接，这个时候会发送 FIN 包给对端，同时自己进入"),e("code",[t._v("FIN-WAIT-1")]),t._v("状态")]),t._v(" "),e("li",[t._v("收到对端的 FIN 包，执行被动关闭，收到 "),e("code",[t._v("FIN")]),t._v(" 包以后会回复 "),e("code",[t._v("ACK")]),t._v("，同时自己进入"),e("code",[t._v("CLOSE-WAIT")]),t._v("状态")])]),t._v(" "),e("p",[e("strong",[t._v("6、FIN-WAIT-1")])]),t._v(" "),e("p",[t._v("主动关闭的一方发送了 FIN 包，等待对端回复 ACK 时进入"),e("code",[t._v("FIN-WAIT-1")]),t._v("状态。")]),t._v(" "),e("p",[t._v("模拟的 packetdrill 脚本见："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_state/state_fin_wait_1.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("state_fin_wait_1.pkt"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("+0  < S 0:0(0) win 65535  <mss 100>\n+0  > S. 0:0(0) ack 1 <...>\n.1 < . 1:1(0) ack 1 win 65535\n\n+.1 accept(3, ..., ...) = 4\n")])])]),e("p",[t._v("​"),e("br"),t._v("\n+.1 close(4) = 0")]),t._v(" "),e("p",[t._v("执行上的脚本，使用 netstat 就可以看到 FIN_WAIT1 状态的连接了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("netstat -tnpa | grep 8080\ntcp        0      0 192.168.73.207:8080     0.0.0.0:*               LISTEN      -                   \ntcp        0      1 192.168.73.207:8080     192.0.2.1:52859         FIN_WAIT1   -   \n")])])]),e("p",[e("code",[t._v("FIN_WAIT1")]),t._v("状态的切换如下几种情况")]),t._v(" "),e("ul",[e("li",[t._v("当收到 "),e("code",[t._v("ACK")]),t._v(" 以后，"),e("code",[t._v("FIN-WAIT-1")]),t._v("状态会转换到"),e("code",[t._v("FIN-WAIT-2")]),t._v("状态")]),t._v(" "),e("li",[t._v("当收到 "),e("code",[t._v("FIN")]),t._v(" 以后，会回复对端 "),e("code",[t._v("ACK")]),t._v("，"),e("code",[t._v("FIN-WAIT-1")]),t._v("状态会转换到"),e("code",[t._v("CLOSING")]),t._v("状态")]),t._v(" "),e("li",[t._v("当收到 "),e("code",[t._v("FIN+ACK")]),t._v(" 以后，会回复对端 "),e("code",[t._v("ACK")]),t._v("，"),e("code",[t._v("FIN-WAIT-1")]),t._v("状态会转换到"),e("code",[t._v("TIME_WAIT")]),t._v("状态，跳过了"),e("code",[t._v("FIN-WAIT-2")]),t._v("状态")])]),t._v(" "),e("p",[e("strong",[t._v("7、FIN-WAIT-2")])]),t._v(" "),e("p",[t._v("处于 "),e("code",[t._v("FIN-WAIT-1")]),t._v("状态的连接收到 ACK 确认包以后进入"),e("code",[t._v("FIN-WAIT-2")]),t._v("状态，这个时候主动关闭方的 FIN 包已经被对方确认，等待被动关闭方发送 FIN 包。")]),t._v(" "),e("p",[t._v("模拟的脚本见："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_state/state_fin_wait_2.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("state_fin_wait_2.pkt"),e("OutboundLink")],1),t._v("，核心代码如下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("+0  < S 0:0(0) win 65535  <mss 100>\n+0  > S. 0:0(0) ack 1 <...>\n.1 < . 1:1(0) ack 1 win 65535\n+.1  accept(3, ..., ...) = 4\n")])])]),e("p",[t._v("​"),e("br"),t._v("\n+.1 close(4) = 0")]),t._v(" "),e("p",[t._v("​"),e("br"),t._v("\n+.1 < . 1:1(0) ack 2 win 257")]),t._v(" "),e("p",[t._v("执行上的脚本，使用 netstat 就可以看到 FIN_WAIT2 状态的连接了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("netstat -tnpa | grep 8080\ntcp        0      0 192.168.81.69:8080      0.0.0.0:*               LISTEN      -                   \ntcp        0      0 192.168.81.69:8080      192.0.2.1:34131         FIN_WAIT2   -  \n")])])]),e("p",[t._v("当收到对端的 FIN 包以后，主动关闭方进入"),e("code",[t._v("TIME_WAIT")]),t._v("状态")]),t._v(" "),e("p",[e("strong",[t._v("8、CLOSE-WAIT")])]),t._v(" "),e("p",[t._v("当有一方想关闭连接的时候，调用 close 等系统调用关闭 TCP 连接会发送 FIN 包给对端，这个被动关闭方，收到 FIN 包以后进入"),e("code",[t._v("CLOSE-WAIT")]),t._v("状态。")]),t._v(" "),e("p",[t._v("完整的代码见："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_state/state_close_wait.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("state_close_wait.pkt"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("+.1 < F. 1:1(0) win 65535  <mss 100> \n\n+0 > . 1:1(0) ack 2 <...>\n")])])]),e("p",[t._v("执行上的脚本，使用 netstat 就可以看到 CLOSE_WAIT 状态的连接了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("sudo netstat -tnpa | grep -i 8080    \ntcp        0      0 192.168.168.15:8080     0.0.0.0:*               LISTEN      15818/packetdrill   \ntcp        1      0 192.168.168.15:8080     192.0.2.1:44948         CLOSE_WAIT  15818/packetdrill   \n")])])]),e("p",[t._v("当被动关闭方有数据要发送给对端的时候，可以继续发送数据。当没有数据发送给对方时，也会调用 close 等系统调用关闭 TCP 连接，发送 FIN 包给主动关闭的一方，同时进入"),e("code",[t._v("LAST-ACK")]),t._v("状态")]),t._v(" "),e("p",[e("strong",[t._v("9、TIME-WAIT")])]),t._v(" "),e("p",[e("code",[t._v("TIME-WAIT")]),t._v("可能是所有状态中面试问的最频繁的一种状态了。这个状态是收到了被动关闭方的 FIN 包，发送确认 ACK 给对端，开启 2MSL 定时器，定时器到期时进入 "),e("code",[t._v("CLOSED")]),t._v(" 状态，连接释放。"),e("code",[t._v("TIME-WAIT")]),t._v(" 会有专门的文章介绍。")]),t._v(" "),e("p",[t._v("完整的代码见："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_state/state_time_wait.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("state_time_wait.pkt"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// 服务端主动断开连接\n+.1 close(4) = 0\n+0 > F. 1:1(0) ack 1 <...>\n\n// 向协议栈注入 ACK 包，模拟客户端发送了 ACK\n+.1 < . 1:1(0) ack 2 win 257\n\n// 向协议栈注入 FIN，模拟服务端收到了 FIN\n+.1 < F. 1:1(0) win 65535  <mss 100> \n\n+0 `sleep 1000000`\n")])])]),e("p",[t._v("执行上的脚本，使用 netstat 就可以看到 TIME-WAIT 状态的连接了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("netstat -tnpa | grep -i 8080\n\ntcp        0      0 192.168.210.245:8080    0.0.0.0:*               LISTEN      6297/packetdrill    \ntcp        0      0 192.168.210.245:8080    192.0.2.1:40091         TIME_WAIT   -  \n")])])]),e("p",[e("strong",[t._v("10、LAST-ACK")])]),t._v(" "),e("p",[e("code",[t._v("LAST-ACK")]),t._v(" 顾名思义等待最后的 ACK。是被动关闭的一方，发送 FIN 包给对端等待 ACK 确认时的状态。")]),t._v(" "),e("p",[t._v("完整的模拟代码见："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_state/state_last_ack.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("state_last_ack.pkt"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// 向协议栈注入 FIN 包，模拟客户端发送了 FIN，主动关闭连接\n+.1 < F. 1:1(0) win 65535  <mss 100> \n// 预期协议栈会发出 ACK\n+0 > . 1:1(0) ack 2 <...> \n\n+.1 close(4) = 0\n// 预期服务端会发出 FIN\n+0 > F. 1:1(0) ack 2 <...> \n\n\nsudo netstat -lnpa  | grep 8080                                                                                                                                                                             1 ↵\ntcp        0      0 192.168.190.26:8080     0.0.0.0:*               LISTEN      6163/packetdrill\ntcp        1      1 192.168.190.26:8080     192.0.2.1:36054         LAST_ACK\n")])])]),e("p",[t._v("当收到 ACK 以后，进入 "),e("code",[t._v("CLOSED")]),t._v(" 状态，连接释放。")]),t._v(" "),e("h2",{attrs:{id:"_11、closing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11、closing"}},[t._v("#")]),t._v(" 11、CLOSING")]),t._v(" "),e("p",[e("code",[t._v("CLOSING")]),t._v("状态在「同时关闭」的情况下出现。这里的同时关闭中的「同时」其实并不是时间意义上的同时，而是指的是在发送 FIN 包还未收到确认之前，收到了对端的 FIN 的情况。")]),t._v(" "),e("p",[t._v("我们用一个简单的脚本来模拟"),e("code",[t._v("CLOSING")]),t._v("状态。完整的代码见 "),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_connection_management/state-closing.pkt",target:"_blank",rel:"noopener noreferrer"}},[t._v("state-closing.pkt"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("​"),e("br"),t._v("\n​"),e("br"),t._v("\n+0.100 write(4, ..., 1000) = 1000")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("+0 > P. 1:1001(1000) ack 1 <...>\n")])])]),e("p",[t._v("​"),e("br"),t._v("\n+0.01 < . 1:1(0) ack 1001 win 257")]),t._v(" "),e("p",[t._v("​"),e("br"),t._v("\n+.1 close(4) = 0")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("+0 > F. 1001:1001(0) ack 1 <...>\n")])])]),e("p",[t._v("​"),e("br"),t._v("\n+.1 < F. 1:1(0) ack 1001 win 257")]),t._v(" "),e("p",[t._v("​"),e("br"),t._v("\n+0 > . 1002:1002(0) ack 2 <...>")]),t._v(" "),e("p",[t._v("​"),e("br"),t._v("\n​"),e("br"),t._v("\n​")]),t._v(" "),e("p",[t._v("运行 packetdrill 执行上面的脚本，同时开启抓包。")]),t._v(" "),e("p",[t._v("使用 netstat 查看当前的连接状态就可以看到 CLOSING 状态了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("netstat -lnpa | grep -i 8080\n\ntcp        0      0 192.168.60.204:8080     0.0.0.0:*               LISTEN      -\ntcp        1      1 192.168.60.204:8080     192.0.2.1:55456         CLOSING     -\n")])])]),e("p",[t._v("使用 wireshark 查看如下图所示，完整的抓包文件可以从 github 下载："),e("a",{attrs:{href:"https://github.com/arthur-zhang/tcp_ebook/blob/master/tcp_connection_management/state-closing.pcap",target:"_blank",rel:"noopener noreferrer"}},[t._v("state-closing.pcap"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/22/16b7c9fb03c6c24d",alt:""}})]),t._v(" "),e("p",[t._v("整个过程如下图所示")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/22/16b7c9fb0e55ff72",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("到这里，TCP 的 11 种状态就介绍完了，我为了你准备了几道试题，看下自己的掌握的情况吧。")]),t._v(" "),e("h2",{attrs:{id:"作业题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作业题"}},[t._v("#")]),t._v(" 作业题")]),t._v(" "),e("p",[t._v("1、下列TCP连接建立过程描述正确的是：")]),t._v(" "),e("ul",[e("li",[t._v("A、服务端收到客户端的 SYN 包后等待 2*MSL 时间后就会进入 SYN_SENT 状态")]),t._v(" "),e("li",[t._v("B、服务端收到客户端的 ACK 包后会进入 SYN_RCVD 状态")]),t._v(" "),e("li",[t._v("C、当客户端处于 ESTABLISHED 状态时，服务端可能仍然处于 SYN_RCVD 状态")]),t._v(" "),e("li",[t._v("D、服务端未收到客户端确认包，等待 2*MSL 时间后会直接关闭连接")])]),t._v(" "),e("p",[t._v("2、TCP连接关闭，可能有经历哪几种状态：")]),t._v(" "),e("ul",[e("li",[t._v("A、LISTEN")]),t._v(" "),e("li",[t._v("B、TIME-WAIT")]),t._v(" "),e("li",[t._v("C、LAST-ACK")]),t._v(" "),e("li",[t._v("D、SYN-RECEIVED")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/book/6844733788681928712/section/6844733788828729357",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),e("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=a.exports}}]);