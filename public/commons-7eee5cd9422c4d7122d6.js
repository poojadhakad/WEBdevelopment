/*! For license information please see commons-7eee5cd9422c4d7122d6.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},9424:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t}},5655:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=n(9424);function i(e){var t=(0,a.Z)(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n(1060),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},1060:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var u=a||"<<anonymous>>",l=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+u+"`."):null;for(var s=arguments.length,c=Array(s>6?s-6:0),f=6;f<s;f++)c[f-6]=arguments[f];return e.apply(void 0,[n,r,u,i,l].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},9503:function(e,t,n){"use strict";var r=n(7294).createContext(null);r.displayName="CardContext",t.Z=r},6306:function(e,t,n){"use strict";var r=n(2122),a=n(9756),i=n(7294),o=n(9758);function u(e){return!e||"#"===e.trim()}var l=i.forwardRef((function(e,t){var n=e.as,l=void 0===n?"a":n,s=e.disabled,c=e.onKeyDown,f=(0,a.Z)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(s||u(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return u(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.createElement(l,(0,r.Z)({ref:t},f,{onClick:d,onKeyDown:(0,o.Z)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),c)}))}));l.displayName="SafeAnchor",t.Z=l},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return i}});var r=n(7294),a=r.createContext({});a.Consumer,a.Provider;function i(e,t){var n=(0,r.useContext)(a);return e||n[t]||t}},9758:function(e,t){"use strict";t.Z=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},8870:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2122),a=n(9756),i=n(5900),o=n.n(i),u=/-(.)/g;var l=n(7294),s=n(9541),c=function(e){return e[0].toUpperCase()+(t=e,t.replace(u,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var n=void 0===t?{}:t,i=n.displayName,u=void 0===i?c(e):i,f=n.Component,d=n.defaultProps,v=l.forwardRef((function(t,n){var i=t.className,u=t.bsPrefix,c=t.as,d=void 0===c?f||"div":c,v=(0,a.Z)(t,["className","bsPrefix","as"]),p=(0,s.vE)(u,e);return l.createElement(d,(0,r.Z)({ref:n,className:o()(i,p)},v))}));return v.defaultProps=d,v.displayName=u,v}},1714:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5175),a=!("undefined"==typeof window||!window.document||!window.document.createElement),i=!1,o=!1;try{var u={get passive(){return i=!0},get once(){return o=i=!0}};a&&(window.addEventListener("test",u,u),window.removeEventListener("test",u,!0))}catch(m){}var l=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!o){var a=r.once,u=r.capture,l=n;!o&&a&&(l=n.__once||function e(r){this.removeEventListener(t,e,u),n.call(this,r)},n.__once=l),e.addEventListener(t,l,i?r:u)}e.addEventListener(t,n,r)};var s=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var c=function(e,t,n,r){return l(e,t,n,r),function(){s(e,t,n,r)}};function f(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),i=c(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function d(e,t,n,a){var i,o,u;null==n&&(i=e,o=(0,r.Z)(i,"transitionDuration")||"",u=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*u||0);var l=f(e,n,a),s=c(e,"transitionend",t);return function(){l(),s()}}function v(e,t){var n=(0,r.Z)(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function p(e,t){var n=v(e,"transitionDuration"),r=v(e,"transitionDelay"),a=d(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}},9059:function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,{Z:function(){return r}})},5160:function(e,t,n){"use strict";n.d(t,{cn:function(){return d},d0:function(){return f},Wj:function(){return c},Ix:function(){return v},ZP:function(){return E}});var r=n(9756),a=n(3552),i=n(7294),o=n(3935),u=!1,l=i.createContext(null),s="unmounted",c="exited",f="entering",d="entered",v="exiting",p=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=c,r.appearStatus=f):a=d:a=t.unmountOnExit||t.mountOnEnter?s:c,r.state={status:a},r.nextCallback=null,r}(0,a.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===s?{status:c}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==d&&(t=f):n!==f&&n!==d||(t=v)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===f?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===c&&this.setState({status:s})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[o.findDOMNode(this),r],i=a[0],l=a[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||u?this.safeSetState({status:d},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,l),this.safeSetState({status:f},(function(){t.props.onEntering(i,l),t.onTransitionEnd(c,(function(){t.safeSetState({status:d},(function(){t.props.onEntered(i,l)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:o.findDOMNode(this);t&&!u?(this.props.onExit(r),this.safeSetState({status:v},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:c},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:c},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:o.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],u=a[1];this.props.addEndListener(i,u)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===s)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,r.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(l.Provider,{value:null},"function"==typeof n?n(e,a):i.cloneElement(i.Children.only(n),a))},t}(i.Component);function m(){}p.contextType=l,p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},p.UNMOUNTED=s,p.EXITED=c,p.ENTERING=f,p.ENTERED=d,p.EXITING=v;var E=p},5513:function(e,t,n){"use strict";n.d(t,{Ch:function(){return l}});var r=n(2122),a=n(9756),i=n(7294);n(1143);function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t){return Object.keys(t).reduce((function(n,l){var s,c=n,f=c[o(l)],d=c[l],v=(0,a.Z)(c,[o(l),l].map(u)),p=t[l],m=function(e,t,n){var r=(0,i.useRef)(void 0!==e),a=(0,i.useState)(t),o=a[0],u=a[1],l=void 0!==e,s=r.current;return r.current=l,!l&&s&&o!==t&&u(t),[l?e:o,(0,i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(d,f,e[p]),E=m[0],h=m[1];return(0,r.Z)({},v,((s={})[l]=E,s[p]=h,s))}),e)}n(3639)},5175:function(e,t,n){"use strict";function r(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}n.d(t,{Z:function(){return l}});var a=/([A-Z])/g;var i=/^ms-/;function o(e){return function(e){return e.replace(a,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var l=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(o(t))||function(e,t){return r(e).getComputedStyle(e,t)}(e).getPropertyValue(o(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!u.test(e))}(r)?n+=o(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(o(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},6581:function(e,t,n){"use strict";n.d(t,{Z:function(){return oe}});var r=n(7294),a=n(5444),i=n(2122),o=n(9756),u=n(5900),l=n.n(u),s=n(5513),c=n(8870),f=n(9541),d=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.as,s=(0,o.Z)(e,["bsPrefix","className","as"]);n=(0,f.vE)(n,"navbar-brand");var c=u||(s.href?"a":"span");return r.createElement(c,(0,i.Z)({},s,{ref:t,className:l()(a,n)}))}));d.displayName="NavbarBrand";var v,p=d,m=n(5175),E=n(5160),h=n(1714),x=n(9758),b=n(9059),y={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function g(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=y[e];return n+parseInt((0,m.Z)(t,r[0]),10)+parseInt((0,m.Z)(t,r[1]),10)}var C=((v={})[E.Wj]="collapse",v[E.Ix]="collapsing",v[E.d0]="collapsing",v[E.cn]="collapse show",v),N={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:g},Z=r.forwardRef((function(e,t){var n=e.onEnter,a=e.onEntering,u=e.onEntered,s=e.onExit,c=e.onExiting,f=e.className,d=e.children,v=e.dimension,p=void 0===v?"height":v,m=e.getDimensionValue,y=void 0===m?g:m,N=(0,o.Z)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),Z="function"==typeof p?p():p,w=(0,r.useMemo)((function(){return(0,x.Z)((function(e){e.style[Z]="0"}),n)}),[Z,n]),k=(0,r.useMemo)((function(){return(0,x.Z)((function(e){var t="scroll"+Z[0].toUpperCase()+Z.slice(1);e.style[Z]=e[t]+"px"}),a)}),[Z,a]),S=(0,r.useMemo)((function(){return(0,x.Z)((function(e){e.style[Z]=null}),u)}),[Z,u]),P=(0,r.useMemo)((function(){return(0,x.Z)((function(e){e.style[Z]=y(Z,e)+"px",(0,b.Z)(e)}),s)}),[s,y,Z]),O=(0,r.useMemo)((function(){return(0,x.Z)((function(e){e.style[Z]=null}),c)}),[Z,c]);return r.createElement(E.ZP,(0,i.Z)({ref:t,addEndListener:h.Z},N,{"aria-expanded":N.role?N.in:null,onEnter:w,onEntering:k,onEntered:S,onExit:P,onExiting:O}),(function(e,t){return r.cloneElement(d,(0,i.Z)({},t,{className:l()(f,d.props.className,C[e],"width"===Z&&"width")}))}))}));Z.defaultProps=N;var w=Z,k=r.createContext(null);k.displayName="NavbarContext";var S=k,P=r.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,u=(0,o.Z)(e,["children","bsPrefix"]);return a=(0,f.vE)(a,"navbar-collapse"),r.createElement(S.Consumer,null,(function(e){return r.createElement(w,(0,i.Z)({in:!(!e||!e.expanded)},u),r.createElement("div",{ref:t,className:a},n))}))}));P.displayName="NavbarCollapse";var O=P,T=n(5655),R=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.children,s=e.label,c=e.as,d=void 0===c?"button":c,v=e.onClick,p=(0,o.Z)(e,["bsPrefix","className","children","label","as","onClick"]);n=(0,f.vE)(n,"navbar-toggler");var m=(0,r.useContext)(S)||{},E=m.onToggle,h=m.expanded,x=(0,T.Z)((function(e){v&&v(e),E&&E()}));return"button"===d&&(p.type="button"),r.createElement(d,(0,i.Z)({},p,{ref:t,onClick:x,"aria-label":s,className:l()(a,n,!h&&"collapsed")}),u||r.createElement("span",{className:n+"-icon"}))}));R.displayName="NavbarToggle",R.defaultProps={label:"Toggle navigation"};var D=R,L=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},K=r.createContext(null),A=(0,c.Z)("navbar-text",{Component:"span"}),_=r.forwardRef((function(e,t){var n=(0,s.Ch)(e,{expanded:"onToggle"}),a=n.bsPrefix,u=n.expand,c=n.variant,d=n.bg,v=n.fixed,p=n.sticky,m=n.className,E=n.children,h=n.as,x=void 0===h?"nav":h,b=n.expanded,y=n.onToggle,g=n.onSelect,C=n.collapseOnSelect,N=(0,o.Z)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),Z=(0,f.vE)(a,"navbar"),w=(0,r.useCallback)((function(){g&&g.apply(void 0,arguments),C&&b&&y&&y(!1)}),[g,C,b,y]);void 0===N.role&&"nav"!==x&&(N.role="navigation");var k=Z+"-expand";"string"==typeof u&&(k=k+"-"+u);var P=(0,r.useMemo)((function(){return{onToggle:function(){return y&&y(!b)},bsPrefix:Z,expanded:!!b}}),[Z,b,y]);return r.createElement(S.Provider,{value:P},r.createElement(K.Provider,{value:w},r.createElement(x,(0,i.Z)({ref:t},N,{className:l()(m,Z,u&&k,c&&Z+"-"+c,d&&"bg-"+d,p&&"sticky-"+p,v&&"fixed-"+v)}),E)))}));_.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},_.displayName="Navbar",_.Brand=p,_.Toggle=D,_.Collapse=O,_.Text=A;var I=_,M=(n(7526),n(9503)),j=Function.prototype.bind.call(Function.prototype.call,[].slice);var U=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var F=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=U(e),r=U(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},B=r.createContext(null);B.displayName="NavContext";var V=B,q=r.createContext(null),H=function(){},W=r.forwardRef((function(e,t){var n,a,u=e.as,l=void 0===u?"ul":u,s=e.onSelect,c=e.activeKey,f=e.role,d=e.onKeyDown,v=(0,o.Z)(e,["as","onSelect","activeKey","role","onKeyDown"]),p=(0,r.useReducer)((function(e){return!e}),!1)[1],m=(0,r.useRef)(!1),E=(0,r.useContext)(K),h=(0,r.useContext)(q);h&&(f=f||"tablist",c=h.activeKey,n=h.getControlledId,a=h.getControllerId);var x=(0,r.useRef)(null),b=function(e){var t=x.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",j(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var i=r.indexOf(a);if(-1===i)return null;var o=i+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},y=function(e,t){null!=e&&(s&&s(e,t),E&&E(e,t))};(0,r.useEffect)((function(){if(x.current&&m.current){var e=x.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var g=F(t,x);return r.createElement(K.Provider,{value:y},r.createElement(V.Provider,{value:{role:f,activeKey:L(c),getControlledId:n||H,getControllerId:a||H}},r.createElement(l,(0,i.Z)({},v,{onKeyDown:function(e){var t;switch(d&&d(e),e.key){case"ArrowLeft":case"ArrowUp":t=b(-1);break;case"ArrowRight":case"ArrowDown":t=b(1);break;default:return}t&&(e.preventDefault(),y(t.dataset.rbEventKey,e),m.current=!0,p())},ref:g,role:f}))))})),X=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.children,s=e.as,c=void 0===s?"div":s,d=(0,o.Z)(e,["bsPrefix","className","children","as"]);return n=(0,f.vE)(n,"nav-item"),r.createElement(c,(0,i.Z)({},d,{ref:t,className:l()(a,n)}),u)}));X.displayName="NavItem";var G=X,Y=n(6306),$=(n(2473),r.forwardRef((function(e,t){var n=e.active,a=e.className,u=e.eventKey,s=e.onSelect,c=e.onClick,f=e.as,d=(0,o.Z)(e,["active","className","eventKey","onSelect","onClick","as"]),v=L(u,d.href),p=(0,r.useContext)(K),m=(0,r.useContext)(V),E=n;if(m){d.role||"tablist"!==m.role||(d.role="tab");var h=m.getControllerId(v),x=m.getControlledId(v);d["data-rb-event-key"]=v,d.id=h||d.id,d["aria-controls"]=x||d["aria-controls"],E=null==n&&null!=v?m.activeKey===v:n}"tab"===d.role&&(d.disabled&&(d.tabIndex=-1,d["aria-disabled"]=!0),d["aria-selected"]=E);var b=(0,T.Z)((function(e){c&&c(e),null!=v&&(s&&s(v,e),p&&p(v,e))}));return r.createElement(f,(0,i.Z)({},d,{ref:t,onClick:b,className:l()(a,E&&"active")}))})));$.defaultProps={disabled:!1};var z=$,J={disabled:!1,as:Y.Z},Q=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.disabled,u=e.className,s=e.href,c=e.eventKey,d=e.onSelect,v=e.as,p=(0,o.Z)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=(0,f.vE)(n,"nav-link"),r.createElement(z,(0,i.Z)({},p,{href:s,ref:t,eventKey:c,as:v,disabled:a,onSelect:d,className:l()(u,n,a&&"disabled")}))}));Q.displayName="NavLink",Q.defaultProps=J;var ee=Q,te=r.forwardRef((function(e,t){var n,a,u,c=(0,s.Ch)(e,{activeKey:"onSelect"}),d=c.as,v=void 0===d?"div":d,p=c.bsPrefix,m=c.variant,E=c.fill,h=c.justify,x=c.navbar,b=c.className,y=c.children,g=c.activeKey,C=(0,o.Z)(c,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),N=(0,f.vE)(p,"nav"),Z=!1,w=(0,r.useContext)(S),k=(0,r.useContext)(M.Z);return w?(a=w.bsPrefix,Z=null==x||x):k&&(u=k.cardHeaderBsPrefix),r.createElement(W,(0,i.Z)({as:v,ref:t,activeKey:g,className:l()(b,(n={},n[N]=!Z,n[a+"-nav"]=Z,n[u+"-"+m]=!!u,n[N+"-"+m]=!!m,n[N+"-fill"]=E,n[N+"-justified"]=h,n))},C),y)}));te.displayName="Nav",te.defaultProps={justify:!1,fill:!1},te.Item=G,te.Link=ee;var ne=te,re=n.p+"static/books-5c79ad9758c3c97af6999ea237f838a4.png",ae=function(){return r.createElement(r.Fragment,null,r.createElement(I,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.createElement(I.Brand,{className:"font-weight-bold"}," ",r.createElement("img",{src:re,alt:"books",width:"50",height:"40"}),"A FREE PATH TO BOOKS"),r.createElement(I.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.createElement(I.Collapse,{id:"responsive-navbar-nav"},r.createElement(ne,{className:"ml-auto"},r.createElement(ne.Link,null,r.createElement(a.rU,{to:"/",className:"text-light "}," Home")),r.createElement(ne.Link,null,r.createElement(a.rU,{to:"/about",className:"text-light"}," About ")),r.createElement(ne.Link,null,r.createElement(a.rU,{to:"/contact",className:"text-light"}," Contact "))))))},ie=function(){return r.createElement("div",null,r.createElement("footer",{class:"footer"},r.createElement("div",{class:"bg-dark py-2"},r.createElement("div",{class:"text-center text-light"},"WEB DEVELOPMENT"),r.createElement("div",{class:"text-muted text-center"},"Copyright© 2021"))))},oe=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(ae,null),t,r.createElement(ie,null))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=commons-7eee5cd9422c4d7122d6.js.map