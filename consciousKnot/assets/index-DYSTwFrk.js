(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function US(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var rh={exports:{}},Do={};var N0;function LS(){if(N0)return Do;N0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var O0;function NS(){return O0||(O0=1,rh.exports=LS()),rh.exports}var la=NS(),sh={exports:{}},ae={};var P0;function OS(){if(P0)return ae;P0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function g(O,et,St){this.props=O,this.context=et,this.refs=y,this.updater=St||b}g.prototype.isReactComponent={},g.prototype.setState=function(O,et){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,et,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=g.prototype;function w(O,et,St){this.props=O,this.context=et,this.refs=y,this.updater=St||b}var C=w.prototype=new L;C.constructor=w,E(C,g.prototype),C.isPureReactComponent=!0;var G=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function U(O,et,St){var Tt=St.ref;return{$$typeof:s,type:O,key:et,ref:Tt!==void 0?Tt:null,props:St}}function D(O,et){return U(O.type,et,O.props)}function B(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function ot(O){var et={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return et[St]})}var ct=/\/+/g;function ft(O,et){return typeof O=="object"&&O!==null&&O.key!=null?ot(""+O.key):et.toString(36)}function pt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(et){O.status==="pending"&&(O.status="fulfilled",O.value=et)},function(et){O.status==="pending"&&(O.status="rejected",O.reason=et)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,et,St,Tt,V){var at=typeof O;(at==="undefined"||at==="boolean")&&(O=null);var lt=!1;if(O===null)lt=!0;else switch(at){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(O.$$typeof){case s:case t:lt=!0;break;case v:return lt=O._init,z(lt(O._payload),et,St,Tt,V)}}if(lt)return V=V(O),lt=Tt===""?"."+ft(O,0):Tt,G(V)?(St="",lt!=null&&(St=lt.replace(ct,"$&/")+"/"),z(V,et,St,"",function(Zt){return Zt})):V!=null&&(B(V)&&(V=D(V,St+(V.key==null||O&&O.key===V.key?"":(""+V.key).replace(ct,"$&/")+"/")+lt)),et.push(V)),1;lt=0;var Ut=Tt===""?".":Tt+":";if(G(O))for(var Dt=0;Dt<O.length;Dt++)Tt=O[Dt],at=Ut+ft(Tt,Dt),lt+=z(Tt,et,St,at,V);else if(Dt=M(O),typeof Dt=="function")for(O=Dt.call(O),Dt=0;!(Tt=O.next()).done;)Tt=Tt.value,at=Ut+ft(Tt,Dt++),lt+=z(Tt,et,St,at,V);else if(at==="object"){if(typeof O.then=="function")return z(pt(O),et,St,Tt,V);throw et=String(O),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return lt}function K(O,et,St){if(O==null)return O;var Tt=[],V=0;return z(O,Tt,"","",function(at){return et.call(St,at,V++)}),Tt}function Y(O){if(O._status===-1){var et=O._result;et=et(),et.then(function(St){(O._status===0||O._status===-1)&&(O._status=1,O._result=St)},function(St){(O._status===0||O._status===-1)&&(O._status=2,O._result=St)}),O._status===-1&&(O._status=0,O._result=et)}if(O._status===1)return O._result.default;throw O._result}var xt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:K,forEach:function(O,et,St){K(O,function(){et.apply(this,arguments)},St)},count:function(O){var et=0;return K(O,function(){et++}),et},toArray:function(O){return K(O,function(et){return et})||[]},only:function(O){if(!B(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ae.Activity=_,ae.Children=Et,ae.Component=g,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=w,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ae.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},ae.cache=function(O){return function(){return O.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(O,et,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Tt=E({},O.props),V=O.key;if(et!=null)for(at in et.key!==void 0&&(V=""+et.key),et)!W.call(et,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&et.ref===void 0||(Tt[at]=et[at]);var at=arguments.length-2;if(at===1)Tt.children=St;else if(1<at){for(var lt=Array(at),Ut=0;Ut<at;Ut++)lt[Ut]=arguments[Ut+2];Tt.children=lt}return U(O.type,V,Tt)},ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ae.createElement=function(O,et,St){var Tt,V={},at=null;if(et!=null)for(Tt in et.key!==void 0&&(at=""+et.key),et)W.call(et,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(V[Tt]=et[Tt]);var lt=arguments.length-2;if(lt===1)V.children=St;else if(1<lt){for(var Ut=Array(lt),Dt=0;Dt<lt;Dt++)Ut[Dt]=arguments[Dt+2];V.children=Ut}if(O&&O.defaultProps)for(Tt in lt=O.defaultProps,lt)V[Tt]===void 0&&(V[Tt]=lt[Tt]);return U(O,at,V)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(O){return{$$typeof:d,render:O}},ae.isValidElement=B,ae.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Y}},ae.memo=function(O,et){return{$$typeof:p,type:O,compare:et===void 0?null:et}},ae.startTransition=function(O){var et=P.T,St={};P.T=St;try{var Tt=O(),V=P.S;V!==null&&V(St,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(I,xt)}catch(at){xt(at)}finally{et!==null&&St.types!==null&&(et.types=St.types),P.T=et}},ae.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ae.use=function(O){return P.H.use(O)},ae.useActionState=function(O,et,St){return P.H.useActionState(O,et,St)},ae.useCallback=function(O,et){return P.H.useCallback(O,et)},ae.useContext=function(O){return P.H.useContext(O)},ae.useDebugValue=function(){},ae.useDeferredValue=function(O,et){return P.H.useDeferredValue(O,et)},ae.useEffect=function(O,et){return P.H.useEffect(O,et)},ae.useEffectEvent=function(O){return P.H.useEffectEvent(O)},ae.useId=function(){return P.H.useId()},ae.useImperativeHandle=function(O,et,St){return P.H.useImperativeHandle(O,et,St)},ae.useInsertionEffect=function(O,et){return P.H.useInsertionEffect(O,et)},ae.useLayoutEffect=function(O,et){return P.H.useLayoutEffect(O,et)},ae.useMemo=function(O,et){return P.H.useMemo(O,et)},ae.useOptimistic=function(O,et){return P.H.useOptimistic(O,et)},ae.useReducer=function(O,et,St){return P.H.useReducer(O,et,St)},ae.useRef=function(O){return P.H.useRef(O)},ae.useState=function(O){return P.H.useState(O)},ae.useSyncExternalStore=function(O,et,St){return P.H.useSyncExternalStore(O,et,St)},ae.useTransition=function(){return P.H.useTransition()},ae.version="19.2.7",ae}var z0;function Fd(){return z0||(z0=1,sh.exports=OS()),sh.exports}var jh=Fd();const PS=US(jh);var oh={exports:{}},Uo={},lh={exports:{}},ch={};var B0;function zS(){return B0||(B0=1,(function(s){function t(z,K){var Y=z.length;z.push(K);t:for(;0<Y;){var xt=Y-1>>>1,Et=z[xt];if(0<l(Et,K))z[xt]=K,z[Y]=Et,Y=xt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;t:for(var xt=0,Et=z.length,O=Et>>>1;xt<O;){var et=2*(xt+1)-1,St=z[et],Tt=et+1,V=z[Tt];if(0>l(St,Y))Tt<Et&&0>l(V,St)?(z[xt]=V,z[Tt]=Y,xt=Tt):(z[xt]=St,z[et]=Y,xt=et);else if(Tt<Et&&0>l(V,Y))z[xt]=V,z[Tt]=Y,xt=Tt;else break t}}return K}function l(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,x=3,M=!1,b=!1,E=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=z)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function G(z){if(E=!1,C(z),!b)if(i(m)!==null)b=!0,I||(I=!0,ot());else{var K=i(p);K!==null&&pt(G,K.startTime-z)}}var I=!1,P=-1,W=5,U=-1;function D(){return y?!0:!(s.unstable_now()-U<W)}function B(){if(y=!1,I){var z=s.unstable_now();U=z;var K=!0;try{t:{b=!1,E&&(E=!1,L(P),P=-1),M=!0;var Y=x;try{e:{for(C(z),_=i(m);_!==null&&!(_.expirationTime>z&&D());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,x=_.priorityLevel;var Et=xt(_.expirationTime<=z);if(z=s.unstable_now(),typeof Et=="function"){_.callback=Et,C(z),K=!0;break e}_===i(m)&&r(m),C(z)}else r(m);_=i(m)}if(_!==null)K=!0;else{var O=i(p);O!==null&&pt(G,O.startTime-z),K=!1}}break t}finally{_=null,x=Y,M=!1}K=void 0}}finally{K?ot():I=!1}}}var ot;if(typeof w=="function")ot=function(){w(B)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ft=ct.port2;ct.port1.onmessage=B,ot=function(){ft.postMessage(null)}}else ot=function(){g(B,0)};function pt(z,K){P=g(function(){z(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return z()}finally{x=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return K()}finally{x=Y}},s.unstable_scheduleCallback=function(z,K,Y){var xt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,z){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,z={id:v++,callback:K,priorityLevel:z,startTime:Y,expirationTime:Et,sortIndex:-1},Y>xt?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(E?(L(P),P=-1):E=!0,pt(G,Y-xt))):(z.sortIndex=Et,t(m,z),b||M||(b=!0,I||(I=!0,ot()))),z},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(z){var K=x;return function(){var Y=x;x=K;try{return z.apply(this,arguments)}finally{x=Y}}}})(ch)),ch}var F0;function BS(){return F0||(F0=1,lh.exports=zS()),lh.exports}var uh={exports:{}},Tn={};var I0;function FS(){if(I0)return Tn;I0=1;var s=Fd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Tn.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.7",Tn}var H0;function IS(){if(H0)return uh.exports;H0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),uh.exports=FS(),uh.exports}var G0;function HS(){if(G0)return Uo;G0=1;var s=BS(),t=Fd(),i=IS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case w:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var pt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],Et=-1;function O(e){return{current:e}}function et(e){0>Et||(e.current=xt[Et],xt[Et]=null,Et--)}function St(e,n){Et++,xt[Et]=e.current,e.current=n}var Tt=O(null),V=O(null),at=O(null),lt=O(null);function Ut(e,n){switch(St(at,n),St(V,e),St(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n0(n),e=i0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Tt),St(Tt,e)}function Dt(){et(Tt),et(V),et(at)}function Zt(e){e.memoizedState!==null&&St(lt,e);var n=Tt.current,a=i0(n,e.type);n!==a&&(St(V,e),St(Tt,a))}function oe(e){V.current===e&&(et(Tt),et(V)),lt.current===e&&(et(lt),Ao._currentValue=Y)}var ee,H;function pe(e){if(ee===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ee=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+H}var qt=!1;function me(e,n){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var nt=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){nt=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){nt=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&nt&&typeof st.stack=="string")return[st.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var F=S.split(`
`),$=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===$.length)for(o=F.length-1,u=$.length-1;1<=o&&0<=u&&F[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==$[u]){var ht=`
`+F[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function Kt(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return pe("Activity");default:return""}}function Ge(e){try{var n="",a=null;do n+=Kt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ft=Object.prototype.hasOwnProperty,re=s.unstable_scheduleCallback,Ke=s.unstable_cancelCallback,je=s.unstable_shouldYield,N=s.unstable_requestPaint,T=s.unstable_now,tt=s.unstable_getCurrentPriorityLevel,dt=s.unstable_ImmediatePriority,yt=s.unstable_UserBlockingPriority,ut=s.unstable_NormalPriority,Yt=s.unstable_LowPriority,Ct=s.unstable_IdlePriority,Xt=s.log,Wt=s.unstable_setDisableYieldValue,bt=null,Rt=null;function jt(e){if(typeof Xt=="function"&&Wt(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(bt,e)}catch{}}var zt=Math.clz32?Math.clz32:X,Lt=Math.log,se=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Lt(e)/se|0)|0}var At=256,wt=262144,Bt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Mt(o):(S&=A,S!==0?u=Mt(S):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~f,A!==0?u=Mt(A):S!==0?u=Mt(S):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function It(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ni(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var ht=31-zt(a),gt=1<<ht;A[ht]=0,F[ht]=-1;var nt=$[ht];if(nt!==null)for($[ht]=null,ht=0;ht<nt.length;ht++){var st=nt[ht];st!==null&&(st.lane&=-536870913)}a&=~gt}o!==0&&Is(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Is(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ai(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function wr(e,n){var a=n&-n;return a=(a&42)!==0?1:Dr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Dr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ka(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:A0(e.type))}function Hs(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var Wn=Math.random().toString(36).slice(2),an="__reactFiber$"+Wn,_n="__reactProps$"+Wn,ma="__reactContainer$"+Wn,Gs="__reactEvents$"+Wn,Jc="__reactListeners$"+Wn,$c="__reactHandles$"+Wn,el="__reactResources$"+Wn,Qa="__reactMarker$"+Wn;function R(e){delete e[an],delete e[_n],delete e[Gs],delete e[Jc],delete e[$c]}function q(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ma]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u0(e);e!==null;){if(a=e[an])return a;e=u0(e)}return n}e=a,a=e.parentNode}return null}function it(e){if(e=e[an]||e[ma]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function j(e){var n=e[el];return n||(n=e[el]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _t(e){e[Qa]=!0}var Nt=new Set,Gt={};function Pt(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Gt[e]=n,e=0;e<n.length;e++)Nt.add(n[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Ue(e){return Ft.call(de,e)?!0:Ft.call(Jt,e)?!1:ne.test(e)?de[e]=!0:(Jt[e]=!0,!1)}function Ve(e,n,a){if(Ue(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Le(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ge(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xn(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=Te(e,n,""+e[n])}}function Fi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ja=/[\n"\\]/g;function xe(e){return e.replace(Ja,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(e,n,a,o,u,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vt(n)):e.value!==""+Vt(n)&&(e.value=""+Vt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?un(e,S,Vt(n)):a!=null?un(e,S,Vt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Vt(A):e.removeAttribute("name")}function Dn(e,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){xn(e);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),xn(e)}function un(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Lr(e,n,a){if(n!=null&&(n=""+Vt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Vt(a):""}function Ci(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(pt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Vt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),xn(e)}function Nr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var A_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||A_.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function tp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$d(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&$d(e,f,n[f])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return R_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var eu=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Pr=null;function ep(e){var n=it(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(r(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Fi(o)}break t;case"textarea":Lr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var iu=!1;function np(e,n,a){if(iu)return e(n,a);iu=!0;try{var o=e(n);return o}finally{if(iu=!1,(Or!==null||Pr!==null)&&(kl(),Or&&(n=Or,e=Pr,Pr=Or=null,ep(n),e)))for(n=0;n<e.length;n++)ep(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Hi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){au=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{au=!1}var ga=null,ru=null,il=null;function ip(){if(il)return il;var e,n=ru,a=n.length,o,u="value"in ga?ga.value:ga.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return il=u.slice(e,1<o?1-o:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function ap(){return!1}function Pn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:ap,this.isPropagationStopped=ap,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Pn($a),Xs=_({},$a,{view:0,detail:0}),w_=Pn(Xs),su,ou,Ws,ol=_({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(su=e.screenX-Ws.screenX,ou=e.screenY-Ws.screenY):ou=su=0,Ws=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),rp=Pn(ol),D_=_({},ol,{dataTransfer:0}),U_=Pn(D_),L_=_({},Xs,{relatedTarget:0}),lu=Pn(L_),N_=_({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=Pn(N_),P_=_({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z_=Pn(P_),B_=_({},$a,{data:0}),sp=Pn(B_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=H_[e])?!!n[e]:!1}function cu(){return G_}var V_=_({},Xs,{key:function(e){if(e.key){var n=F_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),k_=Pn(V_),X_=_({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Pn(X_),W_=_({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),q_=Pn(W_),Y_=_({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=Pn(Y_),Z_=_({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=Pn(Z_),Q_=_({},$a,{newState:0,oldState:0}),J_=Pn(Q_),$_=[9,13,27,32],uu=Hi&&"CompositionEvent"in window,qs=null;Hi&&"documentMode"in document&&(qs=document.documentMode);var tx=Hi&&"TextEvent"in window&&!qs,lp=Hi&&(!uu||qs&&8<qs&&11>=qs),cp=" ",up=!1;function fp(e,n){switch(e){case"keyup":return $_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function ex(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return e=n.data,e===cp&&up?null:e;default:return null}}function nx(e,n){if(zr)return e==="compositionend"||!uu&&fp(e,n)?(e=ip(),il=ru=ga=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ix[e.type]:n==="textarea"}function pp(e,n,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ys=null,js=null;function ax(e){Kg(e,0)}function ll(e){var n=rt(e);if(Fi(n))return e}function mp(e,n){if(e==="change")return n}var gp=!1;if(Hi){var fu;if(Hi){var hu="oninput"in document;if(!hu){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),hu=typeof vp.oninput=="function"}fu=hu}else fu=!1;gp=fu&&(!document.documentMode||9<document.documentMode)}function _p(){Ys&&(Ys.detachEvent("onpropertychange",xp),js=Ys=null)}function xp(e){if(e.propertyName==="value"&&ll(js)){var n=[];pp(n,js,e,nu(e)),np(ax,n)}}function rx(e,n,a){e==="focusin"?(_p(),Ys=n,js=a,Ys.attachEvent("onpropertychange",xp)):e==="focusout"&&_p()}function sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(js)}function ox(e,n){if(e==="click")return ll(n)}function lx(e,n){if(e==="input"||e==="change")return ll(n)}function cx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:cx;function Zs(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ft.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function Sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yp(e,n){var a=Sp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sp(a)}}function Mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ux=Hi&&"documentMode"in document&&11>=document.documentMode,Br=null,pu=null,Ks=null,mu=!1;function bp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||Br==null||Br!==mn(o)||(o=Br,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Kl(pu,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Br)))}function tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},gu={},Tp={};Hi&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function er(e){if(gu[e])return gu[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return gu[e]=n[a];return e}var Ap=er("animationend"),Cp=er("animationiteration"),Rp=er("animationstart"),fx=er("transitionrun"),hx=er("transitionstart"),dx=er("transitioncancel"),wp=er("transitionend"),Dp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function mi(e,n){Dp.set(e,n),Pt(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Ir=0,_u=0;function ul(){for(var e=Ir,n=_u=Ir=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Up(a,u,f)}}function fl(e,n,a,o){ii[Ir++]=e,ii[Ir++]=n,ii[Ir++]=a,ii[Ir++]=o,_u|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function xu(e,n,a,o){return fl(e,n,a,o),hl(e)}function nr(e,n){return fl(e,null,null,n),hl(e)}function Up(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(e){if(50<xo)throw xo=0,wf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hr={};function px(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new px(e,n,a,o)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")Su(e)&&(S=1);else if(typeof e=="string")S=xS(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Yn(31,a,n,u),e.elementType=U,e.lanes=f,e;case E:return ir(a.children,u,f,n);case y:S=8,u|=24;break;case g:return e=Yn(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case G:return e=Yn(13,a,n,u),e.elementType=G,e.lanes=f,e;case I:return e=Yn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:S=10;break t;case L:S=9;break t;case C:S=11;break t;case P:S=14;break t;case W:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ir(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function yu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Np(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function Mu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Op=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=Op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},Op.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var Gr=[],Vr=0,pl=null,Qs=0,ri=[],si=0,va=null,Ri=1,wi="";function Vi(e,n){Gr[Vr++]=Qs,Gr[Vr++]=pl,pl=e,Qs=n}function Pp(e,n,a){ri[si++]=Ri,ri[si++]=wi,ri[si++]=va,va=e;var o=Ri;e=wi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ri=1<<32-zt(n)+u|a<<u|o,wi=f+e}else Ri=1<<f|a<<u|o,wi=e}function Eu(e){e.return!==null&&(Vi(e,1),Pp(e,1,0))}function bu(e){for(;e===pl;)pl=Gr[--Vr],Gr[Vr]=null,Qs=Gr[--Vr],Gr[Vr]=null;for(;e===va;)va=ri[--si],ri[si]=null,wi=ri[--si],ri[si]=null,Ri=ri[--si],ri[si]=null}function zp(e,n){ri[si++]=Ri,ri[si++]=wi,ri[si++]=va,Ri=n.id,wi=n.overflow,va=e}var Sn=null,We=null,Me=!1,_a=null,oi=!1,Tu=Error(r(519));function xa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ai(n,e)),Tu}function Bp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[_n]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)_e(yo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Ci(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t0(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||xa(e,!0)}function Fp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Sn=Sn.return}}function kr(e){if(e!==Sn)return!1;if(!Me)return Fp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&We&&xa(e),Fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=c0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=c0(e)}else n===27?(n=We,Na(e.type)?(e=Zf,Zf=null,We=e):We=n):We=Sn?ci(e.stateNode.nextSibling):null;return!0}function ar(){We=Sn=null,Me=!1}function Au(){var e=_a;return e!==null&&(In===null?In=e:In.push.apply(In,e),_a=null),e}function Js(e){_a===null?_a=[e]:_a.push(e)}var Cu=O(null),rr=null,ki=null;function Sa(e,n,a){St(Cu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Cu.current,et(Cu)}function Ru(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ru(f.return,a,e),o||(S=null);break t}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Ru(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Xr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=u.type;qn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===lt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}u=u.return}e!==null&&wu(n,e,a,o),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Ip(rr,e)}function gl(e,n){return rr===null&&sr(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gx=s.unstable_scheduleCallback,vx=s.unstable_NormalPriority,rn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new mx,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&gx(vx,function(){e.controller.abort()})}var to=null,Uu=0,Wr=0,qr=null;function _x(e,n){if(to===null){var a=to=[];Uu=0,Wr=Pf(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(Hp,Hp),n}function Hp(){if(--Uu===0&&to!==null){qr!==null&&(qr.status="fulfilled");var e=to;to=null,Wr=0,qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gp=z.S;z.S=function(e,n){bg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_x(e,n),Gp!==null&&Gp(e,n)};var or=O(null);function Lu(){var e=or.current;return e!==null?e:ke.pooledCache}function vl(e,n){n===null?St(or,or.current):St(or,n.pool)}function Vp(){var e=Lu();return e===null?null:{parent:rn._currentValue,pool:e}}var Yr=Error(r(460)),Nu=Error(r(474)),_l=Error(r(542)),xl={then:function(){}};function kp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e}throw cr=n,Yr}}function lr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cr=a,Yr):a}}var cr=null;function Wp(){if(cr===null)throw Error(r(459));var e=cr;return cr=null,e}function qp(e){if(e===Yr||e===_l)throw Error(r(483))}var jr=null,eo=0;function Sl(e){var n=eo;return eo+=1,jr===null&&(jr=[]),Xp(jr,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Yp(e){function n(Z,k){if(e){var J=Z.deletions;J===null?(Z.deletions=[k],Z.flags|=16):J.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Gi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,J){return Z.index=J,e?(J=Z.alternate,J!==null?(J=J.index,J<k?(Z.flags|=67108866,k):J):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,J,mt){return k===null||k.tag!==6?(k=yu(J,Z.mode,mt),k.return=Z,k):(k=u(k,J),k.return=Z,k)}function F(Z,k,J,mt){var $t=J.type;return $t===E?ht(Z,k,J.props.children,mt,J.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&lr($t)===k.type)?(k=u(k,J.props),no(k,J),k.return=Z,k):(k=dl(J.type,J.key,J.props,null,Z.mode,mt),no(k,J),k.return=Z,k)}function $(Z,k,J,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Mu(J,Z.mode,mt),k.return=Z,k):(k=u(k,J.children||[]),k.return=Z,k)}function ht(Z,k,J,mt,$t){return k===null||k.tag!==7?(k=ir(J,Z.mode,mt,$t),k.return=Z,k):(k=u(k,J),k.return=Z,k)}function gt(Z,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=yu(""+k,Z.mode,J),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=dl(k.type,k.key,k.props,null,Z.mode,J),no(J,k),J.return=Z,J;case b:return k=Mu(k,Z.mode,J),k.return=Z,k;case W:return k=lr(k),gt(Z,k,J)}if(pt(k)||ot(k))return k=ir(k,Z.mode,J,null),k.return=Z,k;if(typeof k.then=="function")return gt(Z,Sl(k),J);if(k.$$typeof===w)return gt(Z,gl(Z,k),J);yl(Z,k)}return null}function nt(Z,k,J,mt){var $t=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $t!==null?null:A(Z,k,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===$t?F(Z,k,J,mt):null;case b:return J.key===$t?$(Z,k,J,mt):null;case W:return J=lr(J),nt(Z,k,J,mt)}if(pt(J)||ot(J))return $t!==null?null:ht(Z,k,J,mt,null);if(typeof J.then=="function")return nt(Z,k,Sl(J),mt);if(J.$$typeof===w)return nt(Z,k,gl(Z,J),mt);yl(Z,J)}return null}function st(Z,k,J,mt,$t){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(J)||null,A(k,Z,""+mt,$t);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Z=Z.get(mt.key===null?J:mt.key)||null,F(k,Z,mt,$t);case b:return Z=Z.get(mt.key===null?J:mt.key)||null,$(k,Z,mt,$t);case W:return mt=lr(mt),st(Z,k,J,mt,$t)}if(pt(mt)||ot(mt))return Z=Z.get(J)||null,ht(k,Z,mt,$t,null);if(typeof mt.then=="function")return st(Z,k,J,Sl(mt),$t);if(mt.$$typeof===w)return st(Z,k,J,gl(k,mt),$t);yl(k,mt)}return null}function Ht(Z,k,J,mt){for(var $t=null,Ce=null,kt=k,ue=k=0,ye=null;kt!==null&&ue<J.length;ue++){kt.index>ue?(ye=kt,kt=null):ye=kt.sibling;var Re=nt(Z,kt,J[ue],mt);if(Re===null){kt===null&&(kt=ye);break}e&&kt&&Re.alternate===null&&n(Z,kt),k=f(Re,k,ue),Ce===null?$t=Re:Ce.sibling=Re,Ce=Re,kt=ye}if(ue===J.length)return a(Z,kt),Me&&Vi(Z,ue),$t;if(kt===null){for(;ue<J.length;ue++)kt=gt(Z,J[ue],mt),kt!==null&&(k=f(kt,k,ue),Ce===null?$t=kt:Ce.sibling=kt,Ce=kt);return Me&&Vi(Z,ue),$t}for(kt=o(kt);ue<J.length;ue++)ye=st(kt,Z,ue,J[ue],mt),ye!==null&&(e&&ye.alternate!==null&&kt.delete(ye.key===null?ue:ye.key),k=f(ye,k,ue),Ce===null?$t=ye:Ce.sibling=ye,Ce=ye);return e&&kt.forEach(function(Fa){return n(Z,Fa)}),Me&&Vi(Z,ue),$t}function te(Z,k,J,mt){if(J==null)throw Error(r(151));for(var $t=null,Ce=null,kt=k,ue=k=0,ye=null,Re=J.next();kt!==null&&!Re.done;ue++,Re=J.next()){kt.index>ue?(ye=kt,kt=null):ye=kt.sibling;var Fa=nt(Z,kt,Re.value,mt);if(Fa===null){kt===null&&(kt=ye);break}e&&kt&&Fa.alternate===null&&n(Z,kt),k=f(Fa,k,ue),Ce===null?$t=Fa:Ce.sibling=Fa,Ce=Fa,kt=ye}if(Re.done)return a(Z,kt),Me&&Vi(Z,ue),$t;if(kt===null){for(;!Re.done;ue++,Re=J.next())Re=gt(Z,Re.value,mt),Re!==null&&(k=f(Re,k,ue),Ce===null?$t=Re:Ce.sibling=Re,Ce=Re);return Me&&Vi(Z,ue),$t}for(kt=o(kt);!Re.done;ue++,Re=J.next())Re=st(kt,Z,ue,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&kt.delete(Re.key===null?ue:Re.key),k=f(Re,k,ue),Ce===null?$t=Re:Ce.sibling=Re,Ce=Re);return e&&kt.forEach(function(DS){return n(Z,DS)}),Me&&Vi(Z,ue),$t}function Fe(Z,k,J,mt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var $t=J.key;k!==null;){if(k.key===$t){if($t=J.type,$t===E){if(k.tag===7){a(Z,k.sibling),mt=u(k,J.props.children),mt.return=Z,Z=mt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&lr($t)===k.type){a(Z,k.sibling),mt=u(k,J.props),no(mt,J),mt.return=Z,Z=mt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}J.type===E?(mt=ir(J.props.children,Z.mode,mt,J.key),mt.return=Z,Z=mt):(mt=dl(J.type,J.key,J.props,null,Z.mode,mt),no(mt,J),mt.return=Z,Z=mt)}return S(Z);case b:t:{for($t=J.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Z,k.sibling),mt=u(k,J.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}mt=Mu(J,Z.mode,mt),mt.return=Z,Z=mt}return S(Z);case W:return J=lr(J),Fe(Z,k,J,mt)}if(pt(J))return Ht(Z,k,J,mt);if(ot(J)){if($t=ot(J),typeof $t!="function")throw Error(r(150));return J=$t.call(J),te(Z,k,J,mt)}if(typeof J.then=="function")return Fe(Z,k,Sl(J),mt);if(J.$$typeof===w)return Fe(Z,k,gl(Z,J),mt);yl(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Z,k.sibling),mt=u(k,J),mt.return=Z,Z=mt):(a(Z,k),mt=yu(J,Z.mode,mt),mt.return=Z,Z=mt),S(Z)):a(Z,k)}return function(Z,k,J,mt){try{eo=0;var $t=Fe(Z,k,J,mt);return jr=null,$t}catch(kt){if(kt===Yr||kt===_l)throw kt;var Ce=Yn(29,kt,null,Z.mode);return Ce.lanes=mt,Ce.return=Z,Ce}}}var ur=Yp(!0),jp=Yp(!1),ya=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(e),Up(e,null,a),n}return fl(e,o,n,a),hl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}function zu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function ao(){if(Bu){var e=qr;if(e!==null)throw e}}function ro(e,n,a,o){Bu=!1;var u=e.updateQueue;ya=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,$=F.next;F.next=null,S===null?f=$:S.next=$,S=F;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==S&&(A===null?ht.firstBaseUpdate=$:A.next=$,ht.lastBaseUpdate=F))}if(f!==null){var gt=u.baseState;S=0,ht=$=F=null,A=f;do{var nt=A.lane&-536870913,st=nt!==A.lane;if(st?(Se&nt)===nt:(o&nt)===nt){nt!==0&&nt===Wr&&(Bu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,te=A;nt=n;var Fe=a;switch(te.tag){case 1:if(Ht=te.payload,typeof Ht=="function"){gt=Ht.call(Fe,gt,nt);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=te.payload,nt=typeof Ht=="function"?Ht.call(Fe,gt,nt):Ht,nt==null)break t;gt=_({},gt,nt);break t;case 2:ya=!0}}nt=A.callback,nt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[nt]:st.push(nt))}else st={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?($=ht=st,F=gt):ht=ht.next=st,S|=nt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ht===null&&(F=gt),u.baseState=F,u.firstBaseUpdate=$,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ra|=S,e.lanes=S,e.memoizedState=gt}}function Zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zp(a[e],n)}var Zr=O(null),Ml=O(0);function Qp(e,n){e=$i,St(Ml,e),St(Zr,n),$i=e|n.baseLanes}function Fu(){St(Ml,$i),St(Zr,Zr.current)}function Iu(){$i=Ml.current,et(Zr),et(Ml)}var jn=O(null),li=null;function ba(e){var n=e.alternate;St(en,en.current&1),St(jn,e),li===null&&(n===null||Zr.current!==null||n.memoizedState!==null)&&(li=e)}function Hu(e){St(en,en.current),St(jn,e),li===null&&(li=e)}function Jp(e){e.tag===22?(St(en,en.current),St(jn,e),li===null&&(li=e)):Ta()}function Ta(){St(en,en.current),St(jn,jn.current)}function Zn(e){et(jn),li===e&&(li=null),et(en)}var en=O(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,le=null,ze=null,sn=null,bl=!1,Kr=!1,fr=!1,Tl=0,so=0,Qr=null,Sx=0;function Qe(){throw Error(r(321))}function Gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Vu(e,n,a,o,u,f){return Wi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Pm:af,fr=!1,f=a(o,u),fr=!1,Kr&&(f=tm(n,a,o,u)),$p(e),f}function $p(e){z.H=co;var n=ze!==null&&ze.next!==null;if(Wi=0,sn=ze=le=null,bl=!1,so=0,Qr=null,n)throw Error(r(300));e===null||on||(e=e.dependencies,e!==null&&ml(e)&&(on=!0))}function tm(e,n,a,o){le=e;var u=0;do{if(Kr&&(Qr=null),so=0,Kr=!1,25<=u)throw Error(r(301));if(u+=1,sn=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=zm,f=n(a,o)}while(Kr);return f}function yx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(le.flags|=1024),n}function ku(){var e=Tl!==0;return Tl=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Wi=0,sn=ze=le=null,Kr=!1,so=Tl=0,Qr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?le.memoizedState=sn=e:sn=sn.next=e,sn}function nn(){if(ze===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=sn===null?le.memoizedState:sn.next;if(n!==null)sn=n,ze=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},sn===null?le.memoizedState=sn=e:sn=sn.next=e}return sn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Qr===null&&(Qr=[]),e=Xp(Qr,e,n),n=le,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Pm:af),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===w)return yn(e)}throw Error(r(438,String(e)))}function qu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=nn();return Yu(n,ze,e)}function Yu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=S=null,F=null,$=n,ht=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Se&gt)===gt:(Wi&gt)===gt){var nt=$.revertLane;if(nt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Wr&&(ht=!0);else if((Wi&nt)===nt){$=$.next,nt===Wr&&(ht=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(A=F=gt,S=f):F=F.next=gt,le.lanes|=nt,Ra|=nt;gt=$.action,fr&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(A=F=nt,S=f):F=F.next=nt,le.lanes|=gt,Ra|=gt;$=$.next}while($!==null&&$!==n);if(F===null?S=f:F.next=A,!qn(f,e.memoizedState)&&(on=!0,ht&&(a=qr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ju(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);qn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function em(e,n,a){var o=le,u=nn(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((ze||u).memoizedState,a);if(S&&(u.memoizedState=a,on=!0),u=u.queue,Qu(am.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Jr(9,{destroy:void 0},im.bind(null,o,u,a,n),null),ke===null)throw Error(r(349));f||(Wi&127)!==0||nm(o,n,a)}return a}function nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Al(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function im(e,n,a,o){n.value=a,n.getSnapshot=o,rm(n)&&sm(e)}function am(e,n,a){return a(function(){rm(n)&&sm(e)})}function rm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function sm(e){var n=nr(e,2);n!==null&&Hn(n,e,2)}function Zu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),fr){jt(!0);try{a()}finally{jt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function om(e,n,a,o){return e.baseState=a,Yu(e,ze,typeof o=="function"?o:qi)}function Mx(e,n,a,o,u){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=z.T,S={};z.T=S;try{var A=a(u,o),F=z.S;F!==null&&F(S,A),cm(e,n,A)}catch($){Ku(e,n,$)}finally{f!==null&&S.types!==null&&(f.types=S.types),z.T=f}}else try{f=a(u,o),cm(e,n,f)}catch($){Ku(e,n,$)}}function cm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){um(e,n,o)},function(o){return Ku(e,n,o)}):um(e,n,a)}function um(e,n,a){n.status="fulfilled",n.value=a,fm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,lm(e,a)))}function Ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fm(n),n=n.next;while(n!==o)}e.action=null}function fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hm(e,n){return n}function dm(e,n){if(Me){var a=ke.formState;if(a!==null){t:{var o=le;if(Me){if(We){e:{for(var u=We,f=oi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=ci(u.nextSibling),o=u.data==="F!";break t}}xa(o)}o=!1}o&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Lm.bind(null,le,o),o.dispatch=a,o=Zu(!1),f=nf.bind(null,le,!1,o.queue),o=Un(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Mx.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function pm(e){var n=nn();return mm(n,ze,e)}function mm(e,n,a){if(n=Yu(e,n,hm)[0],e=Rl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(S){throw S===Yr?_l:S}else o=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Jr(9,{destroy:void 0},Ex.bind(null,u,a),null)),[o,f,e]}function Ex(e,n){e.action=n}function gm(e){var n=nn(),a=ze;if(a!==null)return mm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Al(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function vm(){return nn().memoizedState}function wl(e,n,a,o){var u=Un();le.flags|=e,u.memoizedState=Jr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(e,n,a,o){var u=nn();o=o===void 0?null:o;var f=u.memoizedState.inst;ze!==null&&o!==null&&Gu(o,ze.memoizedState.deps)?u.memoizedState=Jr(n,f,a,o):(le.flags|=e,u.memoizedState=Jr(1|n,f,a,o))}function _m(e,n){wl(8390656,8,e,n)}function Qu(e,n){Dl(2048,8,e,n)}function bx(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Al(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function xm(e){var n=nn().memoizedState;return bx({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Sm(e,n){return Dl(4,2,e,n)}function ym(e,n){return Dl(4,4,e,n)}function Mm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Em(e,n,a){a=a!=null?a.concat([e]):null,Dl(4,4,Mm.bind(null,n,e),a)}function Ju(){}function bm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Tm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gu(n,o[1]))return o[0];if(o=e(),fr){jt(!0);try{e()}finally{jt(!1)}}return a.memoizedState=[o,n],o}function $u(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ag(),le.lanes|=e,Ra|=e,a)}function Am(e,n,a,o){return qn(a,n)?a:Zr.current!==null?(e=$u(e,a,o),qn(e,n)||(on=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(Se&261930)===0?(on=!0,e.memoizedState=a):(e=Ag(),le.lanes|=e,Ra|=e,n)}function Cm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var S=z.T,A={};z.T=A,nf(e,!1,n,a);try{var F=u(),$=z.S;if($!==null&&$(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=xx(F,o);lo(e,n,ht,Jn(e))}else lo(e,n,o,Jn(e))}catch(gt){lo(e,n,{then:function(){},status:"rejected",reason:gt},Jn())}finally{K.p=f,S!==null&&A.types!==null&&(S.types=A.types),z.T=S}}function Tx(){}function tf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Rm(e).queue;Cm(e,u,n,Y,a===null?Tx:function(){return wm(e),a(o)})}function Rm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function wm(e){var n=Rm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},Jn())}function ef(){return yn(Ao)}function Dm(){return nn().memoizedState}function Um(){return nn().memoizedState}function Ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Ma(a);var o=Ea(n,e,a);o!==null&&(Hn(o,n,a),io(o,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function Cx(e,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?Nm(n,a):(a=xu(e,n,a,o),a!==null&&(Hn(a,e,o),Om(a,n,o)))}function Lm(e,n,a){var o=Jn();lo(e,n,a,o)}function lo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Nm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,S))return fl(e,n,u,0),ke===null&&ul(),!1}catch{}if(a=xu(e,n,u,o),a!==null)return Hn(a,e,o),Om(a,n,o),!0}return!1}function nf(e,n,a,o){if(o={lane:2,revertLane:Pf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=xu(e,a,o,2),n!==null&&Hn(n,e,2)}function Ul(e){var n=e.alternate;return e===le||n!==null&&n===le}function Nm(e,n){Kr=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Om(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}var co={readContext:yn,use:Cl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};co.useEffectEvent=Qe;var Pm={readContext:yn,use:Cl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:_m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,Mm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var o=e();if(fr){jt(!0);try{e()}finally{jt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Un();if(a!==void 0){var u=a(n);if(fr){jt(!0);try{a(n)}finally{jt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Cx.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,a=Lm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(e,n){var a=Un();return $u(a,e,n)},useTransition:function(){var e=Zu(!1);return e=Cm.bind(null,le,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=Un();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&127)!==0||nm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_m(am.bind(null,o,f,e),[e]),o.flags|=2048,Jr(9,{destroy:void 0},im.bind(null,o,f,a,n),null),a},useId:function(){var e=Un(),n=ke.identifierPrefix;if(Me){var a=wi,o=Ri;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Sx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:dm,useActionState:dm,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return Un().memoizedState=Ax.bind(null,le)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},af={readContext:yn,use:Cl,useCallback:bm,useContext:yn,useEffect:Qu,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:ym,useMemo:Tm,useReducer:Rl,useRef:vm,useState:function(){return Rl(qi)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=nn();return Am(a,ze.memoizedState,e,n)},useTransition:function(){var e=Rl(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:ef,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=nn();return om(a,ze,e,n)},useMemoCache:qu,useCacheRefresh:Um};af.useEffectEvent=xm;var zm={readContext:yn,use:Cl,useCallback:bm,useContext:yn,useEffect:Qu,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:ym,useMemo:Tm,useReducer:ju,useRef:vm,useState:function(){return ju(qi)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=nn();return ze===null?$u(a,e,n):Am(a,ze.memoizedState,e,n)},useTransition:function(){var e=ju(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:ef,useFormState:gm,useActionState:gm,useOptimistic:function(e,n){var a=nn();return ze!==null?om(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:Um};zm.useEffectEvent=xm;function rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Ma(o);u.payload=n,a!=null&&(u.callback=a),n=Ea(e,u,o),n!==null&&(Hn(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Ma(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ea(e,u,o),n!==null&&(Hn(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=Ma(a);o.tag=2,n!=null&&(o.callback=n),n=Ea(e,o,a),n!==null&&(Hn(n,e,a),io(n,e,a))}};function Bm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(u,f):!0}function Fm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&sf.enqueueReplaceState(n,n.state,null)}function hr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Im(e){cl(e)}function Hm(e){console.error(e)}function Gm(e){cl(e)}function Ll(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Vm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(e,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,n)},a}function km(e){return e=Ma(e),e.tag=3,e}function Xm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Vm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Vm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Rx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Xl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(e,o,u)),!1;case 22:return a.flags|=65536,o===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(e,o,u)),!1}throw Error(r(435,a.tag))}return Lf(e,o,u),Xl(),!1}if(Me)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Tu&&(e=Error(r(422),{cause:o}),Js(ai(e,a)))):(o!==Tu&&(n=Error(r(423),{cause:o}),Js(ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ai(o,a),u=of(e.stateNode,o,u),zu(e,u),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:o});if(f=ai(f,a),_o===null?_o=[f]:_o.push(f),Je!==4&&(Je=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=of(a.stateNode,o,e),zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=km(u),Xm(u,e,a,o),zu(a,u),!1}a=a.return}while(a!==null);return!1}var lf=Error(r(461)),on=!1;function Mn(e,n,a,o){n.child=e===null?jp(n,null,a,o):ur(n,e.child,a,o)}function Wm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return sr(n),o=Vu(e,n,a,S,f,u),A=ku(),e!==null&&!on?(Xu(e,n,u),Yi(e,n,u)):(Me&&A&&Eu(n),n.flags|=1,Mn(e,n,o,u),n.child)}function qm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ym(e,n,f,o,u)):(e=dl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(S,o)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Gi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Zs(f,o)&&e.ref===n.ref)if(on=!1,n.pendingProps=o=f,gf(e,u))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return cf(e,n,a,o,u)}function jm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Zm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?Qp(n,f):Fu(),Jp(n);else return o=n.lanes=536870912,Zm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(vl(n,f.cachePool),Qp(n,f),Ta(),n.memoizedState=null):(e!==null&&vl(n,null),Fu(),Ta());return Mn(e,n,u,a),n.child}function uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zm(e,n,a,o,u){var f=Lu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&vl(n,null),Fu(),Jp(n),e!==null&&Xr(e,n,o,!0),n.childLanes=u,null}function Nl(e,n){return n=Pl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Km(e,n,a){return ur(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function wx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Nl(n,o),n.lanes=536870912,uo(null,e);if(Hu(n),(e=We)?(e=l0(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Np(e),a.return=n,n.child=a,Sn=n,We=null)):e=null,e===null)throw xa(n);return n.lanes=536870912,null}return Nl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=Km(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Xr(e,n,a,!1),u=(a&e.childLanes)!==0,on||u){if(o=ke,o!==null&&(S=wr(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,nr(e,S),Hn(o,e,S),lf;Xl(),n=Km(e,n,a)}else e=f.treeContext,We=ci(S.nextSibling),Sn=n,Me=!0,_a=null,oi=!1,e!==null&&zp(n,e),n=Nl(n,o),n.flags|=4096;return n}return e=Gi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cf(e,n,a,o,u){return sr(n),a=Vu(e,n,a,o,void 0,u),o=ku(),e!==null&&!on?(Xu(e,n,u),Yi(e,n,u)):(Me&&o&&Eu(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Qm(e,n,a,o,u,f){return sr(n),n.updateQueue=null,a=tm(n,o,a,u),$p(e),o=ku(),e!==null&&!on?(Xu(e,n,f),Yi(e,n,f)):(Me&&o&&Eu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Jm(e,n,a,o,u){if(sr(n),n.stateNode===null){var f=Hr,S=a.contextType;typeof S=="object"&&S!==null&&(f=yn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ou(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?yn(S):Hr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(rf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&sf.enqueueReplaceState(f,f.state,null),ro(n,o,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,F=hr(a,A);f.props=F;var $=f.context,ht=a.contextType;S=Hr,typeof ht=="object"&&ht!==null&&(S=yn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==S)&&Fm(n,f,o,S),ya=!1;var nt=n.memoizedState;f.state=nt,ro(n,o,f,u),ao(),$=n.memoizedState,A||nt!==$||ya?(typeof gt=="function"&&(rf(n,a,gt,o),$=n.memoizedState),(F=ya||Bm(n,a,F,o,nt,$,S))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=S,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Pu(e,n),S=n.memoizedProps,ht=hr(a,S),f.props=ht,gt=n.pendingProps,nt=f.context,$=a.contextType,F=Hr,typeof $=="object"&&$!==null&&(F=yn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||nt!==F)&&Fm(n,f,o,F),ya=!1,nt=n.memoizedState,f.state=nt,ro(n,o,f,u),ao();var st=n.memoizedState;S!==gt||nt!==st||ya||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof A=="function"&&(rf(n,a,A,o),st=n.memoizedState),(ht=ya||Bm(n,a,ht,o,nt,st,F)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,st,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,st,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=F,o=ht):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ur(n,e.child,null,u),n.child=ur(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function $m(e,n,a,o){return ar(),n.flags|=256,Mn(e,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(e){return{baseLanes:e,cachePool:Vp()}}function hf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function tg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?ba(n):Ta(),(e=We)?(e=l0(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ri,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Np(e),a.return=n,n.child=a,Sn=n,We=null)):e=null,e===null)throw xa(n);return jf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ta(),u=n.mode,A=Pl({mode:"hidden",children:A},u),o=ir(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=ff(a),o.childLanes=hf(e,S,a),n.memoizedState=uf,uo(null,o)):(ba(n),df(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=pf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),A=o.fallback,u=n.mode,o=Pl({mode:"visible",children:o.children},u),A=ir(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ur(n,e.child,null,a),o=n.child,o.memoizedState=ff(a),o.childLanes=hf(e,S,a),n.memoizedState=uf,n=uo(null,o));else if(ba(n),jf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,Js({value:o,source:null,stack:null}),n=pf(e,n,a)}else if(on||Xr(e,n,a,!1),S=(a&e.childLanes)!==0,on||S){if(S=ke,S!==null&&(o=wr(S,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,nr(e,o),Hn(S,e,o),lf;Yf(A)||Xl(),n=pf(e,n,a)}else Yf(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,We=ci(A.nextSibling),Sn=n,Me=!0,_a=null,oi=!1,e!==null&&zp(n,e),n=df(n,o.children),n.flags|=4096);return n}return u?(Ta(),A=o.fallback,u=n.mode,F=e.child,$=F.sibling,o=Gi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,$!==null?A=Gi($,A):(A=ir(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,uo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=ff(a):(u=A.cachePool,u!==null?(F=rn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Vp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=hf(e,S,a),n.memoizedState=uf,uo(e.child,o)):(ba(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function df(e,n){return n=Pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function pf(e,n,a){return ur(n,e.child,null,a),e=df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ru(e.return,n,a)}function mf(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function ng(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=en.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,St(en,S),Mn(e,n,o,a),o=Me?Qs:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,a,n);else if(e.tag===19)eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&El(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&El(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}mf(n,!0,a,null,f,o);break;case"together":mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Dx(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Sa(n,rn,e.memoizedState.cache),ar();break;case 27:case 5:Zt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(e,n,a):(ba(n),e=Yi(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(en,en.current),o)break;return null;case 22:return n.lanes=0,jm(e,n,a,n.pendingProps);case 24:Sa(n,rn,e.memoizedState.cache)}return Yi(e,n,a)}function ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!gf(e,a)&&(n.flags&128)===0)return on=!1,Dx(e,n,a);on=(e.flags&131072)!==0}else on=!1,Me&&(n.flags&1048576)!==0&&Pp(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=lr(n.elementType),n.type=e,typeof e=="function")Su(e)?(o=hr(e,o),n.tag=1,n=Jm(null,n,e,o,a)):(n.tag=0,n=cf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=Wm(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=qm(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(r(306,n,""))}}return n;case 0:return cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=hr(o,n.pendingProps),Jm(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),ro(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Sa(n,rn,o),o!==f.cache&&wu(n,[rn],a,!0),ao(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$m(e,n,o,a);break t}else if(o!==u){u=ai(Error(r(424)),n),Js(u),n=$m(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=ci(e.firstChild),Sn=n,Me=!0,_a=null,oi=!0,a=jp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ar(),o===u){n=Yi(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=p0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Ql(at.current).createElement(a),o[an]=n,o[_n]=e,En(o,a,e),_t(o),n.stateNode=o):n.memoizedState=p0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Me&&(o=n.stateNode=f0(n.type,n.pendingProps,at.current),Sn=n,oi=!0,u=We,Na(n.type)?(Zf=u,We=ci(o.firstChild)):We=u),Mn(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=We)&&(o=sS(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,Sn=n,We=ci(o.firstChild),oi=!1,u=!0):u=!1),u||xa(n)),Zt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Xf(u,f)?o=null:S!==null&&Xf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Vu(e,n,yx,null,null,a),Ao._currentValue=u),Ol(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=We)&&(a=oS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Sn=n,We=null,e=!0):e=!1),e||xa(n)),null;case 13:return tg(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ur(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return Wm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,sr(n),u=yn(u),o=o(u),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return qm(e,n,n.type,n.pendingProps,a);case 15:return Ym(e,n,n.type,n.pendingProps,a);case 19:return ng(e,n,a);case 31:return wx(e,n,a);case 22:return jm(e,n,a,n.pendingProps);case 24:return sr(n),o=yn(rn),e===null?(u=Lu(),u===null&&(u=ke,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ou(n),Sa(n,rn,u)):((e.lanes&a)!==0&&(Pu(e,n),ro(n,null,null,a),ao()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,rn,o)):(o=f.cache,Sa(n,rn,o),o!==u.cache&&wu(n,[rn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Dg())e.flags|=8192;else throw cr=xl,Nu}else e.flags&=-16777217}function ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x0(n))if(Dg())e.flags|=8192;else throw cr=xl,Nu}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ne():536870912,e.lanes|=n,ns|=n)}function fo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ux(e,n,a){var o=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(rn),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kr(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Au())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ji(n),f!==null?(qe(n),ag(n,f)):(qe(n),vf(n,u,null,o,a))):f?f!==e.memoizedState?(ji(n),qe(n),ag(n,f)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ji(n),qe(n),vf(n,u,e,o,a)),null;case 27:if(oe(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Tt.current,kr(n)?Bp(n):(e=f0(u,o,a),n.stateNode=e,ji(n))}return qe(n),null;case 5:if(oe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=Tt.current,kr(n))Bp(n);else{var S=Ql(at.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[an]=n,f[_n]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(En(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ji(n)}}return qe(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=at.current,kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t0(e.nodeValue,a)),e||xa(n,!0)}else e=Ql(e).createTextNode(o),e[an]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=kr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[an]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),qe(n),null);case 4:return Dt(),e===null&&If(n.stateNode.containerInfo),qe(n),null;case 10:return Xi(n.type),qe(n),null;case 19:if(et(en),o=n.memoizedState,o===null)return qe(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)fo(o,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=El(e),f!==null){for(n.flags|=128,fo(o,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lp(a,e),a=a.sibling;return St(en,en.current&1|2),Me&&Vi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Gl&&(n.flags|=128,u=!0,fo(o,!1),n.lanes=4194304)}else{if(!u)if(e=El(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Me)return qe(n),null}else 2*T()-o.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,fo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=en.current,St(en,u?a&1|2:a&1),Me&&Vi(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Zn(n),Iu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(rn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Lx(e,n){switch(bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(rn),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(en),null;case 4:return Dt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Zn(n),Iu(),e!==null&&et(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(rn),null;case 25:return null;default:return null}}function rg(e,n){switch(bu(n),n.tag){case 3:Xi(rn),Dt();break;case 26:case 27:case 5:oe(n);break;case 4:Dt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:et(en);break;case 10:Xi(n.type);break;case 22:case 23:Zn(n),Iu(),e!==null&&et(or);break;case 24:Xi(rn)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Pe(n,n.return,A)}}function Aa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var F=a,$=A;try{$()}catch(ht){Pe(u,F,ht)}}}o=o.next}while(o!==f)}}catch(ht){Pe(n,n.return,ht)}}function sg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Kp(n,a)}catch(o){Pe(e,e.return,o)}}}function og(e,n,a){a.props=hr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Pe(e,n,u)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function _f(e,n,a){try{var o=e.stateNode;tS(o,e.type,a,n),o[_n]=n}catch(u){Pe(e,e.return,u)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Bl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bl(e,n,a),e=e.sibling;e!==null;)Bl(e,n,a),e=e.sibling}function ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[an]=e,n[_n]=a}catch(f){Pe(e,e.return,f)}}var Zi=!1,ln=!1,yf=!1,fg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Nx(e,n){if(e=e.containerInfo,Vf=ac,e=Ep(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,F=-1,$=0,ht=0,gt=e,nt=null;e:for(;;){for(var st;gt!==a||u!==0&&gt.nodeType!==3||(A=S+u),gt!==f||o!==0&&gt.nodeType!==3||(F=S+o),gt.nodeType===3&&(S+=gt.nodeValue.length),(st=gt.firstChild)!==null;)nt=gt,gt=st;for(;;){if(gt===e)break e;if(nt===a&&++$===u&&(A=S),nt===f&&++ht===o&&(F=S),(st=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=st}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},ac=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ht=hr(a.type,u);e=o.getSnapshotBeforeUpdate(Ht,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Pe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),o&4&&ho(5,a);break;case 1:if(Qi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Pe(a,a.return,S)}else{var u=hr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Pe(a,a.return,S)}}o&64&&sg(a),o&512&&po(a,a.return);break;case 3:if(Qi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(e,n)}catch(S){Pe(a,a.return,S)}}break;case 27:n===null&&o&4&&ug(a);case 26:case 5:Qi(e,a),n===null&&o&4&&lg(a),o&512&&po(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),o&4&&mg(e,a);break;case 13:Qi(e,a),o&4&&gg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vx.bind(null,a),lS(e,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||ln,u=Zi;var f=ln;Zi=o,(ln=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=u,ln=f}break;case 30:break;default:Qi(e,a)}}function dg(e){var n=e.alternate;n!==null&&(e.alternate=null,dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,zn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)pg(e,n,a),a=a.sibling}function pg(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:ln||Di(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Di(a,n);var o=Ye,u=zn;Na(a.type)&&(Ye=a.stateNode,zn=!1),Ki(e,n,a),Eo(a.stateNode),Ye=o,zn=u;break;case 5:ln||Di(a,n);case 6:if(o=Ye,u=zn,Ye=null,Ki(e,n,a),Ye=o,zn=u,Ye!==null)if(zn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ye!==null&&(zn?(e=Ye,s0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),us(e)):s0(Ye,a.stateNode));break;case 4:o=Ye,u=zn,Ye=a.stateNode.containerInfo,zn=!0,Ki(e,n,a),Ye=o,zn=u;break;case 0:case 11:case 14:case 15:Aa(2,a,n),ln||Aa(4,a,n),Ki(e,n,a);break;case 1:ln||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&og(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,Ki(e,n,a),ln=o;break;default:Ki(e,n,a)}}function mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{us(e)}catch(a){Pe(n,n.return,a)}}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{us(e)}catch(a){Pe(n,n.return,a)}}function Ox(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fg),n;default:throw Error(r(435,e.tag))}}function Fl(e,n){var a=Ox(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=kx.bind(null,e,o);o.then(u,u)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Na(A.type)){Ye=A.stateNode,zn=!1;break t}break;case 5:Ye=A.stateNode,zn=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,zn=!0;break t}A=A.return}if(Ye===null)throw Error(r(160));pg(f,S,u),Ye=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)vg(n,e),n=n.sibling}var gi=null;function vg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Fn(e),o&4&&(Aa(3,e,e.return),ho(3,e),Aa(5,e,e.return));break;case 1:Bn(n,e),Fn(e),o&512&&(ln||a===null||Di(a,a.return)),o&64&&Zi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(Bn(n,e),Fn(e),o&512&&(ln||a===null||Di(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Qa]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,o,a),f[an]=e,_t(f),o=f;break t;case"link":var S=v0("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;case"meta":if(S=v0("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[an]=e,_t(f),o=f}e.stateNode=o}else _0(u,e.type,e.stateNode);else e.stateNode=g0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?_0(u,e.type,e.stateNode):g0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&_f(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Fn(e),o&512&&(ln||a===null||Di(a,a.return)),a!==null&&o&4&&_f(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Fn(e),o&512&&(ln||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Nr(u,"")}catch(Ht){Pe(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,_f(e,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Bn(n,e),Fn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ht){Pe(e,e.return,Ht)}}break;case 3:if(tc=null,u=gi,gi=Jl(n.containerInfo),Bn(n,e),gi=u,Fn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{us(n.containerInfo)}catch(Ht){Pe(e,e.return,Ht)}yf&&(yf=!1,_g(e));break;case 4:o=gi,gi=Jl(e.stateNode.containerInfo),Bn(n,e),Fn(e),gi=o;break;case 12:Bn(n,e),Fn(e);break;case 31:Bn(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 13:Bn(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,$=Zi,ht=ln;if(Zi=$||u,ln=ht||F,Bn(n,e),ln=ht,Zi=$,Fn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Zi||ln||dr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=F.stateNode;var gt=F.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ht){Pe(F,F.return,Ht)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Ht){Pe(F,F.return,Ht)}}}else if(n.tag===18){if(a===null){F=n;try{var st=F.stateNode;u?o0(st,!0):o0(F.stateNode,!1)}catch(Ht){Pe(F,F.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fl(e,a))));break;case 19:Bn(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 30:break;case 21:break;default:Bn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(cg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(e);Bl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Nr(S,""),a.flags&=-33);var A=xf(e);Bl(e,A,S);break;case 3:case 4:var F=a.stateNode.containerInfo,$=xf(e);Sf(e,$,F);break;default:throw Error(r(161))}}catch(ht){Pe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(e,n.alternate,n),n=n.sibling}function dr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),dr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),dr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Di(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(u,f,a),ho(4,f);break;case 1:if(Ji(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Pe(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Zp(F[u],A)}catch($){Pe(o,o.return,$)}}a&&S&64&&sg(f),po(f,f.return);break;case 27:ug(f);case 26:case 5:Ji(u,f,a),a&&o===null&&S&4&&lg(f),po(f,f.return);break;case 12:Ji(u,f,a);break;case 31:Ji(u,f,a),a&&S&4&&mg(u,f);break;case 13:Ji(u,f,a),a&&S&4&&gg(u,f);break;case 22:f.memoizedState===null&&Ji(u,f,a),po(f,f.return);break;case 30:break;default:Ji(u,f,a)}n=n.sibling}}function Mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function vi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(e,n,a,o),n=n.sibling}function xg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,o),u&2048&&ho(9,n);break;case 1:vi(e,n,a,o);break;case 3:vi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(u&2048){vi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Pe(n,n.return,F)}}else vi(e,n,a,o);break;case 31:vi(e,n,a,o);break;case 13:vi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?vi(e,n,a,o):mo(e,n):f._visibility&2?vi(e,n,a,o):(f._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Mf(S,n);break;case 24:vi(e,n,a,o),u&2048&&Ef(n.alternate,n);break;default:vi(e,n,a,o)}}function $r(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=a,F=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:$r(f,S,A,F,u),ho(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?$r(f,S,A,F,u):mo(f,S):(ht._visibility|=2,$r(f,S,A,F,u)),u&&$&2048&&Mf(S.alternate,S);break;case 24:$r(f,S,A,F,u),u&&$&2048&&Ef(S.alternate,S);break;default:$r(f,S,A,F,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:mo(a,o),u&2048&&Mf(o.alternate,o);break;case 24:mo(a,o),u&2048&&Ef(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function ts(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)Sg(e,n,a),e=e.sibling}function Sg(e,n,a){switch(e.tag){case 26:ts(e,n,a),e.flags&go&&e.memoizedState!==null&&SS(a,gi,e.memoizedState,e.memoizedProps);break;case 5:ts(e,n,a);break;case 3:case 4:var o=gi;gi=Jl(e.stateNode.containerInfo),ts(e,n,a),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=go,go=16777216,ts(e,n,a),go=o):ts(e,n,a));break;default:ts(e,n,a)}}function yg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Eg(o,e)}yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):vo(e);break;default:vo(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Eg(o,e)}yg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function Eg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(dg(o),o===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var Px={getCacheForType:function(e){var n=yn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return yn(rn).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,ve=null,Se=0,Oe=0,Kn=null,Ca=!1,es=!1,bf=!1,$i=0,Je=0,Ra=0,pr=0,Tf=0,Qn=0,ns=0,_o=null,In=null,Af=!1,Hl=0,bg=0,Gl=1/0,Vl=null,wa=null,fn=0,Da=null,is=null,ta=0,Cf=0,Rf=null,Tg=null,xo=0,wf=null;function Jn(){return(De&2)!==0&&Se!==0?Se&-Se:z.T!==null?Pf():Ka()}function Ag(){if(Qn===0)if((Se&536870912)===0||Me){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function Hn(e,n,a){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(as(e,0),Ua(e,Se,Qn,!1)),wn(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(pr|=a),Je===4&&Ua(e,Se,Qn,!1)),Ui(e))}function Cg(e,n,a){if((De&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||It(e,n),u=o?Ix(e,n):Uf(e,n,!0),f=o;do{if(u===0){es&&!o&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Bx(a)){u=Uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=_o;var F=A.current.memoizedState.isDehydrated;if(F&&(as(A,S).flags|=256),S=Uf(A,S,!1),S!==2){if(bf&&!F){A.errorRecoveryDisabledLanes|=f,pr|=f,u=4;break t}f=In,In=u,f!==null&&(In===null?In=f:In.push.apply(In,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){as(e,0),Ua(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,Qn,!Ca);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hl+300-T(),10<u)){if(Ua(o,n,Qn,!Ca),vt(o,0,!0)!==0)break t;ta=n,o.timeoutHandle=a0(Rg.bind(null,o,a,In,Vl,Af,n,Qn,pr,ns,Ca,f,"Throttled",-0,0),u);break t}Rg(o,a,In,Vl,Af,n,Qn,pr,ns,Ca,f,null,-0,0)}}break}while(!0);Ui(e)}function Rg(e,n,a,o,u,f,S,A,F,$,ht,gt,nt,st){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Sg(n,f,gt);var Ht=(f&62914560)===f?Hl-T():(f&4194048)===f?bg-T():0;if(Ht=yS(gt,Ht),Ht!==null){ta=f,e.cancelPendingCommit=Ht(zg.bind(null,e,n,f,a,o,u,S,A,F,ht,gt,null,nt,st)),Ua(e,f,S,!$);return}}zg(e,n,f,a,o,u,S,A,F)}function Bx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,o){n&=~Tf,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Is(e,a,n)}function kl(){return(De&6)===0?(So(0),!1):!0}function Df(){if(ve!==null){if(Oe===0)var e=ve.return;else e=ve,ki=rr=null,Wu(e),jr=null,eo=0,e=ve;for(;e!==null;)rg(e.alternate,e),e=e.return;ve=null}}function as(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Df(),ke=e,ve=a=Gi(e.current,null),Se=n,Oe=0,Kn=null,Ca=!1,es=It(e,n),bf=!1,ns=Qn=Tf=pr=Ra=Je=0,In=_o=null,Af=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return $i=n,ul(),a}function wg(e,n){le=null,z.H=co,n===Yr||n===_l?(n=Wp(),Oe=3):n===Nu?(n=Wp(),Oe=4):Oe=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,ve===null&&(Je=1,Ll(e,ai(n,e.current)))}function Dg(){var e=jn.current;return e===null?!0:(Se&4194048)===Se?li===null:(Se&62914560)===Se||(Se&536870912)!==0?e===li:!1}function Ug(){var e=z.H;return z.H=co,e===null?co:e}function Lg(){var e=z.A;return z.A=Px,e}function Xl(){Je=4,Ca||(Se&4194048)!==Se&&jn.current!==null||(es=!0),(Ra&134217727)===0&&(pr&134217727)===0||ke===null||Ua(ke,Se,Qn,!1)}function Uf(e,n,a){var o=De;De|=2;var u=Ug(),f=Lg();(ke!==e||Se!==n)&&(Vl=null,as(e,n)),n=!1;var S=Je;t:do try{if(Oe!==0&&ve!==null){var A=ve,F=Kn;switch(Oe){case 8:Df(),S=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var $=Oe;if(Oe=0,Kn=null,rs(e,A,F,$),a&&es){S=0;break t}break;default:$=Oe,Oe=0,Kn=null,rs(e,A,F,$)}}Fx(),S=Je;break}catch(ht){wg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ki=rr=null,De=o,z.H=u,z.A=f,ve===null&&(ke=null,Se=0,ul()),S}function Fx(){for(;ve!==null;)Ng(ve)}function Ix(e,n){var a=De;De|=2;var o=Ug(),u=Lg();ke!==e||Se!==n?(Vl=null,Gl=T()+500,as(e,n)):es=It(e,n);t:do try{if(Oe!==0&&ve!==null){n=ve;var f=Kn;e:switch(Oe){case 1:Oe=0,Kn=null,rs(e,n,f,1);break;case 2:case 9:if(kp(f)){Oe=0,Kn=null,Og(n);break}n=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),Ui(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:kp(f)?(Oe=0,Kn=null,Og(n)):(Oe=0,Kn=null,rs(e,n,f,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var A=ve;if(S?x0(S):A.stateNode.complete){Oe=0,Kn=null;var F=A.sibling;if(F!==null)ve=F;else{var $=A.return;$!==null?(ve=$,Wl($)):ve=null}break e}}Oe=0,Kn=null,rs(e,n,f,5);break;case 6:Oe=0,Kn=null,rs(e,n,f,6);break;case 8:Df(),Je=6;break t;default:throw Error(r(462))}}Hx();break}catch(ht){wg(e,ht)}while(!0);return ki=rr=null,z.H=o,z.A=u,De=a,ve!==null?0:(ke=null,Se=0,ul(),Je)}function Hx(){for(;ve!==null&&!je();)Ng(ve)}function Ng(e){var n=ig(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Wl(e):ve=n}function Og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Qm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Qm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Wu(n);default:rg(a,n),n=ve=Lp(n,$i),n=ig(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Wl(e):ve=n}function rs(e,n,a,o){ki=rr=null,Wu(n),jr=null,eo=0;var u=n.return;try{if(Rx(e,u,n,a,Se)){Je=1,Ll(e,ai(a,e.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;Je=1,Ll(e,ai(a,e.current)),ve=null;return}n.flags&32768?(Me||o===1?e=!0:es||(Se&536870912)!==0?e=!1:(Ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Pg(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){Pg(n,Ca);return}e=n.return;var a=Ux(n.alternate,n,$i);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);Je===0&&(Je=5)}function Pg(e,n){do{var a=Lx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Je=6,ve=null}function zg(e,n,a,o,u,f,S,A,F){e.cancelPendingCommit=null;do ql();while(fn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=_u,ni(e,a,f,S,A,F),e===ke&&(ve=ke=null,Se=0),is=n,Da=e,ta=a,Cf=f,Rf=u,Tg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xx(ut,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=K.p,K.p=2,S=De,De|=4;try{Nx(e,n,a)}finally{De=S,K.p=u,z.T=o}}fn=1,Bg(),Fg(),Ig()}}function Bg(){if(fn===1){fn=0;var e=Da,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=De;De|=4;try{vg(n,e);var f=kf,S=Ep(e.containerInfo),A=f.focusedElem,F=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Mp(A.ownerDocument.documentElement,A)){if(F!==null&&du(A)){var $=F.start,ht=F.end;if(ht===void 0&&(ht=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ht,A.value.length);else{var gt=A.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var st=nt.getSelection(),Ht=A.textContent.length,te=Math.min(F.start,Ht),Fe=F.end===void 0?te:Math.min(F.end,Ht);!st.extend&&te>Fe&&(S=Fe,Fe=te,te=S);var Z=yp(A,te),k=yp(A,Fe);if(Z&&k&&(st.rangeCount!==1||st.anchorNode!==Z.node||st.anchorOffset!==Z.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var J=gt.createRange();J.setStart(Z.node,Z.offset),st.removeAllRanges(),te>Fe?(st.addRange(J),st.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),st.addRange(J))}}}}for(gt=[],st=A;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ac=!!Vf,kf=Vf=null}finally{De=u,K.p=o,z.T=a}}e.current=n,fn=2}}function Fg(){if(fn===2){fn=0;var e=Da,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=De;De|=4;try{hg(e,n.alternate,n)}finally{De=u,K.p=o,z.T=a}}fn=3}}function Ig(){if(fn===4||fn===3){fn=0,N();var e=Da,n=is,a=ta,o=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,is=Da=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),Ur(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=K.p,K.p=2,z.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{z.T=n,K.p=u}}(ta&3)!==0&&ql(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===wf?xo++:(xo=0,wf=e):xo=0,So(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function ql(){return Bg(),Fg(),Ig(),Gg()}function Gg(){if(fn!==5)return!1;var e=Da,n=Cf;Cf=0;var a=Ur(ta),o=z.T,u=K.p;try{K.p=32>a?32:a,z.T=null,a=Rf,Rf=null;var f=Da,S=ta;if(fn=0,is=Da=null,ta=0,(De&6)!==0)throw Error(r(331));var A=De;if(De|=4,Mg(f.current),xg(f,f.current,S,a),De=A,So(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{K.p=u,z.T=o,Hg(e,n)}}function Vg(e,n,a){n=ai(a,n),n=of(e.stateNode,n,2),e=Ea(e,n,2),e!==null&&(wn(e,2),Ui(e))}function Pe(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=ai(a,e),a=km(2),o=Ea(n,a,2),o!==null&&(Xm(a,o,n,e),wn(o,2),Ui(o));break}}n=n.return}}function Lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bf=!0,u.add(a),e=Gx.bind(null,e,n,a),n.then(e,e))}function Gx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(Je===4||Je===3&&(Se&62914560)===Se&&300>T()-Hl?(De&2)===0&&as(e,0):Tf|=a,ns===Se&&(ns=0)),Ui(e)}function kg(e,n){n===0&&(n=Ne()),e=nr(e,n),e!==null&&(wn(e,n),Ui(e))}function Vx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function kx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function Xx(e,n){return re(e,n)}var Yl=null,ss=null,Nf=!1,jl=!1,Of=!1,La=0;function Ui(e){e!==ss&&e.next===null&&(ss===null?Yl=ss=e:ss=ss.next=e),jl=!0,Nf||(Nf=!0,qx())}function So(e,n){if(!Of&&jl){Of=!0;do for(var a=!1,o=Yl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Yg(o,f))}else f=Se,f=vt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||It(o,f)||(a=!0,Yg(o,f));o=o.next}while(a);Of=!1}}function Wx(){Xg()}function Xg(){jl=Nf=!1;var e=0;La!==0&&nS()&&(e=La);for(var n=T(),a=null,o=Yl;o!==null;){var u=o.next,f=Wg(o,n);f===0?(o.next=null,a===null?Yl=u:a.next=u,u===null&&(ss=a)):(a=o,(e!==0||(f&3)!==0)&&(jl=!0)),o=u}fn!==0&&fn!==5||So(e),La!==0&&(La=0)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-zt(f),A=1<<S,F=u[S];F===-1?((A&a)===0||(A&o)!==0)&&(u[S]=ie(A,n)):F<=n&&(e.expiredLanes|=A),f&=~A}if(n=ke,a=Se,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ke(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||It(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ke(o),Ur(a)){case 2:case 8:a=yt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return o=qg.bind(null,e),a=re(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ke(o),e.callbackPriority=2,e.callbackNode=null,2}function qg(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var o=Se;return o=vt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cg(e,o,n),Wg(e,T()),e.callbackNode!=null&&e.callbackNode===a?qg.bind(null,e):null)}function Yg(e,n){if(ql())return null;Cg(e,n,!0)}function qx(){aS(function(){(De&6)!==0?re(dt,Wx):Xg()})}function Pf(){if(La===0){var e=Wr;e===0&&(e=At,At<<=1,(At&261888)===0&&(At=256)),La=e}return La}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Yx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=jg((u[_n]||null).action),S=o.submitter;S&&(n=(n=S[_n]||null)?jg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new sl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var F=S?Zg(u,S):new FormData(u);tf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(A.preventDefault(),F=S?Zg(u,S):new FormData(u),tf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var zf=0;zf<vu.length;zf++){var Bf=vu[zf],jx=Bf.toLowerCase(),Zx=Bf[0].toUpperCase()+Bf.slice(1);mi(jx,"on"+Zx)}mi(Ap,"onAnimationEnd"),mi(Cp,"onAnimationIteration"),mi(Rp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(fx,"onTransitionRun"),mi(hx,"onTransitionStart"),mi(dx,"onTransitionCancel"),mi(wp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],F=A.instance,$=A.currentTarget;if(A=A.listener,F!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ht){cl(ht)}u.currentTarget=null,f=F}else for(S=0;S<o.length;S++){if(A=o[S],F=A.instance,$=A.currentTarget,A=A.listener,F!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ht){cl(ht)}u.currentTarget=null,f=F}}}}function _e(e,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function Ff(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[Zl]){e[Zl]=!0,Nt.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Ff("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(A0(n)){case 2:var u=bS;break;case 8:u=TS;break;default:u=th}a=u.bind(null,n,a,e),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=q(A),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){o=f=S;continue t}A=A.parentNode}}o=o.return}np(function(){var $=f,ht=nu(a),gt=[];t:{var nt=Dp.get(e);if(nt!==void 0){var st=sl,Ht=e;switch(e){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":st=k_;break;case"focusin":Ht="focus",st=lu;break;case"focusout":Ht="blur",st=lu;break;case"beforeblur":case"afterblur":st=lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=U_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=q_;break;case Ap:case Cp:case Rp:st=O_;break;case wp:st=j_;break;case"scroll":case"scrollend":st=w_;break;case"wheel":st=K_;break;case"copy":case"cut":case"paste":st=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=op;break;case"toggle":case"beforetoggle":st=J_}var te=(n&4)!==0,Fe=!te&&(e==="scroll"||e==="scrollend"),Z=te?nt!==null?nt+"Capture":null:nt;te=[];for(var k=$,J;k!==null;){var mt=k;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Z===null||(mt=Vs(k,Z),mt!=null&&te.push(Mo(k,mt,J))),Fe)break;k=k.return}0<te.length&&(nt=new st(nt,Ht,null,a,ht),gt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",nt&&a!==eu&&(Ht=a.relatedTarget||a.fromElement)&&(q(Ht)||Ht[ma]))break t;if((st||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,st?(Ht=a.relatedTarget||a.toElement,st=$,Ht=Ht?q(Ht):null,Ht!==null&&(Fe=c(Ht),te=Ht.tag,Ht!==Fe||te!==5&&te!==27&&te!==6)&&(Ht=null)):(st=null,Ht=$),st!==Ht)){if(te=rp,mt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=op,mt="onPointerLeave",Z="onPointerEnter",k="pointer"),Fe=st==null?nt:rt(st),J=Ht==null?nt:rt(Ht),nt=new te(mt,k+"leave",st,a,ht),nt.target=Fe,nt.relatedTarget=J,mt=null,q(ht)===$&&(te=new te(Z,k+"enter",Ht,a,ht),te.target=J,te.relatedTarget=Fe,mt=te),Fe=mt,st&&Ht)e:{for(te=Qx,Z=st,k=Ht,J=0,mt=Z;mt;mt=te(mt))J++;mt=0;for(var $t=k;$t;$t=te($t))mt++;for(;0<J-mt;)Z=te(Z),J--;for(;0<mt-J;)k=te(k),mt--;for(;J--;){if(Z===k||k!==null&&Z===k.alternate){te=Z;break e}Z=te(Z),k=te(k)}te=null}else te=null;st!==null&&Jg(gt,nt,st,te,!1),Ht!==null&&Fe!==null&&Jg(gt,Fe,Ht,te,!0)}}t:{if(nt=$?rt($):window,st=nt.nodeName&&nt.nodeName.toLowerCase(),st==="select"||st==="input"&&nt.type==="file")var Ce=mp;else if(dp(nt))if(gp)Ce=lx;else{Ce=sx;var kt=rx}else st=nt.nodeName,!st||st.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&tu($.elementType)&&(Ce=mp):Ce=ox;if(Ce&&(Ce=Ce(e,$))){pp(gt,Ce,a,ht);break t}kt&&kt(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&un(nt,"number",nt.value)}switch(kt=$?rt($):window,e){case"focusin":(dp(kt)||kt.contentEditable==="true")&&(Br=kt,pu=$,Ks=null);break;case"focusout":Ks=pu=Br=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,bp(gt,a,ht);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":bp(gt,a,ht)}var ue;if(uu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else zr?fp(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(lp&&a.locale!=="ko"&&(zr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&zr&&(ue=ip()):(ga=ht,ru="value"in ga?ga.value:ga.textContent,zr=!0)),kt=Kl($,ye),0<kt.length&&(ye=new sp(ye,e,null,a,ht),gt.push({event:ye,listeners:kt}),ue?ye.data=ue:(ue=hp(a),ue!==null&&(ye.data=ue)))),(ue=tx?ex(e,a):nx(e,a))&&(ye=Kl($,"onBeforeInput"),0<ye.length&&(kt=new sp("onBeforeInput","beforeinput",null,a,ht),gt.push({event:kt,listeners:ye}),kt.data=ue)),Yx(gt,e,$,a,ht)}Kg(gt,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vs(e,a),u!=null&&o.unshift(Mo(e,u,f)),u=Vs(e,n),u!=null&&o.push(Mo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Qx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,F=A.alternate,$=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||$===null||(F=$,u?($=Vs(a,f),$!=null&&S.unshift(Mo(a,$,F))):u||($=Vs(a,f),$!=null&&S.push(Mo(a,$,F)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function t0(e,n){return n=$g(n),$g(e)===n}function Be(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Nr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Nr(e,""+o);break;case"className":Le(e,"class",o);break;case"tabIndex":Le(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(e,a,o);break;case"style":tp(e,o,f);break;case"data":if(n!=="object"){Le(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=nl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Ve(e,"popover",o);break;case"xlinkActuate":ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ge(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ge(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ge(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ge(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=C_.get(a)||a,Ve(e,a,o))}}function Gf(e,n,a,o,u,f){switch(a){case"style":tp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Nr(e,o):(typeof o=="number"||typeof o=="bigint")&&Nr(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ve(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,f,S,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var A=f=S=u=null,F=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":S=ht;break;case"checked":F=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Be(e,n,o,ht,a,null)}}Dn(e,f,A,F,$,S,u,!1);return;case"select":_e("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Be(e,n,u,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?tn(e,!!o,n,!1):a!=null&&tn(e,!!o,a,!0);return;case"textarea":_e("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Be(e,n,S,A,a,null)}Ci(e,o,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Be(e,n,F,o,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)_e(yo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,$,o,a,null)}return;default:if(tu(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Gf(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Be(e,n,A,o,a,null))}function tS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,F=null,$=null,ht=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":F=gt;default:o.hasOwnProperty(st)||Be(e,n,st,null,o,gt)}}for(var nt in o){var st=o[nt];if(gt=a[nt],o.hasOwnProperty(nt)&&(st!=null||gt!=null))switch(nt){case"type":f=st;break;case"name":u=st;break;case"checked":$=st;break;case"defaultChecked":ht=st;break;case"value":S=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==gt&&Be(e,n,nt,st,o,gt)}}bn(e,S,A,F,$,ht,f,u);return;case"select":st=S=A=nt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":st=F;default:o.hasOwnProperty(f)||Be(e,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==F&&Be(e,n,u,f,o,F)}n=A,a=S,o=st,nt!=null?tn(e,!!a,nt,!1):!!o!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":st=nt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":nt=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Be(e,n,S,u,o,f)}Lr(e,nt,st);return;case"option":for(var Ht in a)nt=a[Ht],a.hasOwnProperty(Ht)&&nt!=null&&!o.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:Be(e,n,Ht,null,o,nt));for(F in o)nt=o[F],st=a[F],o.hasOwnProperty(F)&&nt!==st&&(nt!=null||st!=null)&&(F==="selected"?e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Be(e,n,F,nt,o,st));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!o.hasOwnProperty(te)&&Be(e,n,te,null,o,nt);for($ in o)if(nt=o[$],st=a[$],o.hasOwnProperty($)&&nt!==st&&(nt!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Be(e,n,$,nt,o,st)}return;default:if(tu(n)){for(var Fe in a)nt=a[Fe],a.hasOwnProperty(Fe)&&nt!==void 0&&!o.hasOwnProperty(Fe)&&Gf(e,n,Fe,void 0,o,nt);for(ht in o)nt=o[ht],st=a[ht],!o.hasOwnProperty(ht)||nt===st||nt===void 0&&st===void 0||Gf(e,n,ht,nt,o,st);return}}for(var Z in a)nt=a[Z],a.hasOwnProperty(Z)&&nt!=null&&!o.hasOwnProperty(Z)&&Be(e,n,Z,null,o,nt);for(gt in o)nt=o[gt],st=a[gt],!o.hasOwnProperty(gt)||nt===st||nt==null&&st==null||Be(e,n,gt,nt,o,st)}function e0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&e0(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],$=F.startTime;if($>A)break;var ht=F.transferSize,gt=F.initiatorType;ht&&e0(gt)&&(F=F.responseEnd,S+=ht*(F<A?1:(A-$)/(F-$)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vf=null,kf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function n0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function nS(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(e){return r0.resolve(null).then(e).catch(rS)}:a0;function rS(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function s0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),us(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[Qa]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Eo(e.ownerDocument.body);a=u}while(a);us(n)}function o0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function oS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function l0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$?"||e.data==="$~"}function jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zf=null;function c0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function u0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function f0(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var ui=new Map,h0=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=K.d;K.d={f:cS,r:uS,D:fS,C:hS,L:dS,m:pS,X:gS,S:mS,M:vS};function cS(){var e=ea.f(),n=kl();return e||n}function uS(e){var n=it(e);n!==null&&n.tag===5&&n.type==="form"?wm(n):ea.r(e)}var os=typeof document>"u"?null:document;function d0(e,n,a){var o=os;if(o&&typeof n=="string"&&n){var u=xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),h0.has(u)||(h0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),_t(n),o.head.appendChild(n)))}}function fS(e){ea.D(e),d0("dns-prefetch",e,null)}function hS(e,n){ea.C(e,n),d0("preconnect",e,n)}function dS(e,n,a){ea.L(e,n,a);var o=os;if(o&&e&&n){var u='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xe(a.imageSizes)+'"]')):u+='[href="'+xe(e)+'"]';var f=u;switch(n){case"style":f=ls(e);break;case"script":f=cs(e)}ui.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(bo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),En(n,"link",e),_t(n),o.head.appendChild(n)))}}function pS(e,n){ea.m(e,n);var a=os;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xe(o)+'"][href="'+xe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(e)}if(!ui.has(f)&&(e=_({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),En(o,"link",e),_t(o),a.head.appendChild(o)}}}function mS(e,n,a){ea.S(e,n,a);var o=os;if(o&&e){var u=j(o).hoistableStyles,f=ls(e);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(bo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Kf(e,a);var F=S=o.createElement("link");_t(F),En(F,"link",e),F._p=new Promise(function($,ht){F.onload=$,F.onerror=ht}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,$l(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function gS(e,n){ea.X(e,n);var a=os;if(a&&e){var o=j(a).hoistableScripts,u=cs(e),f=o.get(u);f||(f=a.querySelector(To(u)),f||(e=_({src:e,async:!0},n),(n=ui.get(u))&&Qf(e,n),f=a.createElement("script"),_t(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function vS(e,n){ea.M(e,n);var a=os;if(a&&e){var o=j(a).hoistableScripts,u=cs(e),f=o.get(u);f||(f=a.querySelector(To(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&Qf(e,n),f=a.createElement("script"),_t(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function p0(e,n,a,o){var u=(u=at.current)?Jl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=j(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ls(a.href);var f=j(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(bo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||_S(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=j(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ls(e){return'href="'+xe(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function m0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function _S(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),_t(n),e.head.appendChild(n))}function cs(e){return'[src="'+xe(e)+'"]'}function To(e){return"script[async]"+e}function g0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(o)return n.instance=o,_t(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),_t(o),En(o,"style",u),$l(o,a.precedence,e),n.instance=o;case"stylesheet":u=ls(a.href);var f=e.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,_t(f),f;o=m0(a),(u=ui.get(u))&&Kf(o,u),f=(e.ownerDocument||e).createElement("link"),_t(f);var S=f;return S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),En(f,"link",o),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=cs(a.src),(u=e.querySelector(To(f)))?(n.instance=u,_t(u),u):(o=a,(u=ui.get(f))&&(o=_({},a),Qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),_t(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,e));return n.instance}function $l(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function v0(e,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Qa]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function _0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function SS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ls(o.href),f=n.querySelector(bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ec.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,_t(f);return}f=n.ownerDocument||n,o=m0(o),(u=ui.get(u))&&Kf(o,u),f=f.createElement("link"),_t(f);var S=f;S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),En(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ec.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jf=0;function yS(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Jf===0&&(Jf=62500*eS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(MS,e),nc=null,ec.call(e))}function MS(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var o=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:w,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ES(e,n,a,o,u,f,S,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function S0(e,n,a,o,u,f,S,A,F,$,ht,gt){return e=new ES(e,n,a,S,F,$,ht,gt,A),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ou(f),e}function y0(e){return e?(e=Hr,e):Hr}function M0(e,n,a,o,u,f){u=y0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ma(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ea(e,o,n),a!==null&&(Hn(a,e,n),io(a,e,n))}function E0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $f(e,n){E0(e,n),(e=e.alternate)&&E0(e,n)}function b0(e){if(e.tag===13||e.tag===31){var n=nr(e,67108864);n!==null&&Hn(n,e,67108864),$f(e,67108864)}}function T0(e){if(e.tag===13||e.tag===31){var n=Jn();n=Dr(n);var a=nr(e,n);a!==null&&Hn(a,e,n),$f(e,n)}}var ac=!0;function bS(e,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=2,th(e,n,a,o)}finally{K.p=f,z.T=u}}function TS(e,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=8,th(e,n,a,o)}finally{K.p=f,z.T=u}}function th(e,n,a,o){if(ac){var u=eh(o);if(u===null)Hf(e,n,o,rc,a),C0(e,o);else if(CS(u,e,n,a,o))o.stopPropagation();else if(C0(e,o),n&4&&-1<AS.indexOf(e)){for(;u!==null;){var f=it(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Mt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var F=1<<31-zt(S);A.entanglements[1]|=F,S&=~F}Ui(f),(De&6)===0&&(Gl=T()+500,So(0))}}break;case 31:case 13:A=nr(f,2),A!==null&&Hn(A,f,2),kl(),$f(f,2)}if(f=eh(o),f===null&&Hf(e,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function eh(e){return e=nu(e),nh(e)}var rc=null;function nh(e){if(rc=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function A0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case dt:return 2;case yt:return 8;case ut:case Yt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var ih=!1,Oa=null,Pa=null,za=null,Co=new Map,Ro=new Map,Ba=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C0(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function wo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=it(n),n!==null&&b0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function CS(e,n,a,o,u){switch(n){case"focusin":return Oa=wo(Oa,e,n,a,o,u),!0;case"dragenter":return Pa=wo(Pa,e,n,a,o,u),!0;case"mouseover":return za=wo(za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,wo(Co.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,wo(Ro.get(f)||null,e,n,a,o,u)),!0}return!1}function R0(e){var n=q(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){T0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){T0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=it(a),n!==null&&b0(n),e.blockedOn=a,!1;n.shift()}return!0}function w0(e,n,a){sc(e)&&a.delete(n)}function RS(){ih=!1,Oa!==null&&sc(Oa)&&(Oa=null),Pa!==null&&sc(Pa)&&(Pa=null),za!==null&&sc(za)&&(za=null),Co.forEach(w0),Ro.forEach(w0)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,ih||(ih=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,RS)))}var lc=null;function D0(e){lc!==e&&(lc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(nh(o||a)===null)continue;break}var f=it(a);f!==null&&(e.splice(n,3),n-=3,tf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function us(e){function n(F){return oc(F,e)}Oa!==null&&oc(Oa,e),Pa!==null&&oc(Pa,e),za!==null&&oc(za,e),Co.forEach(n),Ro.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)R0(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[_n]||null;if(typeof f=="function")S||D0(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[_n]||null)A=S.formAction;else if(nh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),D0(a)}}}function U0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ah(e){this._internalRoot=e}cc.prototype.render=ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();M0(a,o,e,n,null,null)},cc.prototype.unmount=ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;M0(e.current,2,null,e,null,null),kl(),n[ma]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ka();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&R0(e)}};var L0=t.version;if(L0!=="19.2.7")throw Error(r(527,L0,"19.2.7"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{bt=uc.inject(wS),Rt=uc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Im,f=Hm,S=Gm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=S0(e,1,!1,null,null,a,o,null,u,f,S,U0),e[ma]=n.current,If(e),new ah(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Im,S=Hm,A=Gm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=S0(e,1,!0,n,a??null,o,u,F,f,S,A,U0),n.context=y0(null),a=n.current,o=Jn(),o=Dr(o),u=Ma(o),u.callback=null,Ea(a,u,o),a=o,n.current.lanes=a,wn(n,a),Ui(n),e[ma]=n.current,If(e),new cc(n)},Uo.version="19.2.7",Uo}var V0;function GS(){if(V0)return oh.exports;V0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),oh.exports=HS(),oh.exports}var VS=GS();const Id="179",kS=0,k0=1,XS=2,Yv=1,WS=2,oa=3,Za=0,Nn=1,Ni=2,ua=0,As=1,ws=2,X0=3,W0=4,qS=5,Er=100,YS=101,jS=102,ZS=103,KS=104,QS=200,JS=201,$S=202,ty=203,Zh=204,Kh=205,ey=206,ny=207,iy=208,ay=209,ry=210,sy=211,oy=212,ly=213,cy=214,Qh=0,Jh=1,$h=2,Ds=3,td=4,ed=5,nd=6,id=7,jv=0,uy=1,fy=2,ja=0,hy=1,dy=2,py=3,my=4,gy=5,vy=6,_y=7,Zv=300,Us=301,Ls=302,ad=303,rd=304,Wc=306,sd=1e3,Tr=1001,od=1002,Ei=1003,xy=1004,fc=1005,Oi=1006,fh=1007,Ar=1008,Bi=1009,Kv=1010,Qv=1011,Go=1012,Hd=1013,Cr=1014,ca=1015,fa=1016,Gd=1017,Vd=1018,Vo=1020,Jv=35902,$v=1021,t_=1022,Mi=1023,ko=1026,Xo=1027,e_=1028,kd=1029,n_=1030,Xd=1031,Wd=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,vd=37810,_d=37811,xd=37812,Sd=37813,yd=37814,Md=37815,Ed=37816,bd=37817,Td=37818,Ad=37819,Cd=37820,Rd=37821,zc=36492,wd=36494,Dd=36495,i_=36283,Ud=36284,Ld=36285,Nd=36286,Sy=3200,yy=3201,My=0,Ey=1,qa="",hi="srgb",Ns="srgb-linear",Ic="linear",Ie="srgb",fs=7680,q0=519,by=512,Ty=513,Ay=514,a_=515,Cy=516,Ry=517,wy=518,Dy=519,Y0=35044,j0="300 es",Pi=2e3,Hc=2001;class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,Od=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Ee(s,t,i){return Math.max(t,Math.min(i,s))}function Uy(s,t){return(s%t+t)%t}function dh(s,t,i){return(1-i)*s+i*t}function Lo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3];const x=c[h+0],M=c[h+1],b=c[h+2],E=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=E;return}if(_!==E||m!==x||p!==M||v!==b){let y=1-d;const g=m*x+p*M+v*b+_*E,L=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const G=Math.sqrt(w),I=Math.atan2(G,g*L);y=Math.sin(y*I)/G,d=Math.sin(d*I)/G}const C=d*L;if(m=m*y+x*C,p=p*y+M*C,v=v*y+b*C,_=_*y+E*C,y===1-d){const G=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=G,p*=G,v*=G,_*=G}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=c[h],x=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+v*_+m*M-p*x,t[i+1]=m*b+v*x+p*_-d*M,t[i+2]=p*b+v*M+d*x-m*_,t[i+3]=v*b-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),_=d(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*v*_+p*M*b,this._y=p*M*_-x*v*b,this._z=p*v*b+x*M*_,this._w=p*v*_-x*M*b;break;case"YXZ":this._x=x*v*_+p*M*b,this._y=p*M*_-x*v*b,this._z=p*v*b-x*M*_,this._w=p*v*_+x*M*b;break;case"ZXY":this._x=x*v*_-p*M*b,this._y=p*M*_+x*v*b,this._z=p*v*b+x*M*_,this._w=p*v*_-x*M*b;break;case"ZYX":this._x=x*v*_-p*M*b,this._y=p*M*_+x*v*b,this._z=p*v*b-x*M*_,this._w=p*v*_+x*M*b;break;case"YZX":this._x=x*v*_+p*M*b,this._y=p*M*_+x*v*b,this._z=p*v*b-x*M*_,this._w=p*v*_-x*M*b;break;case"XZY":this._x=x*v*_-p*M*b,this._y=p*M*_-x*v*b,this._z=p*v*b+x*M*_,this._w=p*v*_+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],x=r+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-r*p,this._z=c*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),_=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),v=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*v,this.y=r+m*v+d*p-c*_,this.z=l+m*_+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ph.copy(this).projectOnVector(t),this.sub(ph)}reflect(t){return this.sub(ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new Q,Z0=new Zo;class fe{constructor(t,i,r,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],_=r[7],x=r[2],M=r[5],b=r[8],E=l[0],y=l[3],g=l[6],L=l[1],w=l[4],C=l[7],G=l[2],I=l[5],P=l[8];return c[0]=h*E+d*L+m*G,c[3]=h*y+d*w+m*I,c[6]=h*g+d*C+m*P,c[1]=p*E+v*L+_*G,c[4]=p*y+v*w+_*I,c[7]=p*g+v*C+_*P,c[2]=x*E+M*L+b*G,c[5]=x*y+M*w+b*I,c[8]=x*g+M*C+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-r*c*v+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*h-d*p,x=d*m-v*c,M=p*c-h*m,b=i*_+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=_*E,t[1]=(l*p-v*r)*E,t[2]=(d*r-l*h)*E,t[3]=x*E,t[4]=(v*i-l*m)*E,t[5]=(l*c-d*i)*E,t[6]=M*E,t[7]=(r*m-p*i)*E,t[8]=(h*i-r*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(mh.makeScale(t,i)),this}rotate(t){return this.premultiply(mh.makeRotation(-t)),this}translate(t,i){return this.premultiply(mh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new fe;function r_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ly(){const s=Gc("canvas");return s.style.display="block",s}const K0={};function Cs(s){s in K0||(K0[s]=!0,console.warn(s))}function Ny(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Q0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oy(){const s={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?Ic:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ns]:{primaries:t,whitePoint:r,transfer:Ic,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const we=Oy();function ha(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class Py{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=Gc("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ha(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zy=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(gh(l[h].image)):c.push(gh(l[h]))}else c=gh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function gh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Py.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let By=0;const vh=new Q;class kn extends Bs{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Tr,l=Tr,c=Oi,h=Ar,d=Mi,m=Bi,p=kn.DEFAULT_ANISOTROPY,v=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=jo(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sd:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sd:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Zv;kn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],x=m[1],M=m[5],b=m[9],E=m[2],y=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(_-E)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+E)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,C=(M+1)/2,G=(g+1)/2,I=(v+x)/4,P=(_+E)/4,W=(b+y)/4;return w>C&&w>G?w<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(w),l=I/r,c=P/r):C>G?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=I/l,c=W/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=P/c,l=W/c),this.set(r,l,c,i),this}let L=Math.sqrt((y-b)*(y-b)+(_-E)*(_-E)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(_-E)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fy extends Bs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new kn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Fy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class s_ extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iy extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(c,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hc.copy(r.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),dc.subVectors(this.max,No),ds.subVectors(t.a,No),ps.subVectors(t.b,No),ms.subVectors(t.c,No),Ia.subVectors(ps,ds),Ha.subVectors(ms,ps),mr.subVectors(ds,ms);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-mr.y,mr.x,0];return!_h(i,ds,ps,ms,dc)||(i=[1,0,0,0,1,0,0,0,1],!_h(i,ds,ps,ms,dc))?!1:(pc.crossVectors(Ia,Ha),i=[pc.x,pc.y,pc.z],_h(i,ds,ps,ms,dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],_i=new Q,hc=new Ko,ds=new Q,ps=new Q,ms=new Q,Ia=new Q,Ha=new Q,mr=new Q,No=new Q,dc=new Q,pc=new Q,gr=new Q;function _h(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){gr.fromArray(s,c);const d=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=t.dot(gr),p=i.dot(gr),v=r.dot(gr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Hy=new Ko,Oo=new Q,xh=new Q;class Yd{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Hy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(xh)),this.expandByPoint(Oo.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new Q,Sh=new Q,mc=new Q,Ga=new Q,yh=new Q,gc=new Q,Mh=new Q;class Gy{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Sh.copy(t).add(i).multiplyScalar(.5),mc.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(Sh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(mc),d=Ga.dot(this.direction),m=-Ga.dot(mc),p=Ga.lengthSq(),v=Math.abs(1-h*h);let _,x,M,b;if(v>0)if(_=h*m-d,x=h*d-m,b=c*v,_>=0)if(x>=-b)if(x<=b){const E=1/v;_*=E,x*=E,M=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Sh).addScaledVector(mc,x),M}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,h=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,h=(t.min.y-x.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,r,l,c){yh.subVectors(i,t),gc.subVectors(r,t),Mh.crossVectors(yh,gc);let h=this.direction.dot(Mh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ga.subVectors(this.origin,t);const m=d*this.direction.dot(gc.crossVectors(Ga,gc));if(m<0)return null;const p=d*this.direction.dot(yh.cross(Ga));if(p<0||m+p>h)return null;const v=-d*Ga.dot(Mh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,r,l,c,h,d,m,p,v,_,x,M,b,E,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,v,_,x,M,b,E,y)}set(t,i,r,l,c,h,d,m,p,v,_,x,M,b,E,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=v,g[10]=_,g[14]=x,g[3]=M,g[7]=b,g[11]=E,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/gs.setFromMatrixColumn(t,0).length(),c=1/gs.setFromMatrixColumn(t,1).length(),h=1/gs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*v,M=h*_,b=d*v,E=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=x-E*p,i[9]=-d*m,i[2]=E-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*v,M=m*_,b=p*v,E=p*_;i[0]=x+E*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=E+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*v,M=m*_,b=p*v,E=p*_;i[0]=x-E*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=E-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*v,M=h*_,b=d*v,E=d*_;i[0]=m*v,i[4]=b*p-M,i[8]=x*p+E,i[1]=m*_,i[5]=E*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,E=d*p;i[0]=m*v,i[4]=E-x*_,i[8]=b*_+M,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*_+b,i[10]=x-E*_}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,E=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=x*_+E,i[5]=h*v,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*v,i[10]=E*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vy,t,ky)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Va.crossVectors(r,$n),Va.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Va.crossVectors(r,$n)),Va.normalize(),vc.crossVectors($n,Va),l[0]=Va.x,l[4]=vc.x,l[8]=$n.x,l[1]=Va.y,l[5]=vc.y,l[9]=$n.y,l[2]=Va.z,l[6]=vc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],_=r[5],x=r[9],M=r[13],b=r[2],E=r[6],y=r[10],g=r[14],L=r[3],w=r[7],C=r[11],G=r[15],I=l[0],P=l[4],W=l[8],U=l[12],D=l[1],B=l[5],ot=l[9],ct=l[13],ft=l[2],pt=l[6],z=l[10],K=l[14],Y=l[3],xt=l[7],Et=l[11],O=l[15];return c[0]=h*I+d*D+m*ft+p*Y,c[4]=h*P+d*B+m*pt+p*xt,c[8]=h*W+d*ot+m*z+p*Et,c[12]=h*U+d*ct+m*K+p*O,c[1]=v*I+_*D+x*ft+M*Y,c[5]=v*P+_*B+x*pt+M*xt,c[9]=v*W+_*ot+x*z+M*Et,c[13]=v*U+_*ct+x*K+M*O,c[2]=b*I+E*D+y*ft+g*Y,c[6]=b*P+E*B+y*pt+g*xt,c[10]=b*W+E*ot+y*z+g*Et,c[14]=b*U+E*ct+y*K+g*O,c[3]=L*I+w*D+C*ft+G*Y,c[7]=L*P+w*B+C*pt+G*xt,c[11]=L*W+w*ot+C*z+G*Et,c[15]=L*U+w*ct+C*K+G*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],x=t[10],M=t[14],b=t[3],E=t[7],y=t[11],g=t[15];return b*(+c*m*_-l*p*_-c*d*x+r*p*x+l*d*M-r*m*M)+E*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*v-c*m*v)+y*(+i*p*_-i*d*M-c*h*_+r*h*M+c*d*v-r*p*v)+g*(-l*d*v-i*m*_+i*d*x+l*h*_-r*h*x+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],x=t[10],M=t[11],b=t[12],E=t[13],y=t[14],g=t[15],L=_*y*p-E*x*p+E*m*M-d*y*M-_*m*g+d*x*g,w=b*x*p-v*y*p-b*m*M+h*y*M+v*m*g-h*x*g,C=v*E*p-b*_*p+b*d*M-h*E*M-v*d*g+h*_*g,G=b*_*m-v*E*m-b*d*x+h*E*x+v*d*y-h*_*y,I=i*L+r*w+l*C+c*G;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=L*P,t[1]=(E*x*c-_*y*c-E*l*M+r*y*M+_*l*g-r*x*g)*P,t[2]=(d*y*c-E*m*c+E*l*p-r*y*p-d*l*g+r*m*g)*P,t[3]=(_*m*c-d*x*c-_*l*p+r*x*p+d*l*M-r*m*M)*P,t[4]=w*P,t[5]=(v*y*c-b*x*c+b*l*M-i*y*M-v*l*g+i*x*g)*P,t[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*g-i*m*g)*P,t[7]=(h*x*c-v*m*c+v*l*p-i*x*p-h*l*M+i*m*M)*P,t[8]=C*P,t[9]=(b*_*c-v*E*c-b*r*M+i*E*M+v*r*g-i*_*g)*P,t[10]=(h*E*c-b*d*c+b*r*p-i*E*p-h*r*g+i*d*g)*P,t[11]=(v*d*c-h*_*c-v*r*p+i*_*p+h*r*M-i*d*M)*P,t[12]=G*P,t[13]=(v*E*l-b*_*l+b*r*x-i*E*x-v*r*y+i*_*y)*P,t[14]=(b*d*l-h*E*l-b*r*m+i*E*m+h*r*y-i*d*y)*P,t[15]=(h*_*l-v*d*l+v*r*m-i*_*m-h*r*x+i*d*x)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,_=d+d,x=c*p,M=c*v,b=c*_,E=h*v,y=h*_,g=d*_,L=m*p,w=m*v,C=m*_,G=r.x,I=r.y,P=r.z;return l[0]=(1-(E+g))*G,l[1]=(M+C)*G,l[2]=(b-w)*G,l[3]=0,l[4]=(M-C)*I,l[5]=(1-(x+g))*I,l[6]=(y+L)*I,l[7]=0,l[8]=(b+w)*P,l[9]=(y-L)*P,l[10]=(1-(x+E))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=gs.set(l[0],l[1],l[2]).length();const h=gs.set(l[4],l[5],l[6]).length(),d=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,v=1/h,_=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Pi,m=!1){const p=this.elements,v=2*c/(i-t),_=2*c/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let b,E;if(m)b=c/(h-c),E=h*c/(h-c);else if(d===Pi)b=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Hc)b=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Pi,m=!1){const p=this.elements,v=2/(i-t),_=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,E;if(m)b=1/(h-c),E=h/(h-c);else if(d===Pi)b=-2/(h-c),E=-(h+c)/(h-c);else if(d===Hc)b=-1/(h-c),E=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const gs=new Q,xi=new $e,Vy=new Q(0,0,0),ky=new Q(1,1,1),Va=new Q,vc=new Q,$n=new Q,$0=new $e,tv=new Zo;class pa{constructor(t=0,i=0,r=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return $0.makeRotationFromQuaternion(t),this.setFromRotationMatrix($0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return tv.setFromEuler(this),this.setFromQuaternion(tv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class o_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xy=0;const ev=new Q,vs=new Zo,aa=new $e,_c=new Q,Po=new Q,Wy=new Q,qy=new Zo,nv=new Q(1,0,0),iv=new Q(0,1,0),av=new Q(0,0,1),rv={type:"added"},Yy={type:"removed"},_s={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Xn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new Q,i=new pa,r=new Zo,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new fe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(nv,t)}rotateY(t){return this.rotateOnAxis(iv,t)}rotateZ(t){return this.rotateOnAxis(av,t)}translateOnAxis(t,i){return ev.copy(t).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(nv,t)}translateY(t){return this.translateOnAxis(iv,t)}translateZ(t){return this.translateOnAxis(av,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_c.copy(t):_c.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Po,_c,this.up):aa.lookAt(_c,Po,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(aa),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rv),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Yy),Eh.child=t,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rv),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,Wy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,qy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new Q(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new Q,ra=new Q,bh=new Q,sa=new Q,xs=new Q,Ss=new Q,sv=new Q,Th=new Q,Ah=new Q,Ch=new Q,Rh=new He,wh=new He,Dh=new He;class yi{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Si.subVectors(l,i),ra.subVectors(r,i),bh.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(ra),m=Si.dot(bh),p=ra.dot(ra),v=ra.dot(bh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*v)*x,b=(h*v-d*m)*x;return c.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(h,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Rh.setScalar(0),wh.setScalar(0),Dh.setScalar(0),Rh.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,r),Dh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Rh,c.x),h.addScaledVector(wh,c.y),h.addScaledVector(Dh,c.z),h}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),ra.subVectors(t,i),Si.cross(ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Si.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;xs.subVectors(l,r),Ss.subVectors(c,r),Th.subVectors(t,r);const m=xs.dot(Th),p=Ss.dot(Th);if(m<=0&&p<=0)return i.copy(r);Ah.subVectors(t,l);const v=xs.dot(Ah),_=Ss.dot(Ah);if(v>=0&&_<=v)return i.copy(l);const x=m*_-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(xs,h);Ch.subVectors(t,c);const M=xs.dot(Ch),b=Ss.dot(Ch);if(b>=0&&M<=b)return i.copy(c);const E=M*p-m*b;if(E<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Ss,d);const y=v*b-M*_;if(y<=0&&_-v>=0&&M-b>=0)return sv.subVectors(c,l),d=(_-v)/(_-v+(M-b)),i.copy(l).addScaledVector(sv,d);const g=1/(y+E+x);return h=E*g,d=x*g,i.copy(r).addScaledVector(xs,h).addScaledVector(Ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Uh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ae{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=Uy(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Uh(h,c,t+1/3),this.g=Uh(h,c,t),this.b=Uh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=l_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return we.workingToColorSpace(Cn.copy(this),t),Math.round(Ee(Cn.r*255,0,255))*65536+Math.round(Ee(Cn.g*255,0,255))*256+Math.round(Ee(Cn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=hi){we.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(xc);const r=dh(ka.h,xc.h,i),l=dh(ka.s,xc.s,i),c=dh(ka.l,xc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ae;Ae.NAMES=l_;let jy=0;class qc extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=As,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Kh&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qo extends qc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new Q,Sc=new ce;let Zy=0;class hn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Y0,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(t),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Y0&&(t.usage=this.usage),t}}class c_ extends hn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class u_ extends hn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class di extends hn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Ky=0;const fi=new $e,Lh=new Xn,ys=new Q,ti=new Ko,zo=new Ko,vn=new Q;class Ti extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r_(t)?u_:c_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,r){return fi.makeTranslation(t,i,r),this.applyMatrix4(fi),this}scale(t,i,r){return fi.makeScale(t,i,r),this.applyMatrix4(fi),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new di(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,zo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,zo.max),ti.expandByPoint(vn)):(ti.expandByPoint(zo.min),ti.expandByPoint(zo.max))}ti.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)vn.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(t,p),vn.add(ys)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new Q,m[W]=new Q;const p=new Q,v=new Q,_=new Q,x=new ce,M=new ce,b=new ce,E=new Q,y=new Q;function g(W,U,D){p.fromBufferAttribute(r,W),v.fromBufferAttribute(r,U),_.fromBufferAttribute(r,D),x.fromBufferAttribute(c,W),M.fromBufferAttribute(c,U),b.fromBufferAttribute(c,D),v.sub(p),_.sub(p),M.sub(x),b.sub(x);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(E.copy(v).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(B),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(B),d[W].add(E),d[U].add(E),d[D].add(E),m[W].add(y),m[U].add(y),m[D].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let W=0,U=L.length;W<U;++W){const D=L[W],B=D.start,ot=D.count;for(let ct=B,ft=B+ot;ct<ft;ct+=3)g(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const w=new Q,C=new Q,G=new Q,I=new Q;function P(W){G.fromBufferAttribute(l,W),I.copy(G);const U=d[W];w.copy(U),w.sub(G.multiplyScalar(G.dot(U))).normalize(),C.crossVectors(I,U);const B=C.dot(m[W])<0?-1:1;h.setXYZW(W,w.x,w.y,w.z,B)}for(let W=0,U=L.length;W<U;++W){const D=L[W],B=D.start,ot=D.count;for(let ct=B,ft=B+ot;ct<ft;ct+=3)P(t.getX(ct+0)),P(t.getX(ct+1)),P(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,v=new Q,_=new Q;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),E=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),d.add(v),m.add(v),p.add(v),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,x=new p.constructor(m.length*v);let M=0,b=0;for(let E=0,y=m.length;E<y;E++){d.isInterleavedBufferAttribute?M=m[E]*d.data.stride+d.offset:M=m[E]*v;for(let g=0;g<v;g++)x[b++]=p[M++]}return new hn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,_=p.length;v<_;v++){const x=p[v],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let x=0,M=_.length;x<M;x++)v.push(_[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ov=new $e,vr=new Gy,yc=new Yd,lv=new Q,Mc=new Q,Ec=new Q,bc=new Q,Nh=new Q,Tc=new Q,cv=new Q,Ac=new Q;class Vn extends Xn{constructor(t=new Ti,i=new Qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],_=c[m];v!==0&&(Nh.fromBufferAttribute(_,t),h?Tc.addScaledVector(Nh,v):Tc.addScaledVector(Nh.sub(i),v))}i.add(Tc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(c),vr.copy(t.ray).recast(t.near),!(yc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(yc,lv)===null||vr.origin.distanceToSquared(lv)>(t.far-t.near)**2))&&(ov.copy(c).invert(),vr.copy(t.ray).applyMatrix4(ov),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,E=x.length;b<E;b++){const y=x[b],g=h[y.materialIndex],L=Math.max(y.start,M.start),w=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=L,G=w;C<G;C+=3){const I=d.getX(C),P=d.getX(C+1),W=d.getX(C+2);l=Cc(this,g,t,r,p,v,_,I,P,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let y=b,g=E;y<g;y+=3){const L=d.getX(y),w=d.getX(y+1),C=d.getX(y+2);l=Cc(this,h,t,r,p,v,_,L,w,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,E=x.length;b<E;b++){const y=x[b],g=h[y.materialIndex],L=Math.max(y.start,M.start),w=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=L,G=w;C<G;C+=3){const I=C,P=C+1,W=C+2;l=Cc(this,g,t,r,p,v,_,I,P,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),E=Math.min(m.count,M.start+M.count);for(let y=b,g=E;y<g;y+=3){const L=y,w=y+1,C=y+2;l=Cc(this,h,t,r,p,v,_,L,w,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Qy(s,t,i,r,l,c,h,d){let m;if(t.side===Nn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Za,d),m===null)return null;Ac.copy(d),Ac.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ac);return p<i.near||p>i.far?null:{distance:p,point:Ac.clone(),object:s}}function Cc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Mc),s.getVertexPosition(m,Ec),s.getVertexPosition(p,bc);const v=Qy(s,t,i,r,Mc,Ec,bc,cv);if(v){const _=new Q;yi.getBarycoord(cv,Mc,Ec,bc,_),l&&(v.uv=yi.getInterpolatedAttribute(l,d,m,p,_,new ce)),c&&(v.uv1=yi.getInterpolatedAttribute(c,d,m,p,_,new ce)),h&&(v.normal=yi.getInterpolatedAttribute(h,d,m,p,_,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Q,materialIndex:0};yi.getNormal(Mc,Ec,bc,x.normal),v.face=x,v.barycoord=_}return v}class Jo extends Ti{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],_=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new di(p,3)),this.setAttribute("normal",new di(v,3)),this.setAttribute("uv",new di(_,2));function b(E,y,g,L,w,C,G,I,P,W,U){const D=C/P,B=G/W,ot=C/2,ct=G/2,ft=I/2,pt=P+1,z=W+1;let K=0,Y=0;const xt=new Q;for(let Et=0;Et<z;Et++){const O=Et*B-ct;for(let et=0;et<pt;et++){const St=et*D-ot;xt[E]=St*L,xt[y]=O*w,xt[g]=ft,p.push(xt.x,xt.y,xt.z),xt[E]=0,xt[y]=0,xt[g]=I>0?1:-1,v.push(xt.x,xt.y,xt.z),_.push(et/P),_.push(1-Et/W),K+=1}}for(let Et=0;Et<W;Et++)for(let O=0;O<P;O++){const et=x+O+pt*Et,St=x+O+pt*(Et+1),Tt=x+(O+1)+pt*(Et+1),V=x+(O+1)+pt*Et;m.push(et,St,V),m.push(St,Tt,V),Y+=6}d.addGroup(M,Y,U),M+=Y,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Ln(s){const t={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)t[l]=r[l]}return t}function Jy(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function f_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Vc={clone:Os,merge:Ln};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends qc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Jy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h_ extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new Q,uv=new ce,fv=new ce;class ei extends h_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,uv,fv),i.subVectors(fv,uv)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(hh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Es=1;class eM extends Xn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(Ms,Es,t,i);l.layers=this.layers,this.add(l);const c=new ei(Ms,Es,t,i);c.layers=this.layers,this.add(c);const h=new ei(Ms,Es,t,i);h.layers=this.layers,this.add(h);const d=new ei(Ms,Es,t,i);d.layers=this.layers,this.add(d);const m=new ei(Ms,Es,t,i);m.layers=this.layers,this.add(m);const p=new ei(Ms,Es,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(_,x,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class d_ extends kn{constructor(t=[],i=Us,r,l,c,h,d,m,p,v){super(t,i,r,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nM extends bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new d_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Jo(5,5,5),c=new Rn({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:ua});c.uniforms.tEquirect.value=i;const h=new Vn(l,c),d=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Oi),new eM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Io extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const E of t.hand.values()){const y=i.getJointPose(E,r),g=this._getHandJoint(p,E);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=v.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Io;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class aM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ph=new Q,rM=new Q,sM=new fe;class yr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ph.subVectors(r,i).cross(rM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ph),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||sM.getNormalMatrix(t),l=this.coplanarPoint(Ph).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Yd,oM=new ce(.5,.5),Rc=new Q;class jd{constructor(t=new yr,i=new yr,r=new yr,l=new yr,c=new yr,h=new yr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Pi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],_=c[5],x=c[6],M=c[7],b=c[8],E=c[9],y=c[10],g=c[11],L=c[12],w=c[13],C=c[14],G=c[15];if(l[0].setComponents(p-h,M-v,g-b,G-L).normalize(),l[1].setComponents(p+h,M+v,g+b,G+L).normalize(),l[2].setComponents(p+d,M+_,g+E,G+w).normalize(),l[3].setComponents(p-d,M-_,g-E,G-w).normalize(),r)l[4].setComponents(m,x,y,C).normalize(),l[5].setComponents(p-m,M-x,g-y,G-C).normalize();else if(l[4].setComponents(p-m,M-x,g-y,G-C).normalize(),i===Pi)l[5].setComponents(p+m,M+x,g+y,G+C).normalize();else if(i===Hc)l[5].setComponents(m,x,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=oM.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Rc.x=l.normal.x>0?t.max.x:t.min.x,Rc.y=l.normal.y>0?t.max.y:t.min.y,Rc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p_ extends kn{constructor(t,i,r=Cr,l,c,h,d=Ei,m=Ei,p,v=ko,_=1){if(v!==ko&&v!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yc extends Ti{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,_=t/d,x=i/m,M=[],b=[],E=[],y=[];for(let g=0;g<v;g++){const L=g*x-h;for(let w=0;w<p;w++){const C=w*_-c;b.push(C,-L,0),E.push(0,0,1),y.push(w/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let L=0;L<d;L++){const w=L+p*g,C=L+p*(g+1),G=L+1+p*(g+1),I=L+1+p*g;M.push(w,C,I),M.push(C,G,I)}this.setIndex(M),this.setAttribute("position",new di(b,3)),this.setAttribute("normal",new di(E,3)),this.setAttribute("uv",new di(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}class $o extends Ti{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const v=[],_=new Q,x=new Q,M=[],b=[],E=[],y=[];for(let g=0;g<=r;g++){const L=[],w=g/r;let C=0;g===0&&h===0?C=.5/i:g===r&&m===Math.PI&&(C=-.5/i);for(let G=0;G<=i;G++){const I=G/i;_.x=-t*Math.cos(l+I*c)*Math.sin(h+w*d),_.y=t*Math.cos(h+w*d),_.z=t*Math.sin(l+I*c)*Math.sin(h+w*d),b.push(_.x,_.y,_.z),x.copy(_).normalize(),E.push(x.x,x.y,x.z),y.push(I+C,1-w),L.push(p++)}v.push(L)}for(let g=0;g<r;g++)for(let L=0;L<i;L++){const w=v[g][L+1],C=v[g][L],G=v[g+1][L],I=v[g+1][L+1];(g!==0||h>0)&&M.push(w,C,I),(g!==r-1||m<Math.PI)&&M.push(C,G,I)}this.setIndex(M),this.setAttribute("position",new di(b,3)),this.setAttribute("normal",new di(E,3)),this.setAttribute("uv",new di(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lM extends qc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cM extends qc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class m_ extends Xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const zh=new $e,hv=new Q,dv=new Q;class uM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;hv.setFromMatrixPosition(t.matrixWorld),i.position.copy(hv),dv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(dv),i.updateMatrixWorld(),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pv=new $e,Bo=new Q,Bh=new Q;class fM extends uM{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Bo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Bo),Bh.copy(r.position),Bh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Bh),r.updateMatrixWorld(),l.makeTranslation(-Bo.x,-Bo.y,-Bo.z),pv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pv,r.coordinateSystem,r.reversedDepth)}}class Fh extends m_{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class g_ extends h_{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hM extends m_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class dM extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function mv(s,t,i,r){const l=mM(r);switch(i){case $v:return s*t;case e_:return s*t/l.components*l.byteLength;case kd:return s*t/l.components*l.byteLength;case n_:return s*t*2/l.components*l.byteLength;case Xd:return s*t*2/l.components*l.byteLength;case t_:return s*t*3/l.components*l.byteLength;case Mi:return s*t*4/l.components*l.byteLength;case Wd:return s*t*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(s,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(s,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case yd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case bd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Td:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zc:case wd:case Dd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case i_:case Ud:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ld:case Nd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mM(s){switch(s){case Bi:case Kv:return{byteLength:1,components:1};case Go:case Qv:case fa:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case Cr:case Hd:case ca:return{byteLength:4,components:1};case Jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);function v_(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function gM(s){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const v=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,v);else{_.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<_.length;M++){const b=_[x],E=_[M];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,_[x]=E)}_.length=x+1;for(let M=0,b=_.length;M<b;M++){const E=_[M];s.bufferSubData(p,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ib=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ub=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:vM,alphahash_pars_fragment:_M,alphamap_fragment:xM,alphamap_pars_fragment:SM,alphatest_fragment:yM,alphatest_pars_fragment:MM,aomap_fragment:EM,aomap_pars_fragment:bM,batching_pars_vertex:TM,batching_vertex:AM,begin_vertex:CM,beginnormal_vertex:RM,bsdfs:wM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:LM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:PM,color_fragment:zM,color_pars_fragment:BM,color_pars_vertex:FM,color_vertex:IM,common:HM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:VM,displacementmap_pars_vertex:kM,displacementmap_vertex:XM,emissivemap_fragment:WM,emissivemap_pars_fragment:qM,colorspace_fragment:YM,colorspace_pars_fragment:jM,envmap_fragment:ZM,envmap_common_pars_fragment:KM,envmap_pars_fragment:QM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:cE,envmap_vertex:$M,fog_vertex:tE,fog_pars_vertex:eE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:oE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:fE,lights_phong_fragment:hE,lights_phong_pars_fragment:dE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:vE,lights_fragment_end:_E,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:bE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:RE,morphinstance_vertex:wE,morphcolor_vertex:DE,morphnormal_vertex:UE,morphtarget_pars_vertex:LE,morphtarget_vertex:NE,normal_fragment_begin:OE,normal_fragment_maps:PE,normal_pars_fragment:zE,normal_pars_vertex:BE,normal_vertex:FE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:kE,opaque_fragment:XE,packing:WE,premultiplied_alpha_fragment:qE,project_vertex:YE,dithering_fragment:jE,dithering_pars_fragment:ZE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:$E,shadowmap_vertex:tb,shadowmask_pars_fragment:eb,skinbase_vertex:nb,skinning_pars_vertex:ib,skinning_vertex:ab,skinnormal_vertex:rb,specularmap_fragment:sb,specularmap_pars_fragment:ob,tonemapping_fragment:lb,tonemapping_pars_fragment:cb,transmission_fragment:ub,transmission_pars_fragment:fb,uv_pars_fragment:hb,uv_pars_vertex:db,uv_vertex:pb,worldpos_vertex:mb,background_vert:gb,background_frag:vb,backgroundCube_vert:_b,backgroundCube_frag:xb,cube_vert:Sb,cube_frag:yb,depth_vert:Mb,depth_frag:Eb,distanceRGBA_vert:bb,distanceRGBA_frag:Tb,equirect_vert:Ab,equirect_frag:Cb,linedashed_vert:Rb,linedashed_frag:wb,meshbasic_vert:Db,meshbasic_frag:Ub,meshlambert_vert:Lb,meshlambert_frag:Nb,meshmatcap_vert:Ob,meshmatcap_frag:Pb,meshnormal_vert:zb,meshnormal_frag:Bb,meshphong_vert:Fb,meshphong_frag:Ib,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Vb,meshtoon_frag:kb,points_vert:Xb,points_frag:Wb,shadow_vert:qb,shadow_frag:Yb,sprite_vert:jb,sprite_frag:Zb},Ot={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Li={basic:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Ln([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Ln([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Ln([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Ln([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Ln([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Ln([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Ln([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Ln([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Ln([Ot.common,Ot.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Ln([Ot.lights,Ot.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Li.physical={uniforms:Ln([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const wc={r:0,b:0,g:0},xr=new pa,Kb=new $e;function Qb(s,t,i,r,l,c,h){const d=new Ae(0);let m=c===!0?0:1,p,v,_=null,x=0,M=null;function b(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?i:t).get(C)),C}function E(w){let C=!1;const G=b(w);G===null?g(d,m):G&&G.isColor&&(g(G,1),C=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(w,C){const G=b(C);G&&(G.isCubeTexture||G.mapping===Wc)?(v===void 0&&(v=new Vn(new Jo(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Os(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),xr.copy(C.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(xr)),v.material.toneMapped=we.getTransfer(G.colorSpace)!==Ie,(_!==G||x!==G.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=G,x=G.version,M=s.toneMapping),v.layers.enableAll(),w.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Vn(new Yc(2,2),new Rn({name:"BackgroundMaterial",uniforms:Os(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=we.getTransfer(G.colorSpace)!==Ie,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||x!==G.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=G,x=G.version,M=s.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function g(w,C){w.getRGB(wc,f_(s)),r.buffers.color.setClear(wc.r,wc.g,wc.b,C,h)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,C=1){d.set(w),m=C,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,g(d,m)},render:E,addToRenderList:y,dispose:L}}function Jb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(D,B,ot,ct,ft){let pt=!1;const z=_(ct,ot,B);c!==z&&(c=z,p(c.object)),pt=M(D,ct,ot,ft),pt&&b(D,ct,ot,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,C(D,B,ot,ct),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function v(D){return s.deleteVertexArray(D)}function _(D,B,ot){const ct=ot.wireframe===!0;let ft=r[D.id];ft===void 0&&(ft={},r[D.id]=ft);let pt=ft[B.id];pt===void 0&&(pt={},ft[B.id]=pt);let z=pt[ct];return z===void 0&&(z=x(m()),pt[ct]=z),z}function x(D){const B=[],ot=[],ct=[];for(let ft=0;ft<i;ft++)B[ft]=0,ot[ft]=0,ct[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ot,attributeDivisors:ct,object:D,attributes:{},index:null}}function M(D,B,ot,ct){const ft=c.attributes,pt=B.attributes;let z=0;const K=ot.getAttributes();for(const Y in K)if(K[Y].location>=0){const Et=ft[Y];let O=pt[Y];if(O===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),Et===void 0||Et.attribute!==O||O&&Et.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==ct}function b(D,B,ot,ct){const ft={},pt=B.attributes;let z=0;const K=ot.getAttributes();for(const Y in K)if(K[Y].location>=0){let Et=pt[Y];Et===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Et=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Et=D.instanceColor));const O={};O.attribute=Et,Et&&Et.data&&(O.data=Et.data),ft[Y]=O,z++}c.attributes=ft,c.attributesNum=z,c.index=ct}function E(){const D=c.newAttributes;for(let B=0,ot=D.length;B<ot;B++)D[B]=0}function y(D){g(D,0)}function g(D,B){const ot=c.newAttributes,ct=c.enabledAttributes,ft=c.attributeDivisors;ot[D]=1,ct[D]===0&&(s.enableVertexAttribArray(D),ct[D]=1),ft[D]!==B&&(s.vertexAttribDivisor(D,B),ft[D]=B)}function L(){const D=c.newAttributes,B=c.enabledAttributes;for(let ot=0,ct=B.length;ot<ct;ot++)B[ot]!==D[ot]&&(s.disableVertexAttribArray(ot),B[ot]=0)}function w(D,B,ot,ct,ft,pt,z){z===!0?s.vertexAttribIPointer(D,B,ot,ft,pt):s.vertexAttribPointer(D,B,ot,ct,ft,pt)}function C(D,B,ot,ct){E();const ft=ct.attributes,pt=ot.getAttributes(),z=B.defaultAttributeValues;for(const K in pt){const Y=pt[K];if(Y.location>=0){let xt=ft[K];if(xt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const Et=xt.normalized,O=xt.itemSize,et=t.get(xt);if(et===void 0)continue;const St=et.buffer,Tt=et.type,V=et.bytesPerElement,at=Tt===s.INT||Tt===s.UNSIGNED_INT||xt.gpuType===Hd;if(xt.isInterleavedBufferAttribute){const lt=xt.data,Ut=lt.stride,Dt=xt.offset;if(lt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<Y.locationSize;Zt++)g(Y.location+Zt,lt.meshPerAttribute);D.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Zt=0;Zt<Y.locationSize;Zt++)y(Y.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Zt=0;Zt<Y.locationSize;Zt++)w(Y.location+Zt,O/Y.locationSize,Tt,Et,Ut*V,(Dt+O/Y.locationSize*Zt)*V,at)}else{if(xt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)g(Y.location+lt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let lt=0;lt<Y.locationSize;lt++)y(Y.location+lt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let lt=0;lt<Y.locationSize;lt++)w(Y.location+lt,O/Y.locationSize,Tt,Et,O*V,O/Y.locationSize*lt*V,at)}}else if(z!==void 0){const Et=z[K];if(Et!==void 0)switch(Et.length){case 2:s.vertexAttrib2fv(Y.location,Et);break;case 3:s.vertexAttrib3fv(Y.location,Et);break;case 4:s.vertexAttrib4fv(Y.location,Et);break;default:s.vertexAttrib1fv(Y.location,Et)}}}}L()}function G(){W();for(const D in r){const B=r[D];for(const ot in B){const ct=B[ot];for(const ft in ct)v(ct[ft].object),delete ct[ft];delete B[ot]}delete r[D]}}function I(D){if(r[D.id]===void 0)return;const B=r[D.id];for(const ot in B){const ct=B[ot];for(const ft in ct)v(ct[ft].object),delete ct[ft];delete B[ot]}delete r[D.id]}function P(D){for(const B in r){const ot=r[B];if(ot[D.id]===void 0)continue;const ct=ot[D.id];for(const ft in ct)v(ct[ft].object),delete ct[ft];delete ot[D.id]}}function W(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:U,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:y,disableUnusedAttributes:L}}function $b(s,t,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function d(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=v[b];i.update(M,r,1)}function m(p,v,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,_);let b=0;for(let E=0;E<_;E++)b+=v[E]*x[E];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function t1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Mi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const W=P===fa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Bi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!W)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:C,vertexTextures:G,maxSamples:I}}function e1(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new yr,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=v(_,x,0)},this.setState=function(_,x,M){const b=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,g=s.get(_);if(!l||b===null||b.length===0||c&&!y)c?v(null):p();else{const L=c?0:r,w=L*4;let C=g.clippingState||null;m.value=C,C=v(b,x,w,M);for(let G=0;G!==w;++G)C[G]=i[G];g.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,x,M,b){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=m.value,b!==!0||y===null){const g=M+E*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<g)&&(y=new Float32Array(g));for(let w=0,C=M;w!==E;++w,C+=4)h.copy(_[w]).applyMatrix4(L,d),h.normal.toArray(y,C),y[C+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function n1(s){let t=new WeakMap;function i(h,d){return d===ad?h.mapping=Us:d===rd&&(h.mapping=Ls),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===rd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new nM(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ts=4,gv=[.125,.215,.35,.446,.526,.582],br=20,Ih=new g_,vv=new Ae;let Hh=null,Gh=0,Vh=0,kh=!1;const Mr=(1+Math.sqrt(5))/2,bs=1/Mr,_v=[new Q(-Mr,bs,0),new Q(Mr,bs,0),new Q(-bs,0,Mr),new Q(bs,0,Mr),new Q(0,Mr,-bs),new Q(0,Mr,bs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],i1=new Q;class xv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=i1}=c;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=kh,t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:fa,format:Mi,colorSpace:Ns,depthBuffer:!1},l=Sv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a1(c)),this._blurMaterial=r1(c,t,i)}return l}_compileMaterial(t){const i=new Vn(this._lodPlanes[0],t);this._renderer.compile(i,Ih)}_sceneToCubeUV(t,i,r,l,c){const m=new ei(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(vv),_.toneMapping=ja,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const E=new Qo({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),y=new Vn(new Jo,E);let g=!1;const L=t.background;L?L.isColor&&(E.color.copy(L),t.background=null,g=!0):(E.color.copy(vv),g=!0);for(let w=0;w<6;w++){const C=w%3;C===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[w],c.y,c.z)):C===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[w]));const G=this._cubeSize;Dc(l,C*G,w>2?G:0,G,G),_.setRenderTarget(l),g&&_.render(y,m),_.render(t,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Us||t.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Vn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Ih)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=_v[(l-c-1)%_v.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Vn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*br-1),E=c/b,y=isFinite(c)?1+Math.floor(v*E):br;y>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${br}`);const g=[];let L=0;for(let P=0;P<br;++P){const W=P/E,U=Math.exp(-W*W/2);g.push(U),P===0?L+=U:P<y&&(L+=2*U)}for(let P=0;P<g.length;P++)g[P]=g[P]/L;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:w}=this;x.dTheta.value=b,x.mipInt.value=w-r;const C=this._sizeLods[l],G=3*C*(l>w-Ts?l-w+Ts:0),I=4*(this._cubeSize-C);Dc(i,G,I,3*C,2*C),m.setRenderTarget(i),m.render(_,Ih)}}function a1(s){const t=[],i=[],r=[];let l=s;const c=s-Ts+1+gv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-Ts?m=gv[h-s+Ts-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,_=1+p,x=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,b=6,E=3,y=2,g=1,L=new Float32Array(E*b*M),w=new Float32Array(y*b*M),C=new Float32Array(g*b*M);for(let I=0;I<M;I++){const P=I%3*2/3-1,W=I>2?0:-1,U=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];L.set(U,E*b*I),w.set(x,y*b*I);const D=[I,I,I,I,I,I];C.set(D,g*b*I)}const G=new Ti;G.setAttribute("position",new hn(L,E)),G.setAttribute("uv",new hn(w,y)),G.setAttribute("faceIndex",new hn(C,g)),t.push(G),l>Ts&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Sv(s,t,i){const r=new bi(s,t,i);return r.texture.mapping=Wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function r1(s,t,i){const r=new Float32Array(br),l=new Q(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function yv(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Mv(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ad||m===rd,v=m===Us||m===Ls;if(p||v){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new xv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new xv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function o1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Cs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function l1(s,t,i,r){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,b=_.attributes.position;let E=0;if(M!==null){const L=M.array;E=M.version;for(let w=0,C=L.length;w<C;w+=3){const G=L[w+0],I=L[w+1],P=L[w+2];x.push(G,I,I,P,P,G)}}else if(b!==void 0){const L=b.array;E=b.version;for(let w=0,C=L.length/3-1;w<C;w+=3){const G=w+0,I=w+1,P=w+2;x.push(G,I,I,P,P,G)}}else return;const y=new(r_(x)?u_:c_)(x,1);y.version=E;const g=c.get(_);g&&t.remove(g),c.set(_,y)}function v(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function c1(s,t,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*h,b),i.update(M,r,b))}function v(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let y=0;for(let g=0;g<b;g++)y+=M[g];i.update(y,r,1)}function _(x,M,b,E){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],E[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,E,0,b);let g=0;for(let L=0;L<b;L++)g+=M[L]*E[L];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function u1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function f1(s,t,i){const r=new WeakMap,l=new He;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let D=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),E===!0&&(C=2),y===!0&&(C=3);let G=d.attributes.position.count*C,I=1;G>t.maxTextureSize&&(I=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const P=new Float32Array(G*I*4*_),W=new s_(P,G,I,_);W.type=ca,W.needsUpdate=!0;const U=C*4;for(let B=0;B<_;B++){const ot=g[B],ct=L[B],ft=w[B],pt=G*I*4*B;for(let z=0;z<ot.count;z++){const K=z*U;b===!0&&(l.fromBufferAttribute(ot,z),P[pt+K+0]=l.x,P[pt+K+1]=l.y,P[pt+K+2]=l.z,P[pt+K+3]=0),E===!0&&(l.fromBufferAttribute(ct,z),P[pt+K+4]=l.x,P[pt+K+5]=l.y,P[pt+K+6]=l.z,P[pt+K+7]=0),y===!0&&(l.fromBufferAttribute(ft,z),P[pt+K+8]=l.x,P[pt+K+9]=l.y,P[pt+K+10]=l.z,P[pt+K+11]=ft.itemSize===4?l.w:1)}}x={count:_,texture:W,size:new ce(G,I)},r.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const E=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function h1(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const __=new kn,Ev=new p_(1,1),x_=new s_,S_=new Iy,y_=new d_,bv=[],Tv=[],Av=new Float32Array(16),Cv=new Float32Array(9),Rv=new Float32Array(4);function Fs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=bv[l];if(c===void 0&&(c=new Float32Array(l),bv[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function jc(s,t){let i=Tv[t];i===void 0&&(i=new Int32Array(t),Tv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function d1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function p1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),pn(i,t)}}function m1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),pn(i,t)}}function g1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),pn(i,t)}}function v1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Rv.set(r),s.uniformMatrix2fv(this.addr,!1,Rv),pn(i,r)}}function _1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Cv.set(r),s.uniformMatrix3fv(this.addr,!1,Cv),pn(i,r)}}function x1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Av.set(r),s.uniformMatrix4fv(this.addr,!1,Av),pn(i,r)}}function S1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),pn(i,t)}}function M1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),pn(i,t)}}function E1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),pn(i,t)}}function b1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function T1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),pn(i,t)}}function A1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),pn(i,t)}}function C1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),pn(i,t)}}function R1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Ev.compareFunction=a_,c=Ev):c=__,i.setTexture2D(t||c,l)}function w1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||S_,l)}function D1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||y_,l)}function U1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||x_,l)}function L1(s){switch(s){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return v1;case 35675:return _1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return y1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return b1;case 36294:return T1;case 36295:return A1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return U1}}function N1(s,t){s.uniform1fv(this.addr,t)}function O1(s,t){const i=Fs(t,this.size,2);s.uniform2fv(this.addr,i)}function P1(s,t){const i=Fs(t,this.size,3);s.uniform3fv(this.addr,i)}function z1(s,t){const i=Fs(t,this.size,4);s.uniform4fv(this.addr,i)}function B1(s,t){const i=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function F1(s,t){const i=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function I1(s,t){const i=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function H1(s,t){s.uniform1iv(this.addr,t)}function G1(s,t){s.uniform2iv(this.addr,t)}function V1(s,t){s.uniform3iv(this.addr,t)}function k1(s,t){s.uniform4iv(this.addr,t)}function X1(s,t){s.uniform1uiv(this.addr,t)}function W1(s,t){s.uniform2uiv(this.addr,t)}function q1(s,t){s.uniform3uiv(this.addr,t)}function Y1(s,t){s.uniform4uiv(this.addr,t)}function j1(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||__,c[h])}function Z1(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||S_,c[h])}function K1(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||y_,c[h])}function Q1(s,t,i){const r=this.cache,l=t.length,c=jc(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||x_,c[h])}function J1(s){switch(s){case 5126:return N1;case 35664:return O1;case 35665:return P1;case 35666:return z1;case 35674:return B1;case 35675:return F1;case 35676:return I1;case 5124:case 35670:return H1;case 35667:case 35671:return G1;case 35668:case 35672:return V1;case 35669:case 35673:return k1;case 5125:return X1;case 36294:return W1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Q1}}class $1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=L1(i.type)}}class tT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=J1(i.type)}}class eT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function wv(s,t){s.seq.push(t),s.map[t.id]=t}function nT(s,t,i){const r=s.name,l=r.length;for(Xh.lastIndex=0;;){const c=Xh.exec(r),h=Xh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){wv(i,p===void 0?new $1(d,s,t):new tT(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new eT(d),wv(i,_)),i=_}}}class Bc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);nT(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Dv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const iT=37297;let aT=0;function rT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Uv=new fe;function sT(s){we._getMatrix(Uv,we.workingColorSpace,s);const t=`mat3( ${Uv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(s)){case Ic:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+rT(s.getShaderSource(t),d)}else return c}function oT(s,t){const i=sT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function lT(s,t){let i;switch(t){case hy:i="Linear";break;case dy:i="Reinhard";break;case py:i="Cineon";break;case my:i="ACESFilmic";break;case vy:i="AgX";break;case _y:i="Neutral";break;case gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new Q;function cT(){we.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function fT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function hT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Ho(s){return s!==""}function Nv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ov(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(s){return s.replace(dT,mT)}const pT=new Map;function mT(s,t){let i=he[t];if(i===void 0){const r=pT.get(t);if(r!==void 0)i=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Pd(i)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(s){return s.replace(gT,vT)}function vT(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _T(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===WS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function xT(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ls:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ST(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ls&&(t="ENVMAP_MODE_REFRACTION"),t}function yT(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jv:t="ENVMAP_BLENDING_MULTIPLY";break;case uy:t="ENVMAP_BLENDING_MIX";break;case fy:t="ENVMAP_BLENDING_ADD";break}return t}function MT(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ET(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=_T(i),p=xT(i),v=ST(i),_=yT(i),x=MT(i),M=uT(i),b=fT(c),E=l.createProgram();let y,g,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(y=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?he.tonemapping_pars_fragment:"",i.toneMapping!==ja?lT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,oT("linearToOutputTexel",i.outputColorSpace),cT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=Pd(h),h=Nv(h,i),h=Ov(h,i),d=Pd(d),d=Nv(d,i),d=Ov(d,i),h=Pv(h),d=Pv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=L+y+h,C=L+g+d,G=Dv(l,l.VERTEX_SHADER,w),I=Dv(l,l.FRAGMENT_SHADER,C);l.attachShader(E,G),l.attachShader(E,I),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function P(B){if(s.debug.checkShaderErrors){const ot=l.getProgramInfoLog(E)||"",ct=l.getShaderInfoLog(G)||"",ft=l.getShaderInfoLog(I)||"",pt=ot.trim(),z=ct.trim(),K=ft.trim();let Y=!0,xt=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,E,G,I);else{const Et=Lv(l,G,"vertex"),O=Lv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+pt+`
`+Et+`
`+O)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(z===""||K==="")&&(xt=!1);xt&&(B.diagnostics={runnable:Y,programLog:pt,vertexShader:{log:z,prefix:y},fragmentShader:{log:K,prefix:g}})}l.deleteShader(G),l.deleteShader(I),W=new Bc(l,E),U=hT(l,E)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(E,iT)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aT++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=G,this.fragmentShader=I,this}let bT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new AT(t),i.set(t,r)),r}}class AT{constructor(t){this.id=bT++,this.code=t,this.usedTimes=0}}function CT(s,t,i,r,l,c,h){const d=new o_,m=new TT,p=new Set,v=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,D,B,ot,ct){const ft=ot.fog,pt=ct.geometry,z=U.isMeshStandardMaterial?ot.environment:null,K=(U.isMeshStandardMaterial?i:t).get(U.envMap||z),Y=K&&K.mapping===Wc?K.image.height:null,xt=b[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const Et=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,O=Et!==void 0?Et.length:0;let et=0;pt.morphAttributes.position!==void 0&&(et=1),pt.morphAttributes.normal!==void 0&&(et=2),pt.morphAttributes.color!==void 0&&(et=3);let St,Tt,V,at;if(xt){const be=Li[xt];St=be.vertexShader,Tt=be.fragmentShader}else St=U.vertexShader,Tt=U.fragmentShader,m.update(U),V=m.getVertexShaderID(U),at=m.getFragmentShaderID(U);const lt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),Dt=ct.isInstancedMesh===!0,Zt=ct.isBatchedMesh===!0,oe=!!U.map,ee=!!U.matcap,H=!!K,pe=!!U.aoMap,qt=!!U.lightMap,me=!!U.bumpMap,Kt=!!U.normalMap,Ge=!!U.displacementMap,Ft=!!U.emissiveMap,re=!!U.metalnessMap,Ke=!!U.roughnessMap,je=U.anisotropy>0,N=U.clearcoat>0,T=U.dispersion>0,tt=U.iridescence>0,dt=U.sheen>0,yt=U.transmission>0,ut=je&&!!U.anisotropyMap,Yt=N&&!!U.clearcoatMap,Ct=N&&!!U.clearcoatNormalMap,Xt=N&&!!U.clearcoatRoughnessMap,Wt=tt&&!!U.iridescenceMap,bt=tt&&!!U.iridescenceThicknessMap,Rt=dt&&!!U.sheenColorMap,jt=dt&&!!U.sheenRoughnessMap,zt=!!U.specularMap,Lt=!!U.specularColorMap,se=!!U.specularIntensityMap,X=yt&&!!U.transmissionMap,At=yt&&!!U.thicknessMap,wt=!!U.gradientMap,Bt=!!U.alphaMap,Mt=U.alphaTest>0,vt=!!U.alphaHash,It=!!U.extensions;let ie=ja;U.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ie=s.toneMapping);const Ne={shaderID:xt,shaderType:U.type,shaderName:U.name,vertexShader:St,fragmentShader:Tt,defines:U.defines,customVertexShaderID:V,customFragmentShaderID:at,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Zt,batchingColor:Zt&&ct._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&ct.instanceColor!==null,instancingMorph:Dt&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ns,alphaToCoverage:!!U.alphaToCoverage,map:oe,matcap:ee,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:Y,aoMap:pe,lightMap:qt,bumpMap:me,normalMap:Kt,displacementMap:x&&Ge,emissiveMap:Ft,normalMapObjectSpace:Kt&&U.normalMapType===Ey,normalMapTangentSpace:Kt&&U.normalMapType===My,metalnessMap:re,roughnessMap:Ke,anisotropy:je,anisotropyMap:ut,clearcoat:N,clearcoatMap:Yt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Xt,dispersion:T,iridescence:tt,iridescenceMap:Wt,iridescenceThicknessMap:bt,sheen:dt,sheenColorMap:Rt,sheenRoughnessMap:jt,specularMap:zt,specularColorMap:Lt,specularIntensityMap:se,transmission:yt,transmissionMap:X,thicknessMap:At,gradientMap:wt,opaque:U.transparent===!1&&U.blending===As&&U.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:vt,combine:U.combine,mapUv:oe&&E(U.map.channel),aoMapUv:pe&&E(U.aoMap.channel),lightMapUv:qt&&E(U.lightMap.channel),bumpMapUv:me&&E(U.bumpMap.channel),normalMapUv:Kt&&E(U.normalMap.channel),displacementMapUv:Ge&&E(U.displacementMap.channel),emissiveMapUv:Ft&&E(U.emissiveMap.channel),metalnessMapUv:re&&E(U.metalnessMap.channel),roughnessMapUv:Ke&&E(U.roughnessMap.channel),anisotropyMapUv:ut&&E(U.anisotropyMap.channel),clearcoatMapUv:Yt&&E(U.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&E(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&E(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&E(U.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&E(U.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&E(U.sheenColorMap.channel),sheenRoughnessMapUv:jt&&E(U.sheenRoughnessMap.channel),specularMapUv:zt&&E(U.specularMap.channel),specularColorMapUv:Lt&&E(U.specularColorMap.channel),specularIntensityMapUv:se&&E(U.specularIntensityMap.channel),transmissionMapUv:X&&E(U.transmissionMap.channel),thicknessMapUv:At&&E(U.thicknessMap.channel),alphaMapUv:Bt&&E(U.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(Kt||je),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!pt.attributes.uv&&(oe||Bt),fog:!!ft,useFog:U.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ut,skinning:ct.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:et,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:oe&&U.map.isVideoTexture===!0&&we.getTransfer(U.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ft&&U.emissiveMap.isVideoTexture===!0&&we.getTransfer(U.emissiveMap.colorSpace)===Ie,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ni,flipSided:U.side===Nn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:It&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&U.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function g(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const B in U.defines)D.push(B),D.push(U.defines[B]);return U.isRawShaderMaterial===!1&&(L(D,U),w(D,U),D.push(s.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function L(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function w(U,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),U.push(d.mask)}function C(U){const D=b[U.type];let B;if(D){const ot=Li[D];B=Vc.clone(ot.uniforms)}else B=U.uniforms;return B}function G(U,D){let B;for(let ot=0,ct=v.length;ot<ct;ot++){const ft=v[ot];if(ft.cacheKey===D){B=ft,++B.usedTimes;break}}return B===void 0&&(B=new ET(s,D,U,c),v.push(B)),B}function I(U){if(--U.usedTimes===0){const D=v.indexOf(U);v[D]=v[v.length-1],v.pop(),U.destroy()}}function P(U){m.remove(U)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:G,releaseProgram:I,releaseShaderCache:P,programs:v,dispose:W}}function RT(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function wT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Bv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Fv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,x,M,b,E,y){let g=s[t];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:b,renderOrder:_.renderOrder,z:E,group:y},s[t]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=b,g.renderOrder=_.renderOrder,g.z=E,g.group=y),t++,g}function d(_,x,M,b,E,y){const g=h(_,x,M,b,E,y);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(_,x,M,b,E,y){const g=h(_,x,M,b,E,y);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,x){i.length>1&&i.sort(_||wT),r.length>1&&r.sort(x||Bv),l.length>1&&l.sort(x||Bv)}function v(){for(let _=t,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function DT(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Fv,s.set(r,[h])):l>=c.length?(h=new Fv,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function UT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new Ae};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function LT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let NT=0;function OT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PT(s){const t=new UT,i=LT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,c=new $e,h=new $e;function d(p){let v=0,_=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,E=0,y=0,g=0,L=0,w=0,C=0,G=0,I=0,P=0;p.sort(OT);for(let U=0,D=p.length;U<D;U++){const B=p[U],ot=B.color,ct=B.intensity,ft=B.distance,pt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=ot.r*ct,_+=ot.g*ct,x+=ot.b*ct;else if(B.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(B.sh.coefficients[z],ct);P++}else if(B.isDirectionalLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=pt,r.directionalShadowMatrix[M]=B.shadow.matrix,L++}r.directional[M]=z,M++}else if(B.isSpotLight){const z=t.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(ot).multiplyScalar(ct),z.distance=ft,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,r.spot[E]=z;const K=B.shadow;if(B.map&&(r.spotLightMap[G]=B.map,G++,K.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[E]=K.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[E]=Y,r.spotShadowMap[E]=pt,C++}E++}else if(B.isRectAreaLight){const z=t.get(B);z.color.copy(ot).multiplyScalar(ct),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=z,y++}else if(B.isPointLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const K=B.shadow,Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=pt,r.pointShadowMatrix[b]=B.shadow.matrix,w++}r.point[b]=z,b++}else if(B.isHemisphereLight){const z=t.get(B);z.skyColor.copy(B.color).multiplyScalar(ct),z.groundColor.copy(B.groundColor).multiplyScalar(ct),r.hemi[g]=z,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==M||W.pointLength!==b||W.spotLength!==E||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==L||W.numPointShadows!==w||W.numSpotShadows!==C||W.numSpotMaps!==G||W.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=y,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+G-I,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,W.directionalLength=M,W.pointLength=b,W.spotLength=E,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=L,W.numPointShadows=w,W.numSpotShadows=C,W.numSpotMaps=G,W.numLightProbes=P,r.version=NT++)}function m(p,v){let _=0,x=0,M=0,b=0,E=0;const y=v.matrixWorldInverse;for(let g=0,L=p.length;g<L;g++){const w=p[g];if(w.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),_++}else if(w.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(w.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),h.identity(),c.copy(w.matrixWorld),c.premultiply(y),h.extractRotation(c),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),b++}else if(w.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),x++}else if(w.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(y),E++}}}return{setup:d,setupView:m,state:r}}function Iv(s){const t=new PT(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function zT(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Iv(s),t.set(l,[d])):c>=h.length?(d=new Iv(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const BT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IT(s,t,i){let r=new jd;const l=new ce,c=new ce,h=new He,d=new lM({depthPacking:yy}),m=new cM,p={},v=i.maxTextureSize,_={[Za]:Nn,[Nn]:Za,[Ni]:Ni},x=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:BT,fragmentShader:FT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ti;b.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Vn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let g=this.type;this.render=function(I,P,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const U=s.getRenderTarget(),D=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ot=s.state;ot.setBlending(ua),ot.buffers.depth.getReversed()?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const ct=g!==oa&&this.type===oa,ft=g===oa&&this.type!==oa;for(let pt=0,z=I.length;pt<z;pt++){const K=I[pt],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||ct===!0||ft===!0){const O=this.type!==oa?{minFilter:Ei,magFilter:Ei}:{};Y.map!==null&&Y.map.dispose(),Y.map=new bi(l.x,l.y,O),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const Et=Y.getViewportCount();for(let O=0;O<Et;O++){const et=Y.getViewport(O);h.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),ot.viewport(h),Y.updateMatrices(K,O),r=Y.getFrustum(),C(P,W,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===oa&&L(Y,W),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(U,D,B)};function L(I,P){const W=t.update(E);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bi(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,W,x,E,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,W,M,E,null)}function w(I,P,W,U){let D=null;const B=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)D=B;else if(D=W.isPointLight===!0?m:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ot=D.uuid,ct=P.uuid;let ft=p[ot];ft===void 0&&(ft={},p[ot]=ft);let pt=ft[ct];pt===void 0&&(pt=D.clone(),ft[ct]=pt,P.addEventListener("dispose",G)),D=pt}if(D.visible=P.visible,D.wireframe=P.wireframe,U===oa?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:_[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,W.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ot=s.properties.get(D);ot.light=W}return D}function C(I,P,W,U,D){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===oa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const ct=t.update(I),ft=I.material;if(Array.isArray(ft)){const pt=ct.groups;for(let z=0,K=pt.length;z<K;z++){const Y=pt[z],xt=ft[Y.materialIndex];if(xt&&xt.visible){const Et=w(I,xt,U,D);I.onBeforeShadow(s,I,P,W,ct,Et,Y),s.renderBufferDirect(W,null,ct,Et,I,Y),I.onAfterShadow(s,I,P,W,ct,Et,Y)}}}else if(ft.visible){const pt=w(I,ft,U,D);I.onBeforeShadow(s,I,P,W,ct,pt,null),s.renderBufferDirect(W,null,ct,pt,I,null),I.onAfterShadow(s,I,P,W,ct,pt,null)}}const ot=I.children;for(let ct=0,ft=ot.length;ct<ft;ct++)C(ot[ct],P,W,U,D)}function G(I){I.target.removeEventListener("dispose",G);for(const W in p){const U=p[W],D=I.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const HT={[Qh]:Jh,[$h]:nd,[td]:id,[Ds]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:Ds};function GT(s,t){function i(){let X=!1;const At=new He;let wt=null;const Bt=new He(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!X&&(s.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,vt,It,ie,Ne){Ne===!0&&(Mt*=ie,vt*=ie,It*=ie),At.set(Mt,vt,It,ie),Bt.equals(At)===!1&&(s.clearColor(Mt,vt,It,ie),Bt.copy(At))},reset:function(){X=!1,wt=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,At=!1,wt=null,Bt=null,Mt=null;return{setReversed:function(vt){if(At!==vt){const It=t.get("EXT_clip_control");vt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),At=vt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return At},setTest:function(vt){vt?lt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(vt){wt!==vt&&!X&&(s.depthMask(vt),wt=vt)},setFunc:function(vt){if(At&&(vt=HT[vt]),Bt!==vt){switch(vt){case Qh:s.depthFunc(s.NEVER);break;case Jh:s.depthFunc(s.ALWAYS);break;case $h:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case td:s.depthFunc(s.EQUAL);break;case ed:s.depthFunc(s.GEQUAL);break;case nd:s.depthFunc(s.GREATER);break;case id:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Mt!==vt&&(At&&(vt=1-vt),s.clearDepth(vt),Mt=vt)},reset:function(){X=!1,wt=null,Bt=null,Mt=null,At=!1}}}function l(){let X=!1,At=null,wt=null,Bt=null,Mt=null,vt=null,It=null,ie=null,Ne=null;return{setTest:function(be){X||(be?lt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(be){At!==be&&!X&&(s.stencilMask(be),At=be)},setFunc:function(be,wn,ni){(wt!==be||Bt!==wn||Mt!==ni)&&(s.stencilFunc(be,wn,ni),wt=be,Bt=wn,Mt=ni)},setOp:function(be,wn,ni){(vt!==be||It!==wn||ie!==ni)&&(s.stencilOp(be,wn,ni),vt=be,It=wn,ie=ni)},setLocked:function(be){X=be},setClear:function(be){Ne!==be&&(s.clearStencil(be),Ne=be)},reset:function(){X=!1,At=null,wt=null,Bt=null,Mt=null,vt=null,It=null,ie=null,Ne=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},x=new WeakMap,M=[],b=null,E=!1,y=null,g=null,L=null,w=null,C=null,G=null,I=null,P=new Ae(0,0,0),W=0,U=!1,D=null,B=null,ot=null,ct=null,ft=null;const pt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let xt=null,Et={};const O=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),St=new He().fromArray(O),Tt=new He().fromArray(et);function V(X,At,wt,Bt){const Mt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(X,vt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<wt;It++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(At+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return vt}const at={};at[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(s.DEPTH_TEST),h.setFunc(Ds),me(!1),Kt(k0),lt(s.CULL_FACE),pe(ua);function lt(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ut(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function Dt(X,At){return _[X]!==At?(s.bindFramebuffer(X,At),_[X]=At,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=At),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=At),!0):!1}function Zt(X,At){let wt=M,Bt=!1;if(X){wt=x.get(At),wt===void 0&&(wt=[],x.set(At,wt));const Mt=X.textures;if(wt.length!==Mt.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,It=Mt.length;vt<It;vt++)wt[vt]=s.COLOR_ATTACHMENT0+vt;wt.length=Mt.length,Bt=!0}}else wt[0]!==s.BACK&&(wt[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(wt)}function oe(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const ee={[Er]:s.FUNC_ADD,[YS]:s.FUNC_SUBTRACT,[jS]:s.FUNC_REVERSE_SUBTRACT};ee[ZS]=s.MIN,ee[KS]=s.MAX;const H={[QS]:s.ZERO,[JS]:s.ONE,[$S]:s.SRC_COLOR,[Zh]:s.SRC_ALPHA,[ry]:s.SRC_ALPHA_SATURATE,[iy]:s.DST_COLOR,[ey]:s.DST_ALPHA,[ty]:s.ONE_MINUS_SRC_COLOR,[Kh]:s.ONE_MINUS_SRC_ALPHA,[ay]:s.ONE_MINUS_DST_COLOR,[ny]:s.ONE_MINUS_DST_ALPHA,[sy]:s.CONSTANT_COLOR,[oy]:s.ONE_MINUS_CONSTANT_COLOR,[ly]:s.CONSTANT_ALPHA,[cy]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(X,At,wt,Bt,Mt,vt,It,ie,Ne,be){if(X===ua){E===!0&&(Ut(s.BLEND),E=!1);return}if(E===!1&&(lt(s.BLEND),E=!0),X!==qS){if(X!==y||be!==U){if((g!==Er||C!==Er)&&(s.blendEquation(s.FUNC_ADD),g=Er,C=Er),be)switch(X){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFunc(s.ONE,s.ONE);break;case X0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case W0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case X0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,w=null,G=null,I=null,P.set(0,0,0),W=0,y=X,U=be}return}Mt=Mt||At,vt=vt||wt,It=It||Bt,(At!==g||Mt!==C)&&(s.blendEquationSeparate(ee[At],ee[Mt]),g=At,C=Mt),(wt!==L||Bt!==w||vt!==G||It!==I)&&(s.blendFuncSeparate(H[wt],H[Bt],H[vt],H[It]),L=wt,w=Bt,G=vt,I=It),(ie.equals(P)===!1||Ne!==W)&&(s.blendColor(ie.r,ie.g,ie.b,Ne),P.copy(ie),W=Ne),y=X,U=!1}function qt(X,At){X.side===Ni?Ut(s.CULL_FACE):lt(s.CULL_FACE);let wt=X.side===Nn;At&&(wt=!wt),me(wt),X.blending===As&&X.transparent===!1?pe(ua):pe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ft(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function Kt(X){X!==kS?(lt(s.CULL_FACE),X!==B&&(X===k0?s.cullFace(s.BACK):X===XS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),B=X}function Ge(X){X!==ot&&(z&&s.lineWidth(X),ot=X)}function Ft(X,At,wt){X?(lt(s.POLYGON_OFFSET_FILL),(ct!==At||ft!==wt)&&(s.polygonOffset(At,wt),ct=At,ft=wt)):Ut(s.POLYGON_OFFSET_FILL)}function re(X){X?lt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=s.TEXTURE0+pt-1),xt!==X&&(s.activeTexture(X),xt=X)}function je(X,At,wt){wt===void 0&&(xt===null?wt=s.TEXTURE0+pt-1:wt=xt);let Bt=Et[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Et[wt]=Bt),(Bt.type!==X||Bt.texture!==At)&&(xt!==wt&&(s.activeTexture(wt),xt=wt),s.bindTexture(X,At||at[X]),Bt.type=X,Bt.texture=At)}function N(){const X=Et[xt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(X){St.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function jt(X){Tt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Tt.copy(X))}function zt(X,At){let wt=p.get(At);wt===void 0&&(wt=new WeakMap,p.set(At,wt));let Bt=wt.get(X);Bt===void 0&&(Bt=s.getUniformBlockIndex(At,X.name),wt.set(X,Bt))}function Lt(X,At){const Bt=p.get(At).get(X);m.get(At)!==Bt&&(s.uniformBlockBinding(At,Bt,X.__bindingPointIndex),m.set(At,Bt))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},xt=null,Et={},_={},x=new WeakMap,M=[],b=null,E=!1,y=null,g=null,L=null,w=null,C=null,G=null,I=null,P=new Ae(0,0,0),W=0,U=!1,D=null,B=null,ot=null,ct=null,ft=null,St.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:lt,disable:Ut,bindFramebuffer:Dt,drawBuffers:Zt,useProgram:oe,setBlending:pe,setMaterial:qt,setFlipSided:me,setCullFace:Kt,setLineWidth:Ge,setPolygonOffset:Ft,setScissorTest:re,activeTexture:Ke,bindTexture:je,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Wt,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:Ct,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Yt,scissor:Rt,viewport:jt,reset:se}}function VT(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,v=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return M?new OffscreenCanvas(N,T):Gc("canvas")}function E(N,T,tt){let dt=1;const yt=je(N);if((yt.width>tt||yt.height>tt)&&(dt=tt/Math.max(yt.width,yt.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(dt*yt.width),Yt=Math.floor(dt*yt.height);_===void 0&&(_=b(ut,Yt));const Ct=T?b(ut,Yt):_;return Ct.width=ut,Ct.height=Yt,Ct.getContext("2d").drawImage(N,0,0,ut,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ut+"x"+Yt+")."),Ct}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(N,T,tt,dt,yt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=T;if(T===s.RED&&(tt===s.FLOAT&&(ut=s.R32F),tt===s.HALF_FLOAT&&(ut=s.R16F),tt===s.UNSIGNED_BYTE&&(ut=s.R8)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.R8UI),tt===s.UNSIGNED_SHORT&&(ut=s.R16UI),tt===s.UNSIGNED_INT&&(ut=s.R32UI),tt===s.BYTE&&(ut=s.R8I),tt===s.SHORT&&(ut=s.R16I),tt===s.INT&&(ut=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(ut=s.RG32F),tt===s.HALF_FLOAT&&(ut=s.RG16F),tt===s.UNSIGNED_BYTE&&(ut=s.RG8)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RG16UI),tt===s.UNSIGNED_INT&&(ut=s.RG32UI),tt===s.BYTE&&(ut=s.RG8I),tt===s.SHORT&&(ut=s.RG16I),tt===s.INT&&(ut=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),tt===s.UNSIGNED_INT&&(ut=s.RGB32UI),tt===s.BYTE&&(ut=s.RGB8I),tt===s.SHORT&&(ut=s.RGB16I),tt===s.INT&&(ut=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ut=s.RGBA32UI),tt===s.BYTE&&(ut=s.RGBA8I),tt===s.SHORT&&(ut=s.RGBA16I),tt===s.INT&&(ut=s.RGBA32I)),T===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),T===s.RGBA){const Yt=yt?Ic:we.getTransfer(dt);tt===s.FLOAT&&(ut=s.RGBA32F),tt===s.HALF_FLOAT&&(ut=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ut=Yt===Ie?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(N,T){let tt;return N?T===null||T===Cr||T===Vo?tt=s.DEPTH24_STENCIL8:T===ca?tt=s.DEPTH32F_STENCIL8:T===Go&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Cr||T===Vo?tt=s.DEPTH_COMPONENT24:T===ca?tt=s.DEPTH_COMPONENT32F:T===Go&&(tt=s.DEPTH_COMPONENT16),tt}function G(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ei&&N.minFilter!==Oi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function I(N){const T=N.target;T.removeEventListener("dispose",I),W(T),T.isVideoTexture&&v.delete(T)}function P(N){const T=N.target;T.removeEventListener("dispose",P),D(T)}function W(N){const T=r.get(N);if(T.__webglInit===void 0)return;const tt=N.source,dt=x.get(tt);if(dt){const yt=dt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&U(N),Object.keys(dt).length===0&&x.delete(tt)}r.remove(N)}function U(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const tt=N.source,dt=x.get(tt);delete dt[T.__cacheKey],h.memory.textures--}function D(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let yt=0;yt<T.__webglFramebuffer[dt].length;yt++)s.deleteFramebuffer(T.__webglFramebuffer[dt][yt]);else s.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[dt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=N.textures;for(let dt=0,yt=tt.length;dt<yt;dt++){const ut=r.get(tt[dt]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(tt[dt])}r.remove(N)}let B=0;function ot(){B=0}function ct(){const N=B;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function ft(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function pt(N,T){const tt=r.get(N);if(N.isVideoTexture&&re(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const dt=N.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(tt,N,T);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function z(N,T){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){at(tt,N,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function K(N,T){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){at(tt,N,T);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function Y(N,T){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){lt(tt,N,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const xt={[sd]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[od]:s.MIRRORED_REPEAT},Et={[Ei]:s.NEAREST,[xy]:s.NEAREST_MIPMAP_NEAREST,[fc]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[fh]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},O={[by]:s.NEVER,[Dy]:s.ALWAYS,[Ty]:s.LESS,[a_]:s.LEQUAL,[Ay]:s.EQUAL,[wy]:s.GEQUAL,[Cy]:s.GREATER,[Ry]:s.NOTEQUAL};function et(N,T){if(T.type===ca&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Oi||T.magFilter===fh||T.magFilter===fc||T.magFilter===Ar||T.minFilter===Oi||T.minFilter===fh||T.minFilter===fc||T.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,xt[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,xt[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,xt[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Et[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==fc&&T.minFilter!==Ar||T.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function St(N,T){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I));const dt=T.source;let yt=x.get(dt);yt===void 0&&(yt={},x.set(dt,yt));const ut=ft(T);if(ut!==N.__cacheKey){yt[ut]===void 0&&(yt[ut]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),yt[ut].usedTimes++;const Yt=yt[N.__cacheKey];Yt!==void 0&&(yt[N.__cacheKey].usedTimes--,Yt.usedTimes===0&&U(T)),N.__cacheKey=ut,N.__webglTexture=yt[ut].texture}return tt}function Tt(N,T,tt){return Math.floor(Math.floor(N/tt)/T)}function V(N,T,tt,dt){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,tt,dt,T.data);else{ut.sort((bt,Rt)=>bt.start-Rt.start);let Yt=0;for(let bt=1;bt<ut.length;bt++){const Rt=ut[Yt],jt=ut[bt],zt=Rt.start+Rt.count,Lt=Tt(jt.start,T.width,4),se=Tt(Rt.start,T.width,4);jt.start<=zt+1&&Lt===se&&Tt(jt.start+jt.count-1,T.width,4)===Lt?Rt.count=Math.max(Rt.count,jt.start+jt.count-Rt.start):(++Yt,ut[Yt]=jt)}ut.length=Yt+1;const Ct=s.getParameter(s.UNPACK_ROW_LENGTH),Xt=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Rt=ut.length;bt<Rt;bt++){const jt=ut[bt],zt=Math.floor(jt.start/4),Lt=Math.ceil(jt.count/4),se=zt%T.width,X=Math.floor(zt/T.width),At=Lt,wt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,se),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,se,X,At,wt,tt,dt,T.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ct),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function at(N,T,tt){let dt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=s.TEXTURE_3D);const yt=St(N,T),ut=T.source;i.bindTexture(dt,N.__webglTexture,s.TEXTURE0+tt);const Yt=r.get(ut);if(ut.version!==Yt.__version||yt===!0){i.activeTexture(s.TEXTURE0+tt);const Ct=we.getPrimaries(we.workingColorSpace),Xt=T.colorSpace===qa?null:we.getPrimaries(T.colorSpace),Wt=T.colorSpace===qa||Ct===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let bt=E(T.image,!1,l.maxTextureSize);bt=Ke(T,bt);const Rt=c.convert(T.format,T.colorSpace),jt=c.convert(T.type);let zt=w(T.internalFormat,Rt,jt,T.colorSpace,T.isVideoTexture);et(dt,T);let Lt;const se=T.mipmaps,X=T.isVideoTexture!==!0,At=Yt.__version===void 0||yt===!0,wt=ut.dataReady,Bt=G(T,bt);if(T.isDepthTexture)zt=C(T.format===Xo,T.type),At&&(X?i.texStorage2D(s.TEXTURE_2D,1,zt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,zt,bt.width,bt.height,0,Rt,jt,null));else if(T.isDataTexture)if(se.length>0){X&&At&&i.texStorage2D(s.TEXTURE_2D,Bt,zt,se[0].width,se[0].height);for(let Mt=0,vt=se.length;Mt<vt;Mt++)Lt=se[Mt],X?wt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,Rt,jt,Lt.data):i.texImage2D(s.TEXTURE_2D,Mt,zt,Lt.width,Lt.height,0,Rt,jt,Lt.data);T.generateMipmaps=!1}else X?(At&&i.texStorage2D(s.TEXTURE_2D,Bt,zt,bt.width,bt.height),wt&&V(T,bt,Rt,jt)):i.texImage2D(s.TEXTURE_2D,0,zt,bt.width,bt.height,0,Rt,jt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,zt,se[0].width,se[0].height,bt.depth);for(let Mt=0,vt=se.length;Mt<vt;Mt++)if(Lt=se[Mt],T.format!==Mi)if(Rt!==null)if(X){if(wt)if(T.layerUpdates.size>0){const It=mv(Lt.width,Lt.height,T.format,T.type);for(const ie of T.layerUpdates){const Ne=Lt.data.subarray(ie*It/Lt.data.BYTES_PER_ELEMENT,(ie+1)*It/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,ie,Lt.width,Lt.height,1,Rt,Ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,bt.depth,Rt,Lt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Mt,zt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,bt.depth,Rt,jt,Lt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Mt,zt,Lt.width,Lt.height,bt.depth,0,Rt,jt,Lt.data)}else{X&&At&&i.texStorage2D(s.TEXTURE_2D,Bt,zt,se[0].width,se[0].height);for(let Mt=0,vt=se.length;Mt<vt;Mt++)Lt=se[Mt],T.format!==Mi?Rt!==null?X?wt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,Rt,Lt.data):i.compressedTexImage2D(s.TEXTURE_2D,Mt,zt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,Rt,jt,Lt.data):i.texImage2D(s.TEXTURE_2D,Mt,zt,Lt.width,Lt.height,0,Rt,jt,Lt.data)}else if(T.isDataArrayTexture)if(X){if(At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,zt,bt.width,bt.height,bt.depth),wt)if(T.layerUpdates.size>0){const Mt=mv(bt.width,bt.height,T.format,T.type);for(const vt of T.layerUpdates){const It=bt.data.subarray(vt*Mt/bt.data.BYTES_PER_ELEMENT,(vt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Rt,jt,It)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Rt,jt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,bt.width,bt.height,bt.depth,0,Rt,jt,bt.data);else if(T.isData3DTexture)X?(At&&i.texStorage3D(s.TEXTURE_3D,Bt,zt,bt.width,bt.height,bt.depth),wt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Rt,jt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,zt,bt.width,bt.height,bt.depth,0,Rt,jt,bt.data);else if(T.isFramebufferTexture){if(At)if(X)i.texStorage2D(s.TEXTURE_2D,Bt,zt,bt.width,bt.height);else{let Mt=bt.width,vt=bt.height;for(let It=0;It<Bt;It++)i.texImage2D(s.TEXTURE_2D,It,zt,Mt,vt,0,Rt,jt,null),Mt>>=1,vt>>=1}}else if(se.length>0){if(X&&At){const Mt=je(se[0]);i.texStorage2D(s.TEXTURE_2D,Bt,zt,Mt.width,Mt.height)}for(let Mt=0,vt=se.length;Mt<vt;Mt++)Lt=se[Mt],X?wt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Rt,jt,Lt):i.texImage2D(s.TEXTURE_2D,Mt,zt,Rt,jt,Lt);T.generateMipmaps=!1}else if(X){if(At){const Mt=je(bt);i.texStorage2D(s.TEXTURE_2D,Bt,zt,Mt.width,Mt.height)}wt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,jt,bt)}else i.texImage2D(s.TEXTURE_2D,0,zt,Rt,jt,bt);y(T)&&g(dt),Yt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function lt(N,T,tt){if(T.image.length!==6)return;const dt=St(N,T),yt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+tt);const ut=r.get(yt);if(yt.version!==ut.__version||dt===!0){i.activeTexture(s.TEXTURE0+tt);const Yt=we.getPrimaries(we.workingColorSpace),Ct=T.colorSpace===qa?null:we.getPrimaries(T.colorSpace),Xt=T.colorSpace===qa||Yt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Wt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let vt=0;vt<6;vt++)!Wt&&!bt?Rt[vt]=E(T.image[vt],!0,l.maxCubemapSize):Rt[vt]=bt?T.image[vt].image:T.image[vt],Rt[vt]=Ke(T,Rt[vt]);const jt=Rt[0],zt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),se=w(T.internalFormat,zt,Lt,T.colorSpace),X=T.isVideoTexture!==!0,At=ut.__version===void 0||dt===!0,wt=yt.dataReady;let Bt=G(T,jt);et(s.TEXTURE_CUBE_MAP,T);let Mt;if(Wt){X&&At&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,se,jt.width,jt.height);for(let vt=0;vt<6;vt++){Mt=Rt[vt].mipmaps;for(let It=0;It<Mt.length;It++){const ie=Mt[It];T.format!==Mi?zt!==null?X?wt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ie.width,ie.height,zt,ie.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ie.width,ie.height,zt,Lt,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,se,ie.width,ie.height,0,zt,Lt,ie.data)}}}else{if(Mt=T.mipmaps,X&&At){Mt.length>0&&Bt++;const vt=je(Rt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,se,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Rt[vt].width,Rt[vt].height,zt,Lt,Rt[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,se,Rt[vt].width,Rt[vt].height,0,zt,Lt,Rt[vt].data);for(let It=0;It<Mt.length;It++){const Ne=Mt[It].image[vt].image;X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,Ne.width,Ne.height,zt,Lt,Ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,se,Ne.width,Ne.height,0,zt,Lt,Ne.data)}}else{X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt,Lt,Rt[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,se,zt,Lt,Rt[vt]);for(let It=0;It<Mt.length;It++){const ie=Mt[It];X?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,zt,Lt,ie.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,se,zt,Lt,ie.image[vt])}}}y(T)&&g(s.TEXTURE_CUBE_MAP),ut.__version=yt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ut(N,T,tt,dt,yt,ut){const Yt=c.convert(tt.format,tt.colorSpace),Ct=c.convert(tt.type),Xt=w(tt.internalFormat,Yt,Ct,tt.colorSpace),Wt=r.get(T),bt=r.get(tt);if(bt.__renderTarget=T,!Wt.__hasExternalTextures){const Rt=Math.max(1,T.width>>ut),jt=Math.max(1,T.height>>ut);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,ut,Xt,Rt,jt,T.depth,0,Yt,Ct,null):i.texImage2D(yt,ut,Xt,Rt,jt,0,Yt,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,yt,bt.__webglTexture,0,Ge(T)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,yt,bt.__webglTexture,ut),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(N,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const dt=T.depthTexture,yt=dt&&dt.isDepthTexture?dt.type:null,ut=C(T.stencilBuffer,yt),Yt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=Ge(T);Ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,ut,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ut,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,N)}else{const dt=T.textures;for(let yt=0;yt<dt.length;yt++){const ut=dt[yt],Yt=c.convert(ut.format,ut.colorSpace),Ct=c.convert(ut.type),Xt=w(ut.internalFormat,Yt,Ct,ut.colorSpace),Wt=Ge(T);tt&&Ft(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Xt,T.width,T.height):Ft(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,Xt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Xt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const yt=dt.__webglTexture,ut=Ge(T);if(T.depthTexture.format===ko)Ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Xo)Ft(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function oe(N){const T=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",yt)};dt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=dt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=N.texture.mipmaps;dt&&dt.length>0?Zt(T.__webglFramebuffer[0],N):Zt(T.__webglFramebuffer,N)}else if(tt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=s.createRenderbuffer(),Dt(T.__webglDepthbuffer[dt],N,!1);else{const yt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ut)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Dt(T.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ut)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(N,T,tt){const dt=r.get(N);T!==void 0&&Ut(dt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&oe(N)}function H(N){const T=N.texture,tt=r.get(N),dt=r.get(T);N.addEventListener("dispose",P);const yt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Yt=yt.length>1;if(Yt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=T.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Xt=0;Xt<T.mipmaps.length;Xt++)tt.__webglFramebuffer[Ct][Xt]=s.createFramebuffer()}else tt.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let Ct=0,Xt=yt.length;Ct<Xt;Ct++){const Wt=r.get(yt[Ct]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&Ft(N)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const Xt=yt[Ct];tt.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const Wt=c.convert(Xt.format,Xt.colorSpace),bt=c.convert(Xt.type),Rt=w(Xt.internalFormat,Wt,bt,Xt.colorSpace,N.isXRRenderTarget===!0),jt=Ge(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Rt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),et(s.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Xt=0;Xt<T.mipmaps.length;Xt++)Ut(tt.__webglFramebuffer[Ct][Xt],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Xt);else Ut(tt.__webglFramebuffer[Ct],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ct=0,Xt=yt.length;Ct<Xt;Ct++){const Wt=yt[Ct],bt=r.get(Wt);let Rt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,bt.__webglTexture),et(Rt,Wt),Ut(tt.__webglFramebuffer,N,Wt,s.COLOR_ATTACHMENT0+Ct,Rt,0),y(Wt)&&g(Rt)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),et(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Xt=0;Xt<T.mipmaps.length;Xt++)Ut(tt.__webglFramebuffer[Xt],N,T,s.COLOR_ATTACHMENT0,Ct,Xt);else Ut(tt.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Ct,0);y(T)&&g(Ct),i.unbindTexture()}N.depthBuffer&&oe(N)}function pe(N){const T=N.textures;for(let tt=0,dt=T.length;tt<dt;tt++){const yt=T[tt];if(y(yt)){const ut=L(N),Yt=r.get(yt).__webglTexture;i.bindTexture(ut,Yt),g(ut),i.unbindTexture()}}}const qt=[],me=[];function Kt(N){if(N.samples>0){if(Ft(N)===!1){const T=N.textures,tt=N.width,dt=N.height;let yt=s.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=r.get(N),Ct=T.length>1;if(Ct)for(let Wt=0;Wt<T.length;Wt++)i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Wt=0;Wt<T.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[Wt]);const bt=r.get(T[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,tt,dt,0,0,tt,dt,yt,s.NEAREST),m===!0&&(qt.length=0,me.length=0,qt.push(s.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(qt.push(ut),me.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Wt=0;Wt<T.length;Wt++){i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[Wt]);const bt=r.get(T[Wt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ge(N){return Math.min(l.maxSamples,N.samples)}function Ft(N){const T=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(N){const T=h.render.frame;v.get(N)!==T&&(v.set(N,T),N.update())}function Ke(N,T){const tt=N.colorSpace,dt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Ns&&tt!==qa&&(we.getTransfer(tt)===Ie?(dt!==Mi||yt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=ot,this.setTexture2D=pt,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=ee,this.setupRenderTarget=H,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ft}function kT(s,t){function i(r,l=qa){let c;const h=we.getTransfer(l);if(r===Bi)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Kv)return s.BYTE;if(r===Qv)return s.SHORT;if(r===Go)return s.UNSIGNED_SHORT;if(r===Hd)return s.INT;if(r===Cr)return s.UNSIGNED_INT;if(r===ca)return s.FLOAT;if(r===fa)return s.HALF_FLOAT;if(r===$v)return s.ALPHA;if(r===t_)return s.RGB;if(r===Mi)return s.RGBA;if(r===ko)return s.DEPTH_COMPONENT;if(r===Xo)return s.DEPTH_STENCIL;if(r===e_)return s.RED;if(r===kd)return s.RED_INTEGER;if(r===n_)return s.RG;if(r===Xd)return s.RG_INTEGER;if(r===Wd)return s.RGBA_INTEGER;if(r===Lc||r===Nc||r===Oc||r===Pc)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ld||r===cd||r===ud||r===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hd||r===dd||r===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===hd||r===dd)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===md||r===gd||r===vd||r===_d||r===xd||r===Sd||r===yd||r===Md||r===Ed||r===bd||r===Td||r===Ad||r===Cd||r===Rd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Td)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zc||r===wd||r===Dd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===zc)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===i_||r===Ud||r===Ld||r===Nd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class M_ extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new M_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Rn({vertexShader:XT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vn(new Yc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends Bs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,x=null,M=null,b=null;const E=new qT,y={},g=i.getContextAttributes();let L=null,w=null;const C=[],G=[],I=new ce;let P=null;const W=new ei;W.viewport=new He;const U=new ei;U.viewport=new He;const D=[W,U],B=new dM;let ot=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let at=C[V];return at===void 0&&(at=new Oh,C[V]=at),at.getTargetRaySpace()},this.getControllerGrip=function(V){let at=C[V];return at===void 0&&(at=new Oh,C[V]=at),at.getGripSpace()},this.getHand=function(V){let at=C[V];return at===void 0&&(at=new Oh,C[V]=at),at.getHandSpace()};function ft(V){const at=G.indexOf(V.inputSource);if(at===-1)return;const lt=C[at];lt!==void 0&&(lt.update(V.inputSource,V.frame,p||h),lt.dispatchEvent({type:V.type,data:V.inputSource}))}function pt(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",z);for(let V=0;V<C.length;V++){const at=G[V];at!==null&&(G[V]=null,C[V].disconnect(at))}ot=null,ct=null,E.reset();for(const V in y)delete y[V];t.setRenderTarget(L),M=null,x=null,_=null,l=null,w=null,Tt.stop(),r.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){c=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await i.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Ut=null,Dt=null;g.depth&&(Dt=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,lt=g.stencil?Xo:ko,Ut=g.stencil?Vo:Cr);const Zt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};x=_.createProjectionLayer(Zt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),w=new bi(x.textureWidth,x.textureHeight,{format:Mi,type:Bi,depthTexture:new p_(x.textureWidth,x.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,lt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new bi(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Tt.setContext(l),Tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function z(V){for(let at=0;at<V.removed.length;at++){const lt=V.removed[at],Ut=G.indexOf(lt);Ut>=0&&(G[Ut]=null,C[Ut].disconnect(lt))}for(let at=0;at<V.added.length;at++){const lt=V.added[at];let Ut=G.indexOf(lt);if(Ut===-1){for(let Zt=0;Zt<C.length;Zt++)if(Zt>=G.length){G.push(lt),Ut=Zt;break}else if(G[Zt]===null){G[Zt]=lt,Ut=Zt;break}if(Ut===-1)break}const Dt=C[Ut];Dt&&Dt.connect(lt)}}const K=new Q,Y=new Q;function xt(V,at,lt){K.setFromMatrixPosition(at.matrixWorld),Y.setFromMatrixPosition(lt.matrixWorld);const Ut=K.distanceTo(Y),Dt=at.projectionMatrix.elements,Zt=lt.projectionMatrix.elements,oe=Dt[14]/(Dt[10]-1),ee=Dt[14]/(Dt[10]+1),H=(Dt[9]+1)/Dt[5],pe=(Dt[9]-1)/Dt[5],qt=(Dt[8]-1)/Dt[0],me=(Zt[8]+1)/Zt[0],Kt=oe*qt,Ge=oe*me,Ft=Ut/(-qt+me),re=Ft*-qt;if(at.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(re),V.translateZ(Ft),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Dt[10]===-1)V.projectionMatrix.copy(at.projectionMatrix),V.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Ke=oe+Ft,je=ee+Ft,N=Kt-re,T=Ge+(Ut-re),tt=H*ee/je*Ke,dt=pe*ee/je*Ke;V.projectionMatrix.makePerspective(N,T,tt,dt,Ke,je),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Et(V,at){at===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(at.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;let at=V.near,lt=V.far;E.texture!==null&&(E.depthNear>0&&(at=E.depthNear),E.depthFar>0&&(lt=E.depthFar)),B.near=U.near=W.near=at,B.far=U.far=W.far=lt,(ot!==B.near||ct!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),ot=B.near,ct=B.far),B.layers.mask=V.layers.mask|6,W.layers.mask=B.layers.mask&3,U.layers.mask=B.layers.mask&5;const Ut=V.parent,Dt=B.cameras;Et(B,Ut);for(let Zt=0;Zt<Dt.length;Zt++)Et(Dt[Zt],Ut);Dt.length===2?xt(B,W,U):B.projectionMatrix.copy(W.projectionMatrix),O(V,B,Ut)};function O(V,at,lt){lt===null?V.matrix.copy(at.matrixWorld):(V.matrix.copy(lt.matrixWorld),V.matrix.invert(),V.matrix.multiply(at.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(at.projectionMatrix),V.projectionMatrixInverse.copy(at.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Od*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(V){m=V,x!==null&&(x.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(B)},this.getCameraTexture=function(V){return y[V]};let et=null;function St(V,at){if(v=at.getViewerPose(p||h),b=at,v!==null){const lt=v.views;M!==null&&(t.setRenderTargetFramebuffer(w,M.framebuffer),t.setRenderTarget(w));let Ut=!1;lt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let ee=0;ee<lt.length;ee++){const H=lt[ee];let pe=null;if(M!==null)pe=M.getViewport(H);else{const me=_.getViewSubImage(x,H);pe=me.viewport,ee===0&&(t.setRenderTargetTextures(w,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(w))}let qt=D[ee];qt===void 0&&(qt=new ei,qt.layers.enable(ee),qt.viewport=new He,D[ee]=qt),qt.matrix.fromArray(H.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(H.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(pe.x,pe.y,pe.width,pe.height),ee===0&&(B.matrix.copy(qt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(qt)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const ee=_.getDepthInformation(lt[0]);ee&&ee.isValid&&ee.texture&&E.init(ee,l.renderState)}if(Dt&&Dt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let ee=0;ee<lt.length;ee++){const H=lt[ee].camera;if(H){let pe=y[H];pe||(pe=new M_,y[H]=pe);const qt=_.getCameraImage(H);pe.sourceTexture=qt}}}for(let lt=0;lt<C.length;lt++){const Ut=G[lt],Dt=C[lt];Ut!==null&&Dt!==void 0&&Dt.update(Ut,at,p||h)}et&&et(V,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),b=null}const Tt=new v_;Tt.setAnimationLoop(St),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}const Sr=new pa,jT=new $e;function ZT(s,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,f_(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,L,w,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),v(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,C)):g.isMeshMatcapMaterial?(c(y,g),b(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),E(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,L,w):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Nn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Nn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const L=t.get(g),w=L.envMap,C=L.envMapRotation;w&&(y.envMap.value=w,Sr.copy(C),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),y.envMapRotation.value.setFromMatrix4(jT.makeRotationFromEuler(Sr)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,L,w){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*L,y.scale.value=w*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,L){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,g){g.matcap&&(y.matcap.value=g.matcap)}function E(y,g){const L=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function KT(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,w){const C=w.program;r.uniformBlockBinding(L,C)}function p(L,w){let C=l[L.id];C===void 0&&(b(L),C=v(L),l[L.id]=C,L.addEventListener("dispose",y));const G=w.program;r.updateUBOMapping(L,G);const I=t.render.frame;c[L.id]!==I&&(x(L),c[L.id]=I)}function v(L){const w=_();L.__bindingPointIndex=w;const C=s.createBuffer(),G=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,G,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,C),C}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const w=l[L.id],C=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let I=0,P=C.length;I<P;I++){const W=Array.isArray(C[I])?C[I]:[C[I]];for(let U=0,D=W.length;U<D;U++){const B=W[U];if(M(B,I,U,G)===!0){const ot=B.__offset,ct=Array.isArray(B.value)?B.value:[B.value];let ft=0;for(let pt=0;pt<ct.length;pt++){const z=ct[pt],K=E(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,ot+ft,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,ft),ft+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ot,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,w,C,G){const I=L.value,P=w+"_"+C;if(G[P]===void 0)return typeof I=="number"||typeof I=="boolean"?G[P]=I:G[P]=I.clone(),!0;{const W=G[P];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return G[P]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function b(L){const w=L.uniforms;let C=0;const G=16;for(let P=0,W=w.length;P<W;P++){const U=Array.isArray(w[P])?w[P]:[w[P]];for(let D=0,B=U.length;D<B;D++){const ot=U[D],ct=Array.isArray(ot.value)?ot.value:[ot.value];for(let ft=0,pt=ct.length;ft<pt;ft++){const z=ct[ft],K=E(z),Y=C%G,xt=Y%K.boundary,Et=Y+xt;C+=xt,Et!==0&&G-Et<K.storage&&(C+=G-Et),ot.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=C,C+=K.storage}}}const I=C%G;return I>0&&(C+=G-I),L.__size=C,L.__cache={},this}function E(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),w}function y(L){const w=L.target;w.removeEventListener("dispose",y);const C=h.indexOf(w.__bindingPointIndex);h.splice(C,1),s.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function g(){for(const L in l)s.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class QT{constructor(t={}){const{canvas:i=Ly(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),E=new Int32Array(4);let y=null,g=null;const L=[],w=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=hi;let I=0,P=0,W=null,U=-1,D=null;const B=new He,ot=new He;let ct=null;const ft=new Ae(0);let pt=0,z=i.width,K=i.height,Y=1,xt=null,Et=null;const O=new He(0,0,z,K),et=new He(0,0,z,K);let St=!1;const Tt=new jd;let V=!1,at=!1;const lt=new $e,Ut=new Q,Dt=new He,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function ee(){return W===null?Y:1}let H=r;function pe(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Id}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const q="webgl2";if(H=pe(q,R),H===null)throw pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let qt,me,Kt,Ge,Ft,re,Ke,je,N,T,tt,dt,yt,ut,Yt,Ct,Xt,Wt,bt,Rt,jt,zt,Lt,se;function X(){qt=new o1(H),qt.init(),zt=new kT(H,qt),me=new t1(H,qt,t,zt),Kt=new GT(H,qt),me.reversedDepthBuffer&&x&&Kt.buffers.depth.setReversed(!0),Ge=new u1(H),Ft=new RT,re=new VT(H,qt,Kt,Ft,me,zt,Ge),Ke=new n1(C),je=new s1(C),N=new gM(H),Lt=new Jb(H,N),T=new l1(H,N,Ge,Lt),tt=new h1(H,T,N,Ge),bt=new f1(H,me,re),Ct=new e1(Ft),dt=new CT(C,Ke,je,qt,me,Lt,Ct),yt=new ZT(C,Ft),ut=new DT,Yt=new zT(qt),Wt=new Qb(C,Ke,je,Kt,tt,M,m),Xt=new IT(C,tt,me),se=new KT(H,Ge,me,Kt),Rt=new $b(H,qt,Ge),jt=new c1(H,qt,Ge),Ge.programs=dt.programs,C.capabilities=me,C.extensions=qt,C.properties=Ft,C.renderLists=ut,C.shadowMap=Xt,C.state=Kt,C.info=Ge}X();const At=new YT(C,H);this.xr=At,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,q,it=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),it===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,it){z=R,K=q,Y=it,i.width=Math.floor(R*it),i.height=Math.floor(q*it),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,q,it,rt){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,q,it,rt),Kt.viewport(B.copy(O).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(et)},this.setScissor=function(R,q,it,rt){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,q,it,rt),Kt.scissor(ot.copy(et).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Kt.setScissorTest(St=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,it=!0){let rt=0;if(R){let j=!1;if(W!==null){const _t=W.texture.format;j=_t===Wd||_t===Xd||_t===kd}if(j){const _t=W.texture.type,Nt=_t===Bi||_t===Cr||_t===Go||_t===Vo||_t===Gd||_t===Vd,Gt=Wt.getClearColor(),Pt=Wt.getClearAlpha(),Qt=Gt.r,ne=Gt.g,Jt=Gt.b;Nt?(b[0]=Qt,b[1]=ne,b[2]=Jt,b[3]=Pt,H.clearBufferuiv(H.COLOR,0,b)):(E[0]=Qt,E[1]=ne,E[2]=Jt,E[3]=Pt,H.clearBufferiv(H.COLOR,0,E))}else rt|=H.COLOR_BUFFER_BIT}q&&(rt|=H.DEPTH_BUFFER_BIT),it&&(rt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Wt.dispose(),ut.dispose(),Yt.dispose(),Ft.dispose(),Ke.dispose(),je.dispose(),tt.dispose(),Lt.dispose(),se.dispose(),dt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ni),At.removeEventListener("sessionend",Is),Ai.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Ge.autoReset,q=Xt.enabled,it=Xt.autoUpdate,rt=Xt.needsUpdate,j=Xt.type;X(),Ge.autoReset=R,Xt.enabled=q,Xt.autoUpdate=it,Xt.needsUpdate=rt,Xt.type=j}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const q=R.target;q.removeEventListener("dispose",vt),It(q)}function It(R){ie(R),Ft.remove(R)}function ie(R){const q=Ft.get(R).programs;q!==void 0&&(q.forEach(function(it){dt.releaseProgram(it)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,it,rt,j,_t){q===null&&(q=Zt);const Nt=j.isMesh&&j.matrixWorld.determinant()<0,Gt=ma(R,q,it,rt,j);Kt.setMaterial(rt,Nt);let Pt=it.index,Qt=1;if(rt.wireframe===!0){if(Pt=T.getWireframeAttribute(it),Pt===void 0)return;Qt=2}const ne=it.drawRange,Jt=it.attributes.position;let de=ne.start*Qt,Ue=(ne.start+ne.count)*Qt;_t!==null&&(de=Math.max(de,_t.start*Qt),Ue=Math.min(Ue,(_t.start+_t.count)*Qt)),Pt!==null?(de=Math.max(de,0),Ue=Math.min(Ue,Pt.count)):Jt!=null&&(de=Math.max(de,0),Ue=Math.min(Ue,Jt.count));const Ve=Ue-de;if(Ve<0||Ve===1/0)return;Lt.setup(j,rt,Gt,it,Pt);let Le,ge=Rt;if(Pt!==null&&(Le=N.get(Pt),ge=jt,ge.setIndex(Le)),j.isMesh)rt.wireframe===!0?(Kt.setLineWidth(rt.wireframeLinewidth*ee()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(j.isLine){let Vt=rt.linewidth;Vt===void 0&&(Vt=1),Kt.setLineWidth(Vt*ee()),j.isLineSegments?ge.setMode(H.LINES):j.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else j.isPoints?ge.setMode(H.POINTS):j.isSprite&&ge.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Vt=j._multiDrawStarts,Xe=j._multiDrawCounts,Te=j._multiDrawCount,xn=Pt?N.get(Pt).bytesPerElement:1,Fi=Ft.get(rt).currentProgram.getUniforms();for(let mn=0;mn<Te;mn++)Fi.setValue(H,"_gl_DrawID",mn),ge.render(Vt[mn]/xn,Xe[mn])}else if(j.isInstancedMesh)ge.renderInstances(de,Ve,j.count);else if(it.isInstancedBufferGeometry){const Vt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Xe=Math.min(it.instanceCount,Vt);ge.renderInstances(de,Ve,Xe)}else ge.render(de,Ve)};function Ne(R,q,it){R.transparent===!0&&R.side===Ni&&R.forceSinglePass===!1?(R.side=Nn,R.needsUpdate=!0,Wn(R,q,it),R.side=Za,R.needsUpdate=!0,Wn(R,q,it),R.side=Ni):Wn(R,q,it)}this.compile=function(R,q,it=null){it===null&&(it=R),g=Yt.get(it),g.init(q),w.push(g),it.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==it&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const rt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const _t=j.material;if(_t)if(Array.isArray(_t))for(let Nt=0;Nt<_t.length;Nt++){const Gt=_t[Nt];Ne(Gt,it,j),rt.add(Gt)}else Ne(_t,it,j),rt.add(_t)}),g=w.pop(),rt},this.compileAsync=function(R,q,it=null){const rt=this.compile(R,q,it);return new Promise(j=>{function _t(){if(rt.forEach(function(Nt){Ft.get(Nt).currentProgram.isReady()&&rt.delete(Nt)}),rt.size===0){j(R);return}setTimeout(_t,10)}qt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let be=null;function wn(R){be&&be(R)}function ni(){Ai.stop()}function Is(){Ai.start()}const Ai=new v_;Ai.setAnimationLoop(wn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){be=R,At.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},At.addEventListener("sessionstart",ni),At.addEventListener("sessionend",Is),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,W),g=Yt.get(R,w.length),g.init(q),w.push(g),lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Tt.setFromProjectionMatrix(lt,Pi,q.reversedDepth),at=this.localClippingEnabled,V=Ct.init(this.clippingPlanes,at),y=ut.get(R,L.length),y.init(),L.push(y),At.enabled===!0&&At.isPresenting===!0){const _t=C.xr.getDepthSensingMesh();_t!==null&&wr(_t,q,-1/0,C.sortObjects)}wr(R,q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(xt,Et),oe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,oe&&Wt.addToRenderList(y,R),this.info.render.frame++,V===!0&&Ct.beginShadows();const it=g.state.shadowsArray;Xt.render(it,R,q),V===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,j=y.transmissive;if(g.setupLights(),q.isArrayCamera){const _t=q.cameras;if(j.length>0)for(let Nt=0,Gt=_t.length;Nt<Gt;Nt++){const Pt=_t[Nt];Ur(rt,j,R,Pt)}oe&&Wt.render(R);for(let Nt=0,Gt=_t.length;Nt<Gt;Nt++){const Pt=_t[Nt];Dr(y,R,Pt,Pt.viewport)}}else j.length>0&&Ur(rt,j,R,q),oe&&Wt.render(R),Dr(y,R,q);W!==null&&P===0&&(re.updateMultisampleRenderTarget(W),re.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(C,R,q),Lt.resetDefaultState(),U=-1,D=null,w.pop(),w.length>0?(g=w[w.length-1],V===!0&&Ct.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function wr(R,q,it,rt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Tt.intersectsSprite(R)){rt&&Dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(lt);const Nt=tt.update(R),Gt=R.material;Gt.visible&&y.push(R,Nt,Gt,it,Dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Tt.intersectsObject(R))){const Nt=tt.update(R),Gt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Dt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Dt.copy(Nt.boundingSphere.center)),Dt.applyMatrix4(R.matrixWorld).applyMatrix4(lt)),Array.isArray(Gt)){const Pt=Nt.groups;for(let Qt=0,ne=Pt.length;Qt<ne;Qt++){const Jt=Pt[Qt],de=Gt[Jt.materialIndex];de&&de.visible&&y.push(R,Nt,de,it,Dt.z,Jt)}}else Gt.visible&&y.push(R,Nt,Gt,it,Dt.z,null)}}const _t=R.children;for(let Nt=0,Gt=_t.length;Nt<Gt;Nt++)wr(_t[Nt],q,it,rt)}function Dr(R,q,it,rt){const j=R.opaque,_t=R.transmissive,Nt=R.transparent;g.setupLightsView(it),V===!0&&Ct.setGlobalState(C.clippingPlanes,it),rt&&Kt.viewport(B.copy(rt)),j.length>0&&Ka(j,q,it),_t.length>0&&Ka(_t,q,it),Nt.length>0&&Ka(Nt,q,it),Kt.buffers.depth.setTest(!0),Kt.buffers.depth.setMask(!0),Kt.buffers.color.setMask(!0),Kt.setPolygonOffset(!1)}function Ur(R,q,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[rt.id]===void 0&&(g.state.transmissionRenderTarget[rt.id]=new bi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?fa:Bi,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const _t=g.state.transmissionRenderTarget[rt.id],Nt=rt.viewport||B;_t.setSize(Nt.z*C.transmissionResolutionScale,Nt.w*C.transmissionResolutionScale);const Gt=C.getRenderTarget(),Pt=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(_t),C.getClearColor(ft),pt=C.getClearAlpha(),pt<1&&C.setClearColor(16777215,.5),C.clear(),oe&&Wt.render(it);const ne=C.toneMapping;C.toneMapping=ja;const Jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),g.setupLightsView(rt),V===!0&&Ct.setGlobalState(C.clippingPlanes,rt),Ka(R,it,rt),re.updateMultisampleRenderTarget(_t),re.updateRenderTargetMipmap(_t),qt.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ue=0,Ve=q.length;Ue<Ve;Ue++){const Le=q[Ue],ge=Le.object,Vt=Le.geometry,Xe=Le.material,Te=Le.group;if(Xe.side===Ni&&ge.layers.test(rt.layers)){const xn=Xe.side;Xe.side=Nn,Xe.needsUpdate=!0,Hs(ge,it,rt,Vt,Xe,Te),Xe.side=xn,Xe.needsUpdate=!0,de=!0}}de===!0&&(re.updateMultisampleRenderTarget(_t),re.updateRenderTargetMipmap(_t))}C.setRenderTarget(Gt,Pt,Qt),C.setClearColor(ft,pt),Jt!==void 0&&(rt.viewport=Jt),C.toneMapping=ne}function Ka(R,q,it){const rt=q.isScene===!0?q.overrideMaterial:null;for(let j=0,_t=R.length;j<_t;j++){const Nt=R[j],Gt=Nt.object,Pt=Nt.geometry,Qt=Nt.group;let ne=Nt.material;ne.allowOverride===!0&&rt!==null&&(ne=rt),Gt.layers.test(it.layers)&&Hs(Gt,q,it,Pt,ne,Qt)}}function Hs(R,q,it,rt,j,_t){R.onBeforeRender(C,q,it,rt,j,_t),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,q,it,rt,R,_t),j.transparent===!0&&j.side===Ni&&j.forceSinglePass===!1?(j.side=Nn,j.needsUpdate=!0,C.renderBufferDirect(it,q,rt,j,R,_t),j.side=Za,j.needsUpdate=!0,C.renderBufferDirect(it,q,rt,j,R,_t),j.side=Ni):C.renderBufferDirect(it,q,rt,j,R,_t),R.onAfterRender(C,q,it,rt,j,_t)}function Wn(R,q,it){q.isScene!==!0&&(q=Zt);const rt=Ft.get(R),j=g.state.lights,_t=g.state.shadowsArray,Nt=j.state.version,Gt=dt.getParameters(R,j.state,_t,q,it),Pt=dt.getProgramCacheKey(Gt);let Qt=rt.programs;rt.environment=R.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(R.isMeshStandardMaterial?je:Ke).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",vt),Qt=new Map,rt.programs=Qt);let ne=Qt.get(Pt);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Nt)return _n(R,Gt),ne}else Gt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Gt,C),ne=dt.acquireProgram(Gt,Pt),Qt.set(Pt,ne),rt.uniforms=Gt.uniforms;const Jt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Ct.uniform),_n(R,Gt),rt.needsLights=Jc(R),rt.lightsStateVersion=Nt,rt.needsLights&&(Jt.ambientLightColor.value=j.state.ambient,Jt.lightProbe.value=j.state.probe,Jt.directionalLights.value=j.state.directional,Jt.directionalLightShadows.value=j.state.directionalShadow,Jt.spotLights.value=j.state.spot,Jt.spotLightShadows.value=j.state.spotShadow,Jt.rectAreaLights.value=j.state.rectArea,Jt.ltc_1.value=j.state.rectAreaLTC1,Jt.ltc_2.value=j.state.rectAreaLTC2,Jt.pointLights.value=j.state.point,Jt.pointLightShadows.value=j.state.pointShadow,Jt.hemisphereLights.value=j.state.hemi,Jt.directionalShadowMap.value=j.state.directionalShadowMap,Jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Jt.spotShadowMap.value=j.state.spotShadowMap,Jt.spotLightMatrix.value=j.state.spotLightMatrix,Jt.spotLightMap.value=j.state.spotLightMap,Jt.pointShadowMap.value=j.state.pointShadowMap,Jt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function an(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Bc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function _n(R,q){const it=Ft.get(R);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function ma(R,q,it,rt,j){q.isScene!==!0&&(q=Zt),re.resetTextureUnits();const _t=q.fog,Nt=rt.isMeshStandardMaterial?q.environment:null,Gt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ns,Pt=(rt.isMeshStandardMaterial?je:Ke).get(rt.envMap||Nt),Qt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ne=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Jt=!!it.morphAttributes.position,de=!!it.morphAttributes.normal,Ue=!!it.morphAttributes.color;let Ve=ja;rt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ve=C.toneMapping);const Le=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ge=Le!==void 0?Le.length:0,Vt=Ft.get(rt),Xe=g.state.lights;if(V===!0&&(at===!0||R!==D)){const un=R===D&&rt.id===U;Ct.setState(rt,R,un)}let Te=!1;rt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xe.state.version||Vt.outputColorSpace!==Gt||j.isBatchedMesh&&Vt.batching===!1||!j.isBatchedMesh&&Vt.batching===!0||j.isBatchedMesh&&Vt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Vt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||j.isInstancedMesh&&Vt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Vt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Vt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Vt.instancingMorph===!1&&j.morphTexture!==null||Vt.envMap!==Pt||rt.fog===!0&&Vt.fog!==_t||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ct.numPlanes||Vt.numIntersection!==Ct.numIntersection)||Vt.vertexAlphas!==Qt||Vt.vertexTangents!==ne||Vt.morphTargets!==Jt||Vt.morphNormals!==de||Vt.morphColors!==Ue||Vt.toneMapping!==Ve||Vt.morphTargetsCount!==ge)&&(Te=!0):(Te=!0,Vt.__version=rt.version);let xn=Vt.currentProgram;Te===!0&&(xn=Wn(rt,q,j));let Fi=!1,mn=!1,Ja=!1;const xe=xn.getUniforms(),bn=Vt.uniforms;if(Kt.useProgram(xn.program)&&(Fi=!0,mn=!0,Ja=!0),rt.id!==U&&(U=rt.id,mn=!0),Fi||D!==R){Kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xe.setValue(H,"projectionMatrix",R.projectionMatrix),xe.setValue(H,"viewMatrix",R.matrixWorldInverse);const tn=xe.map.cameraPosition;tn!==void 0&&tn.setValue(H,Ut.setFromMatrixPosition(R.matrixWorld)),me.logarithmicDepthBuffer&&xe.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&xe.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,mn=!0,Ja=!0)}if(j.isSkinnedMesh){xe.setOptional(H,j,"bindMatrix"),xe.setOptional(H,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),xe.setValue(H,"boneTexture",un.boneTexture,re))}j.isBatchedMesh&&(xe.setOptional(H,j,"batchingTexture"),xe.setValue(H,"batchingTexture",j._matricesTexture,re),xe.setOptional(H,j,"batchingIdTexture"),xe.setValue(H,"batchingIdTexture",j._indirectTexture,re),xe.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&xe.setValue(H,"batchingColorTexture",j._colorsTexture,re));const Dn=it.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&bt.update(j,it,xn),(mn||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,xe.setValue(H,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(bn.envMap.value=Pt,bn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),mn&&(xe.setValue(H,"toneMappingExposure",C.toneMappingExposure),Vt.needsLights&&Gs(bn,Ja),_t&&rt.fog===!0&&yt.refreshFogUniforms(bn,_t),yt.refreshMaterialUniforms(bn,rt,Y,K,g.state.transmissionRenderTarget[R.id]),Bc.upload(H,an(Vt),bn,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Bc.upload(H,an(Vt),bn,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&xe.setValue(H,"center",j.center),xe.setValue(H,"modelViewMatrix",j.modelViewMatrix),xe.setValue(H,"normalMatrix",j.normalMatrix),xe.setValue(H,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const un=rt.uniformsGroups;for(let tn=0,Lr=un.length;tn<Lr;tn++){const Ci=un[tn];se.update(Ci,xn),se.bind(Ci,xn)}}return xn}function Gs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Jc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,it){const rt=Ft.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=q,Ft.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:it,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const it=Ft.get(R);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};const $c=H.createFramebuffer();this.setRenderTarget=function(R,q=0,it=0){W=R,I=q,P=it;let rt=!0,j=null,_t=!1,Nt=!1;if(R){const Pt=Ft.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Kt.bindFramebuffer(H.FRAMEBUFFER,null),rt=!1;else if(Pt.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Pt.__hasExternalTextures)re.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Pt.__boundDepthTexture!==Jt){if(Jt!==null&&Ft.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Nt=!0);const ne=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?j=ne[q][it]:j=ne[q],_t=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?j=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?j=ne[it]:j=ne,B.copy(R.viewport),ot.copy(R.scissor),ct=R.scissorTest}else B.copy(O).multiplyScalar(Y).floor(),ot.copy(et).multiplyScalar(Y).floor(),ct=St;if(it!==0&&(j=$c),Kt.bindFramebuffer(H.FRAMEBUFFER,j)&&rt&&Kt.drawBuffers(R,j),Kt.viewport(B),Kt.scissor(ot),Kt.setScissorTest(ct),_t){const Pt=Ft.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,it)}else if(Nt){const Pt=q;for(let Qt=0;Qt<R.textures.length;Qt++){const ne=Ft.get(R.textures[Qt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,it,Pt)}}else if(R!==null&&it!==0){const Pt=Ft.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pt.__webglTexture,it)}U=-1},this.readRenderTargetPixels=function(R,q,it,rt,j,_t,Nt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){Kt.bindFramebuffer(H.FRAMEBUFFER,Pt);try{const Qt=R.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!me.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-rt&&it>=0&&it<=R.height-j&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),H.readPixels(q,it,rt,j,zt.convert(ne),zt.convert(Jt),_t))}finally{const Qt=W!==null?Ft.get(W).__webglFramebuffer:null;Kt.bindFramebuffer(H.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(R,q,it,rt,j,_t,Nt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(q>=0&&q<=R.width-rt&&it>=0&&it<=R.height-j){Kt.bindFramebuffer(H.FRAMEBUFFER,Pt);const Qt=R.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!me.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,de),H.bufferData(H.PIXEL_PACK_BUFFER,_t.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),H.readPixels(q,it,rt,j,zt.convert(ne),zt.convert(Jt),0);const Ue=W!==null?Ft.get(W).__webglFramebuffer:null;Kt.bindFramebuffer(H.FRAMEBUFFER,Ue);const Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Ny(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,de),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,_t),H.deleteBuffer(de),H.deleteSync(Ve),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,it=0){const rt=Math.pow(2,-it),j=Math.floor(R.image.width*rt),_t=Math.floor(R.image.height*rt),Nt=q!==null?q.x:0,Gt=q!==null?q.y:0;re.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Nt,Gt,j,_t),Kt.unbindTexture()};const el=H.createFramebuffer(),Qa=H.createFramebuffer();this.copyTextureToTexture=function(R,q,it=null,rt=null,j=0,_t=null){_t===null&&(j!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=j,j=0):_t=0);let Nt,Gt,Pt,Qt,ne,Jt,de,Ue,Ve;const Le=R.isCompressedTexture?R.mipmaps[_t]:R.image;if(it!==null)Nt=it.max.x-it.min.x,Gt=it.max.y-it.min.y,Pt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,ne=it.min.y,Jt=it.isBox3?it.min.z:0;else{const Dn=Math.pow(2,-j);Nt=Math.floor(Le.width*Dn),Gt=Math.floor(Le.height*Dn),R.isDataArrayTexture?Pt=Le.depth:R.isData3DTexture?Pt=Math.floor(Le.depth*Dn):Pt=1,Qt=0,ne=0,Jt=0}rt!==null?(de=rt.x,Ue=rt.y,Ve=rt.z):(de=0,Ue=0,Ve=0);const ge=zt.convert(q.format),Vt=zt.convert(q.type);let Xe;q.isData3DTexture?(re.setTexture3D(q,0),Xe=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(re.setTexture2DArray(q,0),Xe=H.TEXTURE_2D_ARRAY):(re.setTexture2D(q,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Te=H.getParameter(H.UNPACK_ROW_LENGTH),xn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Fi=H.getParameter(H.UNPACK_SKIP_PIXELS),mn=H.getParameter(H.UNPACK_SKIP_ROWS),Ja=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);const xe=R.isDataArrayTexture||R.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Dn=Ft.get(R),un=Ft.get(q),tn=Ft.get(Dn.__renderTarget),Lr=Ft.get(un.__renderTarget);Kt.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),Kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let Ci=0;Ci<Pt;Ci++)xe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,j,Jt+Ci),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.get(q).__webglTexture,_t,Ve+Ci)),H.blitFramebuffer(Qt,ne,Nt,Gt,de,Ue,Nt,Gt,H.DEPTH_BUFFER_BIT,H.NEAREST);Kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ft.has(R)){const Dn=Ft.get(R),un=Ft.get(q);Kt.bindFramebuffer(H.READ_FRAMEBUFFER,el),Kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Qa);for(let tn=0;tn<Pt;tn++)xe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,j,Jt+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,j),bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,_t,Ve+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,_t),j!==0?H.blitFramebuffer(Qt,ne,Nt,Gt,de,Ue,Nt,Gt,H.COLOR_BUFFER_BIT,H.NEAREST):bn?H.copyTexSubImage3D(Xe,_t,de,Ue,Ve+tn,Qt,ne,Nt,Gt):H.copyTexSubImage2D(Xe,_t,de,Ue,Qt,ne,Nt,Gt);Kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Xe,_t,de,Ue,Ve,Nt,Gt,Pt,ge,Vt,Le.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,_t,de,Ue,Ve,Nt,Gt,Pt,ge,Le.data):H.texSubImage3D(Xe,_t,de,Ue,Ve,Nt,Gt,Pt,ge,Vt,Le):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,_t,de,Ue,Nt,Gt,ge,Vt,Le.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,_t,de,Ue,Le.width,Le.height,ge,Le.data):H.texSubImage2D(H.TEXTURE_2D,_t,de,Ue,Nt,Gt,ge,Vt,Le);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Fi),H.pixelStorei(H.UNPACK_SKIP_ROWS,mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ja),_t===0&&q.generateMipmaps&&H.generateMipmap(Xe),Kt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,it=null,rt=null,j=0){return Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,it,rt,j)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Kt.unbindTexture()},this.resetState=function(){I=0,P=0,W=null,Kt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const Fc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class tl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JT=new g_(-1,1,1,-1,0,1);class $T extends Ti{constructor(){super(),this.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new di([0,2,0,0,2,0],2))}}const tA=new $T;class E_{constructor(t){this._mesh=new Vn(tA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,JT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class eA extends tl{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vc.clone(t.uniforms),this.material=new Rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new E_(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Hv extends tl{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class nA extends tl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class iA{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const r=t.getSize(new ce);this._width=r.width,this._height=r.height,i=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fa}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eA(Fc),this.copyPass.material.blending=ua,this.clock=new pM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),h.needsSwap){if(r){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Hv!==void 0&&(h instanceof Hv?r=!0:h instanceof nA&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(r,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aA extends tl{constructor(t,i,r=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(t,i,r){const l=t.autoClear;t.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const rA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ps extends tl{constructor(t,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=t!==void 0?new ce(t.x,t.y):new ce(256,256),this.clearColor=new Ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new bi(c,h,{type:fa}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const _=new bi(c,h,{type:fa});_.texture.name="UnrealBloomPass.h"+v,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const x=new bi(c,h,{type:fa});x.texture.name="UnrealBloomPass.v"+v,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),c=Math.round(c/2),h=Math.round(h/2)}const d=rA;this.highPassUniforms=Vc.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new ce(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vc.clone(Fc.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:Fc.vertexShader,fragmentShader:Fc.fragmentShader,blending:ws,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ae,this._oldClearAlpha=1,this._basic=new Qo,this._fsQuad=new E_(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(r,l),this.renderTargetsVertical[c].setSize(r,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ce(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(t,i,r,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Ps.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Ps.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[];for(let r=0;r<t;r++)i.push(.39894*Math.exp(-.5*r*r/(t*t))/t);return new Rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Rn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ps.BlurDirectionX=new ce(1,0);Ps.BlurDirectionY=new ce(0,1);const zs=Math.PI*2;function sA(s){return s==="D6"?6:s==="D10"?10:8}function kc(s,t){const i=Math.cos(t),r=Math.sin(t);return new Q(s.x*i-s.y*r,s.x*r+s.y*i,s.z)}function oA(s,t){const i=Math.cos(t),r=Math.sin(t);return new Q(s.x*i+s.z*r,s.y,-s.x*r+s.z*i)}function lA(s){return new Q(s.x,-s.y,s.z)}function cA(s){switch(s){case"loxodrome lattice":return{pattern:s,layerFrequency:7,layerDepth:.6,orbitLayerCoupling:1.2,motifs:[Ze(.76,.1,5,.27,.42,.35,.05,.1,.02,1),Ze(2.38,.48,5,.27,.42,1.92,.05,2.2,-.02,-1)]};case"kagome rosette":return{pattern:s,layerFrequency:6,layerDepth:.68,orbitLayerCoupling:1.5,motifs:[Ze(.9,.08,3,.31,.2,0,.1,.3,.05,1),Ze(1.62,.28,4,.29,.28,1.4,.07,1.9,0,-1),Ze(2.34,.48,3,.31,.2,2.8,.1,3.5,-.05,1)]};case"goldberg shell":return{pattern:s,layerFrequency:8,layerDepth:.62,orbitLayerCoupling:2.1,motifs:[Ze(.72,.18,5,.26,.18,.2,.08,.6,.04,1),Ze(1.58,.36,6,.24,.25,1.7,.06,2.2,0,-1),Ze(2.4,.56,5,.26,.18,3.2,.08,3.8,-.04,1)]};case"flower-of-life shell":return{pattern:s,layerFrequency:6,layerDepth:.56,orbitLayerCoupling:1,motifs:[Ze(.84,.05,6,.24,.12,0,.14,0,.04,1),Ze(2.3,.52,6,.24,.12,1.05,.14,3.14,-.04,-1)]};case"pentagonal star braid":return{pattern:s,layerFrequency:5,layerDepth:.66,orbitLayerCoupling:1.8,motifs:[Ze(.68,.12,5,.34,.33,.1,.08,.8,.03,1),Ze(2.5,.48,5,.34,.33,2,.08,2.9,-.03,-1)]};case"dense phyllotaxis":return{pattern:s,layerFrequency:9,layerDepth:.58,orbitLayerCoupling:2.4,motifs:[Ze(.7,.18,7,.22,.2,0,.06,.2,.04,1),Ze(1.55,.34,8,.2,.24,1.9,.05,2.5,0,-1),Ze(2.42,.54,7,.22,.2,3.8,.06,4.2,-.04,1)]};case"temari orbit":return{pattern:s,layerFrequency:4,layerDepth:.62,orbitLayerCoupling:1,motifs:[Ze(.94,.18,4,.33,.24,.2,.06,.4,.03,1),Ze(2.16,.34,5,.31,.22,1.5,.07,2.8,-.03,-1)]};case"trihex orbit":return{pattern:s,layerFrequency:5,layerDepth:.66,orbitLayerCoupling:1.5,motifs:[Ze(1.02,.12,3,.36,.26,.1,.04,0,.04,1),Ze(2.02,.36,4,.32,.24,2.2,.05,2.4,-.04,-1)]};case"geodesic flower":return{pattern:s,layerFrequency:6,layerDepth:.64,orbitLayerCoupling:2,motifs:[Ze(.82,.16,5,.34,.2,0,.08,.7,.05,1),Ze(2.24,.4,5,.32,.22,2.9,.08,3.4,-.05,-1)]};default:return{pattern:"dihedral basket",layerFrequency:3,layerDepth:.6,orbitLayerCoupling:1,motifs:[Ze(1.02,.14,2,.34,.25,.2,.03,0,.04,1),Ze(2.05,.38,3,.3,.22,1.9,.04,2.4,-.04,-1)]}}}function Ze(s,t,i,r,l,c,h,d,m,p){return{tilt:s,roll:t,waves:i,amplitude:r,skew:l,phase:c,petal:h,layerPhase:d,layerBias:m,handedness:p}}function Gv(s){const t=sA(s.group),i=uA(s),r=fA(i,s.progress),l=Math.max(r.source.motifs.length,r.target.motifs.length),c=hA(t,l).map(d=>dA(d,r,s,t,l)),h=Math.max(0,Math.round(s.relaxationSteps));return zd(c,s,h),mA(c,s,t,l),Wh(c,s,t,l),Xv(c,t,s.symmetrySettle),zd(c,s,Math.ceil(h*.35),.58),Wh(c,s,t,l,.65),Xv(c,t,s.symmetrySettle*.55),Wh(c,s,t,l,.42,2),UA(c,Math.max(.2,s.shellRadius),Math.max(.01,s.width),Math.max(4,Math.round(s.crossSamples)),s.showWPassage)}function uA(s){const i=(s.trajectoryPatterns?.length?s.trajectoryPatterns:[s.sourcePattern,s.targetPattern]).slice(0,4);for(;i.length<2;)i.push(s.targetPattern);return i.map(r=>cA(r))}function fA(s,t){const i=Math.max(1,s.length-1),r=On(t)*i,l=Math.min(i-1,Math.floor(r)),c=r-l;return{source:s[l],target:s[l+1],progress:c,segmentIndex:l}}function hA(s,t){const i=[];for(let r=0;r<t;r++)for(const l of[1,-1])for(let c=0;c<s;c++)i.push({motif:r,copy:c,mirror:l});return i}function dA(s,t,i,r,l){const c=l*r*2,h=pi(Math.round(i.samples/Math.sqrt(c)*.72),42,108),d=IA(t.progress),m=t.source.motifs[s.motif%t.source.motifs.length],p=t.target.motifs[s.motif%t.target.motifs.length],v=[];for(let _=0;_<h;_++){const x=_/h,M=Vv(m,s,x,r,l),b=Vv(p,s,x,r,l),E=Kd(M,b,d),y=kv(t.source,m,s,x,i.shellThickness,r,l),g=kv(t.target,p,s,x,i.shellThickness,r,l);v.push({direction:E,height:b_(y,g,d),wWindow:Math.abs(i.liftAmplitude)>1e-4?pA(s,x,t,i,r,l):0})}return{key:s,samples:v}}function Vv(s,t,i,r,l){const c=i*zs,h=zs/r,d=Rr(t,l),m=s.handedness*t.mirror,p=t.mirror>0?s.phase:-s.phase,v=c+m*s.skew*Math.sin(s.waves*c+p)+m*s.petal*Math.sin((s.waves+1)*c-p*.6)+d*h*.08,_=pi(s.amplitude*Math.sin(s.waves*c+p)+s.petal*.7*Math.sin((s.waves*2-1)*c+s.layerPhase)+d*.055*Math.sin(2*c-p),-.86,.86),x=Math.sqrt(Math.max(1e-4,1-_*_));let M=new Q(Math.cos(v)*x,Math.sin(v)*x,_);return M=oA(M,s.tilt+d*.06),M=kc(M,s.roll+d*h*.1),t.mirror<0&&(M=lA(M)),M=kc(M,t.copy*h),M.normalize()}function kv(s,t,i,r,l,c,h){const d=r*zs,m=i.copy*zs/c,p=i.mirror>0?0:Math.PI*.5,v=.16*Math.sin(s.layerFrequency*d+t.layerPhase+p+s.orbitLayerCoupling*m)+.08*Math.cos((s.layerFrequency+t.waves)*d-m+t.phase),_=Rr(i,h)*.74+t.layerBias*.24;return pi((v*s.layerDepth+_)*l,-l*.68,l*.68)}function pA(s,t,i,r,l,c){if(i.source.pattern===i.target.pattern)return 0;const h=On(i.progress);if(h<=0||h>=1)return 0;const d=Math.max(1,c*2),m=r.transitionMode==="local study"?1:d;let p=h*m;p+=i.segmentIndex*.2360679775,r.transitionMode==="phase-staggered orbits"&&(p+=s.copy/Math.max(1,l)*.38);const v=p%m,_=Math.min(m-1,Math.floor(v)),x=v-_;if(r.transitionMode==="local study"){if(s.motif!==0||s.copy!==0||s.mirror!==1)return 0}else{const y=_%c;if(s.motif!==y)return 0}const M=HA(.5/m+_*.38196601125),b=r.transitionMode==="local study"?.07:Math.max(.034,.16/m);return zA(FA(t,M),b)*PA(x)}function mA(s,t,i,r,l=1){const c=Math.max(.2,t.shellRadius),h=Math.max(t.shellThickness*.74,t.width*3.8),d=Math.max(t.width*3.35,.14),m=Math.max(1,Math.min(3,Math.round(t.relaxationSteps*.35)+1));for(let p=0;p<m;p++){const v=RA(s,c,t.width),_=Kc(v.map(E=>E.position),d),x=s.map(E=>new Float32Array(E.samples.length)),M=s.map(E=>new Float32Array(E.samples.length)),b=s.map(E=>E.samples.map(()=>new Q));for(let E=0;E<v.length;E++){const y=v[E],g=Qc(_,y.position,d);for(const L of g){if(L<=E)continue;const w=v[L];if(y.stripIndex===w.stripIndex&&qo(y.sampleIndex,w.sampleIndex,y.sampleCount)<8)continue;const C=y.collisionWeight*w.collisionWeight;if(C<=1e-4)continue;const G=y.position.clone().sub(w.position),I=G.lengthSq(),P=y.contactRadius+w.contactRadius,W=P*P;if(I>=W)continue;const U=Math.sqrt(Math.max(1e-7,I)),D=(P-U)/P,B=y.sample.height-w.sample.height,ot=Rr(y.strip.key,r)-Rr(w.strip.key,r),ct=Math.abs(B)>t.width*.25?Math.sign(B):ot===0?Xc(y.strip.key,i)>=Xc(w.strip.key,i)?1:-1:Math.sign(ot),ft=D*D*P*C*(.74+p*.1)*l;x[y.stripIndex][y.sampleIndex]+=ct*ft,x[w.stripIndex][w.sampleIndex]-=ct*ft,M[y.stripIndex][y.sampleIndex]+=1,M[w.stripIndex][w.sampleIndex]+=1;const pt=G.clone().sub(y.sample.direction.clone().multiplyScalar(G.dot(y.sample.direction)));if(pt.lengthSq()>1e-7){const z=Math.min(.038,ft/c*.34);pt.normalize().multiplyScalar(z),b[y.stripIndex][y.sampleIndex].add(pt),b[w.stripIndex][w.sampleIndex].sub(pt)}}}for(let E=0;E<s.length;E++){const y=s[E];for(let g=0;g<y.samples.length;g++){const L=M[E][g];if(L<=0)continue;const w=y.samples[g];w.height=pi(w.height+x[E][g]/L,-h,h);const C=b[E][g];C.lengthSq()>1e-7&&w.direction.add(C.multiplyScalar(1/Math.max(1,L))).normalize()}}}}function Xv(s,t,i){const r=On(i);if(r<=1e-4||s.length===0)return;const l=zs/t,c=new Map;for(const h of s){const d=`${h.key.motif}:${h.key.mirror}`,m=c.get(d);m?m.push(h):c.set(d,[h])}for(const h of c.values()){const d=h[0]?.samples.length??0;if(d!==0)for(let m=0;m<d;m++){const p=new Q;let v=0;for(const _ of h){const x=_.samples[m],b=.35+.65*(1-da(x.wWindow*1.5));p.add(kc(x.direction,-_.key.copy*l).multiplyScalar(b)),v+=b}if(!(p.lengthSq()<1e-6||v<=0)){p.multiplyScalar(1/v).normalize();for(const _ of h){const x=_.samples[m],M=1-da(x.wWindow*1.5),b=kc(p,_.key.copy*l);x.direction.copy(Kd(x.direction,b,r*(.45+.55*M))).normalize()}}}}}function Wh(s,t,i,r,l=1,c){if(!t.solidSolve)return;const h=c??Math.max(0,Math.round(t.solidPasses));if(h<=0)return;const d=Math.max(.2,t.shellRadius),m=Math.max(.01,t.width),p=pi((m-.065)/.09,0,1),v=Math.max(t.shellThickness*.86,m*5.2),_=On(l),x=On(t.creaseStrength),M=Math.max(m*(2.55+p*.72),.13+p*.03),b=Math.max(m*(2.85+p*.9),M*1.06),E=Math.max(m*(.96+p*.42),.05+p*.02);for(let y=0;y<h;y++){const g=gA(s);vA(s,g,d,m,M,_*(.72+y*.045),x,r),_A(s,g,d,b,_*(.56+y*.04),x,i,r),xA(s,g,d,m,E,_*(.88+y*.055),x,r,p),SA(s,g,d,v,m*(.62+p*.14)),(y%2===1||y===h-1)&&zd(s,t,1,.18+.1*(1-p))}}function gA(s){return{tangentPushes:s.map(t=>t.samples.map(()=>new Q)),heightPushes:s.map(t=>new Float32Array(t.samples.length)),weights:s.map(t=>new Float32Array(t.samples.length))}}function vA(s,t,i,r,l,c,h,d){const m=yA(s,i,r,d),p=Kc(m.map(_=>_.position),l),v=l*l;for(let _=0;_<m.length;_++){const x=m[_],M=Qc(p,x.position,l);for(const b of M){if(b<=_)continue;const E=m[b];if(x.stripIndex===E.stripIndex&&qo(x.sampleIndex,E.sampleIndex,x.sampleCount)<9)continue;const y=x.collisionWeight*E.collisionWeight;if(y<=1e-4)continue;const g=x.position.clone().sub(E.position),L=g.lengthSq();if(L>=v)continue;const w=Math.sqrt(Math.max(1e-7,L)),C=(l-w)/l,G=C*C*l*c*y,I=Qd(g,x.stripIndex*4096+x.sampleIndex,E.stripIndex*4096+E.sampleIndex);Ya(s,t,x.stripIndex,x.sampleIndex,I,G,h),Ya(s,t,E.stripIndex,E.sampleIndex,I.clone().multiplyScalar(-1),G,h)}}}function _A(s,t,i,r,l,c,h,d){const m=MA(s,i),p=Kc(m.map(_=>_.midpoint),r),v=r*r;for(let _=0;_<m.length;_++){const x=m[_],M=Qc(p,x.midpoint,r);for(const b of M){if(b<=_)continue;const E=m[b];if(x.stripIndex===E.stripIndex&&qo(x.sampleIndex,E.sampleIndex,x.sampleCount)<8||x.strip.key.motif===E.strip.key.motif&&x.strip.key.mirror===E.strip.key.mirror&&qo(x.sampleIndex,E.sampleIndex,x.sampleCount)<5)continue;const y=x.collisionWeight*E.collisionWeight;if(y<=1e-4)continue;const g=NA(x.start,x.end,E.start,E.end);if(g.distanceSq>=v)continue;const L=Math.sqrt(Math.max(1e-7,g.distanceSq)),w=(r-L)/r,C=CA(x.strip.key,E.strip.key,h,d),I=Qd(g.delta,x.stripIndex*4096+x.sampleIndex,E.stripIndex*4096+E.sampleIndex).addScaledVector(x.strip.samples[x.sampleIndex].direction,C*.18).normalize(),P=w*w*r*l*y;Ya(s,t,x.stripIndex,x.sampleIndex,I,P*(1-g.s),c),Ya(s,t,x.stripIndex,x.nextIndex,I,P*g.s,c),Ya(s,t,E.stripIndex,E.sampleIndex,I.clone().multiplyScalar(-1),P*(1-g.t),c),Ya(s,t,E.stripIndex,E.nextIndex,I.clone().multiplyScalar(-1),P*g.t,c)}}}function xA(s,t,i,r,l,c,h,d,m){const p=EA(s,i,r,d,m),v=Math.max(l*2.05,r*(1.1+m*.45)),_=Kc(p.map(M=>M.position),v),x=l*l;for(let M=0;M<p.length;M++){const b=p[M],E=Qc(_,b.position,v);for(const y of E){if(y<=M)continue;const g=p[y];if(b.stripIndex===g.stripIndex&&qo(b.sampleIndex,g.sampleIndex,b.sampleCount)<9)continue;const L=b.collisionWeight*g.collisionWeight;if(L<=1e-4)continue;const w=b.position.clone().sub(g.position),C=w.lengthSq();if(C>=x)continue;const G=Math.sqrt(Math.max(1e-7,C)),I=(l-G)/l,P=Qd(w,b.stripIndex*4096+b.sampleIndex,g.stripIndex*4096+g.sampleIndex),W=OA(b.sample.direction,P,b.sampleIndex,Math.max(2,d*2)),U=P.clone().multiplyScalar(.68-m*.08).addScaledVector(W,(.32+m*.18)*I).normalize(),D=I*I*l*c*L*(1+m*.5);Ya(s,t,b.stripIndex,b.sampleIndex,U,D,h),Ya(s,t,g.stripIndex,g.sampleIndex,U.clone().multiplyScalar(-1),D,h)}}}function SA(s,t,i,r,l){for(let c=0;c<s.length;c++){const h=s[c];for(let d=0;d<h.samples.length;d++){const m=t.weights[c][d];if(m<=0)continue;const p=h.samples[d],v=t.tangentPushes[c][d].multiplyScalar(1/m),_=v.length();_>l&&v.multiplyScalar(l/_),p.direction.add(v.multiplyScalar(1/Math.max(.4,i+p.height))).normalize();const x=pi(t.heightPushes[c][d]/m,-l,l);p.height=pi(p.height+x,-r,r)}}}function Ya(s,t,i,r,l,c,h){if(c<=0)return;const d=s[i].samples.length;Fo(s,t,i,r,l,c,1);const m=On(h);m<=1e-4||(Fo(s,t,i,(r-1+d)%d,l,c*m*.46,.7),Fo(s,t,i,(r+1)%d,l,c*m*.46,.7),Fo(s,t,i,(r-2+d)%d,l,c*m*.2,.45),Fo(s,t,i,(r+2)%d,l,c*m*.2,.45))}function Fo(s,t,i,r,l,c,h){const m=s[i].samples[r].direction,p=l.dot(m),v=l.clone().sub(m.clone().multiplyScalar(p));t.tangentPushes[i][r].addScaledVector(v,c),t.heightPushes[i][r]+=p*c,t.weights[i][r]+=h}function yA(s,t,i,r){const l=[];for(let c=0;c<s.length;c++){const h=s[c];for(let d=0;d<h.samples.length;d++){const m=h.samples[d],p=Wo(m);p<=1e-4||l.push({strip:h,stripIndex:c,sample:m,sampleIndex:d,sampleCount:h.samples.length,lane:Rr(h.key,r),position:m.direction.clone().multiplyScalar(t+m.height),contactRadius:i*.92+.018,collisionWeight:p})}}return l}function MA(s,t){const i=[];for(let r=0;r<s.length;r++){const l=s[r],c=l.samples.map(h=>h.direction.clone().multiplyScalar(t+h.height));for(let h=0;h<l.samples.length;h++){const d=(h+1)%l.samples.length,m=AA(l.samples,h,d);m<=1e-4||i.push({strip:l,stripIndex:r,sampleIndex:h,nextIndex:d,sampleCount:l.samples.length,start:c[h],end:c[d],midpoint:c[h].clone().add(c[d]).multiplyScalar(.5),collisionWeight:m})}}return i}function EA(s,t,i,r,l){const c=[],h=bA(l);for(let d=0;d<s.length;d++){const m=s[d],p=m.samples.map(v=>v.direction.clone().multiplyScalar(t+v.height));for(let v=0;v<m.samples.length;v++){const _=m.samples[v],x=Wo(_);if(x<=1e-4)continue;const M=p[v],b=p[(v-1+p.length)%p.length],y=p[(v+1)%p.length].clone().sub(b).normalize(),g=_.direction.clone().normalize();let L=g.clone().cross(y).normalize();L.lengthSq()<1e-6&&(L=Zc(y));for(const w of h){const C=Math.pow(Math.abs(w),2.8);c.push({strip:m,stripIndex:d,sample:_,sampleIndex:v,sampleCount:m.samples.length,lane:w,position:M.clone().addScaledVector(L,i*w).addScaledVector(g,C*i*.08),contactRadius:TA(w,i),collisionWeight:x*(.55+C*.45+(w===0?.18:0))})}}}return c}function bA(s){return s>.72?[-.98,-.74,-.5,-.26,0,.26,.5,.74,.98]:s>.28?[-.98,-.62,-.28,0,.28,.62,.98]:[-.96,-.48,0,.48,.96]}function TA(s,t){const i=Math.pow(Math.abs(s),1.8);return t*(.34+i*.18)+.012}function AA(s,t,i){return Math.min(Wo(s[t]),Wo(s[i]))}function CA(s,t,i,r){const l=Rr(s,r)-Rr(t,r);return Math.abs(l)>.001?Math.sign(l):Xc(s,i)>=Xc(t,i)?1:-1}function RA(s,t,i){const r=[],l=[-.96,0,.96];for(let c=0;c<s.length;c++){const h=s[c],d=h.samples.map(m=>m.direction.clone().multiplyScalar(t+m.height));for(let m=0;m<h.samples.length;m++){const p=h.samples[m],v=Wo(p);if(v<=1e-4)continue;const _=d[m],x=d[(m-1+d.length)%d.length],b=d[(m+1)%d.length].clone().sub(x).normalize(),E=p.direction.clone().normalize();let y=E.clone().cross(b).normalize();y.lengthSq()<1e-6&&(y=Zc(b));for(const g of l){const L=Math.pow(Math.abs(g),2.8),w=_.clone().addScaledVector(y,i*g).addScaledVector(E,L*i*.08);r.push({strip:h,stripIndex:c,sample:p,sampleIndex:m,sampleCount:h.samples.length,lane:g,position:w,contactRadius:wA(g,i),collisionWeight:v*(g===0?1:.78)})}}}return r}function wA(s,t){return s===0?t*1.14+.018:t*.68+.016}function zd(s,t,i,r=1){const l=Math.max(t.shellThickness*.7,t.width*3.4);for(let c=0;c<i;c++)for(const h of s){const d=h.samples.length,m=[],p=new Float32Array(d);for(let v=0;v<d;v++){const _=h.samples[v],x=h.samples[(v-1+d)%d],M=h.samples[(v+1)%d],b=x.direction.clone().add(M.direction).normalize(),E=1-pi(_.direction.dot(b),-1,1),y=(Math.abs(_.height-x.height)+Math.abs(M.height-_.height))/Math.max(t.shellThickness,.001),g=1-.5*da(y*1.8),L=(.042+.04*da(E*28))*(1-da(_.wWindow*1.35))*g*r;m.push(Kd(_.direction,b,L)),p[v]=pi(b_(_.height,(x.height+M.height)*.5,L*.82),-l,l)}for(let v=0;v<d;v++)h.samples[v].direction.copy(m[v]).normalize(),h.samples[v].height=p[v];DA(h,l)}}function DA(s,t){for(const i of s.samples)i.direction.normalize(),i.height=pi(i.height,-t,t)}function Rr(s,t){const i=Math.max(2,t*2),r=s.motif*2+(s.mirror<0?1:0);return i<=1?0:r/(i-1)*2-1}function Xc(s,t){return(s.motif*2+(s.mirror<0?1:0))*t+s.copy}function UA(s,t,i,r,l){const c=[],h=[],d=[],m=[],p=[],v=[];let _=0;for(const M of s){const b=LA(M,t),E=b.length,y=M.samples.map(C=>On(C.wWindow)),g=y.map(C=>l||C<=.001?1:0),L=y.map(C=>l&&C>.001?1:0),w=y.map(C=>l&&C>.001?.12+.34*(1-da(C)):1);for(let C=0;C<E;C++){const G=b[C];for(let I=0;I<r;I++){const P=I/(r-1),W=P*2-1,U=Math.pow(Math.abs(W),2.8),D=i*(g[C]??1),B=G.position.clone().addScaledVector(G.normal,D*W).addScaledVector(G.outward,U*D*.08),ot=G.outward.clone().multiplyScalar(.92+U*.4).addScaledVector(G.binormal,.16).addScaledVector(G.normal,W*.08).normalize();c.push(B.x,B.y,B.z),h.push(ot.x,ot.y,ot.z),d.push((C/E+M.key.motif*.137+M.key.copy*.019)%1,P),m.push(L[C]??0),p.push(w[C]??1)}}for(let C=0;C<E;C++){const G=(C+1)%E,I=(g[C]??1)>.04,P=(g[G]??1)>.04;if(!(!I||!P))for(let W=0;W<r-1;W++){const U=_+C*r+W,D=_+G*r+W,B=_+G*r+W+1,ot=_+C*r+W+1;v.push(U,D,ot,D,B,ot)}}_+=E*r}const x=new Ti;return x.setAttribute("position",new hn(new Float32Array(c),3)),x.setAttribute("normal",new hn(new Float32Array(h),3)),x.setAttribute("uv",new hn(new Float32Array(d),2)),x.setAttribute("aWIntensity",new hn(new Float32Array(m),1)),x.setAttribute("aWAlpha",new hn(new Float32Array(p),1)),x.setIndex(v),x.computeBoundingSphere(),x}function LA(s,t){const i=s.samples.length,r=s.samples.map(c=>c.direction.clone().multiplyScalar(t+c.height)),l=[];for(let c=0;c<i;c++){const h=r[(c+1)%i].clone().sub(r[(c-1+i)%i]).normalize(),d=s.samples[c].direction.clone().normalize();let m=d.clone().cross(h).normalize();m.lengthSq()<1e-6&&(m=Zc(h));const p=h.clone().cross(m).normalize();l.push({position:r[c],tangent:h,normal:m,binormal:p,outward:d,pinch:1})}return l}function Zc(s){const t=[new Q(0,0,1),new Q(0,1,0),new Q(1,0,0)];let i=new Q(1,0,0),r=-1;for(const l of t){const c=l.clone().sub(s.clone().multiplyScalar(l.dot(s))),h=c.lengthSq();h>r&&(i=c,r=h)}return i.normalize()}function Kd(s,t,i){const r=On(i),l=pi(s.dot(t),-.9995,.9995),c=Math.acos(l)*r,h=t.clone().sub(s.clone().multiplyScalar(l));return h.lengthSq()<1e-6?s.clone().lerp(t,r).normalize():(h.normalize(),s.clone().multiplyScalar(Math.cos(c)).add(h.multiplyScalar(Math.sin(c))).normalize())}function NA(s,t,i,r){const l=t.clone().sub(s),c=r.clone().sub(i),h=s.clone().sub(i),d=l.dot(l),m=c.dot(c),p=l.dot(c),v=l.dot(h),_=c.dot(h),x=d*m-p*p;let M=x>1e-7?(p*_-m*v)/x:0,b=x>1e-7?(d*_-p*v)/x:0;M=On(M),b=On(b);const E=s.clone().addScaledVector(l,M),y=i.clone().addScaledVector(c,b),g=E.clone().sub(y);return{s:M,t:b,delta:g,distanceSq:g.lengthSq()}}function Qd(s,t,i){if(s.lengthSq()>1e-7)return s.normalize();const r=Math.sin((t+1)*12.9898+(i+1)*78.233)*43758.5453,l=(r-Math.floor(r))*Math.PI*2;return new Q(Math.cos(l),Math.sin(l),Math.sin(l*1.7)).normalize()}function OA(s,t,i,r){let l=s.clone().cross(t);l.lengthSq()<1e-6&&(l=Zc(s)),l.normalize();const c=Math.atan2(s.y,s.x),h=Math.sin(c*r+i*.38196601125)>=0?1:-1;return l.multiplyScalar(h)}function PA(s){const t=On(s);return Wv(.43,.49,t)*(1-Wv(.51,.57,t))}function zA(s,t){return s>=t?0:da(1-s/t)}function Wo(s){return 1-da(On(s.wWindow*1.35))}function Kc(s,t){const i=new Map;for(let r=0;r<s.length;r++){const l=BA(s[r],t),c=i.get(l);c?c.push(r):i.set(l,[r])}return i}function Qc(s,t,i){const r=Math.floor(t.x/i),l=Math.floor(t.y/i),c=Math.floor(t.z/i),h=[];for(let d=-1;d<=1;d++)for(let m=-1;m<=1;m++)for(let p=-1;p<=1;p++){const v=s.get(`${r+d}:${l+m}:${c+p}`);v&&h.push(...v)}return h}function BA(s,t){return`${Math.floor(s.x/t)}:${Math.floor(s.y/t)}:${Math.floor(s.z/t)}`}function qo(s,t,i){const r=Math.abs(s-t);return Math.min(r,i-r)}function FA(s,t){const i=Math.abs(s-t);return Math.min(i,1-i)}function da(s){const t=On(s);return t*t*t*(t*(t*6-15)+10)}function IA(s){const t=On(s);return On(t+.035*Math.sin(zs*t))}function Wv(s,t,i){return da((i-s)/Math.max(1e-4,t-s))}function b_(s,t,i){return s+(t-s)*i}function HA(s){return s-Math.floor(s)}function On(s){return pi(s,0,1)}function pi(s,t,i){return Math.max(t,Math.min(i,s))}class zi{constructor(t,i,r,l,c="div"){this.parent=t,this.object=i,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(c),this.domElement.classList.add("controller"),this.domElement.classList.add(l),this.$name=document.createElement("div"),this.$name.classList.add("name"),zi.nextNameID=zi.nextNameID||0,this.$name.id=`lil-gui-name-${++zi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class GA extends zi{constructor(t,i,r){super(t,i,r,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Bd(s){let t,i;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const VA={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Bd,toHexString:Bd},Yo={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},kA={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,i=1){const r=Yo.fromHexString(s);t[0]=(r>>16&255)/255*i,t[1]=(r>>8&255)/255*i,t[2]=(r&255)/255*i},toHexString([s,t,i],r=1){r=255/r;const l=s*r<<16^t*r<<8^i*r<<0;return Yo.toHexString(l)}},XA={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,i=1){const r=Yo.fromHexString(s);t.r=(r>>16&255)/255*i,t.g=(r>>8&255)/255*i,t.b=(r&255)/255*i},toHexString({r:s,g:t,b:i},r=1){r=255/r;const l=s*r<<16^t*r<<8^i*r<<0;return Yo.toHexString(l)}},WA=[VA,Yo,kA,XA];function qA(s){return WA.find(t=>t.match(s))}class YA extends zi{constructor(t,i,r,l){super(t,i,r,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=qA(this.initialValue),this._rgbScale=l,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const c=Bd(this.$text.value);c&&this._setValueFromHexString(c)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class qh extends zi{constructor(t,i,r){super(t,i,r,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",l=>{l.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class jA extends zi{constructor(t,i,r,l,c,h){super(t,i,r,"number"),this._initInput(),this.min(l),this.max(c);const d=h!==void 0;this.step(d?h:this._getImplicitStep(),d),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let L=parseFloat(this.$input.value);isNaN(L)||(this._stepExplicit&&(L=this._snap(L)),this.setValue(this._clamp(L)))},r=L=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+L),this.$input.value=this.getValue())},l=L=>{L.key==="Enter"&&this.$input.blur(),L.code==="ArrowUp"&&(L.preventDefault(),r(this._step*this._arrowKeyMultiplier(L))),L.code==="ArrowDown"&&(L.preventDefault(),r(this._step*this._arrowKeyMultiplier(L)*-1))},c=L=>{this._inputFocused&&(L.preventDefault(),r(this._step*this._normalizeMouseWheel(L)))};let h=!1,d,m,p,v,_;const x=5,M=L=>{d=L.clientX,m=p=L.clientY,h=!0,v=this.getValue(),_=0,window.addEventListener("mousemove",b),window.addEventListener("mouseup",E)},b=L=>{if(h){const w=L.clientX-d,C=L.clientY-m;Math.abs(C)>x?(L.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>x&&E()}if(!h){const w=L.clientY-p;_-=w*this._step*this._arrowKeyMultiplier(L),v+_>this._max?_=this._max-v:v+_<this._min&&(_=this._min-v),this._snapClampSetValue(v+_)}p=L.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",E)},y=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",l),this.$input.addEventListener("wheel",c,{passive:!1}),this.$input.addEventListener("mousedown",M),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,L,w,C,G)=>(g-L)/(w-L)*(G-C)+C,i=g=>{const L=this.$slider.getBoundingClientRect();let w=t(g,L.left,L.right,this._min,this._max);this._snapClampSetValue(w)},r=g=>{this._setDraggingStyle(!0),i(g.clientX),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)},l=g=>{i(g.clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};let h=!1,d,m;const p=g=>{g.preventDefault(),this._setDraggingStyle(!0),i(g.touches[0].clientX),h=!1},v=g=>{g.touches.length>1||(this._hasScrollBar?(d=g.touches[0].clientX,m=g.touches[0].clientY,h=!0):p(g),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",x))},_=g=>{if(h){const L=g.touches[0].clientX-d,w=g.touches[0].clientY-m;Math.abs(L)>Math.abs(w)?p(g):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",x))}else g.preventDefault(),i(g.touches[0].clientX)},x=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",x)},M=this._callOnFinishChange.bind(this),b=400;let E;const y=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const w=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(M,b)};this.$slider.addEventListener("mousedown",r),this.$slider.addEventListener("touchstart",v,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:r}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,r=-t.wheelDelta/120,r*=this._stepExplicit?1:10),i+-r}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ZA extends zi{constructor(t,i,r,l){super(t,i,r,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(l)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const r=document.createElement("option");r.textContent=i,this.$select.appendChild(r)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class KA extends zi{constructor(t,i,r){super(t,i,r,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var QA=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function JA(s){const t=document.createElement("style");t.innerHTML=s;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let qv=!1;class Jd{constructor({parent:t,autoPlace:i=t===void 0,container:r,width:l,title:c="Controls",closeFolders:h=!1,injectStyles:d=!0,touchStyles:m=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(c),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),m&&this.domElement.classList.add("allow-touch-styles"),!qv&&d&&(JA(QA),qv=!0),r?r.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),l&&this.domElement.style.setProperty("--width",l+"px"),this._closeFolders=h}add(t,i,r,l,c){if(Object(r)===r)return new ZA(this,t,i,r);const h=t[i];switch(typeof h){case"number":return new jA(this,t,i,r,l,c);case"boolean":return new GA(this,t,i);case"string":return new KA(this,t,i);case"function":return new qh(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,h)}addColor(t,i,r=1){return new YA(this,t,i,r)}addFolder(t){const i=new Jd({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(r=>{r instanceof qh||r._name in t.controllers&&r.load(t.controllers[r._name])}),i&&t.folders&&this.folders.forEach(r=>{r._title in t.folders&&r.load(t.folders[r._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(r=>{if(!(r instanceof qh)){if(r._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${r._name}"`);i.controllers[r._name]=r.save()}}),t&&this.folders.forEach(r=>{if(r._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${r._title}"`);i.folders[r._title]=r.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const r=c=>{c.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",r))};this.$children.addEventListener("transitionend",r);const l=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=l+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(r=>r.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const $A={"reference triad":"reference triad","flower lattice":"flower lattice","dense shell":"dense shell"},t2={"reference triad":{exactSymmetryGroup:"D6",exactTrajectorySize:3,exactSource:"dihedral basket",exactTarget:"trihex orbit",exactThird:"kagome rosette",exactFourth:"goldberg shell",shellRadius:1.34,shellThickness:.28,ribbonWidth:.16},"flower lattice":{exactSymmetryGroup:"D10",exactTrajectorySize:3,exactSource:"geodesic flower",exactTarget:"flower-of-life shell",exactThird:"temari orbit",exactFourth:"pentagonal star braid",shellRadius:1.32,shellThickness:.32,ribbonWidth:.13},"dense shell":{exactSymmetryGroup:"D8",exactTrajectorySize:3,exactSource:"goldberg shell",exactTarget:"dense phyllotaxis",exactThird:"loxodrome lattice",exactFourth:"kagome rosette",shellRadius:1.36,shellThickness:.34,ribbonWidth:.115}};function e2(s,t){const i=new Jd({title:"Replication: Knot of Consciousness",width:292});return i.add(s,"paused").name("pause"),i.add(s,"globalSpeed",.05,1.65,.001).name("speed"),i.add(s,"transitionProgress",0,1,.001).name("transition").onChange(t),i.add(s,"autoTransitionSpeed",0,.18,.001).name("cycle"),i.add(s,"productionWeavePreset",$A).name("weave").onChange(r=>{n2(s,r),t()}),i.add(s,"showWPassage").name("W transitions").onChange(t),i.add(s,"cameraZoom",.62,2.4,.01).name("zoom"),i}function n2(s,t){s.productionWeavePreset=t,Object.assign(s,t2[t])}const i2={sampleCount:320,crossSamples:18,ribbonWidth:.16,paused:!1,globalSpeed:1,rotationX:.03,rotationY:.08,rotationZ:.02,autoRotate:!0,diamondLightStrength:2.35,innerFogEnabled:!1,innerFogStrength:.7,bloomStrength:.46,coreSize:.12,sparkleStrength:.22,oilSlickStrength:.95,fractalStrength:.82,fibreDensity:118,fibreStrength:1.05,transitionProgress:.57,autoTransitionSpeed:.08,liftAmplitude:1.25,showWPassage:!1,cameraOrbit:.035,cameraZoom:1,productionWeavePreset:"reference triad",mainMode:"exact symmetric shell weave",exactSymmetryGroup:"D6",exactTrajectorySize:3,exactSource:"dihedral basket",exactTarget:"trihex orbit",exactThird:"kagome rosette",exactFourth:"goldberg shell",exactTransitionMode:"orbit crossings",exactRelaxationSteps:4,exactSymmetrySettle:.58,exactSolidSolve:!0,exactSolidPasses:6,exactCreaseStrength:.72,adaptivePlayback:!0,playbackQuality:.45,playbackCacheFrames:96,shellRadius:1.34,shellThickness:.28,simpleSourceKnot:"unknot",simpleMidKnot:"trefoil31",simpleTargetKnot:"cinquefoil51",simpleFourthKnot:"sevenOne71",simpleTrajectorySize:2,simpleProjectionDistance4D:5,simpleSimultaneousUncrossings:1,simpleCrossingMode:"hidden 4D passage",simpleSphereMode:"off",simpleSphereStrength:.85,simpleSphereRadius:1.45,simpleSphereSymmetry:8,simpleSelfAvoidance:!0,simpleSelfAvoidanceStrength:.92,simpleSelfAvoidanceIterations:9,simpleTubeClearance:3.95,simpleHideDuringUncrossing:.45,simpleFourthDimensionDuty:.12,simpleTwistEnabled:!1,simpleTwistTurns:0},a2=`varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vViewDir;
varying float vWIntensity;
varying float vWAlpha;

uniform float morphAlpha;

attribute vec3 aNextPosition;
attribute vec3 aNextNormal;
attribute float aWIntensity;
attribute float aWAlpha;
attribute float aNextWIntensity;
attribute float aNextWAlpha;

void main() {
  float blend = clamp(morphAlpha, 0.0, 1.0);
  vec3 morphedPosition = mix(position, aNextPosition, blend);
  vec3 morphedNormal = normalize(mix(normal, aNextNormal, blend));
  vUv = uv;
  vWIntensity = mix(aWIntensity, aNextWIntensity, blend);
  vWAlpha = mix(aWAlpha, aNextWAlpha, blend);
  vec4 world = modelMatrix * vec4(morphedPosition, 1.0);
  vWorldPosition = world.xyz;
  vNormal = normalize(mat3(modelMatrix) * morphedNormal);
  vViewDir = normalize(cameraPosition - world.xyz);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,r2=`precision highp float;\r
\r
uniform float time;\r
uniform float oilSlickStrength;\r
uniform float fractalStrength;\r
uniform float fibreDensity;\r
uniform float fibreStrength;\r
uniform float lightStrength;\r
uniform float innerFogEnabled;\r
uniform float innerFogStrength;\r
uniform float colorSpeed;\r
uniform float colorScale;\r
uniform vec3 corePosition;\r
\r
varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
varying vec3 vViewDir;\r
varying float vWIntensity;\r
varying float vWAlpha;\r
\r
float hash(vec2 p) {\r
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);\r
}\r
\r
float noise(vec2 p) {\r
  vec2 i = floor(p);\r
  vec2 f = fract(p);\r
  vec2 u = f * f * (3.0 - 2.0 * f);\r
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + 1.0), u.x), u.y);\r
}\r
\r
vec3 palette(float t) {\r
  vec3 a = vec3(0.25, 0.03, 0.42);\r
  vec3 b = vec3(0.38, 0.42, 0.46);\r
  vec3 c = vec3(1.15, 0.94, 0.72);\r
  vec3 d = vec3(0.06, 0.31, 0.59);\r
  vec3 base = a + b * cos(6.28318 * (c * t + d));\r
  vec3 copper = vec3(0.95, 0.33, 0.08) * smoothstep(0.6, 1.0, sin(t * 21.0) * 0.5 + 0.5);\r
  vec3 cyan = vec3(0.0, 0.78, 1.0) * smoothstep(0.32, 0.95, cos(t * 15.0 + 1.7) * 0.5 + 0.5);\r
  vec3 emerald = vec3(0.0, 0.76, 0.42) * smoothstep(0.5, 1.0, sin(t * 9.0 + 2.3) * 0.5 + 0.5);\r
  return max(base + 0.22 * copper + 0.24 * cyan + 0.18 * emerald, 0.0);\r
}\r
\r
void main() {\r
  vec3 n = normalize(vNormal);\r
  vec3 v = normalize(vViewDir);\r
  float fresnel = pow(1.0 - max(dot(n, v), 0.0), 2.2);\r
  float edge = pow(abs(vUv.y * 2.0 - 1.0), 3.1);\r
  float cell = noise(vUv * vec2(180.0, 28.0) + vec2(time * 0.05, time * 0.03));\r
  float cellFine = noise(vUv * vec2(520.0, 88.0) - time * 0.04);\r
  float x = vUv.x * 6.28318;\r
  float interference = sin(vUv.x * colorScale * 6.28318 + cell * 3.2 + time * colorSpeed);\r
  float strandPhase = vUv.y * fibreDensity * 6.28318 + 0.35 * sin(x * 9.0 + time * 0.18) + cellFine * 3.5;\r
  float strands = pow(0.5 + 0.5 * sin(strandPhase), 18.0);\r
  float strandGroove = pow(0.5 + 0.5 * cos(strandPhase), 4.0);\r
  float longitudinal = vUv.x * colorScale + 0.18 * sin(x * 8.0 + time * 0.18) + 0.12 * interference;\r
  vec3 oil = palette(longitudinal) * (0.55 + oilSlickStrength * 0.58);\r
  vec3 strandColor = palette(longitudinal + vUv.y * 1.4 + cellFine * 0.22);\r
  vec3 micro = mix(vec3(0.78), vec3(0.45, 0.72, 0.96) + 0.48 * palette(longitudinal + 0.2), fractalStrength * (0.26 + 0.52 * cell));\r
  vec3 coreVec = corePosition - vWorldPosition;\r
  float coreDistanceSq = max(dot(coreVec, coreVec), 0.16);\r
  vec3 coreDir = normalize(coreVec);\r
  float coreGlow = lightStrength * 0.014 / coreDistanceSq;\r
  float transmitted = max(dot(n, coreDir), 0.0);\r
  float thinEdge = pow(fresnel, 0.7);\r
  float poreNoise = smoothstep(0.28, 0.92, cell * 0.7 + cellFine * 0.38);\r
  float fogGate = clamp(innerFogEnabled, 0.0, 1.0) * innerFogStrength;\r
  float materialSeep = fogGate\r
    * lightStrength\r
    * (0.035 / coreDistanceSq + 0.075 * thinEdge)\r
    * (0.36 + 0.64 * pow(transmitted, 0.7))\r
    * (0.58 + 0.42 * poreNoise);\r
  vec3 white = vec3(0.9, 0.96, 1.0);\r
  vec3 color = oil * micro;\r
  color *= 0.78 - 0.22 * strandGroove * fibreStrength;\r
  color += strandColor * strands * fibreStrength * 0.82;\r
  color += white * (fresnel * 0.52 + edge * 0.42 + coreGlow);\r
  color += vec3(0.62, 0.92, 1.0) * materialSeep;\r
  color += palette(longitudinal + 0.68) * materialSeep * 0.38;\r
  color += palette(longitudinal + 0.43) * strands * fibreStrength * 0.24;\r
  float w = clamp(vWIntensity, 0.0, 1.0);\r
  color = mix(color, vec3(3.4, 0.0, 0.0), w);\r
  color = color / (vec3(1.0) + color * 0.38);\r
  color = pow(color, vec3(0.9));\r
  gl_FragColor = vec4(color, clamp(vWAlpha, 0.08, 1.0));\r
}\r
`;function s2(s){return new Rn({vertexShader:a2,fragmentShader:r2,side:Ni,transparent:!0,depthWrite:!0,uniforms:{time:{value:0},morphAlpha:{value:0},oilSlickStrength:{value:s.oilSlickStrength},fractalStrength:{value:s.fractalStrength},fibreDensity:{value:s.fibreDensity},fibreStrength:{value:s.fibreStrength},lightStrength:{value:s.diamondLightStrength},innerFogEnabled:{value:s.innerFogEnabled?1:0},innerFogStrength:{value:s.innerFogStrength},colorSpeed:{value:.18},colorScale:{value:12},corePosition:{value:new Q}}})}function o2(s){const t=new Rn({transparent:!0,depthWrite:!1,depthTest:!1,blending:ws,side:Nn,uniforms:{time:{value:0},intensity:{value:0},lightStrength:{value:1},corePosition:{value:new Q}},vertexShader:`
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorldPosition = world.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vViewDir = normalize(cameraPosition - world.xyz);
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      precision highp float;

      uniform float time;
      uniform float intensity;
      uniform float lightStrength;
      uniform vec3 corePosition;

      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
      }

      float valueNoise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n000 = hash(i + vec3(0.0, 0.0, 0.0));
        float n100 = hash(i + vec3(1.0, 0.0, 0.0));
        float n010 = hash(i + vec3(0.0, 1.0, 0.0));
        float n110 = hash(i + vec3(1.0, 1.0, 0.0));
        float n001 = hash(i + vec3(0.0, 0.0, 1.0));
        float n101 = hash(i + vec3(1.0, 0.0, 1.0));
        float n011 = hash(i + vec3(0.0, 1.0, 1.0));
        float n111 = hash(i + vec3(1.0, 1.0, 1.0));
        float nx00 = mix(n000, n100, f.x);
        float nx10 = mix(n010, n110, f.x);
        float nx01 = mix(n001, n101, f.x);
        float nx11 = mix(n011, n111, f.x);
        return mix(mix(nx00, nx10, f.y), mix(nx01, nx11, f.y), f.z);
      }

      float diamondFacet(vec3 ray, float scale, float phase) {
        vec3 p = ray * scale + vec3(phase, phase * 0.37, -phase * 0.61);
        float a = abs(sin(dot(p, vec3(5.31, 8.17, 3.73))));
        float b = abs(sin(dot(p, vec3(-6.73, 2.41, 7.93))));
        float c = abs(sin(dot(p, vec3(4.19, -7.11, 5.67))));
        return pow(a * b * c, 10.0);
      }

      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewDir);
        vec3 ray = normalize(vWorldPosition - cameraPosition);
        vec3 coreRay = normalize(corePosition - cameraPosition);
        float alignment = max(dot(ray, coreRay), 0.0);
        float broadShaft = pow(alignment, 2.25);
        float narrowShaft = pow(alignment, 18.0);
        float rim = pow(1.0 - abs(dot(n, v)), 1.35);
        float murk = valueNoise(ray * 5.4 + vec3(time * 0.012, time * 0.019, -time * 0.015));
        float fineMurk = valueNoise(ray * 18.0 + vec3(-time * 0.018, time * 0.011, time * 0.023));
        float breath = 0.84 + 0.16 * sin(time * 0.46 + murk * 6.28318);
        float facet = diamondFacet(ray, 4.2, time * 0.035) + 0.65 * diamondFacet(ray, 8.7, time * 0.021 + 2.0);
        float shimmer = smoothstep(0.12, 0.48, facet) * (0.5 + 0.5 * fineMurk);
        float haze = 0.008 + 0.038 * broadShaft + 0.014 * rim + 0.058 * narrowShaft;
        haze += shimmer * (0.012 + 0.036 * broadShaft);
        haze *= breath * (0.72 + 0.28 * murk);
        float alpha = intensity * lightStrength * haze;
        vec3 blue = vec3(0.36, 0.72, 1.0);
        vec3 opal = vec3(0.92, 0.78, 1.0);
        vec3 warm = vec3(1.0, 0.83, 0.58);
        vec3 color = mix(blue, opal, murk * 0.55 + broadShaft * 0.18);
        color = mix(color, warm, narrowShaft * 0.32 + shimmer * 0.18);
        color += vec3(0.75, 0.96, 1.0) * shimmer * 1.15;
        gl_FragColor = vec4(color * alpha * 7.2, clamp(alpha, 0.0, 0.12));
      }
    `});return new Vn(new $o(s,64,32),t)}function l2(s){const t=new Qo({color:16777215,transparent:!0,opacity:0,blending:ws,depthWrite:!1});return new Vn(new $o(s,32,16),t)}function c2(s){s.add(new hM(4677816,.1));const t=new Fh(16055295,3.2,8,1.7);t.name="diamondLight",s.add(t);const i=new Fh(5433855,1.4,7,1.5);i.position.set(-2.3,1.4,2.2),s.add(i);const r=new Fh(16732088,1.1,7,1.5);r.position.set(2.1,-1.8,1.4),s.add(r)}function u2(){const s=jh.useRef(null);return jh.useEffect(()=>{const t=s.current,i={...i2};let r=!0,l=0,c=i.transitionProgress,h=0,d=!1;const m=new aM;m.background=new Ae(0);const p=new ei(45,t.clientWidth/t.clientHeight,.01,100);p.position.set(0,0,5.5);const v=new QT({antialias:!0,powerPreference:"high-performance"});v.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),v.setSize(t.clientWidth,t.clientHeight),v.outputColorSpace="srgb",t.appendChild(v.domElement);const _=new iA(v);_.addPass(new aA(m,p));const x=new Ps(new ce(t.clientWidth,t.clientHeight),i.bloomStrength,.36,.72);_.addPass(x),c2(m);const M=new Io;m.add(M);const b=s2(i),E=new Vn(new Ti,b);M.add(E);const y=new Map,g=new Set,L=96,w=l2(i.coreSize);w.visible=!1,M.add(w);const C=o2(1);C.renderOrder=20,C.frustumCulled=!1,m.add(C);const G=new Qo({color:15661311,transparent:!0,opacity:.48,blending:ws}),I=Array.from({length:6},(V,at)=>{const lt=new Vn(new $o(.012,12,8),G),Ut=at/10*Math.PI*2;return lt.position.set(Math.cos(Ut)*1.75,Math.sin(Ut)*1.75,.12*Math.sin(5*Ut)),M.add(lt),lt}),P=V=>{g.has(V)||V.dispose()},W=V=>{const at=E.geometry;E.geometry=V,at!==V&&P(at),r=!1},U=(V,at)=>{for(y.set(V,at),g.add(at);y.size>L;){const lt=y.entries().next().value;if(!lt)break;const[Ut,Dt]=lt;y.delete(Ut),g.delete(Dt),E.geometry!==Dt&&Dt.dispose()}},D=()=>{for(const V of y.values())E.geometry!==V&&V.dispose();y.clear(),g.clear()},B=()=>{const V=i.adaptivePlayback&&!i.paused&&!d&&i.autoTransitionSpeed>0&&i.globalSpeed>0,at=T_(i.playbackQuality),lt=V?.65+.35*at:1,Ut=V?.55+.45*at:1,Dt=V?.45+.45*at:1,Zt=V?.16+.46*at:1,oe=i.exactRelaxationSteps>0?Math.max(V?1:0,Math.round(i.exactRelaxationSteps*Dt)):0,ee=i.exactSolidSolve&&i.exactSolidPasses>0?Math.max(V?1:0,Math.round(i.exactSolidPasses*Zt)):0;if(V){const pe=d2(i.transitionProgress,Math.round(i.playbackCacheFrames)),qt=ot(pe.baseProgress,at,lt,Ut,oe,ee),me=ot(pe.nextProgress,at,lt,Ut,oe,ee);return h=Yh(qt,me)?pe.alpha:0,qt}h=0;const H=Gv({group:i.exactSymmetryGroup,sourcePattern:i.exactSource,targetPattern:i.exactTarget,trajectoryPatterns:[i.exactSource,i.exactTarget,i.exactThird,i.exactFourth].slice(0,Math.round(i.exactTrajectorySize)),transitionMode:i.exactTransitionMode,progress:i.transitionProgress,samples:Math.max(180,Math.round(i.sampleCount*lt)),crossSamples:Math.max(6,Math.round(i.crossSamples*Ut)),width:i.ribbonWidth,shellRadius:i.shellRadius,shellThickness:i.shellThickness,liftAmplitude:i.liftAmplitude,showWPassage:i.showWPassage,relaxationSteps:oe,symmetrySettle:i.exactSymmetrySettle,solidSolve:i.exactSolidSolve,solidPasses:ee,creaseStrength:i.exactCreaseStrength});return Yh(H,H),H},ot=(V,at,lt,Ut,Dt,Zt)=>{const oe=p2(i,V,at),ee=y.get(oe);if(ee)return y.delete(oe),y.set(oe,ee),ee;const H=Gv({group:i.exactSymmetryGroup,sourcePattern:i.exactSource,targetPattern:i.exactTarget,trajectoryPatterns:[i.exactSource,i.exactTarget,i.exactThird,i.exactFourth].slice(0,Math.round(i.exactTrajectorySize)),transitionMode:i.exactTransitionMode,progress:V,samples:Math.max(180,Math.round(i.sampleCount*lt)),crossSamples:Math.max(6,Math.round(i.crossSamples*Ut)),width:i.ribbonWidth,shellRadius:i.shellRadius,shellThickness:i.shellThickness,liftAmplitude:i.liftAmplitude,showWPassage:i.showWPassage,relaxationSteps:Dt,symmetrySettle:i.exactSymmetrySettle,solidSolve:i.exactSolidSolve,solidPasses:Zt,creaseStrength:i.exactCreaseStrength});return Yh(H,H),U(oe,H),H},ct=()=>{W(B())},ft=()=>{const V=b.uniforms;V.time.value=l*.35,V.morphAlpha.value=h,V.oilSlickStrength.value=i.oilSlickStrength,V.fractalStrength.value=i.fractalStrength,V.fibreDensity.value=i.fibreDensity,V.fibreStrength.value=i.fibreStrength,V.lightStrength.value=i.diamondLightStrength,V.innerFogEnabled.value=i.innerFogEnabled?1:0,V.innerFogStrength.value=i.innerFogStrength,V.corePosition.value=w.position;const at=C.material;at.uniforms.time.value=l,at.uniforms.intensity.value=i.innerFogEnabled?i.innerFogStrength:0,at.uniforms.lightStrength.value=i.diamondLightStrength,at.uniforms.corePosition.value=w.position,C.scale.setScalar(28),C.visible=i.innerFogEnabled&&i.innerFogStrength>.001},pt=e2(i,()=>{D(),r=!0}),z=()=>{const V=t.clientWidth,at=t.clientHeight;p.aspect=V/at,p.updateProjectionMatrix(),v.setSize(V,at),_.setSize(V,at),x.setSize(V,at)};window.addEventListener("resize",z);let K=0,Y=0;const xt=V=>{d=!0,K=V.clientX,Y=V.clientY,v.domElement.style.cursor="grabbing",v.domElement.setPointerCapture(V.pointerId)},Et=V=>{if(!d)return;const at=V.clientX-K,lt=V.clientY-Y;K=V.clientX,Y=V.clientY,M.rotation.y+=at*.006,M.rotation.x+=lt*.006},O=V=>{d=!1,v.domElement.style.cursor="grab",v.domElement.hasPointerCapture(V.pointerId)&&v.domElement.releasePointerCapture(V.pointerId)};v.domElement.style.cursor="grab",v.domElement.style.touchAction="none",v.domElement.addEventListener("pointerdown",xt),v.domElement.addEventListener("pointermove",Et),v.domElement.addEventListener("pointerup",O),v.domElement.addEventListener("pointercancel",O);let et=0,St=performance.now();const Tt=()=>{et=requestAnimationFrame(Tt);const V=performance.now(),at=Math.min(.05,(V-St)/1e3);St=V;const lt=i.paused||d?0:i.globalSpeed;l+=at*lt,i.paused?c=h2(i.transitionProgress):i.autoTransitionSpeed>0&&lt>0?(c=(c+at*lt*i.autoTransitionSpeed)%1,i.transitionProgress=f2(c),r=!0):i.autoTransitionSpeed===0&&(c=i.transitionProgress),r&&ct();const Ut=i.autoRotate?lt:0;E.rotation.x+=i.rotationX*.62*at*Ut,E.rotation.y+=i.rotationY*.62*at*Ut,E.rotation.z+=i.rotationZ*.62*at*Ut,w.rotation.y-=.5*at*lt,w.scale.setScalar(i.coreSize/.42),ft(),x.strength=i.bloomStrength,x.radius=.34,x.threshold=.72;const Dt=m.getObjectByName("diamondLight");Dt&&"intensity"in Dt&&(Dt.intensity=i.diamondLightStrength);for(let oe=0;oe<I.length;oe++){const ee=oe/I.length*Math.PI*2+l*.2;I[oe].position.set(Math.cos(ee)*1.72,Math.sin(ee)*1.72,.35*Math.sin(5*ee+l)),I[oe].scale.setScalar(i.sparkleStrength*(.55+.45*Math.sin(l*2+oe)))}const Zt=i.autoRotate?l*i.cameraOrbit:0;p.position.x=Math.sin(Zt)*.65,p.position.y=Math.cos(Zt*.7)*.25,p.position.z=5.5/i.cameraZoom,p.lookAt(0,0,0),_.render()};return Tt(),()=>{cancelAnimationFrame(et),window.removeEventListener("resize",z),v.domElement.removeEventListener("pointerdown",xt),v.domElement.removeEventListener("pointermove",Et),v.domElement.removeEventListener("pointerup",O),v.domElement.removeEventListener("pointercancel",O),pt.destroy(),v.dispose(),_.dispose(),D(),E.geometry.dispose(),b.dispose(),C.geometry.dispose(),C.material.dispose(),t.removeChild(v.domElement)}},[]),la.jsxs(la.Fragment,{children:[la.jsxs("div",{className:"brand",children:[la.jsx("h1",{children:"Replication: Knot of Consciousness"}),la.jsx("p",{children:"A luminous 4D spherical ribbon weave, cycling through smooth impossible crossings."})]}),la.jsx("div",{ref:s,style:{width:"100vw",height:"100vh"}})]})}function f2(s){const t=s<.5?s*2:2-s*2;return Math.max(0,Math.min(1,t))}function h2(s){return Math.max(0,Math.min(.5,s*.5))}function d2(s,t){const i=Math.max(2,Math.round(t)),r=T_(s)*(i-1),l=Math.min(i-1,Math.floor(r)),c=Math.min(i-1,l+1);return{baseProgress:l/(i-1),nextProgress:c/(i-1),alpha:c===l?0:r-l}}function Yh(s,t){const i=s.getAttribute("position"),r=s.getAttribute("normal"),l=s.getAttribute("aWIntensity"),c=s.getAttribute("aWAlpha"),h=t.getAttribute("position"),d=t.getAttribute("normal"),m=t.getAttribute("aWIntensity"),p=t.getAttribute("aWAlpha");if(!i||!r||!l||!c)return!1;const v=!!(h&&d&&m&&p&&h.count===i.count&&d.count===r.count&&m.count===l.count&&p.count===c.count);return s.setAttribute("aNextPosition",new hn((v?h:i).array,3)),s.setAttribute("aNextNormal",new hn((v?d:r).array,3)),s.setAttribute("aNextWIntensity",new hn((v?m:l).array,1)),s.setAttribute("aNextWAlpha",new hn((v?p:c).array,1)),v}function p2(s,t,i){return["exact-live",s.exactSymmetryGroup,s.exactTransitionMode,s.exactTrajectorySize,s.exactSource,s.exactTarget,s.exactThird,s.exactFourth,Wa(t,5),Wa(i,3),Math.round(s.sampleCount),Math.round(s.crossSamples),Wa(s.ribbonWidth,4),Wa(s.shellRadius,4),Wa(s.shellThickness,4),Wa(s.liftAmplitude,4),s.showWPassage?1:0,Math.round(s.exactRelaxationSteps),Wa(s.exactSymmetrySettle,4),s.exactSolidSolve?1:0,Math.round(s.exactSolidPasses),Wa(s.exactCreaseStrength,4)].join("|")}function Wa(s,t){const i=10**t;return Math.round(s*i)/i}function T_(s){return Math.max(0,Math.min(1,s))}function m2(){return la.jsx(u2,{})}VS.createRoot(document.getElementById("root")).render(la.jsx(PS.StrictMode,{children:la.jsx(m2,{})}));
