function Gx(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Zx=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};Zx();function Yx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ze={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),$x=Symbol.for("react.strict_mode"),e2=Symbol.for("react.profiler"),t2=Symbol.for("react.provider"),r2=Symbol.for("react.context"),n2=Symbol.for("react.forward_ref"),i2=Symbol.for("react.suspense"),o2=Symbol.for("react.memo"),a2=Symbol.for("react.lazy"),X0=Symbol.iterator;function s2(e){return e===null||typeof e!="object"?null:(e=X0&&e[X0]||e["@@iterator"],typeof e=="function"?e:null)}var oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ay=Object.assign,sy={};function Na(e,t,r){this.props=e,this.context=t,this.refs=sy,this.updater=r||oy}Na.prototype.isReactComponent={};Na.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ly(){}ly.prototype=Na.prototype;function fp(e,t,r){this.props=e,this.context=t,this.refs=sy,this.updater=r||oy}var pp=fp.prototype=new ly;pp.constructor=fp;ay(pp,Na.prototype);pp.isPureReactComponent=!0;var G0=Array.isArray,uy=Object.prototype.hasOwnProperty,vp={current:null},cy={key:!0,ref:!0,__self:!0,__source:!0};function dy(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uy.call(t,n)&&!cy.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:Fl,type:e,key:o,ref:a,props:i,_owner:vp.current}}function l2(e,t){return{$$typeof:Fl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fl}function u2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Z0=/\/+/g;function Vd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u2(""+e.key):t.toString(36)}function Tu(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fl:case Qx:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Vd(a,0):n,G0(i)?(r="",e!=null&&(r=e.replace(Z0,"$&/")+"/"),Tu(i,t,r,"",function(l){return l})):i!=null&&(gp(i)&&(i=l2(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Z0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",G0(e))for(var s=0;s<e.length;s++){o=e[s];var u=n+Vd(o,s);a+=Tu(o,t,r,u,i)}else if(u=s2(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=n+Vd(o,s++),a+=Tu(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ql(e,t,r){if(e==null)return e;var n=[],i=0;return Tu(e,n,"","",function(o){return t.call(r,o,i++)}),n}function c2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Yt={current:null},zu={transition:null},d2={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:zu,ReactCurrentOwner:vp};Se.Children={map:ql,forEach:function(e,t,r){ql(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ql(e,function(){t++}),t},toArray:function(e){return ql(e,function(t){return t})||[]},only:function(e){if(!gp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=Na;Se.Fragment=Jx;Se.Profiler=e2;Se.PureComponent=fp;Se.StrictMode=$x;Se.Suspense=i2;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d2;Se.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ay({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=vp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)uy.call(t,u)&&!cy.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];n.children=s}return{$$typeof:Fl,type:e.type,key:i,ref:o,props:n,_owner:a}};Se.createContext=function(e){return e={$$typeof:r2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t2,_context:e},e.Consumer=e};Se.createElement=dy;Se.createFactory=function(e){var t=dy.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:n2,render:e}};Se.isValidElement=gp;Se.lazy=function(e){return{$$typeof:a2,_payload:{_status:-1,_result:e},_init:c2}};Se.memo=function(e,t){return{$$typeof:o2,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=zu.transition;zu.transition={};try{e()}finally{zu.transition=t}};Se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Se.useCallback=function(e,t){return Yt.current.useCallback(e,t)};Se.useContext=function(e){return Yt.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return Yt.current.useDeferredValue(e)};Se.useEffect=function(e,t){return Yt.current.useEffect(e,t)};Se.useId=function(){return Yt.current.useId()};Se.useImperativeHandle=function(e,t,r){return Yt.current.useImperativeHandle(e,t,r)};Se.useInsertionEffect=function(e,t){return Yt.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return Yt.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return Yt.current.useMemo(e,t)};Se.useReducer=function(e,t,r){return Yt.current.useReducer(e,t,r)};Se.useRef=function(e){return Yt.current.useRef(e)};Se.useState=function(e){return Yt.current.useState(e)};Se.useSyncExternalStore=function(e,t,r){return Yt.current.useSyncExternalStore(e,t,r)};Se.useTransition=function(){return Yt.current.useTransition()};Se.version="18.2.0";(function(e){e.exports=Se})(ze);const h2=Yx(ze.exports),$=Gx({__proto__:null,default:h2},[ze.exports]);var hy={exports:{}},kr={},fy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,Y){var se=V.length;V.push(Y);e:for(;0<se;){var be=se-1>>>1,Be=V[be];if(0<i(Be,Y))V[be]=Y,V[se]=Be,se=be;else break e}}function r(V){return V.length===0?null:V[0]}function n(V){if(V.length===0)return null;var Y=V[0],se=V.pop();if(se!==Y){V[0]=se;e:for(var be=0,Be=V.length,ri=Be>>>1;be<ri;){var bt=2*(be+1)-1,ni=V[bt],Cr=bt+1,zn=V[Cr];if(0>i(ni,se))Cr<Be&&0>i(zn,ni)?(V[be]=zn,V[Cr]=se,be=Cr):(V[be]=ni,V[bt]=se,be=bt);else if(Cr<Be&&0>i(zn,se))V[be]=zn,V[Cr]=se,be=Cr;else break e}}return Y}function i(V,Y){var se=V.sortIndex-Y.sortIndex;return se!==0?se:V.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],l=[],c=1,d=null,h=3,f=!1,v=!1,p=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(V){for(var Y=r(l);Y!==null;){if(Y.callback===null)n(l);else if(Y.startTime<=V)n(l),Y.sortIndex=Y.expirationTime,t(u,Y);else break;Y=r(l)}}function x(V){if(p=!1,w(V),!v)if(r(u)!==null)v=!0,W(k);else{var Y=r(l);Y!==null&&me(x,Y.startTime-V)}}function k(V,Y){v=!1,p&&(p=!1,g(z),z=-1),f=!0;var se=h;try{for(w(Y),d=r(u);d!==null&&(!(d.expirationTime>Y)||V&&!D());){var be=d.callback;if(typeof be=="function"){d.callback=null,h=d.priorityLevel;var Be=be(d.expirationTime<=Y);Y=e.unstable_now(),typeof Be=="function"?d.callback=Be:d===r(u)&&n(u),w(Y)}else n(u);d=r(u)}if(d!==null)var ri=!0;else{var bt=r(l);bt!==null&&me(x,bt.startTime-Y),ri=!1}return ri}finally{d=null,h=se,f=!1}}var E=!1,T=null,z=-1,_=5,P=-1;function D(){return!(e.unstable_now()-P<_)}function I(){if(T!==null){var V=e.unstable_now();P=V;var Y=!0;try{Y=T(!0,V)}finally{Y?O():(E=!1,T=null)}}else E=!1}var O;if(typeof y=="function")O=function(){y(I)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Z=K.port2;K.port1.onmessage=I,O=function(){Z.postMessage(null)}}else O=function(){b(I,0)};function W(V){T=V,E||(E=!0,O())}function me(V,Y){z=b(function(){V(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,W(k))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(V){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var se=h;h=Y;try{return V()}finally{h=se}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=h;h=V;try{return Y()}finally{h=se}},e.unstable_scheduleCallback=function(V,Y,se){var be=e.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?be+se:be):se=be,V){case 1:var Be=-1;break;case 2:Be=250;break;case 5:Be=1073741823;break;case 4:Be=1e4;break;default:Be=5e3}return Be=se+Be,V={id:c++,callback:Y,priorityLevel:V,startTime:se,expirationTime:Be,sortIndex:-1},se>be?(V.sortIndex=se,t(l,V),r(u)===null&&V===r(l)&&(p?(g(z),z=-1):p=!0,me(x,se-be))):(V.sortIndex=Be,t(u,V),v||f||(v=!0,W(k))),V},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(V){var Y=h;return function(){var se=h;h=Y;try{return V.apply(this,arguments)}finally{h=se}}}})(py);(function(e){e.exports=py})(fy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy=ze.exports,yr=fy.exports;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gy=new Set,Gs={};function zo(e,t){ya(e,t),ya(e+"Capture",t)}function ya(e,t){for(Gs[e]=t,e=0;e<t.length;e++)gy.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vh=Object.prototype.hasOwnProperty,f2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y0={},Q0={};function p2(e){return Vh.call(Q0,e)?!0:Vh.call(Y0,e)?!1:f2.test(e)?Q0[e]=!0:(Y0[e]=!0,!1)}function v2(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g2(e,t,r,n){if(t===null||typeof t>"u"||v2(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qt(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new Qt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new Qt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new Qt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new Qt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new Qt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new Qt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new Qt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new Qt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new Qt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function yp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mp,yp);At[t]=new Qt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mp,yp);At[t]=new Qt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mp,yp);At[t]=new Qt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new Qt(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new Qt(e,1,!1,e.toLowerCase(),null,!0,!0)});function bp(e,t,r,n){var i=At.hasOwnProperty(t)?At[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g2(t,r,i,n)&&(r=null),n||i===null?p2(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Yn=vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),Ko=Symbol.for("react.portal"),qo=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),jh=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),yy=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Hh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),ui=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),J0=Symbol.iterator;function Ga(e){return e===null||typeof e!="object"?null:(e=J0&&e[J0]||e["@@iterator"],typeof e=="function"?e:null)}var et=Object.assign,jd;function ps(e){if(jd===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);jd=t&&t[1]||""}return`
`+jd+e}var Hd=!1;function Wd(e,t){if(!e||Hd)return"";Hd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var n=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){n=l}e.call(t.prototype)}else{try{throw Error()}catch(l){n=l}e()}}catch(l){if(l&&n&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Hd=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ps(e):""}function m2(e){switch(e.tag){case 5:return ps(e.type);case 16:return ps("Lazy");case 13:return ps("Suspense");case 19:return ps("SuspenseList");case 0:case 2:case 15:return e=Wd(e.type,!1),e;case 11:return e=Wd(e.type.render,!1),e;case 1:return e=Wd(e.type,!0),e;default:return""}}function Kh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qo:return"Fragment";case Ko:return"Portal";case jh:return"Profiler";case wp:return"StrictMode";case Hh:return"Suspense";case Wh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yy:return(e.displayName||"Context")+".Consumer";case my:return(e._context.displayName||"Context")+".Provider";case xp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kp:return t=e.displayName||null,t!==null?t:Kh(e.type)||"Memo";case ui:t=e._payload,e=e._init;try{return Kh(e(t))}catch{}}return null}function y2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kh(t);case 8:return t===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ri(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function b2(e){var t=wy(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gl(e){e._valueTracker||(e._valueTracker=b2(e))}function xy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=wy(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Qu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qh(e,t){var r=t.checked;return et({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function $0(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ri(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ky(e,t){t=t.checked,t!=null&&bp(e,"checked",t,!1)}function Xh(e,t){ky(e,t);var r=Ri(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gh(e,t.type,r):t.hasOwnProperty("defaultValue")&&Gh(e,t.type,Ri(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ev(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Gh(e,t,r){(t!=="number"||Qu(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vs=Array.isArray;function sa(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ri(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return et({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tv(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(vs(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ri(r)}}function Sy(e,t){var r=Ri(t.value),n=Ri(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function rv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zl,Fy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w2=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(e){w2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fs[t]=Fs[e]})});function Ey(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Fs.hasOwnProperty(e)&&Fs[e]?(""+t).trim():t+"px"}function Ty(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ey(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var x2=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(e,t){if(t){if(x2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Jh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=null;function Sp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ef=null,la=null,ua=null;function nv(e){if(e=zl(e)){if(typeof ef!="function")throw Error(N(280));var t=e.stateNode;t&&(t=td(t),ef(e.stateNode,e.type,t))}}function zy(e){la?ua?ua.push(e):ua=[e]:la=e}function _y(){if(la){var e=la,t=ua;if(ua=la=null,nv(e),t)for(e=0;e<t.length;e++)nv(t[e])}}function Py(e,t){return e(t)}function Ay(){}var Kd=!1;function Dy(e,t,r){if(Kd)return e(t,r);Kd=!0;try{return Py(e,t,r)}finally{Kd=!1,(la!==null||ua!==null)&&(Ay(),_y())}}function Ys(e,t){var r=e.stateNode;if(r===null)return null;var n=td(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var tf=!1;if(Hn)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){tf=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{tf=!1}function k2(e,t,r,n,i,o,a,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(r,l)}catch(c){this.onError(c)}}var Es=!1,Ju=null,$u=!1,rf=null,S2={onError:function(e){Es=!0,Ju=e}};function C2(e,t,r,n,i,o,a,s,u){Es=!1,Ju=null,k2.apply(S2,arguments)}function F2(e,t,r,n,i,o,a,s,u){if(C2.apply(this,arguments),Es){if(Es){var l=Ju;Es=!1,Ju=null}else throw Error(N(198));$u||($u=!0,rf=l)}}function _o(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Oy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iv(e){if(_o(e)!==e)throw Error(N(188))}function E2(e){var t=e.alternate;if(!t){if(t=_o(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return iv(i),e;if(o===n)return iv(i),t;o=o.sibling}throw Error(N(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function Ry(e){return e=E2(e),e!==null?By(e):null}function By(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=By(e);if(t!==null)return t;e=e.sibling}return null}var Ny=yr.unstable_scheduleCallback,ov=yr.unstable_cancelCallback,T2=yr.unstable_shouldYield,z2=yr.unstable_requestPaint,st=yr.unstable_now,_2=yr.unstable_getCurrentPriorityLevel,Cp=yr.unstable_ImmediatePriority,Iy=yr.unstable_UserBlockingPriority,ec=yr.unstable_NormalPriority,P2=yr.unstable_LowPriority,My=yr.unstable_IdlePriority,Qc=null,bn=null;function A2(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Qc,e,void 0,(e.current.flags&128)===128)}catch{}}var $r=Math.clz32?Math.clz32:R2,D2=Math.log,O2=Math.LN2;function R2(e){return e>>>=0,e===0?32:31-(D2(e)/O2|0)|0}var Yl=64,Ql=4194304;function gs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tc(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~i;s!==0?n=gs(s):(o&=a,o!==0&&(n=gs(o)))}else a=r&~i,a!==0?n=gs(a):o!==0&&(n=gs(o));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-$r(t),i=1<<r,n|=e[r],t&=~i;return n}function B2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N2(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-$r(o),s=1<<a,u=i[a];u===-1?((s&r)===0||(s&n)!==0)&&(i[a]=B2(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function nf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ly(){var e=Yl;return Yl<<=1,(Yl&4194240)===0&&(Yl=64),e}function qd(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function El(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$r(t),e[t]=r}function I2(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-$r(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Fp(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-$r(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var Ue=0;function Uy(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vy,Ep,jy,Hy,Wy,of=!1,Jl=[],ki=null,Si=null,Ci=null,Qs=new Map,Js=new Map,hi=[],M2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function av(e,t){switch(e){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Si=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":Qs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(t.pointerId)}}function Ya(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zl(t),t!==null&&Ep(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function L2(e,t,r,n,i){switch(t){case"focusin":return ki=Ya(ki,e,t,r,n,i),!0;case"dragenter":return Si=Ya(Si,e,t,r,n,i),!0;case"mouseover":return Ci=Ya(Ci,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Qs.set(o,Ya(Qs.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Js.set(o,Ya(Js.get(o)||null,e,t,r,n,i)),!0}return!1}function Ky(e){var t=io(e.target);if(t!==null){var r=_o(t);if(r!==null){if(t=r.tag,t===13){if(t=Oy(r),t!==null){e.blockedOn=t,Wy(e.priority,function(){jy(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _u(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=af(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);$h=n,r.target.dispatchEvent(n),$h=null}else return t=zl(r),t!==null&&Ep(t),e.blockedOn=r,!1;t.shift()}return!0}function sv(e,t,r){_u(e)&&r.delete(t)}function U2(){of=!1,ki!==null&&_u(ki)&&(ki=null),Si!==null&&_u(Si)&&(Si=null),Ci!==null&&_u(Ci)&&(Ci=null),Qs.forEach(sv),Js.forEach(sv)}function Qa(e,t){e.blockedOn===t&&(e.blockedOn=null,of||(of=!0,yr.unstable_scheduleCallback(yr.unstable_NormalPriority,U2)))}function $s(e){function t(i){return Qa(i,e)}if(0<Jl.length){Qa(Jl[0],e);for(var r=1;r<Jl.length;r++){var n=Jl[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ki!==null&&Qa(ki,e),Si!==null&&Qa(Si,e),Ci!==null&&Qa(Ci,e),Qs.forEach(t),Js.forEach(t),r=0;r<hi.length;r++)n=hi[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<hi.length&&(r=hi[0],r.blockedOn===null);)Ky(r),r.blockedOn===null&&hi.shift()}var ca=Yn.ReactCurrentBatchConfig,rc=!0;function V2(e,t,r,n){var i=Ue,o=ca.transition;ca.transition=null;try{Ue=1,Tp(e,t,r,n)}finally{Ue=i,ca.transition=o}}function j2(e,t,r,n){var i=Ue,o=ca.transition;ca.transition=null;try{Ue=4,Tp(e,t,r,n)}finally{Ue=i,ca.transition=o}}function Tp(e,t,r,n){if(rc){var i=af(e,t,r,n);if(i===null)rh(e,t,n,nc,r),av(e,n);else if(L2(i,e,t,r,n))n.stopPropagation();else if(av(e,n),t&4&&-1<M2.indexOf(e)){for(;i!==null;){var o=zl(i);if(o!==null&&Vy(o),o=af(e,t,r,n),o===null&&rh(e,t,n,nc,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else rh(e,t,n,null,r)}}var nc=null;function af(e,t,r,n){if(nc=null,e=Sp(n),e=io(e),e!==null)if(t=_o(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Oy(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nc=e,null}function qy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_2()){case Cp:return 1;case Iy:return 4;case ec:case P2:return 16;case My:return 536870912;default:return 16}default:return 16}}var gi=null,zp=null,Pu=null;function Xy(){if(Pu)return Pu;var e,t=zp,r=t.length,n,i="value"in gi?gi.value:gi.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Pu=i.slice(e,1<n?1-n:void 0)}function Au(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function lv(){return!1}function Sr(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$l:lv,this.isPropagationStopped=lv,this}return et(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),t}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_p=Sr(Ia),Tl=et({},Ia,{view:0,detail:0}),H2=Sr(Tl),Xd,Gd,Ja,Jc=et({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ja&&(Ja&&e.type==="mousemove"?(Xd=e.screenX-Ja.screenX,Gd=e.screenY-Ja.screenY):Gd=Xd=0,Ja=e),Xd)},movementY:function(e){return"movementY"in e?e.movementY:Gd}}),uv=Sr(Jc),W2=et({},Jc,{dataTransfer:0}),K2=Sr(W2),q2=et({},Tl,{relatedTarget:0}),Zd=Sr(q2),X2=et({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),G2=Sr(X2),Z2=et({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y2=Sr(Z2),Q2=et({},Ia,{data:0}),cv=Sr(Q2),J2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ek[e])?!!t[e]:!1}function Pp(){return tk}var rk=et({},Tl,{key:function(e){if(e.key){var t=J2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pp,charCode:function(e){return e.type==="keypress"?Au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nk=Sr(rk),ik=et({},Jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dv=Sr(ik),ok=et({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pp}),ak=Sr(ok),sk=et({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),lk=Sr(sk),uk=et({},Jc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ck=Sr(uk),dk=[9,13,27,32],Ap=Hn&&"CompositionEvent"in window,Ts=null;Hn&&"documentMode"in document&&(Ts=document.documentMode);var hk=Hn&&"TextEvent"in window&&!Ts,Gy=Hn&&(!Ap||Ts&&8<Ts&&11>=Ts),hv=String.fromCharCode(32),fv=!1;function Zy(e,t){switch(e){case"keyup":return dk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xo=!1;function fk(e,t){switch(e){case"compositionend":return Yy(t);case"keypress":return t.which!==32?null:(fv=!0,hv);case"textInput":return e=t.data,e===hv&&fv?null:e;default:return null}}function pk(e,t){if(Xo)return e==="compositionend"||!Ap&&Zy(e,t)?(e=Xy(),Pu=zp=gi=null,Xo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gy&&t.locale!=="ko"?null:t.data;default:return null}}var vk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vk[e.type]:t==="textarea"}function Qy(e,t,r,n){zy(n),t=ic(t,"onChange"),0<t.length&&(r=new _p("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var zs=null,el=null;function gk(e){l1(e,0)}function $c(e){var t=Yo(e);if(xy(t))return e}function mk(e,t){if(e==="change")return t}var Jy=!1;if(Hn){var Yd;if(Hn){var Qd="oninput"in document;if(!Qd){var vv=document.createElement("div");vv.setAttribute("oninput","return;"),Qd=typeof vv.oninput=="function"}Yd=Qd}else Yd=!1;Jy=Yd&&(!document.documentMode||9<document.documentMode)}function gv(){zs&&(zs.detachEvent("onpropertychange",$y),el=zs=null)}function $y(e){if(e.propertyName==="value"&&$c(el)){var t=[];Qy(t,el,e,Sp(e)),Dy(gk,t)}}function yk(e,t,r){e==="focusin"?(gv(),zs=t,el=r,zs.attachEvent("onpropertychange",$y)):e==="focusout"&&gv()}function bk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $c(el)}function wk(e,t){if(e==="click")return $c(t)}function xk(e,t){if(e==="input"||e==="change")return $c(t)}function kk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:kk;function tl(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Vh.call(t,i)||!rn(e[i],t[i]))return!1}return!0}function mv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yv(e,t){var r=mv(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=mv(r)}}function e1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?e1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function t1(){for(var e=window,t=Qu();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Qu(e.document)}return t}function Dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sk(e){var t=t1(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&e1(r.ownerDocument.documentElement,r)){if(n!==null&&Dp(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=yv(r,o);var a=yv(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ck=Hn&&"documentMode"in document&&11>=document.documentMode,Go=null,sf=null,_s=null,lf=!1;function bv(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;lf||Go==null||Go!==Qu(n)||(n=Go,"selectionStart"in n&&Dp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_s&&tl(_s,n)||(_s=n,n=ic(sf,"onSelect"),0<n.length&&(t=new _p("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Go)))}function eu(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Zo={animationend:eu("Animation","AnimationEnd"),animationiteration:eu("Animation","AnimationIteration"),animationstart:eu("Animation","AnimationStart"),transitionend:eu("Transition","TransitionEnd")},Jd={},r1={};Hn&&(r1=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function ed(e){if(Jd[e])return Jd[e];if(!Zo[e])return e;var t=Zo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in r1)return Jd[e]=t[r];return e}var n1=ed("animationend"),i1=ed("animationiteration"),o1=ed("animationstart"),a1=ed("transitionend"),s1=new Map,wv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(e,t){s1.set(e,t),zo(t,[e])}for(var $d=0;$d<wv.length;$d++){var eh=wv[$d],Fk=eh.toLowerCase(),Ek=eh[0].toUpperCase()+eh.slice(1);qi(Fk,"on"+Ek)}qi(n1,"onAnimationEnd");qi(i1,"onAnimationIteration");qi(o1,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(a1,"onTransitionEnd");ya("onMouseEnter",["mouseout","mouseover"]);ya("onMouseLeave",["mouseout","mouseover"]);ya("onPointerEnter",["pointerout","pointerover"]);ya("onPointerLeave",["pointerout","pointerover"]);zo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zo("onBeforeInput",["compositionend","keypress","textInput","paste"]);zo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function xv(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,F2(n,t,void 0,e),e.currentTarget=null}function l1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],u=s.instance,l=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;xv(i,s,l),o=u}else for(a=0;a<n.length;a++){if(s=n[a],u=s.instance,l=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;xv(i,s,l),o=u}}}if($u)throw e=rf,$u=!1,rf=null,e}function He(e,t){var r=t[ff];r===void 0&&(r=t[ff]=new Set);var n=e+"__bubble";r.has(n)||(u1(t,e,2,!1),r.add(n))}function th(e,t,r){var n=0;t&&(n|=4),u1(r,e,n,t)}var tu="_reactListening"+Math.random().toString(36).slice(2);function rl(e){if(!e[tu]){e[tu]=!0,gy.forEach(function(r){r!=="selectionchange"&&(Tk.has(r)||th(r,!1,e),th(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tu]||(t[tu]=!0,th("selectionchange",!1,t))}}function u1(e,t,r,n){switch(qy(t)){case 1:var i=V2;break;case 4:i=j2;break;default:i=Tp}r=i.bind(null,t,r,e),i=void 0,!tf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function rh(e,t,r,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=io(s),a===null)return;if(u=a.tag,u===5||u===6){n=o=a;continue e}s=s.parentNode}}n=n.return}Dy(function(){var l=o,c=Sp(r),d=[];e:{var h=s1.get(e);if(h!==void 0){var f=_p,v=e;switch(e){case"keypress":if(Au(r)===0)break e;case"keydown":case"keyup":f=nk;break;case"focusin":v="focus",f=Zd;break;case"focusout":v="blur",f=Zd;break;case"beforeblur":case"afterblur":f=Zd;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=K2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=ak;break;case n1:case i1:case o1:f=G2;break;case a1:f=lk;break;case"scroll":f=H2;break;case"wheel":f=ck;break;case"copy":case"cut":case"paste":f=Y2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=dv}var p=(t&4)!==0,b=!p&&e==="scroll",g=p?h!==null?h+"Capture":null:h;p=[];for(var y=l,w;y!==null;){w=y;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,g!==null&&(x=Ys(y,g),x!=null&&p.push(nl(y,x,w)))),b)break;y=y.return}0<p.length&&(h=new f(h,v,null,r,c),d.push({event:h,listeners:p}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&r!==$h&&(v=r.relatedTarget||r.fromElement)&&(io(v)||v[Wn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=r.relatedTarget||r.toElement,f=l,v=v?io(v):null,v!==null&&(b=_o(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=l),f!==v)){if(p=uv,x="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(p=dv,x="onPointerLeave",g="onPointerEnter",y="pointer"),b=f==null?h:Yo(f),w=v==null?h:Yo(v),h=new p(x,y+"leave",f,r,c),h.target=b,h.relatedTarget=w,x=null,io(c)===l&&(p=new p(g,y+"enter",v,r,c),p.target=w,p.relatedTarget=b,x=p),b=x,f&&v)t:{for(p=f,g=v,y=0,w=p;w;w=No(w))y++;for(w=0,x=g;x;x=No(x))w++;for(;0<y-w;)p=No(p),y--;for(;0<w-y;)g=No(g),w--;for(;y--;){if(p===g||g!==null&&p===g.alternate)break t;p=No(p),g=No(g)}p=null}else p=null;f!==null&&kv(d,h,f,p,!1),v!==null&&b!==null&&kv(d,b,v,p,!0)}}e:{if(h=l?Yo(l):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var k=mk;else if(pv(h))if(Jy)k=xk;else{k=bk;var E=yk}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=wk);if(k&&(k=k(e,l))){Qy(d,k,r,c);break e}E&&E(e,h,l),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Gh(h,"number",h.value)}switch(E=l?Yo(l):window,e){case"focusin":(pv(E)||E.contentEditable==="true")&&(Go=E,sf=l,_s=null);break;case"focusout":_s=sf=Go=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,bv(d,r,c);break;case"selectionchange":if(Ck)break;case"keydown":case"keyup":bv(d,r,c)}var T;if(Ap)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Xo?Zy(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Gy&&r.locale!=="ko"&&(Xo||z!=="onCompositionStart"?z==="onCompositionEnd"&&Xo&&(T=Xy()):(gi=c,zp="value"in gi?gi.value:gi.textContent,Xo=!0)),E=ic(l,z),0<E.length&&(z=new cv(z,e,null,r,c),d.push({event:z,listeners:E}),T?z.data=T:(T=Yy(r),T!==null&&(z.data=T)))),(T=hk?fk(e,r):pk(e,r))&&(l=ic(l,"onBeforeInput"),0<l.length&&(c=new cv("onBeforeInput","beforeinput",null,r,c),d.push({event:c,listeners:l}),c.data=T))}l1(d,t)})}function nl(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ic(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ys(e,r),o!=null&&n.unshift(nl(e,o,i)),o=Ys(e,t),o!=null&&n.push(nl(e,o,i))),e=e.return}return n}function No(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kv(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var s=r,u=s.alternate,l=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&l!==null&&(s=l,i?(u=Ys(r,o),u!=null&&a.unshift(nl(r,u,s))):i||(u=Ys(r,o),u!=null&&a.push(nl(r,u,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var zk=/\r\n?/g,_k=/\u0000|\uFFFD/g;function Sv(e){return(typeof e=="string"?e:""+e).replace(zk,`
`).replace(_k,"")}function ru(e,t,r){if(t=Sv(t),Sv(e)!==t&&r)throw Error(N(425))}function oc(){}var uf=null,cf=null;function df(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hf=typeof setTimeout=="function"?setTimeout:void 0,Pk=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,Ak=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(e){return Cv.resolve(null).then(e).catch(Dk)}:hf;function Dk(e){setTimeout(function(){throw e})}function nh(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),$s(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);$s(t)}function Fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ma,il="__reactProps$"+Ma,Wn="__reactContainer$"+Ma,ff="__reactEvents$"+Ma,Ok="__reactListeners$"+Ma,Rk="__reactHandles$"+Ma;function io(e){var t=e[gn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Wn]||r[gn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Fv(e);e!==null;){if(r=e[gn])return r;e=Fv(e)}return t}e=r,r=e.parentNode}return null}function zl(e){return e=e[gn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function td(e){return e[il]||null}var pf=[],Qo=-1;function Xi(e){return{current:e}}function Ke(e){0>Qo||(e.current=pf[Qo],pf[Qo]=null,Qo--)}function je(e,t){Qo++,pf[Qo]=e.current,e.current=t}var Bi={},Mt=Xi(Bi),rr=Xi(!1),po=Bi;function ba(e,t){var r=e.type.contextTypes;if(!r)return Bi;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nr(e){return e=e.childContextTypes,e!=null}function ac(){Ke(rr),Ke(Mt)}function Ev(e,t,r){if(Mt.current!==Bi)throw Error(N(168));je(Mt,t),je(rr,r)}function c1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(N(108,y2(e)||"Unknown",i));return et({},r,n)}function sc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bi,po=Mt.current,je(Mt,e),je(rr,rr.current),!0}function Tv(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=c1(e,t,po),n.__reactInternalMemoizedMergedChildContext=e,Ke(rr),Ke(Mt),je(Mt,e)):Ke(rr),je(rr,r)}var Dn=null,rd=!1,ih=!1;function d1(e){Dn===null?Dn=[e]:Dn.push(e)}function Bk(e){rd=!0,d1(e)}function Gi(){if(!ih&&Dn!==null){ih=!0;var e=0,t=Ue;try{var r=Dn;for(Ue=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Dn=null,rd=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),Ny(Cp,Gi),i}finally{Ue=t,ih=!1}}return null}var Jo=[],$o=0,lc=null,uc=0,Er=[],Tr=0,vo=null,Bn=1,Nn="";function eo(e,t){Jo[$o++]=uc,Jo[$o++]=lc,lc=e,uc=t}function h1(e,t,r){Er[Tr++]=Bn,Er[Tr++]=Nn,Er[Tr++]=vo,vo=e;var n=Bn;e=Nn;var i=32-$r(n)-1;n&=~(1<<i),r+=1;var o=32-$r(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Bn=1<<32-$r(t)+i|r<<i|n,Nn=o+e}else Bn=1<<o|r<<i|n,Nn=e}function Op(e){e.return!==null&&(eo(e,1),h1(e,1,0))}function Rp(e){for(;e===lc;)lc=Jo[--$o],Jo[$o]=null,uc=Jo[--$o],Jo[$o]=null;for(;e===vo;)vo=Er[--Tr],Er[Tr]=null,Nn=Er[--Tr],Er[Tr]=null,Bn=Er[--Tr],Er[Tr]=null}var gr=null,dr=null,Ge=!1,Qr=null;function f1(e,t){var r=Pr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function zv(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gr=e,dr=Fi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gr=e,dr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=vo!==null?{id:Bn,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Pr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,gr=e,dr=null,!0):!1;default:return!1}}function vf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gf(e){if(Ge){var t=dr;if(t){var r=t;if(!zv(e,t)){if(vf(e))throw Error(N(418));t=Fi(r.nextSibling);var n=gr;t&&zv(e,t)?f1(n,r):(e.flags=e.flags&-4097|2,Ge=!1,gr=e)}}else{if(vf(e))throw Error(N(418));e.flags=e.flags&-4097|2,Ge=!1,gr=e}}}function _v(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gr=e}function nu(e){if(e!==gr)return!1;if(!Ge)return _v(e),Ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!df(e.type,e.memoizedProps)),t&&(t=dr)){if(vf(e))throw p1(),Error(N(418));for(;t;)f1(e,t),t=Fi(t.nextSibling)}if(_v(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){dr=Fi(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}dr=null}}else dr=gr?Fi(e.stateNode.nextSibling):null;return!0}function p1(){for(var e=dr;e;)e=Fi(e.nextSibling)}function wa(){dr=gr=null,Ge=!1}function Bp(e){Qr===null?Qr=[e]:Qr.push(e)}var Nk=Yn.ReactCurrentBatchConfig;function Zr(e,t){if(e&&e.defaultProps){t=et({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var cc=Xi(null),dc=null,ea=null,Np=null;function Ip(){Np=ea=dc=null}function Mp(e){var t=cc.current;Ke(cc),e._currentValue=t}function mf(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function da(e,t){dc=e,Np=ea=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(er=!0),e.firstContext=null)}function Nr(e){var t=e._currentValue;if(Np!==e)if(e={context:e,memoizedValue:t,next:null},ea===null){if(dc===null)throw Error(N(308));ea=e,dc.dependencies={lanes:0,firstContext:e}}else ea=ea.next=e;return t}var oo=null;function Lp(e){oo===null?oo=[e]:oo.push(e)}function v1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Lp(t)):(r.next=i.next,i.next=r),t.interleaved=r,Kn(e,n)}function Kn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ci=!1;function Up(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function In(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ei(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Pe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Kn(e,r)}return i=n.interleaved,i===null?(t.next=t,Lp(n)):(t.next=i.next,i.next=t),n.interleaved=t,Kn(e,r)}function Du(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fp(e,r)}}function Pv(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function hc(e,t,r,n){var i=e.updateQueue;ci=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,l=u.next;u.next=null,a===null?o=l:a.next=l,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=l:s.next=l,c.lastBaseUpdate=u))}if(o!==null){var d=i.baseState;a=0,c=l=u=null,s=o;do{var h=s.lane,f=s.eventTime;if((n&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,p=s;switch(h=t,f=r,p.tag){case 1:if(v=p.payload,typeof v=="function"){d=v.call(f,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=p.payload,h=typeof v=="function"?v.call(f,d,h):v,h==null)break e;d=et({},d,h);break e;case 2:ci=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else f={eventTime:f,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=f,u=d):c=c.next=f,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(u=d),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mo|=a,e.lanes=a,e.memoizedState=d}}function Av(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(N(191,i));i.call(n)}}}var m1=new vy.Component().refs;function yf(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:et({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var nd={isMounted:function(e){return(e=e._reactInternals)?_o(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Wt(),i=zi(e),o=In(n,i);o.payload=t,r!=null&&(o.callback=r),t=Ei(e,o,i),t!==null&&(en(t,e,i,n),Du(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Wt(),i=zi(e),o=In(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ei(e,o,i),t!==null&&(en(t,e,i,n),Du(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Wt(),n=zi(e),i=In(r,n);i.tag=2,t!=null&&(i.callback=t),t=Ei(e,i,n),t!==null&&(en(t,e,n,r),Du(t,e,n))}};function Dv(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!tl(r,n)||!tl(i,o):!0}function y1(e,t,r){var n=!1,i=Bi,o=t.contextType;return typeof o=="object"&&o!==null?o=Nr(o):(i=nr(t)?po:Mt.current,n=t.contextTypes,o=(n=n!=null)?ba(e,i):Bi),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nd,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ov(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&nd.enqueueReplaceState(t,t.state,null)}function bf(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=m1,Up(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Nr(o):(o=nr(t)?po:Mt.current,i.context=ba(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(yf(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&nd.enqueueReplaceState(i,i.state,null),hc(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $a(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===m1&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function iu(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rv(e){var t=e._init;return t(e._payload)}function b1(e){function t(g,y){if(e){var w=g.deletions;w===null?(g.deletions=[y],g.flags|=16):w.push(y)}}function r(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function n(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=_i(g,y),g.index=0,g.sibling=null,g}function o(g,y,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<y?(g.flags|=2,y):w):(g.flags|=2,y)):(g.flags|=1048576,y)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,y,w,x){return y===null||y.tag!==6?(y=dh(w,g.mode,x),y.return=g,y):(y=i(y,w),y.return=g,y)}function u(g,y,w,x){var k=w.type;return k===qo?c(g,y,w.props.children,x,w.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ui&&Rv(k)===y.type)?(x=i(y,w.props),x.ref=$a(g,y,w),x.return=g,x):(x=Mu(w.type,w.key,w.props,null,g.mode,x),x.ref=$a(g,y,w),x.return=g,x)}function l(g,y,w,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=hh(w,g.mode,x),y.return=g,y):(y=i(y,w.children||[]),y.return=g,y)}function c(g,y,w,x,k){return y===null||y.tag!==7?(y=ho(w,g.mode,x,k),y.return=g,y):(y=i(y,w),y.return=g,y)}function d(g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=dh(""+y,g.mode,w),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xl:return w=Mu(y.type,y.key,y.props,null,g.mode,w),w.ref=$a(g,null,y),w.return=g,w;case Ko:return y=hh(y,g.mode,w),y.return=g,y;case ui:var x=y._init;return d(g,x(y._payload),w)}if(vs(y)||Ga(y))return y=ho(y,g.mode,w,null),y.return=g,y;iu(g,y)}return null}function h(g,y,w,x){var k=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return k!==null?null:s(g,y,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xl:return w.key===k?u(g,y,w,x):null;case Ko:return w.key===k?l(g,y,w,x):null;case ui:return k=w._init,h(g,y,k(w._payload),x)}if(vs(w)||Ga(w))return k!==null?null:c(g,y,w,x,null);iu(g,w)}return null}function f(g,y,w,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(w)||null,s(y,g,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xl:return g=g.get(x.key===null?w:x.key)||null,u(y,g,x,k);case Ko:return g=g.get(x.key===null?w:x.key)||null,l(y,g,x,k);case ui:var E=x._init;return f(g,y,w,E(x._payload),k)}if(vs(x)||Ga(x))return g=g.get(w)||null,c(y,g,x,k,null);iu(y,x)}return null}function v(g,y,w,x){for(var k=null,E=null,T=y,z=y=0,_=null;T!==null&&z<w.length;z++){T.index>z?(_=T,T=null):_=T.sibling;var P=h(g,T,w[z],x);if(P===null){T===null&&(T=_);break}e&&T&&P.alternate===null&&t(g,T),y=o(P,y,z),E===null?k=P:E.sibling=P,E=P,T=_}if(z===w.length)return r(g,T),Ge&&eo(g,z),k;if(T===null){for(;z<w.length;z++)T=d(g,w[z],x),T!==null&&(y=o(T,y,z),E===null?k=T:E.sibling=T,E=T);return Ge&&eo(g,z),k}for(T=n(g,T);z<w.length;z++)_=f(T,g,z,w[z],x),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?z:_.key),y=o(_,y,z),E===null?k=_:E.sibling=_,E=_);return e&&T.forEach(function(D){return t(g,D)}),Ge&&eo(g,z),k}function p(g,y,w,x){var k=Ga(w);if(typeof k!="function")throw Error(N(150));if(w=k.call(w),w==null)throw Error(N(151));for(var E=k=null,T=y,z=y=0,_=null,P=w.next();T!==null&&!P.done;z++,P=w.next()){T.index>z?(_=T,T=null):_=T.sibling;var D=h(g,T,P.value,x);if(D===null){T===null&&(T=_);break}e&&T&&D.alternate===null&&t(g,T),y=o(D,y,z),E===null?k=D:E.sibling=D,E=D,T=_}if(P.done)return r(g,T),Ge&&eo(g,z),k;if(T===null){for(;!P.done;z++,P=w.next())P=d(g,P.value,x),P!==null&&(y=o(P,y,z),E===null?k=P:E.sibling=P,E=P);return Ge&&eo(g,z),k}for(T=n(g,T);!P.done;z++,P=w.next())P=f(T,g,z,P.value,x),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?z:P.key),y=o(P,y,z),E===null?k=P:E.sibling=P,E=P);return e&&T.forEach(function(I){return t(g,I)}),Ge&&eo(g,z),k}function b(g,y,w,x){if(typeof w=="object"&&w!==null&&w.type===qo&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Xl:e:{for(var k=w.key,E=y;E!==null;){if(E.key===k){if(k=w.type,k===qo){if(E.tag===7){r(g,E.sibling),y=i(E,w.props.children),y.return=g,g=y;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ui&&Rv(k)===E.type){r(g,E.sibling),y=i(E,w.props),y.ref=$a(g,E,w),y.return=g,g=y;break e}r(g,E);break}else t(g,E);E=E.sibling}w.type===qo?(y=ho(w.props.children,g.mode,x,w.key),y.return=g,g=y):(x=Mu(w.type,w.key,w.props,null,g.mode,x),x.ref=$a(g,y,w),x.return=g,g=x)}return a(g);case Ko:e:{for(E=w.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){r(g,y.sibling),y=i(y,w.children||[]),y.return=g,g=y;break e}else{r(g,y);break}else t(g,y);y=y.sibling}y=hh(w,g.mode,x),y.return=g,g=y}return a(g);case ui:return E=w._init,b(g,y,E(w._payload),x)}if(vs(w))return v(g,y,w,x);if(Ga(w))return p(g,y,w,x);iu(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(r(g,y.sibling),y=i(y,w),y.return=g,g=y):(r(g,y),y=dh(w,g.mode,x),y.return=g,g=y),a(g)):r(g,y)}return b}var xa=b1(!0),w1=b1(!1),_l={},wn=Xi(_l),ol=Xi(_l),al=Xi(_l);function ao(e){if(e===_l)throw Error(N(174));return e}function Vp(e,t){switch(je(al,t),je(ol,e),je(wn,_l),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yh(t,e)}Ke(wn),je(wn,t)}function ka(){Ke(wn),Ke(ol),Ke(al)}function x1(e){ao(al.current);var t=ao(wn.current),r=Yh(t,e.type);t!==r&&(je(ol,e),je(wn,r))}function jp(e){ol.current===e&&(Ke(wn),Ke(ol))}var Qe=Xi(0);function fc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oh=[];function Hp(){for(var e=0;e<oh.length;e++)oh[e]._workInProgressVersionPrimary=null;oh.length=0}var Ou=Yn.ReactCurrentDispatcher,ah=Yn.ReactCurrentBatchConfig,go=0,Je=null,ft=null,wt=null,pc=!1,Ps=!1,sl=0,Ik=0;function Rt(){throw Error(N(321))}function Wp(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rn(e[r],t[r]))return!1;return!0}function Kp(e,t,r,n,i,o){if(go=o,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ou.current=e===null||e.memoizedState===null?Vk:jk,e=r(n,i),Ps){o=0;do{if(Ps=!1,sl=0,25<=o)throw Error(N(301));o+=1,wt=ft=null,t.updateQueue=null,Ou.current=Hk,e=r(n,i)}while(Ps)}if(Ou.current=vc,t=ft!==null&&ft.next!==null,go=0,wt=ft=Je=null,pc=!1,t)throw Error(N(300));return e}function qp(){var e=sl!==0;return sl=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Je.memoizedState=wt=e:wt=wt.next=e,wt}function Ir(){if(ft===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var t=wt===null?Je.memoizedState:wt.next;if(t!==null)wt=t,ft=e;else{if(e===null)throw Error(N(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?Je.memoizedState=wt=e:wt=wt.next=e}return wt}function ll(e,t){return typeof t=="function"?t(e):t}function sh(e){var t=Ir(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=ft,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=a=null,u=null,l=o;do{var c=l.lane;if((go&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),n=l.hasEagerState?l.eagerState:e(n,l.action);else{var d={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(s=u=d,a=n):u=u.next=d,Je.lanes|=c,mo|=c}l=l.next}while(l!==null&&l!==o);u===null?a=n:u.next=s,rn(n,t.memoizedState)||(er=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Je.lanes|=o,mo|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function lh(e){var t=Ir(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);rn(o,t.memoizedState)||(er=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function k1(){}function S1(e,t){var r=Je,n=Ir(),i=t(),o=!rn(n.memoizedState,i);if(o&&(n.memoizedState=i,er=!0),n=n.queue,Xp(E1.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||wt!==null&&wt.memoizedState.tag&1){if(r.flags|=2048,ul(9,F1.bind(null,r,n,i,t),void 0,null),Ct===null)throw Error(N(349));(go&30)!==0||C1(r,t,i)}return i}function C1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function F1(e,t,r,n){t.value=r,t.getSnapshot=n,T1(t)&&z1(e)}function E1(e,t,r){return r(function(){T1(t)&&z1(e)})}function T1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rn(e,r)}catch{return!0}}function z1(e){var t=Kn(e,1);t!==null&&en(t,e,1,-1)}function Bv(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:e},t.queue=e,e=e.dispatch=Uk.bind(null,Je,e),[t.memoizedState,e]}function ul(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function _1(){return Ir().memoizedState}function Ru(e,t,r,n){var i=vn();Je.flags|=e,i.memoizedState=ul(1|t,r,void 0,n===void 0?null:n)}function id(e,t,r,n){var i=Ir();n=n===void 0?null:n;var o=void 0;if(ft!==null){var a=ft.memoizedState;if(o=a.destroy,n!==null&&Wp(n,a.deps)){i.memoizedState=ul(t,r,o,n);return}}Je.flags|=e,i.memoizedState=ul(1|t,r,o,n)}function Nv(e,t){return Ru(8390656,8,e,t)}function Xp(e,t){return id(2048,8,e,t)}function P1(e,t){return id(4,2,e,t)}function A1(e,t){return id(4,4,e,t)}function D1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function O1(e,t,r){return r=r!=null?r.concat([e]):null,id(4,4,D1.bind(null,t,e),r)}function Gp(){}function R1(e,t){var r=Ir();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Wp(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function B1(e,t){var r=Ir();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Wp(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function N1(e,t,r){return(go&21)===0?(e.baseState&&(e.baseState=!1,er=!0),e.memoizedState=r):(rn(r,t)||(r=Ly(),Je.lanes|=r,mo|=r,e.baseState=!0),t)}function Mk(e,t){var r=Ue;Ue=r!==0&&4>r?r:4,e(!0);var n=ah.transition;ah.transition={};try{e(!1),t()}finally{Ue=r,ah.transition=n}}function I1(){return Ir().memoizedState}function Lk(e,t,r){var n=zi(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},M1(e))L1(t,r);else if(r=v1(e,t,r,n),r!==null){var i=Wt();en(r,e,n,i),U1(r,t,n)}}function Uk(e,t,r){var n=zi(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(M1(e))L1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,rn(s,a)){var u=t.interleaved;u===null?(i.next=i,Lp(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=v1(e,t,i,n),r!==null&&(i=Wt(),en(r,e,n,i),U1(r,t,n))}}function M1(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function L1(e,t){Ps=pc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function U1(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fp(e,r)}}var vc={readContext:Nr,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},Vk={readContext:Nr,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Nr,useEffect:Nv,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ru(4194308,4,D1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ru(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ru(4,2,e,t)},useMemo:function(e,t){var r=vn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=vn();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Lk.bind(null,Je,e),[n.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:Bv,useDebugValue:Gp,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=Bv(!1),t=e[0];return e=Mk.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Je,i=vn();if(Ge){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),Ct===null)throw Error(N(349));(go&30)!==0||C1(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Nv(E1.bind(null,n,o,e),[e]),n.flags|=2048,ul(9,F1.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=vn(),t=Ct.identifierPrefix;if(Ge){var r=Nn,n=Bn;r=(n&~(1<<32-$r(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=sl++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ik++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jk={readContext:Nr,useCallback:R1,useContext:Nr,useEffect:Xp,useImperativeHandle:O1,useInsertionEffect:P1,useLayoutEffect:A1,useMemo:B1,useReducer:sh,useRef:_1,useState:function(){return sh(ll)},useDebugValue:Gp,useDeferredValue:function(e){var t=Ir();return N1(t,ft.memoizedState,e)},useTransition:function(){var e=sh(ll)[0],t=Ir().memoizedState;return[e,t]},useMutableSource:k1,useSyncExternalStore:S1,useId:I1,unstable_isNewReconciler:!1},Hk={readContext:Nr,useCallback:R1,useContext:Nr,useEffect:Xp,useImperativeHandle:O1,useInsertionEffect:P1,useLayoutEffect:A1,useMemo:B1,useReducer:lh,useRef:_1,useState:function(){return lh(ll)},useDebugValue:Gp,useDeferredValue:function(e){var t=Ir();return ft===null?t.memoizedState=e:N1(t,ft.memoizedState,e)},useTransition:function(){var e=lh(ll)[0],t=Ir().memoizedState;return[e,t]},useMutableSource:k1,useSyncExternalStore:S1,useId:I1,unstable_isNewReconciler:!1};function Sa(e,t){try{var r="",n=t;do r+=m2(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function uh(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function wf(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Wk=typeof WeakMap=="function"?WeakMap:Map;function V1(e,t,r){r=In(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){mc||(mc=!0,Pf=n),wf(e,t)},r}function j1(e,t,r){r=In(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){wf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){wf(e,t),typeof n!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Iv(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Wk;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=i5.bind(null,e,t,r),t.then(e,e))}function Mv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lv(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=In(-1,1),t.tag=2,Ei(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Kk=Yn.ReactCurrentOwner,er=!1;function jt(e,t,r,n){t.child=e===null?w1(t,null,r,n):xa(t,e.child,r,n)}function Uv(e,t,r,n,i){r=r.render;var o=t.ref;return da(t,i),n=Kp(e,t,r,n,o,i),r=qp(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(Ge&&r&&Op(t),t.flags|=1,jt(e,t,n,i),t.child)}function Vv(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!r0(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,H1(e,t,o,n,i)):(e=Mu(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:tl,r(a,n)&&e.ref===t.ref)return qn(e,t,i)}return t.flags|=1,e=_i(o,n),e.ref=t.ref,e.return=t,t.child=e}function H1(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(tl(o,n)&&e.ref===t.ref)if(er=!1,t.pendingProps=n=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(er=!0);else return t.lanes=e.lanes,qn(e,t,i)}return xf(e,t,r,n,i)}function W1(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(ra,ur),ur|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(ra,ur),ur|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,je(ra,ur),ur|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,je(ra,ur),ur|=n;return jt(e,t,i,r),t.child}function K1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function xf(e,t,r,n,i){var o=nr(r)?po:Mt.current;return o=ba(t,o),da(t,i),r=Kp(e,t,r,n,o,i),n=qp(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(Ge&&n&&Op(t),t.flags|=1,jt(e,t,r,i),t.child)}function jv(e,t,r,n,i){if(nr(r)){var o=!0;sc(t)}else o=!1;if(da(t,i),t.stateNode===null)Bu(e,t),y1(t,r,n),bf(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,l=r.contextType;typeof l=="object"&&l!==null?l=Nr(l):(l=nr(r)?po:Mt.current,l=ba(t,l));var c=r.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||u!==l)&&Ov(t,a,n,l),ci=!1;var h=t.memoizedState;a.state=h,hc(t,n,a,i),u=t.memoizedState,s!==n||h!==u||rr.current||ci?(typeof c=="function"&&(yf(t,r,c,n),u=t.memoizedState),(s=ci||Dv(t,r,s,n,h,u,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=l,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,g1(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Zr(t.type,s),a.props=l,d=t.pendingProps,h=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Nr(u):(u=nr(r)?po:Mt.current,u=ba(t,u));var f=r.getDerivedStateFromProps;(c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||h!==u)&&Ov(t,a,n,u),ci=!1,h=t.memoizedState,a.state=h,hc(t,n,a,i);var v=t.memoizedState;s!==d||h!==v||rr.current||ci?(typeof f=="function"&&(yf(t,r,f,n),v=t.memoizedState),(l=ci||Dv(t,r,l,n,h,v,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),a.props=n,a.state=v,a.context=u,n=l):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return kf(e,t,r,n,o,i)}function kf(e,t,r,n,i,o){K1(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Tv(t,r,!1),qn(e,t,o);n=t.stateNode,Kk.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=xa(t,e.child,null,o),t.child=xa(t,null,s,o)):jt(e,t,s,o),t.memoizedState=n.state,i&&Tv(t,r,!0),t.child}function q1(e){var t=e.stateNode;t.pendingContext?Ev(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ev(e,t.context,!1),Vp(e,t.containerInfo)}function Hv(e,t,r,n,i){return wa(),Bp(i),t.flags|=256,jt(e,t,r,n),t.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Cf(e){return{baseLanes:e,cachePool:null,transitions:null}}function X1(e,t,r){var n=t.pendingProps,i=Qe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Qe,i&1),e===null)return gf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},(n&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=sd(a,n,0,null),e=ho(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cf(r),t.memoizedState=Sf,e):Zp(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return qk(e,t,a,n,s,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:n.children};return(a&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=_i(i,u),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=_i(s,o):(o=ho(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Cf(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Sf,n}return o=e.child,e=o.sibling,n=_i(o,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Zp(e,t){return t=sd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ou(e,t,r,n){return n!==null&&Bp(n),xa(t,e.child,null,r),e=Zp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qk(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=uh(Error(N(422))),ou(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=sd({mode:"visible",children:n.children},i,0,null),o=ho(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,(t.mode&1)!==0&&xa(t,e.child,null,a),t.child.memoizedState=Cf(a),t.memoizedState=Sf,o);if((t.mode&1)===0)return ou(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(N(419)),n=uh(o,n,void 0),ou(e,t,a,n)}if(s=(a&e.childLanes)!==0,er||s){if(n=Ct,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kn(e,i),en(n,e,i,-1))}return t0(),n=uh(Error(N(421))),ou(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=o5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,dr=Fi(i.nextSibling),gr=t,Ge=!0,Qr=null,e!==null&&(Er[Tr++]=Bn,Er[Tr++]=Nn,Er[Tr++]=vo,Bn=e.id,Nn=e.overflow,vo=t),t=Zp(t,n.children),t.flags|=4096,t)}function Wv(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),mf(e.return,t,r)}function ch(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function G1(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(jt(e,t,n.children,r),n=Qe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wv(e,r,t);else if(e.tag===19)Wv(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(je(Qe,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&fc(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ch(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fc(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ch(t,!0,r,null,o);break;case"together":ch(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bu(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),mo|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=_i(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=_i(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Xk(e,t,r){switch(t.tag){case 3:q1(t),wa();break;case 5:x1(t);break;case 1:nr(t.type)&&sc(t);break;case 4:Vp(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;je(cc,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(je(Qe,Qe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?X1(e,t,r):(je(Qe,Qe.current&1),e=qn(e,t,r),e!==null?e.sibling:null);je(Qe,Qe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return G1(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Qe,Qe.current),n)break;return null;case 22:case 23:return t.lanes=0,W1(e,t,r)}return qn(e,t,r)}var Z1,Ff,Y1,Q1;Z1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ff=function(){};Y1=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,ao(wn.current);var o=null;switch(r){case"input":i=qh(e,i),n=qh(e,n),o=[];break;case"select":i=et({},i,{value:void 0}),n=et({},n,{value:void 0}),o=[];break;case"textarea":i=Zh(e,i),n=Zh(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=oc)}Qh(r,n);var a;r=null;for(l in i)if(!n.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var s=i[l];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gs.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in n){var u=n[l];if(s=i!=null?i[l]:void 0,n.hasOwnProperty(l)&&u!==s&&(u!=null||s!=null))if(l==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(l,r)),r=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&He("scroll",e),o||s===u||(o=[])):(o=o||[]).push(l,u))}r&&(o=o||[]).push("style",r);var l=o;(t.updateQueue=l)&&(t.flags|=4)}};Q1=function(e,t,r,n){r!==n&&(t.flags|=4)};function es(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Gk(e,t,r){var n=t.pendingProps;switch(Rp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(t),null;case 1:return nr(t.type)&&ac(),Bt(t),null;case 3:return n=t.stateNode,ka(),Ke(rr),Ke(Mt),Hp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(nu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qr!==null&&(Of(Qr),Qr=null))),Ff(e,t),Bt(t),null;case 5:jp(t);var i=ao(al.current);if(r=t.type,e!==null&&t.stateNode!=null)Y1(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return Bt(t),null}if(e=ao(wn.current),nu(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[gn]=t,n[il]=o,e=(t.mode&1)!==0,r){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(i=0;i<ms.length;i++)He(ms[i],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":$0(n,o),He("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},He("invalid",n);break;case"textarea":tv(n,o),He("invalid",n)}Qh(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&ru(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ru(n.textContent,s,e),i=["children",""+s]):Gs.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&He("scroll",n)}switch(r){case"input":Gl(n),ev(n,o,!0);break;case"textarea":Gl(n),rv(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=oc)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cy(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[gn]=t,e[il]=n,Z1(e,t,!1,!1),t.stateNode=e;e:{switch(a=Jh(r,n),r){case"dialog":He("cancel",e),He("close",e),i=n;break;case"iframe":case"object":case"embed":He("load",e),i=n;break;case"video":case"audio":for(i=0;i<ms.length;i++)He(ms[i],e);i=n;break;case"source":He("error",e),i=n;break;case"img":case"image":case"link":He("error",e),He("load",e),i=n;break;case"details":He("toggle",e),i=n;break;case"input":$0(e,n),i=qh(e,n),He("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=et({},n,{value:void 0}),He("invalid",e);break;case"textarea":tv(e,n),i=Zh(e,n),He("invalid",e);break;default:i=n}Qh(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ty(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fy(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Zs(e,u):typeof u=="number"&&Zs(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&He("scroll",e):u!=null&&bp(e,o,u,a))}switch(r){case"input":Gl(e),ev(e,n,!1);break;case"textarea":Gl(e),rv(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ri(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?sa(e,!!n.multiple,o,!1):n.defaultValue!=null&&sa(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Bt(t),null;case 6:if(e&&t.stateNode!=null)Q1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=ao(al.current),ao(wn.current),nu(t)){if(n=t.stateNode,r=t.memoizedProps,n[gn]=t,(o=n.nodeValue!==r)&&(e=gr,e!==null))switch(e.tag){case 3:ru(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ru(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[gn]=t,t.stateNode=n}return Bt(t),null;case 13:if(Ke(Qe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&dr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)p1(),wa(),t.flags|=98560,o=!1;else if(o=nu(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[gn]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Bt(t),o=!1}else Qr!==null&&(Of(Qr),Qr=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Qe.current&1)!==0?gt===0&&(gt=3):t0())),t.updateQueue!==null&&(t.flags|=4),Bt(t),null);case 4:return ka(),Ff(e,t),e===null&&rl(t.stateNode.containerInfo),Bt(t),null;case 10:return Mp(t.type._context),Bt(t),null;case 17:return nr(t.type)&&ac(),Bt(t),null;case 19:if(Ke(Qe),o=t.memoizedState,o===null)return Bt(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)es(o,!1);else{if(gt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=fc(e),a!==null){for(t.flags|=128,es(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return je(Qe,Qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&st()>Ca&&(t.flags|=128,n=!0,es(o,!1),t.lanes=4194304)}else{if(!n)if(e=fc(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),es(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ge)return Bt(t),null}else 2*st()-o.renderingStartTime>Ca&&r!==1073741824&&(t.flags|=128,n=!0,es(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=st(),t.sibling=null,r=Qe.current,je(Qe,n?r&1|2:r&1),t):(Bt(t),null);case 22:case 23:return e0(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(ur&1073741824)!==0&&(Bt(t),t.subtreeFlags&6&&(t.flags|=8192)):Bt(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Zk(e,t){switch(Rp(t),t.tag){case 1:return nr(t.type)&&ac(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(),Ke(rr),Ke(Mt),Hp(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return jp(t),null;case 13:if(Ke(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(Qe),null;case 4:return ka(),null;case 10:return Mp(t.type._context),null;case 22:case 23:return e0(),null;case 24:return null;default:return null}}var au=!1,Nt=!1,Yk=typeof WeakSet=="function"?WeakSet:Set,q=null;function ta(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){nt(e,t,n)}else r.current=null}function Ef(e,t,r){try{r()}catch(n){nt(e,t,n)}}var Kv=!1;function Qk(e,t){if(uf=rc,e=t1(),Dp(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,s=-1,u=-1,l=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==r||i!==0&&d.nodeType!==3||(s=a+i),d!==o||n!==0&&d.nodeType!==3||(u=a+n),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break t;if(h===r&&++l===i&&(s=a),h===o&&++c===n&&(u=a),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(cf={focusedElem:e,selectionRange:r},rc=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var p=v.memoizedProps,b=v.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?p:Zr(t.type,p),b);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){nt(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return v=Kv,Kv=!1,v}function As(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ef(t,r,o)}i=i.next}while(i!==n)}}function od(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Tf(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function J1(e){var t=e.alternate;t!==null&&(e.alternate=null,J1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[il],delete t[ff],delete t[Ok],delete t[Rk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $1(e){return e.tag===5||e.tag===3||e.tag===4}function qv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=oc));else if(n!==4&&(e=e.child,e!==null))for(zf(e,t,r),e=e.sibling;e!==null;)zf(e,t,r),e=e.sibling}function _f(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(_f(e,t,r),e=e.sibling;e!==null;)_f(e,t,r),e=e.sibling}var Et=null,Yr=!1;function ii(e,t,r){for(r=r.child;r!==null;)eb(e,t,r),r=r.sibling}function eb(e,t,r){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Qc,r)}catch{}switch(r.tag){case 5:Nt||ta(r,t);case 6:var n=Et,i=Yr;Et=null,ii(e,t,r),Et=n,Yr=i,Et!==null&&(Yr?(e=Et,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Et.removeChild(r.stateNode));break;case 18:Et!==null&&(Yr?(e=Et,r=r.stateNode,e.nodeType===8?nh(e.parentNode,r):e.nodeType===1&&nh(e,r),$s(e)):nh(Et,r.stateNode));break;case 4:n=Et,i=Yr,Et=r.stateNode.containerInfo,Yr=!0,ii(e,t,r),Et=n,Yr=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&Ef(r,t,a),i=i.next}while(i!==n)}ii(e,t,r);break;case 1:if(!Nt&&(ta(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){nt(r,t,s)}ii(e,t,r);break;case 21:ii(e,t,r);break;case 22:r.mode&1?(Nt=(n=Nt)||r.memoizedState!==null,ii(e,t,r),Nt=n):ii(e,t,r);break;default:ii(e,t,r)}}function Xv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Yk),t.forEach(function(n){var i=a5.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function qr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Et=s.stateNode,Yr=!1;break e;case 3:Et=s.stateNode.containerInfo,Yr=!0;break e;case 4:Et=s.stateNode.containerInfo,Yr=!0;break e}s=s.return}if(Et===null)throw Error(N(160));eb(o,a,i),Et=null,Yr=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){nt(i,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tb(t,e),t=t.sibling}function tb(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qr(t,e),dn(e),n&4){try{As(3,e,e.return),od(3,e)}catch(p){nt(e,e.return,p)}try{As(5,e,e.return)}catch(p){nt(e,e.return,p)}}break;case 1:qr(t,e),dn(e),n&512&&r!==null&&ta(r,r.return);break;case 5:if(qr(t,e),dn(e),n&512&&r!==null&&ta(r,r.return),e.flags&32){var i=e.stateNode;try{Zs(i,"")}catch(p){nt(e,e.return,p)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ky(i,o),Jh(s,a);var l=Jh(s,o);for(a=0;a<u.length;a+=2){var c=u[a],d=u[a+1];c==="style"?Ty(i,d):c==="dangerouslySetInnerHTML"?Fy(i,d):c==="children"?Zs(i,d):bp(i,c,d,l)}switch(s){case"input":Xh(i,o);break;case"textarea":Sy(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?sa(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?sa(i,!!o.multiple,o.defaultValue,!0):sa(i,!!o.multiple,o.multiple?[]:"",!1))}i[il]=o}catch(p){nt(e,e.return,p)}}break;case 6:if(qr(t,e),dn(e),n&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){nt(e,e.return,p)}}break;case 3:if(qr(t,e),dn(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{$s(t.containerInfo)}catch(p){nt(e,e.return,p)}break;case 4:qr(t,e),dn(e);break;case 13:qr(t,e),dn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jp=st())),n&4&&Xv(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(Nt=(l=Nt)||c,qr(t,e),Nt=l):qr(t,e),dn(e),n&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!c&&(e.mode&1)!==0)for(q=e,c=e.child;c!==null;){for(d=q=c;q!==null;){switch(h=q,f=h.child,h.tag){case 0:case 11:case 14:case 15:As(4,h,h.return);break;case 1:ta(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(p){nt(n,r,p)}}break;case 5:ta(h,h.return);break;case 22:if(h.memoizedState!==null){Zv(d);continue}}f!==null?(f.return=h,q=f):Zv(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,l?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ey("display",a))}catch(p){nt(e,e.return,p)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(p){nt(e,e.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qr(t,e),dn(e),n&4&&Xv(e);break;case 21:break;default:qr(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if($1(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Zs(i,""),n.flags&=-33);var o=qv(e);_f(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,s=qv(e);zf(e,s,a);break;default:throw Error(N(161))}}catch(u){nt(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jk(e,t,r){q=e,rb(e)}function rb(e,t,r){for(var n=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||au;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Nt;s=au;var l=Nt;if(au=a,(Nt=u)&&!l)for(q=i;q!==null;)a=q,u=a.child,a.tag===22&&a.memoizedState!==null?Yv(i):u!==null?(u.return=a,q=u):Yv(i);for(;o!==null;)q=o,rb(o),o=o.sibling;q=i,au=s,Nt=l}Gv(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,q=o):Gv(e)}}function Gv(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Nt||od(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Nt)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Zr(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Av(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Av(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$s(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Nt||t.flags&512&&Tf(t)}catch(h){nt(t,t.return,h)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function Zv(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function Yv(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{od(4,t)}catch(u){nt(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){nt(t,i,u)}}var o=t.return;try{Tf(t)}catch(u){nt(t,o,u)}break;case 5:var a=t.return;try{Tf(t)}catch(u){nt(t,a,u)}}}catch(u){nt(t,t.return,u)}if(t===e){q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,q=s;break}q=t.return}}var $k=Math.ceil,gc=Yn.ReactCurrentDispatcher,Yp=Yn.ReactCurrentOwner,Or=Yn.ReactCurrentBatchConfig,Pe=0,Ct=null,ut=null,_t=0,ur=0,ra=Xi(0),gt=0,cl=null,mo=0,ad=0,Qp=0,Ds=null,$t=null,Jp=0,Ca=1/0,Pn=null,mc=!1,Pf=null,Ti=null,su=!1,mi=null,yc=0,Os=0,Af=null,Nu=-1,Iu=0;function Wt(){return(Pe&6)!==0?st():Nu!==-1?Nu:Nu=st()}function zi(e){return(e.mode&1)===0?1:(Pe&2)!==0&&_t!==0?_t&-_t:Nk.transition!==null?(Iu===0&&(Iu=Ly()),Iu):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:qy(e.type)),e)}function en(e,t,r,n){if(50<Os)throw Os=0,Af=null,Error(N(185));El(e,r,n),((Pe&2)===0||e!==Ct)&&(e===Ct&&((Pe&2)===0&&(ad|=r),gt===4&&fi(e,_t)),ir(e,n),r===1&&Pe===0&&(t.mode&1)===0&&(Ca=st()+500,rd&&Gi()))}function ir(e,t){var r=e.callbackNode;N2(e,t);var n=tc(e,e===Ct?_t:0);if(n===0)r!==null&&ov(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ov(r),t===1)e.tag===0?Bk(Qv.bind(null,e)):d1(Qv.bind(null,e)),Ak(function(){(Pe&6)===0&&Gi()}),r=null;else{switch(Uy(n)){case 1:r=Cp;break;case 4:r=Iy;break;case 16:r=ec;break;case 536870912:r=My;break;default:r=ec}r=cb(r,nb.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function nb(e,t){if(Nu=-1,Iu=0,(Pe&6)!==0)throw Error(N(327));var r=e.callbackNode;if(ha()&&e.callbackNode!==r)return null;var n=tc(e,e===Ct?_t:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=bc(e,n);else{t=n;var i=Pe;Pe|=2;var o=ob();(Ct!==e||_t!==t)&&(Pn=null,Ca=st()+500,co(e,t));do try{r5();break}catch(s){ib(e,s)}while(1);Ip(),gc.current=o,Pe=i,ut!==null?t=0:(Ct=null,_t=0,t=gt)}if(t!==0){if(t===2&&(i=nf(e),i!==0&&(n=i,t=Df(e,i))),t===1)throw r=cl,co(e,0),fi(e,n),ir(e,st()),r;if(t===6)fi(e,n);else{if(i=e.current.alternate,(n&30)===0&&!e5(i)&&(t=bc(e,n),t===2&&(o=nf(e),o!==0&&(n=o,t=Df(e,o))),t===1))throw r=cl,co(e,0),fi(e,n),ir(e,st()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:to(e,$t,Pn);break;case 3:if(fi(e,n),(n&130023424)===n&&(t=Jp+500-st(),10<t)){if(tc(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Wt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hf(to.bind(null,e,$t,Pn),t);break}to(e,$t,Pn);break;case 4:if(fi(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-$r(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=st()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*$k(n/1960))-n,10<n){e.timeoutHandle=hf(to.bind(null,e,$t,Pn),n);break}to(e,$t,Pn);break;case 5:to(e,$t,Pn);break;default:throw Error(N(329))}}}return ir(e,st()),e.callbackNode===r?nb.bind(null,e):null}function Df(e,t){var r=Ds;return e.current.memoizedState.isDehydrated&&(co(e,t).flags|=256),e=bc(e,t),e!==2&&(t=$t,$t=r,t!==null&&Of(t)),e}function Of(e){$t===null?$t=e:$t.push.apply($t,e)}function e5(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!rn(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fi(e,t){for(t&=~Qp,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-$r(t),n=1<<r;e[r]=-1,t&=~n}}function Qv(e){if((Pe&6)!==0)throw Error(N(327));ha();var t=tc(e,0);if((t&1)===0)return ir(e,st()),null;var r=bc(e,t);if(e.tag!==0&&r===2){var n=nf(e);n!==0&&(t=n,r=Df(e,n))}if(r===1)throw r=cl,co(e,0),fi(e,t),ir(e,st()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,to(e,$t,Pn),ir(e,st()),null}function $p(e,t){var r=Pe;Pe|=1;try{return e(t)}finally{Pe=r,Pe===0&&(Ca=st()+500,rd&&Gi())}}function yo(e){mi!==null&&mi.tag===0&&(Pe&6)===0&&ha();var t=Pe;Pe|=1;var r=Or.transition,n=Ue;try{if(Or.transition=null,Ue=1,e)return e()}finally{Ue=n,Or.transition=r,Pe=t,(Pe&6)===0&&Gi()}}function e0(){ur=ra.current,Ke(ra)}function co(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Pk(r)),ut!==null)for(r=ut.return;r!==null;){var n=r;switch(Rp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ac();break;case 3:ka(),Ke(rr),Ke(Mt),Hp();break;case 5:jp(n);break;case 4:ka();break;case 13:Ke(Qe);break;case 19:Ke(Qe);break;case 10:Mp(n.type._context);break;case 22:case 23:e0()}r=r.return}if(Ct=e,ut=e=_i(e.current,null),_t=ur=t,gt=0,cl=null,Qp=ad=mo=0,$t=Ds=null,oo!==null){for(t=0;t<oo.length;t++)if(r=oo[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}oo=null}return e}function ib(e,t){do{var r=ut;try{if(Ip(),Ou.current=vc,pc){for(var n=Je.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}pc=!1}if(go=0,wt=ft=Je=null,Ps=!1,sl=0,Yp.current=null,r===null||r.return===null){gt=1,cl=t,ut=null;break}e:{var o=e,a=r.return,s=r,u=t;if(t=_t,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Mv(a);if(f!==null){f.flags&=-257,Lv(f,a,s,o,t),f.mode&1&&Iv(o,l,t),t=f,u=l;var v=t.updateQueue;if(v===null){var p=new Set;p.add(u),t.updateQueue=p}else v.add(u);break e}else{if((t&1)===0){Iv(o,l,t),t0();break e}u=Error(N(426))}}else if(Ge&&s.mode&1){var b=Mv(a);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Lv(b,a,s,o,t),Bp(Sa(u,s));break e}}o=u=Sa(u,s),gt!==4&&(gt=2),Ds===null?Ds=[o]:Ds.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=V1(o,u,t);Pv(o,g);break e;case 1:s=u;var y=o.type,w=o.stateNode;if((o.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ti===null||!Ti.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=j1(o,s,t);Pv(o,x);break e}}o=o.return}while(o!==null)}sb(r)}catch(k){t=k,ut===r&&r!==null&&(ut=r=r.return);continue}break}while(1)}function ob(){var e=gc.current;return gc.current=vc,e===null?vc:e}function t0(){(gt===0||gt===3||gt===2)&&(gt=4),Ct===null||(mo&268435455)===0&&(ad&268435455)===0||fi(Ct,_t)}function bc(e,t){var r=Pe;Pe|=2;var n=ob();(Ct!==e||_t!==t)&&(Pn=null,co(e,t));do try{t5();break}catch(i){ib(e,i)}while(1);if(Ip(),Pe=r,gc.current=n,ut!==null)throw Error(N(261));return Ct=null,_t=0,gt}function t5(){for(;ut!==null;)ab(ut)}function r5(){for(;ut!==null&&!T2();)ab(ut)}function ab(e){var t=ub(e.alternate,e,ur);e.memoizedProps=e.pendingProps,t===null?sb(e):ut=t,Yp.current=null}function sb(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Gk(r,t,ur),r!==null){ut=r;return}}else{if(r=Zk(r,t),r!==null){r.flags&=32767,ut=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{gt=6,ut=null;return}}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);gt===0&&(gt=5)}function to(e,t,r){var n=Ue,i=Or.transition;try{Or.transition=null,Ue=1,n5(e,t,r,n)}finally{Or.transition=i,Ue=n}return null}function n5(e,t,r,n){do ha();while(mi!==null);if((Pe&6)!==0)throw Error(N(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(I2(e,o),e===Ct&&(ut=Ct=null,_t=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||su||(su=!0,cb(ec,function(){return ha(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=Or.transition,Or.transition=null;var a=Ue;Ue=1;var s=Pe;Pe|=4,Yp.current=null,Qk(e,r),tb(r,e),Sk(cf),rc=!!uf,cf=uf=null,e.current=r,Jk(r),z2(),Pe=s,Ue=a,Or.transition=o}else e.current=r;if(su&&(su=!1,mi=e,yc=i),o=e.pendingLanes,o===0&&(Ti=null),A2(r.stateNode),ir(e,st()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(mc)throw mc=!1,e=Pf,Pf=null,e;return(yc&1)!==0&&e.tag!==0&&ha(),o=e.pendingLanes,(o&1)!==0?e===Af?Os++:(Os=0,Af=e):Os=0,Gi(),null}function ha(){if(mi!==null){var e=Uy(yc),t=Or.transition,r=Ue;try{if(Or.transition=null,Ue=16>e?16:e,mi===null)var n=!1;else{if(e=mi,mi=null,yc=0,(Pe&6)!==0)throw Error(N(331));var i=Pe;for(Pe|=4,q=e.current;q!==null;){var o=q,a=o.child;if((q.flags&16)!==0){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var l=s[u];for(q=l;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:As(8,c,o)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var h=c.sibling,f=c.return;if(J1(c),c===l){q=null;break}if(h!==null){h.return=f,q=h;break}q=f}}}var v=o.alternate;if(v!==null){var p=v.child;if(p!==null){v.child=null;do{var b=p.sibling;p.sibling=null,p=b}while(p!==null)}}q=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,q=a;else e:for(;q!==null;){if(o=q,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:As(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,q=g;break e}q=o.return}}var y=e.current;for(q=y;q!==null;){a=q;var w=a.child;if((a.subtreeFlags&2064)!==0&&w!==null)w.return=a,q=w;else e:for(a=y;q!==null;){if(s=q,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:od(9,s)}}catch(k){nt(s,s.return,k)}if(s===a){q=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,q=x;break e}q=s.return}}if(Pe=i,Gi(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Qc,e)}catch{}n=!0}return n}finally{Ue=r,Or.transition=t}}return!1}function Jv(e,t,r){t=Sa(r,t),t=V1(e,t,1),e=Ei(e,t,1),t=Wt(),e!==null&&(El(e,1,t),ir(e,t))}function nt(e,t,r){if(e.tag===3)Jv(e,e,r);else for(;t!==null;){if(t.tag===3){Jv(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ti===null||!Ti.has(n))){e=Sa(r,e),e=j1(t,e,1),t=Ei(t,e,1),e=Wt(),t!==null&&(El(t,1,e),ir(t,e));break}}t=t.return}}function i5(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&r,Ct===e&&(_t&r)===r&&(gt===4||gt===3&&(_t&130023424)===_t&&500>st()-Jp?co(e,0):Qp|=r),ir(e,t)}function lb(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ql,Ql<<=1,(Ql&130023424)===0&&(Ql=4194304)));var r=Wt();e=Kn(e,t),e!==null&&(El(e,t,r),ir(e,r))}function o5(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lb(e,r)}function a5(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),lb(e,r)}var ub;ub=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||rr.current)er=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return er=!1,Xk(e,t,r);er=(e.flags&131072)!==0}else er=!1,Ge&&(t.flags&1048576)!==0&&h1(t,uc,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Bu(e,t),e=t.pendingProps;var i=ba(t,Mt.current);da(t,r),i=Kp(null,t,n,e,i,r);var o=qp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nr(n)?(o=!0,sc(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Up(t),i.updater=nd,t.stateNode=i,i._reactInternals=t,bf(t,n,e,r),t=kf(null,t,n,!0,o,r)):(t.tag=0,Ge&&o&&Op(t),jt(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Bu(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=l5(n),e=Zr(n,e),i){case 0:t=xf(null,t,n,e,r);break e;case 1:t=jv(null,t,n,e,r);break e;case 11:t=Uv(null,t,n,e,r);break e;case 14:t=Vv(null,t,n,Zr(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Zr(n,i),xf(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Zr(n,i),jv(e,t,n,i,r);case 3:e:{if(q1(t),e===null)throw Error(N(387));n=t.pendingProps,o=t.memoizedState,i=o.element,g1(e,t),hc(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Sa(Error(N(423)),t),t=Hv(e,t,n,r,i);break e}else if(n!==i){i=Sa(Error(N(424)),t),t=Hv(e,t,n,r,i);break e}else for(dr=Fi(t.stateNode.containerInfo.firstChild),gr=t,Ge=!0,Qr=null,r=w1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(wa(),n===i){t=qn(e,t,r);break e}jt(e,t,n,r)}t=t.child}return t;case 5:return x1(t),e===null&&gf(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,df(n,i)?a=null:o!==null&&df(n,o)&&(t.flags|=32),K1(e,t),jt(e,t,a,r),t.child;case 6:return e===null&&gf(t),null;case 13:return X1(e,t,r);case 4:return Vp(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=xa(t,null,n,r):jt(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Zr(n,i),Uv(e,t,n,i,r);case 7:return jt(e,t,t.pendingProps,r),t.child;case 8:return jt(e,t,t.pendingProps.children,r),t.child;case 12:return jt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,je(cc,n._currentValue),n._currentValue=a,o!==null)if(rn(o.value,a)){if(o.children===i.children&&!rr.current){t=qn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=In(-1,r&-r),u.tag=2;var l=o.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),mf(o.return,r,t),s.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(N(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),mf(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}jt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,da(t,r),i=Nr(i),n=n(i),t.flags|=1,jt(e,t,n,r),t.child;case 14:return n=t.type,i=Zr(n,t.pendingProps),i=Zr(n.type,i),Vv(e,t,n,i,r);case 15:return H1(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Zr(n,i),Bu(e,t),t.tag=1,nr(n)?(e=!0,sc(t)):e=!1,da(t,r),y1(t,n,i),bf(t,n,i,r),kf(null,t,n,!0,e,r);case 19:return G1(e,t,r);case 22:return W1(e,t,r)}throw Error(N(156,t.tag))};function cb(e,t){return Ny(e,t)}function s5(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pr(e,t,r,n){return new s5(e,t,r,n)}function r0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l5(e){if(typeof e=="function")return r0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xp)return 11;if(e===kp)return 14}return 2}function _i(e,t){var r=e.alternate;return r===null?(r=Pr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Mu(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")r0(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qo:return ho(r.children,i,o,t);case wp:a=8,i|=8;break;case jh:return e=Pr(12,r,t,i|2),e.elementType=jh,e.lanes=o,e;case Hh:return e=Pr(13,r,t,i),e.elementType=Hh,e.lanes=o,e;case Wh:return e=Pr(19,r,t,i),e.elementType=Wh,e.lanes=o,e;case by:return sd(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case my:a=10;break e;case yy:a=9;break e;case xp:a=11;break e;case kp:a=14;break e;case ui:a=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Pr(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function ho(e,t,r,n){return e=Pr(7,e,n,t),e.lanes=r,e}function sd(e,t,r,n){return e=Pr(22,e,n,t),e.elementType=by,e.lanes=r,e.stateNode={isHidden:!1},e}function dh(e,t,r){return e=Pr(6,e,null,t),e.lanes=r,e}function hh(e,t,r){return t=Pr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u5(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qd(0),this.expirationTimes=qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qd(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function n0(e,t,r,n,i,o,a,s,u){return e=new u5(e,t,r,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pr(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Up(o),e}function c5(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ko,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function db(e){if(!e)return Bi;e=e._reactInternals;e:{if(_o(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(nr(r))return c1(e,r,t)}return t}function hb(e,t,r,n,i,o,a,s,u){return e=n0(r,n,!0,e,i,o,a,s,u),e.context=db(null),r=e.current,n=Wt(),i=zi(r),o=In(n,i),o.callback=t!=null?t:null,Ei(r,o,i),e.current.lanes=i,El(e,i,n),ir(e,n),e}function ld(e,t,r,n){var i=t.current,o=Wt(),a=zi(i);return r=db(r),t.context===null?t.context=r:t.pendingContext=r,t=In(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ei(i,t,a),e!==null&&(en(e,i,a,o),Du(e,i,a)),a}function wc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $v(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function i0(e,t){$v(e,t),(e=e.alternate)&&$v(e,t)}function d5(){return null}var fb=typeof reportError=="function"?reportError:function(e){console.error(e)};function o0(e){this._internalRoot=e}ud.prototype.render=o0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ld(e,t,null,null)};ud.prototype.unmount=o0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yo(function(){ld(null,e,null,null)}),t[Wn]=null}};function ud(e){this._internalRoot=e}ud.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hy();e={blockedOn:null,target:e,priority:t};for(var r=0;r<hi.length&&t!==0&&t<hi[r].priority;r++);hi.splice(r,0,e),r===0&&Ky(e)}};function a0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eg(){}function h5(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var l=wc(a);o.call(l)}}var a=hb(t,n,e,0,null,!1,!1,"",eg);return e._reactRootContainer=a,e[Wn]=a.current,rl(e.nodeType===8?e.parentNode:e),yo(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var l=wc(u);s.call(l)}}var u=n0(e,0,!1,null,null,!1,!1,"",eg);return e._reactRootContainer=u,e[Wn]=u.current,rl(e.nodeType===8?e.parentNode:e),yo(function(){ld(t,u,r,n)}),u}function dd(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var u=wc(a);s.call(u)}}ld(t,a,e,i)}else a=h5(r,t,e,i,n);return wc(a)}Vy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=gs(t.pendingLanes);r!==0&&(Fp(t,r|1),ir(t,st()),(Pe&6)===0&&(Ca=st()+500,Gi()))}break;case 13:yo(function(){var n=Kn(e,1);if(n!==null){var i=Wt();en(n,e,1,i)}}),i0(e,1)}};Ep=function(e){if(e.tag===13){var t=Kn(e,134217728);if(t!==null){var r=Wt();en(t,e,134217728,r)}i0(e,134217728)}};jy=function(e){if(e.tag===13){var t=zi(e),r=Kn(e,t);if(r!==null){var n=Wt();en(r,e,t,n)}i0(e,t)}};Hy=function(){return Ue};Wy=function(e,t){var r=Ue;try{return Ue=e,t()}finally{Ue=r}};ef=function(e,t,r){switch(t){case"input":if(Xh(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=td(n);if(!i)throw Error(N(90));xy(n),Xh(n,i)}}}break;case"textarea":Sy(e,r);break;case"select":t=r.value,t!=null&&sa(e,!!r.multiple,t,!1)}};Py=$p;Ay=yo;var f5={usingClientEntryPoint:!1,Events:[zl,Yo,td,zy,_y,$p]},ts={findFiberByHostInstance:io,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},p5={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ry(e),e===null?null:e.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||d5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Qc=lu.inject(p5),bn=lu}catch{}}kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f5;kr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a0(t))throw Error(N(200));return c5(e,t,null,r)};kr.createRoot=function(e,t){if(!a0(e))throw Error(N(299));var r=!1,n="",i=fb;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=n0(e,1,!1,null,null,r,!1,n,i),e[Wn]=t.current,rl(e.nodeType===8?e.parentNode:e),new o0(t)};kr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Ry(t),e=e===null?null:e.stateNode,e};kr.flushSync=function(e){return yo(e)};kr.hydrate=function(e,t,r){if(!cd(t))throw Error(N(200));return dd(null,e,t,!0,r)};kr.hydrateRoot=function(e,t,r){if(!a0(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=fb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=hb(t,null,e,1,r!=null?r:null,i,!1,o,a),e[Wn]=t.current,rl(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ud(t)};kr.render=function(e,t,r){if(!cd(t))throw Error(N(200));return dd(null,e,t,!1,r)};kr.unmountComponentAtNode=function(e){if(!cd(e))throw Error(N(40));return e._reactRootContainer?(yo(function(){dd(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};kr.unstable_batchedUpdates=$p;kr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!cd(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return dd(e,t,r,!1,n)};kr.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}t(),e.exports=kr})(hy);var pb,tg=hy.exports;pb=tg.createRoot,tg.hydrateRoot;function xc(){return xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xc.apply(this,arguments)}var so;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(so||(so={}));var rg=function(e){return e},ng="beforeunload",v5="popstate";function g5(e){e===void 0&&(e={});var t=e,r=t.window,n=r===void 0?document.defaultView:r,i=n.history;function o(){var T=n.location,z=T.pathname,_=T.search,P=T.hash,D=i.state||{};return[D.idx,rg({pathname:z,search:_,hash:P,state:D.usr||null,key:D.key||"default"})]}var a=null;function s(){if(a)f.call(a),a=null;else{var T=so.Pop,z=o(),_=z[0],P=z[1];if(f.length){if(_!=null){var D=c-_;D&&(a={action:T,location:P,retry:function(){k(D*-1)}},k(D))}}else y(T)}}n.addEventListener(v5,s);var u=so.Pop,l=o(),c=l[0],d=l[1],h=og(),f=og();c==null&&(c=0,i.replaceState(xc({},i.state,{idx:c}),""));function v(T){return typeof T=="string"?T:y5(T)}function p(T,z){return z===void 0&&(z=null),rg(xc({pathname:d.pathname,hash:"",search:""},typeof T=="string"?La(T):T,{state:z,key:m5()}))}function b(T,z){return[{usr:T.state,key:T.key,idx:z},v(T)]}function g(T,z,_){return!f.length||(f.call({action:T,location:z,retry:_}),!1)}function y(T){u=T;var z=o();c=z[0],d=z[1],h.call({action:u,location:d})}function w(T,z){var _=so.Push,P=p(T,z);function D(){w(T,z)}if(g(_,P,D)){var I=b(P,c+1),O=I[0],K=I[1];try{i.pushState(O,"",K)}catch{n.location.assign(K)}y(_)}}function x(T,z){var _=so.Replace,P=p(T,z);function D(){x(T,z)}if(g(_,P,D)){var I=b(P,c),O=I[0],K=I[1];i.replaceState(O,"",K),y(_)}}function k(T){i.go(T)}var E={get action(){return u},get location(){return d},createHref:v,push:w,replace:x,go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(z){return h.push(z)},block:function(z){var _=f.push(z);return f.length===1&&n.addEventListener(ng,ig),function(){_(),f.length||n.removeEventListener(ng,ig)}}};return E}function ig(e){e.preventDefault(),e.returnValue=""}function og(){var e=[];return{get length(){return e.length},push:function(r){return e.push(r),function(){e=e.filter(function(n){return n!==r})}},call:function(r){e.forEach(function(n){return n&&n(r)})}}}function m5(){return Math.random().toString(36).substr(2,8)}function y5(e){var t=e.pathname,r=t===void 0?"/":t,n=e.search,i=n===void 0?"":n,o=e.hash,a=o===void 0?"":o;return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function La(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vb=ze.exports.createContext(null),s0=ze.exports.createContext(null),l0=ze.exports.createContext({outlet:null,matches:[]});function Xn(e,t){if(!e)throw new Error(t)}function b5(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?La(t):t,i=mb(n.pathname||"/",r);if(i==null)return null;let o=gb(e);w5(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=_5(o[s],i);return a}function gb(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((i,o)=>{let a={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(a.relativePath.startsWith(n)||Xn(!1),a.relativePath=a.relativePath.slice(n.length));let s=fo([n,a.relativePath]),u=r.concat(a);i.children&&i.children.length>0&&(i.index===!0&&Xn(!1),gb(i.children,t,u,s)),!(i.path==null&&!i.index)&&t.push({path:s,score:T5(s,i.index),routesMeta:u})}),t}function w5(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:z5(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const x5=/^:\w+$/,k5=3,S5=2,C5=1,F5=10,E5=-2,ag=e=>e==="*";function T5(e,t){let r=e.split("/"),n=r.length;return r.some(ag)&&(n+=E5),t&&(n+=S5),r.filter(i=>!ag(i)).reduce((i,o)=>i+(x5.test(o)?k5:o===""?C5:F5),n)}function z5(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function _5(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,l=i==="/"?t:t.slice(i.length)||"/",c=P5({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},l);if(!c)return null;Object.assign(n,c.params);let d=s.route;o.push({params:n,pathname:fo([i,c.pathname]),pathnameBase:yb(fo([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fo([i,c.pathnameBase]))}return o}function P5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=A5(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((l,c,d)=>{if(c==="*"){let h=s[d]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return l[c]=D5(s[d]||""),l},{}),pathname:o,pathnameBase:a,pattern:e}}function A5(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(n.push(s),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),n]}function D5(e,t){try{return decodeURIComponent(e)}catch{return e}}function O5(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?La(e):e;return{pathname:r?r.startsWith("/")?r:R5(r,t):t,search:N5(n),hash:I5(i)}}function R5(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function B5(e,t,r){let n=typeof e=="string"?La(e):e,i=e===""||n.pathname===""?"/":n.pathname,o;if(i==null)o=r;else{let s=t.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),s-=1;n.pathname=u.join("/")}o=s>=0?t[s]:"/"}let a=O5(n,o);return i&&i!=="/"&&i.endsWith("/")&&!a.pathname.endsWith("/")&&(a.pathname+="/"),a}function mb(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&r!=="/"?null:e.slice(t.length)||"/"}const fo=e=>e.join("/").replace(/\/\/+/g,"/"),yb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hd(){return ze.exports.useContext(s0)!=null}function u0(){return hd()||Xn(!1),ze.exports.useContext(s0).location}function bb(){hd()||Xn(!1);let{basename:e,navigator:t}=ze.exports.useContext(vb),{matches:r}=ze.exports.useContext(l0),{pathname:n}=u0(),i=JSON.stringify(r.map(s=>s.pathnameBase)),o=ze.exports.useRef(!1);return ze.exports.useEffect(()=>{o.current=!0}),ze.exports.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let l=B5(s,JSON.parse(i),n);e!=="/"&&(l.pathname=fo([e,l.pathname])),(u.replace?t.replace:t.push)(l,u.state)},[e,t,i,n])}function M5(e,t){hd()||Xn(!1);let{matches:r}=ze.exports.useContext(l0),n=r[r.length-1],i=n?n.params:{};n&&n.pathname;let o=n?n.pathnameBase:"/";n&&n.route;let a=u0(),s;if(t){var u;let h=typeof t=="string"?La(t):t;o==="/"||((u=h.pathname)==null?void 0:u.startsWith(o))||Xn(!1),s=h}else s=a;let l=s.pathname||"/",c=o==="/"?l:l.slice(o.length)||"/",d=b5(e,{pathname:c});return L5(d&&d.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:fo([o,h.pathname]),pathnameBase:h.pathnameBase==="/"?o:fo([o,h.pathnameBase])})),r)}function L5(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((r,n,i)=>ze.exports.createElement(l0.Provider,{children:n.route.element!==void 0?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,i+1))}}),null)}function Rf(e){Xn(!1)}function U5(e){let{basename:t="/",children:r=null,location:n,navigationType:i=so.Pop,navigator:o,static:a=!1}=e;hd()&&Xn(!1);let s=yb(t),u=ze.exports.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof n=="string"&&(n=La(n));let{pathname:l="/",search:c="",hash:d="",state:h=null,key:f="default"}=n,v=ze.exports.useMemo(()=>{let p=mb(l,s);return p==null?null:{pathname:p,search:c,hash:d,state:h,key:f}},[s,l,c,d,h,f]);return v==null?null:ze.exports.createElement(vb.Provider,{value:u},ze.exports.createElement(s0.Provider,{children:r,value:{location:v,navigationType:i}}))}function V5(e){let{children:t,location:r}=e;return M5(Bf(t),r)}function Bf(e){let t=[];return ze.exports.Children.forEach(e,r=>{if(!ze.exports.isValidElement(r))return;if(r.type===ze.exports.Fragment){t.push.apply(t,Bf(r.props.children));return}r.type!==Rf&&Xn(!1);let n={caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path};r.props.children&&(n.children=Bf(r.props.children)),t.push(n)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j5(e){let{basename:t,children:r,window:n}=e,i=ze.exports.useRef();i.current==null&&(i.current=g5({window:n}));let o=i.current,[a,s]=ze.exports.useState({action:o.action,location:o.location});return ze.exports.useLayoutEffect(()=>o.listen(s),[o]),ze.exports.createElement(U5,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:o})}var c0=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d0=Symbol(),sg=new Map,wb=class{constructor(e,t){if(this._$cssResult$=!0,t!==d0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=sg.get(this.cssText);return c0&&e===void 0&&(sg.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},H5=e=>new wb(typeof e=="string"?e:e+"",d0),ne=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new wb(r,d0)},W5=(e,t)=>{c0?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),i=window.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)})},lg=c0?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return H5(r)})(e):e,fh,ug=window.trustedTypes,K5=ug?ug.emptyScript:"",cg=window.reactiveElementPolyfillSupport,dl={toAttribute(e,t){switch(t){case Boolean:e=e?K5:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},xb=(e,t)=>t!==e&&(t==t||e==e),ph={attribute:!0,type:String,converter:dl,reflect:!1,hasChanged:xb},Wo=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Eh(r,t);n!==void 0&&(this._$Eu.set(n,r),e.push(n))}),e}static createProperty(e,t=ph){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ph}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(lg(n))}else e!==void 0&&t.push(lg(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return W5(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=ph){var n,i;const o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){const a=((i=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&i!==void 0?i:dl.toAttribute)(t,r.type);this._$Ei=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(e,t){var r,n,i;const o=this.constructor,a=o._$Eu.get(e);if(a!==void 0&&this._$Ei!==a){const s=o.getPropertyOptions(a),u=s.converter,l=(i=(n=(r=u)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof u=="function"?u:null)!==null&&i!==void 0?i:dl.fromAttribute;this._$Ei=a,this[a]=l(t,s.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||xb)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,i)=>this[i]=n),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};Wo.finalized=!0,Wo.elementProperties=new Map,Wo.elementStyles=[],Wo.shadowRootOptions={mode:"open"},cg==null||cg({ReactiveElement:Wo}),((fh=globalThis.reactiveElementVersions)!==null&&fh!==void 0?fh:globalThis.reactiveElementVersions=[]).push("1.3.2");var vh,Fa=globalThis.trustedTypes,dg=Fa?Fa.createPolicy("lit-html",{createHTML:e=>e}):void 0,pi=`lit$${(Math.random()+"").slice(9)}$`,kb="?"+pi,q5=`<${kb}>`,Ea=document,hl=(e="")=>Ea.createComment(e),fl=e=>e===null||typeof e!="object"&&typeof e!="function",Sb=Array.isArray,X5=e=>{var t;return Sb(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},rs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hg=/-->/g,fg=/>/g,Ji=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,pg=/'/g,vg=/"/g,Cb=/^(?:script|style|textarea|title)$/i,G5=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),U=G5(1),hr=Symbol.for("lit-noChange"),it=Symbol.for("lit-nothing"),gg=new WeakMap,Z5=(e,t,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=o._$litPart$;if(a===void 0){const s=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=a=new fd(t.insertBefore(hl(),s),s,void 0,r!=null?r:{})}return a._$AI(e),a},fa=Ea.createTreeWalker(Ea,129,null,!1),Y5=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":"",a=rs;for(let u=0;u<r;u++){const l=e[u];let c,d,h=-1,f=0;for(;f<l.length&&(a.lastIndex=f,d=a.exec(l),d!==null);)f=a.lastIndex,a===rs?d[1]==="!--"?a=hg:d[1]!==void 0?a=fg:d[2]!==void 0?(Cb.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=Ji):d[3]!==void 0&&(a=Ji):a===Ji?d[0]===">"?(a=i!=null?i:rs,h=-1):d[1]===void 0?h=-2:(h=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?Ji:d[3]==='"'?vg:pg):a===vg||a===pg?a=Ji:a===hg||a===fg?a=rs:(a=Ji,i=void 0);const v=a===Ji&&e[u+1].startsWith("/>")?" ":"";o+=a===rs?l+q5:h>=0?(n.push(c),l.slice(0,h)+"$lit$"+l.slice(h)+pi+v):l+pi+(h===-2?(n.push(void 0),u):v)}const s=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[dg!==void 0?dg.createHTML(s):s,n]},kc=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0;const a=e.length-1,s=this.parts,[u,l]=Y5(e,t);if(this.el=kc.createElement(u,r),fa.currentNode=this.el.content,t===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(n=fa.nextNode())!==null&&s.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(pi)){const h=l[o++];if(c.push(d),h!==void 0){const f=n.getAttribute(h.toLowerCase()+"$lit$").split(pi),v=/([.?@])?(.*)/.exec(h);s.push({type:1,index:i,name:v[2],strings:f,ctor:v[1]==="."?J5:v[1]==="?"?e3:v[1]==="@"?t3:pd})}else s.push({type:6,index:i})}for(const d of c)n.removeAttribute(d)}if(Cb.test(n.tagName)){const c=n.textContent.split(pi),d=c.length-1;if(d>0){n.textContent=Fa?Fa.emptyScript:"";for(let h=0;h<d;h++)n.append(c[h],hl()),fa.nextNode(),s.push({type:2,index:++i});n.append(c[d],hl())}}}else if(n.nodeType===8)if(n.data===kb)s.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(pi,c+1))!==-1;)s.push({type:7,index:i}),c+=pi.length-1}i++}}static createElement(e,t){const r=Ea.createElement("template");return r.innerHTML=e,r}};function Ta(e,t,r=e,n){var i,o,a,s;if(t===hr)return t;let u=n!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[n]:r._$Cu;const l=fl(t)?void 0:t._$litDirective$;return(u==null?void 0:u.constructor)!==l&&((o=u==null?void 0:u._$AO)===null||o===void 0||o.call(u,!1),l===void 0?u=void 0:(u=new l(e),u._$AT(e,r,n)),n!==void 0?((a=(s=r)._$Cl)!==null&&a!==void 0?a:s._$Cl=[])[n]=u:r._$Cu=u),u!==void 0&&(t=Ta(e,u._$AS(e,t.values),u,n)),t}var Q5=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ea).importNode(r,!0);fa.currentNode=i;let o=fa.nextNode(),a=0,s=0,u=n[0];for(;u!==void 0;){if(a===u.index){let l;u.type===2?l=new fd(o,o.nextSibling,this,e):u.type===1?l=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(l=new r3(o,this,e)),this.v.push(l),u=n[++s]}a!==(u==null?void 0:u.index)&&(o=fa.nextNode(),a++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},fd=class{constructor(e,t,r,n){var i;this.type=2,this._$AH=it,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ta(this,e,t),fl(e)?e===it||e==null||e===""?(this._$AH!==it&&this._$AR(),this._$AH=it):e!==this._$AH&&e!==hr&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):X5(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==it&&fl(this._$AH)?this._$AA.nextSibling.data=e:this.k(Ea.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=kc.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const o=new Q5(i,this),a=o.p(this.options);o.m(r),this.k(a),this._$AH=o}}_$AC(e){let t=gg.get(e.strings);return t===void 0&&gg.set(e.strings,t=new kc(e)),t}S(e){Sb(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new fd(this.M(hl()),this.M(hl()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},pd=class{constructor(e,t,r,n,i){this.type=1,this._$AH=it,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=it}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(i===void 0)e=Ta(this,e,t,0),o=!fl(e)||e!==this._$AH&&e!==hr,o&&(this._$AH=e);else{const a=e;let s,u;for(e=i[0],s=0;s<i.length-1;s++)u=Ta(this,a[r+s],t,s),u===hr&&(u=this._$AH[s]),o||(o=!fl(u)||u!==this._$AH[s]),u===it?e=it:e!==it&&(e+=(u!=null?u:"")+i[s+1]),this._$AH[s]=u}o&&!n&&this.C(e)}C(e){e===it?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},J5=class extends pd{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===it?void 0:e}},$5=Fa?Fa.emptyScript:"",e3=class extends pd{constructor(){super(...arguments),this.type=4}C(e){e&&e!==it?this.element.setAttribute(this.name,$5):this.element.removeAttribute(this.name)}},t3=class extends pd{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=Ta(this,e,t,0))!==null&&r!==void 0?r:it)===hr)return;const n=this._$AH,i=e===it&&n!==it||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==it&&(n===it||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},r3=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ta(this,e)}},mg=window.litHtmlPolyfillSupport;mg==null||mg(kc,fd),((vh=globalThis.litHtmlVersions)!==null&&vh!==void 0?vh:globalThis.litHtmlVersions=[]).push("2.2.4");var gh,mh,Q=class extends Wo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Z5(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return hr}};Q.finalized=!0,Q._$litElement$=!0,(gh=globalThis.litElementHydrateSupport)===null||gh===void 0||gh.call(globalThis,{LitElement:Q});var yg=globalThis.litElementPolyfillSupport;yg==null||yg({LitElement:Q});((mh=globalThis.litElementVersions)!==null&&mh!==void 0?mh:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vd=ne`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,ue=ne`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,n3=ne`
  ${ue}
  ${vd}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,On={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pl=e=>(...t)=>({_$litDirective$:e,values:t}),gd=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i3=e=>e.strings===void 0,o3={},a3=(e,t=o3)=>e._$AH=t,Ni=Pl(class extends gd{constructor(e){if(super(e),e.type!==On.PROPERTY&&e.type!==On.ATTRIBUTE&&e.type!==On.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!i3(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===hr||t===it)return t;const r=e.element,n=e.name;if(e.type===On.PROPERTY){if(t===r[n])return hr}else if(e.type===On.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return hr}else if(e.type===On.ATTRIBUTE&&r.getAttribute(n)===t+"")return hr;return a3(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qn=(e="value")=>(t,r)=>{const n=t.constructor,i=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(o,a,s){var u;const l=n.getPropertyOptions(e),c=typeof l.attribute=="string"?l.attribute:e;if(o===c){const d=l.converter||dl,f=(typeof d=="function"?d:(u=d==null?void 0:d.fromAttribute)!=null?u:dl.fromAttribute)(s,l.type);this[e]!==f&&(this[r]=f)}i.call(this,o,a,s)}},s3=Object.create,Al=Object.defineProperty,l3=Object.defineProperties,Fb=Object.getOwnPropertyDescriptor,u3=Object.getOwnPropertyDescriptors,Eb=Object.getOwnPropertyNames,Sc=Object.getOwnPropertySymbols,c3=Object.getPrototypeOf,h0=Object.prototype.hasOwnProperty,Tb=Object.prototype.propertyIsEnumerable,bg=(e,t,r)=>t in e?Al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$e=(e,t)=>{for(var r in t||(t={}))h0.call(t,r)&&bg(e,r,t[r]);if(Sc)for(var r of Sc(t))Tb.call(t,r)&&bg(e,r,t[r]);return e},Mr=(e,t)=>l3(e,u3(t)),f0=(e,t)=>{var r={};for(var n in e)h0.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Sc)for(var n of Sc(e))t.indexOf(n)<0&&Tb.call(e,n)&&(r[n]=e[n]);return r},Zi=(e,t)=>function(){return t||(0,e[Eb(e)[0]])((t={exports:{}}).exports,t),t.exports},d3=(e,t)=>{for(var r in t)Al(e,r,{get:t[r],enumerable:!0})},h3=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Eb(t))!h0.call(e,i)&&i!==r&&Al(e,i,{get:()=>t[i],enumerable:!(n=Fb(t,i))||n.enumerable});return e},f3=(e,t,r)=>(r=e!=null?s3(c3(e)):{},h3(t||!e||!e.__esModule?Al(r,"default",{value:e,enumerable:!0}):r,e)),m=(e,t,r,n)=>{for(var i=n>1?void 0:n?Fb(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(n?a(t,r,i):a(i))||i);return n&&i&&Al(t,r,i),i},p3=class extends Event{constructor(e){super("formdata"),this.formData=e}},v3=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new p3(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const n=this.getAll(e),i=n.indexOf(r.value);i!==-1&&n.splice(i,1),n.push(t),this.set(e,n)}else super.append(e,t);r.value=t}};function g3(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function wg(){!window.FormData||g3()||(window.FormData=v3,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?wg():window.addEventListener("DOMContentLoaded",()=>wg());var ns=new WeakMap,En=class{constructor(e,t){(this.host=e).addController(this),this.options=$e({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,n)=>{r.value=n}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ns.has(this.form)||(ns.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ns.has(this.form)&&(this.form.reportValidity=ns.get(this.form),ns.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host);!t&&typeof r=="string"&&typeof n<"u"&&(Array.isArray(n)?n.forEach(i=>{e.formData.append(r,i.toString())}):e.formData.append(r,n.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},un=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function zb(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}var ye=Pl(class extends gd{constructor(e){var t;if(super(e),e.type!==On.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.et.add(o);return this.render(t)}const i=e.element.classList;this.et.forEach(o=>{o in t||(i.remove(o),this.et.delete(o))});for(const o in t){const a=!!t[o];a===this.et.has(o)||((n=this.st)===null||n===void 0?void 0:n.has(o))||(a?(i.add(o),this.et.add(o)):(i.remove(o),this.et.delete(o)))}return hr}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var H=e=>e!=null?e:it;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e,t){const r=$e({waitUntilFirstUpdate:!1},t);return(n,i)=>{const{update:o}=n;if(e in n){const a=e;n.update=function(s){if(s.has(a)){const u=s.get(a),l=this[a];u!==l&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,l)}o.call(this,s)}}}}function B(e,t,r){const n=new CustomEvent(t,$e({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(n),n}function Lr(e,t){return new Promise(r=>{function n(i){i.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}var ee=e=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(a){window.customElements.define(r,a)}}})(e,t),m3=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Mr($e({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function S(e){return(t,r)=>r!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(e,t,r):m3(e,t)}function Te(e){return S(Mr($e({},e),{state:!0}))}var _b=({finisher:e,descriptor:t})=>(r,n)=>{var i;if(n===void 0){const o=(i=r.originalKey)!==null&&i!==void 0?i:r.key,a=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:Mr($e({},r),{key:o});return e!=null&&(a.finisher=function(s){e(s,o)}),a}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(o,n)}};function J(e,t){return _b({descriptor:r=>{const n={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var o,a;return this[i]===void 0&&(this[i]=(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&a!==void 0?a:null),this[i]}}return n}})}function y3(e){return _b({descriptor:t=>({async get(){var r;return await this.updateComplete,(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}var yh;((yh=window.HTMLSlotElement)===null||yh===void 0?void 0:yh.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this),this.hasSlotController=new un(this,"help-text","label"),this.hasFocus=!1,this.size="medium",this.value="",this.filled=!1,this.label="",this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value,B(this,"sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),B(this,"sl-input"),B(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),B(this,"sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleInput(){this.value=this.input.value,this.setTextareaHeight(),B(this,"sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity()}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return U`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ye({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${H(this.name)}
              .value=${Ni(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${H(this.placeholder)}
              rows=${H(this.rows)}
              minlength=${H(this.minlength)}
              maxlength=${H(this.maxlength)}
              autocapitalize=${H(this.autocapitalize)}
              autocorrect=${H(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${H(this.spellcheck)}
              enterkeyhint=${H(this.enterkeyhint)}
              inputmode=${H(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Oe.styles=n3;m([J(".textarea__control")],Oe.prototype,"input",2);m([Te()],Oe.prototype,"hasFocus",2);m([S({reflect:!0})],Oe.prototype,"size",2);m([S()],Oe.prototype,"name",2);m([S()],Oe.prototype,"value",2);m([S({type:Boolean,reflect:!0})],Oe.prototype,"filled",2);m([S()],Oe.prototype,"label",2);m([S({attribute:"help-text"})],Oe.prototype,"helpText",2);m([S()],Oe.prototype,"placeholder",2);m([S({type:Number})],Oe.prototype,"rows",2);m([S()],Oe.prototype,"resize",2);m([S({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],Oe.prototype,"readonly",2);m([S({type:Number})],Oe.prototype,"minlength",2);m([S({type:Number})],Oe.prototype,"maxlength",2);m([S({type:Boolean,reflect:!0})],Oe.prototype,"required",2);m([S({type:Boolean,reflect:!0})],Oe.prototype,"invalid",2);m([S()],Oe.prototype,"autocapitalize",2);m([S()],Oe.prototype,"autocorrect",2);m([S()],Oe.prototype,"autocomplete",2);m([S({type:Boolean})],Oe.prototype,"autofocus",2);m([S()],Oe.prototype,"enterkeyhint",2);m([S({type:Boolean})],Oe.prototype,"spellcheck",2);m([S()],Oe.prototype,"inputmode",2);m([Qn()],Oe.prototype,"defaultValue",2);m([j("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1);m([j("rows",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleRowsChange",1);m([j("value",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleValueChange",1);Oe=m([ee("sl-textarea")],Oe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b3=new Set(["children","localName","ref","style","className"]),xg=new WeakMap,w3=(e,t,r,n,i)=>{const o=i==null?void 0:i[t];o!==void 0?r!==n&&((a,s,u)=>{let l=xg.get(a);l===void 0&&xg.set(a,l=new Map);let c=l.get(s);u!==void 0?c===void 0?(l.set(s,c={handleEvent:u}),a.addEventListener(s,c)):c.handleEvent=u:c!==void 0&&(l.delete(s),a.removeEventListener(s,c))})(e,o,r):e[t]=r},te=(e,t,r,n,i)=>{const o=e.Component,a=e.createElement,s=new Set(Object.keys(n!=null?n:{}));for(const c in r.prototype)c in HTMLElement.prototype||(b3.has(c)?console.warn(`${t} contains property ${c} which is a React reserved property. It will be used by React and not set on the element.`):s.add(c));class u extends o{constructor(){super(...arguments),this.o=null}t(d){if(this.o!==null)for(const h in this.i)w3(this.o,h,this.props[h],d?d[h]:void 0,n)}componentDidMount(){this.t()}componentDidUpdate(d){this.t(d)}render(){const d=this.props._$Gl;this.h!==void 0&&this.u===d||(this.h=f=>{this.o===null&&(this.o=f),d!==null&&((v,p)=>{typeof v=="function"?v(p):v.current=p})(d,f),this.u=d});const h={ref:this.h};this.i={};for(const[f,v]of Object.entries(this.props))f!=="__forwardedRef"&&(s.has(f)?this.i[f]=v:h[f==="className"?"class":f]=v);return a(t,h)}}u.displayName=i!=null?i:r.name;const l=e.forwardRef((c,d)=>a(u,{...c,_$Gl:d},c==null?void 0:c.children));return l.displayName=u.displayName,l};te($,"sl-textarea",Oe,{onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur"});var x3=ne`
  ${ue}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-target {
    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip-positioner[data-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-placement^='right'] .tooltip {
    transform-origin: left;
  }

  .tooltip__content {
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
  }

  .tooltip__arrow {
    position: absolute;
    background: var(--sl-tooltip-background-color);
    width: calc(var(--sl-tooltip-arrow-size) * 2);
    height: calc(var(--sl-tooltip-arrow-size) * 2);
    transform: rotate(45deg);
    z-index: -1;
  }
`;function Ua(e){return e.split("-")[0]}function Dl(e){return e.split("-")[1]}function Ol(e){return["top","bottom"].includes(Ua(e))?"x":"y"}function p0(e){return e==="y"?"height":"width"}function kg(e,t,r){let{reference:n,floating:i}=e;const o=n.x+n.width/2-i.width/2,a=n.y+n.height/2-i.height/2,s=Ol(t),u=p0(s),l=n[u]/2-i[u]/2,c=s==="x";let d;switch(Ua(t)){case"top":d={x:o,y:n.y-i.height};break;case"bottom":d={x:o,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:a};break;case"left":d={x:n.x-i.width,y:a};break;default:d={x:n.x,y:n.y}}switch(Dl(t)){case"start":d[s]-=l*(r&&c?-1:1);break;case"end":d[s]+=l*(r&&c?-1:1)}return d}var k3=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:a}=r,s=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:l,y:c}=kg(u,n,s),d=n,h={},f=0;for(let v=0;v<o.length;v++){const{name:p,fn:b}=o[v],{x:g,y,data:w,reset:x}=await b({x:l,y:c,initialPlacement:n,placement:d,strategy:i,middlewareData:h,rects:u,platform:a,elements:{reference:e,floating:t}});l=g!=null?g:l,c=y!=null?y:c,h=Mr($e({},h),{[p]:$e($e({},h[p]),w)}),x&&f<=50&&(f++,typeof x=="object"&&(x.placement&&(d=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:l,y:c}=kg(u,d,s)),v=-1)}return{x:l,y:c,placement:d,strategy:i,middlewareData:h}};function Pb(e){return typeof e!="number"?function(t){return $e({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Cc(e){return Mr($e({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function v0(e,t){var r;t===void 0&&(t={});const{x:n,y:i,platform:o,rects:a,elements:s,strategy:u}=e,{boundary:l="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=t,v=Pb(f),p=s[h?d==="floating"?"reference":"floating":d],b=Cc(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(p)))==null||r?p:p.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(s.floating)),boundary:l,rootBoundary:c,strategy:u})),g=Cc(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?Mr($e({},a.floating),{x:n,y:i}):a.reference,offsetParent:await(o.getOffsetParent==null?void 0:o.getOffsetParent(s.floating)),strategy:u}):a[d]);return{top:b.top-g.top+v.top,bottom:g.bottom-b.bottom+v.bottom,left:b.left-g.left+v.left,right:g.right-b.right+v.right}}var S3=Math.min,ro=Math.max;function Nf(e,t,r){return ro(e,S3(t,r))}var C3=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:n=0}=e!=null?e:{},{x:i,y:o,placement:a,rects:s,platform:u}=t;if(r==null)return{};const l=Pb(n),c={x:i,y:o},d=Ol(a),h=Dl(a),f=p0(d),v=await u.getDimensions(r),p=d==="y"?"top":"left",b=d==="y"?"bottom":"right",g=s.reference[f]+s.reference[d]-c[d]-s.floating[f],y=c[d]-s.reference[d],w=await(u.getOffsetParent==null?void 0:u.getOffsetParent(r));let x=w?d==="y"?w.clientHeight||0:w.clientWidth||0:0;x===0&&(x=s.floating[f]);const k=g/2-y/2,E=l[p],T=x-v[f]-l[b],z=x/2-v[f]/2+k,_=Nf(E,z,T),P=(h==="start"?l[p]:l[b])>0&&z!==_&&s.reference[f]<=s.floating[f];return{[d]:c[d]-(P?z<E?E-z:T-z:0),data:{[d]:_,centerOffset:z-_}}}}),F3={left:"right",right:"left",bottom:"top",top:"bottom"};function Fc(e){return e.replace(/left|right|bottom|top/g,t=>F3[t])}function E3(e,t,r){r===void 0&&(r=!1);const n=Dl(e),i=Ol(e),o=p0(i);let a=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=Fc(a)),{main:a,cross:Fc(a)}}var T3={start:"end",end:"start"};function Sg(e){return e.replace(/start|end/g,t=>T3[t])}var z3=["top","right","bottom","left"];z3.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var Ab=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:n,middlewareData:i,rects:o,initialPlacement:a,platform:s,elements:u}=t,l=e,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",flipAlignment:v=!0}=l,p=f0(l,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),b=Ua(n),g=h||(b===a||!v?[Fc(a)]:function(_){const P=Fc(_);return[Sg(_),P,Sg(P)]}(a)),y=[a,...g],w=await v0(t,p),x=[];let k=((r=i.flip)==null?void 0:r.overflows)||[];if(c&&x.push(w[b]),d){const{main:_,cross:P}=E3(n,o,await(s.isRTL==null?void 0:s.isRTL(u.floating)));x.push(w[_],w[P])}if(k=[...k,{placement:n,overflows:x}],!x.every(_=>_<=0)){var E,T;const _=((E=(T=i.flip)==null?void 0:T.index)!=null?E:0)+1,P=y[_];if(P)return{data:{index:_,overflows:k},reset:{placement:P}};let D="bottom";switch(f){case"bestFit":{var z;const I=(z=k.map(O=>[O,O.overflows.filter(K=>K>0).reduce((K,Z)=>K+Z,0)]).sort((O,K)=>O[1]-K[1])[0])==null?void 0:z[0].placement;I&&(D=I);break}case"initialPlacement":D=a}if(n!==D)return{reset:{placement:D}}}return{}}}},Db=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:n}=t,i=await async function(o,a){const{placement:s,platform:u,elements:l}=o,c=await(u.isRTL==null?void 0:u.isRTL(l.floating)),d=Ua(s),h=Dl(s),f=Ol(s)==="x",v=["left","top"].includes(d)?-1:1,p=c&&f?-1:1,b=typeof a=="function"?a(o):a;let{mainAxis:g,crossAxis:y,alignmentAxis:w}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:$e({mainAxis:0,crossAxis:0,alignmentAxis:null},b);return h&&typeof w=="number"&&(y=h==="end"?-1*w:w),f?{x:y*p,y:g*v}:{x:g*v,y:y*p}}(t,e);return{x:r+i.x,y:n+i.y,data:i}}}};function _3(e){return e==="x"?"y":"x"}var Ob=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:i}=t,o=e,{mainAxis:a=!0,crossAxis:s=!1,limiter:u={fn:g=>{let{x:y,y:w}=g;return{x:y,y:w}}}}=o,l=f0(o,["mainAxis","crossAxis","limiter"]),c={x:r,y:n},d=await v0(t,l),h=Ol(Ua(i)),f=_3(h);let v=c[h],p=c[f];if(a){const g=h==="y"?"bottom":"right";v=Nf(v+d[h==="y"?"top":"left"],v,v-d[g])}if(s){const g=f==="y"?"bottom":"right";p=Nf(p+d[f==="y"?"top":"left"],p,p-d[g])}const b=u.fn(Mr($e({},t),{[h]:v,[f]:p}));return Mr($e({},b),{data:{x:b.x-r,y:b.y-n}})}}},P3=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:i,elements:o}=t,a=e,{apply:s}=a,u=f0(a,["apply"]),l=await v0(t,u),c=Ua(r),d=Dl(r);let h,f;c==="top"||c==="bottom"?(h=c,f=d===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(f=c,h=d==="end"?"top":"bottom");const v=ro(l.left,0),p=ro(l.right,0),b=ro(l.top,0),g=ro(l.bottom,0),y={availableHeight:n.floating.height-(["left","right"].includes(r)?2*(b!==0||g!==0?b+g:ro(l.top,l.bottom)):l[h]),availableWidth:n.floating.width-(["top","bottom"].includes(r)?2*(v!==0||p!==0?v+p:ro(l.left,l.right)):l[f])},w=await i.getDimensions(o.floating);s==null||s($e($e({},t),y));const x=await i.getDimensions(o.floating);return w.width!==x.width||w.height!==x.height?{reset:{rects:!0}}:{}}}};function Rb(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function Jn(e){if(e==null)return window;if(!Rb(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function Rl(e){return Jn(e).getComputedStyle(e)}function Mn(e){return Rb(e)?"":e?(e.nodeName||"").toLowerCase():""}function Bb(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function xn(e){return e instanceof Jn(e).HTMLElement}function Ii(e){return e instanceof Jn(e).Element}function g0(e){return typeof ShadowRoot>"u"?!1:e instanceof Jn(e).ShadowRoot||e instanceof ShadowRoot}function md(e){const{overflow:t,overflowX:r,overflowY:n}=Rl(e);return/auto|scroll|overlay|hidden/.test(t+n+r)}function A3(e){return["table","td","th"].includes(Mn(e))}function Cg(e){const t=/firefox/i.test(Bb()),r=Rl(e);return r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].includes(r.willChange)||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"}function Nb(){return!/^((?!chrome|android).)*safari/i.test(Bb())}var Fg=Math.min,Rs=Math.max,Ec=Math.round;function Ln(e,t,r){var n,i,o,a;t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect();let u=1,l=1;t&&xn(e)&&(u=e.offsetWidth>0&&Ec(s.width)/e.offsetWidth||1,l=e.offsetHeight>0&&Ec(s.height)/e.offsetHeight||1);const c=Ii(e)?Jn(e):window,d=!Nb()&&r,h=(s.left+(d&&(n=(i=c.visualViewport)==null?void 0:i.offsetLeft)!=null?n:0))/u,f=(s.top+(d&&(o=(a=c.visualViewport)==null?void 0:a.offsetTop)!=null?o:0))/l,v=s.width/u,p=s.height/l;return{width:v,height:p,top:f,right:h+v,bottom:f+p,left:h,x:h,y:f}}function Pi(e){return(t=e,(t instanceof Jn(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function yd(e){return Ii(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ib(e){return Ln(Pi(e)).left+yd(e).scrollLeft}function D3(e,t,r){const n=xn(t),i=Pi(t),o=Ln(e,n&&function(u){const l=Ln(u);return Ec(l.width)!==u.offsetWidth||Ec(l.height)!==u.offsetHeight}(t),r==="fixed");let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(n||!n&&r!=="fixed")if((Mn(t)!=="body"||md(i))&&(a=yd(t)),xn(t)){const u=Ln(t,!0);s.x=u.x+t.clientLeft,s.y=u.y+t.clientTop}else i&&(s.x=Ib(i));return{x:o.left+a.scrollLeft-s.x,y:o.top+a.scrollTop-s.y,width:o.width,height:o.height}}function Mb(e){return Mn(e)==="html"?e:e.assignedSlot||e.parentNode||(g0(e)?e.host:null)||Pi(e)}function Eg(e){return xn(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function If(e){const t=Jn(e);let r=Eg(e);for(;r&&A3(r)&&getComputedStyle(r).position==="static";)r=Eg(r);return r&&(Mn(r)==="html"||Mn(r)==="body"&&getComputedStyle(r).position==="static"&&!Cg(r))?t:r||function(n){let i=Mb(n);for(g0(i)&&(i=i.host);xn(i)&&!["html","body"].includes(Mn(i));){if(Cg(i))return i;i=i.parentNode}return null}(e)||t}function Tg(e){if(xn(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=Ln(e);return{width:t.width,height:t.height}}function Lb(e){const t=Mb(e);return["html","body","#document"].includes(Mn(t))?e.ownerDocument.body:xn(t)&&md(t)?t:Lb(t)}function Tc(e,t){var r;t===void 0&&(t=[]);const n=Lb(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),o=Jn(n),a=i?[o].concat(o.visualViewport||[],md(n)?n:[]):n,s=t.concat(a);return i?s:s.concat(Tc(a))}function zg(e,t,r){return t==="viewport"?Cc(function(n,i){const o=Jn(n),a=Pi(n),s=o.visualViewport;let u=a.clientWidth,l=a.clientHeight,c=0,d=0;if(s){u=s.width,l=s.height;const h=Nb();(h||!h&&i==="fixed")&&(c=s.offsetLeft,d=s.offsetTop)}return{width:u,height:l,x:c,y:d}}(e,r)):Ii(t)?function(n,i){const o=Ln(n,!1,i==="fixed"),a=o.top+n.clientTop,s=o.left+n.clientLeft;return{top:a,left:s,x:s,y:a,right:s+n.clientWidth,bottom:a+n.clientHeight,width:n.clientWidth,height:n.clientHeight}}(t,r):Cc(function(n){var i;const o=Pi(n),a=yd(n),s=(i=n.ownerDocument)==null?void 0:i.body,u=Rs(o.scrollWidth,o.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),l=Rs(o.scrollHeight,o.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0);let c=-a.scrollLeft+Ib(n);const d=-a.scrollTop;return Rl(s||o).direction==="rtl"&&(c+=Rs(o.clientWidth,s?s.clientWidth:0)-u),{width:u,height:l,x:c,y:d}}(Pi(e)))}function O3(e){const t=Tc(e),r=["absolute","fixed"].includes(Rl(e).position)&&xn(e)?If(e):e;return Ii(r)?t.filter(n=>Ii(n)&&function(i,o){const a=o.getRootNode==null?void 0:o.getRootNode();if(i.contains(o))return!0;if(a&&g0(a)){let s=o;do{if(s&&i===s)return!0;s=s.parentNode||s.host}while(s)}return!1}(n,r)&&Mn(n)!=="body"):[]}var R3={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const o=[...r==="clippingAncestors"?O3(t):[].concat(r),n],a=o[0],s=o.reduce((u,l)=>{const c=zg(t,l,i);return u.top=Rs(c.top,u.top),u.right=Fg(c.right,u.right),u.bottom=Fg(c.bottom,u.bottom),u.left=Rs(c.left,u.left),u},zg(t,a,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:n}=e;const i=xn(r),o=Pi(r);if(r===o)return t;let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((i||!i&&n!=="fixed")&&((Mn(r)!=="body"||md(o))&&(a=yd(r)),xn(r))){const u=Ln(r,!0);s.x=u.x+r.clientLeft,s.y=u.y+r.clientTop}return Mr($e({},t),{x:t.x-a.scrollLeft+s.x,y:t.y-a.scrollTop+s.y})},isElement:Ii,getDimensions:Tg,getOffsetParent:If,getDocumentElement:Pi,getElementRects:e=>{let{reference:t,floating:r,strategy:n}=e;return{reference:D3(t,If(r),n),floating:Mr($e({},Tg(r)),{x:0,y:0})}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Rl(e).direction==="rtl"};function Ub(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=!0,animationFrame:s=!1}=n,u=i&&!s,l=o&&!s,c=u||l?[...Ii(e)?Tc(e):[],...Tc(t)]:[];c.forEach(v=>{u&&v.addEventListener("scroll",r,{passive:!0}),l&&v.addEventListener("resize",r)});let d,h=null;if(a){let v=!0;h=new ResizeObserver(()=>{v||r(),v=!1}),Ii(e)&&!s&&h.observe(e),h.observe(t)}let f=s?Ln(e):null;return s&&function v(){const p=Ln(e);!f||p.x===f.x&&p.y===f.y&&p.width===f.width&&p.height===f.height||r(),f=p,d=requestAnimationFrame(v)}(),r(),()=>{var v;c.forEach(p=>{u&&p.removeEventListener("scroll",r),l&&p.removeEventListener("resize",r)}),(v=h)==null||v.disconnect(),h=null,s&&cancelAnimationFrame(d)}}var Vb=(e,t,r)=>k3(e,t,$e({platform:R3},r));function kt(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Mr($e({},r),{duration:B3()?0:r.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function _g(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function B3(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function It(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const n=requestAnimationFrame(r);t.addEventListener("cancel",()=>n,{once:!0}),t.addEventListener("finish",()=>n,{once:!0}),t.cancel()})))}function Pg(e,t){return e.map(r=>Mr($e({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var jb=new Map,N3=new WeakMap;function I3(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function Ag(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ze(e,t){jb.set(e,I3(t))}function St(e,t,r){const n=N3.get(e);if(n!=null&&n[t])return Ag(n[t],r.dir);const i=jb.get(t);return i?Ag(i,r.dir):{keyframes:[],options:{duration:0}}}var Mf=new Set,M3=new MutationObserver(Kb),na=new Map,Hb=document.documentElement.dir||"ltr",Wb=document.documentElement.lang||navigator.language,Bs;M3.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function L3(...e){e.map(t=>{const r=t.$code.toLowerCase();na.has(r)?na.set(r,Object.assign(Object.assign({},na.get(r)),t)):na.set(r,t),Bs||(Bs=t)}),Kb()}function Kb(){Hb=document.documentElement.dir||"ltr",Wb=document.documentElement.lang||navigator.language,[...Mf.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var U3=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Mf.add(this.host)}hostDisconnected(){Mf.delete(this.host)}dir(){return`${this.host.dir||Hb}`.toLowerCase()}lang(){return`${this.host.lang||Wb}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),n=this.lang().length>2?this.lang().toLowerCase():"",i=na.get(n),o=na.get(r);let a;if(i&&i[e])a=i[e];else if(o&&o[e])a=o[e];else if(Bs&&Bs[e])a=Bs[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},tt=class extends U3{},V3={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};L3(V3);var Ft=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),this.target=this.getTarget()})}async firstUpdated(){this.tooltip.hidden=!this.open,this.open&&(await this.updateComplete,this.updatePositioner())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.stopPositioner()}async show(){if(!this.open)return this.open=!0,Lr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Lr(this,"sl-after-hide")}getTarget(){const e=[...this.children].find(t=>t.tagName.toLowerCase()!=="style"&&t.getAttribute("slot")!=="content");if(!e)throw new Error("Invalid tooltip target: no child element was found.");return e}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const e=_g(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>void this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){const e=_g(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>void this.hide(),e)}}async handleOpenChange(){if(this.open){if(this.disabled)return;B(this,"sl-show"),await It(this.tooltip),this.startPositioner(),this.tooltip.hidden=!1;const{keyframes:e,options:t}=St(this,"tooltip.show",{dir:this.localize.dir()});await kt(this.tooltip,e,t),B(this,"sl-after-show")}else{B(this,"sl-hide"),await It(this.tooltip);const{keyframes:e,options:t}=St(this,"tooltip.hide",{dir:this.localize.dir()});await kt(this.tooltip,e,t),this.tooltip.hidden=!0,this.stopPositioner(),B(this,"sl-after-hide")}}handleOptionsChange(){this.updatePositioner()}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(e){return this.trigger.split(" ").includes(e)}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=Ub(this.target,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){!this.open||!this.target||!this.positioner||Vb(this.target,this.positioner,{placement:this.placement,middleware:[Db({mainAxis:this.distance,crossAxis:this.skidding}),Ab(),Ob(),C3({element:this.arrow,padding:10})],strategy:this.hoist?"fixed":"absolute"}).then(({x:e,y:t,middlewareData:r,placement:n})=>{const i=r.arrow.x,o=r.arrow.y,a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];this.positioner.setAttribute("data-placement",n),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${e}px`,top:`${t}px`}),Object.assign(this.arrow.style,{left:typeof i=="number"?`${i}px`:"",top:typeof o=="number"?`${o}px`:"",right:"",bottom:"",[a]:"calc(var(--sl-tooltip-arrow-size) * -1)"})})}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return U`
      <div class="tooltip-target" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div class="tooltip-positioner">
        <div
          part="base"
          id="tooltip"
          class=${ye({tooltip:!0,"tooltip--open":this.open})}
          role="tooltip"
          aria-hidden=${this.open?"false":"true"}
        >
          <div class="tooltip__arrow"></div>
          <div class="tooltip__content" aria-live=${this.open?"polite":"off"}>
            <slot name="content"> ${this.content} </slot>
          </div>
        </div>
      </div>
    `}};Ft.styles=x3;m([J(".tooltip-positioner")],Ft.prototype,"positioner",2);m([J(".tooltip")],Ft.prototype,"tooltip",2);m([J(".tooltip__arrow")],Ft.prototype,"arrow",2);m([S()],Ft.prototype,"content",2);m([S()],Ft.prototype,"placement",2);m([S({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);m([S({type:Number})],Ft.prototype,"distance",2);m([S({type:Boolean,reflect:!0})],Ft.prototype,"open",2);m([S({type:Number})],Ft.prototype,"skidding",2);m([S()],Ft.prototype,"trigger",2);m([S({type:Boolean})],Ft.prototype,"hoist",2);m([j("open",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleOpenChange",1);m([j("content"),j("distance"),j("hoist"),j("placement"),j("skidding")],Ft.prototype,"handleOptionsChange",1);m([j("disabled")],Ft.prototype,"handleDisabledChange",1);Ft=m([ee("sl-tooltip")],Ft);Ze("tooltip.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});Ze("tooltip.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});te($,"sl-tooltip",Ft,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"});var j3=ne`
  ${ue}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,zc=class extends Q{render(){return U` <slot></slot> `}};zc.styles=j3;zc=m([ee("sl-visually-hidden")],zc);te($,"sl-visually-hidden",zc,{});var H3=ne`
  ${ue}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,pl=class extends Q{constructor(){super(...arguments),this.effect="none"}render(){return U`
      <div
        part="base"
        class=${ye({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};pl.styles=H3;m([S()],pl.prototype,"effect",2);pl=m([ee("sl-skeleton")],pl);te($,"sl-skeleton",pl,{});var W3=ne`
  ${ue}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,_c=class extends Q{render(){return U`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};_c.styles=W3;_c=m([ee("sl-spinner")],_c);te($,"sl-spinner",_c,{});var K3=ne`
  ${ue}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }
`;function Ns(e,t){function r(i){const o=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,s=o.left+a.pageXOffset,u=o.top+a.pageYOffset,l=i.pageX-s,c=i.pageY-u;t!=null&&t.onMove&&t.onMove(l,c)}function n(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",n),t!=null&&t.initialEvent&&r(t.initialEvent)}function dt(e,t,r){return e<t?t:e>r?r:e}var Xt=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.preventDefault(),Ns(this,{onMove:(r,n)=>{let i=this.vertical?n:r;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(a=>{let s;a.endsWith("%")?s=this.size*(parseFloat(a)/100):s=parseFloat(a),t&&!this.vertical&&(s=this.size-s),i>=s-this.snapThreshold&&i<=s+this.snapThreshold&&(i=s)}),this.position=dt(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=dt(t,0,100)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),B(this,"sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",n=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${n}`:r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${i}`,this.style[t]="",U`
      <div part="panel start" class="start">
        <slot name="start"></slot>
      </div>

      <div
        part="divider"
        class="divider"
        tabindex=${H(this.disabled?void 0:"0")}
        role="separator"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="handle"></slot>
      </div>

      <div part="panel end" class="end">
        <slot name="end"></slot>
      </div>
    `}};Xt.styles=K3;m([J(".divider")],Xt.prototype,"divider",2);m([S({type:Number,reflect:!0})],Xt.prototype,"position",2);m([S({attribute:"position-in-pixels",type:Number})],Xt.prototype,"positionInPixels",2);m([S({type:Boolean,reflect:!0})],Xt.prototype,"vertical",2);m([S({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);m([S()],Xt.prototype,"primary",2);m([S()],Xt.prototype,"snap",2);m([S({type:Number,attribute:"snap-threshold"})],Xt.prototype,"snapThreshold",2);m([j("position")],Xt.prototype,"handlePositionChange",1);m([j("positionInPixels")],Xt.prototype,"handlePositionInPixelsChange",1);m([j("vertical")],Xt.prototype,"handleVerticalChange",1);Xt=m([ee("sl-split-panel")],Xt);te($,"sl-split-panel",Xt,{onSlReposition:"sl-reposition"});var q3=ne`
  ${ue}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Gt=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this,{value:e=>e.checked?e.value:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.invalid=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleCheckedChange(){this.input.checked=this.checked,this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,B(this,"sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,B(this,"sl-change")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,B(this,"sl-change"))}render(){return U`
      <label
        part="base"
        class=${ye({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus})}
      >
        <input
          class="switch__input"
          type="checkbox"
          name=${H(this.name)}
          value=${H(this.value)}
          .checked=${Ni(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <span part="label" class="switch__label">
          <slot></slot>
        </span>
      </label>
    `}};Gt.styles=q3;m([J('input[type="checkbox"]')],Gt.prototype,"input",2);m([Te()],Gt.prototype,"hasFocus",2);m([S()],Gt.prototype,"name",2);m([S()],Gt.prototype,"value",2);m([S({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],Gt.prototype,"required",2);m([S({type:Boolean,reflect:!0})],Gt.prototype,"checked",2);m([S({type:Boolean,reflect:!0})],Gt.prototype,"invalid",2);m([Qn("checked")],Gt.prototype,"defaultChecked",2);m([j("checked",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleCheckedChange",1);m([j("disabled",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleDisabledChange",1);Gt=m([ee("sl-switch")],Gt);te($,"sl-switch",Gt,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var X3=0;function qb(){return++X3}var G3=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }
`,kn=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.attrId=qb(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}handleCloseClick(){B(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,U`
      <div
        part="base"
        class=${ye({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?U`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};kn.styles=G3;m([J(".tab")],kn.prototype,"tab",2);m([S({reflect:!0})],kn.prototype,"panel",2);m([S({type:Boolean,reflect:!0})],kn.prototype,"active",2);m([S({type:Boolean})],kn.prototype,"closable",2);m([S({type:Boolean,reflect:!0})],kn.prototype,"disabled",2);m([S()],kn.prototype,"lang",2);kn=m([ee("sl-tab")],kn);te($,"sl-tab",kn,{onSlClose:"sl-close"});var Z3=ne`
  ${ue}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,za=class extends Q{constructor(){super(...arguments),this.attrId=qb(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",U`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};za.styles=Z3;m([S({reflect:!0})],za.prototype,"name",2);m([S({type:Boolean,reflect:!0})],za.prototype,"active",2);za=m([ee("sl-tab-panel")],za);te($,"sl-tab-panel",za,{});var Y3=ne`
  ${ue}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-right: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function Q3(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Lf=new Set;function Pc(e){Lf.add(e),document.body.classList.add("sl-scroll-lock")}function Ac(e){Lf.delete(e),Lf.size===0&&document.body.classList.remove("sl-scroll-lock")}function Uf(e,t,r="vertical",n="smooth"){const i=Q3(e,t),o=i.top+t.scrollTop,a=i.left+t.scrollLeft,s=t.scrollLeft,u=t.scrollLeft+t.offsetWidth,l=t.scrollTop,c=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(a<s?t.scrollTo({left:a,behavior:n}):a+e.clientWidth>u&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:n})),(r==="vertical"||r==="both")&&(o<l?t.scrollTo({top:o,behavior:n}):o+e.clientHeight>c&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:n}))}var Zt=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,r)=>{var n;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),r.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(e=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=document.activeElement,o=this.localize.dir()==="rtl";if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){let a=this.tabs.indexOf(i);e.key==="Home"?a=0:e.key==="End"?a=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?a--:(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&a++,a<0&&(a=this.tabs.length-1),a>this.tabs.length-1&&(a=0),this.tabs[a].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[a],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Uf(this.tabs[a],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(e,t){if(t=$e({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.map(n=>n.active=n===this.activeTab),this.panels.map(n=>{var i;return n.active=n.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Uf(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&B(this,"sl-tab-hide",{detail:{name:r.panel}}),B(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,n=this.localize.dir()==="rtl",i=this.getAllTabs(!0),a=i.slice(0,i.indexOf(e)).reduce((s,u)=>({left:s.left+u.clientWidth,top:s.top+u.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.transform=n?`translateX(${-1*a.left}px)`:`translateX(${a.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.transform=`translateY(${a.top}px)`;break}}preventIndicatorTransition(){const e=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=e})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const e=this.localize.dir()==="rtl";return U`
      <div
        part="base"
        class=${ye({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?U`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?U`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};Zt.styles=Y3;m([J(".tab-group")],Zt.prototype,"tabGroup",2);m([J(".tab-group__body")],Zt.prototype,"body",2);m([J(".tab-group__nav")],Zt.prototype,"nav",2);m([J(".tab-group__indicator")],Zt.prototype,"indicator",2);m([Te()],Zt.prototype,"hasScrollControls",2);m([S()],Zt.prototype,"placement",2);m([S()],Zt.prototype,"activation",2);m([S({attribute:"no-scroll-controls",type:Boolean})],Zt.prototype,"noScrollControls",2);m([S()],Zt.prototype,"lang",2);m([j("noScrollControls",{waitUntilFirstUpdate:!0})],Zt.prototype,"updateScrollControls",1);m([j("placement",{waitUntilFirstUpdate:!0})],Zt.prototype,"syncIndicator",1);Zt=m([ee("sl-tab-group")],Zt);te($,"sl-tab-group",Zt,{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"});var J3=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Mi=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){B(this,"sl-remove")}render(){return U`
      <span
        part="base"
        class=${ye({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?U`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};Mi.styles=J3;m([S({reflect:!0})],Mi.prototype,"variant",2);m([S({reflect:!0})],Mi.prototype,"size",2);m([S({type:Boolean,reflect:!0})],Mi.prototype,"pill",2);m([S({type:Boolean})],Mi.prototype,"removable",2);Mi=m([ee("sl-tag")],Mi);te($,"sl-tag",Mi,{onSlRemove:"sl-remove"});var Xb=ne`
  ${ue}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,$3=ne`
  ${Xb}

  label {
    display: inline-block;
    position: relative;
  }
  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Gb=Symbol.for(""),eS=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===Gb)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Dc=(e,...t)=>({_$litStatic$:t.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:Gb}),Dg=new Map,tS=e=>(t,...r)=>{const n=r.length;let i,o;const a=[],s=[];let u,l=0,c=!1;for(;l<n;){for(u=t[l];l<n&&(o=r[l],(i=eS(o))!==void 0);)u+=i+t[++l],c=!0;s.push(o),a.push(u),l++}if(l===n&&a.push(t[n]),c){const d=a.join("$$lit$$");(t=Dg.get(d))===void 0&&(a.raw=a,Dg.set(d,t=a)),r=s}return e(t,...r)},Is=tS(U);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dt=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this,{value:e=>e.checked?e.value:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new un(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.disabled=!1,this.checked=!1,this.invalid=!1,this.defaultChecked=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.hiddenInput.reportValidity()}setCustomValidity(e){this.hiddenInput.setCustomValidity(e)}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.hasUpdated&&B(this,"sl-change")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.hasUpdated&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}render(){return Is`
      <div part="base">
        <input class="hidden-input" type="radio" aria-hidden="true" tabindex="-1" />
        <button
          part="button"
          class=${ye({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          ?disabled=${this.disabled}
          type="button"
          name=${H(this.name)}
          value=${H(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <span part="prefix" class="button__prefix">
            <slot name="prefix"></slot>
          </span>
          <span part="label" class="button__label">
            <slot></slot>
          </span>
          <span part="suffix" class="button__suffix">
            <slot name="suffix"></slot>
          </span>
        </button>
      </div>
    `}};Dt.styles=$3;m([J(".button")],Dt.prototype,"input",2);m([J(".hidden-input")],Dt.prototype,"hiddenInput",2);m([Te()],Dt.prototype,"hasFocus",2);m([S()],Dt.prototype,"name",2);m([S()],Dt.prototype,"value",2);m([S({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],Dt.prototype,"checked",2);m([S({type:Boolean,reflect:!0})],Dt.prototype,"invalid",2);m([Qn("checked")],Dt.prototype,"defaultChecked",2);m([j("checked")],Dt.prototype,"handleCheckedChange",1);m([j("disabled",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleDisabledChange",1);m([S({reflect:!0})],Dt.prototype,"size",2);m([S({type:Boolean,reflect:!0})],Dt.prototype,"pill",2);Dt=m([ee("sl-radio-button")],Dt);te($,"sl-radio-button",Dt,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var rS=ne`
  ${ue}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-large);
    padding-top: var(--sl-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    padding: 0 var(--sl-spacing-2x-small);
  }

  ::slotted(sl-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: -2px;
  }
`,bh=["sl-radio","sl-radio-button"],Gn=class extends Q{constructor(){super(...arguments),this.hasButtonGroup=!1,this.label="",this.fieldset=!1,this.required=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}getAllRadios(){return[...this.querySelectorAll(bh.join(","))].filter(e=>bh.includes(e.tagName.toLowerCase()))}handleRadioClick(e){const r=e.target.closest(bh.map(n=>`${n}:not([disabled])`).join(","));r&&this.getAllRadios().forEach(i=>{i.checked=i===r,i.input.tabIndex=i===r?0:-1})}handleKeyDown(e){var t;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){const r=this.getAllRadios().filter(a=>!a.disabled),n=(t=r.find(a=>a.checked))!=null?t:r[0],i=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let o=r.indexOf(n)+i;o<0&&(o=r.length-1),o>r.length-1&&(o=0),this.getAllRadios().forEach(a=>{a.checked=!1,a.input.tabIndex=-1}),r[o].focus(),r[o].checked=!0,r[o].input.tabIndex=0,e.preventDefault()}}handleSlotChange(){const e=this.getAllRadios(),t=e.find(r=>r.checked);this.hasButtonGroup=e.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),e.forEach(r=>{r.setAttribute("role","radio"),r.input.tabIndex=-1}),t?t.input.tabIndex=0:e.length>0&&(e[0].input.tabIndex=0)}render(){const e=U`
      <slot @click=${this.handleRadioClick} @keydown=${this.handleKeyDown} @slotchange=${this.handleSlotChange}></slot>
    `;return U`
      <fieldset
        part="base"
        class=${ye({"radio-group":!0,"radio-group--has-fieldset":this.fieldset,"radio-group--required":this.required})}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        ${this.hasButtonGroup?U`<sl-button-group part="button-group">${e}</sl-button-group>`:e}
      </fieldset>
    `}};Gn.styles=rS;m([J("slot:not([name])")],Gn.prototype,"defaultSlot",2);m([Te()],Gn.prototype,"hasButtonGroup",2);m([S()],Gn.prototype,"label",2);m([S({type:Boolean,attribute:"fieldset",reflect:!0})],Gn.prototype,"fieldset",2);m([S({type:Boolean,reflect:!0})],Gn.prototype,"required",2);Gn=m([ee("sl-radio-group")],Gn);te($,"sl-radio-group",Gn,{});var nS=ne`
  ${ue}
  ${vd}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 1px;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translateX(calc(-1 * var(--sl-tooltip-arrow-size)));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`,ot=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this),this.hasSlotController=new un(this,"help-text","label"),this.localize=new tt(this),this.hasFocus=!1,this.hasTooltip=!1,this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.invalid=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleInput(){this.value=parseFloat(this.input.value),B(this,"sl-change"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,B(this,"sl-blur")}handleValueChange(){this.invalid=!this.input.checkValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,B(this,"sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const a=`${t-o}px + ${e} * ${n}`;this.output.style.transform=`translateX(calc((${a} - ${r/2}px - ${n} / 2)))`}else{const a=`${o}px - ${e} * ${n}`;this.output.style.transform=`translateX(calc(${a} - ${r/2}px + ${n} / 2))`}}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return U`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ye({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              type="range"
              class="range__control"
              name=${H(this.name)}
              ?disabled=${this.disabled}
              min=${H(this.min)}
              max=${H(this.max)}
              step=${H(this.step)}
              .value=${Ni(this.value.toString())}
              aria-describedby="help-text"
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?U`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ot.styles=nS;m([J(".range__control")],ot.prototype,"input",2);m([J(".range__tooltip")],ot.prototype,"output",2);m([Te()],ot.prototype,"hasFocus",2);m([Te()],ot.prototype,"hasTooltip",2);m([S()],ot.prototype,"name",2);m([S({type:Number})],ot.prototype,"value",2);m([S()],ot.prototype,"label",2);m([S({attribute:"help-text"})],ot.prototype,"helpText",2);m([S({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],ot.prototype,"invalid",2);m([S({type:Number})],ot.prototype,"min",2);m([S({type:Number})],ot.prototype,"max",2);m([S({type:Number})],ot.prototype,"step",2);m([S()],ot.prototype,"tooltip",2);m([S({attribute:!1})],ot.prototype,"tooltipFormatter",2);m([Qn()],ot.prototype,"defaultValue",2);m([j("value",{waitUntilFirstUpdate:!0})],ot.prototype,"handleValueChange",1);m([j("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1);ot=m([ee("sl-range")],ot);te($,"sl-range",ot,{onSlChange:"sl-change",onSlBlur:"sl-blur",onSlFocus:"sl-focus"});var iS=ne`
  ${ue}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) transform;
  }

  .rating__symbol--hover {
    transform: scale(1.2);
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    transform: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }
`,cr=Pl(class extends gd{constructor(e){var t;if(super(e),e.type!==On.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n==null?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ct===void 0){this.ct=new Set;for(const n in t)this.ct.add(n);return this.render(t)}this.ct.forEach(n=>{t[n]==null&&(this.ct.delete(n),n.includes("-")?r.removeProperty(n):r[n]="")});for(const n in t){const i=t[n];i!=null&&(this.ct.add(n),n.includes("-")?r.setProperty(n,i):r[n]=i)}return hr}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vf="";function jf(e){Vf=e}function oS(){if(!Vf){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)jf(t.getAttribute("data-shoelace"));else{const r=e.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src));let n="";r&&(n=r.getAttribute("src")),jf(n.split("/").slice(0,-1).join("/"))}}return Vf.replace(/\/$/,"")}var aS={name:"default",resolver:e=>`${oS()}/assets/icons/${e}.svg`},sS=aS,Og={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},lS={name:"system",resolver:e=>e in Og?`data:image/svg+xml,${encodeURIComponent(Og[e])}`:""},uS=lS,cS=[sS,uS],Hf=[];function dS(e){Hf.push(e)}function hS(e){Hf=Hf.filter(t=>t!==e)}function Rg(e){return cS.find(t=>t.name===e)}var wh=new Map;function Zb(e,t="cors"){if(wh.has(e))return wh.get(e);const r=fetch(e,{mode:t}).then(async n=>({ok:n.ok,status:n.status,html:await n.text()}));return wh.set(e,r),r}var xh=new Map;async function fS(e){if(xh.has(e))return xh.get(e);const t=await Zb(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const n=document.createElement("div");n.innerHTML=t.html;const i=n.firstElementChild;r.svg=(i==null?void 0:i.tagName.toLowerCase())==="svg"?i.outerHTML:""}return xh.set(e,r),r}var pS=ne`
  ${ue}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Oc=class extends gd{constructor(e){if(super(e),this.it=it,e.type!==On.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===it||e==null)return this.ft=void 0,this.it=e;if(e===hr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Oc.directiveName="unsafeHTML",Oc.resultType=1;var Bg=Pl(Oc),Wf=class extends Oc{};Wf.directiveName="unsafeSVG",Wf.resultType=2;var vS=Pl(Wf),kh,Sn=class extends Q{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),dS(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),hS(this)}getUrl(){const e=Rg(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=Rg(this.library),r=this.getUrl();if(kh||(kh=new DOMParser),r)try{const n=await fS(r);if(r!==this.getUrl())return;if(n.ok){const o=kh.parseFromString(n.svg,"text/html").body.querySelector("svg");o!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,o),this.svg=o.outerHTML,B(this,"sl-load")):(this.svg="",B(this,"sl-error"))}else this.svg="",B(this,"sl-error")}catch{B(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return U` <div
      part="base"
      class="icon"
      role=${H(e?"img":void 0)}
      aria-label=${H(e?this.label:void 0)}
      aria-hidden=${H(e?void 0:"true")}
    >
      ${vS(this.svg)}
    </div>`}};Sn.styles=pS;m([Te()],Sn.prototype,"svg",2);m([S({reflect:!0})],Sn.prototype,"name",2);m([S()],Sn.prototype,"src",2);m([S()],Sn.prototype,"label",2);m([S({reflect:!0})],Sn.prototype,"library",2);m([j("name"),j("src"),j("library")],Sn.prototype,"setIcon",1);Sn=m([ee("sl-icon")],Sn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var or=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.hoverValue=0,this.isHovering=!1,this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:n,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((n-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return dt(o,0,this.max)}handleClick(e){this.setValue(this.getValueFromMousePosition(e))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(!(this.disabled||this.readonly)){if(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const n=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-n),e.preventDefault()}if(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const n=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+n),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault())}}handleMouseEnter(){this.isHovering=!0}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),e.preventDefault()}handleValueChange(){B(this,"sl-change")}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,U`
      <div
        part="base"
        class=${ye({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          ${t.map(n=>U`
              <span
                class=${ye({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Bg(this.getSymbol(n+1))}
              </span>
            `)}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${t.map(n=>U`
              <span
                class=${ye({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1})}
                style=${cr({clipPath:r>n+1?"none":e?`inset(0 0 0 ${100-(r-n)/1*100}%)`:`inset(0 ${100-(r-n)/1*100}% 0 0)`})}
                role="presentation"
              >
                ${Bg(this.getSymbol(n+1))}
              </span>
            `)}
        </span>
      </div>
    `}};or.styles=iS;m([J(".rating")],or.prototype,"rating",2);m([Te()],or.prototype,"hoverValue",2);m([Te()],or.prototype,"isHovering",2);m([S({type:Number})],or.prototype,"value",2);m([S({type:Number})],or.prototype,"max",2);m([S({type:Number})],or.prototype,"precision",2);m([S({type:Boolean,reflect:!0})],or.prototype,"readonly",2);m([S({type:Boolean,reflect:!0})],or.prototype,"disabled",2);m([S()],or.prototype,"getSymbol",2);m([j("value",{waitUntilFirstUpdate:!0})],or.prototype,"handleValueChange",1);or=m([ee("sl-rating")],or);te($,"sl-rating",or,{onSlChange:"sl-change"});var gS=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],nn=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:n,value:i}=gS.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/i),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;n==="minute"?o=uu("second"):n==="hour"?o=uu("minute"):n==="day"?o=uu("hour"):o=uu("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return U` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};m([Te()],nn.prototype,"isoTime",2);m([Te()],nn.prototype,"relativeTime",2);m([Te()],nn.prototype,"titleTime",2);m([S()],nn.prototype,"date",2);m([S()],nn.prototype,"lang",2);m([S()],nn.prototype,"format",2);m([S()],nn.prototype,"numeric",2);m([S({type:Boolean})],nn.prototype,"sync",2);nn=m([ee("sl-relative-time")],nn);function uu(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}te($,"sl-relative-time",nn,{});var mS=ne`
  ${ue}

  :host {
    display: contents;
  }
`,_a=class extends Q{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{B(this,"sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return U` <slot @slotchange=${this.handleSlotChange}></slot> `}};_a.styles=mS;m([S({type:Boolean,reflect:!0})],_a.prototype,"disabled",2);m([j("disabled",{waitUntilFirstUpdate:!0})],_a.prototype,"handleDisabledChange",1);_a=m([ee("sl-resize-observer")],_a);te($,"sl-resize-observer",_a,{onSlResize:"sl-resize"});var yS=ne`
  ${ue}

  :host {
    display: block;
  }

  .responsive-media {
    position: relative;
  }

  .responsive-media ::slotted(*) {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  .responsive-media--cover ::slotted(embed),
  .responsive-media--cover ::slotted(iframe),
  .responsive-media--cover ::slotted(img),
  .responsive-media--cover ::slotted(video) {
    object-fit: cover !important;
  }

  .responsive-media--contain ::slotted(embed),
  .responsive-media--contain ::slotted(iframe),
  .responsive-media--contain ::slotted(img),
  .responsive-media--contain ::slotted(video) {
    object-fit: contain !important;
  }
`,Pa=class extends Q{constructor(){super(...arguments),this.aspectRatio="16:9",this.fit="cover"}render(){const e=this.aspectRatio.split(":"),t=parseFloat(e[0]),r=parseFloat(e[1]),n=!isNaN(t)&&!isNaN(r)&&t>0&&r>0?`${r/t*100}%`:"0";return U`
      <div
        class=${ye({"responsive-media":!0,"responsive-media--cover":this.fit==="cover","responsive-media--contain":this.fit==="contain"})}
        style="padding-bottom: ${n}"
      >
        <slot></slot>
      </div>
    `}};Pa.styles=yS;m([S({attribute:"aspect-ratio"})],Pa.prototype,"aspectRatio",2);m([S()],Pa.prototype,"fit",2);Pa=m([ee("sl-responsive-media")],Pa);te($,"sl-responsive-media",Pa,{});var bS=ne`
  ${ue}
  ${vd}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select::part(panel) {
    overflow: hidden;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  .select__menu::part(base) {
    border: none;
  }

  .select::part(panel) {
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,Re=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this),this.hasSlotController=new un(this,"help-text","label"),this.localize=new tt(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(e){this.control.focus(e)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,B(this,"sl-blur"))}handleClearClick(e){e.stopPropagation(),this.value=this.multiple?[]:"",B(this,"sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,B(this,"sl-focus"))}handleKeyDown(e){const t=e.target,r=this.menuItems[0],n=this.menuItems[this.menuItems.length-1];if(t.tagName.toLowerCase()!=="sl-tag"){if(e.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||this.dropdown.show(),e.key==="ArrowDown"){this.menu.setCurrentItem(r),r.focus();return}if(e.key==="ArrowUp"){this.menu.setCurrentItem(n),n.focus();return}}e.ctrlKey||e.metaKey||!this.isOpen&&e.key.length===1&&(e.stopPropagation(),e.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(e))}}handleLabelClick(){this.focus()}handleMenuSelect(e){const t=e.detail.item;this.multiple?this.value=this.value.includes(t.value)?this.value.filter(r=>r!==t.value):[...this.value,t.value]:this.value=t.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const e=this.menuItems.find(t=>t.value===this.value);this.displayLabel=e?e.getTextLabel():""}}handleMultipleChange(){var e;const t=this.getValueAsArray();this.value=this.multiple?t:(e=t[0])!=null?e:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const e=[];this.menuItems.forEach(t=>{e.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),e.push(t.value)}),await Promise.all(this.menuItems.map(t=>t.render)),this.syncItemsFromValue()}handleTagInteraction(e){e.composedPath().find(n=>n instanceof HTMLElement?n.classList.contains("tag__remove"):!1)&&e.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),B(this,"sl-change")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const e=this.getValueAsArray();if(this.menuItems.forEach(t=>t.checked=e.includes(t.value)),this.multiple){const t=this.menuItems.filter(r=>e.includes(r.value));if(this.displayLabel=t.length>0?t[0].getTextLabel():"",this.displayTags=t.map(r=>U`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${n=>{n.stopPropagation(),this.disabled||(r.checked=!1,this.syncValueFromItems())}}
          >
            ${r.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const r=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(U`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${r-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const t=this.menuItems.find(r=>r.value===e[0]);this.displayLabel=t?t.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const t=this.menuItems.filter(r=>r.checked).map(r=>r.value);this.multiple?this.value=this.value.filter(r=>t.includes(r)):this.value=t.length>0?t[0]:""}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.multiple?this.value.length>0:this.value!=="",n=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&r;return U`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${ye({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?U` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${o?U`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${r?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Re.styles=bS;m([J(".select")],Re.prototype,"dropdown",2);m([J(".select__control")],Re.prototype,"control",2);m([J(".select__hidden-select")],Re.prototype,"input",2);m([J(".select__menu")],Re.prototype,"menu",2);m([Te()],Re.prototype,"hasFocus",2);m([Te()],Re.prototype,"isOpen",2);m([Te()],Re.prototype,"displayLabel",2);m([Te()],Re.prototype,"displayTags",2);m([S({type:Boolean,reflect:!0})],Re.prototype,"multiple",2);m([S({attribute:"max-tags-visible",type:Number})],Re.prototype,"maxTagsVisible",2);m([S({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);m([S()],Re.prototype,"name",2);m([S()],Re.prototype,"placeholder",2);m([S()],Re.prototype,"size",2);m([S({type:Boolean})],Re.prototype,"hoist",2);m([S()],Re.prototype,"value",2);m([S({type:Boolean,reflect:!0})],Re.prototype,"filled",2);m([S({type:Boolean,reflect:!0})],Re.prototype,"pill",2);m([S()],Re.prototype,"label",2);m([S()],Re.prototype,"placement",2);m([S({attribute:"help-text"})],Re.prototype,"helpText",2);m([S({type:Boolean,reflect:!0})],Re.prototype,"required",2);m([S({type:Boolean})],Re.prototype,"clearable",2);m([S({type:Boolean,reflect:!0})],Re.prototype,"invalid",2);m([Qn()],Re.prototype,"defaultValue",2);m([j("disabled",{waitUntilFirstUpdate:!0})],Re.prototype,"handleDisabledChange",1);m([j("multiple")],Re.prototype,"handleMultipleChange",1);m([j("value",{waitUntilFirstUpdate:!0})],Re.prototype,"handleValueChange",1);Re=m([ee("sl-select")],Re);te($,"sl-select",Re,{onSlClear:"sl-clear",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlBlur:"sl-blur"});var wS=ne`
  ${ue}

  :host {
    display: block;
  }

  .menu {
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    background: var(--sl-panel-background-color);
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Aa=class extends Q{constructor(){super(...arguments),this.typeToSelectString=""}firstUpdated(){this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),r=e.disabled?t[0]:e;t.forEach(n=>{n.setAttribute("tabindex",n===r?"0":"-1")})}typeToSelect(e){var t;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of r){const i=(t=n.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(zb(i).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(n),n.focus();break}}}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&B(this,"sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let n=r?t.indexOf(r):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=t.length-1),n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.setCurrentItem(t[n]),t[n].focus();return}}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return U`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Aa.styles=wS;m([J(".menu")],Aa.prototype,"menu",2);m([J("slot")],Aa.prototype,"defaultSlot",2);Aa=m([ee("sl-menu")],Aa);te($,"sl-menu",Aa,{onSlSelect:"sl-select"});var xS=ne`
  ${ue}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,Rc=class extends Q{render(){return U`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `}};Rc.styles=xS;Rc=m([ee("sl-menu-label")],Rc);te($,"sl-menu-label",Rc,{});var kS=ne`
  ${ue}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`,on=class extends Q{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return zb(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,B(this,"sl-label-change"))}render(){return U`
      <div
        part="base"
        class=${ye({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};on.styles=kS;m([J("slot:not([name])")],on.prototype,"defaultSlot",2);m([J(".menu-item")],on.prototype,"menuItem",2);m([S({type:Boolean,reflect:!0})],on.prototype,"checked",2);m([S()],on.prototype,"value",2);m([S({type:Boolean,reflect:!0})],on.prototype,"disabled",2);m([j("checked")],on.prototype,"handleCheckedChange",1);m([j("disabled")],on.prototype,"handleDisabledChange",1);on=m([ee("sl-menu-item")],on);te($,"sl-menu-item",on,{onSlLabelChange:"sl-label-change"});var SS=ne`
  ${ue}

  :host {
    display: contents;
  }
`,Ur=class extends Q{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleMutation=this.handleMutation.bind(this),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}handleMutation(e){B(this,"sl-mutation",{detail:{mutationList:e}})}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}render(){return U` <slot></slot> `}};Ur.styles=SS;m([S({reflect:!0})],Ur.prototype,"attr",2);m([S({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ur.prototype,"attrOldValue",2);m([S({attribute:"char-data",type:Boolean,reflect:!0})],Ur.prototype,"charData",2);m([S({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ur.prototype,"charDataOldValue",2);m([S({attribute:"child-list",type:Boolean,reflect:!0})],Ur.prototype,"childList",2);m([S({type:Boolean,reflect:!0})],Ur.prototype,"disabled",2);m([j("disabled")],Ur.prototype,"handleDisabledChange",1);m([j("attr",{waitUntilFirstUpdate:!0}),j("attr-old-value",{waitUntilFirstUpdate:!0}),j("char-data",{waitUntilFirstUpdate:!0}),j("char-data-old-value",{waitUntilFirstUpdate:!0}),j("childList",{waitUntilFirstUpdate:!0})],Ur.prototype,"handleChange",1);Ur=m([ee("sl-mutation-observer")],Ur);te($,"sl-mutation-observer",Ur,{onSlMutation:"sl-mutation"});var CS=ne`
  ${ue}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      inset-inline-start: -50%;
      width: 50%;
    }
    75%,
    100% {
      inset-inline-start: 100%;
      width: 50%;
    }
  }
`,Li=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return U`
      <div
        part="base"
        class=${ye({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate})}
        role="progressbar"
        title=${H(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${cr({width:`${this.value}%`})}>
          ${this.indeterminate?"":U`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              `}
        </div>
      </div>
    `}};Li.styles=CS;m([S({type:Number,reflect:!0})],Li.prototype,"value",2);m([S({type:Boolean,reflect:!0})],Li.prototype,"indeterminate",2);m([S()],Li.prototype,"label",2);m([S()],Li.prototype,"lang",2);Li=m([ee("sl-progress-bar")],Li);te($,"sl-progress-bar",Li,{});var FS=ne`
  ${ue}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    stroke-width: var(--track-width);
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transition: 0.35s stroke-dashoffset;
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,Zn=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("percentage")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,n=r-this.value/100*r;this.indicatorOffset=`${n}px`}}render(){return U`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <span part="label" class="progress-ring__label">
          <slot></slot>
        </span>
      </div>
    `}};Zn.styles=FS;m([J(".progress-ring__indicator")],Zn.prototype,"indicator",2);m([Te()],Zn.prototype,"indicatorOffset",2);m([S({type:Number,reflect:!0})],Zn.prototype,"value",2);m([S()],Zn.prototype,"label",2);m([S()],Zn.prototype,"lang",2);Zn=m([ee("sl-progress-ring")],Zn);te($,"sl-progress-ring",Zn,{});var ES=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .qr-code {
    position: relative;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`,Yb=null,Qb=class{};Qb.render=function(e,t){Yb(e,t)};self.QrCreator=Qb;(function(e){function t(s,u,l,c){var d={},h=e(l,u);h.u(s),h.J(),c=c||0;var f=h.h(),v=h.h()+2*c;return d.text=s,d.level=u,d.version=l,d.O=v,d.a=function(p,b){return p-=c,b-=c,0>p||p>=f||0>b||b>=f?!1:h.a(p,b)},d}function r(s,u,l,c,d,h,f,v,p,b){function g(y,w,x,k,E,T,z){y?(s.lineTo(w+T,x+z),s.arcTo(w,x,k,E,h)):s.lineTo(w,x)}f?s.moveTo(u+h,l):s.moveTo(u,l),g(v,c,l,c,d,-h,0),g(p,c,d,u,d,0,-h),g(b,u,d,u,l,h,0),g(f,u,l,c,l,0,h)}function n(s,u,l,c,d,h,f,v,p,b){function g(y,w,x,k){s.moveTo(y+x,w),s.lineTo(y,w),s.lineTo(y,w+k),s.arcTo(y,w,y+x,w,h)}f&&g(u,l,h,h),v&&g(c,l,-h,h),p&&g(c,d,-h,-h),b&&g(u,d,h,-h)}function i(s,u){var l=u.fill;if(typeof l=="string")s.fillStyle=l;else{var c=l.type,d=l.colorStops;if(l=l.position.map(f=>Math.round(f*u.size)),c==="linear-gradient")var h=s.createLinearGradient.apply(s,l);else if(c==="radial-gradient")h=s.createRadialGradient.apply(s,l);else throw Error("Unsupported fill");d.forEach(([f,v])=>{h.addColorStop(f,v)}),s.fillStyle=h}}function o(s,u){e:{var l=u.text,c=u.v,d=u.N,h=u.K,f=u.P;for(d=Math.max(1,d||1),h=Math.min(40,h||40);d<=h;d+=1)try{var v=t(l,c,d,f);break e}catch{}v=void 0}if(!v)return null;for(l=s.getContext("2d"),u.background&&(l.fillStyle=u.background,l.fillRect(u.left,u.top,u.size,u.size)),c=v.O,h=u.size/c,l.beginPath(),f=0;f<c;f+=1)for(d=0;d<c;d+=1){var p=l,b=u.left+d*h,g=u.top+f*h,y=f,w=d,x=v.a,k=b+h,E=g+h,T=y-1,z=y+1,_=w-1,P=w+1,D=Math.floor(Math.min(.5,Math.max(0,u.R))*h),I=x(y,w),O=x(T,_),K=x(T,w);T=x(T,P);var Z=x(y,P);P=x(z,P),w=x(z,w),z=x(z,_),y=x(y,_),b=Math.round(b),g=Math.round(g),k=Math.round(k),E=Math.round(E),I?r(p,b,g,k,E,D,!K&&!y,!K&&!Z,!w&&!Z,!w&&!y):n(p,b,g,k,E,D,K&&y&&O,K&&Z&&T,w&&Z&&P,w&&y&&z)}return i(l,u),l.fill(),s}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Yb=function(s,u){var l={};Object.assign(l,a,s),l.N=l.minVersion,l.K=l.maxVersion,l.v=l.ecLevel,l.left=l.left,l.top=l.top,l.size=l.size,l.fill=l.fill,l.background=l.background,l.text=l.text,l.R=l.radius,l.P=l.quiet,u instanceof HTMLCanvasElement?((u.width!==l.size||u.height!==l.size)&&(u.width=l.size,u.height=l.size),u.getContext("2d").clearRect(0,0,u.width,u.height),o(u,l)):(s=document.createElement("canvas"),s.width=l.size,s.height=l.size,l=o(s,l),u.appendChild(l))}})(function(){function e(u){var l=r.s(u);return{S:function(){return 4},b:function(){return l.length},write:function(c){for(var d=0;d<l.length;d+=1)c.put(l[d],8)}}}function t(){var u=[],l=0,c={B:function(){return u},c:function(d){return(u[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,h){for(var f=0;f<h;f+=1)c.m((d>>>h-f-1&1)==1)},f:function(){return l},m:function(d){var h=Math.floor(l/8);u.length<=h&&u.push(0),d&&(u[h]|=128>>>l%8),l+=1}};return c}function r(u,l){function c(y,w){for(var x=-1;7>=x;x+=1)if(!(-1>=y+x||v<=y+x))for(var k=-1;7>=k;k+=1)-1>=w+k||v<=w+k||(f[y+x][w+k]=0<=x&&6>=x&&(k==0||k==6)||0<=k&&6>=k&&(x==0||x==6)||2<=x&&4>=x&&2<=k&&4>=k)}function d(y,w){for(var x=v=4*u+17,k=Array(x),E=0;E<x;E+=1){k[E]=Array(x);for(var T=0;T<x;T+=1)k[E][T]=null}for(f=k,c(0,0),c(v-7,0),c(0,v-7),x=o.G(u),k=0;k<x.length;k+=1)for(E=0;E<x.length;E+=1){T=x[k];var z=x[E];if(f[T][z]==null)for(var _=-2;2>=_;_+=1)for(var P=-2;2>=P;P+=1)f[T+_][z+P]=_==-2||_==2||P==-2||P==2||_==0&&P==0}for(x=8;x<v-8;x+=1)f[x][6]==null&&(f[x][6]=x%2==0);for(x=8;x<v-8;x+=1)f[6][x]==null&&(f[6][x]=x%2==0);for(x=o.w(h<<3|w),k=0;15>k;k+=1)E=!y&&(x>>k&1)==1,f[6>k?k:8>k?k+1:v-15+k][8]=E,f[8][8>k?v-k-1:9>k?15-k:14-k]=E;if(f[v-8][8]=!y,7<=u){for(x=o.A(u),k=0;18>k;k+=1)E=!y&&(x>>k&1)==1,f[Math.floor(k/3)][k%3+v-8-3]=E;for(k=0;18>k;k+=1)E=!y&&(x>>k&1)==1,f[k%3+v-8-3][Math.floor(k/3)]=E}if(p==null){for(y=s.I(u,h),x=t(),k=0;k<b.length;k+=1)E=b[k],x.put(4,4),x.put(E.b(),o.f(4,u)),E.write(x);for(k=E=0;k<y.length;k+=1)E+=y[k].j;if(x.f()>8*E)throw Error("code length overflow. ("+x.f()+">"+8*E+")");for(x.f()+4<=8*E&&x.put(0,4);x.f()%8!=0;)x.m(!1);for(;!(x.f()>=8*E)&&(x.put(236,8),!(x.f()>=8*E));)x.put(17,8);var D=0;for(E=k=0,T=Array(y.length),z=Array(y.length),_=0;_<y.length;_+=1){var I=y[_].j,O=y[_].o-I;for(k=Math.max(k,I),E=Math.max(E,O),T[_]=Array(I),P=0;P<T[_].length;P+=1)T[_][P]=255&x.B()[P+D];for(D+=I,P=o.C(O),I=n(T[_],P.b()-1).l(P),z[_]=Array(P.b()-1),P=0;P<z[_].length;P+=1)O=P+I.b()-z[_].length,z[_][P]=0<=O?I.c(O):0}for(P=x=0;P<y.length;P+=1)x+=y[P].o;for(x=Array(x),P=D=0;P<k;P+=1)for(_=0;_<y.length;_+=1)P<T[_].length&&(x[D]=T[_][P],D+=1);for(P=0;P<E;P+=1)for(_=0;_<y.length;_+=1)P<z[_].length&&(x[D]=z[_][P],D+=1);p=x}for(y=p,x=-1,k=v-1,E=7,T=0,w=o.F(w),z=v-1;0<z;z-=2)for(z==6&&--z;;){for(_=0;2>_;_+=1)f[k][z-_]==null&&(P=!1,T<y.length&&(P=(y[T]>>>E&1)==1),w(k,z-_)&&(P=!P),f[k][z-_]=P,--E,E==-1&&(T+=1,E=7));if(k+=x,0>k||v<=k){k-=x,x=-x;break}}}var h=i[l],f=null,v=0,p=null,b=[],g={u:function(y){y=e(y),b.push(y),p=null},a:function(y,w){if(0>y||v<=y||0>w||v<=w)throw Error(y+","+w);return f[y][w]},h:function(){return v},J:function(){for(var y=0,w=0,x=0;8>x;x+=1){d(!0,x);var k=o.D(g);(x==0||y>k)&&(y=k,w=x)}d(!1,w)}};return g}function n(u,l){if(typeof u.length>"u")throw Error(u.length+"/"+l);var c=function(){for(var h=0;h<u.length&&u[h]==0;)h+=1;for(var f=Array(u.length-h+l),v=0;v<u.length-h;v+=1)f[v]=u[v+h];return f}(),d={c:function(h){return c[h]},b:function(){return c.length},multiply:function(h){for(var f=Array(d.b()+h.b()-1),v=0;v<d.b();v+=1)for(var p=0;p<h.b();p+=1)f[v+p]^=a.i(a.g(d.c(v))+a.g(h.c(p)));return n(f,0)},l:function(h){if(0>d.b()-h.b())return d;for(var f=a.g(d.c(0))-a.g(h.c(0)),v=Array(d.b()),p=0;p<d.b();p+=1)v[p]=d.c(p);for(p=0;p<h.b();p+=1)v[p]^=a.i(a.g(h.c(p))+f);return n(v,0).l(h)}};return d}r.s=function(u){for(var l=[],c=0;c<u.length;c++){var d=u.charCodeAt(c);128>d?l.push(d):2048>d?l.push(192|d>>6,128|d&63):55296>d||57344<=d?l.push(224|d>>12,128|d>>6&63,128|d&63):(c++,d=65536+((d&1023)<<10|u.charCodeAt(c)&1023),l.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return l};var i={L:1,M:0,Q:3,H:2},o=function(){function u(d){for(var h=0;d!=0;)h+=1,d>>>=1;return h}var l=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],c={w:function(d){for(var h=d<<10;0<=u(h)-u(1335);)h^=1335<<u(h)-u(1335);return(d<<10|h)^21522},A:function(d){for(var h=d<<12;0<=u(h)-u(7973);)h^=7973<<u(h)-u(7973);return d<<12|h},G:function(d){return l[d-1]},F:function(d){switch(d){case 0:return function(h,f){return(h+f)%2==0};case 1:return function(h){return h%2==0};case 2:return function(h,f){return f%3==0};case 3:return function(h,f){return(h+f)%3==0};case 4:return function(h,f){return(Math.floor(h/2)+Math.floor(f/3))%2==0};case 5:return function(h,f){return h*f%2+h*f%3==0};case 6:return function(h,f){return(h*f%2+h*f%3)%2==0};case 7:return function(h,f){return(h*f%3+(h+f)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var h=n([1],0),f=0;f<d;f+=1)h=h.multiply(n([1,a.i(f)],0));return h},f:function(d,h){if(d!=4||1>h||40<h)throw Error("mode: "+d+"; type: "+h);return 10>h?8:16},D:function(d){for(var h=d.h(),f=0,v=0;v<h;v+=1)for(var p=0;p<h;p+=1){for(var b=0,g=d.a(v,p),y=-1;1>=y;y+=1)if(!(0>v+y||h<=v+y))for(var w=-1;1>=w;w+=1)0>p+w||h<=p+w||(y!=0||w!=0)&&g==d.a(v+y,p+w)&&(b+=1);5<b&&(f+=3+b-5)}for(v=0;v<h-1;v+=1)for(p=0;p<h-1;p+=1)b=0,d.a(v,p)&&(b+=1),d.a(v+1,p)&&(b+=1),d.a(v,p+1)&&(b+=1),d.a(v+1,p+1)&&(b+=1),(b==0||b==4)&&(f+=3);for(v=0;v<h;v+=1)for(p=0;p<h-6;p+=1)d.a(v,p)&&!d.a(v,p+1)&&d.a(v,p+2)&&d.a(v,p+3)&&d.a(v,p+4)&&!d.a(v,p+5)&&d.a(v,p+6)&&(f+=40);for(p=0;p<h;p+=1)for(v=0;v<h-6;v+=1)d.a(v,p)&&!d.a(v+1,p)&&d.a(v+2,p)&&d.a(v+3,p)&&d.a(v+4,p)&&!d.a(v+5,p)&&d.a(v+6,p)&&(f+=40);for(p=b=0;p<h;p+=1)for(v=0;v<h;v+=1)d.a(v,p)&&(b+=1);return f+=Math.abs(100*b/h/h-50)/5*10}};return c}(),a=function(){for(var u=Array(256),l=Array(256),c=0;8>c;c+=1)u[c]=1<<c;for(c=8;256>c;c+=1)u[c]=u[c-4]^u[c-5]^u[c-6]^u[c-8];for(c=0;255>c;c+=1)l[u[c]]=c;return{g:function(d){if(1>d)throw Error("glog("+d+")");return l[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return u[d]}}}(),s=function(){function u(d,h){switch(h){case i.L:return l[4*(d-1)];case i.M:return l[4*(d-1)+1];case i.Q:return l[4*(d-1)+2];case i.H:return l[4*(d-1)+3]}}var l=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c={I:function(d,h){var f=u(d,h);if(typeof f>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+h);d=f.length/3,h=[];for(var v=0;v<d;v+=1)for(var p=f[3*v],b=f[3*v+1],g=f[3*v+2],y=0;y<p;y+=1){var w=g,x={};x.o=b,x.j=w,h.push(x)}return h}};return c}();return r}());var TS=QrCreator,br=class extends Q{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="#000",this.background="#fff",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){!this.hasUpdated||TS.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background==="transparent"?null:this.background,size:this.size*2},this.canvas)}render(){return U`
      <div
        class="qr-code"
        part="base"
        style=${cr({width:`${this.size}px`,height:`${this.size}px`})}
      >
        <canvas role="img" aria-label=${this.label.length>0?this.label:this.value}></canvas>
      </div>
    `}};br.styles=ES;m([J("canvas")],br.prototype,"canvas",2);m([S()],br.prototype,"value",2);m([S()],br.prototype,"label",2);m([S({type:Number})],br.prototype,"size",2);m([S()],br.prototype,"fill",2);m([S()],br.prototype,"background",2);m([S({type:Number})],br.prototype,"radius",2);m([S({attribute:"error-correction"})],br.prototype,"errorCorrection",2);m([j("background"),j("errorCorrection"),j("fill"),j("radius"),j("size"),j("value")],br.prototype,"generate",1);br=m([ee("sl-qr-code")],br);te($,"sl-qr-code",br,{});var zS=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input:focus-visible ~ .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled) .radio__input:focus-visible ~ .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,ar=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.checked=!1,this.invalid=!1,this.defaultChecked=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){const e=this.closest("sl-radio-group"),t=e==null?void 0:e.getAllRadios().filter(o=>!o.disabled),r=e==null?void 0:e.required,n=t==null?void 0:t.some(o=>o.checked),i=o=>o.shadowRoot.querySelector('input[type="radio"]');if(!e||!t)return!0;if(r&&!n){const o=i(t[0]);return o.required=!0,o.reportValidity()}t.forEach(o=>i(o).required=!1);for(const o of t)if(!i(o).reportValidity())return!1;return!0}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.hasUpdated&&B(this,"sl-change")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.hasUpdated&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}render(){return U`
      <label
        part="base"
        class=${ye({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus})}
      >
        <input
          class="radio__input"
          type="radio"
          name=${H(this.name)}
          value=${H(this.value)}
          .checked=${Ni(this.checked)}
          .disabled=${this.disabled}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part="control" class="radio__control">
          <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="currentColor">
                <circle cx="8" cy="8" r="3.42857143"></circle>
              </g>
            </g>
          </svg>
        </span>

        <span part="label" class="radio__label">
          <slot></slot>
        </span>
      </label>
    `}};ar.styles=zS;m([J(".radio__input")],ar.prototype,"input",2);m([Te()],ar.prototype,"hasFocus",2);m([S()],ar.prototype,"name",2);m([S()],ar.prototype,"value",2);m([S({type:Boolean,reflect:!0})],ar.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],ar.prototype,"checked",2);m([S({type:Boolean,reflect:!0})],ar.prototype,"invalid",2);m([Qn("checked")],ar.prototype,"defaultChecked",2);m([j("checked")],ar.prototype,"handleCheckedChange",1);m([j("disabled",{waitUntilFirstUpdate:!0})],ar.prototype,"handleDisabledChange",1);ar=m([ee("sl-radio")],ar);te($,"sl-radio",ar,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var bo=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,n=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[n]+this.unit,o=parseFloat((this.value/Math.pow(1e3,n)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};m([S({type:Number})],bo.prototype,"value",2);m([S()],bo.prototype,"unit",2);m([S()],bo.prototype,"display",2);m([S()],bo.prototype,"lang",2);bo=m([ee("sl-format-bytes")],bo);te($,"sl-format-bytes",bo,{});var Lt=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return U`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};m([S()],Lt.prototype,"date",2);m([S()],Lt.prototype,"lang",2);m([S()],Lt.prototype,"weekday",2);m([S()],Lt.prototype,"era",2);m([S()],Lt.prototype,"year",2);m([S()],Lt.prototype,"month",2);m([S()],Lt.prototype,"day",2);m([S()],Lt.prototype,"hour",2);m([S()],Lt.prototype,"minute",2);m([S()],Lt.prototype,"second",2);m([S({attribute:"time-zone-name"})],Lt.prototype,"timeZoneName",2);m([S({attribute:"time-zone"})],Lt.prototype,"timeZone",2);m([S({attribute:"hour-format"})],Lt.prototype,"hourFormat",2);Lt=m([ee("sl-format-date")],Lt);te($,"sl-format-date",Lt,{});var sr=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};m([S({type:Number})],sr.prototype,"value",2);m([S()],sr.prototype,"lang",2);m([S()],sr.prototype,"type",2);m([S({attribute:"no-grouping",type:Boolean})],sr.prototype,"noGrouping",2);m([S()],sr.prototype,"currency",2);m([S({attribute:"currency-display"})],sr.prototype,"currencyDisplay",2);m([S({attribute:"minimum-integer-digits",type:Number})],sr.prototype,"minimumIntegerDigits",2);m([S({attribute:"minimum-fraction-digits",type:Number})],sr.prototype,"minimumFractionDigits",2);m([S({attribute:"maximum-fraction-digits",type:Number})],sr.prototype,"maximumFractionDigits",2);m([S({attribute:"minimum-significant-digits",type:Number})],sr.prototype,"minimumSignificantDigits",2);m([S({attribute:"maximum-significant-digits",type:Number})],sr.prototype,"maximumSignificantDigits",2);sr=m([ee("sl-format-number")],sr);te($,"sl-format-number",sr,{});var Lu=te($,"sl-icon",Sn,{onSlLoad:"sl-load",onSlError:"sl-error"}),_S=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,lr=class extends Q{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){const e=!!this.href,t=e?Dc`a`:Dc`button`;return Is`
      <${t}
        part="base"
        class=${ye({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${H(e?void 0:this.disabled)}
        type=${H(e?void 0:"button")}
        href=${H(e?this.href:void 0)}
        target=${H(e?this.target:void 0)}
        download=${H(e?this.download:void 0)}
        rel=${H(e&&this.target?"noreferrer noopener":void 0)}
        role=${H(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${H(this.name)}
          library=${H(this.library)}
          src=${H(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};lr.styles=_S;m([Te()],lr.prototype,"hasFocus",2);m([J(".icon-button")],lr.prototype,"button",2);m([S()],lr.prototype,"name",2);m([S()],lr.prototype,"library",2);m([S()],lr.prototype,"src",2);m([S()],lr.prototype,"href",2);m([S()],lr.prototype,"target",2);m([S()],lr.prototype,"download",2);m([S()],lr.prototype,"label",2);m([S({type:Boolean,reflect:!0})],lr.prototype,"disabled",2);lr=m([ee("sl-icon-button")],lr);te($,"sl-icon-button",lr,{onSlBlur:"sl-blur",onSlFocus:"sl-focus"});var PS=ne`
  ${ue}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    pointer-events: none;
  }

  .image-comparer__before ::slotted(img),
  .image-comparer__after ::slotted(img),
  .image-comparer__before ::slotted(svg),
  .image-comparer__after ::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    transform: translateX(calc(var(--divider-width) / -2));
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-600);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ui=class extends Q{constructor(){super(...arguments),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect();e.preventDefault(),Ns(this.base,{onMove:r=>{this.position=parseFloat(dt(r/t*100,0,100).toFixed(2))},initialEvent:e})}handleKeyDown(e){if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const t=e.shiftKey?10:1;let r=this.position;e.preventDefault(),e.key==="ArrowLeft"&&(r-=t),e.key==="ArrowRight"&&(r+=t),e.key==="Home"&&(r=0),e.key==="End"&&(r=100),r=dt(r,0,100),this.position=r}}handlePositionChange(){B(this,"sl-change")}render(){return U`
      <div part="base" id="image-comparer" class="image-comparer" @keydown=${this.handleKeyDown}>
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${cr({clipPath:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${cr({left:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor" fill-rule="nonzero">
                  <path
                    d="m21.14 12.55-5.482 4.796c-.646.566-1.658.106-1.658-.753V7a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506h.001ZM2.341 12.55l5.482 4.796c.646.566 1.658.106 1.658-.753V7a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506h-.001Z"
                  />
                </g>
              </svg>
            </slot>
          </div>
        </div>
      </div>
    `}};Ui.styles=PS;m([J(".image-comparer")],Ui.prototype,"base",2);m([J(".image-comparer__handle")],Ui.prototype,"handle",2);m([S({type:Number,reflect:!0})],Ui.prototype,"position",2);m([j("position",{waitUntilFirstUpdate:!0})],Ui.prototype,"handlePositionChange",1);Ui=m([ee("sl-image-comparer")],Ui);te($,"sl-image-comparer",Ui,{onSlChange:"sl-change"});var AS=ne`
  ${ue}

  :host {
    display: block;
  }
`,Vi=class extends Q{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Zb(e,this.mode);if(e!==this.src)return;if(!t.ok){B(this,"sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),B(this,"sl-load")}catch{B(this,"sl-error",{detail:{status:-1}})}}render(){return U`<slot></slot>`}};Vi.styles=AS;m([S()],Vi.prototype,"src",2);m([S()],Vi.prototype,"mode",2);m([S({attribute:"allow-scripts",type:Boolean})],Vi.prototype,"allowScripts",2);m([j("src")],Vi.prototype,"handleSrcChange",1);Vi=m([ee("sl-include")],Vi);te($,"sl-include",Vi,{onSlLoad:"sl-load",onSlError:"sl-error"});var DS=ne`
  ${ue}
  ${vd}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,ge=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this),this.hasSlotController=new un(this,"help-text","label"),this.localize=new tt(this),this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.noSpinButtons=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value,B(this,"sl-input"),B(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleChange(){this.value=this.input.value,B(this,"sl-change")}handleClearClick(e){this.value="",B(this,"sl-clear"),B(this,"sl-input"),B(this,"sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleInput(){this.value=this.input.value,B(this,"sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{e.defaultPrevented||this.formSubmitController.submit()})}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return U`
      <div
        part="form-control"
        class=${ye({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ye({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":navigator.userAgent.includes("Firefox")})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.isPasswordVisible?"text":this.type}
              name=${H(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${H(this.placeholder)}
              minlength=${H(this.minlength)}
              maxlength=${H(this.maxlength)}
              min=${H(this.min)}
              max=${H(this.max)}
              step=${H(this.step)}
              .value=${Ni(this.value)}
              autocapitalize=${H(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${H(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${H(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${H(this.spellcheck)}
              pattern=${H(this.pattern)}
              enterkeyhint=${H(this.enterkeyhint)}
              inputmode=${H(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?U`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.togglePassword&&!this.disabled?U`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible?U`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:U`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ge.styles=DS;m([J(".input__control")],ge.prototype,"input",2);m([Te()],ge.prototype,"hasFocus",2);m([Te()],ge.prototype,"isPasswordVisible",2);m([S({reflect:!0})],ge.prototype,"type",2);m([S({reflect:!0})],ge.prototype,"size",2);m([S()],ge.prototype,"name",2);m([S()],ge.prototype,"value",2);m([Qn()],ge.prototype,"defaultValue",2);m([S({type:Boolean,reflect:!0})],ge.prototype,"filled",2);m([S({type:Boolean,reflect:!0})],ge.prototype,"pill",2);m([S()],ge.prototype,"label",2);m([S({attribute:"help-text"})],ge.prototype,"helpText",2);m([S({type:Boolean})],ge.prototype,"clearable",2);m([S({attribute:"toggle-password",type:Boolean})],ge.prototype,"togglePassword",2);m([S({attribute:"no-spin-buttons",type:Boolean})],ge.prototype,"noSpinButtons",2);m([S()],ge.prototype,"placeholder",2);m([S({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],ge.prototype,"readonly",2);m([S({type:Number})],ge.prototype,"minlength",2);m([S({type:Number})],ge.prototype,"maxlength",2);m([S()],ge.prototype,"min",2);m([S()],ge.prototype,"max",2);m([S({type:Number})],ge.prototype,"step",2);m([S()],ge.prototype,"pattern",2);m([S({type:Boolean,reflect:!0})],ge.prototype,"required",2);m([S({type:Boolean,reflect:!0})],ge.prototype,"invalid",2);m([S()],ge.prototype,"autocapitalize",2);m([S()],ge.prototype,"autocorrect",2);m([S()],ge.prototype,"autocomplete",2);m([S({type:Boolean})],ge.prototype,"autofocus",2);m([S()],ge.prototype,"enterkeyhint",2);m([S({type:Boolean})],ge.prototype,"spellcheck",2);m([S()],ge.prototype,"inputmode",2);m([j("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);m([j("value",{waitUntilFirstUpdate:!0})],ge.prototype,"handleValueChange",1);ge=m([ee("sl-input")],ge);var Ng=te($,"sl-input",ge,{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur"}),OS=ne`
  ${ue}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Bc=class extends Q{constructor(){super(...arguments),this.hasSlotController=new un(this,"footer","header","image")}render(){return U`
      <div
        part="base"
        class=${ye({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};Bc.styles=OS;Bc=m([ee("sl-card")],Bc);var Jb=te($,"sl-card",Bc,{}),RS=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ut=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,B(this,"sl-change")}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleStateChange(){this.invalid=!this.input.checkValidity()}render(){return U`
      <label
        part="base"
        class=${ye({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          name=${H(this.name)}
          value=${H(this.value)}
          .indeterminate=${Ni(this.indeterminate)}
          .checked=${Ni(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?U`
                <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(3.428571, 3.428571)">
                        <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                        <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
          ${!this.checked&&this.indeterminate?U`
                <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(2.285714, 6.857143)">
                        <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
        </span>

        <span part="label" class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `}};Ut.styles=RS;m([J('input[type="checkbox"]')],Ut.prototype,"input",2);m([Te()],Ut.prototype,"hasFocus",2);m([S()],Ut.prototype,"name",2);m([S()],Ut.prototype,"value",2);m([S({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],Ut.prototype,"required",2);m([S({type:Boolean,reflect:!0})],Ut.prototype,"checked",2);m([S({type:Boolean,reflect:!0})],Ut.prototype,"indeterminate",2);m([S({type:Boolean,reflect:!0})],Ut.prototype,"invalid",2);m([Qn("checked")],Ut.prototype,"defaultChecked",2);m([j("disabled",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleDisabledChange",1);m([j("checked",{waitUntilFirstUpdate:!0}),j("indeterminate",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleStateChange",1);Ut=m([ee("sl-checkbox")],Ut);te($,"sl-checkbox",Ut,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var BS=ne`
  ${ue}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) transform;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    transform: scale(1.5);
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,$b=Zi({"node_modules/color-name/index.js"(e,t){t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),NS=Zi({"node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(e,t){t.exports=function(n){return!n||typeof n=="string"?!1:n instanceof Array||Array.isArray(n)||n.length>=0&&(n.splice instanceof Function||Object.getOwnPropertyDescriptor(n,n.length-1)&&n.constructor.name!=="String")}}}),IS=Zi({"node_modules/simple-swizzle/index.js"(e,t){var r=NS(),n=Array.prototype.concat,i=Array.prototype.slice,o=t.exports=function(s){for(var u=[],l=0,c=s.length;l<c;l++){var d=s[l];r(d)?u=n.call(u,i.call(d)):u.push(d)}return u};o.wrap=function(a){return function(){return a(o(arguments))}}}}),MS=Zi({"node_modules/color-string/index.js"(e,t){var r=$b(),n=IS(),i=Object.hasOwnProperty,o={};for(a in r)i.call(r,a)&&(o[r[a]]=a);var a,s=t.exports={to:{},get:{}};s.get=function(c){var d=c.substring(0,3).toLowerCase(),h,f;switch(d){case"hsl":h=s.get.hsl(c),f="hsl";break;case"hwb":h=s.get.hwb(c),f="hwb";break;default:h=s.get.rgb(c),f="rgb";break}return h?{model:f,value:h}:null},s.get.rgb=function(c){if(!c)return null;var d=/^#([a-f0-9]{3,4})$/i,h=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,f=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,v=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,p=/^(\w+)$/,b=[0,0,0,1],g,y,w;if(g=c.match(h)){for(w=g[2],g=g[1],y=0;y<3;y++){var x=y*2;b[y]=parseInt(g.slice(x,x+2),16)}w&&(b[3]=parseInt(w,16)/255)}else if(g=c.match(d)){for(g=g[1],w=g[3],y=0;y<3;y++)b[y]=parseInt(g[y]+g[y],16);w&&(b[3]=parseInt(w+w,16)/255)}else if(g=c.match(f)){for(y=0;y<3;y++)b[y]=parseInt(g[y+1],0);g[4]&&(g[5]?b[3]=parseFloat(g[4])*.01:b[3]=parseFloat(g[4]))}else if(g=c.match(v)){for(y=0;y<3;y++)b[y]=Math.round(parseFloat(g[y+1])*2.55);g[4]&&(g[5]?b[3]=parseFloat(g[4])*.01:b[3]=parseFloat(g[4]))}else return(g=c.match(p))?g[1]==="transparent"?[0,0,0,0]:i.call(r,g[1])?(b=r[g[1]],b[3]=1,b):null:null;for(y=0;y<3;y++)b[y]=u(b[y],0,255);return b[3]=u(b[3],0,1),b},s.get.hsl=function(c){if(!c)return null;var d=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,h=c.match(d);if(h){var f=parseFloat(h[4]),v=(parseFloat(h[1])%360+360)%360,p=u(parseFloat(h[2]),0,100),b=u(parseFloat(h[3]),0,100),g=u(isNaN(f)?1:f,0,1);return[v,p,b,g]}return null},s.get.hwb=function(c){if(!c)return null;var d=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,h=c.match(d);if(h){var f=parseFloat(h[4]),v=(parseFloat(h[1])%360+360)%360,p=u(parseFloat(h[2]),0,100),b=u(parseFloat(h[3]),0,100),g=u(isNaN(f)?1:f,0,1);return[v,p,b,g]}return null},s.to.hex=function(){var c=n(arguments);return"#"+l(c[0])+l(c[1])+l(c[2])+(c[3]<1?l(Math.round(c[3]*255)):"")},s.to.rgb=function(){var c=n(arguments);return c.length<4||c[3]===1?"rgb("+Math.round(c[0])+", "+Math.round(c[1])+", "+Math.round(c[2])+")":"rgba("+Math.round(c[0])+", "+Math.round(c[1])+", "+Math.round(c[2])+", "+c[3]+")"},s.to.rgb.percent=function(){var c=n(arguments),d=Math.round(c[0]/255*100),h=Math.round(c[1]/255*100),f=Math.round(c[2]/255*100);return c.length<4||c[3]===1?"rgb("+d+"%, "+h+"%, "+f+"%)":"rgba("+d+"%, "+h+"%, "+f+"%, "+c[3]+")"},s.to.hsl=function(){var c=n(arguments);return c.length<4||c[3]===1?"hsl("+c[0]+", "+c[1]+"%, "+c[2]+"%)":"hsla("+c[0]+", "+c[1]+"%, "+c[2]+"%, "+c[3]+")"},s.to.hwb=function(){var c=n(arguments),d="";return c.length>=4&&c[3]!==1&&(d=", "+c[3]),"hwb("+c[0]+", "+c[1]+"%, "+c[2]+"%"+d+")"},s.to.keyword=function(c){return o[c.slice(0,3)]};function u(c,d,h){return Math.min(Math.max(d,c),h)}function l(c){var d=Math.round(c).toString(16).toUpperCase();return d.length<2?"0"+d:d}}}),ew=Zi({"node_modules/color-convert/conversions.js"(e,t){var r=$b(),n={};for(const a of Object.keys(r))n[r[a]]=a;var i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=i;for(const a of Object.keys(i)){if(!("channels"in i[a]))throw new Error("missing channels property: "+a);if(!("labels"in i[a]))throw new Error("missing channel labels property: "+a);if(i[a].labels.length!==i[a].channels)throw new Error("channel and label counts mismatch: "+a);const{channels:s,labels:u}=i[a];delete i[a].channels,delete i[a].labels,Object.defineProperty(i[a],"channels",{value:s}),Object.defineProperty(i[a],"labels",{value:u})}i.rgb.hsl=function(a){const s=a[0]/255,u=a[1]/255,l=a[2]/255,c=Math.min(s,u,l),d=Math.max(s,u,l),h=d-c;let f,v;d===c?f=0:s===d?f=(u-l)/h:u===d?f=2+(l-s)/h:l===d&&(f=4+(s-u)/h),f=Math.min(f*60,360),f<0&&(f+=360);const p=(c+d)/2;return d===c?v=0:p<=.5?v=h/(d+c):v=h/(2-d-c),[f,v*100,p*100]},i.rgb.hsv=function(a){let s,u,l,c,d;const h=a[0]/255,f=a[1]/255,v=a[2]/255,p=Math.max(h,f,v),b=p-Math.min(h,f,v),g=function(y){return(p-y)/6/b+1/2};return b===0?(c=0,d=0):(d=b/p,s=g(h),u=g(f),l=g(v),h===p?c=l-u:f===p?c=1/3+s-l:v===p&&(c=2/3+u-s),c<0?c+=1:c>1&&(c-=1)),[c*360,d*100,p*100]},i.rgb.hwb=function(a){const s=a[0],u=a[1];let l=a[2];const c=i.rgb.hsl(a)[0],d=1/255*Math.min(s,Math.min(u,l));return l=1-1/255*Math.max(s,Math.max(u,l)),[c,d*100,l*100]},i.rgb.cmyk=function(a){const s=a[0]/255,u=a[1]/255,l=a[2]/255,c=Math.min(1-s,1-u,1-l),d=(1-s-c)/(1-c)||0,h=(1-u-c)/(1-c)||0,f=(1-l-c)/(1-c)||0;return[d*100,h*100,f*100,c*100]};function o(a,s){return(a[0]-s[0])**2+(a[1]-s[1])**2+(a[2]-s[2])**2}i.rgb.keyword=function(a){const s=n[a];if(s)return s;let u=1/0,l;for(const c of Object.keys(r)){const d=r[c],h=o(a,d);h<u&&(u=h,l=c)}return l},i.keyword.rgb=function(a){return r[a]},i.rgb.xyz=function(a){let s=a[0]/255,u=a[1]/255,l=a[2]/255;s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,u=u>.04045?((u+.055)/1.055)**2.4:u/12.92,l=l>.04045?((l+.055)/1.055)**2.4:l/12.92;const c=s*.4124+u*.3576+l*.1805,d=s*.2126+u*.7152+l*.0722,h=s*.0193+u*.1192+l*.9505;return[c*100,d*100,h*100]},i.rgb.lab=function(a){const s=i.rgb.xyz(a);let u=s[0],l=s[1],c=s[2];u/=95.047,l/=100,c/=108.883,u=u>.008856?u**(1/3):7.787*u+16/116,l=l>.008856?l**(1/3):7.787*l+16/116,c=c>.008856?c**(1/3):7.787*c+16/116;const d=116*l-16,h=500*(u-l),f=200*(l-c);return[d,h,f]},i.hsl.rgb=function(a){const s=a[0]/360,u=a[1]/100,l=a[2]/100;let c,d,h;if(u===0)return h=l*255,[h,h,h];l<.5?c=l*(1+u):c=l+u-l*u;const f=2*l-c,v=[0,0,0];for(let p=0;p<3;p++)d=s+1/3*-(p-1),d<0&&d++,d>1&&d--,6*d<1?h=f+(c-f)*6*d:2*d<1?h=c:3*d<2?h=f+(c-f)*(2/3-d)*6:h=f,v[p]=h*255;return v},i.hsl.hsv=function(a){const s=a[0];let u=a[1]/100,l=a[2]/100,c=u;const d=Math.max(l,.01);l*=2,u*=l<=1?l:2-l,c*=d<=1?d:2-d;const h=(l+u)/2,f=l===0?2*c/(d+c):2*u/(l+u);return[s,f*100,h*100]},i.hsv.rgb=function(a){const s=a[0]/60,u=a[1]/100;let l=a[2]/100;const c=Math.floor(s)%6,d=s-Math.floor(s),h=255*l*(1-u),f=255*l*(1-u*d),v=255*l*(1-u*(1-d));switch(l*=255,c){case 0:return[l,v,h];case 1:return[f,l,h];case 2:return[h,l,v];case 3:return[h,f,l];case 4:return[v,h,l];case 5:return[l,h,f]}},i.hsv.hsl=function(a){const s=a[0],u=a[1]/100,l=a[2]/100,c=Math.max(l,.01);let d,h;h=(2-u)*l;const f=(2-u)*c;return d=u*c,d/=f<=1?f:2-f,d=d||0,h/=2,[s,d*100,h*100]},i.hwb.rgb=function(a){const s=a[0]/360;let u=a[1]/100,l=a[2]/100;const c=u+l;let d;c>1&&(u/=c,l/=c);const h=Math.floor(6*s),f=1-l;d=6*s-h,(h&1)!==0&&(d=1-d);const v=u+d*(f-u);let p,b,g;switch(h){default:case 6:case 0:p=f,b=v,g=u;break;case 1:p=v,b=f,g=u;break;case 2:p=u,b=f,g=v;break;case 3:p=u,b=v,g=f;break;case 4:p=v,b=u,g=f;break;case 5:p=f,b=u,g=v;break}return[p*255,b*255,g*255]},i.cmyk.rgb=function(a){const s=a[0]/100,u=a[1]/100,l=a[2]/100,c=a[3]/100,d=1-Math.min(1,s*(1-c)+c),h=1-Math.min(1,u*(1-c)+c),f=1-Math.min(1,l*(1-c)+c);return[d*255,h*255,f*255]},i.xyz.rgb=function(a){const s=a[0]/100,u=a[1]/100,l=a[2]/100;let c,d,h;return c=s*3.2406+u*-1.5372+l*-.4986,d=s*-.9689+u*1.8758+l*.0415,h=s*.0557+u*-.204+l*1.057,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,d=d>.0031308?1.055*d**(1/2.4)-.055:d*12.92,h=h>.0031308?1.055*h**(1/2.4)-.055:h*12.92,c=Math.min(Math.max(0,c),1),d=Math.min(Math.max(0,d),1),h=Math.min(Math.max(0,h),1),[c*255,d*255,h*255]},i.xyz.lab=function(a){let s=a[0],u=a[1],l=a[2];s/=95.047,u/=100,l/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,u=u>.008856?u**(1/3):7.787*u+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;const c=116*u-16,d=500*(s-u),h=200*(u-l);return[c,d,h]},i.lab.xyz=function(a){const s=a[0],u=a[1],l=a[2];let c,d,h;d=(s+16)/116,c=u/500+d,h=d-l/200;const f=d**3,v=c**3,p=h**3;return d=f>.008856?f:(d-16/116)/7.787,c=v>.008856?v:(c-16/116)/7.787,h=p>.008856?p:(h-16/116)/7.787,c*=95.047,d*=100,h*=108.883,[c,d,h]},i.lab.lch=function(a){const s=a[0],u=a[1],l=a[2];let c;c=Math.atan2(l,u)*360/2/Math.PI,c<0&&(c+=360);const h=Math.sqrt(u*u+l*l);return[s,h,c]},i.lch.lab=function(a){const s=a[0],u=a[1],c=a[2]/360*2*Math.PI,d=u*Math.cos(c),h=u*Math.sin(c);return[s,d,h]},i.rgb.ansi16=function(a,s=null){const[u,l,c]=a;let d=s===null?i.rgb.hsv(a)[2]:s;if(d=Math.round(d/50),d===0)return 30;let h=30+(Math.round(c/255)<<2|Math.round(l/255)<<1|Math.round(u/255));return d===2&&(h+=60),h},i.hsv.ansi16=function(a){return i.rgb.ansi16(i.hsv.rgb(a),a[2])},i.rgb.ansi256=function(a){const s=a[0],u=a[1],l=a[2];return s===u&&u===l?s<8?16:s>248?231:Math.round((s-8)/247*24)+232:16+36*Math.round(s/255*5)+6*Math.round(u/255*5)+Math.round(l/255*5)},i.ansi16.rgb=function(a){let s=a%10;if(s===0||s===7)return a>50&&(s+=3.5),s=s/10.5*255,[s,s,s];const u=(~~(a>50)+1)*.5,l=(s&1)*u*255,c=(s>>1&1)*u*255,d=(s>>2&1)*u*255;return[l,c,d]},i.ansi256.rgb=function(a){if(a>=232){const d=(a-232)*10+8;return[d,d,d]}a-=16;let s;const u=Math.floor(a/36)/5*255,l=Math.floor((s=a%36)/6)/5*255,c=s%6/5*255;return[u,l,c]},i.rgb.hex=function(a){const u=(((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255)).toString(16).toUpperCase();return"000000".substring(u.length)+u},i.hex.rgb=function(a){const s=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!s)return[0,0,0];let u=s[0];s[0].length===3&&(u=u.split("").map(f=>f+f).join(""));const l=parseInt(u,16),c=l>>16&255,d=l>>8&255,h=l&255;return[c,d,h]},i.rgb.hcg=function(a){const s=a[0]/255,u=a[1]/255,l=a[2]/255,c=Math.max(Math.max(s,u),l),d=Math.min(Math.min(s,u),l),h=c-d;let f,v;return h<1?f=d/(1-h):f=0,h<=0?v=0:c===s?v=(u-l)/h%6:c===u?v=2+(l-s)/h:v=4+(s-u)/h,v/=6,v%=1,[v*360,h*100,f*100]},i.hsl.hcg=function(a){const s=a[1]/100,u=a[2]/100,l=u<.5?2*s*u:2*s*(1-u);let c=0;return l<1&&(c=(u-.5*l)/(1-l)),[a[0],l*100,c*100]},i.hsv.hcg=function(a){const s=a[1]/100,u=a[2]/100,l=s*u;let c=0;return l<1&&(c=(u-l)/(1-l)),[a[0],l*100,c*100]},i.hcg.rgb=function(a){const s=a[0]/360,u=a[1]/100,l=a[2]/100;if(u===0)return[l*255,l*255,l*255];const c=[0,0,0],d=s%1*6,h=d%1,f=1-h;let v=0;switch(Math.floor(d)){case 0:c[0]=1,c[1]=h,c[2]=0;break;case 1:c[0]=f,c[1]=1,c[2]=0;break;case 2:c[0]=0,c[1]=1,c[2]=h;break;case 3:c[0]=0,c[1]=f,c[2]=1;break;case 4:c[0]=h,c[1]=0,c[2]=1;break;default:c[0]=1,c[1]=0,c[2]=f}return v=(1-u)*l,[(u*c[0]+v)*255,(u*c[1]+v)*255,(u*c[2]+v)*255]},i.hcg.hsv=function(a){const s=a[1]/100,u=a[2]/100,l=s+u*(1-s);let c=0;return l>0&&(c=s/l),[a[0],c*100,l*100]},i.hcg.hsl=function(a){const s=a[1]/100,l=a[2]/100*(1-s)+.5*s;let c=0;return l>0&&l<.5?c=s/(2*l):l>=.5&&l<1&&(c=s/(2*(1-l))),[a[0],c*100,l*100]},i.hcg.hwb=function(a){const s=a[1]/100,u=a[2]/100,l=s+u*(1-s);return[a[0],(l-s)*100,(1-l)*100]},i.hwb.hcg=function(a){const s=a[1]/100,u=a[2]/100,l=1-u,c=l-s;let d=0;return c<1&&(d=(l-c)/(1-c)),[a[0],c*100,d*100]},i.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]},i.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]},i.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]},i.gray.hsl=function(a){return[0,0,a[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(a){return[0,100,a[0]]},i.gray.cmyk=function(a){return[0,0,0,a[0]]},i.gray.lab=function(a){return[a[0],0,0]},i.gray.hex=function(a){const s=Math.round(a[0]/100*255)&255,l=((s<<16)+(s<<8)+s).toString(16).toUpperCase();return"000000".substring(l.length)+l},i.rgb.gray=function(a){return[(a[0]+a[1]+a[2])/3/255*100]}}}),LS=Zi({"node_modules/color-convert/route.js"(e,t){var r=ew();function n(){const s={},u=Object.keys(r);for(let l=u.length,c=0;c<l;c++)s[u[c]]={distance:-1,parent:null};return s}function i(s){const u=n(),l=[s];for(u[s].distance=0;l.length;){const c=l.pop(),d=Object.keys(r[c]);for(let h=d.length,f=0;f<h;f++){const v=d[f],p=u[v];p.distance===-1&&(p.distance=u[c].distance+1,p.parent=c,l.unshift(v))}}return u}function o(s,u){return function(l){return u(s(l))}}function a(s,u){const l=[u[s].parent,s];let c=r[u[s].parent][s],d=u[s].parent;for(;u[d].parent;)l.unshift(u[d].parent),c=o(r[u[d].parent][d],c),d=u[d].parent;return c.conversion=l,c}t.exports=function(s){const u=i(s),l={},c=Object.keys(u);for(let d=c.length,h=0;h<d;h++){const f=c[h];u[f].parent!==null&&(l[f]=a(f,u))}return l}}}),US=Zi({"node_modules/color-convert/index.js"(e,t){var r=ew(),n=LS(),i={},o=Object.keys(r);function a(u){const l=function(...c){const d=c[0];return d==null?d:(d.length>1&&(c=d),u(c))};return"conversion"in u&&(l.conversion=u.conversion),l}function s(u){const l=function(...c){const d=c[0];if(d==null)return d;d.length>1&&(c=d);const h=u(c);if(typeof h=="object")for(let f=h.length,v=0;v<f;v++)h[v]=Math.round(h[v]);return h};return"conversion"in u&&(l.conversion=u.conversion),l}o.forEach(u=>{i[u]={},Object.defineProperty(i[u],"channels",{value:r[u].channels}),Object.defineProperty(i[u],"labels",{value:r[u].labels});const l=n(u);Object.keys(l).forEach(d=>{const h=l[d];i[u][d]=s(h),i[u][d].raw=a(h)})}),t.exports=i}}),VS=Zi({"node_modules/color/index.js"(e,t){var r=MS(),n=US(),i=[].slice,o=["keyword","gray","hex"],a={};for(const p of Object.keys(n))a[i.call(n[p].labels).sort().join("")]=p;var s={};function u(p,b){if(!(this instanceof u))return new u(p,b);if(b&&b in o&&(b=null),b&&!(b in n))throw new Error("Unknown model: "+b);let g,y;if(p==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(p instanceof u)this.model=p.model,this.color=p.color.slice(),this.valpha=p.valpha;else if(typeof p=="string"){const w=r.get(p);if(w===null)throw new Error("Unable to parse color from string: "+p);this.model=w.model,y=n[this.model].channels,this.color=w.value.slice(0,y),this.valpha=typeof w.value[y]=="number"?w.value[y]:1}else if(p.length>0){this.model=b||"rgb",y=n[this.model].channels;const w=i.call(p,0,y);this.color=v(w,y),this.valpha=typeof p[y]=="number"?p[y]:1}else if(typeof p=="number")this.model="rgb",this.color=[p>>16&255,p>>8&255,p&255],this.valpha=1;else{this.valpha=1;const w=Object.keys(p);"alpha"in p&&(w.splice(w.indexOf("alpha"),1),this.valpha=typeof p.alpha=="number"?p.alpha:0);const x=w.sort().join("");if(!(x in a))throw new Error("Unable to parse color from object: "+JSON.stringify(p));this.model=a[x];const k=n[this.model].labels,E=[];for(g=0;g<k.length;g++)E.push(p[k[g]]);this.color=v(E)}if(s[this.model])for(y=n[this.model].channels,g=0;g<y;g++){const w=s[this.model][g];w&&(this.color[g]=w(this.color[g]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}u.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(p){let b=this.model in r.to?this:this.rgb();b=b.round(typeof p=="number"?p:1);const g=b.valpha===1?b.color:b.color.concat(this.valpha);return r.to[b.model](g)},percentString(p){const b=this.rgb().round(typeof p=="number"?p:1),g=b.valpha===1?b.color:b.color.concat(this.valpha);return r.to.rgb.percent(g)},array(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object(){const p={},b=n[this.model].channels,g=n[this.model].labels;for(let y=0;y<b;y++)p[g[y]]=this.color[y];return this.valpha!==1&&(p.alpha=this.valpha),p},unitArray(){const p=this.rgb().color;return p[0]/=255,p[1]/=255,p[2]/=255,this.valpha!==1&&p.push(this.valpha),p},unitObject(){const p=this.rgb().object();return p.r/=255,p.g/=255,p.b/=255,this.valpha!==1&&(p.alpha=this.valpha),p},round(p){return p=Math.max(p||0,0),new u(this.color.map(c(p)).concat(this.valpha),this.model)},alpha(p){return arguments.length>0?new u(this.color.concat(Math.max(0,Math.min(1,p))),this.model):this.valpha},red:d("rgb",0,h(255)),green:d("rgb",1,h(255)),blue:d("rgb",2,h(255)),hue:d(["hsl","hsv","hsl","hwb","hcg"],0,p=>(p%360+360)%360),saturationl:d("hsl",1,h(100)),lightness:d("hsl",2,h(100)),saturationv:d("hsv",1,h(100)),value:d("hsv",2,h(100)),chroma:d("hcg",1,h(100)),gray:d("hcg",2,h(100)),white:d("hwb",1,h(100)),wblack:d("hwb",2,h(100)),cyan:d("cmyk",0,h(100)),magenta:d("cmyk",1,h(100)),yellow:d("cmyk",2,h(100)),black:d("cmyk",3,h(100)),x:d("xyz",0,h(100)),y:d("xyz",1,h(100)),z:d("xyz",2,h(100)),l:d("lab",0,h(100)),a:d("lab",1),b:d("lab",2),keyword(p){return arguments.length>0?new u(p):n[this.model].keyword(this.color)},hex(p){return arguments.length>0?new u(p):r.to.hex(this.rgb().round().color)},hexa(p){if(arguments.length>0)return new u(p);const b=this.rgb().round().color;let g=Math.round(this.valpha*255).toString(16).toUpperCase();return g.length===1&&(g="0"+g),r.to.hex(b)+g},rgbNumber(){const p=this.rgb().color;return(p[0]&255)<<16|(p[1]&255)<<8|p[2]&255},luminosity(){const p=this.rgb().color,b=[];for(const[g,y]of p.entries()){const w=y/255;b[g]=w<=.03928?w/12.92:((w+.055)/1.055)**2.4}return .2126*b[0]+.7152*b[1]+.0722*b[2]},contrast(p){const b=this.luminosity(),g=p.luminosity();return b>g?(b+.05)/(g+.05):(g+.05)/(b+.05)},level(p){const b=this.contrast(p);return b>=7.1?"AAA":b>=4.5?"AA":""},isDark(){const p=this.rgb().color;return(p[0]*299+p[1]*587+p[2]*114)/1e3<128},isLight(){return!this.isDark()},negate(){const p=this.rgb();for(let b=0;b<3;b++)p.color[b]=255-p.color[b];return p},lighten(p){const b=this.hsl();return b.color[2]+=b.color[2]*p,b},darken(p){const b=this.hsl();return b.color[2]-=b.color[2]*p,b},saturate(p){const b=this.hsl();return b.color[1]+=b.color[1]*p,b},desaturate(p){const b=this.hsl();return b.color[1]-=b.color[1]*p,b},whiten(p){const b=this.hwb();return b.color[1]+=b.color[1]*p,b},blacken(p){const b=this.hwb();return b.color[2]+=b.color[2]*p,b},grayscale(){const p=this.rgb().color,b=p[0]*.3+p[1]*.59+p[2]*.11;return u.rgb(b,b,b)},fade(p){return this.alpha(this.valpha-this.valpha*p)},opaquer(p){return this.alpha(this.valpha+this.valpha*p)},rotate(p){const b=this.hsl();let g=b.color[0];return g=(g+p)%360,g=g<0?360+g:g,b.color[0]=g,b},mix(p,b){if(!p||!p.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof p);const g=p.rgb(),y=this.rgb(),w=b===void 0?.5:b,x=2*w-1,k=g.alpha()-y.alpha(),E=((x*k===-1?x:(x+k)/(1+x*k))+1)/2,T=1-E;return u.rgb(E*g.red()+T*y.red(),E*g.green()+T*y.green(),E*g.blue()+T*y.blue(),g.alpha()*w+y.alpha()*(1-w))}};for(const p of Object.keys(n)){if(o.includes(p))continue;const b=n[p].channels;u.prototype[p]=function(){if(this.model===p)return new u(this);if(arguments.length>0)return new u(arguments,p);const g=typeof arguments[b]=="number"?b:this.valpha;return new u(f(n[this.model][p].raw(this.color)).concat(g),p)},u[p]=function(g){return typeof g=="number"&&(g=v(i.call(arguments),b)),new u(g,p)}}function l(p,b){return Number(p.toFixed(b))}function c(p){return function(b){return l(b,p)}}function d(p,b,g){p=Array.isArray(p)?p:[p];for(const y of p)(s[y]||(s[y]=[]))[b]=g;return p=p[0],function(y){let w;return arguments.length>0?(g&&(y=g(y)),w=this[p](),w.color[b]=y,w):(w=this[p]().color[b],g&&(w=g(w)),w)}}function h(p){return function(b){return Math.max(0,Math.min(p,b))}}function f(p){return Array.isArray(p)?p:[p]}function v(p,b){for(let g=0;g<b;g++)typeof p[g]!="number"&&(p[g]=0);return p}t.exports=u}}),jS=f3(VS(),1),Ig="EyeDropper"in window,Ae=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this),this.isSafeValue=!1,this.localize=new tt(this),this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.lightness=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.invalid=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}connectedCallback(){super.connectedCallback(),this.value?(this.setColor(this.value),this.inputValue=this.value,this.lastValueEmitted=this.value,this.syncValues()):(this.isEmpty=!0,this.inputValue="",this.lastValueEmitted="")}getFormattedValue(e="hex"){const t=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;default:return""}}getBrightness(e){return dt(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return dt((200-this.saturation)*e/100*5/10,0,100)}reportValidity(){return!this.inline&&this.input.invalid?new Promise(e=>{this.dropdown.addEventListener("sl-after-show",()=>{this.input.reportValidity(),e()},{once:!0}),this.dropdown.show()}):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=this.input.invalid}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t]}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();r.focus(),e.preventDefault(),Ns(t,{onMove:i=>{this.alpha=dt(i/n*100,0,100),this.syncValues()},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();r.focus(),e.preventDefault(),Ns(t,{onMove:i=>{this.hue=dt(i/n*360,0,360),this.syncValues()},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:n,height:i}=t.getBoundingClientRect();r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Ns(t,{onMove:(o,a)=>{this.saturation=dt(o/n*100,0,100),this.brightness=dt(100-a/i*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=dt(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=dt(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues())}handleHueKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=dt(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=dt(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues())}handleGridKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=dt(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=dt(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=dt(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=dt(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}handleInputChange(e){const t=e.target;this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",e.stopPropagation()}handleInputKeyDown(e){e.key==="Enter"&&(this.input.value?(this.setColor(this.input.value),this.input.value=this.value,setTimeout(()=>this.input.select())):this.hue=0)}normalizeColorString(e){if(/rgba?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}if(/hsla?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`hsla(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}return/^[0-9a-f]+$/i.test(e)?`#${e}`:e}parseColor(e){let t;e=this.normalizeColorString(e);try{t=(0,jS.default)(e)}catch{return null}const r=t.hsl(),n={h:r.hue(),s:r.saturationl(),l:r.lightness(),a:r.alpha()},i=t.rgb(),o={r:i.red(),g:i.green(),b:i.blue(),a:i.alpha()},a={r:cu(o.r),g:cu(o.g),b:cu(o.b),a:cu(o.a*255)};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(`#${a.r}${a.g}${a.b}`),hexa:this.setLetterCase(`#${a.r}${a.g}${a.b}${a.a}`)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsla.h,this.saturation=t.hsla.s,this.lightness=t.hsla.l,this.brightness=this.getBrightness(t.hsla.l),this.alpha=this.opacity?t.hsla.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Ig)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=100,this.brightness=100,this.lightness=this.getLightness(this.brightness),this.alpha=100),!this.isSafeValue&&e!==void 0){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsla.h,this.saturation=r.hsla.s,this.lightness=r.hsla.l,this.brightness=this.getBrightness(r.hsla.l),this.alpha=r.hsla.a*100):this.inputValue=e}this.value!==this.lastValueEmitted&&(B(this,"sl-change"),this.lastValueEmitted=this.value)}render(){const e=this.saturation,t=100-this.brightness,r=U`
      <div
        part="base"
        class=${ye({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?U`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${cr({backgroundColor:`hsl(${this.hue}deg, 100%, 50%)`})}
          @mousedown=${this.handleGridDrag}
          @touchstart=${this.handleGridDrag}
        >
          <span
            part="grid-handle"
            class=${ye({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${cr({top:`${t}%`,left:`${e}%`,backgroundColor:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`})}
            role="application"
            aria-label="HSL"
            tabindex=${H(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @mousedown=${this.handleHueDrag}
              @touchstart=${this.handleHueDrag}
            >
              <span
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${cr({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${H(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?U`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @mousedown="${this.handleAlphaDrag}"
                    @touchstart="${this.handleAlphaDrag}"
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${cr({backgroundImage:`linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${cr({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${H(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${cr({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${Ni(this.isEmpty?"":this.inputValue)}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":U`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Ig?U`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${this.swatches.length>0?U`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(n=>U`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${H(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${n}
                      @click=${()=>!this.disabled&&this.setColor(n)}
                      @keydown=${i=>!this.disabled&&i.key==="Enter"&&this.setColor(n)}
                    >
                      <div class="color-picker__swatch-color" style=${cr({backgroundColor:n})}></div>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `;return this.inline?r:U`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${ye({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-picker__transparent-bg":!0})}
          style=${cr({color:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};Ae.styles=BS;m([J('[part="input"]')],Ae.prototype,"input",2);m([J('[part="preview"]')],Ae.prototype,"previewButton",2);m([J(".color-dropdown")],Ae.prototype,"dropdown",2);m([Te()],Ae.prototype,"isDraggingGridHandle",2);m([Te()],Ae.prototype,"isEmpty",2);m([Te()],Ae.prototype,"inputValue",2);m([Te()],Ae.prototype,"hue",2);m([Te()],Ae.prototype,"saturation",2);m([Te()],Ae.prototype,"lightness",2);m([Te()],Ae.prototype,"brightness",2);m([Te()],Ae.prototype,"alpha",2);m([S()],Ae.prototype,"value",2);m([Qn()],Ae.prototype,"defaultValue",2);m([S()],Ae.prototype,"label",2);m([S()],Ae.prototype,"format",2);m([S({type:Boolean,reflect:!0})],Ae.prototype,"inline",2);m([S()],Ae.prototype,"size",2);m([S({attribute:"no-format-toggle",type:Boolean})],Ae.prototype,"noFormatToggle",2);m([S()],Ae.prototype,"name",2);m([S({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],Ae.prototype,"invalid",2);m([S({type:Boolean})],Ae.prototype,"hoist",2);m([S({type:Boolean})],Ae.prototype,"opacity",2);m([S({type:Boolean})],Ae.prototype,"uppercase",2);m([S({attribute:!1})],Ae.prototype,"swatches",2);m([S()],Ae.prototype,"lang",2);m([j("format",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleFormatChange",1);m([j("opacity")],Ae.prototype,"handleOpacityChange",1);m([j("value")],Ae.prototype,"handleValueChange",1);Ae=m([ee("sl-color-picker")],Ae);function cu(e){const t=Math.round(e).toString(16);return t.length===1?`0${t}`:t}te($,"sl-color-picker",Ae,{onSlChange:"sl-change"});var HS=ne`
  ${ue}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) transform ease;
  }

  .details--open .details__summary-icon {
    transform: rotate(90deg);
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    padding: var(--sl-spacing-medium);
  }
`,an=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!(this.open||this.disabled))return this.open=!0,Lr(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Lr(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){B(this,"sl-show"),await It(this.body),this.body.hidden=!1;const{keyframes:e,options:t}=St(this,"details.show",{dir:this.localize.dir()});await kt(this.body,Pg(e,this.body.scrollHeight),t),this.body.style.height="auto",B(this,"sl-after-show")}else{B(this,"sl-hide"),await It(this.body);const{keyframes:e,options:t}=St(this,"details.hide",{dir:this.localize.dir()});await kt(this.body,Pg(e,this.body.scrollHeight),t),this.body.hidden=!0,this.body.style.height="auto",B(this,"sl-after-hide")}}render(){return U`
      <div
        part="base"
        class=${ye({details:!0,"details--open":this.open,"details--disabled":this.disabled})}
      >
        <header
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <sl-icon name="chevron-right" library="system"></sl-icon>
          </span>
        </header>

        <div class="details__body">
          <div part="content" id="content" class="details__content" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};an.styles=HS;m([J(".details")],an.prototype,"details",2);m([J(".details__header")],an.prototype,"header",2);m([J(".details__body")],an.prototype,"body",2);m([S({type:Boolean,reflect:!0})],an.prototype,"open",2);m([S()],an.prototype,"summary",2);m([S({type:Boolean,reflect:!0})],an.prototype,"disabled",2);m([j("open",{waitUntilFirstUpdate:!0})],an.prototype,"handleOpenChange",1);an=m([ee("sl-details")],an);Ze("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Ze("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});te($,"sl-details",an,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"});function Mg(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function tw(e){var t,r;const n=[];function i(s){s instanceof HTMLElement&&(n.push(s),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)),[...s.children].forEach(u=>i(u))}i(e);const o=(t=n.find(s=>Mg(s)))!=null?t:null,a=(r=n.reverse().find(s=>Mg(s)))!=null?r:null;return{start:o,end:a}}var is=[],rw=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){is.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){is=is.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return is[is.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=tw(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}},WS=ne`
  ${ue}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`,sn=class extends Q{constructor(){super(...arguments),this.hasSlotController=new un(this,"footer"),this.localize=new tt(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new rw(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),Pc(this))}disconnectedCallback(){super.disconnectedCallback(),Ac(this)}async show(){if(!this.open)return this.open=!0,Lr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Lr(this,"sl-after-hide")}requestClose(e){if(B(this,"sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=St(this,"dialog.denyClose",{dir:this.localize.dir()});kt(this.panel,r.keyframes,r.options);return}this.hide()}handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){B(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),Pc(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([It(this.dialog),It(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{B(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=St(this,"dialog.show",{dir:this.localize.dir()}),r=St(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([kt(this.panel,t.keyframes,t.options),kt(this.overlay,r.keyframes,r.options)]),B(this,"sl-after-show")}else{B(this,"sl-hide"),this.modal.deactivate(),await Promise.all([It(this.dialog),It(this.overlay)]);const e=St(this,"dialog.hide",{dir:this.localize.dir()}),t=St(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([kt(this.panel,e.keyframes,e.options),kt(this.overlay,t.keyframes,t.options)]),this.dialog.hidden=!0,Ac(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),B(this,"sl-after-hide")}}render(){return U`
      <div
        part="base"
        class=${ye({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${H(this.noHeader?this.label:void 0)}
          aria-labelledby=${H(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":U`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};sn.styles=WS;m([J(".dialog")],sn.prototype,"dialog",2);m([J(".dialog__panel")],sn.prototype,"panel",2);m([J(".dialog__overlay")],sn.prototype,"overlay",2);m([S({type:Boolean,reflect:!0})],sn.prototype,"open",2);m([S({reflect:!0})],sn.prototype,"label",2);m([S({attribute:"no-header",type:Boolean,reflect:!0})],sn.prototype,"noHeader",2);m([j("open",{waitUntilFirstUpdate:!0})],sn.prototype,"handleOpenChange",1);sn=m([ee("sl-dialog")],sn);Ze("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});Ze("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});Ze("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});Ze("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ze("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});te($,"sl-dialog",sn,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"});var KS=ne`
  ${ue}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Da=class extends Q{constructor(){super(...arguments),this.vertical=!1}firstUpdated(){this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Da.styles=KS;m([S({type:Boolean,reflect:!0})],Da.prototype,"vertical",2);m([j("vertical")],Da.prototype,"handleVerticalChange",1);Da=m([ee("sl-divider")],Da);te($,"sl-divider",Da,{});var qS=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`,Ot=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}async firstUpdated(){this.panel.hidden=!this.open,this.open&&(await this.updateComplete,this.addOpenListeners(),this.startPositioner())}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide(),this.stopPositioner()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(e){var t;if(e.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,n,i;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(i=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;Uf(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.updatePositioner()}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),n=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}));const o=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!o.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const r=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(i=>tw(i).start);let n;if(r){switch(r.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=r.button;break;default:n=r}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Lr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Lr(this,"sl-after-hide")}reposition(){this.updatePositioner()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){B(this,"sl-show"),this.addOpenListeners(),await It(this),this.startPositioner(),this.panel.hidden=!1;const{keyframes:e,options:t}=St(this,"dropdown.show",{dir:this.localize.dir()});await kt(this.panel,e,t),B(this,"sl-after-show")}else{B(this,"sl-hide"),this.removeOpenListeners(),await It(this);const{keyframes:e,options:t}=St(this,"dropdown.hide",{dir:this.localize.dir()});await kt(this.panel,e,t),this.panel.hidden=!0,this.stopPositioner(),B(this,"sl-after-hide")}}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=Ub(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){!this.open||!this.trigger||!this.positioner||Vb(this.trigger,this.positioner,{placement:this.placement,middleware:[Db({mainAxis:this.distance,crossAxis:this.skidding}),Ab(),Ob(),P3({apply:({availableWidth:e,availableHeight:t})=>{Object.assign(this.panel.style,{maxWidth:`${e}px`,maxHeight:`${t}px`})}})],strategy:this.hoist?"fixed":"absolute"}).then(({x:e,y:t,placement:r})=>{this.positioner.setAttribute("data-placement",r),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${e}px`,top:`${t}px`})})}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return U`
      <div
        part="base"
        id="dropdown"
        class=${ye({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby="dropdown"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};Ot.styles=qS;m([J(".dropdown__trigger")],Ot.prototype,"trigger",2);m([J(".dropdown__panel")],Ot.prototype,"panel",2);m([J(".dropdown__positioner")],Ot.prototype,"positioner",2);m([S({type:Boolean,reflect:!0})],Ot.prototype,"open",2);m([S({reflect:!0})],Ot.prototype,"placement",2);m([S({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);m([S({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ot.prototype,"stayOpenOnSelect",2);m([S({attribute:!1})],Ot.prototype,"containingElement",2);m([S({type:Number})],Ot.prototype,"distance",2);m([S({type:Number})],Ot.prototype,"skidding",2);m([S({type:Boolean})],Ot.prototype,"hoist",2);m([j("distance"),j("hoist"),j("placement"),j("skidding")],Ot.prototype,"handlePopoverOptionsChange",1);m([j("open",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleOpenChange",1);Ot=m([ee("sl-dropdown")],Ot);Ze("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});Ze("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});te($,"sl-dropdown",Ot,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"});var XS=ne`
  ${ue}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    transition: var(--sl-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }
`;function Lg(e){return e.charAt(0).toUpperCase()+e.slice(1)}var wr=class extends Q{constructor(){super(...arguments),this.hasSlotController=new un(this,"footer"),this.localize=new tt(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new rw(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.modal.activate(),Pc(this))}disconnectedCallback(){super.disconnectedCallback(),Ac(this)}async show(){if(!this.open)return this.open=!0,Lr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Lr(this,"sl-after-hide")}requestClose(e){if(B(this,"sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=St(this,"drawer.denyClose",{dir:this.localize.dir()});kt(this.panel,r.keyframes,r.options);return}this.hide()}handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){B(this,"sl-show"),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Pc(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([It(this.drawer),It(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{B(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=St(this,`drawer.show${Lg(this.placement)}`,{dir:this.localize.dir()}),r=St(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([kt(this.panel,t.keyframes,t.options),kt(this.overlay,r.keyframes,r.options)]),B(this,"sl-after-show")}else{B(this,"sl-hide"),this.modal.deactivate(),Ac(this),await Promise.all([It(this.drawer),It(this.overlay)]);const e=St(this,`drawer.hide${Lg(this.placement)}`,{dir:this.localize.dir()}),t=St(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([kt(this.panel,e.keyframes,e.options),kt(this.overlay,t.keyframes,t.options)]),this.drawer.hidden=!0;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),B(this,"sl-after-hide")}}render(){return U`
      <div
        part="base"
        class=${ye({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${H(this.noHeader?this.label:void 0)}
          aria-labelledby=${H(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":U`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="drawer__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click=${()=>this.requestClose("close-button")}
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};wr.styles=XS;m([J(".drawer")],wr.prototype,"drawer",2);m([J(".drawer__panel")],wr.prototype,"panel",2);m([J(".drawer__overlay")],wr.prototype,"overlay",2);m([S({type:Boolean,reflect:!0})],wr.prototype,"open",2);m([S({reflect:!0})],wr.prototype,"label",2);m([S({reflect:!0})],wr.prototype,"placement",2);m([S({type:Boolean,reflect:!0})],wr.prototype,"contained",2);m([S({attribute:"no-header",type:Boolean,reflect:!0})],wr.prototype,"noHeader",2);m([j("open",{waitUntilFirstUpdate:!0})],wr.prototype,"handleOpenChange",1);wr=m([ee("sl-drawer")],wr);Ze("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});Ze("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:{duration:250,easing:"ease"}});Ze("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});Ze("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:{duration:250,easing:"ease"}});Ze("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});Ze("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:{duration:250,easing:"ease"}});Ze("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});Ze("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:{duration:250,easing:"ease"}});Ze("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:{duration:250}});Ze("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ze("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});te($,"sl-drawer",wr,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"});var GS=ne`
  ${ue}

  :host {
    display: contents;
  }
`,Kf={};d3(Kf,{backInDown:()=>lC,backInLeft:()=>uC,backInRight:()=>cC,backInUp:()=>dC,backOutDown:()=>hC,backOutLeft:()=>fC,backOutRight:()=>pC,backOutUp:()=>vC,bounce:()=>ZS,bounceIn:()=>gC,bounceInDown:()=>mC,bounceInLeft:()=>yC,bounceInRight:()=>bC,bounceInUp:()=>wC,bounceOut:()=>xC,bounceOutDown:()=>kC,bounceOutLeft:()=>SC,bounceOutRight:()=>CC,bounceOutUp:()=>FC,easings:()=>L4,fadeIn:()=>EC,fadeInBottomLeft:()=>TC,fadeInBottomRight:()=>zC,fadeInDown:()=>_C,fadeInDownBig:()=>PC,fadeInLeft:()=>AC,fadeInLeftBig:()=>DC,fadeInRight:()=>OC,fadeInRightBig:()=>RC,fadeInTopLeft:()=>BC,fadeInTopRight:()=>NC,fadeInUp:()=>IC,fadeInUpBig:()=>MC,fadeOut:()=>LC,fadeOutBottomLeft:()=>UC,fadeOutBottomRight:()=>VC,fadeOutDown:()=>jC,fadeOutDownBig:()=>HC,fadeOutLeft:()=>WC,fadeOutLeftBig:()=>KC,fadeOutRight:()=>qC,fadeOutRightBig:()=>XC,fadeOutTopLeft:()=>GC,fadeOutTopRight:()=>ZC,fadeOutUp:()=>YC,fadeOutUpBig:()=>QC,flash:()=>YS,flip:()=>JC,flipInX:()=>$C,flipInY:()=>e4,flipOutX:()=>t4,flipOutY:()=>r4,headShake:()=>QS,heartBeat:()=>JS,hinge:()=>F4,jackInTheBox:()=>E4,jello:()=>$S,lightSpeedInLeft:()=>n4,lightSpeedInRight:()=>i4,lightSpeedOutLeft:()=>o4,lightSpeedOutRight:()=>a4,pulse:()=>eC,rollIn:()=>T4,rollOut:()=>z4,rotateIn:()=>s4,rotateInDownLeft:()=>l4,rotateInDownRight:()=>u4,rotateInUpLeft:()=>c4,rotateInUpRight:()=>d4,rotateOut:()=>h4,rotateOutDownLeft:()=>f4,rotateOutDownRight:()=>p4,rotateOutUpLeft:()=>v4,rotateOutUpRight:()=>g4,rubberBand:()=>tC,shake:()=>rC,shakeX:()=>nC,shakeY:()=>iC,slideInDown:()=>m4,slideInLeft:()=>y4,slideInRight:()=>b4,slideInUp:()=>w4,slideOutDown:()=>x4,slideOutLeft:()=>k4,slideOutRight:()=>S4,slideOutUp:()=>C4,swing:()=>oC,tada:()=>aC,wobble:()=>sC,zoomIn:()=>_4,zoomInDown:()=>P4,zoomInLeft:()=>A4,zoomInRight:()=>D4,zoomInUp:()=>O4,zoomOut:()=>R4,zoomOutDown:()=>B4,zoomOutLeft:()=>N4,zoomOutRight:()=>I4,zoomOutUp:()=>M4});var ZS=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],YS=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],QS=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],JS=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],$S=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],eC=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],tC=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],rC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],nC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],iC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],oC=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],aC=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],sC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lC=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],uC=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],cC=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],dC=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],hC=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],fC=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],pC=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],vC=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],gC=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],mC=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],yC=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bC=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],wC=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],xC=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],kC=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],SC=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],CC=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],FC=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],EC=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],TC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zC=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_C=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],PC=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],AC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],DC=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],OC=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],RC=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],BC=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],NC=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],IC=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],MC=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],LC=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],UC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],VC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],jC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],HC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],WC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],KC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],qC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],XC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],GC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],ZC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],YC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],QC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],JC=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],$C=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],e4=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],t4=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],r4=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],n4=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],i4=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],o4=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],a4=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],s4=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],l4=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],u4=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],c4=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],d4=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],h4=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],f4=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],p4=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],v4=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],g4=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],m4=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],y4=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],b4=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],w4=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],x4=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],k4=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],S4=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],C4=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],F4=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],E4=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],T4=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],z4=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],_4=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],P4=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],A4=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],D4=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],O4=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],R4=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],B4=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],N4=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],I4=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],M4=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],L4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},ct=class extends Q{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation(),this.handleAnimationCancel=this.handleAnimationCancel.bind(this),this.handleAnimationFinish=this.handleAnimationFinish.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleAnimationChange(){!this.hasUpdated||this.createAnimation()}handleAnimationFinish(){this.play=!1,this.hasStarted=!1,B(this,"sl-finish")}handleAnimationCancel(){this.play=!1,this.hasStarted=!1,B(this,"sl-cancel")}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,B(this,"sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=Kf.easings[this.easing])!=null?e:this.easing,n=(t=this.keyframes)!=null?t:Kf[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!n?!1:(this.destroyAnimation(),this.animation=o.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,B(this,"sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return U` <slot @slotchange=${this.handleSlotChange}></slot> `}};ct.styles=GS;m([y3("slot")],ct.prototype,"defaultSlot",2);m([S()],ct.prototype,"name",2);m([S({type:Boolean,reflect:!0})],ct.prototype,"play",2);m([S({type:Number})],ct.prototype,"delay",2);m([S()],ct.prototype,"direction",2);m([S({type:Number})],ct.prototype,"duration",2);m([S()],ct.prototype,"easing",2);m([S({attribute:"end-delay",type:Number})],ct.prototype,"endDelay",2);m([S()],ct.prototype,"fill",2);m([S({type:Number})],ct.prototype,"iterations",2);m([S({attribute:"iteration-start",type:Number})],ct.prototype,"iterationStart",2);m([S({attribute:!1})],ct.prototype,"keyframes",2);m([S({attribute:"playback-rate",type:Number})],ct.prototype,"playbackRate",2);m([j("name"),j("delay"),j("direction"),j("duration"),j("easing"),j("endDelay"),j("fill"),j("iterations"),j("iterationsStart"),j("keyframes")],ct.prototype,"handleAnimationChange",1);m([j("play")],ct.prototype,"handlePlayChange",1);m([j("playbackRate")],ct.prototype,"handlePlaybackRateChange",1);ct=m([ee("sl-animation")],ct);te($,"sl-animation",ct,{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"});var U4=ne`
  ${ue}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);
    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
    transform: scale(1);
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }
`,Vr=class extends Q{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(B(this,"sl-load"),this.isLoaded=!0)}handleError(){B(this,"sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return U`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?U`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                ${this.play?U`<sl-icon part="pause-icon" name="pause-fill" library="system"></sl-icon>`:U`<sl-icon part="play-icon" name="play-fill" library="system"></sl-icon>`}
              </div>
            `:""}
      </div>
    `}};Vr.styles=U4;m([Te()],Vr.prototype,"frozenFrame",2);m([Te()],Vr.prototype,"isLoaded",2);m([J(".animated-image__animated")],Vr.prototype,"animatedImage",2);m([S()],Vr.prototype,"src",2);m([S()],Vr.prototype,"alt",2);m([S({type:Boolean,reflect:!0})],Vr.prototype,"play",2);m([j("play",{waitUntilFirstUpdate:!0})],Vr.prototype,"handlePlayChange",1);m([j("src")],Vr.prototype,"handleSrcChange",1);Vr=m([ee("sl-animated-image")],Vr);te($,"sl-animated-image",Vr,{onSlLoad:"sl-load",onSlError:"sl-error"});var V4=ne`
  ${ue}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Cn=class extends Q{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){return U`
      <div
        part="base"
        class=${ye({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.initials?U` <div part="initials" class="avatar__initials">${this.initials}</div> `:U`
              <div part="icon" class="avatar__icon" aria-hidden="true">
                <slot name="icon">
                  <sl-icon name="person-fill" library="system"></sl-icon>
                </slot>
              </div>
            `}
        ${this.image&&!this.hasError?U`
              <img
                part="image"
                class="avatar__image"
                src="${this.image}"
                alt=""
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};Cn.styles=V4;m([Te()],Cn.prototype,"hasError",2);m([S()],Cn.prototype,"image",2);m([S()],Cn.prototype,"label",2);m([S()],Cn.prototype,"initials",2);m([S({reflect:!0})],Cn.prototype,"shape",2);m([j("image")],Cn.prototype,"handleImageChange",1);Cn=m([ee("sl-avatar")],Cn);te($,"sl-avatar",Cn,{});var j4=ne`
  ${ue}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,wo=class extends Q{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return U`
      <span
        part="base"
        class=${ye({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};wo.styles=j4;m([S({reflect:!0})],wo.prototype,"variant",2);m([S({type:Boolean,reflect:!0})],wo.prototype,"pill",2);m([S({type:Boolean,reflect:!0})],wo.prototype,"pulse",2);wo=m([ee("sl-badge")],wo);te($,"sl-badge",wo,{});var H4=ne`
  ${ue}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,xo=class extends Q{constructor(){super(...arguments),this.localize=new tt(this),this.separatorDir=this.localize.dir(),this.label="Breadcrumb"}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const n=t.querySelector('[slot="separator"]');n===null?t.append(this.getSeparator()):n.hasAttribute("data-default")&&n.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),U`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};xo.styles=H4;m([J("slot")],xo.prototype,"defaultSlot",2);m([J('slot[name="separator"]')],xo.prototype,"separatorSlot",2);m([S()],xo.prototype,"label",2);xo=m([ee("sl-breadcrumb")],xo);te($,"sl-breadcrumb",xo,{});var W4=ne`
  ${ue}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ug=["sl-button","sl-radio-button"],Oa=class extends Q{constructor(){super(...arguments),this.label=""}handleFocus(e){const t=os(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=os(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=os(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=os(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),n=os(t);n!==null&&(n.classList.add("sl-button-group__button"),n.classList.toggle("sl-button-group__button--first",r===0),n.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),n.classList.toggle("sl-button-group__button--last",r===e.length-1),n.classList.toggle("sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return U`
      <div
        part="base"
        class="button-group"
        role="group"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Oa.styles=W4;m([J("slot")],Oa.prototype,"defaultSlot",2);m([S()],Oa.prototype,"label",2);Oa=m([ee("sl-button-group")],Oa);function os(e){return Ug.includes(e.tagName.toLowerCase())?e:e.querySelector(Ug.join(","))}te($,"sl-button-group",Oa,{});var qe=class extends Q{constructor(){super(...arguments),this.formSubmitController=new En(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new un(this,"[default]","prefix","suffix"),this.localize=new tt(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,B(this,"sl-blur")}handleFocus(){this.hasFocus=!0,B(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Dc`a`:Dc`button`;return Is`
      <${t}
        part="base"
        class=${ye({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${H(e?void 0:this.disabled)}
        type=${H(e?void 0:this.type)}
        name=${H(e?void 0:this.name)}
        value=${H(e?void 0:this.value)}
        href=${H(e?this.href:void 0)}
        target=${H(e?this.target:void 0)}
        download=${H(e?this.download:void 0)}
        rel=${H(e&&this.target?"noreferrer noopener":void 0)}
        role=${H(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?Is`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?Is`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};qe.styles=Xb;m([J(".button")],qe.prototype,"button",2);m([Te()],qe.prototype,"hasFocus",2);m([S({reflect:!0})],qe.prototype,"variant",2);m([S({reflect:!0})],qe.prototype,"size",2);m([S({type:Boolean,reflect:!0})],qe.prototype,"caret",2);m([S({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);m([S({type:Boolean,reflect:!0})],qe.prototype,"loading",2);m([S({type:Boolean,reflect:!0})],qe.prototype,"outline",2);m([S({type:Boolean,reflect:!0})],qe.prototype,"pill",2);m([S({type:Boolean,reflect:!0})],qe.prototype,"circle",2);m([S()],qe.prototype,"type",2);m([S()],qe.prototype,"name",2);m([S()],qe.prototype,"value",2);m([S()],qe.prototype,"href",2);m([S()],qe.prototype,"target",2);m([S()],qe.prototype,"download",2);m([S()],qe.prototype,"form",2);m([S({attribute:"formaction"})],qe.prototype,"formAction",2);m([S({attribute:"formmethod"})],qe.prototype,"formMethod",2);m([S({attribute:"formnovalidate",type:Boolean})],qe.prototype,"formNoValidate",2);m([S({attribute:"formtarget"})],qe.prototype,"formTarget",2);qe=m([ee("sl-button")],qe);var qf=te($,"sl-button",qe,{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}),K4=ne`
  ${ue}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`,ko=class extends Q{constructor(){super(...arguments),this.hasSlotController=new un(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return U`
      <div
        part="base"
        class=${ye({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?U`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${H(this.target?this.target:void 0)}"
                rel=${H(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:U`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};ko.styles=K4;m([S()],ko.prototype,"href",2);m([S()],ko.prototype,"target",2);m([S()],ko.prototype,"rel",2);ko=m([ee("sl-breadcrumb-item")],ko);te($,"sl-breadcrumb-item",ko,{});var q4=ne`
  ${ue}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Io=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ln=class extends Q{constructor(){super(...arguments),this.hasSlotController=new un(this,"icon","suffix"),this.localize=new tt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,Lr(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Lr(this,"sl-after-hide")}async toast(){return new Promise(e=>{Io.parentElement===null&&document.body.append(Io),Io.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Io.removeChild(this),e(),Io.querySelector("sl-alert")===null&&Io.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){B(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await It(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=St(this,"alert.show",{dir:this.localize.dir()});await kt(this.base,e,t),B(this,"sl-after-show")}else{B(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await It(this.base);const{keyframes:e,options:t}=St(this,"alert.hide",{dir:this.localize.dir()});await kt(this.base,e,t),this.base.hidden=!0,B(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return U`
      <div
        part="base"
        class=${ye({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?U`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};ln.styles=q4;m([J('[part="base"]')],ln.prototype,"base",2);m([S({type:Boolean,reflect:!0})],ln.prototype,"open",2);m([S({type:Boolean,reflect:!0})],ln.prototype,"closable",2);m([S({reflect:!0})],ln.prototype,"variant",2);m([S({type:Number})],ln.prototype,"duration",2);m([j("open",{waitUntilFirstUpdate:!0})],ln.prototype,"handleOpenChange",1);m([j("duration")],ln.prototype,"handleDurationChange",1);ln=m([ee("sl-alert")],ln);Ze("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});Ze("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});var nw=te($,"sl-alert",ln,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}),m0={exports:{}},bd={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X4=ze.exports,G4=Symbol.for("react.element"),Z4=Symbol.for("react.fragment"),Y4=Object.prototype.hasOwnProperty,Q4=X4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J4={key:!0,ref:!0,__self:!0,__source:!0};function iw(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Y4.call(t,n)&&!J4.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:G4,type:e,key:o,ref:a,props:i,_owner:Q4.current}}bd.Fragment=Z4;bd.jsx=iw;bd.jsxs=iw;(function(e){e.exports=bd})(m0);const We=m0.exports.jsx,yi=m0.exports.jsxs,$4=()=>{const[e,t]=ze.exports.useState(null),[r,n]=ze.exports.useState(null),i=bb();return yi("section",{children:[We("form",{onSubmit:s=>{s.preventDefault(),e?i("/select-pages",{state:{file:e}}):n("You need to select a PDF first")},children:yi(Jb,{children:[We("h1",{slot:"header",children:"Select your PDF"}),We("input",{type:"file",accept:".pdf",onChange:s=>{s.target.files?(n(null),t(s.target.files[0])):n("Could not select that PDF")}}),We("div",{slot:"footer",style:{display:"flex",justifyContent:"flex-end"},children:We(qf,{variant:"primary",type:"submit",children:"Next"})})]})}),yi(nw,{open:Boolean(r),variant:"danger",children:[We(Lu,{slot:"icon",name:"info-circle"}),r]})]})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xf=function(e,t){return Xf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i])},Xf(e,t)};function L(e,t){Xf(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var ce=function(){return ce=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ce.apply(this,arguments)};function e8(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function fe(e,t,r,n){function i(o){return o instanceof r?o:new r(function(a){a(o)})}return new(r||(r=Promise))(function(o,a){function s(c){try{l(n.next(c))}catch(d){a(d)}}function u(c){try{l(n.throw(c))}catch(d){a(d)}}function l(c){c.done?o(c.value):i(c.value).then(s,u)}l((n=n.apply(e,t||[])).next())})}function pe(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(c){return u([l,c])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(c){l=[6,c],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Fe(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}var ia="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ys=new Uint8Array(256);for(var du=0;du<ia.length;du++)ys[ia.charCodeAt(du)]=du;var t8=function(e){for(var t="",r=e.length,n=0;n<r;n+=3)t+=ia[e[n]>>2],t+=ia[(e[n]&3)<<4|e[n+1]>>4],t+=ia[(e[n+1]&15)<<2|e[n+2]>>6],t+=ia[e[n+2]&63];return r%3===2?t=t.substring(0,t.length-1)+"=":r%3===1&&(t=t.substring(0,t.length-2)+"=="),t},Vg=function(e){var t=e.length*.75,r=e.length,n,i=0,o,a,s,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=new Uint8Array(t);for(n=0;n<r;n+=4)o=ys[e.charCodeAt(n)],a=ys[e.charCodeAt(n+1)],s=ys[e.charCodeAt(n+2)],u=ys[e.charCodeAt(n+3)],l[i++]=o<<2|a>>4,l[i++]=(a&15)<<4|s>>2,l[i++]=(s&3)<<6|u&63;return l},r8=/^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,n8=function(e){var t=e.trim(),r=t.substring(0,100),n=r.match(r8);if(!n)return Vg(t);var i=n[0],o=t.substring(i.length);return Vg(o)},le=function(e){return e.charCodeAt(0)},i8=function(e){return e.codePointAt(0)},Bl=function(e,t){return Jr(e.toString(16),t,"0").toUpperCase()},wd=function(e){return Bl(e,2)},Un=function(e){return String.fromCharCode(e)},o8=function(e){return Un(parseInt(e,16))},Jr=function(e,t,r){for(var n="",i=0,o=t-e.length;i<o;i++)n+=r;return n+e},Tt=function(e,t,r){for(var n=e.length,i=0;i<n;i++)t[r++]=e.charCodeAt(i);return n},a8=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},Nl=function(e){return e.replace(/\t|\u0085|\u2028|\u2029/g,"    ").replace(/[\b\v]/g,"")},s8=["\\n","\\f","\\r","\\u000B"],ow=function(e){return/^[\n\f\r\u000B]$/.test(e)},aw=function(e){return e.split(/[\n\f\r\u000B]/)},sw=function(e){return e.replace(/[\n\f\r\u000B]/g," ")},lw=function(e,t){var r=e.charCodeAt(t),n,i=t+1,o=1;return r>=55296&&r<=56319&&e.length>i&&(n=e.charCodeAt(i),n>=56320&&n<=57343&&(o=2)),[e.slice(t,t+o),o]},l8=function(e){for(var t=[],r=0,n=e.length;r<n;){var i=lw(e,r),o=i[0],a=i[1];t.push(o),r+=a}return t},u8=function(e){for(var t=s8.join("|"),r=["$"],n=0,i=e.length;n<i;n++){var o=e[n];if(ow(o))throw new TypeError("`wordBreak` must not include "+t);r.push(o===""?".":a8(o))}var a=r.join("|");return new RegExp("("+t+")|((.*?)("+a+"))","gm")},c8=function(e,t,r,n){for(var i=u8(t),o=Nl(e).match(i),a="",s=0,u=[],l=function(){a!==""&&u.push(a),a="",s=0},c=0,d=o.length;c<d;c++){var h=o[c];if(ow(h))l();else{var f=n(h);s+f>r&&l(),a+=h,s+=f}}return l(),u},d8=/^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,uw=function(e){var t=e.match(d8);if(!!t){var r=t[1],n=t[2],i=n===void 0?"01":n,o=t[3],a=o===void 0?"01":o,s=t[4],u=s===void 0?"00":s,l=t[5],c=l===void 0?"00":l,d=t[6],h=d===void 0?"00":d,f=t[7],v=f===void 0?"Z":f,p=t[8],b=p===void 0?"00":p,g=t[9],y=g===void 0?"00":g,w=v==="Z"?"Z":""+v+b+":"+y,x=new Date(r+"-"+i+"-"+a+"T"+u+":"+c+":"+h+w);return x}},y0=function(e,t){for(var r,n=0,i;n<e.length;){var o=e.substring(n).match(t);if(!o)return{match:i,pos:n};i=o,n+=((r=o.index)!==null&&r!==void 0?r:0)+o[0].length}return{match:i,pos:n}},Nc=function(e){return e[e.length-1]},Gf=function(e){if(e instanceof Uint8Array)return e;for(var t=e.length,r=new Uint8Array(t),n=0;n<t;n++)r[n]=e.charCodeAt(n);return r},h8=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=e.length,n=[],i=0;i<r;i++){var o=e[i];n[i]=o instanceof Uint8Array?o:Gf(o)}for(var a=0,i=0;i<r;i++)a+=e[i].length;for(var s=new Uint8Array(a),u=0,l=0;l<r;l++)for(var c=n[l],d=0,h=c.length;d<h;d++)s[u++]=c[d];return s},f8=function(e){for(var t=0,r=0,n=e.length;r<n;r++)t+=e[r].length;for(var i=new Uint8Array(t),o=0,r=0,n=e.length;r<n;r++){var a=e[r];i.set(a,o),o+=a.length}return i},cw=function(e){for(var t="",r=0,n=e.length;r<n;r++)t+=Un(e[r]);return t},p8=function(e,t){return e.id-t.id},v8=function(e,t){for(var r=[],n=0,i=e.length;n<i;n++){var o=e[n],a=e[n-1];(n===0||t(o)!==t(a))&&r.push(o)}return r},Mo=function(e){for(var t=e.length,r=0,n=Math.floor(t/2);r<n;r++){var i=r,o=t-r-1,a=e[r];e[i]=e[o],e[o]=a}return e},g8=function(e){for(var t=0,r=0,n=e.length;r<n;r++)t+=e[r];return t},m8=function(e,t){for(var r=new Array(t-e),n=0,i=r.length;n<i;n++)r[n]=e+n;return r},y8=function(e,t){for(var r=new Array(t.length),n=0,i=t.length;n<i;n++)r[n]=e[t[n]];return r},b8=function(e){return e instanceof Uint8Array||e instanceof ArrayBuffer||typeof e=="string"},as=function(e){if(typeof e=="string")return n8(e);if(e instanceof ArrayBuffer)return new Uint8Array(e);if(e instanceof Uint8Array)return e;throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`")},Ra=function(){return new Promise(function(e){setTimeout(function(){return e()},0)})},w8=function(e,t){t===void 0&&(t=!0);var r=[];t&&r.push(65279);for(var n=0,i=e.length;n<i;){var o=e.codePointAt(n);if(o<65536)r.push(o),n+=1;else if(o<1114112)r.push(dw(o),hw(o)),n+=2;else throw new Error("Invalid code point: 0x"+wd(o))}return new Uint16Array(r)},x8=function(e){return e>=0&&e<=65535},k8=function(e){return e>=65536&&e<=1114111},dw=function(e){return Math.floor((e-65536)/1024)+55296},hw=function(e){return(e-65536)%1024+56320},Ai;(function(e){e.BigEndian="BigEndian",e.LittleEndian="LittleEndian"})(Ai||(Ai={}));var ss="\uFFFD".codePointAt(0),fw=function(e,t){if(t===void 0&&(t=!0),e.length<=1)return String.fromCodePoint(ss);for(var r=t?C8(e):Ai.BigEndian,n=t?2:0,i=[];e.length-n>=2;){var o=Hg(e[n++],e[n++],r);if(S8(o))if(e.length-n<2)i.push(ss);else{var a=Hg(e[n++],e[n++],r);jg(a)?i.push(o,a):i.push(ss)}else jg(o)?(n+=2,i.push(ss)):i.push(o)}return n<e.length&&i.push(ss),String.fromCodePoint.apply(String,i)},S8=function(e){return e>=55296&&e<=56319},jg=function(e){return e>=56320&&e<=57343},Hg=function(e,t,r){if(r===Ai.LittleEndian)return t<<8|e;if(r===Ai.BigEndian)return e<<8|t;throw new Error("Invalid byteOrder: "+r)},C8=function(e){return pw(e)?Ai.BigEndian:vw(e)?Ai.LittleEndian:Ai.BigEndian},pw=function(e){return e[0]===254&&e[1]===255},vw=function(e){return e[0]===255&&e[1]===254},gw=function(e){return pw(e)||vw(e)},F8=function(e){var t=String(e);if(Math.abs(e)<1){var r=parseInt(e.toString().split("e-")[1]);if(r){var n=e<0;n&&(e*=-1),e*=Math.pow(10,r-1),t="0."+new Array(r).join("0")+e.toString().substring(2),n&&(t="-"+t)}}else{var r=parseInt(e.toString().split("+")[1]);r>20&&(r-=20,e/=Math.pow(10,r),t=e.toString()+new Array(r+1).join("0"))}return t},Uu=function(e){return Math.ceil(e.toString(2).length/8)},Lo=function(e){for(var t=new Uint8Array(Uu(e)),r=1;r<=t.length;r++)t[r-1]=e>>(t.length-r)*8;return t},Il=function(e){throw new Error(e)},$n={};(function(e){var t=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function r(o,a){return Object.prototype.hasOwnProperty.call(o,a)}e.assign=function(o){for(var a=Array.prototype.slice.call(arguments,1);a.length;){var s=a.shift();if(!!s){if(typeof s!="object")throw new TypeError(s+"must be non-object");for(var u in s)r(s,u)&&(o[u]=s[u])}}return o},e.shrinkBuf=function(o,a){return o.length===a?o:o.subarray?o.subarray(0,a):(o.length=a,o)};var n={arraySet:function(o,a,s,u,l){if(a.subarray&&o.subarray){o.set(a.subarray(s,s+u),l);return}for(var c=0;c<u;c++)o[l+c]=a[s+c]},flattenChunks:function(o){var a,s,u,l,c,d;for(u=0,a=0,s=o.length;a<s;a++)u+=o[a].length;for(d=new Uint8Array(u),l=0,a=0,s=o.length;a<s;a++)c=o[a],d.set(c,l),l+=c.length;return d}},i={arraySet:function(o,a,s,u,l){for(var c=0;c<u;c++)o[l+c]=a[s+c]},flattenChunks:function(o){return[].concat.apply([],o)}};e.setTyped=function(o){o?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,n)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,i))},e.setTyped(t)})($n);var Ml={},Tn={},Va={},E8=$n,T8=4,Wg=0,Kg=1,z8=2;function ja(e){for(var t=e.length;--t>=0;)e[t]=0}var _8=0,mw=1,P8=2,A8=3,D8=258,b0=29,Ll=256,vl=Ll+1+b0,pa=30,w0=19,yw=2*vl+1,lo=15,Sh=16,O8=7,x0=256,bw=16,ww=17,xw=18,Zf=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Vu=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],R8=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],kw=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B8=512,Rn=new Array((vl+2)*2);ja(Rn);var Ms=new Array(pa*2);ja(Ms);var gl=new Array(B8);ja(gl);var ml=new Array(D8-A8+1);ja(ml);var k0=new Array(b0);ja(k0);var Ic=new Array(pa);ja(Ic);function Ch(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}var Sw,Cw,Fw;function Fh(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function Ew(e){return e<256?gl[e]:gl[256+(e>>>7)]}function yl(e,t){e.pending_buf[e.pending++]=t&255,e.pending_buf[e.pending++]=t>>>8&255}function tr(e,t,r){e.bi_valid>Sh-r?(e.bi_buf|=t<<e.bi_valid&65535,yl(e,e.bi_buf),e.bi_buf=t>>Sh-e.bi_valid,e.bi_valid+=r-Sh):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function mn(e,t,r){tr(e,r[t*2],r[t*2+1])}function Tw(e,t){var r=0;do r|=e&1,e>>>=1,r<<=1;while(--t>0);return r>>>1}function N8(e){e.bi_valid===16?(yl(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)}function I8(e,t){var r=t.dyn_tree,n=t.max_code,i=t.stat_desc.static_tree,o=t.stat_desc.has_stree,a=t.stat_desc.extra_bits,s=t.stat_desc.extra_base,u=t.stat_desc.max_length,l,c,d,h,f,v,p=0;for(h=0;h<=lo;h++)e.bl_count[h]=0;for(r[e.heap[e.heap_max]*2+1]=0,l=e.heap_max+1;l<yw;l++)c=e.heap[l],h=r[r[c*2+1]*2+1]+1,h>u&&(h=u,p++),r[c*2+1]=h,!(c>n)&&(e.bl_count[h]++,f=0,c>=s&&(f=a[c-s]),v=r[c*2],e.opt_len+=v*(h+f),o&&(e.static_len+=v*(i[c*2+1]+f)));if(p!==0){do{for(h=u-1;e.bl_count[h]===0;)h--;e.bl_count[h]--,e.bl_count[h+1]+=2,e.bl_count[u]--,p-=2}while(p>0);for(h=u;h!==0;h--)for(c=e.bl_count[h];c!==0;)d=e.heap[--l],!(d>n)&&(r[d*2+1]!==h&&(e.opt_len+=(h-r[d*2+1])*r[d*2],r[d*2+1]=h),c--)}}function zw(e,t,r){var n=new Array(lo+1),i=0,o,a;for(o=1;o<=lo;o++)n[o]=i=i+r[o-1]<<1;for(a=0;a<=t;a++){var s=e[a*2+1];s!==0&&(e[a*2]=Tw(n[s]++,s))}}function M8(){var e,t,r,n,i,o=new Array(lo+1);for(r=0,n=0;n<b0-1;n++)for(k0[n]=r,e=0;e<1<<Zf[n];e++)ml[r++]=n;for(ml[r-1]=n,i=0,n=0;n<16;n++)for(Ic[n]=i,e=0;e<1<<Vu[n];e++)gl[i++]=n;for(i>>=7;n<pa;n++)for(Ic[n]=i<<7,e=0;e<1<<Vu[n]-7;e++)gl[256+i++]=n;for(t=0;t<=lo;t++)o[t]=0;for(e=0;e<=143;)Rn[e*2+1]=8,e++,o[8]++;for(;e<=255;)Rn[e*2+1]=9,e++,o[9]++;for(;e<=279;)Rn[e*2+1]=7,e++,o[7]++;for(;e<=287;)Rn[e*2+1]=8,e++,o[8]++;for(zw(Rn,vl+1,o),e=0;e<pa;e++)Ms[e*2+1]=5,Ms[e*2]=Tw(e,5);Sw=new Ch(Rn,Zf,Ll+1,vl,lo),Cw=new Ch(Ms,Vu,0,pa,lo),Fw=new Ch(new Array(0),R8,0,w0,O8)}function _w(e){var t;for(t=0;t<vl;t++)e.dyn_ltree[t*2]=0;for(t=0;t<pa;t++)e.dyn_dtree[t*2]=0;for(t=0;t<w0;t++)e.bl_tree[t*2]=0;e.dyn_ltree[x0*2]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function Pw(e){e.bi_valid>8?yl(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function L8(e,t,r,n){Pw(e),n&&(yl(e,r),yl(e,~r)),E8.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}function qg(e,t,r,n){var i=t*2,o=r*2;return e[i]<e[o]||e[i]===e[o]&&n[t]<=n[r]}function Eh(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&qg(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!qg(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function Xg(e,t,r){var n,i,o=0,a,s;if(e.last_lit!==0)do n=e.pending_buf[e.d_buf+o*2]<<8|e.pending_buf[e.d_buf+o*2+1],i=e.pending_buf[e.l_buf+o],o++,n===0?mn(e,i,t):(a=ml[i],mn(e,a+Ll+1,t),s=Zf[a],s!==0&&(i-=k0[a],tr(e,i,s)),n--,a=Ew(n),mn(e,a,r),s=Vu[a],s!==0&&(n-=Ic[a],tr(e,n,s)));while(o<e.last_lit);mn(e,x0,t)}function Yf(e,t){var r=t.dyn_tree,n=t.stat_desc.static_tree,i=t.stat_desc.has_stree,o=t.stat_desc.elems,a,s,u=-1,l;for(e.heap_len=0,e.heap_max=yw,a=0;a<o;a++)r[a*2]!==0?(e.heap[++e.heap_len]=u=a,e.depth[a]=0):r[a*2+1]=0;for(;e.heap_len<2;)l=e.heap[++e.heap_len]=u<2?++u:0,r[l*2]=1,e.depth[l]=0,e.opt_len--,i&&(e.static_len-=n[l*2+1]);for(t.max_code=u,a=e.heap_len>>1;a>=1;a--)Eh(e,r,a);l=o;do a=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Eh(e,r,1),s=e.heap[1],e.heap[--e.heap_max]=a,e.heap[--e.heap_max]=s,r[l*2]=r[a*2]+r[s*2],e.depth[l]=(e.depth[a]>=e.depth[s]?e.depth[a]:e.depth[s])+1,r[a*2+1]=r[s*2+1]=l,e.heap[1]=l++,Eh(e,r,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],I8(e,t),zw(r,u,e.bl_count)}function Gg(e,t,r){var n,i=-1,o,a=t[0*2+1],s=0,u=7,l=4;for(a===0&&(u=138,l=3),t[(r+1)*2+1]=65535,n=0;n<=r;n++)o=a,a=t[(n+1)*2+1],!(++s<u&&o===a)&&(s<l?e.bl_tree[o*2]+=s:o!==0?(o!==i&&e.bl_tree[o*2]++,e.bl_tree[bw*2]++):s<=10?e.bl_tree[ww*2]++:e.bl_tree[xw*2]++,s=0,i=o,a===0?(u=138,l=3):o===a?(u=6,l=3):(u=7,l=4))}function Zg(e,t,r){var n,i=-1,o,a=t[0*2+1],s=0,u=7,l=4;for(a===0&&(u=138,l=3),n=0;n<=r;n++)if(o=a,a=t[(n+1)*2+1],!(++s<u&&o===a)){if(s<l)do mn(e,o,e.bl_tree);while(--s!==0);else o!==0?(o!==i&&(mn(e,o,e.bl_tree),s--),mn(e,bw,e.bl_tree),tr(e,s-3,2)):s<=10?(mn(e,ww,e.bl_tree),tr(e,s-3,3)):(mn(e,xw,e.bl_tree),tr(e,s-11,7));s=0,i=o,a===0?(u=138,l=3):o===a?(u=6,l=3):(u=7,l=4)}}function U8(e){var t;for(Gg(e,e.dyn_ltree,e.l_desc.max_code),Gg(e,e.dyn_dtree,e.d_desc.max_code),Yf(e,e.bl_desc),t=w0-1;t>=3&&e.bl_tree[kw[t]*2+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}function V8(e,t,r,n){var i;for(tr(e,t-257,5),tr(e,r-1,5),tr(e,n-4,4),i=0;i<n;i++)tr(e,e.bl_tree[kw[i]*2+1],3);Zg(e,e.dyn_ltree,t-1),Zg(e,e.dyn_dtree,r-1)}function j8(e){var t=4093624447,r;for(r=0;r<=31;r++,t>>>=1)if(t&1&&e.dyn_ltree[r*2]!==0)return Wg;if(e.dyn_ltree[9*2]!==0||e.dyn_ltree[10*2]!==0||e.dyn_ltree[13*2]!==0)return Kg;for(r=32;r<Ll;r++)if(e.dyn_ltree[r*2]!==0)return Kg;return Wg}var Yg=!1;function H8(e){Yg||(M8(),Yg=!0),e.l_desc=new Fh(e.dyn_ltree,Sw),e.d_desc=new Fh(e.dyn_dtree,Cw),e.bl_desc=new Fh(e.bl_tree,Fw),e.bi_buf=0,e.bi_valid=0,_w(e)}function Aw(e,t,r,n){tr(e,(_8<<1)+(n?1:0),3),L8(e,t,r,!0)}function W8(e){tr(e,mw<<1,3),mn(e,x0,Rn),N8(e)}function K8(e,t,r,n){var i,o,a=0;e.level>0?(e.strm.data_type===z8&&(e.strm.data_type=j8(e)),Yf(e,e.l_desc),Yf(e,e.d_desc),a=U8(e),i=e.opt_len+3+7>>>3,o=e.static_len+3+7>>>3,o<=i&&(i=o)):i=o=r+5,r+4<=i&&t!==-1?Aw(e,t,r,n):e.strategy===T8||o===i?(tr(e,(mw<<1)+(n?1:0),3),Xg(e,Rn,Ms)):(tr(e,(P8<<1)+(n?1:0),3),V8(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),Xg(e,e.dyn_ltree,e.dyn_dtree)),_w(e),n&&Pw(e)}function q8(e,t,r){return e.pending_buf[e.d_buf+e.last_lit*2]=t>>>8&255,e.pending_buf[e.d_buf+e.last_lit*2+1]=t&255,e.pending_buf[e.l_buf+e.last_lit]=r&255,e.last_lit++,t===0?e.dyn_ltree[r*2]++:(e.matches++,t--,e.dyn_ltree[(ml[r]+Ll+1)*2]++,e.dyn_dtree[Ew(t)*2]++),e.last_lit===e.lit_bufsize-1}Va._tr_init=H8;Va._tr_stored_block=Aw;Va._tr_flush_block=K8;Va._tr_tally=q8;Va._tr_align=W8;function X8(e,t,r,n){for(var i=e&65535|0,o=e>>>16&65535|0,a=0;r!==0;){a=r>2e3?2e3:r,r-=a;do i=i+t[n++]|0,o=o+i|0;while(--a);i%=65521,o%=65521}return i|o<<16|0}var Dw=X8;function G8(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t}var Z8=G8();function Y8(e,t,r,n){var i=Z8,o=n+r;e^=-1;for(var a=n;a<o;a++)e=e>>>8^i[(e^t[a])&255];return e^-1}var Ow=Y8,S0={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ht=$n,Rr=Va,Rw=Dw,si=Ow,Q8=S0,Po=0,J8=1,$8=3,Di=4,Qg=5,yn=0,Jg=1,Br=-2,e6=-3,Th=-5,t6=-1,r6=1,hu=2,n6=3,i6=4,o6=0,a6=2,xd=8,s6=9,l6=15,u6=8,c6=29,d6=256,Qf=d6+1+c6,h6=30,f6=19,p6=2*Qf+1,v6=15,Ce=3,bi=258,tn=bi+Ce+1,g6=32,kd=42,Jf=69,ju=73,Hu=91,Wu=103,uo=113,bs=666,vt=1,Ul=2,So=3,Ha=4,m6=3;function wi(e,t){return e.msg=Q8[t],t}function $g(e){return(e<<1)-(e>4?9:0)}function vi(e){for(var t=e.length;--t>=0;)e[t]=0}function li(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),r!==0&&(Ht.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,t.pending===0&&(t.pending_out=0))}function zt(e,t){Rr._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,li(e.strm)}function De(e,t){e.pending_buf[e.pending++]=t}function ls(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=t&255}function y6(e,t,r,n){var i=e.avail_in;return i>n&&(i=n),i===0?0:(e.avail_in-=i,Ht.arraySet(t,e.input,e.next_in,i,r),e.state.wrap===1?e.adler=Rw(e.adler,t,i,r):e.state.wrap===2&&(e.adler=si(e.adler,t,i,r)),e.next_in+=i,e.total_in+=i,i)}function Bw(e,t){var r=e.max_chain_length,n=e.strstart,i,o,a=e.prev_length,s=e.nice_match,u=e.strstart>e.w_size-tn?e.strstart-(e.w_size-tn):0,l=e.window,c=e.w_mask,d=e.prev,h=e.strstart+bi,f=l[n+a-1],v=l[n+a];e.prev_length>=e.good_match&&(r>>=2),s>e.lookahead&&(s=e.lookahead);do if(i=t,!(l[i+a]!==v||l[i+a-1]!==f||l[i]!==l[n]||l[++i]!==l[n+1])){n+=2,i++;do;while(l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&n<h);if(o=bi-(h-n),n=h-bi,o>a){if(e.match_start=t,a=o,o>=s)break;f=l[n+a-1],v=l[n+a]}}while((t=d[t&c])>u&&--r!==0);return a<=e.lookahead?a:e.lookahead}function Co(e){var t=e.w_size,r,n,i,o,a;do{if(o=e.window_size-e.lookahead-e.strstart,e.strstart>=t+(t-tn)){Ht.arraySet(e.window,e.window,t,t,0),e.match_start-=t,e.strstart-=t,e.block_start-=t,n=e.hash_size,r=n;do i=e.head[--r],e.head[r]=i>=t?i-t:0;while(--n);n=t,r=n;do i=e.prev[--r],e.prev[r]=i>=t?i-t:0;while(--n);o+=t}if(e.strm.avail_in===0)break;if(n=y6(e.strm,e.window,e.strstart+e.lookahead,o),e.lookahead+=n,e.lookahead+e.insert>=Ce)for(a=e.strstart-e.insert,e.ins_h=e.window[a],e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+Ce-1])&e.hash_mask,e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<Ce)););}while(e.lookahead<tn&&e.strm.avail_in!==0)}function b6(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(Co(e),e.lookahead===0&&t===Po)return vt;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((e.strstart===0||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,zt(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-tn&&(zt(e,!1),e.strm.avail_out===0))return vt}return e.insert=0,t===Di?(zt(e,!0),e.strm.avail_out===0?So:Ha):(e.strstart>e.block_start&&(zt(e,!1),e.strm.avail_out===0),vt)}function zh(e,t){for(var r,n;;){if(e.lookahead<tn){if(Co(e),e.lookahead<tn&&t===Po)return vt;if(e.lookahead===0)break}if(r=0,e.lookahead>=Ce&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ce-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),r!==0&&e.strstart-r<=e.w_size-tn&&(e.match_length=Bw(e,r)),e.match_length>=Ce)if(n=Rr._tr_tally(e,e.strstart-e.match_start,e.match_length-Ce),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=Ce){e.match_length--;do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ce-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=Rr._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(zt(e,!1),e.strm.avail_out===0))return vt}return e.insert=e.strstart<Ce-1?e.strstart:Ce-1,t===Di?(zt(e,!0),e.strm.avail_out===0?So:Ha):e.last_lit&&(zt(e,!1),e.strm.avail_out===0)?vt:Ul}function Uo(e,t){for(var r,n,i;;){if(e.lookahead<tn){if(Co(e),e.lookahead<tn&&t===Po)return vt;if(e.lookahead===0)break}if(r=0,e.lookahead>=Ce&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ce-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=Ce-1,r!==0&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-tn&&(e.match_length=Bw(e,r),e.match_length<=5&&(e.strategy===r6||e.match_length===Ce&&e.strstart-e.match_start>4096)&&(e.match_length=Ce-1)),e.prev_length>=Ce&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-Ce,n=Rr._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-Ce),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Ce-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=Ce-1,e.strstart++,n&&(zt(e,!1),e.strm.avail_out===0))return vt}else if(e.match_available){if(n=Rr._tr_tally(e,0,e.window[e.strstart-1]),n&&zt(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return vt}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=Rr._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<Ce-1?e.strstart:Ce-1,t===Di?(zt(e,!0),e.strm.avail_out===0?So:Ha):e.last_lit&&(zt(e,!1),e.strm.avail_out===0)?vt:Ul}function w6(e,t){for(var r,n,i,o,a=e.window;;){if(e.lookahead<=bi){if(Co(e),e.lookahead<=bi&&t===Po)return vt;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=Ce&&e.strstart>0&&(i=e.strstart-1,n=a[i],n===a[++i]&&n===a[++i]&&n===a[++i])){o=e.strstart+bi;do;while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<o);e.match_length=bi-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=Ce?(r=Rr._tr_tally(e,1,e.match_length-Ce),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=Rr._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(zt(e,!1),e.strm.avail_out===0))return vt}return e.insert=0,t===Di?(zt(e,!0),e.strm.avail_out===0?So:Ha):e.last_lit&&(zt(e,!1),e.strm.avail_out===0)?vt:Ul}function x6(e,t){for(var r;;){if(e.lookahead===0&&(Co(e),e.lookahead===0)){if(t===Po)return vt;break}if(e.match_length=0,r=Rr._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(zt(e,!1),e.strm.avail_out===0))return vt}return e.insert=0,t===Di?(zt(e,!0),e.strm.avail_out===0?So:Ha):e.last_lit&&(zt(e,!1),e.strm.avail_out===0)?vt:Ul}function hn(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}var oa;oa=[new hn(0,0,0,0,b6),new hn(4,4,8,4,zh),new hn(4,5,16,8,zh),new hn(4,6,32,32,zh),new hn(4,4,16,16,Uo),new hn(8,16,32,32,Uo),new hn(8,16,128,128,Uo),new hn(8,32,128,256,Uo),new hn(32,128,258,1024,Uo),new hn(32,258,258,4096,Uo)];function k6(e){e.window_size=2*e.w_size,vi(e.head),e.max_lazy_match=oa[e.level].max_lazy,e.good_match=oa[e.level].good_length,e.nice_match=oa[e.level].nice_length,e.max_chain_length=oa[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=Ce-1,e.match_available=0,e.ins_h=0}function S6(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=xd,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Ht.Buf16(p6*2),this.dyn_dtree=new Ht.Buf16((2*h6+1)*2),this.bl_tree=new Ht.Buf16((2*f6+1)*2),vi(this.dyn_ltree),vi(this.dyn_dtree),vi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Ht.Buf16(v6+1),this.heap=new Ht.Buf16(2*Qf+1),vi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Ht.Buf16(2*Qf+1),vi(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Nw(e){var t;return!e||!e.state?wi(e,Br):(e.total_in=e.total_out=0,e.data_type=a6,t=e.state,t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?kd:uo,e.adler=t.wrap===2?0:1,t.last_flush=Po,Rr._tr_init(t),yn)}function Iw(e){var t=Nw(e);return t===yn&&k6(e.state),t}function C6(e,t){return!e||!e.state||e.state.wrap!==2?Br:(e.state.gzhead=t,yn)}function Mw(e,t,r,n,i,o){if(!e)return Br;var a=1;if(t===t6&&(t=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),i<1||i>s6||r!==xd||n<8||n>15||t<0||t>9||o<0||o>i6)return wi(e,Br);n===8&&(n=9);var s=new S6;return e.state=s,s.strm=e,s.wrap=a,s.gzhead=null,s.w_bits=n,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+Ce-1)/Ce),s.window=new Ht.Buf8(s.w_size*2),s.head=new Ht.Buf16(s.hash_size),s.prev=new Ht.Buf16(s.w_size),s.lit_bufsize=1<<i+6,s.pending_buf_size=s.lit_bufsize*4,s.pending_buf=new Ht.Buf8(s.pending_buf_size),s.d_buf=1*s.lit_bufsize,s.l_buf=(1+2)*s.lit_bufsize,s.level=t,s.strategy=o,s.method=r,Iw(e)}function F6(e,t){return Mw(e,t,xd,l6,u6,o6)}function E6(e,t){var r,n,i,o;if(!e||!e.state||t>Qg||t<0)return e?wi(e,Br):Br;if(n=e.state,!e.output||!e.input&&e.avail_in!==0||n.status===bs&&t!==Di)return wi(e,e.avail_out===0?Th:Br);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===kd)if(n.wrap===2)e.adler=0,De(n,31),De(n,139),De(n,8),n.gzhead?(De(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),De(n,n.gzhead.time&255),De(n,n.gzhead.time>>8&255),De(n,n.gzhead.time>>16&255),De(n,n.gzhead.time>>24&255),De(n,n.level===9?2:n.strategy>=hu||n.level<2?4:0),De(n,n.gzhead.os&255),n.gzhead.extra&&n.gzhead.extra.length&&(De(n,n.gzhead.extra.length&255),De(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=si(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=Jf):(De(n,0),De(n,0),De(n,0),De(n,0),De(n,0),De(n,n.level===9?2:n.strategy>=hu||n.level<2?4:0),De(n,m6),n.status=uo);else{var a=xd+(n.w_bits-8<<4)<<8,s=-1;n.strategy>=hu||n.level<2?s=0:n.level<6?s=1:n.level===6?s=2:s=3,a|=s<<6,n.strstart!==0&&(a|=g6),a+=31-a%31,n.status=uo,ls(n,a),n.strstart!==0&&(ls(n,e.adler>>>16),ls(n,e.adler&65535)),e.adler=1}if(n.status===Jf)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(n.gzhead.extra.length&65535)&&!(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=si(e.adler,n.pending_buf,n.pending-i,i)),li(e),i=n.pending,n.pending===n.pending_buf_size));)De(n,n.gzhead.extra[n.gzindex]&255),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=si(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=ju)}else n.status=ju;if(n.status===ju)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=si(e.adler,n.pending_buf,n.pending-i,i)),li(e),i=n.pending,n.pending===n.pending_buf_size)){o=1;break}n.gzindex<n.gzhead.name.length?o=n.gzhead.name.charCodeAt(n.gzindex++)&255:o=0,De(n,o)}while(o!==0);n.gzhead.hcrc&&n.pending>i&&(e.adler=si(e.adler,n.pending_buf,n.pending-i,i)),o===0&&(n.gzindex=0,n.status=Hu)}else n.status=Hu;if(n.status===Hu)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=si(e.adler,n.pending_buf,n.pending-i,i)),li(e),i=n.pending,n.pending===n.pending_buf_size)){o=1;break}n.gzindex<n.gzhead.comment.length?o=n.gzhead.comment.charCodeAt(n.gzindex++)&255:o=0,De(n,o)}while(o!==0);n.gzhead.hcrc&&n.pending>i&&(e.adler=si(e.adler,n.pending_buf,n.pending-i,i)),o===0&&(n.status=Wu)}else n.status=Wu;if(n.status===Wu&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&li(e),n.pending+2<=n.pending_buf_size&&(De(n,e.adler&255),De(n,e.adler>>8&255),e.adler=0,n.status=uo)):n.status=uo),n.pending!==0){if(li(e),e.avail_out===0)return n.last_flush=-1,yn}else if(e.avail_in===0&&$g(t)<=$g(r)&&t!==Di)return wi(e,Th);if(n.status===bs&&e.avail_in!==0)return wi(e,Th);if(e.avail_in!==0||n.lookahead!==0||t!==Po&&n.status!==bs){var u=n.strategy===hu?x6(n,t):n.strategy===n6?w6(n,t):oa[n.level].func(n,t);if((u===So||u===Ha)&&(n.status=bs),u===vt||u===So)return e.avail_out===0&&(n.last_flush=-1),yn;if(u===Ul&&(t===J8?Rr._tr_align(n):t!==Qg&&(Rr._tr_stored_block(n,0,0,!1),t===$8&&(vi(n.head),n.lookahead===0&&(n.strstart=0,n.block_start=0,n.insert=0))),li(e),e.avail_out===0))return n.last_flush=-1,yn}return t!==Di?yn:n.wrap<=0?Jg:(n.wrap===2?(De(n,e.adler&255),De(n,e.adler>>8&255),De(n,e.adler>>16&255),De(n,e.adler>>24&255),De(n,e.total_in&255),De(n,e.total_in>>8&255),De(n,e.total_in>>16&255),De(n,e.total_in>>24&255)):(ls(n,e.adler>>>16),ls(n,e.adler&65535)),li(e),n.wrap>0&&(n.wrap=-n.wrap),n.pending!==0?yn:Jg)}function T6(e){var t;return!e||!e.state?Br:(t=e.state.status,t!==kd&&t!==Jf&&t!==ju&&t!==Hu&&t!==Wu&&t!==uo&&t!==bs?wi(e,Br):(e.state=null,t===uo?wi(e,e6):yn))}function z6(e,t){var r=t.length,n,i,o,a,s,u,l,c;if(!e||!e.state||(n=e.state,a=n.wrap,a===2||a===1&&n.status!==kd||n.lookahead))return Br;for(a===1&&(e.adler=Rw(e.adler,t,r,0)),n.wrap=0,r>=n.w_size&&(a===0&&(vi(n.head),n.strstart=0,n.block_start=0,n.insert=0),c=new Ht.Buf8(n.w_size),Ht.arraySet(c,t,r-n.w_size,n.w_size,0),t=c,r=n.w_size),s=e.avail_in,u=e.next_in,l=e.input,e.avail_in=r,e.next_in=0,e.input=t,Co(n);n.lookahead>=Ce;){i=n.strstart,o=n.lookahead-(Ce-1);do n.ins_h=(n.ins_h<<n.hash_shift^n.window[i+Ce-1])&n.hash_mask,n.prev[i&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=i,i++;while(--o);n.strstart=i,n.lookahead=Ce-1,Co(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=Ce-1,n.match_available=0,e.next_in=u,e.input=l,e.avail_in=s,n.wrap=a,yn}Tn.deflateInit=F6;Tn.deflateInit2=Mw;Tn.deflateReset=Iw;Tn.deflateResetKeep=Nw;Tn.deflateSetHeader=C6;Tn.deflate=E6;Tn.deflateEnd=T6;Tn.deflateSetDictionary=z6;Tn.deflateInfo="pako deflate (from Nodeca project)";var Ao={},Sd=$n,Lw=!0,Uw=!0;try{String.fromCharCode.apply(null,[0])}catch{Lw=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Uw=!1}var bl=new Sd.Buf8(256);for(var oi=0;oi<256;oi++)bl[oi]=oi>=252?6:oi>=248?5:oi>=240?4:oi>=224?3:oi>=192?2:1;bl[254]=bl[254]=1;Ao.string2buf=function(e){var t,r,n,i,o,a=e.length,s=0;for(i=0;i<a;i++)r=e.charCodeAt(i),(r&64512)===55296&&i+1<a&&(n=e.charCodeAt(i+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),i++)),s+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Sd.Buf8(s),o=0,i=0;o<s;i++)r=e.charCodeAt(i),(r&64512)===55296&&i+1<a&&(n=e.charCodeAt(i+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),i++)),r<128?t[o++]=r:r<2048?(t[o++]=192|r>>>6,t[o++]=128|r&63):r<65536?(t[o++]=224|r>>>12,t[o++]=128|r>>>6&63,t[o++]=128|r&63):(t[o++]=240|r>>>18,t[o++]=128|r>>>12&63,t[o++]=128|r>>>6&63,t[o++]=128|r&63);return t};function Vw(e,t){if(t<65534&&(e.subarray&&Uw||!e.subarray&&Lw))return String.fromCharCode.apply(null,Sd.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}Ao.buf2binstring=function(e){return Vw(e,e.length)};Ao.binstring2buf=function(e){for(var t=new Sd.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t};Ao.buf2string=function(e,t){var r,n,i,o,a=t||e.length,s=new Array(a*2);for(n=0,r=0;r<a;){if(i=e[r++],i<128){s[n++]=i;continue}if(o=bl[i],o>4){s[n++]=65533,r+=o-1;continue}for(i&=o===2?31:o===3?15:7;o>1&&r<a;)i=i<<6|e[r++]&63,o--;if(o>1){s[n++]=65533;continue}i<65536?s[n++]=i:(i-=65536,s[n++]=55296|i>>10&1023,s[n++]=56320|i&1023)}return Vw(s,n)};Ao.utf8border=function(e,t){var r;for(t=t||e.length,t>e.length&&(t=e.length),r=t-1;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+bl[e[r]]>t?r:t};function _6(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var jw=_6,Ls=Tn,Us=$n,$f=Ao,ep=S0,P6=jw,Hw=Object.prototype.toString,A6=0,_h=4,va=0,em=1,tm=2,D6=-1,O6=0,R6=8;function Fo(e){if(!(this instanceof Fo))return new Fo(e);this.options=Us.assign({level:D6,method:R6,chunkSize:16384,windowBits:15,memLevel:8,strategy:O6,to:""},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new P6,this.strm.avail_out=0;var r=Ls.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==va)throw new Error(ep[r]);if(t.header&&Ls.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(typeof t.dictionary=="string"?n=$f.string2buf(t.dictionary):Hw.call(t.dictionary)==="[object ArrayBuffer]"?n=new Uint8Array(t.dictionary):n=t.dictionary,r=Ls.deflateSetDictionary(this.strm,n),r!==va)throw new Error(ep[r]);this._dict_set=!0}}Fo.prototype.push=function(e,t){var r=this.strm,n=this.options.chunkSize,i,o;if(this.ended)return!1;o=t===~~t?t:t===!0?_h:A6,typeof e=="string"?r.input=$f.string2buf(e):Hw.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;do{if(r.avail_out===0&&(r.output=new Us.Buf8(n),r.next_out=0,r.avail_out=n),i=Ls.deflate(r,o),i!==em&&i!==va)return this.onEnd(i),this.ended=!0,!1;(r.avail_out===0||r.avail_in===0&&(o===_h||o===tm))&&(this.options.to==="string"?this.onData($f.buf2binstring(Us.shrinkBuf(r.output,r.next_out))):this.onData(Us.shrinkBuf(r.output,r.next_out)))}while((r.avail_in>0||r.avail_out===0)&&i!==em);return o===_h?(i=Ls.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===va):(o===tm&&(this.onEnd(va),r.avail_out=0),!0)};Fo.prototype.onData=function(e){this.chunks.push(e)};Fo.prototype.onEnd=function(e){e===va&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Us.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function C0(e,t){var r=new Fo(t);if(r.push(e,!0),r.err)throw r.msg||ep[r.err];return r.result}function B6(e,t){return t=t||{},t.raw=!0,C0(e,t)}function N6(e,t){return t=t||{},t.gzip=!0,C0(e,t)}Ml.Deflate=Fo;Ml.deflate=C0;Ml.deflateRaw=B6;Ml.gzip=N6;var Vl={},cn={},fu=30,I6=12,M6=function(t,r){var n,i,o,a,s,u,l,c,d,h,f,v,p,b,g,y,w,x,k,E,T,z,_,P,D;n=t.state,i=t.next_in,P=t.input,o=i+(t.avail_in-5),a=t.next_out,D=t.output,s=a-(r-t.avail_out),u=a+(t.avail_out-257),l=n.dmax,c=n.wsize,d=n.whave,h=n.wnext,f=n.window,v=n.hold,p=n.bits,b=n.lencode,g=n.distcode,y=(1<<n.lenbits)-1,w=(1<<n.distbits)-1;e:do{p<15&&(v+=P[i++]<<p,p+=8,v+=P[i++]<<p,p+=8),x=b[v&y];t:for(;;){if(k=x>>>24,v>>>=k,p-=k,k=x>>>16&255,k===0)D[a++]=x&65535;else if(k&16){E=x&65535,k&=15,k&&(p<k&&(v+=P[i++]<<p,p+=8),E+=v&(1<<k)-1,v>>>=k,p-=k),p<15&&(v+=P[i++]<<p,p+=8,v+=P[i++]<<p,p+=8),x=g[v&w];r:for(;;){if(k=x>>>24,v>>>=k,p-=k,k=x>>>16&255,k&16){if(T=x&65535,k&=15,p<k&&(v+=P[i++]<<p,p+=8,p<k&&(v+=P[i++]<<p,p+=8)),T+=v&(1<<k)-1,T>l){t.msg="invalid distance too far back",n.mode=fu;break e}if(v>>>=k,p-=k,k=a-s,T>k){if(k=T-k,k>d&&n.sane){t.msg="invalid distance too far back",n.mode=fu;break e}if(z=0,_=f,h===0){if(z+=c-k,k<E){E-=k;do D[a++]=f[z++];while(--k);z=a-T,_=D}}else if(h<k){if(z+=c+h-k,k-=h,k<E){E-=k;do D[a++]=f[z++];while(--k);if(z=0,h<E){k=h,E-=k;do D[a++]=f[z++];while(--k);z=a-T,_=D}}}else if(z+=h-k,k<E){E-=k;do D[a++]=f[z++];while(--k);z=a-T,_=D}for(;E>2;)D[a++]=_[z++],D[a++]=_[z++],D[a++]=_[z++],E-=3;E&&(D[a++]=_[z++],E>1&&(D[a++]=_[z++]))}else{z=a-T;do D[a++]=D[z++],D[a++]=D[z++],D[a++]=D[z++],E-=3;while(E>2);E&&(D[a++]=D[z++],E>1&&(D[a++]=D[z++]))}}else if((k&64)===0){x=g[(x&65535)+(v&(1<<k)-1)];continue r}else{t.msg="invalid distance code",n.mode=fu;break e}break}}else if((k&64)===0){x=b[(x&65535)+(v&(1<<k)-1)];continue t}else if(k&32){n.mode=I6;break e}else{t.msg="invalid literal/length code",n.mode=fu;break e}break}}while(i<o&&a<u);E=p>>3,i-=E,p-=E<<3,v&=(1<<p)-1,t.next_in=i,t.next_out=a,t.avail_in=i<o?5+(o-i):5-(i-o),t.avail_out=a<u?257+(u-a):257-(a-u),n.hold=v,n.bits=p},rm=$n,Vo=15,nm=852,im=592,om=0,Ph=1,am=2,L6=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],U6=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],V6=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],j6=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],H6=function(t,r,n,i,o,a,s,u){var l=u.bits,c=0,d=0,h=0,f=0,v=0,p=0,b=0,g=0,y=0,w=0,x,k,E,T,z,_=null,P=0,D,I=new rm.Buf16(Vo+1),O=new rm.Buf16(Vo+1),K=null,Z=0,W,me,V;for(c=0;c<=Vo;c++)I[c]=0;for(d=0;d<i;d++)I[r[n+d]]++;for(v=l,f=Vo;f>=1&&I[f]===0;f--);if(v>f&&(v=f),f===0)return o[a++]=1<<24|64<<16|0,o[a++]=1<<24|64<<16|0,u.bits=1,0;for(h=1;h<f&&I[h]===0;h++);for(v<h&&(v=h),g=1,c=1;c<=Vo;c++)if(g<<=1,g-=I[c],g<0)return-1;if(g>0&&(t===om||f!==1))return-1;for(O[1]=0,c=1;c<Vo;c++)O[c+1]=O[c]+I[c];for(d=0;d<i;d++)r[n+d]!==0&&(s[O[r[n+d]]++]=d);if(t===om?(_=K=s,D=19):t===Ph?(_=L6,P-=257,K=U6,Z-=257,D=256):(_=V6,K=j6,D=-1),w=0,d=0,c=h,z=a,p=v,b=0,E=-1,y=1<<v,T=y-1,t===Ph&&y>nm||t===am&&y>im)return 1;for(;;){W=c-b,s[d]<D?(me=0,V=s[d]):s[d]>D?(me=K[Z+s[d]],V=_[P+s[d]]):(me=32+64,V=0),x=1<<c-b,k=1<<p,h=k;do k-=x,o[z+(w>>b)+k]=W<<24|me<<16|V|0;while(k!==0);for(x=1<<c-1;w&x;)x>>=1;if(x!==0?(w&=x-1,w+=x):w=0,d++,--I[c]===0){if(c===f)break;c=r[n+s[d]]}if(c>v&&(w&T)!==E){for(b===0&&(b=v),z+=h,p=c-b,g=1<<p;p+b<f&&(g-=I[p+b],!(g<=0));)p++,g<<=1;if(y+=1<<p,t===Ph&&y>nm||t===am&&y>im)return 1;E=w&T,o[E]=v<<24|p<<16|z-a|0}}return w!==0&&(o[z+w]=c-b<<24|64<<16|0),u.bits=v,0},fr=$n,tp=Dw,fn=Ow,W6=M6,Vs=H6,K6=0,Ww=1,Kw=2,sm=4,q6=5,pu=6,Eo=0,X6=1,G6=2,jr=-2,qw=-3,Xw=-4,Z6=-5,lm=8,Gw=1,um=2,cm=3,dm=4,hm=5,fm=6,pm=7,vm=8,gm=9,mm=10,Mc=11,_n=12,Ah=13,ym=14,Dh=15,bm=16,wm=17,xm=18,km=19,vu=20,gu=21,Sm=22,Cm=23,Fm=24,Em=25,Tm=26,Oh=27,zm=28,_m=29,Xe=30,Zw=31,Y6=32,Q6=852,J6=592,$6=15,eF=$6;function Pm(e){return(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24)}function tF(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new fr.Buf16(320),this.work=new fr.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Yw(e){var t;return!e||!e.state?jr:(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=Gw,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new fr.Buf32(Q6),t.distcode=t.distdyn=new fr.Buf32(J6),t.sane=1,t.back=-1,Eo)}function Qw(e){var t;return!e||!e.state?jr:(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,Yw(e))}function Jw(e,t){var r,n;return!e||!e.state||(n=e.state,t<0?(r=0,t=-t):(r=(t>>4)+1,t<48&&(t&=15)),t&&(t<8||t>15))?jr:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,Qw(e))}function $w(e,t){var r,n;return e?(n=new tF,e.state=n,n.window=null,r=Jw(e,t),r!==Eo&&(e.state=null),r):jr}function rF(e){return $w(e,eF)}var Am=!0,Rh,Bh;function nF(e){if(Am){var t;for(Rh=new fr.Buf32(512),Bh=new fr.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Vs(Ww,e.lens,0,288,Rh,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Vs(Kw,e.lens,0,32,Bh,0,e.work,{bits:5}),Am=!1}e.lencode=Rh,e.lenbits=9,e.distcode=Bh,e.distbits=5}function ex(e,t,r,n){var i,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new fr.Buf8(o.wsize)),n>=o.wsize?(fr.arraySet(o.window,t,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i=o.wsize-o.wnext,i>n&&(i=n),fr.arraySet(o.window,t,r-n,i,o.wnext),n-=i,n?(fr.arraySet(o.window,t,r-n,n,0),o.wnext=n,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}function iF(e,t){var r,n,i,o,a,s,u,l,c,d,h,f,v,p,b=0,g,y,w,x,k,E,T,z,_=new fr.Buf8(4),P,D,I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return jr;r=e.state,r.mode===_n&&(r.mode=Ah),a=e.next_out,i=e.output,u=e.avail_out,o=e.next_in,n=e.input,s=e.avail_in,l=r.hold,c=r.bits,d=s,h=u,z=Eo;e:for(;;)switch(r.mode){case Gw:if(r.wrap===0){r.mode=Ah;break}for(;c<16;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(r.wrap&2&&l===35615){r.check=0,_[0]=l&255,_[1]=l>>>8&255,r.check=fn(r.check,_,2,0),l=0,c=0,r.mode=um;break}if(r.flags=0,r.head&&(r.head.done=!1),!(r.wrap&1)||(((l&255)<<8)+(l>>8))%31){e.msg="incorrect header check",r.mode=Xe;break}if((l&15)!==lm){e.msg="unknown compression method",r.mode=Xe;break}if(l>>>=4,c-=4,T=(l&15)+8,r.wbits===0)r.wbits=T;else if(T>r.wbits){e.msg="invalid window size",r.mode=Xe;break}r.dmax=1<<T,e.adler=r.check=1,r.mode=l&512?mm:_n,l=0,c=0;break;case um:for(;c<16;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(r.flags=l,(r.flags&255)!==lm){e.msg="unknown compression method",r.mode=Xe;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=Xe;break}r.head&&(r.head.text=l>>8&1),r.flags&512&&(_[0]=l&255,_[1]=l>>>8&255,r.check=fn(r.check,_,2,0)),l=0,c=0,r.mode=cm;case cm:for(;c<32;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}r.head&&(r.head.time=l),r.flags&512&&(_[0]=l&255,_[1]=l>>>8&255,_[2]=l>>>16&255,_[3]=l>>>24&255,r.check=fn(r.check,_,4,0)),l=0,c=0,r.mode=dm;case dm:for(;c<16;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}r.head&&(r.head.xflags=l&255,r.head.os=l>>8),r.flags&512&&(_[0]=l&255,_[1]=l>>>8&255,r.check=fn(r.check,_,2,0)),l=0,c=0,r.mode=hm;case hm:if(r.flags&1024){for(;c<16;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}r.length=l,r.head&&(r.head.extra_len=l),r.flags&512&&(_[0]=l&255,_[1]=l>>>8&255,r.check=fn(r.check,_,2,0)),l=0,c=0}else r.head&&(r.head.extra=null);r.mode=fm;case fm:if(r.flags&1024&&(f=r.length,f>s&&(f=s),f&&(r.head&&(T=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),fr.arraySet(r.head.extra,n,o,f,T)),r.flags&512&&(r.check=fn(r.check,n,f,o)),s-=f,o+=f,r.length-=f),r.length))break e;r.length=0,r.mode=pm;case pm:if(r.flags&2048){if(s===0)break e;f=0;do T=n[o+f++],r.head&&T&&r.length<65536&&(r.head.name+=String.fromCharCode(T));while(T&&f<s);if(r.flags&512&&(r.check=fn(r.check,n,f,o)),s-=f,o+=f,T)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=vm;case vm:if(r.flags&4096){if(s===0)break e;f=0;do T=n[o+f++],r.head&&T&&r.length<65536&&(r.head.comment+=String.fromCharCode(T));while(T&&f<s);if(r.flags&512&&(r.check=fn(r.check,n,f,o)),s-=f,o+=f,T)break e}else r.head&&(r.head.comment=null);r.mode=gm;case gm:if(r.flags&512){for(;c<16;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(l!==(r.check&65535)){e.msg="header crc mismatch",r.mode=Xe;break}l=0,c=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=_n;break;case mm:for(;c<32;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}e.adler=r.check=Pm(l),l=0,c=0,r.mode=Mc;case Mc:if(r.havedict===0)return e.next_out=a,e.avail_out=u,e.next_in=o,e.avail_in=s,r.hold=l,r.bits=c,G6;e.adler=r.check=1,r.mode=_n;case _n:if(t===q6||t===pu)break e;case Ah:if(r.last){l>>>=c&7,c-=c&7,r.mode=Oh;break}for(;c<3;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}switch(r.last=l&1,l>>>=1,c-=1,l&3){case 0:r.mode=ym;break;case 1:if(nF(r),r.mode=vu,t===pu){l>>>=2,c-=2;break e}break;case 2:r.mode=wm;break;case 3:e.msg="invalid block type",r.mode=Xe}l>>>=2,c-=2;break;case ym:for(l>>>=c&7,c-=c&7;c<32;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if((l&65535)!==(l>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Xe;break}if(r.length=l&65535,l=0,c=0,r.mode=Dh,t===pu)break e;case Dh:r.mode=bm;case bm:if(f=r.length,f){if(f>s&&(f=s),f>u&&(f=u),f===0)break e;fr.arraySet(i,n,o,f,a),s-=f,o+=f,u-=f,a+=f,r.length-=f;break}r.mode=_n;break;case wm:for(;c<14;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(r.nlen=(l&31)+257,l>>>=5,c-=5,r.ndist=(l&31)+1,l>>>=5,c-=5,r.ncode=(l&15)+4,l>>>=4,c-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Xe;break}r.have=0,r.mode=xm;case xm:for(;r.have<r.ncode;){for(;c<3;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}r.lens[I[r.have++]]=l&7,l>>>=3,c-=3}for(;r.have<19;)r.lens[I[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,P={bits:r.lenbits},z=Vs(K6,r.lens,0,19,r.lencode,0,r.work,P),r.lenbits=P.bits,z){e.msg="invalid code lengths set",r.mode=Xe;break}r.have=0,r.mode=km;case km:for(;r.have<r.nlen+r.ndist;){for(;b=r.lencode[l&(1<<r.lenbits)-1],g=b>>>24,y=b>>>16&255,w=b&65535,!(g<=c);){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(w<16)l>>>=g,c-=g,r.lens[r.have++]=w;else{if(w===16){for(D=g+2;c<D;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(l>>>=g,c-=g,r.have===0){e.msg="invalid bit length repeat",r.mode=Xe;break}T=r.lens[r.have-1],f=3+(l&3),l>>>=2,c-=2}else if(w===17){for(D=g+3;c<D;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}l>>>=g,c-=g,T=0,f=3+(l&7),l>>>=3,c-=3}else{for(D=g+7;c<D;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}l>>>=g,c-=g,T=0,f=11+(l&127),l>>>=7,c-=7}if(r.have+f>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Xe;break}for(;f--;)r.lens[r.have++]=T}}if(r.mode===Xe)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=Xe;break}if(r.lenbits=9,P={bits:r.lenbits},z=Vs(Ww,r.lens,0,r.nlen,r.lencode,0,r.work,P),r.lenbits=P.bits,z){e.msg="invalid literal/lengths set",r.mode=Xe;break}if(r.distbits=6,r.distcode=r.distdyn,P={bits:r.distbits},z=Vs(Kw,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,P),r.distbits=P.bits,z){e.msg="invalid distances set",r.mode=Xe;break}if(r.mode=vu,t===pu)break e;case vu:r.mode=gu;case gu:if(s>=6&&u>=258){e.next_out=a,e.avail_out=u,e.next_in=o,e.avail_in=s,r.hold=l,r.bits=c,W6(e,h),a=e.next_out,i=e.output,u=e.avail_out,o=e.next_in,n=e.input,s=e.avail_in,l=r.hold,c=r.bits,r.mode===_n&&(r.back=-1);break}for(r.back=0;b=r.lencode[l&(1<<r.lenbits)-1],g=b>>>24,y=b>>>16&255,w=b&65535,!(g<=c);){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(y&&(y&240)===0){for(x=g,k=y,E=w;b=r.lencode[E+((l&(1<<x+k)-1)>>x)],g=b>>>24,y=b>>>16&255,w=b&65535,!(x+g<=c);){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}l>>>=x,c-=x,r.back+=x}if(l>>>=g,c-=g,r.back+=g,r.length=w,y===0){r.mode=Tm;break}if(y&32){r.back=-1,r.mode=_n;break}if(y&64){e.msg="invalid literal/length code",r.mode=Xe;break}r.extra=y&15,r.mode=Sm;case Sm:if(r.extra){for(D=r.extra;c<D;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}r.length+=l&(1<<r.extra)-1,l>>>=r.extra,c-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=Cm;case Cm:for(;b=r.distcode[l&(1<<r.distbits)-1],g=b>>>24,y=b>>>16&255,w=b&65535,!(g<=c);){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if((y&240)===0){for(x=g,k=y,E=w;b=r.distcode[E+((l&(1<<x+k)-1)>>x)],g=b>>>24,y=b>>>16&255,w=b&65535,!(x+g<=c);){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}l>>>=x,c-=x,r.back+=x}if(l>>>=g,c-=g,r.back+=g,y&64){e.msg="invalid distance code",r.mode=Xe;break}r.offset=w,r.extra=y&15,r.mode=Fm;case Fm:if(r.extra){for(D=r.extra;c<D;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}r.offset+=l&(1<<r.extra)-1,l>>>=r.extra,c-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Xe;break}r.mode=Em;case Em:if(u===0)break e;if(f=h-u,r.offset>f){if(f=r.offset-f,f>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Xe;break}f>r.wnext?(f-=r.wnext,v=r.wsize-f):v=r.wnext-f,f>r.length&&(f=r.length),p=r.window}else p=i,v=a-r.offset,f=r.length;f>u&&(f=u),u-=f,r.length-=f;do i[a++]=p[v++];while(--f);r.length===0&&(r.mode=gu);break;case Tm:if(u===0)break e;i[a++]=r.length,u--,r.mode=gu;break;case Oh:if(r.wrap){for(;c<32;){if(s===0)break e;s--,l|=n[o++]<<c,c+=8}if(h-=u,e.total_out+=h,r.total+=h,h&&(e.adler=r.check=r.flags?fn(r.check,i,h,a-h):tp(r.check,i,h,a-h)),h=u,(r.flags?l:Pm(l))!==r.check){e.msg="incorrect data check",r.mode=Xe;break}l=0,c=0}r.mode=zm;case zm:if(r.wrap&&r.flags){for(;c<32;){if(s===0)break e;s--,l+=n[o++]<<c,c+=8}if(l!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=Xe;break}l=0,c=0}r.mode=_m;case _m:z=X6;break e;case Xe:z=qw;break e;case Zw:return Xw;case Y6:default:return jr}return e.next_out=a,e.avail_out=u,e.next_in=o,e.avail_in=s,r.hold=l,r.bits=c,(r.wsize||h!==e.avail_out&&r.mode<Xe&&(r.mode<Oh||t!==sm))&&ex(e,e.output,e.next_out,h-e.avail_out),d-=e.avail_in,h-=e.avail_out,e.total_in+=d,e.total_out+=h,r.total+=h,r.wrap&&h&&(e.adler=r.check=r.flags?fn(r.check,i,h,e.next_out-h):tp(r.check,i,h,e.next_out-h)),e.data_type=r.bits+(r.last?64:0)+(r.mode===_n?128:0)+(r.mode===vu||r.mode===Dh?256:0),(d===0&&h===0||t===sm)&&z===Eo&&(z=Z6),z}function oF(e){if(!e||!e.state)return jr;var t=e.state;return t.window&&(t.window=null),e.state=null,Eo}function aF(e,t){var r;return!e||!e.state||(r=e.state,(r.wrap&2)===0)?jr:(r.head=t,t.done=!1,Eo)}function sF(e,t){var r=t.length,n,i,o;return!e||!e.state||(n=e.state,n.wrap!==0&&n.mode!==Mc)?jr:n.mode===Mc&&(i=1,i=tp(i,t,r,0),i!==n.check)?qw:(o=ex(e,t,r,r),o?(n.mode=Zw,Xw):(n.havedict=1,Eo))}cn.inflateReset=Qw;cn.inflateReset2=Jw;cn.inflateResetKeep=Yw;cn.inflateInit=rF;cn.inflateInit2=$w;cn.inflate=iF;cn.inflateEnd=oF;cn.inflateGetHeader=aF;cn.inflateSetDictionary=sF;cn.inflateInfo="pako inflate (from Nodeca project)";var tx={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};function lF(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var uF=lF,ga=cn,js=$n,Ku=Ao,at=tx,rp=S0,cF=jw,dF=uF,rx=Object.prototype.toString;function To(e){if(!(this instanceof To))return new To(e);this.options=js.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new cF,this.strm.avail_out=0;var r=ga.inflateInit2(this.strm,t.windowBits);if(r!==at.Z_OK)throw new Error(rp[r]);if(this.header=new dF,ga.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=Ku.string2buf(t.dictionary):rx.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=ga.inflateSetDictionary(this.strm,t.dictionary),r!==at.Z_OK)))throw new Error(rp[r])}To.prototype.push=function(e,t){var r=this.strm,n=this.options.chunkSize,i=this.options.dictionary,o,a,s,u,l,c=!1;if(this.ended)return!1;a=t===~~t?t:t===!0?at.Z_FINISH:at.Z_NO_FLUSH,typeof e=="string"?r.input=Ku.binstring2buf(e):rx.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;do{if(r.avail_out===0&&(r.output=new js.Buf8(n),r.next_out=0,r.avail_out=n),o=ga.inflate(r,at.Z_NO_FLUSH),o===at.Z_NEED_DICT&&i&&(o=ga.inflateSetDictionary(this.strm,i)),o===at.Z_BUF_ERROR&&c===!0&&(o=at.Z_OK,c=!1),o!==at.Z_STREAM_END&&o!==at.Z_OK)return this.onEnd(o),this.ended=!0,!1;r.next_out&&(r.avail_out===0||o===at.Z_STREAM_END||r.avail_in===0&&(a===at.Z_FINISH||a===at.Z_SYNC_FLUSH))&&(this.options.to==="string"?(s=Ku.utf8border(r.output,r.next_out),u=r.next_out-s,l=Ku.buf2string(r.output,s),r.next_out=u,r.avail_out=n-u,u&&js.arraySet(r.output,r.output,s,u,0),this.onData(l)):this.onData(js.shrinkBuf(r.output,r.next_out))),r.avail_in===0&&r.avail_out===0&&(c=!0)}while((r.avail_in>0||r.avail_out===0)&&o!==at.Z_STREAM_END);return o===at.Z_STREAM_END&&(a=at.Z_FINISH),a===at.Z_FINISH?(o=ga.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,o===at.Z_OK):(a===at.Z_SYNC_FLUSH&&(this.onEnd(at.Z_OK),r.avail_out=0),!0)};To.prototype.onData=function(e){this.chunks.push(e)};To.prototype.onEnd=function(e){e===at.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=js.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function F0(e,t){var r=new To(t);if(r.push(e,!0),r.err)throw r.msg||rp[r.err];return r.result}function hF(e,t){return t=t||{},t.raw=!0,F0(e,t)}Vl.Inflate=To;Vl.inflate=F0;Vl.inflateRaw=hF;Vl.ungzip=F0;var fF=$n.assign,pF=Ml,vF=Vl,gF=tx,nx={};fF(nx,pF,vF,gF);var Cd=nx,Dm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ws=new Uint8Array(256);for(var mu=0;mu<Dm.length;mu++)ws[Dm.charCodeAt(mu)]=mu;var mF=function(e){var t=e.length*.75,r=e.length,n,i=0,o,a,s,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=new Uint8Array(t);for(n=0;n<r;n+=4)o=ws[e.charCodeAt(n)],a=ws[e.charCodeAt(n+1)],s=ws[e.charCodeAt(n+2)],u=ws[e.charCodeAt(n+3)],l[i++]=o<<2|a>>4,l[i++]=(a&15)<<4|s>>2,l[i++]=(s&3)<<6|u&63;return l},yF=function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},ix=function(e){return yF(Cd.inflate(mF(e)))},bF=function(e,t,r){for(var n="",i=0,o=t-e.length;i<o;i++)n+=r;return n+e};const wF="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",xF="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",kF="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",SF="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",CF="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",FF="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",EF="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",TF="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",zF="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",_F="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",PF="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",AF="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",DF="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",OF="eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==";var RF={Courier:SF,"Courier-Bold":wF,"Courier-Oblique":kF,"Courier-BoldOblique":xF,Helvetica:TF,"Helvetica-Bold":CF,"Helvetica-Oblique":EF,"Helvetica-BoldOblique":FF,"Times-Roman":AF,"Times-Bold":zF,"Times-Italic":PF,"Times-BoldItalic":_F,Symbol:DF,ZapfDingbats:OF},wl;(function(e){e.Courier="Courier",e.CourierBold="Courier-Bold",e.CourierOblique="Courier-Oblique",e.CourierBoldOblique="Courier-BoldOblique",e.Helvetica="Helvetica",e.HelveticaBold="Helvetica-Bold",e.HelveticaOblique="Helvetica-Oblique",e.HelveticaBoldOblique="Helvetica-BoldOblique",e.TimesRoman="Times-Roman",e.TimesRomanBold="Times-Bold",e.TimesRomanItalic="Times-Italic",e.TimesRomanBoldItalic="Times-BoldItalic",e.Symbol="Symbol",e.ZapfDingbats="ZapfDingbats"})(wl||(wl={}));var Om={},BF=function(){function e(){var t=this;this.getWidthOfGlyph=function(r){return t.CharWidths[r]},this.getXAxisKerningForPair=function(r,n){return(t.KernPairXAmounts[r]||{})[n]}}return e.load=function(t){var r=Om[t];if(r)return r;var n=ix(RF[t]),i=Object.assign(new e,JSON.parse(n));return i.CharWidths=i.CharMetrics.reduce(function(o,a){return o[a.N]=a.WX,o},{}),i.KernPairXAmounts=i.KernPairs.reduce(function(o,a){var s=a[0],u=a[1],l=a[2];return o[s]||(o[s]={}),o[s][u]=l,o},{}),Om[t]=i,i},e}();const NF="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";var IF=ix(NF),Nh=JSON.parse(IF),Ih=function(){function e(t,r){var n=this;this.canEncodeUnicodeCodePoint=function(i){return i in n.unicodeMappings},this.encodeUnicodeCodePoint=function(i){var o=n.unicodeMappings[i];if(!o){var a=String.fromCharCode(i),s="0x"+bF(i.toString(16),4,"0"),u=n.name+' cannot encode "'+a+'" ('+s+")";throw new Error(u)}return{code:o[0],name:o[1]}},this.name=t,this.supportedCodePoints=Object.keys(r).map(Number).sort(function(i,o){return i-o}),this.unicodeMappings=r}return e}(),yu={Symbol:new Ih("Symbol",Nh.symbol),ZapfDingbats:new Ih("ZapfDingbats",Nh.zapfdingbats),WinAnsi:new Ih("WinAnsi",Nh.win1252)},Fd=function(e){return Object.keys(e).map(function(t){return e[t]})},MF=Fd(wl),Rm=function(e){return MF.includes(e)},bu=function(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height},ht=function(e){return"`"+e+"`"},LF=function(e){return"'"+e+"'"},Bm=function(e){var t=typeof e;return t==="string"?LF(e):t==="undefined"?ht(e):e},UF=function(e,t,r){for(var n=new Array(r.length),i=0,o=r.length;i<o;i++){var a=r[i];n[i]=Bm(a)}var s=n.join(" or ");return ht(t)+" must be one of "+s+", but was actually "+Bm(e)},xi=function(e,t,r){Array.isArray(r)||(r=Fd(r));for(var n=0,i=r.length;n<i;n++)if(e===r[n])return;throw new TypeError(UF(e,t,r))},Fr=function(e,t,r){Array.isArray(r)||(r=Fd(r)),xi(e,t,r.concat(void 0))},VF=function(e,t,r){Array.isArray(r)||(r=Fd(r));for(var n=0,i=e.length;n<i;n++)xi(e[n],t,r)},jF=function(e){return e===null?"null":e===void 0?"undefined":typeof e=="string"?"string":isNaN(e)?"NaN":typeof e=="number"?"number":typeof e=="boolean"?"boolean":typeof e=="symbol"?"symbol":typeof e=="bigint"?"bigint":e.constructor&&e.constructor.name?e.constructor.name:e.name?e.name:e.constructor?String(e.constructor):String(e)},HF=function(e,t){return t==="null"?e===null:t==="undefined"?e===void 0:t==="string"?typeof e=="string":t==="number"?typeof e=="number"&&!isNaN(e):t==="boolean"?typeof e=="boolean":t==="symbol"?typeof e=="symbol":t==="bigint"?typeof e=="bigint":t===Date?e instanceof Date:t===Array?e instanceof Array:t===Uint8Array?e instanceof Uint8Array:t===ArrayBuffer?e instanceof ArrayBuffer:t===Function?e instanceof Function:e instanceof t[0]},WF=function(e,t,r){for(var n=new Array(r.length),i=0,o=r.length;i<o;i++){var a=r[i];a==="null"&&(n[i]=ht("null")),a==="undefined"&&(n[i]=ht("undefined")),a==="string"?n[i]=ht("string"):a==="number"?n[i]=ht("number"):a==="boolean"?n[i]=ht("boolean"):a==="symbol"?n[i]=ht("symbol"):a==="bigint"?n[i]=ht("bigint"):a===Array?n[i]=ht("Array"):a===Uint8Array?n[i]=ht("Uint8Array"):a===ArrayBuffer?n[i]=ht("ArrayBuffer"):n[i]=ht(a[1])}var s=n.join(" or ");return ht(t)+" must be of type "+s+", but was actually of type "+ht(jF(e))},A=function(e,t,r){for(var n=0,i=r.length;n<i;n++)if(HF(e,r[n]))return;throw new TypeError(WF(e,t,r))},M=function(e,t,r){A(e,t,r.concat("undefined"))},ox=function(e,t,r){for(var n=0,i=e.length;n<i;n++)A(e[n],t,r)},pr=function(e,t,r,n){if(A(e,t,["number"]),A(r,"min",["number"]),A(n,"max",["number"]),n=Math.max(r,n),e<r||e>n)throw new Error(ht(t)+" must be at least "+r+" and at most "+n+", but was actually "+e)},Xr=function(e,t,r,n){A(e,t,["number","undefined"]),typeof e=="number"&&pr(e,t,r,n)},ax=function(e,t,r){if(A(e,t,["number"]),e%r!==0)throw new Error(ht(t)+" must be a multiple of "+r+", but was actually "+e)},KF=function(e,t){if(!Number.isInteger(e))throw new Error(ht(t)+" must be an integer, but was actually "+e)},Ed=function(e,t){if(![1,0].includes(Math.sign(e)))throw new Error(ht(t)+" must be a positive number or 0, but was actually "+e)},de=new Uint16Array(256);for(var wu=0;wu<256;wu++)de[wu]=wu;de[22]=le("");de[24]=le("\u02D8");de[25]=le("\u02C7");de[26]=le("\u02C6");de[27]=le("\u02D9");de[28]=le("\u02DD");de[29]=le("\u02DB");de[30]=le("\u02DA");de[31]=le("\u02DC");de[127]=le("\uFFFD");de[128]=le("\u2022");de[129]=le("\u2020");de[130]=le("\u2021");de[131]=le("\u2026");de[132]=le("\u2014");de[133]=le("\u2013");de[134]=le("\u0192");de[135]=le("\u2044");de[136]=le("\u2039");de[137]=le("\u203A");de[138]=le("\u2212");de[139]=le("\u2030");de[140]=le("\u201E");de[141]=le("\u201C");de[142]=le("\u201D");de[143]=le("\u2018");de[144]=le("\u2019");de[145]=le("\u201A");de[146]=le("\u2122");de[147]=le("\uFB01");de[148]=le("\uFB02");de[149]=le("\u0141");de[150]=le("\u0152");de[151]=le("\u0160");de[152]=le("\u0178");de[153]=le("\u017D");de[154]=le("\u0131");de[155]=le("\u0142");de[156]=le("\u0153");de[157]=le("\u0161");de[158]=le("\u017E");de[159]=le("\uFFFD");de[160]=le("\u20AC");de[173]=le("\uFFFD");var sx=function(e){for(var t=new Array(e.length),r=0,n=e.length;r<n;r++)t[r]=de[e[r]];return String.fromCodePoint.apply(String,t)},Vn=function(){function e(t){this.populate=t,this.value=void 0}return e.prototype.getValue=function(){return this.value},e.prototype.access=function(){return this.value||(this.value=this.populate()),this.value},e.prototype.invalidate=function(){this.value=void 0},e.populatedBy=function(t){return new e(t)},e}(),Ar=function(e){L(t,e);function t(r,n){var i=this,o="Method "+r+"."+n+"() not implemented";return i=e.call(this,o)||this,i}return t}(Error),E0=function(e){L(t,e);function t(r){var n=this,i="Cannot construct "+r+" - it has a private constructor";return n=e.call(this,i)||this,n}return t}(Error),Lc=function(e){L(t,e);function t(r,n){var i=this,o=function(u){var l,c;return(l=u==null?void 0:u.name)!==null&&l!==void 0?l:(c=u==null?void 0:u.constructor)===null||c===void 0?void 0:c.name},a=Array.isArray(r)?r.map(o):[o(r)],s="Expected instance of "+a.join(" or ")+", "+("but got instance of "+(n&&o(n)));return i=e.call(this,s)||this,i}return t}(Error),qF=function(e){L(t,e);function t(r){var n=this,i=r+" stream encoding not supported";return n=e.call(this,i)||this,n}return t}(Error),T0=function(e){L(t,e);function t(r,n){var i=this,o="Cannot call "+r+"."+n+"() more than once";return i=e.call(this,o)||this,i}return t}(Error);(function(e){L(t,e);function t(r){var n=this,i="Missing catalog (ref="+r+")";return n=e.call(this,i)||this,n}return t})(Error);var XF=function(e){L(t,e);function t(){var r=this,n="Can't embed page with missing Contents";return r=e.call(this,n)||this,r}return t}(Error),GF=function(e){L(t,e);function t(r){var n,i,o,a=this,s=(o=(i=(n=r==null?void 0:r.contructor)===null||n===void 0?void 0:n.name)!==null&&i!==void 0?i:r==null?void 0:r.name)!==null&&o!==void 0?o:r,u="Unrecognized stream type: "+s;return a=e.call(this,u)||this,a}return t}(Error),ZF=function(e){L(t,e);function t(){var r=this,n="Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";return r=e.call(this,n)||this,r}return t}(Error),YF=function(e){L(t,e);function t(r){var n=this,i="Attempted to convert PDFArray with "+r+" elements to rectangle, but must have exactly 4 elements.";return n=e.call(this,i)||this,n}return t}(Error),lx=function(e){L(t,e);function t(r){var n=this,i='Attempted to convert "'+r+'" to a date, but it does not match the PDF date string format.';return n=e.call(this,i)||this,n}return t}(Error),Nm=function(e){L(t,e);function t(r,n){var i=this,o="Invalid targetIndex specified: targetIndex="+r+" must be less than Count="+n;return i=e.call(this,o)||this,i}return t}(Error),Im=function(e){L(t,e);function t(r,n){var i=this,o="Failed to "+n+" at targetIndex="+r+" due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";return i=e.call(this,o)||this,i}return t}(Error),Uc=function(e){L(t,e);function t(r,n,i){var o=this,a="index should be at least "+n+" and at most "+i+", but was actually "+r;return o=e.call(this,a)||this,o}return t}(Error),z0=function(e){L(t,e);function t(){var r=this,n="Attempted to set invalid field value";return r=e.call(this,n)||this,r}return t}(Error),QF=function(e){L(t,e);function t(){var r=this,n="Attempted to select multiple values for single-select field";return r=e.call(this,n)||this,r}return t}(Error),JF=function(e){L(t,e);function t(r){var n=this,i="No /DA (default appearance) entry found for field: "+r;return n=e.call(this,i)||this,n}return t}(Error),$F=function(e){L(t,e);function t(r){var n=this,i="No Tf operator found for DA of field: "+r;return n=e.call(this,i)||this,n}return t}(Error),Mm=function(e){L(t,e);function t(r,n){var i=this,o="Failed to parse number "+("(line:"+r.line+" col:"+r.column+" offset="+r.offset+'): "'+n+'"');return i=e.call(this,o)||this,i}return t}(Error),Yi=function(e){L(t,e);function t(r,n){var i=this,o="Failed to parse PDF document "+("(line:"+r.line+" col:"+r.column+" offset="+r.offset+"): "+n);return i=e.call(this,o)||this,i}return t}(Error),eE=function(e){L(t,e);function t(r,n,i){var o=this,a="Expected next byte to be "+n+" but it was actually "+i;return o=e.call(this,r,a)||this,o}return t}(Yi),tE=function(e){L(t,e);function t(r,n){var i=this,o="Failed to parse PDF object starting with the following byte: "+n;return i=e.call(this,r,o)||this,i}return t}(Yi),rE=function(e){L(t,e);function t(r){var n=this,i="Failed to parse invalid PDF object";return n=e.call(this,r,i)||this,n}return t}(Yi),nE=function(e){L(t,e);function t(r){var n=this,i="Failed to parse PDF stream";return n=e.call(this,r,i)||this,n}return t}(Yi),iE=function(e){L(t,e);function t(r){var n=this,i="Failed to parse PDF literal string due to unbalanced parenthesis";return n=e.call(this,r,i)||this,n}return t}(Yi),oE=function(e){L(t,e);function t(r){var n=this,i="Parser stalled";return n=e.call(this,r,i)||this,n}return t}(Yi),aE=function(e){L(t,e);function t(r){var n=this,i="No PDF header found";return n=e.call(this,r,i)||this,n}return t}(Yi),sE=function(e){L(t,e);function t(r,n){var i=this,o="Did not find expected keyword '"+cw(n)+"'";return i=e.call(this,r,o)||this,i}return t}(Yi),np;(function(e){e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.Newline=10]="Newline",e[e.FormFeed=12]="FormFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationPoint=33]="ExclamationPoint",e[e.Hash=35]="Hash",e[e.Percent=37]="Percent",e[e.LeftParen=40]="LeftParen",e[e.RightParen=41]="RightParen",e[e.Plus=43]="Plus",e[e.Minus=45]="Minus",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.ForwardSlash=47]="ForwardSlash",e[e.Zero=48]="Zero",e[e.One=49]="One",e[e.Two=50]="Two",e[e.Three=51]="Three",e[e.Four=52]="Four",e[e.Five=53]="Five",e[e.Six=54]="Six",e[e.Seven=55]="Seven",e[e.Eight=56]="Eight",e[e.Nine=57]="Nine",e[e.LessThan=60]="LessThan",e[e.GreaterThan=62]="GreaterThan",e[e.A=65]="A",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.O=79]="O",e[e.P=80]="P",e[e.R=82]="R",e[e.LeftSquareBracket=91]="LeftSquareBracket",e[e.BackSlash=92]="BackSlash",e[e.RightSquareBracket=93]="RightSquareBracket",e[e.a=97]="a",e[e.b=98]="b",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.i=105]="i",e[e.j=106]="j",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.x=120]="x",e[e.LeftCurly=123]="LeftCurly",e[e.RightCurly=125]="RightCurly",e[e.Tilde=126]="Tilde"})(np||(np={}));const F=np;var Td=function(){function e(t,r){this.major=String(t),this.minor=String(r)}return e.prototype.toString=function(){var t=Un(129);return"%PDF-"+this.major+"."+this.minor+`
%`+t+t+t+t},e.prototype.sizeInBytes=function(){return 12+this.major.length+this.minor.length},e.prototype.copyBytesInto=function(t,r){var n=r;return t[r++]=F.Percent,t[r++]=F.P,t[r++]=F.D,t[r++]=F.F,t[r++]=F.Dash,r+=Tt(this.major,t,r),t[r++]=F.Period,r+=Tt(this.minor,t,r),t[r++]=F.Newline,t[r++]=F.Percent,t[r++]=129,t[r++]=129,t[r++]=129,t[r++]=129,r-n},e.forVersion=function(t,r){return new e(t,r)},e}(),Kt=function(){function e(){}return e.prototype.clone=function(t){throw new Ar(this.constructor.name,"clone")},e.prototype.toString=function(){throw new Ar(this.constructor.name,"toString")},e.prototype.sizeInBytes=function(){throw new Ar(this.constructor.name,"sizeInBytes")},e.prototype.copyBytesInto=function(t,r){throw new Ar(this.constructor.name,"copyBytesInto")},e}(),oe=function(e){L(t,e);function t(r){var n=e.call(this)||this;return n.numberValue=r,n.stringValue=F8(r),n}return t.prototype.asNumber=function(){return this.numberValue},t.prototype.value=function(){return this.numberValue},t.prototype.clone=function(){return t.of(this.numberValue)},t.prototype.toString=function(){return this.stringValue},t.prototype.sizeInBytes=function(){return this.stringValue.length},t.prototype.copyBytesInto=function(r,n){return n+=Tt(this.stringValue,r,n),this.stringValue.length},t.of=function(r){return new t(r)},t}(Kt),_e=function(e){L(t,e);function t(r){var n=e.call(this)||this;return n.array=[],n.context=r,n}return t.prototype.size=function(){return this.array.length},t.prototype.push=function(r){this.array.push(r)},t.prototype.insert=function(r,n){this.array.splice(r,0,n)},t.prototype.indexOf=function(r){var n=this.array.indexOf(r);return n===-1?void 0:n},t.prototype.remove=function(r){this.array.splice(r,1)},t.prototype.set=function(r,n){this.array[r]=n},t.prototype.get=function(r){return this.array[r]},t.prototype.lookupMaybe=function(r){for(var n,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return(n=this.context).lookupMaybe.apply(n,Fe([this.get(r)],i))},t.prototype.lookup=function(r){for(var n,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return(n=this.context).lookup.apply(n,Fe([this.get(r)],i))},t.prototype.asRectangle=function(){if(this.size()!==4)throw new YF(this.size());var r=this.lookup(0,oe).asNumber(),n=this.lookup(1,oe).asNumber(),i=this.lookup(2,oe).asNumber(),o=this.lookup(3,oe).asNumber(),a=r,s=n,u=i-r,l=o-n;return{x:a,y:s,width:u,height:l}},t.prototype.asArray=function(){return this.array.slice()},t.prototype.clone=function(r){for(var n=t.withContext(r||this.context),i=0,o=this.size();i<o;i++)n.push(this.array[i]);return n},t.prototype.toString=function(){for(var r="[ ",n=0,i=this.size();n<i;n++)r+=this.get(n).toString(),r+=" ";return r+="]",r},t.prototype.sizeInBytes=function(){for(var r=3,n=0,i=this.size();n<i;n++)r+=this.get(n).sizeInBytes()+1;return r},t.prototype.copyBytesInto=function(r,n){var i=n;r[n++]=F.LeftSquareBracket,r[n++]=F.Space;for(var o=0,a=this.size();o<a;o++)n+=this.get(o).copyBytesInto(r,n),r[n++]=F.Space;return r[n++]=F.RightSquareBracket,n-i},t.prototype.scalePDFNumbers=function(r,n){for(var i=0,o=this.size();i<o;i++){var a=this.lookup(i);if(a instanceof oe){var s=i%2===0?r:n;this.set(i,oe.of(a.asNumber()*s))}}},t.withContext=function(r){return new t(r)},t}(Kt),Mh={},xl=function(e){L(t,e);function t(r,n){var i=this;if(r!==Mh)throw new E0("PDFBool");return i=e.call(this)||this,i.value=n,i}return t.prototype.asBoolean=function(){return this.value},t.prototype.clone=function(){return this},t.prototype.toString=function(){return String(this.value)},t.prototype.sizeInBytes=function(){return this.value?4:5},t.prototype.copyBytesInto=function(r,n){return this.value?(r[n++]=F.t,r[n++]=F.r,r[n++]=F.u,r[n++]=F.e,4):(r[n++]=F.f,r[n++]=F.a,r[n++]=F.l,r[n++]=F.s,r[n++]=F.e,5)},t.True=new t(Mh,!0),t.False=new t(Mh,!1),t}(Kt),Kr=new Uint8Array(256);Kr[F.LeftParen]=1;Kr[F.RightParen]=1;Kr[F.LessThan]=1;Kr[F.GreaterThan]=1;Kr[F.LeftSquareBracket]=1;Kr[F.RightSquareBracket]=1;Kr[F.LeftCurly]=1;Kr[F.RightCurly]=1;Kr[F.ForwardSlash]=1;Kr[F.Percent]=1;var ei=new Uint8Array(256);ei[F.Null]=1;ei[F.Tab]=1;ei[F.Newline]=1;ei[F.FormFeed]=1;ei[F.CarriageReturn]=1;ei[F.Space]=1;var _0=new Uint8Array(256);for(var us=0,lE=256;us<lE;us++)_0[us]=ei[us]||Kr[us]?1:0;_0[F.Hash]=1;var uE=function(e){return e.replace(/#([\dABCDEF]{2})/g,function(t,r){return o8(r)})},cE=function(e){return e>=F.ExclamationPoint&&e<=F.Tilde&&!_0[e]},Lm={},Um=new Map,C=function(e){L(t,e);function t(r,n){var i=this;if(r!==Lm)throw new E0("PDFName");i=e.call(this)||this;for(var o="/",a=0,s=n.length;a<s;a++){var u=n[a],l=le(u);o+=cE(l)?u:"#"+wd(l)}return i.encodedName=o,i}return t.prototype.asBytes=function(){for(var r=[],n="",i=!1,o=function(d){d!==void 0&&r.push(d),i=!1},a=1,s=this.encodedName.length;a<s;a++){var u=this.encodedName[a],l=le(u),c=this.encodedName[a+1];i?l>=F.Zero&&l<=F.Nine||l>=F.a&&l<=F.f||l>=F.A&&l<=F.F?(n+=u,(n.length===2||!(c>="0"&&c<="9"||c>="a"&&c<="f"||c>="A"&&c<="F"))&&(o(parseInt(n,16)),n="")):o(l):l===F.Hash?i=!0:o(l)}return new Uint8Array(r)},t.prototype.decodeText=function(){var r=this.asBytes();return String.fromCharCode.apply(String,Array.from(r))},t.prototype.asString=function(){return this.encodedName},t.prototype.value=function(){return this.encodedName},t.prototype.clone=function(){return this},t.prototype.toString=function(){return this.encodedName},t.prototype.sizeInBytes=function(){return this.encodedName.length},t.prototype.copyBytesInto=function(r,n){return n+=Tt(this.encodedName,r,n),this.encodedName.length},t.of=function(r){var n=uE(r),i=Um.get(n);return i||(i=new t(Lm,n),Um.set(n,i)),i},t.Length=t.of("Length"),t.FlateDecode=t.of("FlateDecode"),t.Resources=t.of("Resources"),t.Font=t.of("Font"),t.XObject=t.of("XObject"),t.ExtGState=t.of("ExtGState"),t.Contents=t.of("Contents"),t.Type=t.of("Type"),t.Parent=t.of("Parent"),t.MediaBox=t.of("MediaBox"),t.Page=t.of("Page"),t.Annots=t.of("Annots"),t.TrimBox=t.of("TrimBox"),t.ArtBox=t.of("ArtBox"),t.BleedBox=t.of("BleedBox"),t.CropBox=t.of("CropBox"),t.Rotate=t.of("Rotate"),t.Title=t.of("Title"),t.Author=t.of("Author"),t.Subject=t.of("Subject"),t.Creator=t.of("Creator"),t.Keywords=t.of("Keywords"),t.Producer=t.of("Producer"),t.CreationDate=t.of("CreationDate"),t.ModDate=t.of("ModDate"),t}(Kt),dE=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.asNull=function(){return null},t.prototype.clone=function(){return this},t.prototype.toString=function(){return"null"},t.prototype.sizeInBytes=function(){return 4},t.prototype.copyBytesInto=function(r,n){return r[n++]=F.n,r[n++]=F.u,r[n++]=F.l,r[n++]=F.l,4},t}(Kt);const Jt=new dE;var he=function(e){L(t,e);function t(r,n){var i=e.call(this)||this;return i.dict=r,i.context=n,i}return t.prototype.keys=function(){return Array.from(this.dict.keys())},t.prototype.values=function(){return Array.from(this.dict.values())},t.prototype.entries=function(){return Array.from(this.dict.entries())},t.prototype.set=function(r,n){this.dict.set(r,n)},t.prototype.get=function(r,n){n===void 0&&(n=!1);var i=this.dict.get(r);if(!(i===Jt&&!n))return i},t.prototype.has=function(r){var n=this.dict.get(r);return n!==void 0&&n!==Jt},t.prototype.lookupMaybe=function(r){for(var n,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var a=i.includes(Jt),s=(n=this.context).lookupMaybe.apply(n,Fe([this.get(r,a)],i));if(!(s===Jt&&!a))return s},t.prototype.lookup=function(r){for(var n,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var a=i.includes(Jt),s=(n=this.context).lookup.apply(n,Fe([this.get(r,a)],i));if(!(s===Jt&&!a))return s},t.prototype.delete=function(r){return this.dict.delete(r)},t.prototype.asMap=function(){return new Map(this.dict)},t.prototype.uniqueKey=function(r){r===void 0&&(r="");for(var n=this.keys(),i=C.of(this.context.addRandomSuffix(r,10));n.includes(i);)i=C.of(this.context.addRandomSuffix(r,10));return i},t.prototype.clone=function(r){for(var n=t.withContext(r||this.context),i=this.entries(),o=0,a=i.length;o<a;o++){var s=i[o],u=s[0],l=s[1];n.set(u,l)}return n},t.prototype.toString=function(){for(var r=`<<
`,n=this.entries(),i=0,o=n.length;i<o;i++){var a=n[i],s=a[0],u=a[1];r+=s.toString()+" "+u.toString()+`
`}return r+=">>",r},t.prototype.sizeInBytes=function(){for(var r=5,n=this.entries(),i=0,o=n.length;i<o;i++){var a=n[i],s=a[0],u=a[1];r+=s.sizeInBytes()+u.sizeInBytes()+2}return r},t.prototype.copyBytesInto=function(r,n){var i=n;r[n++]=F.LessThan,r[n++]=F.LessThan,r[n++]=F.Newline;for(var o=this.entries(),a=0,s=o.length;a<s;a++){var u=o[a],l=u[0],c=u[1];n+=l.copyBytesInto(r,n),r[n++]=F.Space,n+=c.copyBytesInto(r,n),r[n++]=F.Newline}return r[n++]=F.GreaterThan,r[n++]=F.GreaterThan,n-i},t.withContext=function(r){return new t(new Map,r)},t.fromMapWithContext=function(r,n){return new t(r,n)},t}(Kt),mr=function(e){L(t,e);function t(r){var n=e.call(this)||this;return n.dict=r,n}return t.prototype.clone=function(r){throw new Ar(this.constructor.name,"clone")},t.prototype.getContentsString=function(){throw new Ar(this.constructor.name,"getContentsString")},t.prototype.getContents=function(){throw new Ar(this.constructor.name,"getContents")},t.prototype.getContentsSize=function(){throw new Ar(this.constructor.name,"getContentsSize")},t.prototype.updateDict=function(){var r=this.getContentsSize();this.dict.set(C.Length,oe.of(r))},t.prototype.sizeInBytes=function(){return this.updateDict(),this.dict.sizeInBytes()+this.getContentsSize()+18},t.prototype.toString=function(){this.updateDict();var r=this.dict.toString();return r+=`
stream
`,r+=this.getContentsString(),r+=`
endstream`,r},t.prototype.copyBytesInto=function(r,n){this.updateDict();var i=n;n+=this.dict.copyBytesInto(r,n),r[n++]=F.Newline,r[n++]=F.s,r[n++]=F.t,r[n++]=F.r,r[n++]=F.e,r[n++]=F.a,r[n++]=F.m,r[n++]=F.Newline;for(var o=this.getContents(),a=0,s=o.length;a<s;a++)r[n++]=o[a];return r[n++]=F.Newline,r[n++]=F.e,r[n++]=F.n,r[n++]=F.d,r[n++]=F.s,r[n++]=F.t,r[n++]=F.r,r[n++]=F.e,r[n++]=F.a,r[n++]=F.m,n-i},t}(Kt),kl=function(e){L(t,e);function t(r,n){var i=e.call(this,r)||this;return i.contents=n,i}return t.prototype.asUint8Array=function(){return this.contents.slice()},t.prototype.clone=function(r){return t.of(this.dict.clone(r),this.contents.slice())},t.prototype.getContentsString=function(){return cw(this.contents)},t.prototype.getContents=function(){return this.contents},t.prototype.getContentsSize=function(){return this.contents.length},t.of=function(r,n){return new t(r,n)},t}(mr),Vm={},jm=new Map,Me=function(e){L(t,e);function t(r,n,i){var o=this;if(r!==Vm)throw new E0("PDFRef");return o=e.call(this)||this,o.objectNumber=n,o.generationNumber=i,o.tag=n+" "+i+" R",o}return t.prototype.clone=function(){return this},t.prototype.toString=function(){return this.tag},t.prototype.sizeInBytes=function(){return this.tag.length},t.prototype.copyBytesInto=function(r,n){return n+=Tt(this.tag,r,n),this.tag.length},t.of=function(r,n){n===void 0&&(n=0);var i=r+" "+n+" R",o=jm.get(i);return o||(o=new t(Vm,r,n),jm.set(i,o)),o},t}(Kt),ke=function(){function e(t,r){this.name=t,this.args=r||[]}return e.prototype.clone=function(t){for(var r=new Array(this.args.length),n=0,i=r.length;n<i;n++){var o=this.args[n];r[n]=o instanceof Kt?o.clone(t):o}return e.of(this.name,r)},e.prototype.toString=function(){for(var t="",r=0,n=this.args.length;r<n;r++)t+=String(this.args[r])+" ";return t+=this.name,t},e.prototype.sizeInBytes=function(){for(var t=0,r=0,n=this.args.length;r<n;r++){var i=this.args[r];t+=(i instanceof Kt?i.sizeInBytes():i.length)+1}return t+=this.name.length,t},e.prototype.copyBytesInto=function(t,r){for(var n=r,i=0,o=this.args.length;i<o;i++){var a=this.args[i];a instanceof Kt?r+=a.copyBytesInto(t,r):r+=Tt(a,t,r),t[r++]=F.Space}return r+=Tt(this.name,t,r),r-n},e.of=function(t,r){return new e(t,r)},e}(),ip;(function(e){e.NonStrokingColor="sc",e.NonStrokingColorN="scn",e.NonStrokingColorRgb="rg",e.NonStrokingColorGray="g",e.NonStrokingColorCmyk="k",e.NonStrokingColorspace="cs",e.StrokingColor="SC",e.StrokingColorN="SCN",e.StrokingColorRgb="RG",e.StrokingColorGray="G",e.StrokingColorCmyk="K",e.StrokingColorspace="CS",e.BeginMarkedContentSequence="BDC",e.BeginMarkedContent="BMC",e.EndMarkedContent="EMC",e.MarkedContentPointWithProps="DP",e.MarkedContentPoint="MP",e.DrawObject="Do",e.ConcatTransformationMatrix="cm",e.PopGraphicsState="Q",e.PushGraphicsState="q",e.SetFlatness="i",e.SetGraphicsStateParams="gs",e.SetLineCapStyle="J",e.SetLineDashPattern="d",e.SetLineJoinStyle="j",e.SetLineMiterLimit="M",e.SetLineWidth="w",e.SetTextMatrix="Tm",e.SetRenderingIntent="ri",e.AppendRectangle="re",e.BeginInlineImage="BI",e.BeginInlineImageData="ID",e.EndInlineImage="EI",e.ClipEvenOdd="W*",e.ClipNonZero="W",e.CloseAndStroke="s",e.CloseFillEvenOddAndStroke="b*",e.CloseFillNonZeroAndStroke="b",e.ClosePath="h",e.AppendBezierCurve="c",e.CurveToReplicateFinalPoint="y",e.CurveToReplicateInitialPoint="v",e.EndPath="n",e.FillEvenOddAndStroke="B*",e.FillEvenOdd="f*",e.FillNonZeroAndStroke="B",e.FillNonZero="f",e.LegacyFillNonZero="F",e.LineTo="l",e.MoveTo="m",e.ShadingFill="sh",e.StrokePath="S",e.BeginText="BT",e.EndText="ET",e.MoveText="Td",e.MoveTextSetLeading="TD",e.NextLine="T*",e.SetCharacterSpacing="Tc",e.SetFontAndSize="Tf",e.SetTextHorizontalScaling="Tz",e.SetTextLineHeight="TL",e.SetTextRenderingMode="Tr",e.SetTextRise="Ts",e.SetWordSpacing="Tw",e.ShowText="Tj",e.ShowTextAdjusted="TJ",e.ShowTextLine="'",e.ShowTextLineAndSpace='"',e.Type3D0="d0",e.Type3D1="d1",e.BeginCompatibilitySection="BX",e.EndCompatibilitySection="EX"})(ip||(ip={}));const Ee=ip;var P0=function(e){L(t,e);function t(r,n){var i=e.call(this,r)||this;return i.computeContents=function(){var o=i.getUnencodedContents();return i.encode?Cd.deflate(o):o},i.encode=n,n&&r.set(C.of("Filter"),C.of("FlateDecode")),i.contentsCache=Vn.populatedBy(i.computeContents),i}return t.prototype.getContents=function(){return this.contentsCache.access()},t.prototype.getContentsSize=function(){return this.contentsCache.access().length},t.prototype.getUnencodedContents=function(){throw new Ar(this.constructor.name,"getUnencodedContents")},t}(mr),Hs=function(e){L(t,e);function t(r,n,i){i===void 0&&(i=!0);var o=e.call(this,r,i)||this;return o.operators=n,o}return t.prototype.push=function(){for(var r,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];(r=this.operators).push.apply(r,n)},t.prototype.clone=function(r){for(var n=new Array(this.operators.length),i=0,o=this.operators.length;i<o;i++)n[i]=this.operators[i].clone(r);var a=this,s=a.dict,u=a.encode;return t.of(s.clone(r),n,u)},t.prototype.getContentsString=function(){for(var r="",n=0,i=this.operators.length;n<i;n++)r+=this.operators[n]+`
`;return r},t.prototype.getUnencodedContents=function(){for(var r=new Uint8Array(this.getUnencodedContentsSize()),n=0,i=0,o=this.operators.length;i<o;i++)n+=this.operators[i].copyBytesInto(r,n),r[n++]=F.Newline;return r},t.prototype.getUnencodedContentsSize=function(){for(var r=0,n=0,i=this.operators.length;n<i;n++)r+=this.operators[n].sizeInBytes()+1;return r},t.of=function(r,n,i){return i===void 0&&(i=!0),new t(r,n,i)},t}(P0),hE=function(){function e(t){this.seed=t}return e.prototype.nextInt=function(){var t=Math.sin(this.seed++)*1e4;return t-Math.floor(t)},e.withSeed=function(t){return new e(t)},e}(),fE=function(e,t){var r=e[0],n=t[0];return r.objectNumber-n.objectNumber},op=function(){function e(){this.largestObjectNumber=0,this.header=Td.forVersion(1,7),this.trailerInfo={},this.indirectObjects=new Map,this.rng=hE.withSeed(1)}return e.prototype.assign=function(t,r){this.indirectObjects.set(t,r),t.objectNumber>this.largestObjectNumber&&(this.largestObjectNumber=t.objectNumber)},e.prototype.nextRef=function(){return this.largestObjectNumber+=1,Me.of(this.largestObjectNumber)},e.prototype.register=function(t){var r=this.nextRef();return this.assign(r,t),r},e.prototype.delete=function(t){return this.indirectObjects.delete(t)},e.prototype.lookupMaybe=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i=r.includes(Jt),o=t instanceof Me?this.indirectObjects.get(t):t;if(!(!o||o===Jt&&!i)){for(var a=0,s=r.length;a<s;a++){var u=r[a];if(u===Jt){if(o===Jt)return o}else if(o instanceof u)return o}throw new Lc(r,o)}},e.prototype.lookup=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i=t instanceof Me?this.indirectObjects.get(t):t;if(r.length===0)return i;for(var o=0,a=r.length;o<a;o++){var s=r[o];if(s===Jt){if(i===Jt)return i}else if(i instanceof s)return i}throw new Lc(r,i)},e.prototype.getObjectRef=function(t){for(var r=Array.from(this.indirectObjects.entries()),n=0,i=r.length;n<i;n++){var o=r[n],a=o[0],s=o[1];if(s===t)return a}},e.prototype.enumerateIndirectObjects=function(){return Array.from(this.indirectObjects.entries()).sort(fE)},e.prototype.obj=function(t){if(t instanceof Kt)return t;if(t==null)return Jt;if(typeof t=="string")return C.of(t);if(typeof t=="number")return oe.of(t);if(typeof t=="boolean")return t?xl.True:xl.False;if(Array.isArray(t)){for(var r=_e.withContext(this),n=0,i=t.length;n<i;n++)r.push(this.obj(t[n]));return r}else{for(var o=he.withContext(this),a=Object.keys(t),n=0,i=a.length;n<i;n++){var s=a[n],u=t[s];u!==void 0&&o.set(C.of(s),this.obj(u))}return o}},e.prototype.stream=function(t,r){return r===void 0&&(r={}),kl.of(this.obj(r),Gf(t))},e.prototype.flateStream=function(t,r){return r===void 0&&(r={}),this.stream(Cd.deflate(Gf(t)),ce(ce({},r),{Filter:"FlateDecode"}))},e.prototype.contentStream=function(t,r){return r===void 0&&(r={}),Hs.of(this.obj(r),t)},e.prototype.formXObject=function(t,r){return r===void 0&&(r={}),this.contentStream(t,ce(ce({BBox:this.obj([0,0,0,0]),Matrix:this.obj([1,0,0,1,0,0])},r),{Type:"XObject",Subtype:"Form"}))},e.prototype.getPushGraphicsStateContentStream=function(){if(this.pushGraphicsStateContentStreamRef)return this.pushGraphicsStateContentStreamRef;var t=this.obj({}),r=ke.of(Ee.PushGraphicsState),n=Hs.of(t,[r]);return this.pushGraphicsStateContentStreamRef=this.register(n),this.pushGraphicsStateContentStreamRef},e.prototype.getPopGraphicsStateContentStream=function(){if(this.popGraphicsStateContentStreamRef)return this.popGraphicsStateContentStreamRef;var t=this.obj({}),r=ke.of(Ee.PopGraphicsState),n=Hs.of(t,[r]);return this.popGraphicsStateContentStreamRef=this.register(n),this.popGraphicsStateContentStreamRef},e.prototype.addRandomSuffix=function(t,r){return r===void 0&&(r=4),t+"-"+Math.floor(this.rng.nextInt()*Math.pow(10,r))},e.create=function(){return new e},e}(),jn=function(e){L(t,e);function t(r,n,i){i===void 0&&(i=!0);var o=e.call(this,r,n)||this;return o.normalized=!1,o.autoNormalizeCTM=i,o}return t.prototype.clone=function(r){for(var n=t.fromMapWithContext(new Map,r||this.context,this.autoNormalizeCTM),i=this.entries(),o=0,a=i.length;o<a;o++){var s=i[o],u=s[0],l=s[1];n.set(u,l)}return n},t.prototype.Parent=function(){return this.lookupMaybe(C.Parent,he)},t.prototype.Contents=function(){return this.lookup(C.of("Contents"))},t.prototype.Annots=function(){return this.lookupMaybe(C.Annots,_e)},t.prototype.BleedBox=function(){return this.lookupMaybe(C.BleedBox,_e)},t.prototype.TrimBox=function(){return this.lookupMaybe(C.TrimBox,_e)},t.prototype.ArtBox=function(){return this.lookupMaybe(C.ArtBox,_e)},t.prototype.Resources=function(){var r=this.getInheritableAttribute(C.Resources);return this.context.lookupMaybe(r,he)},t.prototype.MediaBox=function(){var r=this.getInheritableAttribute(C.MediaBox);return this.context.lookup(r,_e)},t.prototype.CropBox=function(){var r=this.getInheritableAttribute(C.CropBox);return this.context.lookupMaybe(r,_e)},t.prototype.Rotate=function(){var r=this.getInheritableAttribute(C.Rotate);return this.context.lookupMaybe(r,oe)},t.prototype.getInheritableAttribute=function(r){var n;return this.ascend(function(i){n||(n=i.get(r))}),n},t.prototype.setParent=function(r){this.set(C.Parent,r)},t.prototype.addContentStream=function(r){var n=this.normalizedEntries().Contents||this.context.obj([]);this.set(C.Contents,n),n.push(r)},t.prototype.wrapContentStreams=function(r,n){var i=this.Contents();return i instanceof _e?(i.insert(0,r),i.push(n),!0):!1},t.prototype.addAnnot=function(r){var n=this.normalizedEntries().Annots;n.push(r)},t.prototype.removeAnnot=function(r){var n=this.normalizedEntries().Annots,i=n.indexOf(r);i!==void 0&&n.remove(i)},t.prototype.setFontDictionary=function(r,n){var i=this.normalizedEntries().Font;i.set(r,n)},t.prototype.newFontDictionaryKey=function(r){var n=this.normalizedEntries().Font;return n.uniqueKey(r)},t.prototype.newFontDictionary=function(r,n){var i=this.newFontDictionaryKey(r);return this.setFontDictionary(i,n),i},t.prototype.setXObject=function(r,n){var i=this.normalizedEntries().XObject;i.set(r,n)},t.prototype.newXObjectKey=function(r){var n=this.normalizedEntries().XObject;return n.uniqueKey(r)},t.prototype.newXObject=function(r,n){var i=this.newXObjectKey(r);return this.setXObject(i,n),i},t.prototype.setExtGState=function(r,n){var i=this.normalizedEntries().ExtGState;i.set(r,n)},t.prototype.newExtGStateKey=function(r){var n=this.normalizedEntries().ExtGState;return n.uniqueKey(r)},t.prototype.newExtGState=function(r,n){var i=this.newExtGStateKey(r);return this.setExtGState(i,n),i},t.prototype.ascend=function(r){r(this);var n=this.Parent();n&&n.ascend(r)},t.prototype.normalize=function(){if(!this.normalized){var r=this.context,n=this.get(C.Contents),i=this.context.lookup(n);i instanceof mr&&this.set(C.Contents,r.obj([n])),this.autoNormalizeCTM&&this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(),this.context.getPopGraphicsStateContentStream());var o=this.getInheritableAttribute(C.Resources),a=r.lookupMaybe(o,he)||r.obj({});this.set(C.Resources,a);var s=a.lookupMaybe(C.Font,he)||r.obj({});a.set(C.Font,s);var u=a.lookupMaybe(C.XObject,he)||r.obj({});a.set(C.XObject,u);var l=a.lookupMaybe(C.ExtGState,he)||r.obj({});a.set(C.ExtGState,l);var c=this.Annots()||r.obj([]);this.set(C.Annots,c),this.normalized=!0}},t.prototype.normalizedEntries=function(){this.normalize();var r=this.Annots(),n=this.Resources(),i=this.Contents();return{Annots:r,Resources:n,Contents:i,Font:n.lookup(C.Font,he),XObject:n.lookup(C.XObject,he),ExtGState:n.lookup(C.ExtGState,he)}},t.InheritableEntries=["Resources","MediaBox","CropBox","Rotate"],t.withContextAndParent=function(r,n){var i=new Map;return i.set(C.Type,C.Page),i.set(C.Parent,n),i.set(C.Resources,r.obj({})),i.set(C.MediaBox,r.obj([0,0,612,792])),new t(i,r,!1)},t.fromMapWithContext=function(r,n,i){return i===void 0&&(i=!0),new t(r,n,i)},t}(he),Hm=function(){function e(t,r){var n=this;this.traversedObjects=new Map,this.copy=function(i){return i instanceof jn?n.copyPDFPage(i):i instanceof he?n.copyPDFDict(i):i instanceof _e?n.copyPDFArray(i):i instanceof mr?n.copyPDFStream(i):i instanceof Me?n.copyPDFIndirectObject(i):i.clone()},this.copyPDFPage=function(i){for(var o=i.clone(),a=jn.InheritableEntries,s=0,u=a.length;s<u;s++){var l=C.of(a[s]),c=o.getInheritableAttribute(l);!o.get(l)&&c&&o.set(l,c)}return o.delete(C.of("Parent")),n.copyPDFDict(o)},this.copyPDFDict=function(i){if(n.traversedObjects.has(i))return n.traversedObjects.get(i);var o=i.clone(n.dest);n.traversedObjects.set(i,o);for(var a=i.entries(),s=0,u=a.length;s<u;s++){var l=a[s],c=l[0],d=l[1];o.set(c,n.copy(d))}return o},this.copyPDFArray=function(i){if(n.traversedObjects.has(i))return n.traversedObjects.get(i);var o=i.clone(n.dest);n.traversedObjects.set(i,o);for(var a=0,s=i.size();a<s;a++){var u=i.get(a);o.set(a,n.copy(u))}return o},this.copyPDFStream=function(i){if(n.traversedObjects.has(i))return n.traversedObjects.get(i);var o=i.clone(n.dest);n.traversedObjects.set(i,o);for(var a=i.dict.entries(),s=0,u=a.length;s<u;s++){var l=a[s],c=l[0],d=l[1];o.dict.set(c,n.copy(d))}return o},this.copyPDFIndirectObject=function(i){var o=n.traversedObjects.has(i);if(!o){var a=n.dest.nextRef();n.traversedObjects.set(i,a);var s=n.src.lookup(i);if(s){var u=n.copy(s);n.dest.assign(a,u)}}return n.traversedObjects.get(i)},this.src=t,this.dest=r}return e.for=function(t,r){return new e(t,r)},e}(),ux=function(){function e(t){this.subsections=t?[[t]]:[],this.chunkIdx=0,this.chunkLength=t?1:0}return e.prototype.addEntry=function(t,r){this.append({ref:t,offset:r,deleted:!1})},e.prototype.addDeletedEntry=function(t,r){this.append({ref:t,offset:r,deleted:!0})},e.prototype.toString=function(){for(var t=`xref
`,r=0,n=this.subsections.length;r<n;r++){var i=this.subsections[r];t+=i[0].ref.objectNumber+" "+i.length+`
`;for(var o=0,a=i.length;o<a;o++){var s=i[o];t+=Jr(String(s.offset),10,"0"),t+=" ",t+=Jr(String(s.ref.generationNumber),5,"0"),t+=" ",t+=s.deleted?"f":"n",t+=` 
`}}return t},e.prototype.sizeInBytes=function(){for(var t=5,r=0,n=this.subsections.length;r<n;r++){var i=this.subsections[r],o=i.length,a=i[0];t+=2,t+=String(a.ref.objectNumber).length,t+=String(o).length,t+=20*o}return t},e.prototype.copyBytesInto=function(t,r){var n=r;return t[r++]=F.x,t[r++]=F.r,t[r++]=F.e,t[r++]=F.f,t[r++]=F.Newline,r+=this.copySubsectionsIntoBuffer(this.subsections,t,r),r-n},e.prototype.copySubsectionsIntoBuffer=function(t,r,n){for(var i=n,o=t.length,a=0;a<o;a++){var s=this.subsections[a],u=String(s[0].ref.objectNumber);n+=Tt(u,r,n),r[n++]=F.Space;var l=String(s.length);n+=Tt(l,r,n),r[n++]=F.Newline,n+=this.copyEntriesIntoBuffer(s,r,n)}return n-i},e.prototype.copyEntriesIntoBuffer=function(t,r,n){for(var i=t.length,o=0;o<i;o++){var a=t[o],s=Jr(String(a.offset),10,"0");n+=Tt(s,r,n),r[n++]=F.Space;var u=Jr(String(a.ref.generationNumber),5,"0");n+=Tt(u,r,n),r[n++]=F.Space,r[n++]=a.deleted?F.f:F.n,r[n++]=F.Space,r[n++]=F.Newline}return 20*i},e.prototype.append=function(t){if(this.chunkLength===0){this.subsections.push([t]),this.chunkIdx=0,this.chunkLength=1;return}var r=this.subsections[this.chunkIdx],n=r[this.chunkLength-1];t.ref.objectNumber-n.ref.objectNumber>1?(this.subsections.push([t]),this.chunkIdx+=1,this.chunkLength=1):(r.push(t),this.chunkLength+=1)},e.create=function(){return new e({ref:Me.of(0,65535),offset:0,deleted:!0})},e.createEmpty=function(){return new e},e}(),A0=function(){function e(t){this.lastXRefOffset=String(t)}return e.prototype.toString=function(){return`startxref
`+this.lastXRefOffset+`
%%EOF`},e.prototype.sizeInBytes=function(){return 16+this.lastXRefOffset.length},e.prototype.copyBytesInto=function(t,r){var n=r;return t[r++]=F.s,t[r++]=F.t,t[r++]=F.a,t[r++]=F.r,t[r++]=F.t,t[r++]=F.x,t[r++]=F.r,t[r++]=F.e,t[r++]=F.f,t[r++]=F.Newline,r+=Tt(this.lastXRefOffset,t,r),t[r++]=F.Newline,t[r++]=F.Percent,t[r++]=F.Percent,t[r++]=F.E,t[r++]=F.O,t[r++]=F.F,r-n},e.forLastCrossRefSectionOffset=function(t){return new e(t)},e}(),pE=function(){function e(t){this.dict=t}return e.prototype.toString=function(){return`trailer
`+this.dict.toString()},e.prototype.sizeInBytes=function(){return 8+this.dict.sizeInBytes()},e.prototype.copyBytesInto=function(t,r){var n=r;return t[r++]=F.t,t[r++]=F.r,t[r++]=F.a,t[r++]=F.i,t[r++]=F.l,t[r++]=F.e,t[r++]=F.r,t[r++]=F.Newline,r+=this.dict.copyBytesInto(t,r),r-n},e.of=function(t){return new e(t)},e}(),cx=function(e){L(t,e);function t(r,n,i){i===void 0&&(i=!0);var o=e.call(this,r.obj({}),i)||this;return o.objects=n,o.offsets=o.computeObjectOffsets(),o.offsetsString=o.computeOffsetsString(),o.dict.set(C.of("Type"),C.of("ObjStm")),o.dict.set(C.of("N"),oe.of(o.objects.length)),o.dict.set(C.of("First"),oe.of(o.offsetsString.length)),o}return t.prototype.getObjectsCount=function(){return this.objects.length},t.prototype.clone=function(r){return t.withContextAndObjects(r||this.dict.context,this.objects.slice(),this.encode)},t.prototype.getContentsString=function(){for(var r=this.offsetsString,n=0,i=this.objects.length;n<i;n++){var o=this.objects[n],a=o[1];r+=a+`
`}return r},t.prototype.getUnencodedContents=function(){for(var r=new Uint8Array(this.getUnencodedContentsSize()),n=Tt(this.offsetsString,r,0),i=0,o=this.objects.length;i<o;i++){var a=this.objects[i],s=a[1];n+=s.copyBytesInto(r,n),r[n++]=F.Newline}return r},t.prototype.getUnencodedContentsSize=function(){return this.offsetsString.length+Nc(this.offsets)[1]+Nc(this.objects)[1].sizeInBytes()+1},t.prototype.computeOffsetsString=function(){for(var r="",n=0,i=this.offsets.length;n<i;n++){var o=this.offsets[n],a=o[0],s=o[1];r+=a+" "+s+" "}return r},t.prototype.computeObjectOffsets=function(){for(var r=0,n=new Array(this.objects.length),i=0,o=this.objects.length;i<o;i++){var a=this.objects[i],s=a[0],u=a[1];n[i]=[s.objectNumber,r],r+=u.sizeInBytes()+1}return n},t.withContextAndObjects=function(r,n,i){return i===void 0&&(i=!0),new t(r,n,i)},t}(P0),dx=function(){function e(t,r){var n=this;this.parsedObjects=0,this.shouldWaitForTick=function(i){return n.parsedObjects+=i,n.parsedObjects%n.objectsPerTick===0},this.context=t,this.objectsPerTick=r}return e.prototype.serializeToBuffer=function(){return fe(this,void 0,void 0,function(){var t,r,n,i,o,a,s,u,l,c,d,h,f,v,p,b,g;return pe(this,function(y){switch(y.label){case 0:return[4,this.computeBufferSize()];case 1:t=y.sent(),r=t.size,n=t.header,i=t.indirectObjects,o=t.xref,a=t.trailerDict,s=t.trailer,u=0,l=new Uint8Array(r),u+=n.copyBytesInto(l,u),l[u++]=F.Newline,l[u++]=F.Newline,c=0,d=i.length,y.label=2;case 2:return c<d?(h=i[c],f=h[0],v=h[1],p=String(f.objectNumber),u+=Tt(p,l,u),l[u++]=F.Space,b=String(f.generationNumber),u+=Tt(b,l,u),l[u++]=F.Space,l[u++]=F.o,l[u++]=F.b,l[u++]=F.j,l[u++]=F.Newline,u+=v.copyBytesInto(l,u),l[u++]=F.Newline,l[u++]=F.e,l[u++]=F.n,l[u++]=F.d,l[u++]=F.o,l[u++]=F.b,l[u++]=F.j,l[u++]=F.Newline,l[u++]=F.Newline,g=v instanceof cx?v.getObjectsCount():1,this.shouldWaitForTick(g)?[4,Ra()]:[3,4]):[3,5];case 3:y.sent(),y.label=4;case 4:return c++,[3,2];case 5:return o&&(u+=o.copyBytesInto(l,u),l[u++]=F.Newline),a&&(u+=a.copyBytesInto(l,u),l[u++]=F.Newline,l[u++]=F.Newline),u+=s.copyBytesInto(l,u),[2,l]}})})},e.prototype.computeIndirectObjectSize=function(t){var r=t[0],n=t[1],i=r.sizeInBytes()+3,o=n.sizeInBytes()+9;return i+o},e.prototype.createTrailerDict=function(){return this.context.obj({Size:this.context.largestObjectNumber+1,Root:this.context.trailerInfo.Root,Encrypt:this.context.trailerInfo.Encrypt,Info:this.context.trailerInfo.Info,ID:this.context.trailerInfo.ID})},e.prototype.computeBufferSize=function(){return fe(this,void 0,void 0,function(){var t,r,n,i,o,a,s,u,l,c,d;return pe(this,function(h){switch(h.label){case 0:t=Td.forVersion(1,7),r=t.sizeInBytes()+2,n=ux.create(),i=this.context.enumerateIndirectObjects(),o=0,a=i.length,h.label=1;case 1:return o<a?(s=i[o],u=s[0],n.addEntry(u,r),r+=this.computeIndirectObjectSize(s),this.shouldWaitForTick(1)?[4,Ra()]:[3,3]):[3,4];case 2:h.sent(),h.label=3;case 3:return o++,[3,1];case 4:return l=r,r+=n.sizeInBytes()+1,c=pE.of(this.createTrailerDict()),r+=c.sizeInBytes()+2,d=A0.forLastCrossRefSectionOffset(l),r+=d.sizeInBytes(),[2,{size:r,header:t,indirectObjects:i,xref:n,trailerDict:c,trailer:d}]}})})},e.forContext=function(t,r){return new e(t,r)},e}(),hx=function(e){L(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return t.prototype.clone=function(){return t.of(this.data.slice())},t.prototype.toString=function(){return"PDFInvalidObject("+this.data.length+" bytes)"},t.prototype.sizeInBytes=function(){return this.data.length},t.prototype.copyBytesInto=function(r,n){for(var i=this.data.length,o=0;o<i;o++)r[n++]=this.data[o];return i},t.of=function(r){return new t(r)},t}(Kt),di;(function(e){e[e.Deleted=0]="Deleted",e[e.Uncompressed=1]="Uncompressed",e[e.Compressed=2]="Compressed"})(di||(di={}));var vE=function(e){L(t,e);function t(r,n,i){i===void 0&&(i=!0);var o=e.call(this,r,i)||this;return o.computeIndex=function(){for(var a=[],s=0,u=0,l=o.entries.length;u<l;u++){var c=o.entries[u],d=o.entries[u-1];u===0?a.push(c.ref.objectNumber):c.ref.objectNumber-d.ref.objectNumber>1&&(a.push(s),a.push(c.ref.objectNumber),s=0),s+=1}return a.push(s),a},o.computeEntryTuples=function(){for(var a=new Array(o.entries.length),s=0,u=o.entries.length;s<u;s++){var l=o.entries[s];if(l.type===di.Deleted){var c=l.type,d=l.nextFreeObjectNumber,h=l.ref;a[s]=[c,d,h.generationNumber]}if(l.type===di.Uncompressed){var c=l.type,f=l.offset,h=l.ref;a[s]=[c,f,h.generationNumber]}if(l.type===di.Compressed){var c=l.type,v=l.objectStreamRef,p=l.index;a[s]=[c,v.objectNumber,p]}}return a},o.computeMaxEntryByteWidths=function(){for(var a=o.entryTuplesCache.access(),s=[0,0,0],u=0,l=a.length;u<l;u++){var c=a[u],d=c[0],h=c[1],f=c[2],v=Uu(d),p=Uu(h),b=Uu(f);v>s[0]&&(s[0]=v),p>s[1]&&(s[1]=p),b>s[2]&&(s[2]=b)}return s},o.entries=n||[],o.entryTuplesCache=Vn.populatedBy(o.computeEntryTuples),o.maxByteWidthsCache=Vn.populatedBy(o.computeMaxEntryByteWidths),o.indexCache=Vn.populatedBy(o.computeIndex),r.set(C.of("Type"),C.of("XRef")),o}return t.prototype.addDeletedEntry=function(r,n){var i=di.Deleted;this.entries.push({type:i,ref:r,nextFreeObjectNumber:n}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},t.prototype.addUncompressedEntry=function(r,n){var i=di.Uncompressed;this.entries.push({type:i,ref:r,offset:n}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},t.prototype.addCompressedEntry=function(r,n,i){var o=di.Compressed;this.entries.push({type:o,ref:r,objectStreamRef:n,index:i}),this.entryTuplesCache.invalidate(),this.maxByteWidthsCache.invalidate(),this.indexCache.invalidate(),this.contentsCache.invalidate()},t.prototype.clone=function(r){var n=this,i=n.dict,o=n.entries,a=n.encode;return t.of(i.clone(r),o.slice(),a)},t.prototype.getContentsString=function(){for(var r=this.entryTuplesCache.access(),n=this.maxByteWidthsCache.access(),i="",o=0,a=r.length;o<a;o++){for(var s=r[o],u=s[0],l=s[1],c=s[2],d=Mo(Lo(u)),h=Mo(Lo(l)),f=Mo(Lo(c)),v=n[0]-1;v>=0;v--)i+=(d[v]||0).toString(2);for(var v=n[1]-1;v>=0;v--)i+=(h[v]||0).toString(2);for(var v=n[2]-1;v>=0;v--)i+=(f[v]||0).toString(2)}return i},t.prototype.getUnencodedContents=function(){for(var r=this.entryTuplesCache.access(),n=this.maxByteWidthsCache.access(),i=new Uint8Array(this.getUnencodedContentsSize()),o=0,a=0,s=r.length;a<s;a++){for(var u=r[a],l=u[0],c=u[1],d=u[2],h=Mo(Lo(l)),f=Mo(Lo(c)),v=Mo(Lo(d)),p=n[0]-1;p>=0;p--)i[o++]=h[p]||0;for(var p=n[1]-1;p>=0;p--)i[o++]=f[p]||0;for(var p=n[2]-1;p>=0;p--)i[o++]=v[p]||0}return i},t.prototype.getUnencodedContentsSize=function(){var r=this.maxByteWidthsCache.access(),n=g8(r);return n*this.entries.length},t.prototype.updateDict=function(){e.prototype.updateDict.call(this);var r=this.maxByteWidthsCache.access(),n=this.indexCache.access(),i=this.dict.context;this.dict.set(C.of("W"),i.obj(r)),this.dict.set(C.of("Index"),i.obj(n))},t.create=function(r,n){n===void 0&&(n=!0);var i=new t(r,[],n);return i.addDeletedEntry(Me.of(0,65535),0),i},t.of=function(r,n,i){return i===void 0&&(i=!0),new t(r,n,i)},t}(P0),gE=function(e){L(t,e);function t(r,n,i,o){var a=e.call(this,r,n)||this;return a.encodeStreams=i,a.objectsPerStream=o,a}return t.prototype.computeBufferSize=function(){return fe(this,void 0,void 0,function(){var r,n,i,o,a,s,u,l,v,p,c,g,d,h,b,f,v,p,b,g,y,w,x,k;return pe(this,function(E){switch(E.label){case 0:r=this.context.largestObjectNumber+1,n=Td.forVersion(1,7),i=n.sizeInBytes()+2,o=vE.create(this.createTrailerDict(),this.encodeStreams),a=[],s=[],u=[],l=this.context.enumerateIndirectObjects(),v=0,p=l.length,E.label=1;case 1:return v<p?(c=l[v],g=c[0],d=c[1],h=g===this.context.trailerInfo.Encrypt||d instanceof mr||d instanceof hx||g.generationNumber!==0,h?(a.push(c),o.addUncompressedEntry(g,i),i+=this.computeIndirectObjectSize(c),this.shouldWaitForTick(1)?[4,Ra()]:[3,3]):[3,4]):[3,6];case 2:E.sent(),E.label=3;case 3:return[3,5];case 4:b=Nc(s),f=Nc(u),(!b||b.length%this.objectsPerStream===0)&&(b=[],s.push(b),f=Me.of(r++),u.push(f)),o.addCompressedEntry(g,f,b.length),b.push(c),E.label=5;case 5:return v++,[3,1];case 6:v=0,p=s.length,E.label=7;case 7:return v<p?(b=s[v],g=u[v],y=cx.withContextAndObjects(this.context,b,this.encodeStreams),o.addUncompressedEntry(g,i),i+=this.computeIndirectObjectSize([g,y]),a.push([g,y]),this.shouldWaitForTick(b.length)?[4,Ra()]:[3,9]):[3,10];case 8:E.sent(),E.label=9;case 9:return v++,[3,7];case 10:return w=Me.of(r++),o.dict.set(C.of("Size"),oe.of(r)),o.addUncompressedEntry(w,i),x=i,i+=this.computeIndirectObjectSize([w,o]),a.push([w,o]),k=A0.forLastCrossRefSectionOffset(x),i+=k.sizeInBytes(),[2,{size:i,header:n,indirectObjects:a,trailer:k}]}})})},t.forContext=function(r,n,i,o){return i===void 0&&(i=!0),o===void 0&&(o=50),new t(r,n,i,o)},t}(dx),re=function(e){L(t,e);function t(r){var n=e.call(this)||this;return n.value=r,n}return t.prototype.asBytes=function(){for(var r=this.value+(this.value.length%2===1?"0":""),n=r.length,i=new Uint8Array(r.length/2),o=0,a=0;o<n;){var s=parseInt(r.substring(o,o+2),16);i[a]=s,o+=2,a+=1}return i},t.prototype.decodeText=function(){var r=this.asBytes();return gw(r)?fw(r):sx(r)},t.prototype.decodeDate=function(){var r=this.decodeText(),n=uw(r);if(!n)throw new lx(r);return n},t.prototype.asString=function(){return this.value},t.prototype.clone=function(){return t.of(this.value)},t.prototype.toString=function(){return"<"+this.value+">"},t.prototype.sizeInBytes=function(){return this.value.length+2},t.prototype.copyBytesInto=function(r,n){return r[n++]=F.LessThan,n+=Tt(this.value,r,n),r[n++]=F.GreaterThan,this.value.length+2},t.of=function(r){return new t(r)},t.fromText=function(r){for(var n=w8(r),i="",o=0,a=n.length;o<a;o++)i+=Bl(n[o],4);return new t(i)},t}(Kt),Vc=function(){function e(t,r){this.encoding=t===wl.ZapfDingbats?yu.ZapfDingbats:t===wl.Symbol?yu.Symbol:yu.WinAnsi,this.font=BF.load(t),this.fontName=this.font.FontName,this.customName=r}return e.prototype.encodeText=function(t){for(var r=this.encodeTextAsGlyphs(t),n=new Array(r.length),i=0,o=r.length;i<o;i++)n[i]=wd(r[i].code);return re.of(n.join(""))},e.prototype.widthOfTextAtSize=function(t,r){for(var n=this.encodeTextAsGlyphs(t),i=0,o=0,a=n.length;o<a;o++){var s=n[o].name,u=(n[o+1]||{}).name,l=this.font.getXAxisKerningForPair(s,u)||0;i+=this.widthOfGlyph(s)+l}var c=r/1e3;return i*c},e.prototype.heightOfFontAtSize=function(t,r){r===void 0&&(r={});var n=r.descender,i=n===void 0?!0:n,o=this.font,a=o.Ascender,s=o.Descender,u=o.FontBBox,l=a||u[3],c=s||u[1],d=l-c;return i||(d+=s||0),d/1e3*t},e.prototype.sizeOfFontAtHeight=function(t){var r=this.font,n=r.Ascender,i=r.Descender,o=r.FontBBox,a=n||o[3],s=i||o[1];return 1e3*t/(a-s)},e.prototype.embedIntoContext=function(t,r){var n=t.obj({Type:"Font",Subtype:"Type1",BaseFont:this.customName||this.fontName,Encoding:this.encoding===yu.WinAnsi?"WinAnsiEncoding":void 0});return r?(t.assign(r,n),r):t.register(n)},e.prototype.widthOfGlyph=function(t){return this.font.getWidthOfGlyph(t)||250},e.prototype.encodeTextAsGlyphs=function(t){for(var r=Array.from(t),n=new Array(r.length),i=0,o=r.length;i<o;i++){var a=i8(r[i]);n[i]=this.encoding.encodeUnicodeCodePoint(a)}return n},e.for=function(t,r){return new e(t,r)},e}(),mE=function(e,t){for(var r=new Array(e.length),n=0,i=e.length;n<i;n++){var o=e[n],a=Wm(qu(t(o))),s=Wm.apply(void 0,o.codePoints.map(bE));r[n]=[a,s]}return yE(r)},yE=function(e){return`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange
`+e.length+` beginbfchar
`+e.map(function(t){var r=t[0],n=t[1];return r+" "+n}).join(`
`)+`
endbfchar
endcmap
CMapName currentdict /CMap defineresource pop
end
end`},Wm=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"<"+e.join("")+">"},qu=function(e){return Bl(e,4)},bE=function(e){if(x8(e))return qu(e);if(k8(e)){var t=dw(e),r=hw(e);return""+qu(t)+qu(r)}var n=wd(e),i="0x"+n+" is not a valid UTF-8 or UTF-16 codepoint.";throw new Error(i)},wE=function(e){var t=0,r=function(n){t|=1<<n-1};return e.fixedPitch&&r(1),e.serif&&r(2),e.symbolic&&r(3),e.script&&r(4),e.nonsymbolic&&r(6),e.italic&&r(7),e.allCap&&r(17),e.smallCap&&r(18),e.forceBold&&r(19),t},xE=function(e){var t=e["OS/2"]?e["OS/2"].sFamilyClass:0,r=wE({fixedPitch:e.post.isFixedPitch,serif:1<=t&&t<=7,symbolic:!0,script:t===10,italic:e.head.macStyle.italic});return r},Ie=function(e){L(t,e);function t(r){var n=e.call(this)||this;return n.value=r,n}return t.prototype.asBytes=function(){for(var r=[],n="",i=!1,o=function(d){d!==void 0&&r.push(d),i=!1},a=0,s=this.value.length;a<s;a++){var u=this.value[a],l=le(u),c=this.value[a+1];i?l===F.Newline||l===F.CarriageReturn?o():l===F.n?o(F.Newline):l===F.r?o(F.CarriageReturn):l===F.t?o(F.Tab):l===F.b?o(F.Backspace):l===F.f?o(F.FormFeed):l===F.LeftParen?o(F.LeftParen):l===F.RightParen?o(F.RightParen):l===F.Backspace?o(F.BackSlash):l>=F.Zero&&l<=F.Seven?(n+=u,(n.length===3||!(c>="0"&&c<="7"))&&(o(parseInt(n,8)),n="")):o(l):l===F.BackSlash?i=!0:o(l)}return new Uint8Array(r)},t.prototype.decodeText=function(){var r=this.asBytes();return gw(r)?fw(r):sx(r)},t.prototype.decodeDate=function(){var r=this.decodeText(),n=uw(r);if(!n)throw new lx(r);return n},t.prototype.asString=function(){return this.value},t.prototype.clone=function(){return t.of(this.value)},t.prototype.toString=function(){return"("+this.value+")"},t.prototype.sizeInBytes=function(){return this.value.length+2},t.prototype.copyBytesInto=function(r,n){return r[n++]=F.LeftParen,n+=Tt(this.value,r,n),r[n++]=F.RightParen,this.value.length+2},t.of=function(r){return new t(r)},t.fromDate=function(r){var n=Jr(String(r.getUTCFullYear()),4,"0"),i=Jr(String(r.getUTCMonth()+1),2,"0"),o=Jr(String(r.getUTCDate()),2,"0"),a=Jr(String(r.getUTCHours()),2,"0"),s=Jr(String(r.getUTCMinutes()),2,"0"),u=Jr(String(r.getUTCSeconds()),2,"0");return new t("D:"+n+i+o+a+s+u+"Z")},t}(Kt),D0=function(){function e(t,r,n,i){var o=this;this.allGlyphsInFontSortedById=function(){for(var a=new Array(o.font.characterSet.length),s=0,u=a.length;s<u;s++){var l=o.font.characterSet[s];a[s]=o.font.glyphForCodePoint(l)}return v8(a.sort(p8),function(c){return c.id})},this.font=t,this.scale=1e3/this.font.unitsPerEm,this.fontData=r,this.fontName=this.font.postscriptName||"Font",this.customName=n,this.fontFeatures=i,this.baseFontName="",this.glyphCache=Vn.populatedBy(this.allGlyphsInFontSortedById)}return e.for=function(t,r,n,i){return fe(this,void 0,void 0,function(){var o;return pe(this,function(a){switch(a.label){case 0:return[4,t.create(r)];case 1:return o=a.sent(),[2,new e(o,r,n,i)]}})})},e.prototype.encodeText=function(t){for(var r=this.font.layout(t,this.fontFeatures).glyphs,n=new Array(r.length),i=0,o=r.length;i<o;i++)n[i]=Bl(r[i].id,4);return re.of(n.join(""))},e.prototype.widthOfTextAtSize=function(t,r){for(var n=this.font.layout(t,this.fontFeatures).glyphs,i=0,o=0,a=n.length;o<a;o++)i+=n[o].advanceWidth*this.scale;var s=r/1e3;return i*s},e.prototype.heightOfFontAtSize=function(t,r){r===void 0&&(r={});var n=r.descender,i=n===void 0?!0:n,o=this.font,a=o.ascent,s=o.descent,u=o.bbox,l=(a||u.maxY)*this.scale,c=(s||u.minY)*this.scale,d=l-c;return i||(d-=Math.abs(s)||0),d/1e3*t},e.prototype.sizeOfFontAtHeight=function(t){var r=this.font,n=r.ascent,i=r.descent,o=r.bbox,a=(n||o.maxY)*this.scale,s=(i||o.minY)*this.scale;return 1e3*t/(a-s)},e.prototype.embedIntoContext=function(t,r){return this.baseFontName=this.customName||t.addRandomSuffix(this.fontName),this.embedFontDict(t,r)},e.prototype.embedFontDict=function(t,r){return fe(this,void 0,void 0,function(){var n,i,o;return pe(this,function(a){switch(a.label){case 0:return[4,this.embedCIDFontDict(t)];case 1:return n=a.sent(),i=this.embedUnicodeCmap(t),o=t.obj({Type:"Font",Subtype:"Type0",BaseFont:this.baseFontName,Encoding:"Identity-H",DescendantFonts:[n],ToUnicode:i}),r?(t.assign(r,o),[2,r]):[2,t.register(o)]}})})},e.prototype.isCFF=function(){return this.font.cff},e.prototype.embedCIDFontDict=function(t){return fe(this,void 0,void 0,function(){var r,n;return pe(this,function(i){switch(i.label){case 0:return[4,this.embedFontDescriptor(t)];case 1:return r=i.sent(),n=t.obj({Type:"Font",Subtype:this.isCFF()?"CIDFontType0":"CIDFontType2",CIDToGIDMap:"Identity",BaseFont:this.baseFontName,CIDSystemInfo:{Registry:Ie.of("Adobe"),Ordering:Ie.of("Identity"),Supplement:0},FontDescriptor:r,W:this.computeWidths()}),[2,t.register(n)]}})})},e.prototype.embedFontDescriptor=function(t){return fe(this,void 0,void 0,function(){var r,n,i,o,a,s,u,l,c,d,h,f,v,p,b;return pe(this,function(g){switch(g.label){case 0:return[4,this.embedFontStream(t)];case 1:return r=g.sent(),n=this.scale,i=this.font,o=i.italicAngle,a=i.ascent,s=i.descent,u=i.capHeight,l=i.xHeight,c=this.font.bbox,d=c.minX,h=c.minY,f=c.maxX,v=c.maxY,p=t.obj((b={Type:"FontDescriptor",FontName:this.baseFontName,Flags:xE(this.font),FontBBox:[d*n,h*n,f*n,v*n],ItalicAngle:o,Ascent:a*n,Descent:s*n,CapHeight:(u||a)*n,XHeight:(l||0)*n,StemV:0},b[this.isCFF()?"FontFile3":"FontFile2"]=r,b)),[2,t.register(p)]}})})},e.prototype.serializeFont=function(){return fe(this,void 0,void 0,function(){return pe(this,function(t){return[2,this.fontData]})})},e.prototype.embedFontStream=function(t){return fe(this,void 0,void 0,function(){var r,n,i;return pe(this,function(o){switch(o.label){case 0:return i=(n=t).flateStream,[4,this.serializeFont()];case 1:return r=i.apply(n,[o.sent(),{Subtype:this.isCFF()?"CIDFontType0C":void 0}]),[2,t.register(r)]}})})},e.prototype.embedUnicodeCmap=function(t){var r=mE(this.glyphCache.access(),this.glyphId.bind(this)),n=t.flateStream(r);return t.register(n)},e.prototype.glyphId=function(t){return t?t.id:-1},e.prototype.computeWidths=function(){for(var t=this.glyphCache.access(),r=[],n=[],i=0,o=t.length;i<o;i++){var a=t[i],s=t[i-1],u=this.glyphId(a),l=this.glyphId(s);i===0?r.push(u):u-l!==1&&(r.push(n),r.push(u),n=[]),n.push(a.advanceWidth*this.scale)}return r.push(n),r},e}(),kE=function(e){L(t,e);function t(r,n,i,o){var a=e.call(this,r,n,i,o)||this;return a.subset=a.font.createSubset(),a.glyphs=[],a.glyphCache=Vn.populatedBy(function(){return a.glyphs}),a.glyphIdMap=new Map,a}return t.for=function(r,n,i,o){return fe(this,void 0,void 0,function(){var a;return pe(this,function(s){switch(s.label){case 0:return[4,r.create(n)];case 1:return a=s.sent(),[2,new t(a,n,i,o)]}})})},t.prototype.encodeText=function(r){for(var n=this.font.layout(r,this.fontFeatures).glyphs,i=new Array(n.length),o=0,a=n.length;o<a;o++){var s=n[o],u=this.subset.includeGlyph(s);this.glyphs[u-1]=s,this.glyphIdMap.set(s.id,u),i[o]=Bl(u,4)}return this.glyphCache.invalidate(),re.of(i.join(""))},t.prototype.isCFF=function(){return this.subset.cff},t.prototype.glyphId=function(r){return r?this.glyphIdMap.get(r.id):-1},t.prototype.serializeFont=function(){var r=this;return new Promise(function(n,i){var o=[];r.subset.encodeStream().on("data",function(a){return o.push(a)}).on("end",function(){return n(f8(o))}).on("error",function(a){return i(a)})})},t}(D0),ap;(function(e){e.Source="Source",e.Data="Data",e.Alternative="Alternative",e.Supplement="Supplement",e.EncryptedPayload="EncryptedPayload",e.FormData="EncryptedPayload",e.Schema="Schema",e.Unspecified="Unspecified"})(ap||(ap={}));var SE=function(){function e(t,r,n){n===void 0&&(n={}),this.fileData=t,this.fileName=r,this.options=n}return e.for=function(t,r,n){return n===void 0&&(n={}),new e(t,r,n)},e.prototype.embedIntoContext=function(t,r){return fe(this,void 0,void 0,function(){var n,i,o,a,s,u,l,c,d;return pe(this,function(h){return n=this.options,i=n.mimeType,o=n.description,a=n.creationDate,s=n.modificationDate,u=n.afRelationship,l=t.flateStream(this.fileData,{Type:"EmbeddedFile",Subtype:i!=null?i:void 0,Params:{Size:this.fileData.length,CreationDate:a?Ie.fromDate(a):void 0,ModDate:s?Ie.fromDate(s):void 0}}),c=t.register(l),d=t.obj({Type:"Filespec",F:Ie.of(this.fileName),UF:re.fromText(this.fileName),EF:{F:c},Desc:o?re.fromText(o):void 0,AFRelationship:u!=null?u:void 0}),r?(t.assign(r,d),[2,r]):[2,t.register(d)]})})},e}(),Km=[65472,65473,65474,65475,65477,65478,65479,65480,65481,65482,65483,65484,65485,65486,65487],ma;(function(e){e.DeviceGray="DeviceGray",e.DeviceRGB="DeviceRGB",e.DeviceCMYK="DeviceCMYK"})(ma||(ma={}));var CE={1:ma.DeviceGray,3:ma.DeviceRGB,4:ma.DeviceCMYK},fx=function(){function e(t,r,n,i,o){this.imageData=t,this.bitsPerComponent=r,this.width=n,this.height=i,this.colorSpace=o}return e.for=function(t){return fe(this,void 0,void 0,function(){var r,n,i,o,a,s,u,l,c,d;return pe(this,function(h){if(r=new DataView(t.buffer),n=r.getUint16(0),n!==65496)throw new Error("SOI not found in JPEG");for(i=2;i<r.byteLength&&(o=r.getUint16(i),i+=2,!Km.includes(o));)i+=r.getUint16(i);if(!Km.includes(o))throw new Error("Invalid JPEG");if(i+=2,a=r.getUint8(i++),s=r.getUint16(i),i+=2,u=r.getUint16(i),i+=2,l=r.getUint8(i++),c=CE[l],!c)throw new Error("Unknown JPEG channel.");return d=c,[2,new e(t,a,u,s,d)]})})},e.prototype.embedIntoContext=function(t,r){return fe(this,void 0,void 0,function(){var n;return pe(this,function(i){return n=t.stream(this.imageData,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.bitsPerComponent,Width:this.width,Height:this.height,ColorSpace:this.colorSpace,Filter:"DCTDecode",Decode:this.colorSpace===ma.DeviceCMYK?[1,0,1,0,1,0,1,0]:void 0}),r?(t.assign(r,n),[2,r]):[2,t.register(n)]})})},e}(),R={};R.toRGBA8=function(e){var t=e.width,r=e.height;if(e.tabs.acTL==null)return[R.toRGBA8.decodeImage(e.data,t,r,e).buffer];var n=[];e.frames[0].data==null&&(e.frames[0].data=e.data);for(var i=t*r*4,o=new Uint8Array(i),a=new Uint8Array(i),s=new Uint8Array(i),u=0;u<e.frames.length;u++){var l=e.frames[u],c=l.rect.x,d=l.rect.y,h=l.rect.width,f=l.rect.height,v=R.toRGBA8.decodeImage(l.data,h,f,e);if(u!=0)for(var p=0;p<i;p++)s[p]=o[p];if(l.blend==0?R._copyTile(v,h,f,o,t,r,c,d,0):l.blend==1&&R._copyTile(v,h,f,o,t,r,c,d,1),n.push(o.buffer.slice(0)),l.dispose!=0){if(l.dispose==1)R._copyTile(a,h,f,o,t,r,c,d,0);else if(l.dispose==2)for(var p=0;p<i;p++)o[p]=s[p]}}return n};R.toRGBA8.decodeImage=function(e,t,r,n){var i=t*r,o=R.decode._getBPP(n),a=Math.ceil(t*o/8),s=new Uint8Array(i*4),u=new Uint32Array(s.buffer),l=n.ctype,c=n.depth,d=R._bin.readUshort;if(l==6){var h=i<<2;if(c==8)for(var f=0;f<h;f+=4)s[f]=e[f],s[f+1]=e[f+1],s[f+2]=e[f+2],s[f+3]=e[f+3];if(c==16)for(var f=0;f<h;f++)s[f]=e[f<<1]}else if(l==2){var v=n.tabs.tRNS;if(v==null){if(c==8)for(var f=0;f<i;f++){var p=f*3;u[f]=255<<24|e[p+2]<<16|e[p+1]<<8|e[p]}if(c==16)for(var f=0;f<i;f++){var p=f*6;u[f]=255<<24|e[p+4]<<16|e[p+2]<<8|e[p]}}else{var b=v[0],g=v[1],y=v[2];if(c==8)for(var f=0;f<i;f++){var w=f<<2,p=f*3;u[f]=255<<24|e[p+2]<<16|e[p+1]<<8|e[p],e[p]==b&&e[p+1]==g&&e[p+2]==y&&(s[w+3]=0)}if(c==16)for(var f=0;f<i;f++){var w=f<<2,p=f*6;u[f]=255<<24|e[p+4]<<16|e[p+2]<<8|e[p],d(e,p)==b&&d(e,p+2)==g&&d(e,p+4)==y&&(s[w+3]=0)}}}else if(l==3){var x=n.tabs.PLTE,k=n.tabs.tRNS,E=k?k.length:0;if(c==1)for(var T=0;T<r;T++)for(var z=T*a,_=T*t,f=0;f<t;f++){var w=_+f<<2,P=e[z+(f>>3)]>>7-((f&7)<<0)&1,D=3*P;s[w]=x[D],s[w+1]=x[D+1],s[w+2]=x[D+2],s[w+3]=P<E?k[P]:255}if(c==2)for(var T=0;T<r;T++)for(var z=T*a,_=T*t,f=0;f<t;f++){var w=_+f<<2,P=e[z+(f>>2)]>>6-((f&3)<<1)&3,D=3*P;s[w]=x[D],s[w+1]=x[D+1],s[w+2]=x[D+2],s[w+3]=P<E?k[P]:255}if(c==4)for(var T=0;T<r;T++)for(var z=T*a,_=T*t,f=0;f<t;f++){var w=_+f<<2,P=e[z+(f>>1)]>>4-((f&1)<<2)&15,D=3*P;s[w]=x[D],s[w+1]=x[D+1],s[w+2]=x[D+2],s[w+3]=P<E?k[P]:255}if(c==8)for(var f=0;f<i;f++){var w=f<<2,P=e[f],D=3*P;s[w]=x[D],s[w+1]=x[D+1],s[w+2]=x[D+2],s[w+3]=P<E?k[P]:255}}else if(l==4){if(c==8)for(var f=0;f<i;f++){var w=f<<2,I=f<<1,O=e[I];s[w]=O,s[w+1]=O,s[w+2]=O,s[w+3]=e[I+1]}if(c==16)for(var f=0;f<i;f++){var w=f<<2,I=f<<2,O=e[I];s[w]=O,s[w+1]=O,s[w+2]=O,s[w+3]=e[I+2]}}else if(l==0)for(var b=n.tabs.tRNS?n.tabs.tRNS:-1,T=0;T<r;T++){var K=T*a,Z=T*t;if(c==1)for(var W=0;W<t;W++){var O=255*(e[K+(W>>>3)]>>>7-(W&7)&1),me=O==b*255?0:255;u[Z+W]=me<<24|O<<16|O<<8|O}else if(c==2)for(var W=0;W<t;W++){var O=85*(e[K+(W>>>2)]>>>6-((W&3)<<1)&3),me=O==b*85?0:255;u[Z+W]=me<<24|O<<16|O<<8|O}else if(c==4)for(var W=0;W<t;W++){var O=17*(e[K+(W>>>1)]>>>4-((W&1)<<2)&15),me=O==b*17?0:255;u[Z+W]=me<<24|O<<16|O<<8|O}else if(c==8)for(var W=0;W<t;W++){var O=e[K+W],me=O==b?0:255;u[Z+W]=me<<24|O<<16|O<<8|O}else if(c==16)for(var W=0;W<t;W++){var O=e[K+(W<<1)],me=d(e,K+(W<<f))==b?0:255;u[Z+W]=me<<24|O<<16|O<<8|O}}return s};R.decode=function(e){for(var t=new Uint8Array(e),r=8,n=R._bin,i=n.readUshort,o=n.readUint,a={tabs:{},frames:[]},s=new Uint8Array(t.length),u=0,l,c=0,d=[137,80,78,71,13,10,26,10],h=0;h<8;h++)if(t[h]!=d[h])throw"The input is not a PNG file!";for(;r<t.length;){var f=n.readUint(t,r);r+=4;var v=n.readASCII(t,r,4);if(r+=4,v=="IHDR")R.decode._IHDR(t,r,a);else if(v=="IDAT"){for(var h=0;h<f;h++)s[u+h]=t[r+h];u+=f}else if(v=="acTL")a.tabs[v]={num_frames:o(t,r),num_plays:o(t,r+4)},l=new Uint8Array(t.length);else if(v=="fcTL"){if(c!=0){var p=a.frames[a.frames.length-1];p.data=R.decode._decompress(a,l.slice(0,c),p.rect.width,p.rect.height),c=0}var b={x:o(t,r+12),y:o(t,r+16),width:o(t,r+4),height:o(t,r+8)},g=i(t,r+22);g=i(t,r+20)/(g==0?100:g);var y={rect:b,delay:Math.round(g*1e3),dispose:t[r+24],blend:t[r+25]};a.frames.push(y)}else if(v=="fdAT"){for(var h=0;h<f-4;h++)l[c+h]=t[r+h+4];c+=f-4}else if(v=="pHYs")a.tabs[v]=[n.readUint(t,r),n.readUint(t,r+4),t[r+8]];else if(v=="cHRM"){a.tabs[v]=[];for(var h=0;h<8;h++)a.tabs[v].push(n.readUint(t,r+h*4))}else if(v=="tEXt"){a.tabs[v]==null&&(a.tabs[v]={});var w=n.nextZero(t,r),x=n.readASCII(t,r,w-r),k=n.readASCII(t,w+1,r+f-w-1);a.tabs[v][x]=k}else if(v=="iTXt"){a.tabs[v]==null&&(a.tabs[v]={});var w=0,E=r;w=n.nextZero(t,E);var x=n.readASCII(t,E,w-E);E=w+1,t[E],t[E+1],E+=2,w=n.nextZero(t,E),n.readASCII(t,E,w-E),E=w+1,w=n.nextZero(t,E),n.readUTF8(t,E,w-E),E=w+1;var k=n.readUTF8(t,E,f-(E-r));a.tabs[v][x]=k}else if(v=="PLTE")a.tabs[v]=n.readBytes(t,r,f);else if(v=="hIST"){var T=a.tabs.PLTE.length/3;a.tabs[v]=[];for(var h=0;h<T;h++)a.tabs[v].push(i(t,r+h*2))}else if(v=="tRNS")a.ctype==3?a.tabs[v]=n.readBytes(t,r,f):a.ctype==0?a.tabs[v]=i(t,r):a.ctype==2&&(a.tabs[v]=[i(t,r),i(t,r+2),i(t,r+4)]);else if(v=="gAMA")a.tabs[v]=n.readUint(t,r)/1e5;else if(v=="sRGB")a.tabs[v]=t[r];else if(v=="bKGD")a.ctype==0||a.ctype==4?a.tabs[v]=[i(t,r)]:a.ctype==2||a.ctype==6?a.tabs[v]=[i(t,r),i(t,r+2),i(t,r+4)]:a.ctype==3&&(a.tabs[v]=t[r]);else if(v=="IEND")break;r+=f,n.readUint(t,r),r+=4}if(c!=0){var p=a.frames[a.frames.length-1];p.data=R.decode._decompress(a,l.slice(0,c),p.rect.width,p.rect.height),c=0}return a.data=R.decode._decompress(a,s,a.width,a.height),delete a.compress,delete a.interlace,delete a.filter,a};R.decode._decompress=function(e,t,r,n){var i=R.decode._getBPP(e),o=Math.ceil(r*i/8),a=new Uint8Array((o+1+e.interlace)*n);return t=R.decode._inflate(t,a),e.interlace==0?t=R.decode._filterZero(t,e,0,r,n):e.interlace==1&&(t=R.decode._readInterlace(t,e)),t};R.decode._inflate=function(e,t){var r=R.inflateRaw(new Uint8Array(e.buffer,2,e.length-6),t);return r};R.inflateRaw=function(){var e={};return e.H={},e.H.N=function(t,r){var n=Uint8Array,i=0,o=0,a=0,s=0,u=0,l=0,c=0,d=0,h=0,f,v;if(t[0]==3&&t[1]==0)return r||new n(0);var p=e.H,b=p.b,g=p.e,y=p.R,w=p.n,x=p.A,k=p.Z,E=p.m,T=r==null;for(T&&(r=new n(t.length>>>2<<3));i==0;){if(i=b(t,h,1),o=b(t,h+1,2),h+=3,o==0){(h&7)!=0&&(h+=8-(h&7));var z=(h>>>3)+4,_=t[z-4]|t[z-3]<<8;T&&(r=e.H.W(r,d+_)),r.set(new n(t.buffer,t.byteOffset+z,_),d),h=z+_<<3,d+=_;continue}if(T&&(r=e.H.W(r,d+(1<<17))),o==1&&(f=E.J,v=E.h,l=(1<<9)-1,c=(1<<5)-1),o==2){a=g(t,h,5)+257,s=g(t,h+5,5)+1,u=g(t,h+10,4)+4,h+=14;for(var P=1,D=0;D<38;D+=2)E.Q[D]=0,E.Q[D+1]=0;for(var D=0;D<u;D++){var I=g(t,h+D*3,3);E.Q[(E.X[D]<<1)+1]=I,I>P&&(P=I)}h+=3*u,w(E.Q,P),x(E.Q,P,E.u),f=E.w,v=E.d,h=y(E.u,(1<<P)-1,a+s,t,h,E.v);var O=p.V(E.v,0,a,E.C);l=(1<<O)-1;var K=p.V(E.v,a,s,E.D);c=(1<<K)-1,w(E.C,O),x(E.C,O,f),w(E.D,K),x(E.D,K,v)}for(;;){var Z=f[k(t,h)&l];h+=Z&15;var W=Z>>>4;if(W>>>8==0)r[d++]=W;else{if(W==256)break;var me=d+W-254;if(W>264){var V=E.q[W-257];me=d+(V>>>3)+g(t,h,V&7),h+=V&7}var Y=v[k(t,h)&c];h+=Y&15;var se=Y>>>4,be=E.c[se],Be=(be>>>4)+b(t,h,be&15);for(h+=be&15;d<me;)r[d]=r[d++-Be],r[d]=r[d++-Be],r[d]=r[d++-Be],r[d]=r[d++-Be];d=me}}}return r.length==d?r:r.slice(0,d)},e.H.W=function(t,r){var n=t.length;if(r<=n)return t;var i=new Uint8Array(n<<1);return i.set(t,0),i},e.H.R=function(t,r,n,i,o,a){for(var s=e.H.e,u=e.H.Z,l=0;l<n;){var c=t[u(i,o)&r];o+=c&15;var d=c>>>4;if(d<=15)a[l]=d,l++;else{var h=0,f=0;d==16?(f=3+s(i,o,2),o+=2,h=a[l-1]):d==17?(f=3+s(i,o,3),o+=3):d==18&&(f=11+s(i,o,7),o+=7);for(var v=l+f;l<v;)a[l]=h,l++}}return o},e.H.V=function(t,r,n,i){for(var o=0,a=0,s=i.length>>>1;a<n;){var u=t[a+r];i[a<<1]=0,i[(a<<1)+1]=u,u>o&&(o=u),a++}for(;a<s;)i[a<<1]=0,i[(a<<1)+1]=0,a++;return o},e.H.n=function(t,r){for(var n=e.H.m,i=t.length,o,a,s,u,l,c=n.j,u=0;u<=r;u++)c[u]=0;for(u=1;u<i;u+=2)c[t[u]]++;var d=n.K;for(o=0,c[0]=0,a=1;a<=r;a++)o=o+c[a-1]<<1,d[a]=o;for(s=0;s<i;s+=2)l=t[s+1],l!=0&&(t[s]=d[l],d[l]++)},e.H.A=function(t,r,n){for(var i=t.length,o=e.H.m,a=o.r,s=0;s<i;s+=2)if(t[s+1]!=0)for(var u=s>>1,l=t[s+1],c=u<<4|l,d=r-l,h=t[s]<<d,f=h+(1<<d);h!=f;){var v=a[h]>>>15-r;n[v]=c,h++}},e.H.l=function(t,r){for(var n=e.H.m.r,i=15-r,o=0;o<t.length;o+=2){var a=t[o]<<r-t[o+1];t[o]=n[a]>>>i}},e.H.M=function(t,r,n){n=n<<(r&7);var i=r>>>3;t[i]|=n,t[i+1]|=n>>>8},e.H.I=function(t,r,n){n=n<<(r&7);var i=r>>>3;t[i]|=n,t[i+1]|=n>>>8,t[i+2]|=n>>>16},e.H.e=function(t,r,n){return(t[r>>>3]|t[(r>>>3)+1]<<8)>>>(r&7)&(1<<n)-1},e.H.b=function(t,r,n){return(t[r>>>3]|t[(r>>>3)+1]<<8|t[(r>>>3)+2]<<16)>>>(r&7)&(1<<n)-1},e.H.Z=function(t,r){return(t[r>>>3]|t[(r>>>3)+1]<<8|t[(r>>>3)+2]<<16)>>>(r&7)},e.H.i=function(t,r){return(t[r>>>3]|t[(r>>>3)+1]<<8|t[(r>>>3)+2]<<16|t[(r>>>3)+3]<<24)>>>(r&7)},e.H.m=function(){var t=Uint16Array,r=Uint32Array;return{K:new t(16),j:new t(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new t(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new r(32),J:new t(512),_:[],h:new t(32),$:[],w:new t(32768),C:[],v:[],d:new t(32768),D:[],u:new t(512),Q:[],r:new t(1<<15),s:new r(286),Y:new r(30),a:new r(19),t:new r(15e3),k:new t(1<<16),g:new t(1<<15)}}(),function(){for(var t=e.H.m,r=1<<15,n=0;n<r;n++){var i=n;i=(i&2863311530)>>>1|(i&1431655765)<<1,i=(i&3435973836)>>>2|(i&858993459)<<2,i=(i&4042322160)>>>4|(i&252645135)<<4,i=(i&4278255360)>>>8|(i&16711935)<<8,t.r[n]=(i>>>16|i<<16)>>>17}function o(a,s,u){for(;s--!=0;)a.push(0,u)}for(var n=0;n<32;n++)t.q[n]=t.S[n]<<3|t.T[n],t.c[n]=t.p[n]<<4|t.z[n];o(t._,144,8),o(t._,255-143,9),o(t._,279-255,7),o(t._,287-279,8),e.H.n(t._,9),e.H.A(t._,9,t.J),e.H.l(t._,9),o(t.$,32,5),e.H.n(t.$,5),e.H.A(t.$,5,t.h),e.H.l(t.$,5),o(t.Q,19,0),o(t.C,286,0),o(t.D,30,0),o(t.v,320,0)}(),e.H.N}();R.decode._readInterlace=function(e,t){for(var r=t.width,n=t.height,i=R.decode._getBPP(t),o=i>>3,a=Math.ceil(r*i/8),s=new Uint8Array(n*a),u=0,l=[0,0,4,0,2,0,1],c=[0,4,0,2,0,1,0],d=[8,8,8,4,4,2,2],h=[8,8,4,4,2,2,1],f=0;f<7;){for(var v=d[f],p=h[f],b=0,g=0,y=l[f];y<n;)y+=v,g++;for(var w=c[f];w<r;)w+=p,b++;var x=Math.ceil(b*i/8);R.decode._filterZero(e,t,u,b,g);for(var k=0,E=l[f];E<n;){for(var T=c[f],z=u+k*x<<3;T<r;){if(i==1){var _=e[z>>3];_=_>>7-(z&7)&1,s[E*a+(T>>3)]|=_<<7-((T&7)<<0)}if(i==2){var _=e[z>>3];_=_>>6-(z&7)&3,s[E*a+(T>>2)]|=_<<6-((T&3)<<1)}if(i==4){var _=e[z>>3];_=_>>4-(z&7)&15,s[E*a+(T>>1)]|=_<<4-((T&1)<<2)}if(i>=8)for(var P=E*a+T*o,D=0;D<o;D++)s[P+D]=e[(z>>3)+D];z+=i,T+=p}k++,E+=v}b*g!=0&&(u+=g*(1+x)),f=f+1}return s};R.decode._getBPP=function(e){var t=[1,null,3,1,2,null,4][e.ctype];return t*e.depth};R.decode._filterZero=function(e,t,r,n,i){var o=R.decode._getBPP(t),a=Math.ceil(n*o/8),s=R.decode._paeth;o=Math.ceil(o/8);var u=0,l=1,c=e[r],d=0;if(c>1&&(e[r]=[0,0,1][c-2]),c==3)for(d=o;d<a;d++)e[d+1]=e[d+1]+(e[d+1-o]>>>1)&255;for(var h=0;h<i;h++)if(u=r+h*a,l=u+h+1,c=e[l-1],d=0,c==0)for(;d<a;d++)e[u+d]=e[l+d];else if(c==1){for(;d<o;d++)e[u+d]=e[l+d];for(;d<a;d++)e[u+d]=e[l+d]+e[u+d-o]}else if(c==2)for(;d<a;d++)e[u+d]=e[l+d]+e[u+d-a];else if(c==3){for(;d<o;d++)e[u+d]=e[l+d]+(e[u+d-a]>>>1);for(;d<a;d++)e[u+d]=e[l+d]+(e[u+d-a]+e[u+d-o]>>>1)}else{for(;d<o;d++)e[u+d]=e[l+d]+s(0,e[u+d-a],0);for(;d<a;d++)e[u+d]=e[l+d]+s(e[u+d-o],e[u+d-a],e[u+d-o-a])}return e};R.decode._paeth=function(e,t,r){var n=e+t-r,i=n-e,o=n-t,a=n-r;return i*i<=o*o&&i*i<=a*a?e:o*o<=a*a?t:r};R.decode._IHDR=function(e,t,r){var n=R._bin;r.width=n.readUint(e,t),t+=4,r.height=n.readUint(e,t),t+=4,r.depth=e[t],t++,r.ctype=e[t],t++,r.compress=e[t],t++,r.filter=e[t],t++,r.interlace=e[t],t++};R._bin={nextZero:function(e,t){for(;e[t]!=0;)t++;return t},readUshort:function(e,t){return e[t]<<8|e[t+1]},writeUshort:function(e,t,r){e[t]=r>>8&255,e[t+1]=r&255},readUint:function(e,t){return e[t]*(256*256*256)+(e[t+1]<<16|e[t+2]<<8|e[t+3])},writeUint:function(e,t,r){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=r&255},readASCII:function(e,t,r){for(var n="",i=0;i<r;i++)n+=String.fromCharCode(e[t+i]);return n},writeASCII:function(e,t,r){for(var n=0;n<r.length;n++)e[t+n]=r.charCodeAt(n)},readBytes:function(e,t,r){for(var n=[],i=0;i<r;i++)n.push(e[t+i]);return n},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,t,r){for(var n="",i,o=0;o<r;o++)n+="%"+R._bin.pad(e[t+o].toString(16));try{i=decodeURIComponent(n)}catch{return R._bin.readASCII(e,t,r)}return i}};R._copyTile=function(e,t,r,n,i,o,a,s,u){for(var l=Math.min(t,i),c=Math.min(r,o),d=0,h=0,f=0;f<c;f++)for(var v=0;v<l;v++)if(a>=0&&s>=0?(d=f*t+v<<2,h=(s+f)*i+a+v<<2):(d=(-s+f)*t-a+v<<2,h=f*i+v<<2),u==0)n[h]=e[d],n[h+1]=e[d+1],n[h+2]=e[d+2],n[h+3]=e[d+3];else if(u==1){var p=e[d+3]*.00392156862745098,b=e[d]*p,g=e[d+1]*p,y=e[d+2]*p,w=n[h+3]*(1/255),x=n[h]*w,k=n[h+1]*w,E=n[h+2]*w,T=1-p,z=p+w*T,_=z==0?0:1/z;n[h+3]=255*z,n[h+0]=(b+x*T)*_,n[h+1]=(g+k*T)*_,n[h+2]=(y+E*T)*_}else if(u==2){var p=e[d+3],b=e[d],g=e[d+1],y=e[d+2],w=n[h+3],x=n[h],k=n[h+1],E=n[h+2];p==w&&b==x&&g==k&&y==E?(n[h]=0,n[h+1]=0,n[h+2]=0,n[h+3]=0):(n[h]=b,n[h+1]=g,n[h+2]=y,n[h+3]=p)}else if(u==3){var p=e[d+3],b=e[d],g=e[d+1],y=e[d+2],w=n[h+3],x=n[h],k=n[h+1],E=n[h+2];if(p==w&&b==x&&g==k&&y==E)continue;if(p<220&&w>20)return!1}return!0};R.encode=function(e,t,r,n,i,o,a){n==null&&(n=0),a==null&&(a=!1);var s=R.encode.compress(e,t,r,n,[!1,!1,!1,0,a]);return R.encode.compressPNG(s,-1),R.encode._main(s,t,r,i,o)};R.encodeLL=function(e,t,r,n,i,o,a,s){for(var u={ctype:0+(n==1?0:2)+(i==0?0:4),depth:o,frames:[]},l=(n+i)*o,c=l*t,d=0;d<e.length;d++)u.frames.push({rect:{x:0,y:0,width:t,height:r},img:new Uint8Array(e[d]),blend:0,dispose:1,bpp:Math.ceil(l/8),bpl:Math.ceil(c/8)});R.encode.compressPNG(u,0,!0);var h=R.encode._main(u,t,r,a,s);return h};R.encode._main=function(e,t,r,n,i){i==null&&(i={});var o=R.crc.crc,a=R._bin.writeUint,s=R._bin.writeUshort,u=R._bin.writeASCII,l=8,c=e.frames.length>1,d=!1,h=8+(16+5+4)+(c?20:0);if(i.sRGB!=null&&(h+=8+1+4),i.pHYs!=null&&(h+=8+9+4),e.ctype==3){for(var f=e.plte.length,v=0;v<f;v++)e.plte[v]>>>24!=255&&(d=!0);h+=8+f*3+4+(d?8+f*1+4:0)}for(var p=0;p<e.frames.length;p++){var b=e.frames[p];c&&(h+=38),h+=b.cimg.length+12,p!=0&&(h+=4)}h+=12;for(var g=new Uint8Array(h),y=[137,80,78,71,13,10,26,10],v=0;v<8;v++)g[v]=y[v];if(a(g,l,13),l+=4,u(g,l,"IHDR"),l+=4,a(g,l,t),l+=4,a(g,l,r),l+=4,g[l]=e.depth,l++,g[l]=e.ctype,l++,g[l]=0,l++,g[l]=0,l++,g[l]=0,l++,a(g,l,o(g,l-17,17)),l+=4,i.sRGB!=null&&(a(g,l,1),l+=4,u(g,l,"sRGB"),l+=4,g[l]=i.sRGB,l++,a(g,l,o(g,l-5,5)),l+=4),i.pHYs!=null&&(a(g,l,9),l+=4,u(g,l,"pHYs"),l+=4,a(g,l,i.pHYs[0]),l+=4,a(g,l,i.pHYs[1]),l+=4,g[l]=i.pHYs[2],l++,a(g,l,o(g,l-13,13)),l+=4),c&&(a(g,l,8),l+=4,u(g,l,"acTL"),l+=4,a(g,l,e.frames.length),l+=4,a(g,l,i.loop!=null?i.loop:0),l+=4,a(g,l,o(g,l-12,12)),l+=4),e.ctype==3){var f=e.plte.length;a(g,l,f*3),l+=4,u(g,l,"PLTE"),l+=4;for(var v=0;v<f;v++){var w=v*3,x=e.plte[v],k=x&255,E=x>>>8&255,T=x>>>16&255;g[l+w+0]=k,g[l+w+1]=E,g[l+w+2]=T}if(l+=f*3,a(g,l,o(g,l-f*3-4,f*3+4)),l+=4,d){a(g,l,f),l+=4,u(g,l,"tRNS"),l+=4;for(var v=0;v<f;v++)g[l+v]=e.plte[v]>>>24&255;l+=f,a(g,l,o(g,l-f-4,f+4)),l+=4}}for(var z=0,p=0;p<e.frames.length;p++){var b=e.frames[p];c&&(a(g,l,26),l+=4,u(g,l,"fcTL"),l+=4,a(g,l,z++),l+=4,a(g,l,b.rect.width),l+=4,a(g,l,b.rect.height),l+=4,a(g,l,b.rect.x),l+=4,a(g,l,b.rect.y),l+=4,s(g,l,n[p]),l+=2,s(g,l,1e3),l+=2,g[l]=b.dispose,l++,g[l]=b.blend,l++,a(g,l,o(g,l-30,30)),l+=4);var _=b.cimg,f=_.length;a(g,l,f+(p==0?0:4)),l+=4;var P=l;u(g,l,p==0?"IDAT":"fdAT"),l+=4,p!=0&&(a(g,l,z++),l+=4),g.set(_,l),l+=f,a(g,l,o(g,P,l-P)),l+=4}return a(g,l,0),l+=4,u(g,l,"IEND"),l+=4,a(g,l,o(g,l-4,4)),l+=4,g.buffer};R.encode.compressPNG=function(e,t,r){for(var n=0;n<e.frames.length;n++){var i=e.frames[n];i.rect.width;var o=i.rect.height,a=new Uint8Array(o*i.bpl+o);i.cimg=R.encode._filterZero(i.img,o,i.bpp,i.bpl,a,t,r)}};R.encode.compress=function(e,t,r,n,i){for(var o=i[0],a=i[1],s=i[2],u=i[3],l=i[4],c=6,d=8,h=255,f=0;f<e.length;f++)for(var v=new Uint8Array(e[f]),p=v.length,b=0;b<p;b+=4)h&=v[b+3];var g=h!=255,y=R.encode.framize(e,t,r,o,a,s),w={},x=[],k=[];if(n!=0){for(var E=[],b=0;b<y.length;b++)E.push(y[b].img.buffer);for(var T=R.encode.concatRGBA(E),z=R.quantize(T,n),_=0,P=new Uint8Array(z.abuf),b=0;b<y.length;b++){var D=y[b].img,I=D.length;k.push(new Uint8Array(z.inds.buffer,_>>2,I>>2));for(var f=0;f<I;f+=4)D[f]=P[_+f],D[f+1]=P[_+f+1],D[f+2]=P[_+f+2],D[f+3]=P[_+f+3];_+=I}for(var b=0;b<z.plte.length;b++)x.push(z.plte[b].est.rgba)}else for(var f=0;f<y.length;f++){var O=y[f],K=new Uint32Array(O.img.buffer),Z=O.rect.width,p=K.length,W=new Uint8Array(p);k.push(W);for(var b=0;b<p;b++){var me=K[b];if(b!=0&&me==K[b-1])W[b]=W[b-1];else if(b>Z&&me==K[b-Z])W[b]=W[b-Z];else{var V=w[me];if(V==null&&(w[me]=V=x.length,x.push(me),x.length>=300))break;W[b]=V}}}var Y=x.length;Y<=256&&l==!1&&(Y<=2?d=1:Y<=4?d=2:Y<=16?d=4:d=8,d=Math.max(d,u));for(var f=0;f<y.length;f++){var O=y[f];O.rect.x,O.rect.y;var Z=O.rect.width,se=O.rect.height,be=O.img;new Uint32Array(be.buffer);var Be=4*Z,ri=4;if(Y<=256&&l==!1){Be=Math.ceil(d*Z/8);for(var bt=new Uint8Array(Be*se),ni=k[f],Cr=0;Cr<se;Cr++){var b=Cr*Be,zn=Cr*Z;if(d==8)for(var rt=0;rt<Z;rt++)bt[b+rt]=ni[zn+rt];else if(d==4)for(var rt=0;rt<Z;rt++)bt[b+(rt>>1)]|=ni[zn+rt]<<4-(rt&1)*4;else if(d==2)for(var rt=0;rt<Z;rt++)bt[b+(rt>>2)]|=ni[zn+rt]<<6-(rt&3)*2;else if(d==1)for(var rt=0;rt<Z;rt++)bt[b+(rt>>3)]|=ni[zn+rt]<<7-(rt&7)*1}be=bt,c=3,ri=1}else if(g==!1&&y.length==1){for(var bt=new Uint8Array(Z*se*3),Xx=Z*se,b=0;b<Xx;b++){var D=b*3,Ud=b*4;bt[D]=be[Ud],bt[D+1]=be[Ud+1],bt[D+2]=be[Ud+2]}be=bt,c=2,ri=3,Be=3*Z}O.img=be,O.bpl=Be,O.bpp=ri}return{ctype:c,depth:d,plte:x,frames:y}};R.encode.framize=function(e,t,r,n,i,o){for(var a=[],s=0;s<e.length;s++){var u=new Uint8Array(e[s]),l=new Uint32Array(u.buffer),c,d=0,h=0,f=t,v=r,p=n?1:0;if(s!=0){for(var b=o||n||s==1||a[s-2].dispose!=0?1:2,g=0,y=1e9,w=0;w<b;w++){for(var O=new Uint8Array(e[s-1-w]),x=new Uint32Array(e[s-1-w]),k=t,E=r,T=-1,z=-1,_=0;_<r;_++)for(var P=0;P<t;P++){var D=_*t+P;l[D]!=x[D]&&(P<k&&(k=P),P>T&&(T=P),_<E&&(E=_),_>z&&(z=_))}T==-1&&(k=E=T=z=0),i&&((k&1)==1&&k--,(E&1)==1&&E--);var I=(T-k+1)*(z-E+1);I<y&&(y=I,g=w,d=k,h=E,f=T-k+1,v=z-E+1)}var O=new Uint8Array(e[s-1-g]);g==1&&(a[s-1].dispose=2),c=new Uint8Array(f*v*4),R._copyTile(O,t,r,c,f,v,-d,-h,0),p=R._copyTile(u,t,r,c,f,v,-d,-h,3)?1:0,p==1?R.encode._prepareDiff(u,t,r,c,{x:d,y:h,width:f,height:v}):R._copyTile(u,t,r,c,f,v,-d,-h,0)}else c=u.slice(0);a.push({rect:{x:d,y:h,width:f,height:v},img:c,blend:p,dispose:0})}if(n)for(var s=0;s<a.length;s++){var K=a[s];if(K.blend!=1){var Z=K.rect,W=a[s-1].rect,me=Math.min(Z.x,W.x),V=Math.min(Z.y,W.y),Y=Math.max(Z.x+Z.width,W.x+W.width),se=Math.max(Z.y+Z.height,W.y+W.height),be={x:me,y:V,width:Y-me,height:se-V};a[s-1].dispose=1,s-1!=0&&R.encode._updateFrame(e,t,r,a,s-1,be,i),R.encode._updateFrame(e,t,r,a,s,be,i)}}var Be=0;if(e.length!=1)for(var D=0;D<a.length;D++){var K=a[D];Be+=K.rect.width*K.rect.height}return a};R.encode._updateFrame=function(e,t,r,n,i,o,a){for(var s=Uint8Array,u=Uint32Array,l=new s(e[i-1]),c=new u(e[i-1]),d=i+1<e.length?new s(e[i+1]):null,h=new s(e[i]),f=new u(h.buffer),v=t,p=r,b=-1,g=-1,y=0;y<o.height;y++)for(var w=0;w<o.width;w++){var x=o.x+w,k=o.y+y,E=k*t+x,T=f[E];T==0||n[i-1].dispose==0&&c[E]==T&&(d==null||d[E*4+3]!=0)||(x<v&&(v=x),x>b&&(b=x),k<p&&(p=k),k>g&&(g=k))}b==-1&&(v=p=b=g=0),a&&((v&1)==1&&v--,(p&1)==1&&p--),o={x:v,y:p,width:b-v+1,height:g-p+1};var z=n[i];z.rect=o,z.blend=1,z.img=new Uint8Array(o.width*o.height*4),n[i-1].dispose==0?(R._copyTile(l,t,r,z.img,o.width,o.height,-o.x,-o.y,0),R.encode._prepareDiff(h,t,r,z.img,o)):R._copyTile(h,t,r,z.img,o.width,o.height,-o.x,-o.y,0)};R.encode._prepareDiff=function(e,t,r,n,i){R._copyTile(e,t,r,n,i.width,i.height,-i.x,-i.y,2)};R.encode._filterZero=function(e,t,r,n,i,o,a){var s=[],u=[0,1,2,3,4];o!=-1?u=[o]:(t*n>5e5||r==1)&&(u=[0]);var l;a&&(l={level:0});for(var c=a&&UZIP!=null?UZIP:Cd,d=0;d<u.length;d++){for(var h=0;h<t;h++)R.encode._filterLine(i,e,h,n,r,u[d]);s.push(c.deflate(i,l))}for(var f,v=1e9,d=0;d<s.length;d++)s[d].length<v&&(f=d,v=s[d].length);return s[f]};R.encode._filterLine=function(e,t,r,n,i,o){var a=r*n,s=a+r,u=R.decode._paeth;if(e[s]=o,s++,o==0)if(n<500)for(var l=0;l<n;l++)e[s+l]=t[a+l];else e.set(new Uint8Array(t.buffer,a,n),s);else if(o==1){for(var l=0;l<i;l++)e[s+l]=t[a+l];for(var l=i;l<n;l++)e[s+l]=t[a+l]-t[a+l-i]+256&255}else if(r==0){for(var l=0;l<i;l++)e[s+l]=t[a+l];if(o==2)for(var l=i;l<n;l++)e[s+l]=t[a+l];if(o==3)for(var l=i;l<n;l++)e[s+l]=t[a+l]-(t[a+l-i]>>1)+256&255;if(o==4)for(var l=i;l<n;l++)e[s+l]=t[a+l]-u(t[a+l-i],0,0)+256&255}else{if(o==2)for(var l=0;l<n;l++)e[s+l]=t[a+l]+256-t[a+l-n]&255;if(o==3){for(var l=0;l<i;l++)e[s+l]=t[a+l]+256-(t[a+l-n]>>1)&255;for(var l=i;l<n;l++)e[s+l]=t[a+l]+256-(t[a+l-n]+t[a+l-i]>>1)&255}if(o==4){for(var l=0;l<i;l++)e[s+l]=t[a+l]+256-u(0,t[a+l-n],0)&255;for(var l=i;l<n;l++)e[s+l]=t[a+l]+256-u(t[a+l-i],t[a+l-n],t[a+l-i-n])&255}}};R.crc={table:function(){for(var e=new Uint32Array(256),t=0;t<256;t++){for(var r=t,n=0;n<8;n++)r&1?r=3988292384^r>>>1:r=r>>>1;e[t]=r}return e}(),update:function(e,t,r,n){for(var i=0;i<n;i++)e=R.crc.table[(e^t[r+i])&255]^e>>>8;return e},crc:function(e,t,r){return R.crc.update(4294967295,e,t,r)^4294967295}};R.quantize=function(e,t){var r=new Uint8Array(e),n=r.slice(0),i=new Uint32Array(n.buffer),o=R.quantize.getKDtree(n,t),a=o[0],s=o[1];R.quantize.planeDst;for(var u=r,l=i,c=u.length,d=new Uint8Array(r.length>>2),h=0;h<c;h+=4){var f=u[h]*.00392156862745098,v=u[h+1]*(1/255),p=u[h+2]*(1/255),b=u[h+3]*(1/255),g=R.quantize.getNearest(a,f,v,p,b);d[h>>2]=g.ind,l[h>>2]=g.est.rgba}return{abuf:n.buffer,inds:d,plte:s}};R.quantize.getKDtree=function(e,t,r){r==null&&(r=1e-4);var n=new Uint32Array(e.buffer),i={i0:0,i1:e.length,bst:null,est:null,tdst:0,left:null,right:null};i.bst=R.quantize.stats(e,i.i0,i.i1),i.est=R.quantize.estats(i.bst);for(var o=[i];o.length<t;){for(var a=0,s=0,u=0;u<o.length;u++)o[u].est.L>a&&(a=o[u].est.L,s=u);if(a<r)break;var l=o[s],c=R.quantize.splitPixels(e,n,l.i0,l.i1,l.est.e,l.est.eMq255),d=l.i0>=c||l.i1<=c;if(d){l.est.L=0;continue}var h={i0:l.i0,i1:c,bst:null,est:null,tdst:0,left:null,right:null};h.bst=R.quantize.stats(e,h.i0,h.i1),h.est=R.quantize.estats(h.bst);var f={i0:c,i1:l.i1,bst:null,est:null,tdst:0,left:null,right:null};f.bst={R:[],m:[],N:l.bst.N-h.bst.N};for(var u=0;u<16;u++)f.bst.R[u]=l.bst.R[u]-h.bst.R[u];for(var u=0;u<4;u++)f.bst.m[u]=l.bst.m[u]-h.bst.m[u];f.est=R.quantize.estats(f.bst),l.left=h,l.right=f,o[s]=h,o.push(f)}o.sort(function(v,p){return p.bst.N-v.bst.N});for(var u=0;u<o.length;u++)o[u].ind=u;return[i,o]};R.quantize.getNearest=function(e,t,r,n,i){if(e.left==null)return e.tdst=R.quantize.dist(e.est.q,t,r,n,i),e;var o=R.quantize.planeDst(e.est,t,r,n,i),a=e.left,s=e.right;o>0&&(a=e.right,s=e.left);var u=R.quantize.getNearest(a,t,r,n,i);if(u.tdst<=o*o)return u;var l=R.quantize.getNearest(s,t,r,n,i);return l.tdst<u.tdst?l:u};R.quantize.planeDst=function(e,t,r,n,i){var o=e.e;return o[0]*t+o[1]*r+o[2]*n+o[3]*i-e.eMq};R.quantize.dist=function(e,t,r,n,i){var o=t-e[0],a=r-e[1],s=n-e[2],u=i-e[3];return o*o+a*a+s*s+u*u};R.quantize.splitPixels=function(e,t,r,n,i,o){var a=R.quantize.vecDot;for(n-=4;r<n;){for(;a(e,r,i)<=o;)r+=4;for(;a(e,n,i)>o;)n-=4;if(r>=n)break;var s=t[r>>2];t[r>>2]=t[n>>2],t[n>>2]=s,r+=4,n-=4}for(;a(e,r,i)>o;)r-=4;return r+4};R.quantize.vecDot=function(e,t,r){return e[t]*r[0]+e[t+1]*r[1]+e[t+2]*r[2]+e[t+3]*r[3]};R.quantize.stats=function(e,t,r){for(var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=[0,0,0,0],o=r-t>>2,a=t;a<r;a+=4){var s=e[a]*.00392156862745098,u=e[a+1]*(1/255),l=e[a+2]*(1/255),c=e[a+3]*(1/255);i[0]+=s,i[1]+=u,i[2]+=l,i[3]+=c,n[0]+=s*s,n[1]+=s*u,n[2]+=s*l,n[3]+=s*c,n[5]+=u*u,n[6]+=u*l,n[7]+=u*c,n[10]+=l*l,n[11]+=l*c,n[15]+=c*c}return n[4]=n[1],n[8]=n[2],n[9]=n[6],n[12]=n[3],n[13]=n[7],n[14]=n[11],{R:n,m:i,N:o}};R.quantize.estats=function(e){var t=e.R,r=e.m,n=e.N,i=r[0],o=r[1],a=r[2],s=r[3],u=n==0?0:1/n,l=[t[0]-i*i*u,t[1]-i*o*u,t[2]-i*a*u,t[3]-i*s*u,t[4]-o*i*u,t[5]-o*o*u,t[6]-o*a*u,t[7]-o*s*u,t[8]-a*i*u,t[9]-a*o*u,t[10]-a*a*u,t[11]-a*s*u,t[12]-s*i*u,t[13]-s*o*u,t[14]-s*a*u,t[15]-s*s*u],c=l,d=R.M4,h=[.5,.5,.5,.5],f=0,v=0;if(n!=0)for(var p=0;p<10&&(h=d.multVec(c,h),v=Math.sqrt(d.dot(h,h)),h=d.sml(1/v,h),!(Math.abs(v-f)<1e-9));p++)f=v;var b=[i*u,o*u,a*u,s*u],g=d.dot(d.sml(255,b),h);return{Cov:l,q:b,e:h,L:f,eMq255:g,eMq:d.dot(h,b),rgba:(Math.round(255*b[3])<<24|Math.round(255*b[2])<<16|Math.round(255*b[1])<<8|Math.round(255*b[0])<<0)>>>0}};R.M4={multVec:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],e[4]*t[0]+e[5]*t[1]+e[6]*t[2]+e[7]*t[3],e[8]*t[0]+e[9]*t[1]+e[10]*t[2]+e[11]*t[3],e[12]*t[0]+e[13]*t[1]+e[14]*t[2]+e[15]*t[3]]},dot:function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},sml:function(e,t){return[e*t[0],e*t[1],e*t[2],e*t[3]]}};R.encode.concatRGBA=function(e){for(var t=0,r=0;r<e.length;r++)t+=e[r].byteLength;for(var n=new Uint8Array(t),i=0,r=0;r<e.length;r++){for(var o=new Uint8Array(e[r]),a=o.length,s=0;s<a;s+=4){var u=o[s],l=o[s+1],c=o[s+2],d=o[s+3];d==0&&(u=l=c=0),n[i+s]=u,n[i+s+1]=l,n[i+s+2]=c,n[i+s+3]=d}i+=a}return n.buffer};var FE=function(e){if(e===0)return no.Greyscale;if(e===2)return no.Truecolour;if(e===3)return no.IndexedColour;if(e===4)return no.GreyscaleWithAlpha;if(e===6)return no.TruecolourWithAlpha;throw new Error("Unknown color type: "+e)},EE=function(e){for(var t=Math.floor(e.length/4),r=new Uint8Array(t*3),n=new Uint8Array(t*1),i=0,o=0,a=0;i<e.length;)r[o++]=e[i++],r[o++]=e[i++],r[o++]=e[i++],n[a++]=e[i++];return{rgbChannel:r,alphaChannel:n}},no;(function(e){e.Greyscale="Greyscale",e.Truecolour="Truecolour",e.IndexedColour="IndexedColour",e.GreyscaleWithAlpha="GreyscaleWithAlpha",e.TruecolourWithAlpha="TruecolourWithAlpha"})(no||(no={}));var TE=function(){function e(t){var r=R.decode(t),n=R.toRGBA8(r);if(n.length>1)throw new Error("Animated PNGs are not supported");var i=new Uint8Array(n[0]),o=EE(i),a=o.rgbChannel,s=o.alphaChannel;this.rgbChannel=a;var u=s.some(function(l){return l<255});u&&(this.alphaChannel=s),this.type=FE(r.ctype),this.width=r.width,this.height=r.height,this.bitsPerComponent=8}return e.load=function(t){return new e(t)},e}(),px=function(){function e(t){this.image=t,this.bitsPerComponent=t.bitsPerComponent,this.width=t.width,this.height=t.height,this.colorSpace="DeviceRGB"}return e.for=function(t){return fe(this,void 0,void 0,function(){var r;return pe(this,function(n){return r=TE.load(t),[2,new e(r)]})})},e.prototype.embedIntoContext=function(t,r){return fe(this,void 0,void 0,function(){var n,i;return pe(this,function(o){return n=this.embedAlphaChannel(t),i=t.flateStream(this.image.rgbChannel,{Type:"XObject",Subtype:"Image",BitsPerComponent:this.image.bitsPerComponent,Width:this.image.width,Height:this.image.height,ColorSpace:this.colorSpace,SMask:n}),r?(t.assign(r,i),[2,r]):[2,t.register(i)]})})},e.prototype.embedAlphaChannel=function(t){if(!!this.image.alphaChannel){var r=t.flateStream(this.image.alphaChannel,{Type:"XObject",Subtype:"Image",Height:this.image.height,Width:this.image.width,BitsPerComponent:this.image.bitsPerComponent,ColorSpace:"DeviceGray",Decode:[0,1]});return t.register(r)}},e}(),vx=function(){function e(t,r,n){this.bytes=t,this.start=r||0,this.pos=this.start,this.end=!!r&&!!n?r+n:this.bytes.length}return Object.defineProperty(e.prototype,"length",{get:function(){return this.end-this.start},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this.length===0},enumerable:!1,configurable:!0}),e.prototype.getByte=function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},e.prototype.getUint16=function(){var t=this.getByte(),r=this.getByte();return t===-1||r===-1?-1:(t<<8)+r},e.prototype.getInt32=function(){var t=this.getByte(),r=this.getByte(),n=this.getByte(),i=this.getByte();return(t<<24)+(r<<16)+(n<<8)+i},e.prototype.getBytes=function(t,r){r===void 0&&(r=!1);var n=this.bytes,i=this.pos,o=this.end;if(t){var s=i+t;s>o&&(s=o),this.pos=s;var a=n.subarray(i,s);return r?new Uint8ClampedArray(a):a}else{var a=n.subarray(i,o);return r?new Uint8ClampedArray(a):a}},e.prototype.peekByte=function(){var t=this.getByte();return this.pos--,t},e.prototype.peekBytes=function(t,r){r===void 0&&(r=!1);var n=this.getBytes(t,r);return this.pos-=n.length,n},e.prototype.skip=function(t){t||(t=1),this.pos+=t},e.prototype.reset=function(){this.pos=this.start},e.prototype.moveStart=function(){this.start=this.pos},e.prototype.makeSubStream=function(t,r){return new e(this.bytes,t,r)},e.prototype.decode=function(){return this.bytes},e}(),zE=new Uint8Array(0),jl=function(){function e(t){if(this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=zE,this.minBufferLength=512,t)for(;this.minBufferLength<t;)this.minBufferLength*=2}return Object.defineProperty(e.prototype,"isEmpty",{get:function(){for(;!this.eof&&this.bufferLength===0;)this.readBlock();return this.bufferLength===0},enumerable:!1,configurable:!0}),e.prototype.getByte=function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return-1;this.readBlock()}return this.buffer[this.pos++]},e.prototype.getUint16=function(){var t=this.getByte(),r=this.getByte();return t===-1||r===-1?-1:(t<<8)+r},e.prototype.getInt32=function(){var t=this.getByte(),r=this.getByte(),n=this.getByte(),i=this.getByte();return(t<<24)+(r<<16)+(n<<8)+i},e.prototype.getBytes=function(t,r){r===void 0&&(r=!1);var n,i=this.pos;if(t){for(this.ensureBuffer(i+t),n=i+t;!this.eof&&this.bufferLength<n;)this.readBlock();var o=this.bufferLength;n>o&&(n=o)}else{for(;!this.eof;)this.readBlock();n=this.bufferLength}this.pos=n;var a=this.buffer.subarray(i,n);return r&&!(a instanceof Uint8ClampedArray)?new Uint8ClampedArray(a):a},e.prototype.peekByte=function(){var t=this.getByte();return this.pos--,t},e.prototype.peekBytes=function(t,r){r===void 0&&(r=!1);var n=this.getBytes(t,r);return this.pos-=n.length,n},e.prototype.skip=function(t){t||(t=1),this.pos+=t},e.prototype.reset=function(){this.pos=0},e.prototype.makeSubStream=function(t,r){for(var n=t+r;this.bufferLength<=n&&!this.eof;)this.readBlock();return new vx(this.buffer,t,r)},e.prototype.decode=function(){for(;!this.eof;)this.readBlock();return this.buffer.subarray(0,this.bufferLength)},e.prototype.readBlock=function(){throw new Ar(this.constructor.name,"readBlock")},e.prototype.ensureBuffer=function(t){var r=this.buffer;if(t<=r.byteLength)return r;for(var n=this.minBufferLength;n<t;)n*=2;var i=new Uint8Array(n);return i.set(r),this.buffer=i},e}(),qm=function(e){return e===32||e===9||e===13||e===10},_E=function(e){L(t,e);function t(r,n){var i=e.call(this,n)||this;return i.stream=r,i.input=new Uint8Array(5),n&&(n=.8*n),i}return t.prototype.readBlock=function(){for(var r=126,n=122,i=-1,o=this.stream,a=o.getByte();qm(a);)a=o.getByte();if(a===i||a===r){this.eof=!0;return}var s=this.bufferLength,u,l;if(a===n){for(u=this.ensureBuffer(s+4),l=0;l<4;++l)u[s+l]=0;this.bufferLength+=4}else{var c=this.input;for(c[0]=a,l=1;l<5;++l){for(a=o.getByte();qm(a);)a=o.getByte();if(c[l]=a,a===i||a===r)break}if(u=this.ensureBuffer(s+l-1),this.bufferLength+=l-1,l<5){for(;l<5;++l)c[l]=33+84;this.eof=!0}var d=0;for(l=0;l<5;++l)d=d*85+(c[l]-33);for(l=3;l>=0;--l)u[s+l]=d&255,d>>=8}},t}(jl),PE=function(e){L(t,e);function t(r,n){var i=e.call(this,n)||this;return i.stream=r,i.firstDigit=-1,n&&(n=.5*n),i}return t.prototype.readBlock=function(){var r=8e3,n=this.stream.getBytes(r);if(!n.length){this.eof=!0;return}for(var i=n.length+1>>1,o=this.ensureBuffer(this.bufferLength+i),a=this.bufferLength,s=this.firstDigit,u=0,l=n.length;u<l;u++){var c=n[u],d=void 0;if(c>=48&&c<=57)d=c&15;else if(c>=65&&c<=70||c>=97&&c<=102)d=(c&15)+9;else if(c===62){this.eof=!0;break}else continue;s<0?s=d:(o[a++]=s<<4|d,s=-1)}s>=0&&this.eof&&(o[a++]=s<<4,s=-1),this.firstDigit=s,this.bufferLength=a},t}(jl),Xm=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),AE=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),DE=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),OE=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],RE=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5],BE=function(e){L(t,e);function t(r,n){var i=e.call(this,n)||this;i.stream=r;var o=r.getByte(),a=r.getByte();if(o===-1||a===-1)throw new Error("Invalid header in flate stream: "+o+", "+a);if((o&15)!==8)throw new Error("Unknown compression method in flate stream: "+o+", "+a);if(((o<<8)+a)%31!==0)throw new Error("Bad FCHECK in flate stream: "+o+", "+a);if(a&32)throw new Error("FDICT bit set in flate stream: "+o+", "+a);return i.codeSize=0,i.codeBuf=0,i}return t.prototype.readBlock=function(){var r,n,i=this.stream,o=this.getBits(3);if(o&1&&(this.eof=!0),o>>=1,o===0){var a=void 0;if((a=i.getByte())===-1)throw new Error("Bad block header in flate stream");var s=a;if((a=i.getByte())===-1)throw new Error("Bad block header in flate stream");if(s|=a<<8,(a=i.getByte())===-1)throw new Error("Bad block header in flate stream");var u=a;if((a=i.getByte())===-1)throw new Error("Bad block header in flate stream");if(u|=a<<8,u!==(~s&65535)&&(s!==0||u!==0))throw new Error("Bad uncompressed block length in flate stream");this.codeBuf=0,this.codeSize=0;var l=this.bufferLength;r=this.ensureBuffer(l+s);var c=l+s;if(this.bufferLength=c,s===0)i.peekByte()===-1&&(this.eof=!0);else for(var d=l;d<c;++d){if((a=i.getByte())===-1){this.eof=!0;break}r[d]=a}return}var h,f;if(o===1)h=OE,f=RE;else if(o===2){var v=this.getBits(5)+257,p=this.getBits(5)+1,b=this.getBits(4)+4,g=new Uint8Array(Xm.length),y=void 0;for(y=0;y<b;++y)g[Xm[y]]=this.getBits(3);var w=this.generateHuffmanTable(g);n=0,y=0;for(var x=v+p,k=new Uint8Array(x),E=void 0,T=void 0,z=void 0;y<x;){var _=this.getCode(w);if(_===16)E=2,T=3,z=n;else if(_===17)E=3,T=3,z=n=0;else if(_===18)E=7,T=11,z=n=0;else{k[y++]=n=_;continue}for(var P=this.getBits(E)+T;P-- >0;)k[y++]=z}h=this.generateHuffmanTable(k.subarray(0,v)),f=this.generateHuffmanTable(k.subarray(v,x))}else throw new Error("Unknown block type in flate stream");r=this.buffer;for(var D=r?r.length:0,I=this.bufferLength;;){var O=this.getCode(h);if(O<256){I+1>=D&&(r=this.ensureBuffer(I+1),D=r.length),r[I++]=O;continue}if(O===256){this.bufferLength=I;return}O-=257,O=AE[O];var K=O>>16;K>0&&(K=this.getBits(K)),n=(O&65535)+K,O=this.getCode(f),O=DE[O],K=O>>16,K>0&&(K=this.getBits(K));var Z=(O&65535)+K;I+n>=D&&(r=this.ensureBuffer(I+n),D=r.length);for(var W=0;W<n;++W,++I)r[I]=r[I-Z]}},t.prototype.getBits=function(r){for(var n=this.stream,i=this.codeSize,o=this.codeBuf,a;i<r;){if((a=n.getByte())===-1)throw new Error("Bad encoding in flate stream");o|=a<<i,i+=8}return a=o&(1<<r)-1,this.codeBuf=o>>r,this.codeSize=i-=r,a},t.prototype.getCode=function(r){for(var n=this.stream,i=r[0],o=r[1],a=this.codeSize,s=this.codeBuf,u;a<o&&(u=n.getByte())!==-1;)s|=u<<a,a+=8;var l=i[s&(1<<o)-1];typeof i=="number"&&console.log("FLATE:",l);var c=l>>16,d=l&65535;if(c<1||a<c)throw new Error("Bad encoding in flate stream");return this.codeBuf=s>>c,this.codeSize=a-c,d},t.prototype.generateHuffmanTable=function(r){var n=r.length,i=0,o;for(o=0;o<n;++o)r[o]>i&&(i=r[o]);for(var a=1<<i,s=new Int32Array(a),u=1,l=0,c=2;u<=i;++u,l<<=1,c<<=1)for(var d=0;d<n;++d)if(r[d]===u){var h=0,f=l;for(o=0;o<u;++o)h=h<<1|f&1,f>>=1;for(o=h;o<a;o+=c)s[o]=u<<16|d;++l}return[s,i]},t}(jl),NE=function(e){L(t,e);function t(r,n,i){var o=e.call(this,n)||this;o.stream=r,o.cachedData=0,o.bitsCached=0;for(var a=4096,s={earlyChange:i,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(a),dictionaryLengths:new Uint16Array(a),dictionaryPrevCodes:new Uint16Array(a),currentSequence:new Uint8Array(a),currentSequenceLength:0},u=0;u<256;++u)s.dictionaryValues[u]=u,s.dictionaryLengths[u]=1;return o.lzwState=s,o}return t.prototype.readBlock=function(){var r=512,n=r*2,i=r,o,a,s,u=this.lzwState;if(!!u){var l=u.earlyChange,c=u.nextCode,d=u.dictionaryValues,h=u.dictionaryLengths,f=u.dictionaryPrevCodes,v=u.codeLength,p=u.prevCode,b=u.currentSequence,g=u.currentSequenceLength,y=0,w=this.bufferLength,x=this.ensureBuffer(this.bufferLength+n);for(o=0;o<r;o++){var k=this.readBits(v),E=g>0;if(!k||k<256)b[0]=k,g=1;else if(k>=258)if(k<c)for(g=h[k],a=g-1,s=k;a>=0;a--)b[a]=d[s],s=f[s];else b[g++]=b[0];else if(k===256){v=9,c=258,g=0;continue}else{this.eof=!0,delete this.lzwState;break}if(E&&(f[c]=p,h[c]=h[p]+1,d[c]=b[0],c++,v=c+l&c+l-1?v:Math.min(Math.log(c+l)/.6931471805599453+1,12)|0),p=k,y+=g,n<y){do n+=i;while(n<y);x=this.ensureBuffer(this.bufferLength+n)}for(a=0;a<g;a++)x[w++]=b[a]}u.nextCode=c,u.codeLength=v,u.prevCode=p,u.currentSequenceLength=g,this.bufferLength=w}},t.prototype.readBits=function(r){for(var n=this.bitsCached,i=this.cachedData;n<r;){var o=this.stream.getByte();if(o===-1)return this.eof=!0,null;i=i<<8|o,n+=8}return this.bitsCached=n-=r,this.cachedData=i,i>>>n&(1<<r)-1},t}(jl),IE=function(e){L(t,e);function t(r,n){var i=e.call(this,n)||this;return i.stream=r,i}return t.prototype.readBlock=function(){var r=this.stream.getBytes(2);if(!r||r.length<2||r[0]===128){this.eof=!0;return}var n,i=this.bufferLength,o=r[0];if(o<128){if(n=this.ensureBuffer(i+o+1),n[i++]=r[1],o>0){var a=this.stream.getBytes(o);n.set(a,i),i+=o}}else{o=257-o;var s=r[1];n=this.ensureBuffer(i+o+1);for(var u=0;u<o;u++)n[i++]=s}this.bufferLength=i},t}(jl),Gm=function(e,t,r){if(t===C.of("FlateDecode"))return new BE(e);if(t===C.of("LZWDecode")){var n=1;if(r instanceof he){var i=r.lookup(C.of("EarlyChange"));i instanceof oe&&(n=i.asNumber())}return new NE(e,void 0,n)}if(t===C.of("ASCII85Decode"))return new _E(e);if(t===C.of("ASCIIHexDecode"))return new PE(e);if(t===C.of("RunLengthDecode"))return new IE(e);throw new qF(t.asString())},gx=function(e){var t=e.dict,r=e.contents,n=new vx(r),i=t.lookup(C.of("Filter")),o=t.lookup(C.of("DecodeParms"));if(i instanceof C)n=Gm(n,i,o);else if(i instanceof _e)for(var a=0,s=i.size();a<s;a++)n=Gm(n,i.lookup(a,C),o&&o.lookupMaybe(a,he));else if(i)throw new Lc([C,_e],i);return n},ME=function(e){var t=e.MediaBox(),r=t.lookup(2,oe).asNumber()-t.lookup(0,oe).asNumber(),n=t.lookup(3,oe).asNumber()-t.lookup(1,oe).asNumber();return{left:0,bottom:0,right:r,top:n}},LE=function(e){return[1,0,0,1,-e.left,-e.bottom]},mx=function(){function e(t,r,n){this.page=t;var i=r!=null?r:ME(t);this.width=i.right-i.left,this.height=i.top-i.bottom,this.boundingBox=i,this.transformationMatrix=n!=null?n:LE(i)}return e.for=function(t,r,n){return fe(this,void 0,void 0,function(){return pe(this,function(i){return[2,new e(t,r,n)]})})},e.prototype.embedIntoContext=function(t,r){return fe(this,void 0,void 0,function(){var n,i,o,a,s,u,l,c,d,h;return pe(this,function(f){if(n=this.page.normalizedEntries(),i=n.Contents,o=n.Resources,!i)throw new XF;return a=this.decodeContents(i),s=this.boundingBox,u=s.left,l=s.bottom,c=s.right,d=s.top,h=t.flateStream(a,{Type:"XObject",Subtype:"Form",FormType:1,BBox:[u,l,c,d],Matrix:this.transformationMatrix,Resources:o}),r?(t.assign(r,h),[2,r]):[2,t.register(h)]})})},e.prototype.decodeContents=function(t){for(var r=Uint8Array.of(F.Newline),n=[],i=0,o=t.size();i<o;i++){var a=t.lookup(i,mr),s=void 0;if(a instanceof kl)s=gx(a).decode();else if(a instanceof Hs)s=a.getUnencodedContents();else throw new GF(a);n.push(s,r)}return h8.apply(void 0,n)},e}(),xu=function(e,t){if(e!==void 0)return t[e]},Ws;(function(e){e.UseNone="UseNone",e.UseOutlines="UseOutlines",e.UseThumbs="UseThumbs",e.UseOC="UseOC"})(Ws||(Ws={}));var Ks;(function(e){e.L2R="L2R",e.R2L="R2L"})(Ks||(Ks={}));var qs;(function(e){e.None="None",e.AppDefault="AppDefault"})(qs||(qs={}));var jc;(function(e){e.Simplex="Simplex",e.DuplexFlipShortEdge="DuplexFlipShortEdge",e.DuplexFlipLongEdge="DuplexFlipLongEdge"})(jc||(jc={}));var Zm=function(){function e(t){this.dict=t}return e.prototype.lookupBool=function(t){var r=this.dict.lookup(C.of(t));if(r instanceof xl)return r},e.prototype.lookupName=function(t){var r=this.dict.lookup(C.of(t));if(r instanceof C)return r},e.prototype.HideToolbar=function(){return this.lookupBool("HideToolbar")},e.prototype.HideMenubar=function(){return this.lookupBool("HideMenubar")},e.prototype.HideWindowUI=function(){return this.lookupBool("HideWindowUI")},e.prototype.FitWindow=function(){return this.lookupBool("FitWindow")},e.prototype.CenterWindow=function(){return this.lookupBool("CenterWindow")},e.prototype.DisplayDocTitle=function(){return this.lookupBool("DisplayDocTitle")},e.prototype.NonFullScreenPageMode=function(){return this.lookupName("NonFullScreenPageMode")},e.prototype.Direction=function(){return this.lookupName("Direction")},e.prototype.PrintScaling=function(){return this.lookupName("PrintScaling")},e.prototype.Duplex=function(){return this.lookupName("Duplex")},e.prototype.PickTrayByPDFSize=function(){return this.lookupBool("PickTrayByPDFSize")},e.prototype.PrintPageRange=function(){var t=this.dict.lookup(C.of("PrintPageRange"));if(t instanceof _e)return t},e.prototype.NumCopies=function(){var t=this.dict.lookup(C.of("NumCopies"));if(t instanceof oe)return t},e.prototype.getHideToolbar=function(){var t,r;return(r=(t=this.HideToolbar())===null||t===void 0?void 0:t.asBoolean())!==null&&r!==void 0?r:!1},e.prototype.getHideMenubar=function(){var t,r;return(r=(t=this.HideMenubar())===null||t===void 0?void 0:t.asBoolean())!==null&&r!==void 0?r:!1},e.prototype.getHideWindowUI=function(){var t,r;return(r=(t=this.HideWindowUI())===null||t===void 0?void 0:t.asBoolean())!==null&&r!==void 0?r:!1},e.prototype.getFitWindow=function(){var t,r;return(r=(t=this.FitWindow())===null||t===void 0?void 0:t.asBoolean())!==null&&r!==void 0?r:!1},e.prototype.getCenterWindow=function(){var t,r;return(r=(t=this.CenterWindow())===null||t===void 0?void 0:t.asBoolean())!==null&&r!==void 0?r:!1},e.prototype.getDisplayDocTitle=function(){var t,r;return(r=(t=this.DisplayDocTitle())===null||t===void 0?void 0:t.asBoolean())!==null&&r!==void 0?r:!1},e.prototype.getNonFullScreenPageMode=function(){var t,r,n=(t=this.NonFullScreenPageMode())===null||t===void 0?void 0:t.decodeText();return(r=xu(n,Ws))!==null&&r!==void 0?r:Ws.UseNone},e.prototype.getReadingDirection=function(){var t,r,n=(t=this.Direction())===null||t===void 0?void 0:t.decodeText();return(r=xu(n,Ks))!==null&&r!==void 0?r:Ks.L2R},e.prototype.getPrintScaling=function(){var t,r,n=(t=this.PrintScaling())===null||t===void 0?void 0:t.decodeText();return(r=xu(n,qs))!==null&&r!==void 0?r:qs.AppDefault},e.prototype.getDuplex=function(){var t,r=(t=this.Duplex())===null||t===void 0?void 0:t.decodeText();return xu(r,jc)},e.prototype.getPickTrayByPDFSize=function(){var t;return(t=this.PickTrayByPDFSize())===null||t===void 0?void 0:t.asBoolean()},e.prototype.getPrintPageRange=function(){var t=this.PrintPageRange();if(!t)return[];for(var r=[],n=0;n<t.size();n+=2){var i=t.lookup(n,oe).asNumber(),o=t.lookup(n+1,oe).asNumber();r.push({start:i,end:o})}return r},e.prototype.getNumCopies=function(){var t,r;return(r=(t=this.NumCopies())===null||t===void 0?void 0:t.asNumber())!==null&&r!==void 0?r:1},e.prototype.setHideToolbar=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("HideToolbar"),r)},e.prototype.setHideMenubar=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("HideMenubar"),r)},e.prototype.setHideWindowUI=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("HideWindowUI"),r)},e.prototype.setFitWindow=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("FitWindow"),r)},e.prototype.setCenterWindow=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("CenterWindow"),r)},e.prototype.setDisplayDocTitle=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("DisplayDocTitle"),r)},e.prototype.setNonFullScreenPageMode=function(t){xi(t,"nonFullScreenPageMode",Ws);var r=C.of(t);this.dict.set(C.of("NonFullScreenPageMode"),r)},e.prototype.setReadingDirection=function(t){xi(t,"readingDirection",Ks);var r=C.of(t);this.dict.set(C.of("Direction"),r)},e.prototype.setPrintScaling=function(t){xi(t,"printScaling",qs);var r=C.of(t);this.dict.set(C.of("PrintScaling"),r)},e.prototype.setDuplex=function(t){xi(t,"duplex",jc);var r=C.of(t);this.dict.set(C.of("Duplex"),r)},e.prototype.setPickTrayByPDFSize=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("PickTrayByPDFSize"),r)},e.prototype.setPrintPageRange=function(t){Array.isArray(t)||(t=[t]);for(var r=[],n=0,i=t.length;n<i;n++)r.push(t[n].start),r.push(t[n].end);ox(r,"printPageRange",["number"]);var o=this.dict.context.obj(r);this.dict.set(C.of("PrintPageRange"),o)},e.prototype.setNumCopies=function(t){pr(t,"numCopies",1,Number.MAX_VALUE),KF(t,"numCopies");var r=this.dict.context.obj(t);this.dict.set(C.of("NumCopies"),r)},e.fromDict=function(t){return new e(t)},e.create=function(t){var r=t.obj({});return new e(r)},e}(),UE=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/,yx=function(){function e(t,r){this.dict=t,this.ref=r}return e.prototype.T=function(){return this.dict.lookupMaybe(C.of("T"),Ie,re)},e.prototype.Ff=function(){var t=this.getInheritableAttribute(C.of("Ff"));return this.dict.context.lookupMaybe(t,oe)},e.prototype.V=function(){var t=this.getInheritableAttribute(C.of("V"));return this.dict.context.lookup(t)},e.prototype.Kids=function(){return this.dict.lookupMaybe(C.of("Kids"),_e)},e.prototype.DA=function(){var t=this.dict.lookup(C.of("DA"));if(t instanceof Ie||t instanceof re)return t},e.prototype.setKids=function(t){this.dict.set(C.of("Kids"),this.dict.context.obj(t))},e.prototype.getParent=function(){var t=this.dict.get(C.of("Parent"));if(t instanceof Me){var r=this.dict.lookup(C.of("Parent"),he);return new e(r,t)}},e.prototype.setParent=function(t){t?this.dict.set(C.of("Parent"),t):this.dict.delete(C.of("Parent"))},e.prototype.getFullyQualifiedName=function(){var t=this.getParent();return t?t.getFullyQualifiedName()+"."+this.getPartialName():this.getPartialName()},e.prototype.getPartialName=function(){var t;return(t=this.T())===null||t===void 0?void 0:t.decodeText()},e.prototype.setPartialName=function(t){t?this.dict.set(C.of("T"),re.fromText(t)):this.dict.delete(C.of("T"))},e.prototype.setDefaultAppearance=function(t){this.dict.set(C.of("DA"),Ie.of(t))},e.prototype.getDefaultAppearance=function(){var t=this.DA();return t instanceof re?t.decodeText():t==null?void 0:t.asString()},e.prototype.setFontSize=function(t){var r,n=(r=this.getFullyQualifiedName())!==null&&r!==void 0?r:"",i=this.getDefaultAppearance();if(!i)throw new JF(n);var o=y0(i,UE);if(!o.match)throw new $F(n);var a=i.slice(0,o.pos-o.match[0].length),s=o.pos<=i.length?i.slice(o.pos):"",u=o.match[1],l=a+" /"+u+" "+t+" Tf "+s;this.setDefaultAppearance(l)},e.prototype.getFlags=function(){var t,r;return(r=(t=this.Ff())===null||t===void 0?void 0:t.asNumber())!==null&&r!==void 0?r:0},e.prototype.setFlags=function(t){this.dict.set(C.of("Ff"),oe.of(t))},e.prototype.hasFlag=function(t){var r=this.getFlags();return(r&t)!==0},e.prototype.setFlag=function(t){var r=this.getFlags();this.setFlags(r|t)},e.prototype.clearFlag=function(t){var r=this.getFlags();this.setFlags(r&~t)},e.prototype.setFlagTo=function(t,r){r?this.setFlag(t):this.clearFlag(t)},e.prototype.getInheritableAttribute=function(t){var r;return this.ascend(function(n){r||(r=n.dict.get(t))}),r},e.prototype.ascend=function(t){t(this);var r=this.getParent();r&&r.ascend(t)},e}(),Lh=function(){function e(t){this.dict=t}return e.prototype.W=function(){var t=this.dict.lookup(C.of("W"));if(t instanceof oe)return t},e.prototype.getWidth=function(){var t,r;return(r=(t=this.W())===null||t===void 0?void 0:t.asNumber())!==null&&r!==void 0?r:1},e.prototype.setWidth=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("W"),r)},e.fromDict=function(t){return new e(t)},e}(),VE=function(){function e(t){this.dict=t}return e.prototype.Rect=function(){return this.dict.lookup(C.of("Rect"),_e)},e.prototype.AP=function(){return this.dict.lookupMaybe(C.of("AP"),he)},e.prototype.F=function(){var t=this.dict.lookup(C.of("F"));return this.dict.context.lookupMaybe(t,oe)},e.prototype.getRectangle=function(){var t,r=this.Rect();return(t=r==null?void 0:r.asRectangle())!==null&&t!==void 0?t:{x:0,y:0,width:0,height:0}},e.prototype.setRectangle=function(t){var r=t.x,n=t.y,i=t.width,o=t.height,a=this.dict.context.obj([r,n,r+i,n+o]);this.dict.set(C.of("Rect"),a)},e.prototype.getAppearanceState=function(){var t=this.dict.lookup(C.of("AS"));if(t instanceof C)return t},e.prototype.setAppearanceState=function(t){this.dict.set(C.of("AS"),t)},e.prototype.setAppearances=function(t){this.dict.set(C.of("AP"),t)},e.prototype.ensureAP=function(){var t=this.AP();return t||(t=this.dict.context.obj({}),this.dict.set(C.of("AP"),t)),t},e.prototype.getNormalAppearance=function(){var t=this.ensureAP(),r=t.get(C.of("N"));if(r instanceof Me||r instanceof he)return r;throw new Error("Unexpected N type: "+(r==null?void 0:r.constructor.name))},e.prototype.setNormalAppearance=function(t){var r=this.ensureAP();r.set(C.of("N"),t)},e.prototype.setRolloverAppearance=function(t){var r=this.ensureAP();r.set(C.of("R"),t)},e.prototype.setDownAppearance=function(t){var r=this.ensureAP();r.set(C.of("D"),t)},e.prototype.removeRolloverAppearance=function(){var t=this.AP();t==null||t.delete(C.of("R"))},e.prototype.removeDownAppearance=function(){var t=this.AP();t==null||t.delete(C.of("D"))},e.prototype.getAppearances=function(){var t=this.AP();if(!!t){var r=t.lookup(C.of("N"),he,mr),n=t.lookupMaybe(C.of("R"),he,mr),i=t.lookupMaybe(C.of("D"),he,mr);return{normal:r,rollover:n,down:i}}},e.prototype.getFlags=function(){var t,r;return(r=(t=this.F())===null||t===void 0?void 0:t.asNumber())!==null&&r!==void 0?r:0},e.prototype.setFlags=function(t){this.dict.set(C.of("F"),oe.of(t))},e.prototype.hasFlag=function(t){var r=this.getFlags();return(r&t)!==0},e.prototype.setFlag=function(t){var r=this.getFlags();this.setFlags(r|t)},e.prototype.clearFlag=function(t){var r=this.getFlags();this.setFlags(r&~t)},e.prototype.setFlagTo=function(t,r){r?this.setFlag(t):this.clearFlag(t)},e.fromDict=function(t){return new e(t)},e}(),Uh=function(){function e(t){this.dict=t}return e.prototype.R=function(){var t=this.dict.lookup(C.of("R"));if(t instanceof oe)return t},e.prototype.BC=function(){var t=this.dict.lookup(C.of("BC"));if(t instanceof _e)return t},e.prototype.BG=function(){var t=this.dict.lookup(C.of("BG"));if(t instanceof _e)return t},e.prototype.CA=function(){var t=this.dict.lookup(C.of("CA"));if(t instanceof re||t instanceof Ie)return t},e.prototype.RC=function(){var t=this.dict.lookup(C.of("RC"));if(t instanceof re||t instanceof Ie)return t},e.prototype.AC=function(){var t=this.dict.lookup(C.of("AC"));if(t instanceof re||t instanceof Ie)return t},e.prototype.getRotation=function(){var t;return(t=this.R())===null||t===void 0?void 0:t.asNumber()},e.prototype.getBorderColor=function(){var t=this.BC();if(!!t){for(var r=[],n=0,i=t==null?void 0:t.size();n<i;n++){var o=t.get(n);o instanceof oe&&r.push(o.asNumber())}return r}},e.prototype.getBackgroundColor=function(){var t=this.BG();if(!!t){for(var r=[],n=0,i=t==null?void 0:t.size();n<i;n++){var o=t.get(n);o instanceof oe&&r.push(o.asNumber())}return r}},e.prototype.getCaptions=function(){var t=this.CA(),r=this.RC(),n=this.AC();return{normal:t==null?void 0:t.decodeText(),rollover:r==null?void 0:r.decodeText(),down:n==null?void 0:n.decodeText()}},e.prototype.setRotation=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("R"),r)},e.prototype.setBorderColor=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("BC"),r)},e.prototype.setBackgroundColor=function(t){var r=this.dict.context.obj(t);this.dict.set(C.of("BG"),r)},e.prototype.setCaptions=function(t){var r=re.fromText(t.normal);if(this.dict.set(C.of("CA"),r),t.rollover){var n=re.fromText(t.rollover);this.dict.set(C.of("RC"),n)}else this.dict.delete(C.of("RC"));if(t.down){var i=re.fromText(t.down);this.dict.set(C.of("AC"),i)}else this.dict.delete(C.of("AC"))},e.fromDict=function(t){return new e(t)},e}(),sp=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.MK=function(){var r=this.dict.lookup(C.of("MK"));if(r instanceof he)return r},t.prototype.BS=function(){var r=this.dict.lookup(C.of("BS"));if(r instanceof he)return r},t.prototype.DA=function(){var r=this.dict.lookup(C.of("DA"));if(r instanceof Ie||r instanceof re)return r},t.prototype.P=function(){var r=this.dict.get(C.of("P"));if(r instanceof Me)return r},t.prototype.setP=function(r){this.dict.set(C.of("P"),r)},t.prototype.setDefaultAppearance=function(r){this.dict.set(C.of("DA"),Ie.of(r))},t.prototype.getDefaultAppearance=function(){var r=this.DA();return r instanceof re?r.decodeText():r==null?void 0:r.asString()},t.prototype.getAppearanceCharacteristics=function(){var r=this.MK();if(r)return Uh.fromDict(r)},t.prototype.getOrCreateAppearanceCharacteristics=function(){var r=this.MK();if(r)return Uh.fromDict(r);var n=Uh.fromDict(this.dict.context.obj({}));return this.dict.set(C.of("MK"),n.dict),n},t.prototype.getBorderStyle=function(){var r=this.BS();if(r)return Lh.fromDict(r)},t.prototype.getOrCreateBorderStyle=function(){var r=this.BS();if(r)return Lh.fromDict(r);var n=Lh.fromDict(this.dict.context.obj({}));return this.dict.set(C.of("BS"),n.dict),n},t.prototype.getOnValue=function(){var r,n=(r=this.getAppearances())===null||r===void 0?void 0:r.normal;if(n instanceof he)for(var i=n.keys(),o=0,a=i.length;o<a;o++){var s=i[o];if(s!==C.of("Off"))return s}},t.fromDict=function(r){return new t(r)},t.create=function(r,n){var i=r.obj({Type:"Annot",Subtype:"Widget",Rect:[0,0,0,0],Parent:n});return new t(i)},t}(VE),Wa=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.FT=function(){var r=this.getInheritableAttribute(C.of("FT"));return this.dict.context.lookup(r,C)},t.prototype.getWidgets=function(){var r=this.Kids();if(!r)return[sp.fromDict(this.dict)];for(var n=new Array(r.size()),i=0,o=r.size();i<o;i++){var a=r.lookup(i,he);n[i]=sp.fromDict(a)}return n},t.prototype.addWidget=function(r){var n=this.normalizedEntries().Kids;n.push(r)},t.prototype.removeWidget=function(r){var n=this.Kids();if(n){if(r<0||r>n.size())throw new Uc(r,0,n.size());n.remove(r)}else{if(r!==0)throw new Uc(r,0,0);this.setKids([])}},t.prototype.normalizedEntries=function(){var r=this.Kids();return r||(r=this.dict.context.obj([this.ref]),this.dict.set(C.of("Kids"),r)),{Kids:r}},t.fromDict=function(r,n){return new t(r,n)},t}(yx),O0=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.Opt=function(){return this.dict.lookupMaybe(C.of("Opt"),Ie,re,_e)},t.prototype.setOpt=function(r){this.dict.set(C.of("Opt"),this.dict.context.obj(r))},t.prototype.getExportValues=function(){var r=this.Opt();if(!!r){if(r instanceof Ie||r instanceof re)return[r];for(var n=[],i=0,o=r.size();i<o;i++){var a=r.lookup(i);(a instanceof Ie||a instanceof re)&&n.push(a)}return n}},t.prototype.removeExportValue=function(r){var n=this.Opt();if(!!n)if(n instanceof Ie||n instanceof re){if(r!==0)throw new Uc(r,0,0);this.setOpt([])}else{if(r<0||r>n.size())throw new Uc(r,0,n.size());n.remove(r)}},t.prototype.normalizeExportValues=function(){for(var r,n,i,o,a=(r=this.getExportValues())!==null&&r!==void 0?r:[],s=[],u=this.getWidgets(),l=0,c=u.length;l<c;l++){var d=u[l],h=(n=a[l])!==null&&n!==void 0?n:re.fromText((o=(i=d.getOnValue())===null||i===void 0?void 0:i.decodeText())!==null&&o!==void 0?o:"");s.push(h)}this.setOpt(s)},t.prototype.addOpt=function(r,n){var i;this.normalizeExportValues();var o=r.decodeText(),a;if(n)for(var s=(i=this.getExportValues())!==null&&i!==void 0?i:[],u=0,l=s.length;u<l;u++){var c=s[u];c.decodeText()===o&&(a=u)}var d=this.Opt();return d.push(r),a!=null?a:d.size()-1},t.prototype.addWidgetWithOpt=function(r,n,i){var o=this.addOpt(n,i),a=C.of(String(o));return this.addWidget(r),a},t}(Wa),zd=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.setValue=function(r){var n,i=(n=this.getOnValue())!==null&&n!==void 0?n:C.of("Yes");if(r!==i&&r!==C.of("Off"))throw new z0;this.dict.set(C.of("V"),r);for(var o=this.getWidgets(),a=0,s=o.length;a<s;a++){var u=o[a],l=u.getOnValue()===r?r:C.of("Off");u.setAppearanceState(l)}},t.prototype.getValue=function(){var r=this.V();return r instanceof C?r:C.of("Off")},t.prototype.getOnValue=function(){var r=this.getWidgets()[0];return r==null?void 0:r.getOnValue()},t.fromDict=function(r,n){return new t(r,n)},t.create=function(r){var n=r.obj({FT:"Btn",Kids:[]}),i=r.register(n);return new t(n,i)},t}(O0),lt=function(e){return 1<<e},Gr;(function(e){e[e.ReadOnly=lt(1-1)]="ReadOnly",e[e.Required=lt(2-1)]="Required",e[e.NoExport=lt(3-1)]="NoExport"})(Gr||(Gr={}));var zr;(function(e){e[e.NoToggleToOff=lt(15-1)]="NoToggleToOff",e[e.Radio=lt(16-1)]="Radio",e[e.PushButton=lt(17-1)]="PushButton",e[e.RadiosInUnison=lt(26-1)]="RadiosInUnison"})(zr||(zr={}));var Ye;(function(e){e[e.Multiline=lt(13-1)]="Multiline",e[e.Password=lt(14-1)]="Password",e[e.FileSelect=lt(21-1)]="FileSelect",e[e.DoNotSpellCheck=lt(23-1)]="DoNotSpellCheck",e[e.DoNotScroll=lt(24-1)]="DoNotScroll",e[e.Comb=lt(25-1)]="Comb",e[e.RichText=lt(26-1)]="RichText"})(Ye||(Ye={}));var Ne;(function(e){e[e.Combo=lt(18-1)]="Combo",e[e.Edit=lt(19-1)]="Edit",e[e.Sort=lt(20-1)]="Sort",e[e.MultiSelect=lt(22-1)]="MultiSelect",e[e.DoNotSpellCheck=lt(23-1)]="DoNotSpellCheck",e[e.CommitOnSelChange=lt(27-1)]="CommitOnSelChange"})(Ne||(Ne={}));var bx=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.setValues=function(r){if(this.hasFlag(Ne.Combo)&&!this.hasFlag(Ne.Edit)&&!this.valuesAreValid(r))throw new z0;if(r.length===0&&this.dict.delete(C.of("V")),r.length===1&&this.dict.set(C.of("V"),r[0]),r.length>1){if(!this.hasFlag(Ne.MultiSelect))throw new QF;this.dict.set(C.of("V"),this.dict.context.obj(r))}this.updateSelectedIndices(r)},t.prototype.valuesAreValid=function(r){for(var n=this.getOptions(),i=function(u,l){var c=r[u].decodeText();if(!n.find(function(d){return c===(d.display||d.value).decodeText()}))return{value:!1}},o=0,a=r.length;o<a;o++){var s=i(o);if(typeof s=="object")return s.value}return!0},t.prototype.updateSelectedIndices=function(r){if(r.length>1){for(var n=new Array(r.length),i=this.getOptions(),o=function(u,l){var c=r[u].decodeText();n[u]=i.findIndex(function(d){return c===(d.display||d.value).decodeText()})},a=0,s=r.length;a<s;a++)o(a,s);this.dict.set(C.of("I"),this.dict.context.obj(n.sort()))}else this.dict.delete(C.of("I"))},t.prototype.getValues=function(){var r=this.V();if(r instanceof Ie||r instanceof re)return[r];if(r instanceof _e){for(var n=[],i=0,o=r.size();i<o;i++){var a=r.lookup(i);(a instanceof Ie||a instanceof re)&&n.push(a)}return n}return[]},t.prototype.Opt=function(){return this.dict.lookupMaybe(C.of("Opt"),Ie,re,_e)},t.prototype.setOptions=function(r){for(var n=new Array(r.length),i=0,o=r.length;i<o;i++){var a=r[i],s=a.value,u=a.display;n[i]=this.dict.context.obj([s,u||s])}this.dict.set(C.of("Opt"),this.dict.context.obj(n))},t.prototype.getOptions=function(){var r=this.Opt();if(r instanceof Ie||r instanceof re)return[{value:r,display:r}];if(r instanceof _e){for(var n=[],i=0,o=r.size();i<o;i++){var a=r.lookup(i);if((a instanceof Ie||a instanceof re)&&n.push({value:a,display:a}),a instanceof _e&&a.size()>0){var s=a.lookup(0,Ie,re),u=a.lookupMaybe(1,Ie,re);n.push({value:s,display:u||s})}}return n}return[]},t}(Wa),_d=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.fromDict=function(r,n){return new t(r,n)},t.create=function(r){var n=r.obj({FT:"Ch",Ff:Ne.Combo,Kids:[]}),i=r.register(n);return new t(n,i)},t}(bx),Hc=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.addField=function(r){var n=this.normalizedEntries().Kids;n==null||n.push(r)},t.prototype.normalizedEntries=function(){var r=this.Kids();return r||(r=this.dict.context.obj([]),this.dict.set(C.of("Kids"),r)),{Kids:r}},t.fromDict=function(r,n){return new t(r,n)},t.create=function(r){var n=r.obj({}),i=r.register(n);return new t(n,i)},t}(yx),R0=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.fromDict=function(r,n){return new t(r,n)},t}(Wa),Pd=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.MaxLen=function(){var r=this.dict.lookup(C.of("MaxLen"));if(r instanceof oe)return r},t.prototype.Q=function(){var r=this.dict.lookup(C.of("Q"));if(r instanceof oe)return r},t.prototype.setMaxLength=function(r){this.dict.set(C.of("MaxLen"),oe.of(r))},t.prototype.removeMaxLength=function(){this.dict.delete(C.of("MaxLen"))},t.prototype.getMaxLength=function(){var r;return(r=this.MaxLen())===null||r===void 0?void 0:r.asNumber()},t.prototype.setQuadding=function(r){this.dict.set(C.of("Q"),oe.of(r))},t.prototype.getQuadding=function(){var r;return(r=this.Q())===null||r===void 0?void 0:r.asNumber()},t.prototype.setValue=function(r){this.dict.set(C.of("V"),r)},t.prototype.removeValue=function(){this.dict.delete(C.of("V"))},t.prototype.getValue=function(){var r=this.V();if(r instanceof Ie||r instanceof re)return r},t.fromDict=function(r,n){return new t(r,n)},t.create=function(r){var n=r.obj({FT:"Tx",Kids:[]}),i=r.register(n);return new t(n,i)},t}(Wa),Ad=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.fromDict=function(r,n){return new t(r,n)},t.create=function(r){var n=r.obj({FT:"Btn",Ff:zr.PushButton,Kids:[]}),i=r.register(n);return new t(n,i)},t}(O0),Dd=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.setValue=function(r){var n=this.getOnValues();if(!n.includes(r)&&r!==C.of("Off"))throw new z0;this.dict.set(C.of("V"),r);for(var i=this.getWidgets(),o=0,a=i.length;o<a;o++){var s=i[o],u=s.getOnValue()===r?r:C.of("Off");s.setAppearanceState(u)}},t.prototype.getValue=function(){var r=this.V();return r instanceof C?r:C.of("Off")},t.prototype.getOnValues=function(){for(var r=this.getWidgets(),n=[],i=0,o=r.length;i<o;i++){var a=r[i].getOnValue();a&&n.push(a)}return n},t.fromDict=function(r,n){return new t(r,n)},t.create=function(r){var n=r.obj({FT:"Btn",Ff:zr.Radio,Kids:[]}),i=r.register(n);return new t(n,i)},t}(O0),Od=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.fromDict=function(r,n){return new t(r,n)},t.create=function(r){var n=r.obj({FT:"Ch",Kids:[]}),i=r.register(n);return new t(n,i)},t}(bx),B0=function(e){if(!e)return[];for(var t=[],r=0,n=e.size();r<n;r++){var i=e.get(r),o=e.lookup(r);i instanceof Me&&o instanceof he&&t.push([wx(o,i),i])}return t},wx=function(e,t){var r=jE(e);return r?Hc.fromDict(e,t):HE(e,t)},jE=function(e){var t=e.lookup(C.of("Kids"));if(t instanceof _e)for(var r=0,n=t.size();r<n;r++){var i=t.lookup(r),o=i instanceof he&&i.has(C.of("T"));if(o)return!0}return!1},HE=function(e,t){var r=N0(e,C.of("FT")),n=e.context.lookup(r,C);return n===C.of("Btn")?WE(e,t):n===C.of("Ch")?KE(e,t):n===C.of("Tx")?Pd.fromDict(e,t):n===C.of("Sig")?R0.fromDict(e,t):Wa.fromDict(e,t)},WE=function(e,t){var r,n=N0(e,C.of("Ff")),i=e.context.lookupMaybe(n,oe),o=(r=i==null?void 0:i.asNumber())!==null&&r!==void 0?r:0;return lp(o,zr.PushButton)?Ad.fromDict(e,t):lp(o,zr.Radio)?Dd.fromDict(e,t):zd.fromDict(e,t)},KE=function(e,t){var r,n=N0(e,C.of("Ff")),i=e.context.lookupMaybe(n,oe),o=(r=i==null?void 0:i.asNumber())!==null&&r!==void 0?r:0;return lp(o,Ne.Combo)?_d.fromDict(e,t):Od.fromDict(e,t)},lp=function(e,t){return(e&t)!==0},N0=function(e,t){var r;return xx(e,function(n){r||(r=n.get(t))}),r},xx=function(e,t){t(e);var r=e.lookupMaybe(C.of("Parent"),he);r&&xx(r,t)},Wc=function(){function e(t){this.dict=t}return e.prototype.Fields=function(){var t=this.dict.lookup(C.of("Fields"));if(t instanceof _e)return t},e.prototype.getFields=function(){for(var t=this.normalizedEntries().Fields,r=new Array(t.size()),n=0,i=t.size();n<i;n++){var o=t.get(n),a=t.lookup(n,he);r[n]=[wx(a,o),o]}return r},e.prototype.getAllFields=function(){var t=[],r=function(n){if(!!n)for(var i=0,o=n.length;i<o;i++){var a=n[i];t.push(a);var s=a[0];s instanceof Hc&&r(B0(s.Kids()))}};return r(this.getFields()),t},e.prototype.addField=function(t){var r=this.normalizedEntries().Fields;r==null||r.push(t)},e.prototype.removeField=function(t){var r=t.getParent(),n=r===void 0?this.normalizedEntries().Fields:r.Kids(),i=n==null?void 0:n.indexOf(t.ref);if(n===void 0||i===void 0)throw new Error("Tried to remove inexistent field "+t.getFullyQualifiedName());n.remove(i),r!==void 0&&n.size()===0&&this.removeField(r)},e.prototype.normalizedEntries=function(){var t=this.Fields();return t||(t=this.dict.context.obj([]),this.dict.set(C.of("Fields"),t)),{Fields:t}},e.fromDict=function(t){return new e(t)},e.create=function(t){var r=t.obj({Fields:[]});return new e(r)},e}(),kx=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.Pages=function(){return this.lookup(C.of("Pages"),he)},t.prototype.AcroForm=function(){return this.lookupMaybe(C.of("AcroForm"),he)},t.prototype.getAcroForm=function(){var r=this.AcroForm();if(!!r)return Wc.fromDict(r)},t.prototype.getOrCreateAcroForm=function(){var r=this.getAcroForm();if(!r){r=Wc.create(this.context);var n=this.context.register(r.dict);this.set(C.of("AcroForm"),n)}return r},t.prototype.ViewerPreferences=function(){return this.lookupMaybe(C.of("ViewerPreferences"),he)},t.prototype.getViewerPreferences=function(){var r=this.ViewerPreferences();if(!!r)return Zm.fromDict(r)},t.prototype.getOrCreateViewerPreferences=function(){var r=this.getViewerPreferences();if(!r){r=Zm.create(this.context);var n=this.context.register(r.dict);this.set(C.of("ViewerPreferences"),n)}return r},t.prototype.insertLeafNode=function(r,n){var i=this.get(C.of("Pages")),o=this.Pages().insertLeafNode(r,n);return o||i},t.prototype.removeLeafNode=function(r){this.Pages().removeLeafNode(r)},t.withContextAndPages=function(r,n){var i=new Map;return i.set(C.of("Type"),C.of("Catalog")),i.set(C.of("Pages"),n),new t(i,r)},t.fromMapWithContext=function(r,n){return new t(r,n)},t}(he),Sx=function(e){L(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.Parent=function(){return this.lookup(C.of("Parent"))},t.prototype.Kids=function(){return this.lookup(C.of("Kids"),_e)},t.prototype.Count=function(){return this.lookup(C.of("Count"),oe)},t.prototype.pushTreeNode=function(r){var n=this.Kids();n.push(r)},t.prototype.pushLeafNode=function(r){var n=this.Kids();this.insertLeafKid(n.size(),r)},t.prototype.insertLeafNode=function(r,n){var i=this.Kids(),o=this.Count().asNumber();if(n>o)throw new Nm(n,o);for(var a=n,s=0,u=i.size();s<u;s++){if(a===0){this.insertLeafKid(s,r);return}var l=i.get(s),c=this.context.lookup(l);if(c instanceof t){if(c.Count().asNumber()>a)return c.insertLeafNode(r,a)||l;a-=c.Count().asNumber()}c instanceof jn&&(a-=1)}if(a===0){this.insertLeafKid(i.size(),r);return}throw new Im(n,"insertLeafNode")},t.prototype.removeLeafNode=function(r,n){n===void 0&&(n=!0);var i=this.Kids(),o=this.Count().asNumber();if(r>=o)throw new Nm(r,o);for(var a=r,s=0,u=i.size();s<u;s++){var l=i.get(s),c=this.context.lookup(l);if(c instanceof t)if(c.Count().asNumber()>a){c.removeLeafNode(a,n),n&&c.Kids().size()===0&&i.remove(s);return}else a-=c.Count().asNumber();if(c instanceof jn)if(a===0){this.removeKid(s);return}else a-=1}throw new Im(r,"removeLeafNode")},t.prototype.ascend=function(r){r(this);var n=this.Parent();n&&n.ascend(r)},t.prototype.traverse=function(r){for(var n=this.Kids(),i=0,o=n.size();i<o;i++){var a=n.get(i),s=this.context.lookup(a);s instanceof t&&s.traverse(r),r(s,a)}},t.prototype.insertLeafKid=function(r,n){var i=this.Kids();this.ascend(function(o){var a=o.Count().asNumber()+1;o.set(C.of("Count"),oe.of(a))}),i.insert(r,n)},t.prototype.removeKid=function(r){var n=this.Kids(),i=n.lookup(r);i instanceof jn&&this.ascend(function(o){var a=o.Count().asNumber()-1;o.set(C.of("Count"),oe.of(a))}),n.remove(r)},t.withContext=function(r,n){var i=new Map;return i.set(C.of("Type"),C.of("Pages")),i.set(C.of("Kids"),r.obj([])),i.set(C.of("Count"),r.obj(0)),n&&i.set(C.of("Parent"),n),new t(i,r)},t.fromMapWithContext=function(r,n){return new t(r,n)},t}(he),Vt=new Uint8Array(256);Vt[F.Zero]=1;Vt[F.One]=1;Vt[F.Two]=1;Vt[F.Three]=1;Vt[F.Four]=1;Vt[F.Five]=1;Vt[F.Six]=1;Vt[F.Seven]=1;Vt[F.Eight]=1;Vt[F.Nine]=1;var Rd=new Uint8Array(256);Rd[F.Period]=1;Rd[F.Plus]=1;Rd[F.Minus]=1;var I0=new Uint8Array(256);for(var cs=0,qE=256;cs<qE;cs++)I0[cs]=Vt[cs]||Rd[cs]?1:0;var Ym=F.Newline,Qm=F.CarriageReturn,XE=function(){function e(t,r){r===void 0&&(r=!1),this.bytes=t,this.capNumbers=r}return e.prototype.parseRawInt=function(){for(var t="";!this.bytes.done();){var r=this.bytes.peek();if(!Vt[r])break;t+=Un(this.bytes.next())}var n=Number(t);if(!t||!isFinite(n))throw new Mm(this.bytes.position(),t);return n},e.prototype.parseRawNumber=function(){for(var t="";!this.bytes.done();){var r=this.bytes.peek();if(!I0[r]||(t+=Un(this.bytes.next()),r===F.Period))break}for(;!this.bytes.done();){var r=this.bytes.peek();if(!Vt[r])break;t+=Un(this.bytes.next())}var n=Number(t);if(!t||!isFinite(n))throw new Mm(this.bytes.position(),t);if(n>Number.MAX_SAFE_INTEGER)if(this.capNumbers){var i="Parsed number that is too large for some PDF readers: "+t+", using Number.MAX_SAFE_INTEGER instead.";return console.warn(i),Number.MAX_SAFE_INTEGER}else{var i="Parsed number that is too large for some PDF readers: "+t+", not capping.";console.warn(i)}return n},e.prototype.skipWhitespace=function(){for(;!this.bytes.done()&&ei[this.bytes.peek()];)this.bytes.next()},e.prototype.skipLine=function(){for(;!this.bytes.done();){var t=this.bytes.peek();if(t===Ym||t===Qm)return;this.bytes.next()}},e.prototype.skipComment=function(){if(this.bytes.peek()!==F.Percent)return!1;for(;!this.bytes.done();){var t=this.bytes.peek();if(t===Ym||t===Qm)return!0;this.bytes.next()}return!0},e.prototype.skipWhitespaceAndComments=function(){for(this.skipWhitespace();this.skipComment();)this.skipWhitespace()},e.prototype.matchKeyword=function(t){for(var r=this.bytes.offset(),n=0,i=t.length;n<i;n++)if(this.bytes.done()||this.bytes.next()!==t[n])return this.bytes.moveTo(r),!1;return!0},e}(),Bd=function(){function e(t){this.idx=0,this.line=0,this.column=0,this.bytes=t,this.length=this.bytes.length}return e.prototype.moveTo=function(t){this.idx=t},e.prototype.next=function(){var t=this.bytes[this.idx++];return t===F.Newline?(this.line+=1,this.column=0):this.column+=1,t},e.prototype.assertNext=function(t){if(this.peek()!==t)throw new eE(this.position(),t,this.peek());return this.next()},e.prototype.peek=function(){return this.bytes[this.idx]},e.prototype.peekAhead=function(t){return this.bytes[this.idx+t]},e.prototype.peekAt=function(t){return this.bytes[t]},e.prototype.done=function(){return this.idx>=this.length},e.prototype.offset=function(){return this.idx},e.prototype.slice=function(t,r){return this.bytes.slice(t,r)},e.prototype.position=function(){return{line:this.line,column:this.column,offset:this.idx}},e.of=function(t){return new e(t)},e.fromPDFRawStream=function(t){return e.of(gx(t).decode())},e}(),GE=F.Space,ds=F.CarriageReturn,hs=F.Newline,fs=[F.s,F.t,F.r,F.e,F.a,F.m],ku=[F.e,F.n,F.d,F.s,F.t,F.r,F.e,F.a,F.m],Ve={header:[F.Percent,F.P,F.D,F.F,F.Dash],eof:[F.Percent,F.Percent,F.E,F.O,F.F],obj:[F.o,F.b,F.j],endobj:[F.e,F.n,F.d,F.o,F.b,F.j],xref:[F.x,F.r,F.e,F.f],trailer:[F.t,F.r,F.a,F.i,F.l,F.e,F.r],startxref:[F.s,F.t,F.a,F.r,F.t,F.x,F.r,F.e,F.f],true:[F.t,F.r,F.u,F.e],false:[F.f,F.a,F.l,F.s,F.e],null:[F.n,F.u,F.l,F.l],stream:fs,streamEOF1:Fe(fs,[GE,ds,hs]),streamEOF2:Fe(fs,[ds,hs]),streamEOF3:Fe(fs,[ds]),streamEOF4:Fe(fs,[hs]),endstream:ku,EOF1endstream:Fe([ds,hs],ku),EOF2endstream:Fe([ds],ku),EOF3endstream:Fe([hs],ku)},Cx=function(e){L(t,e);function t(r,n,i){i===void 0&&(i=!1);var o=e.call(this,r,i)||this;return o.context=n,o}return t.prototype.parseObject=function(){if(this.skipWhitespaceAndComments(),this.matchKeyword(Ve.true))return xl.True;if(this.matchKeyword(Ve.false))return xl.False;if(this.matchKeyword(Ve.null))return Jt;var r=this.bytes.peek();if(r===F.LessThan&&this.bytes.peekAhead(1)===F.LessThan)return this.parseDictOrStream();if(r===F.LessThan)return this.parseHexString();if(r===F.LeftParen)return this.parseString();if(r===F.ForwardSlash)return this.parseName();if(r===F.LeftSquareBracket)return this.parseArray();if(I0[r])return this.parseNumberOrRef();throw new tE(this.bytes.position(),r)},t.prototype.parseNumberOrRef=function(){var r=this.parseRawNumber();this.skipWhitespaceAndComments();var n=this.bytes.offset();if(Vt[this.bytes.peek()]){var i=this.parseRawNumber();if(this.skipWhitespaceAndComments(),this.bytes.peek()===F.R)return this.bytes.assertNext(F.R),Me.of(r,i)}return this.bytes.moveTo(n),oe.of(r)},t.prototype.parseHexString=function(){var r="";for(this.bytes.assertNext(F.LessThan);!this.bytes.done()&&this.bytes.peek()!==F.GreaterThan;)r+=Un(this.bytes.next());return this.bytes.assertNext(F.GreaterThan),re.of(r)},t.prototype.parseString=function(){for(var r=0,n=!1,i="";!this.bytes.done();){var o=this.bytes.next();if(i+=Un(o),n||(o===F.LeftParen&&(r+=1),o===F.RightParen&&(r-=1)),o===F.BackSlash?n=!n:n&&(n=!1),r===0)return Ie.of(i.substring(1,i.length-1))}throw new iE(this.bytes.position())},t.prototype.parseName=function(){this.bytes.assertNext(F.ForwardSlash);for(var r="";!this.bytes.done();){var n=this.bytes.peek();if(ei[n]||Kr[n])break;r+=Un(n),this.bytes.next()}return C.of(r)},t.prototype.parseArray=function(){this.bytes.assertNext(F.LeftSquareBracket),this.skipWhitespaceAndComments();for(var r=_e.withContext(this.context);this.bytes.peek()!==F.RightSquareBracket;){var n=this.parseObject();r.push(n),this.skipWhitespaceAndComments()}return this.bytes.assertNext(F.RightSquareBracket),r},t.prototype.parseDict=function(){this.bytes.assertNext(F.LessThan),this.bytes.assertNext(F.LessThan),this.skipWhitespaceAndComments();for(var r=new Map;!this.bytes.done()&&this.bytes.peek()!==F.GreaterThan&&this.bytes.peekAhead(1)!==F.GreaterThan;){var n=this.parseName(),i=this.parseObject();r.set(n,i),this.skipWhitespaceAndComments()}this.skipWhitespaceAndComments(),this.bytes.assertNext(F.GreaterThan),this.bytes.assertNext(F.GreaterThan);var o=r.get(C.of("Type"));return o===C.of("Catalog")?kx.fromMapWithContext(r,this.context):o===C.of("Pages")?Sx.fromMapWithContext(r,this.context):o===C.of("Page")?jn.fromMapWithContext(r,this.context):he.fromMapWithContext(r,this.context)},t.prototype.parseDictOrStream=function(){var r=this.bytes.position(),n=this.parseDict();if(this.skipWhitespaceAndComments(),!this.matchKeyword(Ve.streamEOF1)&&!this.matchKeyword(Ve.streamEOF2)&&!this.matchKeyword(Ve.streamEOF3)&&!this.matchKeyword(Ve.streamEOF4)&&!this.matchKeyword(Ve.stream))return n;var i=this.bytes.offset(),o,a=n.get(C.of("Length"));a instanceof oe?(o=i+a.asNumber(),this.bytes.moveTo(o),this.skipWhitespaceAndComments(),this.matchKeyword(Ve.endstream)||(this.bytes.moveTo(i),o=this.findEndOfStreamFallback(r))):o=this.findEndOfStreamFallback(r);var s=this.bytes.slice(i,o);return kl.of(n,s)},t.prototype.findEndOfStreamFallback=function(r){for(var n=1,i=this.bytes.offset();!this.bytes.done()&&(i=this.bytes.offset(),this.matchKeyword(Ve.stream)?n+=1:this.matchKeyword(Ve.EOF1endstream)||this.matchKeyword(Ve.EOF2endstream)||this.matchKeyword(Ve.EOF3endstream)||this.matchKeyword(Ve.endstream)?n-=1:this.bytes.next(),n!==0););if(n!==0)throw new nE(r);return i},t.forBytes=function(r,n,i){return new t(Bd.of(r),n,i)},t.forByteStream=function(r,n,i){return i===void 0&&(i=!1),new t(r,n,i)},t}(XE),ZE=function(e){L(t,e);function t(r,n){var i=e.call(this,Bd.fromPDFRawStream(r),r.dict.context)||this,o=r.dict;return i.alreadyParsed=!1,i.shouldWaitForTick=n||function(){return!1},i.firstOffset=o.lookup(C.of("First"),oe).asNumber(),i.objectCount=o.lookup(C.of("N"),oe).asNumber(),i}return t.prototype.parseIntoContext=function(){return fe(this,void 0,void 0,function(){var r,n,i,o,a,s,u,l;return pe(this,function(c){switch(c.label){case 0:if(this.alreadyParsed)throw new T0("PDFObjectStreamParser","parseIntoContext");this.alreadyParsed=!0,r=this.parseOffsetsAndObjectNumbers(),n=0,i=r.length,c.label=1;case 1:return n<i?(o=r[n],a=o.objectNumber,s=o.offset,this.bytes.moveTo(this.firstOffset+s),u=this.parseObject(),l=Me.of(a,0),this.context.assign(l,u),this.shouldWaitForTick()?[4,Ra()]:[3,3]):[3,4];case 2:c.sent(),c.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},t.prototype.parseOffsetsAndObjectNumbers=function(){for(var r=[],n=0,i=this.objectCount;n<i;n++){this.skipWhitespaceAndComments();var o=this.parseRawInt();this.skipWhitespaceAndComments();var a=this.parseRawInt();r.push({objectNumber:o,offset:a})}return r},t.forStream=function(r,n){return new t(r,n)},t}(Cx),YE=function(){function e(t){this.alreadyParsed=!1,this.dict=t.dict,this.bytes=Bd.fromPDFRawStream(t),this.context=this.dict.context;var r=this.dict.lookup(C.of("Size"),oe),n=this.dict.lookup(C.of("Index"));if(n instanceof _e){this.subsections=[];for(var i=0,o=n.size();i<o;i+=2){var a=n.lookup(i+0,oe).asNumber(),s=n.lookup(i+1,oe).asNumber();this.subsections.push({firstObjectNumber:a,length:s})}}else this.subsections=[{firstObjectNumber:0,length:r.asNumber()}];var u=this.dict.lookup(C.of("W"),_e);this.byteWidths=[-1,-1,-1];for(var i=0,o=u.size();i<o;i++)this.byteWidths[i]=u.lookup(i,oe).asNumber()}return e.prototype.parseIntoContext=function(){if(this.alreadyParsed)throw new T0("PDFXRefStreamParser","parseIntoContext");this.alreadyParsed=!0,this.context.trailerInfo={Root:this.dict.get(C.of("Root")),Encrypt:this.dict.get(C.of("Encrypt")),Info:this.dict.get(C.of("Info")),ID:this.dict.get(C.of("ID"))};var t=this.parseEntries();return t},e.prototype.parseEntries=function(){for(var t=[],r=this.byteWidths,n=r[0],i=r[1],o=r[2],a=0,s=this.subsections.length;a<s;a++)for(var u=this.subsections[a],l=u.firstObjectNumber,c=u.length,d=0;d<c;d++){for(var h=0,f=0,v=n;f<v;f++)h=h<<8|this.bytes.next();for(var p=0,f=0,v=i;f<v;f++)p=p<<8|this.bytes.next();for(var b=0,f=0,v=o;f<v;f++)b=b<<8|this.bytes.next();n===0&&(h=1);var g=l+d,y={ref:Me.of(g,b),offset:p,deleted:h===0,inObjectStream:h===2};t.push(y)}return t},e.forStream=function(t){return new e(t)},e}(),QE=function(e){L(t,e);function t(r,n,i,o){n===void 0&&(n=1/0),i===void 0&&(i=!1),o===void 0&&(o=!1);var a=e.call(this,Bd.of(r),op.create(),o)||this;return a.alreadyParsed=!1,a.parsedObjects=0,a.shouldWaitForTick=function(){return a.parsedObjects+=1,a.parsedObjects%a.objectsPerTick===0},a.objectsPerTick=n,a.throwOnInvalidObject=i,a}return t.prototype.parseDocument=function(){return fe(this,void 0,void 0,function(){var r,n;return pe(this,function(i){switch(i.label){case 0:if(this.alreadyParsed)throw new T0("PDFParser","parseDocument");this.alreadyParsed=!0,this.context.header=this.parseHeader(),i.label=1;case 1:return this.bytes.done()?[3,3]:[4,this.parseDocumentSection()];case 2:if(i.sent(),n=this.bytes.offset(),n===r)throw new oE(this.bytes.position());return r=n,[3,1];case 3:return this.maybeRecoverRoot(),this.context.lookup(Me.of(0))&&(console.warn("Removing parsed object: 0 0 R"),this.context.delete(Me.of(0))),[2,this.context]}})})},t.prototype.maybeRecoverRoot=function(){var r=function(c){return c instanceof he&&c.lookup(C.of("Type"))===C.of("Catalog")},n=this.context.lookup(this.context.trailerInfo.Root);if(!r(n))for(var i=this.context.enumerateIndirectObjects(),o=0,a=i.length;o<a;o++){var s=i[o],u=s[0],l=s[1];r(l)&&(this.context.trailerInfo.Root=u)}},t.prototype.parseHeader=function(){for(;!this.bytes.done();){if(this.matchKeyword(Ve.header)){var r=this.parseRawInt();this.bytes.assertNext(F.Period);var n=this.parseRawInt(),i=Td.forVersion(r,n);return this.skipBinaryHeaderComment(),i}this.bytes.next()}throw new aE(this.bytes.position())},t.prototype.parseIndirectObjectHeader=function(){this.skipWhitespaceAndComments();var r=this.parseRawInt();this.skipWhitespaceAndComments();var n=this.parseRawInt();if(this.skipWhitespaceAndComments(),!this.matchKeyword(Ve.obj))throw new sE(this.bytes.position(),Ve.obj);return Me.of(r,n)},t.prototype.matchIndirectObjectHeader=function(){var r=this.bytes.offset();try{return this.parseIndirectObjectHeader(),!0}catch{return this.bytes.moveTo(r),!1}},t.prototype.parseIndirectObject=function(){return fe(this,void 0,void 0,function(){var r,n;return pe(this,function(i){switch(i.label){case 0:return r=this.parseIndirectObjectHeader(),this.skipWhitespaceAndComments(),n=this.parseObject(),this.skipWhitespaceAndComments(),this.matchKeyword(Ve.endobj),n instanceof kl&&n.dict.lookup(C.of("Type"))===C.of("ObjStm")?[4,ZE.forStream(n,this.shouldWaitForTick).parseIntoContext()]:[3,2];case 1:return i.sent(),[3,3];case 2:n instanceof kl&&n.dict.lookup(C.of("Type"))===C.of("XRef")?YE.forStream(n).parseIntoContext():this.context.assign(r,n),i.label=3;case 3:return[2,r]}})})},t.prototype.tryToParseInvalidIndirectObject=function(){var r=this.bytes.position(),n="Trying to parse invalid object: "+JSON.stringify(r)+")";if(this.throwOnInvalidObject)throw new Error(n);console.warn(n);var i=this.parseIndirectObjectHeader();console.warn("Invalid object ref: "+i),this.skipWhitespaceAndComments();for(var o=this.bytes.offset(),a=!0;!this.bytes.done()&&(this.matchKeyword(Ve.endobj)&&(a=!1),!!a);)this.bytes.next();if(a)throw new rE(r);var s=this.bytes.offset()-Ve.endobj.length,u=hx.of(this.bytes.slice(o,s));return this.context.assign(i,u),i},t.prototype.parseIndirectObjects=function(){return fe(this,void 0,void 0,function(){var r;return pe(this,function(n){switch(n.label){case 0:this.skipWhitespaceAndComments(),n.label=1;case 1:if(!(!this.bytes.done()&&Vt[this.bytes.peek()]))return[3,8];r=this.bytes.offset(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,this.parseIndirectObject()];case 3:return n.sent(),[3,5];case 4:return n.sent(),this.bytes.moveTo(r),this.tryToParseInvalidIndirectObject(),[3,5];case 5:return this.skipWhitespaceAndComments(),this.skipJibberish(),this.shouldWaitForTick()?[4,Ra()]:[3,7];case 6:n.sent(),n.label=7;case 7:return[3,1];case 8:return[2]}})})},t.prototype.maybeParseCrossRefSection=function(){if(this.skipWhitespaceAndComments(),!!this.matchKeyword(Ve.xref)){this.skipWhitespaceAndComments();for(var r=-1,n=ux.createEmpty();!this.bytes.done()&&Vt[this.bytes.peek()];){var i=this.parseRawInt();this.skipWhitespaceAndComments();var o=this.parseRawInt();this.skipWhitespaceAndComments();var a=this.bytes.peek();if(a===F.n||a===F.f){var s=Me.of(r,o);this.bytes.next()===F.n?n.addEntry(s,i):n.addDeletedEntry(s,i),r+=1}else r=i;this.skipWhitespaceAndComments()}return n}},t.prototype.maybeParseTrailerDict=function(){if(this.skipWhitespaceAndComments(),!!this.matchKeyword(Ve.trailer)){this.skipWhitespaceAndComments();var r=this.parseDict(),n=this.context;n.trailerInfo={Root:r.get(C.of("Root"))||n.trailerInfo.Root,Encrypt:r.get(C.of("Encrypt"))||n.trailerInfo.Encrypt,Info:r.get(C.of("Info"))||n.trailerInfo.Info,ID:r.get(C.of("ID"))||n.trailerInfo.ID}}},t.prototype.maybeParseTrailer=function(){if(this.skipWhitespaceAndComments(),!!this.matchKeyword(Ve.startxref)){this.skipWhitespaceAndComments();var r=this.parseRawInt();return this.skipWhitespace(),this.matchKeyword(Ve.eof),this.skipWhitespaceAndComments(),this.matchKeyword(Ve.eof),this.skipWhitespaceAndComments(),A0.forLastCrossRefSectionOffset(r)}},t.prototype.parseDocumentSection=function(){return fe(this,void 0,void 0,function(){return pe(this,function(r){switch(r.label){case 0:return[4,this.parseIndirectObjects()];case 1:return r.sent(),this.maybeParseCrossRefSection(),this.maybeParseTrailerDict(),this.maybeParseTrailer(),this.skipJibberish(),[2]}})})},t.prototype.skipJibberish=function(){for(this.skipWhitespaceAndComments();!this.bytes.done();){var r=this.bytes.offset(),n=this.bytes.peek(),i=n>=F.Space&&n<=F.Tilde;if(i&&(this.matchKeyword(Ve.xref)||this.matchKeyword(Ve.trailer)||this.matchKeyword(Ve.startxref)||this.matchIndirectObjectHeader())){this.bytes.moveTo(r);break}this.bytes.next()}},t.prototype.skipBinaryHeaderComment=function(){this.skipWhitespaceAndComments();try{var r=this.bytes.offset();this.parseIndirectObjectHeader(),this.bytes.moveTo(r)}catch{this.bytes.next(),this.skipWhitespaceAndComments()}},t.forBytesWithOptions=function(r,n,i,o){return new t(r,n,i,o)},t}(Cx),pn=function(e){return 1<<e},Xs;(function(e){e[e.Invisible=pn(1-1)]="Invisible",e[e.Hidden=pn(2-1)]="Hidden",e[e.Print=pn(3-1)]="Print",e[e.NoZoom=pn(4-1)]="NoZoom",e[e.NoRotate=pn(5-1)]="NoRotate",e[e.NoView=pn(6-1)]="NoView",e[e.ReadOnly=pn(7-1)]="ReadOnly",e[e.Locked=pn(8-1)]="Locked",e[e.ToggleNoView=pn(9-1)]="ToggleNoView",e[e.LockedContents=pn(10-1)]="LockedContents"})(Xs||(Xs={}));var Nd=function(e){return e instanceof C?e:C.of(e)},ae=function(e){return e instanceof oe?e:oe.of(e)},ve=function(e){return e instanceof oe?e.asNumber():e},Sl;(function(e){e.Degrees="degrees",e.Radians="radians"})(Sl||(Sl={}));var ie=function(e){return A(e,"degreeAngle",["number"]),{type:Sl.Degrees,angle:e}},Fx=Sl.Radians,Ex=Sl.Degrees,Tx=function(e){return e*Math.PI/180},JE=function(e){return e*180/Math.PI},Pt=function(e){return e.type===Fx?e.angle:e.type===Ex?Tx(e.angle):Il("Invalid rotation: "+JSON.stringify(e))},zx=function(e){return e.type===Fx?JE(e.angle):e.type===Ex?e.angle:Il("Invalid rotation: "+JSON.stringify(e))},ti=function(e){e===void 0&&(e=0);var t=e/90%4;return t===0?0:t===1?90:t===2?180:t===3?270:0},Do=function(e,t){t===void 0&&(t=0);var r=ti(t);return r===90||r===270?{width:e.height,height:e.width}:{width:e.width,height:e.height}},$E=function(e,t,r){t===void 0&&(t=0),r===void 0&&(r=0);var n=e.x,i=e.y,o=e.width,a=e.height,s=ti(r),u=t/2;return s===0?{x:n-u,y:i-u,width:o,height:a}:s===90?{x:n-a+u,y:i-u,width:a,height:o}:s===180?{x:n-o+u,y:i-a+u,width:o,height:a}:s===270?{x:n-u,y:i-o+u,width:a,height:o}:{x:n-u,y:i-u,width:o,height:a}},_x=function(){return ke.of(Ee.ClipNonZero)},Kc=Math.cos,qc=Math.sin,Xc=Math.tan,Id=function(e,t,r,n,i,o){return ke.of(Ee.ConcatTransformationMatrix,[ae(e),ae(t),ae(r),ae(n),ae(i),ae(o)])},Dr=function(e,t){return Id(1,0,0,1,e,t)},Cl=function(e,t){return Id(e,0,0,t,0,0)},Ka=function(e){return Id(Kc(ve(e)),qc(ve(e)),-qc(ve(e)),Kc(ve(e)),0,0)},Su=function(e){return Ka(Tx(ve(e)))},M0=function(e,t){return Id(1,Xc(ve(e)),Xc(ve(t)),1,0,0)},Md=function(e,t){return ke.of(Ee.SetLineDashPattern,["["+e.map(ae).join(" ")+"]",ae(t)])},aa;(function(e){e[e.Butt=0]="Butt",e[e.Round=1]="Round",e[e.Projecting=2]="Projecting"})(aa||(aa={}));var Ld=function(e){return ke.of(Ee.SetLineCapStyle,[ae(e)])},Jm;(function(e){e[e.Miter=0]="Miter",e[e.Round=1]="Round",e[e.Bevel=2]="Bevel"})(Jm||(Jm={}));var Oo=function(e){return ke.of(Ee.SetGraphicsStateParams,[Nd(e)])},mt=function(){return ke.of(Ee.PushGraphicsState)},yt=function(){return ke.of(Ee.PopGraphicsState)},Hl=function(e){return ke.of(Ee.SetLineWidth,[ae(e)])},vr=function(e,t,r,n,i,o){return ke.of(Ee.AppendBezierCurve,[ae(e),ae(t),ae(r),ae(n),ae(i),ae(o)])},Cu=function(e,t,r,n){return ke.of(Ee.CurveToReplicateInitialPoint,[ae(e),ae(t),ae(r),ae(n)])},ji=function(){return ke.of(Ee.ClosePath)},Fn=function(e,t){return ke.of(Ee.MoveTo,[ae(e),ae(t)])},xt=function(e,t){return ke.of(Ee.LineTo,[ae(e),ae(t)])},Wl=function(){return ke.of(Ee.StrokePath)},L0=function(){return ke.of(Ee.FillNonZero)},U0=function(){return ke.of(Ee.FillNonZeroAndStroke)},Px=function(){return ke.of(Ee.EndPath)},eT=function(){return ke.of(Ee.NextLine)},Ax=function(e){return ke.of(Ee.ShowText,[e])},Dx=function(){return ke.of(Ee.BeginText)},Ox=function(){return ke.of(Ee.EndText)},V0=function(e,t){return ke.of(Ee.SetFontAndSize,[Nd(e),ae(t)])},tT=function(e){return ke.of(Ee.SetTextLineHeight,[ae(e)])},$m;(function(e){e[e.Fill=0]="Fill",e[e.Outline=1]="Outline",e[e.FillAndOutline=2]="FillAndOutline",e[e.Invisible=3]="Invisible",e[e.FillAndClip=4]="FillAndClip",e[e.OutlineAndClip=5]="OutlineAndClip",e[e.FillAndOutlineAndClip=6]="FillAndOutlineAndClip",e[e.Clip=7]="Clip"})($m||($m={}));var rT=function(e,t,r,n,i,o){return ke.of(Ee.SetTextMatrix,[ae(e),ae(t),ae(r),ae(n),ae(i),ae(o)])},Rx=function(e,t,r,n,i){return rT(Kc(ve(e)),qc(ve(e))+Xc(ve(t)),-qc(ve(e))+Xc(ve(r)),Kc(ve(e)),n,i)},j0=function(e){return ke.of(Ee.DrawObject,[Nd(e)])},nT=function(e){return ke.of(Ee.NonStrokingColorGray,[ae(e)])},iT=function(e){return ke.of(Ee.StrokingColorGray,[ae(e)])},oT=function(e,t,r){return ke.of(Ee.NonStrokingColorRgb,[ae(e),ae(t),ae(r)])},aT=function(e,t,r){return ke.of(Ee.StrokingColorRgb,[ae(e),ae(t),ae(r)])},sT=function(e,t,r,n){return ke.of(Ee.NonStrokingColorCmyk,[ae(e),ae(t),ae(r),ae(n)])},lT=function(e,t,r,n){return ke.of(Ee.StrokingColorCmyk,[ae(e),ae(t),ae(r),ae(n)])},Bx=function(e){return ke.of(Ee.BeginMarkedContent,[Nd(e)])},Nx=function(){return ke.of(Ee.EndMarkedContent)},Hi;(function(e){e.Grayscale="Grayscale",e.RGB="RGB",e.CMYK="CMYK"})(Hi||(Hi={}));var Ix=function(e){return pr(e,"gray",0,1),{type:Hi.Grayscale,gray:e}},Le=function(e,t,r){return pr(e,"red",0,1),pr(t,"green",0,1),pr(r,"blue",0,1),{type:Hi.RGB,red:e,green:t,blue:r}},Mx=function(e,t,r,n){return pr(e,"cyan",0,1),pr(t,"magenta",0,1),pr(r,"yellow",0,1),pr(n,"key",0,1),{type:Hi.CMYK,cyan:e,magenta:t,yellow:r,key:n}},H0=Hi.Grayscale,W0=Hi.RGB,K0=Hi.CMYK,Ro=function(e){return e.type===H0?nT(e.gray):e.type===W0?oT(e.red,e.green,e.blue):e.type===K0?sT(e.cyan,e.magenta,e.yellow,e.key):Il("Invalid color: "+JSON.stringify(e))},Kl=function(e){return e.type===H0?iT(e.gray):e.type===W0?aT(e.red,e.green,e.blue):e.type===K0?lT(e.cyan,e.magenta,e.yellow,e.key):Il("Invalid color: "+JSON.stringify(e))},qt=function(e,t){return t===void 0&&(t=1),(e==null?void 0:e.length)===1?Ix(e[0]*t):(e==null?void 0:e.length)===3?Le(e[0]*t,e[1]*t,e[2]*t):(e==null?void 0:e.length)===4?Mx(e[0]*t,e[1]*t,e[2]*t,e[3]*t):void 0},ey=function(e){return e.type===H0?[e.gray]:e.type===W0?[e.red,e.green,e.blue]:e.type===K0?[e.cyan,e.magenta,e.yellow,e.key]:Il("Invalid color: "+JSON.stringify(e))},X=0,G=0,we=0,xe=0,xs=0,ks=0,ty=new Map([["A",7],["a",7],["C",6],["c",6],["H",1],["h",1],["L",2],["l",2],["M",2],["m",2],["Q",4],["q",4],["S",4],["s",4],["T",2],["t",2],["V",1],["v",1],["Z",0],["z",0]]),uT=function(e){for(var t,r=[],n=[],i="",o=!1,a=0,s=0,u=e;s<u.length;s++){var l=u[s];if(ty.has(l))a=ty.get(l),t&&(i.length>0&&(n[n.length]=+i),r[r.length]={cmd:t,args:n},n=[],i="",o=!1),t=l;else if([" ",","].includes(l)||l==="-"&&i.length>0&&i[i.length-1]!=="e"||l==="."&&o){if(i.length===0)continue;n.length===a?(r[r.length]={cmd:t,args:n},n=[+i],t==="M"&&(t="L"),t==="m"&&(t="l")):n[n.length]=+i,o=l===".",i=["-","."].includes(l)?l:""}else i+=l,l==="."&&(o=!0)}return i.length>0&&(n.length===a?(r[r.length]={cmd:t,args:n},n=[+i],t==="M"&&(t="L"),t==="m"&&(t="l")):n[n.length]=+i),r[r.length]={cmd:t,args:n},r},cT=function(e){X=G=we=xe=xs=ks=0;for(var t=[],r=0;r<e.length;r++){var n=e[r];if(n.cmd&&typeof ry[n.cmd]=="function"){var i=ry[n.cmd](n.args);Array.isArray(i)?t=t.concat(i):t.push(i)}}return t},ry={M:function(e){return X=e[0],G=e[1],we=xe=null,xs=X,ks=G,Fn(X,G)},m:function(e){return X+=e[0],G+=e[1],we=xe=null,xs=X,ks=G,Fn(X,G)},C:function(e){return X=e[4],G=e[5],we=e[2],xe=e[3],vr(e[0],e[1],e[2],e[3],e[4],e[5])},c:function(e){var t=vr(e[0]+X,e[1]+G,e[2]+X,e[3]+G,e[4]+X,e[5]+G);return we=X+e[2],xe=G+e[3],X+=e[4],G+=e[5],t},S:function(e){(we===null||xe===null)&&(we=X,xe=G);var t=vr(X-(we-X),G-(xe-G),e[0],e[1],e[2],e[3]);return we=e[0],xe=e[1],X=e[2],G=e[3],t},s:function(e){(we===null||xe===null)&&(we=X,xe=G);var t=vr(X-(we-X),G-(xe-G),X+e[0],G+e[1],X+e[2],G+e[3]);return we=X+e[0],xe=G+e[1],X+=e[2],G+=e[3],t},Q:function(e){return we=e[0],xe=e[1],X=e[2],G=e[3],Cu(e[0],e[1],X,G)},q:function(e){var t=Cu(e[0]+X,e[1]+G,e[2]+X,e[3]+G);return we=X+e[0],xe=G+e[1],X+=e[2],G+=e[3],t},T:function(e){we===null||xe===null?(we=X,xe=G):(we=X-(we-X),xe=G-(xe-G));var t=Cu(we,xe,e[0],e[1]);return we=X-(we-X),xe=G-(xe-G),X=e[0],G=e[1],t},t:function(e){we===null||xe===null?(we=X,xe=G):(we=X-(we-X),xe=G-(xe-G));var t=Cu(we,xe,X+e[0],G+e[1]);return X+=e[0],G+=e[1],t},A:function(e){var t=ny(X,G,e);return X=e[5],G=e[6],t},a:function(e){e[5]+=X,e[6]+=G;var t=ny(X,G,e);return X=e[5],G=e[6],t},L:function(e){return X=e[0],G=e[1],we=xe=null,xt(X,G)},l:function(e){return X+=e[0],G+=e[1],we=xe=null,xt(X,G)},H:function(e){return X=e[0],we=xe=null,xt(X,G)},h:function(e){return X+=e[0],we=xe=null,xt(X,G)},V:function(e){return G=e[0],we=xe=null,xt(X,G)},v:function(e){return G+=e[0],we=xe=null,xt(X,G)},Z:function(){var e=ji();return X=xs,G=ks,e},z:function(){var e=ji();return X=xs,G=ks,e}},ny=function(e,t,r){for(var n=r[0],i=r[1],o=r[2],a=r[3],s=r[4],u=r[5],l=r[6],c=dT(u,l,n,i,a,s,o,e,t),d=[],h=0,f=c;h<f.length;h++){var v=f[h],p=hT.apply(void 0,v);d.push(vr.apply(void 0,p))}return d},dT=function(e,t,r,n,i,o,a,s,u){var l=a*(Math.PI/180),c=Math.sin(l),d=Math.cos(l);r=Math.abs(r),n=Math.abs(n),we=d*(s-e)*.5+c*(u-t)*.5,xe=d*(u-t)*.5-c*(s-e)*.5;var h=we*we/(r*r)+xe*xe/(n*n);h>1&&(h=Math.sqrt(h),r*=h,n*=h);var f=d/r,v=c/r,p=-c/n,b=d/n,g=f*s+v*u,y=p*s+b*u,w=f*e+v*t,x=p*e+b*t,k=(w-g)*(w-g)+(x-y)*(x-y),E=1/k-.25;E<0&&(E=0);var T=Math.sqrt(E);o===i&&(T=-T);var z=.5*(g+w)-T*(x-y),_=.5*(y+x)+T*(w-g),P=Math.atan2(y-_,g-z),D=Math.atan2(x-_,w-z),I=D-P;I<0&&o===1?I+=2*Math.PI:I>0&&o===0&&(I-=2*Math.PI);for(var O=Math.ceil(Math.abs(I/(Math.PI*.5+.001))),K=[],Z=0;Z<O;Z++){var W=P+Z*I/O,me=P+(Z+1)*I/O;K[Z]=[z,_,W,me,r,n,c,d]}return K},hT=function(e,t,r,n,i,o,a,s){var u=s*i,l=-a*o,c=a*i,d=s*o,h=.5*(n-r),f=8/3*Math.sin(h*.5)*Math.sin(h*.5)/Math.sin(h),v=e+Math.cos(r)-f*Math.sin(r),p=t+Math.sin(r)+f*Math.cos(r),b=e+Math.cos(n),g=t+Math.sin(n),y=b+f*Math.sin(n),w=g-f*Math.cos(n),x=[u*v+l*p,c*v+d*p,u*y+l*w,c*y+d*w,u*b+l*g,c*b+d*g];return x},fT=function(e){return cT(uT(e))},pT=function(e,t){for(var r=[mt(),t.graphicsState&&Oo(t.graphicsState),Dx(),Ro(t.color),V0(t.font,t.size),tT(t.lineHeight),Rx(Pt(t.rotate),Pt(t.xSkew),Pt(t.ySkew),t.x,t.y)].filter(Boolean),n=0,i=e.length;n<i;n++)r.push(Ax(e[n]),eT());return r.push(Ox(),yt()),r},Lx=function(e,t){return[mt(),t.graphicsState&&Oo(t.graphicsState),Dr(t.x,t.y),Ka(Pt(t.rotate)),Cl(t.width,t.height),M0(Pt(t.xSkew),Pt(t.ySkew)),j0(e),yt()].filter(Boolean)},vT=function(e,t){return[mt(),t.graphicsState&&Oo(t.graphicsState),Dr(t.x,t.y),Ka(Pt(t.rotate)),Cl(t.xScale,t.yScale),M0(Pt(t.xSkew),Pt(t.ySkew)),j0(e),yt()].filter(Boolean)},gT=function(e){var t,r;return[mt(),e.graphicsState&&Oo(e.graphicsState),e.color&&Kl(e.color),Hl(e.thickness),Md((t=e.dashArray)!==null&&t!==void 0?t:[],(r=e.dashPhase)!==null&&r!==void 0?r:0),Fn(e.start.x,e.start.y),e.lineCap&&Ld(e.lineCap),Fn(e.start.x,e.start.y),xt(e.end.x,e.end.y),Wl(),yt()].filter(Boolean)},Ba=function(e){var t,r;return[mt(),e.graphicsState&&Oo(e.graphicsState),e.color&&Ro(e.color),e.borderColor&&Kl(e.borderColor),Hl(e.borderWidth),e.borderLineCap&&Ld(e.borderLineCap),Md((t=e.borderDashArray)!==null&&t!==void 0?t:[],(r=e.borderDashPhase)!==null&&r!==void 0?r:0),Dr(e.x,e.y),Ka(Pt(e.rotate)),M0(Pt(e.xSkew),Pt(e.ySkew)),Fn(0,0),xt(0,e.height),xt(e.width,e.height),xt(e.width,0),ji(),e.color&&e.borderWidth?U0():e.color?L0():e.borderColor?Wl():ji(),yt()].filter(Boolean)},Gc=4*((Math.sqrt(2)-1)/3),mT=function(e){var t=ve(e.x),r=ve(e.y),n=ve(e.xScale),i=ve(e.yScale);t-=n,r-=i;var o=n*Gc,a=i*Gc,s=t+n*2,u=r+i*2,l=t+n,c=r+i;return[mt(),Fn(t,c),vr(t,c-a,l-o,r,l,r),vr(l+o,r,s,c-a,s,c),vr(s,c+a,l+o,u,l,u),vr(l-o,u,t,c+a,t,c),yt()]},yT=function(e){var t=ve(e.x),r=ve(e.y),n=ve(e.xScale),i=ve(e.yScale),o=-n,a=-i,s=n*Gc,u=i*Gc,l=o+n*2,c=a+i*2,d=o+n,h=a+i;return[Dr(t,r),Ka(Pt(e.rotate)),Fn(o,h),vr(o,h-u,d-s,a,d,a),vr(d+s,a,l,h-u,l,h),vr(l,h+u,d+s,c,d,c),vr(d-s,c,o,h+u,o,h)]},up=function(e){var t,r,n;return Fe([mt(),e.graphicsState&&Oo(e.graphicsState),e.color&&Ro(e.color),e.borderColor&&Kl(e.borderColor),Hl(e.borderWidth),e.borderLineCap&&Ld(e.borderLineCap),Md((t=e.borderDashArray)!==null&&t!==void 0?t:[],(r=e.borderDashPhase)!==null&&r!==void 0?r:0)],e.rotate===void 0?mT({x:e.x,y:e.y,xScale:e.xScale,yScale:e.yScale}):yT({x:e.x,y:e.y,xScale:e.xScale,yScale:e.yScale,rotate:(n=e.rotate)!==null&&n!==void 0?n:ie(0)}),[e.color&&e.borderWidth?U0():e.color?L0():e.borderColor?Wl():ji(),yt()]).filter(Boolean)},bT=function(e,t){var r,n,i;return Fe([mt(),t.graphicsState&&Oo(t.graphicsState),Dr(t.x,t.y),Ka(Pt((r=t.rotate)!==null&&r!==void 0?r:ie(0))),t.scale?Cl(t.scale,-t.scale):Cl(1,-1),t.color&&Ro(t.color),t.borderColor&&Kl(t.borderColor),t.borderWidth&&Hl(t.borderWidth),t.borderLineCap&&Ld(t.borderLineCap),Md((n=t.borderDashArray)!==null&&n!==void 0?n:[],(i=t.borderDashPhase)!==null&&i!==void 0?i:0)],fT(e),[t.color&&t.borderWidth?U0():t.color?L0():t.borderColor?Wl():ji(),yt()]).filter(Boolean)},wT=function(e){var t=ve(e.size),r=-1+.75,n=-1+.51,i=1-.525,o=1-.31,a=-1+.325,s=-((a-r)*(o-r))/(i-n)+n;return[mt(),e.color&&Kl(e.color),Hl(e.thickness),Dr(e.x,e.y),Fn(a*t,s*t),xt(r*t,n*t),xt(o*t,i*t),Wl(),yt()].filter(Boolean)},Qi=function(e){return e.rotation===0?[Dr(0,0),Su(0)]:e.rotation===90?[Dr(e.width,0),Su(90)]:e.rotation===180?[Dr(e.width,e.height),Su(180)]:e.rotation===270?[Dr(0,e.height),Su(270)]:[]},Fu=function(e){var t=Ba({x:e.x,y:e.y,width:e.width,height:e.height,borderWidth:e.borderWidth,color:e.color,borderColor:e.borderColor,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)});if(!e.filled)return t;var r=ve(e.width),n=ve(e.height),i=Math.min(r,n)/2,o=wT({x:r/2,y:n/2,size:i,thickness:e.thickness,color:e.markColor});return Fe([mt()],t,o,[yt()])},Eu=function(e){var t=ve(e.width),r=ve(e.height),n=Math.min(t,r)/2,i=up({x:e.x,y:e.y,xScale:n,yScale:n,color:e.color,borderColor:e.borderColor,borderWidth:e.borderWidth});if(!e.filled)return i;var o=up({x:e.x,y:e.y,xScale:n*.45,yScale:n*.45,color:e.dotColor,borderColor:void 0,borderWidth:0});return Fe([mt()],i,o,[yt()])},iy=function(e){var t=ve(e.x),r=ve(e.y),n=ve(e.width),i=ve(e.height),o=Ba({x:t,y:r,width:n,height:i,borderWidth:e.borderWidth,color:e.color,borderColor:e.borderColor,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)}),a=q0(e.textLines,{color:e.textColor,font:e.font,size:e.fontSize,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)});return Fe([mt()],o,a,[yt()])},q0=function(e,t){for(var r=[Dx(),Ro(t.color),V0(t.font,t.size)],n=0,i=e.length;n<i;n++){var o=e[n],a=o.encoded,s=o.x,u=o.y;r.push(Rx(Pt(t.rotate),Pt(t.xSkew),Pt(t.ySkew),s,u),Ax(a))}return r.push(Ox()),r},Ux=function(e){var t=ve(e.x),r=ve(e.y),n=ve(e.width),i=ve(e.height),o=ve(e.borderWidth),a=ve(e.padding),s=t+o/2+a,u=r+o/2+a,l=n-(o/2+a)*2,c=i-(o/2+a)*2,d=[Fn(s,u),xt(s,u+c),xt(s+l,u+c),xt(s+l,u),ji(),_x(),Px()],h=Ba({x:t,y:r,width:n,height:i,borderWidth:e.borderWidth,color:e.color,borderColor:e.borderColor,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)}),f=q0(e.textLines,{color:e.textColor,font:e.font,size:e.fontSize,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)}),v=Fe([Bx("Tx"),mt()],f,[yt(),Nx()]);return Fe([mt()],h,d,v,[yt()])},xT=function(e){for(var t=ve(e.x),r=ve(e.y),n=ve(e.width),i=ve(e.height),o=ve(e.lineHeight),a=ve(e.borderWidth),s=ve(e.padding),u=t+a/2+s,l=r+a/2+s,c=n-(a/2+s)*2,d=i-(a/2+s)*2,h=[Fn(u,l),xt(u,l+d),xt(u+c,l+d),xt(u+c,l),ji(),_x(),Px()],f=Ba({x:t,y:r,width:n,height:i,borderWidth:e.borderWidth,color:e.color,borderColor:e.borderColor,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)}),v=[],p=0,b=e.selectedLines.length;p<b;p++){var g=e.textLines[e.selectedLines[p]];v.push.apply(v,Ba({x:g.x-s,y:g.y-(o-g.height)/2,width:n-a,height:g.height+(o-g.height)/2,borderWidth:0,color:e.selectedColor,borderColor:void 0,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)}))}var y=q0(e.textLines,{color:e.textColor,font:e.font,size:e.fontSize,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)}),w=Fe([Bx("Tx"),mt()],y,[yt(),Nx()]);return Fe([mt()],f,v,h,w,[yt()])},kT=function(e){L(t,e);function t(){var r=this,n="Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.";return r=e.call(this,n)||this,r}return t}(Error),ST=function(e){L(t,e);function t(){var r=this,n="Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.";return r=e.call(this,n)||this,r}return t}(Error),CT=function(e){L(t,e);function t(){var r=this,n="A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.";return r=e.call(this,n)||this,r}return t}(Error),FT=function(e){L(t,e);function t(){var r=this,n="PDFDocument has no pages so `PDFDocument.removePage` cannot be called";return r=e.call(this,n)||this,r}return t}(Error),ET=function(e){L(t,e);function t(r){var n=this,i='PDFDocument has no form field with the name "'+r+'"';return n=e.call(this,i)||this,n}return t}(Error),$i=function(e){L(t,e);function t(r,n,i){var o,a,s=this,u=n==null?void 0:n.name,l=(a=(o=i==null?void 0:i.constructor)===null||o===void 0?void 0:o.name)!==null&&a!==void 0?a:i,c='Expected field "'+r+'" to be of type '+u+", "+("but it is actually of type "+l);return s=e.call(this,c)||this,s}return t}(Error);(function(e){L(t,e);function t(r){var n=this,i='Failed to select check box due to missing onValue: "'+r+'"';return n=e.call(this,i)||this,n}return t})(Error);var Vx=function(e){L(t,e);function t(r){var n=this,i='A field already exists with the specified name: "'+r+'"';return n=e.call(this,i)||this,n}return t}(Error),TT=function(e){L(t,e);function t(r){var n=this,i='Field name contains invalid component: "'+r+'"';return n=e.call(this,i)||this,n}return t}(Error);(function(e){L(t,e);function t(r){var n=this,i='A non-terminal field already exists with the specified name: "'+r+'"';return n=e.call(this,i)||this,n}return t})(Error);var zT=function(e){L(t,e);function t(r){var n=this,i="Reading rich text fields is not supported: Attempted to read rich text field: "+r;return n=e.call(this,i)||this,n}return t}(Error),_T=function(e){L(t,e);function t(r,n){var i=this,o="Failed to layout combed text as lineLength="+r+" is greater than cellCount="+n;return i=e.call(this,o)||this,i}return t}(Error),PT=function(e){L(t,e);function t(r,n,i){var o=this,a="Attempted to set text with length="+r+" for TextField with maxLength="+n+" and name="+i;return o=e.call(this,a)||this,o}return t}(Error),AT=function(e){L(t,e);function t(r,n,i){var o=this,a="Attempted to set maxLength="+n+", which is less than "+r+", the length of this field's current value (name="+i+")";return o=e.call(this,a)||this,o}return t}(Error),pt;(function(e){e[e.Left=0]="Left",e[e.Center=1]="Center",e[e.Right=2]="Right"})(pt||(pt={}));var jx=4,Hx=500,Wx=function(e,t,r,n){n===void 0&&(n=!1);for(var i=jx;i<Hx;){for(var o=0,a=0,s=e.length;a<s;a++){o+=1;for(var u=e[a],l=u.split(" "),c=r.width,d=0,h=l.length;d<h;d++){var f=d===h-1,v=f?l[d]:l[d]+" ",p=t.widthOfTextAtSize(v,i);c-=p,c<=0&&(o+=1,c=r.width-p)}}if(!n&&o>e.length)return i-1;var b=t.heightAtSize(i),g=b+b*.2,y=g*o;if(y>Math.abs(r.height))return i-1;i+=1}return i},DT=function(e,t,r,n){for(var i=r.width/n,o=r.height,a=jx,s=l8(e);a<Hx;){for(var u=0,l=s.length;u<l;u++){var c=s[u],d=t.widthOfTextAtSize(c,a)>i*.75;if(d)return a-1}var h=t.heightAtSize(a,{descender:!1});if(h>o)return a-1;a+=1}return a},OT=function(e){for(var t=e.length;t>0;t--)if(/\s/.test(e[t]))return t},RT=function(e,t,r,n){for(var i,o=e.length;o>0;){var a=e.substring(0,o),s=r.encodeText(a),u=r.widthOfTextAtSize(a,n);if(u<t){var l=e.substring(o)||void 0;return{line:a,encoded:s,width:u,remainder:l}}o=(i=OT(a))!==null&&i!==void 0?i:0}return{line:e,encoded:r.encodeText(e),width:r.widthOfTextAtSize(e,n),remainder:void 0}},Kx=function(e,t){var r=t.alignment,n=t.fontSize,i=t.font,o=t.bounds,a=aw(Nl(e));(n===void 0||n===0)&&(n=Wx(a,i,o,!0));for(var s=i.heightAtSize(n),u=s+s*.2,l=[],c=o.x,d=o.y,h=o.x+o.width,f=o.y+o.height,v=o.y+o.height,p=0,b=a.length;p<b;p++)for(var g=a[p];g!==void 0;){var y=RT(g,o.width,i,n),w=y.line,x=y.encoded,k=y.width,E=y.remainder,T=r===pt.Left?o.x:r===pt.Center?o.x+o.width/2-k/2:r===pt.Right?o.x+o.width-k:o.x;v-=u,T<c&&(c=T),v<d&&(d=v),T+k>h&&(h=T+k),v+s>f&&(f=v+s),l.push({text:w,encoded:x,width:k,height:s,x:T,y:v}),g=E==null?void 0:E.trim()}return{fontSize:n,lineHeight:u,lines:l,bounds:{x:c,y:d,width:h-c,height:f-d}}},BT=function(e,t){var r=t.fontSize,n=t.font,i=t.bounds,o=t.cellCount,a=sw(Nl(e));if(a.length>o)throw new _T(a.length,o);(r===void 0||r===0)&&(r=DT(a,n,i,o));for(var s=i.width/o,u=n.heightAtSize(r,{descender:!1}),l=i.y+(i.height/2-u/2),c=[],d=i.x,h=i.y,f=i.x+i.width,v=i.y+i.height,p=0,b=0;p<o;){var g=lw(a,b),y=g[0],w=g[1],x=n.encodeText(y),k=n.widthOfTextAtSize(y,r),E=i.x+(s*p+s/2),T=E-k/2;T<d&&(d=T),l<h&&(h=l),T+k>f&&(f=T+k),l+u>v&&(v=l+u),c.push({text:a,encoded:x,width:k,height:u,x:T,y:l}),p+=1,b+=w}return{fontSize:r,cells:c,bounds:{x:d,y:h,width:f-d,height:v-h}}},Zc=function(e,t){var r=t.alignment,n=t.fontSize,i=t.font,o=t.bounds,a=sw(Nl(e));(n===void 0||n===0)&&(n=Wx([a],i,o));var s=i.encodeText(a),u=i.widthOfTextAtSize(a,n),l=i.heightAtSize(n,{descender:!1}),c=r===pt.Left?o.x:r===pt.Center?o.x+o.width/2-u/2:r===pt.Right?o.x+o.width-u:o.x,d=o.y+(o.height/2-l/2);return{fontSize:n,line:{text:a,encoded:s,width:u,height:l,x:c,y:d},bounds:{x:c,y:d,width:u,height:l}}},qa=function(e){return"normal"in e?e:{normal:e}},NT=/\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,Wi=function(e){var t,r,n=(t=e.getDefaultAppearance())!==null&&t!==void 0?t:"",i=(r=y0(n,NT).match)!==null&&r!==void 0?r:[],o=Number(i[2]);return isFinite(o)?o:void 0},IT=/(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,Hr=function(e){var t,r=(t=e.getDefaultAppearance())!==null&&t!==void 0?t:"",n=y0(r,IT).match,i=n!=null?n:[],o=i[1],a=i[2],s=i[3],u=i[4],l=i[5];if(l==="g"&&o)return Ix(Number(o));if(l==="rg"&&o&&a&&s)return Le(Number(o),Number(a),Number(s));if(l==="k"&&o&&a&&s&&u)return Mx(Number(o),Number(a),Number(s),Number(u))},Wr=function(e,t,r,n){var i;n===void 0&&(n=0);var o=[Ro(t).toString(),V0((i=r==null?void 0:r.name)!==null&&i!==void 0?i:"dummy__noop",n).toString()].join(`
`);e.setDefaultAppearance(o)},MT=function(e,t){var r,n,i,o=Hr(t),a=Hr(e.acroField),s=t.getRectangle(),u=t.getAppearanceCharacteristics(),l=t.getBorderStyle(),c=(r=l==null?void 0:l.getWidth())!==null&&r!==void 0?r:0,d=ti(u==null?void 0:u.getRotation()),h=Do(s,d),f=h.width,v=h.height,p=Qi(ce(ce({},s),{rotation:d})),b=Le(0,0,0),g=(n=qt(u==null?void 0:u.getBorderColor()))!==null&&n!==void 0?n:b,y=qt(u==null?void 0:u.getBackgroundColor()),w=qt(u==null?void 0:u.getBackgroundColor(),.8),x=(i=o!=null?o:a)!==null&&i!==void 0?i:b;Wr(o?t:e.acroField,x);var k={x:0+c/2,y:0+c/2,width:f-c,height:v-c,thickness:1.5,borderWidth:c,borderColor:g,markColor:x};return{normal:{on:Fe(p,Fu(ce(ce({},k),{color:y,filled:!0}))),off:Fe(p,Fu(ce(ce({},k),{color:y,filled:!1})))},down:{on:Fe(p,Fu(ce(ce({},k),{color:w,filled:!0}))),off:Fe(p,Fu(ce(ce({},k),{color:w,filled:!1})))}}},LT=function(e,t){var r,n,i,o=Hr(t),a=Hr(e.acroField),s=t.getRectangle(),u=t.getAppearanceCharacteristics(),l=t.getBorderStyle(),c=(r=l==null?void 0:l.getWidth())!==null&&r!==void 0?r:0,d=ti(u==null?void 0:u.getRotation()),h=Do(s,d),f=h.width,v=h.height,p=Qi(ce(ce({},s),{rotation:d})),b=Le(0,0,0),g=(n=qt(u==null?void 0:u.getBorderColor()))!==null&&n!==void 0?n:b,y=qt(u==null?void 0:u.getBackgroundColor()),w=qt(u==null?void 0:u.getBackgroundColor(),.8),x=(i=o!=null?o:a)!==null&&i!==void 0?i:b;Wr(o?t:e.acroField,x);var k={x:f/2,y:v/2,width:f-c,height:v-c,borderWidth:c,borderColor:g,dotColor:x};return{normal:{on:Fe(p,Eu(ce(ce({},k),{color:y,filled:!0}))),off:Fe(p,Eu(ce(ce({},k),{color:y,filled:!1})))},down:{on:Fe(p,Eu(ce(ce({},k),{color:w,filled:!0}))),off:Fe(p,Eu(ce(ce({},k),{color:w,filled:!1})))}}},UT=function(e,t,r){var n,i,o,a,s,u=Hr(t),l=Hr(e.acroField),c=Wi(t),d=Wi(e.acroField),h=t.getRectangle(),f=t.getAppearanceCharacteristics(),v=t.getBorderStyle(),p=f==null?void 0:f.getCaptions(),b=(n=p==null?void 0:p.normal)!==null&&n!==void 0?n:"",g=(o=(i=p==null?void 0:p.down)!==null&&i!==void 0?i:b)!==null&&o!==void 0?o:"",y=(a=v==null?void 0:v.getWidth())!==null&&a!==void 0?a:0,w=ti(f==null?void 0:f.getRotation()),x=Do(h,w),k=x.width,E=x.height,T=Qi(ce(ce({},h),{rotation:w})),z=Le(0,0,0),_=qt(f==null?void 0:f.getBorderColor()),P=qt(f==null?void 0:f.getBackgroundColor()),D=qt(f==null?void 0:f.getBackgroundColor(),.8),I={x:y,y,width:k-y*2,height:E-y*2},O=Zc(b,{alignment:pt.Center,fontSize:c!=null?c:d,font:r,bounds:I}),K=Zc(g,{alignment:pt.Center,fontSize:c!=null?c:d,font:r,bounds:I}),Z=Math.min(O.fontSize,K.fontSize),W=(s=u!=null?u:l)!==null&&s!==void 0?s:z;Wr(u||c!==void 0?t:e.acroField,W,r,Z);var me={x:0+y/2,y:0+y/2,width:k-y,height:E-y,borderWidth:y,borderColor:_,textColor:W,font:r.name,fontSize:Z};return{normal:Fe(T,iy(ce(ce({},me),{color:P,textLines:[O.line]}))),down:Fe(T,iy(ce(ce({},me),{color:D,textLines:[K.line]})))}},VT=function(e,t,r){var n,i,o,a,s=Hr(t),u=Hr(e.acroField),l=Wi(t),c=Wi(e.acroField),d=t.getRectangle(),h=t.getAppearanceCharacteristics(),f=t.getBorderStyle(),v=(n=e.getText())!==null&&n!==void 0?n:"",p=(i=f==null?void 0:f.getWidth())!==null&&i!==void 0?i:0,b=ti(h==null?void 0:h.getRotation()),g=Do(d,b),y=g.width,w=g.height,x=Qi(ce(ce({},d),{rotation:b})),k=Le(0,0,0),E=qt(h==null?void 0:h.getBorderColor()),T=qt(h==null?void 0:h.getBackgroundColor()),z,_,P=e.isCombed()?0:1,D={x:p+P,y:p+P,width:y-(p+P)*2,height:w-(p+P)*2};if(e.isMultiline()){var I=Kx(v,{alignment:e.getAlignment(),fontSize:l!=null?l:c,font:r,bounds:D});z=I.lines,_=I.fontSize}else if(e.isCombed()){var I=BT(v,{fontSize:l!=null?l:c,font:r,bounds:D,cellCount:(o=e.getMaxLength())!==null&&o!==void 0?o:0});z=I.cells,_=I.fontSize}else{var I=Zc(v,{alignment:e.getAlignment(),fontSize:l!=null?l:c,font:r,bounds:D});z=[I.line],_=I.fontSize}var O=(a=s!=null?s:u)!==null&&a!==void 0?a:k;Wr(s||l!==void 0?t:e.acroField,O,r,_);var K={x:0+p/2,y:0+p/2,width:y-p,height:w-p,borderWidth:p!=null?p:0,borderColor:E,textColor:O,font:r.name,fontSize:_,color:T,textLines:z,padding:P};return Fe(x,Ux(K))},jT=function(e,t,r){var n,i,o,a=Hr(t),s=Hr(e.acroField),u=Wi(t),l=Wi(e.acroField),c=t.getRectangle(),d=t.getAppearanceCharacteristics(),h=t.getBorderStyle(),f=(n=e.getSelected()[0])!==null&&n!==void 0?n:"",v=(i=h==null?void 0:h.getWidth())!==null&&i!==void 0?i:0,p=ti(d==null?void 0:d.getRotation()),b=Do(c,p),g=b.width,y=b.height,w=Qi(ce(ce({},c),{rotation:p})),x=Le(0,0,0),k=qt(d==null?void 0:d.getBorderColor()),E=qt(d==null?void 0:d.getBackgroundColor()),T=1,z={x:v+T,y:v+T,width:g-(v+T)*2,height:y-(v+T)*2},_=Zc(f,{alignment:pt.Left,fontSize:u!=null?u:l,font:r,bounds:z}),P=_.line,D=_.fontSize,I=(o=a!=null?a:s)!==null&&o!==void 0?o:x;Wr(a||u!==void 0?t:e.acroField,I,r,D);var O={x:0+v/2,y:0+v/2,width:g-v,height:y-v,borderWidth:v!=null?v:0,borderColor:k,textColor:I,font:r.name,fontSize:D,color:E,textLines:[P],padding:T};return Fe(w,Ux(O))},HT=function(e,t,r){var n,i,o=Hr(t),a=Hr(e.acroField),s=Wi(t),u=Wi(e.acroField),l=t.getRectangle(),c=t.getAppearanceCharacteristics(),d=t.getBorderStyle(),h=(n=d==null?void 0:d.getWidth())!==null&&n!==void 0?n:0,f=ti(c==null?void 0:c.getRotation()),v=Do(l,f),p=v.width,b=v.height,g=Qi(ce(ce({},l),{rotation:f})),y=Le(0,0,0),w=qt(c==null?void 0:c.getBorderColor()),x=qt(c==null?void 0:c.getBackgroundColor()),k=e.getOptions(),E=e.getSelected();e.isSorted()&&k.sort();for(var T="",z=0,_=k.length;z<_;z++)T+=k[z],z<_-1&&(T+=`
`);for(var P=1,D={x:h+P,y:h+P,width:p-(h+P)*2,height:b-(h+P)*2},I=Kx(T,{alignment:pt.Left,fontSize:s!=null?s:u,font:r,bounds:D}),O=I.lines,K=I.fontSize,Z=I.lineHeight,W=[],z=0,_=O.length;z<_;z++){var me=O[z];E.includes(me.text)&&W.push(z)}var V=Le(153/255,193/255,218/255),Y=(i=o!=null?o:a)!==null&&i!==void 0?i:y;return Wr(o||s!==void 0?t:e.acroField,Y,r,K),Fe(g,xT({x:0+h/2,y:0+h/2,width:p-h,height:b-h,borderWidth:h!=null?h:0,borderColor:w,textColor:Y,font:r.name,fontSize:K,color:x,textLines:O,lineHeight:Z,selectedColor:V,selectedLines:W,padding:P}))},qx=function(){function e(t,r,n){this.alreadyEmbedded=!1,A(t,"ref",[[Me,"PDFRef"]]),A(r,"doc",[[Ki,"PDFDocument"]]),A(n,"embedder",[[mx,"PDFPageEmbedder"]]),this.ref=t,this.doc=r,this.width=n.width,this.height=n.height,this.embedder=n}return e.prototype.scale=function(t){return A(t,"factor",["number"]),{width:this.width*t,height:this.height*t}},e.prototype.size=function(){return this.scale(1)},e.prototype.embed=function(){return fe(this,void 0,void 0,function(){return pe(this,function(t){switch(t.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)];case 1:t.sent(),this.alreadyEmbedded=!0,t.label=2;case 2:return[2]}})})},e.of=function(t,r,n){return new e(t,r,n)},e}(),xr=function(){function e(t,r,n){this.modified=!0,A(t,"ref",[[Me,"PDFRef"]]),A(r,"doc",[[Ki,"PDFDocument"]]),A(n,"embedder",[[D0,"CustomFontEmbedder"],[Vc,"StandardFontEmbedder"]]),this.ref=t,this.doc=r,this.name=n.fontName,this.embedder=n}return e.prototype.encodeText=function(t){return A(t,"text",["string"]),this.modified=!0,this.embedder.encodeText(t)},e.prototype.widthOfTextAtSize=function(t,r){return A(t,"text",["string"]),A(r,"size",["number"]),this.embedder.widthOfTextAtSize(t,r)},e.prototype.heightAtSize=function(t,r){var n;return A(t,"size",["number"]),M(r==null?void 0:r.descender,"options.descender",["boolean"]),this.embedder.heightOfFontAtSize(t,{descender:(n=r==null?void 0:r.descender)!==null&&n!==void 0?n:!0})},e.prototype.sizeAtHeight=function(t){return A(t,"height",["number"]),this.embedder.sizeOfFontAtHeight(t)},e.prototype.getCharacterSet=function(){return this.embedder instanceof Vc?this.embedder.encoding.supportedCodePoints:this.embedder.font.characterSet},e.prototype.embed=function(){return fe(this,void 0,void 0,function(){return pe(this,function(t){switch(t.label){case 0:return this.modified?[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]:[3,2];case 1:t.sent(),this.modified=!1,t.label=2;case 2:return[2]}})})},e.of=function(t,r,n){return new e(t,r,n)},e}(),cp=function(){function e(t,r,n){A(t,"ref",[[Me,"PDFRef"]]),A(r,"doc",[[Ki,"PDFDocument"]]),A(n,"embedder",[[fx,"JpegEmbedder"],[px,"PngEmbedder"]]),this.ref=t,this.doc=r,this.width=n.width,this.height=n.height,this.embedder=n}return e.prototype.scale=function(t){return A(t,"factor",["number"]),{width:this.width*t,height:this.height*t}},e.prototype.scaleToFit=function(t,r){A(t,"width",["number"]),A(r,"height",["number"]);var n=t/this.width,i=r/this.height,o=Math.min(n,i);return this.scale(o)},e.prototype.size=function(){return this.scale(1)},e.prototype.embed=function(){return fe(this,void 0,void 0,function(){var t,r,n;return pe(this,function(i){switch(i.label){case 0:return this.embedder?(this.embedTask||(t=this,r=t.doc,n=t.ref,this.embedTask=this.embedder.embedIntoContext(r.context,n)),[4,this.embedTask]):[2];case 1:return i.sent(),this.embedder=void 0,[2]}})})},e.of=function(t,r,n){return new e(t,r,n)},e}(),Oi;(function(e){e[e.Left=0]="Left",e[e.Center=1]="Center",e[e.Right=2]="Right"})(Oi||(Oi={}));var Xa=function(e){M(e==null?void 0:e.x,"options.x",["number"]),M(e==null?void 0:e.y,"options.y",["number"]),M(e==null?void 0:e.width,"options.width",["number"]),M(e==null?void 0:e.height,"options.height",["number"]),M(e==null?void 0:e.textColor,"options.textColor",[[Object,"Color"]]),M(e==null?void 0:e.backgroundColor,"options.backgroundColor",[[Object,"Color"]]),M(e==null?void 0:e.borderColor,"options.borderColor",[[Object,"Color"]]),M(e==null?void 0:e.borderWidth,"options.borderWidth",["number"]),M(e==null?void 0:e.rotate,"options.rotate",[[Object,"Rotation"]])},Bo=function(){function e(t,r,n){A(t,"acroField",[[Wa,"PDFAcroTerminal"]]),A(r,"ref",[[Me,"PDFRef"]]),A(n,"doc",[[Ki,"PDFDocument"]]),this.acroField=t,this.ref=r,this.doc=n}return e.prototype.getName=function(){var t;return(t=this.acroField.getFullyQualifiedName())!==null&&t!==void 0?t:""},e.prototype.isReadOnly=function(){return this.acroField.hasFlag(Gr.ReadOnly)},e.prototype.enableReadOnly=function(){this.acroField.setFlagTo(Gr.ReadOnly,!0)},e.prototype.disableReadOnly=function(){this.acroField.setFlagTo(Gr.ReadOnly,!1)},e.prototype.isRequired=function(){return this.acroField.hasFlag(Gr.Required)},e.prototype.enableRequired=function(){this.acroField.setFlagTo(Gr.Required,!0)},e.prototype.disableRequired=function(){this.acroField.setFlagTo(Gr.Required,!1)},e.prototype.isExported=function(){return!this.acroField.hasFlag(Gr.NoExport)},e.prototype.enableExporting=function(){this.acroField.setFlagTo(Gr.NoExport,!1)},e.prototype.disableExporting=function(){this.acroField.setFlagTo(Gr.NoExport,!0)},e.prototype.needsAppearancesUpdate=function(){throw new Ar(this.constructor.name,"needsAppearancesUpdate")},e.prototype.defaultUpdateAppearances=function(t){throw new Ar(this.constructor.name,"defaultUpdateAppearances")},e.prototype.markAsDirty=function(){this.doc.getForm().markFieldAsDirty(this.ref)},e.prototype.markAsClean=function(){this.doc.getForm().markFieldAsClean(this.ref)},e.prototype.isDirty=function(){return this.doc.getForm().fieldIsDirty(this.ref)},e.prototype.createWidget=function(t){var r,n=t.textColor,i=t.backgroundColor,o=t.borderColor,a=t.borderWidth,s=zx(t.rotate),u=t.caption,l=t.x,c=t.y,d=t.width+a,h=t.height+a,f=Boolean(t.hidden),v=t.page;ax(s,"degreesAngle",90);var p=sp.create(this.doc.context,this.ref),b=$E({x:l,y:c,width:d,height:h},a,s);p.setRectangle(b),v&&p.setP(v);var g=p.getOrCreateAppearanceCharacteristics();i&&g.setBackgroundColor(ey(i)),g.setRotation(s),u&&g.setCaptions({normal:u}),o&&g.setBorderColor(ey(o));var y=p.getOrCreateBorderStyle();if(a!==void 0&&y.setWidth(a),p.setFlagTo(Xs.Print,!0),p.setFlagTo(Xs.Hidden,f),p.setFlagTo(Xs.Invisible,!1),n){var w=(r=this.acroField.getDefaultAppearance())!==null&&r!==void 0?r:"",x=w+`
`+Ro(n).toString();this.acroField.setDefaultAppearance(x)}return p},e.prototype.updateWidgetAppearanceWithFont=function(t,r,n){var i=n.normal,o=n.rollover,a=n.down;this.updateWidgetAppearances(t,{normal:this.createAppearanceStream(t,i,r),rollover:o&&this.createAppearanceStream(t,o,r),down:a&&this.createAppearanceStream(t,a,r)})},e.prototype.updateOnOffWidgetAppearance=function(t,r,n){var i=n.normal,o=n.rollover,a=n.down;this.updateWidgetAppearances(t,{normal:this.createAppearanceDict(t,i,r),rollover:o&&this.createAppearanceDict(t,o,r),down:a&&this.createAppearanceDict(t,a,r)})},e.prototype.updateWidgetAppearances=function(t,r){var n=r.normal,i=r.rollover,o=r.down;t.setNormalAppearance(n),i?t.setRolloverAppearance(i):t.removeRolloverAppearance(),o?t.setDownAppearance(o):t.removeDownAppearance()},e.prototype.createAppearanceStream=function(t,r,n){var i,o=this.acroField.dict.context,a=t.getRectangle(),s=a.width,u=a.height,l=n&&{Font:(i={},i[n.name]=n.ref,i)},c=o.formXObject(r,{Resources:l,BBox:o.obj([0,0,s,u]),Matrix:o.obj([1,0,0,1,0,0])}),d=o.register(c);return d},e.prototype.createImageAppearanceStream=function(t,r,n){var i,o,a=this.acroField.dict.context,s=t.getRectangle(),u=t.getAppearanceCharacteristics(),l=t.getBorderStyle(),c=(o=l==null?void 0:l.getWidth())!==null&&o!==void 0?o:0,d=ti(u==null?void 0:u.getRotation()),h=Qi(ce(ce({},s),{rotation:d})),f=Do(s,d),v=r.scaleToFit(f.width-c*2,f.height-c*2),p={x:c,y:c,width:v.width,height:v.height,rotate:ie(0),xSkew:ie(0),ySkew:ie(0)};n===Oi.Center?(p.x+=(f.width-c*2)/2-v.width/2,p.y+=(f.height-c*2)/2-v.height/2):n===Oi.Right&&(p.x=f.width-c-v.width,p.y=f.height-c-v.height);var b=this.doc.context.addRandomSuffix("Image",10),g=Fe(h,Lx(b,p)),y={XObject:(i={},i[b]=r.ref,i)},w=a.formXObject(g,{Resources:y,BBox:a.obj([0,0,s.width,s.height]),Matrix:a.obj([1,0,0,1,0,0])});return a.register(w)},e.prototype.createAppearanceDict=function(t,r,n){var i=this.acroField.dict.context,o=this.createAppearanceStream(t,r.on),a=this.createAppearanceStream(t,r.off),s=i.obj({});return s.set(n,o),s.set(C.of("Off"),a),s},e}(),Ss=function(e){L(t,e);function t(r,n,i){var o=e.call(this,r,n,i)||this;return A(r,"acroCheckBox",[[zd,"PDFAcroCheckBox"]]),o.acroField=r,o}return t.prototype.check=function(){var r,n=(r=this.acroField.getOnValue())!==null&&r!==void 0?r:C.of("Yes");this.markAsDirty(),this.acroField.setValue(n)},t.prototype.uncheck=function(){this.markAsDirty(),this.acroField.setValue(C.of("Off"))},t.prototype.isChecked=function(){var r=this.acroField.getOnValue();return!!r&&r===this.acroField.getValue()},t.prototype.addToPage=function(r,n){var i,o,a,s,u,l;A(r,"page",[[_r,"PDFPage"]]),Xa(n),n||(n={}),"textColor"in n||(n.textColor=Le(0,0,0)),"backgroundColor"in n||(n.backgroundColor=Le(1,1,1)),"borderColor"in n||(n.borderColor=Le(0,0,0)),"borderWidth"in n||(n.borderWidth=1);var c=this.createWidget({x:(i=n.x)!==null&&i!==void 0?i:0,y:(o=n.y)!==null&&o!==void 0?o:0,width:(a=n.width)!==null&&a!==void 0?a:50,height:(s=n.height)!==null&&s!==void 0?s:50,textColor:n.textColor,backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:(u=n.borderWidth)!==null&&u!==void 0?u:0,rotate:(l=n.rotate)!==null&&l!==void 0?l:ie(0),hidden:n.hidden,page:r.ref}),d=this.doc.context.register(c.dict);this.acroField.addWidget(d),c.setAppearanceState(C.of("Off")),this.updateWidgetAppearance(c,C.of("Yes")),r.node.addAnnot(d)},t.prototype.needsAppearancesUpdate=function(){for(var r,n=this.acroField.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=a.getAppearanceState(),u=(r=a.getAppearances())===null||r===void 0?void 0:r.normal;if(!(u instanceof he)||s&&!u.has(s))return!0}return!1},t.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},t.prototype.updateAppearances=function(r){var n;M(r,"provider",[Function]);for(var i=this.acroField.getWidgets(),o=0,a=i.length;o<a;o++){var s=i[o],u=(n=s.getOnValue())!==null&&n!==void 0?n:C.of("Yes");!u||this.updateWidgetAppearance(s,u,r)}this.markAsClean()},t.prototype.updateWidgetAppearance=function(r,n,i){var o=i!=null?i:MT,a=qa(o(this,r));this.updateOnOffWidgetAppearance(r,n,a)},t.of=function(r,n,i){return new t(r,n,i)},t}(Bo),Xu=function(e){L(t,e);function t(r,n,i){var o=e.call(this,r,n,i)||this;return A(r,"acroComboBox",[[_d,"PDFAcroComboBox"]]),o.acroField=r,o}return t.prototype.getOptions=function(){for(var r=this.acroField.getOptions(),n=new Array(r.length),i=0,o=n.length;i<o;i++){var a=r[i],s=a.display,u=a.value;n[i]=(s!=null?s:u).decodeText()}return n},t.prototype.getSelected=function(){for(var r=this.acroField.getValues(),n=new Array(r.length),i=0,o=r.length;i<o;i++)n[i]=r[i].decodeText();return n},t.prototype.setOptions=function(r){A(r,"options",[Array]);for(var n=new Array(r.length),i=0,o=r.length;i<o;i++)n[i]={value:re.fromText(r[i])};this.acroField.setOptions(n)},t.prototype.addOptions=function(r){A(r,"options",["string",Array]);for(var n=Array.isArray(r)?r:[r],i=this.acroField.getOptions(),o=new Array(n.length),a=0,s=n.length;a<s;a++)o[a]={value:re.fromText(n[a])};this.acroField.setOptions(i.concat(o))},t.prototype.select=function(r,n){n===void 0&&(n=!1),A(r,"options",["string",Array]),A(n,"merge",["boolean"]);var i=Array.isArray(r)?r:[r],o=this.getOptions(),a=i.find(function(d){return!o.includes(d)});a&&this.enableEditing(),this.markAsDirty(),(i.length>1||i.length===1&&n)&&this.enableMultiselect();for(var s=new Array(i.length),u=0,l=i.length;u<l;u++)s[u]=re.fromText(i[u]);if(n){var c=this.acroField.getValues();this.acroField.setValues(c.concat(s))}else this.acroField.setValues(s)},t.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},t.prototype.setFontSize=function(r){Ed(r,"fontSize"),this.acroField.setFontSize(r),this.markAsDirty()},t.prototype.isEditable=function(){return this.acroField.hasFlag(Ne.Edit)},t.prototype.enableEditing=function(){this.acroField.setFlagTo(Ne.Edit,!0)},t.prototype.disableEditing=function(){this.acroField.setFlagTo(Ne.Edit,!1)},t.prototype.isSorted=function(){return this.acroField.hasFlag(Ne.Sort)},t.prototype.enableSorting=function(){this.acroField.setFlagTo(Ne.Sort,!0)},t.prototype.disableSorting=function(){this.acroField.setFlagTo(Ne.Sort,!1)},t.prototype.isMultiselect=function(){return this.acroField.hasFlag(Ne.MultiSelect)},t.prototype.enableMultiselect=function(){this.acroField.setFlagTo(Ne.MultiSelect,!0)},t.prototype.disableMultiselect=function(){this.acroField.setFlagTo(Ne.MultiSelect,!1)},t.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(Ne.DoNotSpellCheck)},t.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(Ne.DoNotSpellCheck,!1)},t.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(Ne.DoNotSpellCheck,!0)},t.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(Ne.CommitOnSelChange)},t.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(Ne.CommitOnSelChange,!0)},t.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(Ne.CommitOnSelChange,!1)},t.prototype.addToPage=function(r,n){var i,o,a,s,u,l,c;A(r,"page",[[_r,"PDFPage"]]),Xa(n),n||(n={}),"textColor"in n||(n.textColor=Le(0,0,0)),"backgroundColor"in n||(n.backgroundColor=Le(1,1,1)),"borderColor"in n||(n.borderColor=Le(0,0,0)),"borderWidth"in n||(n.borderWidth=1);var d=this.createWidget({x:(i=n.x)!==null&&i!==void 0?i:0,y:(o=n.y)!==null&&o!==void 0?o:0,width:(a=n.width)!==null&&a!==void 0?a:200,height:(s=n.height)!==null&&s!==void 0?s:50,textColor:n.textColor,backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:(u=n.borderWidth)!==null&&u!==void 0?u:0,rotate:(l=n.rotate)!==null&&l!==void 0?l:ie(0),hidden:n.hidden,page:r.ref}),h=this.doc.context.register(d.dict);this.acroField.addWidget(h);var f=(c=n.font)!==null&&c!==void 0?c:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(d,f),r.node.addAnnot(h)},t.prototype.needsAppearancesUpdate=function(){var r;if(this.isDirty())return!0;for(var n=this.acroField.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=((r=a.getAppearances())===null||r===void 0?void 0:r.normal)instanceof mr;if(!s)return!0}return!1},t.prototype.defaultUpdateAppearances=function(r){A(r,"font",[[xr,"PDFFont"]]),this.updateAppearances(r)},t.prototype.updateAppearances=function(r,n){A(r,"font",[[xr,"PDFFont"]]),M(n,"provider",[Function]);for(var i=this.acroField.getWidgets(),o=0,a=i.length;o<a;o++){var s=i[o];this.updateWidgetAppearance(s,r,n)}this.markAsClean()},t.prototype.updateWidgetAppearance=function(r,n,i){var o=i!=null?i:jT,a=qa(o(this,r,n));this.updateWidgetAppearanceWithFont(r,n,a)},t.of=function(r,n,i){return new t(r,n,i)},t}(Bo),Gu=function(e){L(t,e);function t(r,n,i){var o=e.call(this,r,n,i)||this;return A(r,"acroListBox",[[Od,"PDFAcroListBox"]]),o.acroField=r,o}return t.prototype.getOptions=function(){for(var r=this.acroField.getOptions(),n=new Array(r.length),i=0,o=n.length;i<o;i++){var a=r[i],s=a.display,u=a.value;n[i]=(s!=null?s:u).decodeText()}return n},t.prototype.getSelected=function(){for(var r=this.acroField.getValues(),n=new Array(r.length),i=0,o=r.length;i<o;i++)n[i]=r[i].decodeText();return n},t.prototype.setOptions=function(r){A(r,"options",[Array]),this.markAsDirty();for(var n=new Array(r.length),i=0,o=r.length;i<o;i++)n[i]={value:re.fromText(r[i])};this.acroField.setOptions(n)},t.prototype.addOptions=function(r){A(r,"options",["string",Array]),this.markAsDirty();for(var n=Array.isArray(r)?r:[r],i=this.acroField.getOptions(),o=new Array(n.length),a=0,s=n.length;a<s;a++)o[a]={value:re.fromText(n[a])};this.acroField.setOptions(i.concat(o))},t.prototype.select=function(r,n){n===void 0&&(n=!1),A(r,"options",["string",Array]),A(n,"merge",["boolean"]);var i=Array.isArray(r)?r:[r],o=this.getOptions();VF(i,"option",o),this.markAsDirty(),(i.length>1||i.length===1&&n)&&this.enableMultiselect();for(var a=new Array(i.length),s=0,u=i.length;s<u;s++)a[s]=re.fromText(i[s]);if(n){var l=this.acroField.getValues();this.acroField.setValues(l.concat(a))}else this.acroField.setValues(a)},t.prototype.clear=function(){this.markAsDirty(),this.acroField.setValues([])},t.prototype.setFontSize=function(r){Ed(r,"fontSize"),this.acroField.setFontSize(r),this.markAsDirty()},t.prototype.isSorted=function(){return this.acroField.hasFlag(Ne.Sort)},t.prototype.enableSorting=function(){this.acroField.setFlagTo(Ne.Sort,!0)},t.prototype.disableSorting=function(){this.acroField.setFlagTo(Ne.Sort,!1)},t.prototype.isMultiselect=function(){return this.acroField.hasFlag(Ne.MultiSelect)},t.prototype.enableMultiselect=function(){this.acroField.setFlagTo(Ne.MultiSelect,!0)},t.prototype.disableMultiselect=function(){this.acroField.setFlagTo(Ne.MultiSelect,!1)},t.prototype.isSelectOnClick=function(){return this.acroField.hasFlag(Ne.CommitOnSelChange)},t.prototype.enableSelectOnClick=function(){this.acroField.setFlagTo(Ne.CommitOnSelChange,!0)},t.prototype.disableSelectOnClick=function(){this.acroField.setFlagTo(Ne.CommitOnSelChange,!1)},t.prototype.addToPage=function(r,n){var i,o,a,s,u,l,c;A(r,"page",[[_r,"PDFPage"]]),Xa(n),n||(n={}),"textColor"in n||(n.textColor=Le(0,0,0)),"backgroundColor"in n||(n.backgroundColor=Le(1,1,1)),"borderColor"in n||(n.borderColor=Le(0,0,0)),"borderWidth"in n||(n.borderWidth=1);var d=this.createWidget({x:(i=n.x)!==null&&i!==void 0?i:0,y:(o=n.y)!==null&&o!==void 0?o:0,width:(a=n.width)!==null&&a!==void 0?a:200,height:(s=n.height)!==null&&s!==void 0?s:100,textColor:n.textColor,backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:(u=n.borderWidth)!==null&&u!==void 0?u:0,rotate:(l=n.rotate)!==null&&l!==void 0?l:ie(0),hidden:n.hidden,page:r.ref}),h=this.doc.context.register(d.dict);this.acroField.addWidget(h);var f=(c=n.font)!==null&&c!==void 0?c:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(d,f),r.node.addAnnot(h)},t.prototype.needsAppearancesUpdate=function(){var r;if(this.isDirty())return!0;for(var n=this.acroField.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=((r=a.getAppearances())===null||r===void 0?void 0:r.normal)instanceof mr;if(!s)return!0}return!1},t.prototype.defaultUpdateAppearances=function(r){A(r,"font",[[xr,"PDFFont"]]),this.updateAppearances(r)},t.prototype.updateAppearances=function(r,n){A(r,"font",[[xr,"PDFFont"]]),M(n,"provider",[Function]);for(var i=this.acroField.getWidgets(),o=0,a=i.length;o<a;o++){var s=i[o];this.updateWidgetAppearance(s,r,n)}this.markAsClean()},t.prototype.updateWidgetAppearance=function(r,n,i){var o=i!=null?i:HT,a=qa(o(this,r,n));this.updateWidgetAppearanceWithFont(r,n,a)},t.of=function(r,n,i){return new t(r,n,i)},t}(Bo),Cs=function(e){L(t,e);function t(r,n,i){var o=e.call(this,r,n,i)||this;return A(r,"acroRadioButton",[[Dd,"PDFAcroRadioButton"]]),o.acroField=r,o}return t.prototype.getOptions=function(){var r=this.acroField.getExportValues();if(r){for(var n=new Array(r.length),i=0,o=r.length;i<o;i++)n[i]=r[i].decodeText();return n}for(var a=this.acroField.getOnValues(),s=new Array(a.length),i=0,o=s.length;i<o;i++)s[i]=a[i].decodeText();return s},t.prototype.getSelected=function(){var r=this.acroField.getValue();if(r!==C.of("Off")){var n=this.acroField.getExportValues();if(n){for(var i=this.acroField.getOnValues(),o=0,a=i.length;o<a;o++)if(i[o]===r)return n[o].decodeText()}return r.decodeText()}},t.prototype.select=function(r){A(r,"option",["string"]);var n=this.getOptions();xi(r,"option",n),this.markAsDirty();var i=this.acroField.getOnValues(),o=this.acroField.getExportValues();if(o)for(var a=0,s=o.length;a<s;a++)o[a].decodeText()===r&&this.acroField.setValue(i[a]);else for(var a=0,s=i.length;a<s;a++){var u=i[a];u.decodeText()===r&&this.acroField.setValue(u)}},t.prototype.clear=function(){this.markAsDirty(),this.acroField.setValue(C.of("Off"))},t.prototype.isOffToggleable=function(){return!this.acroField.hasFlag(zr.NoToggleToOff)},t.prototype.enableOffToggling=function(){this.acroField.setFlagTo(zr.NoToggleToOff,!1)},t.prototype.disableOffToggling=function(){this.acroField.setFlagTo(zr.NoToggleToOff,!0)},t.prototype.isMutuallyExclusive=function(){return!this.acroField.hasFlag(zr.RadiosInUnison)},t.prototype.enableMutualExclusion=function(){this.acroField.setFlagTo(zr.RadiosInUnison,!1)},t.prototype.disableMutualExclusion=function(){this.acroField.setFlagTo(zr.RadiosInUnison,!0)},t.prototype.addOptionToPage=function(r,n,i){var o,a,s,u,l,c,d,h,f;A(r,"option",["string"]),A(n,"page",[[_r,"PDFPage"]]),Xa(i);var v=this.createWidget({x:(o=i==null?void 0:i.x)!==null&&o!==void 0?o:0,y:(a=i==null?void 0:i.y)!==null&&a!==void 0?a:0,width:(s=i==null?void 0:i.width)!==null&&s!==void 0?s:50,height:(u=i==null?void 0:i.height)!==null&&u!==void 0?u:50,textColor:(l=i==null?void 0:i.textColor)!==null&&l!==void 0?l:Le(0,0,0),backgroundColor:(c=i==null?void 0:i.backgroundColor)!==null&&c!==void 0?c:Le(1,1,1),borderColor:(d=i==null?void 0:i.borderColor)!==null&&d!==void 0?d:Le(0,0,0),borderWidth:(h=i==null?void 0:i.borderWidth)!==null&&h!==void 0?h:1,rotate:(f=i==null?void 0:i.rotate)!==null&&f!==void 0?f:ie(0),hidden:i==null?void 0:i.hidden,page:n.ref}),p=this.doc.context.register(v.dict),b=this.acroField.addWidgetWithOpt(p,re.fromText(r),!this.isMutuallyExclusive());v.setAppearanceState(C.of("Off")),this.updateWidgetAppearance(v,b),n.node.addAnnot(p)},t.prototype.needsAppearancesUpdate=function(){for(var r,n=this.acroField.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=a.getAppearanceState(),u=(r=a.getAppearances())===null||r===void 0?void 0:r.normal;if(!(u instanceof he)||s&&!u.has(s))return!0}return!1},t.prototype.defaultUpdateAppearances=function(){this.updateAppearances()},t.prototype.updateAppearances=function(r){M(r,"provider",[Function]);for(var n=this.acroField.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=a.getOnValue();!s||this.updateWidgetAppearance(a,s,r)}},t.prototype.updateWidgetAppearance=function(r,n,i){var o=i!=null?i:LT,a=qa(o(this,r));this.updateOnOffWidgetAppearance(r,n,a)},t.of=function(r,n,i){return new t(r,n,i)},t}(Bo),dp=function(e){L(t,e);function t(r,n,i){var o=e.call(this,r,n,i)||this;return A(r,"acroSignature",[[R0,"PDFAcroSignature"]]),o.acroField=r,o}return t.prototype.needsAppearancesUpdate=function(){return!1},t.of=function(r,n,i){return new t(r,n,i)},t}(Bo),Zu=function(e){L(t,e);function t(r,n,i){var o=e.call(this,r,n,i)||this;return A(r,"acroText",[[Pd,"PDFAcroText"]]),o.acroField=r,o}return t.prototype.getText=function(){var r=this.acroField.getValue();if(!r&&this.isRichFormatted())throw new zT(this.getName());return r==null?void 0:r.decodeText()},t.prototype.setText=function(r){M(r,"text",["string"]);var n=this.getMaxLength();if(n!==void 0&&r&&r.length>n)throw new PT(r.length,n,this.getName());this.markAsDirty(),this.disableRichFormatting(),r?this.acroField.setValue(re.fromText(r)):this.acroField.removeValue()},t.prototype.getAlignment=function(){var r=this.acroField.getQuadding();return r===0?pt.Left:r===1?pt.Center:r===2?pt.Right:pt.Left},t.prototype.setAlignment=function(r){xi(r,"alignment",pt),this.markAsDirty(),this.acroField.setQuadding(r)},t.prototype.getMaxLength=function(){return this.acroField.getMaxLength()},t.prototype.setMaxLength=function(r){if(Xr(r,"maxLength",0,Number.MAX_SAFE_INTEGER),this.markAsDirty(),r===void 0)this.acroField.removeMaxLength();else{var n=this.getText();if(n&&n.length>r)throw new AT(n.length,r,this.getName());this.acroField.setMaxLength(r)}},t.prototype.removeMaxLength=function(){this.markAsDirty(),this.acroField.removeMaxLength()},t.prototype.setImage=function(r){for(var n=this.getAlignment(),i=n===pt.Center?Oi.Center:n===pt.Right?Oi.Right:Oi.Left,o=this.acroField.getWidgets(),a=0,s=o.length;a<s;a++){var u=o[a],l=this.createImageAppearanceStream(u,r,i);this.updateWidgetAppearances(u,{normal:l})}this.markAsClean()},t.prototype.setFontSize=function(r){Ed(r,"fontSize"),this.acroField.setFontSize(r),this.markAsDirty()},t.prototype.isMultiline=function(){return this.acroField.hasFlag(Ye.Multiline)},t.prototype.enableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(Ye.Multiline,!0)},t.prototype.disableMultiline=function(){this.markAsDirty(),this.acroField.setFlagTo(Ye.Multiline,!1)},t.prototype.isPassword=function(){return this.acroField.hasFlag(Ye.Password)},t.prototype.enablePassword=function(){this.acroField.setFlagTo(Ye.Password,!0)},t.prototype.disablePassword=function(){this.acroField.setFlagTo(Ye.Password,!1)},t.prototype.isFileSelector=function(){return this.acroField.hasFlag(Ye.FileSelect)},t.prototype.enableFileSelection=function(){this.acroField.setFlagTo(Ye.FileSelect,!0)},t.prototype.disableFileSelection=function(){this.acroField.setFlagTo(Ye.FileSelect,!1)},t.prototype.isSpellChecked=function(){return!this.acroField.hasFlag(Ye.DoNotSpellCheck)},t.prototype.enableSpellChecking=function(){this.acroField.setFlagTo(Ye.DoNotSpellCheck,!1)},t.prototype.disableSpellChecking=function(){this.acroField.setFlagTo(Ye.DoNotSpellCheck,!0)},t.prototype.isScrollable=function(){return!this.acroField.hasFlag(Ye.DoNotScroll)},t.prototype.enableScrolling=function(){this.acroField.setFlagTo(Ye.DoNotScroll,!1)},t.prototype.disableScrolling=function(){this.acroField.setFlagTo(Ye.DoNotScroll,!0)},t.prototype.isCombed=function(){return this.acroField.hasFlag(Ye.Comb)&&!this.isMultiline()&&!this.isPassword()&&!this.isFileSelector()&&this.getMaxLength()!==void 0},t.prototype.enableCombing=function(){if(this.getMaxLength()===void 0){var r="PDFTextFields must have a max length in order to be combed";console.warn(r)}this.markAsDirty(),this.disableMultiline(),this.disablePassword(),this.disableFileSelection(),this.acroField.setFlagTo(Ye.Comb,!0)},t.prototype.disableCombing=function(){this.markAsDirty(),this.acroField.setFlagTo(Ye.Comb,!1)},t.prototype.isRichFormatted=function(){return this.acroField.hasFlag(Ye.RichText)},t.prototype.enableRichFormatting=function(){this.acroField.setFlagTo(Ye.RichText,!0)},t.prototype.disableRichFormatting=function(){this.acroField.setFlagTo(Ye.RichText,!1)},t.prototype.addToPage=function(r,n){var i,o,a,s,u,l,c;A(r,"page",[[_r,"PDFPage"]]),Xa(n),n||(n={}),"textColor"in n||(n.textColor=Le(0,0,0)),"backgroundColor"in n||(n.backgroundColor=Le(1,1,1)),"borderColor"in n||(n.borderColor=Le(0,0,0)),"borderWidth"in n||(n.borderWidth=1);var d=this.createWidget({x:(i=n.x)!==null&&i!==void 0?i:0,y:(o=n.y)!==null&&o!==void 0?o:0,width:(a=n.width)!==null&&a!==void 0?a:200,height:(s=n.height)!==null&&s!==void 0?s:50,textColor:n.textColor,backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:(u=n.borderWidth)!==null&&u!==void 0?u:0,rotate:(l=n.rotate)!==null&&l!==void 0?l:ie(0),hidden:n.hidden,page:r.ref}),h=this.doc.context.register(d.dict);this.acroField.addWidget(h);var f=(c=n.font)!==null&&c!==void 0?c:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(d,f),r.node.addAnnot(h)},t.prototype.needsAppearancesUpdate=function(){var r;if(this.isDirty())return!0;for(var n=this.acroField.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=((r=a.getAppearances())===null||r===void 0?void 0:r.normal)instanceof mr;if(!s)return!0}return!1},t.prototype.defaultUpdateAppearances=function(r){A(r,"font",[[xr,"PDFFont"]]),this.updateAppearances(r)},t.prototype.updateAppearances=function(r,n){A(r,"font",[[xr,"PDFFont"]]),M(n,"provider",[Function]);for(var i=this.acroField.getWidgets(),o=0,a=i.length;o<a;o++){var s=i[o];this.updateWidgetAppearance(s,r,n)}this.markAsClean()},t.prototype.updateWidgetAppearance=function(r,n,i){var o=i!=null?i:VT,a=qa(o(this,r,n));this.updateWidgetAppearanceWithFont(r,n,a)},t.of=function(r,n,i){return new t(r,n,i)},t}(Bo),Yc;(function(e){e.Courier="Courier",e.CourierBold="Courier-Bold",e.CourierOblique="Courier-Oblique",e.CourierBoldOblique="Courier-BoldOblique",e.Helvetica="Helvetica",e.HelveticaBold="Helvetica-Bold",e.HelveticaOblique="Helvetica-Oblique",e.HelveticaBoldOblique="Helvetica-BoldOblique",e.TimesRoman="Times-Roman",e.TimesRomanBold="Times-Bold",e.TimesRomanItalic="Times-Italic",e.TimesRomanBoldItalic="Times-BoldItalic",e.Symbol="Symbol",e.ZapfDingbats="ZapfDingbats"})(Yc||(Yc={}));var WT=function(){function e(t,r){var n=this;this.embedDefaultFont=function(){return n.doc.embedStandardFont(Yc.Helvetica)},A(t,"acroForm",[[Wc,"PDFAcroForm"]]),A(r,"doc",[[Ki,"PDFDocument"]]),this.acroForm=t,this.doc=r,this.dirtyFields=new Set,this.defaultFontCache=Vn.populatedBy(this.embedDefaultFont)}return e.prototype.hasXFA=function(){return this.acroForm.dict.has(C.of("XFA"))},e.prototype.deleteXFA=function(){this.acroForm.dict.delete(C.of("XFA"))},e.prototype.getFields=function(){for(var t=this.acroForm.getAllFields(),r=[],n=0,i=t.length;n<i;n++){var o=t[n],a=o[0],s=o[1],u=KT(a,s,this.doc);u&&r.push(u)}return r},e.prototype.getFieldMaybe=function(t){A(t,"name",["string"]);for(var r=this.getFields(),n=0,i=r.length;n<i;n++){var o=r[n];if(o.getName()===t)return o}},e.prototype.getField=function(t){A(t,"name",["string"]);var r=this.getFieldMaybe(t);if(r)return r;throw new ET(t)},e.prototype.getButton=function(t){A(t,"name",["string"]);var r=this.getField(t);if(r instanceof Yu)return r;throw new $i(t,Yu,r)},e.prototype.getCheckBox=function(t){A(t,"name",["string"]);var r=this.getField(t);if(r instanceof Ss)return r;throw new $i(t,Ss,r)},e.prototype.getDropdown=function(t){A(t,"name",["string"]);var r=this.getField(t);if(r instanceof Xu)return r;throw new $i(t,Xu,r)},e.prototype.getOptionList=function(t){A(t,"name",["string"]);var r=this.getField(t);if(r instanceof Gu)return r;throw new $i(t,Gu,r)},e.prototype.getRadioGroup=function(t){A(t,"name",["string"]);var r=this.getField(t);if(r instanceof Cs)return r;throw new $i(t,Cs,r)},e.prototype.getSignature=function(t){A(t,"name",["string"]);var r=this.getField(t);if(r instanceof dp)return r;throw new $i(t,dp,r)},e.prototype.getTextField=function(t){A(t,"name",["string"]);var r=this.getField(t);if(r instanceof Zu)return r;throw new $i(t,Zu,r)},e.prototype.createButton=function(t){A(t,"name",["string"]);var r=jo(t),n=this.findOrCreateNonTerminals(r.nonTerminal),i=Ad.create(this.doc.context);return i.setPartialName(r.terminal),Ho(n,[i,i.ref],r.terminal),Yu.of(i,i.ref,this.doc)},e.prototype.createCheckBox=function(t){A(t,"name",["string"]);var r=jo(t),n=this.findOrCreateNonTerminals(r.nonTerminal),i=zd.create(this.doc.context);return i.setPartialName(r.terminal),Ho(n,[i,i.ref],r.terminal),Ss.of(i,i.ref,this.doc)},e.prototype.createDropdown=function(t){A(t,"name",["string"]);var r=jo(t),n=this.findOrCreateNonTerminals(r.nonTerminal),i=_d.create(this.doc.context);return i.setPartialName(r.terminal),Ho(n,[i,i.ref],r.terminal),Xu.of(i,i.ref,this.doc)},e.prototype.createOptionList=function(t){A(t,"name",["string"]);var r=jo(t),n=this.findOrCreateNonTerminals(r.nonTerminal),i=Od.create(this.doc.context);return i.setPartialName(r.terminal),Ho(n,[i,i.ref],r.terminal),Gu.of(i,i.ref,this.doc)},e.prototype.createRadioGroup=function(t){A(t,"name",["string"]);var r=jo(t),n=this.findOrCreateNonTerminals(r.nonTerminal),i=Dd.create(this.doc.context);return i.setPartialName(r.terminal),Ho(n,[i,i.ref],r.terminal),Cs.of(i,i.ref,this.doc)},e.prototype.createTextField=function(t){A(t,"name",["string"]);var r=jo(t),n=this.findOrCreateNonTerminals(r.nonTerminal),i=Pd.create(this.doc.context);return i.setPartialName(r.terminal),Ho(n,[i,i.ref],r.terminal),Zu.of(i,i.ref,this.doc)},e.prototype.flatten=function(t){t===void 0&&(t={updateFieldAppearances:!0}),t.updateFieldAppearances&&this.updateFieldAppearances();for(var r=this.getFields(),n=0,i=r.length;n<i;n++){for(var o=r[n],a=o.acroField.getWidgets(),s=0,u=a.length;s<u;s++){var l=a[s],c=this.findWidgetPage(l),d=this.findWidgetAppearanceRef(o,l),h=c.node.newXObject("FlatWidget",d),f=l.getRectangle(),v=Fe([mt(),Dr(f.x,f.y)],Qi(ce(ce({},f),{rotation:0})),[j0(h),yt()]).filter(Boolean);c.pushOperators.apply(c,v)}this.removeField(o)}},e.prototype.removeField=function(t){for(var r=t.acroField.getWidgets(),n=new Set,i=0,o=r.length;i<o;i++){var a=r[i],s=this.findWidgetAppearanceRef(t,a),u=this.findWidgetPage(a);n.add(u),u.node.removeAnnot(s)}n.forEach(function(f){return f.node.removeAnnot(t.ref)}),this.acroForm.removeField(t.acroField);for(var l=t.acroField.normalizedEntries().Kids,c=l.size(),d=0;d<c;d++){var h=l.get(d);h instanceof Me&&this.doc.context.delete(h)}this.doc.context.delete(t.ref)},e.prototype.updateFieldAppearances=function(t){M(t,"font",[[xr,"PDFFont"]]),t=t!=null?t:this.getDefaultFont();for(var r=this.getFields(),n=0,i=r.length;n<i;n++){var o=r[n];o.needsAppearancesUpdate()&&o.defaultUpdateAppearances(t)}},e.prototype.markFieldAsDirty=function(t){M(t,"fieldRef",[[Me,"PDFRef"]]),this.dirtyFields.add(t)},e.prototype.markFieldAsClean=function(t){M(t,"fieldRef",[[Me,"PDFRef"]]),this.dirtyFields.delete(t)},e.prototype.fieldIsDirty=function(t){return M(t,"fieldRef",[[Me,"PDFRef"]]),this.dirtyFields.has(t)},e.prototype.getDefaultFont=function(){return this.defaultFontCache.access()},e.prototype.findWidgetPage=function(t){var r=t.P(),n=this.doc.getPages().find(function(o){return o.ref===r});if(n===void 0){var i=this.doc.context.getObjectRef(t.dict);if(i===void 0)throw new Error("Could not find PDFRef for PDFObject");if(n=this.doc.findPageForAnnotationRef(i),n===void 0)throw new Error("Could not find page for PDFRef "+i)}return n},e.prototype.findWidgetAppearanceRef=function(t,r){var n,i=r.getNormalAppearance();if(i instanceof he&&(t instanceof Ss||t instanceof Cs)){var o=t.acroField.getValue(),a=(n=i.get(o))!==null&&n!==void 0?n:i.get(C.of("Off"));a instanceof Me&&(i=a)}if(!(i instanceof Me)){var s=t.getName();throw new Error("Failed to extract appearance ref for: "+s)}return i},e.prototype.findOrCreateNonTerminals=function(t){for(var r=[this.acroForm],n=0,i=t.length;n<i;n++){var o=t[n];if(!o)throw new TT(o);var a=r[0],s=r[1],u=this.findNonTerminal(o,a);if(u)r=u;else{var l=Hc.create(this.doc.context);l.setPartialName(o),l.setParent(s);var c=this.doc.context.register(l.dict);a.addField(c),r=[l,c]}}return r},e.prototype.findNonTerminal=function(t,r){for(var n=r instanceof Wc?this.acroForm.getFields():B0(r.Kids()),i=0,o=n.length;i<o;i++){var a=n[i],s=a[0],u=a[1];if(s.getPartialName()===t){if(s instanceof Hc)return[s,u];throw new Vx(t)}}},e.of=function(t,r){return new e(t,r)},e}(),KT=function(e,t,r){if(e instanceof Ad)return Yu.of(e,t,r);if(e instanceof zd)return Ss.of(e,t,r);if(e instanceof _d)return Xu.of(e,t,r);if(e instanceof Od)return Gu.of(e,t,r);if(e instanceof Pd)return Zu.of(e,t,r);if(e instanceof Dd)return Cs.of(e,t,r);if(e instanceof R0)return dp.of(e,t,r)},jo=function(e){if(e.length===0)throw new Error("PDF field names must not be empty strings");for(var t=e.split("."),r=0,n=t.length;r<n;r++)if(t[r]==="")throw new Error('Periods in PDF field names must be separated by at least one character: "'+e+'"');return t.length===1?{nonTerminal:[],terminal:t[0]}:{nonTerminal:t.slice(0,t.length-1),terminal:t[t.length-1]}},Ho=function(e,t,r){for(var n=e[0],i=e[1],o=t[0],a=t[1],s=n.normalizedEntries(),u=B0("Kids"in s?s.Kids:s.Fields),l=0,c=u.length;l<c;l++)if(u[l][0].getPartialName()===r)throw new Vx(r);n.addField(a),o.setParent(i)},qT={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],Executive:[521.86,756],Folio:[612,936],Legal:[612,1008],Letter:[612,792],Tabloid:[792,1224]},hp;(function(e){e[e.Fastest=1/0]="Fastest",e[e.Fast=1500]="Fast",e[e.Medium=500]="Medium",e[e.Slow=100]="Slow"})(hp||(hp={}));var XT=function(){function e(t,r,n){this.alreadyEmbedded=!1,this.ref=t,this.doc=r,this.embedder=n}return e.prototype.embed=function(){return fe(this,void 0,void 0,function(){var t,r,n,i,o;return pe(this,function(a){switch(a.label){case 0:return this.alreadyEmbedded?[3,2]:[4,this.embedder.embedIntoContext(this.doc.context,this.ref)];case 1:t=a.sent(),this.doc.catalog.has(C.of("Names"))||this.doc.catalog.set(C.of("Names"),this.doc.context.obj({})),r=this.doc.catalog.lookup(C.of("Names"),he),r.has(C.of("EmbeddedFiles"))||r.set(C.of("EmbeddedFiles"),this.doc.context.obj({})),n=r.lookup(C.of("EmbeddedFiles"),he),n.has(C.of("Names"))||n.set(C.of("Names"),this.doc.context.obj([])),i=n.lookup(C.of("Names"),_e),i.push(re.fromText(this.embedder.fileName)),i.push(t),this.doc.catalog.has(C.of("AF"))||this.doc.catalog.set(C.of("AF"),this.doc.context.obj([])),o=this.doc.catalog.lookup(C.of("AF"),_e),o.push(t),this.alreadyEmbedded=!0,a.label=2;case 2:return[2]}})})},e.of=function(t,r,n){return new e(t,r,n)},e}(),GT=function(){function e(t,r,n){this.alreadyEmbedded=!1,this.ref=t,this.doc=r,this.embedder=n}return e.prototype.embed=function(){return fe(this,void 0,void 0,function(){var t,r,n,i,o,a,s;return pe(this,function(u){switch(u.label){case 0:return this.alreadyEmbedded?[3,2]:(t=this.doc,r=t.catalog,n=t.context,[4,this.embedder.embedIntoContext(this.doc.context,this.ref)]);case 1:i=u.sent(),r.has(C.of("Names"))||r.set(C.of("Names"),n.obj({})),o=r.lookup(C.of("Names"),he),o.has(C.of("JavaScript"))||o.set(C.of("JavaScript"),n.obj({})),a=o.lookup(C.of("JavaScript"),he),a.has(C.of("Names"))||a.set(C.of("Names"),n.obj([])),s=a.lookup(C.of("Names"),_e),s.push(re.fromText(this.embedder.scriptName)),s.push(i),this.alreadyEmbedded=!0,u.label=2;case 2:return[2]}})})},e.of=function(t,r,n){return new e(t,r,n)},e}(),ZT=function(){function e(t,r){this.script=t,this.scriptName=r}return e.for=function(t,r){return new e(t,r)},e.prototype.embedIntoContext=function(t,r){return fe(this,void 0,void 0,function(){var n;return pe(this,function(i){return n=t.obj({Type:"Action",S:"JavaScript",JS:re.fromText(this.script)}),r?(t.assign(r,n),[2,r]):[2,t.register(n)]})})},e}(),Ki=function(){function e(t,r,n){var i=this;if(this.defaultWordBreaks=[" "],this.computePages=function(){var o=[];return i.catalog.Pages().traverse(function(a,s){if(a instanceof jn){var u=i.pageMap.get(a);u||(u=_r.of(a,s,i),i.pageMap.set(a,u)),o.push(u)}}),o},this.getOrCreateForm=function(){var o=i.catalog.getOrCreateAcroForm();return WT.of(o,i)},A(t,"context",[[op,"PDFContext"]]),A(r,"ignoreEncryption",["boolean"]),this.context=t,this.catalog=t.lookup(t.trailerInfo.Root),this.isEncrypted=!!t.lookup(t.trailerInfo.Encrypt),this.pageCache=Vn.populatedBy(this.computePages),this.pageMap=new Map,this.formCache=Vn.populatedBy(this.getOrCreateForm),this.fonts=[],this.images=[],this.embeddedPages=[],this.embeddedFiles=[],this.javaScripts=[],!r&&this.isEncrypted)throw new kT;n&&this.updateInfoDict()}return e.load=function(t,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var n,i,o,a,s,u,l,c,d,h,f,v;return pe(this,function(p){switch(p.label){case 0:return n=r.ignoreEncryption,i=n===void 0?!1:n,o=r.parseSpeed,a=o===void 0?hp.Slow:o,s=r.throwOnInvalidObject,u=s===void 0?!1:s,l=r.updateMetadata,c=l===void 0?!0:l,d=r.capNumbers,h=d===void 0?!1:d,A(t,"pdf",["string",Uint8Array,ArrayBuffer]),A(i,"ignoreEncryption",["boolean"]),A(a,"parseSpeed",["number"]),A(u,"throwOnInvalidObject",["boolean"]),f=as(t),[4,QE.forBytesWithOptions(f,a,u,h).parseDocument()];case 1:return v=p.sent(),[2,new e(v,i,c)]}})})},e.create=function(t){return t===void 0&&(t={}),fe(this,void 0,void 0,function(){var r,n,i,o,a,s;return pe(this,function(u){return r=t.updateMetadata,n=r===void 0?!0:r,i=op.create(),o=Sx.withContext(i),a=i.register(o),s=kx.withContextAndPages(i,a),i.trailerInfo.Root=i.register(s),[2,new e(i,!1,n)]})})},e.prototype.registerFontkit=function(t){this.fontkit=t},e.prototype.getForm=function(){var t=this.formCache.access();return t.hasXFA()&&(console.warn("Removing XFA form data as pdf-lib does not support reading or writing XFA"),t.deleteXFA()),t},e.prototype.getTitle=function(){var t=this.getInfoDict().lookup(C.Title);if(!!t)return ai(t),t.decodeText()},e.prototype.getAuthor=function(){var t=this.getInfoDict().lookup(C.Author);if(!!t)return ai(t),t.decodeText()},e.prototype.getSubject=function(){var t=this.getInfoDict().lookup(C.Subject);if(!!t)return ai(t),t.decodeText()},e.prototype.getKeywords=function(){var t=this.getInfoDict().lookup(C.Keywords);if(!!t)return ai(t),t.decodeText()},e.prototype.getCreator=function(){var t=this.getInfoDict().lookup(C.Creator);if(!!t)return ai(t),t.decodeText()},e.prototype.getProducer=function(){var t=this.getInfoDict().lookup(C.Producer);if(!!t)return ai(t),t.decodeText()},e.prototype.getCreationDate=function(){var t=this.getInfoDict().lookup(C.CreationDate);if(!!t)return ai(t),t.decodeDate()},e.prototype.getModificationDate=function(){var t=this.getInfoDict().lookup(C.ModDate);if(!!t)return ai(t),t.decodeDate()},e.prototype.setTitle=function(t,r){A(t,"title",["string"]);var n=C.of("Title");if(this.getInfoDict().set(n,re.fromText(t)),r!=null&&r.showInWindowTitleBar){var i=this.catalog.getOrCreateViewerPreferences();i.setDisplayDocTitle(!0)}},e.prototype.setAuthor=function(t){A(t,"author",["string"]);var r=C.of("Author");this.getInfoDict().set(r,re.fromText(t))},e.prototype.setSubject=function(t){A(t,"author",["string"]);var r=C.of("Subject");this.getInfoDict().set(r,re.fromText(t))},e.prototype.setKeywords=function(t){A(t,"keywords",[Array]);var r=C.of("Keywords");this.getInfoDict().set(r,re.fromText(t.join(" ")))},e.prototype.setCreator=function(t){A(t,"creator",["string"]);var r=C.of("Creator");this.getInfoDict().set(r,re.fromText(t))},e.prototype.setProducer=function(t){A(t,"creator",["string"]);var r=C.of("Producer");this.getInfoDict().set(r,re.fromText(t))},e.prototype.setLanguage=function(t){A(t,"language",["string"]);var r=C.of("Lang");this.catalog.set(r,Ie.of(t))},e.prototype.setCreationDate=function(t){A(t,"creationDate",[[Date,"Date"]]);var r=C.of("CreationDate");this.getInfoDict().set(r,Ie.fromDate(t))},e.prototype.setModificationDate=function(t){A(t,"modificationDate",[[Date,"Date"]]);var r=C.of("ModDate");this.getInfoDict().set(r,Ie.fromDate(t))},e.prototype.getPageCount=function(){return this.pageCount===void 0&&(this.pageCount=this.getPages().length),this.pageCount},e.prototype.getPages=function(){return this.pageCache.access()},e.prototype.getPage=function(t){var r=this.getPages();return pr(t,"index",0,r.length-1),r[t]},e.prototype.getPageIndices=function(){return m8(0,this.getPageCount())},e.prototype.removePage=function(t){var r=this.getPageCount();if(this.pageCount===0)throw new FT;pr(t,"index",0,r-1),this.catalog.removeLeafNode(t),this.pageCount=r-1},e.prototype.addPage=function(t){return A(t,"page",["undefined",[_r,"PDFPage"],Array]),this.insertPage(this.getPageCount(),t)},e.prototype.insertPage=function(t,r){var n=this.getPageCount();if(pr(t,"index",0,n),A(r,"page",["undefined",[_r,"PDFPage"],Array]),!r||Array.isArray(r)){var i=Array.isArray(r)?r:qT.A4;r=_r.create(this),r.setSize.apply(r,i)}else if(r.doc!==this)throw new CT;var o=this.catalog.insertLeafNode(r.ref,t);return r.node.setParent(o),this.pageMap.set(r.node,r),this.pageCache.invalidate(),this.pageCount=n+1,r},e.prototype.copyPages=function(t,r){return fe(this,void 0,void 0,function(){var n,i,o,a,s,u,l,c;return pe(this,function(d){switch(d.label){case 0:return A(t,"srcDoc",[[e,"PDFDocument"]]),A(r,"indices",[Array]),[4,t.flush()];case 1:for(d.sent(),n=Hm.for(t.context,this.context),i=t.getPages(),o=new Array(r.length),a=0,s=r.length;a<s;a++)u=i[r[a]],l=n.copy(u.node),c=this.context.register(l),o[a]=_r.of(l,c,this);return[2,o]}})})},e.prototype.copy=function(){return fe(this,void 0,void 0,function(){var t,r,n,i;return pe(this,function(o){switch(o.label){case 0:return[4,e.create()];case 1:return t=o.sent(),[4,t.copyPages(this,this.getPageIndices())];case 2:for(r=o.sent(),n=0,i=r.length;n<i;n++)t.addPage(r[n]);return this.getAuthor()!==void 0&&t.setAuthor(this.getAuthor()),this.getCreationDate()!==void 0&&t.setCreationDate(this.getCreationDate()),this.getCreator()!==void 0&&t.setCreator(this.getCreator()),this.getModificationDate()!==void 0&&t.setModificationDate(this.getModificationDate()),this.getProducer()!==void 0&&t.setProducer(this.getProducer()),this.getSubject()!==void 0&&t.setSubject(this.getSubject()),this.getTitle()!==void 0&&t.setTitle(this.getTitle()),t.defaultWordBreaks=this.defaultWordBreaks,[2,t]}})})},e.prototype.addJavaScript=function(t,r){A(t,"name",["string"]),A(r,"script",["string"]);var n=ZT.for(r,t),i=this.context.nextRef(),o=GT.of(i,this,n);this.javaScripts.push(o)},e.prototype.attach=function(t,r,n){return n===void 0&&(n={}),fe(this,void 0,void 0,function(){var i,o,a,s;return pe(this,function(u){return A(t,"attachment",["string",Uint8Array,ArrayBuffer]),A(r,"name",["string"]),M(n.mimeType,"mimeType",["string"]),M(n.description,"description",["string"]),M(n.creationDate,"options.creationDate",[Date]),M(n.modificationDate,"options.modificationDate",[Date]),Fr(n.afRelationship,"options.afRelationship",ap),i=as(t),o=SE.for(i,r,n),a=this.context.nextRef(),s=XT.of(a,this,o),this.embeddedFiles.push(s),[2]})})},e.prototype.embedFont=function(t,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var n,i,o,a,s,u,l,c,d,h;return pe(this,function(f){switch(f.label){case 0:return n=r.subset,i=n===void 0?!1:n,o=r.customName,a=r.features,A(t,"font",["string",Uint8Array,ArrayBuffer]),A(i,"subset",["boolean"]),Rm(t)?(s=Vc.for(t,o),[3,7]):[3,1];case 1:return b8(t)?(u=as(t),l=this.assertFontkit(),i?[4,kE.for(l,u,o,a)]:[3,3]):[3,6];case 2:return c=f.sent(),[3,5];case 3:return[4,D0.for(l,u,o,a)];case 4:c=f.sent(),f.label=5;case 5:return s=c,[3,7];case 6:throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");case 7:return d=this.context.nextRef(),h=xr.of(d,this,s),this.fonts.push(h),[2,h]}})})},e.prototype.embedStandardFont=function(t,r){if(A(t,"font",["string"]),!Rm(t))throw new TypeError("`font` must be one of type `StandardFonts`");var n=Vc.for(t,r),i=this.context.nextRef(),o=xr.of(i,this,n);return this.fonts.push(o),o},e.prototype.embedJpg=function(t){return fe(this,void 0,void 0,function(){var r,n,i,o;return pe(this,function(a){switch(a.label){case 0:return A(t,"jpg",["string",Uint8Array,ArrayBuffer]),r=as(t),[4,fx.for(r)];case 1:return n=a.sent(),i=this.context.nextRef(),o=cp.of(i,this,n),this.images.push(o),[2,o]}})})},e.prototype.embedPng=function(t){return fe(this,void 0,void 0,function(){var r,n,i,o;return pe(this,function(a){switch(a.label){case 0:return A(t,"png",["string",Uint8Array,ArrayBuffer]),r=as(t),[4,px.for(r)];case 1:return n=a.sent(),i=this.context.nextRef(),o=cp.of(i,this,n),this.images.push(o),[2,o]}})})},e.prototype.embedPdf=function(t,r){return r===void 0&&(r=[0]),fe(this,void 0,void 0,function(){var n,i,o;return pe(this,function(a){switch(a.label){case 0:return A(t,"pdf",["string",Uint8Array,ArrayBuffer,[e,"PDFDocument"]]),A(r,"indices",[Array]),t instanceof e?(i=t,[3,3]):[3,1];case 1:return[4,e.load(t)];case 2:i=a.sent(),a.label=3;case 3:return n=i,o=y8(n.getPages(),r),[2,this.embedPages(o)]}})})},e.prototype.embedPage=function(t,r,n){return fe(this,void 0,void 0,function(){var i;return pe(this,function(o){switch(o.label){case 0:return A(t,"page",[[_r,"PDFPage"]]),[4,this.embedPages([t],[r],[n])];case 1:return i=o.sent()[0],[2,i]}})})},e.prototype.embedPages=function(t,r,n){return r===void 0&&(r=[]),n===void 0&&(n=[]),fe(this,void 0,void 0,function(){var l,c,i,o,a,s,u,l,c,d,h,f,v,p,b;return pe(this,function(g){switch(g.label){case 0:if(t.length===0)return[2,[]];for(l=0,c=t.length-1;l<c;l++)if(i=t[l],o=t[l+1],i.node.context!==o.node.context)throw new ZF;a=t[0].node.context,s=a===this.context?function(y){return y}:Hm.for(a,this.context).copy,u=new Array(t.length),l=0,c=t.length,g.label=1;case 1:return l<c?(d=s(t[l].node),h=r[l],f=n[l],[4,mx.for(d,h,f)]):[3,4];case 2:v=g.sent(),p=this.context.nextRef(),u[l]=qx.of(p,this,v),g.label=3;case 3:return l++,[3,1];case 4:return(b=this.embeddedPages).push.apply(b,u),[2,u]}})})},e.prototype.flush=function(){return fe(this,void 0,void 0,function(){return pe(this,function(t){switch(t.label){case 0:return[4,this.embedAll(this.fonts)];case 1:return t.sent(),[4,this.embedAll(this.images)];case 2:return t.sent(),[4,this.embedAll(this.embeddedPages)];case 3:return t.sent(),[4,this.embedAll(this.embeddedFiles)];case 4:return t.sent(),[4,this.embedAll(this.javaScripts)];case 5:return t.sent(),[2]}})})},e.prototype.save=function(t){return t===void 0&&(t={}),fe(this,void 0,void 0,function(){var r,n,i,o,a,s,u,l,c,d;return pe(this,function(h){switch(h.label){case 0:return r=t.useObjectStreams,n=r===void 0?!0:r,i=t.addDefaultPage,o=i===void 0?!0:i,a=t.objectsPerTick,s=a===void 0?50:a,u=t.updateFieldAppearances,l=u===void 0?!0:u,A(n,"useObjectStreams",["boolean"]),A(o,"addDefaultPage",["boolean"]),A(s,"objectsPerTick",["number"]),A(l,"updateFieldAppearances",["boolean"]),o&&this.getPageCount()===0&&this.addPage(),l&&(c=this.formCache.getValue(),c&&c.updateFieldAppearances()),[4,this.flush()];case 1:return h.sent(),d=n?gE:dx,[2,d.forContext(this.context,s).serializeToBuffer()]}})})},e.prototype.saveAsBase64=function(t){return t===void 0&&(t={}),fe(this,void 0,void 0,function(){var r,n,i,o,a;return pe(this,function(s){switch(s.label){case 0:return r=t.dataUri,n=r===void 0?!1:r,i=e8(t,["dataUri"]),A(n,"dataUri",["boolean"]),[4,this.save(i)];case 1:return o=s.sent(),a=t8(o),[2,n?"data:application/pdf;base64,"+a:a]}})})},e.prototype.findPageForAnnotationRef=function(t){for(var r=this.getPages(),n=0,i=r.length;n<i;n++){var o=r[n],a=o.node.Annots();if((a==null?void 0:a.indexOf(t))!==void 0)return o}},e.prototype.embedAll=function(t){return fe(this,void 0,void 0,function(){var r,n;return pe(this,function(i){switch(i.label){case 0:r=0,n=t.length,i.label=1;case 1:return r<n?[4,t[r].embed()]:[3,4];case 2:i.sent(),i.label=3;case 3:return r++,[3,1];case 4:return[2]}})})},e.prototype.updateInfoDict=function(){var t="pdf-lib (https://github.com/Hopding/pdf-lib)",r=new Date,n=this.getInfoDict();this.setProducer(t),this.setModificationDate(r),n.get(C.of("Creator"))||this.setCreator(t),n.get(C.of("CreationDate"))||this.setCreationDate(r)},e.prototype.getInfoDict=function(){var t=this.context.lookup(this.context.trailerInfo.Info);if(t instanceof he)return t;var r=this.context.obj({});return this.context.trailerInfo.Info=this.context.register(r),r},e.prototype.assertFontkit=function(){if(!this.fontkit)throw new ST;return this.fontkit},e}();function ai(e){if(!(e instanceof re)&&!(e instanceof Ie))throw new Lc([re,Ie],e)}var An;(function(e){e.Normal="Normal",e.Multiply="Multiply",e.Screen="Screen",e.Overlay="Overlay",e.Darken="Darken",e.Lighten="Lighten",e.ColorDodge="ColorDodge",e.ColorBurn="ColorBurn",e.HardLight="HardLight",e.SoftLight="SoftLight",e.Difference="Difference",e.Exclusion="Exclusion"})(An||(An={}));var _r=function(){function e(t,r,n){this.fontSize=24,this.fontColor=Le(0,0,0),this.lineHeight=24,this.x=0,this.y=0,A(t,"leafNode",[[jn,"PDFPageLeaf"]]),A(r,"ref",[[Me,"PDFRef"]]),A(n,"doc",[[Ki,"PDFDocument"]]),this.node=t,this.ref=r,this.doc=n}return e.prototype.setRotation=function(t){var r=zx(t);ax(r,"degreesAngle",90),this.node.set(C.of("Rotate"),this.doc.context.obj(r))},e.prototype.getRotation=function(){var t=this.node.Rotate();return ie(t?t.asNumber():0)},e.prototype.setSize=function(t,r){A(t,"width",["number"]),A(r,"height",["number"]);var n=this.getMediaBox();this.setMediaBox(n.x,n.y,t,r);var i=this.getCropBox(),o=this.getBleedBox(),a=this.getTrimBox(),s=this.getArtBox(),u=this.node.CropBox(),l=this.node.BleedBox(),c=this.node.TrimBox(),d=this.node.ArtBox();u&&bu(i,n)&&this.setCropBox(n.x,n.y,t,r),l&&bu(o,n)&&this.setBleedBox(n.x,n.y,t,r),c&&bu(a,n)&&this.setTrimBox(n.x,n.y,t,r),d&&bu(s,n)&&this.setArtBox(n.x,n.y,t,r)},e.prototype.setWidth=function(t){A(t,"width",["number"]),this.setSize(t,this.getSize().height)},e.prototype.setHeight=function(t){A(t,"height",["number"]),this.setSize(this.getSize().width,t)},e.prototype.setMediaBox=function(t,r,n,i){A(t,"x",["number"]),A(r,"y",["number"]),A(n,"width",["number"]),A(i,"height",["number"]);var o=this.doc.context.obj([t,r,t+n,r+i]);this.node.set(C.MediaBox,o)},e.prototype.setCropBox=function(t,r,n,i){A(t,"x",["number"]),A(r,"y",["number"]),A(n,"width",["number"]),A(i,"height",["number"]);var o=this.doc.context.obj([t,r,t+n,r+i]);this.node.set(C.CropBox,o)},e.prototype.setBleedBox=function(t,r,n,i){A(t,"x",["number"]),A(r,"y",["number"]),A(n,"width",["number"]),A(i,"height",["number"]);var o=this.doc.context.obj([t,r,t+n,r+i]);this.node.set(C.BleedBox,o)},e.prototype.setTrimBox=function(t,r,n,i){A(t,"x",["number"]),A(r,"y",["number"]),A(n,"width",["number"]),A(i,"height",["number"]);var o=this.doc.context.obj([t,r,t+n,r+i]);this.node.set(C.TrimBox,o)},e.prototype.setArtBox=function(t,r,n,i){A(t,"x",["number"]),A(r,"y",["number"]),A(n,"width",["number"]),A(i,"height",["number"]);var o=this.doc.context.obj([t,r,t+n,r+i]);this.node.set(C.ArtBox,o)},e.prototype.getSize=function(){var t=this.getMediaBox(),r=t.width,n=t.height;return{width:r,height:n}},e.prototype.getWidth=function(){return this.getSize().width},e.prototype.getHeight=function(){return this.getSize().height},e.prototype.getMediaBox=function(){var t=this.node.MediaBox();return t.asRectangle()},e.prototype.getCropBox=function(){var t,r=this.node.CropBox();return(t=r==null?void 0:r.asRectangle())!==null&&t!==void 0?t:this.getMediaBox()},e.prototype.getBleedBox=function(){var t,r=this.node.BleedBox();return(t=r==null?void 0:r.asRectangle())!==null&&t!==void 0?t:this.getCropBox()},e.prototype.getTrimBox=function(){var t,r=this.node.TrimBox();return(t=r==null?void 0:r.asRectangle())!==null&&t!==void 0?t:this.getCropBox()},e.prototype.getArtBox=function(){var t,r=this.node.ArtBox();return(t=r==null?void 0:r.asRectangle())!==null&&t!==void 0?t:this.getCropBox()},e.prototype.translateContent=function(t,r){A(t,"x",["number"]),A(r,"y",["number"]),this.node.normalize(),this.getContentStream();var n=this.createContentStream(mt(),Dr(t,r)),i=this.doc.context.register(n),o=this.createContentStream(yt()),a=this.doc.context.register(o);this.node.wrapContentStreams(i,a)},e.prototype.scale=function(t,r){A(t,"x",["number"]),A(r,"y",["number"]),this.setSize(this.getWidth()*t,this.getHeight()*r),this.scaleContent(t,r),this.scaleAnnotations(t,r)},e.prototype.scaleContent=function(t,r){A(t,"x",["number"]),A(r,"y",["number"]),this.node.normalize(),this.getContentStream();var n=this.createContentStream(mt(),Cl(t,r)),i=this.doc.context.register(n),o=this.createContentStream(yt()),a=this.doc.context.register(o);this.node.wrapContentStreams(i,a)},e.prototype.scaleAnnotations=function(t,r){A(t,"x",["number"]),A(r,"y",["number"]);var n=this.node.Annots();if(!!n)for(var i=0;i<n.size();i++){var o=n.lookup(i);o instanceof he&&this.scaleAnnot(o,t,r)}},e.prototype.resetPosition=function(){this.getContentStream(!1),this.x=0,this.y=0},e.prototype.setFont=function(t){A(t,"font",[[xr,"PDFFont"]]),this.font=t,this.fontKey=this.node.newFontDictionary(this.font.name,this.font.ref)},e.prototype.setFontSize=function(t){A(t,"fontSize",["number"]),this.fontSize=t},e.prototype.setFontColor=function(t){A(t,"fontColor",[[Object,"Color"]]),this.fontColor=t},e.prototype.setLineHeight=function(t){A(t,"lineHeight",["number"]),this.lineHeight=t},e.prototype.getPosition=function(){return{x:this.x,y:this.y}},e.prototype.getX=function(){return this.x},e.prototype.getY=function(){return this.y},e.prototype.moveTo=function(t,r){A(t,"x",["number"]),A(r,"y",["number"]),this.x=t,this.y=r},e.prototype.moveDown=function(t){A(t,"yDecrease",["number"]),this.y-=t},e.prototype.moveUp=function(t){A(t,"yIncrease",["number"]),this.y+=t},e.prototype.moveLeft=function(t){A(t,"xDecrease",["number"]),this.x-=t},e.prototype.moveRight=function(t){A(t,"xIncrease",["number"]),this.x+=t},e.prototype.pushOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];ox(t,"operator",[[ke,"PDFOperator"]]);var n=this.getContentStream();n.push.apply(n,t)},e.prototype.drawText=function(t,r){var n,i,o,a,s,u,l;r===void 0&&(r={}),A(t,"text",["string"]),M(r.color,"options.color",[[Object,"Color"]]),Xr(r.opacity,"opacity.opacity",0,1),M(r.font,"options.font",[[xr,"PDFFont"]]),M(r.size,"options.size",["number"]),M(r.rotate,"options.rotate",[[Object,"Rotation"]]),M(r.xSkew,"options.xSkew",[[Object,"Rotation"]]),M(r.ySkew,"options.ySkew",[[Object,"Rotation"]]),M(r.x,"options.x",["number"]),M(r.y,"options.y",["number"]),M(r.lineHeight,"options.lineHeight",["number"]),M(r.maxWidth,"options.maxWidth",["number"]),M(r.wordBreaks,"options.wordBreaks",[Array]),Fr(r.blendMode,"options.blendMode",An);for(var c=this.setOrEmbedFont(r.font),d=c.oldFont,h=c.newFont,f=c.newFontKey,v=r.size||this.fontSize,p=r.wordBreaks||this.doc.defaultWordBreaks,b=function(T){return h.widthOfTextAtSize(T,v)},g=r.maxWidth===void 0?aw(Nl(t)):c8(t,p,r.maxWidth,b),y=new Array(g.length),w=0,x=g.length;w<x;w++)y[w]=h.encodeText(g[w]);var k=this.maybeEmbedGraphicsState({opacity:r.opacity,blendMode:r.blendMode}),E=this.getContentStream();E.push.apply(E,pT(y,{color:(n=r.color)!==null&&n!==void 0?n:this.fontColor,font:f,size:v,rotate:(i=r.rotate)!==null&&i!==void 0?i:ie(0),xSkew:(o=r.xSkew)!==null&&o!==void 0?o:ie(0),ySkew:(a=r.ySkew)!==null&&a!==void 0?a:ie(0),x:(s=r.x)!==null&&s!==void 0?s:this.x,y:(u=r.y)!==null&&u!==void 0?u:this.y,lineHeight:(l=r.lineHeight)!==null&&l!==void 0?l:this.lineHeight,graphicsState:k})),r.font&&(d?this.setFont(d):this.resetFont())},e.prototype.drawImage=function(t,r){var n,i,o,a,s,u,l;r===void 0&&(r={}),A(t,"image",[[cp,"PDFImage"]]),M(r.x,"options.x",["number"]),M(r.y,"options.y",["number"]),M(r.width,"options.width",["number"]),M(r.height,"options.height",["number"]),M(r.rotate,"options.rotate",[[Object,"Rotation"]]),M(r.xSkew,"options.xSkew",[[Object,"Rotation"]]),M(r.ySkew,"options.ySkew",[[Object,"Rotation"]]),Xr(r.opacity,"opacity.opacity",0,1),Fr(r.blendMode,"options.blendMode",An);var c=this.node.newXObject("Image",t.ref),d=this.maybeEmbedGraphicsState({opacity:r.opacity,blendMode:r.blendMode}),h=this.getContentStream();h.push.apply(h,Lx(c,{x:(n=r.x)!==null&&n!==void 0?n:this.x,y:(i=r.y)!==null&&i!==void 0?i:this.y,width:(o=r.width)!==null&&o!==void 0?o:t.size().width,height:(a=r.height)!==null&&a!==void 0?a:t.size().height,rotate:(s=r.rotate)!==null&&s!==void 0?s:ie(0),xSkew:(u=r.xSkew)!==null&&u!==void 0?u:ie(0),ySkew:(l=r.ySkew)!==null&&l!==void 0?l:ie(0),graphicsState:d}))},e.prototype.drawPage=function(t,r){var n,i,o,a,s;r===void 0&&(r={}),A(t,"embeddedPage",[[qx,"PDFEmbeddedPage"]]),M(r.x,"options.x",["number"]),M(r.y,"options.y",["number"]),M(r.xScale,"options.xScale",["number"]),M(r.yScale,"options.yScale",["number"]),M(r.width,"options.width",["number"]),M(r.height,"options.height",["number"]),M(r.rotate,"options.rotate",[[Object,"Rotation"]]),M(r.xSkew,"options.xSkew",[[Object,"Rotation"]]),M(r.ySkew,"options.ySkew",[[Object,"Rotation"]]),Xr(r.opacity,"opacity.opacity",0,1),Fr(r.blendMode,"options.blendMode",An);var u=this.node.newXObject("EmbeddedPdfPage",t.ref),l=this.maybeEmbedGraphicsState({opacity:r.opacity,blendMode:r.blendMode}),c=r.width!==void 0?r.width/t.width:r.xScale!==void 0?r.xScale:1,d=r.height!==void 0?r.height/t.height:r.yScale!==void 0?r.yScale:1,h=this.getContentStream();h.push.apply(h,vT(u,{x:(n=r.x)!==null&&n!==void 0?n:this.x,y:(i=r.y)!==null&&i!==void 0?i:this.y,xScale:c,yScale:d,rotate:(o=r.rotate)!==null&&o!==void 0?o:ie(0),xSkew:(a=r.xSkew)!==null&&a!==void 0?a:ie(0),ySkew:(s=r.ySkew)!==null&&s!==void 0?s:ie(0),graphicsState:l}))},e.prototype.drawSvgPath=function(t,r){var n,i,o,a,s,u,l,c,d;r===void 0&&(r={}),A(t,"path",["string"]),M(r.x,"options.x",["number"]),M(r.y,"options.y",["number"]),M(r.scale,"options.scale",["number"]),M(r.rotate,"options.rotate",[[Object,"Rotation"]]),M(r.borderWidth,"options.borderWidth",["number"]),M(r.color,"options.color",[[Object,"Color"]]),Xr(r.opacity,"opacity.opacity",0,1),M(r.borderColor,"options.borderColor",[[Object,"Color"]]),M(r.borderDashArray,"options.borderDashArray",[Array]),M(r.borderDashPhase,"options.borderDashPhase",["number"]),Fr(r.borderLineCap,"options.borderLineCap",aa),Xr(r.borderOpacity,"options.borderOpacity",0,1),Fr(r.blendMode,"options.blendMode",An);var h=this.maybeEmbedGraphicsState({opacity:r.opacity,borderOpacity:r.borderOpacity,blendMode:r.blendMode});!("color"in r)&&!("borderColor"in r)&&(r.borderColor=Le(0,0,0));var f=this.getContentStream();f.push.apply(f,bT(t,{x:(n=r.x)!==null&&n!==void 0?n:this.x,y:(i=r.y)!==null&&i!==void 0?i:this.y,scale:r.scale,rotate:(o=r.rotate)!==null&&o!==void 0?o:ie(0),color:(a=r.color)!==null&&a!==void 0?a:void 0,borderColor:(s=r.borderColor)!==null&&s!==void 0?s:void 0,borderWidth:(u=r.borderWidth)!==null&&u!==void 0?u:0,borderDashArray:(l=r.borderDashArray)!==null&&l!==void 0?l:void 0,borderDashPhase:(c=r.borderDashPhase)!==null&&c!==void 0?c:void 0,borderLineCap:(d=r.borderLineCap)!==null&&d!==void 0?d:void 0,graphicsState:h}))},e.prototype.drawLine=function(t){var r,n,i,o,a;A(t.start,"options.start",[[Object,"{ x: number, y: number }"]]),A(t.end,"options.end",[[Object,"{ x: number, y: number }"]]),A(t.start.x,"options.start.x",["number"]),A(t.start.y,"options.start.y",["number"]),A(t.end.x,"options.end.x",["number"]),A(t.end.y,"options.end.y",["number"]),M(t.thickness,"options.thickness",["number"]),M(t.color,"options.color",[[Object,"Color"]]),M(t.dashArray,"options.dashArray",[Array]),M(t.dashPhase,"options.dashPhase",["number"]),Fr(t.lineCap,"options.lineCap",aa),Xr(t.opacity,"opacity.opacity",0,1),Fr(t.blendMode,"options.blendMode",An);var s=this.maybeEmbedGraphicsState({borderOpacity:t.opacity,blendMode:t.blendMode});"color"in t||(t.color=Le(0,0,0));var u=this.getContentStream();u.push.apply(u,gT({start:t.start,end:t.end,thickness:(r=t.thickness)!==null&&r!==void 0?r:1,color:(n=t.color)!==null&&n!==void 0?n:void 0,dashArray:(i=t.dashArray)!==null&&i!==void 0?i:void 0,dashPhase:(o=t.dashPhase)!==null&&o!==void 0?o:void 0,lineCap:(a=t.lineCap)!==null&&a!==void 0?a:void 0,graphicsState:s}))},e.prototype.drawRectangle=function(t){var r,n,i,o,a,s,u,l,c,d,h,f,v;t===void 0&&(t={}),M(t.x,"options.x",["number"]),M(t.y,"options.y",["number"]),M(t.width,"options.width",["number"]),M(t.height,"options.height",["number"]),M(t.rotate,"options.rotate",[[Object,"Rotation"]]),M(t.xSkew,"options.xSkew",[[Object,"Rotation"]]),M(t.ySkew,"options.ySkew",[[Object,"Rotation"]]),M(t.borderWidth,"options.borderWidth",["number"]),M(t.color,"options.color",[[Object,"Color"]]),Xr(t.opacity,"opacity.opacity",0,1),M(t.borderColor,"options.borderColor",[[Object,"Color"]]),M(t.borderDashArray,"options.borderDashArray",[Array]),M(t.borderDashPhase,"options.borderDashPhase",["number"]),Fr(t.borderLineCap,"options.borderLineCap",aa),Xr(t.borderOpacity,"options.borderOpacity",0,1),Fr(t.blendMode,"options.blendMode",An);var p=this.maybeEmbedGraphicsState({opacity:t.opacity,borderOpacity:t.borderOpacity,blendMode:t.blendMode});!("color"in t)&&!("borderColor"in t)&&(t.color=Le(0,0,0));var b=this.getContentStream();b.push.apply(b,Ba({x:(r=t.x)!==null&&r!==void 0?r:this.x,y:(n=t.y)!==null&&n!==void 0?n:this.y,width:(i=t.width)!==null&&i!==void 0?i:150,height:(o=t.height)!==null&&o!==void 0?o:100,rotate:(a=t.rotate)!==null&&a!==void 0?a:ie(0),xSkew:(s=t.xSkew)!==null&&s!==void 0?s:ie(0),ySkew:(u=t.ySkew)!==null&&u!==void 0?u:ie(0),borderWidth:(l=t.borderWidth)!==null&&l!==void 0?l:0,color:(c=t.color)!==null&&c!==void 0?c:void 0,borderColor:(d=t.borderColor)!==null&&d!==void 0?d:void 0,borderDashArray:(h=t.borderDashArray)!==null&&h!==void 0?h:void 0,borderDashPhase:(f=t.borderDashPhase)!==null&&f!==void 0?f:void 0,graphicsState:p,borderLineCap:(v=t.borderLineCap)!==null&&v!==void 0?v:void 0}))},e.prototype.drawSquare=function(t){t===void 0&&(t={});var r=t.size;M(r,"size",["number"]),this.drawRectangle(ce(ce({},t),{width:r,height:r}))},e.prototype.drawEllipse=function(t){var r,n,i,o,a,s,u,l,c,d,h;t===void 0&&(t={}),M(t.x,"options.x",["number"]),M(t.y,"options.y",["number"]),M(t.xScale,"options.xScale",["number"]),M(t.yScale,"options.yScale",["number"]),M(t.rotate,"options.rotate",[[Object,"Rotation"]]),M(t.color,"options.color",[[Object,"Color"]]),Xr(t.opacity,"opacity.opacity",0,1),M(t.borderColor,"options.borderColor",[[Object,"Color"]]),Xr(t.borderOpacity,"options.borderOpacity",0,1),M(t.borderWidth,"options.borderWidth",["number"]),M(t.borderDashArray,"options.borderDashArray",[Array]),M(t.borderDashPhase,"options.borderDashPhase",["number"]),Fr(t.borderLineCap,"options.borderLineCap",aa),Fr(t.blendMode,"options.blendMode",An);var f=this.maybeEmbedGraphicsState({opacity:t.opacity,borderOpacity:t.borderOpacity,blendMode:t.blendMode});!("color"in t)&&!("borderColor"in t)&&(t.color=Le(0,0,0));var v=this.getContentStream();v.push.apply(v,up({x:(r=t.x)!==null&&r!==void 0?r:this.x,y:(n=t.y)!==null&&n!==void 0?n:this.y,xScale:(i=t.xScale)!==null&&i!==void 0?i:100,yScale:(o=t.yScale)!==null&&o!==void 0?o:100,rotate:(a=t.rotate)!==null&&a!==void 0?a:void 0,color:(s=t.color)!==null&&s!==void 0?s:void 0,borderColor:(u=t.borderColor)!==null&&u!==void 0?u:void 0,borderWidth:(l=t.borderWidth)!==null&&l!==void 0?l:0,borderDashArray:(c=t.borderDashArray)!==null&&c!==void 0?c:void 0,borderDashPhase:(d=t.borderDashPhase)!==null&&d!==void 0?d:void 0,borderLineCap:(h=t.borderLineCap)!==null&&h!==void 0?h:void 0,graphicsState:f}))},e.prototype.drawCircle=function(t){t===void 0&&(t={});var r=t.size,n=r===void 0?100:r;M(n,"size",["number"]),this.drawEllipse(ce(ce({},t),{xScale:n,yScale:n}))},e.prototype.setOrEmbedFont=function(t){var r=this.font,n=this.fontKey;t?this.setFont(t):this.getFont();var i=this.font,o=this.fontKey;return{oldFont:r,oldFontKey:n,newFont:i,newFontKey:o}},e.prototype.getFont=function(){if(!this.font||!this.fontKey){var t=this.doc.embedStandardFont(Yc.Helvetica);this.setFont(t)}return[this.font,this.fontKey]},e.prototype.resetFont=function(){this.font=void 0,this.fontKey=void 0},e.prototype.getContentStream=function(t){return t===void 0&&(t=!0),t&&this.contentStream?this.contentStream:(this.contentStream=this.createContentStream(),this.contentStreamRef=this.doc.context.register(this.contentStream),this.node.addContentStream(this.contentStreamRef),this.contentStream)},e.prototype.createContentStream=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=this.doc.context.obj({}),i=Hs.of(n,t);return i},e.prototype.maybeEmbedGraphicsState=function(t){var r=t.opacity,n=t.borderOpacity,i=t.blendMode;if(!(r===void 0&&n===void 0&&i===void 0)){var o=this.doc.context.obj({Type:"ExtGState",ca:r,CA:n,BM:i}),a=this.node.newExtGState("GS",o);return a}},e.prototype.scaleAnnot=function(t,r,n){for(var i=["RD","CL","Vertices","QuadPoints","L","Rect"],o=0,a=i.length;o<a;o++){var s=t.lookup(C.of(i[o]));s instanceof _e&&s.scalePDFNumbers(r,n)}var u=t.lookup(C.of("InkList"));if(u instanceof _e)for(var o=0,a=u.size();o<a;o++){var l=u.lookup(o);l instanceof _e&&l.scalePDFNumbers(r,n)}},e.of=function(t,r,n){return new e(t,r,n)},e.create=function(t){A(t,"doc",[[Ki,"PDFDocument"]]);var r=Me.of(-1),n=jn.withContextAndParent(t.context,r),i=t.context.register(n);return new e(n,i,t)},e}(),YT=function(e){L(t,e);function t(r,n,i){var o=e.call(this,r,n,i)||this;return A(r,"acroButton",[[Ad,"PDFAcroPushButton"]]),o.acroField=r,o}return t.prototype.setImage=function(r,n){n===void 0&&(n=Oi.Center);for(var i=this.acroField.getWidgets(),o=0,a=i.length;o<a;o++){var s=i[o],u=this.createImageAppearanceStream(s,r,n);this.updateWidgetAppearances(s,{normal:u})}this.markAsClean()},t.prototype.setFontSize=function(r){Ed(r,"fontSize"),this.acroField.setFontSize(r),this.markAsDirty()},t.prototype.addToPage=function(r,n,i){var o,a,s,u,l,c,d,h,f,v,p;M(r,"text",["string"]),M(n,"page",[[_r,"PDFPage"]]),Xa(i);var b=this.createWidget({x:((o=i==null?void 0:i.x)!==null&&o!==void 0?o:0)-((a=i==null?void 0:i.borderWidth)!==null&&a!==void 0?a:0)/2,y:((s=i==null?void 0:i.y)!==null&&s!==void 0?s:0)-((u=i==null?void 0:i.borderWidth)!==null&&u!==void 0?u:0)/2,width:(l=i==null?void 0:i.width)!==null&&l!==void 0?l:100,height:(c=i==null?void 0:i.height)!==null&&c!==void 0?c:50,textColor:(d=i==null?void 0:i.textColor)!==null&&d!==void 0?d:Le(0,0,0),backgroundColor:(h=i==null?void 0:i.backgroundColor)!==null&&h!==void 0?h:Le(.75,.75,.75),borderColor:i==null?void 0:i.borderColor,borderWidth:(f=i==null?void 0:i.borderWidth)!==null&&f!==void 0?f:0,rotate:(v=i==null?void 0:i.rotate)!==null&&v!==void 0?v:ie(0),caption:r,hidden:i==null?void 0:i.hidden,page:n.ref}),g=this.doc.context.register(b.dict);this.acroField.addWidget(g);var y=(p=i==null?void 0:i.font)!==null&&p!==void 0?p:this.doc.getForm().getDefaultFont();this.updateWidgetAppearance(b,y),n.node.addAnnot(g)},t.prototype.needsAppearancesUpdate=function(){var r;if(this.isDirty())return!0;for(var n=this.acroField.getWidgets(),i=0,o=n.length;i<o;i++){var a=n[i],s=((r=a.getAppearances())===null||r===void 0?void 0:r.normal)instanceof mr;if(!s)return!0}return!1},t.prototype.defaultUpdateAppearances=function(r){A(r,"font",[[xr,"PDFFont"]]),this.updateAppearances(r)},t.prototype.updateAppearances=function(r,n){A(r,"font",[[xr,"PDFFont"]]),M(n,"provider",[Function]);for(var i=this.acroField.getWidgets(),o=0,a=i.length;o<a;o++){var s=i[o];this.updateWidgetAppearance(s,r,n)}},t.prototype.updateWidgetAppearance=function(r,n,i){var o=i!=null?i:UT,a=qa(o(this,r,n));this.updateWidgetAppearanceWithFont(r,n,a)},t.of=function(r,n,i){return new t(r,n,i)},t}(Bo);const Yu=YT,QT=async(e,t,r)=>{JT(Number(t),Number(r));const n=await e.arrayBuffer(),i=await Ki.load(n);$T(i,Number(t),Number(r));const o=await i.save();return new File([o],`${e.name}_extract`,{type:"application/pdf"})},JT=(e,t)=>{if(e>t)throw new Error("To page number can't be smaller than From");if(e<=0||t<=0)throw new Error("Page numbers should start at 1")},$T=(e,t,r)=>{const n=e.getPages(),i=t-1,o=r-1;n.forEach((a,s)=>{(s<i||s>o)&&e.removePage(s)})},ez=()=>{const e=u0(),t=bb(),{file:r}=e.state,[n,i]=ze.exports.useState(""),[o,a]=ze.exports.useState(""),[s,u]=ze.exports.useState(null),l=(d,h)=>{const{value:f}=d.target;f&&h(f)};return yi("section",{children:[We("form",{onSubmit:async d=>{d.preventDefault();try{const h=await QT(r,n,o),f=URL.createObjectURL(h);window.location.href=f}catch(h){const{message:f}=h;f?u(f):console.error(h)}},children:yi(Jb,{children:[We("h1",{slot:"header",children:"Select the pages to extract"}),We("h2",{children:r.name}),We(Ng,{onSlInput:d=>{l(d,i)},value:n,type:"number",inputmode:"numeric",label:"From",placeholder:"from page...",required:!0,children:We(Lu,{slot:"prefix",name:"123"})}),We(Ng,{onSlInput:d=>{l(d,a)},value:o,type:"number",inputmode:"numeric",label:"To (including)",placeholder:"to page...",required:!0,children:We(Lu,{slot:"prefix",name:"123"})}),yi("div",{slot:"footer",style:{display:"flex",justifyContent:"space-between"},children:[We(qf,{variant:"default",onClick:()=>t("/"),children:"Back"}),We(qf,{variant:"primary",type:"submit",children:"Get PDF"})]})]})}),yi(nw,{open:Boolean(s),variant:"danger",children:[We(Lu,{slot:"icon",name:"info-circle"}),s]})]})},tz=()=>(jf("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/"),yi(V5,{children:[We(Rf,{path:"/",element:We($4,{})}),We(Rf,{path:"/select-pages",element:We(ez,{})})]})),rz=({children:e})=>We("main",{style:{height:"95vh",display:"grid",placeItems:"center"},children:e});pb(document.getElementById("root")).render(We(ze.exports.StrictMode,{children:We(j5,{basename:"/pdf-tool",children:We(rz,{children:We(tz,{})})})}));
