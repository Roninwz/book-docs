(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{JjdP:function(e,t,n){"use strict";n.r(t);var a=n("9og8"),l=n("WmNS"),r=n.n(l),c=n("LtsZ");t["default"]={"dfs-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u,s,i,m;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n("K+nK"),e.t0=a,e.next=4,n.e(4).then(n.bind(null,"fWQN"));case 4:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=a,e.next=9,n.e(5).then(n.bind(null,"mtLc"));case 9:return e.t3=e.sent,c=(0,e.t2)(e.t3),e.t4=a,e.next=14,n.e(7).then(n.bind(null,"yKVA"));case 14:return e.t5=e.sent,o=(0,e.t4)(e.t5),e.t6=a,e.next=19,n.e(6).then(n.bind(null,"879j"));case 19:return e.t7=e.sent,u=(0,e.t6)(e.t7),s=function(e){(0,o["default"])(a,e);var n=(0,u["default"])(a);function a(){return(0,l["default"])(this,a),n.apply(this,arguments)}return(0,c["default"])(a,[{key:"render",value:function(){return t.createElement("div",{className:"app"},t.createElement("header",null,"header"),t.createElement(i,null),t.createElement("footer",null,"footer"))}}]),a}(t.Component),i=function(e){(0,o["default"])(a,e);var n=(0,u["default"])(a);function a(){return(0,l["default"])(this,a),n.apply(this,arguments)}return(0,c["default"])(a,[{key:"render",value:function(){return t.createElement(t.Fragment,null,t.createElement("p",null,"1"),t.createElement("p",null,"2"),t.createElement("p",null,"3"))}}]),a}(t.Component),m=s,e.abrupt("return",m);case 25:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:'class App extends React.Component {\n  render() {\n    return (\n      <div className="app">\n        <header>header</header>\n        <Content />\n        <footer>footer</footer>\n      </div>\n    );\n  }\n}\n\nclass Content extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <p>1</p>\n        <p>2</p>\n        <p>3</p>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default App;'}},dependencies:{},identifier:"dfs-demo"}},"01-setstate-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u,s;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("K+nK"),e.t0=t,e.next=4,n.e(4).then(n.bind(null,"fWQN"));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=t,e.next=9,n.e(5).then(n.bind(null,"mtLc"));case 9:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.t4=t,e.next=14,n.e(7).then(n.bind(null,"yKVA"));case 14:return e.t5=e.sent,c=(0,e.t4)(e.t5),e.t6=t,e.next=19,n.e(6).then(n.bind(null,"879j"));case 19:return e.t7=e.sent,o=(0,e.t6)(e.t7),e.t8=t,e.next=24,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 24:return e.t9=e.sent,u=(0,e.t8)(e.t9),s=function(e){(0,c["default"])(n,e);var t=(0,o["default"])(n);function n(){var e;(0,a["default"])(this,n);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),e.state={count:0},e.changeState=function(){var t=e.state.count+1;e.setState({count:e.state.count+1}),t===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")},e.changeState2=function(){var t=e.state.count+1;Promise.resolve().then((function(){e.setState({count:e.state.count+1}),t===e.state.count?console.log("\u540c\u6b65\u6267\u884crender"):console.log("\u5f02\u6b65\u6267\u884crender")}))},e}return(0,l["default"])(n,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement("p",null,"\u5f53\u524dcount=",this.state.count),u["default"].createElement("button",{onClick:this.changeState},"\u5f02\u6b65+1"),u["default"].createElement("button",{onClick:this.changeState2},"\u540c\u6b65+1"))}}]),n}(u["default"].Component),e.abrupt("return",s);case 28:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\n\nexport default class App extends React.Component {\n  state = {\n    count: 0,\n  };\n\n  changeState = () => {\n    const newCount = this.state.count + 1;\n    this.setState({\n      count: this.state.count + 1,\n    });\n    if (newCount === this.state.count) {\n      console.log('\u540c\u6b65\u6267\u884crender');\n    } else {\n      console.log('\u5f02\u6b65\u6267\u884crender');\n    }\n  };\n\n  changeState2 = () => {\n    const newCount = this.state.count + 1;\n    Promise.resolve().then(() => {\n      this.setState({\n        count: this.state.count + 1,\n      });\n      if (newCount === this.state.count) {\n        console.log('\u540c\u6b65\u6267\u884crender');\n      } else {\n        console.log('\u5f02\u6b65\u6267\u884crender');\n      }\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\u5f53\u524dcount={this.state.count}</p>\n        <button onClick={this.changeState}>\u5f02\u6b65+1</button>\n        <button onClick={this.changeState2}>\u540c\u6b65+1</button>\n      </div>\n    );\n  }\n}"}},dependencies:{react:{version:"16.14.0"}},identifier:"01-setstate-demo"}},"hook-state-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,l.useState)(0),t=(0,a["default"])(e,2),n=t[0],r=t[1];return l["default"].createElement("button",{onClick:function(){r(1),r(3),r(2)}},n)},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a["default"]=e,n&&n.set(e,a),a},c=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)},t=n("K+nK"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"tJVT"));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState } from 'react';\nexport default function App() {\n  const [count, dispatch] = useState(0);\n  return (\n    <button\n      onClick={() => {\n        dispatch(1);\n        dispatch(3);\n        dispatch(2);\n      }}\n    >\n      {count}\n    </button>\n  );\n}"}},dependencies:{react:{version:"16.14.0"}},identifier:"hook-state-demo"}},"hook-summary-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){var e=(0,l.useState)(1),t=(0,a["default"])(e,2),n=t[0],r=t[1];(0,l.useEffect)((function(){console.log("effect 1 created")}));var c=(0,l.useState)(2),o=(0,a["default"])(c,1),u=o[0];return(0,l.useEffect)((function(){console.log("effect 2 created")})),l["default"].createElement(l["default"].Fragment,null,l["default"].createElement("button",{onClick:function(){return r(n+1)}},n),l["default"].createElement("button",null,u))},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a["default"]=e,n&&n.set(e,a),a},c=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)},t=n("K+nK"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"tJVT"));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nexport default function App() {\n  // 1. useState\n  const [a, setA] = useState(1);\n  // 2. useEffect\n  useEffect(() => {\n    console.log(`effect 1 created`);\n  });\n  // 3. useState\n  const [b] = useState(2);\n  // 4. useEffect\n  useEffect(() => {\n    console.log(`effect 2 created`);\n  });\n  return (\n    <>\n      <button onClick={() => setA(a + 1)}>{a}</button>\n      <button>{b}</button>\n    </>\n  );\n}"}},dependencies:{react:{version:"16.14.0"}},identifier:"hook-summary-demo"}},"hook-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(r.a.mark((function e(){var t,a,l,c,o,u,s;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=function(){Promise.resolve().then((function(){console.log("\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c")}));var e=(0,l.useState)(0),t=(0,a["default"])(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){return console.log("\u7b2c1\u4e2aeffect.create dps: []"),function(){console.log("\u7b2c1\u4e2aeffect.destory")}}),[]),(0,l.useEffect)((function(){return console.log("effect.create dps: [count]",n),function(){console.log("\u7b2c2\u4e2aeffect.destory dps: [count]",n)}}),[n]),l["default"].createElement(l["default"].Fragment,null,l["default"].createElement("p",null,"You clicked ",n," times"),l["default"].createElement("button",{onClick:function(){return r(n+1)}},"Click me"))},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a["default"]=e,n&&n.set(e,a),a},c=function(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)},t=n("K+nK"),e.t0=t,e.next=7,n.e(3).then(n.bind(null,"tJVT"));case 7:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=o,e.next=12,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 12:return e.t3=e.sent,l=(0,e.t2)(e.t3),s=u,e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:"import React, { useState, useEffect } from 'react';\nfunction Example() {\n  Promise.resolve().then(() => {\n    console.log(\n      '\u6240\u6709\u7684effect.create\u90fd\u662f\u901a\u8fc7\u8c03\u5ea6\u5668(scheduler)\u5f02\u6b65(MessageChannel)\u6267\u884c\u7684, \u6545effect.create\u51fd\u6570\u5fc5\u7136\u5728\u6b64\u4e4b\u540e\u6267\u884c',\n    );\n  });\n  // \u7b2c1\u4e2ahook(useState)\n  const [count, setCount] = useState(0);\n  // \u7b2c2\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('\u7b2c1\u4e2aeffect.create dps: []');\n    return () => {\n      console.log('\u7b2c1\u4e2aeffect.destory');\n    };\n  }, []);\n  // \u7b2c3\u4e2ahook(useEffect)\n  useEffect(() => {\n    console.log('effect.create dps: [count]', count);\n    return () => {\n      console.log('\u7b2c2\u4e2aeffect.destory dps: [count]', count);\n    };\n  }, [count]);\n  return (\n    <>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </>\n  );\n}\nexport default Example;"}},dependencies:{react:{version:"16.14.0"}},identifier:"hook-demo"}}}},Zs1V:function(e){e.exports=JSON.parse("{}")},ib32:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("H1Ra");n("JjdP");t["default"]=e=>(l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"react-\u7b97\u6cd5\u4e4b\u4f4d\u8fd0\u7b97"},l.a.createElement(r["AnchorLink"],{to:"#react-\u7b97\u6cd5\u4e4b\u4f4d\u8fd0\u7b97","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u7b97\u6cd5\u4e4b\u4f4d\u8fd0\u7b97"),l.a.createElement("p",null,"\u7f51\u7edc\u4e0a\u4ecb\u7ecd\u4f4d\u8fd0\u7b97\u7684\u6587\u7ae0\u975e\u5e38\u591a(\u5982",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators"},"MDN \u4e0a\u7684\u4ecb\u7ecd"),"\u5c31\u5f88\u4ed4\u7ec6)."),l.a.createElement("p",null,"\u672c\u6587\u7684\u76ee\u7684:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u6e29\u6545\u77e5\u65b0, \u5bf9\u4f4d\u8fd0\u7b97\u7684\u57fa\u672c\u4f7f\u7528\u505a\u4e00\u4e0b\u7b80\u5355\u7684\u603b\u7ed3."),l.a.createElement("li",null,"\u5f52\u7eb3\u5728",l.a.createElement("code",null,"javascript"),"\u4e2d\u4f7f\u7528\u4f4d\u8fd0\u7b97\u7684\u6ce8\u610f\u4e8b\u9879."),l.a.createElement("li",null,"\u5217\u4e3e\u5728",l.a.createElement("code",null,"react"),"\u6e90\u7801\u4e2d, \u5bf9\u4e8e\u4f4d\u8fd0\u7b97\u7684\u9ad8\u9891\u4f7f\u7528\u573a\u666f.")),l.a.createElement("h2",{id:"\u6982\u5ff5"},l.a.createElement(r["AnchorLink"],{to:"#\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6982\u5ff5"),l.a.createElement("p",null,"\u4f4d\u8fd0\u7b97\u76f4\u63a5\u5904\u7406\u6bcf\u4e00\u4e2a\u6bd4\u7279\u4f4d(bit), \u662f\u975e\u5e38\u5e95\u5c42\u7684\u8fd0\u7b97, \u4f18\u52bf\u662f\u901f\u5ea6\u5feb, \u52a3\u52bf\u5c31\u662f\u4e0d\u76f4\u89c2\u4e14\u53ea\u652f\u6301\u6574\u6570\u8fd0\u7b97."),l.a.createElement("h2",{id:"\u7279\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u7279\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7279\u6027"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u4f4d\u8fd0\u7b97"),l.a.createElement("th",null,"\u7528\u6cd5"),l.a.createElement("th",null,"\u63cf\u8ff0"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"\u6309\u4f4d\u4e0e(",l.a.createElement("code",null,"&"),")"),l.a.createElement("td",null,l.a.createElement("code",null,"a & b")),l.a.createElement("td",null,"\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u6bd4\u7279\u4f4d,\u4e24\u4e2a\u64cd\u4f5c\u6570\u90fd\u4e3a 1 \u65f6, \u7ed3\u679c\u4e3a 1, \u5426\u5219\u4e3a 0")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u6309\u4f4d\u6216(",l.a.createElement("code",null,"|"),")"),l.a.createElement("td",null,l.a.createElement("code",null,"a | b")),l.a.createElement("td",null,"\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u6bd4\u7279\u4f4d,\u4e24\u4e2a\u64cd\u4f5c\u6570\u90fd\u4e3a 0 \u65f6, \u7ed3\u679c\u4e3a 0, \u5426\u5219\u4e3a 1")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u6309\u4f4d\u5f02\u6216(",l.a.createElement("code",null,"^"),")"),l.a.createElement("td",null,l.a.createElement("code",null,"a ^ b")),l.a.createElement("td",null,"\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u6bd4\u7279\u4f4d,\u4e24\u4e2a\u64cd\u4f5c\u6570\u76f8\u540c\u65f6, \u7ed3\u679c\u4e3a 0, \u5426\u5219\u4e3a 1")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u6309\u4f4d\u975e(",l.a.createElement("code",null,"~"),")"),l.a.createElement("td",null,l.a.createElement("code",null,"~ a")),l.a.createElement("td",null,"\u53cd\u8f6c\u64cd\u4f5c\u6570\u7684\u6bd4\u7279\u4f4d, \u5373 0 \u53d8\u6210 1, 1 \u53d8\u6210 0")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u5de6\u79fb(",l.a.createElement("code",null,"<<"),")"),l.a.createElement("td",null,l.a.createElement("code",null,"a << b")),l.a.createElement("td",null,"\u5c06 a \u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u5411\u5de6\u79fb b (< 32) \u6bd4\u7279\u4f4d, \u53f3\u8fb9\u7528 0 \u586b\u5145")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u6709\u7b26\u53f7\u53f3\u79fb(",l.a.createElement("code",null,">>"),")"),l.a.createElement("td",null,l.a.createElement("code",null,"a >> b")),l.a.createElement("td",null,"\u5c06 a \u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u5411\u53f3\u79fb b (< 32) \u6bd4\u7279\u4f4d, \u4e22\u5f03\u88ab\u79fb\u9664\u7684\u4f4d, \u5de6\u4fa7\u4ee5\u6700\u9ad8\u4f4d\u6765\u586b\u5145")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u65e0\u7b26\u53f7\u53f3\u79fb(",l.a.createElement("code",null,">>>"),")"),l.a.createElement("td",null,l.a.createElement("code",null,"a >> b")),l.a.createElement("td",null,"\u5c06 a \u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u5411\u53f3\u79fb b (< 32) \u6bd4\u7279\u4f4d, \u4e22\u5f03\u88ab\u79fb\u9664\u7684\u4f4d, \u5e76\u7528 0 \u5728\u5de6\u4fa7\u586b\u5145")))),l.a.createElement("p",null,"\u5728",l.a.createElement(r["Link"],{to:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.10"},l.a.createElement("code",null,"ES5"),"\u89c4\u8303\u4e2d"),", \u5bf9\u4e8c\u8fdb\u5236\u4f4d\u8fd0\u7b97\u7684\u8bf4\u660e\u5982\u4e0b:"),l.a.createElement(c["a"],{code:"The production A : A @ B, where @ is one of the bitwise operators in the productions above, is evaluated as follows:\n1. Let lref be the result of evaluating A.\n2. Let lval be GetValue(lref).\n3. Let rref be the result of evaluating B.\n4. Let rval be GetValue(rref).\n5. Let lnum be ToInt32(lval).\n6. Let rnum be ToInt32(rval).\n7. Return the result of applying the bitwise operator @ to lnum and rnum. The result is a signed 32 bit integer.",lang:"unknown"}),l.a.createElement("p",null,"\u610f\u601d\u662f\u4f1a\u5c06\u4f4d\u8fd0\u7b97\u4e2d\u7684\u5de6\u53f3\u64cd\u4f5c\u6570\u90fd\u8f6c\u6362\u4e3a",l.a.createElement("code",null,"\u6709\u7b26\u53f732\u4f4d\u6574\u578b"),", \u4e14\u8fd4\u56de\u7ed3\u679c\u4e5f\u662f",l.a.createElement("code",null,"\u6709\u7b26\u53f732\u4f4d\u6574\u578b")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6240\u4ee5\u5f53\u64cd\u4f5c\u6570\u662f\u6d6e\u70b9\u578b\u65f6\u9996\u5148\u4f1a\u88ab\u8f6c\u6362\u6210\u6574\u578b, \u518d\u8fdb\u884c\u4f4d\u8fd0\u7b97"),l.a.createElement("li",null,"\u5f53\u64cd\u4f5c\u6570\u8fc7\u5927, \u8d85\u8fc7\u4e86",l.a.createElement("code",null,"Int32"),"\u8303\u56f4, \u8d85\u8fc7\u7684\u90e8\u5206\u4f1a\u88ab\u622a\u53d6")),l.a.createElement("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u77e5\u8bc6\u7684\u56de\u987e, \u8981\u70b9\u5982\u4e0b:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u4f4d\u8fd0\u7b97\u53ea\u80fd\u5728\u6574\u578b\u53d8\u91cf\u4e4b\u95f4\u8fdb\u884c\u8fd0\u7b97"),l.a.createElement("li",null,"js \u4e2d\u7684",l.a.createElement("code",null,"Number"),"\u7c7b\u578b\u5728\u5e95\u5c42\u90fd\u662f\u4ee5\u6d6e\u70b9\u6570(\u53c2\u8003 IEEE754 \u6807\u51c6)\u8fdb\u884c\u5b58\u50a8."),l.a.createElement("li",null,"js \u4e2d\u6240\u6709\u7684\u6309\u4f4d\u64cd\u4f5c\u7b26\u7684\u64cd\u4f5c\u6570\u90fd\u4f1a\u88ab",l.a.createElement(r["Link"],{to:"https://www.ecma-international.org/ecma-262/5.1/#sec-9.5"},"\u8f6c\u6210\u8865\u7801\uff08two's complement\uff09"),"\u5f62\u5f0f\u7684",l.a.createElement("code",null,"\u6709\u7b26\u53f732\u4f4d\u6574\u6570"),".")),l.a.createElement("p",null,"\u6240\u4ee5\u5728 js \u4e2d\u4f7f\u7528\u4f4d\u8fd0\u7b97\u65f6, \u6709 2 \u79cd\u60c5\u51b5\u4f1a\u9020\u6210\u7ed3\u679c\u5f02\u5e38:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u64cd\u4f5c\u6570\u4e3a\u6d6e\u70b9\u578b(\u867d\u7136\u5e95\u5c42\u90fd\u662f\u6d6e\u70b9\u578b, \u6b64\u5904\u7406\u89e3\u4e3a\u663e\u793a\u6027\u7684\u6d6e\u70b9\u578b)"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8f6c\u6362\u6d41\u7a0b: \u6d6e\u70b9\u6570 -> \u6574\u6570(\u4e22\u5f03\u5c0f\u6570\u4f4d) -> \u4f4d\u8fd0\u7b97"))),l.a.createElement("li",null,l.a.createElement("p",null,"\u64cd\u4f5c\u6570\u7684\u5927\u5c0f\u8d85\u8fc7",l.a.createElement("code",null,"Int32"),"\u8303\u56f4(",l.a.createElement("code",null,"-2^31 ~ 2^31-1"),"). \u8d85\u8fc7\u8303\u56f4\u7684\u4e8c\u8fdb\u5236\u4f4d\u4f1a\u88ab\u622a\u65ad, \u53d6",l.a.createElement("code",null,"\u4f4e\u4f4d32bit"),"."),l.a.createElement(c["a"],{code:"Before: 11100110111110100000000000000110000000000001\n      After:              10100000000000000110000000000001",lang:"unknown"}))),l.a.createElement("p",null,"\u53e6\u5916\u7531\u4e8e js \u8bed\u8a00\u7684",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness"},"\u9690\u5f0f\u8f6c\u6362"),", \u5bf9\u975e",l.a.createElement("code",null,"Number"),"\u7c7b\u578b\u4f7f\u7528\u4f4d\u8fd0\u7b97\u64cd\u4f5c\u7b26\u65f6\u4f1a\u9690\u5f0f\u4f1a\u53d1\u751f\u9690\u5f0f\u8f6c\u6362, \u76f8\u5f53\u4e8e\u5148\u4f7f\u7528",l.a.createElement("code",null,"Number(xxx)"),"\u5c06\u5176\u8f6c\u6362\u4e3a",l.a.createElement("code",null,"number"),"\u7c7b\u578b, \u518d\u8fdb\u884c\u4f4d\u8fd0\u7b97:"),l.a.createElement(c["a"],{code:"'str' >>> 0; //  ===> Number('str') >>> 0  ===> NaN >>> 0 = 0",lang:"js"}),l.a.createElement("h2",{id:"\u57fa\u672c\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528"),l.a.createElement("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u6bd4\u8f83, \u4ee5\u4e0b\u6f14\u793a\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca, \u90fd\u5199\u6210\u4e86 8 \u4f4d\u4e8c\u8fdb\u5236\u6570(\u4e0a\u6587\u5df2\u7ecf\u8bf4\u660e, \u4e8b\u5b9e\u4e0a\u5728 js \u4e2d, \u4f4d\u8fd0\u7b97\u6700\u7ec8\u7684\u7ed3\u679c\u90fd\u662f Int32)."),l.a.createElement("p",null,"\u679a\u4e3e\u5c5e\u6027:"),l.a.createElement("p",null,"\u901a\u8fc7\u4f4d\u79fb\u7684\u65b9\u5f0f, \u5b9a\u4e49\u4e00\u4e9b\u679a\u4e3e\u5e38\u91cf"),l.a.createElement(c["a"],{code:"const A = 1 << 0; // 0b00000001\nconst B = 1 << 1; // 0b00000010\nconst C = 1 << 2; // 0b00000100",lang:"js"}),l.a.createElement("p",null,"\u4f4d\u63a9\u7801:"),l.a.createElement("p",null,"\u901a\u8fc7\u4f4d\u79fb\u5b9a\u4e49\u7684\u4e00\u7ec4\u679a\u4e3e\u5e38\u91cf, \u53ef\u4ee5\u5229\u7528\u4f4d\u63a9\u7801\u7684\u7279\u6027, \u5feb\u901f\u64cd\u4f5c\u8fd9\u4e9b\u679a\u4e3e\u4ea7\u91cf(\u589e\u52a0, \u5220\u9664, \u6bd4\u8f83)."),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5c5e\u6027\u589e\u52a0",l.a.createElement("code",null,"|"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("code",null,"ABC = A | B | C")))),l.a.createElement("li",null,"\u5c5e\u6027\u5220\u9664",l.a.createElement("code",null,"& ~"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("code",null,"AB = ABC & ~C")))),l.a.createElement("li",null,"\u5c5e\u6027\u6bd4\u8f83",l.a.createElement("ol",null,l.a.createElement("li",null,"AB \u5f53\u4e2d\u5305\u542b B: ",l.a.createElement("code",null,"AB & B === B")),l.a.createElement("li",null,"AB \u5f53\u4e2d\u4e0d\u5305\u542b C: ",l.a.createElement("code",null,"AB & C === 0")),l.a.createElement("li",null,"A \u548c B \u76f8\u7b49: ",l.a.createElement("code",null,"A === B"))))),l.a.createElement(c["a"],{code:"const A = 1 << 0; // 0b00000001\nconst B = 1 << 1; // 0b00000010\nconst C = 1 << 2; // 0b00000100\n\n// \u589e\u52a0\u5c5e\u6027\nconst ABC = A | B | C; // 0b00000111\n// \u5220\u9664\u5c5e\u6027\nconst AB = ABC & ~C; // 0b00000011\n\n// \u5c5e\u6027\u6bd4\u8f83\n// 1. AB\u5f53\u4e2d\u5305\u542bB\nconsole.log((AB & B) === B); // true\n// 2. AB\u5f53\u4e2d\u4e0d\u5305\u542bC\nconsole.log((AB & C) === 0); // true\n// 3. A\u548cB\u76f8\u7b49\nconsole.log(A === B); // false",lang:"js"}),l.a.createElement("h2",{id:"react-\u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f"},l.a.createElement(r["AnchorLink"],{to:"#react-\u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f"),l.a.createElement("p",null,"\u5728 react \u6838\u5fc3\u5305\u4e2d, \u4f4d\u8fd0\u7b97\u4f7f\u7528\u7684\u573a\u666f\u975e\u5e38\u591a. \u6b64\u5904\u53ea\u5217\u4e3e\u51fa\u4e86\u4f7f\u7528\u9891\u7387\u8f83\u9ad8\u7684\u793a\u4f8b."),l.a.createElement("h3",{id:"\u4f18\u5148\u7ea7\u7ba1\u7406-lanes"},l.a.createElement(r["AnchorLink"],{to:"#\u4f18\u5148\u7ea7\u7ba1\u7406-lanes","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f18\u5148\u7ea7\u7ba1\u7406 lanes"),l.a.createElement("p",null,"lanes \u662f",l.a.createElement("code",null,"17.x"),"\u7248\u672c\u4e2d\u5f00\u59cb\u5f15\u5165\u7684\u91cd\u8981\u6982\u5ff5, \u4ee3\u66ff\u4e86",l.a.createElement("code",null,"16.x"),"\u7248\u672c\u4e2d\u7684",l.a.createElement("code",null,"expirationTime"),", \u4f5c\u4e3a",l.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u7684\u4e00\u4e2a\u5c5e\u6027(\u4f4d\u4e8e",l.a.createElement("code",null,"react-reconciler"),"\u5305), \u4e3b\u8981\u63a7\u5236 fiber \u6811\u5728\u6784\u9020\u8fc7\u7a0b\u4e2d\u7684\u4f18\u5148\u7ea7(\u8fd9\u91cc\u53ea\u4ecb\u7ecd\u4f4d\u8fd0\u7b97\u7684\u5e94\u7528, \u5bf9\u4e8e lanes \u7684\u6df1\u5165\u5206\u6790\u5728",l.a.createElement(r["Link"],{to:"../main/priority"},l.a.createElement("code",null,"\u4f18\u5148\u7ea7\u7ba1\u7406")),"\u7ae0\u8282\u6df1\u5165\u89e3\u8bfb)."),l.a.createElement("p",null,"\u53d8\u91cf\u5b9a\u4e49:"),l.a.createElement("p",null,"\u9996\u5148\u770b\u6e90\u7801",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L74-L103"},"ReactFiberLane.js"),"\u4e2d\u7684\u5b9a\u4e49"),l.a.createElement(c["a"],{code:"//\u7c7b\u578b\u5b9a\u4e49\nexport opaque type Lanes = number;\nexport opaque type Lane = number;\n\n// \u53d8\u91cf\u5b9a\u4e49\nexport const NoLanes: Lanes = /*                        */ 0b0000000000000000000000000000000;\nexport const NoLane: Lane = /*                          */ 0b0000000000000000000000000000000;\n\nexport const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000001;\nexport const SyncBatchedLane: Lane = /*                 */ 0b0000000000000000000000000000010;\n\nexport const InputDiscreteHydrationLane: Lane = /*      */ 0b0000000000000000000000000000100;\nconst InputDiscreteLanes: Lanes = /*                    */ 0b0000000000000000000000000011000;\n\nconst InputContinuousHydrationLane: Lane = /*           */ 0b0000000000000000000000000100000;\nconst InputContinuousLanes: Lanes = /*                  */ 0b0000000000000000000000011000000;\n// ...\n// ...\n\nconst NonIdleLanes = /*                                 */ 0b0000111111111111111111111111111;\n\nexport const IdleHydrationLane: Lane = /*               */ 0b0001000000000000000000000000000;\nconst IdleLanes: Lanes = /*                             */ 0b0110000000000000000000000000000;\n\nexport const OffscreenLane: Lane = /*                   */ 0b1000000000000000000000000000000;",lang:"js"}),l.a.createElement("p",null,"\u6e90\u7801\u4e2d",l.a.createElement("code",null,"Lanes"),"\u548c",l.a.createElement("code",null,"Lane"),"\u90fd\u662f",l.a.createElement("code",null,"number"),"\u7c7b\u578b, \u5e76\u4e14\u5c06\u6240\u6709\u53d8\u91cf\u90fd\u4f7f\u7528\u4e8c\u8fdb\u5236\u4f4d\u6765\u8868\u793a."),l.a.createElement("p",null,"\u6ce8\u610f: \u6e90\u7801\u4e2d\u53d8\u91cf\u53ea\u5217\u51fa\u4e86 31 \u4f4d, \u7531\u4e8e js \u4e2d\u4f4d\u8fd0\u7b97\u90fd\u4f1a\u8f6c\u6362\u6210",l.a.createElement("code",null,"Int32"),"(\u4e0a\u6587\u5df2\u7ecf\u89e3\u91ca), \u6700\u591a\u4e3a 32 \u4f4d, \u4e14\u6700\u9ad8\u4f4d\u662f\u7b26\u53f7\u4f4d. \u6240\u4ee5\u9664\u53bb\u7b26\u53f7\u4f4d, \u6700\u591a\u53ea\u6709 31 \u4f4d\u53ef\u4ee5\u53c2\u4e0e\u8fd0\u7b97."),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L121-L194"},"\u65b9\u6cd5\u5b9a\u4e49"),":"),l.a.createElement(c["a"],{code:"function getHighestPriorityLanes(lanes: Lanes | Lane): Lanes {\n  // \u5224\u65ad lanes\u4e2d\u662f\u5426\u5305\u542b SyncLane\n  if ((SyncLane & lanes) !== NoLanes) {\n    return_highestLanePriority = SyncLanePriority;\n    return SyncLane;\n  }\n  // \u5224\u65ad lanes\u4e2d\u662f\u5426\u5305\u542b SyncBatchedLane\n  if ((SyncBatchedLane & lanes) !== NoLanes) {\n    return_highestLanePriority = SyncBatchedLanePriority;\n    return SyncBatchedLane;\n  }\n  // ...\n  // ... \u7701\u7565\u5176\u4ed6\u4ee3\u7801\n  return lanes;\n}",lang:"js"}),l.a.createElement("p",null,"\u5728\u65b9\u6cd5\u5b9a\u4e49\u4e2d, \u4e5f\u662f\u901a\u8fc7\u4f4d\u63a9\u7801\u7684\u7279\u6027\u6765\u5224\u65ad\u4e8c\u8fdb\u5236\u5f62\u5f0f\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb. \u9664\u4e86\u5e38\u89c4\u7684\u4f4d\u63a9\u7801\u64cd\u4f5c\u5916, \u7279\u522b\u8bf4\u660e\u5176\u4e2d 2 \u4e2a\u6280\u5de7\u6027\u5f3a\u7684\u51fd\u6570:"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("code",null,"getHighestPriorityLane"),": \u5206\u79bb\u51fa\u6700\u9ad8\u4f18\u5148\u7ea7")),l.a.createElement(c["a"],{code:"function getHighestPriorityLane(lanes: Lanes) {\n  return lanes & -lanes;\n}",lang:"js"}),l.a.createElement("p",null,"\u901a\u8fc7",l.a.createElement("code",null,"lanes & -lanes"),"\u53ef\u4ee5\u5206\u79bb\u51fa\u6240\u6709\u6bd4\u7279\u4f4d\u4e2d\u6700\u53f3\u8fb9\u7684 1, \u5177\u4f53\u6765\u8bb2:"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5047\u8bbe ",l.a.createElement("code",null,"lanes(InputDiscreteLanes) = 0b0000000000000000000000000011000")),l.a.createElement("li",null,"\u90a3\u4e48 ",l.a.createElement("code",null,"-lanes = 0b1111111111111111111111111101000")),l.a.createElement("li",null,"\u6240\u4ee5 ",l.a.createElement("code",null,"lanes & -lanes = 0b0000000000000000000000000001000")),l.a.createElement("li",null,"\u76f8\u6bd4\u6700\u521d\u7684 InputDiscreteLanes, \u5206\u79bb\u51fa\u6765\u4e86",l.a.createElement("code",null,"\u6700\u53f3\u8fb9\u76841")),l.a.createElement("li",null,"\u901a\u8fc7 lanes \u7684\u5b9a\u4e49, \u6570\u5b57\u8d8a\u5c0f\u7684\u4f18\u5148\u7ea7\u8d8a\u9ad8, \u6240\u4ee5\u6b64\u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6",l.a.createElement("code",null,"\u6700\u9ad8\u4f18\u5148\u7ea7\u7684lane")),l.a.createElement("li",null)),l.a.createElement("ol",{start:2},l.a.createElement("li",null,l.a.createElement("code",null,"getLowestPriorityLane"),": \u5206\u79bb\u51fa\u6700\u4f4e\u4f18\u5148\u7ea7")),l.a.createElement(c["a"],{code:"function getLowestPriorityLane(lanes: Lanes): Lane {\n  // This finds the most significant non-zero bit.\n  const index = 31 - clz32(lanes);\n  return index < 0 ? NoLanes : 1 << index;\n}",lang:"js"}),l.a.createElement("p",null,l.a.createElement("code",null,"clz32(lanes)"),"\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u5728\u8f6c\u6362\u6210 32 \u65e0\u7b26\u53f7\u6574\u5f62\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u540e, \u524d\u5bfc 0 \u7684\u4e2a\u6570(",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32"},"MDN \u4e0a\u7684\u89e3\u91ca"),")"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5047\u8bbe ",l.a.createElement("code",null,"lanes(InputDiscreteLanes) = 0b0000000000000000000000000011000")),l.a.createElement("li",null,"\u90a3\u4e48 ",l.a.createElement("code",null,"clz32(lanes) = 27"),", \u7531\u4e8e InputDiscreteLanes \u5728\u6e90\u7801\u4e2d\u88ab\u4e66\u5199\u6210\u4e86 31 \u4f4d, \u867d\u7136\u5728\u5b57\u9762\u4e0a\u524d\u5bfc 0 \u662f 26 \u4e2a, \u4f46\u662f\u8f6c\u6210\u6807\u51c6 32 \u4f4d\u540e\u662f 27 \u4e2a"),l.a.createElement("li",null,l.a.createElement("code",null,"index = 31 - clz32(lanes) = 4")),l.a.createElement("li",null,"\u6700\u540e ",l.a.createElement("code",null,"1 << index = 0b0000000000000000000000000010000")),l.a.createElement("li",null,"\u76f8\u6bd4\u6700\u521d\u7684 InputDiscreteLanes, \u5206\u79bb\u51fa\u6765\u4e86",l.a.createElement("code",null,"\u6700\u5de6\u8fb9\u76841")),l.a.createElement("li",null,"\u901a\u8fc7 lanes \u7684\u5b9a\u4e49, \u6570\u5b57\u8d8a\u5c0f\u7684\u4f18\u5148\u7ea7\u8d8a\u9ad8, \u6240\u4ee5\u6b64\u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u6700\u4f4e\u4f18\u5148\u7ea7\u7684 lane")),l.a.createElement("h3",{id:"\u6267\u884c\u4e0a\u4e0b\u6587-executioncontext"},l.a.createElement(r["AnchorLink"],{to:"#\u6267\u884c\u4e0a\u4e0b\u6587-executioncontext","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6267\u884c\u4e0a\u4e0b\u6587 ExecutionContext"),l.a.createElement("p",null,l.a.createElement("code",null,"ExecutionContext"),"\u5b9a\u4e49\u4e0e",l.a.createElement("code",null,"react-reconciler"),"\u5305\u4e2d, \u4ee3\u8868",l.a.createElement("code",null,"reconciler"),"\u5728\u8fd0\u884c\u65f6\u7684\u4e0a\u4e0b\u6587\u72b6\u6001(\u5728",l.a.createElement("code",null,"reconciler \u6267\u884c\u4e0a\u4e0b\u6587"),"\u7ae0\u8282\u4e2d\u6df1\u5165\u89e3\u8bfb, \u6b64\u5904\u4ecb\u7ecd\u4f4d\u8fd0\u7b97\u7684\u5e94\u7528)."),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L247-L256"},"\u53d8\u91cf\u5b9a\u4e49"),":"),l.a.createElement(c["a"],{code:"export const NoContext = /*             */ 0b0000000;\nconst BatchedContext = /*               */ 0b0000001;\nconst EventContext = /*                 */ 0b0000010;\nconst DiscreteEventContext = /*         */ 0b0000100;\nconst LegacyUnbatchedContext = /*       */ 0b0001000;\nconst RenderContext = /*                */ 0b0010000;\nconst CommitContext = /*                */ 0b0100000;\nexport const RetryAfterError = /*       */ 0b1000000;\n\n// ...\n\n// Describes where we are in the React execution stack\nlet executionContext: ExecutionContext = NoContext;",lang:"js"}),l.a.createElement("p",null,"\u6ce8\u610f: \u548c",l.a.createElement("code",null,"lanes"),"\u7684\u5b9a\u4e49\u4e0d\u540c, ",l.a.createElement("code",null,"ExecutionContext"),"\u7c7b\u578b\u7684\u53d8\u91cf, \u5728\u5b9a\u4e49\u7684\u65f6\u5019\u91c7\u53d6\u7684\u662f 8 \u4f4d\u4e8c\u8fdb\u5236\u8868\u793a(\u56e0\u4e3a\u53d8\u91cf\u7684\u6570\u91cf\u5c11, 8 \u4f4d\u5c31\u591f\u4e86, \u6ca1\u6709\u5fc5\u8981\u5199\u6210 31 \u4f4d)."),l.a.createElement("p",null,"\u4f7f\u7528(\u7531\u4e8e\u4f7f\u7528\u7684\u5730\u65b9\u8f83\u591a, \u6240\u4ee5\u4e3e\u4e00\u4e2a",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L517-L619"},"\u4ee3\u8868\u6027\u5f3a\u7684\u4f8b\u5b50"),", ",l.a.createElement("code",null,"scheduleUpdateOnFiber")," \u51fd\u6570\u662f",l.a.createElement("code",null,"react-reconciler"),"\u5305\u5bf9",l.a.createElement("code",null,"react"),"\u5305\u66b4\u9732\u51fa\u6765\u7684 api, \u6bcf\u4e00\u6b21\u66f4\u65b0\u90fd\u4f1a\u8c03\u7528, \u6240\u4ee5\u6bd4\u8f83\u7279\u6b8a):"),l.a.createElement(c["a"],{code:"// scheduleUpdateOnFiber\u51fd\u6570\u4e2d\u5305\u542b\u4e86\u597d\u591a\u5173\u4e8eexecutionContext\u7684\u5224\u65ad(\u90fd\u662f\u4f7f\u7528\u4f4d\u8fd0\u7b97)\nexport function scheduleUpdateOnFiber(\n  fiber: Fiber,\n  lane: Lane,\n  eventTime: number,\n) {\n  if (root === workInProgressRoot) {\n    // \u5224\u65ad: executionContext \u4e0d\u5305\u542b RenderContext\n    if (\n      deferRenderPhaseUpdateToNextBatch ||\n      (executionContext & RenderContext) === NoContext\n    ) {\n      // ...\n    }\n  }\n  if (lane === SyncLane) {\n    if (\n      // \u5224\u65ad: executionContext \u5305\u542b LegacyUnbatchedContext\n      (executionContext & LegacyUnbatchedContext) !== NoContext &&\n      // \u5224\u65ad: executionContext \u4e0d\u5305\u542b RenderContext\u6216CommitContext\n      (executionContext & (RenderContext | CommitContext)) === NoContext\n    ) {\n      // ...\n    }\n  }\n  // ...\n}",lang:"js"}),l.a.createElement("h2",{id:"\u603b\u7ed3"},l.a.createElement(r["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),l.a.createElement("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86\u4f4d\u8fd0\u7b97\u7684\u57fa\u672c\u4f7f\u7528, \u5e76\u5217\u4e3e\u4e86\u4f4d\u8fd0\u7b97\u5728",l.a.createElement("code",null,"react"),"\u6e90\u7801\u4e2d\u7684\u9ad8\u9891\u5e94\u7528. \u5728\u7279\u5b9a\u7684\u60c5\u51b5\u4e0b, \u4f7f\u7528\u4f4d\u8fd0\u7b97\u4e0d\u4ec5\u662f\u63d0\u9ad8\u8fd0\u7b97\u901f\u5ea6, \u4e14\u4f4d\u63a9\u7801\u80fd\u7b80\u6d01\u548c\u6e05\u6670\u7684\u8868\u793a\u51fa\u4e8c\u8fdb\u5236\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb. \u4e8c\u8fdb\u5236\u53d8\u91cf\u867d\u7136\u6709\u4f18\u52bf, \u4f46\u662f\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e, \u4e0d\u591f\u76f4\u89c2, \u6269\u5c55\u6027\u4e0d\u597d(\u5728 js \u5f53\u4e2d\u7684\u4e8c\u8fdb\u5236\u53d8\u91cf, \u9664\u53bb\u7b26\u53f7\u4f4d, \u6700\u591a\u53ea\u80fd\u4f7f\u7528 31 \u4f4d, \u5f53\u53d8\u91cf\u7684\u6570\u91cf\u8d85\u8fc7 31 \u4f4d\u5c31\u9700\u8981\u7ec4\u5408, \u6b64\u65f6\u5c31\u4f1a\u53d8\u5f97\u590d\u6742). \u5728\u9605\u8bfb\u6e90\u7801\u65f6, \u6211\u4eec\u9700\u8981\u4e86\u89e3\u4e8c\u7ea7\u5236\u53d8\u91cf\u548c\u4f4d\u63a9\u7801\u7684\u4f7f\u7528. \u4f46\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d, \u9700\u8981\u89c6\u60c5\u51b5\u800c\u5b9a, \u4e0d\u80fd\u76f2\u76ee\u4f7f\u7528."),l.a.createElement("h2",{id:"\u53c2\u8003\u8d44\u6599"},l.a.createElement(r["AnchorLink"],{to:"#\u53c2\u8003\u8d44\u6599","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u8d44\u6599"),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.10"},"ECMAScript\xae Language Specification(Standard ECMA-262 5.1 Edition) Binary Bitwise Operators")),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html"},"\u6d6e\u70b9\u6570\u7684\u4e8c\u8fdb\u5236\u8868\u793a")),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://zh.wikipedia.org/wiki/IEEE_754"},"IEEE 754")))))}}]);