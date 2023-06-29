"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4418],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),i=n(34334),l=n(72389),o=n(67392),p=n(7094),u=n(12466),m="tabList__CuJ",c="tabItem_LNqP";function s(e){var t,n,l=e.lazy,s=e.block,d=e.defaultValue,k=e.values,N=e.groupId,f=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,p.U)(),C=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,r.useState)(h),q=O[0],T=O[1],j=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var E=C[N];null!=E&&E!==q&&v.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==q&&(x(t),T(a),null!=N&&w(N,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var i,l=j.indexOf(e.currentTarget)-1;n=null!=(i=j[l])?i:j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function d(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},9214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(65488),o=n(85162),p=["components"],u={sidebar_position:1,title:"\u6982\u8ff0"},m=void 0,c={unversionedId:"team-work/query/usage",id:"team-work/query/usage",title:"\u6982\u8ff0",description:"select\u540e\u7f6e\u98ce\u683c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/query/usage.mdx",sourceDirName:"team-work/query",slug:"/team-work/query/usage",permalink:"/jimmer/zh/docs/team-work/query/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/query/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6982\u8ff0"},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u7bc7",permalink:"/jimmer/zh/docs/team-work/query/"},next:{title:"\u5bf9\u8c61\u6293\u53d6\u5668",permalink:"/jimmer/zh/docs/team-work/query/object-fetcher/"}},s={},d=[{value:"select\u540e\u7f6e\u98ce\u683c",id:"select\u540e\u7f6e\u98ce\u683c",level:2},{value:"\u4ee3\u7801\u7ed3\u6784",id:"\u4ee3\u7801\u7ed3\u6784",level:2}],k={toc:d};function N(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"select\u540e\u7f6e\u98ce\u683c"},"select\u540e\u7f6e\u98ce\u683c"),(0,i.kt)("p",null,"\u548c\u539f\u751fSQL\u4e0d\u540c\uff0c\u5728Jimmer\u63d0\u4f9b\u7684DSL\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\u8bed\u53e5\u51fa\u73b0\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"where"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"orderBy"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"groupBy"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"having"),"\u4e4b\u540e\uff0c\u4f8b\u5982"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table) \u2776\n    .where(table.name().eq("SQL in Action"))\n    .orderBy(table.name().asc(), table.edition().desc())\n    // highlight-next-line\n    .select(table) \u2777\n    .limit(10, 100)\n    .execute(); \u2778\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) { \u2776\n        where(table.name eq "SQL in Action")\n        orderBy(table.name.asc(), table.edition.desc())\n        // highlight-next-line\n        select(table) \u2777\n    }\n    .limit(10, 100)\n    .execute() \u2778\n')))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\u653e\u5728\u540e\u9762\u5e76\u975eJimmer\u7684\u9996\u521b\uff0c\u9996\u6b21\u628a\u8fd9\u79cd\u98ce\u683c\u5e26\u5165\u4e3b\u6d41\u7f16\u7a0b\u9886\u57df\u7684\u662fC#3.5\u63a8\u51fa\u7684",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/"},"LINQ"),"\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u98ce\u683c\u5bf9\u6784\u5efa\u57fa\u4e8e\u5f3a\u7c7b\u578bDSL\u6846\u67b6\u6709\u5929\u751f\u7684\u4f18\u52bf\uff0c\u56e0\u6b64Jimmer\u5f88\u81ea\u7136\u5730\u6cbf\u7528\u4e86\u8fd9\u79cd\u98ce\u683c\u3002")),(0,i.kt)("h2",{id:"\u4ee3\u7801\u7ed3\u6784"},"\u4ee3\u7801\u7ed3\u6784"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u89e3\u91ca\u4e0a\u8ff0\u4ee3\u7801\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776\u5904\u521b\u5efa\u67e5\u8be2\uff0c\u5f97\u5230\u4e00\u4e2a\u53ef\u53d8\u67e5\u8be2\u5bf9\u8c61\u3002\u4ee5\u8be5\u5bf9\u8c61\u4e3a\u76ee\u6807\u7684\u64cd\u4f5c\u6301\u7eed\u5230\u2777\u5904\u4e3a\u6b62"),(0,i.kt)("p",{parentName:"li"},"\u6240\u8c13\u53ef\u53d8\u67e5\u8be2\u5bf9\u8c61\uff0c\u6307\u5bf9\u5176\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\uff0c\u6bd4\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"where"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"orderBy"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"groupBy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"having"),"\uff0c\u90fd\u662f\u76f4\u63a5\u4fee\u6539\u5f53\u524d\u67e5\u8be2\u5bf9\u8c61")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777\u5904\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\uff0c\u628a\u53ef\u53d8\u67e5\u8be2\u5bf9\u8c61\u8f6c\u5316\u4e3a\u4e0d\u53ef\u53d8\u67e5\u8be2\u5bf9\u8c61\u3002\u4ee5\u8be5\u5bf9\u8c61\u4e3a\u76ee\u6807\u7684\u64cd\u4f5c\u6301\u7eed\u5230\u2778\u5904\u4e3a\u6b62"),(0,i.kt)("p",{parentName:"li"},"\u6240\u8c13\u4e0d\u53ef\u53d8\u67e5\u8be2\u5bf9\u8c61\uff0c\u6307\u5bf9\u5176\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\uff0c\u6bd4\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"distinct"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forUpdate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reselect"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"withoutSortingAndPaging"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"union"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unionAll"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"minus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"intersect"),"\uff0c\u90fd\u662f\u4e0d\u4f1a\u6539\u53d8\u5f53\u524d\u67e5\u8be2\u5bf9\u8c61\uff0c\u800c\u662f\u521b\u5efa\u65b0\u7684\u5bf9\u8c61"),(0,i.kt)("p",{parentName:"li"},"\u4f8b\u5982 ",(0,i.kt)("em",{parentName:"p"},"(\u4e3a\u4e86\u7b80\u77ed\uff0c\u8fd9\u6bb5\u4f2a\u7801\u4f7f\u7528kotlin)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val query = sqlClient.createQuery(Book::class) {\n    where(...)\n    orderBy(...)\n    select(...)\n}\nval query1 = query.limit(10, 0);\nval query2 = query.limit(10, 1);\nval query3 = query.limit(10, 2);\n")),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u91cc",(0,i.kt)("inlineCode",{parentName:"p"},"query"),"\u662f\u6700\u539f\u59cb\u7684\u67e5\u8be2\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"query1"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"query2"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"query3"),"\u90fd\u662f\u57fa\u4e8e\u5b83\u521b\u5efa\u7684\u5176\u4ed6\u67e5\u8be2\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),"\u65b9\u6cd5\u5e76\u4e0d\u4f1a\u6539\u53d8\u539f\u672c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"query"),"\u672c\u8eab\uff0c\u800c\u662f\u521b\u5efa\u65b0\u7684\u4e0d\u53ef\u53d8\u67e5\u8be2\u5bf9\u8c61\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6700\u7ec8\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"query1"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"query2"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"query3"),"\u5171\u4eab\u7684\u76f8\u540c\u7684\u7b5b\u9009\u6761\u4ef6\u3001\u6392\u5e8f\u548c\u7ed3\u6784\u6295\u5f71\uff0c\u53ea\u662f\u5206\u9875\u8303\u56f4\u4e0d\u540c\u800c\u5df2\u3002\u5b83\u4eec\u53ef\u5e76\u5b58\uff0c\u5f7c\u6b64\u5e76\u4e0d\u5f71\u54cd\u3002"),(0,i.kt)("p",{parentName:"li"},"\u53e6\u5916\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\u4e4b\u524d\u7684\u7684\u53ef\u53d8\u67e5\u8be2\u6ca1\u6709\u8fd4\u56de\u7c7b\u578b\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\u4e4b\u540e\u7684\u4e0d\u53ef\u53d8\u67e5\u8be2\u6709\u8fd4\u56de\u7c7b\u578b\u3002\u5373\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"select"),"\u4e3a\u67e5\u8be2\u8bed\u53e5\u8d4b\u4e88\u4e86\u6700\u7ec8\u8fd4\u56de\u7c7b\u578b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2778\u5904\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"execute"),"\uff0c\u6267\u884c\u67e5\u8be2\u5e76\u8fd4\u56de\u6700\u7ec8\u6570\u636e\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e00\u6b65\u4e4b\u524d\uff0c\u5982\u4f55\u5982\u4f55\u64cd\u4f5cDSL\u8c03\u6574SQL\u8bed\u53e5\uff0c\u90fd\u4e0d\u4f1a\u6267\u884c\u3002"),(0,i.kt)("p",{parentName:"li"},"\u9664",(0,i.kt)("inlineCode",{parentName:"p"},"execute"),"\u5916\uff0c\u8fd8\u6709\u5176\u4ed6\u65b9\u6cd5\u53ef\u4ee5\u6267\u884c\u67e5\u8be2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fetchOne"),"\uff1a\u5047\u8bbe\u67e5\u8be2\u5fc5\u7136\u8fd4\u56de\u4e00\u6761\u6570\u636e\uff0c\u5f97\u5230\u8fd9\u6761\u6570\u636e\u3002\u5982\u679c\u5b9e\u9645\u6267\u884c\u540e\u53d1\u73b0\u8fd4\u56de\u4e860\u6216\u591a\u6761\u6570\u636e\uff0c\u5219\u629b\u51fa\u5f02\u5e38")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fetchOneOrNull"),"\uff1a\u5047\u8bbe\u67e5\u8be2\u5fc5\u7136\u8fd4\u56de0\u62161\u6761\u6570\u636e\uff0c\u5f97\u5230\u8fd9\u6761\u6570\u636e\u6216null\u3002\u5982\u679c\u5b9e\u9645\u6267\u884c\u540e\u53d1\u73b0\u8fd4\u56de\u4e86\u591a\u6761\u6570\u636e\uff0c\u5219\u629b\u51fa\u5f02\u5e38")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fetchOptional"),"\uff1a\u529f\u80fd\u540c",(0,i.kt)("inlineCode",{parentName:"p"},"fetchOneOrNull"),"\u7c7b\u4f3c\uff0c\u53ea\u662f\u628a\u8fd4\u56de\u7c7b\u578b\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"null | T"),"\u53d8\u6210\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.Optional<T>")),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u6b64API\u4ec5\u5b58\u5728\u4e8eJava API\u4e2d\uff0c\u4e0d\u5b58\u5728\u4e8ekotlin API\u3002\u56e0\u4e3akotlin\u4e0d\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.Optional<T>")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"map"),"\uff1a\u76f4\u63a5\u6267\u884c\uff0c\u5e76\u5728\u8fd4\u56de\u7684\u539f\u59cb\u96c6\u5408\u7684\u57fa\u7840\u4e0a\u518d\u8fdb\u884c\u4e00\u6b21JVM\u5c42\u9762\u7684\u96c6\u5408map\u64cd\u4f5c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"forEach"),"\uff1a\u5982\u679c\u56e0\u8fd4\u56de\u6570\u636e\u592a\u591a\u800c\u4e0d\u60f3\u8fd4\u56de\u4e00\u4e2a\u5927\u96c6\u5408\uff0c\u5c31\u53ef\u4ee5\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"forEach"),"\u5e76\u4f20\u9012\u4e00\u4e2acallback\uff0c\u904d\u5386\u6240\u6709\u6570\u636e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"count"),"\uff1a\u5728\u7528\u6237\u7f16\u5199\u7684\u539f\u59cb\u6570\u636e\u67e5\u8be2\u57fa\u7840\u4e0a\uff0c\u81ea\u52a8\u751f\u6210\u5206\u9875\u67e5\u8be2\u6240\u9700\u8981\u7684count\u805a\u5408\u67e5\u8be2\uff0c\u5e76\u6267\u884c\u83b7\u53d6\u5206\u9875\u524d\u7684\u6570\u636e\u603b\u884c\u6570\u3002"),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u8db3\u591f\u667a\u80fd\u548c\u9ad8\u7ea7\u7684\u64cd\u4f5c\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"./paging"},"\u5206\u9875\u67e5\u8be2"))))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u6240\u6709\u7528\u4e8e\u6267\u884c\u67e5\u8be2\u7684\u65b9\u6cd5\uff0c\u90fd\u6709\u4e24\u4e2a\u91cd\u8f7d\u7248\u672c"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u53c2\u7248\u672c ",(0,i.kt)("em",{parentName:"p"},"(\u4e0a\u8ff0\u4ee3\u7801\u6240\u793a)"),"\uff0c\u5229\u7528Jimmer\u7684\u8fde\u63a5\u7ba1\u7406\u673a\u5236 ",(0,i.kt)("em",{parentName:"p"},"(\u901a\u5e38\u5bf9\u63a5spring\u4e8b\u52a1\u7ba1\u7406\u673a\u5236)")," \u83b7\u53d6JDBC\u8fde\u63a5\u5e76\u6267\u884c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6709\u53c2\u6570\u7248\u672c\uff1a\u53c2\u6570\u63a5\u53d7\u4e00\u4e2aJDBC\u8fde\u63a5\u3002\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5f03Jimmer\u8fde\u63a5\u7ba1\u7406\u673a\u5236 ",(0,i.kt)("em",{parentName:"p"},"(\u901a\u5e38\u5bf9\u63a5spring\u4e8b\u52a1\u7ba1\u7406\u673a\u5236)")," \u4e8e\u4e0d\u987e\uff0c\u5728\u81ea\u5df1\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002")))))),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u53ef\u4ee5\u7528\u5982\u4e0b\u7b80\u56fe\u603b\u7ed3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-----------------+\n| \u2776 createQuery  |\n+-------+---------+\n        |\n     \u53ef\u53d8\u67e5\u8be2\n(\u4ee5where, orderBy\u4e3a\u4ee3\u8868\u7684\u64cd\u4f5c\uff0c\n\u76f4\u63a5\u4fee\u6539\u5f53\u524d\u67e5\u8be2)\n        |\n        |\n       \\|/\n+-----------------+\n| \u2777 select       |\n+-------+---------+\n        |\n     \u4e0d\u53ef\u53d8\u67e5\u8be2\n(\u4ee5limit, distinct\u4e3a\u4ee3\u8868\u7684\u64cd\u4f5c\uff0c\n\u5e76\u4e0d\u4fee\u6539\u5f53\u524d\u67e5\u8be2\uff0c\u800c\u662f\u521b\u5efa\u65b0\u7684\u67e5\u8be2)\n        |\n        |\n       \\|/\n+-----------------+\n| \u2778 exceute\u6216\u5176\u4ed6 |\n+-------+---------+\n        |\n     \u6267\u884c\u7ed3\u679c\n(\u5176\u7c7b\u578b\u7531\u2777\u5904select\u6307\u5b9a)\n")))}N.isMDXComponent=!0}}]);