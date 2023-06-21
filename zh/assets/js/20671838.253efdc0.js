"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2735],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(34334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(83117),a=n(67294),i=n(34334),o=n(72389),l=n(67392),u=n(7094),s=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,g=e.values,f=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var S=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==S&&!h.some((function(e){return e.value===S})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+S+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),C=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(S),j=N[0],O=N[1],T=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=C[f];null!=E&&E!==j&&h.some((function(e){return e.value===E}))&&O(E)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==j&&(x(t),O(r),null!=f&&w(f,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var i,o=T.indexOf(e.currentTarget)-1;n=null!=(i=T[o])?i:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},50598:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(65488),l=n(85162),u=["components"],s={sidebar_position:1,title:"\u6574\u5408Spring\u4e8b\u52a1"},c=void 0,p={unversionedId:"team-work/spring/transaction",id:"team-work/spring/transaction",title:"\u6574\u5408Spring\u4e8b\u52a1",description:"\u548c\u5176\u4ed6\u65b9\u6848\u5bf9\u6bd4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/spring/transaction.mdx",sourceDirName:"team-work/spring",slug:"/team-work/spring/transaction",permalink:"/jimmer/zh/docs/team-work/spring/transaction",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/spring/transaction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6574\u5408Spring\u4e8b\u52a1"},sidebar:"tutorialSidebar",previous:{title:"Spring\u7bc7",permalink:"/jimmer/zh/docs/team-work/spring/"},next:{title:"Spring Data\u98ce\u683c",permalink:"/jimmer/zh/docs/team-work/spring/repository/"}},m={},d=[{value:"\u548c\u5176\u4ed6\u65b9\u6848\u5bf9\u6bd4",id:"\u548c\u5176\u4ed6\u65b9\u6848\u5bf9\u6bd4",level:2},{value:"\u6574\u5408Spring\u4e8b\u52a1",id:"\u6574\u5408spring\u4e8b\u52a1",level:2},{value:"\u4f7f\u7528Spring Boot starter",id:"\u4f7f\u7528spring-boot-starter",level:3},{value:"\u4e0d\u4f7f\u7528Spring Boot Starter",id:"\u4e0d\u4f7f\u7528spring-boot-starter",level:3}],g={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u548c\u5176\u4ed6\u65b9\u6848\u5bf9\u6bd4"},"\u548c\u5176\u4ed6\u65b9\u6848\u5bf9\u6bd4"),(0,i.kt)("p",null,"Jimmer\u91c7\u7528\u6781\u7b80\u8bbe\u8ba1\uff0c\u5176API\u603b\u5165\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"JSqlClient/KSqlClient"),"\u5bf9\u5916\u66b4\u9732\u7684API\u4e00\u5f8b\u91c7\u7528\u65e0\u72b6\u6001\u8bbe\u8ba1\u3002"),(0,i.kt)("p",null,"\u5f88\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6846\u67b6\u5bf9JDBC\u8fde\u63a5\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u6709\u72b6\u6001\u5305\u88c5\uff0c\u6bd4\u5982"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JPA\u7684",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html"},"EntityManager")),(0,i.kt)("li",{parentName:"ul"},"Hibernate\u7684",(0,i.kt)("a",{parentName:"li",href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/Session.html"},"Session")),(0,i.kt)("li",{parentName:"ul"},"MyBatis\u7684",(0,i.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html"},"SqlSession"),"\u3002")),(0,i.kt)("p",null,"\u5e76\u4e14\u5bf9\u6570\u636e\u5e93\u4e8b\u52a1\u4e5f\u6709\u6709\u72b6\u6001\u5c01\u88c5\uff0c\u6bd4\u5982"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JPA\u7684",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html#getTransaction--"},"EntityManager.getTransaction")),(0,i.kt)("li",{parentName:"ul"},"Hibernate\u7684",(0,i.kt)("a",{parentName:"li",href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/SharedSessionContract.html#getTransaction()"},"Session.getTransaction")),(0,i.kt)("li",{parentName:"ul"},"MyBatis\u7684",(0,i.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html#commit()"},"SqlSession.commit"))),(0,i.kt)("p",null,"Jimmer\u6ca1\u6709\u7c7b\u4f3c\u7684\u62bd\u8c61\uff0c\u5176API\u603b\u5165\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"JSqlClient/KSqlClient"),"\u5bf9\u5916\u66b4\u9732\u7684API\u4e00\u5f8b\u91c7\u7528\u65e0\u72b6\u6001\u8bbe\u8ba1\uff0cJDBC\u8fde\u63a5\u662fJimmer\u552f\u4e00\u7684\u5e95\u5c42\u4f9d\u8d56\u3002"),(0,i.kt)("p",null,"\u8fd9\u5bfc\u81f4Jimmer\u548cSpring\u4e8b\u52a1\u7684\u5bf9\u63a5\u975e\u5e38\u7b80\u5355\uff0c\u5373\u4f7fJimer\u672a\u63d0\u4f9bSpring Boot Starter\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u7528\u975e\u5e38\u7b80\u5355\u7684\u4ee3\u7801\u5c06\u4e4b\u548cSpring\u4e8b\u52a1\u673a\u5236\u5bf9\u63a5\u3002"),(0,i.kt)("h2",{id:"\u6574\u5408spring\u4e8b\u52a1"},"\u6574\u5408Spring\u4e8b\u52a1"),(0,i.kt)("h3",{id:"\u4f7f\u7528spring-boot-starter"},"\u4f7f\u7528Spring Boot starter"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\uff0c\u5219\u4e0d\u7528\u505a\u4efb\u4f55\u5de5\u4f5c\uff0cJimmer\u4f1a\u81ea\u52a8\u63a5\u5165Spring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"),(0,i.kt)("h3",{id:"\u4e0d\u4f7f\u7528spring-boot-starter"},"\u4e0d\u4f7f\u7528Spring Boot Starter"),(0,i.kt)("p",null,"\u5982\u679c\u4ec5\u4f7f\u7528Spring\uff0c\u5e76\u672aJimmer\u63d0\u4f9b\u7684Spring Boot Starter\u3002\u90a3\u4e48\u9700\u8981\u81ea\u5df1\u7f16\u7801\u5c06Jimmer\u63a5\u5165Spring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"),(0,i.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"JSqlClient/KSqlClient"),"\uff0c\u5e76\u8bbe\u7f6e\u5176",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u4e2d\uff0c\u5229\u7528Spring\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.jdbc.datasource.DataSourceUtils"),"\u6253\u5f00\u548c\u5173\u95ed\u8fde\u63a5\u3002"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Bean\npublic JSqlClient sqlClient(DataSource dataSource) {\n    return JSqlClient.newBuilder()\n        // highlight-next-line\n        .setConnectionManager(\n            new ConnectionManager() {\n                @Override\n                public <R> R execute(\n                    Function<Connection, R> block\n                ) {\n                    Connection con = DataSourceUtils\n                        // highlight-next-line\n                        .getConnection(dataSource);\n                    try {\n                        return block.apply(con);\n                    } finally {\n                        DataSourceUtils\n                            // highlight-next-line\n                            .releaseConnection(con, dataSource);\n                    }\n                }\n            }\n        )\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Bean\nfun sqlClient(dataSource: DataSource): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        setConnectionManager {\n            val con = DataSourceUtils\n                // highlight-next-line\n                .getConnection(dataSource)\n            try {\n                proceed(con)\n            } finally {\n                DataSourceUtils\n                    // highlight-next-line\n                    .releaseConnection(con, dataSource)\n            }\n        }\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u4f7f\u7528\u666e\u901a\u7684\u65b9\u6cd5\u4ece\u8fde\u63a5\u6c60\u501f\u7528\u548c\u5f52\u8fd8\u8fde\u63a5\uff0c\u4e00\u5b9a\u8981\u4f7f\u7528Spring\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.jdbc.datasource.DataSourceUtils"))))}f.isMDXComponent=!0}}]);