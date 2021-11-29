(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{408:function(t,v,r){"use strict";r.r(v);var _=r(54),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("目前 TCP/IP 协议可以说是名气最大、使用最广泛的计算机网络，从这篇文章来会讲解 TCP 协议的历史和分层模型。将分以下两个部分")]),t._v(" "),r("ul",[r("li",[t._v("TCP/IP 协议产生的历史背景")]),t._v(" "),r("li",[t._v("TCP/IP 协议的分层模型")])]),t._v(" "),r("p",[t._v("接下来我们来讲讲 TCP/IP 协议的历史。")]),t._v(" "),r("h2",{attrs:{id:"tcp-ip-协议产生的历史背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议产生的历史背景"}},[t._v("#")]),t._v(" TCP/IP 协议产生的历史背景")]),t._v(" "),r("p",[t._v("时间回退到 1969 年，当时的 Internet 还是一个美国国防部高级研究计划局（Advanced Research Projects Agency，ARPA）研究的非常小的网络，被称为 ARPANET（Advanced Research Project Agency Network）。")]),t._v(" "),r("p",[t._v("比较流行的说法是美国担心敌人会摧毁他们的通信网络，于是下决心要建立一个高可用的网络，即使部分线路或者交换机的故障不会导致整个网络的瘫痪。于是 ARPA 建立了著名的 ARPANET。")]),t._v(" "),r("p",[t._v("ARPANET 最早只是一个单个的分组交换网，后来发展成为了多个网络的互联技术，促成了互联网的出现。现代计算机网络的很多理念都来自 ARPANET，1983 年 TCP/IP 协议成为 ARPANET 上的标准协议，使得所有使用 TCP/IP 协议的计算机都能互联，因此人们把 1983 年当做互联网诞生的元年。")]),t._v(" "),r("p",[t._v("从字面上来看，很多人会认为 TCP/IP 是 TCP、IP 这两种协议，实际上TCP/IP 协议族指的是在 IP 协议通信过程中用到的协议的统称")]),t._v(" "),r("h2",{attrs:{id:"tcp-ip-网络分层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-网络分层"}},[t._v("#")]),t._v(" TCP/IP 网络分层")]),t._v(" "),r("p",[t._v("记得在学习计算机网络课程的时候，一上来就开始讲分层模型了，当时死记硬背的各个层的名字很快就忘光了，不明白到底分层有什么用。纵观计算机和分布式系统，你会发现「计算机的问题都可以通过增加一个虚拟层来解决，如果不行，那就两个」")]),t._v(" "),r("p",[t._v("下面用 wireshark 抓包的方式来开始看网络分层。")]),t._v(" "),r("p",[t._v("打开 wireshark，在弹出的选项中，选中 en0 网卡，在过滤器中输入"),r("code",[t._v("host www.baidu.com")]),t._v("，只抓取与百度服务器通信的数据包。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/20/16ad5181c0a6eb2c",alt:""}})]),t._v(" "),r("p",[t._v("在命令行中用 curl 命令发起 http 请求："),r("code",[t._v("curl http://www.baidu.com")]),t._v("，抓到的中间一次数据包如下")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/20/16ad5181cb911e12",alt:""}})]),t._v(" "),r("p",[t._v("可以看到协议的分层从上往下依次是")]),t._v(" "),r("ul",[r("li",[t._v("Ethernet II：网络接口层以太网帧头部信息")]),t._v(" "),r("li",[t._v("Internet Protocol Version 4：互联网层 IP 包头部信息")]),t._v(" "),r("li",[t._v("Transmission Control Protocol：传输层的数据段头部信息，此处是 TCP 协议")]),t._v(" "),r("li",[t._v("Hypertext Transfer Protocol：应用层 HTTP 的信息")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/11/16dbb2fbdaebd148",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"应用层-application-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用层-application-layer"}},[t._v("#")]),t._v(" 应用层（Application Layer）")]),t._v(" "),r("p",[t._v("应用层的本质是规定了应用程序之间如何相互传递报文， 以 HTTP 协议为例，它规定了")]),t._v(" "),r("ul",[r("li",[t._v("报文的类型，是请求报文还是响应报文")]),t._v(" "),r("li",[t._v("报文的语法，报文分为几段，各段是什么含义、用什么分隔，每个部分的每个字段什么什么含义")]),t._v(" "),r("li",[t._v("进程应该以什么样的时序发送报文和处理响应报文")])]),t._v(" "),r("p",[t._v("很多应用层协议都是由 RFC 文档定义，比如 HTTP 的 RFC 为 "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("HTTP 客户端和 HTTP 服务端的首要工作就是根据 HTTP 协议的标准组装和解析 HTTP 数据包，每个 HTTP 报文格式由三部分组成：")]),t._v(" "),r("ul",[r("li",[t._v("起始行（start line），起始行根据是请求报文还是响应报文分为「请求行」和「响应行」。这个例子中起始行是"),r("code",[t._v("GET / HTTP/1.1")]),t._v("，表示这是一个 "),r("code",[t._v("GET")]),t._v(" 请求，请求的 URL 为"),r("code",[t._v("/")]),t._v("，协议版本为"),r("code",[t._v("HTTP 1.1")]),t._v("，起始行最后会有一个空行"),r("code",[t._v("CRLF（\\r\\n)")]),t._v("与下面的首部分隔开")]),t._v(" "),r("li",[t._v("首部（header），首部采用形如"),r("code",[t._v("key:value")]),t._v("的方式，比如常见的"),r("code",[t._v("User-Agent")]),t._v("、"),r("code",[t._v("ETag")]),t._v("、"),r("code",[t._v("Content-Length")]),t._v("都属于 HTTP 首部，每个首部直接也是用空行分隔")]),t._v(" "),r("li",[t._v("可选的实体（entity），实体是 HTTP 真正要传输的内容，比如下载一个图片文件，传输的一段 HTML等")])]),t._v(" "),r("p",[t._v("以本例的请求报文格式为例")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/20/16ad5181c634aed0",alt:""}})]),t._v(" "),r("p",[t._v("除了我们熟知的 HTTP 协议，还有下面这些非常常用的应用层协议")]),t._v(" "),r("ul",[r("li",[t._v("域名解析协议 DNS")]),t._v(" "),r("li",[t._v("收发邮件 SMTP 和 POP3 协议")]),t._v(" "),r("li",[t._v("时钟同步协议 NTP")]),t._v(" "),r("li",[t._v("网络文件共享协议 NFS")])]),t._v(" "),r("h4",{attrs:{id:"传输层-transport-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传输层-transport-layer"}},[t._v("#")]),t._v(" 传输层（Transport Layer）")]),t._v(" "),r("p",[t._v("传输层的作用是为两台主机之间的「应用进程」提供端到端的逻辑通信，相隔几千公里的两台主机的进程就好像在直接通信一样。")]),t._v(" "),r("p",[t._v("虽然是叫传输层，但是并不是将数据包从一台主机传送到另一台，而是对「传输行为进行控制」，这本小册介绍的主要内容 TCP 协议就被称为传输控制协议（Transmission Control Protocol），为下面两层协议提供数据包的重传、流量控制、拥塞控制等。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/20/16ad5181c55abf06",alt:""}})]),t._v(" "),r("p",[t._v("假设你正在电脑上用微信跟女朋友聊天，用 QQ 跟技术大佬们讨论技术细节，当电脑收到一个数据包时，它怎么知道这是一条微信的聊天内容，还是一条 QQ 的消息呢？")]),t._v(" "),r("p",[t._v("这就是端口号的作用。传输层用端口号来标识不同的应用程序，主机收到数据包以后根据目标端口号将数据包传递给对应的应用程序进行处理。比如这个例子中，目标端口号为 80，百度的服务器就根据这个目标端口号将请求交给监听 80 端口的应用程序（可能是 Nginx 等负载均衡器）处理")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/11/16dbb1f53dcfd094",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"网络互连层-internet-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络互连层-internet-layer"}},[t._v("#")]),t._v(" 网络互连层（Internet Layer）")]),t._v(" "),r("p",[t._v("网络互连层提供了主机到主机的通信，将传输层产生的的数据包封装成分组数据包发送到目标主机，并提供路由选择的能力")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/20/16ad5181c3ab0eba",alt:""}})]),t._v(" "),r("p",[t._v("IP 协议是网络层的主要协议，TCP 和 UDP 都是用 IP 协议作为网络层协议。这一层的主要作用是给包加上源地址和目标地址，将数据包传送到目标地址。")]),t._v(" "),r("p",[t._v("IP 协议是一个无连接的协议，也不具备重发机制，这也是 TCP 协议复杂的原因之一就是基于了这样一个「不靠谱」的协议。")]),t._v(" "),r("h4",{attrs:{id:"网络访问层-network-access-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络访问层-network-access-layer"}},[t._v("#")]),t._v(" 网络访问层（Network Access Layer）")]),t._v(" "),r("p",[t._v("网络访问层也有说法叫做网络接口层，以太网、Wifi、蓝牙工作在这一层，网络访问层提供了主机连接到物理网络需要的硬件和相关的协议。这一层我们不做重点讨论。")]),t._v(" "),r("p",[t._v("整体的分层图如下图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/20/16ad5182f90d0bb5",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"分层的好处是什么呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分层的好处是什么呢"}},[t._v("#")]),t._v(" 分层的好处是什么呢？")]),t._v(" "),r("p",[t._v("分层的本质是通过分离关注点而让复杂问题简单化，通过分层可以做到：")]),t._v(" "),r("ul",[r("li",[t._v("各层独立：限制了依赖关系的范围，各层之间使用标准化的接口，各层不需要知道上下层是如何工作的，增加或者修改一个应用层协议不会影响传输层协议")]),t._v(" "),r("li",[t._v("灵活性更好：比如路由器不需要应用层和传输层，分层以后路由器就可以只用加载更少的几个协议层")]),t._v(" "),r("li",[t._v("易于测试和维护：提高了可测试性，可以独立的测试特定层，某一层有了更好的实现可以整体替换掉")]),t._v(" "),r("li",[t._v("能促进标准化：每一层职责清楚，方便进行标准化")])]),t._v(" "),r("h2",{attrs:{id:"习题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#习题"}},[t._v("#")]),t._v(" 习题")]),t._v(" "),r("ol",[r("li",[t._v("收到 IP 数据包解析以后，它怎么知道这个分组应该投递到上层的哪一个协议（UDP 或 TCP）")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/book/6844733788681928712/section/6844733788811984904",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),r("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=e.exports}}]);