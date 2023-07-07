"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5974],{39511:function(e,t,a){a.d(t,{b:function(){return b}});var n=a(83117),l=a(11057),i=a(78262),r=a(42293),p=a(10155),o=a(15861),m=a(9581),k=a(67294),u=a(54776),d=a(93946),c=a(9137),N=a(61274),s=a(50594),b=(0,k.memo)((function(e){var t=e.buttonText,a=e.fullScreen,n=void 0!==a&&a,u=e.title,b=void 0===u?t:u,v=e.variant,g=void 0===v?"contained":v,f=e.children,C=(0,k.useState)(!1),y=C[0],T=C[1],j=(0,k.useState)(n),w=j[0],M=j[1],x=(0,k.useCallback)((function(){T(!0)}),[]),S=(0,k.useCallback)((function(){T(!1)}),[]),D=(0,k.useCallback)((function(){M((function(e){return!e}))}),[]);return k.createElement(k.Fragment,null,k.createElement(l.Z,{onClick:x,variant:g},t),k.createElement(i.Z,{open:y,onClose:S,fullScreen:w,TransitionComponent:h,maxWidth:"md"},k.createElement(r.Z,{sx:{position:"relative"}},k.createElement(p.Z,null,k.createElement(o.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},b),k.createElement(d.Z,{onClick:D,style:{color:"white"}},w?k.createElement(N.Z,null):k.createElement(c.Z,null)),k.createElement(d.Z,{"aria-label":"close",onClick:S,style:{color:"white"}},k.createElement(s.Z,null)))),k.createElement(m.Z,null,f)))})),h=k.forwardRef((function(e,t){return k.createElement(u.Z,(0,n.Z)({direction:"up",ref:t},e))}))},69980:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return o},metadata:function(){return k},toc:function(){return d}});var n=a(83117),l=a(80102),i=(a(67294),a(3905)),r=a(39511),p=["components"],o={sidebar_position:11,title:"\u6587\u6863\u8d21\u732e\u6307\u5357"},m=void 0,k={unversionedId:"team-work/doc-contribution-guide",id:"team-work/doc-contribution-guide",title:"\u6587\u6863\u8d21\u732e\u6307\u5357",description:"\u57fa\u672c\u89c4\u5219",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/doc-contribution-guide.mdx",sourceDirName:"team-work",slug:"/team-work/doc-contribution-guide",permalink:"/jimmer/zh/docs/team-work/doc-contribution-guide",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/doc-contribution-guide.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"\u6587\u6863\u8d21\u732e\u6307\u5357"},sidebar:"tutorialSidebar",previous:{title:"\u8ba8\u8bba",permalink:"/jimmer/zh/docs/team-work/resource/discuss"}},u={},d=[{value:"\u57fa\u672c\u89c4\u5219",id:"\u57fa\u672c\u89c4\u5219",level:2},{value:"\u5982\u4f55\u5728\u672c\u673a\u8fd0\u884c\u6587\u6863",id:"\u5982\u4f55\u5728\u672c\u673a\u8fd0\u884c\u6587\u6863",level:2},{value:"\u6587\u6863\u76ee\u5f55",id:"\u6587\u6863\u76ee\u5f55",level:2},{value:"MD\u6587\u4ef6\u89c4\u8303",id:"md\u6587\u4ef6\u89c4\u8303",level:2},{value:"\u4e25\u683c\u7684\u7f29\u8fdb",id:"\u4e25\u683c\u7684\u7f29\u8fdb",level:3},{value:"\u6587\u4ef6\u5934",id:"\u6587\u4ef6\u5934",level:3},{value:"\u53ea\u7528\u4e8c\u4e09\u7ea7\u6807\u9898(##, ###)",id:"\u53ea\u7528\u4e8c\u4e09\u7ea7\u6807\u9898-",level:3},{value:"MDX\u6587\u4ef6\u89c4\u8303",id:"mdx\u6587\u4ef6\u89c4\u8303",level:2},{value:"\u6df7\u5165React\u4ee3\u7801",id:"\u6df7\u5165react\u4ee3\u7801",level:3},{value:"\u533a\u5206\u8bed\u8a00\u7684Tabs\u5fc5\u987b\u9075\u5faa\u7684\u89c4\u5219",id:"\u533a\u5206\u8bed\u8a00\u7684tabs\u5fc5\u987b\u9075\u5faa\u7684\u89c4\u5219",level:3},{value:"\u8bed\u6cd5\u7740\u8272\u548c\u4ee3\u7801\u6807\u9898",id:"\u8bed\u6cd5\u7740\u8272\u548c\u4ee3\u7801\u6807\u9898",level:3},{value:"\u4ee3\u7801\u9ad8\u4eae",id:"\u4ee3\u7801\u9ad8\u4eae",level:3},{value:"\u4ee3\u7801\u6807\u53f7",id:"\u4ee3\u7801\u6807\u53f7",level:3},{value:"\u5bf9\u8bdd\u6846",id:"\u5bf9\u8bdd\u6846",level:3},{value:"\u5982\u679c\u5199\u51fa\u6b63\u786e\u7684\u4ee3\u7801",id:"\u5982\u679c\u5199\u51fa\u6b63\u786e\u7684\u4ee3\u7801",level:2}],c={toc:d};function N(e){var t=e.components,a=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u57fa\u672c\u89c4\u5219"},"\u57fa\u672c\u89c4\u5219"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709\u6587\u6863\u7f16\u5199\u76f8\u5173PR\u63d0\u4ea4\u5230\u5206\u652f",(0,i.kt)("inlineCode",{parentName:"strong"},"doc")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e3a\u4f53\u73b0\u6bcf\u4f4d\u4f5c\u8005\u7684\u8d21\u732e\uff0c\u8bf7\u5728\u6bcf\u9875\u6587\u6863\u53f3\u4e0b\u89d2\u7559\u4e0b\u7f72\u540d\u3002\u613f\u7559\u771f\u5b9e\u59d3\u540d\u8005\u7559\u771f\u5b9e\u884c\u4e3a\uff0c\u4e0d\u613f\u8005\u7559\u7f51\u7edc\u6635\u79f0\u3002\u5927\u5bb6\u53ef\u81ea\u7531\u51b3\u5b9a"),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u53ef\u53c2\u89c1facebook relay\u7684\u4e00\u6587\u6863\u9875\u9762",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/docs/tutorial/intro/"},"https://relay.dev/docs/tutorial/intro/"),"\u53f3\u4e0b\u89d2\u7684"),(0,i.kt)("p",{parentName:"admonition"},"Last updated on ",(0,i.kt)("strong",{parentName:"p"},"May 12, 2023")," by ",(0,i.kt)("strong",{parentName:"p"},"Pieter Vanderwerff")),(0,i.kt)("p",{parentName:"admonition"},"\u4e2d\u6587\u65b9\u5f0f\u5219\u53ef\u4e3a"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"\u5f20\u4e09"),"\u66f4\u65b0\u4e8e",(0,i.kt)("strong",{parentName:"p"},"2023\u5e745\u670816\u65e5")),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\uff0c\u591a\u4f4d\u4f5c\u8005\u5171\u540c\u53c2\u4e0e\u540c\u4e00\u7bc7\u6587\u7ae0\u64b0\u5199\uff0c\u7f72\u540d\u4e4b\u95f4\u8bf7\u7528\u591a\u4e2a\u9017\u53f7\u9694\u5f00\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63d0PR\u524d\u8bf7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"yarn build"),"\u9a8c\u8bc1\u6587\u6863\u53ef\u6b63\u786e\u7f16\u8bd1"),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u672c\u673a\u8fd0\u884c\u4e2d\u6587\u6587\u6863\u547d\u4ee4",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start --locale zh"),"\u4e0d\u80fd\u53d1\u73b0\u6240\u6709\u95ee\u9898\uff0c\u53ea\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"yarn build"),"\u624d\u80fd\u53d1\u73b0\u6240\u6709\u95ee\u9898\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9886\u53d6\u6587\u6863\u7f16\u8f91\u524d\u8bf7\u544a\u77e5\u6211\uff0c\u6211\u4f1a\u505a\u8ddf\u8e2a\u8bb0\u5f55\uff0c\u9632\u6b62\u4e0d\u540c\u7684\u4eba\u64b0\u5199\u540c\u4e00\u7bc7\u6587\u7ae0\u5bfc\u81f4\u52b3\u52a8\u6d6a\u8d39\u3002"))),(0,i.kt)("h2",{id:"\u5982\u4f55\u5728\u672c\u673a\u8fd0\u884c\u6587\u6863"},"\u5982\u4f55\u5728\u672c\u673a\u8fd0\u884c\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5NodeJS\u7684LST\u7248\u672c\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"https://nodejs.org/en"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5yarn"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"npm install --global yarn\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u770byarn\u662f\u5426\u5b89\u88c5\u6210\u529f"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"yarn -v\n")),(0,i.kt)("p",{parentName:"li"},"\u5f53\u51fa\u73b0\u5bf9\u5e94\u7248\u672c\u53f7\u8bf4\u660e\u5b89\u88c5\u6210\u529f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5VS Code"),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u548cIntellij\u4e0d\u540c\uff0cVSCode\u4e0d\u4f1a\u81ea\u52a8\u4fdd\u5b58"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9996\u6b21Fork Jimmer\u4ee3\u7801\uff0c\u8bbe\u672c\u673a\u76ee\u5f55\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"<jimmer-home1>"),"\uff0c\u5e76",(0,i.kt)("em",{parentName:"p"},"\u5207\u6362\u5230doc\u5206\u652f")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u6587\u6863\u534f\u540c\u7edf\u4e00\u5728doc\u5206\u652f\u4e0b\u8fdb\u884c\uff0c\u7f16\u5199\u5b8c\u6210\u5411Jimmer\u539f\u4ed3\u5e93\u63d0PR\u4e5f\u4e00\u6837\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u53e6\u5916\u4e00\u4e2a\u76ee\u5f55\u4e0b\uff0c\u518d\u6b21Fork Jimmer\u4ee3\u7801\uff0c\u8bbe\u672c\u673a\u76ee\u5f55\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"<jimmer-home2>"),"\uff08\u539f\u56e0\u7a0d\u540e\u89e3\u91ca\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fdb\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"<jimmer-home2>"),", \u5207\u6362\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"orphan"),"\u5206\u652f\uff0c\u8fd9\u662f\u4e00\u4e2a\u5b64\u513f\u5206\u652f\uff0c\u5207\u6362\u5230\u8fd9\u4e2a\u5206\u652f\u4f1a\u5bfc\u81f4\u4e4b\u524dclone\u5230\u672c\u5730\u7684\u6240\u6709\u4ee3\u7801\u88ab\u6e05\u7a7a\uff0c\u66ff\u6362\u4e3a\u82e5\u5e72\u56fe\u7247\u6587\u4ef6(PNG, JPEG, SVG)"),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u4e3a\u9632\u6b62\u56fe\u7247\u6587\u4ef6\u8ba9git\u5386\u53f2\u53d8\u5927\u5927\u81f4\u4e0b\u8f7d\u56f0\u96be\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"orphan"),"\u88ab\u8bbe\u8ba1\u4e3a\u4e00\u4e2a\u5b64\u513f\u5206\u652f\uff0c\u4e13\u95e8\u4fdd\u5b58\u56fe\u7247\u6587\u4ef6\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u8981\u4e24\u6b21Fork Jimmer\u4ee3\u7801\u7684\u539f\u56e0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u76ee\u5f55\u5b64\u513f\u5206\u652f\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"<jimmer-home2>/doc/static/img"),"\u4e0b\u6240\u6709\u56fe\u7247\u6587\u4ef6\u590d\u5236\u5230\u4ee3\u7801\u5206\u652f\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"<jimmer-home1>/doc/static/img"),"\u4e0b\uff0c\u6b64\u65f6\u4ee3\u7801\u5206\u652f\u624d\u5177\u5907\u5b8c\u6574\u7684\u8d44\u6e90"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"\u590d\u5236\u8fd9\u4e9b\u56fe\u7247\u540e\uff0c\u53ef\u653e\u5fc3\u63d0\u4ea4PR\uff0c\u8fd9\u4e9b\u56fe\u7247\u6587\u4ef6\u4f1a\u88ab.gitignore"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7eed\u6b65\u9aa4\u65e0\u8bef\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"<jimmer-home2>"),"\u53ef\u4ee5\u6c38\u4e45\u4ece\u672c\u673a\u5220\u9664")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6253\u5f00\u547d\u4ee4\u884c\uff0c\u8fdb\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"<jimmer-home1>/doc"),"\u3002\u518d\u6b21\u5f3a\u8c03\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"doc"),"\u5206\u652f\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u58f0\u660e\u7684\u6240\u6709\u4f9d\u8d56\u5305"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"yarn\n")),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u6ca1\u6709\u8fd9\u4e00\u6b65\u5c06\u5bfc\u81f4\u4e0b\u65b9",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start"),"\u7b49\u547d\u4ee4\u62a5\u9519\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus"),"\u4e0d\u662f\u5185\u90e8\u6216\u5916\u90e8\u547d\u4ee4\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u82f1\u6587\u6587\u6863"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"yarn start\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4e2d\u6587\u6587\u6863"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"yarn start --locale zh\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u66b4\u9732\u6240\u6709\u7f16\u8bd1\u9519\u8bef\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"yarn build\n")),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u5f88\u91cd\u8981\uff0cyarn start\u547d\u4ee4\u65e0\u6cd5\u66b4\u9732\u975e\u6cd5\u94fe\u63a5\u9519\u8bef"))))),(0,i.kt)("h2",{id:"\u6587\u6863\u76ee\u5f55"},"\u6587\u6863\u76ee\u5f55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u82f1\u6587\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<jimmer-home1>"),"/doc/docs/\uff0c\u672c\u6b21\u534f\u4f5c\u65e0\u5173"),(0,i.kt)("li",{parentName:"ul"},"\u4e2d\u6587\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"<jimmer-home1>"),"/doc/118n/zh/docusaurus-plugin-content-docs/current\uff0c\u672c\u6b21\u534f\u4f5c\u76ee\u6807\u76ee\u5f55")),(0,i.kt)("h2",{id:"md\u6587\u4ef6\u89c4\u8303"},"MD\u6587\u4ef6\u89c4\u8303"),(0,i.kt)("h3",{id:"\u4e25\u683c\u7684\u7f29\u8fdb"},"\u4e25\u683c\u7684\u7f29\u8fdb"),(0,i.kt)("p",null,"\u65e0\u8bba",(0,i.kt)("inlineCode",{parentName:"p"},"MD"),"\u6587\u4ef6\u8fd8\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"MDX"),"\u6587\u4ef6\uff0c\u9664\u6240\u6709\u7f16\u53f7(1, -)\u540e\u90fd\u52a0VSCode\u7684Tab\uff08\u56db\u7a7a\u683cTab\uff0c\u6263\u9664\u7f16\u53f7\u672c\u8eab\uff0c\u6700\u591a\u4e09\u4e2a\u7a7a\u683c\uff09\uff0c\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"##  \u4e8c\u7ea7\u6807\u9898\n\n1.  \u7b2c\u4e00\u70b9\n    \n    -   \u6ce8\u610f\u4e8b\u98791\n    -   \u6ce8\u610f\u4e8b\u98792\n\n2.  \u7b2c\u4e8c\u70b9\n    \n    -   \u6ce8\u610f\u4e8b\u98791\n    -   \u6ce8\u610f\u4e8b\u98792\n\n        \u5178\u6545\u6765\u6e90\n        >-  \u5b50\u66fe\u7ecf\u66f0\u8fc7\uff0cXXX\n        >-  \u6cf0\u6208\u5c14\u66fe\u8bf4\u8fc7\uff0cYYY\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u89c4\u5219\u975e\u5e38\u91cd\u8981\uff0c\u4efb\u4f55\u6587\u672c\u5f00\u5934\u504f\u79fb\u91cf\u4e00\u5b9a\u662f4\u7684\u6574\u6570\u500d\u3002\u56e0\u4e3a\uff0c\u672c\u6587\u6863\u5e38\u5e38\u6df7\u5165\u4ee3\u7801\uff0c\u751a\u81f3\uff0c\u548cMD\u6587\u4ef6\u4e0d\u540c\uff0cMDX\u6587\u4ef6\u5e38\u5e38\u6df7\u5165React\u7ec4\u4ef6\u3002\u8fd9\u79cd\u6df7\u5408\u7f16\u7a0b\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c\u6ca1\u6709\u5982\u6b64\u4e25\u683c\u7684\u7f29\u8fdb\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5de8\u5751\uff01")),(0,i.kt)("h3",{id:"\u6587\u4ef6\u5934"},"\u6587\u4ef6\u5934"),(0,i.kt)("p",null,"\u4e5f\u8bb8\u4f60\u53d1\u73b0\u4e86\uff0c\u6240\u6709\u6587\u4ef6\uff08\u65e0\u8bba",(0,i.kt)("inlineCode",{parentName:"p"},"MD"),"\u8fd8\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"MDX"),"\uff09\uff0c\u5934\u90e8\u683c\u5f0f\u7edf\u4e00"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\nsidebar_position: <\u6570\u5b57>\ntitle: <\u6807\u9898>\n---\n")),(0,i.kt)("p",null,"\u867d\u7136\uff0c\u8fd9\u4e9b\u6587\u4ef6\u90fd\u662f\u6211\u5efa\u597d\u4e86\u7684\uff0c\u4f46\u5927\u5bb6\u8981\u660e\u767d\u5934\u7684\u4f5c\u7528\u3002\u8fd9\u6587\u4ef6\u5934docaurus\u7684\u7ea6\u5b9a\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"title\uff1a\u5f53\u524d\u6587\u6863\u9875\u9762\u7684\u4e00\u7ea7\u6807\u9898\uff0c\u76f8\u5f53\u4e8emarkdown\u6587\u4ef6\u7684\u201c#\u201d\uff0c\u5b83\u4e5f\u662f\u6587\u6863\u5728\u5de6\u8fb9\u76ee\u5f55\u7ed3\u6784\u4e2d\u540d\u79f0\uff0c\u6240\u4ee5\u5c3d\u91cf\u4e0d\u8981\u592a\u957f\uff0c\u4e0d\u8981\u5bfc\u81f4\u5de6\u4fa7\u6811\u6362\u884c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sidebar_position\uff1a\u5f53\u524d\u6587\u6587\u6863\u9875\u9762\uff0c\u5728\u5de6\u4fa7\u6811\u4e2d\u540c\u7ea7\u8282\u70b9\u4e2d\u6392\u5e8f\u3002\u540c\u7ea7\u9875\u9762\u7684\u6b64\u503c\u6709\u5927\u5c0f\u5173\u7cfb\u5373\u53ef\uff0c\u53ef\u8df3\u8dc3\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u5f55\u4e0d\u662f\u6587\u4ef6\uff0c\u4e0d\u80fd\u5199\u6587\u4ef6\u5934\uff0c\u56e0\u6b64",(0,i.kt)("inlineCode",{parentName:"p"},"index.md"),"\u8868\u793a\u76ee\u5f55\u5934\uff0c\u4e5f\u53ef\u9644\u5e26\u7b80\u77ed\u7684\u6b63\u6587\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"index.md"),"\u8868\u793a\u76ee\u5f55\u672c\u8eab\uff0c\u5176\u4ed6\u6587\u4ef6\u8868\u793a\u76ee\u5f55\u7684\u4e0b\u7ea7\u6587\u4ef6\uff0c\u4e24\u79cd\u6587\u4ef6\u7684\u542b\u4e49\u5b8c\u5168\u4e0d\u540c\u3002"))),(0,i.kt)("h3",{id:"\u53ea\u7528\u4e8c\u4e09\u7ea7\u6807\u9898-"},"\u53ea\u7528\u4e8c\u4e09\u7ea7\u6807\u9898(##, ###)"),(0,i.kt)("p",null,"docusaurus\u4e2d\uff0c\u6587\u4ef6\u6700\u597d\u53ea\u6709\u4e8c\u7ea7\u6807\u9898\u548c\u4e09\u7ea7\u6807\u9898\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6587\u4ef6\u5934\u672c\u8eab\u5c31\u662f\u4e00\u7ea7\u6807\u9898\uff0c\u6240\u4ee5\uff0c\u4e0d\u80fd\u5199\u4e00\u7ea7\u6807\u9898")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u56db\u7ea7\u6807\u9898\u5f00\u59cb\uff0c\u90fd\u4f1a\u88ab\u53f3\u4fa7\u5bfc\u822a\u5ffd\u7565\uff0c\u6240\u4ee5\u56db\u7ea7\u6216\u66f4\u7ec6\u7684\u7684\u6807\u9898\u65e0\u7528\u3002"))),(0,i.kt)("h2",{id:"mdx\u6587\u4ef6\u89c4\u8303"},"MDX\u6587\u4ef6\u89c4\u8303"),(0,i.kt)("h3",{id:"\u6df7\u5165react\u4ee3\u7801"},"\u6df7\u5165React\u4ee3\u7801"),(0,i.kt)("p",null,"MDX\u6df7\u5165React\u4ee3\u7801\u7684\u8bed\u6cd5\u5f88\u7279\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bfc\u5165\u8bed\u53e5\u5fc5\u987b\u7d27\u8ddf\u6587\u4ef6\u5934\uff0c\u4e4b\u95f4\u4e0d\u5f97\u51fa\u73b0\u4efb\u4f55\u975e\u7a7a\u884c\u6b63\u6587\uff0c\u5426\u5219\u7f16\u8bd1\u62a5\u9519"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\u6587\u4ef6\u5934\uff0c\u7565\n\nimport Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63d2\u5165React\u5143\u7d20\uff0c\u6839\u5143\u5fc5\u987b\u9075\u5faa\u8bb8markdown\u7684\u7f29\u8fdb\u3002\u53e6\u5916\uff0c\u5b50\u5143\u7d20\u65e0\u8bba\u6709\u591a\u6df1\uff0c\u90fd\u4e0d\u5f97\u7f29\u8fdb\uff0c\u5426\u5219\u7f16\u8bd1\u62a5\u9519"),(0,i.kt)("p",{parentName:"li"},"\u6bd4\u5982"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'-   \u5f53\u8fd9\u79cd\u60c5\u51b5\u51fa\u73b0\u65f6\uff0c\u4f60\u53ef\u4ee5\u8fd9\u4e48\u505a\n\n    <Tabs groupId="language">\n    <TabItem value="java" label="Java">\n    \u7565\n    </TabItem>\n    <TabItem value="kotlin" label="Kotlin">\n    \u7565\n    </TabItem>\n    </Tabs>\n')),(0,i.kt)("p",{parentName:"li"},"\u867d\u7136\u6574\u4f53\u9075\u5faa\u4e86Markdown\u7684\u7f29\u8fdb\uff0c\u4f46\u662fReact\u7236\u5b50\u5143\u7d20\u4e4b\u95f4\u6ca1\u6709\u7f29\u8fdb\uff0c\u4efb\u4f55\u5c1d\u8bd5\u4f7f\u7528\u7c7b\u4f3cHTML\u7f29\u8fdb\u6765\u63d0\u9ad8\u53ef\u8bfb\u6027\u7684\u5c1d\u8bd5\u90fd\u5c06\u83b7\u5f97\u7f16\u8bd1\u62a5\u9519\u3002"),(0,i.kt)("p",{parentName:"li"},"\u8bda\u7136\uff0creact\u7ec4\u4ef6\u5185\u90e8\u4e0d\u5f97\u7f29\u8fdb\u5f88\u96be\u53d7\uff0c\u4f46\u8fd9\u5c31\u662fMDX\u6587\u4ef6\u7684\u7ea6\u5b9a\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React\u5185\u90e8\u518d\u6df7\u5165Markdown, \u5fc5\u987b\u5728Markdown\u4e0a\u4e0b\u7559\u51fa\u7a7a\u884c\uff0c\u5426\u5219\u7f16\u8bd1\u62a5\u9519"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<Tabs groupId="language">\n<TabItem value="java" label="Java">\n\n`` `java\nSystem.out.println("Hello world");\n`` `\n\n</TabItem>\n<TabItem value="kotlin" label="Kotlin">\n\n`` `kt\nprintln("Hello world")\n`` `\n\n</TabItem>\n</Tabs>\n')),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u4ee3\u7801\u4e2d\u5e94\u8be5\u662f","`","`","`","\uff0c\u800c\u975e","`","`"," ","`"," \u8fd9\u662f\u56e0\u4e3a\u4ee3\u7801\u5957\u5a03\u5bfc\u81f4\u95ee\u9898\uff0c\u4e0d\u5fc5\u5728\u610f")),(0,i.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\u4e0a\u9762\u7684\u7a7a\u884c\uff0c\u90fd\u53d1\u751f\u5728React\u5d4c\u5165Markdown\u7684\u65f6\uff0c\u82e5\u975e\u5982\u6b64\u5fc5\u7136\u62a5\u9519\u3002\u5982\u679c\u8bfb\u8005\u65e0MDX\u7684\u80cc\u666f\u77e5\u8bc6\uff0c\u5fc5\u7136\u8bc4\u4ef7\u4e3a\uff1a\u201c\u8be5\u7a7a\u884c\u7684\u5730\u65b9\u6ca1\u7a7a\u884c\uff0c\u4e0d\u8be5\u7a7a\u884c\u7684\u5730\u65b9\u7a7a\u884c\u4e86\u201d"))),(0,i.kt)("h3",{id:"\u533a\u5206\u8bed\u8a00\u7684tabs\u5fc5\u987b\u9075\u5faa\u7684\u89c4\u5219"},"\u533a\u5206\u8bed\u8a00\u7684Tabs\u5fc5\u987b\u9075\u5faa\u7684\u89c4\u5219"),(0,i.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tabs\u7684groupId\u88ab\u6307\u5b9a\u6210\u4e86language"),(0,i.kt)("li",{parentName:"ul"},"TabItem\u7684value\u88ab\u6307\u5b9a\u6210\u4e86java\u6216kotlin")),(0,i.kt)("p",null,"\u8fd9\u975e\u5e38\u91cd\u8981\uff0c\u6574\u4e2a\u6587\u6863\u4e2d\u6240\u6709j/k\u5207\u6362Tab\u90fd\u5982\u6b64\u914d\u7f6e\uff0c\u624d\u80fd100%\u8054\u52a8"),(0,i.kt)("h3",{id:"\u8bed\u6cd5\u7740\u8272\u548c\u4ee3\u7801\u6807\u9898"},"\u8bed\u6cd5\u7740\u8272\u548c\u4ee3\u7801\u6807\u9898"),(0,i.kt)("p",null,"\u4e5f\u8bb8\u4f60\u53d1\u73b0\u4e86\uff0c\u4e0a\u9762\u4ee3\u7801\u4e2d","`","`","`","\u540e\u9762\u6709java\u6216kotlin\uff0c\u8fd9\u8868\u793a\u8bf7\u6c42docusaurus\u7684\u8bed\u6cd5\u7740\u8272\u3002"),(0,i.kt)("p",null,"\u6211\u5df2\u7ecf\u914d\u7f6e\u7684\u8bed\u6cd5\u7740\u8272\u9009\u9879\u6709\uff1ajava\u3001kotin\u3001sql\u3001ts\u3001json\u3001xml\u3001gradle"),(0,i.kt)("p",null,"\u53e6\u5916, docusaurus\u7684\u8fd8\u53ef\u4ee5\u4e3a\u4ee3\u7801\u5757\u914d\u7f6e\u6807\u9898\u680f\uff0c\u6bd4\u5982: ","`","`","`",'java title="Book.java"\u3002'),(0,i.kt)("h3",{id:"\u4ee3\u7801\u9ad8\u4eae"},"\u4ee3\u7801\u9ad8\u4eae"),(0,i.kt)("p",null,"\u9605\u8bfb\u8fc7Jimmer\u7684\u5c0f\u4f19\u4f34\uff0c\u4e00\u5b9a\u80fd\u53d1\u73b0Jimmer\u4e2d\u5b58\u5728\u4ee3\u7801\u9ad8\u4eae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int a = 1;\nint b = 2;\n// highlight-next-line\nint c = a + b;\nSystem.out.println(c);\n")),(0,i.kt)("p",null,"\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u9ad8\u4eae\u4ee3\u7801\u524d\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"// highlight-next-line"),"\u5373\uff0c\u5982\u679cdraft\u5bf9\u8c61\u7684\u5f15\u7528\u5173\u8054\u88ab\u8bbe\u7f6e\u8fc7\u4e14\u88ab\u8bbe\u7f6e\u4e3a\u975enull\uff0c\u90a3\u4e48\u8be5\u65b9\u6cd5\u4e00\u5b9a\u8fd4\u56dedraft\u5bf9\u8c61\u3002\u8fd9\u6837\uff0c\u7528\u6237\u5c31\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u66f4\u6df1\u7684\u5173\u8054\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5f53\u7136\uff0c\u56e0\u4e3a\u8bed\u8a00\u4e0d\u901a\u3002\u9ad8\u4eae\u8bed\u6cd5\u6709\u8f7b\u5fae\u53d8\u5316\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"/* highlight-next-line */"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!-- highlight-next-line --\x3e"),"\u3002"),(0,i.kt)("h3",{id:"\u4ee3\u7801\u6807\u53f7"},"\u4ee3\u7801\u6807\u53f7"),(0,i.kt)("p",null,"\u5f53\u4e00\u4e2a\u4ee3\u7801\u5224\u65ad\u53ea\u6709\u4e00\u4e2a\u5730\u65b9\u9700\u8981\u8bf4\u660e\u65f6\uff0c\u4ee3\u7801\u9ad8\u4eae\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4ee3\u7801\u6709\u591a\u5904\u9700\u8981\u8bf4\u660e\uff0c\u6bd4\u5982\u524d\u6bb5\u65f6\u95f4\u7f16\u5199\u7684",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/jimmer/zh/docs/tutorial/query/complex-query"},"\u65b0\u6587\u6863\u9875\u9762"),"\uff0c\u5f88\u591a\u5730\u65b9\u4ee3\u7801\u9700\u8981\u591a\u5904\u8bf4\u660e\u3002\u5f88\u663e\u7136\uff0c\u5230\u5904\u9ad8\u4eae\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u9009\u62e9\uff0c\u52a0\u7f16\u53f7\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u7167\u987e\u5f00\u53d1\u4eba\u5458\u9605\u8bfbspring\u6587\u6863\u5f62\u6210\u7684\u4e60\u60ef\uff0c\u65b0\u6587\u6863\u9605\u8bfb\u9700\u8981\u591a\u5904\u63a2\u8ba8\u7684\u4ee3\u7801\u91c7\u7528\u9ed1\u5e95unicode\u6570\u5b57\u5b57\u7b26\u3002\u4e3a\u4e86\u65b9\u4fbf\u5927\u5bb6\u62f7\u8d1d\uff0c10\u4e2a\u5b57\u7b26\u7f57\u5217\u5982\u4e0b"),(0,i.kt)("p",null,"\u24ff","\u2776","\u2777","\u2778","\u2779","\u277a","\u277b","\u277c","\u277d","\u277e"),(0,i.kt)("h3",{id:"\u5bf9\u8bdd\u6846"},"\u5bf9\u8bdd\u6846"),(0,i.kt)("p",null,"\u5728\u76ee\u524d\u9996\u9875\u4e2d\uff0c\u91c7\u7528\u5bf9\u8bdd\u6846\u4ea4\u4e92\u5c55\u793a\u5b8c\u5168\u4e0d\u8bf4\u4e0d\u884c\u65e0\u6761\u4ef6\u8bf4\u53c8\u788d\u773c\u7684\u5185\u5bb9\u3002\u8c03\u7528Jimmer\u6587\u6863\u81ea\u5b9a\u4e49\u5bf9\u8bdd\u6846\u7684\u65b9\u6cd5\u5982\u4e0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bfc\u5165"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ViewMore } from '@site/src/components/ViewMore';\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<ViewMore buttonText="\u5bf9\u8bdd\u6846\u6548\u679c\u9884\u89c8" title="\u5bf9\u8bdd\u6846\u6548\u679c\u9884\u89c8" fullScreen={false}>\n\n\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u8ba9\u5d4c\u5165\u4efb\u610f\u590d\u6742\u7684Markdown\u548cReact\u6df7\u5408\u4f53\u54e6\n\n</ViewMore>\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"  \u6ce8\u610f\uff1a\u4e4b\u524d\u8ba8\u8bba\u8fc7\uff0creact\u5d4c\u5165markdown\u9700\u8981\u7559\u7a7a\u884c")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"buttonText: \u6309\u94ae\u6587\u5b57"),(0,i.kt)("li",{parentName:"ul"},"title: \u5bf9\u8bdd\u6846\u6807\u9898"),(0,i.kt)("li",{parentName:"ul"},"fullScreen: \u6a21\u5f0f\u662f\u5426\u6700\u5927\u5316",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"  \u6ce8\u610f\uff1a\u6b64\u5c5e\u6027\u53ef\u4ee5\u4e0d\u7ed9")))))),(0,i.kt)(r.b,{buttonText:"\u5bf9\u8bdd\u6846\u6548\u679c\u9884\u89c8",title:"\u5bf9\u8bdd\u6846\u6548\u679c\u9884\u89c8",mdxType:"ViewMore"},(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u8ba9\u5d4c\u5165\u4efb\u610f\u590d\u6742\u7684Markdown\u548cReact\u6df7\u5408\u4f53\u54e6")),(0,i.kt)("h2",{id:"\u5982\u679c\u5199\u51fa\u6b63\u786e\u7684\u4ee3\u7801"},"\u5982\u679c\u5199\u51fa\u6b63\u786e\u7684\u4ee3\u7801"),(0,i.kt)("p",null,"\u6587\u6863\u9700\u8981\u7f16\u5199\u6b63\u5e38\u7684java/kotlin\u4ee3\u7801\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u9700\u8981\u63d0\u4f9b\u751f\u6210\u7684SQL\uff0c\u5982\u679c\u4fdd\u8bc1java\u3001kotlin\u3001SQL\u4ee3\u7801\u7684\u6b63\u786e\u5462\uff1f"),(0,i.kt)("p",null,"\u672c\u6587\u7684\u4e2d\u7684\u5b9e\u4f53\u53d6\u81ea\u5b98\u65b9\u4f8b\u5b50\u7684BookStore\u3001Book\u3001Author\u3001TreeNode\u56db\u4e2a\u7c7b\u578b\u3002\u7136\u800c\uff0c\u9664\u62e6\u622a\u5668\u548c\u8fc7\u6ee4\u7684\u5916\uff0c\u5927\u90e8\u5206\u6587\u6863\u90fd\u4e0d\u9700\u8981createdTime, modfiedTime\u548ctenant\u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u4e3a\u6b64\uff0c\u514b\u9686",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/for-doc"},"https://github.com/babyfish-ct/for-doc"),"\u5e76\u57fa\u4e8e\u5176\u4fee\u6539\u4ee3\u7801\u5373\u53ef\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/for-doc"},"https://github.com/babyfish-ct/for-doc"),"\u5305\u542b\u4e24\u4e2a\u5b50\u9879\u76ee"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"for-doc-java\uff0c\u8bf7\u4fee\u6539JApp\u7c7b"),(0,i.kt)("li",{parentName:"ul"},"for-doc-kotlin\uff0c\u8bf7\u4fee\u6539KApp\u7c7b")),(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e2a\u4e24\u4e2a\u7b80\u5316\u5230\u6781\u81f4\u7684Jimmer\u7a0b\u5e8f\uff0c\u65e0\u5916\u90e8\u73af\u5883\u4f9d\u8d56\u4e14\u81ea\u5efa\u6570\u636e\u5e93\u3002\u7528\u6765\u4fdd\u8bc1\u5404\u6587\u6863\u4e2d\u7684Java\u3001Kotlin\u3001SQL\u4ee3\u7801\u4e00\u81f4\u5f88\u65b9\u4fbf\u3002")))}N.isMDXComponent=!0}}]);