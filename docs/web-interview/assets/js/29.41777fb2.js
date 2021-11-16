(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{454:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-javascript原型-原型链-有什么特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-javascript原型-原型链-有什么特点"}},[t._v("#")]),t._v(" 面试官：JavaScript原型，原型链 ? 有什么特点？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/4500e170-725e-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、原型"}},[t._v("#")]),t._v(" 一、原型")]),t._v(" "),a("p",[a("code",[t._v("JavaScript")]),t._v(" 常被描述为一种基于原型的语言——每个对象拥有一个原型对象")]),t._v(" "),a("p",[t._v("当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾")]),t._v(" "),a("p",[t._v("准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的"),a("code",[t._v("prototype")]),t._v("属性上，而非实例对象本身")]),t._v(" "),a("p",[t._v("下面举个例子：")]),t._v(" "),a("p",[t._v("函数可以有属性。 每个函数都有一个特殊的属性叫作原型"),a("code",[t._v("prototype")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("控制台输出")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    constructor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    __proto__"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        constructor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        hasOwnProperty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        isPrototypeOf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        propertyIsEnumerable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("propertyIsEnumerable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        toLocaleString"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        toString"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        valueOf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ƒ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("上面这个对象，就是大家常说的原型对象")]),t._v(" "),a("p",[t._v("可以看到，原型对象有一个自有属性"),a("code",[t._v("constructor")]),t._v("，这个属性指向该函数，如下图关系展示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/56d87250-725e-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"二、原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、原型链"}},[t._v("#")]),t._v(" 二、原型链")]),t._v(" "),a("p",[t._v("原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法")]),t._v(" "),a("p",[t._v("在对象实例和它的构造器之间建立一个链接（它是"),a("code",[t._v("__proto__")]),t._v("属性，是从构造函数的"),a("code",[t._v("prototype")]),t._v("属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法")]),t._v(" "),a("p",[t._v("下面举个例子：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二步 创建实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'person'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("根据代码，我们可以得到下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/60825aa0-725e-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("p",[t._v("下面分析一下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("构造函数"),a("code",[t._v("Person")]),t._v("存在原型对象"),a("code",[t._v("Person.prototype")])])]),t._v(" "),a("li",[a("p",[t._v("构造函数生成实例对象"),a("code",[t._v("person")]),t._v("，"),a("code",[t._v("person")]),t._v("的"),a("code",[t._v("__proto__")]),t._v("指向构造函数"),a("code",[t._v("Person")]),t._v("原型对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Person.prototype.__proto__")]),t._v(" 指向内置对象，因为 "),a("code",[t._v("Person.prototype")]),t._v(" 是个对象，默认是由 "),a("code",[t._v("Object")]),t._v("函数作为类创建的，而 "),a("code",[t._v("Object.prototype")]),t._v(" 为内置对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Person.__proto__")]),t._v(" 指向内置匿名函数 "),a("code",[t._v("anonymous")]),t._v("，因为 Person 是个函数对象，默认由 Function 作为类创建")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Function.prototype")]),t._v(" 和 "),a("code",[t._v("Function.__proto__")]),t._v("同时指向内置匿名函数 "),a("code",[t._v("anonymous")]),t._v("，这样原型链的终点就是 "),a("code",[t._v("null")])])])]),t._v(" "),a("h2",{attrs:{id:"三、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),a("p",[t._v("下面首先要看几个概念：")]),t._v(" "),a("p",[a("code",[t._v("__proto__")]),t._v("作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/6a742160-725e-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("每个对象的"),a("code",[t._v("__proto__")]),t._v("都是指向它的构造函数的原型对象"),a("code",[t._v("prototype")]),t._v("的")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("构造函数是一个函数对象，是通过 "),a("code",[t._v("Function")]),t._v("构造器产生的")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("原型对象本身是一个普通对象，而普通对象的构造函数都是"),a("code",[t._v("Object")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("刚刚上面说了，所有的构造器都是函数对象，函数对象都是 "),a("code",[t._v("Function")]),t._v("构造产生的")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("Object")]),t._v("的原型对象也有"),a("code",[t._v("__proto__")]),t._v("属性指向"),a("code",[t._v("null")]),t._v("，"),a("code",[t._v("null")]),t._v("是原型链的顶端")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("下面作出总结：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一切对象都是继承自"),a("code",[t._v("Object")]),t._v("对象，"),a("code",[t._v("Object")]),t._v(" 对象直接继承根源对象"),a("code",[t._v("null")])])]),t._v(" "),a("li",[a("p",[t._v("一切的函数对象（包括 "),a("code",[t._v("Object")]),t._v(" 对象），都是继承自 "),a("code",[t._v("Function")]),t._v(" 对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object")]),t._v(" 对象直接继承自 "),a("code",[t._v("Function")]),t._v(" 对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Function")]),t._v("对象的"),a("code",[t._v("__proto__")]),t._v("会指向自己的原型对象，最终还是继承自"),a("code",[t._v("Object")]),t._v("对象")])])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://juejin.cn/post/6870732239556640775#heading-7")]),t._v(" "),a("li",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain")])])])}),[],!1,null,null,null);s.default=e.exports}}]);