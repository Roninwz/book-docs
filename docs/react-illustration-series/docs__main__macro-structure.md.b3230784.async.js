(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{BMLd:function(e,t,n){e.exports=n.p+"static/core-packages.08e2adc3.png"},JjdP:function(e,t,n){"use strict";n.r(t);var a=n("9og8"),l=n("WmNS"),r=n.n(l),c=n("LtsZ");t["default"]={"dfs-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u,i,s,d;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n("K+nK"),e.t0=a,e.next=4,n.e(4).then(n.bind(null,"fWQN"));case 4:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=a,e.next=9,n.e(5).then(n.bind(null,"mtLc"));case 9:return e.t3=e.sent,c=(0,e.t2)(e.t3),e.t4=a,e.next=14,n.e(7).then(n.bind(null,"yKVA"));case 14:return e.t5=e.sent,o=(0,e.t4)(e.t5),e.t6=a,e.next=19,n.e(6).then(n.bind(null,"879j"));case 19:return e.t7=e.sent,u=(0,e.t6)(e.t7),i=function(e){(0,o["default"])(a,e);var n=(0,u["default"])(a);function a(){return(0,l["default"])(this,a),n.apply(this,arguments)}return(0,c["default"])(a,[{key:"render",value:function(){return t.createElement("div",{className:"app"},t.createElement("header",null,"header"),t.createElement(s,null),t.createElement("footer",null,"footer"))}}]),a}(t.Component),s=function(e){(0,o["default"])(a,e);var n=(0,u["default"])(a);function a(){return(0,l["default"])(this,a),n.apply(this,arguments)}return(0,c["default"])(a,[{key:"render",value:function(){return t.createElement(t.Fragment,null,t.createElement("p",null,"1"),t.createElement("p",null,"2"),t.createElement("p",null,"3"))}}]),a}(t.Component),d=i,e.abrupt("return",d);case 25:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:'class App extends React.Component {\n  render() {\n    return (\n      <div className="app">\n        <header>header</header>\n        <Content />\n        <footer>footer</footer>\n      </div>\n    );\n  }\n}\n\nclass Content extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default App;'}},dependencies:{},identifier:"dfs-demo"}},"01-setstate-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u,i;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("K+nK"),e.t0=t,e.next=4,n.e(4).then(n.bind(null,"fWQN"));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=t,e.next=9,n.e(5).then(n.bind(null,"mtLc"));case 9:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.t4=t,e.next=14,n.e(7).then(n.bind(null,"yKVA"));case 14:return e.t5=e.sent,c=(0,e.t4)(e.t5),e.t6=t,e.next=19,n.e(6).then(n.bind(null,"879j"));case 19:return e.t7=e.sent,o=(0,e.t6)(e.t7),e.t8=t,e.next=24,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 24:return e.t9=e.sent,u=(0,e.t8)(e.t9),i=function(e){(0,c["default"])(n,e);var t=(0,o["default"])(n);function n(){var e;(0,a["default"])(this,n);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),e.state={count:0},e.changeState=function(){var t=e.state.count+1;e.setState({count:e.state.count+1}),t===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")},e.changeState2=function(){var t=e.state.count+1;Promise.resolve().then((function(){e.setState({count:e.state.count+1}),t===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")}))},e}return(0,l["default"])(n,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement("p",null,"\u5f53\u524dcount=",this.state.count),u["default"].createElement("button",{onClick:this.changeState},"\u5f02\u6b65+1"),u["default"].createElement("button",{onClick:this.changeState2},"\u540c\u6b65+1"))}}]),n}(u["default"].Component),e.abrupt("return",i);case 28:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\n\nexport default class App extends React.Component {\n  state = {\n    count: 0,\n  };\n\n  changeState = () => {\n    const newCount = this.state.count + 1;\n    this.setState({\n      count: this.state.count + 1,\n    });\n    if (newCount === this.state.count) {\n      console.log('\u540c\u6b65\u6267\u884crender');\n    } else {\n      console.log('\u5f02\u6b65\u6267\u884crender');\n    }\n  };\n\n  changeState2 = () => {\n    const newCount = this.state.count + 1;\n    Promise.resolve().then(() => {\n      this.setState({\n        count: this.state.count + 1,\n      });\n      if (newCount === this.state.count) {\n        console.log('\u540c\u6b65\u6267\u884crender');\n      } else {\n        console.log('\u5f02\u6b65\u6267\u884crender');\n      }\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\u5f53\u524dcount={this.state.count}</p>\n        <button onClick={this.changeState}>\u5f02\u6b65+1</button>\n        <button onClick={this.changeState2}>\u540c\u6b65+1</button>\n      </div>\n    );\n  }\n}"}},dependencies:{react:{version:"16.14.0"}},identifier:"01-setstate-demo"}},"hook-state-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,l.useState)(0),t=(0,a["default"])(e,2),n=t[0],r=t[1];return l["default"].createElement("button",{onClick:function(){r(1),r(3),r(2)}},n)},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a["default"]=e,n&&n.set(e,a),a},c=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)},t=n("K+nK"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"tJVT"));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState } from 'react';\nexport default function App() {\n  const [count, dispatch] = useState(0);\n  return (\n    <button\n      onClick={() => {\n        dispatch(1);\n        dispatch(3);\n        dispatch(2);\n      }}\n    >\n      {count}\n    </button>\n  );\n}"}},dependencies:{react:{version:"16.14.0"}},identifier:"hook-state-demo"}},"hook-summary-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,l.useState)(1),t=(0,a["default"])(e,2),n=t[0],r=t[1];(0,l.useEffect)((function(){console.log("effect 1 created")}));var c=(0,l.useState)(2),o=(0,a["default"])(c,1),u=o[0];return(0,l.useEffect)((function(){console.log("effect 2 created")})),l["default"].createElement(l["default"].Fragment,null,l["default"].createElement("button",{onClick:function(){return r(n+1)}},n),l["default"].createElement("button",null,u))},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a["default"]=e,n&&n.set(e,a),a},c=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)},t=n("K+nK"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"tJVT"));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nexport default function App() {\n  // 1. useState\n  const [a, setA] = useState(1);\n  // 2. useEffect\n  useEffect(() => {\n    console.log(`effect 1 created`);\n  });\n  // 3. useState\n  const [b] = useState(2);\n  // 4. useEffect\n  useEffect(() => {\n    console.log(`effect 2 created`);\n  });\n  return (\n    <>\n      <button onClick={() => setA(a + 1)}>{a}</button>\n      <button>{b}</button>\n    </>\n  );\n}"}},dependencies:{react:{version:"16.14.0"}},identifier:"hook-summary-demo"}},"hook-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u,i;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){Promise.resolve().then((function(){console.log("\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c")}));var e=(0,l.useState)(0),t=(0,a["default"])(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){return console.log("\u7b2c1\u4e2aeffect.create dps: []"),function(){console.log("\u7b2c1\u4e2aeffect.destory")}}),[]),(0,l.useEffect)((function(){return console.log("effect.create dps: [count]",n),function(){console.log("\u7b2c2\u4e2aeffect.destory dps: [count]",n)}}),[n]),l["default"].createElement(l["default"].Fragment,null,l["default"].createElement("p",null,"You clicked ",n," times"),l["default"].createElement("button",{onClick:function(){return r(n+1)}},"Click me"))},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a["default"]=e,n&&n.set(e,a),a},c=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)},t=n("K+nK"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"tJVT"));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),i=u,e.abrupt("return",i);case 16:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nfunction Example() {\n  Promise.resolve().then(() => {\n    console.log(\n      '\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c',\n    );\n  });\n  // \u7b2c1\u4e2ahook(useState)\n  const [count, setCount] = useState(0);\n  // \u7b2c2\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('\u7b2c1\u4e2aeffect.create dps: []');\n    return () => {\n      console.log('\u7b2c1\u4e2aeffect.destory');\n    };\n  }, []);\n  // \u7b2c3\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('effect.create dps: [count]', count);\n    return () => {\n      console.log('\u7b2c2\u4e2aeffect.destory dps: [count]', count);\n    };\n  }, [count]);\n  return (\n    <>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </>\n  );\n}\nexport default Example;"}},dependencies:{react:{version:"16.14.0"}},identifier:"hook-demo"}}}},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},"UpT+":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq");n("JjdP");t["default"]=e=>(l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"react-\u5e94\u7528\u7684\u5b8f\u89c2\u5305\u7ed3\u6784web-\u5f00\u53d1"},l.a.createElement(r["AnchorLink"],{to:"#react-\u5e94\u7528\u7684\u5b8f\u89c2\u5305\u7ed3\u6784web-\u5f00\u53d1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u5e94\u7528\u7684\u5b8f\u89c2\u5305\u7ed3\u6784(web \u5f00\u53d1)"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"React \u5de5\u7a0b\u76ee\u5f55\u7684 packages \u4e0b\u5305\u542b 35 \u4e2a\u5305(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/tree/v17.0.2"},l.a.createElement("code",null,"@17.0.2"),"\u7248\u672c"),"). \u5176\u4e2d\u4e0e",l.a.createElement("code",null,"web"),"\u5f00\u53d1\u76f8\u5173\u7684\u6838\u5fc3\u5305\u5171\u6709 4 \u4e2a, \u672c\u7cfb\u5217\u8fd1 20 \u7bc7\u6587\u7ae0, \u4ee5\u8fd9 4 \u4e2a\u5305\u4e3a\u7ebf\u7d22\u8fdb\u884c\u5c55\u5f00, \u6df1\u5165\u7406\u89e3 react \u5185\u90e8\u4f5c\u7528\u539f\u7406.")),l.a.createElement("h2",{id:"\u57fa\u7840\u5305\u7ed3\u6784"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u5305\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u5305\u7ed3\u6784"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,"react"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"react \u57fa\u7840\u5305, \u53ea\u63d0\u4f9b\u5b9a\u4e49 react \u7ec4\u4ef6(",l.a.createElement("code",null,"ReactElement"),")\u7684\u5fc5\u8981\u51fd\u6570, \u4e00\u822c\u6765\u8bf4\u9700\u8981\u548c\u6e32\u67d3\u5668(",l.a.createElement("code",null,"react-dom"),",",l.a.createElement("code",null,"react-native"),")\u4e00\u540c\u4f7f\u7528. \u5728\u7f16\u5199",l.a.createElement("code",null,"react"),"\u5e94\u7528\u7684\u4ee3\u7801\u65f6, \u5927\u90e8\u5206\u90fd\u662f\u8c03\u7528\u6b64\u5305\u7684 api."))),l.a.createElement("li",null,l.a.createElement("p",null,"react-dom"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"react \u6e32\u67d3\u5668\u4e4b\u4e00, \u662f react \u4e0e web \u5e73\u53f0\u8fde\u63a5\u7684\u6865\u6881(\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u548c nodejs \u73af\u5883\u4e2d\u4f7f\u7528), \u5c06",l.a.createElement("code",null,"react-reconciler"),"\u4e2d\u7684\u8fd0\u884c\u7ed3\u679c\u8f93\u51fa\u5230 web \u754c\u9762\u4e0a. \u5728\u7f16\u5199",l.a.createElement("code",null,"react"),"\u5e94\u7528\u7684\u4ee3\u7801\u65f6,\u5927\u591a\u6570\u573a\u666f\u4e0b, \u80fd\u7528\u5230\u6b64\u5305\u7684\u5c31\u662f\u4e00\u4e2a\u5165\u53e3\u51fd\u6570",l.a.createElement("code",null,"ReactDOM.render(<App/>, document.getElementByID('root'))"),", \u5176\u4f59\u4f7f\u7528\u7684 api, \u57fa\u672c\u662f",l.a.createElement("code",null,"react"),"\u5305\u63d0\u4f9b\u7684."))),l.a.createElement("li",null,l.a.createElement("p",null,"react-reconciler"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"react \u5f97\u4ee5\u8fd0\u884c\u7684\u6838\u5fc3\u5305(\u7efc\u5408\u534f\u8c03",l.a.createElement("code",null,"react-dom"),",",l.a.createElement("code",null,"react"),",",l.a.createElement("code",null,"scheduler"),"\u5404\u5305\u4e4b\u95f4\u7684\u8c03\u7528\u4e0e\u914d\u5408). \u7ba1\u7406 react \u5e94\u7528\u72b6\u6001\u7684\u8f93\u5165\u548c\u7ed3\u679c\u7684\u8f93\u51fa. \u5c06\u8f93\u5165\u4fe1\u53f7\u6700\u7ec8\u8f6c\u6362\u6210\u8f93\u51fa\u4fe1\u53f7\u4f20\u9012\u7ed9\u6e32\u67d3\u5668.")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u63a5\u53d7\u8f93\u5165(",l.a.createElement("code",null,"scheduleUpdateOnFiber"),"), \u5c06",l.a.createElement("code",null,"fiber"),"\u6811\u751f\u6210\u903b\u8f91\u5c01\u88c5\u5230\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d(\u6d89\u53ca",l.a.createElement("code",null,"fiber"),"\u6811\u5f62\u7ed3\u6784, ",l.a.createElement("code",null,"fiber.updateQueue"),"\u961f\u5217, \u8c03\u548c\u7b97\u6cd5\u7b49),"),l.a.createElement("li",null,"\u628a\u6b64\u56de\u8c03\u51fd\u6570(",l.a.createElement("code",null,"performSyncWorkOnRoot"),"\u6216",l.a.createElement("code",null,"performConcurrentWorkOnRoot"),")\u9001\u5165",l.a.createElement("code",null,"scheduler"),"\u8fdb\u884c\u8c03\u5ea6"),l.a.createElement("li",null,l.a.createElement("code",null,"scheduler"),"\u4f1a\u63a7\u5236\u56de\u8c03\u51fd\u6570\u6267\u884c\u7684\u65f6\u673a, \u56de\u8c03\u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u5f97\u5230\u5168\u65b0\u7684 fiber \u6811"),l.a.createElement("li",null,"\u518d\u8c03\u7528\u6e32\u67d3\u5668(\u5982",l.a.createElement("code",null,"react-dom"),", ",l.a.createElement("code",null,"react-native"),"\u7b49)\u5c06 fiber \u6811\u5f62\u7ed3\u6784\u6700\u7ec8\u53cd\u6620\u5230\u754c\u9762\u4e0a"))),l.a.createElement("li",null,l.a.createElement("p",null,"scheduler"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u8c03\u5ea6\u673a\u5236\u7684\u6838\u5fc3\u5b9e\u73b0, \u63a7\u5236\u7531",l.a.createElement("code",null,"react-reconciler"),"\u9001\u5165\u7684\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a, \u5728",l.a.createElement("code",null,"concurrent"),"\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u5b9e\u73b0\u4efb\u52a1\u5206\u7247. \u5728\u7f16\u5199",l.a.createElement("code",null,"react"),"\u5e94\u7528\u7684\u4ee3\u7801\u65f6, \u540c\u6837\u51e0\u4e4e\u4e0d\u4f1a\u76f4\u63a5\u7528\u5230\u6b64\u5305\u63d0\u4f9b\u7684 api.")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6838\u5fc3\u4efb\u52a1\u5c31\u662f\u6267\u884c\u56de\u8c03(\u56de\u8c03\u51fd\u6570\u7531",l.a.createElement("code",null,"react-reconciler"),"\u63d0\u4f9b)"),l.a.createElement("li",null,"\u901a\u8fc7\u63a7\u5236\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a, \u6765\u8fbe\u5230\u4efb\u52a1\u5206\u7247\u7684\u76ee\u7684, \u5b9e\u73b0\u53ef\u4e2d\u65ad\u6e32\u67d3(",l.a.createElement("code",null,"concurrent"),"\u6a21\u5f0f\u4e0b\u624d\u6709\u6b64\u7279\u6027)")))),l.a.createElement("h2",{id:"\u5b8f\u89c2\u603b\u89c8"},l.a.createElement(r["AnchorLink"],{to:"#\u5b8f\u89c2\u603b\u89c8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b8f\u89c2\u603b\u89c8"),l.a.createElement("h3",{id:"\u67b6\u6784\u5206\u5c42"},l.a.createElement(r["AnchorLink"],{to:"#\u67b6\u6784\u5206\u5c42","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u67b6\u6784\u5206\u5c42"),l.a.createElement("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3, \u53ef\u5c06 react \u5e94\u7528\u6574\u4f53\u7ed3\u6784\u5206\u4e3a\u63a5\u53e3\u5c42(",l.a.createElement("code",null,"api"),")\u548c\u5185\u6838\u5c42(",l.a.createElement("code",null,"core"),")2 \u4e2a\u90e8\u5206"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u63a5\u53e3\u5c42(api)",l.a.createElement("code",null,"react"),"\u5305, \u5e73\u65f6\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u7edd\u5927\u90e8\u5206",l.a.createElement("code",null,"api"),"\u5747\u6765\u81ea\u6b64\u5305(\u4e0d\u662f\u6240\u6709). \u5728",l.a.createElement("code",null,"react"),"\u542f\u52a8\u4e4b\u540e, \u6b63\u5e38\u53ef\u4ee5\u6539\u53d8\u6e32\u67d3\u7684\u57fa\u672c\u64cd\u4f5c\u6709 3 \u4e2a."),l.a.createElement("ul",null,l.a.createElement("li",null,"class \u7ec4\u4ef6\u4e2d\u4f7f\u7528",l.a.createElement("code",null,"setState()")),l.a.createElement("li",null,"function \u7ec4\u4ef6\u91cc\u9762\u4f7f\u7528 hook,\u5e76\u53d1\u8d77",l.a.createElement("code",null,"dispatchAction"),"\u53bb\u6539\u53d8 hook \u5bf9\u8c61"),l.a.createElement("li",null,"\u6539\u53d8 context(\u5176\u5b9e\u4e5f\u9700\u8981",l.a.createElement("code",null,"setState"),"\u6216",l.a.createElement("code",null,"dispatchAction"),"\u7684\u8f85\u52a9\u624d\u80fd\u6539\u53d8)")),l.a.createElement("p",null,"\u4ee5\u4e0a",l.a.createElement("code",null,"setState"),"\u548c",l.a.createElement("code",null,"dispatchAction"),"\u90fd\u7531",l.a.createElement("code",null,"react"),"\u5305\u76f4\u63a5\u66b4\u9732. \u6240\u4ee5\u8981\u60f3 react \u5de5\u4f5c, \u57fa\u672c\u4e0a\u662f\u8c03\u7528",l.a.createElement("code",null,"react"),"\u5305\u7684 api \u53bb\u4e0e\u5176\u4ed6\u5305\u8fdb\u884c\u4ea4\u4e92.")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5185\u6838\u5c42(core) \u6574\u4e2a\u5185\u6838\u90e8\u5206, \u7531 3 \u90e8\u5206\u6784\u6210:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u8c03\u5ea6\u5668",l.a.createElement("code",null,"scheduler"),"\u5305, \u6838\u5fc3\u804c\u8d23\u53ea\u6709 1 \u4e2a, \u5c31\u662f\u6267\u884c\u56de\u8c03.",l.a.createElement("ul",null,l.a.createElement("li",null,"\u628a",l.a.createElement("code",null,"react-reconciler"),"\u63d0\u4f9b\u7684\u56de\u8c03\u51fd\u6570, \u5305\u88c5\u5230\u4e00\u4e2a\u4efb\u52a1\u5bf9\u8c61\u4e2d."),l.a.createElement("li",null,"\u5728\u5185\u90e8\u7ef4\u62a4\u4e00\u4e2a\u4efb\u52a1\u961f\u5217, \u4f18\u5148\u7ea7\u9ad8\u7684\u6392\u5728\u6700\u524d\u9762."),l.a.createElement("li",null,"\u5faa\u73af\u6d88\u8d39\u4efb\u52a1\u961f\u5217, \u76f4\u5230\u961f\u5217\u6e05\u7a7a."))),l.a.createElement("li",null,"\u6784\u9020\u5668",l.a.createElement("code",null,"react-reconciler"),"\u5305, \u6709 3 \u4e2a\u6838\u5fc3\u804c\u8d23:",l.a.createElement("ol",null,l.a.createElement("li",null,"\u88c5\u8f7d\u6e32\u67d3\u5668, \u6e32\u67d3\u5668\u5fc5\u987b\u5b9e\u73b0",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/README.md#practical-examples"},l.a.createElement("code",null,"HostConfig"),"\u534f\u8bae"),"(\u5982: ",l.a.createElement("code",null,"react-dom"),"), \u4fdd\u8bc1\u5728\u9700\u8981\u7684\u65f6\u5019, \u80fd\u591f\u6b63\u786e\u8c03\u7528\u6e32\u67d3\u5668\u7684 api, \u751f\u6210\u5b9e\u9645\u8282\u70b9(\u5982: ",l.a.createElement("code",null,"dom"),"\u8282\u70b9)."),l.a.createElement("li",null,"\u63a5\u6536",l.a.createElement("code",null,"react-dom"),"\u5305(\u521d\u6b21",l.a.createElement("code",null,"render"),")\u548c",l.a.createElement("code",null,"react"),"\u5305(\u540e\u7eed\u66f4\u65b0",l.a.createElement("code",null,"setState"),")\u53d1\u8d77\u7684\u66f4\u65b0\u8bf7\u6c42."),l.a.createElement("li",null,"\u5c06",l.a.createElement("code",null,"fiber"),"\u6811\u7684\u6784\u9020\u8fc7\u7a0b\u5305\u88c5\u5728\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d, \u5e76\u5c06\u6b64\u56de\u8c03\u51fd\u6570\u4f20\u5165\u5230",l.a.createElement("code",null,"scheduler"),"\u5305\u7b49\u5f85\u8c03\u5ea6."))),l.a.createElement("li",null,"\u6e32\u67d3\u5668",l.a.createElement("code",null,"react-dom"),"\u5305, \u6709 2 \u4e2a\u6838\u5fc3\u804c\u8d23:",l.a.createElement("ol",null,l.a.createElement("li",null,"\u5f15\u5bfc",l.a.createElement("code",null,"react"),"\u5e94\u7528\u7684\u542f\u52a8(\u901a\u8fc7",l.a.createElement("code",null,"ReactDOM.render"),")."),l.a.createElement("li",null,"\u5b9e\u73b0",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/README.md#practical-examples"},l.a.createElement("code",null,"HostConfig"),"\u534f\u8bae"),"(",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-dom/src/client/ReactDOMHostConfig.js"},"\u6e90\u7801\u5728 ReactDOMHostConfig.js \u4e2d"),"), \u80fd\u591f\u5c06",l.a.createElement("code",null,"react-reconciler"),"\u5305\u6784\u9020\u51fa\u6765\u7684",l.a.createElement("code",null,"fiber"),"\u6811\u8868\u73b0\u51fa\u6765, \u751f\u6210 dom \u8282\u70b9(\u6d4f\u89c8\u5668\u4e2d), \u751f\u6210\u5b57\u7b26\u4e32(ssr).")))))),l.a.createElement("p",null,"\u6ce8\u610f:"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6b64\u5904\u5206\u5c42\u7684\u6807\u51c6\u5e76\u975e\u5b98\u65b9\u8bf4\u6cd5, \u56e0\u4e3a\u5b98\u65b9\u6ca1\u6709",l.a.createElement("code",null,"\u67b6\u6784\u5206\u5c42"),"\u8fd9\u6837\u7684\u672f\u8bed."),l.a.createElement("li",null,"\u672c\u6587\u53ea\u662f\u4e3a\u4e86\u6df1\u5165\u7406\u89e3 react, \u5728\u5b98\u65b9\u6807\u51c6\u4e4b\u5916, \u5bf9\u5176\u8fdb\u884c\u5206\u89e3\u548c\u5256\u6790, \u65b9\u4fbf\u6211\u4eec\u7406\u89e3 react \u67b6\u6784.")),l.a.createElement("h3",{id:"\u5185\u6838\u5173\u7cfb"},l.a.createElement(r["AnchorLink"],{to:"#\u5185\u6838\u5173\u7cfb","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5185\u6838\u5173\u7cfb"),l.a.createElement("p",null,"\u73b0\u5c06\u5185\u6838 3 \u4e2a\u5305\u7684\u4e3b\u8981\u804c\u8d23\u548c\u8c03\u7528\u5173\u7cfb, \u7ed8\u5236\u5230\u4e00\u5f20\u6982\u89c8\u56fe\u4e0a:"),l.a.createElement("p",null,l.a.createElement("img",{src:n("BMLd"),alt:""})),l.a.createElement("p",null,"\u6ce8\u610f:"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7ea2\u8272\u65b9\u5757\u4ee3\u8868\u5165\u53e3\u51fd\u6570, \u7eff\u8272\u65b9\u5757\u4ee3\u8868\u51fa\u53e3\u51fd\u6570."),l.a.createElement("li",null,"package \u4e4b\u95f4\u7684\u8c03\u7528\u8109\u7edc\u5c31\u662f\u901a\u8fc7\u677f\u5757\u95f4\u7684\u5165\u53e3\u548c\u51fa\u53e3\u51fd\u6570\u8fde\u63a5\u8d77\u6765\u7684.")),l.a.createElement("p",null,"\u901a\u8fc7\u6b64\u6982\u89c8\u56fe, \u57fa\u672c\u53ef\u4ee5\u8868\u8ff0 react \u5185\u6838\u5c42\u7684\u5b8f\u89c2\u7ed3\u6784. \u540e\u9762\u7684\u7ae0\u8282, \u4f1a\u6309\u7167\u6b64\u56fe\u7684\u601d\u8def\u6df1\u5165\u5230\u5bf9\u5e94\u7684\u6a21\u5757\u9010\u4e00\u89e3\u8bfb."),l.a.createElement("h2",{id:"\u603b\u7ed3"},l.a.createElement(r["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),l.a.createElement("p",null,"\u672c\u6587\u4ece\u5b8f\u89c2\u67b6\u6784\u7684\u89d2\u5ea6, \u9610\u8ff0\u4e86",l.a.createElement("code",null,"react"),"\u6838\u5fc3\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u548c\u8c03\u7528\u5173\u7cfb, \u4f7f\u8bfb\u8005\u5bf9",l.a.createElement("code",null,"react"),"\u67b6\u6784\u6709\u7b80\u5355\u7684\u8ba4\u8bc6. \u53e6\u5916\u4e5f\u7ed9\u8bfb\u8005\u63d0\u4f9b\u4e00\u4e2a\u9605\u8bfb\u6e90\u7801\u7684\u601d\u8def, \u5148\u6574\u4f53\u6d4f\u89c8, \u518d\u6df1\u5165\u5206\u6790, \u5404\u4e2a\u51fb\u7834."))))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);