"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4909],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,d=c["".concat(p,".").concat(m)]||c[m]||k[m]||o;return t?a.createElement(d,r(r({ref:n},u),{},{components:t})):a.createElement(d,r({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294),l=t(34334),o="tabItem_Ymn6";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),l=t(67294),o=t(34334),r=t(72389),i=t(67392),p=t(7094),s=t(12466),u="tabList__CuJ",k="tabItem_LNqP";function c(e){var n,t,r=e.lazy,c=e.block,m=e.defaultValue,d=e.values,g=e.groupId,h=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),C=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var B=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==B&&!b.some((function(e){return e.value===B})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+B+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,p.U)(),N=f.tabGroupChoices,L=f.setTabGroupChoices,S=(0,l.useState)(B),q=S[0],y=S[1],I=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var T=N[g];null!=T&&T!==q&&b.some((function(e){return e.value===T}))&&y(T)}var x=function(e){var n=e.currentTarget,t=I.indexOf(n),a=b[t].value;a!==q&&(j(n),y(a),null!=g&&L(g,String(a)))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=I.indexOf(e.currentTarget)+1;t=null!=(a=I[l])?a:I[0];break;case"ArrowLeft":var o,r=I.indexOf(e.currentTarget)-1;t=null!=(o=I[r])?o:I[I.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===n?0:-1,"aria-selected":q===n,key:n,ref:function(e){return I.push(e)},onKeyDown:O,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":q===n})}),null!=t?t:n)}))),r?(0,l.cloneElement)(v.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==q})}))))}function m(e){var n=(0,r.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},98649:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return m}});var a=t(83117),l=t(80102),o=(t(67294),t(3905)),r=t(65488),i=t(85162),p=["components"],s={sidebar_position:6,title:"\u5bf9Spring GraphQL\u7684\u652f\u6301"},u=void 0,k={unversionedId:"jimmer-sql/spring-graphql",id:"jimmer-sql/spring-graphql",title:"\u5bf9Spring GraphQL\u7684\u652f\u6301",description:"Spring Boot 2.7.0\u5e26\u6765\u4e86Spring GraphQL\uff0cjimmer-sql\u4e3a\u4e86\u63d0\u4f9b\u4e86\u4e13\u95e8\u7684API\uff0c\u52a0\u5febSpring GraphQL\u7684\u5f00\u53d1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/spring-graphql.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/spring-graphql",permalink:"/jimmer/zh/docs/jimmer-sql/spring-graphql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/spring-graphql.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u5bf9Spring GraphQL\u7684\u652f\u6301"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528spring boot starter",permalink:"/jimmer/zh/docs/jimmer-sql/spring-boot"},next:{title:"\u9644\u5e26demo",permalink:"/jimmer/zh/docs/demo"}},c={},m=[{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"ReferenceLoader",id:"referenceloader",level:3},{value:"ListLoader",id:"listloader",level:3},{value:"ValueLoader",id:"valueloader",level:3},{value:"\u53d8\u66f4",id:"\u53d8\u66f4",level:2},{value:"GraphQL Input\u7c7b\u578b\u7684\u5b58\u5728\u4ef7\u503c",id:"graphql-input\u7c7b\u578b\u7684\u5b58\u5728\u4ef7\u503c",level:3},{value:"\u5b9a\u4e49Input\u7c7b\u578b",id:"\u5b9a\u4e49input\u7c7b\u578b",level:3},{value:"\u5b9e\u73b0\u53d8\u66f4\u4e1a\u52a1",id:"\u5b9e\u73b0\u53d8\u66f4\u4e1a\u52a1",level:3}],d={toc:m};function g(e){var n=e.components,t=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Spring Boot 2.7.0\u5e26\u6765\u4e86Spring GraphQL\uff0cjimmer-sql\u4e3a\u4e86\u63d0\u4f9b\u4e86\u4e13\u95e8\u7684API\uff0c\u52a0\u5febSpring GraphQL\u7684\u5f00\u53d1\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f: "),(0,o.kt)("p",{parentName:"admonition"},"GraphQL\u548cObject Fetcher\u662f\u8fbe\u5230\u76f8\u4f3c\u76ee\u7684\u7684\u4e24\u79cd\u624b\u6bb5\u3002Object Fetcher\u4fa7\u91cd\u4e8e\u5728SQL\u5c42\u9762\u652f\u6301\u8fd9\u79cd\u80fd\u529b\uff0cGraphQL\u4fa7\u91cd\u4e8e\u628a\u8fd9\u79cd\u80fd\u529b\u66b4\u9732\u51fa\u53bb\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4e00\u65e6\u51b3\u5b9a\u91c7\u7528Spring GraphQL\uff0c\u5c31\u4e0d\u8981\u91cd\u590d\u4f7f\u7528Object Fetcher\uff0c\u63a7\u5236\u5668\u5404\u67e5\u8be2\u65b9\u6cd5\u53ea\u9700\u8fd4\u56de\u5b64\u5355\u5bf9\u8c61\u6216\u5176\u96c6\u5408\uff0cGraphQL\u4f1a\u80a9\u8d1f\u8d77\u548cObject Fetcher\u7c7b\u4f3c\u7684\u8d23\u4efb\u3002")),(0,o.kt)("h2",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,o.kt)("p",null,"\u5bf9\u4e8eQuery\u7c7b\u578b\u7684\u67e5\u8be2\uff0c\u5373\u6839\u67e5\u8be2\uff0cGraphQL\u5b9e\u73b0\u548cREST\u5b9e\u73b0\u6ca1\u6709\u533a\u522b\uff0c\u65e0\u9700\u7279\u6b8a\u4e4b\u5904\u3002"),(0,o.kt)("p",null,"\u5173\u952e\u70b9\u5728\u4e8e\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u67e5\u8be2\u3002\u672c\u8eab\u662f\u4e2a\u7b80\u5355\u7684\u6982\u5ff5\uff0c\u4f46\u662f\u4e3a\u4e86\u6027\u80fd\uff0c\u5b9e\u9645\u9879\u76ee\u901a\u5e38\u4f1a\u91c7\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"\u5bf9\u5f00\u53d1\u4f53\u9a8c\u4ea7\u751f\u4e86\u8f83\u5927\u7834\u574f\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u67e5\u8be2\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"\u589e\u52a0\u4e86GraphQL\u670d\u52a1\u7684\u5f00\u53d1\u96be\u5ea6\uff0c\u4f46\u4e5f\u6b63\u56e0\u4e3a\u5982\u6b64\uff0c\u5728\u5ba2\u6237\u7aef\u770b\u6765\uff0cGraphQL\u670d\u52a1\u5f88\u5f3a\u5927\u3002")),(0,o.kt)("p",null,"\u4e3a\u4e86\u7f13\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"\u5bf9\u5f00\u53d1\u4f53\u9a8c\u7684\u7834\u574f\uff0cSpring GraphQL\u5f15\u5165\u4e86\u65b0\u6ce8\u89e3",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers-batch-mapping"},"@BatchMapping"),"\u3002"),(0,o.kt)("p",null,"jimmer-sql\u5bf9\u6b64\u63d0\u4f9b\u4e86\u7279\u522b\u652f\u6301\uff0c\u63d0\u4f9b\u4e13\u7528\u7684API\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4e00\u53e5\u8bdd\u5b9e\u73b0Spring GraphQL\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers-batch-mapping"},"@BatchMapping"),"\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u4e0e\u6b64\u76f8\u5173\u7684API"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null),(0,o.kt)("th",null,"Java"),(0,o.kt)("th",null,"Kotlin"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Computed property")),(0,o.kt)("td",null,"JSqlClient.getLoaders().value"),(0,o.kt)("td",null,"KSqlClient.loaders.value")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Reference association")),(0,o.kt)("td",null,"JSqlClient.getLoaders().reference"),(0,o.kt)("td",null,"KSqlClient.loaders.reference")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"List association")),(0,o.kt)("td",null,"JSqlClient.getLoaders().list"),(0,o.kt)("td",null,"KSqlClient.loaders.list")))),(0,o.kt)("h3",{id:"referenceloader"},"ReferenceLoader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ReferenceLoader"),"\u7528\u4e8e\u5feb\u901f\u5b9e\u73b0\u4e00\u5bf9\u4e00\u6216\u591a\u5bf9\u4e00\u5173\u8054"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-one associaton: Book.store\n    // highlight-next-line\n    @BatchMapping\n    public Map<Book, BookStore> store(\n        Collection<Book> books\n    ) {\n        return sqlClient\n            .getLoaders()\n            // highlight-next-line\n            .reference(BookProps.STORE)\n            .batchLoad(books);\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Many-to-one associaton: Book.store\n    // highlight-next-line\n    @BatchMapping\n    fun store(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        books: java.util.List<Book>\n    ): Map<Book, BookStore> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .reference(Book::store)\n            .batchLoad(books)\n}\n")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8ekotlin\u800c\u8a00\uff0c\u9700\u8981\u663e\u5f0f\u5730\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.List"),"\uff0ckotlin\u7684\u96c6\u5408\u65e0\u6cd5\u5de5\u4f5c"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662fspring-graphql\u7684\u4e00\u4e2abug, \u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-graphql/issues/454"},"spring-graphql#454"))),(0,o.kt)("h3",{id:"listloader"},"ListLoader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ListLoader"),"\u7528\u4e8e\u5feb\u901f\u5b9e\u73b0\u4e00\u5bf9\u591a\u6216\u591a\u5bf9\u591a\u5173\u8054"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreController.java"',title:'"BookStoreController.java"'},"@Controller\npublic class BookStoreController {\n\n    private final JSqlClient sqlClient;\n\n    public BookStoreController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // One-to-many associaton: BookStore.books\n    // highlight-next-line\n    @BatchMapping\n    public Map<BookStore, List<Book>> books(\n            List<BookStore> bookStores\n    ) {\n        return sqlClient\n            .getLoaders()\n            // highlight-next-line\n            .list(BookStoreProps.BOOKS)\n            .batchLoad(bookStores);\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStoreController.kt"',title:'"BookStoreController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    // One-to-many associaton: BookStore.books\n    // highlight-next-line\n    @BatchMapping\n    fun books(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        stores: java.util.List<BookStore>\n    ): Map<BookStore, List<Book>> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .list(BookStore::books)\n            .batchLoad(stores)\n}\n")))),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-many associaton: Book.authors\n    // highlight-next-line\n    @BatchMapping\n    public Map<Book, List<Author>> authors(List<Book> books) {\n        return sqlClient\n            .getLoaders()\n            // highlight-next-line\n            .list(BookProps.AUTHORS)\n            .batchLoad(books);\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Many-to-many associaton: Book.authors\n    // highlight-next-line\n    @BatchMapping\n    fun authors(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        books: java.util.List<Book>\n    ): Map<Book, List<Author>> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .list(Book::authors)\n            .batchLoad(books)\n}\n")))),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AuthorController.java"',title:'"AuthorController.java"'},"@Controller\npublic class AuthorController {\n\n    private final JSqlClient sqlClient;\n\n    public AuthorController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-many associaton: Author.books\n    // highlight-next-line\n    @BatchMapping\n    public Map<Author, List<Book>> books(\n            List<Author> authors\n    ) {\n        return sqlClient\n                .getLoaders()\n                // highlight-next-line\n                .list(AuthorProps.BOOKS)\n                .batchLoad(authors);\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="AuthorController.kt"',title:'"AuthorController.kt"'},"@Controller\nclass AuthorController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Many-to-many associaton: Author.books\n    // highlight-next-line\n    @BatchMapping\n    fun books(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        authors: java.util.List<Author>\n    ): Map<Author, List<Book>> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .list(Author::books)\n            .batchLoad(authors)\n}\n")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8ekotlin\u800c\u8a00\uff0c\u9700\u8981\u663e\u5f0f\u5730\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.List"),"\uff0ckotlin\u7684\u96c6\u5408\u65e0\u6cd5\u5de5\u4f5c"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662fspring-graphql\u7684\u4e00\u4e2abug, \u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-graphql/issues/454"},"spring-graphql#454"))),(0,o.kt)("h3",{id:"valueloader"},"ValueLoader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ValueLoader"),"\u7528\u4e8e\u5feb\u901f\u5b9e\u73b0, "),(0,o.kt)("p",null,"jimmer-sql\u652f\u6301\u8ba1\u7b97\u5c5e\u6027\uff0c\u5373\u5177\u5907resolver\u7684transient\u5c5e\u6027"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @Transient(BookStoreAvgPriceResolver.class)\n    BigDecimal avgPrice();\n\n    ... Omit other properties ...\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},"@Entity\ninterface BookStore {\n\n    // highlight-next-line\n    @Transient(BookStoreAvgPriceResolver::class)\n    val avgPrice: BigDecimal\n\n    ... \u7701\u7565\u5176\u4ed6\u5c5e\u6027 ...\n}\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ValueLoader"),"\u5e94\u8be5\u88ab\u8fd9\u6837\u4f7f\u7528"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreController.java"',title:'"BookStoreController.java"'},'@Controller\npublic class BookStoreController {\n\n    private static final ImmutableProp BOOK_STORE_DOT_AVG_PRICE =\n            ImmutableType\n                .get(BookStore.class)\n                .getProp("avgPrice");\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Calculated property: BookStore.avgPrice\n    // highlight-next-line\n    @BatchMapping\n    public Map<BookStore, BigDecimal> avgPrice(\n        List<BookStore> stores\n    ) {\n        return sqlClient\n                .getLoaders()\n                // highlight-next-line\n                .<BookStore, BigDecimal>value(\n                    BOOK_STORE_DOT_AVG_PRICE\n                )\n                .batchLoad(stores);\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStoreController.kt"',title:'"BookStoreController.kt"'},"@Controller\nclass BookStoreController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Calculated property: BookStore.avgPrice\n    // hightlight-next-line\n    @BatchMapping\n    fun avgPrice(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        stores: java.util.List<BookStore>\n    ): Map<BookStore, BigDecimal> =\n        sqlClient\n            .loaders\n            // hightlight-next-line\n            .value(BookStore::avgPrice)\n            .batchLoad(stores)\n}\n\n")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8ekotlin\u800c\u8a00\uff0c\u9700\u8981\u663e\u5f0f\u5730\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.List"),"\uff0ckotlin\u7684\u96c6\u5408\u65e0\u6cd5\u5de5\u4f5c"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662fspring-graphql\u7684\u4e00\u4e2abug, \u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-graphql/issues/454"},"spring-graphql#454"))),(0,o.kt)("h2",{id:"\u53d8\u66f4"},"\u53d8\u66f4"),(0,o.kt)("h3",{id:"graphql-input\u7c7b\u578b\u7684\u5b58\u5728\u4ef7\u503c"},"GraphQL Input\u7c7b\u578b\u7684\u5b58\u5728\u4ef7\u503c"),(0,o.kt)("p",null,"\u5728\u4ecb\u7ecd\u53d8\u66f4\u529f\u80fd\u4e4b\u524d\uff0c\u9700\u8981\u8ba8\u8bbaGraphQL\u534f\u8bae\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165Input\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u4ece\u8f93\u51fa\u7684\u89d2\u5ea6\u6765\u770b\uff0cGraphQL\u5b57\u6bb5\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),"\u7c7b\u578b\u3002 \u4f46\u662f\uff0c\u4ece\u8f93\u5165\u7684\u89d2\u5ea6\u6765\u770b\uff0cGraphQL\u5b57\u6bb5\u7684\u53c2\u6570\u4e0d\u63a5\u53d7",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),"\u7c7b\u578b\uff0c\u53ea\u80fd\u63a5\u53d7\u6807\u91cf\u7c7b\u578b\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Input"),"\u7c7b\u578b\u4ee5\u53ca\u5b83\u4eec\u7684\u96c6\u5408\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u4e8c\u8005\u4e4b\u95f4\u5b58\u5728\u5982\u4e0b\u5dee\u5f02\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Object"),"\u7c7b\u578b\u662f",(0,o.kt)("b",null,"\u52a8\u6001"),"\u7684\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u5bf9\u8c61\u7684\u5f62\u72b6\u3002"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),"\u7c7b\u578b\u7684\u52a8\u6001\u6027\u5b9e\u73b0\u4e86GraphQL\u7684\u6838\u5fc3\u4ef7\u503c\u3002\u56e0\u4e3a\u8fd9\u79cd\u52a8\u6001\u6027\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u6307\u5b9a\u54ea\u4e9b\u5b57\u6bb5\u9700\u8981\uff0c\u54ea\u4e9b\u4e0d\u9700\u8981\uff0c\u4ece\u800c\u7075\u6d3b\u5730\u63a7\u5236\u8981\u67e5\u8be2\u7684\u5bf9\u8c61\u6811\u683c\u5f0f\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Input"),"\u7c7b\u578b\u662f",(0,o.kt)("b",null,"\u9759\u6001"),"\u7684\uff0c\u5ba2\u6237\u7aef\u5fc5\u987b\u63d0\u4f9b\u4e25\u683c\u6ee1\u8db3\u670d\u52a1\u5668\u8981\u6c42\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"li"},"  \u548c\u67e5\u8be2\u4e0d\u540c\uff0c\u53d8\u66f4\u4e1a\u52a1\u5f80\u5f80\u5bf9\u8f93\u5165\u6570\u636e\u683c\u5f0f\u6709\u4e25\u683c\u7684\u9650\u5236\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u968f\u610f\u4f20\u9012\u4e0d\u7b26\u5408\u670d\u52a1\u7aef\u671f\u671b\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5f88\u53ef\u80fd\u5bfc\u81f4\u53d8\u66f4\u4e1a\u52a1\u5f02\u5e38\u3002"),(0,o.kt)("p",{parentName:"li"},"  \u56e0\u6b64\uff0cGraphQL\u534f\u8bae\u5f15\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"Input"),"\u7c7b\u578b\uff0c\u8be5\u7c7b\u578b\u662f\u9759\u6001\u7684\uff0c\u5ba2\u6237\u7aef\u5fc5\u987b\u4f20\u9012\u4e25\u683c\u7b26\u5408",(0,o.kt)("inlineCode",{parentName:"p"},"Input"),"\u7c7b\u578b\u5b9a\u4e49\u7684\u6570\u636e\u683c\u5f0f\uff0c\u624d\u53ef\u4ee5\u8c03\u7528\u53d8\u66f4\u4e1a\u52a1\u3002"))),(0,o.kt)("p",null,"\u8fd9\u4e2a\u52a8\u6001\u9759\u6001\u7684\u5dee\u5f02\uff0c\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Input"),"\u7c7b\u578b\u5b58\u5728\u7684\u6839\u672c\u539f\u56e0\u3002"),(0,o.kt)("h3",{id:"\u5b9a\u4e49input\u7c7b\u578b"},"\u5b9a\u4e49Input\u7c7b\u578b"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5728Spring GraphQL\u7ea6\u5b9a\u7684\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources/graphql/schema.graphqls"),"\u4e2d\u5b9a\u4e49input\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input BookInput {\n    id: Long\n    name: String!\n    edition: Int\n    price: BigDecimal!\n    storeId: Long\n    authorIds: [Long!]!\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u5728Java\u6587\u4ef6\u4e2d\uff0c\u5b9a\u4e49\u5bf9\u5e94\u7684BookInput\u7c7b\u578b"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"public class BookInput {\n\n    @Nullable\n    private final Long id;\n\n    private final String name;\n\n    private final int edition;\n\n    private final BigDecimal price;\n\n    @Nullable\n    private final Long storeId;\n\n    private final List<Long> authorIds;\n\n    public BookInput(\n        @Nullable Long id,\n        String name,\n        int edition,\n        BigDecimal price,\n        @Nullable Long storeId,\n        List<Long> authorIds\n    ) {\n        this.id = id;\n        this.name = name;\n        this.edition = edition;\n        this.price = price;\n        this.storeId = storeId;\n        this.authorIds = authorIds;\n    }\n\n    // \u628a\u9759\u6001\u7684input(DTO)\u5bf9\u8c61\u8f6c\u5316\u4e3a\u52a8\u6001\n    // \u7684\u5b9e\u4f53\u5bf9\u8c61\u6811, \u65e0\u8bba\u5b83\u6709\u591a\u6df1.\n    // highlight-next-line\n    public Book toBook() {\n        return BookDraft.$.produce(book -> {\n            if (id != null) {\n                book.setId(id);\n            }\n            if (storeId != null) {\n                book.applyStore(store -> \n                    store.setId(storeId)\n                );\n            }\n            book\n                .setName(name)\n                .setEdition(edition)\n                .setPrice(price);\n            for (Long authorId : authorIds) {\n                book.addIntoAuthors(author -> \n                    author.setId(authorId)\n                );\n            }\n        });\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n    val id: Long?, // Optional id\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long?,\n    val authorIds: List<Long>\n) {\n\n    // \u628a\u9759\u6001\u7684input(DTO)\u5bf9\u8c61\u8f6c\u5316\u4e3a\u52a8\u6001\n    // \u7684\u5b9e\u4f53\u5bf9\u8c61\u6811, \u65e0\u8bba\u5b83\u6709\u591a\u6df1.\n    // highlight-next-line\n    fun toBook(): Book =\n        new(Book::class).by {\n            val that = this@BookInput\n            that.id?.let {\n                id = it\n            }\n            name = that.name\n            edition = that.edition\n            price = that.price\n            that.storeId?.let {\n                store().id = it\n            }\n            for (authorId in that.authorIds) {\n                authors().addBy {\n                    id = authorId\n                }\n            }\n        }\n}\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"jimmer-sql\u7684",(0,o.kt)("a",{parentName:"p",href:"./mutation/save-command"},"Save\u6307\u4ee4"),"\u63d0\u4f9b\u628a\u4efb\u610f\u590d\u6742\u7684\u5bf9\u8c61\u6811\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u7684\u529f\u80fd\uff0c\u56e0\u6b64\uff0cjimmer-sql\u5173\u6ce8\u7684\u662f\u5b9e\u4f53\u5bf9\u8c61\u6811\uff0c\u800c\u975einput\u5bf9\u8c61\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u9700\u8981\u63d0\u4f9b",(0,o.kt)("inlineCode",{parentName:"p"},"toBook"),"\u65b9\u6cd5\uff0c\u628a\u9759\u6001\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u5bf9\u8c61\u8f6c\u6362\u4e3a\u52a8\u6001\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u662fjimmer-core\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u672c\u8eab\u5177\u5907\u52a8\u6001\u6027\uff0c\u5373\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u7684\u6570\u636e\u683c\u5f0f\u5343\u53d8\u4e07\u5316\uff0c\u5305\u7f57\u4e07\u8c61\u3002\u6240\u4ee5\uff0c\u65e0\u8bba\u5982\u4f55\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u578b\uff0c\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u662f\u5426\u5b58\u5728\u8f83\u6df1\u6570\u636e\u9576\u5957\uff0c\u90fd\u53ef\u4ee5\u5c06\u4e4b\u8f6c\u6362\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u7c7b\u578b\u3002\u6839\u672c\u4e0d\u5b58\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u56e0\u683c\u5f0f\u4e0d\u517c\u5bb9\u800c\u65e0\u6cd5\u8f6c\u6362\u7684\u95ee\u9898\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u578b\u5b58\u5728\u7684\u4ef7\u503c\u662f\u4e3a\u4e86\u7b26\u5408GraphQL\u534f\u8bae\uff0c\u5bf9\u5ba2\u6237\u7aef\u4f20\u9012\u7684\u8f93\u5165\u6570\u636e\u8fdb\u884c\u683c\u5f0f\u7ea6\u675f\u3002\u4f46\u5bf9jimmer-sql\u800c\u8a00\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u578b\u7684\u552f\u4e00\u4ef7\u503c\u5c31\u662f\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u3002\u6240\u4ee5\uff0c\u9664\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"toBook"),"\u65b9\u6cd5\u5916\uff0cJava\u4ee3\u7801\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u6ca1\u6709\u5b9a\u4e49\u4efb\u4f55\u5176\u5b83\u65b9\u6cd5\uff0c\u751a\u81f3\u8fdegetter\u65b9\u6cd5\u90fd\u6ca1\u6709\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\uff08\u5f53\u7136\uff0c\u5982\u679c\u60f3\u914d\u5408\u8c03\u8bd5\u5668\u7684\u5c55\u793a\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u4e3a\u5176\u5b9a\u4e49\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"toString"),"\u65b9\u6cd5\uff09\u3002")))),(0,o.kt)("h3",{id:"\u5b9e\u73b0\u53d8\u66f4\u4e1a\u52a1"},"\u5b9e\u73b0\u53d8\u66f4\u4e1a\u52a1"),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u77e5\u9053"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"jimmer-sql\u7684",(0,o.kt)("a",{parentName:"p",href:"./mutation/save-command"},"Save\u6307\u4ee4"),"\uff0c\u5141\u8bb8\u5f00\u53d1\u4f7f\u4eba\u4f7f\u7528\u4e00\u53e5\u8bdd\uff0c\u628a\u4efb\u610f\u590d\u6742\u7684\u5b9e\u4f53\u5bf9\u8c61\u6811\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e0a\u9762\u5b9a\u4e49\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"toBook"),"\u65b9\u6cd5\uff0c\u8f6c\u6362\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u7c7b\u578b\u7684\u5b9e\u4f53\u5bf9\u8c61\u6811\u3002"))),(0,o.kt)("p",null,"\u90a3\u4e48\uff0c\u6570\u636e\u53d8\u66f4\u4e1a\u52a1\u7684\u5b9e\u73b0\u5c31\u5f88\u7b80\u5355\u4e86\u3002"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @MutationMapping\n    @Transactional\n    public Book saveBook(@Argument BookInput input) {\n        return sqlClient\n            .getEntities()\n            .save(\n                // highlight-next-line\n                input.toBook()\n            )\n            .getModifiedEntity();\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    @MutationMapping\n    @Transactional\n    fun saveBook(@Argument input: BookInput): Book =\n        sqlClient\n            .entities\n            .save(\n                // highlight-next-line\n                input.toBook()\n            )\n            .modifiedEntity\n}\n\n")))))}g.isMDXComponent=!0}}]);