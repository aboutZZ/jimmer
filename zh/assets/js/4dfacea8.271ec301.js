"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1497],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(34334),l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(83117),a=t(67294),l=t(34334),i=t(72389),o=t(67392),u=t(7094),s=t(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,i=e.lazy,m=e.block,d=e.defaultValue,b=e.values,v=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.l)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),x=N.tabGroupChoices,_=N.setTabGroupChoices,E=(0,a.useState)(g),T=E[0],q=E[1],w=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=x[v];null!=I&&I!==T&&h.some((function(e){return e.value===I}))&&q(I)}var C=function(e){var n=e.currentTarget,t=w.indexOf(n),r=h[t].value;r!==T&&(O(n),q(r),null!=v&&_(v,String(r)))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=w.indexOf(e.currentTarget)+1;t=null!=(r=w[a])?r:w[0];break;case"ArrowLeft":var l,i=w.indexOf(e.currentTarget)-1;t=null!=(l=w[i])?l:w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},h.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},27208:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(83117),a=t(80102),l=(t(67294),t(3905)),i=t(65488),o=t(85162),u=["components"],s={sidebar_position:10,title:"Native SQL\u8868\u8fbe\u5f0f"},c=void 0,p={unversionedId:"team-work/query/native-sql",id:"team-work/query/native-sql",title:"Native SQL\u8868\u8fbe\u5f0f",description:"NativeSQL\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6570\u636e\u5e93\u4ea7\u54c1\u603b\u4f1a\u6709\u7279\u6709\u7684\u529f\u80fd\uff0c\u9700\u8981\u628a\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\u53d1\u6325\u51fa\u6765\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/query/native-sql.mdx",sourceDirName:"team-work/query",slug:"/team-work/query/native-sql",permalink:"/jimmer/zh/docs/team-work/query/native-sql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/query/native-sql.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Native SQL\u8868\u8fbe\u5f0f"},sidebar:"tutorialSidebar",previous:{title:"\u5b50\u67e5\u8be2",permalink:"/jimmer/zh/docs/team-work/query/sub-query"},next:{title:"\u5168\u5c40\u8fc7\u6ee4\u5668",permalink:"/jimmer/zh/docs/team-work/query/global-filter/"}},m={},d=[{value:"\u4f8b\u5b50\u4e00\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",id:"\u4f8b\u5b50\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",level:2},{value:"\u4f8b\u5b50\u4e8c\uff1a\u5206\u6790\u51fd\u6570",id:"\u4f8b\u5b50\u4e8c\u5206\u6790\u51fd\u6570",level:2}],b={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NativeSQL\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6570\u636e\u5e93\u4ea7\u54c1\u603b\u4f1a\u6709\u7279\u6709\u7684\u529f\u80fd\uff0c\u9700\u8981\u628a\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\u53d1\u6325\u51fa\u6765\u3002"),(0,l.kt)("h2",{id:"\u4f8b\u5b50\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"},"\u4f8b\u5b50\u4e00\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6f14\u793a\u5982\u4f55\u4f7f\u7528Oracle\u548cHSQLDB\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTable table = AuthorTable.$;\n\nList<Author> authors = sqlClient\n    .createQuery(table)\n    .where(\n        Predicate.sql(\n            "regexp_like(%e, %v)",\n            it -> it\n                .expression(table.firstName())\n                .value("^Ste(v|ph)en$")\n        )\n    )\n    .select(table)\n    .execute();\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val authors = sqlClient\n    .createQuery(Author::class) {\n        where(\n            // highlight-next-line\n            sql(Boolean::class, "regexp_like(%e, %v)") {\n                expression(table.firstName)\n                value("^Ste(v|ph)en$")\n            }\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728Java\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Predicate.sql"),"\u521b\u5efa\u57fa\u4e8e\u672c\u5730SQL\u7684\u67e5\u8be2\u6761\u4ef6\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5176\u5b83\u8868\u8fbe\u5f0f\u7c7b\u578b\u4e5f\u652f\u6301NativeSQL\u8868\u8fbe\u5f0f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"sql"),"\u51fd\u6570\u5171\u67095\u4e2a"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Predicate.sql(...)"),(0,l.kt)("li",{parentName:"ol"},"Expression.string().sql(...)"),(0,l.kt)("li",{parentName:"ol"},"Expression.numeric().sql(...)"),(0,l.kt)("li",{parentName:"ol"},"Expression.comparable().sql(...)"),(0,l.kt)("li",{parentName:"ol"},"Expression.any().sql(...)")),(0,l.kt)("p",{parentName:"admonition"},"kotlin\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u5176API\u662f\u7edf\u4e00\u7684")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sql(...)"),"\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662fSQL\u5b57\u7b26\u4e32\u6a21\u677f\uff0c\u53ef\u4ee5\u5305\u542b\u7279\u6b8a\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"%e"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"%v"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%e"),": \u5373Expression\uff0c\u690d\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%v"),": \u5373Value\uff0c\u690d\u5165\u4e00\u4e2a\u503c")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sql(...)"),"\u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u53ef\u9009\u7684\uff0c\u662f\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\uff0clambda\u8868\u8fbe\u5f0f\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u652f\u6301\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression(Expresion<?>)"),': \u690d\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u548cSQL\u6a21\u677f\u4e2d\u7684"%e"\u5339\u914d\u3002'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value(Object)"),': \u690d\u5165\u4e00\u4e2a\u503c\uff0c\u548cSQL\u6a21\u677f\u4e2d\u7684"%v"\u5339\u914d\u3002')),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u662f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.FIRST_NAME, \n    tb_1_.LAST_NAME, \n    tb_1_.GENDER \nfrom AUTHOR as tb_1_ \nwhere\n    /* highlight-next-line */\n    regexp_like(tb_1_.FIRST_NAME, ?)\n")),(0,l.kt)("h2",{id:"\u4f8b\u5b50\u4e8c\u5206\u6790\u51fd\u6570"},"\u4f8b\u5b50\u4e8c\uff1a\u5206\u6790\u51fd\u6570"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4f7f\u7528\u5206\u6790\u51fd\u6570"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<Tuple3<Book, Integer, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .select(\n        table,\n        Expression.numeric().sql(\n            Integer.class,\n            // hight-next-line\n            "rank() over(order by %e desc)",\n            table.price()\n        ),\n        Expression.numeric().sql(\n            Integer.class,\n            // hight-next-line\n            "rank() over(partition by %e order by %e desc)",\n            new Expression[] { table.store().id(), table.price() }\n        )\n    )\n    .execute();\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table,\n            // highlight-next-line\n            sql(Int::class, "rank() over(order by %e desc)") {\n                expression(table.price)\n            },\n            // highlight-next-line\n            sql("rank() over(partition by %e order by %e desc)") {\n                expression(table.store.id)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n')))),(0,l.kt)("p",null,"\u8fd9\u91cc\u67e5\u8be2\u4e86\u4e09\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u5217\uff1aBook\u5bf9\u8c61")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u5217\uff1a\u4e66\u7c4d\u7684\u4ef7\u683c\u5728\u6240\u6709\u4e66\u7c4d\u4e2d\u7684\u540d\u6b21")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u5217\uff1a\u4e66\u7c4d\u7684\u4ef7\u683c\u5728\u6240\u5c5e\u4e66\u5e97\u7684\u4e2d\u7684\u540d\u6b21"))),(0,l.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID,\n    /* highlight-next-line */\n    rank() over(\n        order by tb_1_.PRICE desc\n    ),\n    /* highlight-next-line */\n    rank() over(\n        partition by tb_1_.STORE_ID \n        order by tb_1_.PRICE desc\n    )\nfrom BOOK tb_1_\n")))}v.isMDXComponent=!0}}]);