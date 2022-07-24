function Kf(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Xf=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};Xf();function Yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Q={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),qf=Symbol.for("react.portal"),Qf=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),e0=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),r0=Symbol.for("react.suspense"),n0=Symbol.for("react.memo"),o0=Symbol.for("react.lazy"),Qu=Symbol.iterator;function i0(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var Wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Xd={};function to(e,t,r){this.props=e,this.context=t,this.refs=Xd,this.updater=r||Wd}to.prototype.isReactComponent={};to.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};to.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=to.prototype;function Wa(e,t,r){this.props=e,this.context=t,this.refs=Xd,this.updater=r||Wd}var Ka=Wa.prototype=new Yd;Ka.constructor=Wa;Kd(Ka,to.prototype);Ka.isPureReactComponent=!0;var Gu=Array.isArray,qd=Object.prototype.hasOwnProperty,Xa={current:null},Qd={key:!0,ref:!0,__self:!0,__source:!0};function Gd(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)qd.call(t,n)&&!Qd.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:ni,type:e,key:i,ref:s,props:o,_owner:Xa.current}}function s0(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function l0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Zu=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?l0(""+e.key):t.toString(36)}function Ri(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ni:case qf:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+ol(s,0):n,Gu(o)?(r="",e!=null&&(r=e.replace(Zu,"$&/")+"/"),Ri(o,t,r,"",function(u){return u})):o!=null&&(Ya(o)&&(o=s0(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Zu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",Gu(e))for(var l=0;l<e.length;l++){i=e[l];var a=n+ol(i,l);s+=Ri(i,t,r,a,o)}else if(a=i0(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=n+ol(i,l++),s+=Ri(i,t,r,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gi(e,t,r){if(e==null)return e;var n=[],o=0;return Ri(e,n,"","",function(i){return t.call(r,i,o++)}),n}function a0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Ii={transition:null},u0={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:Xa};Y.Children={map:gi,forEach:function(e,t,r){gi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return gi(e,function(){t++}),t},toArray:function(e){return gi(e,function(t){return t})||[]},only:function(e){if(!Ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=to;Y.Fragment=Qf;Y.Profiler=Zf;Y.PureComponent=Wa;Y.StrictMode=Gf;Y.Suspense=r0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;Y.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Kd({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Xa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)qd.call(t,a)&&!Qd.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:ni,type:e.type,key:o,ref:i,props:n,_owner:s}};Y.createContext=function(e){return e={$$typeof:e0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jf,_context:e},e.Consumer=e};Y.createElement=Gd;Y.createFactory=function(e){var t=Gd.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:t0,render:e}};Y.isValidElement=Ya;Y.lazy=function(e){return{$$typeof:o0,_payload:{_status:-1,_result:e},_init:a0}};Y.memo=function(e,t){return{$$typeof:n0,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ii.transition;Ii.transition={};try{e()}finally{Ii.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Qe.current.useCallback(e,t)};Y.useContext=function(e){return Qe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Qe.current.useEffect(e,t)};Y.useId=function(){return Qe.current.useId()};Y.useImperativeHandle=function(e,t,r){return Qe.current.useImperativeHandle(e,t,r)};Y.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Qe.current.useMemo(e,t)};Y.useReducer=function(e,t,r){return Qe.current.useReducer(e,t,r)};Y.useRef=function(e){return Qe.current.useRef(e)};Y.useState=function(e){return Qe.current.useState(e)};Y.useSyncExternalStore=function(e,t,r){return Qe.current.useSyncExternalStore(e,t,r)};Y.useTransition=function(){return Qe.current.useTransition()};Y.version="18.2.0";(function(e){e.exports=Y})(Q);const c0=Yf(Q.exports),F=Kf({__proto__:null,default:c0},[Q.exports]);var Zd={exports:{}},mt={},Jd={exports:{}},eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,H){var K=R.length;R.push(H);e:for(;0<K;){var be=K-1>>>1,ze=R[be];if(0<o(ze,H))R[be]=H,R[K]=ze,K=be;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var H=R[0],K=R.pop();if(K!==H){R[0]=K;e:for(var be=0,ze=R.length,fi=ze>>>1;be<fi;){var Wr=2*(be+1)-1,nl=R[Wr],Kr=Wr+1,mi=R[Kr];if(0>o(nl,K))Kr<ze&&0>o(mi,nl)?(R[be]=mi,R[Kr]=K,be=Kr):(R[be]=nl,R[Wr]=K,be=Wr);else if(Kr<ze&&0>o(mi,K))R[be]=mi,R[Kr]=K,be=Kr;else break e}}return H}function o(R,H){var K=R.sortIndex-H.sortIndex;return K!==0?K:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,c=null,p=3,v=!1,b=!1,f=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(R){for(var H=r(u);H!==null;){if(H.callback===null)n(u);else if(H.startTime<=R)n(u),H.sortIndex=H.expirationTime,t(a,H);else break;H=r(u)}}function _(R){if(f=!1,w(R),!b)if(r(a)!==null)b=!0,pi(k);else{var H=r(u);H!==null&&rl(_,H.startTime-R)}}function k(R,H){b=!1,f&&(f=!1,g(C),C=-1),v=!0;var K=p;try{for(w(H),c=r(a);c!==null&&(!(c.expirationTime>H)||R&&!j());){var be=c.callback;if(typeof be=="function"){c.callback=null,p=c.priorityLevel;var ze=be(c.expirationTime<=H);H=e.unstable_now(),typeof ze=="function"?c.callback=ze:c===r(a)&&n(a),w(H)}else n(a);c=r(a)}if(c!==null)var fi=!0;else{var Wr=r(u);Wr!==null&&rl(_,Wr.startTime-H),fi=!1}return fi}finally{c=null,p=K,v=!1}}var $=!1,S=null,C=-1,A=5,z=-1;function j(){return!(e.unstable_now()-z<A)}function ne(){if(S!==null){var R=e.unstable_now();z=R;var H=!0;try{H=S(!0,R)}finally{H?me():($=!1,S=null)}}else $=!1}var me;if(typeof m=="function")me=function(){m(ne)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Qt=Ce.port2;Ce.port1.onmessage=ne,me=function(){Qt.postMessage(null)}}else me=function(){x(ne,0)};function pi(R){S=R,$||($=!0,me())}function rl(R,H){C=x(function(){R(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,pi(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var K=p;p=H;try{return R()}finally{p=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var K=p;p=R;try{return H()}finally{p=K}},e.unstable_scheduleCallback=function(R,H,K){var be=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?be+K:be):K=be,R){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=K+ze,R={id:d++,callback:H,priorityLevel:R,startTime:K,expirationTime:ze,sortIndex:-1},K>be?(R.sortIndex=K,t(u,R),r(a)===null&&R===r(u)&&(f?(g(C),C=-1):f=!0,rl(_,K-be))):(R.sortIndex=ze,t(a,R),b||v||(b=!0,pi(k))),R},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(R){var H=p;return function(){var K=p;p=H;try{return R.apply(this,arguments)}finally{p=K}}}})(eh);(function(e){e.exports=eh})(Jd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=Q.exports,ht=Jd.exports;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rh=new Set,Io={};function fn(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(Io[e]=t,e=0;e<t.length;e++)rh.add(t[e])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ju={},ec={};function h0(e){return Bl.call(ec,e)?!0:Bl.call(Ju,e)?!1:d0.test(e)?ec[e]=!0:(Ju[e]=!0,!1)}function p0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f0(e,t,r,n){if(t===null||typeof t>"u"||p0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var qa=/[\-:]([a-z])/g;function Qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qa,Qa);Re[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qa,Qa);Re[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qa,Qa);Re[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ga(e,t,r,n){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f0(t,r,o,n)&&(r=null),n||o===null?h0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var hr=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),bn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Za=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),nh=Symbol.for("react.provider"),oh=Symbol.for("react.context"),Ja=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),eu=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),ih=Symbol.for("react.offscreen"),tc=Symbol.iterator;function so(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,il;function bo(e){if(il===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var sl=!1;function ll(e,t){if(!e||sl)return"";sl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{sl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?bo(e):""}function m0(e){switch(e.tag){case 5:return bo(e.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case bn:return"Portal";case Ul:return"Profiler";case Za:return"StrictMode";case Vl:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case nh:return(e._context.displayName||"Context")+".Provider";case Ja:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eu:return t=e.displayName||null,t!==null?t:jl(e.type)||"Memo";case gr:t=e._payload,e=e._init;try{return jl(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(t);case 8:return t===Za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Or(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v0(e){var t=sh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yi(e){e._valueTracker||(e._valueTracker=v0(e))}function lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=sh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var r=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function rc(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Or(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ah(e,t){t=t.checked,t!=null&&Ga(e,"checked",t,!1)}function Kl(e,t){ah(e,t);var r=Or(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,Or(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Xl(e,t,r){(t!=="number"||Yi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var wo=Array.isArray;function Pn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Or(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(wo(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Or(r)}}function uh(e,t){var r=Or(t.value),n=Or(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ic(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ch(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ch(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bi,dh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bi=bi||document.createElement("div"),bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(e){y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ko[t]=ko[e]})});function hh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}function ph(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=hh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var b0=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if(b0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,On=null,Dn=null;function sc(e){if(e=si(e)){if(typeof Jl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ms(t),Jl(e.stateNode,e.type,t))}}function fh(e){On?Dn?Dn.push(e):Dn=[e]:On=e}function mh(){if(On){var e=On,t=Dn;if(Dn=On=null,sc(e),t)for(e=0;e<t.length;e++)sc(t[e])}}function gh(e,t){return e(t)}function vh(){}var al=!1;function yh(e,t,r){if(al)return e(t,r);al=!0;try{return gh(e,t,r)}finally{al=!1,(On!==null||Dn!==null)&&(vh(),mh())}}function Fo(e,t){var r=e.stateNode;if(r===null)return null;var n=Ms(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var ea=!1;if(ir)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){ea=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{ea=!1}function w0(e,t,r,n,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var So=!1,qi=null,Qi=!1,ta=null,_0={onError:function(e){So=!0,qi=e}};function x0(e,t,r,n,o,i,s,l,a){So=!1,qi=null,w0.apply(_0,arguments)}function k0(e,t,r,n,o,i,s,l,a){if(x0.apply(this,arguments),So){if(So){var u=qi;So=!1,qi=null}else throw Error(T(198));Qi||(Qi=!0,ta=u)}}function mn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function bh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(mn(e)!==e)throw Error(T(188))}function S0(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return lc(o),e;if(i===n)return lc(o),t;i=i.sibling}throw Error(T(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s)throw Error(T(189))}}if(r.alternate!==n)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function wh(e){return e=S0(e),e!==null?_h(e):null}function _h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_h(e);if(t!==null)return t;e=e.sibling}return null}var xh=ht.unstable_scheduleCallback,ac=ht.unstable_cancelCallback,$0=ht.unstable_shouldYield,C0=ht.unstable_requestPaint,we=ht.unstable_now,z0=ht.unstable_getCurrentPriorityLevel,ru=ht.unstable_ImmediatePriority,kh=ht.unstable_UserBlockingPriority,Gi=ht.unstable_NormalPriority,E0=ht.unstable_LowPriority,Sh=ht.unstable_IdlePriority,Os=null,Ht=null;function T0(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:P0,A0=Math.log,L0=Math.LN2;function P0(e){return e>>>=0,e===0?32:31-(A0(e)/L0|0)|0}var wi=64,_i=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~o;l!==0?n=_o(l):(i&=s,i!==0&&(n=_o(i)))}else s=r&~o,s!==0?n=_o(s):i!==0&&(n=_o(i));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Lt(t),o=1<<r,n|=e[r],t&=~o;return n}function O0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Lt(i),l=1<<s,a=o[s];a===-1?((l&r)===0||(l&n)!==0)&&(o[s]=O0(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $h(){var e=wi;return wi<<=1,(wi&4194240)===0&&(wi=64),e}function ul(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function oi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=r}function R0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Lt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function nu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Lt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var te=0;function Ch(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zh,ou,Eh,Th,Ah,na=!1,xi=[],Sr=null,$r=null,Cr=null,No=new Map,Bo=new Map,yr=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uc(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":No.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(t.pointerId)}}function ao(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=si(t),t!==null&&ou(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function M0(e,t,r,n,o){switch(t){case"focusin":return Sr=ao(Sr,e,t,r,n,o),!0;case"dragenter":return $r=ao($r,e,t,r,n,o),!0;case"mouseover":return Cr=ao(Cr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return No.set(i,ao(No.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Bo.set(i,ao(Bo.get(i)||null,e,t,r,n,o)),!0}return!1}function Lh(e){var t=Gr(e.target);if(t!==null){var r=mn(t);if(r!==null){if(t=r.tag,t===13){if(t=bh(r),t!==null){e.blockedOn=t,Ah(e.priority,function(){Eh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Zl=n,r.target.dispatchEvent(n),Zl=null}else return t=si(r),t!==null&&ou(t),e.blockedOn=r,!1;t.shift()}return!0}function cc(e,t,r){Mi(e)&&r.delete(t)}function F0(){na=!1,Sr!==null&&Mi(Sr)&&(Sr=null),$r!==null&&Mi($r)&&($r=null),Cr!==null&&Mi(Cr)&&(Cr=null),No.forEach(cc),Bo.forEach(cc)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,F0)))}function Uo(e){function t(o){return uo(o,e)}if(0<xi.length){uo(xi[0],e);for(var r=1;r<xi.length;r++){var n=xi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Sr!==null&&uo(Sr,e),$r!==null&&uo($r,e),Cr!==null&&uo(Cr,e),No.forEach(t),Bo.forEach(t),r=0;r<yr.length;r++)n=yr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<yr.length&&(r=yr[0],r.blockedOn===null);)Lh(r),r.blockedOn===null&&yr.shift()}var Rn=hr.ReactCurrentBatchConfig,Ji=!0;function N0(e,t,r,n){var o=te,i=Rn.transition;Rn.transition=null;try{te=1,iu(e,t,r,n)}finally{te=o,Rn.transition=i}}function B0(e,t,r,n){var o=te,i=Rn.transition;Rn.transition=null;try{te=4,iu(e,t,r,n)}finally{te=o,Rn.transition=i}}function iu(e,t,r,n){if(Ji){var o=oa(e,t,r,n);if(o===null)bl(e,t,n,es,r),uc(e,n);else if(M0(o,e,t,r,n))n.stopPropagation();else if(uc(e,n),t&4&&-1<I0.indexOf(e)){for(;o!==null;){var i=si(o);if(i!==null&&zh(i),i=oa(e,t,r,n),i===null&&bl(e,t,n,es,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else bl(e,t,n,null,r)}}var es=null;function oa(e,t,r,n){if(es=null,e=tu(n),e=Gr(e),e!==null)if(t=mn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=bh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return es=e,null}function Ph(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z0()){case ru:return 1;case kh:return 4;case Gi:case E0:return 16;case Sh:return 536870912;default:return 16}default:return 16}}var _r=null,su=null,Fi=null;function Oh(){if(Fi)return Fi;var e,t=su,r=t.length,n,o="value"in _r?_r.value:_r.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Fi=o.slice(e,1<n?1-n:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function dc(){return!1}function gt(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ki:dc,this.isPropagationStopped=dc,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=gt(ro),ii=pe({},ro,{view:0,detail:0}),U0=gt(ii),cl,dl,co,Ds=pe({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(cl=e.screenX-co.screenX,dl=e.screenY-co.screenY):dl=cl=0,co=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),hc=gt(Ds),V0=pe({},Ds,{dataTransfer:0}),H0=gt(V0),j0=pe({},ii,{relatedTarget:0}),hl=gt(j0),W0=pe({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=gt(W0),X0=pe({},ro,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=gt(X0),q0=pe({},ro,{data:0}),pc=gt(q0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z0[e])?!!t[e]:!1}function au(){return J0}var em=pe({},ii,{key:function(e){if(e.key){var t=Q0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tm=gt(em),rm=pe({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=gt(rm),nm=pe({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),om=gt(nm),im=pe({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),sm=gt(im),lm=pe({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),am=gt(lm),um=[9,13,27,32],uu=ir&&"CompositionEvent"in window,$o=null;ir&&"documentMode"in document&&($o=document.documentMode);var cm=ir&&"TextEvent"in window&&!$o,Dh=ir&&(!uu||$o&&8<$o&&11>=$o),mc=String.fromCharCode(32),gc=!1;function Rh(e,t){switch(e){case"keyup":return um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function dm(e,t){switch(e){case"compositionend":return Ih(t);case"keypress":return t.which!==32?null:(gc=!0,mc);case"textInput":return e=t.data,e===mc&&gc?null:e;default:return null}}function hm(e,t){if(_n)return e==="compositionend"||!uu&&Rh(e,t)?(e=Oh(),Fi=su=_r=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dh&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function Mh(e,t,r,n){fh(n),t=ts(t,"onChange"),0<t.length&&(r=new lu("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Co=null,Vo=null;function fm(e){Yh(e,0)}function Rs(e){var t=Sn(e);if(lh(t))return e}function mm(e,t){if(e==="change")return t}var Fh=!1;if(ir){var pl;if(ir){var fl="oninput"in document;if(!fl){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),fl=typeof yc.oninput=="function"}pl=fl}else pl=!1;Fh=pl&&(!document.documentMode||9<document.documentMode)}function bc(){Co&&(Co.detachEvent("onpropertychange",Nh),Vo=Co=null)}function Nh(e){if(e.propertyName==="value"&&Rs(Vo)){var t=[];Mh(t,Vo,e,tu(e)),yh(fm,t)}}function gm(e,t,r){e==="focusin"?(bc(),Co=t,Vo=r,Co.attachEvent("onpropertychange",Nh)):e==="focusout"&&bc()}function vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(Vo)}function ym(e,t){if(e==="click")return Rs(t)}function bm(e,t){if(e==="input"||e==="change")return Rs(t)}function wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:wm;function Ho(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Bl.call(t,o)||!Ot(e[o],t[o]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var r=wc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=wc(r)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uh(){for(var e=window,t=Yi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Yi(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _m(e){var t=Uh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bh(r.ownerDocument.documentElement,r)){if(n!==null&&cu(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=_c(r,i);var s=_c(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xm=ir&&"documentMode"in document&&11>=document.documentMode,xn=null,ia=null,zo=null,sa=!1;function xc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;sa||xn==null||xn!==Yi(n)||(n=xn,"selectionStart"in n&&cu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zo&&Ho(zo,n)||(zo=n,n=ts(ia,"onSelect"),0<n.length&&(t=new lu("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=xn)))}function Si(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},ml={},Vh={};ir&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Is(e){if(ml[e])return ml[e];if(!kn[e])return e;var t=kn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vh)return ml[e]=t[r];return e}var Hh=Is("animationend"),jh=Is("animationiteration"),Wh=Is("animationstart"),Kh=Is("transitionend"),Xh=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(e,t){Xh.set(e,t),fn(t,[e])}for(var gl=0;gl<kc.length;gl++){var vl=kc[gl],km=vl.toLowerCase(),Sm=vl[0].toUpperCase()+vl.slice(1);Ur(km,"on"+Sm)}Ur(Hh,"onAnimationEnd");Ur(jh,"onAnimationIteration");Ur(Wh,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Kh,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$m=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function Sc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,k0(n,t,void 0,e),e.currentTarget=null}function Yh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;Sc(o,l,u),i=a}else for(s=0;s<n.length;s++){if(l=n[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;Sc(o,l,u),i=a}}}if(Qi)throw e=ta,Qi=!1,ta=null,e}function oe(e,t){var r=t[da];r===void 0&&(r=t[da]=new Set);var n=e+"__bubble";r.has(n)||(qh(t,e,2,!1),r.add(n))}function yl(e,t,r){var n=0;t&&(n|=4),qh(r,e,n,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function jo(e){if(!e[$i]){e[$i]=!0,rh.forEach(function(r){r!=="selectionchange"&&($m.has(r)||yl(r,!1,e),yl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,yl("selectionchange",!1,t))}}function qh(e,t,r,n){switch(Ph(t)){case 1:var o=N0;break;case 4:o=B0;break;default:o=iu}r=o.bind(null,t,r,e),o=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function bl(e,t,r,n,o){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Gr(l),s===null)return;if(a=s.tag,a===5||a===6){n=i=s;continue e}l=l.parentNode}}n=n.return}yh(function(){var u=i,d=tu(r),c=[];e:{var p=Xh.get(e);if(p!==void 0){var v=lu,b=e;switch(e){case"keypress":if(Ni(r)===0)break e;case"keydown":case"keyup":v=tm;break;case"focusin":b="focus",v=hl;break;case"focusout":b="blur",v=hl;break;case"beforeblur":case"afterblur":v=hl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=om;break;case Hh:case jh:case Wh:v=K0;break;case Kh:v=sm;break;case"scroll":v=U0;break;case"wheel":v=am;break;case"copy":case"cut":case"paste":v=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fc}var f=(t&4)!==0,x=!f&&e==="scroll",g=f?p!==null?p+"Capture":null:p;f=[];for(var m=u,w;m!==null;){w=m;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,g!==null&&(_=Fo(m,g),_!=null&&f.push(Wo(m,_,w)))),x)break;m=m.return}0<f.length&&(p=new v(p,b,null,r,d),c.push({event:p,listeners:f}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&r!==Zl&&(b=r.relatedTarget||r.fromElement)&&(Gr(b)||b[sr]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(b=r.relatedTarget||r.toElement,v=u,b=b?Gr(b):null,b!==null&&(x=mn(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=u),v!==b)){if(f=hc,_="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(f=fc,_="onPointerLeave",g="onPointerEnter",m="pointer"),x=v==null?p:Sn(v),w=b==null?p:Sn(b),p=new f(_,m+"leave",v,r,d),p.target=x,p.relatedTarget=w,_=null,Gr(d)===u&&(f=new f(g,m+"enter",b,r,d),f.target=w,f.relatedTarget=x,_=f),x=_,v&&b)t:{for(f=v,g=b,m=0,w=f;w;w=gn(w))m++;for(w=0,_=g;_;_=gn(_))w++;for(;0<m-w;)f=gn(f),m--;for(;0<w-m;)g=gn(g),w--;for(;m--;){if(f===g||g!==null&&f===g.alternate)break t;f=gn(f),g=gn(g)}f=null}else f=null;v!==null&&$c(c,p,v,f,!1),b!==null&&x!==null&&$c(c,x,b,f,!0)}}e:{if(p=u?Sn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=mm;else if(vc(p))if(Fh)k=bm;else{k=vm;var $=gm}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=ym);if(k&&(k=k(e,u))){Mh(c,k,r,d);break e}$&&$(e,p,u),e==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&Xl(p,"number",p.value)}switch($=u?Sn(u):window,e){case"focusin":(vc($)||$.contentEditable==="true")&&(xn=$,ia=u,zo=null);break;case"focusout":zo=ia=xn=null;break;case"mousedown":sa=!0;break;case"contextmenu":case"mouseup":case"dragend":sa=!1,xc(c,r,d);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":xc(c,r,d)}var S;if(uu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else _n?Rh(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(Dh&&r.locale!=="ko"&&(_n||C!=="onCompositionStart"?C==="onCompositionEnd"&&_n&&(S=Oh()):(_r=d,su="value"in _r?_r.value:_r.textContent,_n=!0)),$=ts(u,C),0<$.length&&(C=new pc(C,e,null,r,d),c.push({event:C,listeners:$}),S?C.data=S:(S=Ih(r),S!==null&&(C.data=S)))),(S=cm?dm(e,r):hm(e,r))&&(u=ts(u,"onBeforeInput"),0<u.length&&(d=new pc("onBeforeInput","beforeinput",null,r,d),c.push({event:d,listeners:u}),d.data=S))}Yh(c,t)})}function Wo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ts(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Fo(e,r),i!=null&&n.unshift(Wo(e,i,o)),i=Fo(e,t),i!=null&&n.push(Wo(e,i,o))),e=e.return}return n}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $c(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var l=r,a=l.alternate,u=l.stateNode;if(a!==null&&a===n)break;l.tag===5&&u!==null&&(l=u,o?(a=Fo(r,i),a!=null&&s.unshift(Wo(r,a,l))):o||(a=Fo(r,i),a!=null&&s.push(Wo(r,a,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Cm=/\r\n?/g,zm=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(Cm,`
`).replace(zm,"")}function Ci(e,t,r){if(t=Cc(t),Cc(e)!==t&&r)throw Error(T(425))}function rs(){}var la=null,aa=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,Em=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,Tm=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(Am)}:ca;function Am(e){setTimeout(function(){throw e})}function wl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Uo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Uo(t)}function zr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var no=Math.random().toString(36).slice(2),Vt="__reactFiber$"+no,Ko="__reactProps$"+no,sr="__reactContainer$"+no,da="__reactEvents$"+no,Lm="__reactListeners$"+no,Pm="__reactHandles$"+no;function Gr(e){var t=e[Vt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[sr]||r[Vt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ec(e);e!==null;){if(r=e[Vt])return r;e=Ec(e)}return t}e=r,r=e.parentNode}return null}function si(e){return e=e[Vt]||e[sr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ms(e){return e[Ko]||null}var ha=[],$n=-1;function Vr(e){return{current:e}}function se(e){0>$n||(e.current=ha[$n],ha[$n]=null,$n--)}function re(e,t){$n++,ha[$n]=e.current,e.current=t}var Dr={},Ve=Vr(Dr),et=Vr(!1),on=Dr;function Bn(e,t){var r=e.type.contextTypes;if(!r)return Dr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function ns(){se(et),se(Ve)}function Tc(e,t,r){if(Ve.current!==Dr)throw Error(T(168));re(Ve,t),re(et,r)}function Qh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(T(108,g0(e)||"Unknown",o));return pe({},r,n)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dr,on=Ve.current,re(Ve,e),re(et,et.current),!0}function Ac(e,t,r){var n=e.stateNode;if(!n)throw Error(T(169));r?(e=Qh(e,t,on),n.__reactInternalMemoizedMergedChildContext=e,se(et),se(Ve),re(Ve,e)):se(et),re(et,r)}var Zt=null,Fs=!1,_l=!1;function Gh(e){Zt===null?Zt=[e]:Zt.push(e)}function Om(e){Fs=!0,Gh(e)}function Hr(){if(!_l&&Zt!==null){_l=!0;var e=0,t=te;try{var r=Zt;for(te=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Zt=null,Fs=!1}catch(o){throw Zt!==null&&(Zt=Zt.slice(e+1)),xh(ru,Hr),o}finally{te=t,_l=!1}}return null}var Cn=[],zn=0,is=null,ss=0,vt=[],yt=0,sn=null,er=1,tr="";function Yr(e,t){Cn[zn++]=ss,Cn[zn++]=is,is=e,ss=t}function Zh(e,t,r){vt[yt++]=er,vt[yt++]=tr,vt[yt++]=sn,sn=e;var n=er;e=tr;var o=32-Lt(n)-1;n&=~(1<<o),r+=1;var i=32-Lt(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,er=1<<32-Lt(t)+o|r<<o|n,tr=i+e}else er=1<<i|r<<o|n,tr=e}function du(e){e.return!==null&&(Yr(e,1),Zh(e,1,0))}function hu(e){for(;e===is;)is=Cn[--zn],Cn[zn]=null,ss=Cn[--zn],Cn[zn]=null;for(;e===sn;)sn=vt[--yt],vt[yt]=null,tr=vt[--yt],vt[yt]=null,er=vt[--yt],vt[yt]=null}var dt=null,ut=null,ae=!1,At=null;function Jh(e,t){var r=bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Lc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ut=zr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=sn!==null?{id:er,overflow:tr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,ut=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(ae){var t=ut;if(t){var r=t;if(!Lc(e,t)){if(pa(e))throw Error(T(418));t=zr(r.nextSibling);var n=dt;t&&Lc(e,t)?Jh(n,r):(e.flags=e.flags&-4097|2,ae=!1,dt=e)}}else{if(pa(e))throw Error(T(418));e.flags=e.flags&-4097|2,ae=!1,dt=e}}}function Pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function zi(e){if(e!==dt)return!1;if(!ae)return Pc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=ut)){if(pa(e))throw ep(),Error(T(418));for(;t;)Jh(e,t),t=zr(t.nextSibling)}if(Pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ut=zr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=dt?zr(e.stateNode.nextSibling):null;return!0}function ep(){for(var e=ut;e;)e=zr(e.nextSibling)}function Un(){ut=dt=null,ae=!1}function pu(e){At===null?At=[e]:At.push(e)}var Dm=hr.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ls=Vr(null),as=null,En=null,fu=null;function mu(){fu=En=as=null}function gu(e){var t=ls.current;se(ls),e._currentValue=t}function ma(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function In(e,t){as=e,fu=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(as===null)throw Error(T(308));En=e,as.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Zr=null;function vu(e){Zr===null?Zr=[e]:Zr.push(e)}function tp(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,vu(t)):(r.next=o.next,o.next=r),t.interleaved=r,lr(e,n)}function lr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var vr=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Er(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(G&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,lr(e,r)}return o=n.interleaved,o===null?(t.next=t,vu(n)):(t.next=o.next,o.next=t),n.interleaved=t,lr(e,r)}function Bi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,nu(e,r)}}function Oc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function us(e,t,r,n){var o=e.updateQueue;vr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;s=0,d=u=a=null,l=i;do{var p=l.lane,v=l.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,f=l;switch(p=t,v=r,f.tag){case 1:if(b=f.payload,typeof b=="function"){c=b.call(v,c,p);break e}c=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=f.payload,p=typeof b=="function"?b.call(v,c,p):b,p==null)break e;c=pe({},c,p);break e;case 2:vr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,s|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(d===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);an|=s,e.lanes=s,e.memoizedState=c}}function Dc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(T(191,o));o.call(n)}}}var np=new th.Component().refs;function ga(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ns={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ke(),o=Ar(e),i=rr(n,o);i.payload=t,r!=null&&(i.callback=r),t=Er(e,i,o),t!==null&&(Pt(t,e,o,n),Bi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ke(),o=Ar(e),i=rr(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Er(e,i,o),t!==null&&(Pt(t,e,o,n),Bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ke(),n=Ar(e),o=rr(r,n);o.tag=2,t!=null&&(o.callback=t),t=Er(e,o,n),t!==null&&(Pt(t,e,n,r),Bi(t,e,n))}};function Rc(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Ho(r,n)||!Ho(o,i):!0}function op(e,t,r){var n=!1,o=Dr,i=t.contextType;return typeof i=="object"&&i!==null?i=_t(i):(o=tt(t)?on:Ve.current,n=t.contextTypes,i=(n=n!=null)?Bn(e,o):Dr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ns,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ic(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function va(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=np,yu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=_t(i):(i=tt(t)?on:Ve.current,o.context=Bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ga(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ns.enqueueReplaceState(o,o.state,null),us(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ho(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var n=r.stateNode}if(!n)throw Error(T(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;l===np&&(l=o.refs={}),s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mc(e){var t=e._init;return t(e._payload)}function ip(e){function t(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function r(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function n(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Lr(g,m),g.index=0,g.sibling=null,g}function i(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,w,_){return m===null||m.tag!==6?(m=El(w,g.mode,_),m.return=g,m):(m=o(m,w),m.return=g,m)}function a(g,m,w,_){var k=w.type;return k===wn?d(g,m,w.props.children,_,w.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===gr&&Mc(k)===m.type)?(_=o(m,w.props),_.ref=ho(g,m,w),_.return=g,_):(_=Ki(w.type,w.key,w.props,null,g.mode,_),_.ref=ho(g,m,w),_.return=g,_)}function u(g,m,w,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=Tl(w,g.mode,_),m.return=g,m):(m=o(m,w.children||[]),m.return=g,m)}function d(g,m,w,_,k){return m===null||m.tag!==7?(m=rn(w,g.mode,_,k),m.return=g,m):(m=o(m,w),m.return=g,m)}function c(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=El(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vi:return w=Ki(m.type,m.key,m.props,null,g.mode,w),w.ref=ho(g,null,m),w.return=g,w;case bn:return m=Tl(m,g.mode,w),m.return=g,m;case gr:var _=m._init;return c(g,_(m._payload),w)}if(wo(m)||so(m))return m=rn(m,g.mode,w,null),m.return=g,m;Ei(g,m)}return null}function p(g,m,w,_){var k=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return k!==null?null:l(g,m,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vi:return w.key===k?a(g,m,w,_):null;case bn:return w.key===k?u(g,m,w,_):null;case gr:return k=w._init,p(g,m,k(w._payload),_)}if(wo(w)||so(w))return k!==null?null:d(g,m,w,_,null);Ei(g,w)}return null}function v(g,m,w,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(w)||null,l(m,g,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vi:return g=g.get(_.key===null?w:_.key)||null,a(m,g,_,k);case bn:return g=g.get(_.key===null?w:_.key)||null,u(m,g,_,k);case gr:var $=_._init;return v(g,m,w,$(_._payload),k)}if(wo(_)||so(_))return g=g.get(w)||null,d(m,g,_,k,null);Ei(m,_)}return null}function b(g,m,w,_){for(var k=null,$=null,S=m,C=m=0,A=null;S!==null&&C<w.length;C++){S.index>C?(A=S,S=null):A=S.sibling;var z=p(g,S,w[C],_);if(z===null){S===null&&(S=A);break}e&&S&&z.alternate===null&&t(g,S),m=i(z,m,C),$===null?k=z:$.sibling=z,$=z,S=A}if(C===w.length)return r(g,S),ae&&Yr(g,C),k;if(S===null){for(;C<w.length;C++)S=c(g,w[C],_),S!==null&&(m=i(S,m,C),$===null?k=S:$.sibling=S,$=S);return ae&&Yr(g,C),k}for(S=n(g,S);C<w.length;C++)A=v(S,g,C,w[C],_),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?C:A.key),m=i(A,m,C),$===null?k=A:$.sibling=A,$=A);return e&&S.forEach(function(j){return t(g,j)}),ae&&Yr(g,C),k}function f(g,m,w,_){var k=so(w);if(typeof k!="function")throw Error(T(150));if(w=k.call(w),w==null)throw Error(T(151));for(var $=k=null,S=m,C=m=0,A=null,z=w.next();S!==null&&!z.done;C++,z=w.next()){S.index>C?(A=S,S=null):A=S.sibling;var j=p(g,S,z.value,_);if(j===null){S===null&&(S=A);break}e&&S&&j.alternate===null&&t(g,S),m=i(j,m,C),$===null?k=j:$.sibling=j,$=j,S=A}if(z.done)return r(g,S),ae&&Yr(g,C),k;if(S===null){for(;!z.done;C++,z=w.next())z=c(g,z.value,_),z!==null&&(m=i(z,m,C),$===null?k=z:$.sibling=z,$=z);return ae&&Yr(g,C),k}for(S=n(g,S);!z.done;C++,z=w.next())z=v(S,g,C,z.value,_),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?C:z.key),m=i(z,m,C),$===null?k=z:$.sibling=z,$=z);return e&&S.forEach(function(ne){return t(g,ne)}),ae&&Yr(g,C),k}function x(g,m,w,_){if(typeof w=="object"&&w!==null&&w.type===wn&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case vi:e:{for(var k=w.key,$=m;$!==null;){if($.key===k){if(k=w.type,k===wn){if($.tag===7){r(g,$.sibling),m=o($,w.props.children),m.return=g,g=m;break e}}else if($.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===gr&&Mc(k)===$.type){r(g,$.sibling),m=o($,w.props),m.ref=ho(g,$,w),m.return=g,g=m;break e}r(g,$);break}else t(g,$);$=$.sibling}w.type===wn?(m=rn(w.props.children,g.mode,_,w.key),m.return=g,g=m):(_=Ki(w.type,w.key,w.props,null,g.mode,_),_.ref=ho(g,m,w),_.return=g,g=_)}return s(g);case bn:e:{for($=w.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){r(g,m.sibling),m=o(m,w.children||[]),m.return=g,g=m;break e}else{r(g,m);break}else t(g,m);m=m.sibling}m=Tl(w,g.mode,_),m.return=g,g=m}return s(g);case gr:return $=w._init,x(g,m,$(w._payload),_)}if(wo(w))return b(g,m,w,_);if(so(w))return f(g,m,w,_);Ei(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(r(g,m.sibling),m=o(m,w),m.return=g,g=m):(r(g,m),m=El(w,g.mode,_),m.return=g,g=m),s(g)):r(g,m)}return x}var Vn=ip(!0),sp=ip(!1),li={},jt=Vr(li),Xo=Vr(li),Yo=Vr(li);function Jr(e){if(e===li)throw Error(T(174));return e}function bu(e,t){switch(re(Yo,t),re(Xo,e),re(jt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ql(t,e)}se(jt),re(jt,t)}function Hn(){se(jt),se(Xo),se(Yo)}function lp(e){Jr(Yo.current);var t=Jr(jt.current),r=ql(t,e.type);t!==r&&(re(Xo,e),re(jt,r))}function wu(e){Xo.current===e&&(se(jt),se(Xo))}var ce=Vr(0);function cs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function _u(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var Ui=hr.ReactCurrentDispatcher,kl=hr.ReactCurrentBatchConfig,ln=0,de=null,Se=null,Ee=null,ds=!1,Eo=!1,qo=0,Rm=0;function Fe(){throw Error(T(321))}function xu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ot(e[r],t[r]))return!1;return!0}function ku(e,t,r,n,o,i){if(ln=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?Nm:Bm,e=r(n,o),Eo){i=0;do{if(Eo=!1,qo=0,25<=i)throw Error(T(301));i+=1,Ee=Se=null,t.updateQueue=null,Ui.current=Um,e=r(n,o)}while(Eo)}if(Ui.current=hs,t=Se!==null&&Se.next!==null,ln=0,Ee=Se=de=null,ds=!1,t)throw Error(T(300));return e}function Su(){var e=qo!==0;return qo=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function xt(){if(Se===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ee===null?de.memoizedState:Ee.next;if(t!==null)Ee=t,Se=e;else{if(e===null)throw Error(T(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Qo(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=xt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=Se,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var l=s=null,a=null,u=i;do{var d=u.lane;if((ln&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,s=n):a=a.next=c,de.lanes|=d,an|=d}u=u.next}while(u!==null&&u!==i);a===null?s=n:a.next=l,Ot(n,t.memoizedState)||(Je=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=a,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,de.lanes|=i,an|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function $l(e){var t=xt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Ot(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function ap(){}function up(e,t){var r=de,n=xt(),o=t(),i=!Ot(n.memoizedState,o);if(i&&(n.memoizedState=o,Je=!0),n=n.queue,$u(hp.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(r.flags|=2048,Go(9,dp.bind(null,r,n,o,t),void 0,null),Le===null)throw Error(T(349));(ln&30)!==0||cp(r,t,o)}return o}function cp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function dp(e,t,r,n){t.value=r,t.getSnapshot=n,pp(t)&&fp(e)}function hp(e,t,r){return r(function(){pp(t)&&fp(e)})}function pp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ot(e,r)}catch{return!0}}function fp(e){var t=lr(e,1);t!==null&&Pt(t,e,1,-1)}function Fc(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:e},t.queue=e,e=e.dispatch=Fm.bind(null,de,e),[t.memoizedState,e]}function Go(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function mp(){return xt().memoizedState}function Vi(e,t,r,n){var o=Ut();de.flags|=e,o.memoizedState=Go(1|t,r,void 0,n===void 0?null:n)}function Bs(e,t,r,n){var o=xt();n=n===void 0?null:n;var i=void 0;if(Se!==null){var s=Se.memoizedState;if(i=s.destroy,n!==null&&xu(n,s.deps)){o.memoizedState=Go(t,r,i,n);return}}de.flags|=e,o.memoizedState=Go(1|t,r,i,n)}function Nc(e,t){return Vi(8390656,8,e,t)}function $u(e,t){return Bs(2048,8,e,t)}function gp(e,t){return Bs(4,2,e,t)}function vp(e,t){return Bs(4,4,e,t)}function yp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bp(e,t,r){return r=r!=null?r.concat([e]):null,Bs(4,4,yp.bind(null,t,e),r)}function Cu(){}function wp(e,t){var r=xt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function _p(e,t){var r=xt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function xp(e,t,r){return(ln&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=r):(Ot(r,t)||(r=$h(),de.lanes|=r,an|=r,e.baseState=!0),t)}function Im(e,t){var r=te;te=r!==0&&4>r?r:4,e(!0);var n=kl.transition;kl.transition={};try{e(!1),t()}finally{te=r,kl.transition=n}}function kp(){return xt().memoizedState}function Mm(e,t,r){var n=Ar(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Sp(e))$p(t,r);else if(r=tp(e,t,r,n),r!==null){var o=Ke();Pt(r,e,n,o),Cp(r,t,n)}}function Fm(e,t,r){var n=Ar(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Sp(e))$p(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,r);if(o.hasEagerState=!0,o.eagerState=l,Ot(l,s)){var a=t.interleaved;a===null?(o.next=o,vu(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}r=tp(e,t,o,n),r!==null&&(o=Ke(),Pt(r,e,n,o),Cp(r,t,n))}}function Sp(e){var t=e.alternate;return e===de||t!==null&&t===de}function $p(e,t){Eo=ds=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Cp(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,nu(e,r)}}var hs={readContext:_t,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Nm={readContext:_t,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Nc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Vi(4194308,4,yp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ut();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Mm.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:Cu,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=Im.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=de,o=Ut();if(ae){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),Le===null)throw Error(T(349));(ln&30)!==0||cp(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Nc(hp.bind(null,n,i,e),[e]),n.flags|=2048,Go(9,dp.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Ut(),t=Le.identifierPrefix;if(ae){var r=tr,n=er;r=(n&~(1<<32-Lt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=qo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Rm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bm={readContext:_t,useCallback:wp,useContext:_t,useEffect:$u,useImperativeHandle:bp,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:_p,useReducer:Sl,useRef:mp,useState:function(){return Sl(Qo)},useDebugValue:Cu,useDeferredValue:function(e){var t=xt();return xp(t,Se.memoizedState,e)},useTransition:function(){var e=Sl(Qo)[0],t=xt().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:up,useId:kp,unstable_isNewReconciler:!1},Um={readContext:_t,useCallback:wp,useContext:_t,useEffect:$u,useImperativeHandle:bp,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:_p,useReducer:$l,useRef:mp,useState:function(){return $l(Qo)},useDebugValue:Cu,useDeferredValue:function(e){var t=xt();return Se===null?t.memoizedState=e:xp(t,Se.memoizedState,e)},useTransition:function(){var e=$l(Qo)[0],t=xt().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:up,useId:kp,unstable_isNewReconciler:!1};function jn(e,t){try{var r="",n=t;do r+=m0(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cl(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function ya(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Vm=typeof WeakMap=="function"?WeakMap:Map;function zp(e,t,r){r=rr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){fs||(fs=!0,Ea=n),ya(e,t)},r}function Ep(e,t,r){r=rr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){ya(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ya(e,t),typeof n!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Bc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Vm;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=rg.bind(null,e,t,r),t.then(e,e))}function Uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vc(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=rr(-1,1),t.tag=2,Er(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Hm=hr.ReactCurrentOwner,Je=!1;function We(e,t,r,n){t.child=e===null?sp(t,null,r,n):Vn(t,e.child,r,n)}function Hc(e,t,r,n,o){r=r.render;var i=t.ref;return In(t,o),n=ku(e,t,r,n,i,o),r=Su(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ar(e,t,o)):(ae&&r&&du(t),t.flags|=1,We(e,t,n,o),t.child)}function jc(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Du(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Tp(e,t,i,n,o)):(e=Ki(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ho,r(s,n)&&e.ref===t.ref)return ar(e,t,o)}return t.flags|=1,e=Lr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Tp(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Ho(i,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,ar(e,t,o)}return ba(e,t,r,n,o)}function Ap(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(An,lt),lt|=r;else{if((r&1073741824)===0)return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(An,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,re(An,lt),lt|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,re(An,lt),lt|=n;return We(e,t,o,r),t.child}function Lp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ba(e,t,r,n,o){var i=tt(r)?on:Ve.current;return i=Bn(t,i),In(t,o),r=ku(e,t,r,n,i,o),n=Su(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ar(e,t,o)):(ae&&n&&du(t),t.flags|=1,We(e,t,r,o),t.child)}function Wc(e,t,r,n,o){if(tt(r)){var i=!0;os(t)}else i=!1;if(In(t,o),t.stateNode===null)Hi(e,t),op(t,r,n),va(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=tt(r)?on:Ve.current,u=Bn(t,u));var d=r.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||a!==u)&&Ic(t,s,n,u),vr=!1;var p=t.memoizedState;s.state=p,us(t,n,s,o),a=t.memoizedState,l!==n||p!==a||et.current||vr?(typeof d=="function"&&(ga(t,r,d,n),a=t.memoizedState),(l=vr||Rc(t,r,l,n,p,a,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=a),s.props=n,s.state=a,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,rp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Et(t.type,l),s.props=u,c=t.pendingProps,p=s.context,a=r.contextType,typeof a=="object"&&a!==null?a=_t(a):(a=tt(r)?on:Ve.current,a=Bn(t,a));var v=r.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==c||p!==a)&&Ic(t,s,n,a),vr=!1,p=t.memoizedState,s.state=p,us(t,n,s,o);var b=t.memoizedState;l!==c||p!==b||et.current||vr?(typeof v=="function"&&(ga(t,r,v,n),b=t.memoizedState),(u=vr||Rc(t,r,u,n,p,b,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,b,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,b,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),s.props=n,s.state=b,s.context=a,n=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return wa(e,t,r,n,i,o)}function wa(e,t,r,n,o,i){Lp(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&Ac(t,r,!1),ar(e,t,i);n=t.stateNode,Hm.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Vn(t,e.child,null,i),t.child=Vn(t,null,l,i)):We(e,t,l,i),t.memoizedState=n.state,o&&Ac(t,r,!0),t.child}function Pp(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),bu(e,t.containerInfo)}function Kc(e,t,r,n,o){return Un(),pu(o),t.flags|=256,We(e,t,r,n),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Op(e,t,r){var n=t.pendingProps,o=ce.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),re(ce,o&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Hs(s,n,0,null),e=rn(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xa(r),t.memoizedState=_a,e):zu(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return jm(e,t,s,n,l,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:n.children};return(s&1)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=Lr(o,a),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Lr(l,i):(i=rn(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?xa(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=_a,n}return i=e.child,e=i.sibling,n=Lr(i,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function zu(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ti(e,t,r,n){return n!==null&&pu(n),Vn(t,e.child,null,r),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jm(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Cl(Error(T(422))),Ti(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Hs({mode:"visible",children:n.children},o,0,null),i=rn(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,(t.mode&1)!==0&&Vn(t,e.child,null,s),t.child.memoizedState=xa(s),t.memoizedState=_a,i);if((t.mode&1)===0)return Ti(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,i=Error(T(419)),n=Cl(i,n,void 0),Ti(e,t,s,n)}if(l=(s&e.childLanes)!==0,Je||l){if(n=Le,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|s))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,lr(e,o),Pt(n,e,o,-1))}return Ou(),n=Cl(Error(T(421))),Ti(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ng.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ut=zr(o.nextSibling),dt=t,ae=!0,At=null,e!==null&&(vt[yt++]=er,vt[yt++]=tr,vt[yt++]=sn,er=e.id,tr=e.overflow,sn=t),t=zu(t,n.children),t.flags|=4096,t)}function Xc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ma(e.return,t,r)}function zl(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Dp(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(We(e,t,n.children,r),n=ce.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,r,t);else if(e.tag===19)Xc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(re(ce,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&cs(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),zl(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&cs(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}zl(t,!0,r,null,i);break;case"together":zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ar(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=Lr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Lr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wm(e,t,r){switch(t.tag){case 3:Pp(t),Un();break;case 5:lp(t);break;case 1:tt(t.type)&&os(t);break;case 4:bu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;re(ls,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(re(ce,ce.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Op(e,t,r):(re(ce,ce.current&1),e=ar(e,t,r),e!==null?e.sibling:null);re(ce,ce.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Dp(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),re(ce,ce.current),n)break;return null;case 22:case 23:return t.lanes=0,Ap(e,t,r)}return ar(e,t,r)}var Rp,ka,Ip,Mp;Rp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ka=function(){};Ip=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Jr(jt.current);var i=null;switch(r){case"input":o=Wl(e,o),n=Wl(e,n),i=[];break;case"select":o=pe({},o,{value:void 0}),n=pe({},n,{value:void 0}),i=[];break;case"textarea":o=Yl(e,o),n=Yl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=rs)}Ql(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var a=n[u];if(l=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(r||(r={}),r[s]=a[s])}else r||(i||(i=[]),i.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&oe("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Mp=function(e,t,r,n){r!==n&&(t.flags|=4)};function po(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Km(e,t,r){var n=t.pendingProps;switch(hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return tt(t.type)&&ns(),Ne(t),null;case 3:return n=t.stateNode,Hn(),se(et),se(Ve),_u(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(La(At),At=null))),ka(e,t),Ne(t),null;case 5:wu(t);var o=Jr(Yo.current);if(r=t.type,e!==null&&t.stateNode!=null)Ip(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(T(166));return Ne(t),null}if(e=Jr(jt.current),zi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Vt]=t,n[Ko]=i,e=(t.mode&1)!==0,r){case"dialog":oe("cancel",n),oe("close",n);break;case"iframe":case"object":case"embed":oe("load",n);break;case"video":case"audio":for(o=0;o<xo.length;o++)oe(xo[o],n);break;case"source":oe("error",n);break;case"img":case"image":case"link":oe("error",n),oe("load",n);break;case"details":oe("toggle",n);break;case"input":rc(n,i),oe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},oe("invalid",n);break;case"textarea":oc(n,i),oe("invalid",n)}Ql(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?n.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ci(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ci(n.textContent,l,e),o=["children",""+l]):Io.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&oe("scroll",n)}switch(r){case"input":yi(n),nc(n,i,!0);break;case"textarea":yi(n),ic(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=rs)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ch(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Vt]=t,e[Ko]=n,Rp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Gl(r,n),r){case"dialog":oe("cancel",e),oe("close",e),o=n;break;case"iframe":case"object":case"embed":oe("load",e),o=n;break;case"video":case"audio":for(o=0;o<xo.length;o++)oe(xo[o],e);o=n;break;case"source":oe("error",e),o=n;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=n;break;case"details":oe("toggle",e),o=n;break;case"input":rc(e,n),o=Wl(e,n),oe("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=pe({},n,{value:void 0}),oe("invalid",e);break;case"textarea":oc(e,n),o=Yl(e,n),oe("invalid",e);break;default:o=n}Ql(r,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?ph(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&dh(e,a)):i==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Mo(e,a):typeof a=="number"&&Mo(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Io.hasOwnProperty(i)?a!=null&&i==="onScroll"&&oe("scroll",e):a!=null&&Ga(e,i,a,s))}switch(r){case"input":yi(e),nc(e,n,!1);break;case"textarea":yi(e),ic(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Or(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Pn(e,!!n.multiple,i,!1):n.defaultValue!=null&&Pn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=rs)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(T(166));if(r=Jr(Yo.current),Jr(jt.current),zi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Vt]=t,(i=n.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:Ci(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Vt]=t,t.stateNode=n}return Ne(t),null;case 13:if(se(ce),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ep(),Un(),t.flags|=98560,i=!1;else if(i=zi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[Vt]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else At!==null&&(La(At),At=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ce.current&1)!==0?$e===0&&($e=3):Ou())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Hn(),ka(e,t),e===null&&jo(t.stateNode.containerInfo),Ne(t),null;case 10:return gu(t.type._context),Ne(t),null;case 17:return tt(t.type)&&ns(),Ne(t),null;case 19:if(se(ce),i=t.memoizedState,i===null)return Ne(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)po(i,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=cs(e),s!==null){for(t.flags|=128,po(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&we()>Wn&&(t.flags|=128,n=!0,po(i,!1),t.lanes=4194304)}else{if(!n)if(e=cs(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ae)return Ne(t),null}else 2*we()-i.renderingStartTime>Wn&&r!==1073741824&&(t.flags|=128,n=!0,po(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=we(),t.sibling=null,r=ce.current,re(ce,n?r&1|2:r&1),t):(Ne(t),null);case 22:case 23:return Pu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(lt&1073741824)!==0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Xm(e,t){switch(hu(t),t.tag){case 1:return tt(t.type)&&ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),se(et),se(Ve),_u(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return wu(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return Hn(),null;case 10:return gu(t.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var Ai=!1,Be=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,D=null;function Tn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ge(e,t,n)}else r.current=null}function Sa(e,t,r){try{r()}catch(n){ge(e,t,n)}}var Yc=!1;function qm(e,t){if(la=Ji,e=Uh(),cu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,l=-1,a=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var v;c!==r||o!==0&&c.nodeType!==3||(l=s+o),c!==i||n!==0&&c.nodeType!==3||(a=s+n),c.nodeType===3&&(s+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===e)break t;if(p===r&&++u===o&&(l=s),p===i&&++d===n&&(a=s),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}r=l===-1||a===-1?null:{start:l,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(aa={focusedElem:e,selectionRange:r},Ji=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var f=b.memoizedProps,x=b.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?f:Et(t.type,f),x);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(_){ge(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return b=Yc,Yc=!1,b}function To(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Sa(t,r,i)}o=o.next}while(o!==n)}}function Us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function $a(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Fp(e){var t=e.alternate;t!==null&&(e.alternate=null,Fp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Ko],delete t[da],delete t[Lm],delete t[Pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Np(e){return e.tag===5||e.tag===3||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ca(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=rs));else if(n!==4&&(e=e.child,e!==null))for(Ca(e,t,r),e=e.sibling;e!==null;)Ca(e,t,r),e=e.sibling}function za(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(za(e,t,r),e=e.sibling;e!==null;)za(e,t,r),e=e.sibling}var Oe=null,Tt=!1;function mr(e,t,r){for(r=r.child;r!==null;)Bp(e,t,r),r=r.sibling}function Bp(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Os,r)}catch{}switch(r.tag){case 5:Be||Tn(r,t);case 6:var n=Oe,o=Tt;Oe=null,mr(e,t,r),Oe=n,Tt=o,Oe!==null&&(Tt?(e=Oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Oe.removeChild(r.stateNode));break;case 18:Oe!==null&&(Tt?(e=Oe,r=r.stateNode,e.nodeType===8?wl(e.parentNode,r):e.nodeType===1&&wl(e,r),Uo(e)):wl(Oe,r.stateNode));break;case 4:n=Oe,o=Tt,Oe=r.stateNode.containerInfo,Tt=!0,mr(e,t,r),Oe=n,Tt=o;break;case 0:case 11:case 14:case 15:if(!Be&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&Sa(r,t,s),o=o.next}while(o!==n)}mr(e,t,r);break;case 1:if(!Be&&(Tn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ge(r,t,l)}mr(e,t,r);break;case 21:mr(e,t,r);break;case 22:r.mode&1?(Be=(n=Be)||r.memoizedState!==null,mr(e,t,r),Be=n):mr(e,t,r);break;default:mr(e,t,r)}}function Qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ym),t.forEach(function(n){var o=og.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function zt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Oe=l.stateNode,Tt=!1;break e;case 3:Oe=l.stateNode.containerInfo,Tt=!0;break e;case 4:Oe=l.stateNode.containerInfo,Tt=!0;break e}l=l.return}if(Oe===null)throw Error(T(160));Bp(i,s,o),Oe=null,Tt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ge(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Up(t,e),t=t.sibling}function Up(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Bt(e),n&4){try{To(3,e,e.return),Us(3,e)}catch(f){ge(e,e.return,f)}try{To(5,e,e.return)}catch(f){ge(e,e.return,f)}}break;case 1:zt(t,e),Bt(e),n&512&&r!==null&&Tn(r,r.return);break;case 5:if(zt(t,e),Bt(e),n&512&&r!==null&&Tn(r,r.return),e.flags&32){var o=e.stateNode;try{Mo(o,"")}catch(f){ge(e,e.return,f)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ah(o,i),Gl(l,s);var u=Gl(l,i);for(s=0;s<a.length;s+=2){var d=a[s],c=a[s+1];d==="style"?ph(o,c):d==="dangerouslySetInnerHTML"?dh(o,c):d==="children"?Mo(o,c):Ga(o,d,c,u)}switch(l){case"input":Kl(o,i);break;case"textarea":uh(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Pn(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?Pn(o,!!i.multiple,i.defaultValue,!0):Pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ko]=i}catch(f){ge(e,e.return,f)}}break;case 6:if(zt(t,e),Bt(e),n&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(f){ge(e,e.return,f)}}break;case 3:if(zt(t,e),Bt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Uo(t.containerInfo)}catch(f){ge(e,e.return,f)}break;case 4:zt(t,e),Bt(e);break;case 13:zt(t,e),Bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Au=we())),n&4&&Qc(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Be=(u=Be)||d,zt(t,e),Be=u):zt(t,e),Bt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(D=e,d=e.child;d!==null;){for(c=D=d;D!==null;){switch(p=D,v=p.child,p.tag){case 0:case 11:case 14:case 15:To(4,p,p.return);break;case 1:Tn(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(f){ge(n,r,f)}}break;case 5:Tn(p,p.return);break;case 22:if(p.memoizedState!==null){Zc(c);continue}}v!==null?(v.return=p,D=v):Zc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,a=c.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=hh("display",s))}catch(f){ge(e,e.return,f)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(f){ge(e,e.return,f)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:zt(t,e),Bt(e),n&4&&Qc(e);break;case 21:break;default:zt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Np(r)){var n=r;break e}r=r.return}throw Error(T(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Mo(o,""),n.flags&=-33);var i=qc(e);za(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,l=qc(e);Ca(e,l,s);break;default:throw Error(T(161))}}catch(a){ge(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qm(e,t,r){D=e,Vp(e)}function Vp(e,t,r){for(var n=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||Ai;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Be;l=Ai;var u=Be;if(Ai=s,(Be=a)&&!u)for(D=o;D!==null;)s=D,a=s.child,s.tag===22&&s.memoizedState!==null?Jc(o):a!==null?(a.return=s,D=a):Jc(o);for(;i!==null;)D=i,Vp(i),i=i.sibling;D=o,Ai=l,Be=u}Gc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,D=i):Gc(e)}}function Gc(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||Us(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Be)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Et(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dc(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Dc(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Uo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Be||t.flags&512&&$a(t)}catch(p){ge(t,t.return,p)}}if(t===e){D=null;break}if(r=t.sibling,r!==null){r.return=t.return,D=r;break}D=t.return}}function Zc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var r=t.sibling;if(r!==null){r.return=t.return,D=r;break}D=t.return}}function Jc(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Us(4,t)}catch(a){ge(t,r,a)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(a){ge(t,o,a)}}var i=t.return;try{$a(t)}catch(a){ge(t,i,a)}break;case 5:var s=t.return;try{$a(t)}catch(a){ge(t,s,a)}}}catch(a){ge(t,t.return,a)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var Gm=Math.ceil,ps=hr.ReactCurrentDispatcher,Eu=hr.ReactCurrentOwner,wt=hr.ReactCurrentBatchConfig,G=0,Le=null,_e=null,De=0,lt=0,An=Vr(0),$e=0,Zo=null,an=0,Vs=0,Tu=0,Ao=null,Ze=null,Au=0,Wn=1/0,Gt=null,fs=!1,Ea=null,Tr=null,Li=!1,xr=null,ms=0,Lo=0,Ta=null,ji=-1,Wi=0;function Ke(){return(G&6)!==0?we():ji!==-1?ji:ji=we()}function Ar(e){return(e.mode&1)===0?1:(G&2)!==0&&De!==0?De&-De:Dm.transition!==null?(Wi===0&&(Wi=$h()),Wi):(e=te,e!==0||(e=window.event,e=e===void 0?16:Ph(e.type)),e)}function Pt(e,t,r,n){if(50<Lo)throw Lo=0,Ta=null,Error(T(185));oi(e,r,n),((G&2)===0||e!==Le)&&(e===Le&&((G&2)===0&&(Vs|=r),$e===4&&br(e,De)),rt(e,n),r===1&&G===0&&(t.mode&1)===0&&(Wn=we()+500,Fs&&Hr()))}function rt(e,t){var r=e.callbackNode;D0(e,t);var n=Zi(e,e===Le?De:0);if(n===0)r!==null&&ac(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ac(r),t===1)e.tag===0?Om(ed.bind(null,e)):Gh(ed.bind(null,e)),Tm(function(){(G&6)===0&&Hr()}),r=null;else{switch(Ch(n)){case 1:r=ru;break;case 4:r=kh;break;case 16:r=Gi;break;case 536870912:r=Sh;break;default:r=Gi}r=Qp(r,Hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hp(e,t){if(ji=-1,Wi=0,(G&6)!==0)throw Error(T(327));var r=e.callbackNode;if(Mn()&&e.callbackNode!==r)return null;var n=Zi(e,e===Le?De:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=gs(e,n);else{t=n;var o=G;G|=2;var i=Wp();(Le!==e||De!==t)&&(Gt=null,Wn=we()+500,tn(e,t));do try{eg();break}catch(l){jp(e,l)}while(1);mu(),ps.current=i,G=o,_e!==null?t=0:(Le=null,De=0,t=$e)}if(t!==0){if(t===2&&(o=ra(e),o!==0&&(n=o,t=Aa(e,o))),t===1)throw r=Zo,tn(e,0),br(e,n),rt(e,we()),r;if(t===6)br(e,n);else{if(o=e.current.alternate,(n&30)===0&&!Zm(o)&&(t=gs(e,n),t===2&&(i=ra(e),i!==0&&(n=i,t=Aa(e,i))),t===1))throw r=Zo,tn(e,0),br(e,n),rt(e,we()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(T(345));case 2:qr(e,Ze,Gt);break;case 3:if(br(e,n),(n&130023424)===n&&(t=Au+500-we(),10<t)){if(Zi(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ca(qr.bind(null,e,Ze,Gt),t);break}qr(e,Ze,Gt);break;case 4:if(br(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-Lt(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=we()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Gm(n/1960))-n,10<n){e.timeoutHandle=ca(qr.bind(null,e,Ze,Gt),n);break}qr(e,Ze,Gt);break;case 5:qr(e,Ze,Gt);break;default:throw Error(T(329))}}}return rt(e,we()),e.callbackNode===r?Hp.bind(null,e):null}function Aa(e,t){var r=Ao;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=gs(e,t),e!==2&&(t=Ze,Ze=r,t!==null&&La(t)),e}function La(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Zm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!Ot(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(e,t){for(t&=~Tu,t&=~Vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Lt(t),n=1<<r;e[r]=-1,t&=~n}}function ed(e){if((G&6)!==0)throw Error(T(327));Mn();var t=Zi(e,0);if((t&1)===0)return rt(e,we()),null;var r=gs(e,t);if(e.tag!==0&&r===2){var n=ra(e);n!==0&&(t=n,r=Aa(e,n))}if(r===1)throw r=Zo,tn(e,0),br(e,t),rt(e,we()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qr(e,Ze,Gt),rt(e,we()),null}function Lu(e,t){var r=G;G|=1;try{return e(t)}finally{G=r,G===0&&(Wn=we()+500,Fs&&Hr())}}function un(e){xr!==null&&xr.tag===0&&(G&6)===0&&Mn();var t=G;G|=1;var r=wt.transition,n=te;try{if(wt.transition=null,te=1,e)return e()}finally{te=n,wt.transition=r,G=t,(G&6)===0&&Hr()}}function Pu(){lt=An.current,se(An)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Em(r)),_e!==null)for(r=_e.return;r!==null;){var n=r;switch(hu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ns();break;case 3:Hn(),se(et),se(Ve),_u();break;case 5:wu(n);break;case 4:Hn();break;case 13:se(ce);break;case 19:se(ce);break;case 10:gu(n.type._context);break;case 22:case 23:Pu()}r=r.return}if(Le=e,_e=e=Lr(e.current,null),De=lt=t,$e=0,Zo=null,Tu=Vs=an=0,Ze=Ao=null,Zr!==null){for(t=0;t<Zr.length;t++)if(r=Zr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}Zr=null}return e}function jp(e,t){do{var r=_e;try{if(mu(),Ui.current=hs,ds){for(var n=de.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}ds=!1}if(ln=0,Ee=Se=de=null,Eo=!1,qo=0,Eu.current=null,r===null||r.return===null){$e=1,Zo=t,_e=null;break}e:{var i=e,s=r.return,l=r,a=t;if(t=De,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Uc(s);if(v!==null){v.flags&=-257,Vc(v,s,l,i,t),v.mode&1&&Bc(i,u,t),t=v,a=u;var b=t.updateQueue;if(b===null){var f=new Set;f.add(a),t.updateQueue=f}else b.add(a);break e}else{if((t&1)===0){Bc(i,u,t),Ou();break e}a=Error(T(426))}}else if(ae&&l.mode&1){var x=Uc(s);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Vc(x,s,l,i,t),pu(jn(a,l));break e}}i=a=jn(a,l),$e!==4&&($e=2),Ao===null?Ao=[i]:Ao.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=zp(i,a,t);Oc(i,g);break e;case 1:l=a;var m=i.type,w=i.stateNode;if((i.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Tr===null||!Tr.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Ep(i,l,t);Oc(i,_);break e}}i=i.return}while(i!==null)}Xp(r)}catch(k){t=k,_e===r&&r!==null&&(_e=r=r.return);continue}break}while(1)}function Wp(){var e=ps.current;return ps.current=hs,e===null?hs:e}function Ou(){($e===0||$e===3||$e===2)&&($e=4),Le===null||(an&268435455)===0&&(Vs&268435455)===0||br(Le,De)}function gs(e,t){var r=G;G|=2;var n=Wp();(Le!==e||De!==t)&&(Gt=null,tn(e,t));do try{Jm();break}catch(o){jp(e,o)}while(1);if(mu(),G=r,ps.current=n,_e!==null)throw Error(T(261));return Le=null,De=0,$e}function Jm(){for(;_e!==null;)Kp(_e)}function eg(){for(;_e!==null&&!$0();)Kp(_e)}function Kp(e){var t=qp(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Xp(e):_e=t,Eu.current=null}function Xp(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Km(r,t,lt),r!==null){_e=r;return}}else{if(r=Xm(r,t),r!==null){r.flags&=32767,_e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,_e=null;return}}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);$e===0&&($e=5)}function qr(e,t,r){var n=te,o=wt.transition;try{wt.transition=null,te=1,tg(e,t,r,n)}finally{wt.transition=o,te=n}return null}function tg(e,t,r,n){do Mn();while(xr!==null);if((G&6)!==0)throw Error(T(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(R0(e,i),e===Le&&(_e=Le=null,De=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Li||(Li=!0,Qp(Gi,function(){return Mn(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=wt.transition,wt.transition=null;var s=te;te=1;var l=G;G|=4,Eu.current=null,qm(e,r),Up(r,e),_m(aa),Ji=!!la,aa=la=null,e.current=r,Qm(r),C0(),G=l,te=s,wt.transition=i}else e.current=r;if(Li&&(Li=!1,xr=e,ms=o),i=e.pendingLanes,i===0&&(Tr=null),T0(r.stateNode),rt(e,we()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(fs)throw fs=!1,e=Ea,Ea=null,e;return(ms&1)!==0&&e.tag!==0&&Mn(),i=e.pendingLanes,(i&1)!==0?e===Ta?Lo++:(Lo=0,Ta=e):Lo=0,Hr(),null}function Mn(){if(xr!==null){var e=Ch(ms),t=wt.transition,r=te;try{if(wt.transition=null,te=16>e?16:e,xr===null)var n=!1;else{if(e=xr,xr=null,ms=0,(G&6)!==0)throw Error(T(331));var o=G;for(G|=4,D=e.current;D!==null;){var i=D,s=i.child;if((D.flags&16)!==0){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:To(8,d,i)}var c=d.child;if(c!==null)c.return=d,D=c;else for(;D!==null;){d=D;var p=d.sibling,v=d.return;if(Fp(d),d===u){D=null;break}if(p!==null){p.return=v,D=p;break}D=v}}}var b=i.alternate;if(b!==null){var f=b.child;if(f!==null){b.child=null;do{var x=f.sibling;f.sibling=null,f=x}while(f!==null)}}D=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,D=s;else e:for(;D!==null;){if(i=D,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:To(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,D=g;break e}D=i.return}}var m=e.current;for(D=m;D!==null;){s=D;var w=s.child;if((s.subtreeFlags&2064)!==0&&w!==null)w.return=s,D=w;else e:for(s=m;D!==null;){if(l=D,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Us(9,l)}}catch(k){ge(l,l.return,k)}if(l===s){D=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,D=_;break e}D=l.return}}if(G=o,Hr(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Os,e)}catch{}n=!0}return n}finally{te=r,wt.transition=t}}return!1}function td(e,t,r){t=jn(r,t),t=zp(e,t,1),e=Er(e,t,1),t=Ke(),e!==null&&(oi(e,1,t),rt(e,t))}function ge(e,t,r){if(e.tag===3)td(e,e,r);else for(;t!==null;){if(t.tag===3){td(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Tr===null||!Tr.has(n))){e=jn(r,e),e=Ep(t,e,1),t=Er(t,e,1),e=Ke(),t!==null&&(oi(t,1,e),rt(t,e));break}}t=t.return}}function rg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&r,Le===e&&(De&r)===r&&($e===4||$e===3&&(De&130023424)===De&&500>we()-Au?tn(e,0):Tu|=r),rt(e,t)}function Yp(e,t){t===0&&((e.mode&1)===0?t=1:(t=_i,_i<<=1,(_i&130023424)===0&&(_i=4194304)));var r=Ke();e=lr(e,t),e!==null&&(oi(e,t,r),rt(e,r))}function ng(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yp(e,r)}function og(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(t),Yp(e,r)}var qp;qp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Je=!1,Wm(e,t,r);Je=(e.flags&131072)!==0}else Je=!1,ae&&(t.flags&1048576)!==0&&Zh(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Hi(e,t),e=t.pendingProps;var o=Bn(t,Ve.current);In(t,r),o=ku(null,t,n,e,o,r);var i=Su();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(n)?(i=!0,os(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,yu(t),o.updater=Ns,t.stateNode=o,o._reactInternals=t,va(t,n,e,r),t=wa(null,t,n,!0,i,r)):(t.tag=0,ae&&i&&du(t),We(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=sg(n),e=Et(n,e),o){case 0:t=ba(null,t,n,e,r);break e;case 1:t=Wc(null,t,n,e,r);break e;case 11:t=Hc(null,t,n,e,r);break e;case 14:t=jc(null,t,n,Et(n.type,e),r);break e}throw Error(T(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Et(n,o),ba(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Et(n,o),Wc(e,t,n,o,r);case 3:e:{if(Pp(t),e===null)throw Error(T(387));n=t.pendingProps,i=t.memoizedState,o=i.element,rp(e,t),us(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=jn(Error(T(423)),t),t=Kc(e,t,n,r,o);break e}else if(n!==o){o=jn(Error(T(424)),t),t=Kc(e,t,n,r,o);break e}else for(ut=zr(t.stateNode.containerInfo.firstChild),dt=t,ae=!0,At=null,r=sp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Un(),n===o){t=ar(e,t,r);break e}We(e,t,n,r)}t=t.child}return t;case 5:return lp(t),e===null&&fa(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ua(n,o)?s=null:i!==null&&ua(n,i)&&(t.flags|=32),Lp(e,t),We(e,t,s,r),t.child;case 6:return e===null&&fa(t),null;case 13:return Op(e,t,r);case 4:return bu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vn(t,null,n,r):We(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Et(n,o),Hc(e,t,n,o,r);case 7:return We(e,t,t.pendingProps,r),t.child;case 8:return We(e,t,t.pendingProps.children,r),t.child;case 12:return We(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,re(ls,n._currentValue),n._currentValue=s,i!==null)if(Ot(i.value,s)){if(i.children===o.children&&!et.current){t=ar(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===n){if(i.tag===1){a=rr(-1,r&-r),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=r,a=i.alternate,a!==null&&(a.lanes|=r),ma(i.return,r,t),l.lanes|=r;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),ma(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}We(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,In(t,r),o=_t(o),n=n(o),t.flags|=1,We(e,t,n,r),t.child;case 14:return n=t.type,o=Et(n,t.pendingProps),o=Et(n.type,o),jc(e,t,n,o,r);case 15:return Tp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Et(n,o),Hi(e,t),t.tag=1,tt(n)?(e=!0,os(t)):e=!1,In(t,r),op(t,n,o),va(t,n,o,r),wa(null,t,n,!0,e,r);case 19:return Dp(e,t,r);case 22:return Ap(e,t,r)}throw Error(T(156,t.tag))};function Qp(e,t){return xh(e,t)}function ig(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,r,n){return new ig(e,t,r,n)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return Du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ja)return 11;if(e===eu)return 14}return 2}function Lr(e,t){var r=e.alternate;return r===null?(r=bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ki(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")Du(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wn:return rn(r.children,o,i,t);case Za:s=8,o|=8;break;case Ul:return e=bt(12,r,t,o|2),e.elementType=Ul,e.lanes=i,e;case Vl:return e=bt(13,r,t,o),e.elementType=Vl,e.lanes=i,e;case Hl:return e=bt(19,r,t,o),e.elementType=Hl,e.lanes=i,e;case ih:return Hs(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nh:s=10;break e;case oh:s=9;break e;case Ja:s=11;break e;case eu:s=14;break e;case gr:s=16,n=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=bt(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function rn(e,t,r,n){return e=bt(7,e,n,t),e.lanes=r,e}function Hs(e,t,r,n){return e=bt(22,e,n,t),e.elementType=ih,e.lanes=r,e.stateNode={isHidden:!1},e}function El(e,t,r){return e=bt(6,e,null,t),e.lanes=r,e}function Tl(e,t,r){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lg(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ru(e,t,r,n,o,i,s,l,a){return e=new lg(e,t,r,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=bt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(i),e}function ag(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Gp(e){if(!e)return Dr;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if(tt(r))return Qh(e,r,t)}return t}function Zp(e,t,r,n,o,i,s,l,a){return e=Ru(r,n,!0,e,o,i,s,l,a),e.context=Gp(null),r=e.current,n=Ke(),o=Ar(r),i=rr(n,o),i.callback=t!=null?t:null,Er(r,i,o),e.current.lanes=o,oi(e,o,n),rt(e,n),e}function js(e,t,r,n){var o=t.current,i=Ke(),s=Ar(o);return r=Gp(r),t.context===null?t.context=r:t.pendingContext=r,t=rr(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Er(o,t,s),e!==null&&(Pt(e,o,s,i),Bi(e,o,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Iu(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function ug(){return null}var Jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mu(e){this._internalRoot=e}Ws.prototype.render=Mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));js(e,t,null,null)};Ws.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){js(null,e,null,null)}),t[sr]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=Th();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yr.length&&t!==0&&t<yr[r].priority;r++);yr.splice(r,0,e),r===0&&Lh(e)}};function Fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function cg(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=vs(s);i.call(u)}}var s=Zp(t,n,e,0,null,!1,!1,"",nd);return e._reactRootContainer=s,e[sr]=s.current,jo(e.nodeType===8?e.parentNode:e),un(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var u=vs(a);l.call(u)}}var a=Ru(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=a,e[sr]=a.current,jo(e.nodeType===8?e.parentNode:e),un(function(){js(t,a,r,n)}),a}function Xs(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=vs(s);l.call(a)}}js(t,s,e,o)}else s=cg(r,t,e,o,n);return vs(s)}zh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=_o(t.pendingLanes);r!==0&&(nu(t,r|1),rt(t,we()),(G&6)===0&&(Wn=we()+500,Hr()))}break;case 13:un(function(){var n=lr(e,1);if(n!==null){var o=Ke();Pt(n,e,1,o)}}),Iu(e,1)}};ou=function(e){if(e.tag===13){var t=lr(e,134217728);if(t!==null){var r=Ke();Pt(t,e,134217728,r)}Iu(e,134217728)}};Eh=function(e){if(e.tag===13){var t=Ar(e),r=lr(e,t);if(r!==null){var n=Ke();Pt(r,e,t,n)}Iu(e,t)}};Th=function(){return te};Ah=function(e,t){var r=te;try{return te=e,t()}finally{te=r}};Jl=function(e,t,r){switch(t){case"input":if(Kl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ms(n);if(!o)throw Error(T(90));lh(n),Kl(n,o)}}}break;case"textarea":uh(e,r);break;case"select":t=r.value,t!=null&&Pn(e,!!r.multiple,t,!1)}};gh=Lu;vh=un;var dg={usingClientEntryPoint:!1,Events:[si,Sn,Ms,fh,mh,Lu]},fo={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hg={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wh(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||ug,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Os=Pi.inject(hg),Ht=Pi}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dg;mt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(t))throw Error(T(200));return ag(e,t,null,r)};mt.createRoot=function(e,t){if(!Fu(e))throw Error(T(299));var r=!1,n="",o=Jp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ru(e,1,!1,null,null,r,!1,n,o),e[sr]=t.current,jo(e.nodeType===8?e.parentNode:e),new Mu(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=wh(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return un(e)};mt.hydrate=function(e,t,r){if(!Ks(t))throw Error(T(200));return Xs(null,e,t,!0,r)};mt.hydrateRoot=function(e,t,r){if(!Fu(e))throw Error(T(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=Jp;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Zp(t,null,e,1,r!=null?r:null,o,!1,i,s),e[sr]=t.current,jo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ws(t)};mt.render=function(e,t,r){if(!Ks(t))throw Error(T(200));return Xs(null,e,t,!1,r)};mt.unmountComponentAtNode=function(e){if(!Ks(e))throw Error(T(40));return e._reactRootContainer?(un(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[sr]=null})}),!0):!1};mt.unstable_batchedUpdates=Lu;mt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ks(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Xs(e,t,r,!1,n)};mt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}t(),e.exports=mt})(Zd);var ef,od=Zd.exports;ef=od.createRoot,od.hydrateRoot;function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ys.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));var id=function(e){return e},sd="beforeunload",pg="popstate";function fg(e){e===void 0&&(e={});var t=e,r=t.window,n=r===void 0?document.defaultView:r,o=n.history;function i(){var S=n.location,C=S.pathname,A=S.search,z=S.hash,j=o.state||{};return[j.idx,id({pathname:C,search:A,hash:z,state:j.usr||null,key:j.key||"default"})]}var s=null;function l(){if(s)v.call(s),s=null;else{var S=en.Pop,C=i(),A=C[0],z=C[1];if(v.length){if(A!=null){var j=d-A;j&&(s={action:S,location:z,retry:function(){k(j*-1)}},k(j))}}else m(S)}}n.addEventListener(pg,l);var a=en.Pop,u=i(),d=u[0],c=u[1],p=ad(),v=ad();d==null&&(d=0,o.replaceState(ys({},o.state,{idx:d}),""));function b(S){return typeof S=="string"?S:gg(S)}function f(S,C){return C===void 0&&(C=null),id(ys({pathname:c.pathname,hash:"",search:""},typeof S=="string"?oo(S):S,{state:C,key:mg()}))}function x(S,C){return[{usr:S.state,key:S.key,idx:C},b(S)]}function g(S,C,A){return!v.length||(v.call({action:S,location:C,retry:A}),!1)}function m(S){a=S;var C=i();d=C[0],c=C[1],p.call({action:a,location:c})}function w(S,C){var A=en.Push,z=f(S,C);function j(){w(S,C)}if(g(A,z,j)){var ne=x(z,d+1),me=ne[0],Ce=ne[1];try{o.pushState(me,"",Ce)}catch{n.location.assign(Ce)}m(A)}}function _(S,C){var A=en.Replace,z=f(S,C);function j(){_(S,C)}if(g(A,z,j)){var ne=x(z,d),me=ne[0],Ce=ne[1];o.replaceState(me,"",Ce),m(A)}}function k(S){o.go(S)}var $={get action(){return a},get location(){return c},createHref:b,push:w,replace:_,go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(C){return p.push(C)},block:function(C){var A=v.push(C);return v.length===1&&n.addEventListener(sd,ld),function(){A(),v.length||n.removeEventListener(sd,ld)}}};return $}function ld(e){e.preventDefault(),e.returnValue=""}function ad(){var e=[];return{get length(){return e.length},push:function(r){return e.push(r),function(){e=e.filter(function(n){return n!==r})}},call:function(r){e.forEach(function(n){return n&&n(r)})}}}function mg(){return Math.random().toString(36).substr(2,8)}function gg(e){var t=e.pathname,r=t===void 0?"/":t,n=e.search,o=n===void 0?"":n,i=e.hash,s=i===void 0?"":i;return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function oo(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const tf=Q.exports.createContext(null),Nu=Q.exports.createContext(null),Bu=Q.exports.createContext({outlet:null,matches:[]});function ur(e,t){if(!e)throw new Error(t)}function vg(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?oo(t):t,o=nf(n.pathname||"/",r);if(o==null)return null;let i=rf(e);yg(i);let s=null;for(let l=0;s==null&&l<i.length;++l)s=zg(i[l],o);return s}function rf(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((o,i)=>{let s={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(n)||ur(!1),s.relativePath=s.relativePath.slice(n.length));let l=nn([n,s.relativePath]),a=r.concat(s);o.children&&o.children.length>0&&(o.index===!0&&ur(!1),rf(o.children,t,a,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:$g(l,o.index),routesMeta:a})}),t}function yg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Cg(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const bg=/^:\w+$/,wg=3,_g=2,xg=1,kg=10,Sg=-2,ud=e=>e==="*";function $g(e,t){let r=e.split("/"),n=r.length;return r.some(ud)&&(n+=Sg),t&&(n+=_g),r.filter(o=>!ud(o)).reduce((o,i)=>o+(bg.test(i)?wg:i===""?xg:kg),n)}function Cg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function zg(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let s=0;s<r.length;++s){let l=r[s],a=s===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=Eg({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(n,d.params);let c=l.route;i.push({params:n,pathname:nn([o,d.pathname]),pathnameBase:of(nn([o,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(o=nn([o,d.pathnameBase]))}return i}function Eg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Tg(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((u,d,c)=>{if(d==="*"){let p=l[c]||"";s=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return u[d]=Ag(l[c]||""),u},{}),pathname:i,pathnameBase:s,pattern:e}}function Tg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,l)=>(n.push(l),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(o,t?void 0:"i"),n]}function Ag(e,t){try{return decodeURIComponent(e)}catch{return e}}function Lg(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?oo(e):e;return{pathname:r?r.startsWith("/")?r:Pg(r,t):t,search:Dg(n),hash:Rg(o)}}function Pg(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Og(e,t,r){let n=typeof e=="string"?oo(e):e,o=e===""||n.pathname===""?"/":n.pathname,i;if(o==null)i=r;else{let l=t.length-1;if(o.startsWith("..")){let a=o.split("/");for(;a[0]==="..";)a.shift(),l-=1;n.pathname=a.join("/")}i=l>=0?t[l]:"/"}let s=Lg(n,i);return o&&o!=="/"&&o.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function nf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&r!=="/"?null:e.slice(t.length)||"/"}const nn=e=>e.join("/").replace(/\/\/+/g,"/"),of=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ys(){return Q.exports.useContext(Nu)!=null}function Uu(){return Ys()||ur(!1),Q.exports.useContext(Nu).location}function sf(){Ys()||ur(!1);let{basename:e,navigator:t}=Q.exports.useContext(tf),{matches:r}=Q.exports.useContext(Bu),{pathname:n}=Uu(),o=JSON.stringify(r.map(l=>l.pathnameBase)),i=Q.exports.useRef(!1);return Q.exports.useEffect(()=>{i.current=!0}),Q.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!i.current)return;if(typeof l=="number"){t.go(l);return}let u=Og(l,JSON.parse(o),n);e!=="/"&&(u.pathname=nn([e,u.pathname])),(a.replace?t.replace:t.push)(u,a.state)},[e,t,o,n])}function Ig(e,t){Ys()||ur(!1);let{matches:r}=Q.exports.useContext(Bu),n=r[r.length-1],o=n?n.params:{};n&&n.pathname;let i=n?n.pathnameBase:"/";n&&n.route;let s=Uu(),l;if(t){var a;let p=typeof t=="string"?oo(t):t;i==="/"||((a=p.pathname)==null?void 0:a.startsWith(i))||ur(!1),l=p}else l=s;let u=l.pathname||"/",d=i==="/"?u:u.slice(i.length)||"/",c=vg(e,{pathname:d});return Mg(c&&c.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:nn([i,p.pathname]),pathnameBase:p.pathnameBase==="/"?i:nn([i,p.pathnameBase])})),r)}function Mg(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((r,n,o)=>Q.exports.createElement(Bu.Provider,{children:n.route.element!==void 0?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,o+1))}}),null)}function Pa(e){ur(!1)}function Fg(e){let{basename:t="/",children:r=null,location:n,navigationType:o=en.Pop,navigator:i,static:s=!1}=e;Ys()&&ur(!1);let l=of(t),a=Q.exports.useMemo(()=>({basename:l,navigator:i,static:s}),[l,i,s]);typeof n=="string"&&(n=oo(n));let{pathname:u="/",search:d="",hash:c="",state:p=null,key:v="default"}=n,b=Q.exports.useMemo(()=>{let f=nf(u,l);return f==null?null:{pathname:f,search:d,hash:c,state:p,key:v}},[l,u,d,c,p,v]);return b==null?null:Q.exports.createElement(tf.Provider,{value:a},Q.exports.createElement(Nu.Provider,{children:r,value:{location:b,navigationType:o}}))}function Ng(e){let{children:t,location:r}=e;return Ig(Oa(t),r)}function Oa(e){let t=[];return Q.exports.Children.forEach(e,r=>{if(!Q.exports.isValidElement(r))return;if(r.type===Q.exports.Fragment){t.push.apply(t,Oa(r.props.children));return}r.type!==Pa&&ur(!1);let n={caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path};r.props.children&&(n.children=Oa(r.props.children)),t.push(n)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bg(e){let{basename:t,children:r,window:n}=e,o=Q.exports.useRef();o.current==null&&(o.current=fg({window:n}));let i=o.current,[s,l]=Q.exports.useState({action:i.action,location:i.location});return Q.exports.useLayoutEffect(()=>i.listen(l),[i]),Q.exports.createElement(Fg,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i})}var Vu=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hu=Symbol(),cd=new Map,lf=class{constructor(e,t){if(this._$cssResult$=!0,t!==Hu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=cd.get(this.cssText);return Vu&&e===void 0&&(cd.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},Ug=e=>new lf(typeof e=="string"?e:e+"",Hu),U=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new lf(r,Hu)},Vg=(e,t)=>{Vu?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=window.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},dd=Vu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Ug(r)})(e):e,Al,hd=window.trustedTypes,Hg=hd?hd.emptyScript:"",pd=window.reactiveElementPolyfillSupport,Jo={toAttribute(e,t){switch(t){case Boolean:e=e?Hg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},af=(e,t)=>t!==e&&(t==t||e==e),Ll={attribute:!0,type:String,converter:Jo,reflect:!1,hasChanged:af},yn=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Eh(r,t);n!==void 0&&(this._$Eu.set(n,r),e.push(n))}),e}static createProperty(e,t=Ll){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ll}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(dd(n))}else e!==void 0&&t.push(dd(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Vg(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=Ll){var n,o;const i=this.constructor._$Eh(e,r);if(i!==void 0&&r.reflect===!0){const s=((o=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:Jo.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(e,t){var r,n,o;const i=this.constructor,s=i._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const l=i.getPropertyOptions(s),a=l.converter,u=(o=(n=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&o!==void 0?o:Jo.fromAttribute;this._$Ei=s,this[s]=u(t,l.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||af)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,o)=>this[o]=n),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};yn.finalized=!0,yn.elementProperties=new Map,yn.elementStyles=[],yn.shadowRootOptions={mode:"open"},pd==null||pd({ReactiveElement:yn}),((Al=globalThis.reactiveElementVersions)!==null&&Al!==void 0?Al:globalThis.reactiveElementVersions=[]).push("1.3.2");var Pl,Kn=globalThis.trustedTypes,fd=Kn?Kn.createPolicy("lit-html",{createHTML:e=>e}):void 0,wr=`lit$${(Math.random()+"").slice(9)}$`,uf="?"+wr,jg=`<${uf}>`,Xn=document,ei=(e="")=>Xn.createComment(e),ti=e=>e===null||typeof e!="object"&&typeof e!="function",cf=Array.isArray,Wg=e=>{var t;return cf(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},mo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,md=/-->/g,gd=/>/g,Xr=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,vd=/'/g,yd=/"/g,df=/^(?:script|style|textarea|title)$/i,Kg=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),L=Kg(1),ct=Symbol.for("lit-noChange"),ve=Symbol.for("lit-nothing"),bd=new WeakMap,Xg=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=i._$litPart$;if(s===void 0){const l=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new qs(t.insertBefore(ei(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s},Fn=Xn.createTreeWalker(Xn,129,null,!1),Yg=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=mo;for(let a=0;a<r;a++){const u=e[a];let d,c,p=-1,v=0;for(;v<u.length&&(s.lastIndex=v,c=s.exec(u),c!==null);)v=s.lastIndex,s===mo?c[1]==="!--"?s=md:c[1]!==void 0?s=gd:c[2]!==void 0?(df.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=Xr):c[3]!==void 0&&(s=Xr):s===Xr?c[0]===">"?(s=o!=null?o:mo,p=-1):c[1]===void 0?p=-2:(p=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?Xr:c[3]==='"'?yd:vd):s===yd||s===vd?s=Xr:s===md||s===gd?s=mo:(s=Xr,o=void 0);const b=s===Xr&&e[a+1].startsWith("/>")?" ":"";i+=s===mo?u+jg:p>=0?(n.push(d),u.slice(0,p)+"$lit$"+u.slice(p)+wr+b):u+wr+(p===-2?(n.push(void 0),a):b)}const l=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[fd!==void 0?fd.createHTML(l):l,n]},bs=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,i=0;const s=e.length-1,l=this.parts,[a,u]=Yg(e,t);if(this.el=bs.createElement(a,r),Fn.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=Fn.nextNode())!==null&&l.length<s;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(wr)){const p=u[i++];if(d.push(c),p!==void 0){const v=n.getAttribute(p.toLowerCase()+"$lit$").split(wr),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:b[2],strings:v,ctor:b[1]==="."?Qg:b[1]==="?"?Zg:b[1]==="@"?Jg:Qs})}else l.push({type:6,index:o})}for(const c of d)n.removeAttribute(c)}if(df.test(n.tagName)){const d=n.textContent.split(wr),c=d.length-1;if(c>0){n.textContent=Kn?Kn.emptyScript:"";for(let p=0;p<c;p++)n.append(d[p],ei()),Fn.nextNode(),l.push({type:2,index:++o});n.append(d[c],ei())}}}else if(n.nodeType===8)if(n.data===uf)l.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(wr,d+1))!==-1;)l.push({type:7,index:o}),d+=wr.length-1}o++}}static createElement(e,t){const r=Xn.createElement("template");return r.innerHTML=e,r}};function Yn(e,t,r=e,n){var o,i,s,l;if(t===ct)return t;let a=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const u=ti(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,r,n)),n!==void 0?((s=(l=r)._$Cl)!==null&&s!==void 0?s:l._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(t=Yn(e,a._$AS(e,t.values),a,n)),t}var qg=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Xn).importNode(r,!0);Fn.currentNode=o;let i=Fn.nextNode(),s=0,l=0,a=n[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new qs(i,i.nextSibling,this,e):a.type===1?u=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(u=new ev(i,this,e)),this.v.push(u),a=n[++l]}s!==(a==null?void 0:a.index)&&(i=Fn.nextNode(),s++)}return o}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},qs=class{constructor(e,t,r,n){var o;this.type=2,this._$AH=ve,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Yn(this,e,t),ti(e)?e===ve||e==null||e===""?(this._$AH!==ve&&this._$AR(),this._$AH=ve):e!==this._$AH&&e!==ct&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Wg(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==ve&&ti(this._$AH)?this._$AA.nextSibling.data=e:this.k(Xn.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=bs.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(r);else{const i=new qg(o,this),s=i.p(this.options);i.m(r),this.k(s),this._$AH=i}}_$AC(e){let t=bd.get(e.strings);return t===void 0&&bd.set(e.strings,t=new bs(e)),t}S(e){cf(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const o of e)n===t.length?t.push(r=new qs(this.M(ei()),this.M(ei()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Qs=class{constructor(e,t,r,n,o){this.type=1,this._$AH=ve,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ve}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const o=this.strings;let i=!1;if(o===void 0)e=Yn(this,e,t,0),i=!ti(e)||e!==this._$AH&&e!==ct,i&&(this._$AH=e);else{const s=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Yn(this,s[r+l],t,l),a===ct&&(a=this._$AH[l]),i||(i=!ti(a)||a!==this._$AH[l]),a===ve?e=ve:e!==ve&&(e+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}i&&!n&&this.C(e)}C(e){e===ve?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Qg=class extends Qs{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===ve?void 0:e}},Gg=Kn?Kn.emptyScript:"",Zg=class extends Qs{constructor(){super(...arguments),this.type=4}C(e){e&&e!==ve?this.element.setAttribute(this.name,Gg):this.element.removeAttribute(this.name)}},Jg=class extends Qs{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){var r;if((e=(r=Yn(this,e,t,0))!==null&&r!==void 0?r:ve)===ct)return;const n=this._$AH,o=e===ve&&n!==ve||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==ve&&(n===ve||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ev=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Yn(this,e)}},wd=window.litHtmlPolyfillSupport;wd==null||wd(bs,qs),((Pl=globalThis.litHtmlVersions)!==null&&Pl!==void 0?Pl:globalThis.litHtmlVersions=[]).push("2.2.4");var Ol,Dl,I=class extends yn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Xg(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return ct}};I.finalized=!0,I._$litElement$=!0,(Ol=globalThis.litElementHydrateSupport)===null||Ol===void 0||Ol.call(globalThis,{LitElement:I});var _d=globalThis.litElementPolyfillSupport;_d==null||_d({LitElement:I});((Dl=globalThis.litElementVersions)!==null&&Dl!==void 0?Dl:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gs=U`
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
`,V=U`
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
`,tv=U`
  ${V}
  ${Gs}

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
`,Jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ai=e=>(...t)=>({_$litDirective$:e,values:t}),Zs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rv=e=>e.strings===void 0,nv={},ov=(e,t=nv)=>e._$AH=t,Rr=ai(class extends Zs{constructor(e){if(super(e),e.type!==Jt.PROPERTY&&e.type!==Jt.ATTRIBUTE&&e.type!==Jt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!rv(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ct||t===ve)return t;const r=e.element,n=e.name;if(e.type===Jt.PROPERTY){if(t===r[n])return ct}else if(e.type===Jt.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return ct}else if(e.type===Jt.ATTRIBUTE&&r.getAttribute(n)===t+"")return ct;return ov(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr=(e="value")=>(t,r)=>{const n=t.constructor,o=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(i,s,l){var a;const u=n.getPropertyOptions(e),d=typeof u.attribute=="string"?u.attribute:e;if(i===d){const c=u.converter||Jo,v=(typeof c=="function"?c:(a=c==null?void 0:c.fromAttribute)!=null?a:Jo.fromAttribute)(l,u.type);this[e]!==v&&(this[r]=v)}o.call(this,i,s,l)}},iv=Object.create,ui=Object.defineProperty,sv=Object.defineProperties,hf=Object.getOwnPropertyDescriptor,lv=Object.getOwnPropertyDescriptors,pf=Object.getOwnPropertyNames,ws=Object.getOwnPropertySymbols,av=Object.getPrototypeOf,ju=Object.prototype.hasOwnProperty,ff=Object.prototype.propertyIsEnumerable,xd=(e,t,r)=>t in e?ui(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))ju.call(t,r)&&xd(e,r,t[r]);if(ws)for(var r of ws(t))ff.call(t,r)&&xd(e,r,t[r]);return e},kt=(e,t)=>sv(e,lv(t)),Wu=(e,t)=>{var r={};for(var n in e)ju.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ws)for(var n of ws(e))t.indexOf(n)<0&&ff.call(e,n)&&(r[n]=e[n]);return r},jr=(e,t)=>function(){return t||(0,e[pf(e)[0]])((t={exports:{}}).exports,t),t.exports},uv=(e,t)=>{for(var r in t)ui(e,r,{get:t[r],enumerable:!0})},cv=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of pf(t))!ju.call(e,o)&&o!==r&&ui(e,o,{get:()=>t[o],enumerable:!(n=hf(t,o))||n.enumerable});return e},dv=(e,t,r)=>(r=e!=null?iv(av(e)):{},cv(t||!e||!e.__esModule?ui(r,"default",{value:e,enumerable:!0}):r,e)),h=(e,t,r,n)=>{for(var o=n>1?void 0:n?hf(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&ui(t,r,o),o},hv=class extends Event{constructor(e){super("formdata"),this.formData=e}},pv=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new hv(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const n=this.getAll(e),o=n.indexOf(r.value);o!==-1&&n.splice(o,1),n.push(t),this.set(e,n)}else super.append(e,t);r.value=t}};function fv(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function kd(){!window.FormData||fv()||(window.FormData=pv,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?kd():window.addEventListener("DOMContentLoaded",()=>kd());var go=new WeakMap,qt=class{constructor(e,t){(this.host=e).addController(this),this.options=he({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,n)=>{r.value=n}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),go.has(this.form)||(go.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),go.has(this.form)&&(this.form.reportValidity=go.get(this.form),go.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host);!t&&typeof r=="string"&&typeof n<"u"&&(Array.isArray(n)?n.forEach(o=>{e.formData.append(r,o.toString())}):e.formData.append(r,n.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},Nt=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function mf(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}var X=ai(class extends Zs{constructor(e){var t;if(super(e),e.type!==Jt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.st)===null||r===void 0)&&r.has(i))&&this.et.add(i);return this.render(t)}const o=e.element.classList;this.et.forEach(i=>{i in t||(o.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((n=this.st)===null||n===void 0?void 0:n.has(i))||(s?(o.add(i),this.et.add(i)):(o.remove(i),this.et.delete(i)))}return ct}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O=e=>e!=null?e:ve;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(e,t){const r=he({waitUntilFirstUpdate:!1},t);return(n,o)=>{const{update:i}=n;if(e in n){const s=e;n.update=function(l){if(l.has(s)){const a=l.get(s),u=this[s];a!==u&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](a,u)}i.call(this,l)}}}}function E(e,t,r){const n=new CustomEvent(t,he({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(n),n}function St(e,t){return new Promise(r=>{function n(o){o.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}var N=e=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:o,elements:i}=n;return{kind:o,elements:i,finisher(s){window.customElements.define(r,s)}}})(e,t),mv=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?kt(he({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function y(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):mv(e,t)}function q(e){return y(kt(he({},e),{state:!0}))}var gf=({finisher:e,descriptor:t})=>(r,n)=>{var o;if(n===void 0){const i=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:kt(he({},r),{key:i});return e!=null&&(s.finisher=function(l){e(l,i)}),s}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(i,n)}};function M(e,t){return gf({descriptor:r=>{const n={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var i,s;return this[o]===void 0&&(this[o]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&s!==void 0?s:null),this[o]}}return n}})}function gv(e){return gf({descriptor:t=>({async get(){var r;return await this.updateComplete,(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}var Rl;((Rl=window.HTMLSlotElement)===null||Rl===void 0?void 0:Rl.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this),this.hasSlotController=new Nt(this,"help-text","label"),this.hasFocus=!1,this.size="medium",this.value="",this.filled=!1,this.label="",this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value,E(this,"sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),E(this,"sl-input"),E(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),E(this,"sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleInput(){this.value=this.input.value,this.setTextareaHeight(),E(this,"sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity()}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return L`
      <div
        part="form-control"
        class=${X({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
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
            class=${X({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${O(this.name)}
              .value=${Rr(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${O(this.placeholder)}
              rows=${O(this.rows)}
              minlength=${O(this.minlength)}
              maxlength=${O(this.maxlength)}
              autocapitalize=${O(this.autocapitalize)}
              autocorrect=${O(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${O(this.spellcheck)}
              enterkeyhint=${O(this.enterkeyhint)}
              inputmode=${O(this.inputmode)}
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
    `}};J.styles=tv;h([M(".textarea__control")],J.prototype,"input",2);h([q()],J.prototype,"hasFocus",2);h([y({reflect:!0})],J.prototype,"size",2);h([y()],J.prototype,"name",2);h([y()],J.prototype,"value",2);h([y({type:Boolean,reflect:!0})],J.prototype,"filled",2);h([y()],J.prototype,"label",2);h([y({attribute:"help-text"})],J.prototype,"helpText",2);h([y()],J.prototype,"placeholder",2);h([y({type:Number})],J.prototype,"rows",2);h([y()],J.prototype,"resize",2);h([y({type:Boolean,reflect:!0})],J.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],J.prototype,"readonly",2);h([y({type:Number})],J.prototype,"minlength",2);h([y({type:Number})],J.prototype,"maxlength",2);h([y({type:Boolean,reflect:!0})],J.prototype,"required",2);h([y({type:Boolean,reflect:!0})],J.prototype,"invalid",2);h([y()],J.prototype,"autocapitalize",2);h([y()],J.prototype,"autocorrect",2);h([y()],J.prototype,"autocomplete",2);h([y({type:Boolean})],J.prototype,"autofocus",2);h([y()],J.prototype,"enterkeyhint",2);h([y({type:Boolean})],J.prototype,"spellcheck",2);h([y()],J.prototype,"inputmode",2);h([pr()],J.prototype,"defaultValue",2);h([P("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);h([P("rows",{waitUntilFirstUpdate:!0})],J.prototype,"handleRowsChange",1);h([P("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);J=h([N("sl-textarea")],J);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vv=new Set(["children","localName","ref","style","className"]),Sd=new WeakMap,yv=(e,t,r,n,o)=>{const i=o==null?void 0:o[t];i!==void 0?r!==n&&((s,l,a)=>{let u=Sd.get(s);u===void 0&&Sd.set(s,u=new Map);let d=u.get(l);a!==void 0?d===void 0?(u.set(l,d={handleEvent:a}),s.addEventListener(l,d)):d.handleEvent=a:d!==void 0&&(u.delete(l),s.removeEventListener(l,d))})(e,i,r):e[t]=r},B=(e,t,r,n,o)=>{const i=e.Component,s=e.createElement,l=new Set(Object.keys(n!=null?n:{}));for(const d in r.prototype)d in HTMLElement.prototype||(vv.has(d)?console.warn(`${t} contains property ${d} which is a React reserved property. It will be used by React and not set on the element.`):l.add(d));class a extends i{constructor(){super(...arguments),this.o=null}t(c){if(this.o!==null)for(const p in this.i)yv(this.o,p,this.props[p],c?c[p]:void 0,n)}componentDidMount(){this.t()}componentDidUpdate(c){this.t(c)}render(){const c=this.props._$Gl;this.h!==void 0&&this.u===c||(this.h=v=>{this.o===null&&(this.o=v),c!==null&&((b,f)=>{typeof b=="function"?b(f):b.current=f})(c,v),this.u=c});const p={ref:this.h};this.i={};for(const[v,b]of Object.entries(this.props))v!=="__forwardedRef"&&(l.has(v)?this.i[v]=b:p[v==="className"?"class":v]=b);return s(t,p)}}a.displayName=o!=null?o:r.name;const u=e.forwardRef((d,c)=>s(a,{...d,_$Gl:c},d==null?void 0:d.children));return u.displayName=a.displayName,u};B(F,"sl-textarea",J,{onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur"});var bv=U`
  ${V}

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
`;function io(e){return e.split("-")[0]}function ci(e){return e.split("-")[1]}function di(e){return["top","bottom"].includes(io(e))?"x":"y"}function Ku(e){return e==="y"?"height":"width"}function $d(e,t,r){let{reference:n,floating:o}=e;const i=n.x+n.width/2-o.width/2,s=n.y+n.height/2-o.height/2,l=di(t),a=Ku(l),u=n[a]/2-o[a]/2,d=l==="x";let c;switch(io(t)){case"top":c={x:i,y:n.y-o.height};break;case"bottom":c={x:i,y:n.y+n.height};break;case"right":c={x:n.x+n.width,y:s};break;case"left":c={x:n.x-o.width,y:s};break;default:c={x:n.x,y:n.y}}switch(ci(t)){case"start":c[l]-=u*(r&&d?-1:1);break;case"end":c[l]+=u*(r&&d?-1:1)}return c}var wv=async(e,t,r)=>{const{placement:n="bottom",strategy:o="absolute",middleware:i=[],platform:s}=r,l=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=$d(a,n,l),c=n,p={},v=0;for(let b=0;b<i.length;b++){const{name:f,fn:x}=i[b],{x:g,y:m,data:w,reset:_}=await x({x:u,y:d,initialPlacement:n,placement:c,strategy:o,middlewareData:p,rects:a,platform:s,elements:{reference:e,floating:t}});u=g!=null?g:u,d=m!=null?m:d,p=kt(he({},p),{[f]:he(he({},p[f]),w)}),_&&v<=50&&(v++,typeof _=="object"&&(_.placement&&(c=_.placement),_.rects&&(a=_.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):_.rects),{x:u,y:d}=$d(a,c,l)),b=-1)}return{x:u,y:d,placement:c,strategy:o,middlewareData:p}};function vf(e){return typeof e!="number"?function(t){return he({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function _s(e){return kt(he({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Xu(e,t){var r;t===void 0&&(t={});const{x:n,y:o,platform:i,rects:s,elements:l,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:p=!1,padding:v=0}=t,b=vf(v),f=l[p?c==="floating"?"reference":"floating":c],x=_s(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(f)))==null||r?f:f.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:a})),g=_s(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c==="floating"?kt(he({},s.floating),{x:n,y:o}):s.reference,offsetParent:await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),strategy:a}):s[c]);return{top:x.top-g.top+b.top,bottom:g.bottom-x.bottom+b.bottom,left:x.left-g.left+b.left,right:g.right-x.right+b.right}}var _v=Math.min,Qr=Math.max;function Da(e,t,r){return Qr(e,_v(t,r))}var xv=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:n=0}=e!=null?e:{},{x:o,y:i,placement:s,rects:l,platform:a}=t;if(r==null)return{};const u=vf(n),d={x:o,y:i},c=di(s),p=ci(s),v=Ku(c),b=await a.getDimensions(r),f=c==="y"?"top":"left",x=c==="y"?"bottom":"right",g=l.reference[v]+l.reference[c]-d[c]-l.floating[v],m=d[c]-l.reference[c],w=await(a.getOffsetParent==null?void 0:a.getOffsetParent(r));let _=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0;_===0&&(_=l.floating[v]);const k=g/2-m/2,$=u[f],S=_-b[v]-u[x],C=_/2-b[v]/2+k,A=Da($,C,S),z=(p==="start"?u[f]:u[x])>0&&C!==A&&l.reference[v]<=l.floating[v];return{[c]:d[c]-(z?C<$?$-C:S-C:0),data:{[c]:A,centerOffset:C-A}}}}),kv={left:"right",right:"left",bottom:"top",top:"bottom"};function xs(e){return e.replace(/left|right|bottom|top/g,t=>kv[t])}function Sv(e,t,r){r===void 0&&(r=!1);const n=ci(e),o=di(e),i=Ku(o);let s=o==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=xs(s)),{main:s,cross:xs(s)}}var $v={start:"end",end:"start"};function Cd(e){return e.replace(/start|end/g,t=>$v[t])}var Cv=["top","right","bottom","left"];Cv.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var yf=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:n,middlewareData:o,rects:i,initialPlacement:s,platform:l,elements:a}=t,u=e,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:p,fallbackStrategy:v="bestFit",flipAlignment:b=!0}=u,f=Wu(u,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),x=io(n),g=p||(x===s||!b?[xs(s)]:function(A){const z=xs(A);return[Cd(A),z,Cd(z)]}(s)),m=[s,...g],w=await Xu(t,f),_=[];let k=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&_.push(w[x]),c){const{main:A,cross:z}=Sv(n,i,await(l.isRTL==null?void 0:l.isRTL(a.floating)));_.push(w[A],w[z])}if(k=[...k,{placement:n,overflows:_}],!_.every(A=>A<=0)){var $,S;const A=(($=(S=o.flip)==null?void 0:S.index)!=null?$:0)+1,z=m[A];if(z)return{data:{index:A,overflows:k},reset:{placement:z}};let j="bottom";switch(v){case"bestFit":{var C;const ne=(C=k.map(me=>[me,me.overflows.filter(Ce=>Ce>0).reduce((Ce,Qt)=>Ce+Qt,0)]).sort((me,Ce)=>me[1]-Ce[1])[0])==null?void 0:C[0].placement;ne&&(j=ne);break}case"initialPlacement":j=s}if(n!==j)return{reset:{placement:j}}}return{}}}},bf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:n}=t,o=await async function(i,s){const{placement:l,platform:a,elements:u}=i,d=await(a.isRTL==null?void 0:a.isRTL(u.floating)),c=io(l),p=ci(l),v=di(l)==="x",b=["left","top"].includes(c)?-1:1,f=d&&v?-1:1,x=typeof s=="function"?s(i):s;let{mainAxis:g,crossAxis:m,alignmentAxis:w}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:he({mainAxis:0,crossAxis:0,alignmentAxis:null},x);return p&&typeof w=="number"&&(m=p==="end"?-1*w:w),v?{x:m*f,y:g*b}:{x:g*b,y:m*f}}(t,e);return{x:r+o.x,y:n+o.y,data:o}}}};function zv(e){return e==="x"?"y":"x"}var wf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:o}=t,i=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:a={fn:g=>{let{x:m,y:w}=g;return{x:m,y:w}}}}=i,u=Wu(i,["mainAxis","crossAxis","limiter"]),d={x:r,y:n},c=await Xu(t,u),p=di(io(o)),v=zv(p);let b=d[p],f=d[v];if(s){const g=p==="y"?"bottom":"right";b=Da(b+c[p==="y"?"top":"left"],b,b-c[g])}if(l){const g=v==="y"?"bottom":"right";f=Da(f+c[v==="y"?"top":"left"],f,f-c[g])}const x=a.fn(kt(he({},t),{[p]:b,[v]:f}));return kt(he({},x),{data:{x:x.x-r,y:x.y-n}})}}},Ev=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:o,elements:i}=t,s=e,{apply:l}=s,a=Wu(s,["apply"]),u=await Xu(t,a),d=io(r),c=ci(r);let p,v;d==="top"||d==="bottom"?(p=d,v=c===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(v=d,p=c==="end"?"top":"bottom");const b=Qr(u.left,0),f=Qr(u.right,0),x=Qr(u.top,0),g=Qr(u.bottom,0),m={availableHeight:n.floating.height-(["left","right"].includes(r)?2*(x!==0||g!==0?x+g:Qr(u.top,u.bottom)):u[p]),availableWidth:n.floating.width-(["top","bottom"].includes(r)?2*(b!==0||f!==0?b+f:Qr(u.left,u.right)):u[v])},w=await o.getDimensions(i.floating);l==null||l(he(he({},t),m));const _=await o.getDimensions(i.floating);return w.width!==_.width||w.height!==_.height?{reset:{rects:!0}}:{}}}};function _f(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function fr(e){if(e==null)return window;if(!_f(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function hi(e){return fr(e).getComputedStyle(e)}function nr(e){return _f(e)?"":e?(e.nodeName||"").toLowerCase():""}function xf(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function Wt(e){return e instanceof fr(e).HTMLElement}function Ir(e){return e instanceof fr(e).Element}function Yu(e){return typeof ShadowRoot>"u"?!1:e instanceof fr(e).ShadowRoot||e instanceof ShadowRoot}function Js(e){const{overflow:t,overflowX:r,overflowY:n}=hi(e);return/auto|scroll|overlay|hidden/.test(t+n+r)}function Tv(e){return["table","td","th"].includes(nr(e))}function zd(e){const t=/firefox/i.test(xf()),r=hi(e);return r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].includes(r.willChange)||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"}function kf(){return!/^((?!chrome|android).)*safari/i.test(xf())}var Ed=Math.min,Po=Math.max,ks=Math.round;function or(e,t,r){var n,o,i,s;t===void 0&&(t=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect();let a=1,u=1;t&&Wt(e)&&(a=e.offsetWidth>0&&ks(l.width)/e.offsetWidth||1,u=e.offsetHeight>0&&ks(l.height)/e.offsetHeight||1);const d=Ir(e)?fr(e):window,c=!kf()&&r,p=(l.left+(c&&(n=(o=d.visualViewport)==null?void 0:o.offsetLeft)!=null?n:0))/a,v=(l.top+(c&&(i=(s=d.visualViewport)==null?void 0:s.offsetTop)!=null?i:0))/u,b=l.width/a,f=l.height/u;return{width:b,height:f,top:v,right:p+b,bottom:v+f,left:p,x:p,y:v}}function Pr(e){return(t=e,(t instanceof fr(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function el(e){return Ir(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Sf(e){return or(Pr(e)).left+el(e).scrollLeft}function Av(e,t,r){const n=Wt(t),o=Pr(t),i=or(e,n&&function(a){const u=or(a);return ks(u.width)!==a.offsetWidth||ks(u.height)!==a.offsetHeight}(t),r==="fixed");let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(n||!n&&r!=="fixed")if((nr(t)!=="body"||Js(o))&&(s=el(t)),Wt(t)){const a=or(t,!0);l.x=a.x+t.clientLeft,l.y=a.y+t.clientTop}else o&&(l.x=Sf(o));return{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function $f(e){return nr(e)==="html"?e:e.assignedSlot||e.parentNode||(Yu(e)?e.host:null)||Pr(e)}function Td(e){return Wt(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function Ra(e){const t=fr(e);let r=Td(e);for(;r&&Tv(r)&&getComputedStyle(r).position==="static";)r=Td(r);return r&&(nr(r)==="html"||nr(r)==="body"&&getComputedStyle(r).position==="static"&&!zd(r))?t:r||function(n){let o=$f(n);for(Yu(o)&&(o=o.host);Wt(o)&&!["html","body"].includes(nr(o));){if(zd(o))return o;o=o.parentNode}return null}(e)||t}function Ad(e){if(Wt(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=or(e);return{width:t.width,height:t.height}}function Cf(e){const t=$f(e);return["html","body","#document"].includes(nr(t))?e.ownerDocument.body:Wt(t)&&Js(t)?t:Cf(t)}function Ss(e,t){var r;t===void 0&&(t=[]);const n=Cf(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=fr(n),s=o?[i].concat(i.visualViewport||[],Js(n)?n:[]):n,l=t.concat(s);return o?l:l.concat(Ss(s))}function Ld(e,t,r){return t==="viewport"?_s(function(n,o){const i=fr(n),s=Pr(n),l=i.visualViewport;let a=s.clientWidth,u=s.clientHeight,d=0,c=0;if(l){a=l.width,u=l.height;const p=kf();(p||!p&&o==="fixed")&&(d=l.offsetLeft,c=l.offsetTop)}return{width:a,height:u,x:d,y:c}}(e,r)):Ir(t)?function(n,o){const i=or(n,!1,o==="fixed"),s=i.top+n.clientTop,l=i.left+n.clientLeft;return{top:s,left:l,x:l,y:s,right:l+n.clientWidth,bottom:s+n.clientHeight,width:n.clientWidth,height:n.clientHeight}}(t,r):_s(function(n){var o;const i=Pr(n),s=el(n),l=(o=n.ownerDocument)==null?void 0:o.body,a=Po(i.scrollWidth,i.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),u=Po(i.scrollHeight,i.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let d=-s.scrollLeft+Sf(n);const c=-s.scrollTop;return hi(l||i).direction==="rtl"&&(d+=Po(i.clientWidth,l?l.clientWidth:0)-a),{width:a,height:u,x:d,y:c}}(Pr(e)))}function Lv(e){const t=Ss(e),r=["absolute","fixed"].includes(hi(e).position)&&Wt(e)?Ra(e):e;return Ir(r)?t.filter(n=>Ir(n)&&function(o,i){const s=i.getRootNode==null?void 0:i.getRootNode();if(o.contains(i))return!0;if(s&&Yu(s)){let l=i;do{if(l&&o===l)return!0;l=l.parentNode||l.host}while(l)}return!1}(n,r)&&nr(n)!=="body"):[]}var Pv={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:n,strategy:o}=e;const i=[...r==="clippingAncestors"?Lv(t):[].concat(r),n],s=i[0],l=i.reduce((a,u)=>{const d=Ld(t,u,o);return a.top=Po(d.top,a.top),a.right=Ed(d.right,a.right),a.bottom=Ed(d.bottom,a.bottom),a.left=Po(d.left,a.left),a},Ld(t,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:n}=e;const o=Wt(r),i=Pr(r);if(r===i)return t;let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((o||!o&&n!=="fixed")&&((nr(r)!=="body"||Js(i))&&(s=el(r)),Wt(r))){const a=or(r,!0);l.x=a.x+r.clientLeft,l.y=a.y+r.clientTop}return kt(he({},t),{x:t.x-s.scrollLeft+l.x,y:t.y-s.scrollTop+l.y})},isElement:Ir,getDimensions:Ad,getOffsetParent:Ra,getDocumentElement:Pr,getElementRects:e=>{let{reference:t,floating:r,strategy:n}=e;return{reference:Av(t,Ra(r),n),floating:kt(he({},Ad(r)),{x:0,y:0})}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>hi(e).direction==="rtl"};function zf(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=!0,animationFrame:l=!1}=n,a=o&&!l,u=i&&!l,d=a||u?[...Ir(e)?Ss(e):[],...Ss(t)]:[];d.forEach(b=>{a&&b.addEventListener("scroll",r,{passive:!0}),u&&b.addEventListener("resize",r)});let c,p=null;if(s){let b=!0;p=new ResizeObserver(()=>{b||r(),b=!1}),Ir(e)&&!l&&p.observe(e),p.observe(t)}let v=l?or(e):null;return l&&function b(){const f=or(e);!v||f.x===v.x&&f.y===v.y&&f.width===v.width&&f.height===v.height||r(),v=f,c=requestAnimationFrame(b)}(),r(),()=>{var b;d.forEach(f=>{a&&f.removeEventListener("scroll",r),u&&f.removeEventListener("resize",r)}),(b=p)==null||b.disconnect(),p=null,l&&cancelAnimationFrame(c)}}var Ef=(e,t,r)=>wv(e,t,he({platform:Pv},r));function Te(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,kt(he({},r),{duration:Ov()?0:r.duration}));o.addEventListener("cancel",n,{once:!0}),o.addEventListener("finish",n,{once:!0})})}function Pd(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Ov(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ue(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const n=requestAnimationFrame(r);t.addEventListener("cancel",()=>n,{once:!0}),t.addEventListener("finish",()=>n,{once:!0}),t.cancel()})))}function Od(e,t){return e.map(r=>kt(he({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var Tf=new Map,Dv=new WeakMap;function Rv(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function Dd(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ue(e,t){Tf.set(e,Rv(t))}function Ae(e,t,r){const n=Dv.get(e);if(n!=null&&n[t])return Dd(n[t],r.dir);const o=Tf.get(t);return o?Dd(o,r.dir):{keyframes:[],options:{duration:0}}}var Ia=new Set,Iv=new MutationObserver(Pf),Ln=new Map,Af=document.documentElement.dir||"ltr",Lf=document.documentElement.lang||navigator.language,Oo;Iv.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Mv(...e){e.map(t=>{const r=t.$code.toLowerCase();Ln.has(r)?Ln.set(r,Object.assign(Object.assign({},Ln.get(r)),t)):Ln.set(r,t),Oo||(Oo=t)}),Pf()}function Pf(){Af=document.documentElement.dir||"ltr",Lf=document.documentElement.lang||navigator.language,[...Ia.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Fv=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ia.add(this.host)}hostDisconnected(){Ia.delete(this.host)}dir(){return`${this.host.dir||Af}`.toLowerCase()}lang(){return`${this.host.lang||Lf}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),n=this.lang().length>2?this.lang().toLowerCase():"",o=Ln.get(n),i=Ln.get(r);let s;if(o&&o[e])s=o[e];else if(i&&i[e])s=i[e];else if(Oo&&Oo[e])s=Oo[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},fe=class extends Fv{},Nv={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Mv(Nv);var Pe=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),this.target=this.getTarget()})}async firstUpdated(){this.tooltip.hidden=!this.open,this.open&&(await this.updateComplete,this.updatePositioner())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.stopPositioner()}async show(){if(!this.open)return this.open=!0,St(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,St(this,"sl-after-hide")}getTarget(){const e=[...this.children].find(t=>t.tagName.toLowerCase()!=="style"&&t.getAttribute("slot")!=="content");if(!e)throw new Error("Invalid tooltip target: no child element was found.");return e}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const e=Pd(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>void this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){const e=Pd(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>void this.hide(),e)}}async handleOpenChange(){if(this.open){if(this.disabled)return;E(this,"sl-show"),await Ue(this.tooltip),this.startPositioner(),this.tooltip.hidden=!1;const{keyframes:e,options:t}=Ae(this,"tooltip.show",{dir:this.localize.dir()});await Te(this.tooltip,e,t),E(this,"sl-after-show")}else{E(this,"sl-hide"),await Ue(this.tooltip);const{keyframes:e,options:t}=Ae(this,"tooltip.hide",{dir:this.localize.dir()});await Te(this.tooltip,e,t),this.tooltip.hidden=!0,this.stopPositioner(),E(this,"sl-after-hide")}}handleOptionsChange(){this.updatePositioner()}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(e){return this.trigger.split(" ").includes(e)}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=zf(this.target,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){!this.open||!this.target||!this.positioner||Ef(this.target,this.positioner,{placement:this.placement,middleware:[bf({mainAxis:this.distance,crossAxis:this.skidding}),yf(),wf(),xv({element:this.arrow,padding:10})],strategy:this.hoist?"fixed":"absolute"}).then(({x:e,y:t,middlewareData:r,placement:n})=>{const o=r.arrow.x,i=r.arrow.y,s={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];this.positioner.setAttribute("data-placement",n),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${e}px`,top:`${t}px`}),Object.assign(this.arrow.style,{left:typeof o=="number"?`${o}px`:"",top:typeof i=="number"?`${i}px`:"",right:"",bottom:"",[s]:"calc(var(--sl-tooltip-arrow-size) * -1)"})})}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return L`
      <div class="tooltip-target" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div class="tooltip-positioner">
        <div
          part="base"
          id="tooltip"
          class=${X({tooltip:!0,"tooltip--open":this.open})}
          role="tooltip"
          aria-hidden=${this.open?"false":"true"}
        >
          <div class="tooltip__arrow"></div>
          <div class="tooltip__content" aria-live=${this.open?"polite":"off"}>
            <slot name="content"> ${this.content} </slot>
          </div>
        </div>
      </div>
    `}};Pe.styles=bv;h([M(".tooltip-positioner")],Pe.prototype,"positioner",2);h([M(".tooltip")],Pe.prototype,"tooltip",2);h([M(".tooltip__arrow")],Pe.prototype,"arrow",2);h([y()],Pe.prototype,"content",2);h([y()],Pe.prototype,"placement",2);h([y({type:Boolean,reflect:!0})],Pe.prototype,"disabled",2);h([y({type:Number})],Pe.prototype,"distance",2);h([y({type:Boolean,reflect:!0})],Pe.prototype,"open",2);h([y({type:Number})],Pe.prototype,"skidding",2);h([y()],Pe.prototype,"trigger",2);h([y({type:Boolean})],Pe.prototype,"hoist",2);h([P("open",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleOpenChange",1);h([P("content"),P("distance"),P("hoist"),P("placement"),P("skidding")],Pe.prototype,"handleOptionsChange",1);h([P("disabled")],Pe.prototype,"handleDisabledChange",1);Pe=h([N("sl-tooltip")],Pe);ue("tooltip.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});ue("tooltip.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});B(F,"sl-tooltip",Pe,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"});var Bv=U`
  ${V}

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
`,$s=class extends I{render(){return L` <slot></slot> `}};$s.styles=Bv;$s=h([N("sl-visually-hidden")],$s);B(F,"sl-visually-hidden",$s,{});var Uv=U`
  ${V}

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
`,ri=class extends I{constructor(){super(...arguments),this.effect="none"}render(){return L`
      <div
        part="base"
        class=${X({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ri.styles=Uv;h([y()],ri.prototype,"effect",2);ri=h([N("sl-skeleton")],ri);B(F,"sl-skeleton",ri,{});var Vv=U`
  ${V}

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
`,Cs=class extends I{render(){return L`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Cs.styles=Vv;Cs=h([N("sl-spinner")],Cs);B(F,"sl-spinner",Cs,{});var Hv=U`
  ${V}

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
`;function Do(e,t){function r(o){const i=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,l=i.left+s.pageXOffset,a=i.top+s.pageYOffset,u=o.pageX-l,d=o.pageY-a;t!=null&&t.onMove&&t.onMove(u,d)}function n(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",n),t!=null&&t.initialEvent&&r(t.initialEvent)}function ke(e,t,r){return e<t?t:e>r?r:e}var Xe=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.preventDefault(),Do(this,{onMove:(r,n)=>{let o=this.vertical?n:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),t&&!this.vertical&&(l=this.size-l),o>=l-this.snapThreshold&&o<=l+this.snapThreshold&&(o=l)}),this.position=ke(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=ke(t,0,100)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),E(this,"sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",n=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${n}`:r&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${o}`,this.style[t]="",L`
      <div part="panel start" class="start">
        <slot name="start"></slot>
      </div>

      <div
        part="divider"
        class="divider"
        tabindex=${O(this.disabled?void 0:"0")}
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
    `}};Xe.styles=Hv;h([M(".divider")],Xe.prototype,"divider",2);h([y({type:Number,reflect:!0})],Xe.prototype,"position",2);h([y({attribute:"position-in-pixels",type:Number})],Xe.prototype,"positionInPixels",2);h([y({type:Boolean,reflect:!0})],Xe.prototype,"vertical",2);h([y({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);h([y()],Xe.prototype,"primary",2);h([y()],Xe.prototype,"snap",2);h([y({type:Number,attribute:"snap-threshold"})],Xe.prototype,"snapThreshold",2);h([P("position")],Xe.prototype,"handlePositionChange",1);h([P("positionInPixels")],Xe.prototype,"handlePositionInPixelsChange",1);h([P("vertical")],Xe.prototype,"handleVerticalChange",1);Xe=h([N("sl-split-panel")],Xe);B(F,"sl-split-panel",Xe,{onSlReposition:"sl-reposition"});var jv=U`
  ${V}

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
`,Ye=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this,{value:e=>e.checked?e.value:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.invalid=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleCheckedChange(){this.input.checked=this.checked,this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,E(this,"sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,E(this,"sl-change")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,E(this,"sl-change"))}render(){return L`
      <label
        part="base"
        class=${X({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus})}
      >
        <input
          class="switch__input"
          type="checkbox"
          name=${O(this.name)}
          value=${O(this.value)}
          .checked=${Rr(this.checked)}
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
    `}};Ye.styles=jv;h([M('input[type="checkbox"]')],Ye.prototype,"input",2);h([q()],Ye.prototype,"hasFocus",2);h([y()],Ye.prototype,"name",2);h([y()],Ye.prototype,"value",2);h([y({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],Ye.prototype,"required",2);h([y({type:Boolean,reflect:!0})],Ye.prototype,"checked",2);h([y({type:Boolean,reflect:!0})],Ye.prototype,"invalid",2);h([pr("checked")],Ye.prototype,"defaultChecked",2);h([P("checked",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleCheckedChange",1);h([P("disabled",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleDisabledChange",1);Ye=h([N("sl-switch")],Ye);B(F,"sl-switch",Ye,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var Wv=0;function Of(){return++Wv}var Kv=U`
  ${V}

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
`,Kt=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.attrId=Of(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}handleCloseClick(){E(this,"sl-close")}render(){return this.id=this.id.length>0?this.id:this.componentId,L`
      <div
        part="base"
        class=${X({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?L`
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
    `}};Kt.styles=Kv;h([M(".tab")],Kt.prototype,"tab",2);h([y({reflect:!0})],Kt.prototype,"panel",2);h([y({type:Boolean,reflect:!0})],Kt.prototype,"active",2);h([y({type:Boolean})],Kt.prototype,"closable",2);h([y({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);h([y()],Kt.prototype,"lang",2);Kt=h([N("sl-tab")],Kt);B(F,"sl-tab",Kt,{onSlClose:"sl-close"});var Xv=U`
  ${V}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,qn=class extends I{constructor(){super(...arguments),this.attrId=Of(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId}render(){return this.style.display=this.active?"block":"none",L`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};qn.styles=Xv;h([y({reflect:!0})],qn.prototype,"name",2);h([y({type:Boolean,reflect:!0})],qn.prototype,"active",2);qn=h([N("sl-tab-panel")],qn);B(F,"sl-tab-panel",qn,{});var Yv=U`
  ${V}

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
`;function qv(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ma=new Set;function zs(e){Ma.add(e),document.body.classList.add("sl-scroll-lock")}function Es(e){Ma.delete(e),Ma.size===0&&document.body.classList.remove("sl-scroll-lock")}function Fa(e,t,r="vertical",n="smooth"){const o=qv(e,t),i=o.top+t.scrollTop,s=o.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,u=t.scrollTop,d=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:n}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:n})),(r==="vertical"||r==="both")&&(i<u?t.scrollTo({top:i,behavior:n}):i+e.clientHeight>d&&t.scrollTo({top:i-t.offsetHeight+e.clientHeight,behavior:n}))}var qe=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,r)=>{var n;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),r.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(e=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=document.activeElement,i=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(o);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Fa(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(e,t){if(t=he({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.map(n=>n.active=n===this.activeTab),this.panels.map(n=>{var o;return n.active=n.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Fa(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&E(this,"sl-tab-hide",{detail:{name:r.panel}}),E(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,n=this.localize.dir()==="rtl",o=this.getAllTabs(!0),s=o.slice(0,o.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.transform=n?`translateX(${-1*s.left}px)`:`translateX(${s.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.transform=`translateY(${s.top}px)`;break}}preventIndicatorTransition(){const e=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=e})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const e=this.localize.dir()==="rtl";return L`
      <div
        part="base"
        class=${X({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?L`
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

          ${this.hasScrollControls?L`
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
    `}};qe.styles=Yv;h([M(".tab-group")],qe.prototype,"tabGroup",2);h([M(".tab-group__body")],qe.prototype,"body",2);h([M(".tab-group__nav")],qe.prototype,"nav",2);h([M(".tab-group__indicator")],qe.prototype,"indicator",2);h([q()],qe.prototype,"hasScrollControls",2);h([y()],qe.prototype,"placement",2);h([y()],qe.prototype,"activation",2);h([y({attribute:"no-scroll-controls",type:Boolean})],qe.prototype,"noScrollControls",2);h([y()],qe.prototype,"lang",2);h([P("noScrollControls",{waitUntilFirstUpdate:!0})],qe.prototype,"updateScrollControls",1);h([P("placement",{waitUntilFirstUpdate:!0})],qe.prototype,"syncIndicator",1);qe=h([N("sl-tab-group")],qe);B(F,"sl-tab-group",qe,{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"});var Qv=U`
  ${V}

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
`,Mr=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){E(this,"sl-remove")}render(){return L`
      <span
        part="base"
        class=${X({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?L`
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
    `}};Mr.styles=Qv;h([y({reflect:!0})],Mr.prototype,"variant",2);h([y({reflect:!0})],Mr.prototype,"size",2);h([y({type:Boolean,reflect:!0})],Mr.prototype,"pill",2);h([y({type:Boolean})],Mr.prototype,"removable",2);Mr=h([N("sl-tag")],Mr);B(F,"sl-tag",Mr,{onSlRemove:"sl-remove"});var Df=U`
  ${V}

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
`,Gv=U`
  ${Df}

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
`,Rf=Symbol.for(""),Zv=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===Rf)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Ts=(e,...t)=>({_$litStatic$:t.reduce((r,n,o)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[o+1],e[0]),r:Rf}),Rd=new Map,Jv=e=>(t,...r)=>{const n=r.length;let o,i;const s=[],l=[];let a,u=0,d=!1;for(;u<n;){for(a=t[u];u<n&&(i=r[u],(o=Zv(i))!==void 0);)a+=o+t[++u],d=!0;l.push(i),s.push(a),u++}if(u===n&&s.push(t[n]),d){const c=s.join("$$lit$$");(t=Rd.get(c))===void 0&&(s.raw=s,Rd.set(c,t=s)),r=l}return e(t,...r)},Ro=Jv(L);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this,{value:e=>e.checked?e.value:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Nt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.disabled=!1,this.checked=!1,this.invalid=!1,this.defaultChecked=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.hiddenInput.reportValidity()}setCustomValidity(e){this.hiddenInput.setCustomValidity(e)}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.hasUpdated&&E(this,"sl-change")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.hasUpdated&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}render(){return Ro`
      <div part="base">
        <input class="hidden-input" type="radio" aria-hidden="true" tabindex="-1" />
        <button
          part="button"
          class=${X({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          ?disabled=${this.disabled}
          type="button"
          name=${O(this.name)}
          value=${O(this.value)}
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
    `}};Ie.styles=Gv;h([M(".button")],Ie.prototype,"input",2);h([M(".hidden-input")],Ie.prototype,"hiddenInput",2);h([q()],Ie.prototype,"hasFocus",2);h([y()],Ie.prototype,"name",2);h([y()],Ie.prototype,"value",2);h([y({type:Boolean,reflect:!0})],Ie.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],Ie.prototype,"checked",2);h([y({type:Boolean,reflect:!0})],Ie.prototype,"invalid",2);h([pr("checked")],Ie.prototype,"defaultChecked",2);h([P("checked")],Ie.prototype,"handleCheckedChange",1);h([P("disabled",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleDisabledChange",1);h([y({reflect:!0})],Ie.prototype,"size",2);h([y({type:Boolean,reflect:!0})],Ie.prototype,"pill",2);Ie=h([N("sl-radio-button")],Ie);B(F,"sl-radio-button",Ie,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var ey=U`
  ${V}

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
`,Il=["sl-radio","sl-radio-button"],cr=class extends I{constructor(){super(...arguments),this.hasButtonGroup=!1,this.label="",this.fieldset=!1,this.required=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}getAllRadios(){return[...this.querySelectorAll(Il.join(","))].filter(e=>Il.includes(e.tagName.toLowerCase()))}handleRadioClick(e){const r=e.target.closest(Il.map(n=>`${n}:not([disabled])`).join(","));r&&this.getAllRadios().forEach(o=>{o.checked=o===r,o.input.tabIndex=o===r?0:-1})}handleKeyDown(e){var t;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){const r=this.getAllRadios().filter(s=>!s.disabled),n=(t=r.find(s=>s.checked))!=null?t:r[0],o=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let i=r.indexOf(n)+o;i<0&&(i=r.length-1),i>r.length-1&&(i=0),this.getAllRadios().forEach(s=>{s.checked=!1,s.input.tabIndex=-1}),r[i].focus(),r[i].checked=!0,r[i].input.tabIndex=0,e.preventDefault()}}handleSlotChange(){const e=this.getAllRadios(),t=e.find(r=>r.checked);this.hasButtonGroup=e.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),e.forEach(r=>{r.setAttribute("role","radio"),r.input.tabIndex=-1}),t?t.input.tabIndex=0:e.length>0&&(e[0].input.tabIndex=0)}render(){const e=L`
      <slot @click=${this.handleRadioClick} @keydown=${this.handleKeyDown} @slotchange=${this.handleSlotChange}></slot>
    `;return L`
      <fieldset
        part="base"
        class=${X({"radio-group":!0,"radio-group--has-fieldset":this.fieldset,"radio-group--required":this.required})}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        ${this.hasButtonGroup?L`<sl-button-group part="button-group">${e}</sl-button-group>`:e}
      </fieldset>
    `}};cr.styles=ey;h([M("slot:not([name])")],cr.prototype,"defaultSlot",2);h([q()],cr.prototype,"hasButtonGroup",2);h([y()],cr.prototype,"label",2);h([y({type:Boolean,attribute:"fieldset",reflect:!0})],cr.prototype,"fieldset",2);h([y({type:Boolean,reflect:!0})],cr.prototype,"required",2);cr=h([N("sl-radio-group")],cr);B(F,"sl-radio-group",cr,{});var ty=U`
  ${V}
  ${Gs}

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
`,ye=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this),this.hasSlotController=new Nt(this,"help-text","label"),this.localize=new fe(this),this.hasFocus=!1,this.hasTooltip=!1,this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.invalid=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleInput(){this.value=parseFloat(this.input.value),E(this,"sl-change"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,E(this,"sl-blur")}handleValueChange(){this.invalid=!this.input.checkValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,E(this,"sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",i=t*e;if(o){const s=`${t-i}px + ${e} * ${n}`;this.output.style.transform=`translateX(calc((${s} - ${r/2}px - ${n} / 2)))`}else{const s=`${i}px - ${e} * ${n}`;this.output.style.transform=`translateX(calc(${s} - ${r/2}px + ${n} / 2))`}}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return L`
      <div
        part="form-control"
        class=${X({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
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
            class=${X({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${O(this.name)}
              ?disabled=${this.disabled}
              min=${O(this.min)}
              max=${O(this.max)}
              step=${O(this.step)}
              .value=${Rr(this.value.toString())}
              aria-describedby="help-text"
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?L`
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
    `}};ye.styles=ty;h([M(".range__control")],ye.prototype,"input",2);h([M(".range__tooltip")],ye.prototype,"output",2);h([q()],ye.prototype,"hasFocus",2);h([q()],ye.prototype,"hasTooltip",2);h([y()],ye.prototype,"name",2);h([y({type:Number})],ye.prototype,"value",2);h([y()],ye.prototype,"label",2);h([y({attribute:"help-text"})],ye.prototype,"helpText",2);h([y({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],ye.prototype,"invalid",2);h([y({type:Number})],ye.prototype,"min",2);h([y({type:Number})],ye.prototype,"max",2);h([y({type:Number})],ye.prototype,"step",2);h([y()],ye.prototype,"tooltip",2);h([y({attribute:!1})],ye.prototype,"tooltipFormatter",2);h([pr()],ye.prototype,"defaultValue",2);h([P("value",{waitUntilFirstUpdate:!0})],ye.prototype,"handleValueChange",1);h([P("disabled",{waitUntilFirstUpdate:!0})],ye.prototype,"handleDisabledChange",1);ye=h([N("sl-range")],ye);B(F,"sl-range",ye,{onSlChange:"sl-change",onSlBlur:"sl-blur",onSlFocus:"sl-focus"});var ry=U`
  ${V}

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
`,at=ai(class extends Zs{constructor(e){var t;if(super(e),e.type!==Jt.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n==null?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ct===void 0){this.ct=new Set;for(const n in t)this.ct.add(n);return this.render(t)}this.ct.forEach(n=>{t[n]==null&&(this.ct.delete(n),n.includes("-")?r.removeProperty(n):r[n]="")});for(const n in t){const o=t[n];o!=null&&(this.ct.add(n),n.includes("-")?r.setProperty(n,o):r[n]=o)}return ct}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Na="";function Ba(e){Na=e}function ny(){if(!Na){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)Ba(t.getAttribute("data-shoelace"));else{const r=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let n="";r&&(n=r.getAttribute("src")),Ba(n.split("/").slice(0,-1).join("/"))}}return Na.replace(/\/$/,"")}var oy={name:"default",resolver:e=>`${ny()}/assets/icons/${e}.svg`},iy=oy,Id={"check-lg":`
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
  `},sy={name:"system",resolver:e=>e in Id?`data:image/svg+xml,${encodeURIComponent(Id[e])}`:""},ly=sy,ay=[iy,ly],Ua=[];function uy(e){Ua.push(e)}function cy(e){Ua=Ua.filter(t=>t!==e)}function Md(e){return ay.find(t=>t.name===e)}var Ml=new Map;function If(e,t="cors"){if(Ml.has(e))return Ml.get(e);const r=fetch(e,{mode:t}).then(async n=>({ok:n.ok,status:n.status,html:await n.text()}));return Ml.set(e,r),r}var Fl=new Map;async function dy(e){if(Fl.has(e))return Fl.get(e);const t=await If(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const n=document.createElement("div");n.innerHTML=t.html;const o=n.firstElementChild;r.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return Fl.set(e,r),r}var hy=U`
  ${V}

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
`,As=class extends Zs{constructor(e){if(super(e),this.it=ve,e.type!==Jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ve||e==null)return this.ft=void 0,this.it=e;if(e===ct)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};As.directiveName="unsafeHTML",As.resultType=1;var Fd=ai(As),Va=class extends As{};Va.directiveName="unsafeSVG",Va.resultType=2;var py=ai(Va),Nl,Xt=class extends I{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),uy(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),cy(this)}getUrl(){const e=Md(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=Md(this.library),r=this.getUrl();if(Nl||(Nl=new DOMParser),r)try{const n=await dy(r);if(r!==this.getUrl())return;if(n.ok){const i=Nl.parseFromString(n.svg,"text/html").body.querySelector("svg");i!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,i),this.svg=i.outerHTML,E(this,"sl-load")):(this.svg="",E(this,"sl-error"))}else this.svg="",E(this,"sl-error")}catch{E(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return L` <div
      part="base"
      class="icon"
      role=${O(e?"img":void 0)}
      aria-label=${O(e?this.label:void 0)}
      aria-hidden=${O(e?void 0:"true")}
    >
      ${py(this.svg)}
    </div>`}};Xt.styles=hy;h([q()],Xt.prototype,"svg",2);h([y({reflect:!0})],Xt.prototype,"name",2);h([y()],Xt.prototype,"src",2);h([y()],Xt.prototype,"label",2);h([y({reflect:!0})],Xt.prototype,"library",2);h([P("name"),P("src"),P("library")],Xt.prototype,"setIcon",1);Xt=h([N("sl-icon")],Xt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.hoverValue=0,this.isHovering=!1,this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:n,width:o}=this.rating.getBoundingClientRect(),i=t?this.roundToPrecision((n-e)/o*this.max,this.precision):this.roundToPrecision((e-r)/o*this.max,this.precision);return ke(i,0,this.max)}handleClick(e){this.setValue(this.getValueFromMousePosition(e))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(!(this.disabled||this.readonly)){if(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const n=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-n),e.preventDefault()}if(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const n=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+n),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault())}}handleMouseEnter(){this.isHovering=!0}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),e.preventDefault()}handleValueChange(){E(this,"sl-change")}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,L`
      <div
        part="base"
        class=${X({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
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
          ${t.map(n=>L`
              <span
                class=${X({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Fd(this.getSymbol(n+1))}
              </span>
            `)}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${t.map(n=>L`
              <span
                class=${X({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1})}
                style=${at({clipPath:r>n+1?"none":e?`inset(0 0 0 ${100-(r-n)/1*100}%)`:`inset(0 ${100-(r-n)/1*100}% 0 0)`})}
                role="presentation"
              >
                ${Fd(this.getSymbol(n+1))}
              </span>
            `)}
        </span>
      </div>
    `}};nt.styles=ry;h([M(".rating")],nt.prototype,"rating",2);h([q()],nt.prototype,"hoverValue",2);h([q()],nt.prototype,"isHovering",2);h([y({type:Number})],nt.prototype,"value",2);h([y({type:Number})],nt.prototype,"max",2);h([y({type:Number})],nt.prototype,"precision",2);h([y({type:Boolean,reflect:!0})],nt.prototype,"readonly",2);h([y({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);h([y()],nt.prototype,"getSymbol",2);h([P("value",{waitUntilFirstUpdate:!0})],nt.prototype,"handleValueChange",1);nt=h([N("sl-rating")],nt);B(F,"sl-rating",nt,{onSlChange:"sl-change"});var fy=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Dt=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:n,value:o}=fy.find(i=>Math.abs(r)<i.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/o),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let i;n==="minute"?i=Oi("second"):n==="hour"?i=Oi("minute"):n==="day"?i=Oi("hour"):i=Oi("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),i)}return L` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};h([q()],Dt.prototype,"isoTime",2);h([q()],Dt.prototype,"relativeTime",2);h([q()],Dt.prototype,"titleTime",2);h([y()],Dt.prototype,"date",2);h([y()],Dt.prototype,"lang",2);h([y()],Dt.prototype,"format",2);h([y()],Dt.prototype,"numeric",2);h([y({type:Boolean})],Dt.prototype,"sync",2);Dt=h([N("sl-relative-time")],Dt);function Oi(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}B(F,"sl-relative-time",Dt,{});var my=U`
  ${V}

  :host {
    display: contents;
  }
`,Qn=class extends I{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{E(this,"sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return L` <slot @slotchange=${this.handleSlotChange}></slot> `}};Qn.styles=my;h([y({type:Boolean,reflect:!0})],Qn.prototype,"disabled",2);h([P("disabled",{waitUntilFirstUpdate:!0})],Qn.prototype,"handleDisabledChange",1);Qn=h([N("sl-resize-observer")],Qn);B(F,"sl-resize-observer",Qn,{onSlResize:"sl-resize"});var gy=U`
  ${V}

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
`,Gn=class extends I{constructor(){super(...arguments),this.aspectRatio="16:9",this.fit="cover"}render(){const e=this.aspectRatio.split(":"),t=parseFloat(e[0]),r=parseFloat(e[1]),n=!isNaN(t)&&!isNaN(r)&&t>0&&r>0?`${r/t*100}%`:"0";return L`
      <div
        class=${X({"responsive-media":!0,"responsive-media--cover":this.fit==="cover","responsive-media--contain":this.fit==="contain"})}
        style="padding-bottom: ${n}"
      >
        <slot></slot>
      </div>
    `}};Gn.styles=gy;h([y({attribute:"aspect-ratio"})],Gn.prototype,"aspectRatio",2);h([y()],Gn.prototype,"fit",2);Gn=h([N("sl-responsive-media")],Gn);B(F,"sl-responsive-media",Gn,{});var vy=U`
  ${V}
  ${Gs}

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
`,ee=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this),this.hasSlotController=new Nt(this,"help-text","label"),this.localize=new fe(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(e){this.control.focus(e)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,E(this,"sl-blur"))}handleClearClick(e){e.stopPropagation(),this.value=this.multiple?[]:"",E(this,"sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,E(this,"sl-focus"))}handleKeyDown(e){const t=e.target,r=this.menuItems[0],n=this.menuItems[this.menuItems.length-1];if(t.tagName.toLowerCase()!=="sl-tag"){if(e.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||this.dropdown.show(),e.key==="ArrowDown"){this.menu.setCurrentItem(r),r.focus();return}if(e.key==="ArrowUp"){this.menu.setCurrentItem(n),n.focus();return}}e.ctrlKey||e.metaKey||!this.isOpen&&e.key.length===1&&(e.stopPropagation(),e.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(e))}}handleLabelClick(){this.focus()}handleMenuSelect(e){const t=e.detail.item;this.multiple?this.value=this.value.includes(t.value)?this.value.filter(r=>r!==t.value):[...this.value,t.value]:this.value=t.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const e=this.menuItems.find(t=>t.value===this.value);this.displayLabel=e?e.getTextLabel():""}}handleMultipleChange(){var e;const t=this.getValueAsArray();this.value=this.multiple?t:(e=t[0])!=null?e:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const e=[];this.menuItems.forEach(t=>{e.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),e.push(t.value)}),await Promise.all(this.menuItems.map(t=>t.render)),this.syncItemsFromValue()}handleTagInteraction(e){e.composedPath().find(n=>n instanceof HTMLElement?n.classList.contains("tag__remove"):!1)&&e.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),E(this,"sl-change")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const e=this.getValueAsArray();if(this.menuItems.forEach(t=>t.checked=e.includes(t.value)),this.multiple){const t=this.menuItems.filter(r=>e.includes(r.value));if(this.displayLabel=t.length>0?t[0].getTextLabel():"",this.displayTags=t.map(r=>L`
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
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const r=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(L`
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
        `)}}else{const t=this.menuItems.find(r=>r.value===e[0]);this.displayLabel=t?t.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const t=this.menuItems.filter(r=>r.checked).map(r=>r.value);this.multiple?this.value=this.value.filter(r=>t.includes(r)):this.value=t.length>0?t[0]:""}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.multiple?this.value.length>0:this.value!=="",n=this.label?!0:!!e,o=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&r;return L`
      <div
        part="form-control"
        class=${X({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":o})}
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
            class=${X({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
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
                ${this.displayTags.length>0?L` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${i?L`
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ee.styles=vy;h([M(".select")],ee.prototype,"dropdown",2);h([M(".select__control")],ee.prototype,"control",2);h([M(".select__hidden-select")],ee.prototype,"input",2);h([M(".select__menu")],ee.prototype,"menu",2);h([q()],ee.prototype,"hasFocus",2);h([q()],ee.prototype,"isOpen",2);h([q()],ee.prototype,"displayLabel",2);h([q()],ee.prototype,"displayTags",2);h([y({type:Boolean,reflect:!0})],ee.prototype,"multiple",2);h([y({attribute:"max-tags-visible",type:Number})],ee.prototype,"maxTagsVisible",2);h([y({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);h([y()],ee.prototype,"name",2);h([y()],ee.prototype,"placeholder",2);h([y()],ee.prototype,"size",2);h([y({type:Boolean})],ee.prototype,"hoist",2);h([y()],ee.prototype,"value",2);h([y({type:Boolean,reflect:!0})],ee.prototype,"filled",2);h([y({type:Boolean,reflect:!0})],ee.prototype,"pill",2);h([y()],ee.prototype,"label",2);h([y()],ee.prototype,"placement",2);h([y({attribute:"help-text"})],ee.prototype,"helpText",2);h([y({type:Boolean,reflect:!0})],ee.prototype,"required",2);h([y({type:Boolean})],ee.prototype,"clearable",2);h([y({type:Boolean,reflect:!0})],ee.prototype,"invalid",2);h([pr()],ee.prototype,"defaultValue",2);h([P("disabled",{waitUntilFirstUpdate:!0})],ee.prototype,"handleDisabledChange",1);h([P("multiple")],ee.prototype,"handleMultipleChange",1);h([P("value",{waitUntilFirstUpdate:!0})],ee.prototype,"handleValueChange",1);ee=h([N("sl-select")],ee);B(F,"sl-select",ee,{onSlClear:"sl-clear",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlBlur:"sl-blur"});var yy=U`
  ${V}

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
`,Zn=class extends I{constructor(){super(...arguments),this.typeToSelectString=""}firstUpdated(){this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),r=e.disabled?t[0]:e;t.forEach(n=>{n.setAttribute("tabindex",n===r?"0":"-1")})}typeToSelect(e){var t;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of r){const o=(t=n.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(mf(o).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(n),n.focus();break}}}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&E(this,"sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let n=r?t.indexOf(r):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=t.length-1),n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.setCurrentItem(t[n]),t[n].focus();return}}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return L`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Zn.styles=yy;h([M(".menu")],Zn.prototype,"menu",2);h([M("slot")],Zn.prototype,"defaultSlot",2);Zn=h([N("sl-menu")],Zn);B(F,"sl-menu",Zn,{onSlSelect:"sl-select"});var by=U`
  ${V}

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
`,Ls=class extends I{render(){return L`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `}};Ls.styles=by;Ls=h([N("sl-menu-label")],Ls);B(F,"sl-menu-label",Ls,{});var wy=U`
  ${V}

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
`,Rt=class extends I{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return mf(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,E(this,"sl-label-change"))}render(){return L`
      <div
        part="base"
        class=${X({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
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
    `}};Rt.styles=wy;h([M("slot:not([name])")],Rt.prototype,"defaultSlot",2);h([M(".menu-item")],Rt.prototype,"menuItem",2);h([y({type:Boolean,reflect:!0})],Rt.prototype,"checked",2);h([y()],Rt.prototype,"value",2);h([y({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);h([P("checked")],Rt.prototype,"handleCheckedChange",1);h([P("disabled")],Rt.prototype,"handleDisabledChange",1);Rt=h([N("sl-menu-item")],Rt);B(F,"sl-menu-item",Rt,{onSlLabelChange:"sl-label-change"});var _y=U`
  ${V}

  :host {
    display: contents;
  }
`,$t=class extends I{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleMutation=this.handleMutation.bind(this),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}handleMutation(e){E(this,"sl-mutation",{detail:{mutationList:e}})}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}render(){return L` <slot></slot> `}};$t.styles=_y;h([y({reflect:!0})],$t.prototype,"attr",2);h([y({attribute:"attr-old-value",type:Boolean,reflect:!0})],$t.prototype,"attrOldValue",2);h([y({attribute:"char-data",type:Boolean,reflect:!0})],$t.prototype,"charData",2);h([y({attribute:"char-data-old-value",type:Boolean,reflect:!0})],$t.prototype,"charDataOldValue",2);h([y({attribute:"child-list",type:Boolean,reflect:!0})],$t.prototype,"childList",2);h([y({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);h([P("disabled")],$t.prototype,"handleDisabledChange",1);h([P("attr",{waitUntilFirstUpdate:!0}),P("attr-old-value",{waitUntilFirstUpdate:!0}),P("char-data",{waitUntilFirstUpdate:!0}),P("char-data-old-value",{waitUntilFirstUpdate:!0}),P("childList",{waitUntilFirstUpdate:!0})],$t.prototype,"handleChange",1);$t=h([N("sl-mutation-observer")],$t);B(F,"sl-mutation-observer",$t,{onSlMutation:"sl-mutation"});var xy=U`
  ${V}

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
`,Fr=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return L`
      <div
        part="base"
        class=${X({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate})}
        role="progressbar"
        title=${O(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${at({width:`${this.value}%`})}>
          ${this.indeterminate?"":L`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              `}
        </div>
      </div>
    `}};Fr.styles=xy;h([y({type:Number,reflect:!0})],Fr.prototype,"value",2);h([y({type:Boolean,reflect:!0})],Fr.prototype,"indeterminate",2);h([y()],Fr.prototype,"label",2);h([y()],Fr.prototype,"lang",2);Fr=h([N("sl-progress-bar")],Fr);B(F,"sl-progress-bar",Fr,{});var ky=U`
  ${V}

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
`,dr=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("percentage")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,n=r-this.value/100*r;this.indicatorOffset=`${n}px`}}render(){return L`
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
    `}};dr.styles=ky;h([M(".progress-ring__indicator")],dr.prototype,"indicator",2);h([q()],dr.prototype,"indicatorOffset",2);h([y({type:Number,reflect:!0})],dr.prototype,"value",2);h([y()],dr.prototype,"label",2);h([y()],dr.prototype,"lang",2);dr=h([N("sl-progress-ring")],dr);B(F,"sl-progress-ring",dr,{});var Sy=U`
  ${V}

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
`,Mf=null,Ff=class{};Ff.render=function(e,t){Mf(e,t)};self.QrCreator=Ff;(function(e){function t(l,a,u,d){var c={},p=e(u,a);p.u(l),p.J(),d=d||0;var v=p.h(),b=p.h()+2*d;return c.text=l,c.level=a,c.version=u,c.O=b,c.a=function(f,x){return f-=d,x-=d,0>f||f>=v||0>x||x>=v?!1:p.a(f,x)},c}function r(l,a,u,d,c,p,v,b,f,x){function g(m,w,_,k,$,S,C){m?(l.lineTo(w+S,_+C),l.arcTo(w,_,k,$,p)):l.lineTo(w,_)}v?l.moveTo(a+p,u):l.moveTo(a,u),g(b,d,u,d,c,-p,0),g(f,d,c,a,c,0,-p),g(x,a,c,a,u,p,0),g(v,a,u,d,u,0,p)}function n(l,a,u,d,c,p,v,b,f,x){function g(m,w,_,k){l.moveTo(m+_,w),l.lineTo(m,w),l.lineTo(m,w+k),l.arcTo(m,w,m+_,w,p)}v&&g(a,u,p,p),b&&g(d,u,-p,p),f&&g(d,c,-p,-p),x&&g(a,c,p,-p)}function o(l,a){var u=a.fill;if(typeof u=="string")l.fillStyle=u;else{var d=u.type,c=u.colorStops;if(u=u.position.map(v=>Math.round(v*a.size)),d==="linear-gradient")var p=l.createLinearGradient.apply(l,u);else if(d==="radial-gradient")p=l.createRadialGradient.apply(l,u);else throw Error("Unsupported fill");c.forEach(([v,b])=>{p.addColorStop(v,b)}),l.fillStyle=p}}function i(l,a){e:{var u=a.text,d=a.v,c=a.N,p=a.K,v=a.P;for(c=Math.max(1,c||1),p=Math.min(40,p||40);c<=p;c+=1)try{var b=t(u,d,c,v);break e}catch{}b=void 0}if(!b)return null;for(u=l.getContext("2d"),a.background&&(u.fillStyle=a.background,u.fillRect(a.left,a.top,a.size,a.size)),d=b.O,p=a.size/d,u.beginPath(),v=0;v<d;v+=1)for(c=0;c<d;c+=1){var f=u,x=a.left+c*p,g=a.top+v*p,m=v,w=c,_=b.a,k=x+p,$=g+p,S=m-1,C=m+1,A=w-1,z=w+1,j=Math.floor(Math.min(.5,Math.max(0,a.R))*p),ne=_(m,w),me=_(S,A),Ce=_(S,w);S=_(S,z);var Qt=_(m,z);z=_(C,z),w=_(C,w),C=_(C,A),m=_(m,A),x=Math.round(x),g=Math.round(g),k=Math.round(k),$=Math.round($),ne?r(f,x,g,k,$,j,!Ce&&!m,!Ce&&!Qt,!w&&!Qt,!w&&!m):n(f,x,g,k,$,j,Ce&&m&&me,Ce&&Qt&&S,w&&Qt&&z,w&&m&&C)}return o(u,a),u.fill(),l}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Mf=function(l,a){var u={};Object.assign(u,s,l),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,a instanceof HTMLCanvasElement?((a.width!==u.size||a.height!==u.size)&&(a.width=u.size,a.height=u.size),a.getContext("2d").clearRect(0,0,a.width,a.height),i(a,u)):(l=document.createElement("canvas"),l.width=u.size,l.height=u.size,u=i(l,u),a.appendChild(u))}})(function(){function e(a){var u=r.s(a);return{S:function(){return 4},b:function(){return u.length},write:function(d){for(var c=0;c<u.length;c+=1)d.put(u[c],8)}}}function t(){var a=[],u=0,d={B:function(){return a},c:function(c){return(a[Math.floor(c/8)]>>>7-c%8&1)==1},put:function(c,p){for(var v=0;v<p;v+=1)d.m((c>>>p-v-1&1)==1)},f:function(){return u},m:function(c){var p=Math.floor(u/8);a.length<=p&&a.push(0),c&&(a[p]|=128>>>u%8),u+=1}};return d}function r(a,u){function d(m,w){for(var _=-1;7>=_;_+=1)if(!(-1>=m+_||b<=m+_))for(var k=-1;7>=k;k+=1)-1>=w+k||b<=w+k||(v[m+_][w+k]=0<=_&&6>=_&&(k==0||k==6)||0<=k&&6>=k&&(_==0||_==6)||2<=_&&4>=_&&2<=k&&4>=k)}function c(m,w){for(var _=b=4*a+17,k=Array(_),$=0;$<_;$+=1){k[$]=Array(_);for(var S=0;S<_;S+=1)k[$][S]=null}for(v=k,d(0,0),d(b-7,0),d(0,b-7),_=i.G(a),k=0;k<_.length;k+=1)for($=0;$<_.length;$+=1){S=_[k];var C=_[$];if(v[S][C]==null)for(var A=-2;2>=A;A+=1)for(var z=-2;2>=z;z+=1)v[S+A][C+z]=A==-2||A==2||z==-2||z==2||A==0&&z==0}for(_=8;_<b-8;_+=1)v[_][6]==null&&(v[_][6]=_%2==0);for(_=8;_<b-8;_+=1)v[6][_]==null&&(v[6][_]=_%2==0);for(_=i.w(p<<3|w),k=0;15>k;k+=1)$=!m&&(_>>k&1)==1,v[6>k?k:8>k?k+1:b-15+k][8]=$,v[8][8>k?b-k-1:9>k?15-k:14-k]=$;if(v[b-8][8]=!m,7<=a){for(_=i.A(a),k=0;18>k;k+=1)$=!m&&(_>>k&1)==1,v[Math.floor(k/3)][k%3+b-8-3]=$;for(k=0;18>k;k+=1)$=!m&&(_>>k&1)==1,v[k%3+b-8-3][Math.floor(k/3)]=$}if(f==null){for(m=l.I(a,p),_=t(),k=0;k<x.length;k+=1)$=x[k],_.put(4,4),_.put($.b(),i.f(4,a)),$.write(_);for(k=$=0;k<m.length;k+=1)$+=m[k].j;if(_.f()>8*$)throw Error("code length overflow. ("+_.f()+">"+8*$+")");for(_.f()+4<=8*$&&_.put(0,4);_.f()%8!=0;)_.m(!1);for(;!(_.f()>=8*$)&&(_.put(236,8),!(_.f()>=8*$));)_.put(17,8);var j=0;for($=k=0,S=Array(m.length),C=Array(m.length),A=0;A<m.length;A+=1){var ne=m[A].j,me=m[A].o-ne;for(k=Math.max(k,ne),$=Math.max($,me),S[A]=Array(ne),z=0;z<S[A].length;z+=1)S[A][z]=255&_.B()[z+j];for(j+=ne,z=i.C(me),ne=n(S[A],z.b()-1).l(z),C[A]=Array(z.b()-1),z=0;z<C[A].length;z+=1)me=z+ne.b()-C[A].length,C[A][z]=0<=me?ne.c(me):0}for(z=_=0;z<m.length;z+=1)_+=m[z].o;for(_=Array(_),z=j=0;z<k;z+=1)for(A=0;A<m.length;A+=1)z<S[A].length&&(_[j]=S[A][z],j+=1);for(z=0;z<$;z+=1)for(A=0;A<m.length;A+=1)z<C[A].length&&(_[j]=C[A][z],j+=1);f=_}for(m=f,_=-1,k=b-1,$=7,S=0,w=i.F(w),C=b-1;0<C;C-=2)for(C==6&&--C;;){for(A=0;2>A;A+=1)v[k][C-A]==null&&(z=!1,S<m.length&&(z=(m[S]>>>$&1)==1),w(k,C-A)&&(z=!z),v[k][C-A]=z,--$,$==-1&&(S+=1,$=7));if(k+=_,0>k||b<=k){k-=_,_=-_;break}}}var p=o[u],v=null,b=0,f=null,x=[],g={u:function(m){m=e(m),x.push(m),f=null},a:function(m,w){if(0>m||b<=m||0>w||b<=w)throw Error(m+","+w);return v[m][w]},h:function(){return b},J:function(){for(var m=0,w=0,_=0;8>_;_+=1){c(!0,_);var k=i.D(g);(_==0||m>k)&&(m=k,w=_)}c(!1,w)}};return g}function n(a,u){if(typeof a.length>"u")throw Error(a.length+"/"+u);var d=function(){for(var p=0;p<a.length&&a[p]==0;)p+=1;for(var v=Array(a.length-p+u),b=0;b<a.length-p;b+=1)v[b]=a[b+p];return v}(),c={c:function(p){return d[p]},b:function(){return d.length},multiply:function(p){for(var v=Array(c.b()+p.b()-1),b=0;b<c.b();b+=1)for(var f=0;f<p.b();f+=1)v[b+f]^=s.i(s.g(c.c(b))+s.g(p.c(f)));return n(v,0)},l:function(p){if(0>c.b()-p.b())return c;for(var v=s.g(c.c(0))-s.g(p.c(0)),b=Array(c.b()),f=0;f<c.b();f+=1)b[f]=c.c(f);for(f=0;f<p.b();f+=1)b[f]^=s.i(s.g(p.c(f))+v);return n(b,0).l(p)}};return c}r.s=function(a){for(var u=[],d=0;d<a.length;d++){var c=a.charCodeAt(d);128>c?u.push(c):2048>c?u.push(192|c>>6,128|c&63):55296>c||57344<=c?u.push(224|c>>12,128|c>>6&63,128|c&63):(d++,c=65536+((c&1023)<<10|a.charCodeAt(d)&1023),u.push(240|c>>18,128|c>>12&63,128|c>>6&63,128|c&63))}return u};var o={L:1,M:0,Q:3,H:2},i=function(){function a(c){for(var p=0;c!=0;)p+=1,c>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],d={w:function(c){for(var p=c<<10;0<=a(p)-a(1335);)p^=1335<<a(p)-a(1335);return(c<<10|p)^21522},A:function(c){for(var p=c<<12;0<=a(p)-a(7973);)p^=7973<<a(p)-a(7973);return c<<12|p},G:function(c){return u[c-1]},F:function(c){switch(c){case 0:return function(p,v){return(p+v)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,v){return v%3==0};case 3:return function(p,v){return(p+v)%3==0};case 4:return function(p,v){return(Math.floor(p/2)+Math.floor(v/3))%2==0};case 5:return function(p,v){return p*v%2+p*v%3==0};case 6:return function(p,v){return(p*v%2+p*v%3)%2==0};case 7:return function(p,v){return(p*v%3+(p+v)%2)%2==0};default:throw Error("bad maskPattern:"+c)}},C:function(c){for(var p=n([1],0),v=0;v<c;v+=1)p=p.multiply(n([1,s.i(v)],0));return p},f:function(c,p){if(c!=4||1>p||40<p)throw Error("mode: "+c+"; type: "+p);return 10>p?8:16},D:function(c){for(var p=c.h(),v=0,b=0;b<p;b+=1)for(var f=0;f<p;f+=1){for(var x=0,g=c.a(b,f),m=-1;1>=m;m+=1)if(!(0>b+m||p<=b+m))for(var w=-1;1>=w;w+=1)0>f+w||p<=f+w||(m!=0||w!=0)&&g==c.a(b+m,f+w)&&(x+=1);5<x&&(v+=3+x-5)}for(b=0;b<p-1;b+=1)for(f=0;f<p-1;f+=1)x=0,c.a(b,f)&&(x+=1),c.a(b+1,f)&&(x+=1),c.a(b,f+1)&&(x+=1),c.a(b+1,f+1)&&(x+=1),(x==0||x==4)&&(v+=3);for(b=0;b<p;b+=1)for(f=0;f<p-6;f+=1)c.a(b,f)&&!c.a(b,f+1)&&c.a(b,f+2)&&c.a(b,f+3)&&c.a(b,f+4)&&!c.a(b,f+5)&&c.a(b,f+6)&&(v+=40);for(f=0;f<p;f+=1)for(b=0;b<p-6;b+=1)c.a(b,f)&&!c.a(b+1,f)&&c.a(b+2,f)&&c.a(b+3,f)&&c.a(b+4,f)&&!c.a(b+5,f)&&c.a(b+6,f)&&(v+=40);for(f=x=0;f<p;f+=1)for(b=0;b<p;b+=1)c.a(b,f)&&(x+=1);return v+=Math.abs(100*x/p/p-50)/5*10}};return d}(),s=function(){for(var a=Array(256),u=Array(256),d=0;8>d;d+=1)a[d]=1<<d;for(d=8;256>d;d+=1)a[d]=a[d-4]^a[d-5]^a[d-6]^a[d-8];for(d=0;255>d;d+=1)u[a[d]]=d;return{g:function(c){if(1>c)throw Error("glog("+c+")");return u[c]},i:function(c){for(;0>c;)c+=255;for(;256<=c;)c-=255;return a[c]}}}(),l=function(){function a(c,p){switch(p){case o.L:return u[4*(c-1)];case o.M:return u[4*(c-1)+1];case o.Q:return u[4*(c-1)+2];case o.H:return u[4*(c-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],d={I:function(c,p){var v=a(c,p);if(typeof v>"u")throw Error("bad rs block @ typeNumber:"+c+"/errorCorrectLevel:"+p);c=v.length/3,p=[];for(var b=0;b<c;b+=1)for(var f=v[3*b],x=v[3*b+1],g=v[3*b+2],m=0;m<f;m+=1){var w=g,_={};_.o=x,_.j=w,p.push(_)}return p}};return d}();return r}());var $y=QrCreator,pt=class extends I{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="#000",this.background="#fff",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){!this.hasUpdated||$y.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background==="transparent"?null:this.background,size:this.size*2},this.canvas)}render(){return L`
      <div
        class="qr-code"
        part="base"
        style=${at({width:`${this.size}px`,height:`${this.size}px`})}
      >
        <canvas role="img" aria-label=${this.label.length>0?this.label:this.value}></canvas>
      </div>
    `}};pt.styles=Sy;h([M("canvas")],pt.prototype,"canvas",2);h([y()],pt.prototype,"value",2);h([y()],pt.prototype,"label",2);h([y({type:Number})],pt.prototype,"size",2);h([y()],pt.prototype,"fill",2);h([y()],pt.prototype,"background",2);h([y({type:Number})],pt.prototype,"radius",2);h([y({attribute:"error-correction"})],pt.prototype,"errorCorrection",2);h([P("background"),P("errorCorrection"),P("fill"),P("radius"),P("size"),P("value")],pt.prototype,"generate",1);pt=h([N("sl-qr-code")],pt);B(F,"sl-qr-code",pt,{});var Cy=U`
  ${V}

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
`,ot=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.checked=!1,this.invalid=!1,this.defaultChecked=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio")}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){const e=this.closest("sl-radio-group"),t=e==null?void 0:e.getAllRadios().filter(i=>!i.disabled),r=e==null?void 0:e.required,n=t==null?void 0:t.some(i=>i.checked),o=i=>i.shadowRoot.querySelector('input[type="radio"]');if(!e||!t)return!0;if(r&&!n){const i=o(t[0]);return i.required=!0,i.reportValidity()}t.forEach(i=>o(i).required=!1);for(const i of t)if(!o(i).reportValidity())return!1;return!0}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.hasUpdated&&E(this,"sl-change")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.hasUpdated&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}render(){return L`
      <label
        part="base"
        class=${X({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus})}
      >
        <input
          class="radio__input"
          type="radio"
          name=${O(this.name)}
          value=${O(this.value)}
          .checked=${Rr(this.checked)}
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
    `}};ot.styles=Cy;h([M(".radio__input")],ot.prototype,"input",2);h([q()],ot.prototype,"hasFocus",2);h([y()],ot.prototype,"name",2);h([y()],ot.prototype,"value",2);h([y({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],ot.prototype,"checked",2);h([y({type:Boolean,reflect:!0})],ot.prototype,"invalid",2);h([pr("checked")],ot.prototype,"defaultChecked",2);h([P("checked")],ot.prototype,"handleCheckedChange",1);h([P("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1);ot=h([N("sl-radio")],ot);B(F,"sl-radio",ot,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var cn=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,n=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[n]+this.unit,i=parseFloat((this.value/Math.pow(1e3,n)).toPrecision(3));return this.localize.number(i,{style:"unit",unit:o,unitDisplay:this.display})}};h([y({type:Number})],cn.prototype,"value",2);h([y()],cn.prototype,"unit",2);h([y()],cn.prototype,"display",2);h([y()],cn.prototype,"lang",2);cn=h([N("sl-format-bytes")],cn);B(F,"sl-format-bytes",cn,{});var He=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return L`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};h([y()],He.prototype,"date",2);h([y()],He.prototype,"lang",2);h([y()],He.prototype,"weekday",2);h([y()],He.prototype,"era",2);h([y()],He.prototype,"year",2);h([y()],He.prototype,"month",2);h([y()],He.prototype,"day",2);h([y()],He.prototype,"hour",2);h([y()],He.prototype,"minute",2);h([y()],He.prototype,"second",2);h([y({attribute:"time-zone-name"})],He.prototype,"timeZoneName",2);h([y({attribute:"time-zone"})],He.prototype,"timeZone",2);h([y({attribute:"hour-format"})],He.prototype,"hourFormat",2);He=h([N("sl-format-date")],He);B(F,"sl-format-date",He,{});var it=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};h([y({type:Number})],it.prototype,"value",2);h([y()],it.prototype,"lang",2);h([y()],it.prototype,"type",2);h([y({attribute:"no-grouping",type:Boolean})],it.prototype,"noGrouping",2);h([y()],it.prototype,"currency",2);h([y({attribute:"currency-display"})],it.prototype,"currencyDisplay",2);h([y({attribute:"minimum-integer-digits",type:Number})],it.prototype,"minimumIntegerDigits",2);h([y({attribute:"minimum-fraction-digits",type:Number})],it.prototype,"minimumFractionDigits",2);h([y({attribute:"maximum-fraction-digits",type:Number})],it.prototype,"maximumFractionDigits",2);h([y({attribute:"minimum-significant-digits",type:Number})],it.prototype,"minimumSignificantDigits",2);h([y({attribute:"maximum-significant-digits",type:Number})],it.prototype,"maximumSignificantDigits",2);it=h([N("sl-format-number")],it);B(F,"sl-format-number",it,{});var Xi=B(F,"sl-icon",Xt,{onSlLoad:"sl-load",onSlError:"sl-error"}),zy=U`
  ${V}

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
`,st=class extends I{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){const e=!!this.href,t=e?Ts`a`:Ts`button`;return Ro`
      <${t}
        part="base"
        class=${X({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${O(e?void 0:this.disabled)}
        type=${O(e?void 0:"button")}
        href=${O(e?this.href:void 0)}
        target=${O(e?this.target:void 0)}
        download=${O(e?this.download:void 0)}
        rel=${O(e&&this.target?"noreferrer noopener":void 0)}
        role=${O(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${O(this.name)}
          library=${O(this.library)}
          src=${O(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};st.styles=zy;h([q()],st.prototype,"hasFocus",2);h([M(".icon-button")],st.prototype,"button",2);h([y()],st.prototype,"name",2);h([y()],st.prototype,"library",2);h([y()],st.prototype,"src",2);h([y()],st.prototype,"href",2);h([y()],st.prototype,"target",2);h([y()],st.prototype,"download",2);h([y()],st.prototype,"label",2);h([y({type:Boolean,reflect:!0})],st.prototype,"disabled",2);st=h([N("sl-icon-button")],st);B(F,"sl-icon-button",st,{onSlBlur:"sl-blur",onSlFocus:"sl-focus"});var Ey=U`
  ${V}

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
`,Nr=class extends I{constructor(){super(...arguments),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect();e.preventDefault(),Do(this.base,{onMove:r=>{this.position=parseFloat(ke(r/t*100,0,100).toFixed(2))},initialEvent:e})}handleKeyDown(e){if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const t=e.shiftKey?10:1;let r=this.position;e.preventDefault(),e.key==="ArrowLeft"&&(r-=t),e.key==="ArrowRight"&&(r+=t),e.key==="Home"&&(r=0),e.key==="End"&&(r=100),r=ke(r,0,100),this.position=r}}handlePositionChange(){E(this,"sl-change")}render(){return L`
      <div part="base" id="image-comparer" class="image-comparer" @keydown=${this.handleKeyDown}>
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${at({clipPath:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${at({left:`${this.position}%`})}
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
    `}};Nr.styles=Ey;h([M(".image-comparer")],Nr.prototype,"base",2);h([M(".image-comparer__handle")],Nr.prototype,"handle",2);h([y({type:Number,reflect:!0})],Nr.prototype,"position",2);h([P("position",{waitUntilFirstUpdate:!0})],Nr.prototype,"handlePositionChange",1);Nr=h([N("sl-image-comparer")],Nr);B(F,"sl-image-comparer",Nr,{onSlChange:"sl-change"});var Ty=U`
  ${V}

  :host {
    display: block;
  }
`,Br=class extends I{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await If(e,this.mode);if(e!==this.src)return;if(!t.ok){E(this,"sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),E(this,"sl-load")}catch{E(this,"sl-error",{detail:{status:-1}})}}render(){return L`<slot></slot>`}};Br.styles=Ty;h([y()],Br.prototype,"src",2);h([y()],Br.prototype,"mode",2);h([y({attribute:"allow-scripts",type:Boolean})],Br.prototype,"allowScripts",2);h([P("src")],Br.prototype,"handleSrcChange",1);Br=h([N("sl-include")],Br);B(F,"sl-include",Br,{onSlLoad:"sl-load",onSlError:"sl-error"});var Ay=U`
  ${V}
  ${Gs}

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
`,W=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this),this.hasSlotController=new Nt(this,"help-text","label"),this.localize=new fe(this),this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.noSpinButtons=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){this.input.setRangeText(e,t,r,n),this.value!==this.input.value&&(this.value=this.input.value,E(this,"sl-input"),E(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleChange(){this.value=this.input.value,E(this,"sl-change")}handleClearClick(e){this.value="",E(this,"sl-clear"),E(this,"sl-input"),E(this,"sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleInput(){this.value=this.input.value,E(this,"sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{e.defaultPrevented||this.formSubmitController.submit()})}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return L`
      <div
        part="form-control"
        class=${X({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
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
            class=${X({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":navigator.userAgent.includes("Firefox")})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.isPasswordVisible?"text":this.type}
              name=${O(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${O(this.placeholder)}
              minlength=${O(this.minlength)}
              maxlength=${O(this.maxlength)}
              min=${O(this.min)}
              max=${O(this.max)}
              step=${O(this.step)}
              .value=${Rr(this.value)}
              autocapitalize=${O(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${O(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${O(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${O(this.spellcheck)}
              pattern=${O(this.pattern)}
              enterkeyhint=${O(this.enterkeyhint)}
              inputmode=${O(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?L`
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
            ${this.togglePassword&&!this.disabled?L`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible?L`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:L`
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
    `}};W.styles=Ay;h([M(".input__control")],W.prototype,"input",2);h([q()],W.prototype,"hasFocus",2);h([q()],W.prototype,"isPasswordVisible",2);h([y({reflect:!0})],W.prototype,"type",2);h([y({reflect:!0})],W.prototype,"size",2);h([y()],W.prototype,"name",2);h([y()],W.prototype,"value",2);h([pr()],W.prototype,"defaultValue",2);h([y({type:Boolean,reflect:!0})],W.prototype,"filled",2);h([y({type:Boolean,reflect:!0})],W.prototype,"pill",2);h([y()],W.prototype,"label",2);h([y({attribute:"help-text"})],W.prototype,"helpText",2);h([y({type:Boolean})],W.prototype,"clearable",2);h([y({attribute:"toggle-password",type:Boolean})],W.prototype,"togglePassword",2);h([y({attribute:"no-spin-buttons",type:Boolean})],W.prototype,"noSpinButtons",2);h([y()],W.prototype,"placeholder",2);h([y({type:Boolean,reflect:!0})],W.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],W.prototype,"readonly",2);h([y({type:Number})],W.prototype,"minlength",2);h([y({type:Number})],W.prototype,"maxlength",2);h([y()],W.prototype,"min",2);h([y()],W.prototype,"max",2);h([y({type:Number})],W.prototype,"step",2);h([y()],W.prototype,"pattern",2);h([y({type:Boolean,reflect:!0})],W.prototype,"required",2);h([y({type:Boolean,reflect:!0})],W.prototype,"invalid",2);h([y()],W.prototype,"autocapitalize",2);h([y()],W.prototype,"autocorrect",2);h([y()],W.prototype,"autocomplete",2);h([y({type:Boolean})],W.prototype,"autofocus",2);h([y()],W.prototype,"enterkeyhint",2);h([y({type:Boolean})],W.prototype,"spellcheck",2);h([y()],W.prototype,"inputmode",2);h([P("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);h([P("value",{waitUntilFirstUpdate:!0})],W.prototype,"handleValueChange",1);W=h([N("sl-input")],W);var Nd=B(F,"sl-input",W,{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur"}),Ly=U`
  ${V}

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
`,Ps=class extends I{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"footer","header","image")}render(){return L`
      <div
        part="base"
        class=${X({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
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
    `}};Ps.styles=Ly;Ps=h([N("sl-card")],Ps);var Nf=B(F,"sl-card",Ps,{}),Py=U`
  ${V}

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
`,je=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,E(this,"sl-change")}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleStateChange(){this.invalid=!this.input.checkValidity()}render(){return L`
      <label
        part="base"
        class=${X({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          name=${O(this.name)}
          value=${O(this.value)}
          .indeterminate=${Rr(this.indeterminate)}
          .checked=${Rr(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?L`
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
          ${!this.checked&&this.indeterminate?L`
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
    `}};je.styles=Py;h([M('input[type="checkbox"]')],je.prototype,"input",2);h([q()],je.prototype,"hasFocus",2);h([y()],je.prototype,"name",2);h([y()],je.prototype,"value",2);h([y({type:Boolean,reflect:!0})],je.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],je.prototype,"required",2);h([y({type:Boolean,reflect:!0})],je.prototype,"checked",2);h([y({type:Boolean,reflect:!0})],je.prototype,"indeterminate",2);h([y({type:Boolean,reflect:!0})],je.prototype,"invalid",2);h([pr("checked")],je.prototype,"defaultChecked",2);h([P("disabled",{waitUntilFirstUpdate:!0})],je.prototype,"handleDisabledChange",1);h([P("checked",{waitUntilFirstUpdate:!0}),P("indeterminate",{waitUntilFirstUpdate:!0})],je.prototype,"handleStateChange",1);je=h([N("sl-checkbox")],je);B(F,"sl-checkbox",je,{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus"});var Oy=U`
  ${V}

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
`,Bf=jr({"node_modules/color-name/index.js"(e,t){t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),Dy=jr({"node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(e,t){t.exports=function(n){return!n||typeof n=="string"?!1:n instanceof Array||Array.isArray(n)||n.length>=0&&(n.splice instanceof Function||Object.getOwnPropertyDescriptor(n,n.length-1)&&n.constructor.name!=="String")}}}),Ry=jr({"node_modules/simple-swizzle/index.js"(e,t){var r=Dy(),n=Array.prototype.concat,o=Array.prototype.slice,i=t.exports=function(l){for(var a=[],u=0,d=l.length;u<d;u++){var c=l[u];r(c)?a=n.call(a,o.call(c)):a.push(c)}return a};i.wrap=function(s){return function(){return s(i(arguments))}}}}),Iy=jr({"node_modules/color-string/index.js"(e,t){var r=Bf(),n=Ry(),o=Object.hasOwnProperty,i={};for(s in r)o.call(r,s)&&(i[r[s]]=s);var s,l=t.exports={to:{},get:{}};l.get=function(d){var c=d.substring(0,3).toLowerCase(),p,v;switch(c){case"hsl":p=l.get.hsl(d),v="hsl";break;case"hwb":p=l.get.hwb(d),v="hwb";break;default:p=l.get.rgb(d),v="rgb";break}return p?{model:v,value:p}:null},l.get.rgb=function(d){if(!d)return null;var c=/^#([a-f0-9]{3,4})$/i,p=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,v=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,b=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,f=/^(\w+)$/,x=[0,0,0,1],g,m,w;if(g=d.match(p)){for(w=g[2],g=g[1],m=0;m<3;m++){var _=m*2;x[m]=parseInt(g.slice(_,_+2),16)}w&&(x[3]=parseInt(w,16)/255)}else if(g=d.match(c)){for(g=g[1],w=g[3],m=0;m<3;m++)x[m]=parseInt(g[m]+g[m],16);w&&(x[3]=parseInt(w+w,16)/255)}else if(g=d.match(v)){for(m=0;m<3;m++)x[m]=parseInt(g[m+1],0);g[4]&&(g[5]?x[3]=parseFloat(g[4])*.01:x[3]=parseFloat(g[4]))}else if(g=d.match(b)){for(m=0;m<3;m++)x[m]=Math.round(parseFloat(g[m+1])*2.55);g[4]&&(g[5]?x[3]=parseFloat(g[4])*.01:x[3]=parseFloat(g[4]))}else return(g=d.match(f))?g[1]==="transparent"?[0,0,0,0]:o.call(r,g[1])?(x=r[g[1]],x[3]=1,x):null:null;for(m=0;m<3;m++)x[m]=a(x[m],0,255);return x[3]=a(x[3],0,1),x},l.get.hsl=function(d){if(!d)return null;var c=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=d.match(c);if(p){var v=parseFloat(p[4]),b=(parseFloat(p[1])%360+360)%360,f=a(parseFloat(p[2]),0,100),x=a(parseFloat(p[3]),0,100),g=a(isNaN(v)?1:v,0,1);return[b,f,x,g]}return null},l.get.hwb=function(d){if(!d)return null;var c=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=d.match(c);if(p){var v=parseFloat(p[4]),b=(parseFloat(p[1])%360+360)%360,f=a(parseFloat(p[2]),0,100),x=a(parseFloat(p[3]),0,100),g=a(isNaN(v)?1:v,0,1);return[b,f,x,g]}return null},l.to.hex=function(){var d=n(arguments);return"#"+u(d[0])+u(d[1])+u(d[2])+(d[3]<1?u(Math.round(d[3]*255)):"")},l.to.rgb=function(){var d=n(arguments);return d.length<4||d[3]===1?"rgb("+Math.round(d[0])+", "+Math.round(d[1])+", "+Math.round(d[2])+")":"rgba("+Math.round(d[0])+", "+Math.round(d[1])+", "+Math.round(d[2])+", "+d[3]+")"},l.to.rgb.percent=function(){var d=n(arguments),c=Math.round(d[0]/255*100),p=Math.round(d[1]/255*100),v=Math.round(d[2]/255*100);return d.length<4||d[3]===1?"rgb("+c+"%, "+p+"%, "+v+"%)":"rgba("+c+"%, "+p+"%, "+v+"%, "+d[3]+")"},l.to.hsl=function(){var d=n(arguments);return d.length<4||d[3]===1?"hsl("+d[0]+", "+d[1]+"%, "+d[2]+"%)":"hsla("+d[0]+", "+d[1]+"%, "+d[2]+"%, "+d[3]+")"},l.to.hwb=function(){var d=n(arguments),c="";return d.length>=4&&d[3]!==1&&(c=", "+d[3]),"hwb("+d[0]+", "+d[1]+"%, "+d[2]+"%"+c+")"},l.to.keyword=function(d){return i[d.slice(0,3)]};function a(d,c,p){return Math.min(Math.max(c,d),p)}function u(d){var c=Math.round(d).toString(16).toUpperCase();return c.length<2?"0"+c:c}}}),Uf=jr({"node_modules/color-convert/conversions.js"(e,t){var r=Bf(),n={};for(const s of Object.keys(r))n[r[s]]=s;var o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=o;for(const s of Object.keys(o)){if(!("channels"in o[s]))throw new Error("missing channels property: "+s);if(!("labels"in o[s]))throw new Error("missing channel labels property: "+s);if(o[s].labels.length!==o[s].channels)throw new Error("channel and label counts mismatch: "+s);const{channels:l,labels:a}=o[s];delete o[s].channels,delete o[s].labels,Object.defineProperty(o[s],"channels",{value:l}),Object.defineProperty(o[s],"labels",{value:a})}o.rgb.hsl=function(s){const l=s[0]/255,a=s[1]/255,u=s[2]/255,d=Math.min(l,a,u),c=Math.max(l,a,u),p=c-d;let v,b;c===d?v=0:l===c?v=(a-u)/p:a===c?v=2+(u-l)/p:u===c&&(v=4+(l-a)/p),v=Math.min(v*60,360),v<0&&(v+=360);const f=(d+c)/2;return c===d?b=0:f<=.5?b=p/(c+d):b=p/(2-c-d),[v,b*100,f*100]},o.rgb.hsv=function(s){let l,a,u,d,c;const p=s[0]/255,v=s[1]/255,b=s[2]/255,f=Math.max(p,v,b),x=f-Math.min(p,v,b),g=function(m){return(f-m)/6/x+1/2};return x===0?(d=0,c=0):(c=x/f,l=g(p),a=g(v),u=g(b),p===f?d=u-a:v===f?d=1/3+l-u:b===f&&(d=2/3+a-l),d<0?d+=1:d>1&&(d-=1)),[d*360,c*100,f*100]},o.rgb.hwb=function(s){const l=s[0],a=s[1];let u=s[2];const d=o.rgb.hsl(s)[0],c=1/255*Math.min(l,Math.min(a,u));return u=1-1/255*Math.max(l,Math.max(a,u)),[d,c*100,u*100]},o.rgb.cmyk=function(s){const l=s[0]/255,a=s[1]/255,u=s[2]/255,d=Math.min(1-l,1-a,1-u),c=(1-l-d)/(1-d)||0,p=(1-a-d)/(1-d)||0,v=(1-u-d)/(1-d)||0;return[c*100,p*100,v*100,d*100]};function i(s,l){return(s[0]-l[0])**2+(s[1]-l[1])**2+(s[2]-l[2])**2}o.rgb.keyword=function(s){const l=n[s];if(l)return l;let a=1/0,u;for(const d of Object.keys(r)){const c=r[d],p=i(s,c);p<a&&(a=p,u=d)}return u},o.keyword.rgb=function(s){return r[s]},o.rgb.xyz=function(s){let l=s[0]/255,a=s[1]/255,u=s[2]/255;l=l>.04045?((l+.055)/1.055)**2.4:l/12.92,a=a>.04045?((a+.055)/1.055)**2.4:a/12.92,u=u>.04045?((u+.055)/1.055)**2.4:u/12.92;const d=l*.4124+a*.3576+u*.1805,c=l*.2126+a*.7152+u*.0722,p=l*.0193+a*.1192+u*.9505;return[d*100,c*100,p*100]},o.rgb.lab=function(s){const l=o.rgb.xyz(s);let a=l[0],u=l[1],d=l[2];a/=95.047,u/=100,d/=108.883,a=a>.008856?a**(1/3):7.787*a+16/116,u=u>.008856?u**(1/3):7.787*u+16/116,d=d>.008856?d**(1/3):7.787*d+16/116;const c=116*u-16,p=500*(a-u),v=200*(u-d);return[c,p,v]},o.hsl.rgb=function(s){const l=s[0]/360,a=s[1]/100,u=s[2]/100;let d,c,p;if(a===0)return p=u*255,[p,p,p];u<.5?d=u*(1+a):d=u+a-u*a;const v=2*u-d,b=[0,0,0];for(let f=0;f<3;f++)c=l+1/3*-(f-1),c<0&&c++,c>1&&c--,6*c<1?p=v+(d-v)*6*c:2*c<1?p=d:3*c<2?p=v+(d-v)*(2/3-c)*6:p=v,b[f]=p*255;return b},o.hsl.hsv=function(s){const l=s[0];let a=s[1]/100,u=s[2]/100,d=a;const c=Math.max(u,.01);u*=2,a*=u<=1?u:2-u,d*=c<=1?c:2-c;const p=(u+a)/2,v=u===0?2*d/(c+d):2*a/(u+a);return[l,v*100,p*100]},o.hsv.rgb=function(s){const l=s[0]/60,a=s[1]/100;let u=s[2]/100;const d=Math.floor(l)%6,c=l-Math.floor(l),p=255*u*(1-a),v=255*u*(1-a*c),b=255*u*(1-a*(1-c));switch(u*=255,d){case 0:return[u,b,p];case 1:return[v,u,p];case 2:return[p,u,b];case 3:return[p,v,u];case 4:return[b,p,u];case 5:return[u,p,v]}},o.hsv.hsl=function(s){const l=s[0],a=s[1]/100,u=s[2]/100,d=Math.max(u,.01);let c,p;p=(2-a)*u;const v=(2-a)*d;return c=a*d,c/=v<=1?v:2-v,c=c||0,p/=2,[l,c*100,p*100]},o.hwb.rgb=function(s){const l=s[0]/360;let a=s[1]/100,u=s[2]/100;const d=a+u;let c;d>1&&(a/=d,u/=d);const p=Math.floor(6*l),v=1-u;c=6*l-p,(p&1)!==0&&(c=1-c);const b=a+c*(v-a);let f,x,g;switch(p){default:case 6:case 0:f=v,x=b,g=a;break;case 1:f=b,x=v,g=a;break;case 2:f=a,x=v,g=b;break;case 3:f=a,x=b,g=v;break;case 4:f=b,x=a,g=v;break;case 5:f=v,x=a,g=b;break}return[f*255,x*255,g*255]},o.cmyk.rgb=function(s){const l=s[0]/100,a=s[1]/100,u=s[2]/100,d=s[3]/100,c=1-Math.min(1,l*(1-d)+d),p=1-Math.min(1,a*(1-d)+d),v=1-Math.min(1,u*(1-d)+d);return[c*255,p*255,v*255]},o.xyz.rgb=function(s){const l=s[0]/100,a=s[1]/100,u=s[2]/100;let d,c,p;return d=l*3.2406+a*-1.5372+u*-.4986,c=l*-.9689+a*1.8758+u*.0415,p=l*.0557+a*-.204+u*1.057,d=d>.0031308?1.055*d**(1/2.4)-.055:d*12.92,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,p=p>.0031308?1.055*p**(1/2.4)-.055:p*12.92,d=Math.min(Math.max(0,d),1),c=Math.min(Math.max(0,c),1),p=Math.min(Math.max(0,p),1),[d*255,c*255,p*255]},o.xyz.lab=function(s){let l=s[0],a=s[1],u=s[2];l/=95.047,a/=100,u/=108.883,l=l>.008856?l**(1/3):7.787*l+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,u=u>.008856?u**(1/3):7.787*u+16/116;const d=116*a-16,c=500*(l-a),p=200*(a-u);return[d,c,p]},o.lab.xyz=function(s){const l=s[0],a=s[1],u=s[2];let d,c,p;c=(l+16)/116,d=a/500+c,p=c-u/200;const v=c**3,b=d**3,f=p**3;return c=v>.008856?v:(c-16/116)/7.787,d=b>.008856?b:(d-16/116)/7.787,p=f>.008856?f:(p-16/116)/7.787,d*=95.047,c*=100,p*=108.883,[d,c,p]},o.lab.lch=function(s){const l=s[0],a=s[1],u=s[2];let d;d=Math.atan2(u,a)*360/2/Math.PI,d<0&&(d+=360);const p=Math.sqrt(a*a+u*u);return[l,p,d]},o.lch.lab=function(s){const l=s[0],a=s[1],d=s[2]/360*2*Math.PI,c=a*Math.cos(d),p=a*Math.sin(d);return[l,c,p]},o.rgb.ansi16=function(s,l=null){const[a,u,d]=s;let c=l===null?o.rgb.hsv(s)[2]:l;if(c=Math.round(c/50),c===0)return 30;let p=30+(Math.round(d/255)<<2|Math.round(u/255)<<1|Math.round(a/255));return c===2&&(p+=60),p},o.hsv.ansi16=function(s){return o.rgb.ansi16(o.hsv.rgb(s),s[2])},o.rgb.ansi256=function(s){const l=s[0],a=s[1],u=s[2];return l===a&&a===u?l<8?16:l>248?231:Math.round((l-8)/247*24)+232:16+36*Math.round(l/255*5)+6*Math.round(a/255*5)+Math.round(u/255*5)},o.ansi16.rgb=function(s){let l=s%10;if(l===0||l===7)return s>50&&(l+=3.5),l=l/10.5*255,[l,l,l];const a=(~~(s>50)+1)*.5,u=(l&1)*a*255,d=(l>>1&1)*a*255,c=(l>>2&1)*a*255;return[u,d,c]},o.ansi256.rgb=function(s){if(s>=232){const c=(s-232)*10+8;return[c,c,c]}s-=16;let l;const a=Math.floor(s/36)/5*255,u=Math.floor((l=s%36)/6)/5*255,d=l%6/5*255;return[a,u,d]},o.rgb.hex=function(s){const a=(((Math.round(s[0])&255)<<16)+((Math.round(s[1])&255)<<8)+(Math.round(s[2])&255)).toString(16).toUpperCase();return"000000".substring(a.length)+a},o.hex.rgb=function(s){const l=s.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!l)return[0,0,0];let a=l[0];l[0].length===3&&(a=a.split("").map(v=>v+v).join(""));const u=parseInt(a,16),d=u>>16&255,c=u>>8&255,p=u&255;return[d,c,p]},o.rgb.hcg=function(s){const l=s[0]/255,a=s[1]/255,u=s[2]/255,d=Math.max(Math.max(l,a),u),c=Math.min(Math.min(l,a),u),p=d-c;let v,b;return p<1?v=c/(1-p):v=0,p<=0?b=0:d===l?b=(a-u)/p%6:d===a?b=2+(u-l)/p:b=4+(l-a)/p,b/=6,b%=1,[b*360,p*100,v*100]},o.hsl.hcg=function(s){const l=s[1]/100,a=s[2]/100,u=a<.5?2*l*a:2*l*(1-a);let d=0;return u<1&&(d=(a-.5*u)/(1-u)),[s[0],u*100,d*100]},o.hsv.hcg=function(s){const l=s[1]/100,a=s[2]/100,u=l*a;let d=0;return u<1&&(d=(a-u)/(1-u)),[s[0],u*100,d*100]},o.hcg.rgb=function(s){const l=s[0]/360,a=s[1]/100,u=s[2]/100;if(a===0)return[u*255,u*255,u*255];const d=[0,0,0],c=l%1*6,p=c%1,v=1-p;let b=0;switch(Math.floor(c)){case 0:d[0]=1,d[1]=p,d[2]=0;break;case 1:d[0]=v,d[1]=1,d[2]=0;break;case 2:d[0]=0,d[1]=1,d[2]=p;break;case 3:d[0]=0,d[1]=v,d[2]=1;break;case 4:d[0]=p,d[1]=0,d[2]=1;break;default:d[0]=1,d[1]=0,d[2]=v}return b=(1-a)*u,[(a*d[0]+b)*255,(a*d[1]+b)*255,(a*d[2]+b)*255]},o.hcg.hsv=function(s){const l=s[1]/100,a=s[2]/100,u=l+a*(1-l);let d=0;return u>0&&(d=l/u),[s[0],d*100,u*100]},o.hcg.hsl=function(s){const l=s[1]/100,u=s[2]/100*(1-l)+.5*l;let d=0;return u>0&&u<.5?d=l/(2*u):u>=.5&&u<1&&(d=l/(2*(1-u))),[s[0],d*100,u*100]},o.hcg.hwb=function(s){const l=s[1]/100,a=s[2]/100,u=l+a*(1-l);return[s[0],(u-l)*100,(1-u)*100]},o.hwb.hcg=function(s){const l=s[1]/100,a=s[2]/100,u=1-a,d=u-l;let c=0;return d<1&&(c=(u-d)/(1-d)),[s[0],d*100,c*100]},o.apple.rgb=function(s){return[s[0]/65535*255,s[1]/65535*255,s[2]/65535*255]},o.rgb.apple=function(s){return[s[0]/255*65535,s[1]/255*65535,s[2]/255*65535]},o.gray.rgb=function(s){return[s[0]/100*255,s[0]/100*255,s[0]/100*255]},o.gray.hsl=function(s){return[0,0,s[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(s){return[0,100,s[0]]},o.gray.cmyk=function(s){return[0,0,0,s[0]]},o.gray.lab=function(s){return[s[0],0,0]},o.gray.hex=function(s){const l=Math.round(s[0]/100*255)&255,u=((l<<16)+(l<<8)+l).toString(16).toUpperCase();return"000000".substring(u.length)+u},o.rgb.gray=function(s){return[(s[0]+s[1]+s[2])/3/255*100]}}}),My=jr({"node_modules/color-convert/route.js"(e,t){var r=Uf();function n(){const l={},a=Object.keys(r);for(let u=a.length,d=0;d<u;d++)l[a[d]]={distance:-1,parent:null};return l}function o(l){const a=n(),u=[l];for(a[l].distance=0;u.length;){const d=u.pop(),c=Object.keys(r[d]);for(let p=c.length,v=0;v<p;v++){const b=c[v],f=a[b];f.distance===-1&&(f.distance=a[d].distance+1,f.parent=d,u.unshift(b))}}return a}function i(l,a){return function(u){return a(l(u))}}function s(l,a){const u=[a[l].parent,l];let d=r[a[l].parent][l],c=a[l].parent;for(;a[c].parent;)u.unshift(a[c].parent),d=i(r[a[c].parent][c],d),c=a[c].parent;return d.conversion=u,d}t.exports=function(l){const a=o(l),u={},d=Object.keys(a);for(let c=d.length,p=0;p<c;p++){const v=d[p];a[v].parent!==null&&(u[v]=s(v,a))}return u}}}),Fy=jr({"node_modules/color-convert/index.js"(e,t){var r=Uf(),n=My(),o={},i=Object.keys(r);function s(a){const u=function(...d){const c=d[0];return c==null?c:(c.length>1&&(d=c),a(d))};return"conversion"in a&&(u.conversion=a.conversion),u}function l(a){const u=function(...d){const c=d[0];if(c==null)return c;c.length>1&&(d=c);const p=a(d);if(typeof p=="object")for(let v=p.length,b=0;b<v;b++)p[b]=Math.round(p[b]);return p};return"conversion"in a&&(u.conversion=a.conversion),u}i.forEach(a=>{o[a]={},Object.defineProperty(o[a],"channels",{value:r[a].channels}),Object.defineProperty(o[a],"labels",{value:r[a].labels});const u=n(a);Object.keys(u).forEach(c=>{const p=u[c];o[a][c]=l(p),o[a][c].raw=s(p)})}),t.exports=o}}),Ny=jr({"node_modules/color/index.js"(e,t){var r=Iy(),n=Fy(),o=[].slice,i=["keyword","gray","hex"],s={};for(const f of Object.keys(n))s[o.call(n[f].labels).sort().join("")]=f;var l={};function a(f,x){if(!(this instanceof a))return new a(f,x);if(x&&x in i&&(x=null),x&&!(x in n))throw new Error("Unknown model: "+x);let g,m;if(f==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(f instanceof a)this.model=f.model,this.color=f.color.slice(),this.valpha=f.valpha;else if(typeof f=="string"){const w=r.get(f);if(w===null)throw new Error("Unable to parse color from string: "+f);this.model=w.model,m=n[this.model].channels,this.color=w.value.slice(0,m),this.valpha=typeof w.value[m]=="number"?w.value[m]:1}else if(f.length>0){this.model=x||"rgb",m=n[this.model].channels;const w=o.call(f,0,m);this.color=b(w,m),this.valpha=typeof f[m]=="number"?f[m]:1}else if(typeof f=="number")this.model="rgb",this.color=[f>>16&255,f>>8&255,f&255],this.valpha=1;else{this.valpha=1;const w=Object.keys(f);"alpha"in f&&(w.splice(w.indexOf("alpha"),1),this.valpha=typeof f.alpha=="number"?f.alpha:0);const _=w.sort().join("");if(!(_ in s))throw new Error("Unable to parse color from object: "+JSON.stringify(f));this.model=s[_];const k=n[this.model].labels,$=[];for(g=0;g<k.length;g++)$.push(f[k[g]]);this.color=b($)}if(l[this.model])for(m=n[this.model].channels,g=0;g<m;g++){const w=l[this.model][g];w&&(this.color[g]=w(this.color[g]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}a.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(f){let x=this.model in r.to?this:this.rgb();x=x.round(typeof f=="number"?f:1);const g=x.valpha===1?x.color:x.color.concat(this.valpha);return r.to[x.model](g)},percentString(f){const x=this.rgb().round(typeof f=="number"?f:1),g=x.valpha===1?x.color:x.color.concat(this.valpha);return r.to.rgb.percent(g)},array(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object(){const f={},x=n[this.model].channels,g=n[this.model].labels;for(let m=0;m<x;m++)f[g[m]]=this.color[m];return this.valpha!==1&&(f.alpha=this.valpha),f},unitArray(){const f=this.rgb().color;return f[0]/=255,f[1]/=255,f[2]/=255,this.valpha!==1&&f.push(this.valpha),f},unitObject(){const f=this.rgb().object();return f.r/=255,f.g/=255,f.b/=255,this.valpha!==1&&(f.alpha=this.valpha),f},round(f){return f=Math.max(f||0,0),new a(this.color.map(d(f)).concat(this.valpha),this.model)},alpha(f){return arguments.length>0?new a(this.color.concat(Math.max(0,Math.min(1,f))),this.model):this.valpha},red:c("rgb",0,p(255)),green:c("rgb",1,p(255)),blue:c("rgb",2,p(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,f=>(f%360+360)%360),saturationl:c("hsl",1,p(100)),lightness:c("hsl",2,p(100)),saturationv:c("hsv",1,p(100)),value:c("hsv",2,p(100)),chroma:c("hcg",1,p(100)),gray:c("hcg",2,p(100)),white:c("hwb",1,p(100)),wblack:c("hwb",2,p(100)),cyan:c("cmyk",0,p(100)),magenta:c("cmyk",1,p(100)),yellow:c("cmyk",2,p(100)),black:c("cmyk",3,p(100)),x:c("xyz",0,p(100)),y:c("xyz",1,p(100)),z:c("xyz",2,p(100)),l:c("lab",0,p(100)),a:c("lab",1),b:c("lab",2),keyword(f){return arguments.length>0?new a(f):n[this.model].keyword(this.color)},hex(f){return arguments.length>0?new a(f):r.to.hex(this.rgb().round().color)},hexa(f){if(arguments.length>0)return new a(f);const x=this.rgb().round().color;let g=Math.round(this.valpha*255).toString(16).toUpperCase();return g.length===1&&(g="0"+g),r.to.hex(x)+g},rgbNumber(){const f=this.rgb().color;return(f[0]&255)<<16|(f[1]&255)<<8|f[2]&255},luminosity(){const f=this.rgb().color,x=[];for(const[g,m]of f.entries()){const w=m/255;x[g]=w<=.03928?w/12.92:((w+.055)/1.055)**2.4}return .2126*x[0]+.7152*x[1]+.0722*x[2]},contrast(f){const x=this.luminosity(),g=f.luminosity();return x>g?(x+.05)/(g+.05):(g+.05)/(x+.05)},level(f){const x=this.contrast(f);return x>=7.1?"AAA":x>=4.5?"AA":""},isDark(){const f=this.rgb().color;return(f[0]*299+f[1]*587+f[2]*114)/1e3<128},isLight(){return!this.isDark()},negate(){const f=this.rgb();for(let x=0;x<3;x++)f.color[x]=255-f.color[x];return f},lighten(f){const x=this.hsl();return x.color[2]+=x.color[2]*f,x},darken(f){const x=this.hsl();return x.color[2]-=x.color[2]*f,x},saturate(f){const x=this.hsl();return x.color[1]+=x.color[1]*f,x},desaturate(f){const x=this.hsl();return x.color[1]-=x.color[1]*f,x},whiten(f){const x=this.hwb();return x.color[1]+=x.color[1]*f,x},blacken(f){const x=this.hwb();return x.color[2]+=x.color[2]*f,x},grayscale(){const f=this.rgb().color,x=f[0]*.3+f[1]*.59+f[2]*.11;return a.rgb(x,x,x)},fade(f){return this.alpha(this.valpha-this.valpha*f)},opaquer(f){return this.alpha(this.valpha+this.valpha*f)},rotate(f){const x=this.hsl();let g=x.color[0];return g=(g+f)%360,g=g<0?360+g:g,x.color[0]=g,x},mix(f,x){if(!f||!f.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof f);const g=f.rgb(),m=this.rgb(),w=x===void 0?.5:x,_=2*w-1,k=g.alpha()-m.alpha(),$=((_*k===-1?_:(_+k)/(1+_*k))+1)/2,S=1-$;return a.rgb($*g.red()+S*m.red(),$*g.green()+S*m.green(),$*g.blue()+S*m.blue(),g.alpha()*w+m.alpha()*(1-w))}};for(const f of Object.keys(n)){if(i.includes(f))continue;const x=n[f].channels;a.prototype[f]=function(){if(this.model===f)return new a(this);if(arguments.length>0)return new a(arguments,f);const g=typeof arguments[x]=="number"?x:this.valpha;return new a(v(n[this.model][f].raw(this.color)).concat(g),f)},a[f]=function(g){return typeof g=="number"&&(g=b(o.call(arguments),x)),new a(g,f)}}function u(f,x){return Number(f.toFixed(x))}function d(f){return function(x){return u(x,f)}}function c(f,x,g){f=Array.isArray(f)?f:[f];for(const m of f)(l[m]||(l[m]=[]))[x]=g;return f=f[0],function(m){let w;return arguments.length>0?(g&&(m=g(m)),w=this[f](),w.color[x]=m,w):(w=this[f]().color[x],g&&(w=g(w)),w)}}function p(f){return function(x){return Math.max(0,Math.min(f,x))}}function v(f){return Array.isArray(f)?f:[f]}function b(f,x){for(let g=0;g<x;g++)typeof f[g]!="number"&&(f[g]=0);return f}t.exports=a}}),By=dv(Ny(),1),Bd="EyeDropper"in window,Z=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this),this.isSafeValue=!1,this.localize=new fe(this),this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.lightness=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.invalid=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}connectedCallback(){super.connectedCallback(),this.value?(this.setColor(this.value),this.inputValue=this.value,this.lastValueEmitted=this.value,this.syncValues()):(this.isEmpty=!0,this.inputValue="",this.lastValueEmitted="")}getFormattedValue(e="hex"){const t=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;default:return""}}getBrightness(e){return ke(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return ke((200-this.saturation)*e/100*5/10,0,100)}reportValidity(){return!this.inline&&this.input.invalid?new Promise(e=>{this.dropdown.addEventListener("sl-after-show",()=>{this.input.reportValidity(),e()},{once:!0}),this.dropdown.show()}):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=this.input.invalid}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t]}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();r.focus(),e.preventDefault(),Do(t,{onMove:o=>{this.alpha=ke(o/n*100,0,100),this.syncValues()},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();r.focus(),e.preventDefault(),Do(t,{onMove:o=>{this.hue=ke(o/n*360,0,360),this.syncValues()},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:n,height:o}=t.getBoundingClientRect();r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Do(t,{onMove:(i,s)=>{this.saturation=ke(i/n*100,0,100),this.brightness=ke(100-s/o*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=ke(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=ke(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues())}handleHueKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=ke(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=ke(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues())}handleGridKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=ke(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=ke(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=ke(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=ke(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}handleInputChange(e){const t=e.target;this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",e.stopPropagation()}handleInputKeyDown(e){e.key==="Enter"&&(this.input.value?(this.setColor(this.input.value),this.input.value=this.value,setTimeout(()=>this.input.select())):this.hue=0)}normalizeColorString(e){if(/rgba?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}if(/hsla?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`hsla(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}return/^[0-9a-f]+$/i.test(e)?`#${e}`:e}parseColor(e){let t;e=this.normalizeColorString(e);try{t=(0,By.default)(e)}catch{return null}const r=t.hsl(),n={h:r.hue(),s:r.saturationl(),l:r.lightness(),a:r.alpha()},o=t.rgb(),i={r:o.red(),g:o.green(),b:o.blue(),a:o.alpha()},s={r:Di(i.r),g:Di(i.g),b:Di(i.b),a:Di(i.a*255)};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(`#${s.r}${s.g}${s.b}`),hexa:this.setLetterCase(`#${s.r}${s.g}${s.b}${s.a}`)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsla.h,this.saturation=t.hsla.s,this.lightness=t.hsla.l,this.brightness=this.getBrightness(t.hsla.l),this.alpha=this.opacity?t.hsla.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Bd)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=100,this.brightness=100,this.lightness=this.getLightness(this.brightness),this.alpha=100),!this.isSafeValue&&e!==void 0){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsla.h,this.saturation=r.hsla.s,this.lightness=r.hsla.l,this.brightness=this.getBrightness(r.hsla.l),this.alpha=r.hsla.a*100):this.inputValue=e}this.value!==this.lastValueEmitted&&(E(this,"sl-change"),this.lastValueEmitted=this.value)}render(){const e=this.saturation,t=100-this.brightness,r=L`
      <div
        part="base"
        class=${X({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?L`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${at({backgroundColor:`hsl(${this.hue}deg, 100%, 50%)`})}
          @mousedown=${this.handleGridDrag}
          @touchstart=${this.handleGridDrag}
        >
          <span
            part="grid-handle"
            class=${X({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${at({top:`${t}%`,left:`${e}%`,backgroundColor:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`})}
            role="application"
            aria-label="HSL"
            tabindex=${O(this.disabled?void 0:"0")}
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
                style=${at({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${O(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?L`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @mousedown="${this.handleAlphaDrag}"
                    @touchstart="${this.handleAlphaDrag}"
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${at({backgroundImage:`linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${at({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${O(this.disabled?void 0:"0")}
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
            style=${at({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
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
            .value=${Rr(this.isEmpty?"":this.inputValue)}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":L`
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
            ${Bd?L`
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

        ${this.swatches.length>0?L`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(n=>L`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${O(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${n}
                      @click=${()=>!this.disabled&&this.setColor(n)}
                      @keydown=${o=>!this.disabled&&o.key==="Enter"&&this.setColor(n)}
                    >
                      <div class="color-picker__swatch-color" style=${at({backgroundColor:n})}></div>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `;return this.inline?r:L`
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
          class=${X({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-picker__transparent-bg":!0})}
          style=${at({color:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};Z.styles=Oy;h([M('[part="input"]')],Z.prototype,"input",2);h([M('[part="preview"]')],Z.prototype,"previewButton",2);h([M(".color-dropdown")],Z.prototype,"dropdown",2);h([q()],Z.prototype,"isDraggingGridHandle",2);h([q()],Z.prototype,"isEmpty",2);h([q()],Z.prototype,"inputValue",2);h([q()],Z.prototype,"hue",2);h([q()],Z.prototype,"saturation",2);h([q()],Z.prototype,"lightness",2);h([q()],Z.prototype,"brightness",2);h([q()],Z.prototype,"alpha",2);h([y()],Z.prototype,"value",2);h([pr()],Z.prototype,"defaultValue",2);h([y()],Z.prototype,"label",2);h([y()],Z.prototype,"format",2);h([y({type:Boolean,reflect:!0})],Z.prototype,"inline",2);h([y()],Z.prototype,"size",2);h([y({attribute:"no-format-toggle",type:Boolean})],Z.prototype,"noFormatToggle",2);h([y()],Z.prototype,"name",2);h([y({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],Z.prototype,"invalid",2);h([y({type:Boolean})],Z.prototype,"hoist",2);h([y({type:Boolean})],Z.prototype,"opacity",2);h([y({type:Boolean})],Z.prototype,"uppercase",2);h([y({attribute:!1})],Z.prototype,"swatches",2);h([y()],Z.prototype,"lang",2);h([P("format",{waitUntilFirstUpdate:!0})],Z.prototype,"handleFormatChange",1);h([P("opacity")],Z.prototype,"handleOpacityChange",1);h([P("value")],Z.prototype,"handleValueChange",1);Z=h([N("sl-color-picker")],Z);function Di(e){const t=Math.round(e).toString(16);return t.length===1?`0${t}`:t}B(F,"sl-color-picker",Z,{onSlChange:"sl-change"});var Uy=U`
  ${V}

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
`,It=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!(this.open||this.disabled))return this.open=!0,St(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,St(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){E(this,"sl-show"),await Ue(this.body),this.body.hidden=!1;const{keyframes:e,options:t}=Ae(this,"details.show",{dir:this.localize.dir()});await Te(this.body,Od(e,this.body.scrollHeight),t),this.body.style.height="auto",E(this,"sl-after-show")}else{E(this,"sl-hide"),await Ue(this.body);const{keyframes:e,options:t}=Ae(this,"details.hide",{dir:this.localize.dir()});await Te(this.body,Od(e,this.body.scrollHeight),t),this.body.hidden=!0,this.body.style.height="auto",E(this,"sl-after-hide")}}render(){return L`
      <div
        part="base"
        class=${X({details:!0,"details--open":this.open,"details--disabled":this.disabled})}
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
    `}};It.styles=Uy;h([M(".details")],It.prototype,"details",2);h([M(".details__header")],It.prototype,"header",2);h([M(".details__body")],It.prototype,"body",2);h([y({type:Boolean,reflect:!0})],It.prototype,"open",2);h([y()],It.prototype,"summary",2);h([y({type:Boolean,reflect:!0})],It.prototype,"disabled",2);h([P("open",{waitUntilFirstUpdate:!0})],It.prototype,"handleOpenChange",1);It=h([N("sl-details")],It);ue("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ue("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});B(F,"sl-details",It,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"});function Ud(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Vf(e){var t,r;const n=[];function o(l){l instanceof HTMLElement&&(n.push(l),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&o(l.shadowRoot)),[...l.children].forEach(a=>o(a))}o(e);const i=(t=n.find(l=>Ud(l)))!=null?t:null,s=(r=n.reverse().find(l=>Ud(l)))!=null?r:null;return{start:i,end:s}}var vo=[],Hf=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){vo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){vo=vo.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return vo[vo.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=Vf(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}},Vy=U`
  ${V}

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
`,Mt=class extends I{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"footer"),this.localize=new fe(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new Hf(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),zs(this))}disconnectedCallback(){super.disconnectedCallback(),Es(this)}async show(){if(!this.open)return this.open=!0,St(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,St(this,"sl-after-hide")}requestClose(e){if(E(this,"sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Ae(this,"dialog.denyClose",{dir:this.localize.dir()});Te(this.panel,r.keyframes,r.options);return}this.hide()}handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){E(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),zs(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ue(this.dialog),Ue(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{E(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ae(this,"dialog.show",{dir:this.localize.dir()}),r=Ae(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Te(this.panel,t.keyframes,t.options),Te(this.overlay,r.keyframes,r.options)]),E(this,"sl-after-show")}else{E(this,"sl-hide"),this.modal.deactivate(),await Promise.all([Ue(this.dialog),Ue(this.overlay)]);const e=Ae(this,"dialog.hide",{dir:this.localize.dir()}),t=Ae(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Te(this.panel,e.keyframes,e.options),Te(this.overlay,t.keyframes,t.options)]),this.dialog.hidden=!0,Es(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),E(this,"sl-after-hide")}}render(){return L`
      <div
        part="base"
        class=${X({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":L`
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
    `}};Mt.styles=Vy;h([M(".dialog")],Mt.prototype,"dialog",2);h([M(".dialog__panel")],Mt.prototype,"panel",2);h([M(".dialog__overlay")],Mt.prototype,"overlay",2);h([y({type:Boolean,reflect:!0})],Mt.prototype,"open",2);h([y({reflect:!0})],Mt.prototype,"label",2);h([y({attribute:"no-header",type:Boolean,reflect:!0})],Mt.prototype,"noHeader",2);h([P("open",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleOpenChange",1);Mt=h([N("sl-dialog")],Mt);ue("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});ue("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});ue("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});ue("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ue("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});B(F,"sl-dialog",Mt,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"});var Hy=U`
  ${V}

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
`,Jn=class extends I{constructor(){super(...arguments),this.vertical=!1}firstUpdated(){this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Jn.styles=Hy;h([y({type:Boolean,reflect:!0})],Jn.prototype,"vertical",2);h([P("vertical")],Jn.prototype,"handleVerticalChange",1);Jn=h([N("sl-divider")],Jn);B(F,"sl-divider",Jn,{});var jy=U`
  ${V}

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
`,Me=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}async firstUpdated(){this.panel.hidden=!this.open,this.open&&(await this.updateComplete,this.addOpenListeners(),this.startPositioner())}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide(),this.stopPositioner()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(e){var t;if(e.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,n,o;const i=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(i==null?void 0:i.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;Fa(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.updatePositioner()}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),n=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}));const i=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!i.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const r=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(o=>Vf(o).start);let n;if(r){switch(r.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=r.button;break;default:n=r}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,St(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,St(this,"sl-after-hide")}reposition(){this.updatePositioner()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){E(this,"sl-show"),this.addOpenListeners(),await Ue(this),this.startPositioner(),this.panel.hidden=!1;const{keyframes:e,options:t}=Ae(this,"dropdown.show",{dir:this.localize.dir()});await Te(this.panel,e,t),E(this,"sl-after-show")}else{E(this,"sl-hide"),this.removeOpenListeners(),await Ue(this);const{keyframes:e,options:t}=Ae(this,"dropdown.hide",{dir:this.localize.dir()});await Te(this.panel,e,t),this.panel.hidden=!0,this.stopPositioner(),E(this,"sl-after-hide")}}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=zf(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){!this.open||!this.trigger||!this.positioner||Ef(this.trigger,this.positioner,{placement:this.placement,middleware:[bf({mainAxis:this.distance,crossAxis:this.skidding}),yf(),wf(),Ev({apply:({availableWidth:e,availableHeight:t})=>{Object.assign(this.panel.style,{maxWidth:`${e}px`,maxHeight:`${t}px`})}})],strategy:this.hoist?"fixed":"absolute"}).then(({x:e,y:t,placement:r})=>{this.positioner.setAttribute("data-placement",r),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${e}px`,top:`${t}px`})})}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return L`
      <div
        part="base"
        id="dropdown"
        class=${X({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Me.styles=jy;h([M(".dropdown__trigger")],Me.prototype,"trigger",2);h([M(".dropdown__panel")],Me.prototype,"panel",2);h([M(".dropdown__positioner")],Me.prototype,"positioner",2);h([y({type:Boolean,reflect:!0})],Me.prototype,"open",2);h([y({reflect:!0})],Me.prototype,"placement",2);h([y({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);h([y({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Me.prototype,"stayOpenOnSelect",2);h([y({attribute:!1})],Me.prototype,"containingElement",2);h([y({type:Number})],Me.prototype,"distance",2);h([y({type:Number})],Me.prototype,"skidding",2);h([y({type:Boolean})],Me.prototype,"hoist",2);h([P("distance"),P("hoist"),P("placement"),P("skidding")],Me.prototype,"handlePopoverOptionsChange",1);h([P("open",{waitUntilFirstUpdate:!0})],Me.prototype,"handleOpenChange",1);Me=h([N("sl-dropdown")],Me);ue("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});ue("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});B(F,"sl-dropdown",Me,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"});var Wy=U`
  ${V}

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
`;function Vd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ft=class extends I{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"footer"),this.localize=new fe(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new Hf(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.modal.activate(),zs(this))}disconnectedCallback(){super.disconnectedCallback(),Es(this)}async show(){if(!this.open)return this.open=!0,St(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,St(this,"sl-after-hide")}requestClose(e){if(E(this,"sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Ae(this,"drawer.denyClose",{dir:this.localize.dir()});Te(this.panel,r.keyframes,r.options);return}this.hide()}handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){E(this,"sl-show"),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),zs(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ue(this.drawer),Ue(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{E(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ae(this,`drawer.show${Vd(this.placement)}`,{dir:this.localize.dir()}),r=Ae(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Te(this.panel,t.keyframes,t.options),Te(this.overlay,r.keyframes,r.options)]),E(this,"sl-after-show")}else{E(this,"sl-hide"),this.modal.deactivate(),Es(this),await Promise.all([Ue(this.drawer),Ue(this.overlay)]);const e=Ae(this,`drawer.hide${Vd(this.placement)}`,{dir:this.localize.dir()}),t=Ae(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Te(this.panel,e.keyframes,e.options),Te(this.overlay,t.keyframes,t.options)]),this.drawer.hidden=!0;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),E(this,"sl-after-hide")}}render(){return L`
      <div
        part="base"
        class=${X({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":L`
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
    `}};ft.styles=Wy;h([M(".drawer")],ft.prototype,"drawer",2);h([M(".drawer__panel")],ft.prototype,"panel",2);h([M(".drawer__overlay")],ft.prototype,"overlay",2);h([y({type:Boolean,reflect:!0})],ft.prototype,"open",2);h([y({reflect:!0})],ft.prototype,"label",2);h([y({reflect:!0})],ft.prototype,"placement",2);h([y({type:Boolean,reflect:!0})],ft.prototype,"contained",2);h([y({attribute:"no-header",type:Boolean,reflect:!0})],ft.prototype,"noHeader",2);h([P("open",{waitUntilFirstUpdate:!0})],ft.prototype,"handleOpenChange",1);ft=h([N("sl-drawer")],ft);ue("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});ue("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:{duration:250,easing:"ease"}});ue("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});ue("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:{duration:250,easing:"ease"}});ue("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});ue("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:{duration:250,easing:"ease"}});ue("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});ue("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:{duration:250,easing:"ease"}});ue("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:{duration:250}});ue("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ue("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});B(F,"sl-drawer",ft,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"});var Ky=U`
  ${V}

  :host {
    display: contents;
  }
`,Ha={};uv(Ha,{backInDown:()=>s1,backInLeft:()=>l1,backInRight:()=>a1,backInUp:()=>u1,backOutDown:()=>c1,backOutLeft:()=>d1,backOutRight:()=>h1,backOutUp:()=>p1,bounce:()=>Xy,bounceIn:()=>f1,bounceInDown:()=>m1,bounceInLeft:()=>g1,bounceInRight:()=>v1,bounceInUp:()=>y1,bounceOut:()=>b1,bounceOutDown:()=>w1,bounceOutLeft:()=>_1,bounceOutRight:()=>x1,bounceOutUp:()=>k1,easings:()=>Mb,fadeIn:()=>S1,fadeInBottomLeft:()=>$1,fadeInBottomRight:()=>C1,fadeInDown:()=>z1,fadeInDownBig:()=>E1,fadeInLeft:()=>T1,fadeInLeftBig:()=>A1,fadeInRight:()=>L1,fadeInRightBig:()=>P1,fadeInTopLeft:()=>O1,fadeInTopRight:()=>D1,fadeInUp:()=>R1,fadeInUpBig:()=>I1,fadeOut:()=>M1,fadeOutBottomLeft:()=>F1,fadeOutBottomRight:()=>N1,fadeOutDown:()=>B1,fadeOutDownBig:()=>U1,fadeOutLeft:()=>V1,fadeOutLeftBig:()=>H1,fadeOutRight:()=>j1,fadeOutRightBig:()=>W1,fadeOutTopLeft:()=>K1,fadeOutTopRight:()=>X1,fadeOutUp:()=>Y1,fadeOutUpBig:()=>q1,flash:()=>Yy,flip:()=>Q1,flipInX:()=>G1,flipInY:()=>Z1,flipOutX:()=>J1,flipOutY:()=>eb,headShake:()=>qy,heartBeat:()=>Qy,hinge:()=>kb,jackInTheBox:()=>Sb,jello:()=>Gy,lightSpeedInLeft:()=>tb,lightSpeedInRight:()=>rb,lightSpeedOutLeft:()=>nb,lightSpeedOutRight:()=>ob,pulse:()=>Zy,rollIn:()=>$b,rollOut:()=>Cb,rotateIn:()=>ib,rotateInDownLeft:()=>sb,rotateInDownRight:()=>lb,rotateInUpLeft:()=>ab,rotateInUpRight:()=>ub,rotateOut:()=>cb,rotateOutDownLeft:()=>db,rotateOutDownRight:()=>hb,rotateOutUpLeft:()=>pb,rotateOutUpRight:()=>fb,rubberBand:()=>Jy,shake:()=>e1,shakeX:()=>t1,shakeY:()=>r1,slideInDown:()=>mb,slideInLeft:()=>gb,slideInRight:()=>vb,slideInUp:()=>yb,slideOutDown:()=>bb,slideOutLeft:()=>wb,slideOutRight:()=>_b,slideOutUp:()=>xb,swing:()=>n1,tada:()=>o1,wobble:()=>i1,zoomIn:()=>zb,zoomInDown:()=>Eb,zoomInLeft:()=>Tb,zoomInRight:()=>Ab,zoomInUp:()=>Lb,zoomOut:()=>Pb,zoomOutDown:()=>Ob,zoomOutLeft:()=>Db,zoomOutRight:()=>Rb,zoomOutUp:()=>Ib});var Xy=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Yy=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],qy=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Qy=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Gy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zy=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Jy=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],e1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],t1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],r1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],n1=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],o1=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],i1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],s1=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],l1=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],a1=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],u1=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],c1=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],d1=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],h1=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],p1=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],f1=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],m1=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],g1=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],v1=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],y1=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],b1=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],w1=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],_1=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],x1=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],k1=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],S1=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],$1=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],C1=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],z1=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],E1=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],T1=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],A1=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],L1=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],P1=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],O1=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],D1=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],R1=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],I1=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],M1=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],F1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],N1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],B1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],U1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],V1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],H1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],j1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],W1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],K1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],X1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Y1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],q1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Q1=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],G1=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Z1=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],J1=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],eb=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],tb=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],rb=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],nb=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],ob=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],ib=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],sb=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],lb=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ab=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ub=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],cb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],db=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],hb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],pb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],fb=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],mb=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],gb=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],vb=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],yb=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],bb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],wb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],_b=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],xb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],kb=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Sb=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],$b=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cb=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],zb=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Eb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Tb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ab=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Lb=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Pb=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Ob=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Db=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Rb=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Ib=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Mb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},xe=class extends I{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation(),this.handleAnimationCancel=this.handleAnimationCancel.bind(this),this.handleAnimationFinish=this.handleAnimationFinish.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleAnimationChange(){!this.hasUpdated||this.createAnimation()}handleAnimationFinish(){this.play=!1,this.hasStarted=!1,E(this,"sl-finish")}handleAnimationCancel(){this.play=!1,this.hasStarted=!1,E(this,"sl-cancel")}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,E(this,"sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=Ha.easings[this.easing])!=null?e:this.easing,n=(t=this.keyframes)!=null?t:Ha[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!n?!1:(this.destroyAnimation(),this.animation=i.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,E(this,"sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return L` <slot @slotchange=${this.handleSlotChange}></slot> `}};xe.styles=Ky;h([gv("slot")],xe.prototype,"defaultSlot",2);h([y()],xe.prototype,"name",2);h([y({type:Boolean,reflect:!0})],xe.prototype,"play",2);h([y({type:Number})],xe.prototype,"delay",2);h([y()],xe.prototype,"direction",2);h([y({type:Number})],xe.prototype,"duration",2);h([y()],xe.prototype,"easing",2);h([y({attribute:"end-delay",type:Number})],xe.prototype,"endDelay",2);h([y()],xe.prototype,"fill",2);h([y({type:Number})],xe.prototype,"iterations",2);h([y({attribute:"iteration-start",type:Number})],xe.prototype,"iterationStart",2);h([y({attribute:!1})],xe.prototype,"keyframes",2);h([y({attribute:"playback-rate",type:Number})],xe.prototype,"playbackRate",2);h([P("name"),P("delay"),P("direction"),P("duration"),P("easing"),P("endDelay"),P("fill"),P("iterations"),P("iterationsStart"),P("keyframes")],xe.prototype,"handleAnimationChange",1);h([P("play")],xe.prototype,"handlePlayChange",1);h([P("playbackRate")],xe.prototype,"handlePlaybackRateChange",1);xe=h([N("sl-animation")],xe);B(F,"sl-animation",xe,{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"});var Fb=U`
  ${V}

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
`,Ct=class extends I{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(E(this,"sl-load"),this.isLoaded=!0)}handleError(){E(this,"sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return L`
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

        ${this.isLoaded?L`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                ${this.play?L`<sl-icon part="pause-icon" name="pause-fill" library="system"></sl-icon>`:L`<sl-icon part="play-icon" name="play-fill" library="system"></sl-icon>`}
              </div>
            `:""}
      </div>
    `}};Ct.styles=Fb;h([q()],Ct.prototype,"frozenFrame",2);h([q()],Ct.prototype,"isLoaded",2);h([M(".animated-image__animated")],Ct.prototype,"animatedImage",2);h([y()],Ct.prototype,"src",2);h([y()],Ct.prototype,"alt",2);h([y({type:Boolean,reflect:!0})],Ct.prototype,"play",2);h([P("play",{waitUntilFirstUpdate:!0})],Ct.prototype,"handlePlayChange",1);h([P("src")],Ct.prototype,"handleSrcChange",1);Ct=h([N("sl-animated-image")],Ct);B(F,"sl-animated-image",Ct,{onSlLoad:"sl-load",onSlError:"sl-error"});var Nb=U`
  ${V}

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
`,Yt=class extends I{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){return L`
      <div
        part="base"
        class=${X({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.initials?L` <div part="initials" class="avatar__initials">${this.initials}</div> `:L`
              <div part="icon" class="avatar__icon" aria-hidden="true">
                <slot name="icon">
                  <sl-icon name="person-fill" library="system"></sl-icon>
                </slot>
              </div>
            `}
        ${this.image&&!this.hasError?L`
              <img
                part="image"
                class="avatar__image"
                src="${this.image}"
                alt=""
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};Yt.styles=Nb;h([q()],Yt.prototype,"hasError",2);h([y()],Yt.prototype,"image",2);h([y()],Yt.prototype,"label",2);h([y()],Yt.prototype,"initials",2);h([y({reflect:!0})],Yt.prototype,"shape",2);h([P("image")],Yt.prototype,"handleImageChange",1);Yt=h([N("sl-avatar")],Yt);B(F,"sl-avatar",Yt,{});var Bb=U`
  ${V}

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
`,dn=class extends I{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return L`
      <span
        part="base"
        class=${X({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};dn.styles=Bb;h([y({reflect:!0})],dn.prototype,"variant",2);h([y({type:Boolean,reflect:!0})],dn.prototype,"pill",2);h([y({type:Boolean,reflect:!0})],dn.prototype,"pulse",2);dn=h([N("sl-badge")],dn);B(F,"sl-badge",dn,{});var Ub=U`
  ${V}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,hn=class extends I{constructor(){super(...arguments),this.localize=new fe(this),this.separatorDir=this.localize.dir(),this.label="Breadcrumb"}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const n=t.querySelector('[slot="separator"]');n===null?t.append(this.getSeparator()):n.hasAttribute("data-default")&&n.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),L`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};hn.styles=Ub;h([M("slot")],hn.prototype,"defaultSlot",2);h([M('slot[name="separator"]')],hn.prototype,"separatorSlot",2);h([y()],hn.prototype,"label",2);hn=h([N("sl-breadcrumb")],hn);B(F,"sl-breadcrumb",hn,{});var Vb=U`
  ${V}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Hd=["sl-button","sl-radio-button"],eo=class extends I{constructor(){super(...arguments),this.label=""}handleFocus(e){const t=yo(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=yo(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=yo(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=yo(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),n=yo(t);n!==null&&(n.classList.add("sl-button-group__button"),n.classList.toggle("sl-button-group__button--first",r===0),n.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),n.classList.toggle("sl-button-group__button--last",r===e.length-1),n.classList.toggle("sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return L`
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
    `}};eo.styles=Vb;h([M("slot")],eo.prototype,"defaultSlot",2);h([y()],eo.prototype,"label",2);eo=h([N("sl-button-group")],eo);function yo(e){return Hd.includes(e.tagName.toLowerCase())?e:e.querySelector(Hd.join(","))}B(F,"sl-button-group",eo,{});var le=class extends I{constructor(){super(...arguments),this.formSubmitController=new qt(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Nt(this,"[default]","prefix","suffix"),this.localize=new fe(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,E(this,"sl-blur")}handleFocus(){this.hasFocus=!0,E(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Ts`a`:Ts`button`;return Ro`
      <${t}
        part="base"
        class=${X({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${O(e?void 0:this.disabled)}
        type=${O(e?void 0:this.type)}
        name=${O(e?void 0:this.name)}
        value=${O(e?void 0:this.value)}
        href=${O(e?this.href:void 0)}
        target=${O(e?this.target:void 0)}
        download=${O(e?this.download:void 0)}
        rel=${O(e&&this.target?"noreferrer noopener":void 0)}
        role=${O(e?void 0:"button")}
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
        ${this.caret?Ro`
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
        ${this.loading?Ro`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};le.styles=Df;h([M(".button")],le.prototype,"button",2);h([q()],le.prototype,"hasFocus",2);h([y({reflect:!0})],le.prototype,"variant",2);h([y({reflect:!0})],le.prototype,"size",2);h([y({type:Boolean,reflect:!0})],le.prototype,"caret",2);h([y({type:Boolean,reflect:!0})],le.prototype,"disabled",2);h([y({type:Boolean,reflect:!0})],le.prototype,"loading",2);h([y({type:Boolean,reflect:!0})],le.prototype,"outline",2);h([y({type:Boolean,reflect:!0})],le.prototype,"pill",2);h([y({type:Boolean,reflect:!0})],le.prototype,"circle",2);h([y()],le.prototype,"type",2);h([y()],le.prototype,"name",2);h([y()],le.prototype,"value",2);h([y()],le.prototype,"href",2);h([y()],le.prototype,"target",2);h([y()],le.prototype,"download",2);h([y()],le.prototype,"form",2);h([y({attribute:"formaction"})],le.prototype,"formAction",2);h([y({attribute:"formmethod"})],le.prototype,"formMethod",2);h([y({attribute:"formnovalidate",type:Boolean})],le.prototype,"formNoValidate",2);h([y({attribute:"formtarget"})],le.prototype,"formTarget",2);le=h([N("sl-button")],le);var ja=B(F,"sl-button",le,{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}),Hb=U`
  ${V}

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
`,pn=class extends I{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return L`
      <div
        part="base"
        class=${X({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?L`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${O(this.target?this.target:void 0)}"
                rel=${O(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:L`
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
    `}};pn.styles=Hb;h([y()],pn.prototype,"href",2);h([y()],pn.prototype,"target",2);h([y()],pn.prototype,"rel",2);pn=h([N("sl-breadcrumb-item")],pn);B(F,"sl-breadcrumb-item",pn,{});var jb=U`
  ${V}

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
`,vn=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Ft=class extends I{constructor(){super(...arguments),this.hasSlotController=new Nt(this,"icon","suffix"),this.localize=new fe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,St(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,St(this,"sl-after-hide")}async toast(){return new Promise(e=>{vn.parentElement===null&&document.body.append(vn),vn.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{vn.removeChild(this),e(),vn.querySelector("sl-alert")===null&&vn.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){E(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ue(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Ae(this,"alert.show",{dir:this.localize.dir()});await Te(this.base,e,t),E(this,"sl-after-show")}else{E(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await Ue(this.base);const{keyframes:e,options:t}=Ae(this,"alert.hide",{dir:this.localize.dir()});await Te(this.base,e,t),this.base.hidden=!0,E(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return L`
      <div
        part="base"
        class=${X({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?L`
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
    `}};Ft.styles=jb;h([M('[part="base"]')],Ft.prototype,"base",2);h([y({type:Boolean,reflect:!0})],Ft.prototype,"open",2);h([y({type:Boolean,reflect:!0})],Ft.prototype,"closable",2);h([y({reflect:!0})],Ft.prototype,"variant",2);h([y({type:Number})],Ft.prototype,"duration",2);h([P("open",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleOpenChange",1);h([P("duration")],Ft.prototype,"handleDurationChange",1);Ft=h([N("sl-alert")],Ft);ue("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});ue("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});var jf=B(F,"sl-alert",Ft,{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}),qu={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wb=Q.exports,Kb=Symbol.for("react.element"),Xb=Symbol.for("react.fragment"),Yb=Object.prototype.hasOwnProperty,qb=Wb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qb={key:!0,ref:!0,__self:!0,__source:!0};function Wf(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Yb.call(t,n)&&!Qb.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Kb,type:e,key:i,ref:s,props:o,_owner:qb.current}}tl.Fragment=Xb;tl.jsx=Wf;tl.jsxs=Wf;(function(e){e.exports=tl})(qu);const ie=qu.exports.jsx,kr=qu.exports.jsxs,Gb=()=>{const[e,t]=Q.exports.useState(null),[r,n]=Q.exports.useState(null),o=sf();return kr("section",{children:[ie("form",{onSubmit:l=>{l.preventDefault(),e?o("/select-pages",{state:{file:e}}):n("You need to select a PDF first")},children:kr(Nf,{children:[ie("h1",{slot:"header",children:"Select your PDF"}),ie("input",{type:"file",accept:".pdf",onChange:l=>{l.target.files?(n(null),t(l.target.files[0])):n("Could not select that PDF")}}),ie("div",{slot:"footer",style:{display:"flex",justifyContent:"flex-end"},children:ie(ja,{variant:"primary",type:"submit",children:"Next"})})]})}),kr(jf,{open:Boolean(r),variant:"danger",children:[ie(Xi,{slot:"icon",name:"info-circle"}),r]})]})};const Zb="modulepreload",Jb=function(e){return"/pdf-tool/"+e},jd={},ew=function(t,r,n){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=Jb(o),o in jd)return;jd[o]=!0;const i=o.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Zb,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((a,u)=>{l.addEventListener("load",a),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},tw=()=>{const e=Uu(),t=sf(),{file:r}=e.state,[n,o]=Q.exports.useState(""),[i,s]=Q.exports.useState(""),[l,a]=Q.exports.useState(null),u=(c,p)=>{const{value:v}=c.target;v&&p(v)};return kr("section",{children:[ie("form",{onSubmit:async c=>{c.preventDefault();try{const{extractPages:p}=await ew(()=>import("./extractPages.426142a6.js"),[]),v=await p(r,n,i),b=URL.createObjectURL(v);window.location.href=b}catch(p){const{message:v}=p;v?a(v):console.error(p)}},children:kr(Nf,{children:[ie("h1",{slot:"header",children:"Select the pages to extract"}),ie("h2",{children:r.name}),ie(Nd,{onSlInput:c=>{u(c,o)},value:n,type:"number",inputmode:"numeric",label:"From",placeholder:"from page...",required:!0,children:ie(Xi,{slot:"prefix",name:"123"})}),ie(Nd,{onSlInput:c=>{u(c,s)},value:i,type:"number",inputmode:"numeric",label:"To (including)",placeholder:"to page...",required:!0,children:ie(Xi,{slot:"prefix",name:"123"})}),kr("div",{slot:"footer",style:{display:"flex",justifyContent:"space-between"},children:[ie(ja,{variant:"default",onClick:()=>t("/"),children:"Back"}),ie(ja,{variant:"primary",type:"submit",children:"Get PDF"})]})]})}),kr(jf,{open:Boolean(l),variant:"danger",children:[ie(Xi,{slot:"icon",name:"info-circle"}),l]})]})},rw=()=>(Ba("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/"),kr(Ng,{children:[ie(Pa,{path:"/",element:ie(Gb,{})}),ie(Pa,{path:"/select-pages",element:ie(tw,{})})]})),nw=({children:e})=>ie("main",{style:{height:"95vh",display:"grid",placeItems:"center"},children:e});ef(document.getElementById("root")).render(ie(Q.exports.StrictMode,{children:ie(Bg,{basename:"/pdf-tool",children:ie(nw,{children:ie(rw,{})})})}));
