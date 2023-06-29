"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7141],{70917:function(e,t,n){var o;n.d(t,{F4:function(){return p},xB:function(){return s}});var r=n(67294),i=(n(68357),n(54880)),l=(n(8679),n(70444)),u=n(73772),a=(o||(o=n.t(r,2))).useInsertionEffect?(o||(o=n.t(r,2))).useInsertionEffect:r.useLayoutEffect,s=(0,i.w)((function(e,t){var n=e.styles,o=(0,u.O)([n],void 0,(0,r.useContext)(i.T)),s=(0,r.useRef)();return a((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,i=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==i&&(r=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),s.current=[n,r],function(){n.flush()}}),[t]),a((function(){var e=s.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,l.My)(t,o.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",o,n,!1)}}),[t,o.name]),null}));function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.O)(t)}var p=function(){var e=c.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},74976:function(e,t,n){n.d(t,{Z:function(){return K}});var o=n(83117),r=n(80102),i=n(67294),l=n(93680),u=n(94780),a=n(42151),s=n(27623),c=n(51705),p=n(2068),d=n(18791);var f=n(21073),h=n(220);function m(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function v(e,t,n){return null!=n[t]?n[t]:e.props[t]}function b(e,t,n){var o=m(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var l in e)l in t?i.length&&(r[l]=i,i=[]):i.push(l);var u={};for(var a in t){if(r[a])for(o=0;o<r[a].length;o++){var s=r[a][o];u[r[a][o]]=n(s)}u[a]=n(a)}for(o=0;o<i.length;o++)u[i[o]]=n(i[o]);return u}(t,o);return Object.keys(r).forEach((function(l){var u=r[l];if((0,i.isValidElement)(u)){var a=l in t,s=l in o,c=t[l],p=(0,i.isValidElement)(c)&&!c.props.in;!s||a&&!p?s||!a||p?s&&a&&(0,i.isValidElement)(c)&&(r[l]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:c.props.in,exit:v(u,"exit",e),enter:v(u,"enter",e)})):r[l]=(0,i.cloneElement)(u,{in:!1}):r[l]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:v(u,"exit",e),enter:v(u,"enter",e)})}})),r}var y=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},g=function(e){function t(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,f.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,r=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,o=l,m(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:v(e,"appear",n),enter:v(e,"enter",n),exit:v(e,"exit",n)})}))):b(e,r,l),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,o.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),l=this.state.contextValue,u=y(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?i.createElement(h.Z.Provider,{value:l},u):i.createElement(h.Z.Provider,{value:l},i.createElement(t,o,u))},t}(i.Component);g.propTypes={},g.defaultProps={component:"div",childFactory:function(e){return e}};var Z=g,x=n(70917),R=n(85893);var E=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:r,rippleY:u,rippleSize:a,in:s,onExited:c,timeout:p}=e,[d,f]=i.useState(!1),h=(0,l.Z)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:a,height:a,top:-a/2+u,left:-a/2+r},v=(0,l.Z)(n.child,d&&n.childLeaving,o&&n.childPulsate);return s||d||f(!0),i.useEffect((()=>{if(!s&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,s,p]),(0,R.jsx)("span",{className:h,style:m,children:(0,R.jsx)("span",{className:v})})},S=n(1588);var w=(0,S.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const M=["center","classes","className"];let T,k,C,V,P=e=>e;const z=(0,x.F4)(T||(T=P`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),B=(0,x.F4)(k||(k=P`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),L=(0,x.F4)(C||(C=P`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),I=(0,a.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),$=(0,a.ZP)(E,{name:"MuiTouchRipple",slot:"Ripple"})(V||(V=P`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),w.rippleVisible,z,550,(({theme:e})=>e.transitions.easing.easeInOut),w.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),w.child,w.childLeaving,B,550,(({theme:e})=>e.transitions.easing.easeInOut),w.childPulsate,L,(({theme:e})=>e.transitions.easing.easeInOut));var N=i.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiTouchRipple"}),{center:u=!1,classes:a={},className:c}=n,p=(0,r.Z)(n,M),[d,f]=i.useState([]),h=i.useRef(0),m=i.useRef(null);i.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const v=i.useRef(!1),b=i.useRef(null),y=i.useRef(null),g=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(b.current)}),[]);const x=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:o,rippleSize:r,cb:i}=e;f((e=>[...e,(0,R.jsx)($,{classes:{ripple:(0,l.Z)(a.ripple,w.ripple),rippleVisible:(0,l.Z)(a.rippleVisible,w.rippleVisible),ripplePulsate:(0,l.Z)(a.ripplePulsate,w.ripplePulsate),child:(0,l.Z)(a.child,w.child),childLeaving:(0,l.Z)(a.childLeaving,w.childLeaving),childPulsate:(0,l.Z)(a.childPulsate,w.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:r},h.current)])),h.current+=1,m.current=i}),[a]),E=i.useCallback(((e={},t={},n)=>{const{pulsate:o=!1,center:r=u||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&v.current)return void(v.current=!1);"touchstart"===(null==e?void 0:e.type)&&(v.current=!0);const l=i?null:g.current,a=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let s,c,p;if(r||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;s=Math.round(t-a.left),c=Math.round(n-a.top)}if(r)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-s),s)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===y.current&&(y.current=()=>{x({pulsate:o,rippleX:s,rippleY:c,rippleSize:p,cb:n})},b.current=setTimeout((()=>{y.current&&(y.current(),y.current=null)}),80)):x({pulsate:o,rippleX:s,rippleY:c,rippleSize:p,cb:n})}),[u,x]),S=i.useCallback((()=>{E({},{pulsate:!0})}),[E]),T=i.useCallback(((e,t)=>{if(clearTimeout(b.current),"touchend"===(null==e?void 0:e.type)&&y.current)return y.current(),y.current=null,void(b.current=setTimeout((()=>{T(e,t)})));y.current=null,f((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:S,start:E,stop:T})),[S,E,T]),(0,R.jsx)(I,(0,o.Z)({className:(0,l.Z)(a.root,w.root,c),ref:g},p,{children:(0,R.jsx)(Z,{component:null,exit:!0,children:d})}))})),F=n(34867);function j(e){return(0,F.Z)("MuiButtonBase",e)}var D=(0,S.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const O=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],A=(0,a.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${D.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var K=i.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:f=!1,children:h,className:m,component:v="button",disabled:b=!1,disableRipple:y=!1,disableTouchRipple:g=!1,focusRipple:Z=!1,LinkComponent:x="a",onBlur:E,onClick:S,onContextMenu:w,onDragLeave:M,onFocus:T,onFocusVisible:k,onKeyDown:C,onKeyUp:V,onMouseDown:P,onMouseLeave:z,onMouseUp:B,onTouchEnd:L,onTouchMove:I,onTouchStart:$,tabIndex:F=0,TouchRippleProps:D,touchRippleRef:K,type:X}=n,U=(0,r.Z)(n,O),Y=i.useRef(null),_=i.useRef(null),H=(0,c.Z)(_,K),{isFocusVisibleRef:W,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=i.useState(!1);b&&Q&&ee(!1),i.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const oe=te&&!y&&!b;function re(e,t,n=g){return(0,p.Z)((o=>{t&&t(o);return!n&&_.current&&_.current[e](o),!0}))}i.useEffect((()=>{Q&&Z&&!y&&te&&_.current.pulsate()}),[y,Z,Q,te]);const ie=re("start",P),le=re("stop",w),ue=re("stop",M),ae=re("stop",B),se=re("stop",(e=>{Q&&e.preventDefault(),z&&z(e)})),ce=re("start",$),pe=re("stop",L),de=re("stop",I),fe=re("stop",(e=>{G(e),!1===W.current&&ee(!1),E&&E(e)}),!1),he=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),q(e),!0===W.current&&(ee(!0),k&&k(e)),T&&T(e)})),me=()=>{const e=Y.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},ve=i.useRef(!1),be=(0,p.Z)((e=>{Z&&!ve.current&&Q&&_.current&&" "===e.key&&(ve.current=!0,_.current.stop(e,(()=>{_.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!b&&(e.preventDefault(),S&&S(e))})),ye=(0,p.Z)((e=>{Z&&" "===e.key&&_.current&&Q&&!e.defaultPrevented&&(ve.current=!1,_.current.stop(e,(()=>{_.current.pulsate(e)}))),V&&V(e),S&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&S(e)}));let ge=v;"button"===ge&&(U.href||U.to)&&(ge=x);const Ze={};"button"===ge?(Ze.type=void 0===X?"button":X,Ze.disabled=b):(U.href||U.to||(Ze.role="button"),b&&(Ze["aria-disabled"]=b));const xe=(0,c.Z)(J,Y),Re=(0,c.Z)(t,xe);const Ee=(0,o.Z)({},n,{centerRipple:f,component:v,disabled:b,disableRipple:y,disableTouchRipple:g,focusRipple:Z,tabIndex:F,focusVisible:Q}),Se=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,u.Z)(i,j,r);return n&&o&&(l.root+=` ${o}`),l})(Ee);return(0,R.jsxs)(A,(0,o.Z)({as:ge,className:(0,l.Z)(Se.root,m),ownerState:Ee,onBlur:fe,onClick:S,onContextMenu:le,onFocus:he,onKeyDown:be,onKeyUp:ye,onMouseDown:ie,onMouseLeave:se,onMouseUp:ae,onDragLeave:ue,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:b?-1:F,type:X},Ze,U,{children:[h,oe?(0,R.jsx)(N,(0,o.Z)({ref:H,center:f},D)):null]}))}))},88169:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(83117),r=n(67294),i=n(80102),l=n(93680),u=n(94780),a=n(98216),s=n(27623),c=n(42151),p=n(34867);function d(e){return(0,p.Z)("MuiSvgIcon",e)}(0,n(1588).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=n(85893);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],m=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,a.Z)(n.color)}`],t[`fontSize${(0,a.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var n,o,r,i,l,u,a,s,c,p,d,f,h,m,v,b,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(o=n.create)?void 0:o.call(n,"fill",{duration:null==(r=e.transitions)||null==(i=r.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(l=e.typography)||null==(u=l.pxToRem)?void 0:u.call(l,20))||"1.25rem",medium:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,24))||"1.5rem",large:(null==(c=e.typography)||null==(p=c.pxToRem)?void 0:p.call(c,35))||"2.1875"}[t.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)||null==(h=f[t.color])?void 0:h.main)?d:{action:null==(m=(e.vars||e).palette)||null==(v=m.action)?void 0:v.active,disabled:null==(b=(e.vars||e).palette)||null==(y=b.action)?void 0:y.disabled,inherit:void 0}[t.color]}})),v=r.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiSvgIcon"}),{children:r,className:c,color:p="inherit",component:v="svg",fontSize:b="medium",htmlColor:y,inheritViewBox:g=!1,titleAccess:Z,viewBox:x="0 0 24 24"}=n,R=(0,i.Z)(n,h),E=(0,o.Z)({},n,{color:p,component:v,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:g,viewBox:x}),S={};g||(S.viewBox=x);const w=(e=>{const{color:t,fontSize:n,classes:o}=e,r={root:["root","inherit"!==t&&`color${(0,a.Z)(t)}`,`fontSize${(0,a.Z)(n)}`]};return(0,u.Z)(r,d,o)})(E);return(0,f.jsxs)(m,(0,o.Z)({as:v,className:(0,l.Z)(w.root,c),ownerState:E,focusable:"false",color:y,"aria-hidden":!Z||void 0,role:Z?"img":void 0,ref:t},S,R,{children:[r,Z?(0,f.jsx)("title",{children:Z}):null]}))}));v.muiName="SvgIcon";var b=v;function y(e,t){const n=(n,r)=>(0,f.jsx)(b,(0,o.Z)({"data-testid":`${t}Icon`,ref:r},n,{children:e}));return n.muiName=b.muiName,r.memo(r.forwardRef(n))}},2068:function(e,t,n){var o=n(73633);t.Z=o.Z},51705:function(e,t,n){var o=n(30067);t.Z=o.Z},18791:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(67294);let r,i=!0,l=!1;const u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function c(){"hidden"===this.visibilityState&&l&&(i=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return i||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!u[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}var d=function(){const e=o.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",a,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(l=!0,window.clearTimeout(r),r=window.setTimeout((()=>{l=!1}),100),t.current=!1,!0)},ref:e}}},7960:function(e,t,n){function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return o}})},16600:function(e,t,n){var o=n(67294);const r="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;t.Z=r},73633:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(67294),r=n(16600);function i(e){const t=o.useRef(e);return(0,r.Z)((()=>{t.current=e})),o.useCallback(((...e)=>(0,t.current)(...e)),[])}},30067:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(67294),r=n(7960);function i(e,t){return o.useMemo((()=>null==e&&null==t?null:n=>{(0,r.Z)(e,n),(0,r.Z)(t,n)}),[e,t])}},220:function(e,t,n){var o=n(67294);t.Z=o.createContext(null)}}]);