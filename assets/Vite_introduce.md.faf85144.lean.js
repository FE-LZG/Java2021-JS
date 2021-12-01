import{_ as t,c as i,o as n,a as e,b as l}from"./app.7360bdf4.js";var o="/hardware-blog/assets/vite.bb542c57.png";const B='{"title":"1. Vite\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 \u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60Vite","slug":"_1-1-\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60vite"},{"level":2,"title":"1.2 Vite\u662F\u4EC0\u4E48\uFF1F","slug":"_1-2-vite\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"1.3 Vite\u6709\u54EA\u4E9B\u7279\u70B9\uFF1F","slug":"_1-3-vite\u6709\u54EA\u4E9B\u7279\u70B9\uFF1F"}],"relativePath":"Vite/introduce.md","lastUpdated":1637843608284}',a={},s=e("h1",{id:"_1-vite\u7B80\u4ECB",tabindex:"-1"},[l("1. "),e("code",null,"Vite"),l("\u7B80\u4ECB "),e("a",{class:"header-anchor",href:"#_1-vite\u7B80\u4ECB","aria-hidden":"true"},"#")],-1),d=e("h2",{id:"_1-1-\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60vite",tabindex:"-1"},[l("1.1 \u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60"),e("code",null,"Vite"),l(),e("a",{class:"header-anchor",href:"#_1-1-\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60vite","aria-hidden":"true"},"#")],-1),c=e("p",null,"\u4F7F\u7528 JavaScript \u5F00\u53D1\u7684\u5DE5\u5177\u901A\u5E38\u9700\u8981\u5F88\u957F\u65F6\u95F4\uFF08\u751A\u81F3\u662F\u51E0\u5206\u949F\uFF01\uFF09\u624D\u80FD\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5373\u4F7F\u4F7F\u7528 HMR\uFF0C\u6587\u4EF6\u4FEE\u6539\u540E\u7684\u6548\u679C\u4E5F\u9700\u8981\u51E0\u79D2\u949F\u624D\u80FD\u5728\u6D4F\u89C8\u5668\u4E2D\u53CD\u6620\u51FA\u6765\u3002\u5982\u6B64\u5FAA\u73AF\u5F80\u590D\uFF0C\u8FDF\u949D\u7684\u53CD\u9988\u4F1A\u6781\u5927\u5730\u5F71\u54CD\u5F00\u53D1\u8005\u7684\u5F00\u53D1\u6548\u7387\u548C\u5E78\u798F\u611F\u3002",-1),u=e("p",null,"Vite\u89E3\u51B3\u4E86\u9057\u7559\u7684\u95EE\u9898:",-1),r=e("ul",null,[e("li",null,"\u7F13\u6162\u7684\u670D\u52A1\u5668\u542F\u52A8"),e("li",null,"\u7F13\u6162\u7684\u66F4\u65B0")],-1),_=e("h2",{id:"_1-2-vite\u662F\u4EC0\u4E48\uFF1F",tabindex:"-1"},[l("1.2 "),e("code",null,"Vite"),l("\u662F\u4EC0\u4E48\uFF1F "),e("a",{class:"header-anchor",href:"#_1-2-vite\u662F\u4EC0\u4E48\uFF1F","aria-hidden":"true"},"#")],-1),h=e("p",null,[e("img",{src:o,alt:"vite"})],-1),p=e("p",null,'Vite\uFF08\u6CD5\u8BED\u610F\u4E3A "\u5FEB\u901F\u7684"\uFF0C\u53D1\u97F3 /vit/\uFF0C\u53D1\u97F3\u540C "veet"\uFF09\u662F\u4E00\u79CD\u65B0\u578B\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u80FD\u591F\u663E\u8457\u63D0\u5347\u524D\u7AEF\u5F00\u53D1\u4F53\u9A8C\u3002',-1),v=e("p",null,"\u5B83\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A",-1),V=e("ul",null,[e("li",null,[l("\u4E00\u4E2A\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5B83\u57FA\u4E8E "),e("strong",null,[l("\u539F\u751F "),e("code",null,"ES"),l(" \u6A21\u5757")]),l(" \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u5185\u5EFA\u529F\u80FD\uFF0C\u5982\u901F\u5EA6\u5FEB\u5230\u60CA\u4EBA\u7684 \u6A21\u5757\u70ED\u66F4\u65B0\uFF08HMR\uFF09\u3002")]),e("li",null,[l("\u4E00\u5957\u6784\u5EFA\u6307\u4EE4\uFF0C\u5B83\u4F7F\u7528 "),e("code",null,"Rollup"),l(" \u6253\u5305\u4F60\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u5B83\u662F\u9884\u914D\u7F6E\u7684\uFF0C\u53EF\u8F93\u51FA\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u9AD8\u5EA6\u4F18\u5316\u8FC7\u7684\u9759\u6001\u8D44\u6E90\u3002")])],-1),f=e("p",null,"Vite \u610F\u5728\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u914D\u7F6E\uFF0C\u540C\u65F6\u5B83\u7684 \u63D2\u4EF6 API \u548C JavaScript API \u5E26\u6765\u4E86\u9AD8\u5EA6\u7684\u53EF\u6269\u5C55\u6027\uFF0C\u5E76\u6709\u5B8C\u6574\u7684\u7C7B\u578B\u652F\u6301\u3002",-1),b=e("h2",{id:"_1-3-vite\u6709\u54EA\u4E9B\u7279\u70B9\uFF1F",tabindex:"-1"},[l("1.3 "),e("code",null,"Vite"),l("\u6709\u54EA\u4E9B\u7279\u70B9\uFF1F "),e("a",{class:"header-anchor",href:"#_1-3-vite\u6709\u54EA\u4E9B\u7279\u70B9\uFF1F","aria-hidden":"true"},"#")],-1),S=e("ul",null,[e("li",null,[e("p",null,[l("\u6781\u901F\u7684\u670D\u52A1\u542F\u52A8 \u4F7F\u7528\u539F\u751F\u7684"),e("code",null,"ESM"),l("\u6587\u4EF6\uFF0C\u65E0\u9700\u6253\u5305")])]),e("li",null,[e("p",null,"\u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D \u65E0\u8BBA\u5E94\u7528\u7A0B\u5E8F\u5927\u5C0F\u5982\u4F55\uFF0C\u90FD\u59CB\u7EC8\u6781\u5FEB\u7684\u6A21\u5757\u70ED\u91CD\u8F7D(HMR)")]),e("li",null,[e("p",null,[l("\u5B8C\u5168\u7C7B\u578B\u5316\u7684"),e("code",null,"API"),l(" \u7075\u6D3B\u7684"),e("code",null,"API"),l("\u548C\u5B8C\u6574\u7684"),e("code",null,"TypeScript"),l("\u7C7B\u578B")])]),e("li",null,[e("p",null,[l("\u4E30\u5BCC\u7684\u529F\u80FD \u5BF9 "),e("code",null,"TypeScript"),l("\u3001"),e("code",null,"JSX"),l("\u3001"),e("code",null,"CSS"),l("\u7B49\u652F\u6301\u5F00\u7BB1\u5373\u7528")])])],-1),g=[s,d,c,u,r,_,h,p,v,V,f,b,S];function m(x,P,A,I,M,R){return n(),i("div",null,g)}var E=t(a,[["render",m]]);export{B as __pageData,E as default};
