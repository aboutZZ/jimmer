"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2210],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),c=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return r.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=t,v=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?r.createElement(v,i(i({ref:a},d),{},{components:n})):r.createElement(v,i({ref:a},d))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,a,n){n.d(a,{Z:function(){return i}});var r=n(67294),t=n(34334),l="tabItem_Ymn6";function i(e){var a=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(l,i),hidden:n},a)}},65488:function(e,a,n){n.d(a,{Z:function(){return s}});var r=n(83117),t=n(67294),l=n(34334),i=n(72389),o=n(67392),p=n(7094),c=n(12466),d="tabList__CuJ",u="tabItem_LNqP";function m(e){var a,n,i=e.lazy,m=e.block,s=e.defaultValue,v=e.values,k=e.groupId,g=e.className,N=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),S=null!=v?v:N.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),b=(0,o.l)(S,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===s?s:null!=(a=null!=s?s:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?a:N[0].props.value;if(null!==f&&!S.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+S.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var P=(0,p.U)(),h=P.tabGroupChoices,C=P.setTabGroupChoices,y=(0,t.useState)(f),T=y[0],I=y[1],U=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=h[k];null!=j&&j!==T&&S.some((function(e){return e.value===j}))&&I(j)}var O=function(e){var a=e.currentTarget,n=U.indexOf(a),r=S[n].value;r!==T&&(x(a),I(r),null!=k&&C(k,String(r)))},w=function(e){var a,n=null;switch(e.key){case"ArrowRight":var r,t=U.indexOf(e.currentTarget)+1;n=null!=(r=U[t])?r:U[0];break;case"ArrowLeft":var l,i=U.indexOf(e.currentTarget)-1;n=null!=(l=U[i])?l:U[U.length-1]}null==(a=n)||a.focus()};return t.createElement("div",{className:(0,l.Z)("tabs-container",d)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},S.map((function(e){var a=e.value,n=e.label,i=e.attributes;return t.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return U.push(e)},onKeyDown:w,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===a})}),null!=n?n:a)}))),i?(0,t.cloneElement)(N.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},N.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function s(e){var a=(0,i.Z)();return t.createElement(m,(0,r.Z)({key:String(a)},e))}},46704:function(e,a,n){n.r(a),n.d(a,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(83117),t=n(80102),l=(n(67294),n(3905)),i=n(65488),o=n(85162),p=["components"],c={sidebar_position:9,title:"Scala Provider"},d=void 0,u={unversionedId:"team-work/configuration/scala-providder",id:"team-work/configuration/scala-providder",title:"Scala Provider",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/configuration/scala-providder.mdx",sourceDirName:"team-work/configuration",slug:"/team-work/configuration/scala-providder",permalink:"/jimmer/zh/docs/team-work/configuration/scala-providder",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/configuration/scala-providder.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Scala Provider"},sidebar:"tutorialSidebar",previous:{title:"\u5fae\u670d\u52a1",permalink:"/jimmer/zh/docs/team-work/configuration/micro-service"},next:{title:"GraphQL\u7bc7",permalink:"/jimmer/zh/docs/team-work/graphql/"}},m={},s=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5168\u5c40\u7ea7ScalarProvider",id:"\u5168\u5c40\u7ea7scalarprovider",level:2},{value:"\u5b9a\u4e49ScalarProvider",id:"\u5b9a\u4e49scalarprovider",level:3},{value:"\u6ce8\u518cScalar Provider",id:"\u6ce8\u518cscalar-provider",level:3},{value:"\u5c5e\u6027\u7ea7ScalarProvider",id:"\u5c5e\u6027\u7ea7scalarprovider",level:2},{value:"\u975eSpring\u6ce8\u518c\u65b9\u5f0f",id:"\u975espring\u6ce8\u518c\u65b9\u5f0f",level:3},{value:"Spring\u6ce8\u518c\u65b9\u5f0f",id:"spring\u6ce8\u518c\u65b9\u5f0f",level:3}],v={toc:s};function k(e){var a=e.components,n=(0,t.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"\u5728\u524d\u9762\u7684\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u8fc7\u5982\u4f55",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/enum"},"\u6620\u5c04\u679a\u4e3e"),"\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@Serialized"),(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/json"},"\u6620\u5c04JSON"),"\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u6709\u7684\u65f6\u5019\uff0c\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5\u90fd\u65e0\u6cd5\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\uff0c\u8fd9\u662f\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u662fJimmer\u5173\u4e8e\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u6700\u5e95\u5c42\u7684SPI\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u4e4b\u524d\u6211\u4eec\u63a2\u8ba8\u8fc7\u7684",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/enum"},"Enum\u6620\u5c04"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/json"},"JSON\u6620\u5c04"),"\uff0c\u5176\u5b9e\u5c31\u662fJimmer\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u7684\u5185\u7f6e\u5b9e\u73b0\u3002")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4e3aSqlClient\u6ce8\u518c\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\uff0c\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u544a\u8bc9Jimmer\u5982\u4f55\u5904\u7406\u4e00\u79cd\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u5206\u4e3a\u4e24\u79cd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5168\u5c40\u7ea7"),(0,l.kt)("p",{parentName:"li"},"\u5b9a\u4e49Java/Kotlin\u7c7b\u578b\u548c\u6570\u636e\u5e93\u7c7b\u578b\u7684\u6620\u5c04\u89c4\u5219\u3002\u5168\u5c40\u7edf\u4e00\u3002\u4efb\u4f55\u5b9e\u4f53\u5b9a\u4e49\u8fd4\u56de\u8be5\u7c7b\u578b\u7684\u5c5e\u6027\u90fd\u4f1a\u88ab\u5168\u5c40",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u7edf\u4e00\u5904\u7406\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5168\u5c40\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u53ea\u80fd\u5904\u7406\u975e\u96c6\u5408\u7c7b\u578b\uff0c\u6bd4\u5982\uff0c\u7c7b\uff0c\u63a5\u53e3\uff0c\u679a\u4e3e\u3002\u4e0d\u80fd\u5904\u7406\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Array"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Collection"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),"\u7684\u96c6\u5408\u7c7b\u578b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c5e\u6027\u7ea7"),(0,l.kt)("p",{parentName:"li"},"\u5bf9\u67d0\u4e2a\u7279\u5b9a\u7684\u5b9e\u4f53\u5c5e\u6027\uff0c\u5b9a\u4e49Java/Kotlin\u7c7b\u578b\u548c\u6570\u636e\u5e93\u7c7b\u578b\u7684\u6620\u5c04\u89c4\u5219\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c5e\u6027\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u53ef\u4ee5\u5904\u7406\u4efb\u4f55\u975eJimmer\u5185\u7f6e\u7684\u7c7b\u578b\u3002\u5305\u62ec\u96c6\u5408\u7c7b\u578b\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"Array"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Collection"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u6620\u5c04\u7684\u5c5e\u6027\u7c7b\u578b\u662f\u96c6\u5408\u7c7b\u578b\uff0c\u8be5\u5c5e\u6027\u9700\u8981\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.Scalar"),"\u4fee\u9970\u3002")))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/json"},"JSON\u6620\u5c04"),"\u4e00\u6587\u9610\u8ff0\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"@Serialized"),"\u6ce8\u89e3\u65e2\u53ef\u4ee5\u4fee\u9970\u5c5e\u6027\u8fd4\u56de\u7684\u7c7b\u578b\u4e5f\u53ef\u4ee5\u4fee\u9970\u5b9e\u4f53\u5c5e\u6027\uff0c\n\u5c31\u662f\u56e0\u4e3a\u66f4\u5e95\u5c42\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u6709\u4e24\u79cd\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u662fJimmer\u63d0\u4f9b\u7684\u4e00\u4e2aSPI\u63a5\u53e3\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ScalarProvider"',title:'"ScalarProvider"'},"package org.babyfish.jimmer.sql.runtime;\n\nimport java.util.function.Consumer;\n\npublic abstract class ScalarProvider<T \u2776, S \u2777> {\n\n    protected ScalarProvider(Class<T> scalarType, Class<S> sqlType) { \u2778\n        ...\u7701\u7565\u4ee3\u7801...\n    }\n\n    protected ScalarProvider() { \u2779\n        ...\u7701\u7565\u4ee3\u7801...\n    }\n\n    public abstract T toScalar(S sqlValue); \u277a\n\n    public abstract S toSql(T scalarValue); \u277b\n\n    public Collection<ImmutableProp> getHandledProps() { \u277c\n        return null;\n    }\n }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 \u8303\u578b\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"T"),": Java/Kotlin\u4e2d\u6570\u636e\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 \u8303\u578b\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"S"),": \u6570\u636e\u5e93\u4e2d\u6570\u636e\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 \u660e\u786e\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"\u6240\u4ee3\u8868\u7c7b\u578b\u7684\u6784\u9020\u51fd\u6570"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u901a\u7528\u6027\u548c\u53ef\u590d\u7528\u6027\u8f83\u5f3a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2779 \u65e0\u9700\u660e\u786e\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"\u6240\u4ee3\u8868\u7c7b\u578b\u7684\u6784\u9020\u51fd\u6570"),(0,l.kt)("p",{parentName:"li"},"\u8981\u6c42\u6d3e\u751f\u7c7b\u660e\u786e\u6307\u5b9a\u8303\u578b\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"\uff0c\u8ba9Jimmer\u53ef\u4ee5\u81ea\u52a8\u5206\u6790\u51fa",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"\u6240\u4ee3\u8868\u7c7b\u578b\u3002\u5426\u5219\uff0c\u4f1a\u5f02\u5e38"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u7279\u5b9a\u7c7b\u578b\u6240\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\uff0c\u4e0d\u8981\u6c42\u901a\u7528\u6027\u548c\u53ef\u590d\u7528\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u277a \u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"toScalar"),": \u628a\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u5230\u7684\u975enull\u6570\u636e\u8f6c\u6362\u4e3aJava\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u277b \u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"toSql"),": \u628aJava\u7684\u975enull\u6570\u636e\u8f6c\u6362\u4e3a\u6570\u636e\u5e93\u53ef\u63a5\u53d7\u7684\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u277c \u5982\u679c\u8981\u5b9a\u4e49\u5c5e\u6027\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\uff0c\u6709\u4e00\u79cd\u9009\u62e9 ",(0,l.kt)("em",{parentName:"p"},"(\u4e5f\u6709\u5176\u4ed6\u9009\u62e9)")," \u662f\u5728\u6d3e\u751f\u7c7b\u4e2d\u8986\u76d6\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"getHandledProps"),"\u3002"))),(0,l.kt)("h2",{id:"\u5168\u5c40\u7ea7scalarprovider"},"\u5168\u5c40\u7ea7ScalarProvider"),(0,l.kt)("p",null,"\u4f8b\u5982\u5f53\u524d\u6570\u636e\u5e93\u4e0d\u652f\u6301UUID\u7c7b\u578b\uff0c\u53ef\u4ee5\u5982\u6b64\u5904\u7406"),(0,l.kt)("h3",{id:"\u5b9a\u4e49scalarprovider"},"\u5b9a\u4e49ScalarProvider"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UUIDScalarProvider.java"',title:'"UUIDScalarProvider.java"'},"public class UUIDScalarProvider extends ScalarProvider<UUID, String> {\n\n    @Override\n    public UUID toScalar(String sqlValue) {\n        return UUID.fromString(sqlValue);\n    }\n\n    @Override\n    public String toSql(UUID scalarValue) {\n        return scalarValue.toString();\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="UUIDScalarProvider.kt"',title:'"UUIDScalarProvider.kt"'},"class UUIDScalarProvider : ScalarProvider<UUID, String> {\n\n    override fun toScalar(sqlValue: Strng): UUID =\n        UUID.fromString(sqlValue)\n\n    override fun toSql(scalarValue: UUID): String =\n        scalarValue.toString()\n}\n")))),(0,l.kt)("h3",{id:"\u6ce8\u518cscalar-provider"},"\u6ce8\u518cScalar Provider"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u60f3Jimmer\u6ce8\u518c",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Jimmer\u7684Spring Boot Starter\u65f6"),(0,l.kt)("p",{parentName:"li"},"\u8ba9",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u7684\u5404\u6d3e\u751f\u7c7b\u88abSpring\u6258\u7ba1\u5373\u53ef\u3002\u6709\u4e24\u79cd\u9009\u62e9\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"UUIDScalarProvider"),"\u7c7b\uff0c\u7528spring\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Component"),"\u4fee\u9970"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UUIDScalarProvider.java"',title:'"UUIDScalarProvider.java"'},"// highlight-next-line\n@Component\npublic class UUIDScalarProvider extends ScalarProvider<UUID, String> {\n    \n    ...\u7701\u7565\u4ee3\u7801...\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="UUIDScalarProvider.kt"',title:'"UUIDScalarProvider.kt"'},"// highlight-next-line\n@Component\nclass UUIDScalarProvider : ScalarProvider<UUID, String> {\n\n    ...\u7701\u7565\u4ee3\u7801...\n}\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7528Spring\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Bean"),"\u65b9\u6cd5\uff0c\u5411Spring\u6ce8\u518cUUIDScalaProvider\u5bf9\u8c61"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@Bean\npublic UUIDScalarProvider uuidScalarProvider() {\n    return new UUIDScalarProvider();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@Bean\nfun uuidScalarProvider(): UUIDScalarProvider =\n    UnitTestIdGenerator()\n"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528Spring Boot Starter\u65f6"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addScalarProvider(new UUIDScalarProvider())\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun sqlClient() : KSqlClient = \n    newKSqlClient {\n        // highlight-next-line\n        addScalarProvider(UUIDScalarProvider())\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))))),(0,l.kt)("h2",{id:"\u5c5e\u6027\u7ea7scalarprovider"},"\u5c5e\u6027\u7ea7ScalarProvider"),(0,l.kt)("p",null,"\u5c5e\u6027\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u76f8\u6bd4\u4e8e\u5168\u5c40\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u7684\u552f\u4e00\u533a\u522b\u662f\uff0c\u5b83\u9002\u7528\u4e8e\u7279\u5b9a\u5c5e\u6027\uff0c\u800c\u975e\u6240\u6709\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u5c5e\u6027\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u4e2d\u6700\u91cd\u8981\u7684\u6570\u636e\u8f6c\u5316\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"toScalar"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"toSql"),"\u7684\u7528\u6237\u4ee3\u7801\u5b9e\u73b0\u65b9\u6cd5\u5b8c\u5168\u4e00\u6837\uff0c\u53ea\u662f\u6ce8\u518c\u65b9\u5f0f\u4e0d\u540c\u800c\u5df2\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u8fd9\u91cc\u6211\u4eec\u5047\u8bbe\u6709\u4e00\u4e2a\u7528\u6237\u81ea\u5b9a\u4e49\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"Location"),"\uff0c\u5176\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u5b9e\u73b0\u7c7b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"LocationScalarProvider"),"\uff0c\u65e0\u9700\u7ed9\u51fa\u5177\u4f53\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u975espring\u6ce8\u518c\u65b9\u5f0f"},"\u975eSpring\u6ce8\u518c\u65b9\u5f0f"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        .addScalarProvider(\n            // highlight-next-line\n            FlightProps.SOURCE_LOCATION\n            new LocationScalarProvider()\n        )\n        .addScalarProvider(\n            // highlight-next-line\n            FlightProps.TARGET_LOCATION\n            new LocationScalarProvider()\n        )\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun sqlClient() : KSqlClient = \n    newKSqlClient {\n        addScalarProvider(\n            // highlight-next-line\n            Flight::sourceLocation\n            new LocationScalarProvider()\n        )\n        addScalarProvider(\n            // highlight-next-line\n            Flight::targetLocation\n            new LocationScalarProvider()\n        )\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))),(0,l.kt)("p",null,"\u5373\uff0c\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"Flight.sourceLocation"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Flight.targetLocation"),"\u5916\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"LocationScalarProvider"),"\u4e0d\u5f71\u54cd\u5176\u4ed6\u4efb\u4f55\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Location"),"\u7684\u5c5e\u6027"),(0,l.kt)("h3",{id:"spring\u6ce8\u518c\u65b9\u5f0f"},"Spring\u6ce8\u518c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u65b9\u5f0f\u5f88\u76f4\u89c2\uff0c\u4f46\u662f\u662f\u624b\u52a8\u6ce8\u518c\u7684\uff0cSpring\u81ea\u52a8\u8fd9\u518c\u7684\u65b9\u5f0f\u53ef\u4ee5\u7528\u4e8e\u6ce8\u518c\u5c5e\u6027\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u5417\uff1f"),(0,l.kt)("p",null,"\u5f53\u7136\u3002\u53ea\u9700\u8981\u8986\u76d6",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u7684\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"getHandledProps"),"\uff0c\u5c31\u53ef\u4ee5\u7528\u6ce8\u518c\u5168\u5c40\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u7684\u65b9\u6cd5\u6ce8\u518c\u5c5e\u6027\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarProvider"),"\u3002\u4f8b\u5982\u5f53\u524d\u6570\u636e\u5e93\u4e0d\u652f\u6301UUID\u7c7b\u578b\uff0c\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="LocationScalarProvider.java"',title:'"LocationScalarProvider.java"'},"@Component\npublic class LocationScalarProvider extends ScalarProvider<Location, String> {\n    \n    @Override\n    // highlight-next-line\n    public Collection<ImmutableProp> getHandledProps() {\n        return Arrays.asList(\n            FlightProps.SOURCE_LOCATION, \n            FlightProps.TARGET_LOCATION\n        );\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="LocationScalarProvider.kt"',title:'"LocationScalarProvider.kt"'},"@Component\nclass LocationScalarProvider : ScalarProvider<Location, String> {\n\n    // highlight-next-line\n    override fun getHandledProps(): Collection<ImmutableProp> =\n        listOf(\n            Flight::sourceLocation.toImmutableProp(),\n            Flight::targetLocation.toImmutableProp()\n        )\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))))}k.isMDXComponent=!0}}]);