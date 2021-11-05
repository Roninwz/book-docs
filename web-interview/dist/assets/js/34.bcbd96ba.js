(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{415:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-什么是单点登录-如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-什么是单点登录-如何实现"}},[t._v("#")]),t._v(" 面试官：什么是单点登录？如何实现？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/8a25a760-8c83-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一")]),t._v(" "),a("p",[t._v("SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统")]),t._v(" "),a("p",[t._v("SSO 一般都需要一个独立的认证中心（passport），子系统的登录均得通过"),a("code",[t._v("passport")]),t._v("，子系统本身将不参与登录操作")]),t._v(" "),a("p",[t._v("当一个系统成功登录以后，"),a("code",[t._v("passport")]),t._v("将会颁发一个令牌给各个子系统，子系统可以拿着令牌会获取各自的受保护资源，为了减少频繁认证，各个子系统在被"),a("code",[t._v("passport")]),t._v("授权以后，会建立一个局部会话，在一定时间内可以无需再次向"),a("code",[t._v("passport")]),t._v("发起认证")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/2b9b0e70-8c4b-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("p",[t._v("上图有四个系统，分别是"),a("code",[t._v("Application1")]),t._v("、"),a("code",[t._v("Application2")]),t._v("、"),a("code",[t._v("Application3")]),t._v("、和"),a("code",[t._v("SSO")]),t._v("，当"),a("code",[t._v("Application1")]),t._v("、"),a("code",[t._v("Application2")]),t._v("、"),a("code",[t._v("Application3")]),t._v("需要登录时，将跳到"),a("code",[t._v("SSO")]),t._v("系统，"),a("code",[t._v("SSO")]),t._v("系统完成登录，其他的应用系统也就随之登录了")]),t._v(" "),a("h4",{attrs:{id:"举个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[t._v("#")]),t._v(" 举个例子")]),t._v(" "),a("p",[t._v("淘宝、天猫都属于阿里旗下，当用户登录淘宝后，再打开天猫，系统便自动帮用户登录了天猫，这种现象就属于单点登录")]),t._v(" "),a("h2",{attrs:{id:"二、如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、如何实现"}},[t._v("#")]),t._v(" 二、如何实现")]),t._v(" "),a("h3",{attrs:{id:"同域名下的单点登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同域名下的单点登录"}},[t._v("#")]),t._v(" 同域名下的单点登录")]),t._v(" "),a("p",[a("code",[t._v("cookie")]),t._v("的"),a("code",[t._v("domain")]),t._v("属性设置为当前域的父域，并且父域的"),a("code",[t._v("cookie")]),t._v("会被子域所共享。"),a("code",[t._v("path")]),t._v("属性默认为"),a("code",[t._v("web")]),t._v("应用的上下文路径")]),t._v(" "),a("p",[t._v("利用 "),a("code",[t._v("Cookie")]),t._v(" 的这个特点，没错，我们只需要将"),a("code",[t._v("Cookie")]),t._v("的"),a("code",[t._v("domain")]),t._v("属性设置为父域的域名（主域名），同时将 "),a("code",[t._v("Cookie")]),t._v("的"),a("code",[t._v("path")]),t._v("属性设置为根路径，将 "),a("code",[t._v("Session ID")]),t._v("（或 "),a("code",[t._v("Token")]),t._v("）保存到父域中。这样所有的子域应用就都可以访问到这个"),a("code",[t._v("Cookie")])]),t._v(" "),a("p",[t._v("不过这要求应用系统的域名需建立在一个共同的主域名之下，如 "),a("code",[t._v("tieba.baidu.com")]),t._v(" 和 "),a("code",[t._v("map.baidu.com")]),t._v("，它们都建立在 "),a("code",[t._v("baidu.com")]),t._v("这个主域名之下，那么它们就可以通过这种方式来实现单点登录")]),t._v(" "),a("h3",{attrs:{id:"不同域名下的单点登录-一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同域名下的单点登录-一"}},[t._v("#")]),t._v(" 不同域名下的单点登录(一)")]),t._v(" "),a("p",[t._v("如果是不同域的情况下，"),a("code",[t._v("Cookie")]),t._v("是不共享的，这里我们可以部署一个认证中心，用于专门处理登录请求的独立的 "),a("code",[t._v("Web")]),t._v("服务")]),t._v(" "),a("p",[t._v("用户统一在认证中心进行登录，登录成功后，认证中心记录用户的登录状态，并将 "),a("code",[t._v("token")]),t._v(" 写入 "),a("code",[t._v("Cookie")]),t._v("（注意这个 "),a("code",[t._v("Cookie")]),t._v("是认证中心的，应用系统是访问不到的）")]),t._v(" "),a("p",[t._v("应用系统检查当前请求有没有 "),a("code",[t._v("Token")]),t._v("，如果没有，说明用户在当前系统中尚未登录，那么就将页面跳转至认证中心")]),t._v(" "),a("p",[t._v("由于这个操作会将认证中心的 "),a("code",[t._v("Cookie")]),t._v(" 自动带过去，因此，认证中心能够根据 "),a("code",[t._v("Cookie")]),t._v(" 知道用户是否已经登录过了")]),t._v(" "),a("p",[t._v("如果认证中心发现用户尚未登录，则返回登录页面，等待用户登录")]),t._v(" "),a("p",[t._v("如果发现用户已经登录过了，就不会让用户再次登录了，而是会跳转回目标 "),a("code",[t._v("URL")]),t._v("，并在跳转前生成一个 "),a("code",[t._v("Token")]),t._v("，拼接在目标"),a("code",[t._v("URL")]),t._v(" 的后面，回传给目标应用系统")]),t._v(" "),a("p",[t._v("应用系统拿到 "),a("code",[t._v("Token")]),t._v("之后，还需要向认证中心确认下 "),a("code",[t._v("Token")]),t._v(" 的合法性，防止用户伪造。确认无误后，应用系统记录用户的登录状态，并将 "),a("code",[t._v("Token")]),t._v("写入"),a("code",[t._v("Cookie")]),t._v("，然后给本次访问放行。（注意这个 "),a("code",[t._v("Cookie")]),t._v(" 是当前应用系统的）当用户再次访问当前应用系统时，就会自动带上这个 "),a("code",[t._v("Token")]),t._v("，应用系统验证 Token 发现用户已登录，于是就不会有认证中心什么事了")]),t._v(" "),a("p",[t._v("此种实现方式相对复杂，支持跨域，扩展性好，是单点登录的标准做法")]),t._v(" "),a("h3",{attrs:{id:"不同域名下的单点登录-二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同域名下的单点登录-二"}},[t._v("#")]),t._v(" 不同域名下的单点登录(二)")]),t._v(" "),a("p",[t._v("可以选择将 "),a("code",[t._v("Session ID")]),t._v(" （或 "),a("code",[t._v("Token")]),t._v(" ）保存到浏览器的 "),a("code",[t._v("LocalStorage")]),t._v(" 中，让前端在每次向后端发送请求时，主动将"),a("code",[t._v("LocalStorage")]),t._v("的数据传递给服务端")]),t._v(" "),a("p",[t._v("这些都是由前端来控制的，后端需要做的仅仅是在用户登录成功后，将 "),a("code",[t._v("Session ID")]),t._v("（或 "),a("code",[t._v("Token")]),t._v("）放在响应体中传递给前端")]),t._v(" "),a("p",[t._v("单点登录完全可以在前端实现。前端拿到 "),a("code",[t._v("Session ID")]),t._v("（或 "),a("code",[t._v("Token")]),t._v(" ）后，除了将它写入自己的 "),a("code",[t._v("LocalStorage")]),t._v(" 中之外，还可以通过特殊手段将它写入多个其他域下的 "),a("code",[t._v("LocalStorage")]),t._v(" 中")]),t._v(" "),a("p",[t._v("关键代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 token")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态创建一个不可见的iframe，在iframe中加载一个跨域HTML")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iframe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iframe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\niframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://app1.com/localstorage.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用postMessage()方法将token传递给iframe")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://app1.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这个iframe所加载的HTML中绑定一个事件监听器，当事件被触发时，把接收到的token数据写入localStorage")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("前端通过 "),a("code",[t._v("iframe")]),t._v("+"),a("code",[t._v("postMessage()")]),t._v(" 方式，将同一份 "),a("code",[t._v("Token")]),t._v(" 写入到了多个域下的 "),a("code",[t._v("LocalStorage")]),t._v(" 中，前端每次在向后端发送请求之前，都会主动从 "),a("code",[t._v("LocalStorage")]),t._v(" 中读取"),a("code",[t._v("Token")]),t._v("并在请求中携带，这样就实现了同一份"),a("code",[t._v("Token")]),t._v(" 被多个域所共享")]),t._v(" "),a("p",[t._v("此种实现方式完全由前端控制，几乎不需要后端参与，同样支持跨域")]),t._v(" "),a("h2",{attrs:{id:"三、流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、流程"}},[t._v("#")]),t._v(" 三、流程")]),t._v(" "),a("p",[t._v("单点登录的流程图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/2422bc40-8c84-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("用户访问系统1的受保护资源，系统1发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数")])]),t._v(" "),a("li",[a("p",[t._v("sso认证中心发现用户未登录，将用户引导至登录页面")])]),t._v(" "),a("li",[a("p",[t._v("用户输入用户名密码提交登录申请")])]),t._v(" "),a("li",[a("p",[t._v("sso认证中心校验用户信息，创建用户与sso认证中心之间的会话，称为全局会话，同时创建授权令牌")])]),t._v(" "),a("li",[a("p",[t._v("sso认证中心带着令牌跳转会最初的请求地址（系统1）")])]),t._v(" "),a("li",[a("p",[t._v("系统1拿到令牌，去sso认证中心校验令牌是否有效")])]),t._v(" "),a("li",[a("p",[t._v("sso认证中心校验令牌，返回有效，注册系统1")])]),t._v(" "),a("li",[a("p",[t._v("系统1使用该令牌创建与用户的会话，称为局部会话，返回受保护资源")])]),t._v(" "),a("li",[a("p",[t._v("用户访问系统2的受保护资源")])]),t._v(" "),a("li",[a("p",[t._v("系统2发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数")])]),t._v(" "),a("li",[a("p",[t._v("sso认证中心发现用户已登录，跳转回系统2的地址，并附上令牌")])]),t._v(" "),a("li",[a("p",[t._v("系统2拿到令牌，去sso认证中心校验令牌是否有效")])]),t._v(" "),a("li",[a("p",[t._v("sso认证中心校验令牌，返回有效，注册系统2")])]),t._v(" "),a("li",[a("p",[t._v("系统2使用该令牌创建与用户的局部会话，返回受保护资源")])])]),t._v(" "),a("p",[t._v("用户登录成功之后，会与"),a("code",[t._v("sso")]),t._v("认证中心及各个子系统建立会话，用户与"),a("code",[t._v("sso")]),t._v("认证中心建立的会话称为全局会话")]),t._v(" "),a("p",[t._v("用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统受保护资源将不再通过"),a("code",[t._v("sso")]),t._v("认证中心")]),t._v(" "),a("p",[t._v("全局会话与局部会话有如下约束关系：")]),t._v(" "),a("ul",[a("li",[t._v("局部会话存在，全局会话一定存在")]),t._v(" "),a("li",[t._v("全局会话存在，局部会话不一定存在")]),t._v(" "),a("li",[t._v("全局会话销毁，局部会话必须销毁")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://blog.csdn.net/weixin_36380516/article/details/109006828")]),t._v(" "),a("li",[t._v("https://baike.baidu.com/item/%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95")]),t._v(" "),a("li",[t._v("https://juejin.cn/post/6844903664985866253")])])])}),[],!1,null,null,null);s.default=e.exports}}]);