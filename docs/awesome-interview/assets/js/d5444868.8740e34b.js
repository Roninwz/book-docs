"use strict";(self.webpackChunkjjbook=self.webpackChunkjjbook||[]).push([[5986],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,s=m["".concat(p,".").concat(d)]||m[d]||k[d]||l;return n?a.createElement(s,i(i({ref:t},c),{},{components:n})):a.createElement(s,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(5900),r=n(4750),l=(n(9496),n(9613)),i=["components"],o={sidebar_label:"\u7f51\u7edc\uff1aHTTP \u7f13\u5b58\u673a\u5236",sidebar_position:9},p="HTTP \u7f13\u5b58\u673a\u5236",u={unversionedId:"book2/network-http-cache",id:"book2/network-http-cache",isDocsHomePage:!1,title:"HTTP \u7f13\u5b58\u673a\u5236",description:"\u76f8\u5173\u95ee\u9898",source:"@site/docs/book2/network-http-cache.md",sourceDirName:"book2",slug:"/book2/network-http-cache",permalink:"/awesome-interview/book2/network-http-cache",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"\u7f51\u7edc\uff1aHTTP \u7f13\u5b58\u673a\u5236",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u6837\u5f0f\uff1a\u8c08\u8c08 CSS \u9884\u5904\u7406\u5668",permalink:"/awesome-interview/book2/css-preprocessor"},next:{title:"\u7f16\u7801\uff1a\u5b9e\u73b0\u8282\u6d41\u53bb\u6296\u51fd\u6570",permalink:"/awesome-interview/book2/coding-throttle-debounce"}},c=[{value:"\u76f8\u5173\u95ee\u9898",id:"\u76f8\u5173\u95ee\u9898",children:[],level:2},{value:"\u56de\u7b54\u5173\u952e\u70b9",id:"\u56de\u7b54\u5173\u952e\u70b9",children:[],level:2},{value:"\u77e5\u8bc6\u70b9\u6df1\u5165",id:"\u77e5\u8bc6\u70b9\u6df1\u5165",children:[{value:"1. \u6d41\u7a0b\u56fe",id:"1-\u6d41\u7a0b\u56fe",children:[],level:3},{value:"2.\u5f3a\u7f13\u5b58",id:"2\u5f3a\u7f13\u5b58",children:[{value:"2.1 Expires",id:"21-expires",children:[],level:4},{value:"2.2 Cache-Control",id:"22-cache-control",children:[],level:4},{value:"2.3 \u62d3\u5c55\u77e5\u8bc6\uff08\u51b7\u95e8\u8003\u70b9\uff09",id:"23-\u62d3\u5c55\u77e5\u8bc6\u51b7\u95e8\u8003\u70b9",children:[],level:4}],level:3},{value:"3. \u534f\u5546\u7f13\u5b58",id:"3-\u534f\u5546\u7f13\u5b58",children:[{value:"3.1 ETag / If-None-Match",id:"31-etag--if-none-match",children:[],level:4},{value:"3.2 Last-Modified / If-Modified-Since",id:"32-last-modified--if-modified-since",children:[],level:4},{value:"3.3 \u62d3\u5c55\u77e5\u8bc6\uff08\u51b7\u95e8\u8003\u70b9\uff09",id:"33-\u62d3\u5c55\u77e5\u8bc6\u51b7\u95e8\u8003\u70b9",children:[],level:4}],level:3},{value:"4. \u7f13\u5b58\u7684\u4f18\u7f3a\u70b9",id:"4-\u7f13\u5b58\u7684\u4f18\u7f3a\u70b9",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],k={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"http-\u7f13\u5b58\u673a\u5236"},"HTTP \u7f13\u5b58\u673a\u5236"),(0,l.kt)("h2",{id:"\u76f8\u5173\u95ee\u9898"},"\u76f8\u5173\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u673a\u5236\u5417"),(0,l.kt)("li",{parentName:"ul"},"\u8c08\u8c08 HTTP \u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u8981\u6709\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7684\u4f18\u70b9\u662f\u4ec0\u4e48")),(0,l.kt)("h2",{id:"\u56de\u7b54\u5173\u952e\u70b9"},"\u56de\u7b54\u5173\u952e\u70b9"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5f3a\u7f13\u5b58")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u534f\u5546\u7f13\u5b58")),(0,l.kt)("p",null,"HTTP \u7f13\u5b58\u4e3b\u8981\u5206\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u5f3a\u7f13\u5b58"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u534f\u5546\u7f13\u5b58"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f3a\u7f13\u5b58"),"\u53ef\u4ee5\u901a\u8fc7 Expires / Cache-Control \u63a7\u5236\uff0c\u547d\u4e2d\u5f3a\u7f13\u5b58\u65f6\u4e0d\u4f1a\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\uff0c\u8d44\u6e90\u76f4\u63a5\u4ece\u672c\u5730\u83b7\u53d6\uff0c\u6d4f\u89c8\u5668\u663e\u793a\u72b6\u6001\u7801 200 from cache\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u534f\u5546\u7f13\u5b58"),"\u53ef\u4ee5\u901a\u8fc7 Last-Modified / If-Modified-Since \u548c Etag / If-None-Match \u63a7\u5236\uff0c\u5f00\u542f\u534f\u5546\u7f13\u5b58\u65f6\u5411\u670d\u52a1\u5668\u53d1\u9001\u7684\u8bf7\u6c42\u4f1a\u5e26\u4e0a\u7f13\u5b58\u6807\u8bc6\uff0c\u82e5\u547d\u4e2d\u534f\u5546\u7f13\u5b58\u670d\u52a1\u5668\u8fd4\u56de 304 Not Modified \u8868\u793a\u6d4f\u89c8\u5668\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u6587\u4ef6\uff0c\u5426\u5219\u8fd4\u56de 200 OK \u6b63\u5e38\u8fd4\u56de\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u77e5\u8bc6\u70b9\u6df1\u5165"},"\u77e5\u8bc6\u70b9\u6df1\u5165"),(0,l.kt)("h3",{id:"1-\u6d41\u7a0b\u56fe"},"1. \u6d41\u7a0b\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13888962/125894860-a0b9eecd-03b6-49ce-9612-9705b1fb6e78.png",alt:"image"})),(0,l.kt)("h3",{id:"2\u5f3a\u7f13\u5b58"},"2.\u5f3a\u7f13\u5b58"),(0,l.kt)("h4",{id:"21-expires"},"2.1 Expires"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP/1.0 \u4ea7\u7269\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u4f4e\u4e8e Cache-control: max-age\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4f7f\u7528\u672c\u5730\u65f6\u95f4\u5224\u65ad\u662f\u5426\u8fc7\u671f\uff0c\u800c\u672c\u5730\u65f6\u95f4\u662f\u53ef\u4fee\u6539\u7684\u4e14\u5e76\u975e\u4e00\u5b9a\u51c6\u786e\u7684\u3002")),(0,l.kt)("p",null,"Expires \u662f\u7531\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u8d44\u6e90\u8fc7\u671f\u65f6\u95f4\uff08GMT \u65e5\u671f\u683c\u5f0f/\u65f6\u95f4\u6233\uff09\uff0c\u82e5\u7528\u6237\u672c\u5730\u65f6\u95f4\u5728\u8fc7\u671f\u65f6\u95f4\u524d\uff0c\u5219\u4e0d\u53d1\u9001\u8bf7\u6c42\u76f4\u63a5\u4ece\u672c\u5730\u83b7\u53d6\u8d44\u6e90\u3002"),(0,l.kt)("h4",{id:"22-cache-control"},"2.2 Cache-Control"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP/1.1 \u4ea7\u7269\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u9ad8\u4e8e Expires\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6b63\u786e\u533a\u5206 no-cache / no-store \u7684\u4f5c\u7528\u3002")),(0,l.kt)("p",null,"Cache-Control \u662f\u7528\u4e8e\u9875\u9762\u7f13\u5b58\u7684\u901a\u7528\u6d88\u606f\u5934\u5b57\u6bb5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u6307\u4ee4\u6765\u5b9e\u73b0\u7f13\u5b58\u673a\u5236\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u7684\u5b57\u6bb5\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"max-age")," \u8bbe\u7f6e\u7f13\u5b58\u5b58\u50a8\u7684\u6700\u5927\u65f6\u957f\uff0c\u5355\u4f4d\u79d2\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"s-max-age")," \u4e0e max-age \u7528\u6cd5\u4e00\u81f4\uff0c\u4e0d\u8fc7\u4ec5\u9002\u7528\u4e8e\u4ee3\u7406\u670d\u52a1\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"public")," \u8868\u793a\u54cd\u5e94\u53ef\u88ab\u4efb\u4f55\u5bf9\u8c61\u7f13\u5b58\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"private")," \u8868\u793a\u54cd\u5e94\u53ea\u53ef\u88ab\u79c1\u6709\u7528\u6237\u7f13\u5b58\uff0c\u4e0d\u80fd\u88ab\u4ee3\u7406\u670d\u52a1\u5668\u7f13\u5b58\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"no-cache")," \u5f3a\u5236\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u53d1\u8d77\u8bf7\u6c42\uff08\u7981\u7528\u5f3a\u7f13\u5b58\uff0c\u53ef\u7528\u534f\u5546\u7f13\u5b58\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"no-store")," \u7981\u6b62\u4e00\u5207\u7f13\u5b58\uff0c\u5305\u542b\u534f\u5546\u7f13\u5b58\u4e5f\u4e0d\u53ef\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"must-revalidate")," \u4e00\u65e6\u8d44\u6e90\u8fc7\u671f\uff0c\u5728\u6210\u529f\u5411\u539f\u59cb\u670d\u52a1\u5668\u9a8c\u8bc1\u4e4b\u524d\uff0c\u7f13\u5b58\u4e0d\u80fd\u7528\u8be5\u8d44\u6e90\u54cd\u5e94\u540e\u7eed\u8bf7\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"immutable")," \u8868\u793a\u54cd\u5e94\u6b63\u6587\u4e0d\u4f1a\u968f\u65f6\u95f4\u6539\u53d8\uff08\u53ea\u8981\u8d44\u6e90\u4e0d\u8fc7\u671f\u5c31\u4e0d\u53d1\u9001\u8bf7\u6c42\uff09\u3002")),(0,l.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u867d\u7136\u4ee5\u4e0a\u5e38\u7528\u5b57\u6bb5\u90fd\u662f\u54cd\u5e94\u5934\u7684\u5b57\u6bb5\uff0c\u4f46\u662f Cache-Control \u540c\u65f6\u4e5f\u652f\u6301\u8bf7\u6c42\u5934\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cache-Control: max-stale=<seconds>")," \u8868\u660e\u5ba2\u6237\u7aef\u613f\u610f\u63a5\u6536\u4e00\u4e2a\u5df2\u7ecf\u8fc7\u671f\u4f46\u4e0d\u80fd\u8d85\u51fa",(0,l.kt)("inlineCode",{parentName:"p"},"<seconds>"),"\u79d2\u7684\u8d44\u6e90\u3002"),(0,l.kt)("h4",{id:"23-\u62d3\u5c55\u77e5\u8bc6\u51b7\u95e8\u8003\u70b9"},"2.3 \u62d3\u5c55\u77e5\u8bc6\uff08\u51b7\u95e8\u8003\u70b9\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP/1.0 Pragma",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 HTTP/1.0 \u65f6\u671f\u7528\u4e8e\u7981\u7528\u6d4f\u89c8\u5668\u7f13\u5b58 Pragma: no-cache\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u4f4d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ece Service Worker \u4e2d\u8bfb\u53d6\u7f13\u5b58\uff08\u53ea\u652f\u6301 HTTPS\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u5185\u5b58\u8bfb\u53d6\u7f13\u5b58\u65f6 network \u663e\u793a memory cache\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u786c\u76d8\u8bfb\u53d6\u7f13\u5b58\u65f6 network \u663e\u793a disk cache\u3002"),(0,l.kt)("li",{parentName:"ul"},"Push Cache\uff08\u63a8\u9001\u7f13\u5b58\uff09\uff08HTTP/2.0\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7 Service Worker > memory cache > disk cache > Push Cache\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u6700\u4f73\u5b9e\u8df5\uff1a\u8d44\u6e90\u5c3d\u53ef\u80fd\u547d\u4e2d\u5f3a\u7f13\u5b58\uff0c\u4e14\u5728\u8d44\u6e90\u6587\u4ef6\u66f4\u65b0\u65f6\u4fdd\u8bc1\u7528\u6237\u4f7f\u7528\u5230\u6700\u65b0\u7684\u8d44\u6e90\u6587\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u7f13\u5b58\u53ea\u4f1a\u547d\u4e2d\u76f8\u540c\u547d\u540d\u7684\u8d44\u6e90\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u8d44\u6e90\u6587\u4ef6\u4e0a\u52a0 hash \u6807\u8bc6\uff08webpack \u53ef\u5728\u6253\u5305\u65f6\u5728\u6587\u4ef6\u540d\u4e0a\u5e26\u4e0a\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u66f4\u65b0\u8d44\u6e90\u6587\u4ef6\u540d\u6765\u5f3a\u5236\u66f4\u65b0\u547d\u4e2d\u5f3a\u7f13\u5b58\u7684\u8d44\u6e90\u3002")))),(0,l.kt)("h3",{id:"3-\u534f\u5546\u7f13\u5b58"},"3. \u534f\u5546\u7f13\u5b58"),(0,l.kt)("h4",{id:"31-etag--if-none-match"},"3.1 ETag / If-None-Match"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u552f\u4e00\u6807\u8bc6\u6765\u9a8c\u8bc1\u7f13\u5b58\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u9ad8\u4e8e Last-Modified / If-Modified-Since\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u8d44\u6e90\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u91cc\u542b\u6709 ETag\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u540e\u7eed\u7684\u8bf7\u6c42\u7684\u5934\u4e2d\u5e26\u4e0a If-None-Match \u5934\u6765\u9a8c\u8bc1\u7f13\u5b58\u3002\u82e5\u670d\u52a1\u5668\u5224\u65ad\u8d44\u6e90\u6807\u8bc6\u4e00\u81f4\uff0c\u5219\u8fd4\u56de 304 \u72b6\u6001\u7801\u544a\u77e5\u6d4f\u89c8\u5668\u53ef\u4ece\u672c\u5730\u8bfb\u53d6\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u552f\u4e00\u6807\u8bc6\u5185\u5bb9\u662f\u7531\u670d\u52a1\u7aef\u751f\u6210\u7b97\u6cd5\u51b3\u5b9a\u7684\uff0c\u53ef\u4ee5\u662f\u8d44\u6e90\u5185\u5bb9\u751f\u6210\u7684\u54c8\u5e0c\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u6700\u540e\u4fee\u6539\u65f6\u95f4\u6233\u7684\u54c8\u5e0c\u503c\u3002\u6240\u4ee5 Etag \u6807\u8bc6\u6539\u53d8\u5e76\u4e0d\u4ee3\u8868\u8d44\u6e90\u6587\u4ef6\u6539\u53d8\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,l.kt)("h4",{id:"32-last-modified--if-modified-since"},"3.2 Last-Modified / If-Modified-Since"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8d44\u6e90\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\u6765\u9a8c\u8bc1\u7f13\u5b58\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u4f4e\u4e8e ETag / If-None-Match\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u53ea\u80fd\u7cbe\u786e\u5230\u79d2\uff0c\u82e5 1s \u5185\u591a\u6b21\u4fee\u6539\u8d44\u6e90 Last-Modified \u4e0d\u4f1a\u53d8\u5316\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u8d44\u6e90\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u91cc\u542b\u6709 Last-Modified\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u540e\u7eed\u7684\u8bf7\u6c42\u7684\u5934\u4e2d\u5e26\u4e0a If-Modified-Since \u5934\u6765\u9a8c\u8bc1\u7f13\u5b58\u3002\u82e5\u670d\u52a1\u5668\u5224\u65ad\u8d44\u6e90\u6700\u540e\u4fee\u6539\u65f6\u95f4\u4e00\u81f4\uff0c\u5219\u8fd4\u56de 304 \u72b6\u6001\u7801\u544a\u77e5\u6d4f\u89c8\u5668\u53ef\u4ece\u672c\u5730\u8bfb\u53d6\u7f13\u5b58\u3002"),(0,l.kt)("h4",{id:"33-\u62d3\u5c55\u77e5\u8bc6\u51b7\u95e8\u8003\u70b9"},"3.3 \u62d3\u5c55\u77e5\u8bc6\uff08\u51b7\u95e8\u8003\u70b9\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ETag \u5728\u6807\u8bc6\u524d\u9762\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"W/")," \u524d\u7f00\u8868\u793a\u7528\u5f31\u6bd4\u8f83\u7b97\u6cd5\uff08If-None-Match \u672c\u8eab\u5c31\u53ea\u7528\u5f31\u6bd4\u8f83\u7b97\u6cd5\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"ETag \u8fd8\u53ef\u4ee5\u914d\u5408 If-Match \u68c0\u6d4b\u5f53\u524d\u8bf7\u6c42\u662f\u5426\u4e3a\u6700\u65b0\u7248\u672c\uff0c\u82e5\u8d44\u6e90\u4e0d\u5339\u914d\u8fd4\u56de\u72b6\u6001\u7801 412 \u9519\u8bef\uff08If-Match \u4e0d\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"W/")," \u65f6\u4f7f\u7528\u5f3a\u6bd4\u8f83\u7b97\u6cd5\uff09\u3002")),(0,l.kt)("h3",{id:"4-\u7f13\u5b58\u7684\u4f18\u7f3a\u70b9"},"4. \u7f13\u5b58\u7684\u4f18\u7f3a\u70b9"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f18\u70b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8282\u7701\u4e86\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u4f20\u8f93\uff0c\u8282\u7701\u5e26\u5bbd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u670d\u52a1\u7aef\u7684\u8d1f\u62c5\uff0c\u63d0\u9ad8\u7f51\u7ad9\u6027\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u7f51\u7edc\u5ef6\u8fdf\uff0c\u52a0\u5feb\u9875\u9762\u54cd\u5e94\u901f\u5ea6\uff0c\u589e\u5f3a\u7528\u6237\u4f53\u9a8c\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7f3a\u70b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u6070\u5f53\u7684\u7f13\u5b58\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8d44\u6e90\u66f4\u65b0\u4e0d\u53ca\u65f6\uff0c\u5bfc\u81f4\u7528\u6237\u83b7\u53d6\u4fe1\u606f\u6ede\u540e\u3002")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"},"HTTP Caching"))))}m.isMDXComponent=!0}}]);