"use strict";(self.webpackChunkjjbook=self.webpackChunkjjbook||[]).push([[2872],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(r),s=a,d=k["".concat(p,".").concat(s)]||k[s]||m[s]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7818:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return k}});var n=r(5900),a=r(4750),l=(r(9496),r(9613)),o=["components"],i={sidebar_label:"\u6d4f\u89c8\u5668\uff1a\u5783\u573e\u56de\u6536\u673a\u5236",sidebar_position:2},p="\u5783\u573e\u56de\u6536\u673a\u5236",c={unversionedId:"book2/browser-garbage",id:"book2/browser-garbage",isDocsHomePage:!1,title:"\u5783\u573e\u56de\u6536\u673a\u5236",description:"\u76f8\u5173\u95ee\u9898",source:"@site/docs/book2/browser-garbage.md",sourceDirName:"book2",slug:"/book2/browser-garbage",permalink:"/awesome-interview/book2/browser-garbage",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"\u6d4f\u89c8\u5668\uff1a\u5783\u573e\u56de\u6536\u673a\u5236",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6d4f\u89c8\u5668\uff1a\u6d4f\u89c8\u5668\u6e32\u67d3\u673a\u5236",permalink:"/awesome-interview/book2/browser-render-mechanism"},next:{title:"\u5de5\u7a0b\u5316\uff1aBabel \u7684\u539f\u7406",permalink:"/awesome-interview/book2/engineer-babel"}},u=[{value:"\u76f8\u5173\u95ee\u9898",id:"\u76f8\u5173\u95ee\u9898",children:[],level:2},{value:"\u56de\u7b54\u5173\u952e\u70b9",id:"\u56de\u7b54\u5173\u952e\u70b9",children:[],level:2},{value:"\u77e5\u8bc6\u70b9\u6df1\u5165",id:"\u77e5\u8bc6\u70b9\u6df1\u5165",children:[{value:"1. \u5185\u5b58\u6cc4\u6f0f",id:"1-\u5185\u5b58\u6cc4\u6f0f",children:[{value:"1.1 \u5185\u5b58\u751f\u547d\u5468\u671f",id:"11-\u5185\u5b58\u751f\u547d\u5468\u671f",children:[],level:4},{value:"1.2 \u5185\u5b58\u6cc4\u6f0f\u5e38\u89c1\u539f\u56e0",id:"12-\u5185\u5b58\u6cc4\u6f0f\u5e38\u89c1\u539f\u56e0",children:[],level:4}],level:3},{value:"2. Reference Counting\uff08\u5f15\u7528\u8ba1\u6570\uff09",id:"2-reference-counting\u5f15\u7528\u8ba1\u6570",children:[],level:3},{value:"3. V8 \u5783\u573e\u56de\u6536\u673a\u5236",id:"3-v8-\u5783\u573e\u56de\u6536\u673a\u5236",children:[{value:"3.1 \u5206\u4ee3\u5783\u573e\u6536\u96c6",id:"31-\u5206\u4ee3\u5783\u573e\u6536\u96c6",children:[],level:4},{value:"3.2 Mark-Compact \u7b97\u6cd5\uff08Major GC\uff09",id:"32-mark-compact-\u7b97\u6cd5major-gc",children:[],level:4},{value:"3.3 Scavenger \u7b97\u6cd5\uff08Minor GC\uff09",id:"33-scavenger-\u7b97\u6cd5minor-gc",children:[],level:4}],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],m={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5783\u573e\u56de\u6536\u673a\u5236"},"\u5783\u573e\u56de\u6536\u673a\u5236"),(0,l.kt)("h2",{id:"\u76f8\u5173\u95ee\u9898"},"\u76f8\u5173\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662f\u5185\u5b58\u6cc4\u6f0f"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u7684\u5783\u573e\u56de\u6536\u7b97\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6392\u67e5\u5185\u5b58\u6cc4\u6f0f")),(0,l.kt)("h2",{id:"\u56de\u7b54\u5173\u952e\u70b9"},"\u56de\u7b54\u5173\u952e\u70b9"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5f15\u7528\u8ba1\u6570\u6cd5")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6807\u8bb0\u6e05\u9664\u6cd5")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Mark-Compact\uff08\u6807\u8bb0\u6574\u7406\uff09")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Scavenger\uff08\u6e05\u9053\u592b\uff09")),(0,l.kt)("p",null,"GC\uff08Garbage Collection\uff0c\u5783\u573e\u56de\u6536\uff09\u662f\u4e00\u79cd\u5185\u5b58\u81ea\u52a8\u7ba1\u7406\u673a\u5236\uff0c \u5783\u573e\u56de\u6536\u5668\uff08Garbage Collector\uff09\u53ef\u4ee5\u81ea\u52a8\u56de\u6536\u5206\u914d\u7ed9\u7a0b\u5e8f\u7684\u5df2\u7ecf\u4e0d\u518d\u4f7f\u7528\u7684\u5185\u5b58\u3002\u5e38\u89c1\u7684 GC \u7b97\u6cd5\u6709\u5f15\u7528\u8ba1\u6570\u6cd5\u548c\u6807\u8bb0\u6e05\u9664\u6cd5\u7b49\u3002V8\uff08JavaScript \u5f15\u64ce\uff0c\u63d0\u4f9b\u6267\u884c JavaScript \u7684\u8fd0\u884c\u65f6\u73af\u5883\uff09\u7684\u5783\u573e\u56de\u6536\u5668\u7b97\u6cd5\u4e3b\u8981\u7531 Mark-Compact \u548c Scavenger \u6784\u6210\u3002"),(0,l.kt)("h2",{id:"\u77e5\u8bc6\u70b9\u6df1\u5165"},"\u77e5\u8bc6\u70b9\u6df1\u5165"),(0,l.kt)("h3",{id:"1-\u5185\u5b58\u6cc4\u6f0f"},"1. \u5185\u5b58\u6cc4\u6f0f"),(0,l.kt)("p",null,"\u5185\u5b58\u6cc4\u6f0f\u662f\u6307\uff0c\u5e94\u5f53\u88ab\u56de\u6536\u7684\u5bf9\u8c61\u6ca1\u6709\u88ab\u6b63\u5e38\u56de\u6536\uff0c\u53d8\u6210\u5e38\u9a7b\u8001\u751f\u4ee3\u7684\u5bf9\u8c61\uff0c\u5bfc\u81f4\u5185\u5b58\u5360\u7528\u8d8a\u6765\u8d8a\u9ad8\u3002\u5185\u5b58\u6cc4\u6f0f\u4f1a\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u901f\u5ea6\u53d8\u6162\u3001\u9ad8\u5ef6\u65f6\u3001\u5d29\u6e83\u7b49\u95ee\u9898\u3002"),(0,l.kt)("h4",{id:"11-\u5185\u5b58\u751f\u547d\u5468\u671f"},"1.1 \u5185\u5b58\u751f\u547d\u5468\u671f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5206\u914d\uff1a\u6309\u9700\u5206\u914d\u5185\u5b58\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\uff1a\u8bfb\u5199\u5df2\u5206\u914d\u7684\u5185\u5b58\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u91ca\u653e\uff1a\u91ca\u653e\u4e0d\u518d\u9700\u8981\u7684\u5185\u5b58\u3002")),(0,l.kt)("h4",{id:"12-\u5185\u5b58\u6cc4\u6f0f\u5e38\u89c1\u539f\u56e0"},"1.2 \u5185\u5b58\u6cc4\u6f0f\u5e38\u89c1\u539f\u56e0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5168\u5c40\u53d8\u91cf\uff0c\u4e14\u6ca1\u6709\u624b\u52a8\u56de\u6536\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c\u5668 / \u5b9a\u65f6\u5668 / \u95ed\u5305\u7b49\u672a\u6b63\u5e38\u6e05\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JavaScript \u5bf9\u8c61\u6765\u505a\u7f13\u5b58\uff0c\u4e14\u4e0d\u8bbe\u7f6e\u8fc7\u671f\u7b56\u7565\u548c\u5bf9\u8c61\u5927\u5c0f\u63a7\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u961f\u5217\u62e5\u585e\u6240\u5e26\u6765\u7684\u6d88\u8d39\u4e0d\u53ca\u65f6\u95ee\u9898\u3002")),(0,l.kt)("h3",{id:"2-reference-counting\u5f15\u7528\u8ba1\u6570"},"2. Reference Counting\uff08\u5f15\u7528\u8ba1\u6570\uff09"),(0,l.kt)("p",null,"Reference Counting \u662f\u5e38\u89c1\u7684\u5783\u573e\u56de\u6536\u7b97\u6cd5\uff0c\u5176\u6838\u5fc3\u601d\u8def\u662f\uff1a\u5c06\u8d44\u6e90\uff08\u6bd4\u5982\u5bf9\u8c61\uff09\u7684\u88ab\u5f15\u7528\u6b21\u6570\u4fdd\u5b58\u8d77\u6765\uff0c\u5f53\u88ab\u5f15\u7528\u6b21\u6570\u4e3a\u96f6\u65f6\u91ca\u653e\u3002\u8be5\u65b9\u6cd5\u7684\u5c40\u9650\u6027\uff1a\u5f53\u51fa\u73b0",(0,l.kt)("strong",{parentName:"p"},"\u5faa\u73af\u5f15\u7528"),"\u65f6\uff0c\u4e92\u76f8\u5f15\u7528\u7684\u5bf9\u8c61\u4e0d\u4f1a\u88ab\u56de\u6536\u3002"),(0,l.kt)("h3",{id:"3-v8-\u5783\u573e\u56de\u6536\u673a\u5236"},"3. V8 \u5783\u573e\u56de\u6536\u673a\u5236"),(0,l.kt)("p",null,"V8 \u4e2d\u6709\u4e24\u4e2a\u5783\u573e\u6536\u96c6\u5668\u3002\u4e3b\u8981\u7684 GC \u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Mark-Compact")," \u5783\u573e\u56de\u6536\u7b97\u6cd5\uff0c\u4ece\u6574\u4e2a\u5806\u4e2d\u6536\u96c6\u5783\u573e\u3002\u5c0f\u578b GC \u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Scavenger")," \u5783\u573e\u56de\u6536\u7b97\u6cd5\uff0c\u6536\u96c6\u65b0\u751f\u4ee3\u5783\u573e\u3002"),(0,l.kt)("p",null,"\u4e24\u79cd\u4e0d\u540c\u7684\u7b97\u6cd5\u5e94\u5bf9\u4e0d\u540c\u7684\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Scavenger \u7b97\u6cd5\u4e3b\u8981\u5904\u7406",(0,l.kt)("strong",{parentName:"li"},"\u5b58\u6d3b\u5468\u671f\u77ed"),"\u7684\u5bf9\u8c61\u4e2d\u7684\u53ef\u8bbf\u95ee\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Mark-Compact \u7b97\u6cd5\u4e3b\u8981\u5904\u7406",(0,l.kt)("strong",{parentName:"li"},"\u5b58\u6d3b\u5468\u671f\u957f"),"\u7684\u5bf9\u8c61\u4e2d\u7684\u4e0d\u53ef\u8bbf\u95ee\u7684\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"\u56e0\u4e3a\u65b0\u751f\u4ee3\u4e2d\u5b58\u6d3b\u7684\u53ef\u8bbf\u95ee\u5bf9\u8c61\u5360\u5c11\u6570\uff0c\u8001\u751f\u4ee3\u4e2d\u7684\u4e0d\u53ef\u8bbf\u95ee\u5bf9\u8c61\u5360\u5c11\u6570\uff0c\u6240\u4ee5\u8fd9\u4e24\u79cd\u56de\u6536\u7b97\u6cd5\u914d\u5408\u4f7f\u7528\u5341\u5206\u9ad8\u6548\u3002"),(0,l.kt)("h4",{id:"31-\u5206\u4ee3\u5783\u573e\u6536\u96c6"},"3.1 \u5206\u4ee3\u5783\u573e\u6536\u96c6"),(0,l.kt)("p",null,"\u5728 V8 \u4e2d\uff0c\u6240\u6709\u7684 JavaScript \u5bf9\u8c61\u90fd\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u5806"),"\u6765\u5206\u914d\u3002V8 \u5c06\u5176\u7ba1\u7406\u7684\u5806\u5206\u6210\u4e24\u4ee3\uff1a\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3\u3002\u5176\u4e2d\u65b0\u751f\u4ee3\u53c8\u53ef\u7ec6\u5206\u4e3a\u4e24\u4e2a\u5b50\u4ee3\uff08Nursery\u3001Intermediate\uff09\u3002"),(0,l.kt)("p",null,"\u5373\u65b0\u751f\u4ee3\u4e2d\u7684\u5bf9\u8c61\u4e3a\u5b58\u6d3b\u65f6\u95f4\u8f83\u77ed\u7684\u5bf9\u8c61\uff0c\u8001\u751f\u4ee3\u4e2d\u7684\u5bf9\u8c61\u4e3a\u5b58\u6d3b\u65f6\u95f4\u8f83\u957f\u6216\u5e38\u9a7b\u5185\u5b58\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17002181/126338733-69da76cd-33f3-4d0b-9a8e-c0e67ce0a331.png",alt:"image"})),(0,l.kt)("h4",{id:"32-mark-compact-\u7b97\u6cd5major-gc"},"3.2 Mark-Compact \u7b97\u6cd5\uff08Major GC\uff09"),(0,l.kt)("p",null,"Mark-Compact \u7b97\u6cd5\u53ef\u4ee5\u770b\u4f5c\u662f Mark-Sweep\uff08\u6807\u8bb0\u6e05\u9664\uff09\u7b97\u6cd5\u548c Cheney \u590d\u5236\u7b97\u6cd5\u7684\u7ed3\u5408\u3002\u8be5\u7b97\u6cd5\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a\u6807\u8bb0\u3001\u6e05\u9664\u3001\u6574\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17002181/126341694-f3a454c4-4d88-4f7c-80b8-f323843eb6a3.png",alt:"image"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6807\u8bb0\uff08Mark\uff09"),(0,l.kt)("p",{parentName:"li"},"\u6807\u8bb0\u662f\u627e\u6240\u6709\u53ef\u8bbf\u95ee\u5bf9\u8c61\u7684\u8fc7\u7a0b\u3002GC \u4f1a\u4ece\u4e00\u7ec4\u5df2\u77e5\u7684\u5bf9\u8c61\u6307\u9488\uff08\u79f0\u4e3a\u6839\u96c6\uff0c\u5305\u62ec\u6267\u884c\u5806\u6808\u548c\u5168\u5c40\u5bf9\u8c61\u7b49\uff09\u4e2d\uff0c\u8fdb\u884c\u9012\u5f52\u6807\u8bb0\u53ef\u8bbf\u95ee\u5bf9\u8c61\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6e05\u9664\uff08Sweep\uff09"),(0,l.kt)("p",{parentName:"li"},"\u6e05\u9664\u662f\u5c06\u4e0d\u53ef\u8bbf\u95ee\u7684\u5bf9\u8c61\u7559\u4e0b\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u6dfb\u52a0\u5230\u7a7a\u95f2\u94fe\u8868\uff08free list\uff09\u7684\u8fc7\u7a0b\u3002\u672a\u6765\u4e3a\u65b0\u5bf9\u8c61\u5206\u914d\u5185\u5b58\u65f6\uff0c\u53ef\u4ee5\u4ece\u7a7a\u95f2\u94fe\u8868\u4e2d\u8fdb\u884c\u518d\u5206\u914d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6574\u7406\uff08Compact\uff09"),(0,l.kt)("p",{parentName:"li"},"\u6574\u7406\u662f\u5c06\u53ef\u8bbf\u95ee\u5bf9\u8c61\uff0c\u5f80\u5185\u5b58\u4e00\u7aef\u79fb\u52a8\u7684\u8fc7\u7a0b\u3002\u4e3b\u8981\u89e3\u51b3\u6807\u8bb0\u6e05\u9664\u9636\u6bb5\u540e\uff0c\u5185\u5b58\u7a7a\u95f4\u51fa\u73b0\u8f83\u591a\u5185\u5b58\u788e\u7247\u65f6\uff0c\u53ef\u80fd\u5bfc\u81f4\u65e0\u6cd5\u5206\u914d\u5927\u5bf9\u8c61\uff0c\u800c\u63d0\u524d\u89e6\u53d1\u5783\u573e\u56de\u6536\u7684\u95ee\u9898\u3002"))),(0,l.kt)("h4",{id:"33-scavenger-\u7b97\u6cd5minor-gc"},"3.3 Scavenger \u7b97\u6cd5\uff08Minor GC\uff09"),(0,l.kt)("p",null,"V8 \u5bf9\u65b0\u751f\u4ee3\u5185\u5b58\u7a7a\u95f4\u91c7\u7528\u4e86 Scavenger \u7b97\u6cd5\uff0c\u8be5\u7b97\u6cd5\u4f7f\u7528\u4e86 semi-space\uff08\u534a\u7a7a\u95f4\uff09 \u7684\u8bbe\u8ba1\uff1a\u5c06\u5806\u4e00\u5206\u4e3a\u4e8c\uff0c\u59cb\u7ec8\u53ea\u4f7f\u7528\u4e00\u534a\u7684\u7a7a\u95f4\uff1aFrom-Space \u4e3a\u4f7f\u7528\u7a7a\u95f4\uff0cTo-Space \u4e3a\u7a7a\u95f2\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17002181/126367817-b5a12c03-18ea-4eb9-8bdb-84d2fd3e8aad.png",alt:"image"})),(0,l.kt)("p",null,"\u65b0\u751f\u4ee3\u5728 From-Space \u4e2d\u5206\u914d\u5bf9\u8c61\uff1b\u5728\u5783\u573e\u56de\u6536\u9636\u6bb5\uff0c\u68c0\u67e5\u5e76\u6309\u9700\u590d\u5236 From-Space \u4e2d\u7684\u53ef\u8bbf\u95ee\u5bf9\u8c61\u5230 To-Space \u6216\u8001\u751f\u4ee3\uff0c\u5e76\u91ca\u653e From-Space \u4e2d\u7684\u4e0d\u53ef\u8bbf\u95ee\u5bf9\u8c61\u5360\u7528\u7684\u5185\u5b58\u7a7a\u95f4\uff1b\u6700\u540e From-Space \u548c To-Space \u89d2\u8272\u4e92\u6362\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"Memory Management")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://v8.dev/blog/trash-talk"},"Trash talk: the Orinoco garbage collector"))))}k.isMDXComponent=!0}}]);