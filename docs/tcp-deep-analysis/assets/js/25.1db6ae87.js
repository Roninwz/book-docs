(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{411:function(e,t,a){"use strict";a.r(t);var s=a(54),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("从这篇文章开始，我们来讲大名鼎鼎的 Nagle 算法。同样以一个小测验来开始。")]),e._v(" "),a("p",[e._v("关于下面这段代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Socket socket = new Socket();\nsocket.connect(new InetSocketAddress("localhost", 9999));\nOutputStream output = socket.getOutputStream();\nbyte[] request = new byte[10];\nfor (int i = 0; i < 5; i++) {\n    output.write(request);\n}\n')])])]),a("p",[e._v("说法正确的是：")]),e._v(" "),a("ul",[a("li",[e._v("A. TCP 把 5 个包合并，一次发送 50 个字节")]),e._v(" "),a("li",[e._v("B. TCP 分 5 次发送，一次发送 10 个字节")]),e._v(" "),a("li",[e._v("C. 以上都不对")])]),e._v(" "),a("p",[e._v("来做一下实验，客户端代码如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class NagleClient {\n    public static void main(String[] args) throws Exception {\n        Socket socket = new Socket();\n        SocketAddress address = new InetSocketAddress("c1", 9999);\n        socket.connect(address);\n        OutputStream output = socket.getOutputStream();\n        byte[] request = new byte[10];\n        \n        for (int i = 0; i < 5; i++) {\n            output.write(request);\n        }\n        TimeUnit.SECONDS.sleep(1);\n        socket.close();\n    }\n}\n')])])]),a("p",[e._v("服务端代码比较简单，可以直接用 "),a("code",[e._v("nc -l 9999")]),e._v(" 启动一个 tcp 服务器 运行上面的 NagleClient，抓包如下")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a49eab60168bb9",alt:""}})]),e._v(" "),a("p",[e._v("可以看到除了第一个包是单独发送，后面的四个包合并到了一起，所以文章开头的答案是 C")]),e._v(" "),a("p",[e._v("那为什么是这样的呢？这就是我们今天要讲的重点 Nagle 算法。")]),e._v(" "),a("h2",{attrs:{id:"nagle-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nagle-算法"}},[e._v("#")]),e._v(" nagle 算法")]),e._v(" "),a("p",[e._v("简单来讲 nagle 算法讲的是减少发送端频繁的发送小包给对方。")]),e._v(" "),a("p",[e._v("Nagle 算法要求，当一个 TCP 连接中有在传数据（已经发出但还未确认的数据）时，小于 MSS 的报文段就不能被发送，直到所有的在传数据都收到了 ACK。同时收到 ACK 后，TCP 还不会马上就发送数据，会收集小包合并一起发送。网上有人想象的把 Nagle 算法说成是「hold 住哥」，我觉得特别形象。")]),e._v(" "),a("p",[e._v("算法思路如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("if there is new data to send\n  if the window size >= MSS and available data is >= MSS\n    send complete MSS segment now\n  else\n    if there is unconfirmed data still in the pipe\n      enqueue data in the buffer until an acknowledge is received\n    else\n      send data immediately\n    end if\n  end if\nend if\n")])])]),a("p",[e._v("默认情况下 Nagle 算法都是启用的，Java 可以通过 "),a("code",[e._v("setTcpNoDelay(true);")]),e._v("来禁用 Nagle 算法。")]),e._v(" "),a("p",[e._v("还是上面的代码，修改代码开启 TCP_NODELAY 禁用 Nagle 算法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("省略...\nSocket socket = new Socket();\nsocket.setTcpNoDelay(true);\n省略...\n")])])]),a("p",[e._v("再次抓包")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a49eab61eae538",alt:""}})]),e._v(" "),a("p",[e._v("可以看到几乎同一瞬间分 5 次把数据发送了出去，不管之前发出去的包有没有收到 ACK。 Nagle 算法开启前后对比如下图所示")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a49eab67e29995",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"用-packetdrill-来演示-nagle-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-packetdrill-来演示-nagle-算法"}},[e._v("#")]),e._v(" 用 packetdrill 来演示 Nagle 算法")]),e._v(" "),a("p",[e._v("如果不想写那么长的 Java 代码，可以用 packetdrill 代码来演示。同样的做法是发送端短时间内发送 5 个小包。先来看 Nagle 算法开启的情况")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  1  --tolerance_usecs=100000\n  2 0.000 socket(..., SOCK_STREAM, IPPROTO_TCP) = 3\n  3 // 0.010 setsockopt(3, SOL_TCP, TCP_NODELAY, [1], 4) = 0\n  4\n  5 0.100...0.200 connect(3, ..., ...) = 0\n  6\n  7 // Establish a connection.\n  8 0.100 > S 0:0(0) <mss 1460,sackOK,TS val 100 ecr 0,nop,wscale 7>\n  9 0.200 < S. 0:0(0) ack 1 win 32792 <mss 1100,nop,wscale 7>\n 10 0.200 > . 1:1(0) ack 1\n 11\n 12 +0 write(3, ..., 10) = 10\n 13 +0 write(3, ..., 10) = 10\n 14 +0 write(3, ..., 10) = 10\n 15 +0 write(3, ..., 10) = 10\n 16 +0 write(3, ..., 10) = 10\n 17\n 18  +0.030 < . 1:1(0) ack 11 win 257\n 19  +0.030 < . 1:1(0) ack 21 win 257\n 20  +0.030 < . 1:1(0) ack 31 win 257\n 21  +0.030 < . 1:1(0) ack 41 win 257\n 22  +0.030 < . 1:1(0) ack 51 win 257\n 23\n 24 +0 `sleep 1000000`\n")])])]),a("p",[e._v("先注释掉第三行，关闭 TCP_NODELAY，用 packetdrill 执行脚本"),a("code",[e._v("sudo packetdrill nagle.pkt")]),e._v("抓包结果如下")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a49eab6fb73b7b",alt:""}})]),e._v(" "),a("p",[e._v("结果如我们预期，第一个包正常发送，等第 1 次包收到 ACK 回复以后，后面的 4 次包合并在一起发送出去。")]),e._v(" "),a("p",[e._v("现在去掉第三行的注释，禁用 Nagle 算法，重新运行抓包")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a49eab64a55a0c",alt:""}})]),e._v(" "),a("p",[e._v("可以看到这次发送端没有等对端回复 ACK，就把所有的小包一个个发出去了。")]),e._v(" "),a("h2",{attrs:{id:"一个典型的小包场景-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个典型的小包场景-ssh"}},[e._v("#")]),e._v(" 一个典型的小包场景：SSH")]),e._v(" "),a("p",[e._v("一个典型的大量小包传输的场景是用 ssh 登录另外一台服务器，每输入一个字符，服务端也随即进行回应，客户端收到了以后才会把输入的字符和响应的内容显示在自己这边。比如登录服务器后输入"),a("code",[e._v("ls")]),e._v("然后换行，中间包交互的过程如下图")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a49eab763863bd",alt:""}})]),e._v(" "),a("ol",[a("li",[e._v("客户端输入"),a("code",[e._v("l")]),e._v("，字符 "),a("code",[e._v("l")]),e._v(" 被加密后传输给服务器")]),e._v(" "),a("li",[e._v("服务器收到"),a("code",[e._v("l")]),e._v("包，回复被加密的 "),a("code",[e._v("l")]),e._v(" 及 ACK")]),e._v(" "),a("li",[e._v("客户端输入"),a("code",[e._v("s")]),e._v("，字符 "),a("code",[e._v("s")]),e._v(" 被加密后传输给服务器")]),e._v(" "),a("li",[e._v("服务器收到"),a("code",[e._v("s")]),e._v("包，回复被加密的 "),a("code",[e._v("s")]),e._v(" 及 ACK")]),e._v(" "),a("li",[e._v("客户端输入 enter 换行符，换行符被加密后传输给服务器")]),e._v(" "),a("li",[e._v("服务器收到换行符，回复被加密的换行符及 ACK")]),e._v(" "),a("li",[e._v("服务端返回执行 ls 的结果")]),e._v(" "),a("li",[e._v("客户端回复 ACK")])]),e._v(" "),a("h2",{attrs:{id:"nagle-算法的意义在哪里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nagle-算法的意义在哪里"}},[e._v("#")]),e._v(" Nagle 算法的意义在哪里")]),e._v(" "),a("p",[e._v("Nagle 算法的作用是减少小包在客户端和服务端直接传输，一个包的 TCP 头和 IP 头加起来至少都有 40 个字节，如果携带的数据比较小的话，那就非常浪费了。就好比开着一辆大货车运一箱苹果一样。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/23/16a49eac0e76757b",alt:""}})]),e._v(" "),a("p",[e._v("Nagle 算法在通信时延较低的场景下意义不大。在 Nagle 算法中 ACK 返回越快，下次数据传输就越早。")]),e._v(" "),a("p",[e._v("假设 RTT 为 10ms 且没有延迟确认（这个后面会讲到），那么你敲击键盘的间隔大于 10ms 的话就不会触发 Nagle 的条件：只有接收到所有的在传数据的 ACK 后才能继续发数据，也即如果所有的发出去的包 ACK 都收到了，就不用等了。如果你想触发 Nagle 的停等（stop-wait）机制，1s 内要输入超过 100 个字符。因此如果在局域网内，Nagle 算法基本上没有什么效果。")]),e._v(" "),a("p",[e._v("如果客户端到服务器的 RTT 较大，比如多达 200ms，这个时候你只要1s 内输入超过 5 个字符，就有可能触发 Nagle 算法了。")]),e._v(" "),a("p",[a("strong",[e._v("Nagle 算法是时代的产物")]),e._v("：Nagle 算法出现的时候网络带宽都很小，当有大量小包传输时，很容易将带宽占满，出现丢包重传等现象。因此对 ssh 这种交互式的应用场景，选择开启 Nagle 算法可以使得不再那么频繁的发送小包，而是合并到一起，代价是稍微有一些延迟。现在的 ssh 客户端已经默认关闭了 Nagle 算法。")]),e._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),a("p",[e._v("这篇文章主要介绍了非常经典的 Nagle 算法，这个算法可以有效的减少网络上小包的数量。Nagle 算法是应用在发送端的，简而言之就是，对发送端而言：")]),e._v(" "),a("ul",[a("li",[e._v("当第一次发送数据时不用等待，就算是 1byte 的小包也立即发送")]),e._v(" "),a("li",[e._v("后面发送数据时需要累积数据包直到满足下面的条件之一才会继续发送数据：\n"),a("ul",[a("li",[e._v("数据包达到最大段大小MSS")]),e._v(" "),a("li",[e._v("接收端收到之前数据包的确认 ACK")])])])]),e._v(" "),a("p",[e._v("不过 Nagle 算法是时代的产物，可能会导致较多的性能问题，尤其是与我们下一篇文章要介绍的延迟确认一起使用的时候。很多组件为了高性能都默认禁用掉了这个特性。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/book/6844733788681928712/section/6844733788841328648",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);