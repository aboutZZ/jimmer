"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5559],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(p,".").concat(f)]||s[f]||l[f]||a;return r?n.createElement(d,i(i({ref:e},m),{},{components:r})):n.createElement(d,i({ref:e},m))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},82445:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],u={sidebar_position:3,title:"Mutation"},p=void 0,c={unversionedId:"team-work/graphql/mutation",id:"team-work/graphql/mutation",title:"Mutation",description:"GraphQL\u7edd\u5927\u90e8\u5206\u7279\u65b0\u90fd\u662f\u9488\u5bf9Query\u800c\u975eMutation\u7684\uff0c\u8981\u5b9e\u73b0Mutation\u64cd\u4f5c\uff0c\u4f7f\u7528Spring GraphQL\u63d0\u4f9b\u7684@MutationMapping\u6ce8\u89e3\u5373\u53ef\uff0c\u8fd9\u5f88\u7b80\u5355\uff0c\u672c\u65e0\u9700\u9610\u8ff0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/graphql/mutation.mdx",sourceDirName:"team-work/graphql",slug:"/team-work/graphql/mutation",permalink:"/jimmer/zh/docs/team-work/graphql/mutation",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/graphql/mutation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Mutation"},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/jimmer/zh/docs/team-work/graphql/query"},next:{title:"\u5bf9\u8c61\u7bc7",permalink:"/jimmer/zh/docs/team-work/object/"}},m={},l=[],s={toc:l};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"\u7edd\u5927\u90e8\u5206\u7279\u65b0\u90fd\u662f\u9488\u5bf9Query\u800c\u975eMutation\u7684\uff0c\u8981\u5b9e\u73b0Mutation\u64cd\u4f5c\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@MutationMapping"),"\u6ce8\u89e3\u5373\u53ef\uff0c\u8fd9\u5f88\u7b80\u5355\uff0c\u672c\u65e0\u9700\u9610\u8ff0\u3002"),(0,a.kt)("p",null,"\u7136\u800c\uff0cJimmer\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u5bf9\u4fee\u6539\u64cd\u4f5c\u8fdb\u884c\u4e86\u5f3a\u5927\u7684\u652f\u6301\uff0c\u53ef\u4ee5\u5927\u5e45\u7b80\u5316GraphQL mutation\u64cd\u4f5c\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u91cd\u70b9\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u5b9e\u73b0GraphQL Mutation\uff0c\u81f3\u4e8e\u5176\u4ed6\u66f4\u7b80\u5355\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003\u5b98\u65b9\u793a\u4f8b\u3002")))}f.isMDXComponent=!0}}]);