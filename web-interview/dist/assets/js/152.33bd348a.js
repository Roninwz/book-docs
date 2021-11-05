(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{533:function(t,v,_){"use strict";_.r(v);var s=_(54),T=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-什么是http-http-和-https-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-什么是http-http-和-https-的区别"}},[t._v("#")]),t._v(" 面试官：什么是HTTP? HTTP 和 HTTPS 的区别?")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/f50c71f0-b20b-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"一、http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、http"}},[t._v("#")]),t._v(" 一、HTTP")]),t._v(" "),_("p",[_("code",[t._v("HTTP")]),t._v(" (HyperText Transfer Protocol)，即超文本运输协议，是实现网络通信的一种规范")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/fda119b0-b20b-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("p",[t._v("在计算机和网络世界有，存在不同的协议，如广播协议、寻址协议、路由协议等等......")]),t._v(" "),_("p",[t._v("而"),_("code",[t._v("HTTP")]),t._v("是一个传输协议，即将数据由A传到B或将B传输到A，并且 A 与 B 之间能够存放很多第三方，如： A<=>X<=>Y<=>Z<=>B")]),t._v(" "),_("p",[t._v("传输的数据并不是计算机底层中的二进制包，而是完整的、有意义的数据，如HTML 文件, 图片文件, 查询结果等超文本，能够被上层应用识别")]),t._v(" "),_("p",[t._v("在实际应用中，"),_("code",[t._v("HTTP")]),t._v("常被用于在"),_("code",[t._v("Web")]),t._v("浏览器和网站服务器之间传递信息，以明文方式发送内容，不提供任何方式的数据加密")]),t._v(" "),_("p",[t._v("特点如下：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("支持客户/服务器模式")])]),t._v(" "),_("li",[_("p",[t._v("简单快速：客户向服务器请求服务时，只需传送请求方法和路径。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快")])]),t._v(" "),_("li",[_("p",[t._v("灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记")])]),t._v(" "),_("li",[_("p",[t._v("无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间")])]),t._v(" "),_("li",[_("p",[t._v("无状态：HTTP协议无法根据之前的状态进行本次的请求处理")])])]),t._v(" "),_("h2",{attrs:{id:"二、https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、https"}},[t._v("#")]),t._v(" 二、HTTPS")]),t._v(" "),_("p",[t._v("在上述介绍"),_("code",[t._v("HTTP")]),t._v("中，了解到"),_("code",[t._v("HTTP")]),t._v("传递信息是以明文的形式发送内容，这并不安全。而"),_("code",[t._v("HTTPS")]),t._v("出现正是为了解决"),_("code",[t._v("HTTP")]),t._v("不安全的特性")]),t._v(" "),_("p",[t._v("为了保证这些隐私数据能加密传输，让"),_("code",[t._v("HTTP")]),t._v("运行安全的"),_("code",[t._v("SSL/TLS")]),t._v("协议上，即 HTTPS = HTTP + SSL/TLS，通过 "),_("code",[t._v("SSL")]),t._v("证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密")]),t._v(" "),_("p",[_("code",[t._v("SSL")]),t._v(" 协议位于"),_("code",[t._v("TCP/IP")]),t._v(" 协议与各种应用层协议之间，浏览器和服务器在使用 "),_("code",[t._v("SSL")]),t._v(" 建立连接时需要选择一组恰当的加密算法来实现安全通信，为数据通讯提供安全支持")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/078c50c0-b20c-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("p",[t._v("流程图如下所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/0e409fc0-b20c-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("首先客户端通过URL访问服务器建立SSL连接")]),t._v(" "),_("li",[t._v("服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端")]),t._v(" "),_("li",[t._v("客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级")]),t._v(" "),_("li",[t._v("客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站")]),t._v(" "),_("li",[t._v("服务器利用自己的私钥解密出会话密钥")]),t._v(" "),_("li",[t._v("服务器利用会话密钥加密与客户端之间的通信")])]),t._v(" "),_("h2",{attrs:{id:"三、区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[t._v("#")]),t._v(" 三、区别")]),t._v(" "),_("ul",[_("li",[t._v("HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理，相对更安全")]),t._v(" "),_("li",[t._v("HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP是80，HTTPS是443")]),t._v(" "),_("li",[t._v("HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP")]),t._v(" "),_("li",[t._v("HTTPS需要SSL，SSL 证书需要钱，功能越强大的证书费用越高")])]),t._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),_("ul",[_("li",[t._v("https://www.cnblogs.com/klb561/p/10289199.html")]),t._v(" "),_("li",[t._v("https://www.jianshu.com/p/205c0fc51c97")]),t._v(" "),_("li",[t._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);v.default=T.exports}}]);