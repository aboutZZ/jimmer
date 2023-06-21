"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1755],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,N=c["".concat(u,".").concat(d)]||c[d]||s[d]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),l=n(34334),r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),l=n(67294),r=n(34334),i=n(72389),o=n(67392),u=n(7094),p=n(12466),m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,d=e.defaultValue,N=e.values,k=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=N?N:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),T=y.tabGroupChoices,_=y.setTabGroupChoices,C=(0,l.useState)(g),S=C[0],A=C[1],j=[],E=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=T[k];null!=x&&x!==S&&b.some((function(e){return e.value===x}))&&A(x)}var L=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==S&&(E(t),A(a),null!=k&&_(k,String(a)))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=j.indexOf(e.currentTarget)+1;n=null!=(a=j[l])?a:j[0];break;case"ArrowLeft":var r,i=j.indexOf(e.currentTarget)-1;n=null!=(r=j[i])?r:j[j.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return j.push(e)},onKeyDown:w,onFocus:L,onClick:L},i,{className:(0,r.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},28017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(83117),l=n(80102),r=(n(67294),n(3905)),i=n(65488),o=n(85162),u=["components"],p={sidebar_position:1,title:"\u7b80\u5355\u8ba1\u7b97"},m=void 0,s={unversionedId:"tutorial/query/calc/formula",id:"tutorial/query/calc/formula",title:"\u7b80\u5355\u8ba1\u7b97",description:"\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u662f\u4f7f\u7528@org.babyfish.jimmer.sql.Formula\u58f0\u660e\u7684\u5c5e\u6027\uff0c\u6709\u4e24\u8005\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial/query/calc/formula.mdx",sourceDirName:"tutorial/query/calc",slug:"/tutorial/query/calc/formula",permalink:"/jimmer/zh/docs/tutorial/query/calc/formula",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/tutorial/query/calc/formula.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u7b80\u5355\u8ba1\u7b97"},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u5c5e\u6027",permalink:"/jimmer/zh/docs/tutorial/query/calc/"},next:{title:"Id\u89c6\u56fe",permalink:"/jimmer/zh/docs/tutorial/query/calc/idview"}},c={},d=[{value:"\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97",id:"\u57fa\u4e8ejavakotlin\u7684\u8ba1\u7b97",level:2},{value:"\u57fa\u4e8eSQL\u7684\u8ba1\u7b97",id:"\u57fa\u4e8esql\u7684\u8ba1\u7b97",level:2},{value:"\u548c\u57fa\u4e8eJava/Kotlin\u7684\u7b80\u5355\u8ba1\u7b97\u7684\u6bd4\u8f83\u3002",id:"\u548c\u57fa\u4e8ejavakotlin\u7684\u7b80\u5355\u8ba1\u7b97\u7684\u6bd4\u8f83",level:3}],N={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.Formula"),"\u58f0\u660e\u7684\u5c5e\u6027\uff0c\u6709\u4e24\u8005\u7528\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSQL\u7684\u8ba1\u7b97\u5c5e\u6027")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u4e3a\u5b9e\u73b0\u7b80\u5355\u800c\u5feb\u901f\u7684\u8ba1\u7b97\u800c\u8bbe\u8ba1\uff0c\u5982\u679c\u9700\u8981\u590d\u6742\u7684\u8ba1\u7b97\uff0c\u8bf7\u91c7\u7528",(0,r.kt)("a",{parentName:"p",href:"./transient"},"\u590d\u6742\u8ba1\u7b97"))),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"../../prepare/entity"},"\u5b9a\u4e49\u5b9e\u4f53"),"\u4e00\u6587\u4e2d\uff0c\u6211\u4eec\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Author"),"\u5b9a\u4e49\u4e86\u4e24\u4e2a\u5b57\u6bb5\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Author"),"\u6dfb\u52a0\u4e00\u4e2a\u53eb\u65b0\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fullName = firstName + ' ' + lastName\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7528\u4e24\u8005\u4e0d\u540c\u7684\u65b9\u5f0f\uff0c\u5373\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u548c\u57fa\u4e8eSQL\u7684\u8ba1\u7b97\uff0c\u6765\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"Author.fullName")),(0,r.kt)("h2",{id:"\u57fa\u4e8ejavakotlin\u7684\u8ba1\u7b97"},"\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    @Formula(dependencies = {"firstName", "lastName"})\n    default String fullName() {\n        return firstName() + \' \' + lastName();\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    @Formula(dependencies = ["firstName", "lastName"])\n    val fullName: String\n        get() = "$firstName $lastName"\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))),(0,r.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0c\u57fa\u4e8eJava/Kotlin\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u6709\u4ee5\u4e0b\u7279\u5f81"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c5e\u6027\u4e0d\u662f\u62bd\u8c61\u7684(Java\u4e0b\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\u5173\u952e\u5b57)\uff0c\u76f4\u63a5\u7ed9\u51fa\u8ba1\u7b97\u903b\u8f91\u5b9e\u73b0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@Formula"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u88ab\u6307\u5b9a\uff0c\u8868\u793a\u5f53\u524d\u5c5e\u6027\u4f9d\u8d56\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Author.firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author.lastName"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5373\uff0c\u52a8\u6001\u5b9e\u4f53\u5fc5\u987b\u786e\u4fdd\u540c\u65f6\u5177\u5907",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\u5c5e\u6027\u624d\u53ef\u4ee5\u8ba1\u7b97",(0,r.kt)("inlineCode",{parentName:"p"},"fullName")))),(0,r.kt)("p",null,"\u7528\u6cd5\u5982\u4e0b"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Author author = authorRepository.findNullable(\n    1L,\n    AuthorFetcher.$\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        .fullName() \n);\nSystem.out.println(author);\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val author = authorRepository.findNullable(\n    1L,\n    newFetcher(Auhtor::class).by {\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        fullName() \n    }\n);\nprintln(author)\n")))),(0,r.kt)("p",null,"\u6267\u884c\u7684SQL\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    /* highlight-start */\n    tb_1_.FIRST_NAME, \n    tb_1_.LAST_NAME \n    /* highlight-end */\nfrom AUTHOR as tb_1_ \n    where tb_1_.ID = ?\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"\u662f\u8ba1\u7b97\u5c5e\u6027\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u65e0\u5bf9\u5e94\u5b57\u6bb5\uff0c\u4f46\u5176\u4f9d\u8d56\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\uff0c\n\u6240\u4ee5\u6b64SQL\u67e5\u8be2",(0,r.kt)("inlineCode",{parentName:"p"},"FIRST_NAME"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"LAST_NAME"),"\uff0c\u8ba9\u5176\u4f9d\u8d56\u7684\u5c5e\u6027\u5b58\u5728\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u770b\u770b\u4ee3\u7801\u4e2d\u6253\u5370\u4f1a\u8f93\u51fa\u4ec0\u4e48"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"fullName":"Eve Procello"}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u770b\u5230\uff0cJackson\u5e8f\u5217\u5316\uff08\u5b9e\u4f53\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"toString"),"\u65b9\u6cd5\u662f\u5e8f\u5217\u5316\u7684\u4e00\u79cd\u5feb\u6377\u65b9\u5f0f\uff09\u540e\u53ea\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"\uff0c\u4f46\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\uff0c\u56e0\u4e3a\u5bf9\u8c61\u6293\u53d6\u5668\u56e0\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"\u800c\u5bfc\u81f4",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\u88ab\u95f4\u63a5\u6293\u53d6\uff0c\u4ed6\u4eec\u5e76\u672a\u88ab\u76f4\u63a5\u6293\u53d6\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u867d\u7136\u52a8\u6001\u5bf9\u8c61\u5177\u5907",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\uff0c\u4f46\u5b83\u4eec\u88ab\u6807\u8bb0\u6210\u5bf9Jackson\u4e0d\u53ef\u89c1\u7684\u72b6\u6001\uff0c\u4e0d\u4f1a\u51fa\u73b0\u5728Jackson\u5e8f\u5217\u5316\u7ed3\u679c\u4e2d\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8ba9\u5bf9\u8c61\u6293\u53d6\u5668\u76f4\u63a5\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\uff0c\u90a3\u4e48\u5b83\u4eec\u4e00\u5b9a\u4f1a\u51fa\u73b0\u5728\u5e8f\u5217\u5316\u7ed3\u679c\u4e2d\u3002\u8bfb\u8005\u53ef\u4ee5\u81ea\u884c\u8bd5\u9a8c\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002")),(0,r.kt)("h2",{id:"\u57fa\u4e8esql\u7684\u8ba1\u7b97"},"\u57fa\u4e8eSQL\u7684\u8ba1\u7b97"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    @Formula(sql = \"concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)\")\n    String fullName();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    @Formula(sql = \"concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)\")\n    val fullName: String\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n")))),(0,r.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0c\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u6709\u4ee5\u4e0b\u7279\u5f81"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c5e\u6027\u662f\u62bd\u8c61\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@Formula"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"sql"),"\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2aSQL\u8868\u8fbe\u5f0f\uff0c\u5185\u90e8\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u7b26\u53f7",(0,r.kt)("inlineCode",{parentName:"p"},"%alias")),(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u65e0\u6cd5\u4e8b\u5148\u77e5\u9053\u5f53\u524d\u8868\u5728\u6700\u7ec8SQL\u4e2d\u7684\u522b\u540d\uff0c\u6240\u4ee5\uff0cJimmer\u5728\u8fd9\u91cc\u7ea6\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"%alias"),"\u8868\u793a\u5b9e\u9645\u7684\u8868\u5217\u540d"))),(0,r.kt)("p",null,"\u7528\u6cd5\u5982\u4e0b"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Author author = authorRepository.findNullable(\n    1L,\n    AuthorFetcher.$\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        .fullName() \n);\nSystem.out.println(author);\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val author = authorRepository.findNullable(\n    1L,\n    newFetcher(Auhtor::class).by {\n        //\u67e5\u8be2id(\u9690\u542b+\u5f3a\u5236)\u548cfullName\n        // highlight-next-line\n        fullName() \n    }\n);\nprintln(author)\n")))),(0,r.kt)("p",null,"\u751f\u6210SQL\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    /* \u8fd9\u91cc\uff0c@Formula.sql\u4e2d\u7684`alias`\u88ab\u66ff\u6362\u6210\u4e86`tb_1_` */\n    /* highlight-next-line */\n    concat(tb_1_.FIRST_NAME, ' ', tb_1_.LAST_NAME) \nfrom AUTHOR as tb_1_ \nwhere tb_1_.ID = ?\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u6253\u5370\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"fullName":"Eve Procello"}\n')),(0,r.kt)("h3",{id:"\u548c\u57fa\u4e8ejavakotlin\u7684\u7b80\u5355\u8ba1\u7b97\u7684\u6bd4\u8f83"},"\u548c\u57fa\u4e8eJava/Kotlin\u7684\u7b80\u5355\u8ba1\u7b97\u7684\u6bd4\u8f83\u3002"),(0,r.kt)("p",null,"\u76f8\u6bd4\u4e8e\u57fa\u4e8eJava/Kotlin\u7684\u7b80\u5355\u8ba1\u7b97\uff0c\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u6709\u4e00\u4e2a\u7f3a\u70b9\u548c\u4e00\u4e2a\u4f18\u70b9\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u5982\u679c\u5bf9\u8c61\u6293\u53d6\u5668\u540c\u65f6\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"\uff0c\u4f1a\u5bfc\u81f4\u6700\u7ec8SQL\u67e5\u8be2\u4e09\u5217\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"tb_1_.FIRST_NAME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tb_1_.LAST_NAME"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"concat(tb_1_.FIRST_NAME, ' ', tb_1_.LAST_NAME)"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5f88\u660e\u663e\uff0c\u8fd4\u56de\u6570\u636e\u5305\u542b\u5197\u4f59\uff0c\u662f\u4e00\u79cd\u6d6a\u8d39\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u5c5e\u6027\u53ea\u80fd\u4f5c\u4e3a\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u88ab\u6293\u53d6\u5b57\u6bb5\uff0c\u65e0\u6cd5\u4e3aSQL DSL\u6240\u7528\u3002"),(0,r.kt)("p",{parentName:"li"},"\u800c\u57fa\u4e8eSQL\u7684\u8ba1\u7b97\u5c5e\u6027\u4f1a\u88ab\u4ee3\u7801\u751f\u6210\u5668\u751f\u6210\u5230\u5f3a\u7c7b\u578bSQL DSL\u7684API\u4e2d\uff0c\u4e3aSQL DSL\u6240\u7528\uff0c\u5982"),(0,r.kt)("p",{parentName:"li"},"Java\u7684",(0,r.kt)("inlineCode",{parentName:"p"},'where(table.fullName().eq("Eve Procello"))'),"\u6216Kotlin\u7684",(0,r.kt)("inlineCode",{parentName:"p"},'where(table.fullName eq "Eve Procello")')),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u6709\u8ba1\u7b97\u5c5e\u6027\u4e2d\uff0c\u53ea\u6709\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027\u53ef\u4ee5\u88abSQL DSL\u4f7f\u7528\u3002\u4f46\u5efa\u8bae\u4f7f\u7528\u652f\u6301\u51fd\u6570\u7d22\u5f15\u7684\u6570\u636e\u5e93\u5e76\u548c\u51fd\u6570\u7d22\u5f15\u7ed3\u5408\u4f7f\u7528\u3002")))),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5efa\u8bae\u8ba4\u771f\u8003\u8651@Formula\u8ba1\u7b97\u5c5e\u6027\u5e94\u8be5\u57fa\u4e8eJava/Kotlin\u8ba1\u7b97\u8fd8\u662f\u57fa\u4e8eSQL\u8ba1\u7b97\u3002"))}k.isMDXComponent=!0}}]);