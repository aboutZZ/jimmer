/*! For license information please see 5226.3d95cc8e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5226],{50594:function(e,t,o){var n=o(66344);t.Z=void 0;var r=n(o(64938)),a=o(85893),i=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},23508:function(e,t,o){var n=o(66344);t.Z=void 0;var r=n(o(64938)),a=o(85893),i=(0,r.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},82280:function(e,t,o){o.d(t,{Z:function(){return T}});var n=o(80102),r=o(83117),a=o(67294),i=(o(76607),o(93680)),s=o(94780),d=o(69348),l=o(27623),c=o(98885),u=o(96067),p=o(30577),m=o(2734),f=o(51705),h=o(34867),v=o(1588);function b(e){return(0,h.Z)("MuiCollapse",e)}(0,v.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var x=o(85893);const g=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],y=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],"entered"===o.state&&t.entered,"exited"===o.state&&!o.in&&"0px"===o.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,r.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),Z=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,r.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),S=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,r.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=a.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCollapse"}),{addEndListener:d,children:h,className:v,collapsedSize:w="0px",component:z,easing:E,in:C,onEnter:R,onEntered:$,onEntering:k,onExit:I,onExited:M,onExiting:T,orientation:N="vertical",style:W,timeout:P=u.x9.standard,TransitionComponent:A=c.ZP}=o,j=(0,n.Z)(o,g),L=(0,r.Z)({},o,{orientation:N,collapsedSize:w}),V=(e=>{const{orientation:t,classes:o}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,s.Z)(n,b,o)})(L),B=(0,m.Z)(),G=a.useRef(),q=a.useRef(null),D=a.useRef(),F="number"==typeof w?`${w}px`:w,O="horizontal"===N,H=O?"width":"height";a.useEffect((()=>()=>{clearTimeout(G.current)}),[]);const _=a.useRef(null),X=(0,f.Z)(t,_),Y=e=>t=>{if(e){const o=_.current;void 0===t?e(o):e(o,t)}},J=()=>q.current?q.current[O?"clientWidth":"clientHeight"]:0,K=Y(((e,t)=>{q.current&&O&&(q.current.style.position="absolute"),e.style[H]=F,R&&R(e,t)})),Q=Y(((e,t)=>{const o=J();q.current&&O&&(q.current.style.position="");const{duration:n,easing:r}=(0,p.C)({style:W,timeout:P,easing:E},{mode:"enter"});if("auto"===P){const t=B.transitions.getAutoHeightDuration(o);e.style.transitionDuration=`${t}ms`,D.current=t}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[H]=`${o}px`,e.style.transitionTimingFunction=r,k&&k(e,t)})),U=Y(((e,t)=>{e.style[H]="auto",$&&$(e,t)})),ee=Y((e=>{e.style[H]=`${J()}px`,I&&I(e)})),te=Y(M),oe=Y((e=>{const t=J(),{duration:o,easing:n}=(0,p.C)({style:W,timeout:P,easing:E},{mode:"exit"});if("auto"===P){const o=B.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${o}ms`,D.current=o}else e.style.transitionDuration="string"==typeof o?o:`${o}ms`;e.style[H]=F,e.style.transitionTimingFunction=n,T&&T(e)}));return(0,x.jsx)(A,(0,r.Z)({in:C,onEnter:K,onEntered:U,onEntering:Q,onExit:ee,onExited:te,onExiting:oe,addEndListener:e=>{"auto"===P&&(G.current=setTimeout(e,D.current||0)),d&&d(_.current,e)},nodeRef:_,timeout:"auto"===P?null:P},j,{children:(e,t)=>(0,x.jsx)(y,(0,r.Z)({as:z,className:(0,i.Z)(V.root,v,{entered:V.entered,exited:!C&&"0px"===F&&V.hidden}[e]),style:(0,r.Z)({[O?"minWidth":"minHeight"]:F},W),ownerState:(0,r.Z)({},L,{state:e}),ref:X},t,{children:(0,x.jsx)(Z,{ownerState:(0,r.Z)({},L,{state:e}),className:V.wrapper,ref:q,children:(0,x.jsx)(S,{ownerState:(0,r.Z)({},L,{state:e}),className:V.wrapperInner,children:h})})}))}))}));w.muiSupportAuto=!0;var z=w,E=o(55113),C=o(64861),R=o(22627);function $(e){return(0,h.Z)("MuiAccordion",e)}var k=(0,v.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const I=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],M=(0,d.ZP)(E.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${k.region}`]:t.region},t.root,!o.square&&t.rounded,!o.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${k.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${k.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,r.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${k.expanded}`]:{margin:"16px 0"}})));var T=a.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiAccordion"}),{children:d,className:c,defaultExpanded:u=!1,disabled:p=!1,disableGutters:m=!1,expanded:f,onChange:h,square:v=!1,TransitionComponent:b=z,TransitionProps:g}=o,y=(0,n.Z)(o,I),[Z,S]=(0,R.Z)({controlled:f,default:u,name:"Accordion",state:"expanded"}),w=a.useCallback((e=>{S(!Z),h&&h(e,!Z)}),[Z,h,S]),[E,...k]=a.Children.toArray(d),T=a.useMemo((()=>({expanded:Z,disabled:p,disableGutters:m,toggle:w})),[Z,p,m,w]),N=(0,r.Z)({},o,{square:v,disabled:p,disableGutters:m,expanded:Z}),W=(e=>{const{classes:t,square:o,expanded:n,disabled:r,disableGutters:a}=e,i={root:["root",!o&&"rounded",n&&"expanded",r&&"disabled",!a&&"gutters"],region:["region"]};return(0,s.Z)(i,$,t)})(N);return(0,x.jsxs)(M,(0,r.Z)({className:(0,i.Z)(W.root,c),ref:t,ownerState:N,square:v},y,{children:[(0,x.jsx)(C.Z.Provider,{value:T,children:E}),(0,x.jsx)(b,(0,r.Z)({in:Z,timeout:"auto"},g,{children:(0,x.jsx)("div",{"aria-labelledby":E.props.id,id:E.props["aria-controls"],role:"region",className:W.region,children:k})}))]}))}))},64861:function(e,t,o){const n=o(67294).createContext({});t.Z=n},22797:function(e,t,o){o.d(t,{Z:function(){return h}});var n=o(83117),r=o(80102),a=o(67294),i=o(93680),s=o(94780),d=o(69348),l=o(27623),c=o(34867);function u(e){return(0,c.Z)("MuiAccordionDetails",e)}(0,o(1588).Z)("MuiAccordionDetails",["root"]);var p=o(85893);const m=["className"],f=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var h=a.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiAccordionDetails"}),{className:a}=o,d=(0,r.Z)(o,m),c=o,h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(c);return(0,p.jsx)(f,(0,n.Z)({className:(0,i.Z)(h.root,a),ref:t,ownerState:c},d))}))},38895:function(e,t,o){o.d(t,{Z:function(){return y}});var n=o(80102),r=o(83117),a=o(67294),i=o(93680),s=o(94780),d=o(69348),l=o(27623),c=o(15788),u=o(64861),p=o(34867);function m(e){return(0,p.Z)("MuiAccordionSummary",e)}var f=(0,o(1588).Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=o(85893);const v=["children","className","expandIcon","focusVisibleClassName","onClick"],b=(0,d.ZP)(c.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const o={duration:e.transitions.duration.shortest};return(0,r.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],o),[`&.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${f.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${f.expanded}`]:{minHeight:64}})})),x=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}))),g=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}})));var y=a.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiAccordionSummary"}),{children:d,className:c,expandIcon:p,focusVisibleClassName:f,onClick:y}=o,Z=(0,n.Z)(o,v),{disabled:S=!1,disableGutters:w,expanded:z,toggle:E}=a.useContext(u.Z),C=(0,r.Z)({},o,{expanded:z,disabled:S,disableGutters:w}),R=(e=>{const{classes:t,expanded:o,disabled:n,disableGutters:r}=e,a={root:["root",o&&"expanded",n&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",o&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",o&&"expanded"]};return(0,s.Z)(a,m,t)})(C);return(0,h.jsxs)(b,(0,r.Z)({focusRipple:!1,disableRipple:!0,disabled:S,component:"div","aria-expanded":z,className:(0,i.Z)(R.root,c),focusVisibleClassName:(0,i.Z)(R.focusVisible,f),onClick:e=>{E&&E(e),y&&y(e)},ref:t,ownerState:C},Z,{children:[(0,h.jsx)(x,{className:R.content,ownerState:C,children:d}),p&&(0,h.jsx)(g,{className:R.expandIconWrapper,ownerState:C,children:p})]}))}))},11057:function(e,t,o){o.d(t,{Z:function(){return z}});var n=o(80102),r=o(83117),a=o(67294),i=o(93680),s=o(47925),d=o(94780),l=o(41796),c=o(69348),u=o(27623),p=o(15788),m=o(98216),f=o(34867);function h(e){return(0,f.Z)("MuiButton",e)}var v=(0,o(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=o(98363),x=o(85893);const g=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,m.Z)(o.color)}`],t[`size${(0,m.Z)(o.size)}`],t[`${o.variant}Size${(0,m.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,n;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${v.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${v.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,l.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(n=e.palette).getContrastText)?void 0:o.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),S=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var z=a.forwardRef((function(e,t){const o=a.useContext(b.Z),l=(0,s.Z)(o,e),c=(0,u.Z)({props:l,name:"MuiButton"}),{children:p,color:f="primary",component:v="button",className:y,disabled:z=!1,disableElevation:E=!1,disableFocusRipple:C=!1,endIcon:R,focusVisibleClassName:$,fullWidth:k=!1,size:I="medium",startIcon:M,type:T,variant:N="text"}=c,W=(0,n.Z)(c,g),P=(0,r.Z)({},c,{color:f,component:v,disabled:z,disableElevation:E,disableFocusRipple:C,fullWidth:k,size:I,type:T,variant:N}),A=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:a,variant:i,classes:s}=e,l={root:["root",i,`${i}${(0,m.Z)(t)}`,`size${(0,m.Z)(a)}`,`${i}Size${(0,m.Z)(a)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(a)}`]},c=(0,d.Z)(l,h,s);return(0,r.Z)({},s,c)})(P),j=M&&(0,x.jsx)(S,{className:A.startIcon,ownerState:P,children:M}),L=R&&(0,x.jsx)(w,{className:A.endIcon,ownerState:P,children:R});return(0,x.jsxs)(Z,(0,r.Z)({ownerState:P,className:(0,i.Z)(y,o.className),component:v,disabled:z,focusRipple:!C,focusVisibleClassName:(0,i.Z)(A.focusVisible,$),ref:t,type:T},W,{classes:A,children:[j,p,L]}))}))},54776:function(e,t,o){var n=o(83117),r=o(80102),a=o(67294),i=o(98885),s=o(29296),d=o(51705),l=o(2734),c=o(30577),u=o(5340),p=o(85893);const m=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function f(e,t,o){var n;const r=function(e,t,o){const n=t.getBoundingClientRect(),r=o&&o.getBoundingClientRect(),a=(0,u.Z)(t);let i;if(t.fakeTransform)i=t.fakeTransform;else{const e=a.getComputedStyle(t);i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let s=0,d=0;if(i&&"none"!==i&&"string"==typeof i){const e=i.split("(")[1].split(")")[0].split(",");s=parseInt(e[4],10),d=parseInt(e[5],10)}return"left"===e?r?`translateX(${r.right+s-n.left}px)`:`translateX(${a.innerWidth+s-n.left}px)`:"right"===e?r?`translateX(-${n.right-r.left-s}px)`:`translateX(-${n.left+n.width-s}px)`:"up"===e?r?`translateY(${r.bottom+d-n.top}px)`:`translateY(${a.innerHeight+d-n.top}px)`:r?`translateY(-${n.top-r.top+n.height-d}px)`:`translateY(-${n.top+n.height-d}px)`}(e,t,"function"==typeof(n=o)?n():n);r&&(t.style.webkitTransform=r,t.style.transform=r)}const h=a.forwardRef((function(e,t){const o=(0,l.Z)(),h={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},v={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:b,appear:x=!0,children:g,container:y,direction:Z="down",easing:S=h,in:w,onEnter:z,onEntered:E,onEntering:C,onExit:R,onExited:$,onExiting:k,style:I,timeout:M=v,TransitionComponent:T=i.ZP}=e,N=(0,r.Z)(e,m),W=a.useRef(null),P=(0,d.Z)(g.ref,W),A=(0,d.Z)(P,t),j=e=>t=>{e&&(void 0===t?e(W.current):e(W.current,t))},L=j(((e,t)=>{f(Z,e,y),(0,c.n)(e),z&&z(e,t)})),V=j(((e,t)=>{const r=(0,c.C)({timeout:M,style:I,easing:S},{mode:"enter"});e.style.webkitTransition=o.transitions.create("-webkit-transform",(0,n.Z)({},r)),e.style.transition=o.transitions.create("transform",(0,n.Z)({},r)),e.style.webkitTransform="none",e.style.transform="none",C&&C(e,t)})),B=j(E),G=j(k),q=j((e=>{const t=(0,c.C)({timeout:M,style:I,easing:S},{mode:"exit"});e.style.webkitTransition=o.transitions.create("-webkit-transform",t),e.style.transition=o.transitions.create("transform",t),f(Z,e,y),R&&R(e)})),D=j((e=>{e.style.webkitTransition="",e.style.transition="",$&&$(e)})),F=a.useCallback((()=>{W.current&&f(Z,W.current,y)}),[Z,y]);return a.useEffect((()=>{if(w||"down"===Z||"right"===Z)return;const e=(0,s.Z)((()=>{W.current&&f(Z,W.current,y)})),t=(0,u.Z)(W.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[Z,w,y]),a.useEffect((()=>{w||F()}),[w,F]),(0,p.jsx)(T,(0,n.Z)({nodeRef:W,onEnter:L,onEntered:B,onEntering:V,onExit:q,onExited:D,onExiting:G,addEndListener:e=>{b&&b(W.current,e)},appear:x,in:w,timeout:M},N,{children:(e,t)=>a.cloneElement(g,(0,n.Z)({ref:A,style:(0,n.Z)({visibility:"exited"!==e||w?void 0:"hidden"},I,g.props.style)},t))}))}));t.Z=h},63023:function(e,t){var o,n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen");function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case s:case i:case p:case m:return e;default:switch(e=e&&e.$$typeof){case c:case l:case u:case h:case f:case d:return e;default:return t}}case r:return t}}}o=Symbol.for("react.module.reference")},76607:function(e,t,o){o(63023)}}]);