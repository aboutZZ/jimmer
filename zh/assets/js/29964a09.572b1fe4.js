"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[48],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,N=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(N,i(i({ref:n},s),{},{components:t})):a.createElement(N,i({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(34334),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(83117),r=t(67294),o=t(34334),i=t(72389),l=t(67392),d=t(7094),p=t(12466),s="tabList__CuJ",m="tabItem_LNqP";function c(e){var n,t,i=e.lazy,c=e.block,u=e.defaultValue,N=e.values,h=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=N?N:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(f,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(n=null!=u?u:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,d.U)(),x=b.tabGroupChoices,T=b.setTabGroupChoices,j=(0,r.useState)(v),E=j[0],S=j[1],C=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var w=x[h];null!=w&&w!==E&&f.some((function(e){return e.value===w}))&&S(w)}var U=function(e){var n=e.currentTarget,t=C.indexOf(n),a=f[t].value;a!==E&&(O(n),S(a),null!=h&&T(h,String(a)))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;t=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var o,i=C.indexOf(e.currentTarget)-1;t=null!=(o=C[i])?o:C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},g)},f.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:U,onClick:U},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function u(e){var n=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},58022:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=t(65488),l=t(85162),d=["components"],p={sidebar_position:4,title:"\u52a8\u6001\u6027"},s=void 0,m={unversionedId:"jimmer-core/dynamic",id:"jimmer-core/dynamic",title:"\u52a8\u6001\u6027",description:"\u52a8\u6001\u5bf9\u8c61",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-core/dynamic.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/dynamic",permalink:"/jimmer/zh/docs/jimmer-core/dynamic",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/dynamic.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u52a8\u6001\u6027"},sidebar:"tutorialSidebar",previous:{title:"Draft\u4ee3\u7406",permalink:"/jimmer/zh/docs/jimmer-core/draft"},next:{title:"\u9a8c\u8bc1",permalink:"/jimmer/zh/docs/jimmer-core/validation"}},c={},u=[{value:"\u52a8\u6001\u5bf9\u8c61",id:"\u52a8\u6001\u5bf9\u8c61",level:2},{value:"Jimmer\u548cJackson",id:"jimmer\u548cjackson",level:2},{value:"\u52a8\u6001\u6027\u5c55\u793a",id:"\u52a8\u6001\u6027\u5c55\u793a",level:2},{value:"\u793a\u8303\u4e00\uff1a\u5b64\u5355\u5bf9\u8c61",id:"\u793a\u8303\u4e00\u5b64\u5355\u5bf9\u8c61",level:3},{value:"\u793a\u8303\u4e8c\uff1a\u5bf9\u8c61\u6811",id:"\u793a\u8303\u4e8c\u5bf9\u8c61\u6811",level:3},{value:"CircularReferenceException",id:"circularreferenceexception",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:3}],N={toc:u};function h(e){var n=e.components,p=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},N,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u52a8\u6001\u5bf9\u8c61"},"\u52a8\u6001\u5bf9\u8c61"),(0,o.kt)("p",null,"\u52a8\u6001\u6027\u53ef\u4ee5\u53ef\u4ee5\u63cf\u8ff0\u4efb\u610f\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u51b3\u5b9a\u6bcf\u4e2a\u4e1a\u52a1\u89c6\u89d2\u662f\u5426\u53ef\u4ee5\u4fdd\u62a4\u67d0\u4e9b\u5b9e\u4f53\u3001\u5173\u8054\u3001\u751a\u81f3\u5c5e\u6027\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"shape",src:t(58793).Z,width:"1150",height:"856"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u7edf\u4e00\u7684\u5b9e\u4f53\u6a21\u578b\u6765\u8868\u8fbe\u4efb\u4f55\u4e1a\u52a1\u6240\u9700\u7684\u6570\u636e\u683c\u5f0f\uff0c\u800c\u975e\u4e3a\u6bcf\u4e00\u4e2a\u4e1a\u52a1\u573a\u666f\u6240\u9700\u7684\u6570\u636e\u683c\u5f0f\u5b9a\u4e49DTO\u3002")),(0,o.kt)("h2",{id:"jimmer\u548cjackson"},"Jimmer\u548cJackson"),(0,o.kt)("p",null,"jimmer\u4e0d\u53ef\u53d8\u5bf9\u8c61\u662f\u52a8\u6001\u7684\uff0c\u5e76\u4e0d\u662f\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u90fd\u9700\u8981\u521d\u59cb\u5316\uff0c\u5b83\u5141\u8bb8\u7f3a\u5c11\u4e00\u4e9b\u5c5e\u6027\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u672a\u6307\u5b9a\u7684\u5c5e\u6027\u5728\u76f4\u63a5\u88ab\u4ee3\u7801\u8bbf\u95ee\u65f6\u4f1a\u5bfc\u81f4\u5f02\u5e38"),(0,o.kt)("li",{parentName:"ul"},"\u672a\u6307\u5b9a\u7684\u5c5e\u6027\u5728JSON\u5e8f\u5217\u5316\u4e2d\u81ea\u52a8\u5ffd\u7565\uff0c\u4e0d\u4f1a\u5f02\u5e38\u3002")),(0,o.kt)("p",null,"\u8fd9\u91cc\u63d0\u5230\u4e86JSON\u5e8f\u5217\u5316\uff0c\u6307",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"jackson"),"\u3002"),(0,o.kt)("p",null,"jimmer-core\u5b9a\u4e49\u4e86\u4e00\u4e2ajackson\u6a21\u5757\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.jackson.ImmutableModule"),"\uff0c\u5229\u7528\u8be5\u6a21\u5757\u53ef\u4ee5\u4e3ajackson\u589e\u52a0\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316jimmer\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u80fd\u529b\u3002"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ObjectMapper mapper = new ObjectMapper()\n    // highlight-next-line\n    .registerModule(new ImmutableModule());\n\nTreeNode treeNode = TreeNodeDraft.$.produce(\n    draft -> draft.setName("Root Node")\n);\n\n// \u7cfb\u5217\u5316\nString json = mapper.writeValueAsString(treeNode);\n\n// \u53cd\u5e8f\u5217\u5316\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode.class);\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val mapper = ObjectMapper()\n    // highlight-next-line\n    .registerModule(ImmutableModule())\n\nval treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n}\n\n// \u5e8f\u5217\u5316\nval json = mapper.writeValueAsString(treeNode);\n\n// \u53cd\u5e8f\u5217\u5316\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode::class.java);\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5e8f\u5217\u5316\u64cd\u4f5c\u800c\u8a00\uff0c\u6709\u4e00\u4e2a\u4fbf\u6377\u65b9\u5f0f\uff0c\u5c31\u662fjimmer\u5bf9\u8c61\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"toString"),"\u65b9\u6cd5\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u4f7f\u7528jimmer\u7684spring boot starter\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ImmutableModule"),"\u7684\u8bbe\u7f6e\u662f\u5168\u81ea\u52a8\u7684\u3002")))),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(\n    draft -> draft.setName("Root Node")\n);\nString json = \n    // \u7cfb\u5217\u5316\u6377\u5f84\n    // highlight-next-line\n    treeNode.toString()\nSystem.out.println(json);\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n}\nval json = \n    // \u7cfb\u5217\u5316\u6377\u5f84\n    // highlight-next-line\n    treeNode.toString()\nprintln(json)\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"toString"),"\u65b9\u6cd5\u7684\u4ee3\u7801\u5f88\u7b80\u5355\uff0c\u672c\u6587\u540e\u7eed\u4f8b\u5b50\u90fd\u4f7f\u7528\u5b83\uff0c\u800c\u975e\u8c03\u7528jackson\u7684API\u3002")),(0,o.kt)("h2",{id:"\u52a8\u6001\u6027\u5c55\u793a"},"\u52a8\u6001\u6027\u5c55\u793a"),(0,o.kt)("p",null,"\u672a\u88ab\u6307\u5b9a\u7684\u5c5e\u6027\u5728JSON\u5e8f\u5217\u5316\u4e2d\u4f1a\u88ab\u5ffd\u7565\uff0c\u7136\u800c\uff0c\u76f4\u63a5\u7528\u4ee3\u7801\u8bbf\u95ee\u5c06\u4f1a\u5f02\u5e38\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.UnloadedException"),"\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u8bbf\u95ee\u672a\u8bbe\u7f6e\u5c5e\u6027\u629b\u51fa\u5f02\u5e38\u7684\u884c\u4e3a\uff0c\u548cORM\u6846\u67b6\u7c7b\u4f3c\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"org.hibernate.LazyInitializationException"),"\u3002")),(0,o.kt)("h3",{id:"\u793a\u8303\u4e00\u5b64\u5355\u5bf9\u8c61"},"\u793a\u8303\u4e00\uff1a\u5b64\u5355\u5bf9\u8c61"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(current -> \n        current.setName("Current Node")\n    );\n\nSystem.out.println(\n    "JSON serialization: " + treeNode\n);\n\nSystem.out.println(\n    "this.name(): " + treeNode.name()\n);\n\ntry {\n    System.out.println(\n        "this.parent(): " + treeNode.parent()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "UnloadedException message: " +\n            ex.getMessage()\n    );\n}\n\ntry {\n    System.out.println(\n        "this.childNodes(): " + treeNode.childNodes()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "UnloadedException message: " +\n            ex.getMessage()\n    );\n}\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Current Node"\n}\n\nprintln("JSON serialization: $treeNode")\n\nprintln("this.name: ${treeNode.name}")\n\ntry {\n    println("this.name: ${treeNode.parent}")\n} catch (ex: UnloadedException) {\n    println(\n        "UnloadedException message: " +\n            ex.message\n    )\n}\n\ntry {\n    println("this.name: ${treeNode.childNodes}")\n} catch (ex: UnloadedException) {\n    println(\n        "UnloadedException message: " +\n            ex.message\n    )\n}\n')))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6253\u5370\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},'JSON serialization: {"name":"Current Node"}'),(0,o.kt)("p",{parentName:"admonition"},"this.name(): Current Node"),(0,o.kt)("p",{parentName:"admonition"},'UnloadedException message: The property "yourpackage.TreeNode.parent" is unloaded'),(0,o.kt)("p",{parentName:"admonition"},'UnloadedException message: The property "yourpackage.TreeNode.childNodes" is unloaded')),(0,o.kt)("h3",{id:"\u793a\u8303\u4e8c\u5bf9\u8c61\u6811"},"\u793a\u8303\u4e8c\uff1a\u5bf9\u8c61\u6811"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(current ->\n        current\n            .setName("Current Node")\n            .applyParent(parent ->\n                    parent.setName("Parent Node")\n            )\n            .addIntoChildNodes(child ->\n                    child.setName("Child Node")\n            )\n    );\n\n\nSystem.out.println(\n    "JSON serialization: " + treeNode\n);\n\nSystem.out.println(\n    "this.name(): " + treeNode.name()\n);\n\nSystem.out.println(\n    "this.parent(): " + treeNode.parent()\n);\n\nSystem.out.println(\n    "this.childNodes(): " + treeNode.childNodes()\n);\n\n\nSystem.out.println(\n    "this.parent().name(): " +\n    treeNode.parent().name()\n);\n\ntry {\n    System.out.println(\n        "this.parent().parent(): " +\n            treeNode.parent().parent()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.parent.parent: " +\n            ex.getMessage()\n    );\n}\n\ntry {\n    System.out.println(\n        "this.parent().childNodes(): " +\n            treeNode.parent().childNodes()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.parent.childNodes: " +\n            ex.getMessage()\n    );\n}\n\n\nSystem.out.println(\n        "this.childNodes().get(0).name(): " +\n                treeNode.childNodes().get(0).name()\n);\n\ntry {\n    System.out.println(\n        "this.childNodes().get(0).parent(): " +\n            treeNode.childNodes().get(0).parent()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.childNodes[0].parent: " +\n            ex.getMessage()\n    );\n}\n\ntry {\n    System.out.println(\n        "this.childNodes().get(0).childNodes(): " +\n            treeNode.childNodes().get(0).childNodes()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.childNodes[0].childNodes: " +\n            ex.getMessage()\n    );\n}\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Current Node"\n    parent().apply {\n        name = "Parent Node"\n    }\n    childNodes().addBy {\n        name = "Child Node"\n    }\n}\n\nprintln("JSON serialization: $treeNode")\n\nprintln("this.name: ${treeNode.name}")\n\nprintln("this.parent: ${treeNode.parent}")\n\nprintln("this.childNodes: ${treeNode.childNodes}")\n\nprintln("this.parent.name: ${treeNode.parent?.name}")\n\ntry {\n    println("this.parent.parent: ${treeNode.parent?.parent}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.parent.parent: " +\n            ex.message\n    )\n}\n\ntry {\n    println("this.parent.childNodes: ${treeNode.parent?.childNodes}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.parent.childNodes: " +\n            ex.message\n    )\n}\n\n\nprintln("this.childNodes[0].name: ${treeNode.childNodes[0].name}")\n\ntry {\n    println("this.childNodes[0].parent: ${treeNode.childNodes[0].parent}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.childNodes[0].parent: " +\n            ex.message\n    )\n}\n\ntry {\n    println("this.childNodes[0].childNodes: ${treeNode.childNodes[0].childNodes}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.childNodes[0].childNodes: " +\n            ex.message\n    )\n}\n')))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6253\u5370\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},'JSON serialization: {"name":"Current Node","parent":{"name":"Parent Node"},"childNodes":','[{"name":"Child Node"}]',"}"),(0,o.kt)("p",{parentName:"admonition"},"this.name(): Current Node"),(0,o.kt)("p",{parentName:"admonition"},'this.parent(): {"name":"Parent Node"}'),(0,o.kt)("p",{parentName:"admonition"},"this.childNodes(): ",'[{"name":"Child Node"}]'),(0,o.kt)("p",{parentName:"admonition"},"this.parent().name(): Parent Node"),(0,o.kt)("p",{parentName:"admonition"},'The message of UnloadedException of this.parent().parent(): The property "yourpackage.TreeNode.parent" is unloaded'),(0,o.kt)("p",{parentName:"admonition"},'The message of UnloadedException of this.parent().childNodes(): The property "yourpackage.TreeNode.childNodes" is unloaded'),(0,o.kt)("p",{parentName:"admonition"},"this.childNodes().get(0).name(): Child Node"),(0,o.kt)("p",{parentName:"admonition"},'The message of UnloadedException of this.childNodes.get(0).parent(): The property "yourpackage.TreeNode.parent" is unloaded'),(0,o.kt)("p",{parentName:"admonition"},'The message of UnloadedException of this.childNodes.get(0).childNodes(): The property "yourpackage.TreeNode.childNodes" is unloaded')),(0,o.kt)("h2",{id:"circularreferenceexception"},"CircularReferenceException"),(0,o.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,o.kt)("p",null,"\u5728GUI\u3001\u6e38\u620f\u5f15\u64ce\u4ee5\u53ca\u7269\u7406\u5f15\u64ce\u8fd9\u7c7b\u53ef\u89c6\u5316\u5730\u6a21\u62df\u73b0\u5b9e\u4e16\u754c\u6280\u672f\u9886\u57df\u4e2d\uff0c\u6570\u636e\u5bf9\u8c61\u4e4b\u95f4\u7684\u53cc\u5411\u5173\u8054\u975e\u5e38\u91cd\u8981\uff0c\u53cc\u5411\u5173\u8054\u5f88\u591a\u7b97\u6cd5\u7684\u57fa\u672c\u5047\u8bbe\u3002"),(0,o.kt)("p",null,"\u7136\u800c\uff0c\u4fe1\u606f\u5316\u7ba1\u7406\u9886\u9886\u57df\u548c\u8fd9\u7c7b\u9886\u57df\u4e0d\u540c\uff0c\u8fd9\u4e2a\u9886\u57df\u7684\u5de5\u7a0b\u5e08\u66f4\u9752\u7750\u8ba9\u5bf9\u8c61\u4e4b\u95f4\u4ec5\u5177\u5907\u5355\u5411\u5173\u8054\uff0c\u66f4\u5728\u4e4e\u5bf9\u8c61\u683c\u5f0f\u7684\u7b80\u5355\u6027\u3002\u53cc\u5411\u5173\u8054\u7684\u5b58\u5728\u4f1a\u8ba9\u5e8f\u5217\u5316\u95ee\u9898\u590d\u6742\u5316\uff0c\u4ec5\u4f7f\u7528\u5355\u5411\u5173\u8054\u53ef\u4ee5\u4f7f\u5f97\u5e8f\u5217\u5316\u673a\u5236\u6700\u7b80\u5316\uff0c\u7b80\u5316\u5728\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u4e4b\u95f4\u4ea4\u4e92\uff0c\u4e5f\u7b80\u5316\u548c\u524d\u7aefUI\u7684\u4ea4\u4e92\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4e8b\u5b9e\u4e0a\uff0c\u5728\u5e8f\u5217\u5316\u4e2d\u89e3\u51b3\u53cc\u5411\u5173\u8054\u5e76\u4e0d\u590d\u6742\uff0c\u6bd4\u5982jackson\u652f\u6301",(0,o.kt)("a",{parentName:"p",href:"https://fasterxml.github.io/jackson-annotations/javadoc/2.5/com/fasterxml/jackson/annotation/JsonBackReference.html"},"@JsonBackReference"),"\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u867d\u7136\u5e8f\u5217\u5316\u6846\u67b6\u4e3a\u4e86\u5c3d\u53ef\u80fd\u901a\u7528\u4f1a\u52a0\u5165\u5904\u7406\u53cc\u5411\u5173\u8054\u7684\u80fd\u529b\uff0c\u4f46\u662f\u5b9e\u9645\u9879\u76ee\u4e2d\u4eba\u4eec\u8ba4\u4e3a\u8fd9\u6837\u505a\u5f0a\u5927\u4e8e\u5229\u3002\u6545\u5f88\u5c11\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"jimmer\u9632\u6b62\u5f00\u53d1\u4eba\u5458\u4e4b\u95f4\u5728\u5b9e\u4f53\u5bf9\u8c61\u4e4b\u95f4\u6784\u5efa\u53cc\u5411\u5173\u8054\u3002"),(0,o.kt)("p",null,"\u8bfb\u8005\u8bfb\u5230\u8fd9\u91cc\u53ef\u80fd\u5f88\u7591\u60d1\uff0c\u524d\u9762\u7684\u4f8b\u5b50\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u7c7b\u578b\u65e2\u5177\u5907\u7236\u8282\u70b9\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"parent"),"\uff0c\u53c8\u5177\u5907\u5b50\u8282\u70b9\u96c6\u5408\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes"),"\uff0c\u8fd9\u5206\u660e\u662f\u53cc\u5411\u5173\u8054\u5440\u3002"),(0,o.kt)("p",null,"\u8fd9\u5176\u5b9e\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u601d\u8003\u89d2\u5ea6\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49\u7684\u89d2\u5ea6")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u5bf9\u8c61\u5b9e\u4f8b\u5316\u7684\u89d2\u5ea6"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4ece\u5b9e\u4f53\u63a5\u53e3\u7c7b\u578b\u5b9a\u4e49\u7684\u89d2\u5ea6\u8bb2\uff0cjimmer\u5141\u8bb8\u4e5f\u9f13\u52b1\u5b9a\u4e49\u53cc\u5411\u5173\u8054\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4ece\u5b9e\u4f53\u5bf9\u8c61\u5b9e\u4f8b\u5316\u7684\u89d2\u5ea6\u8bb2\uff0cjimmer\u7981\u6b62\u4e0d\u540c\u5bf9\u8c61\u4e4b\u95f4\u5b58\u5728\u53cc\u5411\u5173\u8054\uff0c\u4efb\u4f55\u6709\u8fd9\u79cd\u4f01\u56fe\u7684\u4ee3\u7801\u90fd\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff1aorg.babyfish.jimmer.CircularReferenceException\u3002"))),(0,o.kt)("p",{parentName:"admonition"},"jimmer\u4e3a\u5f00\u53d1\u4eba\u5458\u786e\u7acb\u4e86\u8fd9\u6837\u4e00\u4e2a\u6cd5\u5219\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u805a\u5408\u6839"),"\u8bbe\u8ba1\u6ede\u540e\u5316\u3002"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u5b9e\u4f53\u7c7b\u578b\u65f6\uff0c\u4e0d\u8981\u53bb\u8003\u8651\u5355\u5411\u5173\u8054\u5bf9\u8c61\u6811\u7684",(0,o.kt)("strong",{parentName:"p"},"\u805a\u5408\u6839"),"\uff0c\u53ea\u9700\u6309\u7167\u6570\u636e\u7684\u539f\u59cb\u5b58\u50a8\u65b9\u5f0f\u58f0\u660e\u5b9e\u4f53\u7c7b\u578b\uff0c\u5141\u8bb8\u5e76\u9f13\u52b1\u58f0\u660e\u53cc\u5411\u5173\u8054\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a\u5b9e\u73b0\u67d0\u4e2a\u7279\u5b9a\u4e1a\u52a1\uff0c\u9700\u8981\u521b\u5efa\u5bf9\u8c61\u6811\u5b9e\u4f8b\u65f6\uff0c\u518d\u51b3\u5b9a",(0,o.kt)("strong",{parentName:"p"},"\u805a\u5408\u6839"),"\u662f\u4ec0\u4e48\u3002jimmer\u4fdd\u8bc1",(0,o.kt)("strong",{parentName:"p"},"\u805a\u5408\u6839"),"\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u6811\u5b9e\u4f8b\u7edd\u4e0d\u5305\u542b\u53cc\u5411\u5173\u8054\u3002")))),(0,o.kt)("h3",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode aggregateRoot = TreeNodeDraft.$\n    .produce(aggregateRootDraft ->\n        aggregateRootDraft\n            .setName("Aggregate root")\n            .addIntoChildNodes(childDraft ->\n                childDraft\n                    .setName("Child")\n                    // \u629b\u51faCircularReferenceException\n                    // highlight-next-line\n                    .setParent(aggregateRootDraft)\n            )\n    );\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val aggregateRoot = new(TreeNode::class).by {\n\n    val that = this\n\n    name = "Aggregate root"\n    childNodes().addBy {\n        name = "Child"\n        // \u629b\u51faCircularReferenceException\n        // highlight-next-line\n        parent = that\n    }\n}\n')))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff1aorg.babyfish.jimmer.CircularReferenceException\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u867d\u7136\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u5b9e\u4f53\u7c7b\u578b\u4e4b\u95f4\u5b9a\u4e49\u53cc\u5411\u5173\u8054\uff0c\u4f46\u65e0\u6cd5\u5728\u5b9e\u4f53\u5bf9\u8c61\u4e4b\u95f4\u521b\u5efa\u53cc\u5411\u5173\u8054\u3002\u6b64\u884c\u4e3a\u88ab\u660e\u786e\u7981\u6b62\u3002")))}h.isMDXComponent=!0},58793:function(e,n,t){n.Z=t.p+"assets/images/shape-877c9a8df8953a5c8b7e0af6f45b8bea.png"}}]);