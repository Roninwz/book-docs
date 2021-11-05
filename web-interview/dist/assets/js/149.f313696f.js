(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{530:function(t,v,_){"use strict";_.r(v);var a=_(54),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-dns协议-是什么-说说dns-完整的查询过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-dns协议-是什么-说说dns-完整的查询过程"}},[t._v("#")]),t._v(" 面试官：DNS协议 是什么？说说DNS 完整的查询过程?")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/88081710-b78f-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"一、是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),_("p",[t._v("DNS（Domain Names System），域名系统，是互联网一项服务，是进行域名和与之相对应的 IP 地址进行转换的服务器")]),t._v(" "),_("p",[t._v("简单来讲，"),_("code",[t._v("DNS")]),t._v("相当于一个翻译官，负责将域名翻译成"),_("code",[t._v("ip")]),t._v("地址")]),t._v(" "),_("ul",[_("li",[t._v("IP 地址：一长串能够唯一地标记网络上的计算机的数字")]),t._v(" "),_("li",[t._v("域名：是由一串用点分隔的名字组成的 Internet 上某一台计算机或计算机组的名称，用于在数据传输时对计算机的定位标识")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/965a03a0-b78f-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"二、域名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、域名"}},[t._v("#")]),t._v(" 二、域名")]),t._v(" "),_("p",[t._v("域名是一个具有层次的结构，从上到下一次为根域名、顶级域名、二级域名、三级域名...")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/9f112780-b78f-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("p",[t._v("例如"),_("code",[t._v("www.xxx.com")]),t._v("，"),_("code",[t._v("www")]),t._v("为三级域名、"),_("code",[t._v("xxx")]),t._v("为二级域名、"),_("code",[t._v("com")]),t._v("为顶级域名，系统为用户做了兼容，域名末尾的根域名"),_("code",[t._v(".")]),t._v("一般不需要输入")]),t._v(" "),_("p",[t._v("在域名的每一层都会有一个域名服务器，如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/f40e0090-b7a4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("p",[t._v("除此之外，还有电脑默认的本地域名服务器")]),t._v(" "),_("h2",{attrs:{id:"三、查询方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、查询方式"}},[t._v("#")]),t._v(" 三、查询方式")]),t._v(" "),_("p",[t._v("DNS 查询的方式有两种：")]),t._v(" "),_("ul",[_("li",[t._v("递归查询：如果 A 请求 B，那么 B 作为请求的接收者一定要给 A 想要的答案")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/a73be9e0-b78f-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("迭代查询：如果接收者 B 没有请求者 A 所需要的准确内容，接收者 B 将告诉请求者 A，如何去获得这个内容，但是自己并不去发出请求")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/b023e1c0-b78f-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"四、域名缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、域名缓存"}},[t._v("#")]),t._v(" 四、域名缓存")]),t._v(" "),_("p",[t._v("在域名服务器解析的时候，使用缓存保存域名和"),_("code",[t._v("IP")]),t._v("地址的映射")]),t._v(" "),_("p",[t._v("计算机中"),_("code",[t._v("DNS")]),t._v("的记录也分成了两种缓存方式：")]),t._v(" "),_("ul",[_("li",[t._v("浏览器缓存：浏览器在获取网站域名的实际 IP 地址后会对其进行缓存，减少网络请求的损耗")]),t._v(" "),_("li",[t._v("操作系统缓存：操作系统的缓存其实是用户自己配置的 "),_("code",[t._v("hosts")]),t._v(" 文件")])]),t._v(" "),_("h2",{attrs:{id:"五、查询过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、查询过程"}},[t._v("#")]),t._v(" 五、查询过程")]),t._v(" "),_("p",[t._v("解析域名的过程如下：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("首先搜索浏览器的 DNS 缓存，缓存中维护一张域名与 IP 地址的对应表")])]),t._v(" "),_("li",[_("p",[t._v("若没有命中，则继续搜索操作系统的 DNS 缓存")])]),t._v(" "),_("li",[_("p",[t._v("若仍然没有命中，则操作系统将域名发送至本地域名服务器，本地域名服务器采用递归查询自己的 DNS 缓存，查找成功则返回结果")])]),t._v(" "),_("li",[_("p",[t._v("若本地域名服务器的 DNS 缓存没有命中，则本地域名服务器向上级域名服务器进行迭代查询")]),t._v(" "),_("ul",[_("li",[t._v("首先本地域名服务器向根域名服务器发起请求，根域名服务器返回顶级域名服务器的地址给本地服务器")]),t._v(" "),_("li",[t._v("本地域名服务器拿到这个顶级域名服务器的地址后，就向其发起请求，获取权限域名服务器的地址")]),t._v(" "),_("li",[t._v("本地域名服务器根据权限域名服务器的地址向其发起请求，最终得到该域名对应的 IP 地址")])])]),t._v(" "),_("li",[_("p",[t._v("本地域名服务器将得到的 IP 地址返回给操作系统，同时自己将 IP 地址缓存起来")])]),t._v(" "),_("li",[_("p",[t._v("操作系统将 IP 地址返回给浏览器，同时自己也将 IP 地址缓存起")])]),t._v(" "),_("li",[_("p",[t._v("至此，浏览器就得到了域名对应的 IP 地址，并将 IP 地址缓存起")])])]),t._v(" "),_("p",[t._v("流程如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/bec3c740-b78f-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),_("ul",[_("li",[t._v("https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F")]),t._v(" "),_("li",[t._v("https://www.cnblogs.com/jmilkfan-fanguiju/p/12789677.html")]),t._v(" "),_("li",[t._v("https://segmentfault.com/a/1190000039039275")]),t._v(" "),_("li",[t._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);v.default=s.exports}}]);