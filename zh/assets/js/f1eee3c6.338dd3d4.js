"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9829],{85162:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(67294),r=a(34334),i="tabItem_Ymn6";function l(e){var n=e.children,a=e.hidden,l=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},n)}},65488:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(83117),r=a(67294),i=a(34334),l=a(72389),o=a(67392),c=a(7094),p=a(12466),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,a,l=e.lazy,m=e.block,s=e.defaultValue,h=e.values,b=e.groupId,k=e.className,C=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:C.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,o.l)(f,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(n=null!=s?s:null==(a=C.find((function(e){return e.props.default})))?void 0:a.props.value)?n:C[0].props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.U)(),v=y.tabGroupChoices,T=y.setTabGroupChoices,j=(0,r.useState)(g),B=j[0],I=j[1],w=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var F=v[b];null!=F&&F!==B&&f.some((function(e){return e.value===F}))&&I(F)}var R=function(e){var n=e.currentTarget,a=w.indexOf(n),t=f[a].value;t!==B&&(x(n),I(t),null!=b&&T(b,String(t)))},S=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,r=w.indexOf(e.currentTarget)+1;a=null!=(t=w[r])?t:w[0];break;case"ArrowLeft":var i,l=w.indexOf(e.currentTarget)-1;a=null!=(i=w[l])?i:w[w.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},f.map((function(e){var n=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:B===n?0:-1,"aria-selected":B===n,key:n,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:R,onClick:R},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":B===n})}),null!=a?a:n)}))),l?(0,r.cloneElement)(C.filter((function(e){return e.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},C.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==B})}))))}function s(e){var n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},39511:function(e,n,a){a.d(n,{b:function(){return k}});var t=a(83117),r=a(11057),i=a(78262),l=a(42293),o=a(10155),c=a(15861),p=a(9581),u=a(67294),d=a(54776),m=a(93946),s=a(9137),h=a(61274),b=a(50594),k=(0,u.memo)((function(e){var n=e.buttonText,a=e.fullScreen,t=void 0!==a&&a,d=e.title,k=void 0===d?n:d,f=e.children,N=(0,u.useState)(!1),g=N[0],y=N[1],v=(0,u.useState)(t),T=v[0],j=v[1],B=(0,u.useCallback)((function(){y(!0)}),[]),I=(0,u.useCallback)((function(){y(!1)}),[]),w=(0,u.useCallback)((function(){j((function(e){return!e}))}),[]);return u.createElement(u.Fragment,null,u.createElement(r.Z,{onClick:B,variant:"contained"},n),u.createElement(i.Z,{open:g,onClose:I,fullScreen:T,TransitionComponent:C,maxWidth:"md"},u.createElement(l.Z,{sx:{position:"relative"}},u.createElement(o.Z,null,u.createElement(c.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},k),u.createElement(m.Z,{onClick:w,style:{color:"white"}},T?u.createElement(h.Z,null):u.createElement(s.Z,null)),u.createElement(m.Z,{"aria-label":"close",onClick:I,style:{color:"white"}},u.createElement(b.Z,null)))),u.createElement(p.Z,null,f)))})),C=u.forwardRef((function(e,n){return u.createElement(d.Z,(0,t.Z)({direction:"up",ref:n},e))}))},61943:function(e,n,a){a.r(n),a.d(n,{assets:function(){return k},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return C}});var t=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(65488),o=a(85162),c=a(39511),p=a.p+"assets/images/object-cache-4a9d5b4cb61322890552a5508785c18c.jpeg",u=a.p+"assets/images/association-cache-a56183bba7a369821e88cbfb277c9464.png",d=a.p+"assets/images/calculated-cache-fed29948e1b2f8fb93bf45851e5668b3.png",m=["components"],s={sidebar_position:1,title:"\u542f\u7528\u7f13\u5b58"},h=void 0,b={unversionedId:"team-work/cache/enable-cache",id:"team-work/cache/enable-cache",title:"\u542f\u7528\u7f13\u5b58",description:"CacheFactory\u63a5\u53e3",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/cache/enable-cache.mdx",sourceDirName:"team-work/cache",slug:"/team-work/cache/enable-cache",permalink:"/jimmer/zh/docs/team-work/cache/enable-cache",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/cache/enable-cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u542f\u7528\u7f13\u5b58"},sidebar:"tutorialSidebar",previous:{title:"\u7f13\u5b58\u7bc7",permalink:"/jimmer/zh/docs/team-work/cache/"},next:{title:"\u7f13\u5b58\u7c7b\u578b",permalink:"/jimmer/zh/docs/team-work/cache/cache-type/"}},k={},C=[{value:"CacheFactory\u63a5\u53e3",id:"cachefactory\u63a5\u53e3",level:2},{value:"\u591a\u7ea7\u7f13\u5b58\u67b6\u6784",id:"\u591a\u7ea7\u7f13\u5b58\u67b6\u6784",level:2},{value:"\u914d\u7f6e<code>CacheFactory</code>",id:"\u914d\u7f6ecachefactory",level:2},{value:"SpringBoot\u914d\u7f6e",id:"springboot\u914d\u7f6e",level:3},{value:"\u975eSpringBoot\u914d\u7f6e",id:"\u975espringboot\u914d\u7f6e",level:3},{value:"Redis\u7f13\u5b58\u8f85\u52a9API",id:"redis\u7f13\u5b58\u8f85\u52a9api",level:2}],f={toc:C};function N(e){var n=e.components,a=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cachefactory\u63a5\u53e3"},"CacheFactory\u63a5\u53e3"),(0,i.kt)("p",null,"\u8981\u542f\u7528\u7f13\u5b58\uff0c\u9996\u5148\u9700\u8981\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"CacheFactory"),"\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u5b9a\u4e49\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CacheFactory.java"',title:'"CacheFactory.java"'},"package org.babyfish.jimmer.sql.cache;\n\nimport org.babyfish.jimmer.meta.ImmutableProp;\nimport org.babyfish.jimmer.meta.ImmutableType;\nimport org.jetbrains.annotations.NotNull;\nimport org.jetbrains.annotations.Nullable;\n\nimport java.util.List;\n\npublic interface CacheFactory {\n\n    @Nullable\n    default Cache<?, ?> createObjectCache(@NotNull ImmutableType type) {\n        return null;\n    }\n\n    @Nullable\n    default Cache<?, ?> createAssociatedIdCache(@NotNull ImmutableProp prop) {\n        return null;\n    }\n\n    @Nullable\n    default Cache<?, List<?>> createAssociatedIdListCache(@NotNull ImmutableProp prop) {\n        return null;\n    }\n\n    @Nullable\n    default Cache<?, ?> createResolverCache(@NotNull ImmutableProp prop) {\n        return null;\n    }\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8eKotin\u800c\u8a00\uff0c\u4e3a\u4e86\u5728\u8986\u76d6",(0,i.kt)("inlineCode",{parentName:"p"},"createAssociatedIdListCache"),"\u65f6\u8ba9IDE\u751f\u6210\u66f4\u597d\u7684\u4ee3\u7801\uff0c\u8bf7\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.kt.cache.KCacheFactory"),"\u63a5\u53e3\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5426\u5219\uff0cIDE\u751f\u6210\u7684override\u65b9\u6cd5\u4ee3\u7801\u65f6\uff0c\u8fd4\u56de\u7c7b\u578b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Cache<*, MutableList<*>>"),"\uff0c\u800c\u975e\u671f\u671b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Cache<*, List<*>>"))),(0,i.kt)("p",null,"Jimmer\u8c03\u7528\u6b64\u63a5\u53e3\u521d\u59cb\u5316\u7f13\u5b58\u7cfb\u7edf\uff0c\u7528\u6237\u5b9e\u73b0\u6b64\u63a5\u53e3\u56de\u7b54\u95ee\u9898"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"createObjectCache\uff1a\u542f\u7528\u5bf9\u8c61\u7f13\u5b58"),(0,i.kt)("p",{parentName:"li"},"\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff0c\u5982\u679c\u60f3\u8ba9\u5b83\u652f\u6301\u5bf9\u8c61\u7f13\u5b58\uff0c\u5c31\u521b\u5efa\u7f13\u5b58\u5e76\u8fd4\u56de\uff1b\u5426\u5219\uff0c\u8fd4\u56denull\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6240\u8c13",(0,i.kt)(c.b,{buttonText:"\u5bf9\u8c61\u7f13\u5b58",mdxType:"ViewMore"},(0,i.kt)("img",{src:p})),"\uff0c\u6307\u628aid\u6620\u5c04\u4e3a\u5b9e\u4f53\u5bf9\u8c61"),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u5b9e\u4f53\u5bf9\u8c61\u662f\u5b64\u5355\u7684\uff0c\u9664\u4e86\u5f53\u524d\u8868\u81ea\u8eab\u7684\u5916\u952e\u6240\u5bf9\u5e94\u7684\u591a\u5bf9\u4e00 ",(0,i.kt)("em",{parentName:"p"},"(\u6216\u4e00\u5bf9\u4e00)")," \u5173\u8054\u8868\u73b0\u4e3a\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\u5916\uff0c\u6ca1\u6709\u5176\u4ed6\u5173\u8054\u5c5e\u6027\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"createAssociatedIdCache\u548ccreateAssociatedIdListCache\uff1a\u542f\u7528\u5173\u8054\u7f13\u5b58"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"createAssociatedIdCache"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"createAssociatedIdListCache"),"\u90fd\u7528\u4e8e\u542f\u7528\u5173\u8054\u7f13\u5b58\u3002\u4e8c\u8005\u552f\u4e00\u7684\u533a\u522b\u662f\uff0c\u524d\u8005\u9488\u5bf9\u4e00\u5bf9\u4e00\u6216\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u540e\u8005\u9488\u5bf9\u4e00\u5bf9\u591a\u6216\u591a\u5bf9\u591a\u5173\u8054\u3002"),(0,i.kt)("p",{parentName:"li"},"\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"../mapping/base/association"},"\u5173\u8054\u5c5e\u6027"),"\uff0c\u5982\u679c\u60f3\u8ba9\u5b83\u652f\u6301\u5173\u8054\u7f13\u5b58\uff0c\u5c31\u521b\u5efa\u7f13\u5b58\u5e76\u8fd4\u56de\uff1b\u5426\u5219\u8fd4\u56denull\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6240\u8c13",(0,i.kt)(c.b,{buttonText:"\u5173\u8054\u7f13\u5b58",mdxType:"ViewMore"},(0,i.kt)("img",{src:u})),"\uff0c\u6307\u628aid\u6620\u5c04\u4e3a\u5173\u8054id ",(0,i.kt)("em",{parentName:"p"},"(\u6216\u5176\u96c6\u5408)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"createResolverCache\uff1a\u542f\u7528\u8ba1\u7b97\u7f13\u5b58"),(0,i.kt)("p",{parentName:"li"},"\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"../mapping/advanced/calculated/transient"},"\u590d\u6742\u8ba1\u7b97\u5c5e\u6027"),"\uff0c\u5982\u679c\u60f3\u8ba9\u5b83\u652f\u6301\u8ba1\u7b97\u5c5e\u6027\uff0c\u5c31\u521b\u5efa\u7f13\u5b58\u5e76\u8fd4\u56de\uff1b\u5426\u5219\uff0c\u8fd4\u56denull\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6240\u8c13",(0,i.kt)(c.b,{buttonText:"\u8ba1\u7b97\u7f13\u5b58",mdxType:"ViewMore"},(0,i.kt)("img",{src:d})),"\u7f13\u5b58\uff0c\u6307\u628aid\u6620\u5c04\u4e3a\u8ba1\u7b97\u7ed3\u679c"))),(0,i.kt)("h2",{id:"\u591a\u7ea7\u7f13\u5b58\u67b6\u6784"},"\u591a\u7ea7\u7f13\u5b58\u67b6\u6784"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CacheFactory"),"\u63a5\u53e3\u7684\u6240\u6709\u65b9\u6cd5\u7684\u8fd4\u56de\u7c7b\u578b\u90fd\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.cache.Cache<K, V>"),"\u3002"),(0,i.kt)("p",null,"\u7528\u6237\u65e0\u9700\u76f4\u63a5\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"Cache<K, V>"),"\uff0c\u800c\u9700\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.cache.chain.ChainCacheBuilder"),"\u6765\u6784\u5efa\u591a\u7ea7\u522b\u7f13\u5b58\u3002"),(0,i.kt)("p",null,"\u4ece\u7406\u8bba\u4e0a\u8bb2\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ChainCacheBuilder"),"\u652f\u6301\u4efb\u610f\u7ea7\u7f13\u5b58\u3002\u7136\u800c\uff0c\u5927\u90e8\u5206\u9879\u76ee\u4e2d\uff0c\u4e24\u7ea7\u7f13\u5b58\u5df2\u7ecf\u8db3\u591f\u4e86\uff0c\u4f8b\u5982"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"return new CacheFactory() {\n\n    @Override\n    @Nullable\n    public Cache<?, ?> createObjectCache(@NotNull ImmutableType type) {\n        return new ChainCacheBuilder<>()\n            .add( \u2776\n                new CaffeineBinder<>(512, Duration.ofSeconds(1))\n            )\n            .add( \u2777\n                new RedisValueBinder<>(\n                    redisTemplate, \n                    objectMapper, \n                    type, \n                    Duration.ofMinutes(10)\n                )\n            )\n            .build();\n    }\n};\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"return object: KCacheFactory {\n\n    override fun createObjectCache(type: ImmutableType): Cache<*, *>? =\n        ChainCacheBuilder<Any, Any>()\n            .add( \u2776\n                CaffeineBinder(512, Duration.ofSeconds(1))\n            )\n            .add( \u2777\n                RedisValueBinder(\n                    redisTemplate, \n                    objectMapper, \n                    type, \n                    Duration.ofMinutes(10)\n                )\n            )\n            .build()\n}\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 \u8868\u793a\u4e00\u7ea7\u7f13\u5b58\uff0c\u57fa\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-manes/caffeine"},"Caffeine"),"\u7684\u8fdb\u7a0b\u5185JVM\u7f13\u5b58")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 \u8868\u793a\u4e8c\u7ea7\u7f13\u5b58\uff0c\u57fa\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis"),"\u7684\u5206\u8fdc\u7a0b\u5185\u90e8\u7f13\u5b58\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u6211\u4eec\u6240\u89c1\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ChainCacheBuilder"),"\u91c7\u7528\u94fe\u5f0f\u7f16\u7a0b\u98ce\u683c\uff0c\u591a\u6b21\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"add"),"\u65b9\u6cd5\u5c31\u53ef\u4ee5\u6784\u5efa\u591a\u7ea7\u7f13\u5b58\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ChainCacheBuilder.add"),"\u65b9\u6cd5\u7684\u5b9a\u4e49\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ChainCacheBuilder<K, V> {\n    \n    public ChainCacheBuilder<K, V> add(LoadingBinder<K, V> binder) { \u2776\n        ...\u7701\u7565\u4ee3\u7801...\n        return this;\n    }\n\n    public ChainCacheBuilder<K, V> add(LoadingBinder.Parameterized<K, V> binder) { \u2777\n        ...\u7701\u7565\u4ee3\u7801...\n        return this;\n    }\n\n    public ChainCacheBuilder<K, V> add(SimpleBinder<K, V> binder) { \u2778\n        ...\u7701\u7565\u4ee3\u7801...\n        return this;\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.cache.chain.LoadingBinder"),"\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u4efb\u4f55\u9996\u6b21\u8bbf\u95ee\u67d0\u4e2a\u952e\u65f6\u4f1a\u81ea\u52a8\u52a0\u8f7d\u503c\u7684\u7f13\u5b58\u6280\u672f\u90fd\u53ef\u4ee5\u901a\u8fc7\u8be5\u63a5\u53e3\u9002\u914d\u3002"),(0,i.kt)("p",{parentName:"li"},"\u51e0\u4e4e\u8fdb\u7a0b\u5185\u7684JVM\u7f13\u5b58\uff0c\u90fd\u5177\u5907\u81ea\u52a8\u52a0\u8f7d\u80fd\u529b\u3002\u6bd4\u5982\u4e0a\u6587\u4ee3\u7801\u4e2d\u6240\u7528\u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-manes/caffeine"},"Caffeine"),"\u6216Guava Cache\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 \u5904\u4ee3\u7801\u4ec5\u88ab",(0,i.kt)("a",{parentName:"p",href:"./multiview-cache"},"\u591a\u89c6\u89d2\u7f13\u5b58"),"\u4f7f\u7528\uff0c\u8bfb\u8005\u53ef\u4ee5\u5148\u884c\u5ffd\u7565")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2778 ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.cache.chain.SimpleBinder"),"\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u4efb\u4f55\u4e0d\u5177\u5907\u81ea\u52a8\u52a0\u8f7d\u503c\u884c\u4e3a\u7684\u7f13\u5b58\u6280\u672f\u90fd\u53ef\u4ee5\u901a\u8fc7\u8be5\u63a5\u53e3\u9002\u914d\u3002"),(0,i.kt)("p",{parentName:"li"},"\u51e0\u4e4e\u6240\u6709\u8fdc\u7a0b\u7f13\u5b58\uff0c\u90fd\u4e0d\u5177\u5907\u81ea\u52a8\u52a0\u8f7d\u80fd\u529b\u3002\u6bd4\u5982\u4e0a\u6587\u4ee3\u7801\u4e2d\u6240\u7528\u7684",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis"),"\u3002"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u4efb\u4f55\u7f13\u5b58\u6280\u672f\u90fd\u53ef\u4ee5\u88ab\u9002\u914d\u6210\u62bd\u8c61\u63a5\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"LoadingBinder"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleBinder"),"\uff0c\u6240\u4ee5\uff0c\u5728Jimmer\u7684\u591a\u7ea7\u7f13\u5b58\u67b6\u6784\u4e2d\uff0c\u4efb\u4f55\u4e00\u7ea7\u90fd\u4e0d\u4f1a\u5bf9\u7f13\u5b58\u7684\u6280\u672f\u9009\u578b\u505a\u51fa\u4efb\u4f55\u5047\u8bbe\u6216\u9650\u5236\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u91c7\u7528Jimmer\u7684SpringBoot Starter\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4e09\u4e2a\u7f13\u5b58\u6280\u672f\u9002\u914d\u7c7b\uff0c\u5982\u540c\u4e0a\u6587\u4ee3\u7801\u4e2d\u90a3\u6837"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u9002\u914d\u7c7b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5b9e\u73b0\u63a5\u53e3"),(0,i.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u591a\u89c6\u89d2\u7f13\u5b58"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"org.babyfish.jimmer.spring.cache.CaffeineBinder"),(0,i.kt)("td",{parentName:"tr",align:null},"org.babyfish.jimmer.sql.cache.chain.LoadingBinder"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"org.babyfish.jimmer.spring.cache.RedisValueBinder"),(0,i.kt)("td",{parentName:"tr",align:null},"org.babyfish.jimmer.sql.cache.chain.SimpleBinder"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"org.babyfish.jimmer.spring.cache.RedisHashBinder"),(0,i.kt)("td",{parentName:"tr",align:null},"org.babyfish.jimmer.sql.cache.chain.SimpleBinder.Parameterized"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"./multiview-cache"},"\u591a\u89c6\u89d2\u7f13\u5b58"),"\u4f1a\u5728\u540e\u7eed\u6587\u7ae0\u4e2d\u9610\u8ff0\uff0c\u8fd9\u91cc\u8bf7\u8bfb\u8005\u5148\u5ffd\u7565\u4e4b\u3002")),(0,i.kt)("h2",{id:"\u914d\u7f6ecachefactory"},"\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"h2"},"CacheFactory")),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5df2\u7ecf\u4ecb\u7ecd\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"CacheFactory"),"\u63a5\u53e3\u548c\u591a\u7ea7\u7f13\u5b58\u67b6\u6784\uff0c\u4f46\u79bb\u542f\u7528\u7f13\u5b58\u8fd8\u5dee\u6700\u540e\u4e00\u6b65\u3002"),(0,i.kt)("p",null,"\u6700\u540e\u4e00\u6b65\uff0c\u4e3aJimmer\u628a\u6ce8\u518c",(0,i.kt)("inlineCode",{parentName:"p"},"CacheFactory"),"\u3002"),(0,i.kt)("h3",{id:"springboot\u914d\u7f6e"},"SpringBoot\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528Jimmer\u7684SpringBoot Starter\uff0c\u8ba9",(0,i.kt)("inlineCode",{parentName:"p"},"CacheFactory"),"\u6536\u5230Spring\u7684\u6258\u7ba1\u5373\u53ef\u3002"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@Bean\npublic CacheFactory cacheFactory() {\n    return new CacheFactory() {\n        ...\u7701\u7565\u4ee3\u7801...\n    };\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@Bean\nfun cacheFactory(): KCacheFactory =\n    object: KCacheFactory {\n        ...\u7701\u7565\u4ee3\u7801...\n    }\n")))),(0,i.kt)("h3",{id:"\u975espringboot\u914d\u7f6e"},"\u975eSpringBoot\u914d\u7f6e"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setCacheFactory(\n        new CacheFactory() {\n                ...\u7701\u7565\u4ee3\u7801...\n        }\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setCacheFactory(\n        object: KCacheFactory {\n            ...\u7701\u7565\u4ee3\u7801...\n        }\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))),(0,i.kt)("h2",{id:"redis\u7f13\u5b58\u8f85\u52a9api"},"Redis\u7f13\u5b58\u8f85\u52a9API"),(0,i.kt)("p",null,"\u524d\u9762\u6211\u4eec\u63d0\u5230\u4e86\uff0c\u5982\u679c\u91c7\u7528Jimmer\u7684SpringBoot Starter\uff0c\u5219\u53ef\u4ee5\u7528\u73b0\u6210\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.spring.cache.RedisValueBinder"),"\uff0c\u65e0\u9700\u81ea\u5df1\u53bb\u9002\u914dRedis\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"RedisHashBinder"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"./multiview-cache"},"\u591a\u89c6\u89d2\u7f13\u5b58"),"\u76f8\u5173\uff0c\u672c\u6587\u4e0d\u8ba8\u8bba\u3002")),(0,i.kt)("p",null,"\u8981\u6784\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"RedisValueBinder"),"\uff0c\u9700\u8981\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/redis/docs/current/api/org/springframework/data/redis/core/RedisOperations.html"},"RedisOptions<String, byte[]>"),"\u3002"),(0,i.kt)("p",null,"Jimmer\u7684SpringBoot Stater\u63d0\u4f9b",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.spring.cache.RedisCaches"),"\u7c7b\uff0c\u5176\u9759\u6001\u65b9\u6cd5",(0,i.kt)("inlineCode",{parentName:"p"},"RedisCaches.cacheRedisTemplate"),"\u53ef\u5feb\u901f\u6784\u5efa\u8fd9\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/redis/docs/current/api/org/springframework/data/redis/core/RedisOperations.html"},"RedisOptions<String, byte[]>"),"\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u8f85\u52a9\u65b9\u6cd5",(0,i.kt)("inlineCode",{parentName:"p"},"RedisCaches.cacheRedisTemplate"),"\u7684\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic CacheFactory cacheFactory(\n    // highlight-next-line\n    RedisConnectionFactory connectionFactory,\n    ObjectMapper objectMapper\n) {\n\n    RedisTemplate<String, byte[]> redisTemplate = \n        // highlight-next-line\n        RedisCaches.cacheRedisTemplate(connectionFactory);\n\n    return new CacheFactory() {\n\n        @Override\n        @Nullable\n        public Cache<?, ?> createObjectCache(@NotNull ImmutableType type) {\n            return new ChainCacheBuilder<>()\n                .add(\n                    new CaffeineBinder<>(512, Duration.ofSeconds(1))\n                )\n                .add(\n                    new RedisValueBinder<>(\n                        // highlight-next-line\n                        redisTemplate, \n                        objectMapper, \n                        type, \n                        Duration.ofMinutes(30)\n                    )\n                )\n                .build();\n        }\n\n        @Override\n        @Nullable\n        public Cache<?, ?> createAssociatedIdCache(@NotNull ImmutableProp prop) {\n            return createPropCache(prop, Duration.ofMinutes(10));\n        }\n\n        @Override\n        @Nullable\n        public Cache<?, List<?>> createAssociatedIdListCache(@NotNull ImmutableProp prop) {\n            return createPropCache(prop, Duration.ofMinutes(5));\n        }\n\n        @Override\n        @Nullable\n        public Cache<?, ?> createResolverCache(@NotNull ImmutableProp prop) {\n            return createPropCache(prop, Duration.ofMinutes(5));\n        }\n\n        private Cache<?, ?> createPropCache(ImmutableProp prop, Duration duration) {\n            return new ChainCacheBuilder<>()\n                .add(\n                    new CaffeineBinder<>(512, Duration.ofSeconds(1))\n                )\n                .add(\n                    new RedisValueBinder<>(\n                        // highlight-next-line\n                        redisTemplate, \n                        objectMapper, \n                        prop, \n                        duration\n                    )\n                )\n                .build();\n        }\n    };\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun cacheFactory(\n    // highlight-next-line\n    connectionFactory: RedisConnectionFactory,\n    objectMapper: ObjectMapper\n): KCacheFactory {\n\n    // highlight-next-line\n    val redisTemplate = RedisCaches.cacheRedisTemplate(connectionFactory)\n\n    return object: KCacheFactory {\n\n        override fun createObjectCache(type: ImmutableType): Cache<*, *>? =\n            ChainCacheBuilder<Any, Any>()\n                .add(\n                    CaffeineBinder(512, Duration.ofSeconds(1))\n                )\n                .add(\n                    RedisValueBinder(\n                        // highlight-next-line\n                        redisTemplate, \n                        objectMapper, \n                        type, \n                        Duration.ofMinutes(30)\n                    )\n                )\n                .build()\n\n        override fun createAssociatedIdCache(prop: ImmutableProp): Cache<*, *>? =\n            createPropCache(prop, Duration.ofMinutes(10))\n\n        override fun createAssociatedIdListCache(prop: ImmutableProp): Cache<*, List<*>>? =\n            createPropCache(prop, Duration.ofMinutes(5))\n\n        override fun createResolverCache(prop: ImmutableProp): Cache<*, *>? =\n            createPropCache(prop, Duration.ofMinutes(5))\n\n        private fun createPropCache(type: ImmutableType, duration: Duration): Cache<*, *> =\n            ChainCacheBuilder<Any, Any>()\n                .add(\n                    CaffeineBinder(512, Duration.ofSeconds(1))\n                )\n                .add(\n                    RedisValueBinder(\n                        // highlight-next-line\n                        redisTemplate, \n                        objectMapper, \n                        prop, \n                        Duration.ofMinutes(10)\n                    )\n                )\n                .build()\n    }\n}\n")))))}N.isMDXComponent=!0}}]);