(window["webpackJsonpreact-hooks-demo"]=window["webpackJsonpreact-hooks-demo"]||[]).push([[1],{199:function(t,e,n){"use strict";n(23),n(399)},200:function(t,e,n){"use strict";var r,o=n(0),i=n(1),a=n(2),c=n.n(a),l=n(16),u=n(30),s=n(14),f=n(193),p=n(8),d=n(41),y=n(93);function h(t){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==h(e)&&"function"!==typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){return!t||null===t.offsetParent}function N(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}var T=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(c,t);var e,n,i,a=g(c);function c(){var t;return b(this,c),(t=a.apply(this,arguments)).animationStart=!1,t.destroy=!1,t.onClick=function(e,n){if(!(!e||C(e)||e.className.indexOf("-leave")>=0)){var o=t.props.insertExtraNode;t.extraNode=document.createElement("div");var i=w(t).extraNode;i.className="ant-click-animating-node";var a=t.getAttributeName();e.setAttribute(a,"true"),r=r||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&N(n)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(n)&&"transparent"!==n&&(t.csp&&t.csp.nonce&&(r.nonce=t.csp.nonce),i.style.borderColor=n,r.innerHTML="\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(n,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),o&&e.appendChild(i),d.a.addStartEventListener(e,t.onTransitionStart),d.a.addEndEventListener(e,t.onTransitionEnd)}},t.onTransitionStart=function(e){if(!t.destroy){var n=Object(p.findDOMNode)(w(t));e&&e.target===n&&(t.animationStart||t.resetEffect(n))}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!C(n.target)){t.resetEffect(e);var r=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,r)}),0),y.a.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=Object(y.a)((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,r=t.props.children;return t.csp=n,r},t}return e=c,(n=[{key:"componentDidMount",value:function(){var t=Object(p.findDOMNode)(this);t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.props.insertExtraNode,n=this.getAttributeName();t.setAttribute(n,"false"),r&&(r.innerHTML=""),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),d.a.removeStartEventListener(t,this.onTransitionStart),d.a.removeEndEventListener(t,this.onTransitionEnd)}}},{key:"render",value:function(){return o.createElement(f.a,null,this.renderWave)}}])&&m(e.prototype,n),i&&m(e,i),c}(o.Component),E=n(73);function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=I(t);if(e){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(t,e){return!e||"object"!==A(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var D=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},L=/^[\u4e00-\u9fa5]{2}$/,B=L.test.bind(L);function W(t,e){var n=!1,r=[];return o.Children.forEach(t,(function(t){var e=A(t),o="string"===e||"number"===e;if(n&&o){var i=r.length-1,a=r[i];r[i]="".concat(a).concat(t)}else r.push(t);n=o})),o.Children.map(r,(function(t){return function(t,e){if(null!=t){var n=e?" ":"";return"string"!==typeof t&&"number"!==typeof t&&"string"===typeof t.type&&B(t.props.children)?o.cloneElement(t,{},t.props.children.split("").join(n)):"string"===typeof t?(B(t)&&(t=t.split("").join(n)),o.createElement("span",null,t)):t}}(t,e)}))}Object(E.a)("default","primary","ghost","dashed","danger","link");var M=Object(E.a)("circle","circle-outline","round"),z=Object(E.a)("large","default","small"),U=Object(E.a)("submit","button","reset"),V=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(a,t);var e,n,r,i=_(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t)).saveButtonRef=function(t){e.buttonNode=t},e.handleClick=function(t){var n=e.state.loading,r=e.props.onClick;n||r&&r(t)},e.renderButton=function(t){var n,r=t.getPrefixCls,i=t.autoInsertSpaceInButton,a=e.props,l=a.prefixCls,f=a.type,p=a.shape,d=a.size,y=a.className,h=a.children,b=a.icon,m=a.ghost,v=a.block,g=D(a,["prefixCls","type","shape","size","className","children","icon","ghost","block"]),O=e.state,w=O.loading,k=O.hasTwoCNChar,C=r("btn",l),N=!1!==i,E="";switch(d){case"large":E="lg";break;case"small":E="sm"}var x=w?"loading":b,P=c()(C,y,(S(n={},"".concat(C,"-").concat(f),f),S(n,"".concat(C,"-").concat(p),p),S(n,"".concat(C,"-").concat(E),E),S(n,"".concat(C,"-icon-only"),!h&&0!==h&&x),S(n,"".concat(C,"-loading"),!!w),S(n,"".concat(C,"-background-ghost"),m),S(n,"".concat(C,"-two-chinese-chars"),k&&N),S(n,"".concat(C,"-block"),v),n)),_=x?o.createElement(s.a,{type:x}):null,R=h||0===h?W(h,e.isNeedInserted()&&N):null,I=Object(u.a)(g,["htmlType","loading"]);if(void 0!==I.href)return o.createElement("a",j({},I,{className:P,onClick:e.handleClick,ref:e.saveButtonRef}),_,R);var A=g,L=A.htmlType,B=D(A,["htmlType"]),M=o.createElement("button",j({},Object(u.a)(B,["loading"]),{type:L,className:P,onClick:e.handleClick,ref:e.saveButtonRef}),_,R);return"link"===f?M:o.createElement(T,null,M)},e.state={loading:t.loading,hasTwoCNChar:!1},e}return e=a,(n=[{key:"componentDidMount",value:function(){this.fixTwoCNChar()}},{key:"componentDidUpdate",value:function(t){var e=this;this.fixTwoCNChar(),t.loading&&"boolean"!==typeof t.loading&&clearTimeout(this.delayTimeout);var n=this.props.loading;n&&"boolean"!==typeof n&&n.delay?this.delayTimeout=window.setTimeout((function(){e.setState({loading:n})}),n.delay):t.loading!==n&&this.setState({loading:n})}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"fixTwoCNChar",value:function(){if(this.buttonNode){var t=this.buttonNode.textContent;this.isNeedInserted()&&B(t)?this.state.hasTwoCNChar||this.setState({hasTwoCNChar:!0}):this.state.hasTwoCNChar&&this.setState({hasTwoCNChar:!1})}}},{key:"isNeedInserted",value:function(){var t=this.props,e=t.icon,n=t.children,r=t.type;return 1===o.Children.count(n)&&!e&&"link"!==r}},{key:"render",value:function(){return o.createElement(f.a,null,this.renderButton)}}])&&x(e.prototype,n),r&&x(e,r),a}(o.Component);V.__ANT_BUTTON=!0,V.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},V.propTypes={type:i.string,shape:i.oneOf(M),size:i.oneOf(z),htmlType:i.oneOf(U),onClick:i.func,loading:i.oneOfType([i.bool,i.object]),className:i.string,icon:i.string,block:i.bool,title:i.string},Object(l.polyfill)(V);var H=V;function J(){return(J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var G=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},$=function(t){return o.createElement(f.a,null,(function(e){var n=e.getPrefixCls,r=t.prefixCls,i=t.size,a=t.className,l=G(t,["prefixCls","size","className"]),u=n("btn-group",r),s="";switch(i){case"large":s="lg";break;case"small":s="sm"}var f,p,d,y=c()(u,(f={},p="".concat(u,"-").concat(s),d=s,p in f?Object.defineProperty(f,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):f[p]=d,f),a);return o.createElement("div",J({},l,{className:y}))}))};H.Group=$;e.a=H},399:function(t,e,n){}}]);
//# sourceMappingURL=1.d5da139e.chunk.js.map