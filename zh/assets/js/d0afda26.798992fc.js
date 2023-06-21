"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2876],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(34334),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(83117),a=n(67294),l=n(34334),i=n(72389),o=n(67392),u=n(7094),p=n(12466),c="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,b=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,O=N.setTabGroupChoices,j=(0,a.useState)(g),x=j[0],E=j[1],T=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=w[b];null!=P&&P!==x&&k.some((function(e){return e.value===P}))&&E(P)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),r=k[n].value;r!==x&&(D(t),E(r),null!=b&&O(b,String(r)))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:B,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},96967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=(n(65488),n(85162),["components"]),o={sidebar_position:3,title:"\u5feb\u901f\u4e0a\u624b"},u=void 0,p={unversionedId:"get-started",id:"get-started",title:"\u5feb\u901f\u4e0a\u624b",description:"\u8fd0\u884c\u6846\u67b6\u9644\u5e26\u7684demo\uff0c\u6c38\u8fdc\u662f\u6700\u5feb\u7684\u4e0a\u624b\u65b9\u5f0f\uff0c\u5c24\u5176\u662fexample/java/jimmer-sql\u6216/example/kotlin/jimmer-sql-kt",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/get-started.mdx",sourceDirName:".",slug:"/get-started",permalink:"/jimmer/zh/docs/get-started",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/get-started.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5feb\u901f\u4e0a\u624b"},sidebar:"tutorialSidebar",previous:{title:"\u9769\u547d\u6027",permalink:"/jimmer/zh/docs/preface"},next:{title:"\u6559\u7a0b(New)",permalink:"/jimmer/zh/docs/tutorial/"}},c={},s=[{value:"\u8fd0\u884c\u4f8b\u5b50\u5fc5\u77e5\uff01",id:"\u8fd0\u884c\u4f8b\u5b50\u5fc5\u77e5",level:2},{value:"\u5404\u4f8b\u5b50\u4ecb\u7ecd",id:"\u5404\u4f8b\u5b50\u4ecb\u7ecd",level:2},{value:"B\u7ad9\u89c6\u9891",id:"b\u7ad9\u89c6\u9891",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd0\u884c\u6846\u67b6\u9644\u5e26\u7684demo\uff0c\u6c38\u8fdc\u662f\u6700\u5feb\u7684\u4e0a\u624b\u65b9\u5f0f\uff0c\u5c24\u5176\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"example/java/jimmer-sql"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"/example/kotlin/jimmer-sql-kt"))),(0,l.kt)("h2",{id:"\u8fd0\u884c\u4f8b\u5b50\u5fc5\u77e5"},"\u8fd0\u884c\u4f8b\u5b50\u5fc5\u77e5\uff01"),(0,l.kt)("p",null,"\u548c",(0,l.kt)("a",{parentName:"p",href:"https://www.jooq.org/"},"JOOQ"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javaee/6/tutorial/doc/gjitv.html"},"JPA2.0 Criteria"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"http://querydsl.com/"},"QueryDSL"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mybatis-flex/mybatis-flex"},"MyBatis-Flex"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/atool/fluent-mybatis"},"Fluent-MyBatis"),"\u7b49\u5f3a\u7c7b\u578bSQL DSL\u5b9e\u73b0\u4e00\u6837, Jimmer\u9700\u8981\u6839\u636e\u7528\u6237\u4ee3\u7801\u751f\u6210\u66f4\u591a\u7684\u6e90\u4ee3\u7801\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u5c31\u662fannotation processor"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8ekotlin\u800c\u8a00\uff0c\u5c31\u662fksp")),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u7b2c\u4e00\u6b21\u4f7f\u7528IDE\uff08\u6bd4\u5982Intellij\uff09\u6253\u5f00\u9879\u76ee\u914d\u5957\u7684\u4f8b\u5b50\u65f6\uff0c\u4f1a\u53d1\u73b0\u4e00\u4e9b\u672c\u8be5\u88ab\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u4e0d\u5b58\u5728\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u65f6\u4e0d\u8981\u60e7\u6015\uff0c\u70b9\u4e0b\u8fd0\u884c\u6309\u94ae\uff0c\u6240\u6709\u9519\u8bef\u4f1a\u81ea\u52a8\u6d88\u5931\u3002")),(0,l.kt)("h2",{id:"\u5404\u4f8b\u5b50\u4ecb\u7ecd"},"\u5404\u4f8b\u5b50\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TODO")," "),(0,l.kt)("h2",{id:"b\u7ad9\u89c6\u9891"},"B\u7ad9\u89c6\u9891"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u89c6\u9891\u5730\u5740"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9\u7b80\u4ecb"),(0,l.kt)("th",{parentName:"tr",align:null},"\u96be\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u8981\u6c42"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV1wD4y1L7xr/"},"https://www.bilibili.com/video/BV1wD4y1L7xr/")),(0,l.kt)("td",{parentName:"tr",align:null},"\u524d\u540e\u7aef\u514d\u5bf9\u63a5+spring boot starter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6613"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece0.6\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV19t4y177PX"},"https://www.bilibili.com/video/BV19t4y177PX")),(0,l.kt)("td",{parentName:"tr",align:null},"\u591a\u8868\u8fde\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6613"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV1kd4y1A7K3"},"https://www.bilibili.com/video/BV1kd4y1A7K3")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u529f\u80fd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece0.3\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.bilibili.com/video/BV1Mt4y1u7fz/"},"https://www.bilibili.com/video/BV1Mt4y1u7fz/")),(0,l.kt)("td",{parentName:"tr",align:null},"\u591a\u89c6\u89d2\u7f13\u5b58"),(0,l.kt)("td",{parentName:"tr",align:null},"\u96be"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece0.5\u5f00\u59cb")))))}d.isMDXComponent=!0}}]);