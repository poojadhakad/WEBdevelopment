(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[682],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return i}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function i(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,s=e.title,i=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},4751:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(7294),a=n(2122),o=n(9756),c=n(5655);var l=function(e,t){var n=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},s=n(9424);function i(e){var t,n,a=(t=e,(n=(0,r.useRef)(t)).current=t,n);(0,r.useEffect)((function(){return function(){return a.current()}}),[])}var u=Math.pow(2,31)-1;function d(e,t,n){var r=n-Date.now();e.current=r<=u?setTimeout(t,r):setTimeout((function(){return d(e,t,n)}),u)}function m(){var e=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,r.useRef)();return i((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=u?t.current=setTimeout(r,a):d(t,r,Date.now()+a))},clear:n}}),[])}var f=n(5900),v=n.n(f),h=n(5160),p=n(5697),b=n.n(p),E=n(5513),y=(0,n(8870).Z)("carousel-caption"),N=n(9541),g=r.forwardRef((function(e,t){var n=e.as,c=void 0===n?"div":n,l=e.bsPrefix,s=e.children,i=e.className,u=(0,o.Z)(e,["as","bsPrefix","children","className"]),d=v()(i,(0,N.vE)(l,"carousel-item"));return r.createElement(c,(0,a.Z)({ref:t},u,{className:d}),s)}));g.displayName="CarouselItem";var w=g;function x(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}var k=n(6306),S=n(1714),C=n(9059),I={bsPrefix:b().string,as:b().elementType,slide:b().bool,fade:b().bool,controls:b().bool,indicators:b().bool,activeIndex:b().number,onSelect:b().func,onSlide:b().func,onSlid:b().func,interval:b().number,keyboard:b().bool,pause:b().oneOf(["hover",!1]),wrap:b().bool,touch:b().bool,prevIcon:b().node,prevLabel:b().string,nextIcon:b().node,nextLabel:b().string},T={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function O(e,t){var n=(0,E.Ch)(e,{activeIndex:"onSelect"}),i=n.as,u=void 0===i?"div":i,d=n.bsPrefix,f=n.slide,p=n.fade,b=n.controls,y=n.indicators,g=n.activeIndex,w=n.onSelect,I=n.onSlide,T=n.onSlid,O=n.interval,R=n.keyboard,M=n.onKeyDown,P=n.pause,Z=n.onMouseOver,L=n.onMouseOut,j=n.wrap,A=n.touch,D=n.onTouchStart,_=n.onTouchMove,z=n.onTouchEnd,W=n.prevIcon,F=n.prevLabel,K=n.nextIcon,B=n.nextLabel,$=n.className,H=n.children,U=(0,o.Z)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),V=(0,N.vE)(d,"carousel"),X=(0,r.useRef)(null),q=(0,r.useState)("next"),J=q[0],Y=q[1],G=(0,r.useState)(!1),Q=G[0],ee=G[1],te=(0,r.useState)(!1),ne=te[0],re=te[1],ae=(0,r.useState)(g||0),oe=ae[0],ce=ae[1];ne||g===oe||(X.current?Y(X.current):Y((g||0)>oe?"next":"prev"),f&&re(!0),ce(g||0)),(0,r.useEffect)((function(){X.current&&(X.current=null)}));var le,se=0;!function(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}(H,(function(e,t){++se,t===g&&(le=e.props.interval)}));var ie=(0,s.Z)(le),ue=(0,r.useCallback)((function(e){if(!ne){var t=oe-1;if(t<0){if(!j)return;t=se-1}X.current="prev",w&&w(t,e)}}),[ne,oe,w,j,se]),de=(0,c.Z)((function(e){if(!ne){var t=oe+1;if(t>=se){if(!j)return;t=0}X.current="next",w&&w(t,e)}})),me=(0,r.useRef)();(0,r.useImperativeHandle)(t,(function(){return{element:me.current,prev:ue,next:de}}));var fe=(0,c.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(me.current)&&de()})),ve="next"===J?"left":"right";l((function(){f||(I&&I(oe,ve),T&&T(oe,ve))}),[oe]);var he=V+"-item-"+J,pe=V+"-item-"+ve,be=(0,r.useCallback)((function(e){(0,C.Z)(e),I&&I(oe,ve)}),[I,oe,ve]),Ee=(0,r.useCallback)((function(){re(!1),T&&T(oe,ve)}),[T,oe,ve]),ye=(0,r.useCallback)((function(e){if(R&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ue(e);case"ArrowRight":return e.preventDefault(),void de(e)}M&&M(e)}),[R,M,ue,de]),Ne=(0,r.useCallback)((function(e){"hover"===P&&ee(!0),Z&&Z(e)}),[P,Z]),ge=(0,r.useCallback)((function(e){ee(!1),L&&L(e)}),[L]),we=(0,r.useRef)(0),xe=(0,r.useRef)(0),ke=m(),Se=(0,r.useCallback)((function(e){we.current=e.touches[0].clientX,xe.current=0,"hover"===P&&ee(!0),D&&D(e)}),[P,D]),Ce=(0,r.useCallback)((function(e){e.touches&&e.touches.length>1?xe.current=0:xe.current=e.touches[0].clientX-we.current,_&&_(e)}),[_]),Ie=(0,r.useCallback)((function(e){if(A){var t=xe.current;Math.abs(t)>40&&(t>0?ue(e):de(e))}"hover"===P&&ke.set((function(){ee(!1)}),O||void 0),z&&z(e)}),[A,P,ue,de,ke,O,z]),Te=null!=O&&!Q&&!ne,Oe=(0,r.useRef)();(0,r.useEffect)((function(){var e,t;if(Te)return Oe.current=window.setInterval(document.visibilityState?fe:de,null!=(e=null!=(t=ie.current)?t:O)?e:void 0),function(){null!==Oe.current&&clearInterval(Oe.current)}}),[Te,de,ie,O,fe]);var Re=(0,r.useMemo)((function(){return y&&Array.from({length:se},(function(e,t){return function(e){w&&w(t,e)}}))}),[y,se,w]);return r.createElement(u,(0,a.Z)({ref:me},U,{onKeyDown:ye,onMouseOver:Ne,onMouseOut:ge,onTouchStart:Se,onTouchMove:Ce,onTouchEnd:Ie,className:v()($,V,f&&"slide",p&&V+"-fade")}),y&&r.createElement("ol",{className:V+"-indicators"},x(H,(function(e,t){return r.createElement("li",{key:t,className:t===oe?"active":void 0,onClick:Re?Re[t]:void 0})}))),r.createElement("div",{className:V+"-inner"},x(H,(function(e,t){var n=t===oe;return f?r.createElement(h.ZP,{in:n,onEnter:n?be:void 0,onEntered:n?Ee:void 0,addEndListener:S.Z},(function(t){return r.cloneElement(e,{className:v()(e.props.className,n&&"entered"!==t&&he,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})})):r.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))),b&&r.createElement(r.Fragment,null,(j||0!==g)&&r.createElement(k.Z,{className:V+"-control-prev",onClick:ue},W,F&&r.createElement("span",{className:"sr-only"},F)),(j||g!==se-1)&&r.createElement(k.Z,{className:V+"-control-next",onClick:de},K,B&&r.createElement("span",{className:"sr-only"},B))))}var R=r.forwardRef(O);R.displayName="Carousel",R.propTypes=I,R.defaultProps=T,R.Caption=y,R.Item=w;var M=R,P=n(5444),Z=n(3201),L=n.p+"static/lib22-4cb3428f132825857d22f6e781967bb1.jpg",j=n.p+"static/lb3-8750199a54dd0d7d2caeecff89a5a397.jpg",A=n.p+"static/cL1-e9b2844b6cf65203ceae0f002840c52b.jpg",D=function(){return r.createElement(r.Fragment,null,r.createElement(M,null,r.createElement(M.Item,null,r.createElement("img",{className:"d-block w-100 photo",src:j,alt:"First slide"})),r.createElement(M.Item,null,r.createElement("img",{className:"d-block w-100 photo",src:A,alt:"Second slide"})),r.createElement(M.Item,null,r.createElement("img",{className:"d-block w-100 photo",src:L,alt:"Third slide"}))),r.createElement("section",{className:"aboutus-section"},r.createElement("div",{className:"container py-5"},r.createElement("h2",{className:"heading text-center font-weight-bold mb-4"},"About Section... ",r.createElement("span",{className:"text-info"},"Things we Do!")),r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-lg-4 mb-4"},r.createElement("div",{className:"card shadow text-center"},r.createElement("div",{className:"card-body"},r.createElement(Z.Mp$,{className:"text-info m-4",style:{fontSize:"4rem"}}),r.createElement("h4",{className:" text",style:{fontWeight:"bolder"}},"LIBRARY WEBSITE"),r.createElement("div",{className:"lead text"},"A library is a collection of materials or media that are accessible for use and not just for display. Library buildings often provide quiet areas for studying, as well as common areas for group study and collaboration, and may provide public facilities for access to their electronic resources and the Internet.")))),r.createElement("div",{className:"col-lg-4 mb-4"},r.createElement("div",{className:"card shadow text-center"},r.createElement("div",{className:"card-body"},r.createElement(Z.Mp$,{className:"text-info m-4",style:{fontSize:"4rem"}}),r.createElement("h4",{className:" text",style:{fontWeight:"bolder"}},"OUR PROJECT"),r.createElement("div",{className:"lead text"},"A free path to books is a online library which consists of books according to the different sections like technology, biography, computer science, fiction, self help, religion, health, history etc. The user can browse the books according to his need. The books can be viewed and downloaded by the user as per his choice.")))),r.createElement("div",{className:"col-lg-4 mb-4"},r.createElement("div",{className:"card shadow text-center"},r.createElement("div",{className:"card-body"},r.createElement(Z.Mp$,{className:"text-info m-4",style:{fontSize:"4rem"}}),r.createElement("h4",{className:" text",style:{fontWeight:"bolder"}},"FREE PATH TO BOOKS"),r.createElement("div",{className:"lead text"},"This website will help you reach a large audience and it’s a great way to share awesome books, as well as create a community of like-minded individuals who also love to read.")))))),r.createElement("p",{className:"text-right"},r.createElement(P.rU,{to:"/"},r.createElement(Z.x_l,null),"back to page"))))},_=n(6581),z=function(){return r.createElement(_.Z,null,r.createElement(D,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-cabb37e537162b6c39a1.js.map