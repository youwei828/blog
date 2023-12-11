const Qc="modulepreload",Zc=function(n){return"/"+n},vp={},l=function(e,s,a){if(!s||s.length===0)return e();const t=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=Zc(o),o in vp)return;vp[o]=!0;const p=o.endsWith(".css"),r=p?'[rel="stylesheet"]':"";if(!!a)for(let d=t.length-1;d>=0;d--){const v=t[d];if(v.href===o&&(!p||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${r}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":Qc,p||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),p)return new Promise((d,v)=>{u.addEventListener("load",d),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function fo(n,e){const s=Object.create(null),a=n.split(",");for(let t=0;t<a.length;t++)s[a[t]]=!0;return e?t=>!!s[t.toLowerCase()]:t=>!!s[t]}const xn={},ys=[],ce=()=>{},nu=()=>!1,da=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ko=n=>n.startsWith("onUpdate:"),On=Object.assign,_o=(n,e)=>{const s=n.indexOf(e);s>-1&&n.splice(s,1)},eu=Object.prototype.hasOwnProperty,mn=(n,e)=>eu.call(n,e),U=Array.isArray,ws=n=>va(n)==="[object Map]",js=n=>va(n)==="[object Set]",mp=n=>va(n)==="[object Date]",an=n=>typeof n=="function",cn=n=>typeof n=="string",We=n=>typeof n=="symbol",yn=n=>n!==null&&typeof n=="object",ql=n=>(yn(n)||an(n))&&an(n.then)&&an(n.catch),Bl=Object.prototype.toString,va=n=>Bl.call(n),su=n=>va(n).slice(8,-1),Hl=n=>va(n)==="[object Object]",ho=n=>cn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ys=fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lt=n=>{const e=Object.create(null);return s=>e[s]||(e[s]=n(s))},au=/-(\w)/g,te=lt(n=>n.replace(au,(e,s)=>s?s.toUpperCase():"")),tu=/\B([A-Z])/g,Ms=lt(n=>n.replace(tu,"-$1").toLowerCase()),ma=lt(n=>n.charAt(0).toUpperCase()+n.slice(1)),Tt=lt(n=>n?`on${ma(n)}`:""),os=(n,e)=>!Object.is(n,e),Ja=(n,e)=>{for(let s=0;s<n.length;s++)n[s](e)},Ga=(n,e,s)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:s})},Ka=n=>{const e=parseFloat(n);return isNaN(e)?n:e},ou=n=>{const e=cn(n)?Number(n):NaN;return isNaN(e)?n:e};let fp;const Ft=()=>fp||(fp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bo(n){if(U(n)){const e={};for(let s=0;s<n.length;s++){const a=n[s],t=cn(a)?iu(a):bo(a);if(t)for(const o in t)e[o]=t[o]}return e}else if(cn(n)||yn(n))return n}const pu=/;(?![^(]*\))/g,lu=/:([^]+)/,ru=/\/\*[^]*?\*\//g;function iu(n){const e={};return n.replace(ru,"").split(pu).forEach(s=>{if(s){const a=s.split(lu);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function go(n){let e="";if(cn(n))e=n;else if(U(n))for(let s=0;s<n.length;s++){const a=go(n[s]);a&&(e+=a+" ")}else if(yn(n))for(const s in n)n[s]&&(e+=s+" ");return e.trim()}const cu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uu=fo(cu);function zl(n){return!!n||n===""}function du(n,e){if(n.length!==e.length)return!1;let s=!0;for(let a=0;s&&a<n.length;a++)s=ps(n[a],e[a]);return s}function ps(n,e){if(n===e)return!0;let s=mp(n),a=mp(e);if(s||a)return s&&a?n.getTime()===e.getTime():!1;if(s=We(n),a=We(e),s||a)return n===e;if(s=U(n),a=U(e),s||a)return s&&a?du(n,e):!1;if(s=yn(n),a=yn(e),s||a){if(!s||!a)return!1;const t=Object.keys(n).length,o=Object.keys(e).length;if(t!==o)return!1;for(const p in n){const r=n.hasOwnProperty(p),c=e.hasOwnProperty(p);if(r&&!c||!r&&c||!ps(n[p],e[p]))return!1}}return String(n)===String(e)}function yo(n,e){return n.findIndex(s=>ps(s,e))}const c_=n=>cn(n)?n:n==null?"":U(n)||yn(n)&&(n.toString===Bl||!an(n.toString))?JSON.stringify(n,Fl,2):String(n),Fl=(n,e)=>e&&e.__v_isRef?Fl(n,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[a,t],o)=>(s[xt(a,o)+" =>"]=t,s),{})}:js(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>xt(s))}:We(e)?xt(e):yn(e)&&!U(e)&&!Hl(e)?String(e):e,xt=(n,e="")=>{var s;return We(n)?`Symbol(${(s=n.description)!=null?s:e})`:n};let Jn;class vu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jn,!e&&Jn&&(this.index=(Jn.scopes||(Jn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=Jn;try{return Jn=this,e()}finally{Jn=s}}}on(){Jn=this}off(){Jn=this.parent}stop(e){if(this._active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function mu(n,e=Jn){e&&e.active&&e.effects.push(n)}function Wl(){return Jn}function fu(n){Jn&&Jn.cleanups.push(n)}const wo=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Jl=n=>(n.w&Je)>0,Ul=n=>(n.n&Je)>0,ku=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Je},_u=n=>{const{deps:e}=n;if(e.length){let s=0;for(let a=0;a<e.length;a++){const t=e[a];Jl(t)&&!Ul(t)?t.delete(n):e[s++]=t,t.w&=~Je,t.n&=~Je}e.length=s}},Ya=new WeakMap;let Gs=0,Je=1;const Wt=30;let re;const ss=Symbol(""),Jt=Symbol("");class Eo{constructor(e,s=null,a){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,mu(this,a)}run(){if(!this.active)return this.fn();let e=re,s=ze;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=re,re=this,ze=!0,Je=1<<++Gs,Gs<=Wt?ku(this):kp(this),this.fn()}finally{Gs<=Wt&&_u(this),Je=1<<--Gs,re=this.parent,ze=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){re===this?this.deferStop=!0:this.active&&(kp(this),this.onStop&&this.onStop(),this.active=!1)}}function kp(n){const{deps:e}=n;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(n);e.length=0}}let ze=!0;const Gl=[];function Ns(){Gl.push(ze),ze=!1}function $s(){const n=Gl.pop();ze=n===void 0?!0:n}function Fn(n,e,s){if(ze&&re){let a=Ya.get(n);a||Ya.set(n,a=new Map);let t=a.get(s);t||a.set(s,t=wo()),Kl(t)}}function Kl(n,e){let s=!1;Gs<=Wt?Ul(n)||(n.n|=Je,s=!Jl(n)):s=!n.has(re),s&&(n.add(re),re.deps.push(n))}function Re(n,e,s,a,t,o){const p=Ya.get(n);if(!p)return;let r=[];if(e==="clear")r=[...p.values()];else if(s==="length"&&U(n)){const c=Number(a);p.forEach((u,d)=>{(d==="length"||!We(d)&&d>=c)&&r.push(u)})}else switch(s!==void 0&&r.push(p.get(s)),e){case"add":U(n)?ho(s)&&r.push(p.get("length")):(r.push(p.get(ss)),ws(n)&&r.push(p.get(Jt)));break;case"delete":U(n)||(r.push(p.get(ss)),ws(n)&&r.push(p.get(Jt)));break;case"set":ws(n)&&r.push(p.get(ss));break}if(r.length===1)r[0]&&Ut(r[0]);else{const c=[];for(const u of r)u&&c.push(...u);Ut(wo(c))}}function Ut(n,e){const s=U(n)?n:[...n];for(const a of s)a.computed&&_p(a);for(const a of s)a.computed||_p(a)}function _p(n,e){(n!==re||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function hu(n,e){var s;return(s=Ya.get(n))==null?void 0:s.get(e)}const bu=fo("__proto__,__v_isRef,__isVue"),Yl=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(We)),hp=gu();function gu(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...s){const a=un(this);for(let o=0,p=this.length;o<p;o++)Fn(a,"get",o+"");const t=a[e](...s);return t===-1||t===!1?a[e](...s.map(un)):t}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...s){Ns();const a=un(this)[e].apply(this,s);return $s(),a}}),n}function yu(n){const e=un(this);return Fn(e,"has",n),e.hasOwnProperty(n)}class Xl{constructor(e=!1,s=!1){this._isReadonly=e,this._shallow=s}get(e,s,a){const t=this._isReadonly,o=this._shallow;if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return o;if(s==="__v_raw")return a===(t?o?Vu:er:o?nr:Zl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(a)?e:void 0;const p=U(e);if(!t){if(p&&mn(hp,s))return Reflect.get(hp,s,a);if(s==="hasOwnProperty")return yu}const r=Reflect.get(e,s,a);return(We(s)?Yl.has(s):bu(s))||(t||Fn(e,"get",s),o)?r:Pn(r)?p&&ho(s)?r:r.value:yn(r)?t?Ke(r):fa(r):r}}class Ql extends Xl{constructor(e=!1){super(!1,e)}set(e,s,a,t){let o=e[s];if(As(o)&&Pn(o)&&!Pn(a))return!1;if(!this._shallow&&(!Xa(a)&&!As(a)&&(o=un(o),a=un(a)),!U(e)&&Pn(o)&&!Pn(a)))return o.value=a,!0;const p=U(e)&&ho(s)?Number(s)<e.length:mn(e,s),r=Reflect.set(e,s,a,t);return e===un(t)&&(p?os(a,o)&&Re(e,"set",s,a):Re(e,"add",s,a)),r}deleteProperty(e,s){const a=mn(e,s);e[s];const t=Reflect.deleteProperty(e,s);return t&&a&&Re(e,"delete",s,void 0),t}has(e,s){const a=Reflect.has(e,s);return(!We(s)||!Yl.has(s))&&Fn(e,"has",s),a}ownKeys(e){return Fn(e,"iterate",U(e)?"length":ss),Reflect.ownKeys(e)}}class wu extends Xl{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Eu=new Ql,Tu=new wu,xu=new Ql(!0),To=n=>n,rt=n=>Reflect.getPrototypeOf(n);function Pa(n,e,s=!1,a=!1){n=n.__v_raw;const t=un(n),o=un(e);s||(os(e,o)&&Fn(t,"get",e),Fn(t,"get",o));const{has:p}=rt(t),r=a?To:s?Ao:aa;if(p.call(t,e))return r(n.get(e));if(p.call(t,o))return r(n.get(o));n!==t&&n.get(e)}function Oa(n,e=!1){const s=this.__v_raw,a=un(s),t=un(n);return e||(os(n,t)&&Fn(a,"has",n),Fn(a,"has",t)),n===t?s.has(n):s.has(n)||s.has(t)}function Ia(n,e=!1){return n=n.__v_raw,!e&&Fn(un(n),"iterate",ss),Reflect.get(n,"size",n)}function bp(n){n=un(n);const e=un(this);return rt(e).has.call(e,n)||(e.add(n),Re(e,"add",n,n)),this}function gp(n,e){e=un(e);const s=un(this),{has:a,get:t}=rt(s);let o=a.call(s,n);o||(n=un(n),o=a.call(s,n));const p=t.call(s,n);return s.set(n,e),o?os(e,p)&&Re(s,"set",n,e):Re(s,"add",n,e),this}function yp(n){const e=un(this),{has:s,get:a}=rt(e);let t=s.call(e,n);t||(n=un(n),t=s.call(e,n)),a&&a.call(e,n);const o=e.delete(n);return t&&Re(e,"delete",n,void 0),o}function wp(){const n=un(this),e=n.size!==0,s=n.clear();return e&&Re(n,"clear",void 0,void 0),s}function Da(n,e){return function(a,t){const o=this,p=o.__v_raw,r=un(p),c=e?To:n?Ao:aa;return!n&&Fn(r,"iterate",ss),p.forEach((u,d)=>a.call(t,c(u),c(d),o))}}function Va(n,e,s){return function(...a){const t=this.__v_raw,o=un(t),p=ws(o),r=n==="entries"||n===Symbol.iterator&&p,c=n==="keys"&&p,u=t[n](...a),d=s?To:e?Ao:aa;return!e&&Fn(o,"iterate",c?Jt:ss),{next(){const{value:v,done:f}=u.next();return f?{value:v,done:f}:{value:r?[d(v[0]),d(v[1])]:d(v),done:f}},[Symbol.iterator](){return this}}}}function Ce(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Su(){const n={get(o){return Pa(this,o)},get size(){return Ia(this)},has:Oa,add:bp,set:gp,delete:yp,clear:wp,forEach:Da(!1,!1)},e={get(o){return Pa(this,o,!1,!0)},get size(){return Ia(this)},has:Oa,add:bp,set:gp,delete:yp,clear:wp,forEach:Da(!1,!0)},s={get(o){return Pa(this,o,!0)},get size(){return Ia(this,!0)},has(o){return Oa.call(this,o,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Da(!0,!1)},a={get(o){return Pa(this,o,!0,!0)},get size(){return Ia(this,!0)},has(o){return Oa.call(this,o,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Va(o,!1,!1),s[o]=Va(o,!0,!1),e[o]=Va(o,!1,!0),a[o]=Va(o,!0,!0)}),[n,s,e,a]}const[Au,Lu,Ru,Pu]=Su();function xo(n,e){const s=e?n?Pu:Ru:n?Lu:Au;return(a,t,o)=>t==="__v_isReactive"?!n:t==="__v_isReadonly"?n:t==="__v_raw"?a:Reflect.get(mn(s,t)&&t in a?s:a,t,o)}const Ou={get:xo(!1,!1)},Iu={get:xo(!1,!0)},Du={get:xo(!0,!1)},Zl=new WeakMap,nr=new WeakMap,er=new WeakMap,Vu=new WeakMap;function Cu(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ju(n){return n.__v_skip||!Object.isExtensible(n)?0:Cu(su(n))}function fa(n){return As(n)?n:So(n,!1,Eu,Ou,Zl)}function sr(n){return So(n,!1,xu,Iu,nr)}function Ke(n){return So(n,!0,Tu,Du,er)}function So(n,e,s,a,t){if(!yn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=t.get(n);if(o)return o;const p=ju(n);if(p===0)return n;const r=new Proxy(n,p===2?a:s);return t.set(n,r),r}function Es(n){return As(n)?Es(n.__v_raw):!!(n&&n.__v_isReactive)}function As(n){return!!(n&&n.__v_isReadonly)}function Xa(n){return!!(n&&n.__v_isShallow)}function ar(n){return Es(n)||As(n)}function un(n){const e=n&&n.__v_raw;return e?un(e):n}function tr(n){return Ga(n,"__v_skip",!0),n}const aa=n=>yn(n)?fa(n):n,Ao=n=>yn(n)?Ke(n):n;function Lo(n){ze&&re&&(n=un(n),Kl(n.dep||(n.dep=wo())))}function Ro(n,e){n=un(n);const s=n.dep;s&&Ut(s)}function Pn(n){return!!(n&&n.__v_isRef===!0)}function Y(n){return or(n,!1)}function ve(n){return or(n,!0)}function or(n,e){return Pn(n)?n:new Mu(n,e)}class Mu{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:un(e),this._value=s?e:aa(e)}get value(){return Lo(this),this._value}set value(e){const s=this.__v_isShallow||Xa(e)||As(e);e=s?e:un(e),os(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:aa(e),Ro(this))}}function as(n){return Pn(n)?n.value:n}const Nu={get:(n,e,s)=>as(Reflect.get(n,e,s)),set:(n,e,s,a)=>{const t=n[e];return Pn(t)&&!Pn(s)?(t.value=s,!0):Reflect.set(n,e,s,a)}};function pr(n){return Es(n)?n:new Proxy(n,Nu)}class $u{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=e(()=>Lo(this),()=>Ro(this));this._get=s,this._set=a}get value(){return this._get()}set value(e){this._set(e)}}function qu(n){return new $u(n)}class Bu{constructor(e,s,a){this._object=e,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return hu(un(this._object),this._key)}}class Hu{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qs(n,e,s){return Pn(n)?n:an(n)?new Hu(n):yn(n)&&arguments.length>1?zu(n,e,s):Y(n)}function zu(n,e,s){const a=n[e];return Pn(a)?a:new Bu(n,e,s)}class Fu{constructor(e,s,a,t){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Eo(e,()=>{this._dirty||(this._dirty=!0,Ro(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=a}get value(){const e=un(this);return Lo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Wu(n,e,s=!1){let a,t;const o=an(n);return o?(a=n,t=ce):(a=n.get,t=n.set),new Fu(a,t,o||!t,s)}function Fe(n,e,s,a){let t;try{t=a?n(...a):n()}catch(o){ka(o,e,s)}return t}function ne(n,e,s,a){if(an(n)){const o=Fe(n,e,s,a);return o&&ql(o)&&o.catch(p=>{ka(p,e,s)}),o}const t=[];for(let o=0;o<n.length;o++)t.push(ne(n[o],e,s,a));return t}function ka(n,e,s,a=!0){const t=e?e.vnode:null;if(e){let o=e.parent;const p=e.proxy,r=s;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,p,r)===!1)return}o=o.parent}const c=e.appContext.config.errorHandler;if(c){Fe(c,null,10,[n,p,r]);return}}Ju(n,s,t,a)}function Ju(n,e,s,a=!0){console.error(n)}let ta=!1,Gt=!1;const Mn=[];let he=0;const Ts=[];let Ae=null,Qe=0;const lr=Promise.resolve();let Po=null;function cs(n){const e=Po||lr;return n?e.then(this?n.bind(this):n):e}function Uu(n){let e=he+1,s=Mn.length;for(;e<s;){const a=e+s>>>1,t=Mn[a],o=oa(t);o<n||o===n&&t.pre?e=a+1:s=a}return e}function it(n){(!Mn.length||!Mn.includes(n,ta&&n.allowRecurse?he+1:he))&&(n.id==null?Mn.push(n):Mn.splice(Uu(n.id),0,n),rr())}function rr(){!ta&&!Gt&&(Gt=!0,Po=lr.then(ir))}function Gu(n){const e=Mn.indexOf(n);e>he&&Mn.splice(e,1)}function Ku(n){U(n)?Ts.push(...n):(!Ae||!Ae.includes(n,n.allowRecurse?Qe+1:Qe))&&Ts.push(n),rr()}function Ep(n,e,s=ta?he+1:0){for(;s<Mn.length;s++){const a=Mn[s];if(a&&a.pre){if(n&&a.id!==n.uid)continue;Mn.splice(s,1),s--,a()}}}function Qa(n){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,Ae){Ae.push(...e);return}for(Ae=e,Ae.sort((s,a)=>oa(s)-oa(a)),Qe=0;Qe<Ae.length;Qe++)Ae[Qe]();Ae=null,Qe=0}}const oa=n=>n.id==null?1/0:n.id,Yu=(n,e)=>{const s=oa(n)-oa(e);if(s===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return s};function ir(n){Gt=!1,ta=!0,Mn.sort(Yu);const e=ce;try{for(he=0;he<Mn.length;he++){const s=Mn[he];s&&s.active!==!1&&Fe(s,null,14)}}finally{he=0,Mn.length=0,Qa(),ta=!1,Po=null,(Mn.length||Ts.length)&&ir()}}function Xu(n,e,...s){if(n.isUnmounted)return;const a=n.vnode.props||xn;let t=s;const o=e.startsWith("update:"),p=o&&e.slice(7);if(p&&p in a){const d=`${p==="modelValue"?"model":p}Modifiers`,{number:v,trim:f}=a[d]||xn;f&&(t=s.map(k=>cn(k)?k.trim():k)),v&&(t=s.map(Ka))}let r,c=a[r=Tt(e)]||a[r=Tt(te(e))];!c&&o&&(c=a[r=Tt(Ms(e))]),c&&ne(c,n,6,t);const u=a[r+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[r])return;n.emitted[r]=!0,ne(u,n,6,t)}}function cr(n,e,s=!1){const a=e.emitsCache,t=a.get(n);if(t!==void 0)return t;const o=n.emits;let p={},r=!1;if(!an(n)){const c=u=>{const d=cr(u,e,!0);d&&(r=!0,On(p,d))};!s&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!r?(yn(n)&&a.set(n,null),null):(U(o)?o.forEach(c=>p[c]=null):On(p,o),yn(n)&&a.set(n,p),p)}function ct(n,e){return!n||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),mn(n,e[0].toLowerCase()+e.slice(1))||mn(n,Ms(e))||mn(n,e))}let Gn=null,ur=null;function Za(n){const e=Gn;return Gn=n,ur=n&&n.type.__scopeId||null,e}function Qu(n,e=Gn,s){if(!e||n._n)return n;const a=(...t)=>{a._d&&Cp(-1);const o=Za(e);let p;try{p=n(...t)}finally{Za(o),a._d&&Cp(1)}return p};return a._n=!0,a._c=!0,a._d=!0,a}function St(n){const{type:e,vnode:s,proxy:a,withProxy:t,props:o,propsOptions:[p],slots:r,attrs:c,emit:u,render:d,renderCache:v,data:f,setupState:k,ctx:b,inheritAttrs:T}=n;let S,y;const A=Za(n);try{if(s.shapeFlag&4){const x=t||a,N=x;S=le(d.call(N,x,v,o,k,f,b)),y=c}else{const x=e;S=le(x.length>1?x(o,{attrs:c,slots:r,emit:u}):x(o,null)),y=e.props?c:Zu(c)}}catch(x){na.length=0,ka(x,n,1),S=Ln(se)}let w=S;if(y&&T!==!1){const x=Object.keys(y),{shapeFlag:N}=w;x.length&&N&7&&(p&&x.some(ko)&&(y=nd(y,p)),w=Ue(w,y))}return s.dirs&&(w=Ue(w),w.dirs=w.dirs?w.dirs.concat(s.dirs):s.dirs),s.transition&&(w.transition=s.transition),S=w,Za(A),S}const Zu=n=>{let e;for(const s in n)(s==="class"||s==="style"||da(s))&&((e||(e={}))[s]=n[s]);return e},nd=(n,e)=>{const s={};for(const a in n)(!ko(a)||!(a.slice(9)in e))&&(s[a]=n[a]);return s};function ed(n,e,s){const{props:a,children:t,component:o}=n,{props:p,children:r,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return a?Tp(a,p,u):!!p;if(c&8){const d=e.dynamicProps;for(let v=0;v<d.length;v++){const f=d[v];if(p[f]!==a[f]&&!ct(u,f))return!0}}}else return(t||r)&&(!r||!r.$stable)?!0:a===p?!1:a?p?Tp(a,p,u):!0:!!p;return!1}function Tp(n,e,s){const a=Object.keys(e);if(a.length!==Object.keys(n).length)return!0;for(let t=0;t<a.length;t++){const o=a[t];if(e[o]!==n[o]&&!ct(s,o))return!0}return!1}function sd({vnode:n,parent:e},s){for(;e&&e.subTree===n;)(n=e.vnode).el=s,e=e.parent}const dr="components";function Kn(n,e){return td(dr,n,!0,e)||n}const ad=Symbol.for("v-ndc");function td(n,e,s=!0,a=!1){const t=Gn||In;if(t){const o=t.type;if(n===dr){const r=Yd(o,!1);if(r&&(r===e||r===te(e)||r===ma(te(e))))return o}const p=xp(t[n]||o[n],e)||xp(t.appContext[n],e);return!p&&a?o:p}}function xp(n,e){return n&&(n[e]||n[te(e)]||n[ma(te(e))])}const od=n=>n.__isSuspense;function vr(n,e){e&&e.pendingBranch?U(n)?e.effects.push(...n):e.effects.push(n):Ku(n)}function pd(n,e){return Oo(n,null,e)}const Ca={};function ln(n,e,s){return Oo(n,e,s)}function Oo(n,e,{immediate:s,deep:a,flush:t,onTrack:o,onTrigger:p}=xn){var r;const c=Wl()===((r=In)==null?void 0:r.scope)?In:null;let u,d=!1,v=!1;if(Pn(n)?(u=()=>n.value,d=Xa(n)):Es(n)?(u=()=>n,a=!0):U(n)?(v=!0,d=n.some(x=>Es(x)||Xa(x)),u=()=>n.map(x=>{if(Pn(x))return x.value;if(Es(x))return es(x);if(an(x))return Fe(x,c,2)})):an(n)?e?u=()=>Fe(n,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),ne(n,c,3,[k])}:u=ce,e&&a){const x=u;u=()=>es(x())}let f,k=x=>{f=A.onStop=()=>{Fe(x,c,4),f=A.onStop=void 0}},b;if(Ps)if(k=ce,e?s&&ne(e,c,3,[u(),v?[]:void 0,k]):u(),t==="sync"){const x=Zd();b=x.__watcherHandles||(x.__watcherHandles=[])}else return ce;let T=v?new Array(n.length).fill(Ca):Ca;const S=()=>{if(A.active)if(e){const x=A.run();(a||d||(v?x.some((N,O)=>os(N,T[O])):os(x,T)))&&(f&&f(),ne(e,c,3,[x,T===Ca?void 0:v&&T[0]===Ca?[]:T,k]),T=x)}else A.run()};S.allowRecurse=!!e;let y;t==="sync"?y=S:t==="post"?y=()=>Hn(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),y=()=>it(S));const A=new Eo(u,y);e?s?S():T=A.run():t==="post"?Hn(A.run.bind(A),c&&c.suspense):A.run();const w=()=>{A.stop(),c&&c.scope&&_o(c.scope.effects,A)};return b&&b.push(w),w}function ld(n,e,s){const a=this.proxy,t=cn(n)?n.includes(".")?mr(a,n):()=>a[n]:n.bind(a,a);let o;an(e)?o=e:(o=e.handler,s=e);const p=In;Rs(this);const r=Oo(t,o.bind(a),s);return p?Rs(p):ts(),r}function mr(n,e){const s=e.split(".");return()=>{let a=n;for(let t=0;t<s.length&&a;t++)a=a[s[t]];return a}}function es(n,e){if(!yn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Pn(n))es(n.value,e);else if(U(n))for(let s=0;s<n.length;s++)es(n[s],e);else if(js(n)||ws(n))n.forEach(s=>{es(s,e)});else if(Hl(n))for(const s in n)es(n[s],e);return n}function u_(n,e){const s=Gn;if(s===null)return n;const a=vt(s)||s.proxy,t=n.dirs||(n.dirs=[]);for(let o=0;o<e.length;o++){let[p,r,c,u=xn]=e[o];p&&(an(p)&&(p={mounted:p,updated:p}),p.deep&&es(r),t.push({dir:p,instance:a,value:r,oldValue:void 0,arg:c,modifiers:u}))}return n}function _e(n,e,s,a){const t=n.dirs,o=e&&e.dirs;for(let p=0;p<t.length;p++){const r=t[p];o&&(r.oldValue=o[p].value);let c=r.dir[a];c&&(Ns(),ne(c,s,8,[n.el,r,n,e]),$s())}}const $e=Symbol("_leaveCb"),ja=Symbol("_enterCb");function fr(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wn(()=>{n.isMounted=!0}),Do(()=>{n.isUnmounting=!0}),n}const Qn=[Function,Array],kr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qn,onEnter:Qn,onAfterEnter:Qn,onEnterCancelled:Qn,onBeforeLeave:Qn,onLeave:Qn,onAfterLeave:Qn,onLeaveCancelled:Qn,onBeforeAppear:Qn,onAppear:Qn,onAfterAppear:Qn,onAppearCancelled:Qn},rd={name:"BaseTransition",props:kr,setup(n,{slots:e}){const s=Bs(),a=fr();let t;return()=>{const o=e.default&&Io(e.default(),!0);if(!o||!o.length)return;let p=o[0];if(o.length>1){for(const T of o)if(T.type!==se){p=T;break}}const r=un(n),{mode:c}=r;if(a.isLeaving)return At(p);const u=Sp(p);if(!u)return At(p);const d=pa(u,r,a,s);la(u,d);const v=s.subTree,f=v&&Sp(v);let k=!1;const{getTransitionKey:b}=u.type;if(b){const T=b();t===void 0?t=T:T!==t&&(t=T,k=!0)}if(f&&f.type!==se&&(!Ze(u,f)||k)){const T=pa(f,r,a,s);if(la(f,T),c==="out-in")return a.isLeaving=!0,T.afterLeave=()=>{a.isLeaving=!1,s.update.active!==!1&&s.update()},At(p);c==="in-out"&&u.type!==se&&(T.delayLeave=(S,y,A)=>{const w=_r(a,f);w[String(f.key)]=f,S[$e]=()=>{y(),S[$e]=void 0,delete d.delayedLeave},d.delayedLeave=A})}return p}}},id=rd;function _r(n,e){const{leavingVNodes:s}=n;let a=s.get(e.type);return a||(a=Object.create(null),s.set(e.type,a)),a}function pa(n,e,s,a){const{appear:t,mode:o,persisted:p=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:v,onLeave:f,onAfterLeave:k,onLeaveCancelled:b,onBeforeAppear:T,onAppear:S,onAfterAppear:y,onAppearCancelled:A}=e,w=String(n.key),x=_r(s,n),N=(C,j)=>{C&&ne(C,a,9,j)},O=(C,j)=>{const H=j[1];N(C,j),U(C)?C.every(en=>en.length<=1)&&H():C.length<=1&&H()},$={mode:o,persisted:p,beforeEnter(C){let j=r;if(!s.isMounted)if(t)j=T||r;else return;C[$e]&&C[$e](!0);const H=x[w];H&&Ze(n,H)&&H.el[$e]&&H.el[$e](),N(j,[C])},enter(C){let j=c,H=u,en=d;if(!s.isMounted)if(t)j=S||c,H=y||u,en=A||d;else return;let z=!1;const nn=C[ja]=Sn=>{z||(z=!0,Sn?N(en,[C]):N(H,[C]),$.delayedLeave&&$.delayedLeave(),C[ja]=void 0)};j?O(j,[C,nn]):nn()},leave(C,j){const H=String(n.key);if(C[ja]&&C[ja](!0),s.isUnmounting)return j();N(v,[C]);let en=!1;const z=C[$e]=nn=>{en||(en=!0,j(),nn?N(b,[C]):N(k,[C]),C[$e]=void 0,x[H]===n&&delete x[H])};x[H]=n,f?O(f,[C,z]):z()},clone(C){return pa(C,e,s,a)}};return $}function At(n){if(_a(n))return n=Ue(n),n.children=null,n}function Sp(n){return _a(n)?n.children?n.children[0]:void 0:n}function la(n,e){n.shapeFlag&6&&n.component?la(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Io(n,e=!1,s){let a=[],t=0;for(let o=0;o<n.length;o++){let p=n[o];const r=s==null?p.key:String(s)+String(p.key!=null?p.key:o);p.type===Un?(p.patchFlag&128&&t++,a=a.concat(Io(p.children,e,r))):(e||p.type!==se)&&a.push(r!=null?Ue(p,{key:r}):p)}if(t>1)for(let o=0;o<a.length;o++)a[o].patchFlag=-2;return a}/*! #__NO_SIDE_EFFECTS__ */function M(n,e){return an(n)?(()=>On({name:n.name},e,{setup:n}))():n}const Xs=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function m(n){an(n)&&(n={loader:n});const{loader:e,loadingComponent:s,errorComponent:a,delay:t=200,timeout:o,suspensible:p=!0,onError:r}=n;let c=null,u,d=0;const v=()=>(d++,c=null,f()),f=()=>{let k;return c||(k=c=e().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),r)return new Promise((T,S)=>{r(b,()=>T(v()),()=>S(b),d+1)});throw b}).then(b=>k!==c&&c?c:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return M({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return u},setup(){const k=In;if(u)return()=>Lt(u,k);const b=A=>{c=null,ka(A,k,13,!a)};if(p&&k.suspense||Ps)return f().then(A=>()=>Lt(A,k)).catch(A=>(b(A),()=>a?Ln(a,{error:A}):null));const T=Y(!1),S=Y(),y=Y(!!t);return t&&setTimeout(()=>{y.value=!1},t),o!=null&&setTimeout(()=>{if(!T.value&&!S.value){const A=new Error(`Async component timed out after ${o}ms.`);b(A),S.value=A}},o),f().then(()=>{T.value=!0,k.parent&&_a(k.parent.vnode)&&it(k.parent.update)}).catch(A=>{b(A),S.value=A}),()=>{if(T.value&&u)return Lt(u,k);if(S.value&&a)return Ln(a,{error:S.value});if(s&&!y.value)return Ln(s)}}})}function Lt(n,e){const{ref:s,props:a,children:t,ce:o}=e.vnode,p=Ln(n,a,t);return p.ref=s,p.ce=o,delete e.vnode.ce,p}const _a=n=>n.type.__isKeepAlive;function cd(n,e){hr(n,"a",e)}function ud(n,e){hr(n,"da",e)}function hr(n,e,s=In){const a=n.__wdc||(n.__wdc=()=>{let t=s;for(;t;){if(t.isDeactivated)return;t=t.parent}return n()});if(ut(e,a,s),s){let t=s.parent;for(;t&&t.parent;)_a(t.parent.vnode)&&dd(a,e,s,t),t=t.parent}}function dd(n,e,s,a){const t=ut(e,n,a,!0);ha(()=>{_o(a[e],t)},s)}function ut(n,e,s=In,a=!1){if(s){const t=s[n]||(s[n]=[]),o=e.__weh||(e.__weh=(...p)=>{if(s.isUnmounted)return;Ns(),Rs(s);const r=ne(e,s,n,p);return ts(),$s(),r});return a?t.unshift(o):t.push(o),o}}const Ie=n=>(e,s=In)=>(!Ps||n==="sp")&&ut(n,(...a)=>e(...a),s),vd=Ie("bm"),wn=Ie("m"),md=Ie("bu"),br=Ie("u"),Do=Ie("bum"),ha=Ie("um"),fd=Ie("sp"),kd=Ie("rtg"),_d=Ie("rtc");function hd(n,e=In){ut("ec",n,e)}function d_(n,e,s,a){let t;const o=s&&s[a];if(U(n)||cn(n)){t=new Array(n.length);for(let p=0,r=n.length;p<r;p++)t[p]=e(n[p],p,void 0,o&&o[p])}else if(typeof n=="number"){t=new Array(n);for(let p=0;p<n;p++)t[p]=e(p+1,p,void 0,o&&o[p])}else if(yn(n))if(n[Symbol.iterator])t=Array.from(n,(p,r)=>e(p,r,void 0,o&&o[r]));else{const p=Object.keys(n);t=new Array(p.length);for(let r=0,c=p.length;r<c;r++){const u=p[r];t[r]=e(n[u],u,r,o&&o[r])}}else t=[];return s&&(s[a]=t),t}const Kt=n=>n?Dr(n)?vt(n)||n.proxy:Kt(n.parent):null,Qs=On(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Kt(n.parent),$root:n=>Kt(n.root),$emit:n=>n.emit,$options:n=>Vo(n),$forceUpdate:n=>n.f||(n.f=()=>it(n.update)),$nextTick:n=>n.n||(n.n=cs.bind(n.proxy)),$watch:n=>ld.bind(n)}),Rt=(n,e)=>n!==xn&&!n.__isScriptSetup&&mn(n,e),bd={get({_:n},e){const{ctx:s,setupState:a,data:t,props:o,accessCache:p,type:r,appContext:c}=n;let u;if(e[0]!=="$"){const k=p[e];if(k!==void 0)switch(k){case 1:return a[e];case 2:return t[e];case 4:return s[e];case 3:return o[e]}else{if(Rt(a,e))return p[e]=1,a[e];if(t!==xn&&mn(t,e))return p[e]=2,t[e];if((u=n.propsOptions[0])&&mn(u,e))return p[e]=3,o[e];if(s!==xn&&mn(s,e))return p[e]=4,s[e];Yt&&(p[e]=0)}}const d=Qs[e];let v,f;if(d)return e==="$attrs"&&Fn(n,"get",e),d(n);if((v=r.__cssModules)&&(v=v[e]))return v;if(s!==xn&&mn(s,e))return p[e]=4,s[e];if(f=c.config.globalProperties,mn(f,e))return f[e]},set({_:n},e,s){const{data:a,setupState:t,ctx:o}=n;return Rt(t,e)?(t[e]=s,!0):a!==xn&&mn(a,e)?(a[e]=s,!0):mn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=s,!0)},has({_:{data:n,setupState:e,accessCache:s,ctx:a,appContext:t,propsOptions:o}},p){let r;return!!s[p]||n!==xn&&mn(n,p)||Rt(e,p)||(r=o[0])&&mn(r,p)||mn(a,p)||mn(Qs,p)||mn(t.config.globalProperties,p)},defineProperty(n,e,s){return s.get!=null?n._.accessCache[e]=0:mn(s,"value")&&this.set(n,e,s.value,null),Reflect.defineProperty(n,e,s)}};function Ap(n){return U(n)?n.reduce((e,s)=>(e[s]=null,e),{}):n}let Yt=!0;function gd(n){const e=Vo(n),s=n.proxy,a=n.ctx;Yt=!1,e.beforeCreate&&Lp(e.beforeCreate,n,"bc");const{data:t,computed:o,methods:p,watch:r,provide:c,inject:u,created:d,beforeMount:v,mounted:f,beforeUpdate:k,updated:b,activated:T,deactivated:S,beforeDestroy:y,beforeUnmount:A,destroyed:w,unmounted:x,render:N,renderTracked:O,renderTriggered:$,errorCaptured:C,serverPrefetch:j,expose:H,inheritAttrs:en,components:z,directives:nn,filters:Sn}=e;if(u&&yd(u,a,null),p)for(const tn in p){const G=p[tn];an(G)&&(a[tn]=G.bind(s))}if(t){const tn=t.call(s,s);yn(tn)&&(n.data=fa(tn))}if(Yt=!0,o)for(const tn in o){const G=o[tn],oe=an(G)?G.bind(s,s):an(G.get)?G.get.bind(s,s):ce,Ve=!an(G)&&an(G.set)?G.set.bind(s):ce,fe=E({get:oe,set:Ve});Object.defineProperty(a,tn,{enumerable:!0,configurable:!0,get:()=>fe.value,set:Bn=>fe.value=Bn})}if(r)for(const tn in r)gr(r[tn],a,s,tn);if(c){const tn=an(c)?c.call(s):c;Reflect.ownKeys(tn).forEach(G=>{ee(G,tn[G])})}d&&Lp(d,n,"c");function K(tn,G){U(G)?G.forEach(oe=>tn(oe.bind(s))):G&&tn(G.bind(s))}if(K(vd,v),K(wn,f),K(md,k),K(br,b),K(cd,T),K(ud,S),K(hd,C),K(_d,O),K(kd,$),K(Do,A),K(ha,x),K(fd,j),U(H))if(H.length){const tn=n.exposed||(n.exposed={});H.forEach(G=>{Object.defineProperty(tn,G,{get:()=>s[G],set:oe=>s[G]=oe})})}else n.exposed||(n.exposed={});N&&n.render===ce&&(n.render=N),en!=null&&(n.inheritAttrs=en),z&&(n.components=z),nn&&(n.directives=nn)}function yd(n,e,s=ce){U(n)&&(n=Xt(n));for(const a in n){const t=n[a];let o;yn(t)?"default"in t?o=kn(t.from||a,t.default,!0):o=kn(t.from||a):o=kn(t),Pn(o)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:p=>o.value=p}):e[a]=o}}function Lp(n,e,s){ne(U(n)?n.map(a=>a.bind(e.proxy)):n.bind(e.proxy),e,s)}function gr(n,e,s,a){const t=a.includes(".")?mr(s,a):()=>s[a];if(cn(n)){const o=e[n];an(o)&&ln(t,o)}else if(an(n))ln(t,n.bind(s));else if(yn(n))if(U(n))n.forEach(o=>gr(o,e,s,a));else{const o=an(n.handler)?n.handler.bind(s):e[n.handler];an(o)&&ln(t,o,n)}}function Vo(n){const e=n.type,{mixins:s,extends:a}=e,{mixins:t,optionsCache:o,config:{optionMergeStrategies:p}}=n.appContext,r=o.get(e);let c;return r?c=r:!t.length&&!s&&!a?c=e:(c={},t.length&&t.forEach(u=>nt(c,u,p,!0)),nt(c,e,p)),yn(e)&&o.set(e,c),c}function nt(n,e,s,a=!1){const{mixins:t,extends:o}=e;o&&nt(n,o,s,!0),t&&t.forEach(p=>nt(n,p,s,!0));for(const p in e)if(!(a&&p==="expose")){const r=wd[p]||s&&s[p];n[p]=r?r(n[p],e[p]):e[p]}return n}const wd={data:Rp,props:Pp,emits:Pp,methods:Ks,computed:Ks,beforeCreate:$n,created:$n,beforeMount:$n,mounted:$n,beforeUpdate:$n,updated:$n,beforeDestroy:$n,beforeUnmount:$n,destroyed:$n,unmounted:$n,activated:$n,deactivated:$n,errorCaptured:$n,serverPrefetch:$n,components:Ks,directives:Ks,watch:Td,provide:Rp,inject:Ed};function Rp(n,e){return e?n?function(){return On(an(n)?n.call(this,this):n,an(e)?e.call(this,this):e)}:e:n}function Ed(n,e){return Ks(Xt(n),Xt(e))}function Xt(n){if(U(n)){const e={};for(let s=0;s<n.length;s++)e[n[s]]=n[s];return e}return n}function $n(n,e){return n?[...new Set([].concat(n,e))]:e}function Ks(n,e){return n?On(Object.create(null),n,e):e}function Pp(n,e){return n?U(n)&&U(e)?[...new Set([...n,...e])]:On(Object.create(null),Ap(n),Ap(e??{})):e}function Td(n,e){if(!n)return e;if(!e)return n;const s=On(Object.create(null),n);for(const a in e)s[a]=$n(n[a],e[a]);return s}function yr(){return{app:null,config:{isNativeTag:nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xd=0;function Sd(n,e){return function(a,t=null){an(a)||(a=On({},a)),t!=null&&!yn(t)&&(t=null);const o=yr(),p=new WeakSet;let r=!1;const c=o.app={_uid:xd++,_component:a,_props:t,_container:null,_context:o,_instance:null,version:nv,get config(){return o.config},set config(u){},use(u,...d){return p.has(u)||(u&&an(u.install)?(p.add(u),u.install(c,...d)):an(u)&&(p.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,v){if(!r){const f=Ln(a,t);return f.appContext=o,d&&e?e(f,u):n(f,u,v),r=!0,c._container=u,u.__vue_app__=c,vt(f.component)||f.component.proxy}},unmount(){r&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){et=c;try{return u()}finally{et=null}}};return c}}let et=null;function ee(n,e){if(In){let s=In.provides;const a=In.parent&&In.parent.provides;a===s&&(s=In.provides=Object.create(a)),s[n]=e}}function kn(n,e,s=!1){const a=In||Gn;if(a||et){const t=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:et._context.provides;if(t&&n in t)return t[n];if(arguments.length>1)return s&&an(e)?e.call(a&&a.proxy):e}}function Ad(n,e,s,a=!1){const t={},o={};Ga(o,dt,1),n.propsDefaults=Object.create(null),wr(n,e,t,o);for(const p in n.propsOptions[0])p in t||(t[p]=void 0);s?n.props=a?t:sr(t):n.type.props?n.props=t:n.props=o,n.attrs=o}function Ld(n,e,s,a){const{props:t,attrs:o,vnode:{patchFlag:p}}=n,r=un(t),[c]=n.propsOptions;let u=!1;if((a||p>0)&&!(p&16)){if(p&8){const d=n.vnode.dynamicProps;for(let v=0;v<d.length;v++){let f=d[v];if(ct(n.emitsOptions,f))continue;const k=e[f];if(c)if(mn(o,f))k!==o[f]&&(o[f]=k,u=!0);else{const b=te(f);t[b]=Qt(c,r,b,k,n,!1)}else k!==o[f]&&(o[f]=k,u=!0)}}}else{wr(n,e,t,o)&&(u=!0);let d;for(const v in r)(!e||!mn(e,v)&&((d=Ms(v))===v||!mn(e,d)))&&(c?s&&(s[v]!==void 0||s[d]!==void 0)&&(t[v]=Qt(c,r,v,void 0,n,!0)):delete t[v]);if(o!==r)for(const v in o)(!e||!mn(e,v))&&(delete o[v],u=!0)}u&&Re(n,"set","$attrs")}function wr(n,e,s,a){const[t,o]=n.propsOptions;let p=!1,r;if(e)for(let c in e){if(Ys(c))continue;const u=e[c];let d;t&&mn(t,d=te(c))?!o||!o.includes(d)?s[d]=u:(r||(r={}))[d]=u:ct(n.emitsOptions,c)||(!(c in a)||u!==a[c])&&(a[c]=u,p=!0)}if(o){const c=un(s),u=r||xn;for(let d=0;d<o.length;d++){const v=o[d];s[v]=Qt(t,c,v,u[v],n,!mn(u,v))}}return p}function Qt(n,e,s,a,t,o){const p=n[s];if(p!=null){const r=mn(p,"default");if(r&&a===void 0){const c=p.default;if(p.type!==Function&&!p.skipFactory&&an(c)){const{propsDefaults:u}=t;s in u?a=u[s]:(Rs(t),a=u[s]=c.call(null,e),ts())}else a=c}p[0]&&(o&&!r?a=!1:p[1]&&(a===""||a===Ms(s))&&(a=!0))}return a}function Er(n,e,s=!1){const a=e.propsCache,t=a.get(n);if(t)return t;const o=n.props,p={},r=[];let c=!1;if(!an(n)){const d=v=>{c=!0;const[f,k]=Er(v,e,!0);On(p,f),k&&r.push(...k)};!s&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!o&&!c)return yn(n)&&a.set(n,ys),ys;if(U(o))for(let d=0;d<o.length;d++){const v=te(o[d]);Op(v)&&(p[v]=xn)}else if(o)for(const d in o){const v=te(d);if(Op(v)){const f=o[d],k=p[v]=U(f)||an(f)?{type:f}:On({},f);if(k){const b=Vp(Boolean,k.type),T=Vp(String,k.type);k[0]=b>-1,k[1]=T<0||b<T,(b>-1||mn(k,"default"))&&r.push(v)}}}const u=[p,r];return yn(n)&&a.set(n,u),u}function Op(n){return n[0]!=="$"}function Ip(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Dp(n,e){return Ip(n)===Ip(e)}function Vp(n,e){return U(e)?e.findIndex(s=>Dp(s,n)):an(e)&&Dp(e,n)?0:-1}const Tr=n=>n[0]==="_"||n==="$stable",Co=n=>U(n)?n.map(le):[le(n)],Rd=(n,e,s)=>{if(e._n)return e;const a=Qu((...t)=>Co(e(...t)),s);return a._c=!1,a},xr=(n,e,s)=>{const a=n._ctx;for(const t in n){if(Tr(t))continue;const o=n[t];if(an(o))e[t]=Rd(t,o,a);else if(o!=null){const p=Co(o);e[t]=()=>p}}},Sr=(n,e)=>{const s=Co(e);n.slots.default=()=>s},Pd=(n,e)=>{if(n.vnode.shapeFlag&32){const s=e._;s?(n.slots=un(e),Ga(e,"_",s)):xr(e,n.slots={})}else n.slots={},e&&Sr(n,e);Ga(n.slots,dt,1)},Od=(n,e,s)=>{const{vnode:a,slots:t}=n;let o=!0,p=xn;if(a.shapeFlag&32){const r=e._;r?s&&r===1?o=!1:(On(t,e),!s&&r===1&&delete t._):(o=!e.$stable,xr(e,t)),p=e}else e&&(Sr(n,e),p={default:1});if(o)for(const r in t)!Tr(r)&&p[r]==null&&delete t[r]};function st(n,e,s,a,t=!1){if(U(n)){n.forEach((f,k)=>st(f,e&&(U(e)?e[k]:e),s,a,t));return}if(Xs(a)&&!t)return;const o=a.shapeFlag&4?vt(a.component)||a.component.proxy:a.el,p=t?null:o,{i:r,r:c}=n,u=e&&e.r,d=r.refs===xn?r.refs={}:r.refs,v=r.setupState;if(u!=null&&u!==c&&(cn(u)?(d[u]=null,mn(v,u)&&(v[u]=null)):Pn(u)&&(u.value=null)),an(c))Fe(c,r,12,[p,d]);else{const f=cn(c),k=Pn(c);if(f||k){const b=()=>{if(n.f){const T=f?mn(v,c)?v[c]:d[c]:c.value;t?U(T)&&_o(T,o):U(T)?T.includes(o)||T.push(o):f?(d[c]=[o],mn(v,c)&&(v[c]=d[c])):(c.value=[o],n.k&&(d[n.k]=c.value))}else f?(d[c]=p,mn(v,c)&&(v[c]=p)):k&&(c.value=p,n.k&&(d[n.k]=p))};p?(b.id=-1,Hn(b,s)):b()}}}let je=!1;const Ma=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",Na=n=>n.nodeType===8;function Id(n){const{mt:e,p:s,o:{patchProp:a,createText:t,nextSibling:o,parentNode:p,remove:r,insert:c,createComment:u}}=n,d=(w,x)=>{if(!x.hasChildNodes()){s(null,w,x),Qa(),x._vnode=w;return}je=!1,v(x.firstChild,w,null,null,null),Qa(),x._vnode=w,je&&console.error("Hydration completed but contains mismatches.")},v=(w,x,N,O,$,C=!1)=>{const j=Na(w)&&w.data==="[",H=()=>T(w,x,N,O,$,j),{type:en,ref:z,shapeFlag:nn,patchFlag:Sn}=x;let An=w.nodeType;x.el=w,Sn===-2&&(C=!1,x.dynamicChildren=null);let K=null;switch(en){case Ls:An!==3?x.children===""?(c(x.el=t(""),p(w),w),K=w):K=H():(w.data!==x.children&&(je=!0,w.data=x.children),K=o(w));break;case se:A(w)?(K=o(w),y(x.el=w.content.firstChild,w,N)):An!==8||j?K=H():K=o(w);break;case Zs:if(j&&(w=o(w),An=w.nodeType),An===1||An===3){K=w;const tn=!x.children.length;for(let G=0;G<x.staticCount;G++)tn&&(x.children+=K.nodeType===1?K.outerHTML:K.data),G===x.staticCount-1&&(x.anchor=K),K=o(K);return j?o(K):K}else H();break;case Un:j?K=b(w,x,N,O,$,C):K=H();break;default:if(nn&1)(An!==1||x.type.toLowerCase()!==w.tagName.toLowerCase())&&!A(w)?K=H():K=f(w,x,N,O,$,C);else if(nn&6){x.slotScopeIds=$;const tn=p(w);if(j?K=S(w):Na(w)&&w.data==="teleport start"?K=S(w,w.data,"teleport end"):K=o(w),e(x,tn,null,N,O,Ma(tn),C),Xs(x)){let G;j?(G=Ln(Un),G.anchor=K?K.previousSibling:tn.lastChild):G=w.nodeType===3?Ir(""):Ln("div"),G.el=w,x.component.subTree=G}}else nn&64?An!==8?K=H():K=x.type.hydrate(w,x,N,O,$,C,n,k):nn&128&&(K=x.type.hydrate(w,x,N,O,Ma(p(w)),$,C,n,v))}return z!=null&&st(z,null,O,x),K},f=(w,x,N,O,$,C)=>{C=C||!!x.dynamicChildren;const{type:j,props:H,patchFlag:en,shapeFlag:z,dirs:nn,transition:Sn}=x,An=j==="input"||j==="option";if(An||en!==-1){if(nn&&_e(x,null,N,"created"),H)if(An||!C||en&48)for(const G in H)(An&&(G.endsWith("value")||G==="indeterminate")||da(G)&&!Ys(G)||G[0]===".")&&a(w,G,null,H[G],!1,void 0,N);else H.onClick&&a(w,"onClick",null,H.onClick,!1,void 0,N);let K;(K=H&&H.onVnodeBeforeMount)&&Zn(K,N,x);let tn=!1;if(A(w)){tn=Ar(O,Sn)&&N&&N.vnode.props&&N.vnode.props.appear;const G=w.content.firstChild;tn&&Sn.beforeEnter(G),y(G,w,N),x.el=w=G}if(nn&&_e(x,null,N,"beforeMount"),((K=H&&H.onVnodeMounted)||nn||tn)&&vr(()=>{K&&Zn(K,N,x),tn&&Sn.enter(w),nn&&_e(x,null,N,"mounted")},O),z&16&&!(H&&(H.innerHTML||H.textContent))){let G=k(w.firstChild,x,w,N,O,$,C);for(;G;){je=!0;const oe=G;G=G.nextSibling,r(oe)}}else z&8&&w.textContent!==x.children&&(je=!0,w.textContent=x.children)}return w.nextSibling},k=(w,x,N,O,$,C,j)=>{j=j||!!x.dynamicChildren;const H=x.children,en=H.length;for(let z=0;z<en;z++){const nn=j?H[z]:H[z]=le(H[z]);if(w)w=v(w,nn,O,$,C,j);else{if(nn.type===Ls&&!nn.children)continue;je=!0,s(null,nn,N,null,O,$,Ma(N),C)}}return w},b=(w,x,N,O,$,C)=>{const{slotScopeIds:j}=x;j&&($=$?$.concat(j):j);const H=p(w),en=k(o(w),x,H,N,O,$,C);return en&&Na(en)&&en.data==="]"?o(x.anchor=en):(je=!0,c(x.anchor=u("]"),H,en),en)},T=(w,x,N,O,$,C)=>{if(je=!0,x.el=null,C){const en=S(w);for(;;){const z=o(w);if(z&&z!==en)r(z);else break}}const j=o(w),H=p(w);return r(w),s(null,x,H,j,N,O,Ma(H),$),j},S=(w,x="[",N="]")=>{let O=0;for(;w;)if(w=o(w),w&&Na(w)&&(w.data===x&&O++,w.data===N)){if(O===0)return o(w);O--}return w},y=(w,x,N)=>{const O=x.parentNode;O&&O.replaceChild(w,x);let $=N;for(;$;)$.vnode.el===x&&($.vnode.el=$.subTree.el=w),$=$.parent},A=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[d,v]}const Hn=vr;function Dd(n){return Vd(n,Id)}function Vd(n,e){const s=Ft();s.__VUE__=!0;const{insert:a,remove:t,patchProp:o,createElement:p,createText:r,createComment:c,setText:u,setElementText:d,parentNode:v,nextSibling:f,setScopeId:k=ce,insertStaticContent:b}=n,T=(_,h,g,L=null,P=null,I=null,F=!1,V=null,q=!!h.dynamicChildren)=>{if(_===h)return;_&&!Ze(_,h)&&(L=R(_),Bn(_,P,I,!0),_=null),h.patchFlag===-2&&(q=!1,h.dynamicChildren=null);const{type:D,ref:Q,shapeFlag:J}=h;switch(D){case Ls:S(_,h,g,L);break;case se:y(_,h,g,L);break;case Zs:_==null&&A(h,g,L,F);break;case Un:z(_,h,g,L,P,I,F,V,q);break;default:J&1?N(_,h,g,L,P,I,F,V,q):J&6?nn(_,h,g,L,P,I,F,V,q):(J&64||J&128)&&D.process(_,h,g,L,P,I,F,V,q,B)}Q!=null&&P&&st(Q,_&&_.ref,I,h||_,!h)},S=(_,h,g,L)=>{if(_==null)a(h.el=r(h.children),g,L);else{const P=h.el=_.el;h.children!==_.children&&u(P,h.children)}},y=(_,h,g,L)=>{_==null?a(h.el=c(h.children||""),g,L):h.el=_.el},A=(_,h,g,L)=>{[_.el,_.anchor]=b(_.children,h,g,L,_.el,_.anchor)},w=({el:_,anchor:h},g,L)=>{let P;for(;_&&_!==h;)P=f(_),a(_,g,L),_=P;a(h,g,L)},x=({el:_,anchor:h})=>{let g;for(;_&&_!==h;)g=f(_),t(_),_=g;t(h)},N=(_,h,g,L,P,I,F,V,q)=>{F=F||h.type==="svg",_==null?O(h,g,L,P,I,F,V,q):j(_,h,P,I,F,V,q)},O=(_,h,g,L,P,I,F,V)=>{let q,D;const{type:Q,props:J,shapeFlag:Z,transition:sn,dirs:on}=_;if(q=_.el=p(_.type,I,J&&J.is,J),Z&8?d(q,_.children):Z&16&&C(_.children,q,null,L,P,I&&Q!=="foreignObject",F,V),on&&_e(_,null,L,"created"),$(q,_,_.scopeId,F,L),J){for(const bn in J)bn!=="value"&&!Ys(bn)&&o(q,bn,null,J[bn],I,_.children,L,P,jn);"value"in J&&o(q,"value",null,J.value),(D=J.onVnodeBeforeMount)&&Zn(D,L,_)}on&&_e(_,null,L,"beforeMount");const Tn=Ar(P,sn);Tn&&sn.beforeEnter(q),a(q,h,g),((D=J&&J.onVnodeMounted)||Tn||on)&&Hn(()=>{D&&Zn(D,L,_),Tn&&sn.enter(q),on&&_e(_,null,L,"mounted")},P)},$=(_,h,g,L,P)=>{if(g&&k(_,g),L)for(let I=0;I<L.length;I++)k(_,L[I]);if(P){let I=P.subTree;if(h===I){const F=P.vnode;$(_,F,F.scopeId,F.slotScopeIds,P.parent)}}},C=(_,h,g,L,P,I,F,V,q=0)=>{for(let D=q;D<_.length;D++){const Q=_[D]=V?qe(_[D]):le(_[D]);T(null,Q,h,g,L,P,I,F,V)}},j=(_,h,g,L,P,I,F)=>{const V=h.el=_.el;let{patchFlag:q,dynamicChildren:D,dirs:Q}=h;q|=_.patchFlag&16;const J=_.props||xn,Z=h.props||xn;let sn;g&&Ye(g,!1),(sn=Z.onVnodeBeforeUpdate)&&Zn(sn,g,h,_),Q&&_e(h,_,g,"beforeUpdate"),g&&Ye(g,!0);const on=P&&h.type!=="foreignObject";if(D?H(_.dynamicChildren,D,V,g,L,on,I):F||G(_,h,V,null,g,L,on,I,!1),q>0){if(q&16)en(V,h,J,Z,g,L,P);else if(q&2&&J.class!==Z.class&&o(V,"class",null,Z.class,P),q&4&&o(V,"style",J.style,Z.style,P),q&8){const Tn=h.dynamicProps;for(let bn=0;bn<Tn.length;bn++){const Rn=Tn[bn],pe=J[Rn],ks=Z[Rn];(ks!==pe||Rn==="value")&&o(V,Rn,pe,ks,P,_.children,g,L,jn)}}q&1&&_.children!==h.children&&d(V,h.children)}else!F&&D==null&&en(V,h,J,Z,g,L,P);((sn=Z.onVnodeUpdated)||Q)&&Hn(()=>{sn&&Zn(sn,g,h,_),Q&&_e(h,_,g,"updated")},L)},H=(_,h,g,L,P,I,F)=>{for(let V=0;V<h.length;V++){const q=_[V],D=h[V],Q=q.el&&(q.type===Un||!Ze(q,D)||q.shapeFlag&70)?v(q.el):g;T(q,D,Q,null,L,P,I,F,!0)}},en=(_,h,g,L,P,I,F)=>{if(g!==L){if(g!==xn)for(const V in g)!Ys(V)&&!(V in L)&&o(_,V,g[V],null,F,h.children,P,I,jn);for(const V in L){if(Ys(V))continue;const q=L[V],D=g[V];q!==D&&V!=="value"&&o(_,V,D,q,F,h.children,P,I,jn)}"value"in L&&o(_,"value",g.value,L.value)}},z=(_,h,g,L,P,I,F,V,q)=>{const D=h.el=_?_.el:r(""),Q=h.anchor=_?_.anchor:r("");let{patchFlag:J,dynamicChildren:Z,slotScopeIds:sn}=h;sn&&(V=V?V.concat(sn):sn),_==null?(a(D,g,L),a(Q,g,L),C(h.children,g,Q,P,I,F,V,q)):J>0&&J&64&&Z&&_.dynamicChildren?(H(_.dynamicChildren,Z,g,P,I,F,V),(h.key!=null||P&&h===P.subTree)&&Lr(_,h,!0)):G(_,h,g,Q,P,I,F,V,q)},nn=(_,h,g,L,P,I,F,V,q)=>{h.slotScopeIds=V,_==null?h.shapeFlag&512?P.ctx.activate(h,g,L,F,q):Sn(h,g,L,P,I,F,q):An(_,h,q)},Sn=(_,h,g,L,P,I,F)=>{const V=_.component=Wd(_,L,P);if(_a(_)&&(V.ctx.renderer=B),Jd(V),V.asyncDep){if(P&&P.registerDep(V,K),!_.el){const q=V.subTree=Ln(se);y(null,q,h,g)}return}K(V,_,h,g,P,I,F)},An=(_,h,g)=>{const L=h.component=_.component;if(ed(_,h,g))if(L.asyncDep&&!L.asyncResolved){tn(L,h,g);return}else L.next=h,Gu(L.update),L.update();else h.el=_.el,L.vnode=h},K=(_,h,g,L,P,I,F)=>{const V=()=>{if(_.isMounted){let{next:Q,bu:J,u:Z,parent:sn,vnode:on}=_,Tn=Q,bn;Ye(_,!1),Q?(Q.el=on.el,tn(_,Q,F)):Q=on,J&&Ja(J),(bn=Q.props&&Q.props.onVnodeBeforeUpdate)&&Zn(bn,sn,Q,on),Ye(_,!0);const Rn=St(_),pe=_.subTree;_.subTree=Rn,T(pe,Rn,v(pe.el),R(pe),_,P,I),Q.el=Rn.el,Tn===null&&sd(_,Rn.el),Z&&Hn(Z,P),(bn=Q.props&&Q.props.onVnodeUpdated)&&Hn(()=>Zn(bn,sn,Q,on),P)}else{let Q;const{el:J,props:Z}=h,{bm:sn,m:on,parent:Tn}=_,bn=Xs(h);if(Ye(_,!1),sn&&Ja(sn),!bn&&(Q=Z&&Z.onVnodeBeforeMount)&&Zn(Q,Tn,h),Ye(_,!0),J&&_n){const Rn=()=>{_.subTree=St(_),_n(J,_.subTree,_,P,null)};bn?h.type.__asyncLoader().then(()=>!_.isUnmounted&&Rn()):Rn()}else{const Rn=_.subTree=St(_);T(null,Rn,g,L,_,P,I),h.el=Rn.el}if(on&&Hn(on,P),!bn&&(Q=Z&&Z.onVnodeMounted)){const Rn=h;Hn(()=>Zn(Q,Tn,Rn),P)}(h.shapeFlag&256||Tn&&Xs(Tn.vnode)&&Tn.vnode.shapeFlag&256)&&_.a&&Hn(_.a,P),_.isMounted=!0,h=g=L=null}},q=_.effect=new Eo(V,()=>it(D),_.scope),D=_.update=()=>q.run();D.id=_.uid,Ye(_,!0),D()},tn=(_,h,g)=>{h.component=_;const L=_.vnode.props;_.vnode=h,_.next=null,Ld(_,h.props,L,g),Od(_,h.children,g),Ns(),Ep(_),$s()},G=(_,h,g,L,P,I,F,V,q=!1)=>{const D=_&&_.children,Q=_?_.shapeFlag:0,J=h.children,{patchFlag:Z,shapeFlag:sn}=h;if(Z>0){if(Z&128){Ve(D,J,g,L,P,I,F,V,q);return}else if(Z&256){oe(D,J,g,L,P,I,F,V,q);return}}sn&8?(Q&16&&jn(D,P,I),J!==D&&d(g,J)):Q&16?sn&16?Ve(D,J,g,L,P,I,F,V,q):jn(D,P,I,!0):(Q&8&&d(g,""),sn&16&&C(J,g,L,P,I,F,V,q))},oe=(_,h,g,L,P,I,F,V,q)=>{_=_||ys,h=h||ys;const D=_.length,Q=h.length,J=Math.min(D,Q);let Z;for(Z=0;Z<J;Z++){const sn=h[Z]=q?qe(h[Z]):le(h[Z]);T(_[Z],sn,g,null,P,I,F,V,q)}D>Q?jn(_,P,I,!0,!1,J):C(h,g,L,P,I,F,V,q,J)},Ve=(_,h,g,L,P,I,F,V,q)=>{let D=0;const Q=h.length;let J=_.length-1,Z=Q-1;for(;D<=J&&D<=Z;){const sn=_[D],on=h[D]=q?qe(h[D]):le(h[D]);if(Ze(sn,on))T(sn,on,g,null,P,I,F,V,q);else break;D++}for(;D<=J&&D<=Z;){const sn=_[J],on=h[Z]=q?qe(h[Z]):le(h[Z]);if(Ze(sn,on))T(sn,on,g,null,P,I,F,V,q);else break;J--,Z--}if(D>J){if(D<=Z){const sn=Z+1,on=sn<Q?h[sn].el:L;for(;D<=Z;)T(null,h[D]=q?qe(h[D]):le(h[D]),g,on,P,I,F,V,q),D++}}else if(D>Z)for(;D<=J;)Bn(_[D],P,I,!0),D++;else{const sn=D,on=D,Tn=new Map;for(D=on;D<=Z;D++){const Wn=h[D]=q?qe(h[D]):le(h[D]);Wn.key!=null&&Tn.set(Wn.key,D)}let bn,Rn=0;const pe=Z-on+1;let ks=!1,cp=0;const Fs=new Array(pe);for(D=0;D<pe;D++)Fs[D]=0;for(D=sn;D<=J;D++){const Wn=_[D];if(Rn>=pe){Bn(Wn,P,I,!0);continue}let ke;if(Wn.key!=null)ke=Tn.get(Wn.key);else for(bn=on;bn<=Z;bn++)if(Fs[bn-on]===0&&Ze(Wn,h[bn])){ke=bn;break}ke===void 0?Bn(Wn,P,I,!0):(Fs[ke-on]=D+1,ke>=cp?cp=ke:ks=!0,T(Wn,h[ke],g,null,P,I,F,V,q),Rn++)}const up=ks?Cd(Fs):ys;for(bn=up.length-1,D=pe-1;D>=0;D--){const Wn=on+D,ke=h[Wn],dp=Wn+1<Q?h[Wn+1].el:L;Fs[D]===0?T(null,ke,g,dp,P,I,F,V,q):ks&&(bn<0||D!==up[bn]?fe(ke,g,dp,2):bn--)}}},fe=(_,h,g,L,P=null)=>{const{el:I,type:F,transition:V,children:q,shapeFlag:D}=_;if(D&6){fe(_.component.subTree,h,g,L);return}if(D&128){_.suspense.move(h,g,L);return}if(D&64){F.move(_,h,g,B);return}if(F===Un){a(I,h,g);for(let J=0;J<q.length;J++)fe(q[J],h,g,L);a(_.anchor,h,g);return}if(F===Zs){w(_,h,g);return}if(L!==2&&D&1&&V)if(L===0)V.beforeEnter(I),a(I,h,g),Hn(()=>V.enter(I),P);else{const{leave:J,delayLeave:Z,afterLeave:sn}=V,on=()=>a(I,h,g),Tn=()=>{J(I,()=>{on(),sn&&sn()})};Z?Z(I,on,Tn):Tn()}else a(I,h,g)},Bn=(_,h,g,L=!1,P=!1)=>{const{type:I,props:F,ref:V,children:q,dynamicChildren:D,shapeFlag:Q,patchFlag:J,dirs:Z}=_;if(V!=null&&st(V,null,g,_,!0),Q&256){h.ctx.deactivate(_);return}const sn=Q&1&&Z,on=!Xs(_);let Tn;if(on&&(Tn=F&&F.onVnodeBeforeUnmount)&&Zn(Tn,h,_),Q&6)Ra(_.component,g,L);else{if(Q&128){_.suspense.unmount(g,L);return}sn&&_e(_,null,h,"beforeUnmount"),Q&64?_.type.remove(_,h,g,P,B,L):D&&(I!==Un||J>0&&J&64)?jn(D,h,g,!1,!0):(I===Un&&J&384||!P&&Q&16)&&jn(q,h,g),L&&ms(_)}(on&&(Tn=F&&F.onVnodeUnmounted)||sn)&&Hn(()=>{Tn&&Zn(Tn,h,_),sn&&_e(_,null,h,"unmounted")},g)},ms=_=>{const{type:h,el:g,anchor:L,transition:P}=_;if(h===Un){fs(g,L);return}if(h===Zs){x(_);return}const I=()=>{t(g),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(_.shapeFlag&1&&P&&!P.persisted){const{leave:F,delayLeave:V}=P,q=()=>F(g,I);V?V(_.el,I,q):q()}else I()},fs=(_,h)=>{let g;for(;_!==h;)g=f(_),t(_),_=g;t(h)},Ra=(_,h,g)=>{const{bum:L,scope:P,update:I,subTree:F,um:V}=_;L&&Ja(L),P.stop(),I&&(I.active=!1,Bn(F,_,h,g)),V&&Hn(V,h),Hn(()=>{_.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},jn=(_,h,g,L=!1,P=!1,I=0)=>{for(let F=I;F<_.length;F++)Bn(_[F],h,g,L,P)},R=_=>_.shapeFlag&6?R(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),W=(_,h,g)=>{_==null?h._vnode&&Bn(h._vnode,null,null,!0):T(h._vnode||null,_,h,null,null,null,g),Ep(),Qa(),h._vnode=_},B={p:T,um:Bn,m:fe,r:ms,mt:Sn,mc:C,pc:G,pbc:H,n:R,o:n};let X,_n;return e&&([X,_n]=e(B)),{render:W,hydrate:X,createApp:Sd(W,X)}}function Ye({effect:n,update:e},s){n.allowRecurse=e.allowRecurse=s}function Ar(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Lr(n,e,s=!1){const a=n.children,t=e.children;if(U(a)&&U(t))for(let o=0;o<a.length;o++){const p=a[o];let r=t[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=t[o]=qe(t[o]),r.el=p.el),s||Lr(p,r)),r.type===Ls&&(r.el=p.el)}}function Cd(n){const e=n.slice(),s=[0];let a,t,o,p,r;const c=n.length;for(a=0;a<c;a++){const u=n[a];if(u!==0){if(t=s[s.length-1],n[t]<u){e[a]=t,s.push(a);continue}for(o=0,p=s.length-1;o<p;)r=o+p>>1,n[s[r]]<u?o=r+1:p=r;u<n[s[o]]&&(o>0&&(e[a]=s[o-1]),s[o]=a)}}for(o=s.length,p=s[o-1];o-- >0;)s[o]=p,p=e[p];return s}const jd=n=>n.__isTeleport,Un=Symbol.for("v-fgt"),Ls=Symbol.for("v-txt"),se=Symbol.for("v-cmt"),Zs=Symbol.for("v-stc"),na=[];let ie=null;function Md(n=!1){na.push(ie=n?null:[])}function Nd(){na.pop(),ie=na[na.length-1]||null}let ra=1;function Cp(n){ra+=n}function Rr(n){return n.dynamicChildren=ra>0?ie||ys:null,Nd(),ra>0&&ie&&ie.push(n),n}function v_(n,e,s,a,t,o){return Rr(Or(n,e,s,a,t,o,!0))}function $d(n,e,s,a,t){return Rr(Ln(n,e,s,a,t,!0))}function Zt(n){return n?n.__v_isVNode===!0:!1}function Ze(n,e){return n.type===e.type&&n.key===e.key}const dt="__vInternal",Pr=({key:n})=>n??null,Ua=({ref:n,ref_key:e,ref_for:s})=>(typeof n=="number"&&(n=""+n),n!=null?cn(n)||Pn(n)||an(n)?{i:Gn,r:n,k:e,f:!!s}:n:null);function Or(n,e=null,s=null,a=0,t=null,o=n===Un?0:1,p=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pr(e),ref:e&&Ua(e),scopeId:ur,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:t,dynamicChildren:null,appContext:null,ctx:Gn};return r?(jo(c,s),o&128&&n.normalize(c)):s&&(c.shapeFlag|=cn(s)?8:16),ra>0&&!p&&ie&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&ie.push(c),c}const Ln=qd;function qd(n,e=null,s=null,a=0,t=null,o=!1){if((!n||n===ad)&&(n=se),Zt(n)){const r=Ue(n,e,!0);return s&&jo(r,s),ra>0&&!o&&ie&&(r.shapeFlag&6?ie[ie.indexOf(n)]=r:ie.push(r)),r.patchFlag|=-2,r}if(Xd(n)&&(n=n.__vccOpts),e){e=Bd(e);let{class:r,style:c}=e;r&&!cn(r)&&(e.class=go(r)),yn(c)&&(ar(c)&&!U(c)&&(c=On({},c)),e.style=bo(c))}const p=cn(n)?1:od(n)?128:jd(n)?64:yn(n)?4:an(n)?2:0;return Or(n,e,s,a,t,p,o,!0)}function Bd(n){return n?ar(n)||dt in n?On({},n):n:null}function Ue(n,e,s=!1){const{props:a,ref:t,patchFlag:o,children:p}=n,r=e?Hd(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:r,key:r&&Pr(r),ref:e&&e.ref?s&&t?U(t)?t.concat(Ua(e)):[t,Ua(e)]:Ua(e):t,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:p,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Un?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ue(n.ssContent),ssFallback:n.ssFallback&&Ue(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ir(n=" ",e=0){return Ln(Ls,null,n,e)}function m_(n,e){const s=Ln(Zs,null,n);return s.staticCount=e,s}function f_(n="",e=!1){return e?(Md(),$d(se,null,n)):Ln(se,null,n)}function le(n){return n==null||typeof n=="boolean"?Ln(se):U(n)?Ln(Un,null,n.slice()):typeof n=="object"?qe(n):Ln(Ls,null,String(n))}function qe(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ue(n)}function jo(n,e){let s=0;const{shapeFlag:a}=n;if(e==null)e=null;else if(U(e))s=16;else if(typeof e=="object")if(a&65){const t=e.default;t&&(t._c&&(t._d=!1),jo(n,t()),t._c&&(t._d=!0));return}else{s=32;const t=e._;!t&&!(dt in e)?e._ctx=Gn:t===3&&Gn&&(Gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else an(e)?(e={default:e,_ctx:Gn},s=32):(e=String(e),a&64?(s=16,e=[Ir(e)]):s=8);n.children=e,n.shapeFlag|=s}function Hd(...n){const e={};for(let s=0;s<n.length;s++){const a=n[s];for(const t in a)if(t==="class")e.class!==a.class&&(e.class=go([e.class,a.class]));else if(t==="style")e.style=bo([e.style,a.style]);else if(da(t)){const o=e[t],p=a[t];p&&o!==p&&!(U(o)&&o.includes(p))&&(e[t]=o?[].concat(o,p):p)}else t!==""&&(e[t]=a[t])}return e}function Zn(n,e,s,a=null){ne(n,e,7,[s,a])}const zd=yr();let Fd=0;function Wd(n,e,s){const a=n.type,t=(e?e.appContext:n.appContext)||zd,o={uid:Fd++,vnode:n,type:a,parent:e,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new vu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Er(a,t),emitsOptions:cr(a,t),emit:null,emitted:null,propsDefaults:xn,inheritAttrs:a.inheritAttrs,ctx:xn,data:xn,props:xn,attrs:xn,slots:xn,refs:xn,setupState:xn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Xu.bind(null,o),n.ce&&n.ce(o),o}let In=null;const Bs=()=>In||Gn;let Mo,_s,jp="__VUE_INSTANCE_SETTERS__";(_s=Ft()[jp])||(_s=Ft()[jp]=[]),_s.push(n=>In=n),Mo=n=>{_s.length>1?_s.forEach(e=>e(n)):_s[0](n)};const Rs=n=>{Mo(n),n.scope.on()},ts=()=>{In&&In.scope.off(),Mo(null)};function Dr(n){return n.vnode.shapeFlag&4}let Ps=!1;function Jd(n,e=!1){Ps=e;const{props:s,children:a}=n.vnode,t=Dr(n);Ad(n,s,t,e),Pd(n,a);const o=t?Ud(n,e):void 0;return Ps=!1,o}function Ud(n,e){const s=n.type;n.accessCache=Object.create(null),n.proxy=tr(new Proxy(n.ctx,bd));const{setup:a}=s;if(a){const t=n.setupContext=a.length>1?Kd(n):null;Rs(n),Ns();const o=Fe(a,n,0,[n.props,t]);if($s(),ts(),ql(o)){if(o.then(ts,ts),e)return o.then(p=>{Mp(n,p,e)}).catch(p=>{ka(p,n,0)});n.asyncDep=o}else Mp(n,o,e)}else Vr(n,e)}function Mp(n,e,s){an(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yn(e)&&(n.setupState=pr(e)),Vr(n,s)}let Np;function Vr(n,e,s){const a=n.type;if(!n.render){if(!e&&Np&&!a.render){const t=a.template||Vo(n).template;if(t){const{isCustomElement:o,compilerOptions:p}=n.appContext.config,{delimiters:r,compilerOptions:c}=a,u=On(On({isCustomElement:o,delimiters:r},p),c);a.render=Np(t,u)}}n.render=a.render||ce}{Rs(n),Ns();try{gd(n)}finally{$s(),ts()}}}function Gd(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,s){return Fn(n,"get","$attrs"),e[s]}}))}function Kd(n){const e=s=>{n.exposed=s||{}};return{get attrs(){return Gd(n)},slots:n.slots,emit:n.emit,expose:e}}function vt(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(pr(tr(n.exposed)),{get(e,s){if(s in e)return e[s];if(s in Qs)return Qs[s](n)},has(e,s){return s in e||s in Qs}}))}function Yd(n,e=!0){return an(n)?n.displayName||n.name:n.name||e&&n.__name}function Xd(n){return an(n)&&"__vccOpts"in n}const E=(n,e)=>Wu(n,e,Ps);function i(n,e,s){const a=arguments.length;return a===2?yn(e)&&!U(e)?Zt(e)?Ln(n,null,[e]):Ln(n,e):Ln(n,null,e):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Zt(s)&&(s=[s]),Ln(n,e,s))}const Qd=Symbol.for("v-scx"),Zd=()=>kn(Qd),nv="3.3.11",ev="http://www.w3.org/2000/svg",ns=typeof document<"u"?document:null,$p=ns&&ns.createElement("template"),sv={insert:(n,e,s)=>{e.insertBefore(n,s||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,s,a)=>{const t=e?ns.createElementNS(ev,n):ns.createElement(n,s?{is:s}:void 0);return n==="select"&&a&&a.multiple!=null&&t.setAttribute("multiple",a.multiple),t},createText:n=>ns.createTextNode(n),createComment:n=>ns.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ns.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,s,a,t,o){const p=s?s.previousSibling:e.lastChild;if(t&&(t===o||t.nextSibling))for(;e.insertBefore(t.cloneNode(!0),s),!(t===o||!(t=t.nextSibling)););else{$p.innerHTML=a?`<svg>${n}</svg>`:n;const r=$p.content;if(a){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}e.insertBefore(r,s)}return[p?p.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},Me="transition",Ws="animation",Os=Symbol("_vtc"),Oe=(n,{slots:e})=>i(id,jr(n),e);Oe.displayName="Transition";const Cr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},av=Oe.props=On({},kr,Cr),Xe=(n,e=[])=>{U(n)?n.forEach(s=>s(...e)):n&&n(...e)},qp=n=>n?U(n)?n.some(e=>e.length>1):n.length>1:!1;function jr(n){const e={};for(const z in n)z in Cr||(e[z]=n[z]);if(n.css===!1)return e;const{name:s="v",type:a,duration:t,enterFromClass:o=`${s}-enter-from`,enterActiveClass:p=`${s}-enter-active`,enterToClass:r=`${s}-enter-to`,appearFromClass:c=o,appearActiveClass:u=p,appearToClass:d=r,leaveFromClass:v=`${s}-leave-from`,leaveActiveClass:f=`${s}-leave-active`,leaveToClass:k=`${s}-leave-to`}=n,b=tv(t),T=b&&b[0],S=b&&b[1],{onBeforeEnter:y,onEnter:A,onEnterCancelled:w,onLeave:x,onLeaveCancelled:N,onBeforeAppear:O=y,onAppear:$=A,onAppearCancelled:C=w}=e,j=(z,nn,Sn)=>{Ne(z,nn?d:r),Ne(z,nn?u:p),Sn&&Sn()},H=(z,nn)=>{z._isLeaving=!1,Ne(z,v),Ne(z,k),Ne(z,f),nn&&nn()},en=z=>(nn,Sn)=>{const An=z?$:A,K=()=>j(nn,z,Sn);Xe(An,[nn,K]),Bp(()=>{Ne(nn,z?c:o),Te(nn,z?d:r),qp(An)||Hp(nn,a,T,K)})};return On(e,{onBeforeEnter(z){Xe(y,[z]),Te(z,o),Te(z,p)},onBeforeAppear(z){Xe(O,[z]),Te(z,c),Te(z,u)},onEnter:en(!1),onAppear:en(!0),onLeave(z,nn){z._isLeaving=!0;const Sn=()=>H(z,nn);Te(z,v),Nr(),Te(z,f),Bp(()=>{z._isLeaving&&(Ne(z,v),Te(z,k),qp(x)||Hp(z,a,S,Sn))}),Xe(x,[z,Sn])},onEnterCancelled(z){j(z,!1),Xe(w,[z])},onAppearCancelled(z){j(z,!0),Xe(C,[z])},onLeaveCancelled(z){H(z),Xe(N,[z])}})}function tv(n){if(n==null)return null;if(yn(n))return[Pt(n.enter),Pt(n.leave)];{const e=Pt(n);return[e,e]}}function Pt(n){return ou(n)}function Te(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n[Os]||(n[Os]=new Set)).add(e)}function Ne(n,e){e.split(/\s+/).forEach(a=>a&&n.classList.remove(a));const s=n[Os];s&&(s.delete(e),s.size||(n[Os]=void 0))}function Bp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ov=0;function Hp(n,e,s,a){const t=n._endId=++ov,o=()=>{t===n._endId&&a()};if(s)return setTimeout(o,s);const{type:p,timeout:r,propCount:c}=Mr(n,e);if(!p)return a();const u=p+"end";let d=0;const v=()=>{n.removeEventListener(u,f),o()},f=k=>{k.target===n&&++d>=c&&v()};setTimeout(()=>{d<c&&v()},r+1),n.addEventListener(u,f)}function Mr(n,e){const s=window.getComputedStyle(n),a=b=>(s[b]||"").split(", "),t=a(`${Me}Delay`),o=a(`${Me}Duration`),p=zp(t,o),r=a(`${Ws}Delay`),c=a(`${Ws}Duration`),u=zp(r,c);let d=null,v=0,f=0;e===Me?p>0&&(d=Me,v=p,f=o.length):e===Ws?u>0&&(d=Ws,v=u,f=c.length):(v=Math.max(p,u),d=v>0?p>u?Me:Ws:null,f=d?d===Me?o.length:c.length:0);const k=d===Me&&/\b(transform|all)(,|$)/.test(a(`${Me}Property`).toString());return{type:d,timeout:v,propCount:f,hasTransform:k}}function zp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((s,a)=>Fp(s)+Fp(n[a])))}function Fp(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Nr(){return document.body.offsetHeight}function pv(n,e,s){const a=n[Os];a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?n.removeAttribute("class"):s?n.setAttribute("class",e):n.className=e}const No=Symbol("_vod"),k_={beforeMount(n,{value:e},{transition:s}){n[No]=n.style.display==="none"?"":n.style.display,s&&e?s.beforeEnter(n):Js(n,e)},mounted(n,{value:e},{transition:s}){s&&e&&s.enter(n)},updated(n,{value:e,oldValue:s},{transition:a}){!e!=!s&&(a?e?(a.beforeEnter(n),Js(n,!0),a.enter(n)):a.leave(n,()=>{Js(n,!1)}):Js(n,e))},beforeUnmount(n,{value:e}){Js(n,e)}};function Js(n,e){n.style.display=e?n[No]:"none"}function lv(n,e,s){const a=n.style,t=cn(s);if(s&&!t){if(e&&!cn(e))for(const o in e)s[o]==null&&no(a,o,"");for(const o in s)no(a,o,s[o])}else{const o=a.display;t?e!==s&&(a.cssText=s):e&&n.removeAttribute("style"),No in n&&(a.display=o)}}const Wp=/\s*!important$/;function no(n,e,s){if(U(s))s.forEach(a=>no(n,e,a));else if(s==null&&(s=""),e.startsWith("--"))n.setProperty(e,s);else{const a=rv(n,e);Wp.test(s)?n.setProperty(Ms(a),s.replace(Wp,""),"important"):n[a]=s}}const Jp=["Webkit","Moz","ms"],Ot={};function rv(n,e){const s=Ot[e];if(s)return s;let a=te(e);if(a!=="filter"&&a in n)return Ot[e]=a;a=ma(a);for(let t=0;t<Jp.length;t++){const o=Jp[t]+a;if(o in n)return Ot[e]=o}return e}const Up="http://www.w3.org/1999/xlink";function iv(n,e,s,a,t){if(a&&e.startsWith("xlink:"))s==null?n.removeAttributeNS(Up,e.slice(6,e.length)):n.setAttributeNS(Up,e,s);else{const o=uu(e);s==null||o&&!zl(s)?n.removeAttribute(e):n.setAttribute(e,o?"":s)}}function cv(n,e,s,a,t,o,p){if(e==="innerHTML"||e==="textContent"){a&&p(a,t,o),n[e]=s??"";return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){n._value=s;const u=r==="OPTION"?n.getAttribute("value"):n.value,d=s??"";u!==d&&(n.value=d),s==null&&n.removeAttribute(e);return}let c=!1;if(s===""||s==null){const u=typeof n[e];u==="boolean"?s=zl(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{n[e]=s}catch{}c&&n.removeAttribute(e)}function Le(n,e,s,a){n.addEventListener(e,s,a)}function uv(n,e,s,a){n.removeEventListener(e,s,a)}const Gp=Symbol("_vei");function dv(n,e,s,a,t=null){const o=n[Gp]||(n[Gp]={}),p=o[e];if(a&&p)p.value=a;else{const[r,c]=vv(e);if(a){const u=o[e]=kv(a,t);Le(n,r,u,c)}else p&&(uv(n,r,p,c),o[e]=void 0)}}const Kp=/(?:Once|Passive|Capture)$/;function vv(n){let e;if(Kp.test(n)){e={};let a;for(;a=n.match(Kp);)n=n.slice(0,n.length-a[0].length),e[a[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ms(n.slice(2)),e]}let It=0;const mv=Promise.resolve(),fv=()=>It||(mv.then(()=>It=0),It=Date.now());function kv(n,e){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;ne(_v(a,s.value),e,5,[a])};return s.value=n,s.attached=fv(),s}function _v(n,e){if(U(e)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},e.map(a=>t=>!t._stopped&&a&&a(t))}else return e}const Yp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hv=(n,e,s,a,t=!1,o,p,r,c)=>{e==="class"?pv(n,a,t):e==="style"?lv(n,s,a):da(e)?ko(e)||dv(n,e,s,a,p):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bv(n,e,a,t))?cv(n,e,a,o,p,r,c):(e==="true-value"?n._trueValue=a:e==="false-value"&&(n._falseValue=a),iv(n,e,a,t))};function bv(n,e,s,a){if(a)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yp(e)&&an(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const t=n.tagName;if(t==="IMG"||t==="VIDEO"||t==="CANVAS"||t==="SOURCE")return!1}return Yp(e)&&cn(s)?!1:e in n}const $r=new WeakMap,qr=new WeakMap,at=Symbol("_moveCb"),Xp=Symbol("_enterCb"),Br={name:"TransitionGroup",props:On({},av,{tag:String,moveClass:String}),setup(n,{slots:e}){const s=Bs(),a=fr();let t,o;return br(()=>{if(!t.length)return;const p=n.moveClass||`${n.name||"v"}-move`;if(!xv(t[0].el,s.vnode.el,p))return;t.forEach(wv),t.forEach(Ev);const r=t.filter(Tv);Nr(),r.forEach(c=>{const u=c.el,d=u.style;Te(u,p),d.transform=d.webkitTransform=d.transitionDuration="";const v=u[at]=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",v),u[at]=null,Ne(u,p))};u.addEventListener("transitionend",v)})}),()=>{const p=un(n),r=jr(p);let c=p.tag||Un;t=o,o=e.default?Io(e.default()):[];for(let u=0;u<o.length;u++){const d=o[u];d.key!=null&&la(d,pa(d,r,a,s))}if(t)for(let u=0;u<t.length;u++){const d=t[u];la(d,pa(d,r,a,s)),$r.set(d,d.el.getBoundingClientRect())}return Ln(c,null,o)}}},gv=n=>delete n.mode;Br.props;const yv=Br;function wv(n){const e=n.el;e[at]&&e[at](),e[Xp]&&e[Xp]()}function Ev(n){qr.set(n,n.el.getBoundingClientRect())}function Tv(n){const e=$r.get(n),s=qr.get(n),a=e.left-s.left,t=e.top-s.top;if(a||t){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${a}px,${t}px)`,o.transitionDuration="0s",n}}function xv(n,e,s){const a=n.cloneNode(),t=n[Os];t&&t.forEach(r=>{r.split(/\s+/).forEach(c=>c&&a.classList.remove(c))}),s.split(/\s+/).forEach(r=>r&&a.classList.add(r)),a.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(a);const{hasTransform:p}=Mr(a);return o.removeChild(a),p}const Ge=n=>{const e=n.props["onUpdate:modelValue"]||!1;return U(e)?s=>Ja(e,s):e};function Sv(n){n.target.composing=!0}function Qp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ae=Symbol("_assign"),Zp={created(n,{modifiers:{lazy:e,trim:s,number:a}},t){n[ae]=Ge(t);const o=a||t.props&&t.props.type==="number";Le(n,e?"change":"input",p=>{if(p.target.composing)return;let r=n.value;s&&(r=r.trim()),o&&(r=Ka(r)),n[ae](r)}),s&&Le(n,"change",()=>{n.value=n.value.trim()}),e||(Le(n,"compositionstart",Sv),Le(n,"compositionend",Qp),Le(n,"change",Qp))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:s,trim:a,number:t}},o){if(n[ae]=Ge(o),n.composing)return;const p=t||n.type==="number"?Ka(n.value):n.value,r=e??"";p!==r&&(document.activeElement===n&&n.type!=="range"&&(s||a&&n.value.trim()===r)||(n.value=r))}},Av={deep:!0,created(n,e,s){n[ae]=Ge(s),Le(n,"change",()=>{const a=n._modelValue,t=Is(n),o=n.checked,p=n[ae];if(U(a)){const r=yo(a,t),c=r!==-1;if(o&&!c)p(a.concat(t));else if(!o&&c){const u=[...a];u.splice(r,1),p(u)}}else if(js(a)){const r=new Set(a);o?r.add(t):r.delete(t),p(r)}else p(Hr(n,o))})},mounted:nl,beforeUpdate(n,e,s){n[ae]=Ge(s),nl(n,e,s)}};function nl(n,{value:e,oldValue:s},a){n._modelValue=e,U(e)?n.checked=yo(e,a.props.value)>-1:js(e)?n.checked=e.has(a.props.value):e!==s&&(n.checked=ps(e,Hr(n,!0)))}const Lv={created(n,{value:e},s){n.checked=ps(e,s.props.value),n[ae]=Ge(s),Le(n,"change",()=>{n[ae](Is(n))})},beforeUpdate(n,{value:e,oldValue:s},a){n[ae]=Ge(a),e!==s&&(n.checked=ps(e,a.props.value))}},Rv={deep:!0,created(n,{value:e,modifiers:{number:s}},a){const t=js(e);Le(n,"change",()=>{const o=Array.prototype.filter.call(n.options,p=>p.selected).map(p=>s?Ka(Is(p)):Is(p));n[ae](n.multiple?t?new Set(o):o:o[0])}),n[ae]=Ge(a)},mounted(n,{value:e}){el(n,e)},beforeUpdate(n,e,s){n[ae]=Ge(s)},updated(n,{value:e}){el(n,e)}};function el(n,e){const s=n.multiple;if(!(s&&!U(e)&&!js(e))){for(let a=0,t=n.options.length;a<t;a++){const o=n.options[a],p=Is(o);if(s)U(e)?o.selected=yo(e,p)>-1:o.selected=e.has(p);else if(ps(Is(o),e)){n.selectedIndex!==a&&(n.selectedIndex=a);return}}!s&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Is(n){return"_value"in n?n._value:n.value}function Hr(n,e){const s=e?"_trueValue":"_falseValue";return s in n?n[s]:e}const __={created(n,e,s){$a(n,e,s,null,"created")},mounted(n,e,s){$a(n,e,s,null,"mounted")},beforeUpdate(n,e,s,a){$a(n,e,s,a,"beforeUpdate")},updated(n,e,s,a){$a(n,e,s,a,"updated")}};function Pv(n,e){switch(n){case"SELECT":return Rv;case"TEXTAREA":return Zp;default:switch(e){case"checkbox":return Av;case"radio":return Lv;default:return Zp}}}function $a(n,e,s,a,t){const p=Pv(n.tagName,s.props&&s.props.type)[t];p&&p(n,e,s,a)}const Ov=On({patchProp:hv},sv);let Dt,sl=!1;function Iv(){return Dt=sl?Dt:Dd(Ov),sl=!0,Dt}const Dv=(...n)=>{const e=Iv().createApp(...n),{mount:s}=e;return e.mount=a=>{const t=Vv(a);if(t)return s(t,!0,t instanceof SVGElement)},e};function Vv(n){return cn(n)?document.querySelector(n):n}const Cv={"v-184f4da6":()=>l(()=>import("./intro.html-2b06c5a0.js"),[]).then(({data:n})=>n),"v-8daa1a0e":()=>l(()=>import("./index.html-3fd4a099.js"),[]).then(({data:n})=>n),"v-1735a0be":()=>l(()=>import("./Applist.html-bd73dcfd.js"),[]).then(({data:n})=>n),"v-69693975":()=>l(()=>import("./AppNotes.html-86d15334.js"),[]).then(({data:n})=>n),"v-d967ed6c":()=>l(()=>import("./ChatGPT.html-be08d5fd.js"),[]).then(({data:n})=>n),"v-5c29014a":()=>l(()=>import("./Chrome.html-61f40938.js"),[]).then(({data:n})=>n),"v-1d7dd2b7":()=>l(()=>import("./design.html-1199d295.js"),[]).then(({data:n})=>n),"v-1c7fca9e":()=>l(()=>import("./Cloudflare.html-580c9ad5.js"),[]).then(({data:n})=>n),"v-2b70157f":()=>l(()=>import("./DNS.html-03d6de2d.js"),[]).then(({data:n})=>n),"v-bc154f32":()=>l(()=>import("./GitHub.html-e8361fdd.js"),[]).then(({data:n})=>n),"v-7c5f209c":()=>l(()=>import("./Static.html-32c504f8.js"),[]).then(({data:n})=>n),"v-39dc98a2":()=>l(()=>import("./VPS.html-f8f52dae.js"),[]).then(({data:n})=>n),"v-00f6d5f1":()=>l(()=>import("./Comments.html-27f3e0cd.js"),[]).then(({data:n})=>n),"v-3cdca328":()=>l(()=>import("./docsify.html-1a5b338e.js"),[]).then(({data:n})=>n),"v-3b0b9f28":()=>l(()=>import("./VuePress.html-a477ea9c.js"),[]).then(({data:n})=>n),"v-77e3440a":()=>l(()=>import("./01.html-47d00a99.js"),[]).then(({data:n})=>n),"v-79981ca9":()=>l(()=>import("./02.html-b66c3984.js"),[]).then(({data:n})=>n),"v-7b4cf548":()=>l(()=>import("./03.html-5597149a.js"),[]).then(({data:n})=>n),"v-7d01cde7":()=>l(()=>import("./04.html-609a0963.js"),[]).then(({data:n})=>n),"v-7eb6a686":()=>l(()=>import("./05.html-c558cd9e.js"),[]).then(({data:n})=>n),"v-ff2901b6":()=>l(()=>import("./06.html-afb5da52.js"),[]).then(({data:n})=>n),"v-fbbf5078":()=>l(()=>import("./07.html-0b225e98.js"),[]).then(({data:n})=>n),"v-f8559f3a":()=>l(()=>import("./08.html-d0d19620.js"),[]).then(({data:n})=>n),"v-f4ebedfc":()=>l(()=>import("./09.html-80bfe549.js"),[]).then(({data:n})=>n),"v-a9d6b2a8":()=>l(()=>import("./10.html-f264577b.js"),[]).then(({data:n})=>n),"v-a66d016a":()=>l(()=>import("./11.html-191c146a.js"),[]).then(({data:n})=>n),"v-2632f347":()=>l(()=>import("./01.html-fdc43062.js"),[]).then(({data:n})=>n),"v-27e7cbe6":()=>l(()=>import("./02.html-473e8d63.js"),[]).then(({data:n})=>n),"v-299ca485":()=>l(()=>import("./03.html-e57ca851.js"),[]).then(({data:n})=>n),"v-2b517d24":()=>l(()=>import("./04.html-9f7d6974.js"),[]).then(({data:n})=>n),"v-2d0655c3":()=>l(()=>import("./05.html-10994430.js"),[]).then(({data:n})=>n),"v-2ebb2e62":()=>l(()=>import("./06.html-992d9744.js"),[]).then(({data:n})=>n),"v-30700701":()=>l(()=>import("./07.html-e2679b67.js"),[]).then(({data:n})=>n),"v-3224dfa0":()=>l(()=>import("./08.html-4e0f9af4.js"),[]).then(({data:n})=>n),"v-33d9b83f":()=>l(()=>import("./09.html-3fd11f37.js"),[]).then(({data:n})=>n),"v-596455e9":()=>l(()=>import("./10.html-04cfdea1.js"),[]).then(({data:n})=>n),"v-5b192e88":()=>l(()=>import("./11.html-2626bc8a.js"),[]).then(({data:n})=>n),"v-5cce0727":()=>l(()=>import("./12.html-323ec866.js"),[]).then(({data:n})=>n),"v-5e82dfc6":()=>l(()=>import("./13.html-de4f40c3.js"),[]).then(({data:n})=>n),"v-6037b865":()=>l(()=>import("./14.html-3e02a9e4.js"),[]).then(({data:n})=>n),"v-61ec9104":()=>l(()=>import("./15.html-0e58e192.js"),[]).then(({data:n})=>n),"v-63a169a3":()=>l(()=>import("./16.html-8d8e5057.js"),[]).then(({data:n})=>n),"v-65564242":()=>l(()=>import("./17.html-d94520d1.js"),[]).then(({data:n})=>n),"v-670b1ae1":()=>l(()=>import("./18.html-032ac143.js"),[]).then(({data:n})=>n),"v-63e77b20":()=>l(()=>import("./bookmark-scripts.html-43b53879.js"),[]).then(({data:n})=>n),"v-60213eb0":()=>l(()=>import("./online-tools.html-4b1e5a99.js"),[]).then(({data:n})=>n),"v-3d41e0e3":()=>l(()=>import("./01.html-108bb643.js"),[]).then(({data:n})=>n),"v-3ef6b982":()=>l(()=>import("./02.html-dd148a61.js"),[]).then(({data:n})=>n),"v-40ab9221":()=>l(()=>import("./03.html-2aa53430.js"),[]).then(({data:n})=>n),"v-42606ac0":()=>l(()=>import("./04.html-d5300eb6.js"),[]).then(({data:n})=>n),"v-4415435f":()=>l(()=>import("./05.html-0df31331.js"),[]).then(({data:n})=>n),"v-45ca1bfe":()=>l(()=>import("./06.html-976e1b3f.js"),[]).then(({data:n})=>n),"v-8f5a8800":()=>l(()=>import("./01.html-19956680.js"),[]).then(({data:n})=>n),"v-8bf0d6c2":()=>l(()=>import("./02.html-5bb3d8d0.js"),[]).then(({data:n})=>n),"v-88872584":()=>l(()=>import("./03.html-c51f7e70.js"),[]).then(({data:n})=>n),"v-851d7446":()=>l(()=>import("./04.html-396f007c.js"),[]).then(({data:n})=>n),"v-81b3c308":()=>l(()=>import("./05.html-3df0213a.js"),[]).then(({data:n})=>n),"v-7e4a11ca":()=>l(()=>import("./06.html-898ccb37.js"),[]).then(({data:n})=>n),"v-7ae0608c":()=>l(()=>import("./07.html-5e2b5b6f.js"),[]).then(({data:n})=>n),"v-7776af4e":()=>l(()=>import("./08.html-b12f4bc7.js"),[]).then(({data:n})=>n),"v-740cfe10":()=>l(()=>import("./09.html-cfc1b9b4.js"),[]).then(({data:n})=>n),"v-28f7c2bc":()=>l(()=>import("./10.html-54d627fc.js"),[]).then(({data:n})=>n),"v-20ee9d86":()=>l(()=>import("./01.html-8a749626.js"),[]).then(({data:n})=>n),"v-1d84ec48":()=>l(()=>import("./02.html-a0330b8a.js"),[]).then(({data:n})=>n),"v-1a1b3b0a":()=>l(()=>import("./03.html-4957fbb4.js"),[]).then(({data:n})=>n),"v-16b189cc":()=>l(()=>import("./04.html-07c10139.js"),[]).then(({data:n})=>n),"v-6c412aac":()=>l(()=>import("./01.html-7ac51aba.js"),[]).then(({data:n})=>n),"v-68d7796e":()=>l(()=>import("./02.html-5b8a0629.js"),[]).then(({data:n})=>n),"v-656dc830":()=>l(()=>import("./03.html-bce3cd89.js"),[]).then(({data:n})=>n),"v-6e34a17a":()=>l(()=>import("./01.html-f07b7860.js"),[]).then(({data:n})=>n),"v-fa8ee52c":()=>l(()=>import("./01.html-feef02fb.js"),[]).then(({data:n})=>n),"v-f72533ee":()=>l(()=>import("./02.html-1ffb2c4a.js"),[]).then(({data:n})=>n),"v-f3bb82b0":()=>l(()=>import("./03.html-0f190581.js"),[]).then(({data:n})=>n),"v-f051d172":()=>l(()=>import("./04.html-25ff429a.js"),[]).then(({data:n})=>n),"v-ece82034":()=>l(()=>import("./05.html-06a3e49d.js"),[]).then(({data:n})=>n),"v-e97e6ef6":()=>l(()=>import("./06.html-b5d3a94c.js"),[]).then(({data:n})=>n),"v-e614bdb8":()=>l(()=>import("./07.html-c08a5ca8.js"),[]).then(({data:n})=>n),"v-e2ab0c7a":()=>l(()=>import("./08.html-66afaa63.js"),[]).then(({data:n})=>n),"v-df415b3c":()=>l(()=>import("./09.html-16c2339f.js"),[]).then(({data:n})=>n),"v-942c1fe8":()=>l(()=>import("./10.html-1269dca1.js"),[]).then(({data:n})=>n),"v-90c26eaa":()=>l(()=>import("./11.html-478ff7a8.js"),[]).then(({data:n})=>n),"v-5f498b30":()=>l(()=>import("./01.html-1eca7260.js"),[]).then(({data:n})=>n),"v-6b5bab47":()=>l(()=>import("./01.html-3e8d6fe8.js"),[]).then(({data:n})=>n),"v-6d1083e6":()=>l(()=>import("./02.html-446bf575.js"),[]).then(({data:n})=>n),"v-6ec55c85":()=>l(()=>import("./03.html-679a60a1.js"),[]).then(({data:n})=>n),"v-707a3524":()=>l(()=>import("./04.html-6eac1953.js"),[]).then(({data:n})=>n),"v-722f0dc3":()=>l(()=>import("./05.html-6693c3e3.js"),[]).then(({data:n})=>n),"v-73e3e662":()=>l(()=>import("./06.html-08e9907f.js"),[]).then(({data:n})=>n),"v-7598bf01":()=>l(()=>import("./07.html-fbd5dce2.js"),[]).then(({data:n})=>n),"v-774d97a0":()=>l(()=>import("./08.html-1b3df2dd.js"),[]).then(({data:n})=>n),"v-7902703f":()=>l(()=>import("./09.html-591f5306.js"),[]).then(({data:n})=>n),"v-c2e5e42e":()=>l(()=>import("./10.html-22838ff9.js"),[]).then(({data:n})=>n),"v-bf7c32f0":()=>l(()=>import("./11.html-61afc8ed.js"),[]).then(({data:n})=>n),"v-6f4eb639":()=>l(()=>import("./01.html-b2cea8dd.js"),[]).then(({data:n})=>n),"v-71038ed8":()=>l(()=>import("./02.html-c20f1114.js"),[]).then(({data:n})=>n),"v-72b86777":()=>l(()=>import("./03.html-d42092a5.js"),[]).then(({data:n})=>n),"v-746d4016":()=>l(()=>import("./04.html-e7fbd693.js"),[]).then(({data:n})=>n),"v-762218b5":()=>l(()=>import("./05.html-76af3cbe.js"),[]).then(({data:n})=>n),"v-77d6f154":()=>l(()=>import("./06.html-b4785e04.js"),[]).then(({data:n})=>n),"v-798bc9f3":()=>l(()=>import("./07.html-b7468568.js"),[]).then(({data:n})=>n),"v-7b40a292":()=>l(()=>import("./08.html-e569c5cc.js"),[]).then(({data:n})=>n),"v-7cf57b31":()=>l(()=>import("./09.html-676101ab.js"),[]).then(({data:n})=>n),"v-baffce4a":()=>l(()=>import("./10.html-e3383894.js"),[]).then(({data:n})=>n),"v-b7961d0c":()=>l(()=>import("./11.html-a32fb2ed.js"),[]).then(({data:n})=>n),"v-b42c6bce":()=>l(()=>import("./12.html-6ba66f09.js"),[]).then(({data:n})=>n),"v-b0c2ba90":()=>l(()=>import("./13.html-c375730c.js"),[]).then(({data:n})=>n),"v-ad590952":()=>l(()=>import("./14.html-9c81cf7e.js"),[]).then(({data:n})=>n),"v-a9ef5814":()=>l(()=>import("./15.html-6ef5f0f1.js"),[]).then(({data:n})=>n),"v-a685a6d6":()=>l(()=>import("./16.html-9a9fe6e6.js"),[]).then(({data:n})=>n),"v-a31bf598":()=>l(()=>import("./17.html-462140d7.js"),[]).then(({data:n})=>n),"v-9fb2445a":()=>l(()=>import("./18.html-da3711f9.js"),[]).then(({data:n})=>n),"v-9c48931c":()=>l(()=>import("./19.html-53226813.js"),[]).then(({data:n})=>n),"v-513357c8":()=>l(()=>import("./20.html-13971ab7.js"),[]).then(({data:n})=>n),"v-4dc9a68a":()=>l(()=>import("./21.html-eb50fdc4.js"),[]).then(({data:n})=>n),"v-4a5ff54c":()=>l(()=>import("./22.html-2a535d9c.js"),[]).then(({data:n})=>n),"v-46f6440e":()=>l(()=>import("./23.html-82bc5b65.js"),[]).then(({data:n})=>n),"v-3ae21c12":()=>l(()=>import("./01.html-51a379ca.js"),[]).then(({data:n})=>n),"v-37786ad4":()=>l(()=>import("./02.html-c0d4613a.js"),[]).then(({data:n})=>n),"v-340eb996":()=>l(()=>import("./03.html-b02c599c.js"),[]).then(({data:n})=>n),"v-30a50858":()=>l(()=>import("./04.html-8a4dbd0a.js"),[]).then(({data:n})=>n),"v-2d3b571a":()=>l(()=>import("./05.html-6e60b92b.js"),[]).then(({data:n})=>n),"v-29d1a5dc":()=>l(()=>import("./06.html-29f5c475.js"),[]).then(({data:n})=>n),"v-2667f49e":()=>l(()=>import("./07.html-1572bce6.js"),[]).then(({data:n})=>n),"v-22fe4360":()=>l(()=>import("./08.html-01302dbf.js"),[]).then(({data:n})=>n),"v-1f949222":()=>l(()=>import("./09.html-889bdf35.js"),[]).then(({data:n})=>n),"v-15c05499":()=>l(()=>import("./10.html-dd3c19bd.js"),[]).then(({data:n})=>n),"v-17752d38":()=>l(()=>import("./11.html-2975a4df.js"),[]).then(({data:n})=>n),"v-192a05d7":()=>l(()=>import("./12.html-4802e8e6.js"),[]).then(({data:n})=>n),"v-1adede76":()=>l(()=>import("./13.html-47c85e04.js"),[]).then(({data:n})=>n),"v-1c93b715":()=>l(()=>import("./14.html-9b67c1d8.js"),[]).then(({data:n})=>n),"v-1e488fb4":()=>l(()=>import("./15.html-d6f32389.js"),[]).then(({data:n})=>n),"v-1ffd6853":()=>l(()=>import("./16.html-fa3d3416.js"),[]).then(({data:n})=>n),"v-21b240f2":()=>l(()=>import("./17.html-ce4e1636.js"),[]).then(({data:n})=>n),"v-23671991":()=>l(()=>import("./18.html-fd07c0cb.js"),[]).then(({data:n})=>n),"v-251bf230":()=>l(()=>import("./19.html-4bb2aeb6.js"),[]).then(({data:n})=>n),"v-4aa68fda":()=>l(()=>import("./20.html-b7f7869b.js"),[]).then(({data:n})=>n),"v-4c5b6879":()=>l(()=>import("./21.html-f3a63c05.js"),[]).then(({data:n})=>n),"v-4e104118":()=>l(()=>import("./22.html-eec98379.js"),[]).then(({data:n})=>n),"v-4fc519b7":()=>l(()=>import("./23.html-d7e55844.js"),[]).then(({data:n})=>n),"v-5179f256":()=>l(()=>import("./24.html-0ec04d67.js"),[]).then(({data:n})=>n),"v-532ecaf5":()=>l(()=>import("./25.html-8c27d278.js"),[]).then(({data:n})=>n),"v-54e3a394":()=>l(()=>import("./26.html-2640e004.js"),[]).then(({data:n})=>n),"v-56987c33":()=>l(()=>import("./27.html-fb5af202.js"),[]).then(({data:n})=>n),"v-584d54d2":()=>l(()=>import("./28.html-c3a5f028.js"),[]).then(({data:n})=>n),"v-5a022d71":()=>l(()=>import("./29.html-3e0deff1.js"),[]).then(({data:n})=>n),"v-7f8ccb1b":()=>l(()=>import("./30.html-2e069941.js"),[]).then(({data:n})=>n),"v-fd7cb88c":()=>l(()=>import("./31.html-d4955c09.js"),[]).then(({data:n})=>n),"v-fa13074e":()=>l(()=>import("./32.html-6f253c78.js"),[]).then(({data:n})=>n),"v-f6a95610":()=>l(()=>import("./33.html-c0917324.js"),[]).then(({data:n})=>n),"v-f33fa4d2":()=>l(()=>import("./34.html-f05860d0.js"),[]).then(({data:n})=>n),"v-efd5f394":()=>l(()=>import("./35.html-e5b91a85.js"),[]).then(({data:n})=>n),"v-ec6c4256":()=>l(()=>import("./36.html-aa740921.js"),[]).then(({data:n})=>n),"v-bfed7bf0":()=>l(()=>import("./01.html-cd8f7349.js"),[]).then(({data:n})=>n),"v-bc83cab2":()=>l(()=>import("./02.html-dcd09731.js"),[]).then(({data:n})=>n),"v-b91a1974":()=>l(()=>import("./03.html-1a3b6e68.js"),[]).then(({data:n})=>n),"v-b5b06836":()=>l(()=>import("./04.html-54f6622a.js"),[]).then(({data:n})=>n),"v-b246b6f8":()=>l(()=>import("./05.html-78b7a8e8.js"),[]).then(({data:n})=>n),"v-aedd05ba":()=>l(()=>import("./06.html-dcc54c28.js"),[]).then(({data:n})=>n),"v-ab73547c":()=>l(()=>import("./07.html-8afce9d5.js"),[]).then(({data:n})=>n),"v-a809a33e":()=>l(()=>import("./08.html-6acdeb12.js"),[]).then(({data:n})=>n),"v-a49ff200":()=>l(()=>import("./09.html-ff589f39.js"),[]).then(({data:n})=>n),"v-8403a022":()=>l(()=>import("./01.html-d262c51c.js"),[]).then(({data:n})=>n),"v-8099eee4":()=>l(()=>import("./02.html-318945f7.js"),[]).then(({data:n})=>n),"v-7d303da6":()=>l(()=>import("./03.html-603efc53.js"),[]).then(({data:n})=>n),"v-79c68c68":()=>l(()=>import("./04.html-d2430d6c.js"),[]).then(({data:n})=>n),"v-c15f9c8c":()=>l(()=>import("./01.html-6aa2f19f.js"),[]).then(({data:n})=>n),"v-bdf5eb4e":()=>l(()=>import("./02.html-a3367533.js"),[]).then(({data:n})=>n),"v-ba8c3a10":()=>l(()=>import("./03.html-5b807894.js"),[]).then(({data:n})=>n),"v-b72288d2":()=>l(()=>import("./04.html-38e71c2c.js"),[]).then(({data:n})=>n),"v-b3b8d794":()=>l(()=>import("./05.html-1440f082.js"),[]).then(({data:n})=>n),"v-b04f2656":()=>l(()=>import("./06.html-9ca69797.js"),[]).then(({data:n})=>n),"v-ace57518":()=>l(()=>import("./07.html-4a919056.js"),[]).then(({data:n})=>n),"v-a97bc3da":()=>l(()=>import("./08.html-c18fe75b.js"),[]).then(({data:n})=>n),"v-a612129c":()=>l(()=>import("./09.html-a22bb274.js"),[]).then(({data:n})=>n),"v-5afcd748":()=>l(()=>import("./10.html-924d1ad6.js"),[]).then(({data:n})=>n),"v-5793260a":()=>l(()=>import("./11.html-31d83768.js"),[]).then(({data:n})=>n),"v-542974cc":()=>l(()=>import("./12.html-f16a1f81.js"),[]).then(({data:n})=>n),"v-50bfc38e":()=>l(()=>import("./13.html-7cf6ce93.js"),[]).then(({data:n})=>n),"v-4d561250":()=>l(()=>import("./14.html-f257faed.js"),[]).then(({data:n})=>n),"v-49ec6112":()=>l(()=>import("./15.html-d1533702.js"),[]).then(({data:n})=>n),"v-4682afd4":()=>l(()=>import("./16.html-63c26085.js"),[]).then(({data:n})=>n),"v-4318fe96":()=>l(()=>import("./17.html-e0499ba4.js"),[]).then(({data:n})=>n),"v-3faf4d58":()=>l(()=>import("./18.html-d940b43d.js"),[]).then(({data:n})=>n),"v-3c459c1a":()=>l(()=>import("./19.html-499194f9.js"),[]).then(({data:n})=>n),"v-0767cf9d":()=>l(()=>import("./20.html-31c6b2a9.js"),[]).then(({data:n})=>n),"v-091ca83c":()=>l(()=>import("./21.html-b842e90e.js"),[]).then(({data:n})=>n),"v-0ad180db":()=>l(()=>import("./22.html-9e78c728.js"),[]).then(({data:n})=>n),"v-0c86597a":()=>l(()=>import("./23.html-50bc5a24.js"),[]).then(({data:n})=>n),"v-d6cb3c78":()=>l(()=>import("./01.html-46935ed0.js"),[]).then(({data:n})=>n),"v-d3618b3a":()=>l(()=>import("./02.html-66932ef5.js"),[]).then(({data:n})=>n),"v-cff7d9fc":()=>l(()=>import("./03.html-6c2c79fe.js"),[]).then(({data:n})=>n),"v-cc8e28be":()=>l(()=>import("./04.html-241aee98.js"),[]).then(({data:n})=>n),"v-c5bac642":()=>l(()=>import("./06.html-cfb48969.js"),[]).then(({data:n})=>n),"v-c2511504":()=>l(()=>import("./07.html-a34e50c8.js"),[]).then(({data:n})=>n),"v-bee763c6":()=>l(()=>import("./08.html-200030fd.js"),[]).then(({data:n})=>n),"v-bb7db288":()=>l(()=>import("./09.html-39cc3a9d.js"),[]).then(({data:n})=>n),"v-70687734":()=>l(()=>import("./10.html-37929d47.js"),[]).then(({data:n})=>n),"v-6cfec5f6":()=>l(()=>import("./11.html-01ad29e2.js"),[]).then(({data:n})=>n),"v-699514b8":()=>l(()=>import("./12.html-a74dc096.js"),[]).then(({data:n})=>n),"v-662b637a":()=>l(()=>import("./13.html-fef939f7.js"),[]).then(({data:n})=>n),"v-62c1b23c":()=>l(()=>import("./14.html-b2344611.js"),[]).then(({data:n})=>n),"v-5f5800fe":()=>l(()=>import("./15.html-e498cb5c.js"),[]).then(({data:n})=>n),"v-5bee4fc0":()=>l(()=>import("./16.html-9093971b.js"),[]).then(({data:n})=>n),"v-58849e82":()=>l(()=>import("./17.html-87f85fd7.js"),[]).then(({data:n})=>n),"v-551aed44":()=>l(()=>import("./18.html-31b96cc9.js"),[]).then(({data:n})=>n),"v-33cf2509":()=>l(()=>import("./01.html-aba56e1d.js"),[]).then(({data:n})=>n),"v-3583fda8":()=>l(()=>import("./02.html-62368267.js"),[]).then(({data:n})=>n),"v-3738d647":()=>l(()=>import("./03.html-a687e661.js"),[]).then(({data:n})=>n),"v-38edaee6":()=>l(()=>import("./04.html-26cc8389.js"),[]).then(({data:n})=>n),"v-3aa28785":()=>l(()=>import("./05.html-069f617c.js"),[]).then(({data:n})=>n),"v-0055f2c3":()=>l(()=>import("./01.html-b912771d.js"),[]).then(({data:n})=>n),"v-020acb62":()=>l(()=>import("./02.html-667b0e70.js"),[]).then(({data:n})=>n),"v-03bfa401":()=>l(()=>import("./03.html-3b1c1b7d.js"),[]).then(({data:n})=>n),"v-05747ca0":()=>l(()=>import("./04.html-0c36c035.js"),[]).then(({data:n})=>n),"v-0729553f":()=>l(()=>import("./05.html-f9ddff08.js"),[]).then(({data:n})=>n),"v-08de2dde":()=>l(()=>import("./06.html-f2d16442.js"),[]).then(({data:n})=>n),"v-0a93067d":()=>l(()=>import("./07.html-7c0be932.js"),[]).then(({data:n})=>n),"v-0c47df1c":()=>l(()=>import("./08.html-e3631d36.js"),[]).then(({data:n})=>n),"v-0dfcb7bb":()=>l(()=>import("./09.html-41b47bd0.js"),[]).then(({data:n})=>n),"v-33875565":()=>l(()=>import("./10.html-90e0497b.js"),[]).then(({data:n})=>n),"v-353c2e04":()=>l(()=>import("./11.html-28d1b317.js"),[]).then(({data:n})=>n),"v-36f106a3":()=>l(()=>import("./12.html-192ee437.js"),[]).then(({data:n})=>n),"v-38a5df42":()=>l(()=>import("./13.html-cc49497e.js"),[]).then(({data:n})=>n),"v-3a5ab7e1":()=>l(()=>import("./14.html-b162d5e8.js"),[]).then(({data:n})=>n),"v-3c0f9080":()=>l(()=>import("./15.html-07e19002.js"),[]).then(({data:n})=>n),"v-3dc4691f":()=>l(()=>import("./16.html-84c3cb88.js"),[]).then(({data:n})=>n),"v-01544aa3":()=>l(()=>import("./01.html-6d710f81.js"),[]).then(({data:n})=>n),"v-03092342":()=>l(()=>import("./02.html-410009f5.js"),[]).then(({data:n})=>n),"v-04bdfbe1":()=>l(()=>import("./03.html-c7766636.js"),[]).then(({data:n})=>n),"v-0672d480":()=>l(()=>import("./04.html-3618e608.js"),[]).then(({data:n})=>n),"v-3296bd31":()=>l(()=>import("./browser.html-6aa1c287.js"),[]).then(({data:n})=>n),"v-3a8682f9":()=>l(()=>import("./cross-platform.html-651ae40f.js"),[]).then(({data:n})=>n),"v-71b3b66f":()=>l(()=>import("./vscode.html-4435b53a.js"),[]).then(({data:n})=>n),"v-10d9f538":()=>l(()=>import("./webstorm.html-16dab779.js"),[]).then(({data:n})=>n),"v-85bcb294":()=>l(()=>import("./windows.html-415b7876.js"),[]).then(({data:n})=>n),"v-266cbe57":()=>l(()=>import("./01.html-ab356b22.js"),[]).then(({data:n})=>n),"v-282196f6":()=>l(()=>import("./02.html-e603441d.js"),[]).then(({data:n})=>n),"v-29d66f95":()=>l(()=>import("./03.html-285aab86.js"),[]).then(({data:n})=>n),"v-2b8b4834":()=>l(()=>import("./04.html-31cd4836.js"),[]).then(({data:n})=>n),"v-2d4020d3":()=>l(()=>import("./05.html-5f84e6fc.js"),[]).then(({data:n})=>n),"v-2ef4f972":()=>l(()=>import("./06.html-de66cbd2.js"),[]).then(({data:n})=>n),"v-30a9d211":()=>l(()=>import("./07.html-c67f17e8.js"),[]).then(({data:n})=>n),"v-325eaab0":()=>l(()=>import("./08.html-05c43a0e.js"),[]).then(({data:n})=>n),"v-3413834f":()=>l(()=>import("./09.html-5e31ce44.js"),[]).then(({data:n})=>n),"v-599e20f9":()=>l(()=>import("./10.html-61461c2f.js"),[]).then(({data:n})=>n),"v-5b52f998":()=>l(()=>import("./11.html-897bcfc1.js"),[]).then(({data:n})=>n),"v-5d07d237":()=>l(()=>import("./12.html-f4c035b2.js"),[]).then(({data:n})=>n),"v-5ebcaad6":()=>l(()=>import("./13.html-bdb4d182.js"),[]).then(({data:n})=>n),"v-60718375":()=>l(()=>import("./14.html-7346b786.js"),[]).then(({data:n})=>n),"v-05e216f0":()=>l(()=>import("./01.html-b0659ad3.js"),[]).then(({data:n})=>n),"v-027865b2":()=>l(()=>import("./02.html-de4d3d85.js"),[]).then(({data:n})=>n),"v-0078a5c6":()=>l(()=>import("./03.html-61ef576b.js"),[]).then(({data:n})=>n),"v-022d7e65":()=>l(()=>import("./04.html-273d8533.js"),[]).then(({data:n})=>n),"v-03e25704":()=>l(()=>import("./05.html-33eec5f0.js"),[]).then(({data:n})=>n),"v-05972fa3":()=>l(()=>import("./06.html-9c755b31.js"),[]).then(({data:n})=>n),"v-671ae07c":()=>l(()=>import("./01.html-83dd0690.js"),[]).then(({data:n})=>n),"v-68cfb91b":()=>l(()=>import("./02.html-bdb59558.js"),[]).then(({data:n})=>n),"v-6a8491ba":()=>l(()=>import("./03.html-34af5f26.js"),[]).then(({data:n})=>n),"v-6c396a59":()=>l(()=>import("./04.html-bbc300cb.js"),[]).then(({data:n})=>n),"v-1ff273ed":()=>l(()=>import("./01.html-f512d797.js"),[]).then(({data:n})=>n),"v-21a74c8c":()=>l(()=>import("./02.html-488d28bf.js"),[]).then(({data:n})=>n),"v-235c252b":()=>l(()=>import("./03.html-3c9261c6.js"),[]).then(({data:n})=>n),"v-2510fdca":()=>l(()=>import("./04.html-4fd8a095.js"),[]).then(({data:n})=>n),"v-26c5d669":()=>l(()=>import("./05.html-658f7bdb.js"),[]).then(({data:n})=>n),"v-287aaf08":()=>l(()=>import("./06.html-3e8b97e8.js"),[]).then(({data:n})=>n),"v-2a2f87a7":()=>l(()=>import("./07.html-8af3c85e.js"),[]).then(({data:n})=>n),"v-2be46046":()=>l(()=>import("./08.html-6934b4fc.js"),[]).then(({data:n})=>n),"v-2d9938e5":()=>l(()=>import("./09.html-d89bfb80.js"),[]).then(({data:n})=>n),"v-5323d68f":()=>l(()=>import("./10.html-c3c85b49.js"),[]).then(({data:n})=>n),"v-3706649a":()=>l(()=>import("./404.html-42231cfa.js"),[]).then(({data:n})=>n),"v-144e84a4":()=>l(()=>import("./index.html-51ce9c89.js"),[]).then(({data:n})=>n),"v-72a9c1e2":()=>l(()=>import("./index.html-d951685a.js"),[]).then(({data:n})=>n),"v-744e6dd4":()=>l(()=>import("./index.html-6c59ab49.js"),[]).then(({data:n})=>n),"v-b22fa0a4":()=>l(()=>import("./index.html-0f9fb2ac.js"),[]).then(({data:n})=>n),"v-4e029433":()=>l(()=>import("./index.html-06d92057.js"),[]).then(({data:n})=>n),"v-acdb09de":()=>l(()=>import("./index.html-b1110160.js"),[]).then(({data:n})=>n),"v-429fc9e8":()=>l(()=>import("./index.html-a096353e.js"),[]).then(({data:n})=>n),"v-1559ca3e":()=>l(()=>import("./index.html-ec915ebb.js"),[]).then(({data:n})=>n),"v-326764f5":()=>l(()=>import("./index.html-06f035a9.js"),[]).then(({data:n})=>n),"v-dc68d520":()=>l(()=>import("./index.html-d745bbcf.js"),[]).then(({data:n})=>n),"v-2d582078":()=>l(()=>import("./index.html-6819ec9b.js"),[]).then(({data:n})=>n),"v-3a02344a":()=>l(()=>import("./index.html-530a24ad.js"),[]).then(({data:n})=>n),"v-7d243d0e":()=>l(()=>import("./index.html-2503c540.js"),[]).then(({data:n})=>n),"v-c3b7df84":()=>l(()=>import("./index.html-cdd45924.js"),[]).then(({data:n})=>n),"v-5ebe9341":()=>l(()=>import("./index.html-5de23704.js"),[]).then(({data:n})=>n),"v-3b98b24e":()=>l(()=>import("./index.html-0def1bd8.js"),[]).then(({data:n})=>n),"v-4031f170":()=>l(()=>import("./index.html-4ffaf192.js"),[]).then(({data:n})=>n),"v-2307d72e":()=>l(()=>import("./index.html-b83512cb.js"),[]).then(({data:n})=>n),"v-8681a27a":()=>l(()=>import("./index.html-7a4e2f6e.js"),[]).then(({data:n})=>n),"v-3f6e79de":()=>l(()=>import("./index.html-84c8bb69.js"),[]).then(({data:n})=>n),"v-26ee445f":()=>l(()=>import("./index.html-08fcad04.js"),[]).then(({data:n})=>n),"v-02f17b61":()=>l(()=>import("./index.html-c780f1b6.js"),[]).then(({data:n})=>n),"v-0e6aa261":()=>l(()=>import("./index.html-a544e2ce.js"),[]).then(({data:n})=>n),"v-b60e5920":()=>l(()=>import("./index.html-a0c83c0a.js"),[]).then(({data:n})=>n),"v-1b3e1bee":()=>l(()=>import("./index.html-92229be8.js"),[]).then(({data:n})=>n),"v-364ea92e":()=>l(()=>import("./index.html-877fadcb.js"),[]).then(({data:n})=>n),"v-734e47fe":()=>l(()=>import("./index.html-fdafdd30.js"),[]).then(({data:n})=>n),"v-299ca198":()=>l(()=>import("./index.html-08df627c.js"),[]).then(({data:n})=>n),"v-2d1c40e2":()=>l(()=>import("./index.html-b0fc1829.js"),[]).then(({data:n})=>n),"v-58897f1a":()=>l(()=>import("./index.html-577f59ad.js"),[]).then(({data:n})=>n),"v-299ca1d6":()=>l(()=>import("./index.html-de92f1b9.js"),[]).then(({data:n})=>n),"v-7e747335":()=>l(()=>import("./index.html-dc372945.js"),[]).then(({data:n})=>n),"v-5b2ca300":()=>l(()=>import("./index.html-1188dd9a.js"),[]).then(({data:n})=>n),"v-295ffbfe":()=>l(()=>import("./index.html-1664daf7.js"),[]).then(({data:n})=>n),"v-4bdef0f0":()=>l(()=>import("./index.html-f56727e2.js"),[]).then(({data:n})=>n),"v-d0bc6108":()=>l(()=>import("./index.html-1af0b254.js"),[]).then(({data:n})=>n),"v-cc046daa":()=>l(()=>import("./index.html-59c8db34.js"),[]).then(({data:n})=>n),"v-5f8133a2":()=>l(()=>import("./index.html-85081d83.js"),[]).then(({data:n})=>n),"v-5bc93818":()=>l(()=>import("./index.html-67438ad8.js"),[]).then(({data:n})=>n),"v-744d024e":()=>l(()=>import("./index.html-2d51ba7b.js"),[]).then(({data:n})=>n),"v-e52c881c":()=>l(()=>import("./index.html-a542d8bf.js"),[]).then(({data:n})=>n),"v-154dc4c4":()=>l(()=>import("./index.html-6271caef.js"),[]).then(({data:n})=>n),"v-01560935":()=>l(()=>import("./index.html-9ee11990.js"),[]).then(({data:n})=>n)},jv=JSON.parse('{"base":"/","lang":"zh-CN","title":"dselegent-blog","description":"开源工具、效率方法的自我提升笔记，记录并输出一切能让自己提升的知识。","head":[["meta",{"name":"referrer","content":"no-referrer"}],["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{}}');var Mv=([n,e,s])=>n==="meta"&&e.name?`${n}.${e.name}`:["title","base"].includes(n)?n:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,e,s]),Nv=n=>{const e=new Set,s=[];return n.forEach(a=>{const t=Mv(a);e.has(t)||(e.add(t),s.push(a))}),s},$v=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,qv=n=>n.startsWith("ftp://"),us=n=>/^(https?:)?\/\//.test(n),Bv=/.md((\?|#).*)?$/,tt=(n,e="/")=>!!(us(n)||qv(n)||n.startsWith("/")&&!n.startsWith(e)&&!Bv.test(n)),zr=n=>/^mailto:/.test(n),Hv=n=>/^tel:/.test(n),$o=n=>Object.prototype.toString.call(n)==="[object Object]",qo=n=>n[n.length-1]==="/"?n.slice(0,-1):n,Fr=n=>n[0]==="/"?n.slice(1):n,zv=(n,e)=>{const s=Object.keys(n).sort((a,t)=>{const o=t.split("/").length-a.split("/").length;return o!==0?o:t.length-a.length});for(const a of s)if(e.startsWith(a))return a;return"/"},al=(n,e="/")=>{const s=n.replace(/^(https?:)?\/\/[^/]*/,"");return s.startsWith(e)?`/${s.slice(e.length)}`:s};const Wr={"v-184f4da6":m(()=>l(()=>import("./intro.html-4d04df10.js"),["assets/intro.html-4d04df10.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8daa1a0e":m(()=>l(()=>import("./index.html-3d2f5678.js"),["assets/index.html-3d2f5678.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1735a0be":m(()=>l(()=>import("./Applist.html-7721fec5.js"),["assets/Applist.html-7721fec5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-69693975":m(()=>l(()=>import("./AppNotes.html-a89f1b50.js"),["assets/AppNotes.html-a89f1b50.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d967ed6c":m(()=>l(()=>import("./ChatGPT.html-49118779.js"),["assets/ChatGPT.html-49118779.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5c29014a":m(()=>l(()=>import("./Chrome.html-95fc9a07.js"),["assets/Chrome.html-95fc9a07.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1d7dd2b7":m(()=>l(()=>import("./design.html-dd52d88e.js"),["assets/design.html-dd52d88e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c7fca9e":m(()=>l(()=>import("./Cloudflare.html-2191ccc5.js"),["assets/Cloudflare.html-2191ccc5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b70157f":m(()=>l(()=>import("./DNS.html-1640a33f.js"),["assets/DNS.html-1640a33f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bc154f32":m(()=>l(()=>import("./GitHub.html-f0d44165.js"),["assets/GitHub.html-f0d44165.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7c5f209c":m(()=>l(()=>import("./Static.html-42123c78.js"),["assets/Static.html-42123c78.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39dc98a2":m(()=>l(()=>import("./VPS.html-83d6bd0b.js"),["assets/VPS.html-83d6bd0b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00f6d5f1":m(()=>l(()=>import("./Comments.html-fe41b28d.js"),["assets/Comments.html-fe41b28d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3cdca328":m(()=>l(()=>import("./docsify.html-45028b06.js"),["assets/docsify.html-45028b06.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b0b9f28":m(()=>l(()=>import("./VuePress.html-67ef98b8.js"),["assets/VuePress.html-67ef98b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77e3440a":m(()=>l(()=>import("./01.html-3a020ae5.js"),["assets/01.html-3a020ae5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79981ca9":m(()=>l(()=>import("./02.html-a75a1a0f.js"),["assets/02.html-a75a1a0f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b4cf548":m(()=>l(()=>import("./03.html-279d41bc.js"),["assets/03.html-279d41bc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d01cde7":m(()=>l(()=>import("./04.html-08531de9.js"),["assets/04.html-08531de9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7eb6a686":m(()=>l(()=>import("./05.html-2e6db092.js"),["assets/05.html-2e6db092.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ff2901b6":m(()=>l(()=>import("./06.html-2c6c7d93.js"),["assets/06.html-2c6c7d93.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fbbf5078":m(()=>l(()=>import("./07.html-f095776b.js"),["assets/07.html-f095776b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f8559f3a":m(()=>l(()=>import("./08.html-058bb665.js"),["assets/08.html-058bb665.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f4ebedfc":m(()=>l(()=>import("./09.html-101f5917.js"),["assets/09.html-101f5917.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a9d6b2a8":m(()=>l(()=>import("./10.html-153dc543.js"),["assets/10.html-153dc543.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a66d016a":m(()=>l(()=>import("./11.html-18a4a411.js"),["assets/11.html-18a4a411.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2632f347":m(()=>l(()=>import("./01.html-f6f0a8ab.js"),["assets/01.html-f6f0a8ab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-27e7cbe6":m(()=>l(()=>import("./02.html-85670113.js"),["assets/02.html-85670113.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-299ca485":m(()=>l(()=>import("./03.html-6f12e4c0.js"),["assets/03.html-6f12e4c0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b517d24":m(()=>l(()=>import("./04.html-2ad966c4.js"),["assets/04.html-2ad966c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d0655c3":m(()=>l(()=>import("./05.html-6c3ca567.js"),["assets/05.html-6c3ca567.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ebb2e62":m(()=>l(()=>import("./06.html-6041ec62.js"),["assets/06.html-6041ec62.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30700701":m(()=>l(()=>import("./07.html-1da52c17.js"),["assets/07.html-1da52c17.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3224dfa0":m(()=>l(()=>import("./08.html-f80fa1e6.js"),["assets/08.html-f80fa1e6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33d9b83f":m(()=>l(()=>import("./09.html-00f37ad6.js"),["assets/09.html-00f37ad6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-596455e9":m(()=>l(()=>import("./10.html-75523f59.js"),["assets/10.html-75523f59.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b192e88":m(()=>l(()=>import("./11.html-29b9ba39.js"),["assets/11.html-29b9ba39.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5cce0727":m(()=>l(()=>import("./12.html-2d633b67.js"),["assets/12.html-2d633b67.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5e82dfc6":m(()=>l(()=>import("./13.html-0885c092.js"),["assets/13.html-0885c092.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6037b865":m(()=>l(()=>import("./14.html-e1866280.js"),["assets/14.html-e1866280.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-61ec9104":m(()=>l(()=>import("./15.html-a5b4ac40.js"),["assets/15.html-a5b4ac40.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63a169a3":m(()=>l(()=>import("./16.html-1672b229.js"),["assets/16.html-1672b229.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-65564242":m(()=>l(()=>import("./17.html-6d04c322.js"),["assets/17.html-6d04c322.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-670b1ae1":m(()=>l(()=>import("./18.html-662687d6.js"),["assets/18.html-662687d6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63e77b20":m(()=>l(()=>import("./bookmark-scripts.html-d41e562e.js"),["assets/bookmark-scripts.html-d41e562e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-60213eb0":m(()=>l(()=>import("./online-tools.html-9dcfeb4a.js"),["assets/online-tools.html-9dcfeb4a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3d41e0e3":m(()=>l(()=>import("./01.html-ea2b5f65.js"),["assets/01.html-ea2b5f65.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ef6b982":m(()=>l(()=>import("./02.html-020bf1c3.js"),["assets/02.html-020bf1c3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-40ab9221":m(()=>l(()=>import("./03.html-d263c727.js"),["assets/03.html-d263c727.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42606ac0":m(()=>l(()=>import("./04.html-bd4683d4.js"),["assets/04.html-bd4683d4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4415435f":m(()=>l(()=>import("./05.html-3b373453.js"),["assets/05.html-3b373453.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-45ca1bfe":m(()=>l(()=>import("./06.html-90ef8932.js"),["assets/06.html-90ef8932.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8f5a8800":m(()=>l(()=>import("./01.html-5dafb5f1.js"),["assets/01.html-5dafb5f1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8bf0d6c2":m(()=>l(()=>import("./02.html-75051fb7.js"),["assets/02.html-75051fb7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-88872584":m(()=>l(()=>import("./03.html-0730842b.js"),["assets/03.html-0730842b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-851d7446":m(()=>l(()=>import("./04.html-1467bb53.js"),["assets/04.html-1467bb53.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-81b3c308":m(()=>l(()=>import("./05.html-64a66831.js"),["assets/05.html-64a66831.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e4a11ca":m(()=>l(()=>import("./06.html-95da4b79.js"),["assets/06.html-95da4b79.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ae0608c":m(()=>l(()=>import("./07.html-40ab3617.js"),["assets/07.html-40ab3617.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7776af4e":m(()=>l(()=>import("./08.html-59e654ad.js"),["assets/08.html-59e654ad.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-740cfe10":m(()=>l(()=>import("./09.html-4d0b08da.js"),["assets/09.html-4d0b08da.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28f7c2bc":m(()=>l(()=>import("./10.html-df53e160.js"),["assets/10.html-df53e160.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-20ee9d86":m(()=>l(()=>import("./01.html-f66c9079.js"),["assets/01.html-f66c9079.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1d84ec48":m(()=>l(()=>import("./02.html-c6301c09.js"),["assets/02.html-c6301c09.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1a1b3b0a":m(()=>l(()=>import("./03.html-01a278f8.js"),["assets/03.html-01a278f8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-16b189cc":m(()=>l(()=>import("./04.html-6b655c6b.js"),["assets/04.html-6b655c6b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6c412aac":m(()=>l(()=>import("./01.html-366d7671.js"),["assets/01.html-366d7671.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-68d7796e":m(()=>l(()=>import("./02.html-922723ac.js"),["assets/02.html-922723ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-656dc830":m(()=>l(()=>import("./03.html-1cd152b7.js"),["assets/03.html-1cd152b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e34a17a":m(()=>l(()=>import("./01.html-0aa666b2.js"),["assets/01.html-0aa666b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fa8ee52c":m(()=>l(()=>import("./01.html-eda5ae04.js"),["assets/01.html-eda5ae04.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f72533ee":m(()=>l(()=>import("./02.html-357fca66.js"),["assets/02.html-357fca66.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f3bb82b0":m(()=>l(()=>import("./03.html-da2a2047.js"),["assets/03.html-da2a2047.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f051d172":m(()=>l(()=>import("./04.html-f1d39914.js"),["assets/04.html-f1d39914.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ece82034":m(()=>l(()=>import("./05.html-1b09415d.js"),["assets/05.html-1b09415d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e97e6ef6":m(()=>l(()=>import("./06.html-95edbcb5.js"),["assets/06.html-95edbcb5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e614bdb8":m(()=>l(()=>import("./07.html-8b8e7c70.js"),["assets/07.html-8b8e7c70.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e2ab0c7a":m(()=>l(()=>import("./08.html-9c6294f2.js"),["assets/08.html-9c6294f2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-df415b3c":m(()=>l(()=>import("./09.html-549d6994.js"),["assets/09.html-549d6994.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-942c1fe8":m(()=>l(()=>import("./10.html-d91fa137.js"),["assets/10.html-d91fa137.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-90c26eaa":m(()=>l(()=>import("./11.html-a8acd634.js"),["assets/11.html-a8acd634.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f498b30":m(()=>l(()=>import("./01.html-57c168ba.js"),["assets/01.html-57c168ba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6b5bab47":m(()=>l(()=>import("./01.html-4513290d.js"),["assets/01.html-4513290d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6d1083e6":m(()=>l(()=>import("./02.html-e6227616.js"),["assets/02.html-e6227616.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6ec55c85":m(()=>l(()=>import("./03.html-7a935598.js"),["assets/03.html-7a935598.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-707a3524":m(()=>l(()=>import("./04.html-1219b43a.js"),["assets/04.html-1219b43a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-722f0dc3":m(()=>l(()=>import("./05.html-1879d913.js"),["assets/05.html-1879d913.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-73e3e662":m(()=>l(()=>import("./06.html-325275fe.js"),["assets/06.html-325275fe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7598bf01":m(()=>l(()=>import("./07.html-4047a640.js"),["assets/07.html-4047a640.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-774d97a0":m(()=>l(()=>import("./08.html-35f81e71.js"),["assets/08.html-35f81e71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7902703f":m(()=>l(()=>import("./09.html-e06f2890.js"),["assets/09.html-e06f2890.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c2e5e42e":m(()=>l(()=>import("./10.html-019eea34.js"),["assets/10.html-019eea34.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bf7c32f0":m(()=>l(()=>import("./11.html-4f0bcdfa.js"),["assets/11.html-4f0bcdfa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6f4eb639":m(()=>l(()=>import("./01.html-6f00e5ee.js"),["assets/01.html-6f00e5ee.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71038ed8":m(()=>l(()=>import("./02.html-0cc9f87a.js"),["assets/02.html-0cc9f87a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-72b86777":m(()=>l(()=>import("./03.html-611df08d.js"),["assets/03.html-611df08d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-746d4016":m(()=>l(()=>import("./04.html-94326009.js"),["assets/04.html-94326009.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-762218b5":m(()=>l(()=>import("./05.html-7dfa349c.js"),["assets/05.html-7dfa349c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77d6f154":m(()=>l(()=>import("./06.html-16d7e655.js"),["assets/06.html-16d7e655.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-798bc9f3":m(()=>l(()=>import("./07.html-0415128f.js"),["assets/07.html-0415128f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b40a292":m(()=>l(()=>import("./08.html-7ccc16af.js"),["assets/08.html-7ccc16af.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7cf57b31":m(()=>l(()=>import("./09.html-c2a29d0f.js"),["assets/09.html-c2a29d0f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-baffce4a":m(()=>l(()=>import("./10.html-3913825c.js"),["assets/10.html-3913825c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b7961d0c":m(()=>l(()=>import("./11.html-44ffc0fb.js"),["assets/11.html-44ffc0fb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b42c6bce":m(()=>l(()=>import("./12.html-d9db87f4.js"),["assets/12.html-d9db87f4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b0c2ba90":m(()=>l(()=>import("./13.html-89bb5449.js"),["assets/13.html-89bb5449.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ad590952":m(()=>l(()=>import("./14.html-8b919940.js"),["assets/14.html-8b919940.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a9ef5814":m(()=>l(()=>import("./15.html-855b5a62.js"),["assets/15.html-855b5a62.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a685a6d6":m(()=>l(()=>import("./16.html-8c8f9025.js"),["assets/16.html-8c8f9025.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a31bf598":m(()=>l(()=>import("./17.html-27aa5c8a.js"),["assets/17.html-27aa5c8a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9fb2445a":m(()=>l(()=>import("./18.html-4254db8d.js"),["assets/18.html-4254db8d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9c48931c":m(()=>l(()=>import("./19.html-c7fbaf31.js"),["assets/19.html-c7fbaf31.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-513357c8":m(()=>l(()=>import("./20.html-16c64a2b.js"),["assets/20.html-16c64a2b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4dc9a68a":m(()=>l(()=>import("./21.html-222c9345.js"),["assets/21.html-222c9345.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4a5ff54c":m(()=>l(()=>import("./22.html-11c32f5f.js"),["assets/22.html-11c32f5f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46f6440e":m(()=>l(()=>import("./23.html-6894848a.js"),["assets/23.html-6894848a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ae21c12":m(()=>l(()=>import("./01.html-d8c63fd2.js"),["assets/01.html-d8c63fd2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-37786ad4":m(()=>l(()=>import("./02.html-0bde0fe5.js"),["assets/02.html-0bde0fe5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-340eb996":m(()=>l(()=>import("./03.html-25c1f6af.js"),["assets/03.html-25c1f6af.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30a50858":m(()=>l(()=>import("./04.html-58c76281.js"),["assets/04.html-58c76281.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d3b571a":m(()=>l(()=>import("./05.html-c71b1708.js"),["assets/05.html-c71b1708.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29d1a5dc":m(()=>l(()=>import("./06.html-4590cbaf.js"),["assets/06.html-4590cbaf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2667f49e":m(()=>l(()=>import("./07.html-e6da51a9.js"),["assets/07.html-e6da51a9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-22fe4360":m(()=>l(()=>import("./08.html-59bd8412.js"),["assets/08.html-59bd8412.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1f949222":m(()=>l(()=>import("./09.html-52591f13.js"),["assets/09.html-52591f13.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-15c05499":m(()=>l(()=>import("./10.html-049f6b3d.js"),["assets/10.html-049f6b3d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-17752d38":m(()=>l(()=>import("./11.html-beb4dcbd.js"),["assets/11.html-beb4dcbd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-192a05d7":m(()=>l(()=>import("./12.html-000071dd.js"),["assets/12.html-000071dd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1adede76":m(()=>l(()=>import("./13.html-dbe81b17.js"),["assets/13.html-dbe81b17.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c93b715":m(()=>l(()=>import("./14.html-83884a71.js"),["assets/14.html-83884a71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e488fb4":m(()=>l(()=>import("./15.html-f703b805.js"),["assets/15.html-f703b805.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1ffd6853":m(()=>l(()=>import("./16.html-cbca91e6.js"),["assets/16.html-cbca91e6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-21b240f2":m(()=>l(()=>import("./17.html-4c9c9f1b.js"),["assets/17.html-4c9c9f1b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-23671991":m(()=>l(()=>import("./18.html-9f4669cc.js"),["assets/18.html-9f4669cc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-251bf230":m(()=>l(()=>import("./19.html-fd813f05.js"),["assets/19.html-fd813f05.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4aa68fda":m(()=>l(()=>import("./20.html-656fb6d1.js"),["assets/20.html-656fb6d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c5b6879":m(()=>l(()=>import("./21.html-82fb23c6.js"),["assets/21.html-82fb23c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e104118":m(()=>l(()=>import("./22.html-ba317057.js"),["assets/22.html-ba317057.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4fc519b7":m(()=>l(()=>import("./23.html-211f32fa.js"),["assets/23.html-211f32fa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5179f256":m(()=>l(()=>import("./24.html-2373ef38.js"),["assets/24.html-2373ef38.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-532ecaf5":m(()=>l(()=>import("./25.html-4f00b8c4.js"),["assets/25.html-4f00b8c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-54e3a394":m(()=>l(()=>import("./26.html-6de851b5.js"),["assets/26.html-6de851b5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-56987c33":m(()=>l(()=>import("./27.html-01fe55ef.js"),["assets/27.html-01fe55ef.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-584d54d2":m(()=>l(()=>import("./28.html-4012b35e.js"),["assets/28.html-4012b35e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5a022d71":m(()=>l(()=>import("./29.html-97e2f806.js"),["assets/29.html-97e2f806.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7f8ccb1b":m(()=>l(()=>import("./30.html-c56cbd5c.js"),["assets/30.html-c56cbd5c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fd7cb88c":m(()=>l(()=>import("./31.html-8aa2ed97.js"),["assets/31.html-8aa2ed97.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fa13074e":m(()=>l(()=>import("./32.html-58436311.js"),["assets/32.html-58436311.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f6a95610":m(()=>l(()=>import("./33.html-0fa0e8cd.js"),["assets/33.html-0fa0e8cd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f33fa4d2":m(()=>l(()=>import("./34.html-db1c2f24.js"),["assets/34.html-db1c2f24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-efd5f394":m(()=>l(()=>import("./35.html-0c400a45.js"),["assets/35.html-0c400a45.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ec6c4256":m(()=>l(()=>import("./36.html-98b97814.js"),["assets/36.html-98b97814.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bfed7bf0":m(()=>l(()=>import("./01.html-695373b8.js"),["assets/01.html-695373b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bc83cab2":m(()=>l(()=>import("./02.html-287a3844.js"),["assets/02.html-287a3844.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b91a1974":m(()=>l(()=>import("./03.html-0827397f.js"),["assets/03.html-0827397f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b5b06836":m(()=>l(()=>import("./04.html-5a492642.js"),["assets/04.html-5a492642.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b246b6f8":m(()=>l(()=>import("./05.html-6e1a16e6.js"),["assets/05.html-6e1a16e6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-aedd05ba":m(()=>l(()=>import("./06.html-b51e3045.js"),["assets/06.html-b51e3045.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ab73547c":m(()=>l(()=>import("./07.html-b09f06b3.js"),["assets/07.html-b09f06b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a809a33e":m(()=>l(()=>import("./08.html-9f5d5727.js"),["assets/08.html-9f5d5727.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a49ff200":m(()=>l(()=>import("./09.html-e865cc56.js"),["assets/09.html-e865cc56.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8403a022":m(()=>l(()=>import("./01.html-9e3b915d.js"),["assets/01.html-9e3b915d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8099eee4":m(()=>l(()=>import("./02.html-b48bffc9.js"),["assets/02.html-b48bffc9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d303da6":m(()=>l(()=>import("./03.html-050b8666.js"),["assets/03.html-050b8666.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79c68c68":m(()=>l(()=>import("./04.html-a40c05a8.js"),["assets/04.html-a40c05a8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c15f9c8c":m(()=>l(()=>import("./01.html-af515438.js"),["assets/01.html-af515438.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bdf5eb4e":m(()=>l(()=>import("./02.html-ee1b1e32.js"),["assets/02.html-ee1b1e32.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ba8c3a10":m(()=>l(()=>import("./03.html-2b1098a6.js"),["assets/03.html-2b1098a6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b72288d2":m(()=>l(()=>import("./04.html-a4ec6ebd.js"),["assets/04.html-a4ec6ebd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b3b8d794":m(()=>l(()=>import("./05.html-e48051c9.js"),["assets/05.html-e48051c9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b04f2656":m(()=>l(()=>import("./06.html-88e01669.js"),["assets/06.html-88e01669.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ace57518":m(()=>l(()=>import("./07.html-b9eef348.js"),["assets/07.html-b9eef348.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a97bc3da":m(()=>l(()=>import("./08.html-2a3cd049.js"),["assets/08.html-2a3cd049.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a612129c":m(()=>l(()=>import("./09.html-9cdf9dce.js"),["assets/09.html-9cdf9dce.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5afcd748":m(()=>l(()=>import("./10.html-8477fda7.js"),["assets/10.html-8477fda7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5793260a":m(()=>l(()=>import("./11.html-4f60bd86.js"),["assets/11.html-4f60bd86.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-542974cc":m(()=>l(()=>import("./12.html-6345d286.js"),["assets/12.html-6345d286.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-50bfc38e":m(()=>l(()=>import("./13.html-7d11ba68.js"),["assets/13.html-7d11ba68.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d561250":m(()=>l(()=>import("./14.html-3dee31bc.js"),["assets/14.html-3dee31bc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49ec6112":m(()=>l(()=>import("./15.html-89aeba07.js"),["assets/15.html-89aeba07.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4682afd4":m(()=>l(()=>import("./16.html-ccbbb05f.js"),["assets/16.html-ccbbb05f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4318fe96":m(()=>l(()=>import("./17.html-ca85d41b.js"),["assets/17.html-ca85d41b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3faf4d58":m(()=>l(()=>import("./18.html-98c73ef4.js"),["assets/18.html-98c73ef4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3c459c1a":m(()=>l(()=>import("./19.html-2aa60001.js"),["assets/19.html-2aa60001.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0767cf9d":m(()=>l(()=>import("./20.html-8e13f4fe.js"),["assets/20.html-8e13f4fe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-091ca83c":m(()=>l(()=>import("./21.html-e37aa6b2.js"),["assets/21.html-e37aa6b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0ad180db":m(()=>l(()=>import("./22.html-f282598c.js"),["assets/22.html-f282598c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0c86597a":m(()=>l(()=>import("./23.html-5fc6b6dd.js"),["assets/23.html-5fc6b6dd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d6cb3c78":m(()=>l(()=>import("./01.html-776645d4.js"),["assets/01.html-776645d4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3618b3a":m(()=>l(()=>import("./02.html-4a0f8448.js"),["assets/02.html-4a0f8448.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cff7d9fc":m(()=>l(()=>import("./03.html-e1e1efb3.js"),["assets/03.html-e1e1efb3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc8e28be":m(()=>l(()=>import("./04.html-ad28cc98.js"),["assets/04.html-ad28cc98.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c5bac642":m(()=>l(()=>import("./06.html-d7bfa960.js"),["assets/06.html-d7bfa960.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c2511504":m(()=>l(()=>import("./07.html-469b3cc2.js"),["assets/07.html-469b3cc2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bee763c6":m(()=>l(()=>import("./08.html-96c0ab8d.js"),["assets/08.html-96c0ab8d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bb7db288":m(()=>l(()=>import("./09.html-676cd58a.js"),["assets/09.html-676cd58a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-70687734":m(()=>l(()=>import("./10.html-c222711d.js"),["assets/10.html-c222711d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6cfec5f6":m(()=>l(()=>import("./11.html-4950a8a7.js"),["assets/11.html-4950a8a7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-699514b8":m(()=>l(()=>import("./12.html-340af965.js"),["assets/12.html-340af965.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-662b637a":m(()=>l(()=>import("./13.html-bf2440e7.js"),["assets/13.html-bf2440e7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-62c1b23c":m(()=>l(()=>import("./14.html-a4da1fab.js"),["assets/14.html-a4da1fab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f5800fe":m(()=>l(()=>import("./15.html-dabc57b9.js"),["assets/15.html-dabc57b9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bee4fc0":m(()=>l(()=>import("./16.html-9e9e4792.js"),["assets/16.html-9e9e4792.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58849e82":m(()=>l(()=>import("./17.html-ebe9b264.js"),["assets/17.html-ebe9b264.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-551aed44":m(()=>l(()=>import("./18.html-da714ee3.js"),["assets/18.html-da714ee3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33cf2509":m(()=>l(()=>import("./01.html-08915cb7.js"),["assets/01.html-08915cb7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3583fda8":m(()=>l(()=>import("./02.html-189acb9d.js"),["assets/02.html-189acb9d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3738d647":m(()=>l(()=>import("./03.html-2d19fba4.js"),["assets/03.html-2d19fba4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-38edaee6":m(()=>l(()=>import("./04.html-9461aff0.js"),["assets/04.html-9461aff0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3aa28785":m(()=>l(()=>import("./05.html-e45a075b.js"),["assets/05.html-e45a075b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0055f2c3":m(()=>l(()=>import("./01.html-7bc81e7e.js"),["assets/01.html-7bc81e7e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-020acb62":m(()=>l(()=>import("./02.html-5fd85545.js"),["assets/02.html-5fd85545.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03bfa401":m(()=>l(()=>import("./03.html-d17b4159.js"),["assets/03.html-d17b4159.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05747ca0":m(()=>l(()=>import("./04.html-7ed5c1b4.js"),["assets/04.html-7ed5c1b4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0729553f":m(()=>l(()=>import("./05.html-0aa5141c.js"),["assets/05.html-0aa5141c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-08de2dde":m(()=>l(()=>import("./06.html-3b80bcf0.js"),["assets/06.html-3b80bcf0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0a93067d":m(()=>l(()=>import("./07.html-316e0ca3.js"),["assets/07.html-316e0ca3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0c47df1c":m(()=>l(()=>import("./08.html-38a7dd3e.js"),["assets/08.html-38a7dd3e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0dfcb7bb":m(()=>l(()=>import("./09.html-1772004f.js"),["assets/09.html-1772004f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33875565":m(()=>l(()=>import("./10.html-9d93d141.js"),["assets/10.html-9d93d141.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-353c2e04":m(()=>l(()=>import("./11.html-98e529a2.js"),["assets/11.html-98e529a2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36f106a3":m(()=>l(()=>import("./12.html-cc42ac89.js"),["assets/12.html-cc42ac89.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-38a5df42":m(()=>l(()=>import("./13.html-af209f3b.js"),["assets/13.html-af209f3b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a5ab7e1":m(()=>l(()=>import("./14.html-451d8db3.js"),["assets/14.html-451d8db3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3c0f9080":m(()=>l(()=>import("./15.html-55f3caa5.js"),["assets/15.html-55f3caa5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3dc4691f":m(()=>l(()=>import("./16.html-72513e26.js"),["assets/16.html-72513e26.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01544aa3":m(()=>l(()=>import("./01.html-4c28f4cf.js"),["assets/01.html-4c28f4cf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03092342":m(()=>l(()=>import("./02.html-f5d83caf.js"),["assets/02.html-f5d83caf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-04bdfbe1":m(()=>l(()=>import("./03.html-c12df7c6.js"),["assets/03.html-c12df7c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0672d480":m(()=>l(()=>import("./04.html-16fc39c2.js"),["assets/04.html-16fc39c2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3296bd31":m(()=>l(()=>import("./browser.html-5d5bf76b.js"),["assets/browser.html-5d5bf76b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a8682f9":m(()=>l(()=>import("./cross-platform.html-d119173d.js"),["assets/cross-platform.html-d119173d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71b3b66f":m(()=>l(()=>import("./vscode.html-13ab5dcc.js"),["assets/vscode.html-13ab5dcc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-10d9f538":m(()=>l(()=>import("./webstorm.html-ab064047.js"),["assets/webstorm.html-ab064047.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-85bcb294":m(()=>l(()=>import("./windows.html-16c2febf.js"),["assets/windows.html-16c2febf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-266cbe57":m(()=>l(()=>import("./01.html-ff097409.js"),["assets/01.html-ff097409.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-282196f6":m(()=>l(()=>import("./02.html-c5df98bd.js"),["assets/02.html-c5df98bd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29d66f95":m(()=>l(()=>import("./03.html-31d482b7.js"),["assets/03.html-31d482b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b8b4834":m(()=>l(()=>import("./04.html-fafbc435.js"),["assets/04.html-fafbc435.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d4020d3":m(()=>l(()=>import("./05.html-565522b8.js"),["assets/05.html-565522b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ef4f972":m(()=>l(()=>import("./06.html-64a67706.js"),["assets/06.html-64a67706.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30a9d211":m(()=>l(()=>import("./07.html-aa3a6da5.js"),["assets/07.html-aa3a6da5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-325eaab0":m(()=>l(()=>import("./08.html-c0a395af.js"),["assets/08.html-c0a395af.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3413834f":m(()=>l(()=>import("./09.html-ad24d55a.js"),["assets/09.html-ad24d55a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-599e20f9":m(()=>l(()=>import("./10.html-a9248b37.js"),["assets/10.html-a9248b37.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b52f998":m(()=>l(()=>import("./11.html-e13ae1ee.js"),["assets/11.html-e13ae1ee.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5d07d237":m(()=>l(()=>import("./12.html-cea458a3.js"),["assets/12.html-cea458a3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ebcaad6":m(()=>l(()=>import("./13.html-47455b30.js"),["assets/13.html-47455b30.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-60718375":m(()=>l(()=>import("./14.html-9b71618b.js"),["assets/14.html-9b71618b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05e216f0":m(()=>l(()=>import("./01.html-f8045ebf.js"),["assets/01.html-f8045ebf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-027865b2":m(()=>l(()=>import("./02.html-ee81b63b.js"),["assets/02.html-ee81b63b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0078a5c6":m(()=>l(()=>import("./03.html-3c53520e.js"),["assets/03.html-3c53520e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-022d7e65":m(()=>l(()=>import("./04.html-a65ce4f2.js"),["assets/04.html-a65ce4f2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03e25704":m(()=>l(()=>import("./05.html-61259abb.js"),["assets/05.html-61259abb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05972fa3":m(()=>l(()=>import("./06.html-b9867e71.js"),["assets/06.html-b9867e71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-671ae07c":m(()=>l(()=>import("./01.html-2017a135.js"),["assets/01.html-2017a135.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-68cfb91b":m(()=>l(()=>import("./02.html-e02688fc.js"),["assets/02.html-e02688fc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6a8491ba":m(()=>l(()=>import("./03.html-73ce06b2.js"),["assets/03.html-73ce06b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6c396a59":m(()=>l(()=>import("./04.html-a976884e.js"),["assets/04.html-a976884e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1ff273ed":m(()=>l(()=>import("./01.html-1b4a7530.js"),["assets/01.html-1b4a7530.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-21a74c8c":m(()=>l(()=>import("./02.html-b2243883.js"),["assets/02.html-b2243883.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-235c252b":m(()=>l(()=>import("./03.html-efc3d283.js"),["assets/03.html-efc3d283.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2510fdca":m(()=>l(()=>import("./04.html-c362ce23.js"),["assets/04.html-c362ce23.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-26c5d669":m(()=>l(()=>import("./05.html-75635d01.js"),["assets/05.html-75635d01.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-287aaf08":m(()=>l(()=>import("./06.html-a5b825c9.js"),["assets/06.html-a5b825c9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2a2f87a7":m(()=>l(()=>import("./07.html-bf7232dd.js"),["assets/07.html-bf7232dd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2be46046":m(()=>l(()=>import("./08.html-037de72e.js"),["assets/08.html-037de72e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d9938e5":m(()=>l(()=>import("./09.html-f98d17b3.js"),["assets/09.html-f98d17b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5323d68f":m(()=>l(()=>import("./10.html-699e3203.js"),["assets/10.html-699e3203.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3706649a":m(()=>l(()=>import("./404.html-8fa46e63.js"),["assets/404.html-8fa46e63.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-144e84a4":m(()=>l(()=>import("./index.html-90a15bcc.js"),["assets/index.html-90a15bcc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-72a9c1e2":m(()=>l(()=>import("./index.html-47bed202.js"),["assets/index.html-47bed202.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744e6dd4":m(()=>l(()=>import("./index.html-a9e2fee1.js"),["assets/index.html-a9e2fee1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b22fa0a4":m(()=>l(()=>import("./index.html-b103d97f.js"),["assets/index.html-b103d97f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e029433":m(()=>l(()=>import("./index.html-fe9b3456.js"),["assets/index.html-fe9b3456.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-acdb09de":m(()=>l(()=>import("./index.html-32e4f79e.js"),["assets/index.html-32e4f79e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-429fc9e8":m(()=>l(()=>import("./index.html-628953d3.js"),["assets/index.html-628953d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1559ca3e":m(()=>l(()=>import("./index.html-de63a499.js"),["assets/index.html-de63a499.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-326764f5":m(()=>l(()=>import("./index.html-2f30f7c6.js"),["assets/index.html-2f30f7c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-dc68d520":m(()=>l(()=>import("./index.html-dd830c3e.js"),["assets/index.html-dd830c3e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d582078":m(()=>l(()=>import("./index.html-ac2e057f.js"),["assets/index.html-ac2e057f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a02344a":m(()=>l(()=>import("./index.html-27cc61d1.js"),["assets/index.html-27cc61d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d243d0e":m(()=>l(()=>import("./index.html-2ea9fd5c.js"),["assets/index.html-2ea9fd5c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c3b7df84":m(()=>l(()=>import("./index.html-59540c3b.js"),["assets/index.html-59540c3b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ebe9341":m(()=>l(()=>import("./index.html-fa402b88.js"),["assets/index.html-fa402b88.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b98b24e":m(()=>l(()=>import("./index.html-8d4fad91.js"),["assets/index.html-8d4fad91.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4031f170":m(()=>l(()=>import("./index.html-20723f10.js"),["assets/index.html-20723f10.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2307d72e":m(()=>l(()=>import("./index.html-b7e7edfb.js"),["assets/index.html-b7e7edfb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8681a27a":m(()=>l(()=>import("./index.html-2ced1fdb.js"),["assets/index.html-2ced1fdb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f6e79de":m(()=>l(()=>import("./index.html-eac434e4.js"),["assets/index.html-eac434e4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-26ee445f":m(()=>l(()=>import("./index.html-d3e2c3b8.js"),["assets/index.html-d3e2c3b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-02f17b61":m(()=>l(()=>import("./index.html-b2325e55.js"),["assets/index.html-b2325e55.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0e6aa261":m(()=>l(()=>import("./index.html-69313c22.js"),["assets/index.html-69313c22.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b60e5920":m(()=>l(()=>import("./index.html-c93c41ea.js"),["assets/index.html-c93c41ea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b3e1bee":m(()=>l(()=>import("./index.html-826df29f.js"),["assets/index.html-826df29f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-364ea92e":m(()=>l(()=>import("./index.html-069984d1.js"),["assets/index.html-069984d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-734e47fe":m(()=>l(()=>import("./index.html-4fd99b39.js"),["assets/index.html-4fd99b39.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-299ca198":m(()=>l(()=>import("./index.html-8d74e998.js"),["assets/index.html-8d74e998.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d1c40e2":m(()=>l(()=>import("./index.html-cd090750.js"),["assets/index.html-cd090750.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58897f1a":m(()=>l(()=>import("./index.html-88deeb68.js"),["assets/index.html-88deeb68.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-299ca1d6":m(()=>l(()=>import("./index.html-b00e8132.js"),["assets/index.html-b00e8132.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e747335":m(()=>l(()=>import("./index.html-83d4863f.js"),["assets/index.html-83d4863f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b2ca300":m(()=>l(()=>import("./index.html-290180a7.js"),["assets/index.html-290180a7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-295ffbfe":m(()=>l(()=>import("./index.html-cf5ade24.js"),["assets/index.html-cf5ade24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4bdef0f0":m(()=>l(()=>import("./index.html-c98b8342.js"),["assets/index.html-c98b8342.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d0bc6108":m(()=>l(()=>import("./index.html-60956af6.js"),["assets/index.html-60956af6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc046daa":m(()=>l(()=>import("./index.html-cbcc1e53.js"),["assets/index.html-cbcc1e53.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f8133a2":m(()=>l(()=>import("./index.html-d9e0a2ff.js"),["assets/index.html-d9e0a2ff.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bc93818":m(()=>l(()=>import("./index.html-0677be57.js"),["assets/index.html-0677be57.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744d024e":m(()=>l(()=>import("./index.html-4dfccdd7.js"),["assets/index.html-4dfccdd7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e52c881c":m(()=>l(()=>import("./index.html-352a870b.js"),["assets/index.html-352a870b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-154dc4c4":m(()=>l(()=>import("./index.html-3e97b399.js"),["assets/index.html-3e97b399.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01560935":m(()=>l(()=>import("./index.html-f5efd5c2.js"),["assets/index.html-f5efd5c2.js","assets/plugin-vue_export-helper-c27b6911.js"]))};var Fv=Symbol(""),Wv=Y(Cv),Jr=Ke({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Be=Y(Jr),dn=()=>Be,Ur=Symbol(""),En=()=>{const n=kn(Ur);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},Gr=Symbol(""),Jv=()=>{const n=kn(Gr);if(!n)throw new Error("usePageHead() is called without provider.");return n},Kr=Symbol(""),Uv=()=>{const n=kn(Kr);if(!n)throw new Error("usePageHeadTitle() is called without provider.");return n},Yr=Symbol(""),mt=()=>{const n=kn(Yr);if(!n)throw new Error("usePageLang() is called without provider.");return n},Xr=Symbol(""),Gv=()=>{const n=kn(Xr);if(!n)throw new Error("usePageLayout() is called without provider.");return n},Bo=Symbol(""),we=()=>{const n=kn(Bo);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},gs=Y(jv),Qr=()=>gs,Zr=Symbol(""),ft=()=>{const n=kn(Zr);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},Kv=Symbol(""),Yv="Layout",Xv="NotFound",xe=fa({resolveLayouts:n=>n.reduce((e,s)=>({...e,...s.layouts}),{}),resolvePageData:async n=>{const e=Wv.value[n];return await(e==null?void 0:e())??Jr},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,e,s)=>{const a=cn(e.description)?e.description:s.description,t=[...U(e.head)?e.head:[],...s.head,["title",{},n],["meta",{name:"description",content:a}]];return Nv(t)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(s=>!!s).join(" | "),resolvePageLang:n=>n.lang||"en",resolvePageLayout:(n,e)=>{let s;if(n.path){const a=n.frontmatter.layout;cn(a)?s=a:s=Yv}else s=Xv;return e[s]},resolveRouteLocale:(n,e)=>zv(n,e),resolveSiteLocaleData:(n,e)=>({...n,...n.locales[e]})}),kt=M({name:"ClientOnly",setup(n,e){const s=Y(!1);return wn(()=>{s.value=!0}),()=>{var a,t;return s.value?(t=(a=e.slots).default)==null?void 0:t.call(a):null}}}),ni=M({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const e=dn(),s=E(()=>Wr[n.pageKey||e.value.key]);return()=>s.value?i(s.value):i("div","404 Not Found")}}),qn=(n={})=>n,Vn=n=>us(n)?n:`/${Fr(n)}`;const Qv={},pn=({name:n="",color:e="currentColor"},{slots:s})=>{var a;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(a=s.default)==null?void 0:a.call(s))};pn.displayName="IconBase";const ei=({size:n=48,stroke:e=4,wrapper:s=!0,height:a=2*n})=>{const t=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return s?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${a}px`},t):t};ei.displayName="LoadingIcon";const si=(n,{slots:e})=>{var s;return(s=e.default)==null?void 0:s.call(e)},ai=()=>i(pn,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));ai.displayName="GitHubIcon";const ti=()=>i(pn,{name:"gitlab"},()=>i("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));ti.displayName="GitLabIcon";const oi=()=>i(pn,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));oi.displayName="GiteeIcon";const pi=()=>i(pn,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));pi.displayName="BitbucketIcon";const li=()=>i(pn,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));li.displayName="SourceIcon";const ri=Array.isArray,Zv=n=>typeof n=="function",nm=n=>typeof n=="string";var ii=n=>/^(https?:)?\/\//.test(n),ci=n=>Object.prototype.toString.call(n)==="[object Object]";const Pe=(n,e)=>{const s=e?e._instance:Bs();return ci(s==null?void 0:s.appContext.components)&&(n in s.appContext.components||te(n)in s.appContext.components||ma(te(n))in s.appContext.components)};function em(){const n=Y(!1);return Bs()&&wn(()=>{n.value=!0}),n}function sm(n){return em(),E(()=>!!n())}const am=()=>sm(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),tm=()=>{const n=am();return E(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},ds=n=>{const e=we();return E(()=>n[e.value])},Ho=(n="")=>{if(n){if(typeof n=="number")return new Date(n);const e=Date.parse(n.toString());if(!Number.isNaN(e))return new Date(e)}return null},_t=(n,e)=>{let s=1;for(let a=0;a<n.length;a++)s+=n.charCodeAt(a),s+=s<<10,s^=s>>6;return s+=s<<3,s^=s>>11,s%e},ls=n=>typeof n=="string",ia=(n,e)=>ls(n)&&n.startsWith(e),hs=(n,e)=>ls(n)&&n.endsWith(e),ba=Object.entries,om=Object.fromEntries,ge=Object.keys,tl=n=>ci(n)&&ls(n.name),ca=(n,e=!1)=>n?ri(n)?n.map(s=>ls(s)?{name:s}:tl(s)?s:null).filter(s=>s!==null):ls(n)?[{name:n}]:tl(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,n),[]):[],ui=(n,e)=>{if(n){if(ri(n)&&n.every(ls))return n;if(ls(n))return[n];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},di=n=>ui(n,"category"),vi=n=>ui(n,"tag"),ht=n=>ia(n,"/");let pm=class{constructor(){this.messageElements={};const e="message-container",s=document.getElementById(e);s?this.containerElement=s:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,s=2e3){const a=document.createElement("div"),t=Date.now();return a.className="message move-in",a.innerHTML=e,this.containerElement.appendChild(a),this.messageElements[t]=a,s>0&&setTimeout(()=>{this.close(t)},s),t}close(e){if(e){const s=this.messageElements[e];s.classList.remove("move-in"),s.classList.add("move-out"),s.addEventListener("animationend",()=>{s.remove(),delete this.messageElements[e]})}else ge(this.messageElements).forEach(s=>this.close(Number(s)))}destroy(){document.body.removeChild(this.containerElement)}};const mi=/#.*$/u,lm=n=>{const e=mi.exec(n);return e?e[0]:""},ol=n=>decodeURI(n).replace(mi,"").replace(/(index)?\.(md|html)$/,""),zo=(n,e)=>{if(e===void 0)return!1;const s=ol(n.path),a=ol(e),t=lm(e);return t?t===n.hash&&(!a||s===a):s===a},rm=n=>ii(n)?n:`https://github.com/${n}`,fi=n=>!ii(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,ga=(n,...e)=>{const s=n.resolve(...e),a=s.matched[s.matched.length-1];if(!(a!=null&&a.redirect))return s;const{redirect:t}=a,o=Zv(t)?t(s):t,p=nm(o)?{path:o}:o;return ga(n,{hash:s.hash,query:s.query,params:s.params,...p})};function ue(n){return Wl()?(fu(n),!0):!1}function Dn(n){return typeof n=="function"?n():as(n)}const rs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const im=Object.prototype.toString,cm=n=>im.call(n)==="[object Object]",is=()=>{},pl=um();function um(){var n,e;return rs&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Fo(n,e){function s(...a){return new Promise((t,o)=>{Promise.resolve(n(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(t).catch(o)})}return s}const ki=n=>n();function dm(n,e={}){let s,a,t=is;const o=r=>{clearTimeout(r),t(),t=is};return r=>{const c=Dn(n),u=Dn(e.maxWait);return s&&o(s),c<=0||u!==void 0&&u<=0?(a&&(o(a),a=null),Promise.resolve(r())):new Promise((d,v)=>{t=e.rejectOnCancel?v:d,u&&!a&&(a=setTimeout(()=>{s&&o(s),a=null,d(r())},u)),s=setTimeout(()=>{a&&o(a),a=null,d(r())},c)})}}function vm(n,e=!0,s=!0,a=!1){let t=0,o,p=!0,r=is,c;const u=()=>{o&&(clearTimeout(o),o=void 0,r(),r=is)};return v=>{const f=Dn(n),k=Date.now()-t,b=()=>c=v();return u(),f<=0?(t=Date.now(),b()):(k>f&&(s||!p)?(t=Date.now(),b()):e&&(c=new Promise((T,S)=>{r=a?S:T,o=setTimeout(()=>{t=Date.now(),p=!0,T(b()),u()},Math.max(0,f-k))})),!s&&!o&&(o=setTimeout(()=>p=!0,f)),p=!1,c)}}function mm(n=ki){const e=Y(!0);function s(){e.value=!1}function a(){e.value=!0}const t=(...o)=>{e.value&&n(...o)};return{isActive:Ke(e),pause:s,resume:a,eventFilter:t}}function fm(n){let e;function s(){return e||(e=n()),e}return s.reset=async()=>{const a=e;e=void 0,a&&await a},s}function _i(n){return n||Bs()}function km(...n){if(n.length!==1)return qs(...n);const e=n[0];return typeof e=="function"?Ke(qu(()=>({get:e,set:is}))):Y(e)}function b_(n,e=200,s={}){return Fo(dm(e,s),n)}function _m(n,e=200,s=!1,a=!0,t=!1){return Fo(vm(e,s,a,t),n)}function hm(n,e,s={}){const{eventFilter:a=ki,...t}=s;return ln(n,Fo(a,e),t)}function bm(n,e,s={}){const{eventFilter:a,...t}=s,{eventFilter:o,pause:p,resume:r,isActive:c}=mm(a);return{stop:hm(n,e,{...t,eventFilter:o}),pause:p,resume:r,isActive:c}}function ya(n,e=!0,s){const a=_i(s);a?wn(n,a):e?n():cs(n)}function gm(n,e){const s=_i(e);s&&ha(n,s)}function ym(n,e=1e3,s={}){const{immediate:a=!0,immediateCallback:t=!1}=s;let o=null;const p=Y(!1);function r(){o&&(clearInterval(o),o=null)}function c(){p.value=!1,r()}function u(){const d=Dn(e);d<=0||(p.value=!0,t&&n(),r(),o=setInterval(n,d))}if(a&&rs&&u(),Pn(e)||typeof e=="function"){const d=ln(e,()=>{p.value&&rs&&u()});ue(d)}return ue(c),{isActive:p,pause:c,resume:u}}function wm(n,e,s={}){const{immediate:a=!0}=s,t=Y(!1);let o=null;function p(){o&&(clearTimeout(o),o=null)}function r(){t.value=!1,p()}function c(...u){p(),t.value=!0,o=setTimeout(()=>{t.value=!1,o=null,n(...u)},Dn(e))}return a&&(t.value=!0,rs&&c()),ue(r),{isPending:Ke(t),start:c,stop:r}}function ll(n=!1,e={}){const{truthyValue:s=!0,falsyValue:a=!1}=e,t=Pn(n),o=Y(n);function p(r){if(arguments.length)return o.value=r,o.value;{const c=Dn(s);return o.value=o.value===c?Dn(a):c,o.value}}return t?p:[o,p]}function be(n){var e;const s=Dn(n);return(e=s==null?void 0:s.$el)!=null?e:s}const ye=rs?window:void 0,Wo=rs?window.document:void 0,hi=rs?window.navigator:void 0;function Nn(...n){let e,s,a,t;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,a,t]=n,e=ye):[e,s,a,t]=n,!e)return is;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const o=[],p=()=>{o.forEach(d=>d()),o.length=0},r=(d,v,f,k)=>(d.addEventListener(v,f,k),()=>d.removeEventListener(v,f,k)),c=ln(()=>[be(e),Dn(t)],([d,v])=>{if(p(),!d)return;const f=cm(v)?{...v}:v;o.push(...s.flatMap(k=>a.map(b=>r(d,k,b,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),p()};return ue(u),u}function Em(){const n=Y(!1);return Bs()&&wn(()=>{n.value=!0}),n}function Hs(n){const e=Em();return E(()=>(e.value,!!n()))}function Tm(n,e={}){const{immediate:s=!0,fpsLimit:a=void 0,window:t=ye}=e,o=Y(!1),p=a?1e3/a:null;let r=0,c=null;function u(f){if(!o.value||!t)return;const k=f-(r||f);if(p&&k<p){c=t.requestAnimationFrame(u);return}n({delta:k,timestamp:f}),r=f,c=t.requestAnimationFrame(u)}function d(){!o.value&&t&&(o.value=!0,c=t.requestAnimationFrame(u))}function v(){o.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return s&&d(),ue(v),{isActive:Ke(o),pause:v,resume:d}}function bi(n,e={}){const{window:s=ye}=e,a=Hs(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let t;const o=Y(!1),p=u=>{o.value=u.matches},r=()=>{t&&("removeEventListener"in t?t.removeEventListener("change",p):t.removeListener(p))},c=pd(()=>{a.value&&(r(),t=s.matchMedia(Dn(n)),"addEventListener"in t?t.addEventListener("change",p):t.addListener(p),o.value=t.matches)});return ue(()=>{c(),r(),t=void 0}),o}function rl(n,e={}){const{controls:s=!1,navigator:a=hi}=e,t=Hs(()=>a&&"permissions"in a);let o;const p=typeof n=="string"?{name:n}:n,r=Y(),c=()=>{o&&(r.value=o.state)},u=fm(async()=>{if(t.value){if(!o)try{o=await a.permissions.query(p),Nn(o,"change",c),c()}catch{r.value="prompt"}return o}});return u(),s?{state:r,isSupported:t,query:u}:r}function xm(n={}){const{navigator:e=hi,read:s=!1,source:a,copiedDuring:t=1500,legacy:o=!1}=n,p=Hs(()=>e&&"clipboard"in e),r=rl("clipboard-read"),c=rl("clipboard-write"),u=E(()=>p.value||o),d=Y(""),v=Y(!1),f=wm(()=>v.value=!1,t);function k(){p.value&&r.value!=="denied"?e.clipboard.readText().then(y=>{d.value=y}):d.value=S()}u.value&&s&&Nn(["copy","cut"],k);async function b(y=Dn(a)){u.value&&y!=null&&(p.value&&c.value!=="denied"?await e.clipboard.writeText(y):T(y),d.value=y,v.value=!0,f.start())}function T(y){const A=document.createElement("textarea");A.value=y??"",A.style.position="absolute",A.style.opacity="0",document.body.appendChild(A),A.select(),document.execCommand("copy"),A.remove()}function S(){var y,A,w;return(w=(A=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:A.toString())!=null?w:""}return{isSupported:u,text:d,copied:v,copy:b}}const qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ba="__vueuse_ssr_handlers__",Sm=Am();function Am(){return Ba in qa||(qa[Ba]=qa[Ba]||{}),qa[Ba]}function Lm(n,e){return Sm[n]||e}function Rm(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const Pm={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},il="vueuse-storage";function Om(n,e,s,a={}){var t;const{flush:o="pre",deep:p=!0,listenToStorageChanges:r=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:v=ye,eventFilter:f,onError:k=j=>{console.error(j)},initOnMounted:b}=a,T=(d?ve:Y)(typeof e=="function"?e():e);if(!s)try{s=Lm("getDefaultStorage",()=>{var j;return(j=ye)==null?void 0:j.localStorage})()}catch(j){k(j)}if(!s)return T;const S=Dn(e),y=Rm(S),A=(t=a.serializer)!=null?t:Pm[y],{pause:w,resume:x}=bm(T,()=>N(T.value),{flush:o,deep:p,eventFilter:f});return v&&r&&ya(()=>{Nn(v,"storage",C),Nn(v,il,$),b&&C()}),b||C(),T;function N(j){try{if(j==null)s.removeItem(n);else{const H=A.write(j),en=s.getItem(n);en!==H&&(s.setItem(n,H),v&&v.dispatchEvent(new CustomEvent(il,{detail:{key:n,oldValue:en,newValue:H,storageArea:s}})))}}catch(H){k(H)}}function O(j){const H=j?j.newValue:s.getItem(n);if(H==null)return c&&S!=null&&s.setItem(n,A.write(S)),S;if(!j&&u){const en=A.read(H);return typeof u=="function"?u(en,S):y==="object"&&!Array.isArray(en)?{...S,...en}:en}else return typeof H!="string"?H:A.read(H)}function $(j){C(j.detail)}function C(j){if(!(j&&j.storageArea!==s)){if(j&&j.key==null){T.value=S;return}if(!(j&&j.key!==n)){w();try{(j==null?void 0:j.newValue)!==A.write(T.value)&&(T.value=O(j))}catch(H){k(H)}finally{j?cs(x):x()}}}}}function Im(n){return bi("(prefers-color-scheme: dark)",n)}function Dm(n,e,s={}){const{window:a=ye,...t}=s;let o;const p=Hs(()=>a&&"MutationObserver"in a),r=()=>{o&&(o.disconnect(),o=void 0)},c=ln(()=>be(n),v=>{r(),p.value&&a&&v&&(o=new MutationObserver(e),o.observe(v,t))},{immediate:!0}),u=()=>o==null?void 0:o.takeRecords(),d=()=>{r(),c()};return ue(d),{isSupported:p,stop:d,takeRecords:u}}function Vm(n,e,s={}){const{window:a=ye,...t}=s;let o;const p=Hs(()=>a&&"ResizeObserver"in a),r=()=>{o&&(o.disconnect(),o=void 0)},c=E(()=>Array.isArray(n)?n.map(v=>be(v)):[be(n)]),u=ln(c,v=>{if(r(),p.value&&a){o=new ResizeObserver(e);for(const f of v)f&&o.observe(f,t)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{r(),u()};return ue(d),{isSupported:p,stop:d}}function Cm(n,e={width:0,height:0},s={}){const{window:a=ye,box:t="content-box"}=s,o=E(()=>{var v,f;return(f=(v=be(n))==null?void 0:v.namespaceURI)==null?void 0:f.includes("svg")}),p=Y(e.width),r=Y(e.height),{stop:c}=Vm(n,([v])=>{const f=t==="border-box"?v.borderBoxSize:t==="content-box"?v.contentBoxSize:v.devicePixelContentBoxSize;if(a&&o.value){const k=be(n);if(k){const b=a.getComputedStyle(k);p.value=Number.parseFloat(b.width),r.value=Number.parseFloat(b.height)}}else if(f){const k=Array.isArray(f)?f:[f];p.value=k.reduce((b,{inlineSize:T})=>b+T,0),r.value=k.reduce((b,{blockSize:T})=>b+T,0)}else p.value=v.contentRect.width,r.value=v.contentRect.height},s);ya(()=>{const v=be(n);v&&(p.value="offsetWidth"in v?v.offsetWidth:e.width,r.value="offsetHeight"in v?v.offsetHeight:e.height)});const u=ln(()=>be(n),v=>{p.value=v?e.width:0,r.value=v?e.height:0});function d(){c(),u()}return{width:p,height:r,stop:d}}const cl=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Jo(n,e={}){const{document:s=Wo,autoExit:a=!1}=e,t=E(()=>{var y;return(y=be(n))!=null?y:s==null?void 0:s.querySelector("html")}),o=Y(!1),p=E(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(y=>s&&y in s||t.value&&y in t.value)),r=E(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(y=>s&&y in s||t.value&&y in t.value)),c=E(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(y=>s&&y in s||t.value&&y in t.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(y=>s&&y in s),d=Hs(()=>t.value&&s&&p.value!==void 0&&r.value!==void 0&&c.value!==void 0),v=()=>u?(s==null?void 0:s[u])===t.value:!1,f=()=>{if(c.value){if(s&&s[c.value]!=null)return s[c.value];{const y=t.value;if((y==null?void 0:y[c.value])!=null)return!!y[c.value]}}return!1};async function k(){if(!(!d.value||!o.value)){if(r.value)if((s==null?void 0:s[r.value])!=null)await s[r.value]();else{const y=t.value;(y==null?void 0:y[r.value])!=null&&await y[r.value]()}o.value=!1}}async function b(){if(!d.value||o.value)return;f()&&await k();const y=t.value;p.value&&(y==null?void 0:y[p.value])!=null&&(await y[p.value](),o.value=!0)}async function T(){await(o.value?k():b())}const S=()=>{const y=f();(!y||y&&v())&&(o.value=y)};return Nn(s,cl,S,!1),Nn(()=>be(t),cl,S,!1),a&&ue(k),{isSupported:d,isFullscreen:o,enter:b,exit:k,toggle:T}}function Vt(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function g_(n={}){const{controls:e=!1,interval:s="requestAnimationFrame"}=n,a=Y(new Date),t=()=>a.value=new Date,o=s==="requestAnimationFrame"?Tm(t,{immediate:!0}):ym(t,s,{immediate:!0});return e?{now:a,...o}:a}function y_(n,e=is,s={}){const{immediate:a=!0,manual:t=!1,type:o="text/javascript",async:p=!0,crossOrigin:r,referrerPolicy:c,noModule:u,defer:d,document:v=Wo,attrs:f={}}=s,k=Y(null);let b=null;const T=A=>new Promise((w,x)=>{const N=C=>(k.value=C,w(C),C);if(!v){w(!1);return}let O=!1,$=v.querySelector(`script[src="${Dn(n)}"]`);$?$.hasAttribute("data-loaded")&&N($):($=v.createElement("script"),$.type=o,$.async=p,$.src=Dn(n),d&&($.defer=d),r&&($.crossOrigin=r),u&&($.noModule=u),c&&($.referrerPolicy=c),Object.entries(f).forEach(([C,j])=>$==null?void 0:$.setAttribute(C,j)),O=!0),$.addEventListener("error",C=>x(C)),$.addEventListener("abort",C=>x(C)),$.addEventListener("load",()=>{$.setAttribute("data-loaded","true"),e($),N($)}),O&&($=v.head.appendChild($)),A||N($)}),S=(A=!0)=>(b||(b=T(A)),b),y=()=>{if(!v)return;b=null,k.value&&(k.value=null);const A=v.querySelector(`script[src="${Dn(n)}"]`);A&&v.head.removeChild(A)};return a&&!t&&ya(S),t||gm(y),{scriptTag:k,load:S,unload:y}}function gi(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const s=n.parentNode;return!s||s.tagName==="BODY"?!1:gi(s)}}function jm(n){const e=n||window.event,s=e.target;return gi(s)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const Ha=new WeakMap;function yi(n,e=!1){const s=Y(e);let a=null,t;ln(km(n),r=>{const c=Vt(Dn(r));if(c){const u=c;Ha.get(u)||Ha.set(u,t),s.value&&(u.style.overflow="hidden")}},{immediate:!0});const o=()=>{const r=Vt(Dn(n));!r||s.value||(pl&&(a=Nn(r,"touchmove",c=>{jm(c)},{passive:!1})),r.style.overflow="hidden",s.value=!0)},p=()=>{var r;const c=Vt(Dn(n));!c||!s.value||(pl&&(a==null||a()),c.style.overflow=(r=Ha.get(c))!=null?r:"",Ha.delete(c),s.value=!1)};return ue(p),E({get(){return s.value},set(r){r?o():p()}})}let Mm=0;function Nm(n,e={}){const s=Y(!1),{document:a=Wo,immediate:t=!0,manual:o=!1,id:p=`vueuse_styletag_${++Mm}`}=e,r=Y(n);let c=()=>{};const u=()=>{if(!a)return;const v=a.getElementById(p)||a.createElement("style");v.isConnected||(v.id=p,e.media&&(v.media=e.media),a.head.appendChild(v)),!s.value&&(c=ln(r,f=>{v.textContent=f},{immediate:!0}),s.value=!0)},d=()=>{!a||!s.value||(c(),a.head.removeChild(a.getElementById(p)),s.value=!1)};return t&&!o&&ya(u),o||ue(d),{id:p,css:r,unload:d,load:u,isLoaded:Ke(s)}}function $m(n={}){const{window:e=ye,behavior:s="auto"}=n;if(!e)return{x:Y(0),y:Y(0)};const a=Y(e.scrollX),t=Y(e.scrollY),o=E({get(){return a.value},set(r){scrollTo({left:r,behavior:s})}}),p=E({get(){return t.value},set(r){scrollTo({top:r,behavior:s})}});return Nn(e,"scroll",()=>{a.value=e.scrollX,t.value=e.scrollY},{capture:!1,passive:!0}),{x:o,y:p}}function qm(n={}){const{window:e=ye,initialWidth:s=Number.POSITIVE_INFINITY,initialHeight:a=Number.POSITIVE_INFINITY,listenOrientation:t=!0,includeScrollbar:o=!0}=n,p=Y(s),r=Y(a),c=()=>{e&&(o?(p.value=e.innerWidth,r.value=e.innerHeight):(p.value=e.document.documentElement.clientWidth,r.value=e.document.documentElement.clientHeight))};if(c(),ya(c),Nn("resize",c,{passive:!0}),t){const u=bi("(orientation: portrait)");ln(u,()=>c())}return{width:p,height:r}}const wi=({type:n="info",text:e="",vertical:s="top",color:a},{slots:t})=>{var o;return i("span",{class:["badge",n,{diy:a}],style:{verticalAlign:s,...a?{backgroundColor:a}:{}}},((o=t.default)==null?void 0:o.call(t))||e)};wi.displayName="Badge";var Bm=M({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const e=E(()=>{const a=["font-icon icon"],t=`iconfont icon-${n.icon}`;return a.push(t),a}),s=E(()=>{const a={};return n.color&&(a.color=n.color),n.size&&(a["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),ge(a).length?a:null});return()=>n.icon?i("span",{key:n.icon,class:e.value,style:s.value}):null}});const Ei=()=>i(pn,{name:"back-to-top"},()=>[i("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),i("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);Ei.displayName="BackToTopIcon";var Hm=M({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(n){const e=En(),s=ds({"/":{backToTop:"返回顶部"}}),a=ve(),{height:t}=Cm(a),{height:o}=qm(),{y:p}=$m(),r=E(()=>e.value.backToTop!==!1&&p.value>n.threshold),c=E(()=>p.value/(t.value-o.value));return wn(()=>{a.value=document.body}),()=>i(Oe,{name:"fade"},()=>r.value?i("button",{type:"button",class:"back-to-top","aria-label":s.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[n.noProgress?null:i("svg",{class:"scroll-progress"},i("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),i(Ei)]):null)}});const zm=qn({enhance:({app:n})=>{Pe("Badge")||n.component("Badge",wi),Pe("FontIcon")||n.component("FontIcon",Bm)},setup:()=>{Nm(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[()=>i(Hm,{})]});function Ti(n,e,s){var a,t,o;e===void 0&&(e=50),s===void 0&&(s={});var p=(a=s.isImmediate)!=null&&a,r=(t=s.callback)!=null&&t,c=s.maxWait,u=Date.now(),d=[];function v(){if(c!==void 0){var k=Date.now()-u;if(k+e>=c)return c-k}return e}var f=function(){var k=[].slice.call(arguments),b=this;return new Promise(function(T,S){var y=p&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,u=Date.now(),!p){var w=n.apply(b,k);r&&r(w),d.forEach(function(x){return(0,x.resolve)(w)}),d=[]}},v()),y){var A=n.apply(b,k);return r&&r(A),T(A)}d.push({resolve:T,reject:S})})};return f.cancel=function(k){o!==void 0&&clearTimeout(o),d.forEach(function(b){return(0,b.reject)(k)}),d=[]},f}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof window<"u";function Fm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const hn=Object.assign;function Ct(n,e){const s={};for(const a in e){const t=e[a];s[a]=de(t)?t.map(n):n(t)}return s}const ea=()=>{},de=Array.isArray,Wm=/\/$/,Jm=n=>n.replace(Wm,"");function jt(n,e,s="/"){let a,t={},o="",p="";const r=e.indexOf("#");let c=e.indexOf("?");return r<c&&r>=0&&(c=-1),c>-1&&(a=e.slice(0,c),o=e.slice(c+1,r>-1?r:e.length),t=n(o)),r>-1&&(a=a||e.slice(0,r),p=e.slice(r,e.length)),a=Ym(a??e,s),{fullPath:a+(o&&"?")+o+p,path:a,query:t,hash:p}}function Um(n,e){const s=e.query?n(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function ul(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Gm(n,e,s){const a=e.matched.length-1,t=s.matched.length-1;return a>-1&&a===t&&Ds(e.matched[a],s.matched[t])&&xi(e.params,s.params)&&n(e.query)===n(s.query)&&e.hash===s.hash}function Ds(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function xi(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const s in n)if(!Km(n[s],e[s]))return!1;return!0}function Km(n,e){return de(n)?dl(n,e):de(e)?dl(e,n):n===e}function dl(n,e){return de(e)?n.length===e.length&&n.every((s,a)=>s===e[a]):n.length===1&&n[0]===e}function Ym(n,e){if(n.startsWith("/"))return n;if(!n)return e;const s=e.split("/"),a=n.split("/"),t=a[a.length-1];(t===".."||t===".")&&a.push("");let o=s.length-1,p,r;for(p=0;p<a.length;p++)if(r=a[p],r!==".")if(r==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+a.slice(p-(p===a.length?1:0)).join("/")}var ua;(function(n){n.pop="pop",n.push="push"})(ua||(ua={}));var sa;(function(n){n.back="back",n.forward="forward",n.unknown=""})(sa||(sa={}));function Xm(n){if(!n)if(bs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Jm(n)}const Qm=/^[^#]+#/;function Zm(n,e){return n.replace(Qm,"#")+e}function n1(n,e){const s=document.documentElement.getBoundingClientRect(),a=n.getBoundingClientRect();return{behavior:e.behavior,left:a.left-s.left-(e.left||0),top:a.top-s.top-(e.top||0)}}const bt=()=>({left:window.pageXOffset,top:window.pageYOffset});function e1(n){let e;if("el"in n){const s=n.el,a=typeof s=="string"&&s.startsWith("#"),t=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!t)return;e=n1(t,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vl(n,e){return(history.state?history.state.position-e:-1)+n}const eo=new Map;function s1(n,e){eo.set(n,e)}function a1(n){const e=eo.get(n);return eo.delete(n),e}let t1=()=>location.protocol+"//"+location.host;function Si(n,e){const{pathname:s,search:a,hash:t}=e,o=n.indexOf("#");if(o>-1){let r=t.includes(n.slice(o))?n.slice(o).length:1,c=t.slice(r);return c[0]!=="/"&&(c="/"+c),ul(c,"")}return ul(s,n)+a+t}function o1(n,e,s,a){let t=[],o=[],p=null;const r=({state:f})=>{const k=Si(n,location),b=s.value,T=e.value;let S=0;if(f){if(s.value=k,e.value=f,p&&p===b){p=null;return}S=T?f.position-T.position:0}else a(k);t.forEach(y=>{y(s.value,b,{delta:S,type:ua.pop,direction:S?S>0?sa.forward:sa.back:sa.unknown})})};function c(){p=s.value}function u(f){t.push(f);const k=()=>{const b=t.indexOf(f);b>-1&&t.splice(b,1)};return o.push(k),k}function d(){const{history:f}=window;f.state&&f.replaceState(hn({},f.state,{scroll:bt()}),"")}function v(){for(const f of o)f();o=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:v}}function ml(n,e,s,a=!1,t=!1){return{back:n,current:e,forward:s,replaced:a,position:window.history.length,scroll:t?bt():null}}function p1(n){const{history:e,location:s}=window,a={value:Si(n,s)},t={value:e.state};t.value||o(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,u,d){const v=n.indexOf("#"),f=v>-1?(s.host&&document.querySelector("base")?n:n.slice(v))+c:t1()+n+c;try{e[d?"replaceState":"pushState"](u,"",f),t.value=u}catch(k){console.error(k),s[d?"replace":"assign"](f)}}function p(c,u){const d=hn({},e.state,ml(t.value.back,c,t.value.forward,!0),u,{position:t.value.position});o(c,d,!0),a.value=c}function r(c,u){const d=hn({},t.value,e.state,{forward:c,scroll:bt()});o(d.current,d,!0);const v=hn({},ml(a.value,c,null),{position:d.position+1},u);o(c,v,!1),a.value=c}return{location:a,state:t,push:r,replace:p}}function l1(n){n=Xm(n);const e=p1(n),s=o1(n,e.state,e.location,e.replace);function a(o,p=!0){p||s.pauseListeners(),history.go(o)}const t=hn({location:"",base:n,go:a,createHref:Zm.bind(null,n)},e,s);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>e.state.value}),t}function r1(n){return typeof n=="string"||n&&typeof n=="object"}function Ai(n){return typeof n=="string"||typeof n=="symbol"}const Se={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Li=Symbol("");var fl;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(fl||(fl={}));function Vs(n,e){return hn(new Error,{type:n,[Li]:!0},e)}function Ee(n,e){return n instanceof Error&&Li in n&&(e==null||!!(n.type&e))}const kl="[^/]+?",i1={sensitive:!1,strict:!1,start:!0,end:!0},c1=/[.+*?^${}()[\]/\\]/g;function u1(n,e){const s=hn({},i1,e),a=[];let t=s.start?"^":"";const o=[];for(const u of n){const d=u.length?[]:[90];s.strict&&!u.length&&(t+="/");for(let v=0;v<u.length;v++){const f=u[v];let k=40+(s.sensitive?.25:0);if(f.type===0)v||(t+="/"),t+=f.value.replace(c1,"\\$&"),k+=40;else if(f.type===1){const{value:b,repeatable:T,optional:S,regexp:y}=f;o.push({name:b,repeatable:T,optional:S});const A=y||kl;if(A!==kl){k+=10;try{new RegExp(`(${A})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${A}): `+x.message)}}let w=T?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;v||(w=S&&u.length<2?`(?:/${w})`:"/"+w),S&&(w+="?"),t+=w,k+=20,S&&(k+=-8),T&&(k+=-20),A===".*"&&(k+=-50)}d.push(k)}a.push(d)}if(s.strict&&s.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}s.strict||(t+="/?"),s.end?t+="$":s.strict&&(t+="(?:/|$)");const p=new RegExp(t,s.sensitive?"":"i");function r(u){const d=u.match(p),v={};if(!d)return null;for(let f=1;f<d.length;f++){const k=d[f]||"",b=o[f-1];v[b.name]=k&&b.repeatable?k.split("/"):k}return v}function c(u){let d="",v=!1;for(const f of n){(!v||!d.endsWith("/"))&&(d+="/"),v=!1;for(const k of f)if(k.type===0)d+=k.value;else if(k.type===1){const{value:b,repeatable:T,optional:S}=k,y=b in u?u[b]:"";if(de(y)&&!T)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const A=de(y)?y.join("/"):y;if(!A)if(S)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):v=!0);else throw new Error(`Missing required param "${b}"`);d+=A}}return d||"/"}return{re:p,score:a,keys:o,parse:r,stringify:c}}function d1(n,e){let s=0;for(;s<n.length&&s<e.length;){const a=e[s]-n[s];if(a)return a;s++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function v1(n,e){let s=0;const a=n.score,t=e.score;for(;s<a.length&&s<t.length;){const o=d1(a[s],t[s]);if(o)return o;s++}if(Math.abs(t.length-a.length)===1){if(_l(a))return 1;if(_l(t))return-1}return t.length-a.length}function _l(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const m1={type:0,value:""},f1=/[a-zA-Z0-9_]/;function k1(n){if(!n)return[[]];if(n==="/")return[[m1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(k){throw new Error(`ERR (${s})/"${u}": ${k}`)}let s=0,a=s;const t=[];let o;function p(){o&&t.push(o),o=[]}let r=0,c,u="",d="";function v(){u&&(s===0?o.push({type:0,value:u}):s===1||s===2||s===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;r<n.length;){if(c=n[r++],c==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:c==="/"?(u&&v(),p()):c===":"?(v(),s=1):f();break;case 4:f(),s=a;break;case 1:c==="("?s=2:f1.test(c)?f():(v(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:v(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&r--,d="";break;default:e("Unknown state");break}}return s===2&&e(`Unfinished custom RegExp for param "${u}"`),v(),p(),t}function _1(n,e,s){const a=u1(k1(n.path),s),t=hn(a,{record:n,parent:e,children:[],alias:[]});return e&&!t.record.aliasOf==!e.record.aliasOf&&e.children.push(t),t}function h1(n,e){const s=[],a=new Map;e=gl({strict:!1,end:!0,sensitive:!1},e);function t(d){return a.get(d)}function o(d,v,f){const k=!f,b=b1(d);b.aliasOf=f&&f.record;const T=gl(e,d),S=[b];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of w)S.push(hn({},b,{components:f?f.record.components:b.components,path:x,aliasOf:f?f.record:b}))}let y,A;for(const w of S){const{path:x}=w;if(v&&x[0]!=="/"){const N=v.record.path,O=N[N.length-1]==="/"?"":"/";w.path=v.record.path+(x&&O+x)}if(y=_1(w,v,T),f?f.alias.push(y):(A=A||y,A!==y&&A.alias.push(y),k&&d.name&&!bl(y)&&p(d.name)),b.children){const N=b.children;for(let O=0;O<N.length;O++)o(N[O],y,f&&f.children[O])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return A?()=>{p(A)}:ea}function p(d){if(Ai(d)){const v=a.get(d);v&&(a.delete(d),s.splice(s.indexOf(v),1),v.children.forEach(p),v.alias.forEach(p))}else{const v=s.indexOf(d);v>-1&&(s.splice(v,1),d.record.name&&a.delete(d.record.name),d.children.forEach(p),d.alias.forEach(p))}}function r(){return s}function c(d){let v=0;for(;v<s.length&&v1(d,s[v])>=0&&(d.record.path!==s[v].record.path||!Ri(d,s[v]));)v++;s.splice(v,0,d),d.record.name&&!bl(d)&&a.set(d.record.name,d)}function u(d,v){let f,k={},b,T;if("name"in d&&d.name){if(f=a.get(d.name),!f)throw Vs(1,{location:d});T=f.record.name,k=hn(hl(v.params,f.keys.filter(A=>!A.optional).map(A=>A.name)),d.params&&hl(d.params,f.keys.map(A=>A.name))),b=f.stringify(k)}else if("path"in d)b=d.path,f=s.find(A=>A.re.test(b)),f&&(k=f.parse(b),T=f.record.name);else{if(f=v.name?a.get(v.name):s.find(A=>A.re.test(v.path)),!f)throw Vs(1,{location:d,currentLocation:v});T=f.record.name,k=hn({},v.params,d.params),b=f.stringify(k)}const S=[];let y=f;for(;y;)S.unshift(y.record),y=y.parent;return{name:T,path:b,params:k,matched:S,meta:y1(S)}}return n.forEach(d=>o(d)),{addRoute:o,resolve:u,removeRoute:p,getRoutes:r,getRecordMatcher:t}}function hl(n,e){const s={};for(const a of e)a in n&&(s[a]=n[a]);return s}function b1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:g1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function g1(n){const e={},s=n.props||!1;if("component"in n)e.default=s;else for(const a in n.components)e[a]=typeof s=="object"?s[a]:s;return e}function bl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function y1(n){return n.reduce((e,s)=>hn(e,s.meta),{})}function gl(n,e){const s={};for(const a in n)s[a]=a in e?e[a]:n[a];return s}function Ri(n,e){return e.children.some(s=>s===n||Ri(n,s))}const Pi=/#/g,w1=/&/g,E1=/\//g,T1=/=/g,x1=/\?/g,Oi=/\+/g,S1=/%5B/g,A1=/%5D/g,Ii=/%5E/g,L1=/%60/g,Di=/%7B/g,R1=/%7C/g,Vi=/%7D/g,P1=/%20/g;function Uo(n){return encodeURI(""+n).replace(R1,"|").replace(S1,"[").replace(A1,"]")}function O1(n){return Uo(n).replace(Di,"{").replace(Vi,"}").replace(Ii,"^")}function so(n){return Uo(n).replace(Oi,"%2B").replace(P1,"+").replace(Pi,"%23").replace(w1,"%26").replace(L1,"`").replace(Di,"{").replace(Vi,"}").replace(Ii,"^")}function I1(n){return so(n).replace(T1,"%3D")}function D1(n){return Uo(n).replace(Pi,"%23").replace(x1,"%3F")}function V1(n){return n==null?"":D1(n).replace(E1,"%2F")}function ot(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function C1(n){const e={};if(n===""||n==="?")return e;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let t=0;t<a.length;++t){const o=a[t].replace(Oi," "),p=o.indexOf("="),r=ot(p<0?o:o.slice(0,p)),c=p<0?null:ot(o.slice(p+1));if(r in e){let u=e[r];de(u)||(u=e[r]=[u]),u.push(c)}else e[r]=c}return e}function yl(n){let e="";for(let s in n){const a=n[s];if(s=I1(s),a==null){a!==void 0&&(e+=(e.length?"&":"")+s);continue}(de(a)?a.map(o=>o&&so(o)):[a&&so(a)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+s,o!=null&&(e+="="+o))})}return e}function j1(n){const e={};for(const s in n){const a=n[s];a!==void 0&&(e[s]=de(a)?a.map(t=>t==null?null:""+t):a==null?a:""+a)}return e}const M1=Symbol(""),wl=Symbol(""),gt=Symbol(""),Go=Symbol(""),ao=Symbol("");function Us(){let n=[];function e(a){return n.push(a),()=>{const t=n.indexOf(a);t>-1&&n.splice(t,1)}}function s(){n=[]}return{add:e,list:()=>n.slice(),reset:s}}function He(n,e,s,a,t){const o=a&&(a.enterCallbacks[t]=a.enterCallbacks[t]||[]);return()=>new Promise((p,r)=>{const c=v=>{v===!1?r(Vs(4,{from:s,to:e})):v instanceof Error?r(v):r1(v)?r(Vs(2,{from:e,to:v})):(o&&a.enterCallbacks[t]===o&&typeof v=="function"&&o.push(v),p())},u=n.call(a&&a.instances[t],e,s,c);let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(v=>r(v))})}function Mt(n,e,s,a){const t=[];for(const o of n)for(const p in o.components){let r=o.components[p];if(!(e!=="beforeRouteEnter"&&!o.instances[p]))if(N1(r)){const u=(r.__vccOpts||r)[e];u&&t.push(He(u,s,a,o,p))}else{let c=r();t.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${o.path}"`));const d=Fm(u)?u.default:u;o.components[p]=d;const f=(d.__vccOpts||d)[e];return f&&He(f,s,a,o,p)()}))}}return t}function N1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function to(n){const e=kn(gt),s=kn(Go),a=E(()=>e.resolve(as(n.to))),t=E(()=>{const{matched:c}=a.value,{length:u}=c,d=c[u-1],v=s.matched;if(!d||!v.length)return-1;const f=v.findIndex(Ds.bind(null,d));if(f>-1)return f;const k=El(c[u-2]);return u>1&&El(d)===k&&v[v.length-1].path!==k?v.findIndex(Ds.bind(null,c[u-2])):f}),o=E(()=>t.value>-1&&B1(s.params,a.value.params)),p=E(()=>t.value>-1&&t.value===s.matched.length-1&&xi(s.params,a.value.params));function r(c={}){return q1(c)?e[as(n.replace)?"replace":"push"](as(n.to)).catch(ea):Promise.resolve()}return{route:a,href:E(()=>a.value.href),isActive:o,isExactActive:p,navigate:r}}const $1=M({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(n,{slots:e}){const s=fa(to(n)),{options:a}=kn(gt),t=E(()=>({[Tl(n.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[Tl(n.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=e.default&&e.default(s);return n.custom?o:i("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:t.value},o)}}}),Cn=$1;function q1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function B1(n,e){for(const s in e){const a=e[s],t=n[s];if(typeof a=="string"){if(a!==t)return!1}else if(!de(t)||t.length!==a.length||a.some((o,p)=>o!==t[p]))return!1}return!0}function El(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Tl=(n,e,s)=>n??e??s,H1=M({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:s}){const a=kn(ao),t=E(()=>n.route||a.value),o=kn(wl,0),p=E(()=>{let u=as(o);const{matched:d}=t.value;let v;for(;(v=d[u])&&!v.components;)u++;return u}),r=E(()=>t.value.matched[p.value]);ee(wl,E(()=>p.value+1)),ee(M1,r),ee(ao,t);const c=Y();return ln(()=>[c.value,r.value,n.name],([u,d,v],[f,k,b])=>{d&&(d.instances[v]=u,k&&k!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=k.leaveGuards),d.updateGuards.size||(d.updateGuards=k.updateGuards))),u&&d&&(!k||!Ds(d,k)||!f)&&(d.enterCallbacks[v]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=t.value,d=n.name,v=r.value,f=v&&v.components[d];if(!f)return xl(s.default,{Component:f,route:u});const k=v.props[d],b=k?k===!0?u.params:typeof k=="function"?k(u):k:null,S=i(f,hn({},b,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(v.instances[d]=null)},ref:c}));return xl(s.default,{Component:S,route:u})||S}}});function xl(n,e){if(!n)return null;const s=n(e);return s.length===1?s[0]:s}const Ci=H1;function z1(n){const e=h1(n.routes,n),s=n.parseQuery||C1,a=n.stringifyQuery||yl,t=n.history,o=Us(),p=Us(),r=Us(),c=ve(Se);let u=Se;bs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ct.bind(null,R=>""+R),v=Ct.bind(null,V1),f=Ct.bind(null,ot);function k(R,W){let B,X;return Ai(R)?(B=e.getRecordMatcher(R),X=W):X=R,e.addRoute(X,B)}function b(R){const W=e.getRecordMatcher(R);W&&e.removeRoute(W)}function T(){return e.getRoutes().map(R=>R.record)}function S(R){return!!e.getRecordMatcher(R)}function y(R,W){if(W=hn({},W||c.value),typeof R=="string"){const g=jt(s,R,W.path),L=e.resolve({path:g.path},W),P=t.createHref(g.fullPath);return hn(g,L,{params:f(L.params),hash:ot(g.hash),redirectedFrom:void 0,href:P})}let B;if("path"in R)B=hn({},R,{path:jt(s,R.path,W.path).path});else{const g=hn({},R.params);for(const L in g)g[L]==null&&delete g[L];B=hn({},R,{params:v(g)}),W.params=v(W.params)}const X=e.resolve(B,W),_n=R.hash||"";X.params=d(f(X.params));const _=Um(a,hn({},R,{hash:O1(_n),path:X.path})),h=t.createHref(_);return hn({fullPath:_,hash:_n,query:a===yl?j1(R.query):R.query||{}},X,{redirectedFrom:void 0,href:h})}function A(R){return typeof R=="string"?jt(s,R,c.value.path):hn({},R)}function w(R,W){if(u!==R)return Vs(8,{from:W,to:R})}function x(R){return $(R)}function N(R){return x(hn(A(R),{replace:!0}))}function O(R){const W=R.matched[R.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let X=typeof B=="function"?B(R):B;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=A(X):{path:X},X.params={}),hn({query:R.query,hash:R.hash,params:"path"in X?{}:R.params},X)}}function $(R,W){const B=u=y(R),X=c.value,_n=R.state,_=R.force,h=R.replace===!0,g=O(B);if(g)return $(hn(A(g),{state:typeof g=="object"?hn({},_n,g.state):_n,force:_,replace:h}),W||B);const L=B;L.redirectedFrom=W;let P;return!_&&Gm(a,X,B)&&(P=Vs(16,{to:L,from:X}),fe(X,X,!0,!1)),(P?Promise.resolve(P):H(L,X)).catch(I=>Ee(I)?Ee(I,2)?I:Ve(I):G(I,L,X)).then(I=>{if(I){if(Ee(I,2))return $(hn({replace:h},A(I.to),{state:typeof I.to=="object"?hn({},_n,I.to.state):_n,force:_}),W||L)}else I=z(L,X,!0,h,_n);return en(L,X,I),I})}function C(R,W){const B=w(R,W);return B?Promise.reject(B):Promise.resolve()}function j(R){const W=fs.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(R):R()}function H(R,W){let B;const[X,_n,_]=F1(R,W);B=Mt(X.reverse(),"beforeRouteLeave",R,W);for(const g of X)g.leaveGuards.forEach(L=>{B.push(He(L,R,W))});const h=C.bind(null,R,W);return B.push(h),jn(B).then(()=>{B=[];for(const g of o.list())B.push(He(g,R,W));return B.push(h),jn(B)}).then(()=>{B=Mt(_n,"beforeRouteUpdate",R,W);for(const g of _n)g.updateGuards.forEach(L=>{B.push(He(L,R,W))});return B.push(h),jn(B)}).then(()=>{B=[];for(const g of _)if(g.beforeEnter)if(de(g.beforeEnter))for(const L of g.beforeEnter)B.push(He(L,R,W));else B.push(He(g.beforeEnter,R,W));return B.push(h),jn(B)}).then(()=>(R.matched.forEach(g=>g.enterCallbacks={}),B=Mt(_,"beforeRouteEnter",R,W),B.push(h),jn(B))).then(()=>{B=[];for(const g of p.list())B.push(He(g,R,W));return B.push(h),jn(B)}).catch(g=>Ee(g,8)?g:Promise.reject(g))}function en(R,W,B){r.list().forEach(X=>j(()=>X(R,W,B)))}function z(R,W,B,X,_n){const _=w(R,W);if(_)return _;const h=W===Se,g=bs?history.state:{};B&&(X||h?t.replace(R.fullPath,hn({scroll:h&&g&&g.scroll},_n)):t.push(R.fullPath,_n)),c.value=R,fe(R,W,B,h),Ve()}let nn;function Sn(){nn||(nn=t.listen((R,W,B)=>{if(!Ra.listening)return;const X=y(R),_n=O(X);if(_n){$(hn(_n,{replace:!0}),X).catch(ea);return}u=X;const _=c.value;bs&&s1(vl(_.fullPath,B.delta),bt()),H(X,_).catch(h=>Ee(h,12)?h:Ee(h,2)?($(h.to,X).then(g=>{Ee(g,20)&&!B.delta&&B.type===ua.pop&&t.go(-1,!1)}).catch(ea),Promise.reject()):(B.delta&&t.go(-B.delta,!1),G(h,X,_))).then(h=>{h=h||z(X,_,!1),h&&(B.delta&&!Ee(h,8)?t.go(-B.delta,!1):B.type===ua.pop&&Ee(h,20)&&t.go(-1,!1)),en(X,_,h)}).catch(ea)}))}let An=Us(),K=Us(),tn;function G(R,W,B){Ve(R);const X=K.list();return X.length?X.forEach(_n=>_n(R,W,B)):console.error(R),Promise.reject(R)}function oe(){return tn&&c.value!==Se?Promise.resolve():new Promise((R,W)=>{An.add([R,W])})}function Ve(R){return tn||(tn=!R,Sn(),An.list().forEach(([W,B])=>R?B(R):W()),An.reset()),R}function fe(R,W,B,X){const{scrollBehavior:_n}=n;if(!bs||!_n)return Promise.resolve();const _=!B&&a1(vl(R.fullPath,0))||(X||!B)&&history.state&&history.state.scroll||null;return cs().then(()=>_n(R,W,_)).then(h=>h&&e1(h)).catch(h=>G(h,R,W))}const Bn=R=>t.go(R);let ms;const fs=new Set,Ra={currentRoute:c,listening:!0,addRoute:k,removeRoute:b,hasRoute:S,getRoutes:T,resolve:y,options:n,push:x,replace:N,go:Bn,back:()=>Bn(-1),forward:()=>Bn(1),beforeEach:o.add,beforeResolve:p.add,afterEach:r.add,onError:K.add,isReady:oe,install(R){const W=this;R.component("RouterLink",Cn),R.component("RouterView",Ci),R.config.globalProperties.$router=W,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>as(c)}),bs&&!ms&&c.value===Se&&(ms=!0,x(t.location).catch(_n=>{}));const B={};for(const _n in Se)Object.defineProperty(B,_n,{get:()=>c.value[_n],enumerable:!0});R.provide(gt,W),R.provide(Go,sr(B)),R.provide(ao,c);const X=R.unmount;fs.add(R),R.unmount=function(){fs.delete(R),fs.size<1&&(u=Se,nn&&nn(),nn=null,c.value=Se,ms=!1,tn=!1),X()}}};function jn(R){return R.reduce((W,B)=>W.then(()=>j(B)),Promise.resolve())}return Ra}function F1(n,e){const s=[],a=[],t=[],o=Math.max(e.matched.length,n.matched.length);for(let p=0;p<o;p++){const r=e.matched[p];r&&(n.matched.find(u=>Ds(u,r))?a.push(r):s.push(r));const c=n.matched[p];c&&(e.matched.find(u=>Ds(u,c))||t.push(c))}return[s,a,t]}function Xn(){return kn(gt)}function me(){return kn(Go)}const W1=({headerLinkSelector:n,headerAnchorSelector:e,delay:s,offset:a=5})=>{const t=Xn(),p=Ti(()=>{var T,S;const r=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(r-0)<a){Sl(t,"");return}const u=window.innerHeight+r,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),v=Math.abs(d-u)<a,f=Array.from(document.querySelectorAll(n)),b=Array.from(document.querySelectorAll(e)).filter(y=>f.some(A=>A.hash===y.hash));for(let y=0;y<b.length;y++){const A=b[y],w=b[y+1],x=r>=(((T=A.parentElement)==null?void 0:T.offsetTop)??0)-a,N=!w||r<(((S=w.parentElement)==null?void 0:S.offsetTop)??0)-a;if(!(x&&N))continue;const $=decodeURIComponent(t.currentRoute.value.hash),C=decodeURIComponent(A.hash);if($===C)return;if(v){for(let j=y+1;j<b.length;j++)if($===decodeURIComponent(b[j].hash))return}Sl(t,C);return}},s);wn(()=>{window.addEventListener("scroll",p)}),Do(()=>{window.removeEventListener("scroll",p)})},Sl=async(n,e)=>{const{scrollBehavior:s}=n.options;n.options.scrollBehavior=void 0,await n.replace({query:n.currentRoute.value.query,hash:e,force:!0}).finally(()=>n.options.scrollBehavior=s)},J1=".sidebar-link, .toc-link",U1=".header-anchor",G1=200,K1=5,Y1=qn({setup(){W1({headerLinkSelector:J1,headerAnchorSelector:U1,delay:G1,offset:K1})}});let ji=()=>null;const Mi=Symbol(""),X1=n=>{ji=n},Q1=()=>kn(Mi),Z1=n=>{n.provide(Mi,ji)};var nf=M({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(n){const e=Q1(),s=ds({"/":{title:"目录",empty:"暂无目录"}}),a=dn(),t=Xn(),o=Qr(),p=u=>{const d=u.I;return typeof d>"u"||d},r=()=>{const u=n.base||a.value.path.replace(/\/[^/]+$/,"/"),d=t.getRoutes(),v=[];return d.filter(({meta:f,path:k})=>{if(!ia(k,u)||k===u)return!1;if(u==="/"){const b=ge(o.value.locales).filter(T=>T!=="/");if(k==="/404.html"||b.some(T=>ia(k,T)))return!1}return(hs(k,".html")&&!hs(k,"/index.html")||hs(k,"/"))&&p(f)}).map(({path:f,meta:k})=>{const b=f.substring(u.length).split("/").length;return{title:k.t||"",icon:k.i,base:f.replace(/\/[^/]+\/?$/,"/"),order:k.O||null,level:hs(f,"/")?b-1:b,path:f}}).filter(({title:f,level:k})=>f&&k<=n.level).sort(({title:f,level:k,path:b,order:T},{title:S,level:y,path:A,order:w})=>k-y||(hs(b,"/index.html")?-1:hs(A,"/index.html")?1:T===null?w===null?f.localeCompare(S):w:w===null?T:T>0?w>0?T-w:-1:w<0?T-w:1)).forEach(f=>{var k;const{base:b,level:T}=f;switch(T){case 1:v.push(f);break;case 2:{const S=v.find(y=>y.path===b);S&&(S.children??(S.children=[])).push(f);break}default:{const S=v.find(y=>y.path===b.replace(/\/[^/]+\/$/,"/"));if(S){const y=(k=S.children)==null?void 0:k.find(A=>A.path===b);y&&(y.children??(y.children=[])).push(f)}}}}),v},c=E(()=>r());return()=>i("div",{class:"auto-catalog-wrapper"},[i("h2",{class:"main-title"},s.value.title),c.value.length?c.value.map(({children:u=[],icon:d,path:v,title:f},k)=>[i("h3",{id:f,class:["child-title",{"has-children":u.length}]},[i("a",{href:`#${f}`,class:"header-anchor"},"#"),i(Cn,{class:"catalog-title",to:v},()=>[n.index?`${k+1}.`:null,d&&e?i(e,{icon:d}):null,f||"Unknown"])]),u.length?i("ul",{class:"child-catalog-wrapper"},u.map(({children:b=[],icon:T,path:S,title:y},A)=>i("li",{class:"child-catalog-item"},[i("div",{class:["sub-title",{"has-children":b.length}]},[i("a",{href:`#${y}`,class:"header-anchor"},"#"),i(Cn,{class:"catalog-title",to:S},()=>[n.index?`${k+1}.${A+1}`:null,T&&e?i(e,{icon:T}):null,y||"Unknown"])]),b.length?i("div",{class:"sub-catalog-wrapper"},b.map(({icon:w,path:x,title:N},O)=>i(Cn,{class:"sub-catalog-item",to:x},()=>[n.index?`${k+1}.${A+1}.${O+1}`:null,w&&e?i(e,{icon:w}):null,N||"Unknown"]))):null]))):null]):i("p",{class:"empty-catalog"},s.value.empty)])}}),ef=qn({enhance:({app:n})=>{Z1(n),Pe("AutoCatalog",n)||n.component("AutoCatalog",nf)}});const sf=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Ni=M({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const e=we(),s=E(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>i("span",[sf,i("span",{class:"external-link-icon-sr-only"},s.value.openInNewWindow)])}}),af={},tf=qn({enhance({app:n}){n.component("ExternalLinkIcon",i(Ni,{locales:af}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const vn={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=vn.isStarted();n=Nt(n,vn.settings.minimum,1),vn.status=n===1?null:n;const s=vn.render(!e),a=s.querySelector(vn.settings.barSelector),t=vn.settings.speed,o=vn.settings.easing;return s.offsetWidth,of(p=>{za(a,{transform:"translate3d("+Al(n)+"%,0,0)",transition:"all "+t+"ms "+o}),n===1?(za(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(function(){za(s,{transition:"all "+t+"ms linear",opacity:"0"}),setTimeout(function(){vn.remove(),p()},t)},t)):setTimeout(()=>p(),t)}),vn},isStarted:()=>typeof vn.status=="number",start:()=>{vn.status||vn.set(0);const n=()=>{setTimeout(()=>{vn.status&&(vn.trickle(),n())},vn.settings.trickleSpeed)};return vn.settings.trickle&&n(),vn},done:n=>!n&&!vn.status?vn:vn.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=vn.status;return e?(typeof n!="number"&&(n=(1-e)*Nt(Math.random()*e,.1,.95)),e=Nt(e+n,0,.994),vn.set(e)):vn.start()},trickle:()=>vn.inc(Math.random()*vn.settings.trickleRate),render:n=>{if(vn.isRendered())return document.getElementById("nprogress");Ll(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=vn.settings.template;const s=e.querySelector(vn.settings.barSelector),a=n?"-100":Al(vn.status||0),t=document.querySelector(vn.settings.parent);return za(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),t!==document.body&&Ll(t,"nprogress-custom-parent"),t==null||t.appendChild(e),e},remove:()=>{Rl(document.documentElement,"nprogress-busy"),Rl(document.querySelector(vn.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&pf(n)},isRendered:()=>!!document.getElementById("nprogress")},Nt=(n,e,s)=>n<e?e:n>s?s:n,Al=n=>(-1+n)*100,of=function(){const n=[];function e(){const s=n.shift();s&&s(e)}return function(s){n.push(s),n.length===1&&e()}}(),za=function(){const n=["Webkit","O","Moz","ms"],e={};function s(p){return p.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(r,c){return c.toUpperCase()})}function a(p){const r=document.body.style;if(p in r)return p;let c=n.length;const u=p.charAt(0).toUpperCase()+p.slice(1);let d;for(;c--;)if(d=n[c]+u,d in r)return d;return p}function t(p){return p=s(p),e[p]??(e[p]=a(p))}function o(p,r,c){r=t(r),p.style[r]=c}return function(p,r){for(const c in r){const u=r[c];u!==void 0&&Object.prototype.hasOwnProperty.call(r,c)&&o(p,c,u)}}}(),$i=(n,e)=>(typeof n=="string"?n:Ko(n)).indexOf(" "+e+" ")>=0,Ll=(n,e)=>{const s=Ko(n),a=s+e;$i(s,e)||(n.className=a.substring(1))},Rl=(n,e)=>{const s=Ko(n);if(!$i(n,e))return;const a=s.replace(" "+e+" "," ");n.className=a.substring(1,a.length-1)},Ko=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),pf=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)};const lf=()=>{wn(()=>{const n=Xn(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(s=>{e.has(s.path)||vn.start()}),n.afterEach(s=>{e.add(s.path),vn.done()})})},rf=qn({setup(){lf()}}),cf=JSON.parse('{"encrypt":{},"author":{"name":"dselegent","url":"https://blog.dselegent.icu"},"logo":"/logo.png","breadcrumb":true,"contributors":false,"lastUpdated":true,"editLink":true,"darkmode":"toggle","themeColor":false,"repo":"dselegent/dselegent-blog","docsRepo":"https://github.com/dselegent/dselegent-blog","docsBranch":"main","docsDir":"docs","editLinkPattern":":repo/edit/:branch/:path","repoLabel":"GitHub","repoDisplay":true,"navbarLayout":{"start":["Brand","Search"],"center":["Links"],"end":["Repo","Outlook"]},"displayFooter":true,"pageInfo":["Category","Tag","Word","ReadingTime","PageView"],"blog":{"articleInfo":["Date","PageView","Category","Tag","ReadingTime"],"name":"dselegent","avatar":"/avatar.png","description":"迷信新工具，热衷于研究开源软件，定期分享探索成果","intro":"/intro.html","roundAvatar":true,"medias":{"GitHub":"https://github.com/dselegent","Gitee":"https://gitee.com/dselegent","QQ":"https://i0.hdslb.com/bfs/album/93b93def4e70622a4f53d86cd06be2af72c5c845.png","Wechat":"https://i0.hdslb.com/bfs/album/c8869ecfc0fcae869a2b6999d3e56b6c3abf3227.png","Email":"mailto:1799661558@qq.com","Gmail":"mailto:dselegent@gmail.com","BiliBili":"https://space.bilibili.com/95443509"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"主页","icon":"home","link":"/"},{"text":"页面开发","icon":"network","prefix":"/","children":["web/VuePress","web/docsify","deploy/VPS"]},{"text":"应用","icon":"app","prefix":"/apps/","children":["Applist","ChatGPT","design","AppNotes","Chrome"]},{"text":"专业知识","icon":"computer","prefix":"/professional_knowledge/","children":[{"text":"计算机网络","icon":"network","link":"computer_network/01.html"},{"text":"软件工程","icon":"repair","link":"software_engineer/01.html"}]},{"text":"前端","icon":"html","prefix":"/front_end/","children":[{"text":"基础三剑客","prefix":"front_end_base/","children":[{"text":"html/css","icon":"html","link":"html_css/01.html"},{"text":"javascript","icon":"javascript","link":"javascript/01.html"}]},{"text":"css提高","prefix":"css_advanced/","children":[{"text":"less","icon":"css","link":"less/01.html"},{"text":"scss","icon":"css","link":"scss/01.html"},{"text":"tailwind","icon":"css","link":"tailwind/01.html"}]},{"text":"js提高","prefix":"js_advanced/","children":[{"text":"es6","icon":"es6","link":"es6/01.html"},{"text":"ajax","icon":"ajax","link":"ajax/01.html"},{"text":"echarts","icon":"javascript","link":"echarts/01.html"},{"text":"webpack","icon":"javascript","link":"webpack/01.html"},{"text":"typescript","icon":"typescript","link":"typescript/01.html"}]},{"text":"框架","prefix":"front_end_framework/","children":[{"text":"vue2","icon":"vue","link":"vue2/01.html"},{"text":"vue3","icon":"vue","link":"vue3/01.html"},{"text":"uniapp","icon":"wechat","link":"uniapp/01.html"},{"text":"react","icon":"react","link":"react/01.html"}]},{"text":"其它","prefix":"other/","children":[{"text":"electron","icon":"javascript","link":"electron/01.html"}]}]},{"text":"服务端","prefix":"/back_end/","icon":"page","children":[{"text":"nodeJs","icon":"nodeJS","link":"nodeJs/01.html"},{"text":"linux","icon":"linux","link":"linux/01.html"},{"text":"数据库","prefix":"database/","children":[{"text":"mysql","icon":"mysql","link":"mysql/01.html"},{"text":"mongodb","icon":"mysql","link":"mongodb/01.html"}]}]},{"text":"工具","icon":"tool","prefix":"/tool/","children":[{"text":"git","icon":"git","link":"git/01.html"},{"text":"前端代码规范化","prefix":"lint/","children":[{"text":"JS 代码规范","icon":"javascript","link":"01.html"},{"text":"CSS 代码规范","icon":"css","link":"02.html"},{"text":"Git 规范化","icon":"git","link":"03.html"}]},{"text":"软件推荐与配置","prefix":"efficiency/","children":[{"text":"多平台软件","link":"software/cross-platform.html"},{"text":"windows","link":"software/windows.html"},{"text":"browser","link":"software/browser.html"},{"text":"vscode","link":"software/vscode.html"},{"text":"webstorm","link":"software/webstorm.html"},{"text":"在线工具","link":"online-tools.html"},{"text":"书签脚本","link":"bookmark-scripts.html"}]}]},{"text":"笔记","icon":"note","link":"https://github.com/dselegent/Learning-Notes"}],"sidebar":{"/web/":[{"text":"🌐 页面开发","children":"structure"}],"/apps/":[{"text":"🧰 应用手册","children":"structure"}],"/professional_knowledge/":[{"text":"计算机网络","icon":"network","prefix":"computer_network/","children":"structure"},{"text":"软件工程","icon":"repair","prefix":"software_engineer/","children":"structure"}],"/front_end/":[{"text":"基础三剑客","icon":"","prefix":"front_end_base/","link":"","children":[{"text":"html_css","icon":"html","prefix":"html_css/","collapsible":true,"children":"structure"},{"text":"javascript","icon":"javascript","prefix":"javascript/","collapsible":true,"children":"structure"}]},{"text":"css提高","icon":"","prefix":"css_advanced/","link":"","children":[{"text":"less","icon":"css","prefix":"less/","collapsible":true,"children":"structure"},{"text":"scss","icon":"css","prefix":"scss/","collapsible":true,"children":"structure"},{"text":"tailwind","icon":"css","prefix":"tailwind/","collapsible":true,"children":"structure"}]},{"text":"js提高","icon":"","prefix":"js_advanced/","link":"","children":[{"text":"es6","icon":"es6","prefix":"es6/","collapsible":true,"children":"structure"},{"text":"ajax","icon":"ajax","prefix":"ajax/","collapsible":true,"children":"structure"},{"text":"echarts","icon":"javascript","prefix":"echarts/","collapsible":true,"children":"structure"},{"text":"webpack","icon":"javascript","prefix":"webpack/","collapsible":true,"children":"structure"},{"text":"typescript","icon":"typescript","prefix":"typescript/","collapsible":true,"children":"structure"}]},{"text":"框架","icon":"","prefix":"front_end_framework/","link":"","children":[{"text":"vue2","icon":"vue","prefix":"vue2/","collapsible":true,"children":"structure"},{"text":"vue3","icon":"vue","prefix":"vue3/","collapsible":true,"children":"structure"},{"text":"uniapp","icon":"wechat","prefix":"uniapp/","collapsible":true,"children":"structure"},{"text":"react","icon":"react","prefix":"react/","collapsible":true,"children":"structure"}]},{"text":"其它","icon":"","prefix":"other/","link":"","children":[{"text":"electron","icon":"javascript","prefix":"electron/","collapsible":true,"children":"structure"}]}],"/back_end/":[{"text":"nodeJs","icon":"nodeJS","prefix":"nodeJs/","link":"","collapsible":true,"children":"structure"},{"text":"linux","icon":"linux","prefix":"linux/","link":"","collapsible":true,"children":"structure"},{"text":"数据库","icon":"","prefix":"database/","link":"","children":[{"text":"mysql","icon":"mysql","prefix":"mysql/","link":"","collapsible":true,"children":"structure"},{"text":"mongodb","icon":"mysql","prefix":"mongodb/","link":"","collapsible":true,"children":"structure"}]}],"/tool/":[{"text":"git","icon":"git","prefix":"git/","collapsible":true,"children":"structure"},{"text":"前端代码规范化","icon":"","prefix":"lint/","link":"","children":[{"text":"JS 代码规范","icon":"javascript","link":"01.html"},{"text":"CSS 代码规范","icon":"css","link":"02.html"},{"text":"Git 规范化","icon":"git","link":"03.html"}]},{"text":"软件推荐与配置","prefix":"efficiency/","children":[{"text":"多平台软件","link":"software/cross-platform.html"},{"text":"windows","link":"software/windows.html"},{"text":"browser","link":"software/browser.html"},{"text":"vscode","link":"software/vscode.html"},{"text":"webstorm","link":"software/webstorm.html"},{"text":"在线工具","link":"online-tools.html"},{"text":"书签脚本","link":"bookmark-scripts.html"}]}]}}}}'),uf=Y(cf),qi=()=>uf,Bi=Symbol(""),df=()=>{const n=kn(Bi);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},vf=(n,e)=>{const{locales:s,...a}=n;return{...a,...s==null?void 0:s[e]}},mf=qn({enhance({app:n}){const e=qi(),s=n._context.provides[Bo],a=E(()=>vf(e.value,s.value));n.provide(Bi,a),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return a.value}}})}}),ff={"Content-Type":"application/json"},kf=({serverURL:n,lang:e,paths:s,signal:a})=>(({serverURL:t,lang:o,paths:p,type:r,signal:c})=>fetch(`${t}/article?path=${encodeURIComponent(p.join(","))}&type=${encodeURIComponent(r.join(","))}&lang=${o}`,{signal:c}).then(u=>u.json()))({serverURL:n,lang:e,paths:s,type:["time"],signal:a}).then(t=>Array.isArray(t)?t:[t]),_f=n=>(({serverURL:e,lang:s,path:a,type:t,action:o})=>fetch(`${e}/article?lang=${s}`,{method:"POST",headers:ff,body:JSON.stringify({path:a,type:t,action:o})}).then(p=>p.json()))({...n,type:"time",action:"inc"}),Pl=n=>{const e=((s="")=>s.replace(/\/$/u,""))(n);return/^(https?:)?\/\//.test(e)?e:`https://${e}`},hf=n=>{n.name!=="AbortError"&&console.error(n.message)},Ol=n=>n.dataset.path||n.getAttribute("id"),Il=(n,e)=>{e.forEach((s,a)=>{s.innerText=n[a].toString()})},bf=({serverURL:n,path:e=window.location.pathname,selector:s=".waline-pageview-count",update:a=!0,lang:t=navigator.language})=>{const o=new AbortController,p=Array.from(document.querySelectorAll(s)),r=u=>{const d=Ol(u);return d!==null&&e!==d},c=u=>kf({serverURL:Pl(n),paths:u.map(d=>Ol(d)||e),lang:t,signal:o.signal}).then(d=>Il(d,u)).catch(hf);if(a){const u=p.filter(v=>!r(v)),d=p.filter(r);_f({serverURL:Pl(n),path:e,lang:t}).then(v=>Il(new Array(u.length).fill(v),u)),d.length&&c(d)}else c(p);return o.abort.bind(o)};const gf={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline.dselegent.icu",reaction:["https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44d.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f44f.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f60e.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f602.png","https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/twemoji/13.1.0/72x72/1f635-200d-1f4ab.png"],pageview:!0};let yf=gf;const Hi=Symbol(""),zi=()=>kn(Hi),wf=zi,Ef=n=>{n.provide(Hi,yf)},Tf={"/":{placeholder:"请留言。(填写邮箱可在被回复时收到邮件提醒)",reactionTitle:"已到达文章底部，欢迎留言、表情互动~",reaction0:"赞一个",reaction1:"支持下",reaction2:"有点酷",reaction3:"啥玩意",reaction4:"看不懂",admin:"盛年不重来，一日难再晨",level0:"锻体",level1:"炼气",level2:"筑基",level3:"金丹",level4:"元婴",level5:"化神"}};l(()=>import("./waline-meta-56fbc549.js"),[]);var xf=M({name:"WalineComment",props:{identifier:{type:String,required:!0}},setup(n){const e=wf(),s=En(),a=mt(),t=ds(Tf);let o;const p=!!e.serverURL,r=E(()=>{if(!p)return!1;const u=e.pageview!==!1,d=s.value.pageview;return!!d||u!==!1&&d!==!1}),c=E(()=>({lang:a.value==="zh-CN"?"zh-CN":"en",locale:t.value,dark:"html.dark",...e,path:n.identifier}));return wn(()=>{ln(()=>n.identifier,()=>{o==null||o(),r.value&&cs().then(()=>{setTimeout(()=>{o=bf({serverURL:e.serverURL,path:n.identifier})},e.delay||800)})},{immediate:!0})}),()=>p?i("div",{class:"waline-wrapper",id:"comment"},i(m({loader:async()=>(await l(()=>import("./component-e60e4800.js"),[])).Waline,loadingComponent:ei}),c.value)):null}}),Sf=M({name:"CommentService",props:{darkmode:Boolean},setup(n){const e=zi(),s=dn(),a=En(),t=e.comment!==!1,o=E(()=>a.value.comment||t&&a.value.comment!==!1);return()=>i(xf,{identifier:a.value.commentID||s.value.path,darkmode:n.darkmode,style:{display:o.value?"block":"none"}})}}),Af=qn({enhance:({app:n})=>{Ef(n),n.component("CommentService",Sf)}});const Lf=800,Rf=2e3,Pf={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},Of=!1,If=['.theme-hope-content div[class*="language-"] pre'],Dl=!1,$t=new Map,Df=()=>{const{copy:n}=xm({legacy:!0}),e=ds(Pf),s=dn(),a=tm(),t=r=>{if(!r.hasAttribute("copy-code-registered")){const c=document.createElement("button");c.type="button",c.classList.add("copy-code-button"),c.innerHTML='<div class="copy-icon" />',c.setAttribute("aria-label",e.value.copy),c.setAttribute("data-copied",e.value.copied),r.parentElement&&r.parentElement.insertBefore(c,r),r.setAttribute("copy-code-registered","")}},o=()=>cs().then(()=>new Promise(r=>{setTimeout(()=>{If.forEach(c=>{document.querySelectorAll(c).forEach(t)}),r()},Lf)})),p=(r,c,u)=>{let{innerText:d=""}=c;/language-(shellscript|shell|bash|sh|zsh)/.test(r.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),n(d).then(()=>{u.classList.add("copied"),clearTimeout($t.get(u));const v=setTimeout(()=>{u.classList.remove("copied"),u.blur(),$t.delete(u)},Rf);$t.set(u,v)})};wn(()=>{(!a.value||Dl)&&o(),Nn("click",r=>{const c=r.target;if(c.matches('div[class*="language-"] > button.copy')){const u=c.parentElement,d=c.nextElementSibling;d&&p(u,d,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const u=c.parentElement,d=u.parentElement,v=u.nextElementSibling;v&&p(d,v,u)}}),ln(()=>s.value.path,()=>{(!a.value||Dl)&&o()})})};var Vf=qn({setup:()=>{Df()}});const Cf=qn({enhance:({app:n})=>{}});let jf={};const Fi=Symbol(""),Mf=()=>kn(Fi),Nf=n=>{n.provide(Fi,jf)};const $f=".theme-hope-content :not(a) > img:not([no-view])",qf={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},Bf=800,Hf='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',zf=n=>cn(n)?Array.from(document.querySelectorAll(n)):n.map(e=>Array.from(document.querySelectorAll(e))).flat(),Wi=n=>new Promise((e,s)=>{n.complete?e({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>e(Wi(n)),n.onerror=a=>s(a))}),Ff=()=>{const{isSupported:n,toggle:e}=Jo(),s=Mf(),a=ds(qf),t=dn();let o;const p=c=>{c.on("uiRegister",()=>{n&&c.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{e()}}),c.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(u,d)=>{u.setAttribute("download",""),u.setAttribute("target","_blank"),u.setAttribute("rel","noopener"),d.on("change",()=>{u.setAttribute("href",d.currSlide.data.src)})}}),c.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(u,d)=>{const v=[];let f=-1;for(let k=0;k<d.getNumItems();k++){const b=document.createElement("div");b.className="photo-swipe-bullet",b.onclick=T=>{d.goTo(v.indexOf(T.target))},v.push(b),u.appendChild(b)}d.on("change",()=>{f>=0&&v[f].classList.remove("active"),v[d.currIndex].classList.add("active"),f=d.currIndex})}})})},r=()=>Promise.all([l(()=>import("./photoswipe.esm-060dc2da.js"),[]),cs().then(()=>new Promise(c=>setTimeout(c,Bf)).then(()=>zf($f)))]).then(([{default:c},u])=>{const d=u.map(v=>({html:Hf,element:v,msrc:v.src}));u.forEach((v,f)=>{const k=()=>{o=new c({preloaderDelay:0,showHideAnimationType:"zoom",...a.value,...s,dataSource:d,index:f,closeOnVerticalDrag:!0,wheelToZoom:!1}),p(o),o.addFilter("thumbEl",()=>v),o.addFilter("placeholderSrc",()=>v.src),o.init()};v.style.cursor="zoom-in",v.addEventListener("click",()=>{k()}),v.addEventListener("keypress",({key:b})=>{b==="Enter"&&k()})}),u.forEach((v,f)=>{Wi(v).then(k=>{d.splice(f,1,k),o==null||o.refreshSlideContent(f)})})});wn(()=>{Nn("wheel",()=>{o==null||o.close()}),r(),ln(()=>t.value.path,()=>r())})};var Wf=qn({enhance:({app:n})=>{Nf(n)},setup:()=>{Ff()}});function Jf(n){return{all:n=n||new Map,on:function(e,s){var a=n.get(e);a?a.push(s):n.set(e,[s])},off:function(e,s){var a=n.get(e);a&&(s?a.splice(a.indexOf(s)>>>0,1):n.set(e,[]))},emit:function(e,s){var a=n.get(e);a&&a.slice().map(function(t){t(s)}),(a=n.get("*"))&&a.slice().map(function(t){t(e,s)})}}}const Ji=Symbol(""),Uf=()=>{const n=kn(Ji);if(!n)throw new Error("usePWAEvent() is called without provider.");return n},Gf=async n=>{const{register:e}=await l(()=>import("./index-e32a7948.js"),[]);e(Vn("service-worker.js"),{ready(s){console.log("[PWA]: Service worker is active"),n.emit("ready",s)},registered(s){console.log("[PWA]: Service worker has been registered."),n.emit("registered",s)},cached(s){console.log("[PWA]: Content has been cached for offline usage"),n.emit("cached",s)},async updatefound(s){await navigator.serviceWorker.getRegistration()&&(console.log("[PWA]: New content is downloading."),n.emit("updatefound",s))},updated(s){console.log("[PWA]: New content is available, please refresh.");const a="service-worker-version",t=Number(localStorage.getItem(a)||0);localStorage.setItem(a,(t+1).toString()),localStorage.removeItem("manifest"),n.emit("updated",s)},offline(){console.log("[PWA]: No internet connection found. App is running in offline mode."),n.emit("offline")},error(s){console.log("[PWA]: Error during service worker registration:",s),n.emit("error",s)}})},Kf=()=>{const n=Jf();ee(Ji,n),wn(async()=>{var e;let s=!1;(e=navigator.serviceWorker)!=null&&e.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{s||(s=!0,window.location.reload())}),await Gf(n)})},Ui=()=>i(pn,{name:"update"},()=>i("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));Ui.displayName="UpdateIcon";const Yf={"/":{install:"安装",iOSInstall:"点击分享按钮然后点击“添加到主屏幕”",cancel:"取消",close:"关闭",prevImage:"上一张图片",nextImage:"下一张图片",desc:"详情",feature:"主要特色",explain:"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。",hint:"发现新内容可用",update:"新内容已就绪"}};const Xf=n=>{const e=n.waiting;if(!e)return;const s=new MessageChannel;e.postMessage({type:"SKIP_WAITING"},[s.port2])};var Qf=M({name:"SWUpdatePopup",slots:Object,setup(n,{slots:e}){const s=ds(Yf),a=ve(),t=E(()=>!!a.value),o=()=>{a.value&&(Xf(a.value),a.value=void 0)};return wn(()=>{Uf().on("updated",p=>{p&&(a.value=p)})}),()=>i(Oe,{name:"popup"},()=>{var p;return((p=e.default)==null?void 0:p.call(e,{enabled:t.value,reload:o}))||(t.value?i("button",{type:"button",class:"sw-update-popup",tabindex:0,onClick:()=>o()},[s.value.update,i("span",{class:"icon-wrapper"},i(Ui))]):null)})}});const Zf=qn({setup:()=>{Kf()},rootComponents:[Qf]}),Gi=()=>{const n=dn();return E(()=>n.value.readingTime??null)},oo=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},Ki=(n,e)=>{const{minutes:s,words:a}=n,{less1Minute:t,word:o,time:p}=e;return{time:s<1?t:p.replace("$time",Math.round(s).toString()),words:o.replace("$word",a.toString())}},Vl={words:"",time:""},Yi=()=>oo?ds(oo):E(()=>null),nk=()=>{if(typeof oo>"u")return E(()=>Vl);const n=Gi(),e=Yi();return E(()=>n.value&&e.value?Ki(n.value,e.value):Vl)},vs=()=>qi(),rn=()=>df(),zs=()=>E(()=>!!vs().value.pure);var qt=M({name:"EmptyComponent",setup:()=>()=>null});const ek="719px",sk="1440px",ak="false",tk="_rainbow_1rnh5_1",Yo={mobileBreakPoint:ek,pcBreakPoint:sk,enableThemeColor:ak,rainbow:tk},Xo={"/web/":["VuePress","docsify","Comments"],"/apps/":["Applist","ChatGPT","design","AppNotes","Chrome"],"/professional_knowledge/computer_network/":["01","02","03","04","05","06"],"/professional_knowledge/software_engineer/":["01","02","03","04","05","06","07","08","09","10"],"/front_end/front_end_base/html_css/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],"/front_end/front_end_base/javascript/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"],"/front_end/css_advanced/less/":["01"],"/front_end/css_advanced/scss/":["01","02","03","04","05","06","07","08","09","10","11"],"/front_end/css_advanced/tailwind/":["01","02","03","04"],"/front_end/js_advanced/es6/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14"],"/front_end/js_advanced/ajax/":["01","02","03","04"],"/front_end/js_advanced/echarts/":["01","02","03","04","05"],"/front_end/js_advanced/webpack/":["01","02","03","04"],"/front_end/js_advanced/typescript/":["03","01","02","04","05","06"],"/front_end/front_end_framework/vue2/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],"/front_end/front_end_framework/vue3/":["01","02","03","04","06","07","08","09","10","11","12","13","14","15","16","17","18"],"/front_end/front_end_framework/uniapp/":["01","02","03","04","05","06","07","08","09"],"/front_end/front_end_framework/react/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],"/front_end/other/electron/":["01","02","03","04","05","06","07","08","09","10"],"/back_end/nodeJs/":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18"],"/back_end/linux/":["01","02","03","04","05","06","07","08","09","10","11"],"/back_end/database/mysql/":["01","02","03","04","05","06","07","08","09","10","11"],"/back_end/database/mongodb/":["01"],"/tool/git/":["01","02","03","04"]},Xi=n=>{const{icon:e="",color:s,size:a}=n,t={};return s&&(t.color=s),a&&(t.height=Number.isNaN(Number(a))?a:`${a}px`),us(e)?i("img",{class:"icon",src:e,"no-view":"",style:t}):ht(e)?i("img",{class:"icon",src:Vn(e),"no-view":"",style:t}):i(Kn("FontIcon"),n)};Xi.displayName="HopeIcon";var Yn=Xi,gn=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(gn||{}),Qi=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(Qi||{});const xs=(n,e=!1)=>{const s=Xn(),{fullPath:a,meta:t,name:o}=ga(s,encodeURI(n));return{text:!e&&t[gn.shortTitle]?t[gn.shortTitle]:t[gn.title]||n,link:o==="404"?n:a,...t[gn.icon]?{icon:t[gn.icon]}:{}}},wa=()=>{const n=Xn(),e=me();return s=>{if(s)if(ht(s))e.path!==s&&n.push(s);else if(us(s)||zr(s))window&&window.open(s);else{const a=e.path.slice(0,e.path.lastIndexOf("/"));n.push(`${a}/${encodeURI(s)}`)}}},Zi=()=>{const n=rn(),e=En();return E(()=>{const{author:s}=e.value;return s?ca(s):s===!1?[]:ca(n.value.author,!1)})},ok=()=>{const n=En();return E(()=>di(n.value.category).map(e=>{var s,a;return{name:e,path:((a=(s=kn(Symbol.for("categoryMap")))==null?void 0:s.value.map[e])==null?void 0:a.path)||""}}))},pk=()=>{const n=En();return E(()=>vi(n.value.tag).map(e=>{var s,a;return{name:e,path:((a=(s=kn(Symbol.for("tagMap")))==null?void 0:s.value.map[e])==null?void 0:a.path)||""}}))},lk=()=>{const n=En(),e=dn();return E(()=>{const s=Ho(n.value.date);if(s)return s;const{createdTime:a}=e.value.git||{};return a?new Date(a):null})},rk=()=>{const n=rn(),e=dn(),s=En(),a=Zi(),t=ok(),o=pk(),p=lk(),r=Gi(),c=nk(),u=E(()=>({author:a.value,category:t.value,date:p.value,localizedDate:e.value.localizedDate,tag:o.value,isOriginal:s.value.isOriginal||!1,readingTime:r.value,readingTimeLocale:c.value,pageview:"pageview"in s.value?s.value.pageview:!0})),d=E(()=>"pageInfo"in s.value?s.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:u,items:d}},{mobileBreakPoint:ik,pcBreakPoint:ck}=Yo,Cl=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,Ea=()=>{const n=Y(!1),e=Y(!1),s=()=>{n.value=window.innerWidth<=(Cl(ik)??719),e.value=window.innerWidth>=(Cl(ck)??1440)};return wn(()=>{s(),Nn("resize",s,!1),Nn("orientationchange",s,!1)}),{isMobile:n,isPC:e}},nc=Symbol(""),Ta=()=>{const n=kn(nc);if(!n)throw new Error("useDarkmode() is called without provider.");return n},uk=n=>{const e=vs(),s=Im(),a=Om("vuepress-theme-hope-scheme","auto"),t=E(()=>e.value.darkmode||"switch"),o=E(()=>{const r=t.value;return r==="disable"?!1:r==="enable"?!0:r==="auto"?s.value:r==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&s.value}),p=E(()=>{const r=t.value;return r==="switch"||r==="toggle"});n.provide(nc,{canToggle:p,config:t,isDarkmode:o,status:a}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},dk=()=>{const{isDarkmode:n}=Ta(),e=(s=n.value)=>document.documentElement.setAttribute("data-theme",s?"dark":"light");wn(()=>{ln(n,e,{immediate:!0})})};var zn=M({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:e,emit:s,slots:a}){const t=me(),o=Qr(),p=qs(n,"config"),r=E(()=>us(p.value.link)),c=E(()=>zr(p.value.link)||Hv(p.value.link)),u=E(()=>c.value?void 0:p.value.target||(r.value?"_blank":void 0)),d=E(()=>u.value==="_blank"),v=E(()=>!r.value&&!c.value&&!d.value),f=E(()=>c.value?void 0:p.value.rel||(d.value?"noopener noreferrer":void 0)),k=E(()=>p.value.ariaLabel||p.value.text),b=E(()=>{if(n.exact)return!1;const S=ge(o.value.locales);return S.length?S.every(y=>y!==p.value.link):p.value.link!=="/"}),T=E(()=>v.value?p.value.activeMatch?new RegExp(p.value.activeMatch).test(t.path):b.value?ia(t.path,p.value.link):t.path===p.value.link:!1);return()=>{const{before:S,after:y,default:A}=a,{text:w,icon:x,link:N}=p.value;return v.value?i(Cn,{to:N,"aria-label":k.value,...e,class:["nav-link",{active:T.value},e.class],onFocusout:()=>s("focusout")},()=>A?A():[S?S():i(Yn,{icon:x}),w,y==null?void 0:y()]):i("a",{href:N,rel:f.value,target:u.value,"aria-label":k.value,...e,class:["nav-link",e.class],onFocusout:()=>s("focusout")},A?A():[S?S():i(Yn,{icon:x}),w,n.noExternalLinkIcon?null:i(Ni),y==null?void 0:y()])}}});const Cs=(n,e,s=!1)=>"activeMatch"in e?new RegExp(e.activeMatch).test(n.path):zo(n,e.link)?!0:e.children&&!s?e.children.some(a=>Cs(n,a)):!1,ec=(n,e)=>e.type==="group"?e.children.some(s=>s.type==="group"?ec(n,s):s.type==="page"&&Cs(n,s,!0))||"prefix"in e&&zo(n,e.prefix):!1,sc=(n,e)=>cn(n.link)?i(zn,{...e,config:n}):i("p",e,[i(Yn,{icon:n.icon}),n.text]),ac=n=>{const e=me();return n?i("ul",{class:"sidebar-sub-headers"},n.map(s=>{const a=Cs(e,s,!0);return i("li",{class:"sidebar-sub-header"},[sc(s,{class:["sidebar-link","heading",{active:a}]}),ac(s.children)])})):null},Bt=(n="",e="")=>ht(e)?e:`${$v(n)}${e}`,vk=(n,e)=>{const s=dn();return{type:"heading",text:n.title,link:`${s.value.path}#${n.slug}`,children:Qo(n.children,e)}},Qo=(n,e)=>e>0?n.map(s=>vk(s,e-1)):[],tc=n=>{const e=dn();return Qo(e.value.headers,n)},po=(n,e,s="")=>{const a=dn(),t=(o,p=s)=>{var r;const c=cn(o)?xs(Bt(p,o)):o.link?{...o,...tt(o.link)?{}:{link:xs(Bt(p,o.link)).link}}:o;if("children"in c){const u=Bt(p,c.prefix),d=c.children==="structure"?Xo[u]:c.children;return{type:"group",...c,prefix:u,children:d.map(v=>t(v,u))}}return{type:"page",...c,children:c.link===a.value.path?Qo(((r=a.value.headers[0])==null?void 0:r.level)===1?a.value.headers[0].children:a.value.headers,e):[]}};return n.map(o=>t(o))},mk=(n,e)=>{const s=dn(),a=ge(n).sort((t,o)=>o.length-t.length);for(const t of a)if(ia(decodeURI(s.value.path),t)){const o=n[t];return o?po(o==="structure"?Xo[t]:o==="heading"?tc(e):o,e,t):[]}return console.warn(`${s.value.path} is missing sidebar config.`),[]},fk=()=>{const n=we(),e=En(),s=rn(),a=e.value.home?!1:e.value.sidebar??s.value.sidebar??"structure",t=e.value.headerDepth??s.value.headerDepth??2;return a===!1?[]:a==="heading"?tc(t):a==="structure"?po(Xo[n.value],t,n.value):U(a)?po(a,t):$o(a)?mk(a,t):[]},oc=Symbol(""),kk=()=>{const n=E(()=>fk());ee(oc,n)},Zo=()=>{const n=kn(oc);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var _k=M({name:"PageFooter",setup(){const n=En(),e=rn(),s=Zi(),a=E(()=>{const{copyright:p,footer:r}=n.value;return r!==!1&&!!(p||r||e.value.displayFooter)}),t=E(()=>{const{footer:p}=n.value;return p===!1?!1:cn(p)?p:e.value.footer||""}),o=E(()=>"copyright"in n.value?n.value.copyright:"copyright"in e.value?e.value.copyright:s.value.length?`Copyright © ${new Date().getFullYear()} ${s.value[0].name}`:!1);return()=>a.value?i("footer",{class:"vp-footer-wrapper"},[t.value?i("div",{class:"vp-footer",innerHTML:t.value}):null,o.value?i("div",{class:"vp-copyright",innerHTML:o.value}):null]):null}}),hk=M({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const s=dn(),a=qs(n,"config"),t=E(()=>a.value.ariaLabel||a.value.text),o=Y(!1);ln(()=>s.value.path,()=>{o.value=!1});const p=r=>{r.detail===0&&(o.value=!o.value)};return()=>{var r;return i("div",{class:["dropdown-wrapper",{open:o.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":t.value,onClick:p},[((r=e.title)==null?void 0:r.call(e))||i("span",{class:"title"},[i(Yn,{icon:a.value.icon}),n.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},a.value.children.map((c,u)=>{const d=u===a.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in c?[i("h4",{class:"dropdown-subtitle"},c.link?i(zn,{config:c,onFocusout:()=>{c.children.length===0&&d&&(o.value=!1)}}):i("span",c.text)),i("ul",{class:"dropdown-subitem-wrapper"},c.children.map((v,f)=>i("li",{class:"dropdown-subitem"},i(zn,{config:v,onFocusout:()=>{f===c.children.length-1&&d&&(o.value=!1)}}))))]:i(zn,{config:c,onFocusout:()=>{d&&(o.value=!1)}}))}))])])}}});const pc=(n,e="")=>cn(n)?xs(`${e}${n}`):"children"in n?{...n,...n.link&&!tt(n.link)?xs(`${e}${n.link}`):{},children:n.children.map(s=>pc(s,`${e}${n.prefix||""}`))}:{...n,link:tt(n.link)?n.link:xs(`${e}${n.link}`).link},lc=()=>E(()=>(rn().value.navbar||[]).map(n=>pc(n))),bk=()=>{const n=rn(),e=E(()=>n.value.repo||null),s=E(()=>e.value?rm(e.value):null),a=E(()=>e.value?fi(e.value):null),t=E(()=>s.value?n.value.repoLabel??(a.value===null?"Source":a.value):null);return E(()=>!s.value||!t.value||n.value.repoDisplay===!1?null:{type:a.value||"Source",label:t.value,link:s.value})};var gk=M({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const e=dn(),s=qs(n,"config"),a=E(()=>s.value.ariaLabel||s.value.text),t=Y(!1);ln(()=>e.value.path,()=>{t.value=!1});const o=(p,r)=>r[r.length-1]===p;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:t.value}],"aria-label":a.value,onClick:()=>{t.value=!t.value}},[i("span",{class:"title"},[i(Yn,{icon:s.value.icon}),n.config.text]),i("span",{class:["arrow",t.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!t.value}]},s.value.children.map(p=>i("li",{class:"dropdown-item"},"children"in p?[i("h4",{class:"dropdown-subtitle"},p.link?i(zn,{config:p,onFocusout:()=>{o(p,s.value.children)&&p.children.length===0&&(t.value=!1)}}):i("span",p.text)),i("ul",{class:"dropdown-subitem-wrapper"},p.children.map(r=>i("li",{class:"dropdown-subitem"},i(zn,{config:r,onFocusout:()=>{o(r,p.children)&&o(p,s.value.children)&&(t.value=!1)}}))))]:i(zn,{config:p,onFocusout:()=>{o(p,s.value.children)&&(t.value=!1)}}))))]}}),yk=M({name:"NavScreenLinks",setup(){const n=lc();return()=>n.value.length?i("nav",{class:"nav-screen-links"},n.value.map(e=>i("div",{class:"navbar-links-item"},"children"in e?i(gk,{config:e}):i(zn,{config:e})))):null}});const rc=()=>i(pn,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));rc.displayName="DarkIcon";const ic=()=>i(pn,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));ic.displayName="LightIcon";const cc=()=>i(pn,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));cc.displayName="AutoIcon";const uc=()=>i(pn,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));uc.displayName="EnterFullScreenIcon";const dc=()=>i(pn,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));dc.displayName="CancelFullScreenIcon";const vc=()=>i(pn,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);vc.displayName="OutlookIcon";var mc=M({name:"AppearanceSwitch",setup(){const{config:n,status:e}=Ta(),s=()=>{n.value==="switch"?e.value={light:"dark",dark:"auto",auto:"light"}[e.value]:e.value=e.value==="light"?"dark":"light"};return()=>i("button",{type:"button",id:"appearance-switch",onClick:()=>s()},[i(cc,{style:{display:e.value==="auto"?"block":"none"}}),i(rc,{style:{display:e.value==="dark"?"block":"none"}}),i(ic,{style:{display:e.value==="light"?"block":"none"}})])}}),wk=M({name:"AppearanceMode",setup(){const n=rn(),{canToggle:e}=Ta(),s=E(()=>n.value.outlookLocales.darkmode);return()=>e.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},s.value),i(mc)]):null}});const Ht="VUEPRESS_THEME_COLOR";var Ek=M({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const e=(s="")=>{const a=document.documentElement.classList,t=ge(n.themeColor);if(!s){localStorage.removeItem(Ht),a.remove(...t);return}a.remove(...t.filter(o=>o!==s)),a.add(s),localStorage.setItem(Ht,s)};return wn(()=>{const s=localStorage.getItem(Ht);s&&e(s)}),()=>i("ul",{id:"theme-color-picker"},[i("li",i("span",{class:"theme-color",onClick:()=>e()})),ba(n.themeColor).map(([s,a])=>i("li",i("span",{style:{background:a},onClick:()=>e(s)})))])}});const Ss=Yo.enableThemeColor==="true",Tk=Ss?om(ba(Yo).filter(([n])=>n.startsWith("theme-"))):{};var xk=M({name:"ThemeColor",setup(){const n=rn(),e=E(()=>n.value.outlookLocales.themeColor);return()=>Ss?i("div",{class:"theme-color-wrapper"},[i("label",{class:"theme-color-title",for:"theme-color-picker"},e.value),i(Ek,{themeColor:Tk})]):null}}),fc=M({name:"ToggleFullScreenButton",setup(){const n=rn(),{isSupported:e,isFullscreen:s,toggle:a}=Jo(),t=E(()=>n.value.outlookLocales.fullscreen);return()=>e?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},t.value),i("button",{type:"button",class:"full-screen",id:"full-screen-switch",ariaPressed:s.value,onClick:()=>a()},s.value?i(dc):i(uc))]):null}}),kc=M({name:"OutlookSettings",setup(){const n=vs(),e=zs(),s=E(()=>!e.value&&n.value.fullscreen);return()=>i(kt,()=>[Ss?i(xk):null,i(wk),s.value?i(fc):null])}}),Sk=M({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:e,slots:s}){const a=dn(),{isMobile:t}=Ea(),o=ve(),p=yi(o);return wn(()=>{o.value=document.body,ln(t,r=>{!r&&n.show&&(p.value=!1,e("close"))}),ln(()=>a.value.path,()=>{p.value=!1,e("close")})}),ha(()=>{p.value=!1}),()=>i(Oe,{name:"fade",onEnter:()=>{p.value=!0},onAfterLeave:()=>{p.value=!1}},()=>{var r,c;return n.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(r=s.before)==null?void 0:r.call(s),i(yk),i("div",{class:"vp-outlook-wrapper"},i(kc)),(c=s.after)==null?void 0:c.call(s)])):null})}}),Ak=M({name:"NavbarBrand",setup(){const n=we(),e=ft(),s=rn(),a=E(()=>s.value.home||n.value),t=E(()=>e.value.title),o=E(()=>s.value.navTitle??t.value),p=E(()=>s.value.logo?Vn(s.value.logo):null),r=E(()=>s.value.logoDark?Vn(s.value.logoDark):null);return()=>i(Cn,{to:a.value,class:"vp-brand"},()=>[p.value?i("img",{class:["vp-nav-logo",{light:!!r.value}],src:p.value,alt:t.value}):null,r.value?i("img",{class:["vp-nav-logo dark"],src:r.value,alt:t.value}):null,o.value?i("span",{class:["vp-site-name",{"hide-in-pad":p.value&&s.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),Lk=M({name:"NavbarLinks",setup(){const n=lc();return()=>n.value.length?i("nav",{class:"vp-nav-links"},n.value.map(e=>i("div",{class:"nav-item hide-in-mobile"},"children"in e?i(hk,{config:e}):i(zn,{config:e})))):null}}),Rk=M({name:"RepoLink",components:{BitbucketIcon:pi,GiteeIcon:oi,GitHubIcon:ai,GitLabIcon:ti,SourceIcon:li},setup(){const n=bk();return()=>n.value?i("div",{class:"nav-item"},i("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},i(Kn(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const _c=({active:n=!1},{emit:e})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>e("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));_c.displayName="ToggleNavbarButton";var Pk=_c;const lo=(n,{emit:e})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},i("span",{class:"icon"}));lo.displayName="ToggleSidebarButton",lo.emits=["toggle"];var Ok=lo,Ik=M({name:"OutlookButton",setup(){const{isSupported:n}=Jo(),e=vs(),s=zs(),a=dn(),{canToggle:t}=Ta(),o=Y(!1),p=E(()=>!s.value&&e.value.fullscreen&&n);return ln(()=>a.value.path,()=>{o.value=!1}),()=>t.value||p.value||Ss?i("div",{class:"nav-item hide-in-mobile"},t.value&&!p.value&&!Ss?i(mc):p.value&&!t.value&&!Ss?i(fc):i("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[i(vc),i("div",{class:"outlook-dropdown"},i(kc))])):null}}),Dk=M({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:e,slots:s}){const a=rn(),{isMobile:t}=Ea(),o=Y(!1),p=E(()=>{const{navbarAutoHide:d="mobile"}=a.value;return d!=="none"&&(d==="always"||t.value)}),r=E(()=>a.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:Ak,Language:qt,Links:Lk,Repo:Rk,Outlook:Ik,Search:Pe("Docsearch")?Kn("Docsearch"):Pe("SearchBox")?Kn("SearchBox"):qt},u=d=>c[d]??(Pe(d)?Kn(d):qt);return()=>{var d,v,f,k,b,T;return[i("header",{class:["vp-navbar",{"auto-hide":p.value,"hide-icon":a.value.navbarIcon===!1}],id:"navbar"},[i("div",{class:"vp-navbar-start"},[i(Ok,{onToggle:()=>{o.value&&(o.value=!1),e("toggleSidebar")}}),(d=s.startBefore)==null?void 0:d.call(s),(r.value.start||[]).map(S=>i(u(S))),(v=s.startAfter)==null?void 0:v.call(s)]),i("div",{class:"vp-navbar-center"},[(f=s.centerBefore)==null?void 0:f.call(s),(r.value.center||[]).map(S=>i(u(S))),(k=s.centerAfter)==null?void 0:k.call(s)]),i("div",{class:"vp-navbar-end"},[(b=s.endBefore)==null?void 0:b.call(s),(r.value.end||[]).map(S=>i(u(S))),(T=s.endAfter)==null?void 0:T.call(s),i(Pk,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),i(Sk,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var S;return(S=s.screenTop)==null?void 0:S.call(s)},after:()=>{var S;return(S=s.screenBottom)==null?void 0:S.call(s)}})]}}}),Vk=M({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const e=me();return()=>[sc(n.config,{class:["sidebar-link",`sidebar-${n.config.type}`,{active:Cs(e,n.config,!0)}],exact:!0}),ac(n.config.children)]}}),Ck=M({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:e}){const s=me(),a=E(()=>Cs(s,n.config)),t=E(()=>Cs(s,n.config,!0));return()=>{const{collapsible:o,children:p=[],icon:r,prefix:c,link:u,text:d}=n.config;return i("section",{class:"sidebar-group"},[i(o?"button":"p",{class:["sidebar-heading",{clickable:o||u,exact:t.value,active:a.value}],...o?{type:"button",onClick:()=>e("toggle"),onKeydown:v=>{v.key==="Enter"&&e("toggle")}}:{}},[i(Yn,{icon:r}),u?i(zn,{class:"title",config:{text:d,link:u},noExternalLinkIcon:!0}):i("span",{class:"title"},d),o?i("span",{class:["arrow",n.open?"down":"end"]}):null]),n.open||!o?i(hc,{key:c,config:p}):null])}}}),hc=M({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const e=me(),s=Y(-1),a=t=>{s.value=t===s.value?-1:t};return ln(()=>e.path,()=>{const t=n.config.findIndex(o=>ec(e,o));s.value=t},{immediate:!0,flush:"post"}),()=>i("ul",{class:"sidebar-links"},n.config.map((t,o)=>i("li",t.type==="group"?i(Ck,{config:t,open:o===s.value,onToggle:()=>a(o)}):i(Vk,{config:t}))))}}),jk=M({name:"SideBar",slots:Object,setup(n,{slots:e}){const s=me(),a=rn(),t=Zo(),o=ve();return wn(()=>{ln(()=>s.hash,p=>{const r=document.querySelector(`.sidebar a.sidebar-link[href="${s.path}${p}"]`);if(!r)return;const{top:c,height:u}=o.value.getBoundingClientRect(),{top:d,height:v}=r.getBoundingClientRect();d<c?r.scrollIntoView(!0):d+v>c+u&&r.scrollIntoView(!1)})}),()=>{var p,r,c;return i("aside",{class:["sidebar",{"hide-icon":a.value.sidebarIcon===!1}],id:"sidebar",ref:o},[(p=e.top)==null?void 0:p.call(e),((r=e.default)==null?void 0:r.call(e))||i(hc,{config:t.value}),(c=e.bottom)==null?void 0:c.call(e)])}}}),np=M({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:e}){const s=Xn(),a=dn(),t=En(),o=rn(),{isMobile:p,isPC:r}=Ea(),[c,u]=ll(!1),[d,v]=ll(!1),f=Zo(),k=Y(!1),b=E(()=>n.noNavbar||t.value.navbar===!1||o.value.navbar===!1?!1:!!(a.value.title||o.value.logo||o.value.repo||o.value.navbar)),T=E(()=>n.noSidebar?!1:t.value.sidebar!==!1&&f.value.length!==0&&!t.value.home),S=E(()=>n.noToc||t.value.home?!1:t.value.toc||o.value.toc!==!1&&t.value.toc!==!1),y={x:0,y:0},A=O=>{y.x=O.changedTouches[0].clientX,y.y=O.changedTouches[0].clientY},w=O=>{const $=O.changedTouches[0].clientX-y.x,C=O.changedTouches[0].clientY-y.y;Math.abs($)>Math.abs(C)*1.5&&Math.abs($)>40&&($>0&&y.x<=80?u(!0):u(!1))},x=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let N=0;return Nn("scroll",_m(()=>{const O=x();O<=58||O<N?k.value=!1:N+200<O&&!c.value&&(k.value=!0),N=O},300,!0)),ln(p,O=>{O||u(!1)}),wn(()=>{const O=yi(document.body);ln(c,C=>{O.value=C});const $=s.afterEach(()=>{u(!1)});ha(()=>{O.value=!1,$()})}),()=>i(Pe("GlobalEncrypt")?Kn("GlobalEncrypt"):si,()=>i("div",{class:["theme-container",{"no-navbar":!b.value,"no-sidebar":!T.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":S.value,"hide-navbar":k.value,"sidebar-collapsed":!p.value&&!r.value&&d.value,"sidebar-open":p.value&&c.value},t.value.containerClass||""],onTouchStart:A,onTouchEnd:w},[b.value?i(Dk,{onToggleSidebar:()=>u()},{startBefore:()=>{var O;return(O=e.navbarStartBefore)==null?void 0:O.call(e)},startAfter:()=>{var O;return(O=e.navbarStartAfter)==null?void 0:O.call(e)},centerBefore:()=>{var O;return(O=e.navbarCenterBefore)==null?void 0:O.call(e)},centerAfter:()=>{var O;return(O=e.navbarCenterAfter)==null?void 0:O.call(e)},endBefore:()=>{var O;return(O=e.navbarEndBefore)==null?void 0:O.call(e)},endAfter:()=>{var O;return(O=e.navbarEndAfter)==null?void 0:O.call(e)},screenTop:()=>{var O;return(O=e.navScreenTop)==null?void 0:O.call(e)},screenBottom:()=>{var O;return(O=e.navScreenBottom)==null?void 0:O.call(e)}}):null,i(Oe,{name:"fade"},()=>c.value?i("div",{class:"sidebar-mask",onClick:()=>u(!1)}):null),i(Oe,{name:"fade"},()=>p.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>v()},i("span",{class:["arrow",d.value?"end":"start"]}))),i(jk,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var O;return(O=e.sidebarTop)==null?void 0:O.call(e)},bottom:()=>{var O;return(O=e.sidebarBottom)==null?void 0:O.call(e)}}),e.default(),i(_k)]))}}),fn=M({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:e}){const s=t=>{t.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},a=t=>{t.style.transform="translateY(0)",t.style.opacity="1"};return()=>i(n.type==="single"?Oe:yv,{name:"drop",appear:n.appear,onAppear:s,onAfterAppear:a,onEnter:s,onAfterEnter:a,onBeforeLeave:s},()=>e.default())}});const ro=({custom:n})=>i(ni,{class:["theme-hope-content",{custom:n}]});ro.displayName="MarkdownContent",ro.props={custom:Boolean};var ep=ro;const bc=()=>i(pn,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));bc.displayName="AuthorIcon";const gc=()=>i(pn,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));gc.displayName="CalendarIcon";const yc=()=>i(pn,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));yc.displayName="CategoryIcon";const wc=()=>i(pn,{name:"eye"},()=>i("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));wc.displayName="EyeIcon";const Ec=()=>i(pn,{name:"fire"},()=>i("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));Ec.displayName="FireIcon";const Tc=()=>i(pn,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Tc.displayName="PrintIcon";const xc=()=>i(pn,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));xc.displayName="TagIcon";const Sc=()=>i(pn,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Sc.displayName="TimerIcon";const Ac=()=>i(pn,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Ac.displayName="WordIcon";const De=()=>{const n=rn();return E(()=>n.value.metaLocales)};var Mk=M({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const e=De();return()=>n.author.length?i("span",{class:"page-author-info","aria-label":`${e.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(bc),i("span",n.author.map(s=>s.url?i("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):i("span",{class:"page-author-item"},s.name))),i("span",{property:"author",content:n.author.map(s=>s.name).join(", ")})]):null}}),Nk=M({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const e=Xn(),s=dn(),a=De(),t=(o,p="")=>{p&&s.value.path!==p&&(o.preventDefault(),e.push(p))};return()=>n.category.length?i("span",{class:"page-category-info","aria-label":`${a.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(yc),n.category.map(({name:o,path:p})=>i("span",{class:["page-category-item",{[`category${_t(o,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:r=>t(r,p)},o)),i("meta",{property:"articleSection",content:n.category.map(({name:o})=>o).join(",")})]):null}}),$k=M({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const e=mt(),s=De();return()=>n.date?i("span",{class:"page-date-info","aria-label":`${s.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(gc),i("span",i(kt,()=>n.localizedDate||n.date.toLocaleDateString(e.value))),i("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),qk=M({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const e=De();return()=>n.isOriginal?i("span",{class:"page-original-info"},e.value.origin):null}}),Bk=M({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(n){const e=me(),s=De(),a=ve(),t=Y(0);return Dm(a,()=>{const o=a.value.textContent;o&&!isNaN(Number(o))&&(t.value=Number(o))},{childList:!0}),()=>n.pageview?i("span",{class:"page-pageview-info","aria-label":`${s.value.views}${n.pure?"":"🔢"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(t.value<1e3?wc:Ec),i("span",{ref:a,class:"waline-pageview-count",id:"ArtalkPV","data-path":cn(n.pageview)?n.pageview:Vn(e.path)},"...")]):null}}),Hk=M({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=De(),s=E(()=>{if(!n.readingTime)return null;const{minutes:a}=n.readingTime;return a<1?"PT1M":`PT${Math.round(a)}M`});return()=>{var a,t;return(a=n.readingTimeLocale)!=null&&a.time?i("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(Sc),i("span",(t=n.readingTimeLocale)==null?void 0:t.time),i("meta",{property:"timeRequired",content:s.value})]):null}}}),zk=M({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const e=Xn(),s=dn(),a=De(),t=(o,p="")=>{p&&s.value.path!==p&&(o.preventDefault(),e.push(p))};return()=>n.tag.length?i("span",{class:"page-tag-info","aria-label":`${a.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(xc),n.tag.map(({name:o,path:p})=>i("span",{class:["page-tag-item",{[`tag${_t(o,9)}`]:!n.pure,clickable:p}],role:p?"navigation":"",onClick:r=>t(r,p)},o)),i("meta",{property:"keywords",content:n.tag.map(({name:o})=>o).join(",")})]):null}}),Fk=M({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=De();return()=>{var s,a,t;return(s=n.readingTimeLocale)!=null&&s.words?i("span",{class:"page-word-info","aria-label":`${e.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[i(Ac),i("span",(a=n.readingTimeLocale)==null?void 0:a.words),i("meta",{property:"wordCount",content:(t=n.readingTime)==null?void 0:t.words})]):null}}}),Lc=M({name:"PageInfo",components:{AuthorInfo:Mk,CategoryInfo:Nk,DateInfo:$k,OriginalInfo:qk,PageViewInfo:Bk,ReadingTimeInfo:Hk,TagInfo:zk,WordInfo:Fk},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const e=zs();return()=>n.items?i("div",{class:"page-info"},n.items.map(s=>i(Kn(`${s}Info`),{...n.info,pure:e.value}))):null}}),Wk=M({name:"PrintButton",setup(){const n=vs(),e=rn();return()=>n.value.print===!1?null:i("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},i(Tc))}});const Jk=({title:n,level:e,slug:s})=>i(Cn,{to:`#${s}`,class:["toc-link",`level${e}`]},()=>n),io=(n,e)=>{const s=me();return n.length&&e>0?i("ul",{class:"toc-list"},n.map(a=>{const t=io(a.children,e-1);return[i("li",{class:["toc-item",{active:zo(s,`#${a.slug}`)}]},Jk(a)),t?i("li",t):null]})):null};var Rc=M({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:e}){const s=me(),a=dn(),t=De(),o=ve(),p=Y("-1.7rem"),r=u=>{var d;(d=o.value)==null||d.scrollTo({top:u,behavior:"smooth"})},c=()=>{if(o.value){const u=document.querySelector(".toc-item.active");u?p.value=`${u.getBoundingClientRect().top-o.value.getBoundingClientRect().top+o.value.scrollTop}px`:p.value="-1.7rem"}else p.value="-1.7rem"};return wn(()=>{ln(()=>s.hash,u=>{if(o.value){const d=document.querySelector(`#toc a.toc-link[href$="${u}"]`);if(!d)return;const{top:v,height:f}=o.value.getBoundingClientRect(),{top:k,height:b}=d.getBoundingClientRect();k<v?r(o.value.scrollTop+k-v):k+b>v+f&&r(o.value.scrollTop+k+b-v-f)}}),ln(()=>s.fullPath,()=>c(),{flush:"post",immediate:!0})}),()=>{var u,d;const v=n.items.length?io(n.items,n.headerDepth):a.value.headers?io(a.value.headers,n.headerDepth):null;return v?i("div",{class:"toc-place-holder"},[i("aside",{id:"toc"},[(u=e.before)==null?void 0:u.call(e),i("div",{class:"toc-header"},[t.value.toc,i(Wk)]),i("div",{class:"toc-wrapper",ref:o},[v,i("div",{class:"toc-marker",style:{top:p.value}})]),(d=e.after)==null?void 0:d.call(e)])]):null}}}),sp=M({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const e=dn(),s=rn(),a=ve(),t=({target:o})=>{const p=document.querySelector(o.hash);if(p){const r=()=>{p.removeAttribute("tabindex"),p.removeEventListener("blur",r)};p.setAttribute("tabindex","-1"),p.addEventListener("blur",r),p.focus(),window.scrollTo(0,0)}};return wn(()=>{ln(()=>e.value.path,()=>a.value.focus())}),()=>[i("span",{ref:a,tabindex:"-1"}),i("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:t},s.value.routeLocales.skipToContent)]}});let zt=null,Fa=null;const Uk={wait:()=>zt,pending:()=>{zt=new Promise(n=>Fa=n)},resolve:()=>{Fa==null||Fa(),zt=null,Fa=null}},Pc=()=>Uk;var Gk=M({name:"FadeSlideY",slots:Object,setup(n,{slots:e}){const{resolve:s,pending:a}=Pc();return()=>i(Oe,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:a},()=>{var t;return(t=e.default)==null?void 0:t.call(e)})}}),Kk=M({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(n){return()=>i("div",{class:"vp-feature-panel"},[n.header?i("h2",{class:"vp-feature-title"},n.header):null,n.items.length?i("div",{class:"vp-features-wrapper"},n.items.map(e=>{const s=[i("h3",{class:"vp-feature-header"},[i(Yn,{icon:e.icon}),i("span",{innerHTML:e.title})]),i("p",{class:"vp-feature-content",innerHTML:e.details})];return e.link?tt(e.link)?i("a",{class:"vp-feature link",href:e.link,role:"navigation","aria-label":e.title,target:"_blank"},s):i(Cn,{class:"vp-feature link",to:e.link,role:"navigation","aria-label":e.title},()=>s):i("div",{class:"vp-feature"},s)})):null])}}),Yk=M({name:"HeroInfo",slots:Object,setup(n,{slots:e}){const s=En(),a=ft(),t=E(()=>s.value.heroText===!1?!1:s.value.heroText||a.value.title||"Hello"),o=E(()=>s.value.tagline===!1?!1:s.value.tagline||a.value.description||"Welcome to your VuePress site"),p=E(()=>s.value.heroImage?Vn(s.value.heroImage):null),r=E(()=>s.value.heroImageDark?Vn(s.value.heroImageDark):null),c=E(()=>s.value.heroAlt||t.value||"hero"),u=E(()=>s.value.actions??[]);return()=>{var d,v;return i("header",{class:"vp-hero-info-wrapper"},[((d=e.heroImage)==null?void 0:d.call(e))||i(fn,{appear:!0,type:"group"},()=>[p.value?i("img",{key:"light",class:["vp-hero-image",{light:r.value}],src:p.value,alt:c.value}):null,r.value?i("img",{key:"dark",class:"vp-hero-image dark",src:r.value,alt:c.value}):null]),((v=e.heroInfo)==null?void 0:v.call(e))??i("div",{class:"vp-hero-info"},[t.value?i(fn,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},t.value)):null,o.value?i(fn,{appear:!0,delay:.08},()=>i("p",{class:"vp-description"},o.value)):null,u.value.length?i(fn,{appear:!0,delay:.12},()=>i("p",{class:"vp-actions"},u.value.map(f=>i(zn,{class:["vp-action",f.type||"default"],config:f,noExternalLinkIcon:!0})))):null])])}}}),Xk=M({name:"HomePage",slots:Object,setup(n,{slots:e}){const s=zs(),a=En(),t=E(()=>{const{features:o}=a.value;return U(o)?o.some(p=>!("items"in p))?[{items:o}]:o:[]});return()=>{var o,p,r;return i("main",{class:["vp-project-home ",{pure:s.value}],id:"main-content","aria-labelledby":a.value.heroText===null?void 0:"main-title"},[(o=e.top)==null?void 0:o.call(e),i(Yk),t.value.map(({header:c="",items:u},d)=>i(fn,{appear:!0,delay:.16+d*.08},()=>i(Kk,{header:c,items:u}))),(p=e.center)==null?void 0:p.call(e),i(fn,{appear:!0,delay:.16+t.value.length*.08},()=>i(ep)),(r=e.bottom)==null?void 0:r.call(e)])}}});const Qk=(n,e)=>{const s=n.replace(e,"/").split("/"),a=[];let t=qo(e);return s.forEach((o,p)=>{p!==s.length-1?(t+=`${o}/`,a.push(t)):o!==""&&(t+=o,a.push(t))}),a};var Zk=M({name:"BreadCrumb",setup(){const n=Xn(),e=dn(),s=we(),a=En(),t=rn(),o=ve([]),p=E(()=>(a.value.breadcrumb||a.value.breadcrumb!==!1&&t.value.breadcrumb!==!1)&&o.value.length>1),r=E(()=>a.value.breadcrumbIcon||a.value.breadcrumbIcon!==!1&&t.value.breadcrumbIcon!==!1),c=()=>{const u=n.getRoutes(),d=Qk(e.value.path,s.value).map(v=>{const f=u.find(k=>k.path===v);if(f){const{meta:k,path:b}=ga(n,f.path),T=k[gn.shortTitle]||k[gn.title];if(T)return{title:T,icon:k[gn.icon],path:b}}return null}).filter(v=>v!==null);d.length>1&&(o.value=d)};return wn(()=>{c(),ln(()=>e.value.path,c)}),()=>i("nav",{class:["vp-breadcrumb",{disable:!p.value}]},p.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},o.value.map((u,d)=>i("li",{class:{"is-active":o.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[i(Cn,{to:u.path,property:"item",typeof:"WebPage"},()=>[r.value?i(Yn,{icon:u.icon}):null,i("span",{property:"name"},u.title||"Unknown")]),i("meta",{property:"position",content:d+1})]))):[])}});const jl=n=>n===!1?!1:cn(n)?xs(n,!0):$o(n)?n:null,co=(n,e,s)=>{const a=n.findIndex(t=>t.link===e);if(a!==-1){const t=n[a+s];return t!=null&&t.link?t:null}for(const t of n)if(t.children){const o=co(t.children,e,s);if(o)return o}return null};var n0=M({name:"PageNav",setup(){const n=rn(),e=En(),s=Zo(),a=dn(),t=wa(),o=E(()=>{const r=jl(e.value.prev);return r===!1?null:r||(n.value.prevLink===!1?null:co(s.value,a.value.path,-1))}),p=E(()=>{const r=jl(e.value.next);return r===!1?null:r||(n.value.nextLink===!1?null:co(s.value,a.value.path,1))});return Nn("keydown",r=>{r.altKey&&(r.key==="ArrowRight"?p.value&&(t(p.value.link),r.preventDefault()):r.key==="ArrowLeft"&&o.value&&(t(o.value.link),r.preventDefault()))}),()=>o.value||p.value?i("nav",{class:"vp-page-nav"},[o.value?i(zn,{class:"prev",config:o.value},()=>{var r,c;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),n.value.metaLocales.prev]),i("div",{class:"link"},[i(Yn,{icon:(r=o.value)==null?void 0:r.icon}),(c=o.value)==null?void 0:c.text])]}):null,p.value?i(zn,{class:"next",config:p.value},()=>{var r,c;return[i("div",{class:"hint"},[n.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(r=p.value)==null?void 0:r.text,i(Yn,{icon:(c=p.value)==null?void 0:c.icon})])]}):null]):null}});const e0={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},s0=({docsRepo:n,docsBranch:e,docsDir:s,filePathRelative:a,editLinkPattern:t})=>{if(!a)return null;const o=fi(n);let p;return t?p=t:o!==null&&(p=e0[o]),p?p.replace(/:repo/,us(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,Fr(`${qo(s)}/${a}`)):null},a0=()=>{const n=rn(),e=dn(),s=En();return E(()=>{const{repo:a,docsRepo:t=a,docsBranch:o="main",docsDir:p="",editLink:r,editLinkPattern:c=""}=n.value;if(!(s.value.editLink??r??!0)||!t)return null;const u=s0({docsRepo:t,docsBranch:o,docsDir:p,editLinkPattern:c,filePathRelative:e.value.filePathRelative});return u?{text:n.value.metaLocales.editLink,link:u}:null})},t0=()=>{const n=ft(),e=rn(),s=dn(),a=En();return E(()=>{var t,o;return!(a.value.lastUpdated??e.value.lastUpdated??!0)||!((t=s.value.git)!=null&&t.updatedTime)?null:new Date((o=s.value.git)==null?void 0:o.updatedTime).toLocaleString(n.value.lang)})},o0=()=>{const n=rn(),e=dn(),s=En();return E(()=>{var a;return s.value.contributors??n.value.contributors??!0?((a=e.value.git)==null?void 0:a.contributors)??null:null})};var p0=M({name:"PageTitle",setup(){const n=dn(),e=En(),s=rn(),{info:a,items:t}=rk();return()=>i("div",{class:"vp-page-title"},[i("h1",[s.value.titleIcon===!1?null:i(Yn,{icon:e.value.icon}),n.value.title]),i(Lc,{info:a.value,...t.value===null?{}:{items:t.value}}),i("hr")])}});const Oc=()=>i(pn,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Oc.displayName="EditIcon";var l0=M({name:"PageMeta",setup(){const n=rn(),e=a0(),s=t0(),a=o0();return()=>{const{metaLocales:t}=n.value;return i("footer",{class:"page-meta"},[e.value?i("div",{class:"meta-item edit-link"},i(zn,{class:"label",config:e.value},{before:()=>i(Oc)})):null,i("div",{class:"meta-item git-info"},[s.value?i("div",{class:"update-time"},[i("span",{class:"label"},`${t.lastUpdated}: `),i(kt,()=>i("span",{class:"info"},s.value))]):null,a.value&&a.value.length?i("div",{class:"contributors"},[i("span",{class:"label"},`${t.contributors}: `),a.value.map(({email:o,name:p},r)=>[i("span",{class:"contributor",title:`email: ${o}`},p),r!==a.value.length-1?",":""])]):null])])}}}),r0=M({name:"NormalPage",slots:Object,setup(n,{slots:e}){const s=En(),a=dn(),{isDarkmode:t}=Ta(),o=rn(),p=E(()=>s.value.toc||s.value.toc!==!1&&o.value.toc!==!1);return()=>i("main",{class:"vp-page",id:"main-content"},i(Pe("LocalEncrypt")?Kn("LocalEncrypt"):si,()=>{var r,c,u,d;return[(r=e.top)==null?void 0:r.call(e),s.value.cover?i("img",{class:"page-cover",src:Vn(s.value.cover),alt:a.value.title,"no-view":""}):null,i(Zk),i(p0),p.value?i(Rc,{headerDepth:s.value.headerDepth??o.value.headerDepth??2},{before:()=>{var v;return(v=e.tocBefore)==null?void 0:v.call(e)},after:()=>{var v;return(v=e.tocAfter)==null?void 0:v.call(e)}}):null,(c=e.contentBefore)==null?void 0:c.call(e),i(ep),(u=e.contentAfter)==null?void 0:u.call(e),i(l0),i(n0),Pe("CommentService")?i(Kn("CommentService"),{darkmode:t.value}):null,(d=e.bottom)==null?void 0:d.call(e)]}))}}),i0=M({name:"Layout",setup(){const n=vs(),e=rn(),s=dn(),a=En(),{isMobile:t}=Ea(),o=E(()=>{var p,r;return((p=e.value.blog)==null?void 0:p.sidebarDisplay)||((r=n.value.blog)==null?void 0:r.sidebarDisplay)||"mobile"});return()=>[i(sp),i(np,{},{default:()=>a.value.home?i(Xk):i(Gk,()=>i(r0,{key:s.value.path})),...o.value!=="none"?{navScreenBottom:()=>i(Kn("BloggerInfo"))}:{},...!t.value&&o.value==="always"?{sidebar:()=>i(Kn("BloggerInfo"))}:{}})]}}),c0=M({name:"NotFoundHint",setup(){const n=rn(),e=()=>{const s=n.value.routeLocales.notFoundMsg;return s[Math.floor(Math.random()*s.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},e())])}}),u0=M({name:"NotFound",slots:Object,setup(n,{slots:e}){const s=we(),a=rn(),{navigate:t}=to({to:a.value.home??s.value});return()=>[i(sp),i(np,{noSidebar:!0},()=>{var o;return i("main",{class:"vp-page not-found",id:"main-content"},((o=e.default)==null?void 0:o.call(e))||[i(c0),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},a.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>t()},a.value.routeLocales.home)])])})]}});const d0={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>',Wechat:'<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',Gmail:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>',BiliBili:'<svg xmlns="http://www.w3.org/2000/svg" class="icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>'},Ic={category:{"/":{path:"/category/",map:{}}},tag:{"/":{path:"/tag/",map:{}}}};import.meta.webpackHot&&(import.meta.webpackHot.accept(),__VUE_HMR_RUNTIME__.updateBlogCategory&&__VUE_HMR_RUNTIME__.updateBlogCategory(Ic));const Dc={article:{"/":{path:"/article/",keys:["v-77e3440a","v-79981ca9","v-7b4cf548","v-7d01cde7","v-7eb6a686","v-ff2901b6","v-fbbf5078","v-f8559f3a","v-f4ebedfc","v-a9d6b2a8","v-a66d016a","v-2632f347","v-27e7cbe6","v-299ca485","v-2b517d24","v-2d0655c3","v-2ebb2e62","v-30700701","v-3224dfa0","v-33d9b83f","v-596455e9","v-5b192e88","v-5cce0727","v-5e82dfc6","v-6037b865","v-61ec9104","v-63a169a3","v-65564242","v-670b1ae1","v-3d41e0e3","v-3ef6b982","v-40ab9221","v-42606ac0","v-4415435f","v-45ca1bfe","v-8f5a8800","v-8bf0d6c2","v-88872584","v-851d7446","v-81b3c308","v-7e4a11ca","v-7ae0608c","v-7776af4e","v-740cfe10","v-28f7c2bc","v-63e77b20","v-60213eb0","v-20ee9d86","v-1d84ec48","v-1a1b3b0a","v-16b189cc","v-6c412aac","v-68d7796e","v-656dc830","v-6e34a17a","v-fa8ee52c","v-f72533ee","v-f3bb82b0","v-f051d172","v-ece82034","v-e97e6ef6","v-e614bdb8","v-e2ab0c7a","v-df415b3c","v-942c1fe8","v-90c26eaa","v-5f498b30","v-6b5bab47","v-6d1083e6","v-6ec55c85","v-707a3524","v-722f0dc3","v-73e3e662","v-7598bf01","v-774d97a0","v-7902703f","v-c2e5e42e","v-bf7c32f0","v-8403a022","v-8099eee4","v-7d303da6","v-79c68c68","v-6f4eb639","v-71038ed8","v-72b86777","v-746d4016","v-762218b5","v-77d6f154","v-798bc9f3","v-7b40a292","v-7cf57b31","v-baffce4a","v-b7961d0c","v-b42c6bce","v-b0c2ba90","v-ad590952","v-a9ef5814","v-a685a6d6","v-a31bf598","v-9fb2445a","v-9c48931c","v-513357c8","v-4dc9a68a","v-4a5ff54c","v-46f6440e","v-3ae21c12","v-37786ad4","v-340eb996","v-30a50858","v-2d3b571a","v-29d1a5dc","v-2667f49e","v-22fe4360","v-1f949222","v-15c05499","v-17752d38","v-192a05d7","v-1adede76","v-1c93b715","v-1e488fb4","v-1ffd6853","v-21b240f2","v-23671991","v-251bf230","v-4aa68fda","v-4c5b6879","v-4e104118","v-4fc519b7","v-5179f256","v-532ecaf5","v-54e3a394","v-56987c33","v-584d54d2","v-5a022d71","v-7f8ccb1b","v-fd7cb88c","v-fa13074e","v-f6a95610","v-f33fa4d2","v-efd5f394","v-ec6c4256","v-bfed7bf0","v-bc83cab2","v-b91a1974","v-b5b06836","v-b246b6f8","v-aedd05ba","v-ab73547c","v-a809a33e","v-a49ff200","v-c15f9c8c","v-bdf5eb4e","v-ba8c3a10","v-b72288d2","v-b3b8d794","v-b04f2656","v-ace57518","v-a97bc3da","v-a612129c","v-5afcd748","v-5793260a","v-542974cc","v-50bfc38e","v-4d561250","v-49ec6112","v-4682afd4","v-4318fe96","v-3faf4d58","v-3c459c1a","v-0767cf9d","v-091ca83c","v-0ad180db","v-0c86597a","v-0055f2c3","v-020acb62","v-03bfa401","v-05747ca0","v-0729553f","v-08de2dde","v-0a93067d","v-0c47df1c","v-0dfcb7bb","v-33875565","v-353c2e04","v-36f106a3","v-38a5df42","v-3a5ab7e1","v-3c0f9080","v-3dc4691f","v-d6cb3c78","v-d3618b3a","v-cff7d9fc","v-cc8e28be","v-c5bac642","v-c2511504","v-bee763c6","v-bb7db288","v-70687734","v-6cfec5f6","v-699514b8","v-662b637a","v-62c1b23c","v-5f5800fe","v-5bee4fc0","v-58849e82","v-551aed44","v-01544aa3","v-03092342","v-04bdfbe1","v-0672d480","v-33cf2509","v-3583fda8","v-3738d647","v-38edaee6","v-3aa28785","v-266cbe57","v-282196f6","v-29d66f95","v-2b8b4834","v-2d4020d3","v-2ef4f972","v-30a9d211","v-325eaab0","v-3413834f","v-599e20f9","v-5b52f998","v-5d07d237","v-5ebcaad6","v-60718375","v-05e216f0","v-027865b2","v-0078a5c6","v-022d7e65","v-03e25704","v-05972fa3","v-671ae07c","v-68cfb91b","v-6a8491ba","v-6c396a59","v-3296bd31","v-3a8682f9","v-71b3b66f","v-10d9f538","v-85bcb294","v-1ff273ed","v-21a74c8c","v-235c252b","v-2510fdca","v-26c5d669","v-287aaf08","v-2a2f87a7","v-2be46046","v-2d9938e5","v-5323d68f"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:[]}}};import.meta.webpackHot&&(import.meta.webpackHot.accept(),__VUE_HMR_RUNTIME__.updateBlogType&&__VUE_HMR_RUNTIME__.updateBlogType(Dc));const Ml=Y(Ic),Vc=(n="")=>{const e=dn(),s=Xn(),a=we();return E(()=>{var t;const o=n||((t=En().value.blog)==null?void 0:t.key)||"";if(!o)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const p=s.getRoutes();if(!Ml.value[o])throw new Error(`useBlogCategory: key ${o} is invalid`);const r=Ml.value[o][a.value],c={path:r.path,map:{}};for(const u in r.map){const d=r.map[u];c.map[u]={path:d.path,items:[]};for(const v of d.keys){const f=p.find(({name:k})=>k===v);if(f){const k=ga(s,f.path);c.map[u].items.push({path:k.path,info:k.meta})}}e.value.path===d.path&&(c.currentItems=c.map[u].items)}return c})},Nl=Y(Dc),yt=(n="")=>{const e=Xn(),s=we();return E(()=>{var a;const t=n||((a=En().value.blog)==null?void 0:a.key)||"";if(!t)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Nl.value[t])throw new Error(`useBlogType: key ${n} is invalid`);const o=e.getRoutes(),p=Nl.value[t][s.value],r={path:p.path,items:[]};for(const c of p.keys){const u=o.find(({name:d})=>d===c);if(u){const d=ga(e,u.path);r.items.push({path:d.path,info:d.meta})}}return r})};const v0="/assets/hero-197a9d2d.jpg",Cc=Symbol.for("categoryMap"),xa=()=>{const n=kn(Cc);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},m0=()=>{const n=Vc("category");ee(Cc,n)},Sa=()=>{const n=vs(),e=rn();return E(()=>({...n.value.blog,...e.value.blog}))},jc=Symbol.for("tagMap"),Aa=()=>{const n=kn(jc);if(!n)throw new Error("useTagMap() is called without provider.");return n},f0=()=>{const n=Vc("tag");ee(jc,n)},k0=n=>{const e=rn();return E(()=>{const{[gn.author]:s}=n.value;return s?ca(s):s===!1?[]:ca(e.value.author,!1)})},_0=n=>{const e=xa();return E(()=>di(n.value[gn.category]).map(s=>({name:s,path:e.value.map[s].path})))},h0=n=>{const e=Aa();return E(()=>vi(n.value[gn.tag]).map(s=>({name:s,path:e.value.map[s].path})))},b0=n=>E(()=>{const{[gn.date]:e}=n.value;return Ho(e)}),g0=n=>{const e=qs(n,"info"),s=Sa(),a=k0(e),t=_0(e),o=h0(e),p=b0(e),r=Yi(),c=E(()=>({author:a.value,category:t.value,date:p.value,localizedDate:e.value[gn.localizedDate]||"",tag:o.value,isOriginal:e.value[gn.isOriginal]||!1,readingTime:e.value[gn.readingTime]||null,readingTimeLocale:e.value[gn.readingTime]&&r.value?Ki(e.value[gn.readingTime],r.value):null,pageview:n.path})),u=E(()=>s.value.articleInfo);return{info:c,items:u}},Mc=Symbol(""),La=()=>{const n=kn(Mc);if(!n)throw new Error("useArticles() is called without provider.");return n},y0=()=>{const n=yt("article");ee(Mc,n)},Nc=Symbol(""),ap=()=>{const n=kn(Nc);if(!n)throw new Error("useStars() is called without provider.");return n},w0=()=>{const n=yt("star");ee(Nc,n)},$c=Symbol(""),tp=()=>{const n=kn($c);if(!n)throw new Error("useTimelines() is called without provider.");return n},E0=()=>{const n=yt("timeline"),e=E(()=>{const s=[];return n.value.items.forEach(({info:a,path:t})=>{const o=Ho(a[gn.date]),p=o==null?void 0:o.getFullYear(),r=o?o.getMonth()+1:null,c=o==null?void 0:o.getDate();p&&r&&c&&((!s[0]||s[0].year!==p)&&s.unshift({year:p,items:[]}),s[0].items.push({date:`${r}/${c}`,info:a,path:t}))}),{...n.value,config:s.reverse()}});ee($c,e)},T0=()=>{y0(),m0(),w0(),f0(),E0()};var x0=M({name:"SocialMedia",setup(){const n=Sa(),e=zs(),s=E(()=>{const a=n.value.medias;return a?ba(a).map(([t,o])=>({name:t,icon:d0[t],url:o})):[]});return()=>s.value.length?i("div",{class:"vp-social-medias"},s.value.map(({name:a,icon:t,url:o})=>i("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":a,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:t}))):null}}),op=M({name:"BloggerInfo",setup(){const n=Sa(),e=ft(),s=rn(),a=La(),t=xa(),o=Aa(),p=tp(),r=wa(),c=E(()=>{var f;return n.value.name||((f=ca(s.value.author)[0])==null?void 0:f.name)||e.value.title}),u=E(()=>n.value.avatar||s.value.logo),d=E(()=>s.value.blogLocales),v=E(()=>n.value.intro);return()=>{const{article:f,category:k,tag:b,timeline:T}=d.value,S=[[a.value.path,a.value.items.length,f],[t.value.path,ge(t.value.map).length,k],[o.value.path,ge(o.value.map).length,b],[p.value.path,p.value.items.length,T]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...v.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>r(v.value)}:{}},[u.value?i("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:Vn(u.value),property:"image",alt:"Blogger Avatar"}):null,c.value?i("div",{class:"vp-blogger-name",property:"name"},c.value):null,n.value.description?i("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,v.value?i("meta",{property:"url",content:Vn(v.value)}):null]),i("div",{class:"vp-blog-counts"},S.map(([y,A,w])=>i(Cn,{class:"vp-blog-count",to:y},()=>[i("div",{class:"count"},A),i("div",w)]))),i(x0)])}}});const uo=()=>i(pn,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));uo.displayName="CategoryIcon";const vo=()=>i(pn,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));vo.displayName="TagIcon";const pp=()=>i(pn,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));pp.displayName="TimelineIcon";const qc=()=>i(pn,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));qc.displayName="SlideIcon";const Bc=()=>i(pn,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Bc.displayName="StickyIcon";const pt=()=>i(pn,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));pt.displayName="ArticleIcon";const Hc=()=>i(pn,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Hc.displayName="BookIcon";const zc=()=>i(pn,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));zc.displayName="LinkIcon";const Fc=()=>i(pn,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Fc.displayName="ProjectIcon";const Wc=()=>i(pn,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Wc.displayName="FriendIcon";const mo=()=>i(pn,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));mo.displayName="SlideDownIcon";const Jc=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Jc.displayName="EmptyIcon";const Uc=()=>i(pn,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Uc.displayName="LockIcon";var S0=M({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const s=qs(n,"info"),{info:a,items:t}=g0(n);return()=>{var o,p,r;const{[gn.title]:c,[gn.type]:u,[gn.isEncrypted]:d=!1,[gn.cover]:v,[gn.excerpt]:f,[gn.sticky]:k}=s.value,b=a.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((o=e.cover)==null?void 0:o.call(e,{cover:v}))||(v?[i("img",{class:"vp-article-cover",src:Vn(v)}),i("meta",{property:"image",content:Vn(v)})]:[]),k?i(Bc):null,i(Cn,{to:n.path},()=>{var T;return((T=e.title)==null?void 0:T.call(e,{title:c,isEncrypted:d,type:u}))||i("header",{class:"vp-article-title"},[d?i(Uc):null,u===Qi.slide?i(qc):null,i("span",{property:"headline"},c)])}),((p=e.excerpt)==null?void 0:p.call(e,{excerpt:f}))||(f?i("div",{class:"vp-article-excerpt",innerHTML:f}):null),i("hr",{class:"vp-article-hr"}),((r=e.info)==null?void 0:r.call(e,{info:b}))||i(Lc,{info:b,...t.value?{items:t.value}:{}})]))}}}),A0=M({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:e}){let s;const a=rn(),t=Y(""),o=E(()=>a.value.paginationLocales),p=E(()=>Math.ceil(n.total/n.perPage)),r=E(()=>!!p.value&&p.value!==1),c=E(()=>p.value<7?!1:n.current>4),u=E(()=>p.value<7?!1:n.current<p.value-3),d=E(()=>{const{current:k}=n;let b=1,T=p.value;const S=[];p.value>=7&&(k<=4&&k<p.value-3?(b=1,T=5):k>4&&k>=p.value-3?(T=p.value,b=p.value-4):p.value>7&&(b=k-2,T=k+2));for(let y=b;y<=T;y++)S.push(y);return S}),v=k=>e("updateCurrentPage",k),f=k=>{const b=parseInt(k);b<=p.value&&b>0?v(b):s.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/g,p.value.toString())}`)};return wn(()=>{s=new pm}),()=>i("div",{class:"vp-pagination"},r.value?i("div",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[n.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>v(n.current-1)},o.value.prev):null,c.value?[i("div",{role:"navigation",onClick:()=>v(1)},1),i("div",{class:"ellipsis"},"...")]:null,d.value.map(k=>i("div",{key:k,class:{active:n.current===k},role:"navigation",onClick:()=>v(k)},k)),u.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>v(p.value)},p.value)]:null,n.current<p.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>v(n.current+1)},o.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${o.value.navigate}: `),i("input",{id:"navigation-text",value:t.value,onInput:({target:k})=>{t.value=k.value},onKeydown:k=>{k.key==="Enter"&&(k.preventDefault(),f(t.value))}}),i("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>f(t.value)},o.value.action)])]):[])}}),lp=M({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const e=me(),s=Xn(),a=Sa(),t=Y(1),o=E(()=>a.value.articlePerPage||10),p=E(()=>n.items.slice((t.value-1)*o.value,t.value*o.value)),r=c=>{t.value=c;const u={...e.query};u.page===c.toString()||c===1&&!u.page||(c===1?delete u.page:u.page=c.toString(),s.push({path:e.path,query:u}))};return wn(()=>{const{page:c}=e.query;r(c?Number(c):1),l(()=>import("./pageview-f3a57daf.js"),[]).then(({updatePageview:u})=>{u()}),ln(t,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)}),ln(()=>e.query,({page:u})=>{r(u?Number(u):1)})}),()=>i("div",{id:"article-list",class:"vp-article-list"},p.value.length?[...p.value.map(({info:c,path:u},d)=>i(fn,{appear:!0,delay:d*.04},()=>i(S0,{key:u,info:c,path:u}))),i(A0,{current:t.value,perPage:o.value,total:n.items.length,onUpdateCurrentPage:r})]:i(Jc))}}),rp=M({name:"CategoryList",setup(){const n=dn(),e=xa();return()=>i("ul",{class:"vp-category-list"},ba(e.value.map).map(([s,{path:a,items:t}])=>i("li",{class:["vp-category",`vp-category${_t(s,9)}`,{active:a===n.value.path}]},i(Cn,{to:a},()=>[s,i("span",{class:"count"},t.length)]))))}}),ip=M({name:"TagList",setup(){const n=En(),e=Aa(),s=a=>{var t;return a===((t=n.value.blog)==null?void 0:t.name)};return()=>i("ul",{class:"tag-list-wrapper"},ba(e.value.map).map(([a,{path:t,items:o}])=>i("li",{class:["tag",`tag${_t(a,9)}`,{active:s(a)}]},i(Cn,{to:t},()=>[a,i("span",{class:"tag-num"},o.length)]))))}}),L0=M({name:"TimelineList",setup(){const n=rn(),e=tp(),s=wa(),a=E(()=>n.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>s(e.value.path)},[i(pp),i("span",{class:"num"},e.value.items.length),a.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},e.value.config.map(({year:t,items:o},p)=>i(fn,{appear:!0,delay:.08*(p+1)},()=>i("li",[i("h3",{class:"timeline-year"},t),i("ul",{class:"timeline-year-wrapper"},o.map(({date:r,info:c,path:u})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},r),i(Cn,{class:"timeline-title",to:u},()=>c[gn.title])])))])))))])}}),Gc=M({name:"InfoList",setup(){const n=rn(),e=La(),s=xa(),a=E(()=>ge(s.value.map).length),t=ap(),o=Aa(),p=E(()=>ge(o.value.map).length),r=wa(),c=Y("article"),u=E(()=>n.value.blogLocales),d=[["article",pt],["category",uo],["tag",vo],["timeline",pp]];return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},d.map(([v,f])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=v}},i("div",{class:["icon-wrapper",{active:c.value===v}],"aria-label":u.value[v],"data-balloon-pos":"up"},i(f))))),i(fn,()=>c.value==="article"?i("div",{class:"vp-sticky-article-wrapper"},[i("div",{class:"title",onClick:()=>r(e.value.path)},[i(pt),i("span",{class:"num"},e.value.items.length),u.value.article]),i("hr"),i("ul",{class:"vp-sticky-articles"},t.value.items.map(({info:v,path:f},k)=>i(fn,{appear:!0,delay:.08*(k+1)},()=>i("li",{class:"vp-sticky-article"},i(Cn,{to:f},()=>v[gn.title])))))]):c.value==="category"?i("div",{class:"vp-category-wrapper"},[a.value?i("div",{class:"title",onClick:()=>r(s.value.path)},[i(uo),i("span",{class:"num"},a.value),u.value.category]):null,i("hr"),i(fn,{delay:.04},()=>i(rp))]):c.value==="tag"?i("div",{class:"vp-tag-wrapper"},[p.value?i("div",{class:"title",onClick:()=>r(o.value.path)},[i(vo),i("span",{class:"num"},p.value),u.value.tag]):null,i("hr"),i(fn,{delay:.04},()=>i(ip))]):i(fn,()=>i(L0)))])}}),wt=M({name:"BlogWrapper",slots:Object,setup(n,{slots:e}){const{isMobile:s}=Ea();return()=>[i(sp),i(np,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>i(op),...s.value?{sidebar:()=>i(Gc)}:{}})]}});const Kc=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(fn,()=>i(op)),i(fn,{delay:.04},()=>i(Gc))]);Kc.displayName="InfoPanel";var Et=Kc,R0=M({name:"BlogPage",components:{CategoryList:rp,TagList:ip},setup(){const n=dn(),e=En(),s=xa(),a=Aa(),t=E(()=>e.value.blog||{}),o=E(()=>{const{key:r=""}=t.value;return r==="category"?"CategoryList":r==="tag"?"TagList":null}),p=E(()=>{const{name:r="",key:c=""}=t.value;return c==="category"?r?s.value.map[r].items:[]:c==="tag"?r?a.value.map[r].items:[]:[]});return()=>i(wt,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(fn,()=>o.value?i(Kn(o.value)):null),t.value.name?i(fn,{appear:!0,delay:.24},()=>i(lp,{key:n.value.path,items:p.value})):null]),i(fn,{delay:.16},()=>i(Et))])))}}),P0=M({name:"BlogHero",slots:Object,setup(n,{slots:e}){const s=Uv(),a=En(),t=ve(),o=E(()=>a.value.heroFullScreen??!1),p=E(()=>{const{heroText:c,heroImage:u,heroImageDark:d,heroAlt:v,heroImageStyle:f,tagline:k=null}=a.value;return{text:c===!1?null:c||s.value,image:u?Vn(u):null,imageDark:d?Vn(d):null,heroStyle:f,alt:v||"hero image",tagline:k,isFullScreen:o.value}}),r=E(()=>{const{bgImage:c,bgImageStyle:u}=a.value;return{image:cn(c)?Vn(c):c===!1?null:v0,bgStyle:u,isFullScreen:o.value}});return()=>{var c,u;return a.value.hero===!1?null:i("div",{ref:t,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!r.value.image}]},[((c=e.heroBg)==null?void 0:c.call(e,r.value))||(r.value.image?i("div",{class:"vp-blog-mask",style:[{background:`url(${r.value.image}) center/cover no-repeat`},r.value.bgStyle]}):null),((u=e.heroInfo)==null?void 0:u.call(e,p.value))||[i(fn,{appear:!0,type:"group",delay:.04},()=>[p.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:p.value.imageDark}],style:p.value.heroStyle,src:p.value.image,alt:p.value.alt}):null,p.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:p.value.heroStyle,src:p.value.imageDark,alt:p.value.alt}):null]),i(fn,{appear:!0,delay:.08},()=>p.value.text?i("h1",{class:"vp-blog-hero-title"},p.value.text):null),i(fn,{appear:!0,delay:.12},()=>p.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:p.value.tagline}):null)],p.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:t.value.clientHeight,behavior:"smooth"})}},[i(mo),i(mo)]):null])}}});const O0=["link","article","book","project","friend"];var I0=M({name:"ProjectPanel",components:{ArticleIcon:pt,BookIcon:Hc,FriendIcon:Wc,LinkIcon:zc,ProjectIcon:Fc},setup(){const n=En(),e=zs(),s=wa(),a=(t="",o="icon")=>O0.includes(t)?i(Kn(`${t}-icon`)):us(t)?i("img",{class:"vp-project-image",src:t,alt:o}):ht(t)?i("img",{class:"vp-project-image",src:Vn(t),alt:o}):i(Yn,{icon:t});return()=>{var t;return(t=n.value.projects)!=null&&t.length?i("div",{class:"vp-project-panel"},n.value.projects.map(({icon:o,link:p,name:r,desc:c},u)=>i("div",{class:["vp-project-card",{[`project${u%9}`]:!e.value}],onClick:()=>s(p)},[a(o,r),i("div",{class:"vp-project-name"},r),i("div",{class:"vp-project-desc"},c)]))):null}}}),D0=M({name:"BlogHome",setup(){const n=La();return()=>i("div",{class:"vp-page vp-blog"},[i(P0),i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-home",id:"main-content"},[i(fn,{appear:!0,delay:.16},()=>i(I0)),i(fn,{appear:!0,delay:.24},()=>i(lp,{items:n.value.items}))]),i(fn,{appear:!0,delay:.16},()=>i(Et))]),i(fn,{appear:!0,delay:.28},()=>i(ep))])}}),V0=M({name:"BlogHome",setup(){return()=>i(wt,()=>i(D0))}}),Yc=M({name:"ArticleType",setup(){const n=dn(),e=we(),s=rn(),a=La(),t=ap(),o=E(()=>{const p=s.value.blogLocales;return[{text:p.all,path:a.value.path},{text:p.star,path:t.value.path},...[].map(({key:r,path:c})=>({text:p[r],path:c.replace(/^\//,e.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},o.value.map(p=>i("li",{class:["vp-article-type",{active:p.path===n.value.path}]},i(Cn,{to:p.path},()=>p.text))))}}),C0=M({name:"BlogPage",setup(){const n=yt(),e=En(),s=dn(),a=La(),t=ap(),o=E(()=>{const{key:p="",type:r}=e.value.blog||{};return p==="star"?t.value.items:r==="type"&&p?n.value.items:a.value.items});return()=>i(wt,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(fn,()=>i(Yc)),i(fn,{appear:!0,delay:.24},()=>i(lp,{key:s.value.path,items:o.value}))]),i(fn,{delay:.16},()=>i(Et))])))}}),j0=M({name:"TimelineItems",setup(){const n=Sa(),e=rn(),s=tp(),a=E(()=>n.value.timeline||e.value.blogLocales.timelineTitle),t=E(()=>s.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(fn,()=>i("li",{class:"motto"},a.value)),i(Rc,{items:t.value}),s.value.config.map(({year:o,items:p},r)=>i(fn,{appear:!0,delay:.08*(r+1),type:"group"},()=>[i("h3",{key:"title",id:o,class:"timeline-year-title"},i("span",o)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},p.map(({date:c,info:u,path:d})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(Cn,{class:"timeline-title",to:d},()=>u[gn.title])])))])]))]))}}),M0=M({name:"Timeline",components:{ArticleType:Yc,CategoryList:rp,TagList:ip},setup(){return()=>i(wt,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(fn,{appear:!0,delay:.24},()=>i(j0))]),i(fn,{delay:.16},()=>i(Et))])))}});X1(Yn);const N0=qn({enhance:({app:n,router:e})=>{const{scrollBehavior:s}=e.options;e.options.scrollBehavior=async(...a)=>(await Pc().wait(),s(...a)),uk(n),n.component("BloggerInfo",op)},setup:()=>{dk(),kk(),T0()},layouts:{Layout:i0,NotFound:u0,BlogCategory:R0,BlogHome:V0,BlogType:C0,Timeline:M0}}),$0=n=>{const e=Nn("keydown",s=>{const a=s.key==="k"&&(s.ctrlKey||s.metaKey);!(s.key==="/")&&!a||(s.preventDefault(),n(),e())})},q0=n=>n.button===1||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey,B0=()=>{const n=Xn();return{hitComponent:({hit:e,children:s})=>({type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:e.url,onClick:a=>{q0(a)||(a.preventDefault(),n.push(al(e.url,"/")))},children:s},__v:null}),navigator:{navigate:({itemUrl:e})=>{n.push(al(e,"/"))}},transformSearchClient:e=>{const s=Ti(e.search,500);return{...e,search:async(...a)=>s(...a)}}}},H0=(n=[],e)=>[`lang:${e}`,...U(n)?n:[n]],z0=({buttonText:n="Search",buttonAriaLabel:e=n}={})=>`<button type="button" class="DocSearch DocSearch-Button" aria-label="${e}"><span class="DocSearch-Button-Container"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${n}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"><svg width="15" height="15" class="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`,F0=16,Xc=()=>{if(document.querySelector(".DocSearch-Modal"))return;const n=new Event("keydown");n.key="k",n.metaKey=!0,window.dispatchEvent(n),setTimeout(Xc,F0)},W0=n=>{const e="algolia-preconnect";(window.requestIdleCallback||setTimeout)(()=>{if(document.head.querySelector(`#${e}`))return;const a=document.createElement("link");a.id=e,a.rel="preconnect",a.href=`https://${n}-dsn.algolia.net`,a.crossOrigin="",document.head.appendChild(a)})},J0={appId:"B1SZXOAN50",apiKey:"3068368ebb2ca88821ae37fa2b2813a0",indexName:"dselegent",placeholder:"搜索文档",translations:{button:{buttonText:"搜索文档"}}};l(()=>import("./style-e9220a04.js"),[]),l(()=>import("./docsearch-1d421ddb.js"),[]);const U0=M({name:"Docsearch",props:{containerId:{type:String,required:!1,default:"docsearch-container"},options:{type:Object,required:!1,default:()=>J0}},setup(n){const e=B0(),s=mt(),a=we(),t=Y(!1),o=Y(!1),p=E(()=>{var u;return{...n.options,...(u=n.options.locales)==null?void 0:u[a.value]}}),r=async()=>{var d;const{default:u}=await l(()=>import("./index-82585c84.js"),[]);u({...e,...p.value,container:`#${n.containerId}`,searchParameters:{...p.value.searchParameters,facetFilters:H0((d=p.value.searchParameters)==null?void 0:d.facetFilters,s.value)}}),t.value=!0},c=()=>{o.value||t.value||(o.value=!0,r(),Xc(),ln(a,r))};return $0(c),wn(()=>W0(p.value.appId)),()=>{var u;return[i("div",{id:n.containerId,style:{display:t.value?"block":"none"}}),t.value?null:i("div",{onClick:c,innerHTML:z0((u=p.value.translations)==null?void 0:u.button)})]}}}),G0=qn({enhance({app:n}){n.component("Docsearch",U0)}}),K0=n=>{if(window.dataLayer&&window.gtag)return;const e=document.createElement("script");e.src=`https://www.googletagmanager.com/gtag/js?id=${n.id}`,e.async=!0,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),n.debug?gtag("config",n.id,{debug_mode:!0}):gtag("config",n.id)},Y0={id:"G-RWKZTY2P9R"},X0=qn({enhance(){K0(Y0)}}),Q0=qn({setup(){wn(()=>{console.log(String.raw`

__          __  _                            _                            _     _             _ 
\ \        / / | |                          | |                          | |   | |           | |
 \ \  /\  / /__| | ___ ___  _ __ ___   ___  | |_ ___    _ __ ___  _   _  | |__ | | ___   __ _| |
  \ \/  \/ / _ \ |/ __/ _ \| '_ ${"`"} _ \ / _ \ | __/ _ \  | '_ ${"`"} _ \| | | | | '_ \| |/ _ \ / _${"`"} | |
   \  /\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | | | | | | |_| | | |_) | | (_) | (_| |_|
    \/  \/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/  |_| |_| |_|\__, | |_.__/|_|\___/ \__, (_)
                                                                   __/ |                 __/ |  
                                                                  |___/                 |___/   

`)})}}),Wa=[Qv,zm,Y1,ef,tf,rf,mf,Af,Vf,Cf,Wf,Zf,N0,G0,X0,Q0],Z0=[["v-184f4da6","/intro.html",{y:"p",t:"个人介绍",i:"any"},["/intro","/intro.md"]],["v-8daa1a0e","/",{y:"h",t:"",i:"home"},["/index.html","/README.md"]],["v-1735a0be","/apps/Applist.html",{y:"p",t:"必备应用",i:"list",O:1},["/apps/Applist","/apps/Applist.md"]],["v-69693975","/apps/AppNotes.html",{y:"p",t:"工具笔记",i:"plugin",O:4},["/apps/AppNotes","/apps/AppNotes.md"]],["v-d967ed6c","/apps/ChatGPT.html",{y:"p",t:"ChatGPT",i:"creative",O:2},["/apps/ChatGPT","/apps/ChatGPT.md"]],["v-5c29014a","/apps/Chrome.html",{y:"p",t:"Chrome 扩展",i:"chrome",O:5},["/apps/Chrome","/apps/Chrome.md"]],["v-1d7dd2b7","/apps/design.html",{y:"p",t:"平面设计",i:"pic",O:3},["/apps/design","/apps/design.md"]],["v-1c7fca9e","/deploy/Cloudflare.html",{y:"p",t:"Cloudflare",i:"proxy",O:4},["/deploy/Cloudflare","/deploy/Cloudflare.md"]],["v-2b70157f","/deploy/DNS.html",{y:"p",t:"域名 DNS 托管",i:"sitemap",O:5},["/deploy/DNS","/deploy/DNS.md"]],["v-bc154f32","/deploy/GitHub.html",{y:"p",t:"GitHub",i:"github",O:3},["/deploy/GitHub","/deploy/GitHub.md"]],["v-7c5f209c","/deploy/Static.html",{y:"p",t:"静态部署",i:"generic",O:1},["/deploy/Static","/deploy/Static.md"]],["v-39dc98a2","/deploy/VPS.html",{y:"p",t:"服务器 VPS",i:"IO",O:2},["/deploy/VPS","/deploy/VPS.md"]],["v-00f6d5f1","/web/Comments.html",{y:"p",t:"评论插件",i:"comment",O:3},["/web/Comments","/web/Comments.md"]],["v-3cdca328","/web/docsify.html",{y:"p",t:"docsify",i:"edit",O:2},["/web/docsify","/web/docsify.md"]],["v-3b0b9f28","/web/VuePress.html",{y:"p",t:"VuePress",i:"vue",O:1},["/web/VuePress","/web/VuePress.md"]],["v-77e3440a","/back_end/linux/01.html",{e:`<h1> 01 【入门篇-介绍和安装】</h1>
<h2> 1.Linux课程介绍</h2>
<h3> 1.1 学习方向</h3>
<ul>
<li>linux运维工程师： 维护linux的服务器（一般大型企业）</li>
<li>linux嵌入式工程师： linux做驱动开发，或者linux的嵌入式</li>
<li>linux下开发项目
<img src="https://i0.hdslb.com/bfs/album/08c3b1b814156e29bf4e53e0b59f4961a9f0bc41.jpg" alt="学习方向" loading="lazy"></li>
</ul>
<h3> 1.2 应用领域</h3>`,r:{minutes:6.04,words:1812},y:"a",t:"01 【入门篇-介绍和安装】"},["/back_end/linux/01","/back_end/linux/01.md"]],["v-79981ca9","/back_end/linux/02.html",{e:`<h1> 02 【基础篇-vim编辑器 网络配置 远程登录】</h1>
<h2> 1.vi和vim编辑器</h2>
<h3> 1.1 vi和vim的基本介绍</h3>
<ul>
<li>所有Linux系统都会内置vi文本编辑器</li>
<li>vim是vi的升级版，可以主动以字体颜色分辨语法的正确性，代码补完和编译，错误跳转等功能。</li>
</ul>
<figure><img src="https://i0.hdslb.com/bfs/album/a0196d78f8e7e4af8150fc199185b84c90fc644a.png" alt="image-20220815123840409" tabindex="0" loading="lazy"><figcaption>image-20220815123840409</figcaption></figure>`,r:{minutes:23.25,words:6974},y:"a",t:"02 【基础篇-vim编辑器 网络配置 远程登录】"},["/back_end/linux/02","/back_end/linux/02.md"]],["v-7b4cf548","/back_end/linux/03.html",{e:`<h1> 03 【基础篇-系统管理】</h1>
<h2> 1.Linux 中的进程和服务</h2>
<p>计算机中，一个正在执行的程序或命令，被叫做“进程”（process）。</p>
<p>启动之后一只存在、常驻内存的进程，一般被称作“服务”（service）。</p>
<blockquote>
<p>详细操作后面说明</p>
</blockquote>
<h2> 2.systemctl 服务管理</h2>
<blockquote>
<p>service 服务管理（CentOS 6 版本-了解）</p>
<p>systemctl （CentOS 7 版本-重点掌握）</p>
</blockquote>`,r:{minutes:10.21,words:3063},y:"a",t:"03 【基础篇-系统管理】"},["/back_end/linux/03","/back_end/linux/03.md"]],["v-7d01cde7","/back_end/linux/04.html",{e:`<h1> 04 【实操篇-帮助命令 文件目录管理基础知识】</h1>
<h2> 1.帮助命令</h2>
<p>通常linux命令都十分简单，但是有些还是有些复杂度的。比如<code>find</code>，<code>ps</code>这种命令，如果要照顾到所有的场合，可能需要非常巨大的篇幅。但是，万一用到这种偏门的场合怎么办？</p>
<p>全面了解一下是非常有必要的，以便在使用的时候能够唤起记忆中最浅显的印象。然后剩下的，就可以交给类似于<code>man </code>的这种命令了。Linux上的每一个命令，都会有配套的帮助文件，这远比网络上那些转来转去的信息，正确的多。</p>
<p>正式介绍一下下面的两个命令：</p>`,r:{minutes:13.14,words:3942},y:"a",t:"04 【实操篇-帮助命令 文件目录管理基础知识】"},["/back_end/linux/04","/back_end/linux/04.md"]],["v-7eb6a686","/back_end/linux/05.html",{e:`<h1> 05【实操篇-文件目录类命令】</h1>
<h2> 1.pwd 显示当前工作目录的绝对路径</h2>
<blockquote>
<p>pwd:print working directory 打印工作目录</p>
</blockquote>
<p>到现在为止，我们还不知道自己在系统的什么地方。在浏览器上，我们能够通过导航栏上的url，了解到自己在互联网上的具体坐标。相似的功能，是由<code>pwd</code>命令提供的，它能够输出当前的工作目录。</p>
<p><code>pwd</code>命令是非常非常常用的命令，尤其是在一些<code>命令提示符</code>设置不太友好的机器上。另外，它也经常用在shell脚本中，用来判断当前的运行目录是否符合需求。</p>`,r:{minutes:20.35,words:6106},y:"a",t:"05【实操篇-文件目录类命令】"},["/back_end/linux/05","/back_end/linux/05.md"]],["v-ff2901b6","/back_end/linux/06.html",{e:`<h1> 06 【实操篇-时间日期类 用户和用户组管理】</h1>
<h2> 1.时间日期类</h2>
<h3> 1.1 显示当前日期</h3>
<ul>
<li>基本语法</li>
</ul>
<ol>
<li><code>date</code> (功能描述:显示当前时间)</li>
<li><code>date +%Y</code>(功能描述:显示当前年份)</li>
<li><code>date +%m</code>(功能描述:显示当前月份)</li>
<li><code>date +%d</code> (功能描述:显示当前是哪一天)</li>
<li><code>date "+%Y-%m-%d %H:%M:%S"</code> (功能描述:显示年月日时分秒)</li>
<li><code>date +%s</code> (功能描述:显示当前日期时间戳)</li>
</ol>`,r:{minutes:33.59,words:10076},y:"a",t:"06 【实操篇-时间日期类 用户和用户组管理】"},["/back_end/linux/06","/back_end/linux/06.md"]],["v-fbbf5078","/back_end/linux/07.html",{e:`<h1> 07 【实操篇-文件权限和搜索查找类命令】</h1>
<h2> 1.文件权限类</h2>
<h3> 1.1 权限管理的重要性</h3>
<p>和 Windows 系统不同，Linux 系统为每个文件都添加了很多的属性，最大的作用就是维护数据的安全。举个简单的例子，在你的 Linux 系统中，和系统服务相关的文件通常只有 root 用户才能读或写，就拿 /etc/shadow 这个文件来说，此文件记录了系统中所有用户的密码数据，非常重要，因此绝不能让任何人读取（否则密码数据会被窃取），只有 root 才可以有读取权限。</p>
<p>此外，如果你有一个软件开发团队，你希望团队中的每个人都可以使用某一些目录下的文件，而非团队的其他人则不予以开放。通过前面章节的学习我们知道，只需要将团队中的所有人加入新的群组，并赋予此群组读写目录的权限，即可实现要求。反之，如果你的目录权限没有做好，就很难防止其他人在你的系统中乱搞。</p>`,r:{minutes:17.87,words:5360},y:"a",t:"07 【实操篇-文件权限和搜索查找类命令】"},["/back_end/linux/07","/back_end/linux/07.md"]],["v-f8559f3a","/back_end/linux/08.html",{e:`<h1> 08 【实操篇-压缩和解压类】</h1>
<h2> 1.打包（归档）和压缩</h2>
<p>归档，也称为打包，指的是一个文件或目录的集合，而这个集合被存储在一个文件中。归档文件没有经过压缩，因此，它占用的空间是其中所有文件和目录的总和。</p>
<blockquote>
<p>通常，归档总是会和系统（数据）备份联系在一起，不过，有关数据备份的内容，留到后续章节讲，本章仅学习归档命令的基本使用。</p>
</blockquote>
<p>和归档文件类似，压缩文件也是一个文件和目录的集合，且这个集合也被存储在一个文件中，但它们的不同之处在于，压缩文件采用了不同的存储方式，使其所占用的磁盘空间比集合中所有文件大小的总和要小。</p>`,r:{minutes:11.77,words:3531},y:"a",t:"08 【实操篇-压缩和解压类】"},["/back_end/linux/08","/back_end/linux/08.md"]],["v-f4ebedfc","/back_end/linux/09.html",{e:`<h1> 09 【实操篇-磁盘查看和分区类】</h1>
<h2> 1.du 查看文件和目录占用的磁盘空间</h2>
<p>du: disk usage 磁盘占用情况</p>
<p>du 是统计目录或文件所占磁盘空间大小的命令。</p>
<p>需要注意的是，使用"ls -r"命令是可以看到文件的大小的。但是大家会发现，在使用"ls -r"命令査看目录大小时，目录的大小多数是 4KB，这是因为目录下的子目录名和子文件名是保存到父目录的 block（默认大小为 4KB）中的，如果父目录下的子目录和子文件并不多，一个 block 就能放下，那么这个父目录就只占用了一个 block 大小。</p>
<p>大家可以将其想象成图书馆的书籍目录和实际书籍。如果我们用"ls-l"命令査看，则只能看到这些书籍占用了 1 页纸的书籍目录，但是实际书籍到底有多少是看不到的，哪怕它堆满了几个房间。</p>`,r:{minutes:15,words:4501},y:"a",t:"09 【实操篇-磁盘查看和分区类】"},["/back_end/linux/09","/back_end/linux/09.md"]],["v-a9d6b2a8","/back_end/linux/10.html",{e:`<h1> 10 【实操篇-进程管理类】</h1>
<p>无论是 Linux 系统管理员还是普通用户，监视系统进程的运行情况并适时终止一些失控的进程，是每天的例行事务。和 Linux 系统相比，进程管理在 Windows 中更加直观，它主要是使用"任务管理器"来进行进程管理的。</p>
<p>通常，使用"任务管理器"主要有 3 个目的：</p>
<ol>
<li>利用"应用程序"和"进程"标签来査看系统中到底运行了哪些程序和进程；</li>
<li>利用"性能"和"用户"标签来判断服务器的健康状态；</li>
<li>在"应用程序"和"进程"标签中强制中止任务和进程；</li>
</ol>
<p>Linux 中虽然使用命令进行进程管理，但是进程管理的主要目的是一样的，即查看系统中运行的程序和进程、判断服务器的健康状态和强制中止不需要的进程。</p>`,r:{minutes:23.34,words:7002},y:"a",t:"10 【实操篇-进程管理类】"},["/back_end/linux/10","/back_end/linux/10.md"]],["v-a66d016a","/back_end/linux/11.html",{e:`<h1> 11 【实操篇-定时任务 软件安装 克隆虚拟机】</h1>
<h2> 1.crontab 系统定时任务</h2>
<p>在实际工作中，系统的定时任务一般是需要重复执行的，这就需要使用 crontab 命令来执行循环定时任务。</p>
<p>每个用户都可以实现自己的 crontab 定时任务，只需使用这个用户身份执行“crontab -e”命令即可。当然，这个用户不能写入 /etc/cron.deny 文件。</p>
<p>crontab 命令的基本格式如下：</p>
<p><code>[root@localhost ~]# crontab [选项] [file]</code></p>`,r:{minutes:26.42,words:7925},y:"a",t:"11 【实操篇-定时任务 软件安装 克隆虚拟机】"},["/back_end/linux/11","/back_end/linux/11.md"]],["v-2632f347","/back_end/nodeJs/01.html",{e:`<h1> 01 【nodejs简介】</h1>
<h2> 1.前言</h2>
<p>Node 的重要性已经不言而喻，很多互联网公司都已经有大量的高性能系统运行在 Node 之上。Node 凭借其单线程、异步等举措实现了极高的性能基准。此外，目前最为流行的 Web 开发模式是前后端分离的形式，即前端开发者与后端开发者在自己喜欢的 IDE 上独立进行开发，然后通过 HTTP 或是 RPC 等方式实现数据与流程的交互。这种开发模式在 Node 的强大功能的引领下变得越来越高效，也越来越受到各个互联网公司的青睐。</p>
<h3> 1.1 前端同学为什么要学习后端/后端同学为什么要学习前端</h3>
`,r:{minutes:10.08,words:3024},y:"a",t:"01 【nodejs简介】"},["/back_end/nodeJs/01","/back_end/nodeJs/01.md"]],["v-27e7cbe6","/back_end/nodeJs/02.html",{e:`<h1> 02 【nodejs开发环境安装】</h1>
<h2> 1.版本介绍</h2>
<ul>
<li>在命令窗口中输入 node -v 可以查看版本</li>
<li>0.x 完全不技术 ES6</li>
<li>4.x 部分支持 ES6 特性</li>
<li>5.x 部分支持ES6特性（比4.x多些），属于过渡产品，现在来说应该没有什么理由去用这个了</li>
<li>6.x 支持98%的 ES6 特性</li>
<li>8.x 支持 ES6 特性</li>
</ul>
<h2> 2.Node.js 运行环境配置：通过 Node.js 安装包（不推荐）</h2>
<p>去 Node.js 的<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">官网</a>下载安装包：</p>`,r:{minutes:3.66,words:1099},y:"a",t:"02 【nodejs开发环境安装】"},["/back_end/nodeJs/02","/back_end/nodeJs/02.md"]],["v-299ca485","/back_end/nodeJs/03.html",{e:`<h1> 03 【npm的使用】</h1>
<h2> 1.包和npm</h2>
<h3> 1.1 什么是包</h3>
<p>由于 Node 是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（package）的概念： 与核心模块类似，就是将一些预先设计好的功能或者说 API 封装到一个文件夹，提供给开发者使用。</p>
<p>Node 本身并没有太多的功能性 API，所以市面上涌现出大量的第三方人员开发出来的 Package。</p>
<h3> 1.2 包的加载机制</h3>
<p>Node.js中使用<code>CommonJs</code>模块化机制，通过<code>npm</code>下载的第三方包，我们在项目中引入第三方包都是：<code>let xx = require('第三方包名')</code>，究竟<code>require</code>方法加载第三方包的原理机制是什么，今天我们来探讨下。</p>`,r:{minutes:10.54,words:3163},y:"a",t:"03 【npm的使用】"},["/back_end/nodeJs/03","/back_end/nodeJs/03.md"]],["v-2b517d24","/back_end/nodeJs/04.html",{e:`<h1> 04 【nodejs模块化规范：CommonJS】</h1>
<h2> 1.前言</h2>
<p>网站越来越复杂，js代码、js文件也越来越多，会遇到<strong>一些问题</strong>：</p>
<ul>
<li>文件依赖</li>
<li>全局污染、命名冲突</li>
</ul>
<p>程序模块化包括：</p>
<ul>
<li>日期模块</li>
<li>数学计算模块</li>
<li>日志模块</li>
<li>登陆认证模块</li>
<li>报表展示模块等。</li>
</ul>
<p>所有这些模块共同组成了程序软件系统。</p>
<p>一次编写，多次使用，才是提高效率的核心。</p>`,r:{minutes:11.21,words:3362},y:"a",t:"04 【nodejs模块化规范：CommonJS】"},["/back_end/nodeJs/04","/back_end/nodeJs/04.md"]],["v-2d0655c3","/back_end/nodeJs/05.html",{e:`<h1> 05 【nodejs内置模块（上）】</h1>
<h2> 1.nodejs 的官方API文档</h2>
<ul>
<li>Node.js 的API文档（英文）： <a href="https://nodejs.org/docs/latest-v8.x/api/index.html" target="_blank" rel="noopener noreferrer">https://nodejs.org/docs/latest-v8.x/api/index.html</a></li>
<li>Node.js 的API文档（中文）：<a href="http://nodejs.cn/api/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/api/</a></li>
</ul>`,r:{minutes:19.4,words:5819},y:"a",t:"05 【nodejs内置模块（上）】"},["/back_end/nodeJs/05","/back_end/nodeJs/05.md"]],["v-2ebb2e62","/back_end/nodeJs/06.html",{e:`<h1> 06 【nodejs内置模块（中）】</h1>
<h2> 1.路劲处理模块 path</h2>
<h3> 1.1 模块概览</h3>
<p>在nodejs中，path是个使用频率很高，但却让人又爱又恨的模块。部分因为文档说的不够清晰，部分因为接口的平台差异性。</p>
<p>将path的接口按照用途归类，仔细琢磨琢磨，也就没那么费解了。</p>
<h3> 1.2 获取路径/文件名/扩展名</h3>
<ul>
<li>获取路径：path.dirname(filepath)</li>
<li>获取文件名：path.basename(filepath)</li>
<li>获取扩展名：path.extname(filepath)</li>
</ul>`,r:{minutes:9.65,words:2894},y:"a",t:"06 【nodejs内置模块（中）】"},["/back_end/nodeJs/06","/back_end/nodeJs/06.md"]],["v-30700701","/back_end/nodeJs/07.html",{e:`<h1> 07 【nodejs内置模块（下）】</h1>
<h2> 1.stream 模块</h2>
<p><code>stream</code>是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。</p>
<p>什么是流？流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方（比如你家的洗手池）。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流（stdin）。</p>
<p>如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。</p>`,r:{minutes:9.75,words:2926},y:"a",t:"07 【nodejs内置模块（下）】"},["/back_end/nodeJs/07","/back_end/nodeJs/07.md"]],["v-3224dfa0","/back_end/nodeJs/08.html",{e:`<h1> 08 【爬虫】</h1>
<p><strong>puppeteer</strong></p>
<p><strong>文档:<a href="http://www.puppeteerjs.com/" target="_blank" rel="noopener noreferrer">puppeteer.js中文文档|puppeteerjs中文网|puppeteer爬虫教程</a></strong></p>
<p>Puppeteer本身依赖6.4以上的Node，但是为了异步超级好用的<a href="http://es6.ruanyifeng.com/#docs/async" target="_blank" rel="noopener noreferrer">async/await</a>，推荐使用7.6版本以上的Node。另外headless Chrome本身对服务器依赖的库的版本要求比较高，centos服务器依赖偏稳定，v6很难使用headless Chrome，提升依赖版本可能出现各种服务器问题（包括且不限于无法使用ssh），最好使用高版本服务器。</p>`,r:{minutes:5.93,words:1780},y:"a",t:"08 【爬虫】"},["/back_end/nodeJs/08","/back_end/nodeJs/08.md"]],["v-33d9b83f","/back_end/nodeJs/09.html",{e:`<h1> 09 【原生nodejs路由、获取参数、静态目录】</h1>
<h2> 1.路由</h2>
<p><strong>index.js</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 启动服务</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./server.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//路由模块</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./route.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//api</span>
<span class="token keyword">const</span> apiRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./api.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>apiRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.39,words:717},y:"a",t:"09 【原生nodejs路由、获取参数、静态目录】"},["/back_end/nodeJs/09","/back_end/nodeJs/09.md"]],["v-596455e9","/back_end/nodeJs/10.html",{e:`<h1> 10 【Express基本使用】</h1>
<blockquote>
<p><a href="https://www.expressjs.com.cn/" target="_blank" rel="noopener noreferrer">https://www.expressjs.com.cn/</a></p>
</blockquote>
<p>基于 Node.js 平台，快速、开放、极简的 web 开发框架。</p>
<h2> 1.Express的安装方式</h2>
<p>Express的安装可直接使用npm包管理器上的项目，在安装npm之前可先安装淘宝镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:14.19,words:4256},y:"a",t:"10 【Express基本使用】"},["/back_end/nodeJs/10","/back_end/nodeJs/10.md"]],["v-5b192e88","/back_end/nodeJs/11.html",{e:`<h1> 11 【Express服务端渲染】</h1>
<h2> 1.Express脚手架的安装</h2>
<p>安装Express脚手架有两种方式：</p>
<h3> 1.1 使用express-generator安装</h3>
<p>使用命令行进入项目目录，依次执行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm i <span class="token parameter variable">-g</span> express-generator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.32,words:1295},y:"a",t:"11 【Express服务端渲染】"},["/back_end/nodeJs/11","/back_end/nodeJs/11.md"]],["v-5cce0727","/back_end/nodeJs/12.html",{e:`<h1> 12 【操作mongodb数据库】</h1>
<h2> 1.简介</h2>
<ul>
<li>1.Mongoose是一个让我们可以通过Node来操作MongoDB的模块。</li>
<li>2.Mongoose是一个对象文档模型(ODM)库,它对Node原生的MongoDB模块进行了进一步的优化封装，并提供了更多的功能。在大多数情况下，它被用来把结构化的模式应用到一个MongoDB集合，并提供了验证和类型转换等好处</li>
<li>3.mongoose中的对象：
<ul>
<li>Schema  模式对象（Schema对象定义约束了数据库中的文档结构）</li>
<li>Model  模型对象（Model对象作为集合中的所有文档的表示，相当于MongoDB数据库中的集合collection）</li>
<li>Document  文档对象（Document表示集合中的具体文档，相当于集合中的一个具体的文档）</li>
</ul>
</li>
</ul>`,r:{minutes:14.6,words:4381},y:"a",t:"12 【操作mongodb数据库】"},["/back_end/nodeJs/12","/back_end/nodeJs/12.md"]],["v-5e82dfc6","/back_end/nodeJs/13.html",{e:`<h1> 13 【操作mysql数据库】</h1>
<h2> 1.mysql 介绍</h2>
<p>付费的商用数据库：</p>
<ul>
<li>Oracle，典型的高富帅；</li>
<li>SQL Server，微软自家产品，Windows定制专款；</li>
<li>DB2，IBM的产品，听起来挺高端；</li>
<li>Sybase，曾经跟微软是好基友，后来关系破裂，现在家境惨淡。</li>
</ul>
<p>这些数据库都是不开源而且付费的，最大的好处是花了钱出了问题可以找厂家解决，不过在Web的世界里，常常需要部署成千上万的数据库服务器，当然不能把大把大把的银子扔给厂家，所以，无论是Google、Facebook，还是国内的BAT，无一例外都选择了免费的开源数据库：</p>`,r:{minutes:5.18,words:1554},y:"a",t:"13 【操作mysql数据库】"},["/back_end/nodeJs/13","/back_end/nodeJs/13.md"]],["v-6037b865","/back_end/nodeJs/14.html",{e:`<h1> 14 【接口规范和业务分层】</h1>
<h2> 1.接口规范-RESTful架构</h2>
<h3> 1.1 什么是REST</h3>
<p>REST全称是Representational State Transfer，中文意思是表述（编者注：通常译为表征）性状态转移。 它首次出现在2000年Roy Fielding的博士论文中，Roy Fielding是HTTP规范的主要编写者之一。 他在论文中提到："我这篇文章的写作目的，就是想在符合架构原理的前提下，理解和评估以网络为基础的应用软件的架构设计，得到一个功能强、性能好、适宜通信的架构。REST指的是一组架构约束条件和原则。" 如果一个架构符合REST的约束条件和原则，我们就称它为RESTful架构。</p>`,r:{minutes:17.01,words:5104},y:"a",t:"14 【接口规范和业务分层】"},["/back_end/nodeJs/14","/back_end/nodeJs/14.md"]],["v-61ec9104","/back_end/nodeJs/15.html",{e:`<h1> 15 【登录鉴权-Cookie】</h1>
<h2> 1.什么是认证（Authentication）</h2>
<ul>
<li>通俗地讲就是验证当前用户的身份，证明“你是你自己”（比如：你每天上下班打卡，都需要通过指纹打卡，当你的指纹和系统里录入的指纹相匹配时，就打卡成功）</li>
<li>互联网中的认证：
<ul>
<li>用户名密码登录</li>
<li>邮箱发送登录链接</li>
<li>手机号接收验证码</li>
<li>只要你能收到邮箱/验证码，就默认你是账号的主人</li>
</ul>
</li>
</ul>
<h2> 2.什么是授权（Authorization）</h2>`,r:{minutes:26.94,words:8082},y:"a",t:"15 【登录鉴权-Cookie】"},["/back_end/nodeJs/15","/back_end/nodeJs/15.md"]],["v-63a169a3","/back_end/nodeJs/16.html",{e:`<h1> 16 【跨域】</h1>
<h2> 1.什么是跨域</h2>
<p>跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。浏览器从一个域名的网页去请求另一个域名的资源时，出现域名、端口、协议任一不同，都属于跨域。</p>
<p>同源策略限制了一下行为：</p>
<p>Cookie、LocalStorage 和 IndexDB 无法读取</p>
<p>DOM 和 JS 对象无法获取</p>
<p>Ajax请求发送不出去</p>
<p>下面举个例子：</p>
<div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>yyy<span class="token punctuation">.</span>cn<span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用 http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxxyyy<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php 非跨域

<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span>www<span class="token punctuation">.</span>xxxyyy<span class="token punctuation">.</span>cn<span class="token operator">**</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">**</span><span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>主域不同

<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span>abc<span class="token operator">**</span><span class="token punctuation">.</span>xxxyyy<span class="token punctuation">.</span>cn<span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">**</span><span class="token keyword">def</span><span class="token operator">**</span><span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>子域名不同

<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">:</span><span class="token operator">**</span><span class="token number">8080</span><span class="token operator">**</span><span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>端口不同

<span class="token operator">**</span>https<span class="token operator">**</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>index<span class="token punctuation">.</span>html 调用  <span class="token operator">**</span>http<span class="token operator">**</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>server<span class="token punctuation">.</span>php  跨域<span class="token punctuation">,</span>协议不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.78,words:2933},y:"a",t:"16 【跨域】"},["/back_end/nodeJs/16","/back_end/nodeJs/16.md"]],["v-65564242","/back_end/nodeJs/17.html",{e:`<h1> 17 【文件上传】</h1>
<h2> 1.初始化准备</h2>
<h3> 1.1 安装依赖</h3>
<p>首先创建一个<code>express-multer-upload</code>工程项目，然后在项目中下好各种依赖包。</p>
<p><strong>multer中间件</strong></p>
<p>Multer 是一个 node.js 中间件，用于处理 <code>multipart/form-data</code> 类型的表单数据，它主要用于上传文件。</p>
<p><strong>注意</strong>: Multer 不会处理任何非 <code>multipart/form-data</code> 类型的表单数据。</p>`,r:{minutes:7.49,words:2246},y:"a",t:"17 【文件上传】"},["/back_end/nodeJs/17","/back_end/nodeJs/17.md"]],["v-670b1ae1","/back_end/nodeJs/18.html",{e:`<h1> 18 【Koa基本使用】</h1>
<h2> 1.简介</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/143d174518b6a8dc724b126198b11f07fdac90f7.png" alt="image-20221231151037428" tabindex="0" loading="lazy"><figcaption>image-20221231151037428</figcaption></figure>
<p>koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。</p>`,r:{minutes:8.01,words:2404},y:"a",t:"18 【Koa基本使用】"},["/back_end/nodeJs/18","/back_end/nodeJs/18.md"]],["v-63e77b20","/tool/efficiency/bookmark-scripts.html",{e:`<h1> 书签脚本</h1>
<h2> 回到顶部</h2>
<p>只支持窗口滚动，不支持内联滚动</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>scrollingElement<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'smooth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.34,words:102},y:"a",t:"书签脚本"},["/tool/efficiency/bookmark-scripts","/tool/efficiency/bookmark-scripts.md"]],["v-60213eb0","/tool/efficiency/online-tools.html",{e:`<h1> 在线工具</h1>
<h2> 开发相关</h2>
<ul>
<li><a href="https://caniuse.com" target="_blank" rel="noopener noreferrer">Can I use</a> 兼容性查询</li>
<li><a href="https://carbon.now.sh" target="_blank" rel="noopener noreferrer">carbon</a> 代码图片生成</li>
<li><a href="https://www.npmtrends.com/" target="_blank" rel="noopener noreferrer">npm trends</a> 比较 npm package 的下载情况</li>
<li><a href="https://bundlephobia.com/" target="_blank" rel="noopener noreferrer">Bundlephobia</a> 分析 npm package 的依赖、bundle 后的大小、下载速度预估</li>
<li><a href="https://packagephobia.com/" target="_blank" rel="noopener noreferrer">Package Phobia</a> 查询 npm package 的安装体积（磁盘大小）</li>
</ul>`,r:{minutes:1.93,words:580},y:"a",t:"在线工具"},["/tool/efficiency/online-tools","/tool/efficiency/online-tools.md"]],["v-3d41e0e3","/professional_knowledge/computer_network/01.html",{e:`<h1> 01 【计算机网络-概述】</h1>
<p><img src="https://i0.hdslb.com/bfs/album/681a357243cc209b37708885ae3b067c40657e9b.png" alt="image-20230122144219777" style="zoom:50%;">代表着主机</p>
<p><img src="https://i0.hdslb.com/bfs/album/9971846161282f85ab6565b63d133fd3d8c8152b.png" alt="image-20201007144130208" style="zoom:50%;"> 代表服务器</p>`,r:{minutes:20.56,words:6169},y:"a",t:"01 【计算机网络-概述】"},["/professional_knowledge/computer_network/01","/professional_knowledge/computer_network/01.md"]],["v-3ef6b982","/professional_knowledge/computer_network/02.html",{e:`<h1> 02 【计算机网络-物理层】</h1>
<h2> 1.物理层的基本概念</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/89c84be25b0ca67655a9df89b183c141a8c82ffe.png" alt="image-20201008130211749" tabindex="0" loading="lazy"><figcaption>image-20201008130211749</figcaption></figure>
<h2> 2.物理层下面的传输媒体</h2>
<p><strong>传输媒体</strong>也称为传输介质或传输媒介，他就是数据传输系统中在发送器和接收器之间的物理通路。<strong>传输媒体</strong>课分为两大类，即<strong>导引型传输媒体</strong>和<strong>非导引型传输媒体</strong></p>`,r:{minutes:10.43,words:3130},y:"a",t:"02 【计算机网络-物理层】"},["/professional_knowledge/computer_network/02","/professional_knowledge/computer_network/02.md"]],["v-40ab9221","/professional_knowledge/computer_network/03.html",{e:`<h1> 03 【计算机网络-数据链路层】</h1>
<h2> 1.数据链路层概述</h2>
<h3> 1.1 概述</h3>
<p><strong>链路</strong>是从一个结点到相邻结点的一段物理线路，<strong>数据链路</strong>则是在链路的基础上增加了一些必要的硬件（如网络适配器）和软件（如协议的实现）</p>
<p><strong>网络中的主机、路由器等都必须实现数据链路层</strong></p>
<figure><img src="https://i0.hdslb.com/bfs/album/5acd6abce2b08725ac2a7dd80851f7d8e630bdd4.png" alt="image-20201011102531462" tabindex="0" loading="lazy"><figcaption>image-20201011102531462</figcaption></figure>`,r:{minutes:35.27,words:10582},y:"a",t:"03 【计算机网络-数据链路层】"},["/professional_knowledge/computer_network/03","/professional_knowledge/computer_network/03.md"]],["v-42606ac0","/professional_knowledge/computer_network/04.html",{e:`<h1> 04 【计算机网络-网络层】</h1>
<h2> 1.网络层概述</h2>
<h3> 1.1 简介</h3>
<ul>
<li>网络层的主要任务是<strong>实现网络互连</strong>，进而<strong>实现数据包在各网络之间的传输</strong></li>
</ul>
<figure><img src="https://i0.hdslb.com/bfs/album/cc633422af4e17502e62051745ce202b7c5b730f.png" alt="image-20201017134630948" tabindex="0" loading="lazy"><figcaption>image-20201017134630948</figcaption></figure>`,r:{minutes:26.74,words:8023},y:"a",t:"04 【计算机网络-网络层】"},["/professional_knowledge/computer_network/04","/professional_knowledge/computer_network/04.md"]],["v-4415435f","/professional_knowledge/computer_network/05.html",{e:`<h1> 05 【计算机网络-运输层】</h1>
<h2> 1.运输层概述</h2>
<h3> 1.1 概念</h3>
<p><strong>进程之间的通信</strong></p>
<img src="https://i0.hdslb.com/bfs/new_dyn/41570a04266b6bbc098a1ba8b8e81be03493119651743993.png" alt="image-20201020211725185" style="zoom:67%;">
<ul>
<li>从通信和信息处理的角度看，运输层向它上面的应用层提供通信服务，<strong>它属于面向通信部分的最高层，同时也是用户功能中的最低层</strong>。</li>
<li>当网络的边缘部分中的两个主机使用网络的核心部分的功能进行端到端的通信时，<strong>只有位于网络边缘部分的主机的协议栈才有运输层</strong>，而网络核心部分中的路由器在转发分组时都只用到三层（到网络层）的功能。</li>
</ul>`,r:{minutes:21.58,words:6473},y:"a",t:"05 【计算机网络-运输层】"},["/professional_knowledge/computer_network/05","/professional_knowledge/computer_network/05.md"]],["v-45ca1bfe","/professional_knowledge/computer_network/06.html",{e:`<h1> 06 【计算机网络-应用层】</h1>
<h2> 1.应用层概述</h2>
<figure><img src="https://article.biliimg.com/bfs/article/7a067ff7ed5f2a814f3c79dc8e1b2ff09d4fb917.png" alt="image-20201023195112701" tabindex="0" loading="lazy"><figcaption>image-20201023195112701</figcaption></figure>
<figure><img src="https://article.biliimg.com/bfs/article/107b2834eb0dd39dc064b741df13662ef9a2e219.png" alt="image-20201023200511781" tabindex="0" loading="lazy"><figcaption>image-20201023200511781</figcaption></figure>`,r:{minutes:9.53,words:2858},y:"a",t:"06 【计算机网络-应用层】"},["/professional_knowledge/computer_network/06","/professional_knowledge/computer_network/06.md"]],["v-8f5a8800","/professional_knowledge/software_engineer/01.html",{e:`<h1> 01 【软件工程学概述】</h1>
<p>迄今为止，计算机系统已经经历了4个不同的发展阶段，但是，人们仍然没有彻底摆脱“软件危机”的困扰，软件已经成为限制计算机系统发展的瓶颈。</p>
<p>为了更有效地开发与维护软件，软件工作者在20世纪60年代后期开始认真研究消除软件危机的途径，从而逐渐形成了一门新兴的工程学科——计算机软件工程学。</p>
<h2> 1.软件危机</h2>
<h3> 1.1 软件危机的介绍</h3>
<p>在计算机软件的开发和维护过程中所遇到的一系列严重问题。</p>
<p><strong>软件危机的典型表现</strong></p>
<ul>
<li>对软件开发成本和进度的估算很不准确</li>
<li>难以准确获取用户需求，用户不满意</li>
<li>质量很不可靠，没有适当的文档</li>
<li>缺乏方法指导和工具支持，大型软件系统经常失败</li>
<li>供不应求：软件开发生产率跟不上计算机应用的迅速发展</li>
<li>做好软件定义时期的工作，是降低软件成本提高软件质量的关键。</li>
</ul>`,r:{minutes:19.53,words:5860},y:"a",t:"01 【软件工程学概述】"},["/professional_knowledge/software_engineer/01","/professional_knowledge/software_engineer/01.md"]],["v-8bf0d6c2","/professional_knowledge/software_engineer/02.html",{e:`<h1> 02 【可行性研究】</h1>
<h2> 1.可行性研究的任务</h2>
<h3> 1.1 目的和任务</h3>
<blockquote>
<p>可行性研究的目的不是解决问题，而是<strong>确定问题是否值得去解决。</strong></p>
<p>可行性研究最根本的任务是对以后的行动方针提出建议。</p>
</blockquote>
<h3> 1.2 本质</h3>
<p>可行性研究的本质是要进行一次大大压缩简化了的系统分析和设计的过程，也就是在较高层次上以较抽象的方式进行的系统分析和设计的过程。</p>
<h3> 1.3 步骤</h3>
<ul>
<li>首先需要进一步分析和澄清问题定义</li>
<li>在澄清了问题定义之后，分析员应该导出系统的逻辑模型。</li>
<li>再从逻辑模型出发，探索若干种可供选择的主要解法（即系统实现方案）。对每种解法都应该仔细研究它的可行性，一般说来，至少应该从下述三个方面研究每种解法的可行性：
<ul>
<li>技术可行性：使用现有的技术能够实现这个系统</li>
<li>经济可行性：这个系统的经济效益能超过它的开发成本？</li>
<li>操作可行性：系统的操作方式在这个用户组织内行得通吗</li>
<li>必要时还应该从法律、社会效益等更广泛的方面研究每种解法的可行性。</li>
</ul>
</li>
</ul>`,r:{minutes:14.1,words:4231},y:"a",t:"02 【可行性研究】"},["/professional_knowledge/software_engineer/02","/professional_knowledge/software_engineer/02.md"]],["v-88872584","/professional_knowledge/software_engineer/03.html",{e:`<h1> 03 【需求分析】</h1>
<p>为了开发出真正满足用户需求的软件产品，首先必须知道用户的需求。对软件需求的深入理解是软件开发工作获得成功的前提条件，不论人们把设计和编码工作做得如何出色，不能真正满足用户需求的程序只会令用户失望，给开发者带来烦恼。</p>
<p>需求分析是软件定义时期的最后一个阶段，它的基本任务是准确地回答“系统必须做什么?”这个问题，对目标系统提出完整、准确、清晰、具体的要求。 系统分析员应该写出<strong>软件需求规格说明书</strong>，以书面形式准确地描述软件需求。</p>
<h2> 1.需求分析的任务</h2>
<h3> 1.1 确定对系统的综合要求</h3>`,r:{minutes:9.45,words:2836},y:"a",t:"03 【需求分析】"},["/professional_knowledge/software_engineer/03","/professional_knowledge/software_engineer/03.md"]],["v-851d7446","/professional_knowledge/software_engineer/04.html",{e:`<h1> 04 【总体设计】</h1>
<p>总体设计的基本目的就是回答“概括地说，系统应该如何实现”这个问题，因此，总体设计又称为概要设计或初步设计。</p>
<p>总体设计阶段的另一项重要任务是设计软件的结构，也就是要确定系统中每个程序是由哪些模块组成的，以及这些模块相互间的关系。</p>
<h2> 1.设计过程</h2>
<p><strong>1.</strong> <strong>设想供选择的方案</strong></p>
<p>在总体设计阶段分析员应该考虑各种可能的实现方案，并且力求从中选出最佳方案。</p>
<p>需求分析阶段得出的数据流图是总体设计的极好的出发点。</p>
<p>设想供选择的方案的一种常用的方法是，设想把数据流图中的处理分组的各种可能的方法，抛弃在技术上行不通的分组方法(例如，组内不同处理的执行时间不相容)，余下的分组方法代表可能的实现策略，并且可以启示供选择的物理系统。</p>`,r:{minutes:12.84,words:3851},y:"a",t:"04 【总体设计】"},["/professional_knowledge/software_engineer/04","/professional_knowledge/software_engineer/04.md"]],["v-81b3c308","/professional_knowledge/software_engineer/05.html",{e:`<h1> 05 【详细设计】</h1>
<p>根本目标：确定应该怎样具体地实现所要求的系统。</p>
<p>详细设计阶段的任务不是具体地编写程序，而是要设计出程序的“蓝图”。</p>
<p>详细设计的结果基本上决定了最终的程序代码的质量。</p>
<h2> 1.结构程序设计</h2>
<p><strong>定义</strong></p>
<ul>
<li>结构化程序设计采用<strong>自顶向下、逐步求精</strong>的设计方法，各个模块通过“顺序、选择、循环”的控制结构进行连接，并且只有一个入口、一个出口。</li>
<li>结构化程序设计的原则可表示为：程序=(算法)+(数据结构)。</li>
<li>如果一个程序的代码块仅仅通过<strong>顺序、选择和循环</strong>这3 种基本控制结构进行连接，并且<strong>每个代码块只有一个入口和一个出口，则称这个程序是结构化的。</strong></li>
</ul>`,r:{minutes:15.34,words:4602},y:"a",t:"05 【详细设计】"},["/professional_knowledge/software_engineer/05","/professional_knowledge/software_engineer/05.md"]],["v-7e4a11ca","/professional_knowledge/software_engineer/06.html",{e:`<h1> 06 【软件测试】</h1>
<h2> 1.软件测试基础</h2>
<h3> 1.1 软件测试的目标</h3>
<p>G.Myers给出的关于测试的一些规则如下：</p>
<p>测试是为了发现程序中的错误而执行程序的过程。</p>
<p>好的测试方案是极可能发现迄今为止尚未发现的错误的测试方案。</p>
<p>成功的测试是发现了至今为止尚未发现的错误的测试。</p>
<p><strong>测试</strong>的正确定义是“为了发现程序中的错误而执行程序的过程”。应该认识到测试决不能证明程序是正确的。即使经过了最严格的测试之后，仍然可能还有没被发现的错误潜藏在程序中。另外，在综合测试阶段通常由其他人员组成测试小组来完成测试工作。</p>`,r:{minutes:48.66,words:14597},y:"a",t:"06 【软件测试】"},["/professional_knowledge/software_engineer/06","/professional_knowledge/software_engineer/06.md"]],["v-7ae0608c","/professional_knowledge/software_engineer/07.html",{e:`<h1> 07 【面向对象方法学引论】</h1>
<p>​     面向对象技术强调在软件开发过程中面向客观世界或问题域中的事物，采用人类在认识客观世界的过程中普遍运用的思维方法，直观、自然地描述客观世界中的有关事物。</p>
<p>面向对象的分析方法是利用面向对象的信息建模概念，如实体、关系、属性等，同时运用封装、继承、多态等机制来构造模拟现实系统的方法。</p>
<p>传统的结构化设计方法的基本点是面向过程，系统被分解成若干个过程。而面向对象的方法是采用构造模型的观点，在系统的开发过程中，各个步骤的共同的目标是建造一个问题域的模型。在面向对象的设计中，初始元素是对象，然后将具有共同特征的对象归纳成类，组织类之间的等级关系，构造类库。在应用时，在类库中选择相应的类。</p>`,r:{minutes:35.16,words:10548},y:"a",t:"07 【面向对象方法学引论】"},["/professional_knowledge/software_engineer/07","/professional_knowledge/software_engineer/07.md"]],["v-7776af4e","/professional_knowledge/software_engineer/08.html",{e:`<h1> 08 【面向对象分析】</h1>
<p>在面向对象分析中，主要由对象模型、动态模型和功能模型组成。</p>
<p>面向对象分析(OOA)的关键是识别出问题域内的类与对象，并分析它们相互间的关系，最终建立起问题域的简洁、精确、可理解的正确模型。在用面向对象观点建立起的3种模型中，对象模型是最基本、最重要、最核心的。</p>
<h2> 1.面向对象分析的基本过程</h2>
<h3> 1.1 概述</h3>
<p>​    面向对象分析，就是抽取和整理用户需求并建立问题域精确模型的过程。</p>
<p>​	面向对象分析过程从分析陈述用户需求的文件开始。</p>
<p>​	接下来，系统分析员应该深入理解用户需求，抽象出目标系统的本质属性，并用模型准确地表示出来。</p>`,r:{minutes:31.55,words:9466},y:"a",t:"08 【面向对象分析】"},["/professional_knowledge/software_engineer/08","/professional_knowledge/software_engineer/08.md"]],["v-740cfe10","/professional_knowledge/software_engineer/09.html",{e:`<h1> 09 【面向对象设计】</h1>
`,r:{minutes:.02,words:7},y:"a",t:"09 【面向对象设计】"},["/professional_knowledge/software_engineer/09","/professional_knowledge/software_engineer/09.md"]],["v-28f7c2bc","/professional_knowledge/software_engineer/10.html",{e:`<h1> 10 【面向对象实现】</h1>
`,r:{minutes:.02,words:7},y:"a",t:"10 【面向对象实现】"},["/professional_knowledge/software_engineer/10","/professional_knowledge/software_engineer/10.md"]],["v-20ee9d86","/tool/git/01.html",{e:`<h1> 01 【版本控制和Git的安装介绍】</h1>
<p>工程设计领域中，使用“版本控制”管理工程蓝图的设计过程。在 IT 开发中也可以使用版本控制思想管理代码的版本迭代。</p>
<h2> 1.目的</h2>
<p>协同修改：支持在服务器对同一个文件多人协同地修改；
数据备份：同时保存目录及文件的当前状态与每次提交时的历史状态；
版本管理：不保存版本间的重复数据以节约存储空间；</p>
<blockquote>
<p>为此，SVN 和 Git 分别采用增量式管理 和文件系统快照 的方式。</p>
</blockquote>
<p>权限控制：对团队协作者进行权限控制（SVN 和 Git 共有）；审核团队外开发者贡献的代码（Git 独有）；
历史记录：查看修改者、修改时间、修改内容、日志信息等项目；将本地文件恢复到某一指定的历史状态；
分支管理：允许开发团队同时优雅地推进多条生产线任务，提高效率。</p>`,r:{minutes:3.57,words:1070},y:"a",t:"01 【版本控制和Git的安装介绍】"},["/tool/git/01","/tool/git/01.md"]],["v-1d84ec48","/tool/git/02.html",{e:`<h1> 02 【本地库操作】</h1>
<h2> 1.git的结构</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/b0d661e04d3d9d717e9219742e17879cbf2eed01.png" alt="image-20221006131836575" tabindex="0" loading="lazy"><figcaption>image-20221006131836575</figcaption></figure>
<figure><img src="https://i0.hdslb.com/bfs/album/fb14c4af9eea2c44ce536bd4fb1331512d3c7b94.png" alt="image-20220827212525927" tabindex="0" loading="lazy"><figcaption>image-20220827212525927</figcaption></figure>`,r:{minutes:11.32,words:3395},y:"a",t:"02 【本地库操作】"},["/tool/git/02","/tool/git/02.md"]],["v-1a1b3b0a","/tool/git/03.html",{e:`<h1> 03 【远程库操作】</h1>
<h2> 1.推送到远程库</h2>
<h3> 1.1 创建github仓库</h3>
<p><a href="https://github.com/new" target="_blank" rel="noopener noreferrer">创建新仓库 (github.com)</a></p>
<figure><img src="https://i0.hdslb.com/bfs/album/b05d10d6b37bb5f9f891ccf27830a317077d0488.png" alt="image-20221006163144237" tabindex="0" loading="lazy"><figcaption>image-20221006163144237</figcaption></figure>`,r:{minutes:3.07,words:920},y:"a",t:"03 【远程库操作】"},["/tool/git/03","/tool/git/03.md"]],["v-16b189cc","/tool/git/04.html",{e:`<h1> 04 【忽略某些文件】</h1>
<p>在push给远程仓库时需要忽略某些文件时，需要在本地仓库新建<code>.gitignore</code>的文件，注意在windows下无法直接创建该文件，只能通过<code>Git Bash</code>来<code>touch .gitignore </code>来生<code>gitignore</code>文件</p>
<p>然后在<code>.gitignore</code>中书写规则如下：</p>
<p>常见规则写法</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>/mtk/   过滤整个文件夹

*.zip    过滤所有.zip文件

/mtk/do.java 过滤某个具体文件

!do.java 不过滤某个文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.39,words:116},y:"a",t:"04 【忽略某些文件】"},["/tool/git/04","/tool/git/04.md"]],["v-6c412aac","/tool/lint/01.html",{e:`<h1> 01 【JS 代码规范】</h1>
<h2> 1. 统一代码风格的重要性</h2>
<h3> 1.1 为什么要统一代码风格</h3>
<p>团队千千万，团队中每个人的代码风格也是千千万。比如有的同学写代码就喜欢用双引号，缩进用两个字符，而其他同学却可能更喜欢用单引号，四个字符缩进。而团队中的人一多，一往代码仓库提交代码，难免会出现下面这些情况：</p>
<p><strong>（1）如果没有统一代码风格，diff时可能会出现很多因为格式不同的问题，不便于我们查看提交代码所做的修改</strong></p>
<p>如下图所示，提交的文件内容其实没有变化，只是代码风格变了（双引号变成了单引号，缩进从两个字符变成了四个字符），但是diff时大段代码会标红，不利于我们查看提交的修改。</p>`,r:{minutes:18.39,words:5518},y:"a",t:"01 【JS 代码规范】"},["/tool/lint/01","/tool/lint/01.md"]],["v-68d7796e","/tool/lint/02.html",{e:`<h1> 02 【CSS 代码规范】</h1>
<h2> 1. Stylelint介绍及安装</h2>
<h3> 1.1 什么是Stylelint</h3>
<p>Stylelint是一个强大的，现代的代码检查工具，与ESLint类似，Stylelint能够通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误。</p>
<p>目前在开源社区上，关于CSS Lint的解决方案主要包括了csslint、SCSS-Lint和Stylelint等几种。而由于Stylelint在技术架构上基于AST 的方式扩展CSS，除原生CSS 语法，其也支持 SCSS、Less 这类预处理器，并且也有非常多的第三方插件，因此我们团队选择了Stylelint作为CSS Lint工具。</p>`,r:{minutes:9.97,words:2992},y:"a",t:"02 【CSS 代码规范】"},["/tool/lint/02","/tool/lint/02.md"]],["v-656dc830","/tool/lint/03.html",{e:`<h1> 03 【Git 提交规范】</h1>
<h2> 1.Git提交规范（Commitizen）</h2>
<h3> 1.1 背景</h3>
<p>Git是目前世界上最先进的分布式版本控制系统，在我们平时的项目开发中已经广泛使用。而当我们使用Git提交代码时，都需要写Commit Message提交说明才能够正常提交。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -m "提交"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:14.37,words:4311},y:"a",t:"03 【Git 提交规范】"},["/tool/lint/03","/tool/lint/03.md"]],["v-6e34a17a","/back_end/database/mongodb/01.html",{e:`<h1> MongoDB</h1>
<h2> 1.下载安装</h2>
<h3> 1.1 下载MongoDB</h3>
<p>这里我推介下载zip版本，解压到任意盘，由于C盘容易满，所以我放到了D盘。我在D盘创建了一个 mongoDB 的目录，并将压缩包解压到了这个目录里面。</p>
<p>下载地址：<a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/community</a></p>`,r:{minutes:10,words:3001},y:"a",t:"MongoDB"},["/back_end/database/mongodb/01","/back_end/database/mongodb/01.md"]],["v-fa8ee52c","/back_end/database/mysql/01.html",{e:`<h1> 01 【数据库概述】</h1>
<h2> 1.为什么要使用数据库</h2>
<ul>
<li>持久化(persistence)：<code>把数据保存到可掉电式存储设备中以供之后使用</code>。大多数情况下，特别是企业级应用，数据持久化意味着<code>将内存中的数据保存到硬盘上加以”固化”</code>，而持久化的实现过程大多通过各种关系数据库来完成。</li>
<li>持久化的主要作用是<code>将内存中的数据存储在关系型数据库中</code>，当然也可以存储在磁盘文件、XML数
据文件中。</li>
</ul>
<figure><img src="https://i0.hdslb.com/bfs/album/cb722175a5ba048203bee951d9ee8c6d54f88cbd.png" alt="image-20221010092111082" tabindex="0" loading="lazy"><figcaption>image-20221010092111082</figcaption></figure>`,r:{minutes:12.8,words:3841},y:"a",t:"01 【数据库概述】"},["/back_end/database/mysql/01","/back_end/database/mysql/01.md"]],["v-f72533ee","/back_end/database/mysql/02.html",{e:`<h1> 02 【MySQL基本使用】</h1>
<h2> 1.自带客户端的登录与退出</h2>
<p>当MySQL服务启动完成后，便可以通过客户端来登录MySQL数据库。注意：确认服务是开启的。</p>
<h3> 1.1 登录方式1：MySQL自带客户端</h3>
<p>开始菜单 → 所有程序 → MySQL → MySQL 8.0 Command Line Client</p>
<figure><img src="https://i0.hdslb.com/bfs/album/82c689a49082ee2597de8dd3e4c9b384d247ac6f.png" alt="image-20221010111259417" tabindex="0" loading="lazy"><figcaption>image-20221010111259417</figcaption></figure>`,r:{minutes:8.85,words:2655},y:"a",t:"02 【MySQL基本使用】"},["/back_end/database/mysql/02","/back_end/database/mysql/02.md"]],["v-f3bb82b0","/back_end/database/mysql/03.html",{e:`<h1> 03 【基本的SELECT语句】</h1>
<h2> 1.SQL分类</h2>
<p>SQL语言在功能上主要分为如下3大类：</p>
<ul>
<li><strong>DDL（Data Definition Languages、数据定义语言）</strong>，这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。
<ul>
<li>主要的语句关键字包括<code>CREATE</code>、<code>DROP</code>、<code>ALTER</code>、<code>RENAME</code>、<code>TRUNCATE</code>等。</li>
</ul>
</li>
<li><strong>DML（Data Manipulation Language、数据操作语言）</strong>，用于添加、删除、更新和查询数据库记录，并检查数据完整性。
<ul>
<li>主要的语句关键字包括<code>INSERT</code>、<code>DELETE</code>、<code>UPDATE</code>、<code>SELECT</code>等。</li>
<li><strong>SELECT是SQL语言的基础，最为重要。</strong></li>
</ul>
</li>
<li><strong>DCL（Data Control Language、数据控制语言）</strong>，用于定义数据库、表、字段、用户的访问权限和安全级别。
<ul>
<li>主要的语句关键字包括<code>GRANT</code>、<code>REVOKE</code>、<code>COMMIT</code>、<code>ROLLBACK</code>、<code>SAVEPOINT</code>等。</li>
</ul>
</li>
</ul>`,r:{minutes:8.99,words:2698},y:"a",t:"03 【基本的SELECT语句】"},["/back_end/database/mysql/03","/back_end/database/mysql/03.md"]],["v-f051d172","/back_end/database/mysql/04.html",{e:`<h1> 04 【运算符】</h1>
<h2> 1.算术运算符</h2>
<p>算术运算符主要用于数学运算，其可以连接运算符前后的两个数值或表达式，对数值或表达式进行加（+）、减（-）、乘（*）、除（/）和取模（%）运算。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/90d6eee192d929e531c353282859ee52b26e98f4.png" alt="image-20221010160251241" tabindex="0" loading="lazy"><figcaption>image-20221010160251241</figcaption></figure>`,r:{minutes:17.56,words:5268},y:"a",t:"04 【运算符】"},["/back_end/database/mysql/04","/back_end/database/mysql/04.md"]],["v-ece82034","/back_end/database/mysql/05.html",{e:`<h1> 05 【排序与分页】</h1>
<h2> 1.排序数据</h2>
<p><mark>注：如果没有使用排序操作，默认情况下查询返回的数据是按照添加数据的顺序显示的。</mark></p>
<h3> 1.1 排序规则</h3>
<ul>
<li>使用 ORDER BY 子句排序
<ul>
<li><strong>ASC（ascend）: 升序（默认）</strong></li>
<li><strong>DESC（descend）:降序</strong></li>
</ul>
</li>
<li><strong>ORDER BY 子句在SELECT语句的结尾。</strong></li>
</ul>`,r:{minutes:3,words:900},y:"a",t:"05 【排序与分页】"},["/back_end/database/mysql/05","/back_end/database/mysql/05.md"]],["v-e97e6ef6","/back_end/database/mysql/06.html",{e:`<h1> 06 【多表查询】</h1>
<p>多表查询，也称为关联查询，指两个或更多个表一起完成查询操作。</p>
<p>前提条件：这些一起查询的表之间是有关系的（一对一、一对多），它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键。比如：员工表和部门表，这两个表依靠“部门编号”进行关联。</p>
<h2> 1.一个案例引发的多表连接</h2>
<h3> 1.1 案例说明</h3>
<figure><img src="https://i0.hdslb.com/bfs/album/dbd56a91d1ed9a3ef59ecfc9082d72debefdf6b9.png" alt="image-20221011201046719" tabindex="0" loading="lazy"><figcaption>image-20221011201046719</figcaption></figure>`,r:{minutes:19.1,words:5729},y:"a",t:"06 【多表查询】"},["/back_end/database/mysql/06","/back_end/database/mysql/06.md"]],["v-e614bdb8","/back_end/database/mysql/07.html",{e:`<h1> 07 【单行函数】</h1>
<h2> 1. 函数的理解</h2>
<h3> 1.1 什么是函数</h3>
<p>函数在计算机语言的使用中贯穿始终，函数的作用是什么呢？它可以把我们经常使用的代码封装起来，需要的时候直接调用即可。这样既<code>提高了代码效率</code>，又<code>提高了可维护性</code>。在 SQL 中我们也可以使用函数对检索出来的数据进行函数操作。使用这些函数，可以极大地<code>提高用户对数据库的管理效率</code>。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/460077e65245adcb0a1a7441d28b59a6be497978.png" alt="image-20221017184722798" tabindex="0" loading="lazy"><figcaption>image-20221017184722798</figcaption></figure>`,r:{minutes:17.96,words:5389},y:"a",t:"07 【单行函数】"},["/back_end/database/mysql/07","/back_end/database/mysql/07.md"]],["v-e2ab0c7a","/back_end/database/mysql/08.html",{e:`<h1> 08 【聚合函数与分组查询】</h1>
<p>我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。</p>
<h2> 1.聚合函数介绍</h2>
<ul>
<li><strong>什么是聚合函数</strong></li>
</ul>
<p>聚合函数作用于一组数据，并对一组数据返回一个值。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/0c825ef5012603764fac185b18d2618c36221385.png" alt="image-20221020133737930" tabindex="0" loading="lazy"><figcaption>image-20221020133737930</figcaption></figure>`,r:{minutes:10.25,words:3076},y:"a",t:"08 【聚合函数与分组查询】"},["/back_end/database/mysql/08","/back_end/database/mysql/08.md"]],["v-df415b3c","/back_end/database/mysql/09.html",{e:`<h1> 09 【子查询】</h1>
<p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。</p>
<p>SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。</p>
<p>先写结论：在SELECT中，除了GROUP BY 和 LIMIT之外，其他位置都可以声明子查询！</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span>存在聚合函数<span class="token punctuation">)</span>

<span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">(</span><span class="token keyword">LEFT</span> <span class="token operator">/</span> <span class="token keyword">RIGHT</span><span class="token punctuation">)</span><span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">ON</span> 多表的连接条件 

<span class="token punctuation">(</span><span class="token keyword">LEFT</span> <span class="token operator">/</span> <span class="token keyword">RIGHT</span><span class="token punctuation">)</span><span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ON</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">WHERE</span> 不包含聚合函数的过滤条件

<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">HAVING</span> 包含聚合函数的过滤条件

<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">ASC</span> <span class="token operator">/</span> <span class="token keyword">DESC</span> <span class="token punctuation">)</span>

<span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:14.07,words:4220},y:"a",t:"09 【子查询】"},["/back_end/database/mysql/09","/back_end/database/mysql/09.md"]],["v-942c1fe8","/back_end/database/mysql/10.html",{e:`<h1> 10 【创建和管理表】</h1>
<h2> 1. 基础知识</h2>
<h3> 1.1 一条数据存储的过程</h3>
<p><code>存储数据是处理数据的第一步</code>。只有正确地把数据存储起来，我们才能进行有效的处理和分析。否则，只能是一团乱麻，无从下手。</p>
<p>那么，怎样才能把用户各种经营相关的、纷繁复杂的数据，有序、高效地存储起来呢？ 在 MySQL 中，一个完整的数据存储过程总共有 4 步，分别是创建数据库、确认字段、创建数据表、插入数据。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/c96a21089d33165b5ab9876aa51f4d9c421afa4d.png" alt="image-20221021202501281" tabindex="0" loading="lazy"><figcaption>image-20221021202501281</figcaption></figure>`,r:{minutes:13.16,words:3949},y:"a",t:"10 【创建和管理表】"},["/back_end/database/mysql/10","/back_end/database/mysql/10.md"]],["v-90c26eaa","/back_end/database/mysql/11.html",{e:`<h1> 11 【数据处理之增删改】</h1>
<h2> 1. 插入数据</h2>
<h3> 1.1 实际问题</h3>
<figure><img src="https://i0.hdslb.com/bfs/album/4890bfaeeb5a2d2296d6ecf595c88adef38cbdb8.png" alt="image-20221021205941367" tabindex="0" loading="lazy"><figcaption>image-20221021205941367</figcaption></figure>
<h3> 1.2 方式1：VALUES的方式添加</h3>`,r:{minutes:12.73,words:3819},y:"a",t:"11 【数据处理之增删改】"},["/back_end/database/mysql/11","/back_end/database/mysql/11.md"]],["v-5f498b30","/front_end/css_advanced/less/01.html",{e:`<h1> Less基础</h1>
<h2> 1.维护CSS的弊端</h2>
<p>CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。</p>
<ul>
<li>CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的</li>
<li>不方便维护及扩展，不利于复用</li>
<li>CSS 没有很好的计算能力</li>
<li>非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目</li>
</ul>
<h2> 2.Less介绍</h2>
<p>Less（Leaner Style Sheets 的缩写）是一门 CSS 扩展语言，也称为 CSS 预处理器。</p>`,r:{minutes:8.05,words:2415},y:"a",t:"Less基础"},["/front_end/css_advanced/less/01","/front_end/css_advanced/less/01.md"]],["v-6b5bab47","/front_end/css_advanced/scss/01.html",{e:`<h1> 01 【Sass的安装使用】</h1>
<h2> 1.介绍</h2>
<h3> 1.1 CSS预处理技术，及种类介绍</h3>
<p>什么是css预处理技术</p>
<ul>
<li>CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。</li>
<li>通俗的说，“CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题”，例如你可以在 CSS 中使用变量、简单的逻辑程序、函数（如变量$main-color）等等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。</li>
</ul>`,r:{minutes:8.6,words:2581},y:"a",t:"01 【Sass的安装使用】"},["/front_end/css_advanced/scss/01","/front_end/css_advanced/scss/01.md"]],["v-6d1083e6","/front_end/css_advanced/scss/02.html",{e:`<h1> 02 【Sass语法介绍-变量】</h1>
<p>sass有两种语法格式Sass(早期的缩进格式：Indented Sass)和SCSS(Sassy CSS)</p>
<p>目前最常用的是SCSS，任何css文件将后缀改为scss，都可以直接使用<code>Sassy CSS</code>语法编写。</p>
<p><strong>所有有效的 CSS 也同样都是有效的 SCSS。</strong></p>
<h1> Sass语法介绍-变量</h1>
<h2> 1.前言</h2>
<p>Sass 为 CSS 引入了变量这一功能，在实际项目中使用最普遍的除了 Sass 嵌套 就是 Sass 变量了，你可以把 CSS 的某个<strong>属性值</strong>定义为变量，然后在项目中任何需要它的地方来使用它。本节主要讲解 Sass 变量的主要语法：变量的声明、引用、作用域等，同时还会讲解在实际项目中一般是如何来维护 Sass 变量的。</p>`,r:{minutes:6.93,words:2078},y:"a",t:"02 【Sass语法介绍-变量】"},["/front_end/css_advanced/scss/02","/front_end/css_advanced/scss/02.md"]],["v-6ec55c85","/front_end/css_advanced/scss/03.html",{e:`<h1> 03 【Sass语法介绍-嵌套】</h1>
<h2> 1.前言</h2>
<p>在企业的实际项目开发中，Sass 的嵌套可以说是非常非常有用的，它可以让你的 CSS 代码易于管理和维护，看起来也比较清晰，这也是 Sass 中很基础的一个知识点，首先掌握这个至关重要！在此章节我们将学习 Sass 嵌套中的嵌套规则、属性嵌套、父选择器和占位符选择器。Sass 嵌套式一个很基础也很简单的语法，关键在于要多多练习使用！</p>
<h2> 2.什么是嵌套？</h2>
<p>在一般编写 CSS 的时候呢，我们一遍一遍的编写相同的选择器去处理深层级的样式，而 Sass 给你一种轻松的方式，你可以在一个样式规则中直接编写另一个样式规则，而不是重复相同的选择器，Sass 将自动组合内外部的选择器。</p>`,r:{minutes:6.41,words:1922},y:"a",t:"03 【Sass语法介绍-嵌套】"},["/front_end/css_advanced/scss/03","/front_end/css_advanced/scss/03.md"]],["v-707a3524","/front_end/css_advanced/scss/04.html",{e:`<h1> 04 【Sass语法介绍-运算】</h1>
<h2> 1.前言</h2>
<p>运算是一种通过已知量可能的组合，获得新的量的行为。Sass 中也为我们提供了各种各样的运算，以便我们更好的处理样式代码。本节我们将学习 Sass 中的数字运算、关系运算、除法运算、颜色运算、字符串运算等等…</p>
<h2> 2.什么是 Sass 运算？</h2>
<p>运算从我们小时候就开始学习了，那在 Sass 中的运算是什么呢？
在我们写样式的时候，很多场景我们是需要用到计算的，而一般我们都是通过 javascript 来计算，CSS3 中也提供了用于运算的函数 calc() ，可能在工作中你使用过这个函数用来计算长度值，能用到的地方也非常有限。而在 Sass 中，扩展出了很多计算方法，使得你不止是可以计算长度值，还能做一些关系运算甚至颜色值的运算等等。这使我们可以把运算应用于更多的场景，来解决更复杂的问题，<strong>运算</strong>也是 Sass 的基本特性之一，下面我们一起来学习它～</p>`,r:{minutes:11.97,words:3590},y:"a",t:"04 【Sass语法介绍-运算】"},["/front_end/css_advanced/scss/04","/front_end/css_advanced/scss/04.md"]],["v-722f0dc3","/front_end/css_advanced/scss/05.html",{e:`<h1> 05 【Sass语法介绍-插值】</h1>
<h2> 1.前言</h2>
<p>在很多编程器语言中都有插值这个概念，在 Sass 样式表的任何地方几乎都可以使用插值，你可以将这些包裹在 #{} 中来使用，所以记住在 Sass 中使用插值的方式是 <strong>#{}</strong> ，本节我们一起来看一下插值在 Sass 中的使用场景以及它的语法</p>
<h2> 2.什么是插值？</h2>
<p>插值也就是可以在<strong>特定的区域</strong>插入一段表达式或者插入一个变量，以此来实现内容动态变换的需求。</p>
<blockquote>
<p>类似 es6 中的插值表达，插值几乎可以用在任何地方。</p>
<p>Sass的插值写法为：<code>#{$variable_name}</code>。</p>
</blockquote>`,r:{minutes:5.84,words:1751},y:"a",t:"05 【Sass语法介绍-插值】"},["/front_end/css_advanced/scss/05","/front_end/css_advanced/scss/05.md"]],["v-73e3e662","/front_end/css_advanced/scss/06.html",{e:`<h1> 06 【Sass语法介绍-函数】</h1>
<blockquote>
<p>这篇文章只更新了颜色函数，由于Sass使用时间过短，其它函数暂时不太会用</p>
</blockquote>
<h2> 1.前言</h2>
<p>Sass 中的函数，这在 Sass 中是比较强大的一个功能，同时使用场景和语法也比较多，所以本节内容篇幅较长，但你一定要好好学习， Sass 函数很重要！在 Sass 中函数中几乎可以用到前面你学的所有章节的内容，所以说函数包括万象同时功能也非常强大，本节我们将详细讲解 Sass 中各种函数的功能和用法。</p>
<h2> 2.什么是函数？</h2>
<p>函数是一段可以被另外的程序或代码调用的“子程序”，一个函数由称为函数体的一系列代码语句组成，并且函数也可以接收值，在大多数语言中函数都是这样的，Sass 中的函数也是一样。</p>`,r:{minutes:3.32,words:997},y:"a",t:"06 【Sass语法介绍-函数】"},["/front_end/css_advanced/scss/06","/front_end/css_advanced/scss/06.md"]],["v-7598bf01","/front_end/css_advanced/scss/07.html",{e:`<h1> 07 【Sass语法介绍-控制指令】</h1>
<h2> 1.前言</h2>
<p>Sass 为我们提供了很多控制指令，使得我们可以更高效的来控制样式的输出，或者在函数中进行逻辑控制。本节内容我们就来讲解什么是 Sass 控制指令？它能用来做什么？它将使你更方便的编写 Sass 。</p>
<h2> 2.什么是 Sass 控制指令</h2>
<p>控制指令，故名思义它是通过条件来控制某些逻辑的，提到条件你首先肯定想到了 if ，没错这是 Sass 控制指令的一种，除了这个还有循环，所以 Sass 一共为我们提供了 4 种控制指令，它们分别是：</p>
<ul>
<li>@if 指令</li>
<li>@each 指令</li>
<li>@for 指令</li>
<li>@while 指令</li>
</ul>`,r:{minutes:7.43,words:2230},y:"a",t:"07 【Sass语法介绍-控制指令】"},["/front_end/css_advanced/scss/07","/front_end/css_advanced/scss/07.md"]],["v-774d97a0","/front_end/css_advanced/scss/08.html",{e:`<h1> 08 【Sass语法介绍-混合指令】</h1>
<h2> 1.前言</h2>
<p>混合指令在 Sass 中也是一个比较常用的指令，在前面我们讲解的内容中有编写过混合指令 @mixin ，本节我们将详细讲解混合指令 @mixin 的语法包括定义混合指令和引用混合指令等等，混合指令同样非常好用，我们一起来学习它吧。</p>
<h2> 2.什么是 Sass 混合指令</h2>
<p>混合指令的出现使你可以定义在样式表中重复使用的样式，这可以使你免去编写过多重复的样式，而且在混合指令 @mixin 中你也可以做一些逻辑处理。混合指令是一个很好用的指令，它将帮你更合理的维护样式代码，学会这种方式写起样式来也很便利，下面我们开始详细的讲解它。</p>`,r:{minutes:6.88,words:2064},y:"a",t:"08 【Sass语法介绍-混合指令】"},["/front_end/css_advanced/scss/08","/front_end/css_advanced/scss/08.md"]],["v-7902703f","/front_end/css_advanced/scss/09.html",{e:`<h1> 09 【Sass语法介绍-函数指令】</h1>
<h2> 1.前言</h2>
<p>在之前的章节我们学习过 Sass 提供的各种各样的函数，那么如果我们需要自定定义函数来使用就需要用到<strong>函数指令 @function</strong>了。本节内容我们来学习 Sass 函数指令的语法和使用，在 Sass 中自定义函数是必须要掌握的！</p>
<h2> 2.什么是 Sass 函数指令</h2>
<p>函数指令也叫自定义函数让你可以容易的处理各种逻辑和定义复杂的操作，而且你可以在任何需要的地方复用函数，这使得我们可以抽离出来一些常见的公式或者逻辑，我们先来看下它长什么样，代码如下：</p>`,r:{minutes:4.3,words:1291},y:"a",t:"09 【Sass语法介绍-函数指令】"},["/front_end/css_advanced/scss/09","/front_end/css_advanced/scss/09.md"]],["v-c2e5e42e","/front_end/css_advanced/scss/10.html",{e:`<h1> 10 【Sass语法介绍-继承】</h1>
<h2> 1.前言</h2>
<p>在我们编写样式的时候，很多情况下我们几个不同的类会有相同的样式代码，同时这几个类又有其自己的样式代码，这使我们就可以通过 Sass 提供的<strong>继承</strong> @extend 来实现。本节内容我们将讲解 Sass 继承的语法以及继承的多重延伸等等，在 Sass 中继承也是非常好用的功能之一，所以你要重点熟悉 @extend 的用法，下面我们一起来学习它。</p>
<h2> 2.什么是 Sass 继承</h2>
<p>继承，我们也叫做代码重用，在 Sass 中支持对样式进行继承。</p>
`,r:{minutes:5.29,words:1587},y:"a",t:"10 【Sass语法介绍-继承】"},["/front_end/css_advanced/scss/10","/front_end/css_advanced/scss/10.md"]],["v-bf7c32f0","/front_end/css_advanced/scss/11.html",{e:`<h1> 11【Sass语法介绍-导入】</h1>
<h2> 1.前言</h2>
<p>在 CSS 中我们可以通过 @import 来导入一个样式文件，Sass 扩展了 CSS 的 @import 规则，使得可以导入 CSS 后缀的样式文件和 Scss 后缀的样式文件，并且提供了对 mixin 、函数和变量的访问。</p>
<p>与 CSS 的 @import 不同的是， CSS 使用 @import 导入文件是在页面渲染的时候发起多个 http 请求来获取文件内容，而 Sass 的导入 @import 是在编译时获取文件内容导入的。</p>
<h2> 2.语法详情</h2>
<p>Sass 的导入和 CSS 中的导入语法类似，只不过在 Sass 中<strong>可以导入用逗号分隔的多个文件</strong>， 我们举个例子看下：</p>`,r:{minutes:4.93,words:1479},y:"a",t:"11【Sass语法介绍-导入】"},["/front_end/css_advanced/scss/11","/front_end/css_advanced/scss/11.md"]],["v-6f4eb639","/front_end/front_end_base/html_css/01.html",{e:`<h1> 01 【HTML简介】</h1>
<h2> 1.网页</h2>
<h3> 1.1 什么是网页？</h3>
<p>**网站：**利用前端技术制作的网页集合。</p>
<p>**网页：**构成网站的基本元素，通常是 HTML 格式的文件（.htm 或 .html）必须通过浏览器来阅读。</p>
<h3> 1.2 什么是HTML?</h3>
<p>**超文本：**由图片、声音、动画、视频……构成且可以相互链接的文本。</p>
<p>**HTML：**超文本标记语言（HTML 不是编程语言，而是由一套标记标签构成的标记语言）。</p>
<h3> 1.3 网页的形成</h3>
<p>前端代码开发 ——&gt; 浏览器解析、渲染代码 ——&gt; 呈现 Web 页面。</p>`,r:{minutes:10.17,words:3050},y:"a",t:"01 【HTML简介】"},["/front_end/front_end_base/html_css/01","/front_end/front_end_base/html_css/01.md"]],["v-71038ed8","/front_end/front_end_base/html_css/02.html",{e:`<h1> 02 【字符实体与语义标签(上)】</h1>
<h2> 1.字符实体</h2>
<p>有些时候，在HTML中不能直接书写一些特殊符号，如：</p>
<ul>
<li>
<p>多个连续的空格（在网页中编写的多个空格默认情况会自动被浏览器解析为一个空格）</p>
</li>
<li>
<p>比如字母两侧的大于小于号（可能会被认为是标签并解析）</p>
</li>
</ul>
<p>如果我们需要在网页中书写这些特殊的符号，则需要使用html中的实体（转义字符）实体的语法：<code>&amp;实体的名字;</code>，如：</p>
<table>
<thead>
<tr>
<th>实体名称</th>
<th>显示结果</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&amp;nbsp;</code></td>
<td>\`\`</td>
<td>空格</td>
</tr>
<tr>
<td><code>&amp;gt;</code></td>
<td>&gt;</td>
<td>大于号</td>
</tr>
<tr>
<td><code>&amp;lt;</code></td>
<td>&lt;</td>
<td>小于号</td>
</tr>
<tr>
<td><code>&amp;amp;</code></td>
<td>&amp;</td>
<td>与</td>
</tr>
<tr>
<td><code>&amp;copy;</code></td>
<td>©</td>
<td>版权</td>
</tr>
<tr>
<td><code>&amp;reg;</code></td>
<td>®</td>
<td>注册商标</td>
</tr>
<tr>
<td><code>&amp;trade;</code></td>
<td>™</td>
<td>商标</td>
</tr>
<tr>
<td><code>&amp;times;</code></td>
<td>×</td>
<td>乘号</td>
</tr>
<tr>
<td><code>&amp;divide;</code></td>
<td>÷</td>
<td>除号</td>
</tr>
<tr>
<td><code>&amp;iquest;</code></td>
<td>¿</td>
<td>倒问号</td>
</tr>
</tbody>
</table>`,r:{minutes:24.05,words:7216},y:"a",t:"02 【字符实体与语义标签(上)】"},["/front_end/front_end_base/html_css/02","/front_end/front_end_base/html_css/02.md"]],["v-72b86777","/front_end/front_end_base/html_css/03.html",{e:`<h1> 03 【语义标签(下) CSS简介】</h1>
<h2> 1.语义标签(下)</h2>
<h3> 1.1 表格</h3>
<h4> 1.1.1 表格的主要作用</h4>
<p>表格主要用于显示、展示数据。因为它可以让数据显示得非常的规整，可读性非常好。特别是后台展示数据的时候，能够熟练运用表格就显得很重要。一个清爽简约的表格能够把繁杂的数据表现得很有条理（合理的使用表格也能够有效提高 SEO）。</p>
<p>**注意：**表格不是用来布局页面的，而是用来展示数据的。<strong>表格常用于表单数据的 “布局”</strong>。</p>
<blockquote>
<p>特别强调，表格是用于表单数据的 “布局”，而不是页面的布局！</p>
</blockquote>`,r:{minutes:23.42,words:7027},y:"a",t:"03 【语义标签(下) CSS简介】"},["/front_end/front_end_base/html_css/03","/front_end/front_end_base/html_css/03.md"]],["v-746d4016","/front_end/front_end_base/html_css/04.html",{e:`<h1> 04 【CSS选择器 】</h1>
<h2> 1.CSS选择器的作用</h2>
<p>选择器就是根据不同的需求把不同的标签选出来，这就是选择器的作用，简单来说，就是：选择标签用的。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:22.04,words:6613},y:"a",t:"04 【CSS选择器 】"},["/front_end/front_end_base/html_css/04","/front_end/front_end_base/html_css/04.md"]],["v-762218b5","/front_end/front_end_base/html_css/05.html",{e:`<h1> 05 【CSS引入方式 CSS的元素显示模式】</h1>
<h2> 1.CSS的引入方式</h2>
<h3> 1.1 CSS的三种引入方式</h3>
<p>按照 CSS 样式书写的位置（或者引入的方式），CSS 样式表可以分为三大类：</p>
<ul>
<li>行内样式表（行内式）</li>
<li>内部样式表（嵌入式）</li>
<li>外部样式表（外链式）</li>
</ul>
<h3> 1.2 行内样式表</h3>
<p>行内样式表（内联样式表）是在元素标签内部的 style 属性中设定 CSS 样式，适合于修改简单样式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>
    青春不常在，抓紧谈恋爱
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.77,words:2031},y:"a",t:"05 【CSS引入方式 CSS的元素显示模式】"},["/front_end/front_end_base/html_css/05","/front_end/front_end_base/html_css/05.md"]],["v-77d6f154","/front_end/front_end_base/html_css/06.html",{e:`<h1> 06 【CSS字体属性 CSS文本属性】</h1>
<h2> 1.CSS字体属性</h2>
<p>CSS Fonts（字体）属性用于定义：<code>字体系列</code>、<code>大小</code>、<code>粗细</code>、和 <code>文字样式</code>（如：斜体）。</p>
<h3> 1.1 字体族</h3>
<p><code>font-family</code> 字体族（字体的格式）</p>
<p>CSS 使用 font-family 属性定义文本的字体系列。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Microsoft YaHei"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> <span class="token string">"Microsoft YaHei"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:14.28,words:4283},y:"a",t:"06 【CSS字体属性 CSS文本属性】"},["/front_end/front_end_base/html_css/06","/front_end/front_end_base/html_css/06.md"]],["v-798bc9f3","/front_end/front_end_base/html_css/07.html",{e:`<h1> 07 【Emmet语法 三大特性及单位】</h1>
<h2> 1.Emmet语法</h2>
<p><code>Emmet</code> 语法的前身是 <code>Zen coding</code>，它使用缩写，来提高 <code>html/css</code> 的编写速度,，<code>VSCode</code> 内部已经集成该语法。</p>
<ul>
<li>快速生成 HTML 结构语法</li>
<li>快速生成 CSS 样式语法</li>
</ul>
<h3> 1.1 快速生成HTML结构语法</h3>
<ul>
<li>生成标签直接输入标签名按 <kbd>tab</kbd> 键即可，比如 <code>div</code> 然后 <kbd>tab</kbd> 键， 就可以生成 <code>&lt;div&gt;&lt;/div&gt;</code></li>
<li>如果想要生成多个相同标签加上 <code>*</code> 就可以了，比如 <code>div*3</code> 就可以快速生成 3 个 <code>div</code></li>
<li>如果有父子级关系的标签，可以用 <code>&gt;</code> 比如 <code>ul&gt;li</code> 就可以了</li>
<li>如果有兄弟关系的标签，用 <code>+</code> 就可以了 比如 <code>div+p</code></li>
<li>如果生成带有 <code>类名</code> 或者 <code>id</code> 名字的标签， 直接写 <code>标签.demo</code> 或者 <code>标签#demo</code> 再按下 tab 键就可以了</li>
<li>如果生成的事物有顺序，可以用自增符号 <code>$</code></li>
<li>如果想要在生成的标签内部写内容可以用 <code>{}</code> 表示</li>
</ul>`,r:{minutes:10.44,words:3132},y:"a",t:"07 【Emmet语法 三大特性及单位】"},["/front_end/front_end_base/html_css/07","/front_end/front_end_base/html_css/07.md"]],["v-7b40a292","/front_end/front_end_base/html_css/08.html",{e:`<h1> 08 【盒模型(上) 盒模型(下)】</h1>
<h2> 1.盒模型(上)</h2>
<h3> 1.1 文档流（normalflow）</h3>
<p>网页是一个多层的结构，一层摁着一层</p>
<p>通过CSS可以分别为每一层来设置样式，作为用户来讲只能看到最顶上一层</p>
<p>这些层中，最底下的一层称为文档流</p>
<p>文档流是网页的基础我们所创建的元素默认都是在文档流中进行排列</p>
<p>对于我们来元素主要有两个状态</p>
<ul>
<li>
<p>在文档流中</p>
</li>
<li>
<p>不在文档流中（脱离文档流）</p>
</li>
</ul>
<h3> 1.2 块元素</h3>`,r:{minutes:19.68,words:5903},y:"a",t:"08 【盒模型(上) 盒模型(下)】"},["/front_end/front_end_base/html_css/08","/front_end/front_end_base/html_css/08.md"]],["v-7cf57b31","/front_end/front_end_base/html_css/09.html",{e:`<h1> 09 【浮动 常见网页布局】</h1>
<h2> 1.浮动</h2>
<h3> 1.1 传统网页布局的三种方式</h3>
<p>网页布局的本质：用 CSS 来摆放盒子，把盒子摆放到相应位置。</p>
<p>CSS 提供了三种传统布局方式（简单说就是盒子如何进行排列）。</p>
<ul>
<li>普通流（标准流）</li>
<li>浮动</li>
<li>定位</li>
</ul>
<blockquote>
<p>这里指的只是传统布局，其实还有一些特殊高级的布局方式。</p>
</blockquote>
<h3> 1.2 标准流（普通流/文档流）</h3>
<p>所谓的标准流：就是标签按照规定好的默认方式排列。</p>`,r:{minutes:10.16,words:3049},y:"a",t:"09 【浮动 常见网页布局】"},["/front_end/front_end_base/html_css/09","/front_end/front_end_base/html_css/09.md"]],["v-baffce4a","/front_end/front_end_base/html_css/10.html",{e:`<h1> 10 【高度塌陷与BFC】</h1>
<h2> 1.高度塌陷</h2>
<p>在浮动布局中，父元素的高度默认是被子元素撑开的</p>
<p>当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失</p>
<p>父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱</p>
<figure><img src="https://i0.hdslb.com/bfs/album/cb831d42c016c9f6ddd693d5c1d9135dafa780fc.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:10.18,words:3054},y:"a",t:"10 【高度塌陷与BFC】"},["/front_end/front_end_base/html_css/10","/front_end/front_end_base/html_css/10.md"]],["v-b7961d0c","/front_end/front_end_base/html_css/11.html",{e:`<h1> 11 【定位】</h1>
<h2> 1.为什么需要定位？</h2>
<p>提问： 以下情况使用标准流或者浮动能实现吗？</p>
<ol>
<li>
<p>某个元素可以<strong>自由</strong>的在一个盒子内移动位置，并且压住其他盒子。</p>
</li>
<li>
<p>当我们滚动窗口的时候，盒子是<strong>固定</strong>屏幕某个位置的。</p>
</li>
</ol>
<p>以上效果，标准流或浮动都无法快速实现，此时需要定位来实现。</p>
<p>所以：</p>
<ol>
<li>浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。</li>
<li>定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。</li>
</ol>`,r:{minutes:20.52,words:6157},y:"a",t:"11 【定位】"},["/front_end/front_end_base/html_css/11","/front_end/front_end_base/html_css/11.md"]],["v-b42c6bce","/front_end/front_end_base/html_css/12.html",{e:`<h1> 12 【网页布局总结 元素的显示与隐藏】</h1>
<h2> 1.网页布局总结</h2>
<p>通过盒子模型，清楚知道大部分 html 标签是一个盒子。</p>
<p>通过 CSS 浮动、定位可以让每个盒子排列成为网页。</p>
<p>一个完整的网页，是标准流、浮动、定位一起完成布局的，每个都有自己的专门用法。</p>
<ol>
<li>标准流</li>
</ol>
<p>可以让盒子上下排列或者左右排列，垂直的块级盒子显示就用标准流布局。</p>
<ol start="2">
<li>浮动</li>
</ol>
<p>可以让多个块级元素一行显示或者左右对齐盒子，多个块级盒子水平显示就用浮动布局。</p>`,r:{minutes:7.59,words:2278},y:"a",t:"12 【网页布局总结 元素的显示与隐藏】"},["/front_end/front_end_base/html_css/12","/front_end/front_end_base/html_css/12.md"]],["v-b0c2ba90","/front_end/front_end_base/html_css/13.html",{e:`<h1> 13 【精灵图 图标字体 CSS三角 鼠标样式 溢出省略号】</h1>
<h2> 1.精灵图</h2>
<h3> 1.1为什么需要精灵图？</h3>
<p>一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送
请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。</p>
<p>因此，为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称 CSS Sprites、CSS 雪碧）。</p>
<p>核心原理：将网页中的一些小背景图像整合到一张大图中 ，这样服务器只需要一次请求就可以了。</p>
<p>精灵技术目的：为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度。</p>`,r:{minutes:14.68,words:4404},y:"a",t:"13 【精灵图 图标字体 CSS三角 鼠标样式 溢出省略号】"},["/front_end/front_end_base/html_css/13","/front_end/front_end_base/html_css/13.md"]],["v-ad590952","/front_end/front_end_base/html_css/14.html",{e:`<h1> 14 【布局技巧】</h1>
<h2> 1.margin负值的运用</h2>
<p>如何实现以下效果呢？</p>
<p>多个盒子紧挨在一起，当鼠标放在其中一个盒子上时该盒子的边框自动变色。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/17311749cf5513780db25d586fdf9992dca69a90.png" alt="image-20220731125920552" tabindex="0" loading="lazy"><figcaption>image-20220731125920552</figcaption></figure>`,r:{minutes:4.88,words:1464},y:"a",t:"14 【布局技巧】"},["/front_end/front_end_base/html_css/14","/front_end/front_end_base/html_css/14.md"]],["v-a9ef5814","/front_end/front_end_base/html_css/15.html",{e:`<h1> 15【背景 渐变色】</h1>
<h2> 1.背景</h2>
<h3> 1.1 背景颜色</h3>
<p><code>background-color</code> 属性定义了元素的背景颜色。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-color</span><span class="token punctuation">:</span> 颜色值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:11.99,words:3598},y:"a",t:"15【背景 渐变色】"},["/front_end/front_end_base/html_css/15","/front_end/front_end_base/html_css/15.md"]],["v-a685a6d6","/front_end/front_end_base/html_css/16.html",{e:`<h1> 16 【过渡 动画】</h1>
<h2> 1.过渡</h2>
<h3> 1.1 概述</h3>
<p>在CSS中用于设置过渡特效的属性是 transition，该属性允许CSS的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标悬浮<code>（:hover）</code>、鼠标单击<code>（:active）</code>、表单元素获得焦点<code>（:focus）</code>或对元素任何改变以及在JavaScript中某些事件执行后触发，并圆滑（若不对时间曲线进行特殊设置）地以动画效果改变CSS的属性值。</p>
<p>该属性能够对CSS中绝大部分属性的变化生效，但不能对CSS属性值不为“数值”的属性生效，即只有当属性的值为一个数值的时候，该属性才能生效。数值包含“纯数字”、“像素数值”、“百分比数值”、“十六进制数值”等CSS属性的值为数值的元素生效。如：当元素的宽度为<code>“width:100px”</code>变化为<code>“width:200px”</code>的时候过渡效果能够生效，但当元素的宽度为<code>“width:100px”</code>变化为<code>“width:auto”</code>的时候，就不会产生过渡效果了。当一个元素的字体颜色为<code>“#f31e1d”</code>，变化为<code>“#2396fd”</code>的时候过渡有效，但当它的字体颜色由<code>“#f31e1d”</code>变为<code>“transparent”</code>的时候过渡就不会产生效果了。这一点在使用中需要留意。</p>`,r:{minutes:11.02,words:3305},y:"a",t:"16 【过渡 动画】"},["/front_end/front_end_base/html_css/16","/front_end/front_end_base/html_css/16.md"]],["v-a31bf598","/front_end/front_end_base/html_css/17.html",{e:`<h1> 17 【2D转换 3D转换 浏览器私有前缀】</h1>
<h2> 1.2D转换</h2>
<p>转换（transform）是 CSS3 中具有颠覆性的特征之一。可以实现元素的位移、旋转、缩放等效果。</p>
<p>转换（transform）你可以简单理解为变形。变形就是指通过css来改变元素的形状或位置，变形不会影响到页面的布局,<code>transform</code>用来设置元素的变形效果。</p>
<ul>
<li>移动：translate</li>
<li>旋转：rotate</li>
<li>缩放：scale</li>
</ul>
<h3> 1.1 二维坐标系</h3>
`,r:{minutes:18.3,words:5489},y:"a",t:"17 【2D转换 3D转换 浏览器私有前缀】"},["/front_end/front_end_base/html_css/17","/front_end/front_end_base/html_css/17.md"]],["v-9fb2445a","/front_end/front_end_base/html_css/18.html",{e:`<h1> 18 【移动Web开发之流式布局】</h1>
<h2> 1.移动端基础</h2>
<h3> 1.1 浏览器现状</h3>
<p>由于移动端浏览器的发展比较晚，所以主流移动端浏览器的内核都是基于 <code>Webkit</code> 内核打造的。</p>
<p>我们在进行移动端的页面开发时，兼容性主要考虑 <code>Webkit</code> 内核。</p>
<h3> 1.2 手机屏幕现状</h3>
<p>目前无论是 安卓 还是 IOS，移动端设备的屏幕尺寸非常多，碎片化非常严重。</p>
<p>但是，前端页面开发者无需关注这些分辨率，因为我们常用的尺寸单位是 <code>px</code>。</p>`,r:{minutes:17.69,words:5308},y:"a",t:"18 【移动Web开发之流式布局】"},["/front_end/front_end_base/html_css/18","/front_end/front_end_base/html_css/18.md"]],["v-9c48931c","/front_end/front_end_base/html_css/19.html",{e:`<h1> 19 【flex布局】</h1>
<h2> 1.flex布局体验</h2>
<h3> 1.1 传统布局与flex布局</h3>
<p>【传统布局】</p>
<ul>
<li>
<p>兼容性好</p>
</li>
<li>
<p>布局繁琐</p>
</li>
<li>
<p>局限性，不能在移动端很好的布局</p>
</li>
</ul>
<p>【flex布局】</p>
<ul>
<li>操作方便，布局极为简单，移动端应用很广泛</li>
<li>PC 端浏览器支持情况较差</li>
<li>IE11 或更低版本不支持或仅部分支持</li>
</ul>
<p>建议：</p>
<ol>
<li>如果是 PC 端页面布局，我们还是建议使用传统布局</li>
<li>如果是移动端或者不考虑兼容性问题的 PC 端页面布局，推荐使用 flex 弹性布局</li>
</ol>`,r:{minutes:27.09,words:8127},y:"a",t:"19 【flex布局】"},["/front_end/front_end_base/html_css/19","/front_end/front_end_base/html_css/19.md"]],["v-513357c8","/front_end/front_end_base/html_css/20.html",{e:`<h1> 20 【rem适配布局】</h1>
<p>【思考】</p>
<ol>
<li>页面布局文字能否随着屏幕大小变化而变化？</li>
<li>流式布局和 flex 布局主要针对于宽度布局，那高度如何设置？</li>
<li>怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？</li>
</ol>
<h2> 1.rem单位</h2>
<p><code>rem</code>（root em）是一个相对单位，类似于 <code>em</code>，em 是父元素字体大小。</p>
<p>不同的是 rem 的基准是<strong>相对于 html 元素的字体大小</strong>。</p>
<p>比如，根元素（html）设置 <code>font-size=12px</code>，非根元素设置 <code>width: 2rem;</code> 则换成 px 表示就是 24px。</p>`,r:{minutes:12.51,words:3754},y:"a",t:"20 【rem适配布局】"},["/front_end/front_end_base/html_css/20","/front_end/front_end_base/html_css/20.md"]],["v-4dc9a68a","/front_end/front_end_base/html_css/21.html",{e:`<h1> 21 【vw布局】</h1>
<h2> 1.移动端布局</h2>
<p>移动端布局 --- flex 布局</p>
<p>为了实现可以适配移动端，页面元素可以宽度和高度等比例缩放</p>
<p>需要移动端适配有如下方案：</p>
<p>（1）rem</p>
<p>市场比较常见：</p>
<ol>
<li>需要不断修改 html 文字大小</li>
<li>需要媒体查询 media</li>
<li>需要 flexible.js</li>
</ol>
<p>（2）vw / vh</p>
<p>未来的趋势：</p>
<ol>
<li>省去各种判断和修改</li>
<li>代表：bilibili、小米……</li>
</ol>`,r:{minutes:2.18,words:655},y:"a",t:"21 【vw布局】"},["/front_end/front_end_base/html_css/21","/front_end/front_end_base/html_css/21.md"]],["v-4a5ff54c","/front_end/front_end_base/html_css/22.html",{e:`<h1> 22 【响应式布局】</h1>
<h2> 1.响应式开发</h2>
<h3> 1.1 响应式开发原理</h3>
<p>就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。</p>
<table>
<thead>
<tr>
<th>设备划分</th>
<th>尺寸区间</th>
</tr>
</thead>
<tbody>
<tr>
<td>超小屏幕（手机）</td>
<td>&lt; 768px</td>
</tr>
<tr>
<td>小屏设备（平板）</td>
<td>&gt;= 768px ~ &lt; 992px</td>
</tr>
<tr>
<td>中等屏幕（桌面显示器）</td>
<td>&gt;= 992px ~ &lt; 1200px</td>
</tr>
<tr>
<td>宽屏设置（大桌面显示器）</td>
<td>&gt;= 1200px</td>
</tr>
</tbody>
</table>`,r:{minutes:11.49,words:3446},y:"a",t:"22 【响应式布局】"},["/front_end/front_end_base/html_css/22","/front_end/front_end_base/html_css/22.md"]],["v-46f6440e","/front_end/front_end_base/html_css/23.html",{e:`<h1> 23 【grid布局】</h1>
<h2> 1.概述</h2>
<p>网格布局（Grid）是最强大的 CSS 布局方案。</p>
<p>它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。</p>
<img src="https://i0.hdslb.com/bfs/album/2729550f5b4e45483dd0521776047c455a544861.png" alt="img" style="zoom:50%;">
<p>上图这样的布局，就是 Grid 布局的拿手好戏。</p>
<p>Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内多个项目的位置。但是它们也存在重大区别。</p>`,r:{minutes:20.49,words:6147},y:"a",t:"23 【grid布局】"},["/front_end/front_end_base/html_css/23","/front_end/front_end_base/html_css/23.md"]],["v-3ae21c12","/front_end/front_end_base/javascript/01.html",{e:`<h1> 01 【基础语法与基本数据类型】</h1>
<table>
<thead>
<tr>
<th></th>
<th>语言</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>结构层</td>
<td>HTML</td>
<td>搭建结构、放置部件、描述语义</td>
</tr>
<tr>
<td>样式层</td>
<td>CSS</td>
<td>美化网页、实现布局</td>
</tr>
<tr>
<td>行为层</td>
<td>JavaScript</td>
<td>实现交互效果、数据收发、表单验证等</td>
</tr>
</tbody>
</table>`,r:{minutes:16.01,words:4804},y:"a",t:"01 【基础语法与基本数据类型】"},["/front_end/front_end_base/javascript/01","/front_end/front_end_base/javascript/01.md"]],["v-37786ad4","/front_end/front_end_base/javascript/02.html",{e:`<h1> 02 【JS表达式与操作符】</h1>
<p><strong>什么是表达式和运算符？</strong></p>
<p>表达式：由 操作数 和 运算符 组成的式子。</p>
<p>表达式的分类：算术、关系、逻辑、赋值、综合。</p>
<h2> 1.算术表达式</h2>
<h3> 1.1 算术运算符</h3>
<table>
<thead>
<tr>
<th>意义</th>
<th>运算符</th>
</tr>
</thead>
<tbody>
<tr>
<td>加</td>
<td><code>+</code></td>
</tr>
<tr>
<td>减</td>
<td><code>-</code></td>
</tr>
<tr>
<td>乘</td>
<td><code>*</code></td>
</tr>
<tr>
<td>除</td>
<td><code>/</code></td>
</tr>
<tr>
<td>取余</td>
<td><code>%</code></td>
</tr>
</tbody>
</table>`,r:{minutes:6.98,words:2094},y:"a",t:"02 【JS表达式与操作符】"},["/front_end/front_end_base/javascript/02","/front_end/front_end_base/javascript/02.md"]],["v-340eb996","/front_end/front_end_base/javascript/03.html",{e:`<h1> 03 【流程控制语句】</h1>
<h2> 1.基本介绍</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">*</span>
 <span class="token operator">*</span> 流程控制语句
 <span class="token operator">*</span> 	<span class="token operator">-</span> <span class="token constant">JS</span>中的程序是从上到下一行一行执行的
 <span class="token operator">*</span> 	<span class="token operator">-</span> 通过流程控制语句可以控制程序执行流程，
 <span class="token operator">*</span> 		使程序可以根据一定的条件来选择执行
 <span class="token operator">*</span>  <span class="token operator">-</span> 语句的分类：
 <span class="token operator">*</span> 		<span class="token number">1.</span>条件判断语句
 <span class="token operator">*</span> 		<span class="token number">2.</span>条件分支语句
 <span class="token operator">*</span> 		<span class="token number">3.</span>循环语句			
 <span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.51,words:1654},y:"a",t:"03 【流程控制语句】"},["/front_end/front_end_base/javascript/03","/front_end/front_end_base/javascript/03.md"]],["v-30a50858","/front_end/front_end_base/javascript/04.html",{e:`<h1> 04 【对象】</h1>
<h2> 1.对象基础</h2>
<h3> 1.1 对象介绍</h3>
<p>对象是JS中的引用数据类型<br>
<strong>对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性</strong><br>
使用typeof检查一个对象时，会返回object</p>
<p>对象（object）是 “键值对” 的集合，表示属性和值的映射关系。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hobbies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'足球'</span><span class="token punctuation">,</span> <span class="token string">'编程'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:10.03,words:3008},y:"a",t:"04 【对象】"},["/front_end/front_end_base/javascript/04","/front_end/front_end_base/javascript/04.md"]],["v-2d3b571a","/front_end/front_end_base/javascript/05.html",{e:`<h1> 05 【函数（上）】</h1>
<h2> 1.函数基本介绍</h2>
<p>函数就是语句的封装，可以让这些代码方便地被复用。</p>
<p>函数具有 “一次定义，多次调用” 的优点。</p>
<p>使用函数，可以简化代码，让代码更具有可读性。</p>
<p><strong>函数也是一个对象，也具有普通对象的功能（能有属性）</strong><br>
使用typeof检查一个函数时会返回function</p>
<p>和变量类似，函数必须先定义然后才能使用。</p>
<p>使用 <code>function</code> 关键字定义函数。</p>
<blockquote>
<p>function：函数、功能。</p>
</blockquote>`,r:{minutes:20.83,words:6250},y:"a",t:"05 【函数（上）】"},["/front_end/front_end_base/javascript/05","/front_end/front_end_base/javascript/05.md"]],["v-29d1a5dc","/front_end/front_end_base/javascript/06.html",{e:`<h1> 06 【函数（下）】</h1>
<h2> 1.用new操作符调用函数</h2>
<p>现在，我们学习一种新的函数调用方式：<code>new 函数()</code></p>
<p>你可能知道 new 操作符和 “面向对象” 息息相关，但是现在我们先不探讨它的 “面向对象” 意义，而是先把用 new 调用函数的执行步骤和它上下文弄清楚。</p>
<h3> 1.1 用new调用函数的四步走</h3>
<p>JS 规定，使用 new 操作符调用函数会进行 “四步走”：</p>
<ol>
<li>函数体内会自动创建出一个空白对象</li>
<li>函数的上下文（this）会指向这个对象</li>
<li>函数体内的语句会执行</li>
<li>函数会自动返回上下文对象，即使函数没有 return 语句</li>
</ol>`,r:{minutes:21.58,words:6475},y:"a",t:"06 【函数（下）】"},["/front_end/front_end_base/javascript/06","/front_end/front_end_base/javascript/06.md"]],["v-2667f49e","/front_end/front_end_base/javascript/07.html",{e:`<h1> 07 【数组及常用方法】</h1>
<h2> 1.什么是数组</h2>
<p>数组（Array），顾名思义：用来存储一组相关值的类型。</p>
<p>数组也是一个对象，是一个用来存储数据的对象和Object类似，但是它的存储效率比普通对象要高<br>
数组中保存的内容我们称为元素	<br>
数组使用索引（index）来操作元素<br>
索引指由0开始的整数</p>
<p>数组可以方便地对一组值进行求和、计算平均值、逐项遍历等操作。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> scoreArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">87</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">93</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:16.84,words:5051},y:"a",t:"07 【数组及常用方法】"},["/front_end/front_end_base/javascript/07","/front_end/front_end_base/javascript/07.md"]],["v-22fe4360","/front_end/front_end_base/javascript/08.html",{e:`<h1> 08 【标准库之Date对象】</h1>
<p>掌握 Date 日期对象的使用，动态获取当前计算机的时间。</p>
<h2> 1.普通函数的用法</h2>
<p><code>Date</code>对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "Tue Dec 01 2021 09:34:43 GMT+0800 (CST)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.01,words:3603},y:"a",t:"08 【标准库之Date对象】"},["/front_end/front_end_base/javascript/08","/front_end/front_end_base/javascript/08.md"]],["v-1f949222","/front_end/front_end_base/javascript/09.html",{e:`<h1> 09 【标准库之Math对象和String对象】</h1>
<h2> 1.Math对象</h2>
<p><code>Math</code>是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在<code>Math</code>对象上调用。</p>
<p><code>Math</code>对象提供以下一些静态方法。</p>
<ul>
<li><code>Math.abs()</code>：绝对值</li>
<li><code>Math.ceil()</code>：向上取整</li>
<li><code>Math.floor()</code>：向下取整</li>
<li><code>Math.max()</code>：最大值</li>
<li><code>Math.min()</code>：最小值</li>
<li><code>Math.round()</code>：四舍五入</li>
<li><code>Math.random()</code>：随机数</li>
</ul>`,r:{minutes:10.55,words:3165},y:"a",t:"09 【标准库之Math对象和String对象】"},["/front_end/front_end_base/javascript/09","/front_end/front_end_base/javascript/09.md"]],["v-15c05499","/front_end/front_end_base/javascript/10.html",{e:`<h1> 10 【标准库之RegExp对象】</h1>
<h2> 1.什么是正则表达式</h2>
<p>正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。</p>
<blockquote>
<p>比如：验证手机号、验证邮箱、验证身份证……</p>
</blockquote>
<h3> 1.1 快速感知正则表达式</h3>
<p>用一个例子快速演示正则表达式基本使用方法：检查某个字符串是否是 6 位数字。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/8078abc7f846e58388c282220840b6950b34f7a2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:24.91,words:7474},y:"a",t:"10 【标准库之RegExp对象】"},["/front_end/front_end_base/javascript/10","/front_end/front_end_base/javascript/10.md"]],["v-17752d38","/front_end/front_end_base/javascript/11.html",{e:`<h1> 11 【标准库之JSON对象 JSON5】</h1>
<h2> 1.JSON 格式</h2>
<p>JSON 格式（JavaScript Object Notation 的缩写）是一种用于数据交换的文本格式，2001年由 Douglas Crockford 提出，目的是取代繁琐笨重的 XML 格式。</p>
<p>相比 XML 格式，JSON 格式有两个显著的优点：书写简单，一目了然；符合 JavaScript 原生语法，可以由解释引擎直接处理，不用另外添加解析代码。所以，JSON 迅速被接受，已经成为各大网站交换数据的标准格式，并被写入标准。</p>
<p>每个 JSON 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。</p>`,r:{minutes:9.6,words:2881},y:"a",t:"11 【标准库之JSON对象 JSON5】"},["/front_end/front_end_base/javascript/11","/front_end/front_end_base/javascript/11.md"]],["v-192a05d7","/front_end/front_end_base/javascript/12.html",{e:`<h1> 12 【语法之错误处理机制】</h1>
<p>错误处理机制是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行</p>
<h2> 15.1 Error 实例对象</h2>
<p>JavaScript 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript 原生提供<code>Error</code>构造函数，所有抛出的错误都是这个构造函数的实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
err<span class="token punctuation">.</span>message <span class="token comment">// "出错了"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.79,words:2936},y:"a",t:"12 【语法之错误处理机制】"},["/front_end/front_end_base/javascript/12","/front_end/front_end_base/javascript/12.md"]],["v-1adede76","/front_end/front_end_base/javascript/13.html",{e:`<h1> 13 【语法之编程风格】</h1>
<h2> 1.概述</h2>
<p>“编程风格”（programming style）指的是编写代码的样式规则。不同的程序员，往往有不同的编程风格。</p>
<p>有人说，编译器的规范叫做“语法规则”（grammar），这是程序员必须遵守的；而编译器忽略的部分，就叫“编程风格”（programming style），这是程序员可以自由选择的。这种说法不完全正确，程序员固然可以自由选择编程风格，但是好的编程风格有助于写出质量更高、错误更少、更易于维护的程序。</p>
<p>所以，编程风格的选择不应该基于个人爱好、熟悉程度、打字量等因素，而要考虑如何尽量使代码清晰易读、减少出错。你选择的，不是你喜欢的风格，而是一种能够清晰表达你的意图的风格。这一点，对于 JavaScript 这种语法自由度很高的语言尤其重要。</p>`,r:{minutes:9.49,words:2848},y:"a",t:"13 【语法之编程风格】"},["/front_end/front_end_base/javascript/13","/front_end/front_end_base/javascript/13.md"]],["v-1c93b715","/front_end/front_end_base/javascript/14.html",{e:`<h1> 14 【语法之console 对象与控制台】</h1>
<h2> 1.console 对象</h2>
<p><code>console</code>对象是 JavaScript 的原生对象，它有点像 Unix 系统的标准输出<code>stdout</code>和标准错误<code>stderr</code>，可以输出各种信息到控制台，并且还提供了很多有用的辅助方法。</p>
<p><code>console</code>的常见用途有两个。</p>
<ul>
<li>调试程序，显示网页代码运行时的错误信息。</li>
<li>提供了一个命令行接口，用来与网页代码互动。</li>
</ul>`,r:{minutes:7.72,words:2316},y:"a",t:"14 【语法之console 对象与控制台】"},["/front_end/front_end_base/javascript/14","/front_end/front_end_base/javascript/14.md"]],["v-1e488fb4","/front_end/front_end_base/javascript/15.html",{e:`<h1> 15 【严格模式】</h1>
<p>除了正常的运行模式，JavaScript 还有第二种运行模式：严格模式（strict mode）。顾名思义，这种模式采用更加严格的 JavaScript 语法。</p>
<p>同样的代码，在正常模式和严格模式中，可能会有不一样的运行结果。一些在正常模式下可以运行的语句，在严格模式下将不能运行。</p>
<h2> 1.设计目的</h2>
<p>早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。</p>
<p>严格模式是从 ES5 进入标准的，主要目的有以下几个。</p>`,r:{minutes:6.54,words:1963},y:"a",t:"15 【严格模式】"},["/front_end/front_end_base/javascript/15","/front_end/front_end_base/javascript/15.md"]],["v-1ffd6853","/front_end/front_end_base/javascript/16.html",{e:`<h1> 16 【DOM概述】</h1>
<h2> 1.DOM基本概念</h2>
<p>DOM（Document Object Model，文档对象模型）是 JavaScript 操作 HTML 文档的接口，使文档操作变得非常优雅、简便。</p>
<p>DOM 最大的特点就是将 HTML 文档表示为 “节点树”。</p>
<h2> 2.DOM节点树</h2>
<p>一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，又像一棵树。</p>
<p>浏览器原生提供<code>document</code>节点，代表整个文档。</p>`,r:{minutes:2.22,words:667},y:"a",t:"16 【DOM概述】"},["/front_end/front_end_base/javascript/16","/front_end/front_end_base/javascript/16.md"]],["v-21b240f2","/front_end/front_end_base/javascript/17.html",{e:`<h1> 17 【Document 节点】</h1>
<h2> 1.Document 节点的概述</h2>
<p><code>document</code>节点对象代表整个文档，每张网页都有自己的<code>document</code>对象。<code>window.document</code>属性就指向这个对象。只要浏览器开始载入 HTML 文档，该对象就存在了，可以直接使用。</p>
<p><code>document</code>对象有不同的办法可以获取。</p>
<ul>
<li>正常的网页，直接使用<code>document</code>或<code>window.document</code>。</li>
<li><code>iframe</code>框架里面的网页，使用<code>iframe</code>节点的<code>contentDocument</code>属性。</li>
<li>Ajax 操作返回的文档，使用<code>XMLHttpRequest</code>对象的<code>responseXML</code>属性。</li>
<li>内部节点的<code>ownerDocument</code>属性。</li>
</ul>`,r:{minutes:12.15,words:3644},y:"a",t:"17 【Document 节点】"},["/front_end/front_end_base/javascript/17","/front_end/front_end_base/javascript/17.md"]],["v-23671991","/front_end/front_end_base/javascript/18.html",{e:`<h1> 18 【节点的关系和内部操作】</h1>
<h2> 1.节点的关系</h2>
<figure><img src="https://i0.hdslb.com/bfs/album/a8821cf029e2fa7e8eb3db98db0c675360d99ae4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<table>
<thead>
<tr>
<th>关系</th>
<th>考虑所有结点</th>
</tr>
</thead>
<tbody>
<tr>
<td>子节点</td>
<td><code>childNodes</code></td>
</tr>
<tr>
<td>父节点</td>
<td><code>parentNode</code></td>
</tr>
<tr>
<td>第一个子节点</td>
<td><code>firstChild</code></td>
</tr>
<tr>
<td>最后一个子节点</td>
<td><code>lastChild</code></td>
</tr>
<tr>
<td>前一个兄弟节点</td>
<td><code>previousSibling</code></td>
</tr>
<tr>
<td>后一个兄弟节点</td>
<td><code>nextSibling</code></td>
</tr>
</tbody>
</table>`,r:{minutes:8.74,words:2623},y:"a",t:"18 【节点的关系和内部操作】"},["/front_end/front_end_base/javascript/18","/front_end/front_end_base/javascript/18.md"]],["v-251bf230","/front_end/front_end_base/javascript/19.html",{e:`<h1> 19 【节点的增删改查】</h1>
<h2> 1.节点的创建</h2>
<p><code>document.createElement</code>方法用来生成元素节点，并返回该节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:6.26,words:1878},y:"a",t:"19 【节点的增删改查】"},["/front_end/front_end_base/javascript/19","/front_end/front_end_base/javascript/19.md"]],["v-4aa68fda","/front_end/front_end_base/javascript/20.html",{e:`<h1> 20 【节点的集合】</h1>
<h2> 1.NodeList 接口</h2>
<h3> 1.1 概述</h3>
<p><code>NodeList</code>实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到<code>NodeList</code>实例。</p>
<ul>
<li><code>Node.childNodes</code></li>
<li><code>document.querySelectorAll()</code>等节点搜索方法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes <span class="token keyword">instanceof</span> <span class="token class-name">NodeList</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.14,words:1242},y:"a",t:"20 【节点的集合】"},["/front_end/front_end_base/javascript/20","/front_end/front_end_base/javascript/20.md"]],["v-4c5b6879","/front_end/front_end_base/javascript/21.html",{e:`<h1> 21【节点的属性】</h1>
<p>HTML 元素包括标签名和若干个键值对，这个键值对就称为“属性”（attribute）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>a id<span class="token operator">=</span><span class="token string">"test"</span> href<span class="token operator">=</span><span class="token string">"http://www.example.com"</span><span class="token operator">&gt;</span>
  链接
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.66,words:2598},y:"a",t:"21【节点的属性】"},["/front_end/front_end_base/javascript/21","/front_end/front_end_base/javascript/21.md"]],["v-4e104118","/front_end/front_end_base/javascript/22.html",{e:`<h1> 22 【事件监听】</h1>
<p>DOM 允许我们书写 JavaScript 代码以让 HTML 元素作出反应。</p>
<p>什么是 “事件”：用户与网页的交互动作。</p>
<h2> 1.什么是事件监听</h2>
<p>“监听” 顾名思义，就是让计算机随时能够发现这个事件发生了，从而执行程序员预先编写好的一些程序。</p>
<p>设置事件监听的方法主要有 <code>onxxx</code> 和 <code>addEventListener()</code> 两种，二者的区别将在 “事件传播” 一课中介绍。</p>
<blockquote>
<p>原始的事件处理方法：“直接通过事件绑定函数”</p>
<p>比如：</p>
<p>HTML：<code>&lt;button onclick="add();"&gt;点击&lt;/button&gt;</code></p>
<p>JS：<code>function add() { alert("相加"); }</code></p>
<p>以上方式不推荐使用！！！</p>
</blockquote>`,r:{minutes:8.55,words:2565},y:"a",t:"22 【事件监听】"},["/front_end/front_end_base/javascript/22","/front_end/front_end_base/javascript/22.md"]],["v-4fc519b7","/front_end/front_end_base/javascript/23.html",{e:`<h1> 23 【事件对象与鼠标事件】</h1>
<blockquote>
<p>这里只是通过鼠标事件简单了解一下事件对象，后续会有专门的章节结合事件传播讲解事件对象</p>
</blockquote>
<h2> 1.什么是事件对象</h2>
<p><strong>任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来</strong>，我们称这个对象为事件对象。</p>
<p>这个参数通常用单词 <code>event</code> 或字母 <code>e</code> 来表示。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>oBox<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对象 e 就是这次事件的“事件对象”</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.51,words:2254},y:"a",t:"23 【事件对象与鼠标事件】"},["/front_end/front_end_base/javascript/23","/front_end/front_end_base/javascript/23.md"]],["v-5179f256","/front_end/front_end_base/javascript/24.html",{e:`<h1> 24 【键盘事件】</h1>
<h2> 1.键盘事件的种类</h2>
<p>键盘事件由用户击打键盘触发，主要有<code>keydown</code>、<code>keypress</code>、<code>keyup</code>三个事件，它们都继承了<code>KeyboardEvent</code>接口。</p>
<ul>
<li><code>keydown</code>：按下键盘时触发。</li>
<li><code>keypress</code>：按下有值的键时触发，即按下 Ctrl、Alt、Shift、Meta 这样无值的键，这个事件不会触发。对于有值的键，按下时先触发<code>keydown</code>事件，再触发这个事件。</li>
<li><code>keyup</code>：松开键盘时触发该事件。</li>
</ul>`,r:{minutes:4.2,words:1261},y:"a",t:"24 【键盘事件】"},["/front_end/front_end_base/javascript/24","/front_end/front_end_base/javascript/24.md"]],["v-532ecaf5","/front_end/front_end_base/javascript/25.html",{e:`<h1> 25 【进度事件和表单事件】</h1>
<h2> 1.文档的加载</h2>
<p>浏览器在加载一个页面时，是按照自上向下的顺序加载的，加载一行执行一行。
如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，
此时将会无法正常获取到DOM对象，导致DOM操作失败。</p>
<p>解决方式一：
可以将<code>js</code>代码编写到body的下边</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  
  
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">  
			<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
			btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
		  
			<span class="token punctuation">}</span><span class="token punctuation">;</span>  
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.26,words:1578},y:"a",t:"25 【进度事件和表单事件】"},["/front_end/front_end_base/javascript/25","/front_end/front_end_base/javascript/25.md"]],["v-54e3a394","/front_end/front_end_base/javascript/26.html",{e:`<h1> 26 【触摸事件和其它常见事件】</h1>
<h2> 1.触摸操作概述</h2>
<p>浏览器的触摸 API 由三个部分组成。</p>
<ul>
<li>Touch：一个触摸点</li>
<li>TouchList：多个触摸点的集合</li>
<li>TouchEvent：触摸引发的事件实例</li>
</ul>
<p><code>Touch</code>接口的实例对象用来表示触摸点（一根手指或者一根触摸笔），包括位置、大小、形状、压力、目标元素等属性。有时，触摸动作由多个触摸点（多根手指）组成，多个触摸点的集合由<code>TouchList</code>接口的实例对象表示。<code>TouchEvent</code>接口的实例对象代表由触摸引发的事件，只有触摸屏才会引发这一类事件。</p>`,r:{minutes:11.73,words:3519},y:"a",t:"26 【触摸事件和其它常见事件】"},["/front_end/front_end_base/javascript/26","/front_end/front_end_base/javascript/26.md"]],["v-56987c33","/front_end/front_end_base/javascript/27.html",{e:`<h1> 27 【三大家族scroll、offset、client】</h1>
<p>JS的三大家族主要是Offset、Scroll、Client，通过对三大家族不同属性的灵活使用，我们可以模拟出很多炫酷的JS动画，增强界面的视觉感染力！让静态页面活起来！</p>
<p>注意以下的值全是不带px的，单纯的数字</p>
<figure><img src="https://i0.hdslb.com/bfs/album/a363913f6564155d01e6a619e0689d5fc5d355b0.png" alt="image-20220825182901210" tabindex="0" loading="lazy"><figcaption>image-20220825182901210</figcaption></figure>`,r:{minutes:8.14,words:2443},y:"a",t:"27 【三大家族scroll、offset、client】"},["/front_end/front_end_base/javascript/27","/front_end/front_end_base/javascript/27.md"]],["v-584d54d2","/front_end/front_end_base/javascript/28.html",{e:`<h1> 28 【事件传播】</h1>
<h2> 1.事件冒泡</h2>
<p><strong>事件冒泡概念</strong>:
当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡
简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的同名事件
事件冒泡是默认存在的</p>
<p><strong>鼠标经过事件：</strong>
<code>mouseover</code> 和 <code>mouseout</code> 会有冒泡效果
<code>mouseenter</code> 和 <code>mouseleave</code> 没有冒泡效果(推荐)</p>`,r:{minutes:15.35,words:4605},y:"a",t:"28 【事件传播】"},["/front_end/front_end_base/javascript/28","/front_end/front_end_base/javascript/28.md"]],["v-5a022d71","/front_end/front_end_base/javascript/29.html",{e:`<h1> 29【定时器和延时器】</h1>
<h2> 1.定时器</h2>
<h3> 1.1 基本介绍</h3>
<p><code>setInterval()</code> 函数可以重复调用一个函数，在每次调用之间有固定的时间间隔。</p>
<blockquote>
<p>Interval：间隔</p>
</blockquote>
<figure><img src="https://i0.hdslb.com/bfs/album/35904ad7c550d293fa890e6a5876b51a4f8b30c0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:16.56,words:4967},y:"a",t:"29【定时器和延时器】"},["/front_end/front_end_base/javascript/29","/front_end/front_end_base/javascript/29.md"]],["v-7f8ccb1b","/front_end/front_end_base/javascript/30.html",{e:`<h1> 30【BOM和浏览器环境概述】</h1>
<p>BOM（Browser Object Model，浏览器对象模型）是 JS 与 浏览器窗口交互的接口。</p>
<p>一些与浏览器改变尺寸、滚动条滚动相关的特效，都要借助 BOM 技术。</p>
<p>JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。一旦网页内嵌了 JavaScript 脚本，浏览器加载网页，就会去执行脚本，从而达到操作浏览器的目的，实现网页的各种动态效果。</p>
<p>本章开始介绍浏览器提供的各种 JavaScript 接口。首先，介绍 JavaScript 代码嵌入网页的方法。</p>`,r:{minutes:15.98,words:4794},y:"a",t:"30【BOM和浏览器环境概述】"},["/front_end/front_end_base/javascript/30","/front_end/front_end_base/javascript/30.md"]],["v-fd7cb88c","/front_end/front_end_base/javascript/31.html",{e:`<h1> 31【window 对象】</h1>
<h2> 1.概述</h2>
<p>浏览器里面，<code>window</code>对象（注意，<code>w</code>为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>a <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.27,words:2480},y:"a",t:"31【window 对象】"},["/front_end/front_end_base/javascript/31","/front_end/front_end_base/javascript/31.md"]],["v-fa13074e","/front_end/front_end_base/javascript/32.html",{e:`<h1> 32 【Navigator 对象和Screen 对象】</h1>
<h2> 1.Navigator 对象的属性</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * Navigator
 * 	- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
 * 	- 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了
 * 	- 一般我们只会使用userAgent来判断浏览器的信息，
 * 		userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，
 * 		不同的浏览器会有不同的userAgent
 * 
 * 火狐的userAgent
 * 	Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0
 * 
 * Chrome的userAgent
 *  Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.65,words:1394},y:"a",t:"32 【Navigator 对象和Screen 对象】"},["/front_end/front_end_base/javascript/32","/front_end/front_end_base/javascript/32.md"]],["v-f6a95610","/front_end/front_end_base/javascript/33.html",{e:`<h1> 33 【History对象和Location对象】</h1>
<h2> 1.History 对象概述</h2>
<p><code>window.history</code>属性指向 History 对象，它表示当前窗口的浏览历史。</p>
<p>History 对象保存了当前窗口访问过的所有页面网址。下面代码表示当前窗口一共访问过3个网址。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:5.93,words:1779},y:"a",t:"33 【History对象和Location对象】"},["/front_end/front_end_base/javascript/33","/front_end/front_end_base/javascript/33.md"]],["v-f33fa4d2","/front_end/front_end_base/javascript/34.html",{e:`<h1> 34 【表单和FormData 对象】</h1>
<h2> 1.FormData 对象</h2>
<h3> 1.1 概述</h3>
<p>表单数据以键值对的形式向服务器发送，这个过程是浏览器自动完成的。但是有时候，我们希望通过脚本完成这个过程，构造或编辑表单的键值对，然后通过脚本发送给服务器。浏览器原生提供了 FormData 对象来完成这项工作。</p>
<p><code>FormData()</code>首先是一个构造函数，用来生成表单的实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> formdata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:8.29,words:2488},y:"a",t:"34 【表单和FormData 对象】"},["/front_end/front_end_base/javascript/34","/front_end/front_end_base/javascript/34.md"]],["v-efd5f394","/front_end/front_end_base/javascript/35.html",{e:`<h1> 35【Storage接口】</h1>
<h2> 1.概述</h2>
<p>Storage 接口用于脚本在浏览器保存数据。两个对象部署了这个接口：<code>window.sessionStorage</code>和<code>window.localStorage</code>。</p>
<p><code>sessionStorage</code>保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空；<code>localStorage</code>保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。</p>`,r:{minutes:3.87,words:1161},y:"a",t:"35【Storage接口】"},["/front_end/front_end_base/javascript/35","/front_end/front_end_base/javascript/35.md"]],["v-ec6c4256","/front_end/front_end_base/javascript/36.html",{e:`<h1> 36 【节流和防抖】</h1>
<h2> 1.节流（throttle）</h2>
<p><strong>所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数</strong></p>
<div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>开发使用场景 – 小米轮播图点击效果、鼠标移动、页面尺寸缩放resize、滚动条滚动 就可以加节流
假如一张轮播图完成切换需要300ms， 不加节流效果，快速点击，则嗖嗖嗖的切换，加上节流效果，不管快速点击多少次，300ms时间内，只能切换一张图片。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.2,words:661},y:"a",t:"36 【节流和防抖】"},["/front_end/front_end_base/javascript/36","/front_end/front_end_base/javascript/36.md"]],["v-bfed7bf0","/front_end/front_end_framework/uniapp/01.html",{e:`<h1> 01 【微信小程序起步】</h1>
<h2> 1.小程序简介</h2>
<p>小程序与普通网页开发的区别</p>
<ol>
<li>运行环境不同
网页运行在浏览器中
小程序运行在微信环境中</li>
<li>API不同
由于运行环境不同，所以小程序中无法调用DOM和BOM的API
但是小程序中可以调用微信环境提供的各种API，例如：
地理定位
扫码
支付</li>
<li>开发模式不同
网页的开发模式：浏览器+代码编辑器
小程序：
申请小程序开发账号
安装小程序开发者工具
创建和配置小程序项目</li>
</ol>
<h2> 2.注册小程序开发账号</h2>
<p>使用浏览器打开<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer"><code>http://mp.weixin.qq.com/</code></a> 点击立即注册</p>`,r:{minutes:7.11,words:2134},y:"a",t:"01 【微信小程序起步】"},["/front_end/front_end_framework/uniapp/01","/front_end/front_end_framework/uniapp/01.md"]],["v-bc83cab2","/front_end/front_end_framework/uniapp/02.html",{e:`<h1> 02 【uni-app起步】</h1>
<h2> 1.什么是uni-app</h2>
<p><code>uni-app</code> 是一个使用 <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js (opens new window)</a>开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。</p>
<blockquote>
<p>翻译翻译就是：写一套代码就可以在多端运行</p>
</blockquote>`,r:{minutes:5.98,words:1793},y:"a",t:"02 【uni-app起步】"},["/front_end/front_end_framework/uniapp/02","/front_end/front_end_framework/uniapp/02.md"]],["v-b91a1974","/front_end/front_end_framework/uniapp/03.html",{e:`<h1> 03 【全局配置】</h1>
<h2> 1.globalStyle 全局外观配置</h2>
<p>用于设置应用的状态栏、导航条、标题、窗口背景色等。
部分属性：
navigationBar开头的都是导航栏设置（小程序导航栏+手机导航栏）
navigationBarBackgroundColor  导航栏背景颜色
navigationBarTitleText  导航栏标题文字内容
navigationBarTextStyle 导航栏标题颜色，仅支持 black / white</p>
<p>enablePullDownRefresh 是否开启全局的下拉刷新。 （默认为false）
backgroundTextStyle 下拉 loading 的样式，仅支持 dark / light
backgroundColor  设置下拉 loading的背景颜色</p>`,r:{minutes:6.38,words:1914},y:"a",t:"03 【全局配置】"},["/front_end/front_end_framework/uniapp/03","/front_end/front_end_framework/uniapp/03.md"]],["v-b5b06836","/front_end/front_end_framework/uniapp/04.html",{e:`<h1> 04 【内置组件】</h1>
<h2> 1.视图容器</h2>
<h3> 1.1 view</h3>
<p><a href="https://uniapp.dcloud.net.cn/component/view.html" target="_blank" rel="noopener noreferrer">uni-app官网 (dcloud.net.cn)</a></p>
<p>它类似于传统html中的div，用于包裹各种元素内容。</p>
<p>如果使用<a href="https://uniapp.dcloud.io/tutorial/nvue-outline" target="_blank" rel="noopener noreferrer">nvue (opens new window)</a>，则需注意，包裹文字应该使用<code>&lt;text&gt;</code>组件。</p>`,r:{minutes:7.26,words:2177},y:"a",t:"04 【内置组件】"},["/front_end/front_end_framework/uniapp/04","/front_end/front_end_framework/uniapp/04.md"]],["v-b246b6f8","/front_end/front_end_framework/uniapp/05.html",{e:`<h1> 05 【uni-app的API】</h1>
<h2> 1.概述</h2>
<p><code>uni-app</code>的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。</p>
<p>标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。</p>
<p>uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。</p>`,r:{minutes:24.07,words:7220},y:"a",t:"05 【uni-app的API】"},["/front_end/front_end_framework/uniapp/05","/front_end/front_end_framework/uniapp/05.md"]],["v-aedd05ba","/front_end/front_end_framework/uniapp/06.html",{e:`<h1> 06 【uniapp生命周期】</h1>
<p>生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。</p>
<p>生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数。</p>
<h2> 1.应用生命周期</h2>
<p><a href="https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle" target="_blank" rel="noopener noreferrer">uni-app官网 (dcloud.net.cn)</a></p>
<p><code>uni-app</code> 支持如下应用生命周期函数：</p>`,r:{minutes:4.48,words:1343},y:"a",t:"06 【uniapp生命周期】"},["/front_end/front_end_framework/uniapp/06","/front_end/front_end_framework/uniapp/06.md"]],["v-ab73547c","/front_end/front_end_framework/uniapp/07.html",{e:`<h1> 07 【uniCloud】</h1>
<h2> 1.开发自己的第一个uniCloud项目</h2>
<ol>
<li>创建uniCloud项目</li>
</ol>
<p>HBuilderX中新建项目，选择uni-app项目，并勾选<code>启用uniCloud</code>，在右侧选择服务供应商（腾讯云或阿里云）</p>
<p>项目名称随意，比如 firstunicloud</p>
<ol start="2">
<li>关联服务空间</li>
</ol>
<p>一个开发者可以拥有多个服务空间，每个服务空间都是一个独立的serverless云环境，不同服务空间之间的云函数、数据库、存储都是隔离的。</p>`,r:{minutes:15.25,words:4574},y:"a",t:"07 【uniCloud】"},["/front_end/front_end_framework/uniapp/07","/front_end/front_end_framework/uniapp/07.md"]],["v-a809a33e","/front_end/front_end_framework/uniapp/08.html",{e:`<h1> 08 【云数据库】</h1>
<h2> 1 入门</h2>
<h3> 1.1 基础概念</h3>
<p><code>uniCloud</code>提供了一个 JSON 格式的文档型数据库。顾名思义，数据库中的每条记录都是一个 JSON 格式的文档。</p>
<p>它是 nosql 非关系型数据库，如果您之前熟悉 sql 关系型数据库，那么两者概念对应关系如下表：</p>
<table>
<thead>
<tr>
<th style="text-align:left">关系型</th>
<th style="text-align:left">JSON 文档型</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">数据库 database</td>
<td style="text-align:left">数据库 database</td>
</tr>
<tr>
<td style="text-align:left">表 table</td>
<td style="text-align:left">集合 collection。但行业里也经常称之为“表”。无需特意区分</td>
</tr>
<tr>
<td style="text-align:left">行 row</td>
<td style="text-align:left">记录 record / doc</td>
</tr>
<tr>
<td style="text-align:left">字段 column / field</td>
<td style="text-align:left">字段 field</td>
</tr>
<tr>
<td style="text-align:left">使用sql语法操作</td>
<td style="text-align:left">使用MongoDB语法或jql语法操作</td>
</tr>
</tbody>
</table>`,r:{minutes:18.98,words:5695},y:"a",t:"08 【云数据库】"},["/front_end/front_end_framework/uniapp/08","/front_end/front_end_framework/uniapp/08.md"]],["v-a49ff200","/front_end/front_end_framework/uniapp/09.html",{e:`<h1> 09 【云存储】</h1>
<h2> 1.概述</h2>
<p>云存储的上传方式有3种：</p>
<ol>
<li>web界面：即在<a href="https://unicloud.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">https://unicloud.dcloud.net.cn/ (opens new window)</a>web控制台，点击云存储，通过web界面进行文件上传。该管理界面同时提供了资源浏览、删除等操作界面。</li>
<li>客户端API或组件上传：在前端js中编写<code>uniCloud.uploadFile</code>，或者使用uni ui的<a href="https://ext.dcloud.net.cn/plugin?id=4079" target="_blank" rel="noopener noreferrer">FilePicker组件 (opens new window)</a>，文件选择+上传均封装完毕。</li>
<li>云函数上传文件到云存储：即在云函数js中编写<code>uniCloud.uploadFile</code></li>
</ol>`,r:{minutes:8.51,words:2552},y:"a",t:"09 【云存储】"},["/front_end/front_end_framework/uniapp/09","/front_end/front_end_framework/uniapp/09.md"]],["v-8403a022","/front_end/css_advanced/tailwind/01.html",{e:`<h1> 01 【TailWind CSS 安装使用】</h1>
<blockquote>
<p>**简介：**Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。</p>
</blockquote>
<h2> 1.使用 CDN 快速体验 Tailwind CSS</h2>
<blockquote>
<p>使用 Play CDN 直接在浏览器中试用 Tailwind，无需任何构建步骤。Play CDN 仅用于开发目的，不是生产的最佳选择。</p>
</blockquote>`,r:{minutes:2.12,words:637},y:"a",t:"01 【TailWind CSS 安装使用】"},["/front_end/css_advanced/tailwind/01","/front_end/css_advanced/tailwind/01.md"]],["v-8099eee4","/front_end/css_advanced/tailwind/02.html",{e:`<h1> 02 【TailWind CSS 初体验】</h1>
<p>经过上一篇 <code>Tailwind CSS</code> 的学习，现在已经安装好了，万事俱备，只欠东风。这篇文章不往后学习，先来找找<strong>成就感!</strong>，体验一把 <code>Tailwind CSS</code> 的案例。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../dist/output.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-gray-600<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-gray-700 p-4 text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container mx-auto<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center text-5xl<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Hello TailWind CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-5<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./showTwo.html<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
              <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.ziruchu.com/uploads/slideshow/2019061744096.png<span class="token punctuation">"</span></span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shadow-lg border-2 border-sky-500 my-5 align-middle<span class="token punctuation">"</span></span>
            <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-gray-300 p-4 text-black<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>你好，TailWind CSS。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.21,words:363},y:"a",t:"02 【TailWind CSS 初体验】"},["/front_end/css_advanced/tailwind/02","/front_end/css_advanced/tailwind/02.md"]],["v-7d303da6","/front_end/css_advanced/tailwind/03.html",{e:`<h1> 03 【布局之Aspect-Ratio Container Box-Decoration-Break Object-Fit Object-Position】</h1>
<h2> 1.布局-纵横比（Aspect Ratio）</h2>
<h3> 1.1 快速参考</h3>
<p>用于控制元素纵横比的实用程序。</p>
<table>
<thead>
<tr>
<th>class</th>
<th>Properties</th>
</tr>
</thead>
<tbody>
<tr>
<td>aspect-auto</td>
<td>aspect-ratio: auto;</td>
</tr>
<tr>
<td>aspect-square</td>
<td>aspect-ratio: 1 / 1;</td>
</tr>
<tr>
<td>aspect-video</td>
<td>aspect-ratio: 16 / 9;</td>
</tr>
</tbody>
</table>`,r:{minutes:12.66,words:3799},y:"a",t:"03 【布局之Aspect-Ratio Container Box-Decoration-Break Object-Fit Object-Position】"},["/front_end/css_advanced/tailwind/03","/front_end/css_advanced/tailwind/03.md"]],["v-79c68c68","/front_end/css_advanced/tailwind/04.html",{e:`<h1> 04 【布局之Overscroll Behavior  定位偏移量】</h1>
<h2> 1.布局-Overscroll Behavior</h2>
<p><code>overscroll behavior</code> 用于控制浏览器到达滚动区域边界时的行为的功能类。这个属性可以用来防止在有多个滚动区域的页面中出现不必要的滚动。</p>
<h3> 1.1 快速参考</h3>
<table>
<thead>
<tr>
<th>Class</th>
<th>Properties</th>
</tr>
</thead>
<tbody>
<tr>
<td>overscroll-auto</td>
<td>overscroll-behavior: auto;</td>
</tr>
<tr>
<td>overscroll-contain</td>
<td>overscroll-behavior: contain;</td>
</tr>
<tr>
<td>overscroll-none</td>
<td>overscroll-behavior: none;</td>
</tr>
<tr>
<td>overscroll-y-auto</td>
<td>overscroll-behavior-y: auto;</td>
</tr>
<tr>
<td>overscroll-y-contain</td>
<td>overscroll-behavior-y: contain;</td>
</tr>
<tr>
<td>overscroll-y-none</td>
<td>overscroll-behavior-y: none;</td>
</tr>
<tr>
<td>overscroll-x-auto</td>
<td>overscroll-behavior-x: auto;</td>
</tr>
<tr>
<td>overscroll-x-contain</td>
<td>overscroll-behavior-x: contain;</td>
</tr>
<tr>
<td>overscroll-x-none</td>
<td>overscroll-behavior-x: none;</td>
</tr>
</tbody>
</table>`,r:{minutes:6.49,words:1947},y:"a",t:"04 【布局之Overscroll Behavior  定位偏移量】"},["/front_end/css_advanced/tailwind/04","/front_end/css_advanced/tailwind/04.md"]],["v-c15f9c8c","/front_end/front_end_framework/react/01.html",{e:`<h1> 01 【react入门】</h1>
<h2> 1.React简介</h2>
<p><strong>react是什么？</strong></p>
<p><strong>React</strong> 是一个用于构建用户界面的 JavaScript 库。</p>
<ul>
<li>是一个将数据渲染为 HTML 视图的开源 JS 库</li>
<li>它遵循基于组件的方法，有助于构建可重用的 UI 组件</li>
<li>它用于开发复杂的交互式的 web 和移动 UI</li>
</ul>
<blockquote>
<p>React 有什么特点？</p>
</blockquote>
<ol>
<li>使用虚拟 DOM 而不是真正的 DOM</li>
<li>它可以用服务器渲染</li>
<li>它遵循单向数据流或数据绑定</li>
<li>高效</li>
<li>声明式编码，组件化编码</li>
</ol>`,r:{minutes:6.57,words:1972},y:"a",t:"01 【react入门】"},["/front_end/front_end_framework/react/01","/front_end/front_end_framework/react/01.md"]],["v-bdf5eb4e","/front_end/front_end_framework/react/02.html",{e:`<h1> 02 【面向组件编程】</h1>
<h2> 1.组件的使用</h2>
<p>当应用是以多组件的方式实现，这个应用就是一个组件化的应用</p>
<p>只有两种方式的组件</p>
<ul>
<li>函数组件</li>
<li>类式组件</li>
</ul>
<blockquote>
<p><strong>注意：</strong></p>
<ol>
<li>组件名必须是首字母大写（React 会将以小写字母开头的组件视为原生 DOM 标签。例如，&lt; div /&gt;<code>代表 HTML 的 div 标签，而</code>&lt; Weclome /&gt; 则代表一个组件，并且需在作用域内使用 <code>Welcome</code>）</li>
<li>虚拟DOM元素只能有一个根元素</li>
<li>虚拟DOM元素必须有结束标签 <code>&lt; /&gt;</code></li>
</ol>
</blockquote>`,r:{minutes:28.59,words:8576},y:"a",t:"02 【面向组件编程】"},["/front_end/front_end_framework/react/02","/front_end/front_end_framework/react/02.md"]],["v-ba8c3a10","/front_end/front_end_framework/react/03.html",{e:`<h1> 03 【事件处理】</h1>
<blockquote>
<p>React的事件是通过onXxx属性指定事件处理函数</p>
<p>React 使用的是自定义事件，而不是原生的 DOM 事件</p>
<p>React 的事件是通过事件委托方式处理的（为了更加的高效）</p>
<p>可以通过事件的 <code>event.target</code>获取发生的 DOM 元素对象，可以尽量减少 <code>refs</code>的使用</p>
<p>事件中必须返回的是函数</p>
</blockquote>
<h2> 1.React事件</h2>
<p>React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：</p>`,r:{minutes:8.22,words:2466},y:"a",t:"03 【事件处理】"},["/front_end/front_end_framework/react/03","/front_end/front_end_framework/react/03.md"]],["v-b72288d2","/front_end/front_end_framework/react/04.html",{e:`<h1> 04 【生命周期】</h1>
<h2> 1.简介</h2>
<p>组件从创建到死亡，会经过一些特定的阶段</p>
<p>React组件中包含一系列钩子函数{生命周期回调函数}，会在特定的时刻调用</p>
<p>我们在定义组件的时候，会在特定的声明周期回调函数中，做特定的工作</p>
<p>在 React 中为我们提供了一些生命周期钩子函数，让我们能在 React 执行的重要阶段，在钩子函数中做一些事情。那么在 React 的生命周期中，有哪些钩子函数呢，我们来总结一下</p>
<p><strong>react生命周期(旧)</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token literal-property property">初始化阶段</span><span class="token operator">:</span> 由ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>触发<span class="token operator">--</span><span class="token operator">-</span>初次渲染
                    <span class="token number">1.</span>	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">2.</span>	<span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">3.</span>	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">4.</span>	<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span><span class="token operator">==</span><span class="token operator">&gt;</span> 常用
                        一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
<span class="token number">2.</span> <span class="token literal-property property">更新阶段</span><span class="token operator">:</span> 由组件内部<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setSate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>或父组件render触发
                    <span class="token number">1.</span>	<span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">2.</span>	<span class="token function">componentWillUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token number">3.</span>	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span><span class="token operator">==</span><span class="token operator">&gt;</span> 必须使用的一个
                    <span class="token number">4.</span>	<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">3.</span> <span class="token literal-property property">卸载组件</span><span class="token operator">:</span> 由ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>触发
                    <span class="token number">1.</span>	<span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">===</span><span class="token operator">==</span><span class="token operator">&gt;</span> 常用
                        一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.34,words:3703},y:"a",t:"04 【生命周期】"},["/front_end/front_end_framework/react/04","/front_end/front_end_framework/react/04.md"]],["v-b3b8d794","/front_end/front_end_framework/react/05.html",{e:`<h1> 05 【条件渲染】</h1>
<p>在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。</p>
<h2> 基础配置</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>other <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> #ff0000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/babel"</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLogin</span><span class="token operator">:</span><span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>type<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>type<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Demo<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.85,words:1155},y:"a",t:"05 【条件渲染】"},["/front_end/front_end_framework/react/05","/front_end/front_end_framework/react/05.md"]],["v-b04f2656","/front_end/front_end_framework/react/06.html",{e:`<h1> 06 【列表 &amp; Key】</h1>
<p>首先，让我们看下在 Javascript 中如何转化列表。</p>
<p>如下代码，我们使用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer"><code>map()</code></a> 函数让数组中的每一项变双倍，然后我们得到了一个新的列表 <code>doubled</code> 并打印出来：</p>`,r:{minutes:13.42,words:4025},y:"a",t:"06 【列表 & Key】"},["/front_end/front_end_framework/react/06","/front_end/front_end_framework/react/06.md"]],["v-ace57518","/front_end/front_end_framework/react/07.html",{e:`<h1> 07 【收集表单数据】</h1>
<p>在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
    名字:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.47,words:2240},y:"a",t:"07 【收集表单数据】"},["/front_end/front_end_framework/react/07","/front_end/front_end_framework/react/07.md"]],["v-a97bc3da","/front_end/front_end_framework/react/08.html",{e:`<h1> 08 【状态提升】</h1>
<h2> 1.介绍</h2>
<p>所谓 <strong>状态提升</strong> 就是将各个子组件的 公共state 提升到它们的父组件进行统一存储、处理（这就是所谓的”单一数据源“），负责<code>setState</code>的函数传到下边的子级组件，然后再将父组件处理后的数据或函数props到各子组件中。</p>
<p>那么如果子组件 要 修改父组件的state该怎么办呢？我们的做法就是 将父组件中负责setState的函数，以props的形式传给子组件，然后子组件在需要改变state时调用即可。</p>
<p><strong>实现方式</strong></p>`,r:{minutes:4.05,words:1216},y:"a",t:"08 【状态提升】"},["/front_end/front_end_framework/react/08","/front_end/front_end_framework/react/08.md"]],["v-a612129c","/front_end/front_end_framework/react/09.html",{e:`<h1> 09 【组合组件】</h1>
<h2> 1.包含关系</h2>
<p>有些组件无法提前知晓它们子组件的具体内容。在 <code>Sidebar</code>（侧边栏）和 <code>Dialog</code>（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。</p>
<p>我们建议这些组件使用一个特殊的 <code>children</code> prop 来将他们的子组件传递到渲染结果中：</p>
<blockquote>
<p>组件标签里面包含的子元素会通过 <code>props.children</code> 传递进来。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">One</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token comment">//特殊的children props</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Two</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token comment">//这使别的组件可以通过JSX嵌套，来将任意组件作为子组件来传递给他们</span>
  <span class="token operator">&lt;</span>One<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>One<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.44,words:432},y:"a",t:"09 【组合组件】"},["/front_end/front_end_framework/react/09","/front_end/front_end_framework/react/09.md"]],["v-5afcd748","/front_end/front_end_framework/react/10.html",{e:`<h1> 10 【初始化脚手架】</h1>
<h2> 1.什么是 React 脚手架？</h2>
<p>在我们的现实生活中，脚手架最常用的使用场景是在工地，它是为了保证施工顺利的、方便的进行而搭建的，在工地上搭建的脚手架可以帮助工人们高校的去完成工作，同时在大楼建设完成后，拆除脚手架并不会有任何的影响。</p>
<p>在我们的 React 项目中，脚手架的作用与之有异曲同工之妙</p>
<p>React 脚手架其实是一个工具帮我们快速的生成项目的工程化结构，每个项目的结构其实大致都是相同的，所以 React 给我提前的搭建好了，这也是脚手架强大之处之一，也是用 React 创建 SPA 应用的最佳方式</p>`,r:{minutes:13.21,words:3964},y:"a",t:"10 【初始化脚手架】"},["/front_end/front_end_framework/react/10","/front_end/front_end_framework/react/10.md"]],["v-5793260a","/front_end/front_end_framework/react/11.html",{e:`<h1> 11 【react-router 5】</h1>
<h2> 1.准备</h2>
<h3> 1.1 SPA</h3>
<p>而为了减少这样的情况，我们还有另一种应用，叫做 SPA ，单页应用程序</p>
<p>它比传统的 Web 应用程序更快，因为它们在 Web 浏览器本身而不是在服务器上执行逻辑。在初始页面加载后，<strong>只有数据来回发送</strong>，而不是整个 HTML，这会降低带宽。它们可以独立请求标记和数据，并直接在浏览器中呈现页面</p>
<h3> 1.2 什么是路由？</h3>
<p>路由是根据不同的 URL 地址展示不同的内容或页面</p>
<p>在 SPA 应用中，大部分页面结果不改变，只改变部分内容的使用</p>`,r:{minutes:17.44,words:5232},y:"a",t:"11 【react-router 5】"},["/front_end/front_end_framework/react/11","/front_end/front_end_framework/react/11.md"]],["v-542974cc","/front_end/front_end_framework/react/12.html",{e:`<h1> 12 【react高级指引（上）】</h1>
<h2> 1.setState 扩展</h2>
<h3> 1.1 对象式 setState</h3>
<p>首先在我们以前的认知中，<code>setState</code> 是用来更新状态的，我们一般给它传递一个对象，就像这样</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:17.92,words:5377},y:"a",t:"12 【react高级指引（上）】"},["/front_end/front_end_framework/react/12","/front_end/front_end_framework/react/12.md"]],["v-50bfc38e","/front_end/front_end_framework/react/13.html",{e:`<h1> 13【react高级指引（下）】</h1>
<h2> 1.组件优化</h2>
<h3> 1.1 shouldComponentUpdate 优化</h3>
<p>在我们之前一直写的代码中，我们一直使用的<code>Component</code> 是有问题存在的</p>
<ol>
<li>只要执行 <code>setState</code> ，即使不改变状态数据，组件也会调用 <code>render</code></li>
<li>当前组件状态更新，也会引起子组件 <code>render</code></li>
</ol>
<p>而我们想要的是只有组件的 <code>state</code> 或者 <code>props</code> 数据发生改变的时候，再调用 <code>render</code></p>`,r:{minutes:10,words:2999},y:"a",t:"13【react高级指引（下）】"},["/front_end/front_end_framework/react/13","/front_end/front_end_framework/react/13.md"]],["v-4d561250","/front_end/front_end_framework/react/14.html",{e:`<h1> 14【react-Hook （上）】</h1>
<p><em>Hook</em> 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。</p>
<h2> 1.准备</h2>
<h3> 1.1  什么是 Hook</h3>
<p>Hooks 译为钩子，Hooks 就是在函数组件内，负责钩进外部功能的函数。</p>
<p>React 提供了一些常用钩子，React 也支持自定义钩子，这些钩子都是用于为函数引入外部功能。</p>
<p>当我们在组件中，需要引入外部功能时，就可以使用 React 提供的钩子，或者自定义钩子。</p>`,r:{minutes:25.28,words:7583},y:"a",t:"14【react-Hook （上）】"},["/front_end/front_end_framework/react/14","/front_end/front_end_framework/react/14.md"]],["v-49ec6112","/front_end/front_end_framework/react/15.html",{e:`<h1> 15【react-Hook （下）】</h1>
<h2> 1.React.memo</h2>
<h3> 1.1 基本介绍</h3>
<blockquote>
<p>这是一个高阶组件，用来做性能优化的，这个本来应该是写在<code>React高级指引</code>中的，但是这个案例会和后面的<code>useCallback</code>联合起来，所以就写在这里了</p>
</blockquote>
<ul>
<li>React.memo() 是一个高阶组件，如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 <code>React.memo</code> 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。
<ul>
<li>它接收另一个组件作为参数，并且会返回一个包装过的新组件</li>
<li>包装过的新组件就会具有缓存功能，这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。</li>
<li>包装过后，只有组件的props发生变化，才会触发组件的重新的渲染，否则总是返回缓存中结果。如果函数组件被 <code>React.memo</code> 包裹，且其实现中拥有 <a href="https://zh-hans.reactjs.org/docs/hooks-state.html" target="_blank" rel="noopener noreferrer"><code>useState</code></a>，<a href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer" target="_blank" rel="noopener noreferrer"><code>useReducer</code></a> 或 <a href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext" target="_blank" rel="noopener noreferrer"><code>useContext</code></a> 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染。</li>
</ul>
</li>
</ul>`,r:{minutes:12.57,words:3772},y:"a",t:"15【react-Hook （下）】"},["/front_end/front_end_framework/react/15","/front_end/front_end_framework/react/15.md"]],["v-4682afd4","/front_end/front_end_framework/react/16.html",{e:`<h1> 16 【react-router 6】</h1>
<blockquote>
<p>关于路由的知识已在<code>11 【react-router 5】</code>中进行说明，这里主要是对于5版本的api的变换说明</p>
</blockquote>
<h2> 1.概述</h2>
<p>官方文档：<a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">Home v6.4.1 | React Router</a>React Router 以三个不同的包发布到 npm 上，它们分别为：</p>`,r:{minutes:13.12,words:3935},y:"a",t:"16 【react-router 6】"},["/front_end/front_end_framework/react/16","/front_end/front_end_framework/react/16.md"]],["v-4318fe96","/front_end/front_end_framework/react/17.html",{e:`<h1> 17 【redux】</h1>
<h2> 引言</h2>
<p>我们现在开始学习了 Redux ，在我们之前写的案例当中，我们对于状态的管理，都是通过 state 来实现的，比如，我们在给兄弟组件传递数据时，需要先将数据传递给父组件，再由父组件转发 给它的子组件。这个过程十分的复杂，后来我们又学习了<strong>消息的发布订阅</strong>，我们通过 <strong>pubsub</strong> 库，实现了消息的转发，直接将数据发布，由兄弟组件订阅，实现了兄弟组件间的数据传递。但是，随着我们的需求不断地提升，我们需要进行更加复杂的数据传递，更多层次的数据交换。<strong>因此我们为何不可以将所有的数据交给一个中转站，这个中转站独立于所有的组件之外，由这个中转站来进行数据的分发，这样不管哪个组件需要数据，我们都可以很轻易的给他派发。</strong></p>`,r:{minutes:20.83,words:6248},y:"a",t:"17 【redux】"},["/front_end/front_end_framework/react/17","/front_end/front_end_framework/react/17.md"]],["v-3faf4d58","/front_end/front_end_framework/react/18.html",{e:`<h1> 18 【Redux Toolkit】</h1>
<p>上边的案例我们一直在使用Redux核心库来使用Redux，除了Redux核心库外Redux还为我们提供了一种使用Redux的方式——Redux Toolkit。它的名字起的非常直白，Redux工具包，简称RTK。RTK可以帮助我们处理使用Redux过程中的重复性工作，简化Redux中的各种操作。</p>
<h2> 1.Redux Toolkit 概览</h2>
<h3> 1.1  Redux Toolkit 是什么？</h3>
<p><strong>Redux Toolkit</strong> 是官方推荐的编写 <strong>Redux</strong> 逻辑的方法。 它包含我们对于构建 <strong>Redux</strong> 应用程序必不可少的包和函数。 <strong>Redux Toolkit</strong> 的构建简化了大多数 <strong>Redux</strong> 任务，防止了常见错误，并使编写 <strong>Redux</strong> 应用程序变得更加容易。可以说 <strong>Redux Toolkit</strong> 就是目前 <strong>Redux</strong> 的最佳实践方式。</p>`,r:{minutes:24.51,words:7354},y:"a",t:"18 【Redux Toolkit】"},["/front_end/front_end_framework/react/18","/front_end/front_end_framework/react/18.md"]],["v-3c459c1a","/front_end/front_end_framework/react/19.html",{e:`<h1> 19 【RTK Query】</h1>
<h2> 1.目前前端常见的发起 ajax 请求的方式</h2>
<ul>
<li>1、使用原生的<code>ajax</code>请求</li>
<li>2、使用<code>jquery</code>封装好的<code>ajax</code>请求</li>
<li>3、使用<code>fetch</code>发起请求</li>
<li>4、第三方的比如<code>axios</code>请求</li>
<li>5、<code>angular</code>中自带的<code>HttpClient</code></li>
</ul>
<p>就目前前端框架开发中来说我们在开发<code>vue</code>、<code>react</code>的时候一般都是使用<code>fetch</code>或<code>axios</code>自己封装一层来与后端数据交互，至于<code>angular</code>肯定是用自带的<code>HttpClient</code>请求方式，但是依然存在几个致命的弱点，</p>`,r:{minutes:31.19,words:9356},y:"a",t:"19 【RTK Query】"},["/front_end/front_end_framework/react/19","/front_end/front_end_framework/react/19.md"]],["v-0767cf9d","/front_end/front_end_framework/react/20.html",{e:`<h1> 20 【react中使用ts】</h1>
<p>官方文档：<a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noopener noreferrer">React TypeScript Cheatsheets | React TypeScript Cheatsheets (react-typescript-cheatsheet.netlify.app)</a></p>
<blockquote>
<p>找了好久才找到</p>
</blockquote>
<h2> 1.创建一个组件</h2>`,r:{minutes:13.61,words:4082},y:"a",t:"20 【react中使用ts】"},["/front_end/front_end_framework/react/20","/front_end/front_end_framework/react/20.md"]],["v-091ca83c","/front_end/front_end_framework/react/21.html",{e:`<h1> 21 【styled-components的使用】</h1>
<h2> 1.为什么要用这个</h2>
<p>我们都知道，我们从最开始学css的时候，为了避免写的样式影响到另外的地方。所以我们这样来写的。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#userConten .userBtn button</span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:19.29,words:5786},y:"a",t:"21 【styled-components的使用】"},["/front_end/front_end_framework/react/21","/front_end/front_end_framework/react/21.md"]],["v-0ad180db","/front_end/front_end_framework/react/22.html",{e:`<h1> 22 【在react中使用Emotion】</h1>
<h2> 1.CSS in JS 的优点</h2>
<p><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FMicheleBertoli%2Fcss-in-js" target="_blank" rel="noopener noreferrer">CSS in JS</a> 已逐渐发展为 React 应用中写样式的一个主流的方案，著名组件库 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmui-org%2Fmaterial-ui" target="_blank" rel="noopener noreferrer">material-ui</a> 也已经使用 CSS in JS 来实现。 CSS in JS 的实现方式有两种: 唯一CSS选择器和内联样式。因此</p>`,r:{minutes:11.31,words:3392},y:"a",t:"22 【在react中使用Emotion】"},["/front_end/front_end_framework/react/22","/front_end/front_end_framework/react/22.md"]],["v-0c86597a","/front_end/front_end_framework/react/23.html",{e:`<h1> 23 【UmiJS入门】</h1>
<h2> 1.Umi 介绍</h2>
<figure><img src="https://img.alicdn.com/imgextra/i3/O1CN01eBiy611b67KLFOxi3_!!6000000003415-2-tps-200-200.png" alt="Umi" tabindex="0" loading="lazy"><figcaption>Umi</figcaption></figure>
<h3> 1.1 Umi 是什么？</h3>
<p>Umi，中文发音为「乌米」，是可扩展的企业级前端应用框架。Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。</p>`,r:{minutes:10.34,words:3102},y:"a",t:"23 【UmiJS入门】"},["/front_end/front_end_framework/react/23","/front_end/front_end_framework/react/23.md"]],["v-d6cb3c78","/front_end/front_end_framework/vue3/01.html",{e:`<h1> 01 【创建vue3项目】</h1>
<blockquote>
<p>该笔记是从vue2过渡到vue3的，所以不会特别详细的介绍某些vue2学过的，主要介绍vue3新增的。</p>
</blockquote>
<h2> 1.Vue3快速上手</h2>
<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px">
<h3> 1.1 Vue3简介</h3>
<ul>
<li>2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）</li>
<li>耗时2年多、<a href="https://github.com/vuejs/vue-next/graphs/commit-activity" target="_blank" rel="noopener noreferrer">2600+次提交</a>、<a href="https://github.com/vuejs/rfcs/tree/master/active-rfcs" target="_blank" rel="noopener noreferrer">30+个RFC</a>、<a href="https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+" target="_blank" rel="noopener noreferrer">600+次PR</a>、<a href="https://github.com/vuejs/vue-next/graphs/contributors" target="_blank" rel="noopener noreferrer">99位贡献者</a></li>
<li>github上的tags地址：<a href="https://github.com/vuejs/vue-next/releases/tag/v3.0.0" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/vue-next/releases/tag/v3.0.0</a></li>
</ul>`,r:{minutes:4.8,words:1440},y:"a",t:"01 【创建vue3项目】"},["/front_end/front_end_framework/vue3/01","/front_end/front_end_framework/vue3/01.md"]],["v-d3618b3a","/front_end/front_end_framework/vue3/02.html",{e:`<h1> 02 【setup reactive ref】</h1>
<h2> 1.拉开序幕的setup</h2>
<h3> 1.1 为什么使用 setup ？</h3>
<ul>
<li>
<p>大型组件中选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块。 如果能够将同一个逻辑关注点相关代码收集在一起会更好。而这正是组合式 API 使我们能够做到的。</p>
</li>
<li>
<p>通过创建 Vue 组件，我们可以将界面中重复的部分连同其功能一起提取为可重用的代码段。然而，光靠这一点可能并不够，尤其是当你的应用变得非常大的时候，共享和重用代码变得尤为重要。</p>
</li>
<li>
<p>为了开始使用 组合式 API，我们首先需要一个可以实际使用它的地方。在 Vue 组件中，我们将此位置称为 setup。</p>
</li>
</ul>`,r:{minutes:12.02,words:3607},y:"a",t:"02 【setup reactive ref】"},["/front_end/front_end_framework/vue3/02","/front_end/front_end_framework/vue3/02.md"]],["v-cff7d9fc","/front_end/front_end_framework/vue3/03.html",{e:`<h1> 03 【响应式原理 ref和reactive总结 setup注意点】</h1>
<h2> 1.Vue3.0中的响应式原理</h2>
<h3> 1.1 vue2.x的响应式</h3>
<ul>
<li>
<p>实现原理：</p>
<ul>
<li>
<p>对象类型：通过<code>Object.defineProperty()</code>对属性的读取、修改进行拦截（数据劫持）。</p>
</li>
<li>
<p>数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>存在问题：</p>
<ul>
<li>新增属性、删除属性, 界面不会更新。</li>
<li>直接通过下标修改数组, 界面不会自动更新。</li>
</ul>
</li>
</ul>`,r:{minutes:5.99,words:1797},y:"a",t:"03 【响应式原理 ref和reactive总结 setup注意点】"},["/front_end/front_end_framework/vue3/03","/front_end/front_end_framework/vue3/03.md"]],["v-cc8e28be","/front_end/front_end_framework/vue3/04.html",{e:`<h1> 04 【计算属性 侦听器】</h1>
<h2> 1.计算属性</h2>
<p>有时我们需要依赖于其他状态(普通proxy响应式数据)的状态(computed响应式数据)：
在 Vue 中，这是用组件计算属性处理的，以直接创建计算值，我们可以使用 computed 函数：它接受 getter 函数并为 getter 返回的值返回一个不可变的响应式 ref 对象。</p>
<h3> 1.1 computed函数</h3>
<blockquote>
<p>与Vue2.x中computed配置功能一致</p>
<p>可以直接去看3.7.3完整写法</p>
</blockquote>
<p>模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。比如说，我们有这样一个包含嵌套数组的对象：</p>`,r:{minutes:17.98,words:5395},y:"a",t:"04 【计算属性 侦听器】"},["/front_end/front_end_framework/vue3/04","/front_end/front_end_framework/vue3/04.md"]],["v-c5bac642","/front_end/front_end_framework/vue3/06.html",{e:`<h1> 06 【生命周期 模板引用】</h1>
<h2> 1.生命周期</h2>
<p><strong>vue2</strong></p>
<figure><img src="https://i0.hdslb.com/bfs/album/a394b0ab95328a0cceb27fcee78c91d85ffe11a5.png" alt="image-20220629211626515" tabindex="0" loading="lazy"><figcaption>image-20220629211626515</figcaption></figure>
<p><strong>vue3</strong></p>`,r:{minutes:14.15,words:4246},y:"a",t:"06 【生命周期 模板引用】"},["/front_end/front_end_framework/vue3/06","/front_end/front_end_framework/vue3/06.md"]],["v-c2511504","/front_end/front_end_framework/vue3/07.html",{e:`<h1> 07 【动态组件 组件注册】</h1>
<h2> 1.动态组件</h2>
<h3> 1.1 基本使用</h3>
<p>composition api写法：只适用于vue3</p>
<ul>
<li>在 <code>&lt;script setup&gt;</code> 中，组件被引用为变量而不是作为 字符串键 来注册</li>
<li>核心点 shallowRef()</li>
<li>虽然用 ref() 也能正常使用，但官方不推荐，会爆warn: "这可能会导致不必要的性能开销" （原因，组件不是动态数据，不需要转为proxy）</li>
<li>:is 与 component   &gt;  设置动态组件的必要条件</li>
<li>:is 对应绑定的为字符串值即可，值对应引入的组件名</li>
<li>props 数据父传子</li>
<li>shallowRef   &gt;  声明 :is 绑定的值，值为 import 的组件名</li>
</ul>`,r:{minutes:4.82,words:1446},y:"a",t:"07 【动态组件 组件注册】"},["/front_end/front_end_framework/vue3/07","/front_end/front_end_framework/vue3/07.md"]],["v-bee763c6","/front_end/front_end_framework/vue3/08.html",{e:`<h1> 08 【Props 组件事件】</h1>
<h2> 1.Props</h2>
<h3> 1.1 Props 声明<a href="https://staging-cn.vuejs.org/guide/components/props.html#props-declaration" target="_blank" rel="noopener noreferrer">#</a></h3>
<p>Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给子组件内容，我们必须在组件的 props 列表上声明它。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- BlogPost.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:19.19,words:5757},y:"a",t:"08 【Props 组件事件】"},["/front_end/front_end_framework/vue3/08","/front_end/front_end_framework/vue3/08.md"]],["v-bb7db288","/front_end/front_end_framework/vue3/09.html",{e:`<h1> 09 【Attributes继承 provide与inject】</h1>
<h2> 1.继承 Attributes</h2>
<h3> 1.1 Attributes 继承</h3>
<h4> 1.1.1 Attributes 继承的基本概念</h4>
<p>“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 <a href="https://staging-cn.vuejs.org/guide/components/props.html" target="_blank" rel="noopener noreferrer">props</a> 或 <a href="https://staging-cn.vuejs.org/guide/components/events.html#defining-custom-events" target="_blank" rel="noopener noreferrer">emits</a> 的 attribute 或者 <code>v-on</code> 事件监听器。最常见的例子就是 <code>class</code>、<code>style</code> 和 <code>id</code>。</p>`,r:{minutes:13.09,words:3926},y:"a",t:"09 【Attributes继承 provide与inject】"},["/front_end/front_end_framework/vue3/09","/front_end/front_end_framework/vue3/09.md"]],["v-70687734","/front_end/front_end_framework/vue3/10.html",{e:`<h1> 10 【异步组件 组合式函数(hooks)】</h1>
<h2> 1.异步组件</h2>
<h3> 1.1 为什么要有异步组件</h3>
<p>首先来看这样一段代码</p>
<p>父组件<code>App.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>我是App组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./components/Child.vue'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.26,words:3979},y:"a",t:"10 【异步组件 组合式函数(hooks)】"},["/front_end/front_end_framework/vue3/10","/front_end/front_end_framework/vue3/10.md"]],["v-6cfec5f6","/front_end/front_end_framework/vue3/11.html",{e:`<h1> 11 【Teleport CSS功能】</h1>
<h2> 1.内置组件 Teleport</h2>
<p>什么是Teleport？——<code>&lt;Teleport&gt;</code> 是一个内置组件，它是一种能够将我们的模板渲染至指定DOM节点，不受父级style、v-show等属性影响，但data、prop数据依旧能够共用的技术；类似于 React 的 Portal。</p>
<p>主要解决的问题 因为Teleport节点挂载在其他指定的DOM节点下，完全不受父级style样式影响</p>
<ol>
<li>teleport 是内置组件，可以直接在模板中使用，无需注册。</li>
<li>可以被打包工具 tree-shake。所以它们只会在被使用的时候被引入。</li>
<li>需要直接主动访问(获取)它们的场景，也可以将它们显性导入。</li>
</ol>`,r:{minutes:13.47,words:4041},y:"a",t:"11 【Teleport CSS功能】"},["/front_end/front_end_framework/vue3/11","/front_end/front_end_framework/vue3/11.md"]],["v-699514b8","/front_end/front_end_framework/vue3/12.html",{e:`<h1> 12 【其它组合式API】</h1>
<p>ref、unref、toRef、toRefs、isRef、customRef、shallowRef、triggerRef</p>
<p>refs api中的重点为：ref、toRefs、shallowRef、customRef，其次是 isRef 等。</p>
<h2> 1.toRef 与 toRefs</h2>
<h3> 1.1 toRef</h3>
<ul>
<li>
<p>作用：可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。</p>
</li>
<li>
<p>语法 (源对象 , 源对象属性)\`\`\`\`const name = toRef(person,'name')\`\`\`</p>
</li>
<li>
<p>应用: 源响应式对象(toRef的第一个参数) 上的某个 property 新创建一个 ref</p>
</li>
<li>
<p><strong>toRef示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fooRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span>

<span class="token comment">// 更改该 ref 会更新源属性</span>
fooRef<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token comment">// 更改源属性也会更新该 ref</span>
state<span class="token punctuation">.</span>foo<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，这不同于：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fooRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这个 ref <strong>不会</strong>和 <code>state.foo</code> 保持同步，因为这个 <code>ref()</code> 接收到的是一个纯数值。</p>
<p><code>toRef()</code> 这个函数在你想把一个 prop 的 ref 传递给一个组合式函数时会很有用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span>

<span class="token comment">// 将 \`props.foo\` 转换为 ref，然后传入</span>
<span class="token comment">// 一个组合式函数</span>
<span class="token function">useSomeFeature</span><span class="token punctuation">(</span><span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code>toRef</code> 与组件 props 结合使用时，关于禁止对 props 做出更改的限制依然有效。尝试将新的值传递给 ref 等效于尝试直接更改 props，这是不允许的。在这种场景下，你可能可以考虑使用带有 <code>get</code> 和 <code>set</code> 的 <a href="https://staging-cn.vuejs.org/api/reactivity-core.html#computed" target="_blank" rel="noopener noreferrer"><code>computed</code></a> 替代。详情请见<a href="https://staging-cn.vuejs.org/guide/components/events.html#usage-with-v-model" target="_blank" rel="noopener noreferrer">在组件上使用 <code>v-model</code></a> 指南。</p>
<p>即使源属性当前不存在，<code>toRef()</code> 也会返回一个可用的 ref。这让它在处理可选 props 的时候格外实用，相比之下 <a href="https://staging-cn.vuejs.org/api/reactivity-utilities.html#torefs" target="_blank" rel="noopener noreferrer"><code>toRefs</code></a> 就不会为可选 props 创建对应的 refs。</p>
</li>
</ul>`,r:{minutes:11.84,words:3552},y:"a",t:"12 【其它组合式API】"},["/front_end/front_end_framework/vue3/12","/front_end/front_end_framework/vue3/12.md"]],["v-662b637a","/front_end/front_end_framework/vue3/13.html",{e:`<h1> 13 【script setup 总结】</h1>
<blockquote>
<p>因为学习的时候，视频版本并没有一些新的语法糖，笔记是没有使用这些语法糖的，但是用法都会以补充的形式加进来。</p>
</blockquote>
<p>在 <code>setup()</code> 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 <code>&lt;script setup&gt;</code> 来大幅度地简化代码。</p>
<p><code>&lt;script setup&gt; </code>是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的<code>&lt;script&gt;</code>语法，它具有更多优势：</p>`,r:{minutes:8.79,words:2637},y:"a",t:"13 【script setup 总结】"},["/front_end/front_end_framework/vue3/13","/front_end/front_end_framework/vue3/13.md"]],["v-62c1b23c","/front_end/front_end_framework/vue3/14.html",{e:`<h1> 14 【TS类型声明 keepAlive】</h1>
<h2> 1.Ts 类型声明使用 &amp; 讲解</h2>
<blockquote>
<p>该文章未归纳完，那么多API肯定也说不完。。不过也涵盖了主要的组合式 API 的 TS类型。</p>
<p>核心：大部分都是运用API函数泛型来定义类型。</p>
</blockquote>
<h3> 1.1 父组件相关的</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onsub<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>childRef<span class="token punctuation">'</span></span> <span class="token attr-name">:child</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>2<span class="token punctuation">'</span></span> <span class="token attr-name">:strData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token punctuation">"</span>1"<span class="token punctuation">'</span></span> <span class="token attr-name">:arrFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[]<span class="token punctuation">"</span></span> <span class="token attr-name">@elPsyKongroo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>onsub<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>ts<span class="token punctuation">'</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">'./child.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>Ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>customRef<span class="token punctuation">,</span>watch<span class="token punctuation">,</span>provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
 
<span class="token comment">//&gt; ref</span>
<span class="token comment">// interface Ref&lt;T&gt; {</span>
<span class="token comment">//   value: T</span>
<span class="token comment">// }</span>
<span class="token comment">// function ref&lt;T&gt;(value: T): Ref&lt;T&gt;</span>
<span class="token keyword">const</span> year <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string <span class="token operator">|</span> number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">'2020'</span><span class="token punctuation">)</span>
<span class="token comment">// 如果泛型的类型未知，则建议将 ref 转换为 Ref&lt;T&gt;：</span>
<span class="token keyword">function</span> useState<span class="token operator">&lt;</span>State <span class="token keyword">extends</span> <span class="token class-name">string</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>initial<span class="token operator">:</span> State<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initial<span class="token punctuation">)</span> <span class="token keyword">as</span> Ref<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token comment">// state.value -&gt; State extends string</span>
  <span class="token keyword">return</span> state
<span class="token punctuation">}</span>
 
<span class="token comment">//&gt; reactive</span>
<span class="token keyword">interface</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  year<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">const</span> book <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>Book<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'唉，真有氏的怀表怎么停了!'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// function reactive&lt;T extends object&gt;(target: T): UnwrapNestedRefs&lt;T&gt;</span>
 
<span class="token comment">//&gt; customRef</span>
<span class="token comment">// function customRef&lt;T&gt;(factory: CustomRefFactory&lt;T&gt;): Ref&lt;T&gt;</span>
<span class="token comment">// type CustomRefFactory&lt;T&gt; = (</span>
<span class="token comment">//   track: () =&gt; void,</span>
<span class="token comment">//   trigger: () =&gt; void</span>
<span class="token comment">// ) =&gt; {</span>
<span class="token comment">//   get: () =&gt; T</span>
<span class="token comment">//   set: (value: T) =&gt; void</span>
<span class="token comment">// }</span>
<span class="token keyword">function</span> <span class="token function">useDebouncedRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span>string<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">200</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> customRef<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> newValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a23 <span class="token operator">=</span> <span class="token function">useDebouncedRef</span><span class="token punctuation">(</span><span class="token string">'heelo1'</span><span class="token punctuation">)</span>
a23<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'123'</span>
 
 
<span class="token comment">//&gt; provide 与 inject   // inject示例在同级child.vue里</span>
<span class="token comment">// interface InjectionKey&lt;T&gt; extends Symbol {}</span>
<span class="token comment">// function provide&lt;T&gt;(key: InjectionKey&lt;T&gt; | string, value: T): void</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'static'</span><span class="token punctuation">,</span>year<span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'pbook'</span><span class="token punctuation">,</span>book<span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'changeFn'</span><span class="token punctuation">,</span>onsub<span class="token punctuation">)</span>
<span class="token comment">//! 有时候可能需要在子组件修改响应式的数据，此时provide一个方法给子组件调用</span>
 
 
 
<span class="token comment">//&gt; computed</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doubleCount <span class="token operator">=</span> computed<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
 
<span class="token comment">//&gt; watch</span>
watch<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// watch&lt;Ref&lt;number&gt;&gt;(count,()=&gt;{}) // 也可以</span>
<span class="token keyword">interface</span> <span class="token class-name">ReactiveData2</span><span class="token punctuation">{</span>
  <span class="token literal-property property">content2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count2</span><span class="token operator">:</span> number
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> refData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> reactiveData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">content</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">110</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> reactiveData2 <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>ReactiveData2<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">content2</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">count2</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
watch<span class="token operator">&lt;</span><span class="token punctuation">[</span>Ref<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number<span class="token punctuation">,</span>ReactiveData2<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>refData<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>reactiveData<span class="token punctuation">.</span>content<span class="token punctuation">.</span>count<span class="token punctuation">,</span>reactiveData2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span><span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
 
<span class="token comment">// defineExpose 暴露的内容</span>
<span class="token comment">// let childRef = ref()</span>
<span class="token comment">// setTimeout(() =&gt; {</span>
<span class="token comment">//   console.log(childRef.value.ex1); // 如果是子组件的ref对象数据，会自动解包 .value</span>
<span class="token comment">// }, 1000);</span>
 
<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">onsub</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  year<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2036</span>
  book<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'掌管未来女神的作战计划 El psy kongroo'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.13,words:2140},y:"a",t:"14 【TS类型声明 keepAlive】"},["/front_end/front_end_framework/vue3/14","/front_end/front_end_framework/vue3/14.md"]],["v-5f5800fe","/front_end/front_end_framework/vue3/15.html",{e:`<h1> 15 【Pinia】</h1>
<h2> 1.pinia是什么？</h2>
<blockquote>
<p><strong>前言</strong></p>
<p>Vue3已经推出很长时间了，它周边的生态也是越来越完善了。之前我们使用Vue2的时候，Vuex可以说是必备的，它作为一个状态管理工具，给我们带来了极大的方便。Vue3推出后，虽然相对于Vue2很多东西都变了，但是核心的东西还是没有变的，比如说状态管理、路由等等。再Vue3种，尤大神推荐我们使用pinia来实现状态管理，他也说pinia就是Vuex的新版本。</p>
<p>那么pinia究竟是何方神圣，本篇文章带大家一起学透它！</p>
</blockquote>`,r:{minutes:18.67,words:5602},y:"a",t:"15 【Pinia】"},["/front_end/front_end_framework/vue3/15","/front_end/front_end_framework/vue3/15.md"]],["v-5bee4fc0","/front_end/front_end_framework/vue3/16.html",{e:`<h1> 16 【Router 4】</h1>
<p>使用Vue3 安装对应的router4版本</p>
<p>使用Vue2安装对应的router3版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:5.27,words:1582},y:"a",t:"16 【Router 4】"},["/front_end/front_end_framework/vue3/16","/front_end/front_end_framework/vue3/16.md"]],["v-58849e82","/front_end/front_end_framework/vue3/17.html",{e:`<h1> 17 【Vue3自动导入配置】</h1>
<h2> 1.自动导入组件库组件</h2>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fantfu%2Funplugin-vue-components%23readme" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a></p>
<figure><img src="https://i0.hdslb.com/bfs/album/1fdd991c3093cfe8e50851df60a5bfe507d764b7.png" alt="image-20220924104148732" tabindex="0" loading="lazy"><figcaption>image-20220924104148732</figcaption></figure>`,r:{minutes:4.12,words:1237},y:"a",t:"17 【Vue3自动导入配置】"},["/front_end/front_end_framework/vue3/17","/front_end/front_end_framework/vue3/17.md"]],["v-551aed44","/front_end/front_end_framework/vue3/18.html",{e:`<h1> 18 【Vue3组件通信方总结式】</h1>
<blockquote>
<p><strong>通信仓库地址:</strong><a href="https://gitee.com/jch1011/vue3_communication.git" target="_blank" rel="noopener noreferrer"><strong>https://gitee.com/jch1011/vue3_communication.git</strong></a></p>
<p>不管是vue2还是vue3,组件通信方式很重要,不管是项目还是面试都是经常用到的知识点。</p>
</blockquote>`,r:{minutes:11.09,words:3328},y:"a",t:"18 【Vue3组件通信方总结式】"},["/front_end/front_end_framework/vue3/18","/front_end/front_end_framework/vue3/18.md"]],["v-33cf2509","/front_end/js_advanced/echarts/01.html",{e:`<h1> 1.Echarts-介绍</h1>
<p>常见的数据可视化库：</p>
<ul>
<li>D3.js   目前 Web 端评价最高的 Javascript 可视化工具库(入手难)</li>
<li>ECharts.js   百度出品的一个开源 Javascript 数据可视化库</li>
<li>Highcharts.js  国外的前端数据可视化库，非商用免费，被许多国外大公司所使用</li>
<li>AntV  蚂蚁金服全新一代数据可视化解决方案  等等</li>
<li>Highcharts 和 Echarts 就像是 Office 和 WPS 的关系</li>
</ul>
<blockquote>
<p>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 <a href="https://github.com/ecomfe/zrender" target="_blank" rel="noopener noreferrer">ZRender</a>，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</p>
</blockquote>`,r:{minutes:12.21,words:3663},y:"a",t:"1.Echarts-介绍"},["/front_end/js_advanced/echarts/01","/front_end/js_advanced/echarts/01.md"]],["v-3583fda8","/front_end/js_advanced/echarts/02.html",{e:`<h1> 5.echarts 各个配置项详细说明总结</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>theme <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 全图默认背景</span>
    <span class="token comment">// backgroundColor: 'rgba(0,0,0,0)',</span>

    <span class="token comment">// 默认色板</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ff7f50'</span><span class="token punctuation">,</span><span class="token string">'#87cefa'</span><span class="token punctuation">,</span><span class="token string">'#da70d6'</span><span class="token punctuation">,</span><span class="token string">'#32cd32'</span><span class="token punctuation">,</span><span class="token string">'#6495ed'</span><span class="token punctuation">,</span>
            <span class="token string">'#ff69b4'</span><span class="token punctuation">,</span><span class="token string">'#ba55d3'</span><span class="token punctuation">,</span><span class="token string">'#cd5c5c'</span><span class="token punctuation">,</span><span class="token string">'#ffa500'</span><span class="token punctuation">,</span><span class="token string">'#40e0d0'</span><span class="token punctuation">,</span>
            <span class="token string">'#1e90ff'</span><span class="token punctuation">,</span><span class="token string">'#ff6347'</span><span class="token punctuation">,</span><span class="token string">'#7b68ee'</span><span class="token punctuation">,</span><span class="token string">'#00fa9a'</span><span class="token punctuation">,</span><span class="token string">'#ffd700'</span><span class="token punctuation">,</span>
            <span class="token string">'#6699FF'</span><span class="token punctuation">,</span><span class="token string">'#ff6666'</span><span class="token punctuation">,</span><span class="token string">'#3cb371'</span><span class="token punctuation">,</span><span class="token string">'#b8860b'</span><span class="token punctuation">,</span><span class="token string">'#30e0e0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 图表标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>                 <span class="token comment">// 水平安放位置，默认为左对齐，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token comment">//textAlign: null          // 水平对齐方式，默认根据x设置自动调整</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 标题边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 标题边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 标题内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 主副标题纵向间隔，单位px，默认为10，</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">'bolder'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>          <span class="token comment">// 主标题文字颜色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subtextStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#aaa'</span>          <span class="token comment">// 副标题文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 图例</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'horizontal'</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>               <span class="token comment">// 水平安放位置，默认为全图居中，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 图例边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 图例边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 图例内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 图例图形宽度</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>            <span class="token comment">// 图例图形高度</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>          <span class="token comment">// 图例文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 值域</span>
    <span class="token literal-property property">dataRange</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'vertical'</span><span class="token punctuation">,</span>        <span class="token comment">// 布局方式，默认为垂直布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>                 <span class="token comment">// 水平安放位置，默认为全图左对齐，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>               <span class="token comment">// 垂直安放位置，默认为全图底部，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 值域边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 值域边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 值域内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 值域图形宽度，线性渐变水平布局宽度为该值 * 10</span>
        <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>            <span class="token comment">// 值域图形高度，线性渐变垂直布局高度为该值 * 10</span>
        <span class="token literal-property property">splitNumber</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>            <span class="token comment">// 分割段数，默认为5，为0时为线性渐变</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'#1e90ff'</span><span class="token punctuation">,</span><span class="token string">'#f0ffff'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//颜色 </span>
        <span class="token comment">//text:['高','低'],         // 文本，默认为数值文本</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>          <span class="token comment">// 值域文字颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'horizontal'</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'right'</span><span class="token punctuation">,</span>                <span class="token comment">// 水平安放位置，默认为全图右对齐，可选为：</span>
                                   <span class="token comment">// 'center' ¦ 'left' ¦ 'right'</span>
                                   <span class="token comment">// ¦ {number}（x坐标，单位px）</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>                  <span class="token comment">// 垂直安放位置，默认为全图顶端，可选为：</span>
                                   <span class="token comment">// 'top' ¦ 'bottom' ¦ 'center'</span>
                                   <span class="token comment">// ¦ {number}（y坐标，单位px）</span>
        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#1e90ff'</span><span class="token punctuation">,</span><span class="token string">'#22bb22'</span><span class="token punctuation">,</span><span class="token string">'#4b0082'</span><span class="token punctuation">,</span><span class="token string">'#d2691e'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span> <span class="token comment">// 工具箱背景颜色</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>       <span class="token comment">// 工具箱边框颜色</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 工具箱边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 工具箱内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>               <span class="token comment">// 各个item之间的间隔，单位px，默认为10，</span>
                                   <span class="token comment">// 横向布局时为水平间隔，纵向布局时为纵向间隔</span>
        <span class="token literal-property property">itemSize</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>              <span class="token comment">// 工具箱图形宽度</span>
        <span class="token literal-property property">featureImageIcon</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 自定义图片icon</span>
        <span class="token literal-property property">featureTitle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">mark</span> <span class="token operator">:</span> <span class="token string">'辅助线开关'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">markUndo</span> <span class="token operator">:</span> <span class="token string">'删除辅助线'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">markClear</span> <span class="token operator">:</span> <span class="token string">'清空辅助线'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataZoom</span> <span class="token operator">:</span> <span class="token string">'区域缩放'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataZoomReset</span> <span class="token operator">:</span> <span class="token string">'区域缩放后退'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dataView</span> <span class="token operator">:</span> <span class="token string">'数据视图'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineChart</span> <span class="token operator">:</span> <span class="token string">'折线图切换'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barChart</span> <span class="token operator">:</span> <span class="token string">'柱形图切换'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">restore</span> <span class="token operator">:</span> <span class="token string">'还原'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">saveAsImage</span> <span class="token operator">:</span> <span class="token string">'保存为图片'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 提示框</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'item'</span><span class="token punctuation">,</span>           <span class="token comment">// 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'</span>
        <span class="token literal-property property">showDelay</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>             <span class="token comment">// 显示延迟，添加显示延迟可以避免频繁切换，单位ms</span>
        <span class="token literal-property property">hideDelay</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>            <span class="token comment">// 隐藏延迟，单位ms</span>
        <span class="token literal-property property">transitionDuration</span> <span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>  <span class="token comment">// 动画变换时间，单位s</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0.7)'</span><span class="token punctuation">,</span>     <span class="token comment">// 提示背景颜色，默认为透明度为0.7的黑色</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span>       <span class="token comment">// 提示边框颜色</span>
        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>           <span class="token comment">// 提示边框圆角，单位px，默认为4</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 提示边框线宽，单位px，默认为0（无边框）</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>                <span class="token comment">// 提示内边距，单位px，默认各方向内边距为5，</span>
                                   <span class="token comment">// 接受数组分别设定上右下左边距，同css</span>
        <span class="token literal-property property">axisPointer</span> <span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
            <span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>         <span class="token comment">// 默认为直线，可选为：'line' | 'shadow'</span>
            <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>          <span class="token comment">// 直线指示器样式设置</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#48b'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>                       <span class="token comment">// 阴影指示器样式设置</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>                   <span class="token comment">// 阴影大小</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(150,150,150,0.3)'</span>  <span class="token comment">// 阴影颜色</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 区域缩放控制器</span>
    <span class="token literal-property property">dataZoom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">'horizontal'</span><span class="token punctuation">,</span>      <span class="token comment">// 布局方式，默认为水平布局，可选为：</span>
                                   <span class="token comment">// 'horizontal' ¦ 'vertical'</span>
        <span class="token comment">// x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：</span>
                                   <span class="token comment">// {number}（x坐标，单位px）</span>
        <span class="token comment">// y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：</span>
                                   <span class="token comment">// {number}（y坐标，单位px）</span>
        <span class="token comment">// width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配</span>
        <span class="token comment">// height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>       <span class="token comment">// 背景颜色</span>
        <span class="token literal-property property">dataBackgroundColor</span><span class="token operator">:</span> <span class="token string">'#eee'</span><span class="token punctuation">,</span>            <span class="token comment">// 数据背景颜色</span>
        <span class="token literal-property property">fillerColor</span><span class="token operator">:</span> <span class="token string">'rgba(144,197,237,0.2)'</span><span class="token punctuation">,</span>   <span class="token comment">// 填充颜色</span>
        <span class="token literal-property property">handleColor</span><span class="token operator">:</span> <span class="token string">'rgba(70,130,180,0.8)'</span>     <span class="token comment">// 手柄颜色</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 网格</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token literal-property property">x2</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y2</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token comment">// width: {totalWidth} - x - x2,</span>
        <span class="token comment">// height: {totalHeight} - y - y2,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 类目轴</span>
    <span class="token literal-property property">categoryAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>    <span class="token comment">// 位置</span>
        <span class="token literal-property property">nameLocation</span><span class="token operator">:</span> <span class="token string">'end'</span><span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持'start' | 'end'</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>     <span class="token comment">// 类目起始和结束两端空白策略</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#48b'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span>
            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">inside</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里 </span>
            <span class="token literal-property property">length</span> <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token comment">// formatter: null,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ccc'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span>
            <span class="token comment">// onGap: null,</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rgba(250,250,250,0.3)'</span><span class="token punctuation">,</span><span class="token string">'rgba(200,200,200,0.3)'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 数值型坐标轴默认参数</span>
    <span class="token literal-property property">valueAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>      <span class="token comment">// 位置</span>
        <span class="token literal-property property">nameLocation</span><span class="token operator">:</span> <span class="token string">'end'</span><span class="token punctuation">,</span>   <span class="token comment">// 坐标轴名字位置，支持'start' | 'end'</span>
        <span class="token literal-property property">nameTextStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// 坐标轴文字样式，默认取全局样式</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// 数值起始和结束两端空白策略</span>
        <span class="token literal-property property">splitNumber</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>        <span class="token comment">// 分割段数，默认为5</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#48b'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴小标记</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 属性show控制显示与否，默认不显示</span>
            <span class="token literal-property property">inside</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 控制小标记是否在grid里 </span>
            <span class="token literal-property property">length</span> <span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>         <span class="token comment">// 属性length控制线长</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token comment">// formatter: null,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle（详见lineStyle）控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ccc'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 分隔区域</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>       <span class="token comment">// 默认不显示，属性show控制显示与否</span>
            <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性areaStyle（详见areaStyle）控制区域样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rgba(250,250,250,0.3)'</span><span class="token punctuation">,</span><span class="token string">'rgba(200,200,200,0.3)'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">polar</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token string">'50%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token string">'75%'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">startAngle</span> <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitNumber</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 坐标轴线</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 默认显示，属性show控制显示与否</span>
            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 属性lineStyle控制线条样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 坐标轴文本标签，详见axis.axisLabel</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// 其余属性默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitArea</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">areaStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rgba(250,250,250,0.3)'</span><span class="token punctuation">,</span><span class="token string">'rgba(200,200,200,0.3)'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitLine</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#ccc'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 柱形图默认参数</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">barMinHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>          <span class="token comment">// 最小高度改为0</span>
        <span class="token comment">// barWidth: null,        // 默认自适应</span>
        <span class="token literal-property property">barGap</span><span class="token operator">:</span> <span class="token string">'30%'</span><span class="token punctuation">,</span>            <span class="token comment">// 柱间距离，默认为柱形宽度的30%，可设固定值</span>
        <span class="token literal-property property">barCategoryGap</span> <span class="token operator">:</span> <span class="token string">'20%'</span><span class="token punctuation">,</span>   <span class="token comment">// 类目间柱形距离，默认为类目间距的20%，可设固定值</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: '各异',</span>
                <span class="token literal-property property">barBorderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>       <span class="token comment">// 柱条边线</span>
                <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>           <span class="token comment">// 柱条边线圆角，单位px，默认为0</span>
                <span class="token literal-property property">barBorderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>            <span class="token comment">// 柱条边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: '各异',</span>
                <span class="token literal-property property">barBorderColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>   <span class="token comment">// 柱条边线</span>
                <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 柱条边线圆角，单位px，默认为0</span>
                <span class="token literal-property property">barBorderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>                 <span class="token comment">// 柱条边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 折线图默认参数</span>
    <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span> <span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span> <span class="token comment">//默认透明</span>
                    <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//smooth : false,</span>
        <span class="token comment">//symbol: null,         // 拐点图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 拐点图形大小</span>
        <span class="token comment">//symbolRotate : null,  // 拐点图形旋转控制</span>
        <span class="token literal-property property">showAllSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span>    <span class="token comment">// 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// K线图默认参数</span>
    <span class="token literal-property property">k</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// barWidth : null          // 默认自适应</span>
        <span class="token comment">// barMaxWidth : null       // 默认自适应 </span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>          <span class="token comment">// 阳线填充颜色</span>
                <span class="token literal-property property">color0</span><span class="token operator">:</span> <span class="token string">'#00aa11'</span><span class="token punctuation">,</span>      <span class="token comment">// 阴线填充颜色</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#ff3200'</span><span class="token punctuation">,</span>   <span class="token comment">// 阳线边框颜色</span>
                    <span class="token literal-property property">color0</span><span class="token operator">:</span> <span class="token string">'#00aa11'</span>   <span class="token comment">// 阴线边框颜色</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token comment">// color0: 各异</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 散点图默认参数</span>
    <span class="token literal-property property">scatter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//symbol: null,      // 图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>       <span class="token comment">// 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span>
        <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>        <span class="token comment">// 大规模散点图</span>
        <span class="token literal-property property">largeThreshold</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span><span class="token comment">// 大规模阀值，large为true且数据量&gt;largeThreshold才启用大规模模式</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: '各异'</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为</span>
                    <span class="token comment">//           'inside'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 雷达图默认参数</span>
    <span class="token literal-property property">radar</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//symbol: null,         // 拐点图形类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">2</span>           <span class="token comment">// 可计算特性参数，空数据拖拽提示图形大小</span>
        <span class="token comment">//symbolRotate : null,  // 图形旋转控制</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 饼图默认参数</span>
    <span class="token literal-property property">pie</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token string">'50%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 默认全局居中</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'75%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clockWise</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>          <span class="token comment">// 默认逆时针</span>
        <span class="token literal-property property">startAngle</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minAngle</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                <span class="token comment">// 最小角度改为0</span>
        <span class="token literal-property property">selectedOffset</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>         <span class="token comment">// 选中是扇区偏移量</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'outer'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// color: 各异,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 'outer'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// color: 各异,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mapType</span><span class="token operator">:</span> <span class="token string">'china'</span><span class="token punctuation">,</span>   <span class="token comment">// 各省的mapType暂时都用中文</span>
        <span class="token literal-property property">mapLocation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span> <span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span> <span class="token operator">:</span> <span class="token string">'center'</span>
            <span class="token comment">// width    // 自适应</span>
            <span class="token comment">// height   // 自适应</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showLegendSymbol</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// 显示图例颜色标识（系列标识的小圆点），存在legend时生效</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token comment">//rgba(135,206,250,0.8)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(139,69,19,1)'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>                 <span class="token comment">// 也是选中样式</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(255,215,0,0.8)'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(139,69,19,1)'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">force</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 数据map到圆的半径的最小值和最大值</span>
        <span class="token literal-property property">minRadius</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxRadius</span> <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">density</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attractiveness</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token comment">// 初始化的随机大小位置</span>
        <span class="token literal-property property">initSize</span> <span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token comment">// 向心力因子，越大向心力越大</span>
        <span class="token literal-property property">centripetal</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 冷却因子</span>
        <span class="token literal-property property">coolDown</span> <span class="token operator">:</span> <span class="token number">0.99</span><span class="token punctuation">,</span>
        <span class="token comment">// 分类里如果有样式会覆盖节点默认样式</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">nodeStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">brushType</span> <span class="token operator">:</span> <span class="token string">'both'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#f08c2e'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">strokeColor</span> <span class="token operator">:</span> <span class="token string">'#5182ab'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">linkStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">strokeColor</span> <span class="token operator">:</span> <span class="token string">'#5182ab'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">nodeStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">linkStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">chord</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">radius</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'65%'</span><span class="token punctuation">,</span> <span class="token string">'75%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">center</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token string">'50%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">padding</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sort</span> <span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span> <span class="token comment">// can be 'none', 'ascending', 'descending'</span>
        <span class="token literal-property property">sortSub</span> <span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span> <span class="token comment">// can be 'none', 'ascending', 'descending'</span>
        <span class="token literal-property property">startAngle</span> <span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clockWise</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showScale</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showScaleText</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#000'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">chordStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#666'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#000'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">chordStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">'#333'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">island</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">calculateStep</span><span class="token operator">:</span> <span class="token number">0.1</span>  <span class="token comment">// 滚轮可计算步长 0.1 = 10%</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">markPoint</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'pin'</span><span class="token punctuation">,</span>         <span class="token comment">// 标注类型</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>        <span class="token comment">// 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token comment">//symbolRotate : null, // 标注旋转控制</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异，</span>
                <span class="token comment">// borderColor: 各异,     // 标注边线颜色，优先于color </span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>            <span class="token comment">// 标注边线线宽，单位px，默认为1</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'inside'</span> <span class="token comment">// 可选为'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token comment">// position: 'inside'  // 'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">markLine</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'circle'</span><span class="token punctuation">,</span> <span class="token string">'arrow'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
        <span class="token comment">// 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 标线起始和结束的symbol旋转控制</span>
        <span class="token comment">//symbolRotate : null,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异,           // 标线主色，线色，symbol主色</span>
                <span class="token comment">// borderColor: 随color,     // 标线symbol边框颜色，优先于color </span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>          <span class="token comment">// 标线symbol边框线宽，单位px，默认为2</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token comment">// 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'</span>
                    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'inside'</span><span class="token punctuation">,</span>  
                    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>         <span class="token comment">// 默认使用全局文本样式，详见TEXTSTYLE</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#333'</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// color: 随borderColor, // 主色，线色，优先级高于borderColor和color</span>
                    <span class="token comment">// width: 随borderWidth, // 优先于borderWidth</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span> <span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0)'</span><span class="token punctuation">,</span> <span class="token comment">//默认透明</span>
                    <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// color: 各异</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                    <span class="token comment">// position: 'inside' // 'left'|'right'|'top'|'bottom'</span>
                    <span class="token comment">// textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lineStyle</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">'Arial, Verdana, sans-serif'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontFamily2</span><span class="token operator">:</span> <span class="token string">'微软雅黑'</span><span class="token punctuation">,</span>    <span class="token comment">// IE8- 字体模糊并且不支持不同字体混排，额外指定一份</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontStyle</span><span class="token operator">:</span> <span class="token string">'normal'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">'normal'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 默认标志图形类型列表</span>
    <span class="token literal-property property">symbolList</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'circle'</span><span class="token punctuation">,</span> <span class="token string">'rectangle'</span><span class="token punctuation">,</span> <span class="token string">'triangle'</span><span class="token punctuation">,</span> <span class="token string">'diamond'</span><span class="token punctuation">,</span>
      <span class="token string">'emptyCircle'</span><span class="token punctuation">,</span> <span class="token string">'emptyRectangle'</span><span class="token punctuation">,</span> <span class="token string">'emptyTriangle'</span><span class="token punctuation">,</span> <span class="token string">'emptyDiamond'</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loadingText</span> <span class="token operator">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">,</span>
    <span class="token comment">// 可计算特性配置，孤岛，提示颜色</span>
    <span class="token literal-property property">calculable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>              <span class="token comment">// 默认关闭可计算特性</span>
    <span class="token literal-property property">calculableColor</span><span class="token operator">:</span> <span class="token string">'rgba(255,165,0,0.6)'</span><span class="token punctuation">,</span>       <span class="token comment">// 拖拽提示边框颜色</span>
    <span class="token literal-property property">calculableHolderColor</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span> <span class="token comment">// 可计算占位提示颜色</span>
    <span class="token literal-property property">nameConnector</span><span class="token operator">:</span> <span class="token string">' &amp; '</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueConnector</span><span class="token operator">:</span> <span class="token string">' : '</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animationThreshold</span><span class="token operator">:</span> <span class="token number">2500</span><span class="token punctuation">,</span>       <span class="token comment">// 动画元素阀值，产生的图形原素超过2500不出动画</span>
    <span class="token literal-property property">addDataAnimation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">// 动态数据接口是否开启动画效果</span>
    <span class="token literal-property property">animationDuration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animationEasing</span><span class="token operator">:</span> <span class="token string">'ExponentialOut'</span>    <span class="token comment">//BounceOut</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.72,words:4115},y:"a",t:"5.echarts 各个配置项详细说明总结"},["/front_end/js_advanced/echarts/02","/front_end/js_advanced/echarts/02.md"]],["v-3738d647","/front_end/js_advanced/echarts/03.html",{e:`<h1> 6.柱状图</h1>
<ul>
<li>
<p>常见效果</p>
<ul>
<li>
<p>标记</p>
<ul>
<li>markPoint：标记点（最大值，最小值）</li>
<li>markLine：标记线（平均值）</li>
</ul>
</li>
<li>
<p>显示</p>
<ul>
<li>label：数值显示</li>
<li>barWidth：柱宽度</li>
<li>调换x轴y轴实现横向柱状图</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2> 6.1柱状图图表（两大步骤）</h2>
<ul>
<li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li>
<li>根据需求定制图表</li>
</ul>`,r:{minutes:7.33,words:2198},y:"a",t:"6.柱状图"},["/front_end/js_advanced/echarts/03","/front_end/js_advanced/echarts/03.md"]],["v-38edaee6","/front_end/js_advanced/echarts/04.html",{e:`<h1> 7.折线图</h1>
<h2> 7.1常见效果</h2>
<p>常见效果</p>
<ul>
<li>标记
<ul>
<li>markPoint：标记点（最大值，最小值）</li>
<li>markLine：标记线（平均值）</li>
<li>markArea：标注区间</li>
</ul>
</li>
<li>线条控制
<ul>
<li>smooth：平滑</li>
<li>lineStyle：线条样式</li>
</ul>
</li>
<li>填充风格
<ul>
<li>areaStyle：填充区域风格</li>
</ul>
</li>
<li>紧挨边缘
<ul>
<li>boundaryGap (配置在xAxis中)</li>
</ul>
</li>
<li>缩放：脱离0值比例
<ul>
<li>scale</li>
</ul>
</li>
<li>堆叠图（当有多个系列使图表显得杂乱无章时使用）
<ul>
<li>atack</li>
</ul>
</li>
<li>显示
<ul>
<li>label：数值显示</li>
</ul>
</li>
</ul>`,r:{minutes:7.69,words:2308},y:"a",t:"7.折线图"},["/front_end/js_advanced/echarts/04","/front_end/js_advanced/echarts/04.md"]],["v-3aa28785","/front_end/js_advanced/echarts/05.html",{e:`<h1> 8.饼图</h1>
<h2> 8.1常见效果</h2>
<ul>
<li>显示数值
<ul>
<li>label
<ul>
<li>show</li>
<li>formatter （回调函数）</li>
</ul>
</li>
</ul>
</li>
<li>圆环
<ul>
<li>radius：饼半径，设置两个半径即圆环radius:[‘30%’,‘80%’]</li>
</ul>
</li>
<li>南丁格尔图 （饼图的每一个区域的半径不一样，随着数值变化）
<ul>
<li>roseType:‘radius’</li>
</ul>
</li>
<li>选中效果
<ul>
<li>selectedMode：设置选中效果 single/multiple</li>
<li>selectedOffset：设置选中偏移量</li>
</ul>
</li>
</ul>`,r:{minutes:5.32,words:1595},y:"a",t:"8.饼图"},["/front_end/js_advanced/echarts/05","/front_end/js_advanced/echarts/05.md"]],["v-0055f2c3","/front_end/front_end_framework/vue2/01.html",{e:`<h1> 01 【Vue简介 初识Vue 模板语法和数据绑定】</h1>
<h2> 1.Vue简介</h2>
<h3> 1.1官网</h3>
<ul>
<li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">英文官网</a></li>
<li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">中文官网</a></li>
</ul>
<h3> 1.2介绍与描述</h3>
<ul>
<li>Vue 是一套用来动态构建用户界面的渐进式JavaScript框架
○构建用户界面：把数据通过某种办法变成用户界面
○渐进式：Vue可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应用可以引入各式各样的Vue插件</li>
<li>作者：尤雨溪</li>
</ul>`,r:{minutes:4.32,words:1296},y:"a",t:"01 【Vue简介 初识Vue 模板语法和数据绑定】"},["/front_end/front_end_framework/vue2/01","/front_end/front_end_framework/vue2/01.md"]],["v-020acb62","/front_end/front_end_framework/vue2/02.html",{e:`<h1> 02 【el和data的两种写法 MVVM模型】</h1>
<h2> 1.el和data的两种写法</h2>
<p><strong>el</strong>有2种写法</p>
<ul>
<li>
<p>创建Vue实例对象的时候配置el属性</p>
</li>
<li>
<p>先创建Vue实例，随后再通过vm.$mount('#root')指定el的值</p>
</li>
</ul>
<p><strong>data</strong>有2种写法</p>
<ul>
<li>对象式：data：</li>
<li>函数式：data() { return { } }</li>
<li>如何选择：目前哪种写法都可以，以后到组件时，data必须使用函数，否则会报错
一个重要的原则</li>
<li>由Vue管理的函数，一定不要写箭头函数，否则 this 就不再是Vue实例了</li>
</ul>`,r:{minutes:1.3,words:391},y:"a",t:"02 【el和data的两种写法 MVVM模型】"},["/front_end/front_end_framework/vue2/02","/front_end/front_end_framework/vue2/02.md"]],["v-03bfa401","/front_end/front_end_framework/vue2/03.html",{e:`<h1> 03 【数据代理 事件处理】</h1>
<h2> 1.数据代理</h2>
<blockquote>
<p>了解数据代理需要js的一些知识：Object.defineProperty()，属性标志，属性描述符，getter，setter。。。</p>
</blockquote>
<h3> 1.1数据代理</h3>
<p>建议学习文章地址：</p>
<p><a href="https://zh.javascript.info/property-descriptors" target="_blank" rel="noopener noreferrer">https://zh.javascript.info/property-descriptors</a></p>`,r:{minutes:5.96,words:1789},y:"a",t:"03 【数据代理 事件处理】"},["/front_end/front_end_framework/vue2/03","/front_end/front_end_framework/vue2/03.md"]],["v-05747ca0","/front_end/front_end_framework/vue2/04.html",{e:`<h1> 04 【计算属性 侦听属性】</h1>
<h2> 1.计算属性</h2>
<h3> 1.1插值语法实现</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>姓名案例_插值语法实现<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  姓：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstName<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
  名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lastName<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
  全名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ firstName }}-{{ lastName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">'张'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">'三'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.56,words:1668},y:"a",t:"04 【计算属性 侦听属性】"},["/front_end/front_end_framework/vue2/04","/front_end/front_end_framework/vue2/04.md"]],["v-0729553f","/front_end/front_end_framework/vue2/05.html",{e:`<h1> 05 【绑定样式 条件渲染 列表渲染】</h1>
<h2> 1.绑定样式</h2>
<h3> 1.1class样式</h3>
<p>写法：:class="xxx"    xxx可以是字符串、对象、数。</p>
<p>所以分为三种写法，字符串写法，数组写法，对象写法</p>
<h4> 字符串写法</h4>
<p>字符串写法适用于：类名不确定，要动态获取。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.normal</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mood<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeMood<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">mood</span><span class="token operator">:</span><span class="token string">'normal'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.99,words:4197},y:"a",t:"05 【绑定样式 条件渲染 列表渲染】"},["/front_end/front_end_framework/vue2/05","/front_end/front_end_framework/vue2/05.md"]],["v-08de2dde","/front_end/front_end_framework/vue2/06.html",{e:`<h1> 06 【Vue数据监视 v-model双向绑定】</h1>
<h2> 1.Vue数据监视</h2>
<h3> 1.1问题演示</h3>
<p>先来个案例引入一下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 准备好一个容器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>人员列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateMei<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>更新马冬梅的信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(p,index) of persons<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p.id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            {{p.name}}-{{p.age}}-{{p.sex}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">persons</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'001'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'马冬梅'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'女'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'002'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'周冬雨'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'女'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'003'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'周杰伦'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'004'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'温兆伦'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">updateMei</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// this.persons[0].name = '马老师' //奏效</span>
                <span class="token comment">// this.persons[0].age = 50 //奏效</span>
                <span class="token comment">// this.persons[0].sex = '男' //奏效</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>persons<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'001'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'马老师'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'男'</span><span class="token punctuation">}</span> <span class="token comment">//不奏效</span>
                <span class="token comment">// this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> 

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.57,words:1970},y:"a",t:"06 【Vue数据监视 v-model双向绑定】"},["/front_end/front_end_framework/vue2/06","/front_end/front_end_framework/vue2/06.md"]],["v-0a93067d","/front_end/front_end_framework/vue2/07.html",{e:`<h1> 07 【内置指令 自定义指令】</h1>
<h2> 1.内置指令</h2>
<p>之前学过的指令：</p>
<ul>
<li>v-bind	  单向绑定解析表达式，可简写为**😗*</li>
<li>v-model	双向数据绑定</li>
<li>v-for		   遍历数组 / 对象 / 字符串</li>
<li>v-on		    绑定事件监听，可简写为**@**</li>
<li>v-show	   条件渲染 (动态控制节点是否展示)</li>
<li>v-if		      条件渲染（动态控制节点是否存存在）</li>
<li>v-else-if	  条件渲染（动态控制节点是否存存在）</li>
<li>v-else	      条件渲染（动态控制节点是否存存在）</li>
</ul>`,r:{minutes:5.39,words:1616},y:"a",t:"07 【内置指令 自定义指令】"},["/front_end/front_end_framework/vue2/07","/front_end/front_end_framework/vue2/07.md"]],["v-0c47df1c","/front_end/front_end_framework/vue2/08.html",{e:`<h1> 08 【生命周期 组件】</h1>
<h2> 1.生命周期</h2>
<h3> 1.1引出生命周期</h3>
<p><strong>生命周期</strong></p>
<ol>
<li>又名<strong>生命周期回调函数</strong>、生命周期函数、生命周期钩子</li>
<li>是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数</li>
<li><strong>生命周期函数的名字不可更改</strong>，但函数的具体内容是程序员根据需求编写的</li>
<li>生命周期函数中的<code>this </code>指向是<code>vm</code>或<code>组件实例对象</code></li>
</ol>`,r:{minutes:12.18,words:3653},y:"a",t:"08 【生命周期 组件】"},["/front_end/front_end_framework/vue2/08","/front_end/front_end_framework/vue2/08.md"]],["v-0dfcb7bb","/front_end/front_end_framework/vue2/09.html",{e:`<h1> 09 【CLI 初始化脚手架 Vue零碎的一些知识】</h1>
<h2> 1.Vue CLI 初始化脚手架</h2>
<h3> 1.1具体步骤</h3>
<p>1如果下载缓慢请配置npm淘宝镜像npm config set registry <a href="http://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">http://registry.npm.taobao.org</a>
2全局安装 @vue/cli npm install -g @vue/cli
3切换到创建项目的目录，使用命令创建项目vue create xxx
4选择使用vue的版本
5启动项目npm run serve
6打包项目npm run build
7暂停项目 Ctrl+C</p>`,r:{minutes:9.27,words:2780},y:"a",t:"09 【CLI 初始化脚手架 Vue零碎的一些知识】"},["/front_end/front_end_framework/vue2/09","/front_end/front_end_framework/vue2/09.md"]],["v-33875565","/front_end/front_end_framework/vue2/10.html",{e:`<h1> 10 【组件编码流程 组件自定义事件 全局事件总线】</h1>
<h2> 1.组件编码流程</h2>
<ol>
<li>
<p>组件化编码流程：</p>
<p>​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。</p>
<p>​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：</p>
<p>​			1).一个组件在用：放在组件自身即可。</p>
<p>​			2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。</p>
<p>​	(3).实现交互：从绑定事件开始。</p>
</li>
<li>
<p>props适用于：</p>
<p>​	(1).父组件 ==&gt; 子组件 通信</p>
<p>​	(2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数）</p>
</li>
<li>
<p>使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！</p>
</li>
<li>
<p>props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。</p>
</li>
</ol>`,r:{minutes:5.6,words:1681},y:"a",t:"10 【组件编码流程 组件自定义事件 全局事件总线】"},["/front_end/front_end_framework/vue2/10","/front_end/front_end_framework/vue2/10.md"]],["v-353c2e04","/front_end/front_end_framework/vue2/11.html",{e:`<h1> 11 【组件通信】</h1>
<h2> 1.props</h2>
<p>适用于的场景:父子组件通信</p>
<p>注意事项:</p>
<p>如果父组件给子组件传递数据(函数):本质其实是子组件给父组件传递数据</p>
<p>如果父组件给子组件传递数据(非函数):本质就是父组件给子组件传递数据</p>
<p>书写方式:3种</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'todos'</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>Array<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span>Array<span class="token punctuation">,</span><span class="token keyword">default</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.14,words:2443},y:"a",t:"11 【组件通信】"},["/front_end/front_end_framework/vue2/11","/front_end/front_end_framework/vue2/11.md"]],["v-36f106a3","/front_end/front_end_framework/vue2/12.html",{e:`<h1> 12 【nextTick 过渡与动画】</h1>
<h2> 1.nextTick</h2>
<p><strong>这是一个生命周期钩子</strong></p>
<ol>
<li>语法：<code>this.$nextTick(回调函数)</code></li>
<li>作用：在下一次 DOM 更新结束后执行其指定的回调。</li>
<li>什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。</li>
</ol>
<blockquote>
<p>比如编辑按钮使文本变成表单且自动获取焦点</p>
<p>点击表单时会用一个布尔值配合v-show使表单显示，可是改变布尔值的时候，后面的focus方法会跟着执行，然后再渲染模板</p>
</blockquote>`,r:{minutes:2.71,words:814},y:"a",t:"12 【nextTick 过渡与动画】"},["/front_end/front_end_framework/vue2/12","/front_end/front_end_framework/vue2/12.md"]],["v-38a5df42","/front_end/front_end_framework/vue2/13.html",{e:"<h1> 13 【代理配置 插槽】</h1>\n<h2> 1.Vue脚手架配置代理</h2>\n<p>本案例需要下载<code>axios</code>库<code>npm install axios</code></p>\n<p>配置参考文档 <code>Vue-Cli devServer.proxy</code>\n<code>vue.config.js </code>是一个可选的配置文件，如果项目的 (和<code> package.json</code> 同级的) 根目录中存在这个文件，那么它会```被 @vue/cli-service<code>自动加载。你也可以使用</code>package.json<code> 中的</code> vue `字段，但是注意这种写法需要你严格遵照 JSON 的格式来写</p>",r:{minutes:7.13,words:2138},y:"a",t:"13 【代理配置 插槽】"},["/front_end/front_end_framework/vue2/13","/front_end/front_end_framework/vue2/13.md"]],["v-3a5ab7e1","/front_end/front_end_framework/vue2/14.html",{e:`<h1> 14 【Vuex】</h1>
<h2> 1.理解 Vuex</h2>
<h3> 1.1 Vuex 是什么</h3>
<p>概念：专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信</p>
<figure><img src="https://i0.hdslb.com/bfs/album/5a0df40952aa1665b2c1040df0d4d916dd2f6871.png" alt="image-20220703163518855" tabindex="0" loading="lazy"><figcaption>image-20220703163518855</figcaption></figure>`,r:{minutes:4.92,words:1476},y:"a",t:"14 【Vuex】"},["/front_end/front_end_framework/vue2/14","/front_end/front_end_framework/vue2/14.md"]],["v-3c0f9080","/front_end/front_end_framework/vue2/15.html",{e:`<h1> 15 【Vue-Router】</h1>
<h2> 1.相关理解</h2>
<h3> 1.1 vue-router 的理解</h3>
<p><code>vue</code>的一个插件库，专门用来实现SPA应用</p>
<h3> 1.2 对SPA应用的理解</h3>
<p>1.单页Web应用（single page web application，SPA）
2.整个应用只有一个完整的页面
3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新
4.数据需要通过ajax请求获取</p>
<h3> 1.3 路由的理解</h3>
<p>1.什么是路由?
一个路由就是一组映射关系（key - value）
<code>key</code>为<strong>路径</strong>，<code>value</code>可能是<code>function</code>或<code>component</code></p>`,r:{minutes:19.11,words:5733},y:"a",t:"15 【Vue-Router】"},["/front_end/front_end_framework/vue2/15","/front_end/front_end_framework/vue2/15.md"]],["v-3dc4691f","/front_end/front_end_framework/vue2/16.html",{e:`<h1> 16 【打包 图片懒加载】</h1>
<h2> 1.打包</h2>
<p><code>vue.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//打包时不生成map文件(用来进行错误提示的文件，很占用空间)</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭ESLINT校验工具</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.02,words:306},y:"a",t:"16 【打包 图片懒加载】"},["/front_end/front_end_framework/vue2/16","/front_end/front_end_framework/vue2/16.md"]],["v-01544aa3","/front_end/js_advanced/ajax/01.html",{e:`<h1> 01 【AJAX概述和基本使用】</h1>
<h2> 1.AJAX简介</h2>
<p>AJAX 全称为Asynchronous JavaScript And <a href="https://so.csdn.net/so/search?q=XML&amp;spm=1002101.01.70" target="_blank" rel="noopener noreferrer">XML</a>，就是异步的JS 和XML
通过AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：<strong>无刷新获取数据</strong>
AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式</p>`,r:{minutes:7.3,words:2190},y:"a",t:"01 【AJAX概述和基本使用】"},["/front_end/js_advanced/ajax/01","/front_end/js_advanced/ajax/01.md"]],["v-03092342","/front_end/js_advanced/ajax/02.html",{e:`<h1> 02 【Axios的概述和基本使用】</h1>
<h2> 1.Axios 是什么?</h2>
<ol>
<li>前端最流行的<code>Ajax</code>请求库</li>
<li>react/vue 官方都推荐使用 axios 发ajax 请求</li>
<li><a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">文档: https://github.com/axios/axios</a></li>
</ol>
<h2> 2.Axios 特点</h2>
<ol>
<li>基于 xhr + promise 的异步 ajax请求库</li>
<li>浏览器端/node 端都可以使用</li>
<li>支持请求／响应拦截器</li>
<li>支持请求取消</li>
<li>请求/响应数据转换</li>
<li>批量发送多个请求</li>
</ol>`,r:{minutes:8.17,words:2450},y:"a",t:"02 【Axios的概述和基本使用】"},["/front_end/js_advanced/ajax/02","/front_end/js_advanced/ajax/02.md"]],["v-04bdfbe1","/front_end/js_advanced/ajax/03.html",{e:`<h1> 03 【Fetch的概述和基本使用】</h1>
<h2> 1.XMLHttpRequest缺点</h2>
<p>浏览器提供了原生的AJAX实现类XMLHttpRequest，基于该类实例，我们可以实现在网页上发送AJAX请求到服务端。</p>
<p>但是XMLHttpRequest的设计并不完美，主要体现在以下几个方面：</p>
<p>HTTP请求，响应都被耦合在XMLHttpRequest实例上，结构不够简单明了
采用事件回调的方式获取HTTP响应，可能会产生回调地狱
如果HTTP响应数据过大，则会占用大量内存
最后一点就是，XMLHttpRequest实现AJAX的步骤太零碎了</p>`,r:{minutes:16.13,words:4839},y:"a",t:"03 【Fetch的概述和基本使用】"},["/front_end/js_advanced/ajax/03","/front_end/js_advanced/ajax/03.md"]],["v-0672d480","/front_end/js_advanced/ajax/04.html",{e:`<h1> 04 【跨域初识】</h1>
<h2> 1.同源策略</h2>
<ul>
<li>同源策略(Same-Origin Policy)最早由Netscape 公司提出，是浏览器的一种安全策略</li>
<li>同源： 协议、域名、端口号必须完全相同</li>
<li>跨域： 违背同源策略就是<strong>跨域</strong></li>
</ul>
<h2> 2.如何解决跨域</h2>
<h3> 2.1 JSONP</h3>
<blockquote>
<p><strong>jsonp只支持get请求不支持post请求</strong></p>
</blockquote>
<p><strong>1) JSONP 是什么</strong></p>`,r:{minutes:1.68,words:505},y:"a",t:"04 【跨域初识】"},["/front_end/js_advanced/ajax/04","/front_end/js_advanced/ajax/04.md"]],["v-3296bd31","/tool/efficiency/software/browser.html",{e:`<h1> 浏览器设置与扩展</h1>
<ul>
<li><a href="https://github.com/sxei/chrome-plugin-demo" target="_blank" rel="noopener noreferrer">Chrome 插件开发全攻略</a></li>
</ul>
<h2> 扩展商店</h2>
<ul>
<li>
<p><a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer">Chrome 网上应用店</a></p>
</li>
<li>
<p><a href="https://crxdl.com/" target="_blank" rel="noopener noreferrer">CrxDL - Chrome 浏览器扩展插件 CRX 下载网</a> 更新及时，可下载历史版本</p>
</li>
<li>
<p><a href="https://www.extfans.com/" target="_blank" rel="noopener noreferrer">Chrome 插件扩展下载网 (免翻墙)</a></p>
</li>
</ul>`,r:{minutes:3.82,words:1145},y:"a",t:"浏览器设置与扩展"},["/tool/efficiency/software/browser","/tool/efficiency/software/browser.md"]],["v-3a8682f9","/tool/efficiency/software/cross-platform.html",{e:`<h1> 多平台软件</h1>
<h2> 效率神器 uTools</h2>
<ol>
<li>强大的插件化</li>
<li>多功能输入框，支持文本、截图、图片、文件、文件夹</li>
<li>自动识别 / 粘贴</li>
<li>全局快捷键</li>
<li>云端数据同步</li>
<li>支持 Windows、Mac、Linux</li>
</ol>
<p><a href="https://u.tools/" target="_blank" rel="noopener noreferrer">软件官网</a></p>
<h2> 下载神器 Motrix</h2>
<ol>
<li>界面清爽简洁</li>
<li>支持 BT 和磁力链任务</li>
<li>支持选择性下载 BT 部分文件</li>
<li>基于 Aria2</li>
<li>自动更新 Tracker 服务器列表</li>
</ol>`,r:{minutes:1.58,words:473},y:"a",t:"多平台软件"},["/tool/efficiency/software/cross-platform","/tool/efficiency/software/cross-platform.md"]],["v-71b3b66f","/tool/efficiency/software/vscode.html",{e:`<h1> Visual Studio Code 配置</h1>
<h2> 扩展插件推荐</h2>
<h3> 主题相关</h3>
<ul>
<li>
<p><code>One Dark Pro</code></p>
<ul>
<li>黑色主题</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Shades of Purple</code></p>
<ul>
<li>紫色主题（来自彤姐的推荐：没有什么比骚更重要）</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Dracula Official</code></p>
<ul>
<li>黑色主题</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Bluloco Dark</code></p>
<ul>
<li>黑色主题</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>Material Icon Theme</code></p>
<ul>
<li>文件图标美化</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
<li>
<p><code>background</code></p>
<ul>
<li>自定义背景</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=shalldie.background" target="_blank" rel="noopener noreferrer">插件地址</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.74,words:2023},y:"a",t:"Visual Studio Code 配置"},["/tool/efficiency/software/vscode","/tool/efficiency/software/vscode.md"]],["v-10d9f538","/tool/efficiency/software/webstorm.html",{e:`<h1> WebStorm 配置</h1>
<h2> 获取许可证</h2>
<p><a href="https://www.jetbrains.com/shop/eform/opensource" target="_blank" rel="noopener noreferrer">使用开源项目免费申请 JetBrains 全家桶开源许可证</a></p>
<h2> 汉化</h2>
<ul>
<li>方案一
<ul>
<li>进入 <code>文件 - 设置 - Plugins - Marketplace</code></li>
<li>搜索 <code>Chinese ​(Simplified)​ Language Pack EAP</code> 下载安装</li>
</ul>
</li>
<li>方案二
<ul>
<li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noopener noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li>
<li>点击 <code>Install to IDE</code> 按钮再选择对应编辑器</li>
</ul>
</li>
<li>方案三
<ul>
<li>查看本地 <code>WebStorm</code> 版本
<ul>
<li>进入 <code>帮助 - 关于</code></li>
<li>找到 <code>Build #WS-</code> 后面的数字</li>
</ul>
</li>
<li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noopener noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li>
<li>点击 <code>Versions</code> 选择对应编辑器再搜索对应版本下载（当找不到一样的版本时，可以看列表的第二栏版本范围，找包含你编辑器的版本下载就行）</li>
<li>通过磁盘安装刚下载的文件</li>
</ul>
</li>
</ul>`,r:{minutes:1.54,words:461},y:"a",t:"WebStorm 配置"},["/tool/efficiency/software/webstorm","/tool/efficiency/software/webstorm.md"]],["v-85bcb294","/tool/efficiency/software/windows.html",{e:`<h1> Windows 平台</h1>
<h2> 终端神器 Cmder</h2>
<ol>
<li>便携，解压即可用</li>
<li>支持子窗口</li>
<li>自带 <code>git</code>、<code>ls</code> 等命令</li>
<li>自定义配置项</li>
</ol>
<p><a href="https://github.com/cmderdev/cmder" target="_blank" rel="noopener noreferrer">Github</a>
<a href="https://cmder.net/" target="_blank" rel="noopener noreferrer">软件官网</a></p>`,r:{minutes:4.92,words:1476},y:"a",t:"Windows 平台"},["/tool/efficiency/software/windows","/tool/efficiency/software/windows.md"]],["v-266cbe57","/front_end/js_advanced/es6/01.html",{e:`<h1> 01 【ES6 介绍】</h1>
<p>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p>
<h2> 1.ECMAScript 和 JavaScript 的关系</h2>
<p>一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？</p>
<p>要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。</p>`,r:{minutes:3.77,words:1131},y:"a",t:"01 【ES6 介绍】"},["/front_end/js_advanced/es6/01","/front_end/js_advanced/es6/01.md"]],["v-282196f6","/front_end/js_advanced/es6/02.html",{e:`<h1> 02 【let和const】</h1>
<h2> 1.let 命令</h2>
<h3> 1.1 基本用法</h3>
<p>ES6 新增了<code>let</code>命令，用来声明变量。它的用法类似于<code>var</code>，但是所声明的变量，只在<code>let</code>命令所在的代码块内有效。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

a <span class="token comment">// ReferenceError: a is not defined.</span>
b <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.89,words:4168},y:"a",t:"02 【let和const】"},["/front_end/js_advanced/es6/02","/front_end/js_advanced/es6/02.md"]],["v-29d66f95","/front_end/js_advanced/es6/03.html",{e:`<h1> 03【解构赋值】</h1>
<h2> 1.数组的解构赋值</h2>
<h3> 1.1 原理</h3>
<p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</p>
<p>以前，为变量赋值，只能直接指定值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.21,words:2464},y:"a",t:"03【解构赋值】"},["/front_end/js_advanced/es6/03","/front_end/js_advanced/es6/03.md"]],["v-2b8b4834","/front_end/js_advanced/es6/04.html",{e:`<h1> 04 【函数的扩展】</h1>
<h2> 1.函数参数的默认值</h2>
<h3> 1.1 认识函数参数的默认值</h3>
<p>调用函数的时候传参了，就用传递的参数；如果没传参，就用默认值</p>
<h3> 1.2 函数参数默认值的基本用法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 之前的默认值实现方式</span>
<span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:16.72,words:5015},y:"a",t:"04 【函数的扩展】"},["/front_end/js_advanced/es6/04","/front_end/js_advanced/es6/04.md"]],["v-2d4020d3","/front_end/js_advanced/es6/05.html",{e:`<h1> 05【数组的扩展】</h1>
<h2> 1.扩展运算符</h2>
<h3> 1.1 含义</h3>
<p>扩展运算符（spread）是三个点（<code>...</code>）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3 4 5</span>

<span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token comment">// [&lt;div&gt;, &lt;div&gt;, &lt;div&gt;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:25.44,words:7633},y:"a",t:"05【数组的扩展】"},["/front_end/js_advanced/es6/05","/front_end/js_advanced/es6/05.md"]],["v-2ef4f972","/front_end/js_advanced/es6/06.html",{e:`<h1> 06【对象的扩展】</h1>
<h2> 1.属性的简洁表示法</h2>
<p>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
baz <span class="token comment">// {foo: "bar"}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.49,words:2548},y:"a",t:"06【对象的扩展】"},["/front_end/js_advanced/es6/06","/front_end/js_advanced/es6/06.md"]],["v-30a9d211","/front_end/js_advanced/es6/07.html",{e:`<h1> 07【字符串的扩展】</h1>
<h2> 1.模板字符串</h2>
<h3> 1.1 认识模板字符串</h3>
<ul>
<li>普通字符串：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">'字符串'</span>
<span class="token string">"字符串"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.1,words:1531},y:"a",t:"07【字符串的扩展】"},["/front_end/js_advanced/es6/07","/front_end/js_advanced/es6/07.md"]],["v-325eaab0","/front_end/js_advanced/es6/08.html",{e:`<h1> 08【运算符的扩展】</h1>
<h2> 1.指数运算符</h2>
<p>ES2016 新增了一个指数运算符（<code>**</code>）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token comment">// 4</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.55,words:1965},y:"a",t:"08【运算符的扩展】"},["/front_end/js_advanced/es6/08","/front_end/js_advanced/es6/08.md"]],["v-3413834f","/front_end/js_advanced/es6/09.html",{e:`<h1> 09【Set 和 Map 数据结构】</h1>
<h2> 1.什么是 Set？</h2>
<p>Set 是一系列无序、没有重复值的数据集合。</p>
<blockquote>
<p>数组是一系列有序（下标索引）的数据集合。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set 中不能有重复的成员</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// Set(2) { 1, 2 }</span>

<span class="token comment">// Set 没有下标去标识每一个值，所以 Set 是无序的，也不能像数组那样通过下标去访问 Set 的成员。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.33,words:1899},y:"a",t:"09【Set 和 Map 数据结构】"},["/front_end/js_advanced/es6/09","/front_end/js_advanced/es6/09.md"]],["v-599e20f9","/front_end/js_advanced/es6/10.html",{e:`<h1> 10【Promise对象】</h1>
<h2> 1.同步异步的介绍</h2>
<p>Promise 是异步操作的一种解决方案。</p>
<blockquote>
<h4> 异步的概念</h4>
<p>异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。</p>
<p>在我们学习的传统单线程编程中，程序的运行是同步的（同步不意味着所有步骤同时运行，而是指步骤在一个控制流序列中按顺序执行）。而异步的概念则是不保证同步的概念，也就是说，一个异步过程的执行将不再与原有的序列有顺序关系。</p>
<p>简单来理解就是：同步按你的代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高。</p>
<p>以上是关于异步的概念的解释，接下来我们通俗地解释一下异步：异步就是从主线程发射一个子线程来完成任务。</p>
<figure><img src="https://i0.hdslb.com/bfs/album/d1cc4d26fc4056acf3f704bddb4bfecdf3b3ddd0.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4> 什么时候用异步编程</h4>
<p>在前端编程中（甚至后端有时也是这样），我们在处理一些简短、快速的操作时，例如计算 1 + 1 的结果，往往在主线程中就可以完成。主线程作为一个线程，不能够同时接受多方面的请求。所以，当一个事件没有结束时，界面将无法处理其他请求。</p>
<p>现在有一个按钮，如果我们设置它的 onclick 事件为一个死循环，那么当这个按钮按下，整个网页将失去响应。</p>
<p>为了避免这种情况的发生，我们常常用子线程来完成一些可能消耗时间足够长以至于被用户察觉的事情（或者是一些需要等待某个时机在背后自动执行的任务，比如：事件监听），比如读取一个大文件或者发出一个网络请求。因为子线程独立于主线程，所以即使出现阻塞也不会影响主线程的运行。但是子线程有一个局限：一旦发射了以后就会与主线程失去同步，我们无法确定它的结束，如果结束之后需要处理一些事情，比如处理来自服务器的信息，我们是无法将它合并到主线程中去的。</p>
<p>JavaScript 是单线程语言，为了解决多线程问题，JavaScript 中的异步操作函数往往通过<strong>回调函数</strong>来实现异步任务的结果处理。</p>
<h4> 回调函数（callback function）</h4>
<blockquote>
<p>在 JavaScript 中，回调函数具体的定义为：函数A 作为参数（函数引用）传递到另一个 函数B 中，并且这个 函数B 执行函数A。我们就说 函数A 叫做回调函数。如果没有名称（函数表达式），就叫做匿名回调函数。</p>
</blockquote>
<p>回调函数就是一个作为参数的函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。</p>
<blockquote>
<p>注意：回调和异步不是同一个东西，许多人误认为 js 中每个回调函数都是异步处理的，实际上并不是，可以同步回调，也可以异步回调。只不过说：<strong>回调可以是同步也可以是异步，异步必须放在回调里执行，也就是对于一个异步任务只有回调函数里的才是异步的部分。</strong></p>
<p>回调同步的例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'func'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回调异步的例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'one'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'two'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3> 实例</h3>
<p><code>setInterval()</code> 和 <code>setTimeout()</code> 是两个异步语句。</p>
<p>异步（asynchronous）：不会阻塞 CPU 继续执行其他语句，当异步完成时（包含回调函数的主函数的正常语句完成时），会执行 “回调函数”（callback）。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>菜鸟教程(runoob.com)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>回调函数等待 3 秒后执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>异步方式，不影响后续执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>print<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/365c74378381a0e69761dfe542d2de267c1b3828.gif" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure>
<p>这段程序中的 setTimeout 就是一个消耗时间较长（3 秒）的过程，它的第一个参数是个回调函数，第二个参数是毫秒数，这个函数执行之后会产生一个子线程，子线程会等待 3 秒，然后执行回调函数 "print"，在命令行输出 "RUNOOB!"。</p>
<p>当然，JavaScript 语法十分友好，我们不必单独定义一个函数 print ，我们常常将上面的程序写成：</p>
<h3> 实例</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>菜鸟教程(runoob.com)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>回调函数等待 3 秒后执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>异步方式，不影响后续执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* ES6 箭头函数写法
  setTimeout(() =&gt; {
      document.getElementById("demo").innerHTML = "RUNOOB!";
  }, 3000);
  */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**既然 setTimeout 会在子线程中等待 3 秒，在 setTimeout 函数执行之后主线程并没有停止，所以：</p>
<h3> 实例</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>菜鸟教程(runoob.com)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>回调函数等待 3 秒后执行。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB-1!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"RUNOOB-2!"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段程序的执行结果是：</p>
<figure><img src="https://i0.hdslb.com/bfs/album/ad3300e4fccf3861082bcb9633584d5aad190b98.gif" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure>
</blockquote>`,r:{minutes:25.79,words:7736},y:"a",t:"10【Promise对象】"},["/front_end/js_advanced/es6/10","/front_end/js_advanced/es6/10.md"]],["v-5b52f998","/front_end/js_advanced/es6/11.html",{e:`<h1> 11【async 函数】</h1>
<h2> 1.基本用法</h2>
<p><code>async</code>函数返回一个 Promise 对象，可以使用<code>then</code>方法添加回调函数。当函数执行的时候，一旦遇到<code>await</code>就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。</p>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStockPriceByName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> symbol <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStockSymbol</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stockPrice <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStockPrice</span><span class="token punctuation">(</span>symbol<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> stockPrice<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getStockPriceByName</span><span class="token punctuation">(</span><span class="token string">'goog'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.36,words:2509},y:"a",t:"11【async 函数】"},["/front_end/js_advanced/es6/11","/front_end/js_advanced/es6/11.md"]],["v-5d07d237","/front_end/js_advanced/es6/12.html",{e:`<h1> 12【es6模块化】</h1>
<h2> 1.初识Module</h2>
<p>（1）什么是模块</p>
<p>模块：一个一个的局部作用域的代码块。</p>
<p>（2）什么是模块系统</p>
<p>模块系统：系统的解决了模块化一系列问题。</p>
<ol>
<li>模块化的写法（之前我们用立即执行函数模拟模块化，ES6 则实现了针对模块化的语法）</li>
<li>消除全局变量（模块中的变量都是局部的，不同模块之间不会相互干扰，可以通过特定语法暴露指定内容）</li>
<li>管理加载顺序（之前我们将一个总的 JavaScript 程序分几个文件写，但在最终合并调用时，js 的引入需要满足前后依赖关系。比如：被引用的 js 文件就一定要在引用它的 js 文件之前加载）</li>
</ol>`,r:{minutes:8.94,words:2682},y:"a",t:"12【es6模块化】"},["/front_end/js_advanced/es6/12","/front_end/js_advanced/es6/12.md"]],["v-5ebcaad6","/front_end/js_advanced/es6/13.html",{e:`<h1> 13【Class的语法】</h1>
<h2> 1.类的由来</h2>
<p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Point</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:19.11,words:5732},y:"a",t:"13【Class的语法】"},["/front_end/js_advanced/es6/13","/front_end/js_advanced/es6/13.md"]],["v-60718375","/front_end/js_advanced/es6/14.html",{e:`<h1> 14 【Class extends】</h1>
<h2> 1.简介</h2>
<p>Class 可以通过<code>extends</code>关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.2,words:3361},y:"a",t:"14 【Class extends】"},["/front_end/js_advanced/es6/14","/front_end/js_advanced/es6/14.md"]],["v-05e216f0","/front_end/js_advanced/typescript/01.html",{e:`<h1> 1.简介</h1>
<h2> 1.1 TypeScript简介</h2>
<ul>
<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2F" target="_blank" rel="noopener noreferrer">TS 官方文档</a></li>
</ul>
<ol>
<li><strong><code>TypeScript</code> 简称：TS，是 JavaScript 的超集</strong>，简单来说就是：JS 有的 TS 都有。</li>
<li>它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。</li>
<li>TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。</li>
<li>TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。</li>
<li>相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。</li>
</ol>`,r:{minutes:5.34,words:1602},y:"a",t:"1.简介"},["/front_end/js_advanced/typescript/01","/front_end/js_advanced/typescript/01.md"]],["v-027865b2","/front_end/js_advanced/typescript/02.html",{e:`<h1> 3.TypeScript常用类型</h1>
<h2> 3.1 概述</h2>
<p>TypeScript 是 JS 的超集，TS 提供了 JS 的所有功能，并且额外的增加了：<strong>类型系统</strong></p>
<ul>
<li>所有的 JS 代码都是 TS 代码</li>
<li><strong>JS 有类型</strong>（比如，number/string 等），但是 <strong>JS 不会检查变量的类型是否发生变化</strong>，而 TS 会检查</li>
</ul>
<p>TypeScript 类型系统的主要优势：<strong>可以显示标记出代码中的意外行为，从而降低了发生错误的可能性</strong></p>`,r:{minutes:21.13,words:6340},y:"a",t:"3.TypeScript常用类型"},["/front_end/js_advanced/typescript/02","/front_end/js_advanced/typescript/02.md"]],["v-0078a5c6","/front_end/js_advanced/typescript/03.html",{e:`<h2> 3.11 字面量类型</h2>
<p>在 TypeScript 中，字面量不仅可以表示值，还可以表示类型，即所谓的字面量类型。</p>
<h3> 3.11.1 基本使用</h3>
<ul>
<li>思考以下代码，两个变量的类型分别是什么?</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">'Hello TS'</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">'Hello TS'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:17.41,words:5222},y:"a",t:""},["/front_end/js_advanced/typescript/03","/front_end/js_advanced/typescript/03.md"]],["v-022d7e65","/front_end/js_advanced/typescript/04.html",{e:`<h1> 4.编译选项</h1>
<blockquote>
<p>tsconfig.json 是 TypeScript 项目的配置文件。如果一个目录下存在一个 tsconfig.json 文件，那么往往意味着这个目录就是 TypeScript 项目的根目录。</p>
<p>tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。</p>
<p><strong>tsconfig.json 重要字段</strong></p>
<ul>
<li>files - 设置要编译的文件的名称；</li>
<li>include - 设置需要进行编译的文件，支持路径模式匹配；</li>
<li>exclude - 设置无需进行编译的文件，支持路径模式匹配；</li>
<li>compilerOptions - 设置与编译流程相关的选项。</li>
</ul>
</blockquote>`,r:{minutes:10.42,words:3127},y:"a",t:"4.编译选项"},["/front_end/js_advanced/typescript/04","/front_end/js_advanced/typescript/04.md"]],["v-03e25704","/front_end/js_advanced/typescript/05.html",{e:`<h1> 6.接口（ interface）</h1>
<p>在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</p>
<h2> 6.1 什么是接口</h2>
<p>在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。</p>
<p>TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象]以外，也常用于对「对象的形状（Shape）」进行描述。</p>
<h2> 6.2 基本使用</h2>
<p>当一个对象类型被多次使用时，一般会使用接口（<code>interface</code>）来描述对象的类型，达到复用的目的</p>`,r:{minutes:6.59,words:1978},y:"a",t:"6.接口（ interface）"},["/front_end/js_advanced/typescript/05","/front_end/js_advanced/typescript/05.md"]],["v-05972fa3","/front_end/js_advanced/typescript/06.html",{e:`<h1> 8.泛型</h1>
<h2> 8.1 基本介绍</h2>
<p>定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。</p>
<ul>
<li>
<p>举个例子：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">identity</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>上例中，identity 函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的，首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型</p>
</li>
<li>
<p>使用泛型：
为了解决上面的这些问题，我们<strong>使用泛型对上面的代码进行重构</strong>。和我们的定义不同，这里用了一个 类型 T，这个 <strong>T 是一个抽象类型，只有在调用的时候才确定它的值</strong>。</p>
</li>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<ol>
<li>语法：在函数名称的后面添加 <code>&lt;&gt;</code>(尖括号)，<strong>尖括号中添加类型变量</strong>，比如此处的 Type</li>
<li><strong>类型变量 Type，是一种特殊类型的变量，它处理类型而不是值</strong></li>
<li><strong>该类型变量相当于一个类型容器</strong>，能够捕获用户提供的类型(具体是什么类型由用户调用该函数时指定)</li>
<li>因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型</li>
<li>类型变量 Type，可以是任意合法的变量名称</li>
</ol>
</li>
<li>
<p>除了 <code>T</code> 之外，以下是常见泛型变量代表的意思：</p>
<ul>
<li>K（Key）：表示对象中的键类型；</li>
<li>V（Value）：表示对象中的值类型；</li>
<li>E（Element）：表示元素类型。
<img src="https://i0.hdslb.com/bfs/album/f0875f26e68c8533ab32d23a82bbae11e2232b50.png" alt="image-20220807133943971" loading="lazy"></li>
</ul>
</li>
<li>
<p>那么如何使用上边的函数呢？</p>
<ul>
<li>
<p>方式一（直接使用）：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<ol>
<li>在调用泛型函数时，<strong>可以省略 <code>&lt;类型&gt;</code> 来简化泛型函数的调用</strong></li>
<li>此时，TS 内部会采用一种叫做<strong>类型参数推断</strong>的机制，来根据传入的实参自动推断出类型变量 Type 的类型</li>
<li>比如，传入实参 10，TS 会自动推断出变量 num 的类型 number，并作为 Type 的类型</li>
</ol>
<blockquote>
<ul>
<li>推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读</li>
<li>说明：<strong>当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数</strong></li>
</ul>
</blockquote>
</li>
</ul>
</li>
<li>
<p>方式二（指定类型）：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<ol>
<li>
<p>语法：在函数名称的后面添加 <code>&lt;&gt;</code>(尖括号)，<strong>尖括号中指定具体的类型</strong>，比如，此处的 number</p>
</li>
<li>
<p>当传入类型 number 后，这个类型就会被函数声明时指定的类型变量 Type 捕获到</p>
</li>
<li>
<p>此时，Type 的类型就是 number，所以，函数 id 参数和返回值的类型也都是 number</p>
<blockquote>
<ul>
<li>
<p>同样，如果传入类型 string，函数 id 参数和返回值的类型就都是 string</p>
</li>
<li>
<p>这样，通过泛型就做到了让 id 函数与多种不同的类型一起工作，<strong>实现了复用的同时保证了类型安全</strong></p>
</li>
</ul>
</blockquote>
</li>
</ol>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>其实并不是只能定义一个类型变量，我们可以引入希望定义的任何数量的类型变量。比如我们引入一个新的类型变量 <code>U</code>，用于扩展我们定义的 <code>identity</code> 函数：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span>Number<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token string">"Semlinker"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/1d646c21096038011017b93333d8fecd97639e4f.png" alt="image-20220807134038387" tabindex="0" loading="lazy"><figcaption>image-20220807134038387</figcaption></figure>
</li>
<li>
<p>使用泛型时，完全可以将泛型当成是一个普通的类去使用</p>
</li>
</ul>
</li>
<li>
<p>类中同样可以使用泛型：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>prop<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prop <span class="token operator">=</span> prop<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:5.47,words:1640},y:"a",t:"8.泛型"},["/front_end/js_advanced/typescript/06","/front_end/js_advanced/typescript/06.md"]],["v-671ae07c","/front_end/js_advanced/webpack/01.html",{e:`<h1> 01 【前言 基础使用 核心概念】</h1>
<h2> 1.前言</h2>
<h3> 1.1 概述</h3>
<blockquote>
<p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.webpackjs.com%2Fconcepts%2F" target="_blank" rel="noopener noreferrer">官网</a>的描述：</p>
<p>本质上，<strong>webpack</strong>是一个现代 JavaScript 应用程序的<strong>静态模块打包器</strong>(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个<strong>依赖关系图</strong>(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个<strong>静态资源(bundle)</strong>。</p>
</blockquote>`,r:{minutes:20.54,words:6163},y:"a",t:"01 【前言 基础使用 核心概念】"},["/front_end/js_advanced/webpack/01","/front_end/js_advanced/webpack/01.md"]],["v-68cfb91b","/front_end/js_advanced/webpack/02.html",{e:`<h1> 02 【开发服务器 资源模块】</h1>
<h2> 1.开发服务器&amp;自动化</h2>
<p><a href="https://github.com/webpack/webpack-dev-server" target="_blank" rel="noopener noreferrer">webpack-dev-server</a> 可用于快速开发应用程序。请查阅 <a href="https://webpack.docschina.org/guides/development/" target="_blank" rel="noopener noreferrer">开发指南</a> 开始使用。</p>`,r:{minutes:8.5,words:2549},y:"a",t:"02 【开发服务器 资源模块】"},["/front_end/js_advanced/webpack/02","/front_end/js_advanced/webpack/02.md"]],["v-6a8491ba","/front_end/js_advanced/webpack/03.html",{e:`<h1> 03 【资源处理】</h1>
<p>在上一章，我们讲解了四种资源模块引入外部资源。除了资源模块，我们还可以通过 loader引入其他类型的文件。</p>
<p><strong>什么是loader</strong></p>
<p><code>webpack</code> 只能理解 <code>JavaScript</code> 和<code>JSON</code>文件，这是 webpack 开箱可用的自带能力。 loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供 应用程序使用，以及被添加到依赖图中。</p>
<p>在 webpack 的配置中，<code>loader</code> 有两个属性：</p>`,r:{minutes:28.59,words:8577},y:"a",t:"03 【资源处理】"},["/front_end/js_advanced/webpack/03","/front_end/js_advanced/webpack/03.md"]],["v-6c396a59","/front_end/js_advanced/webpack/04.html",{e:`<h1> 04 【优化】</h1>
<h2> 1.Public Path(公共路径)</h2>
<p>webpack 提供一个非常有用的配置，该配置能帮助你为项目中的所有资源指定一个基础路径。它被称为<code>公共路径(publicPath)</code>。</p>
<p>在开发模式中，我们通常有一个 <code>assets/</code> 文件夹，它往往存放在和首页一个级别的目录下。这样是挺方便；但是如果在生产环境下，你想把这些静态文件统一使用CDN加载，那该怎么办？</p>
<p><code>publicPath </code>配置公共路径，所有文件的引用将自动添加公共路径的绝对地址。</p>`,r:{minutes:29.96,words:8989},y:"a",t:"04 【优化】"},["/front_end/js_advanced/webpack/04","/front_end/js_advanced/webpack/04.md"]],["v-1ff273ed","/front_end/other/electron/01.html",{e:`<h1> 01 【创建一个electron应用】</h1>
<h2> 1.Electron 初探</h2>
<h3> 1.1 常见的桌面GUI工具介绍</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>语音</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>QT</td>
<td>C++</td>
<td>跨平台、性能好、生态好</td>
<td>依赖多，程序包大</td>
</tr>
<tr>
<td>PyQT</td>
<td>Python</td>
<td>底层集成度高、易上手</td>
<td>授权问题</td>
</tr>
<tr>
<td>WPF</td>
<td>C#</td>
<td>类库丰富、扩展灵活</td>
<td>只支持Windows，程序包大</td>
</tr>
<tr>
<td>WinForm</td>
<td>C#</td>
<td>性能好，组件丰富，易上手</td>
<td>只支持Windows，UI差</td>
</tr>
<tr>
<td>Swing</td>
<td>Java</td>
<td>基于AWT，组件丰富</td>
<td>性能差，UI一般</td>
</tr>
<tr>
<td>NW.js</td>
<td>JS</td>
<td>跨平台性好，界面美观</td>
<td>底层交互差、性能差，包大</td>
</tr>
<tr>
<td>Electron</td>
<td>JS</td>
<td>相比NW发展更好</td>
<td>底层交互差、性能差，包大</td>
</tr>
<tr>
<td>CEF</td>
<td>C++</td>
<td>性能好，灵活集成，UI美观</td>
<td>占用资源多，包大</td>
</tr>
</tbody>
</table>`,r:{minutes:10.9,words:3271},y:"a",t:"01 【创建一个electron应用】"},["/front_end/other/electron/01","/front_end/other/electron/01.md"]],["v-21a74c8c","/front_end/other/electron/02.html",{e:`<h1> 02 【使用预加载脚本】</h1>
<h2> 1.什么是预加载脚本？</h2>
<p>Electron 的主进程是一个拥有着完全操作系统访问权限的 Node.js 环境。 除了 <a href="https://www.electronjs.org/zh/docs/latest/api/app" target="_blank" rel="noopener noreferrer">Electron 模组</a> 之外，你也可以使用 <a href="https://nodejs.org/dist/latest/docs/api/" target="_blank" rel="noopener noreferrer">Node.js 内置模块</a> 和所有通过 npm 安装的软件包。 另一方面，出于安全原因，渲染进程默认跑在网页页面上，而并非 Node.js里。</p>`,r:{minutes:5.2,words:1559},y:"a",t:"02 【使用预加载脚本】"},["/front_end/other/electron/02","/front_end/other/electron/02.md"]],["v-235c252b","/front_end/other/electron/03.html",{e:`<h1> 03 【electron的Remote模块】</h1>
<p>在渲染进程里（比如<code>index.html</code>里面加载了一些<strong>js文件</strong>，那里面的<strong>js</strong>如果要使用到 <strong>BrowserWindow</strong> 这些属性的话就必须使用 <code>remote</code>）</p>
<p>使用 <code>remote</code> 模块, 你可以调用 <code>main</code> <strong>进程对象的方法</strong></p>
<h2> 1.electron14.0之前版本使用</h2>`,r:{minutes:1.82,words:547},y:"a",t:"03 【electron的Remote模块】"},["/front_end/other/electron/03","/front_end/other/electron/03.md"]],["v-2510fdca","/front_end/other/electron/04.html",{e:`<h1> 04 【electron的一些主进程Api】</h1>
<h2> 1.App</h2>
<h3> 1.1 事件</h3>
<h4> 1.1.1 before-quit</h4>
<blockquote>
<p>在应用程序开始关闭窗口之前触发。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'before-quit'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App is quiting'</span><span class="token punctuation">)</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.71,words:2612},y:"a",t:"04 【electron的一些主进程Api】"},["/front_end/other/electron/04","/front_end/other/electron/04.md"]],["v-26c5d669","/front_end/other/electron/05.html",{e:`<h1> 05 【electron的一些渲染进程Api】</h1>
<h2> 1.clipboard</h2>
<blockquote>
<p>在系统剪贴板上进行复制和粘贴操作。</p>
<p>在主进程（main process）和渲染进程（renderer process）上均可用。</p>
</blockquote>
<h3> 1.1 <code>readText()</code></h3>
<p>返回字符串 - 剪贴板中的内容为纯文本。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> clipboard <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span>

clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span><span class="token string">'千锋教育HTML5大前端!'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> text <span class="token operator">=</span> clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token comment">// hello i am a bit of text!'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.31,words:993},y:"a",t:"05 【electron的一些渲染进程Api】"},["/front_end/other/electron/05","/front_end/other/electron/05.md"]],["v-287aaf08","/front_end/other/electron/06.html",{e:`<h1> 06 【electron对话框】</h1>
<blockquote>
<p>显示用于打开和保存文件、警报等的本机系统对话框</p>
</blockquote>
<h2> 1.选择文件</h2>
<p><code>browserWindow</code> 参数允许该对话框将自身附加到父窗口, 作为父窗口的模态框。</p>
<p><code>dialog.showOpenDialog([browserWindow, ]options)</code></p>
<ul>
<li><code>browserWindow</code> <a href="https://www.electronjs.org/zh/docs/latest/api/browser-window" target="_blank" rel="noopener noreferrer">BrowserWindow</a> (可选)</li>
<li><code>选项</code> 对象
<ul>
<li><code>title</code> string (可选) - 对话框窗口的标题</li>
<li><code>defaultPath</code> string (可选) - 对话框的默认展示路径</li>
<li><code>buttonLabel</code> string (可选) - 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。</li>
<li><code>filters</code> [FileFilter<a href="https://www.electronjs.org/zh/docs/latest/api/structures/file-filter" target="_blank" rel="noopener noreferrer">]</a> (可选)</li>
<li><code>properties</code> string[] (可选) - 包含对话框相关属性。 支持以下属性值:
<ul>
<li><code>openFile</code> - 允许选择文件</li>
<li><code>openDirectory</code> - 允许选择文件夹</li>
<li><code>multiSelections</code>-允许多选。</li>
<li><code>showHiddenFiles</code>-显示对话框中的隐藏文件。</li>
<li><code>createDirectory</code> <em>macOS</em> -允许你通过对话框的形式创建新的目录。</li>
<li><code>promptToCreate</code> <em>Windows</em>-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。</li>
<li><code>noResolveAliases</code> <em>macOS</em>-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。</li>
<li><code>treatPackageAsDirectory</code> <em>macOS</em> -将包 (如 <code>.app </code>文件夹) 视为目录而不是文件。</li>
<li><code>dontAddToRecent</code> <em>Windows</em> - 不要将正在打开的项目添加到最近的文档列表中。</li>
</ul>
</li>
<li><code>message</code> string (可选) <em>macOS</em> -显示在输入框上方的消息。</li>
<li><code>securityScopedBookmarks</code> boolean (可选) <em>macOS</em> <em>mas</em> - 在打包提交到Mac App Store时创建 <a href="https://developer.apple.com/library/content/documentation/Security/Conceptual/AppSandboxDesignGuide/AppSandboxInDepth/AppSandboxInDepth.html#//apple_ref/doc/uid/TP40011183-CH3-SW16" target="_blank" rel="noopener noreferrer">security scoped bookmarks</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.32,words:1896},y:"a",t:"06 【electron对话框】"},["/front_end/other/electron/06","/front_end/other/electron/06.md"]],["v-2a2f87a7","/front_end/other/electron/07.html",{e:`<h1> 07【electron菜单】</h1>
<h2> 1.创建系统菜单</h2>
<blockquote>
<p>创建原生应用菜单和上下文菜单。</p>
</blockquote>
<p><strong>进程</strong>：<a href="https://www.electronjs.org/zh/docs/latest/glossary#main-process" target="_blank" rel="noopener noreferrer">主进程</a></p>
<p><code>new Menu()</code>创建新菜单。</p>
<p><strong>静态方法</strong></p>`,r:{minutes:3.63,words:1090},y:"a",t:"07【electron菜单】"},["/front_end/other/electron/07","/front_end/other/electron/07.md"]],["v-2be46046","/front_end/other/electron/08.html",{e:`<h1> 08 【electron系统托盘 】</h1>
<p>当我们关闭一个应用程序的时候，它其实关闭了，但是没有完全关闭，只是隐藏了，有的就存在系统托盘中，那么如何在<code>electron</code> 设置系统托盘呢</p>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.electronjs.org%2Fdocs%2Ftutorial%2Ftray" target="_blank" rel="noopener noreferrer">官方文档：Tray</a></p>
<h2> 1.概览</h2>
<p>当前指南将带领你创建 <a href="https://www.electronjs.org/docs/api/tray" target="_blank" rel="noopener noreferrer">Tray</a> 图标, 并且其拥有系统通知区域的独立上下文菜单</p>`,r:{minutes:2.26,words:678},y:"a",t:"08 【electron系统托盘 】"},["/front_end/other/electron/08","/front_end/other/electron/08.md"]],["v-2d9938e5","/front_end/other/electron/09.html",{e:`<h1> 09 【进程间通信】</h1>
<p>进程间通信 (IPC) 是在 Electron 中构建功能丰富的桌面应用程序的关键部分之一。 由于主进程和渲染器进程在 Electron 的进程模型具有不同的职责，因此 IPC 是执行许多常见任务的唯一方法，例如从 UI 调用原生 API 或从原生菜单触发 Web 内容的更改。</p>
<blockquote>
<p>官方文档：</p>
<p><a href="https://www.electronjs.org/docs/latest/api/ipc-main" target="_blank" rel="noopener noreferrer">ipcMain</a></p>
<p><a href="https://www.electronjs.org/docs/latest/api/ipc-renderer" target="_blank" rel="noopener noreferrer">ipcRenderer</a></p>
<p><a href="https://www.electronjs.org/docs/latest/api/web-contents#contentssendchannel-args" target="_blank" rel="noopener noreferrer">webContents</a></p>
</blockquote>`,r:{minutes:8,words:2400},y:"a",t:"09 【进程间通信】"},["/front_end/other/electron/09","/front_end/other/electron/09.md"]],["v-5323d68f","/front_end/other/electron/10.html",{e:`<h1> 10 【Vite + Vue3 + Electron 创建打包桌面程序】</h1>
<h2> 1.使用 Vite 构建 Electron 项目</h2>
<h3> 1.1 创建 Vite 应用，安装 Electron 依赖</h3>
<p>创建一个 Vite 项目</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:6.39,words:1918},y:"a",t:"10 【Vite + Vue3 + Electron 创建打包桌面程序】"},["/front_end/other/electron/10","/front_end/other/electron/10.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-144e84a4","/apps/",{y:"p",t:"Apps"},["/apps/index.html"]],["v-72a9c1e2","/deploy/",{y:"p",t:"Deploy"},["/deploy/index.html"]],["v-744e6dd4","/web/",{y:"p",t:"Web"},["/web/index.html"]],["v-b22fa0a4","/back_end/linux/",{y:"p",t:"Linux"},["/back_end/linux/index.html"]],["v-4e029433","/back_end/",{y:"p",t:"Back End"},["/back_end/index.html"]],["v-acdb09de","/back_end/nodeJs/",{y:"p",t:"Node Js"},["/back_end/nodeJs/index.html"]],["v-429fc9e8","/tool/efficiency/",{y:"p",t:"Efficiency"},["/tool/efficiency/index.html"]],["v-1559ca3e","/tool/",{y:"p",t:"Tool"},["/tool/index.html"]],["v-326764f5","/professional_knowledge/computer_network/",{y:"p",t:"Computer Network"},["/professional_knowledge/computer_network/index.html"]],["v-dc68d520","/professional_knowledge/",{y:"p",t:"Professional Knowledge"},["/professional_knowledge/index.html"]],["v-2d582078","/professional_knowledge/software_engineer/",{y:"p",t:"Software Engineer"},["/professional_knowledge/software_engineer/index.html"]],["v-3a02344a","/tool/git/",{y:"p",t:"Git"},["/tool/git/index.html"]],["v-7d243d0e","/tool/lint/",{y:"p",t:"Lint"},["/tool/lint/index.html"]],["v-c3b7df84","/back_end/database/mongodb/",{y:"p",t:"Mongodb"},["/back_end/database/mongodb/index.html"]],["v-5ebe9341","/back_end/database/",{y:"p",t:"Database"},["/back_end/database/index.html"]],["v-3b98b24e","/back_end/database/mysql/",{y:"p",t:"Mysql"},["/back_end/database/mysql/index.html"]],["v-4031f170","/front_end/css_advanced/less/",{y:"p",t:"Less"},["/front_end/css_advanced/less/index.html"]],["v-2307d72e","/front_end/css_advanced/",{y:"p",t:"Css Advanced"},["/front_end/css_advanced/index.html"]],["v-8681a27a","/front_end/",{y:"p",t:"Front End"},["/front_end/index.html"]],["v-3f6e79de","/front_end/css_advanced/scss/",{y:"p",t:"Scss"},["/front_end/css_advanced/scss/index.html"]],["v-26ee445f","/front_end/front_end_base/html_css/",{y:"p",t:"Html Css"},["/front_end/front_end_base/html_css/index.html"]],["v-02f17b61","/front_end/front_end_base/",{y:"p",t:"Front End Base"},["/front_end/front_end_base/index.html"]],["v-0e6aa261","/front_end/front_end_base/javascript/",{y:"p",t:"Javascript"},["/front_end/front_end_base/javascript/index.html"]],["v-b60e5920","/front_end/front_end_framework/uniapp/",{y:"p",t:"Uniapp"},["/front_end/front_end_framework/uniapp/index.html"]],["v-1b3e1bee","/front_end/front_end_framework/",{y:"p",t:"Front End Framework"},["/front_end/front_end_framework/index.html"]],["v-364ea92e","/front_end/css_advanced/tailwind/",{y:"p",t:"Tailwind"},["/front_end/css_advanced/tailwind/index.html"]],["v-734e47fe","/front_end/front_end_framework/react/",{y:"p",t:"React"},["/front_end/front_end_framework/react/index.html"]],["v-299ca198","/front_end/front_end_framework/vue3/",{y:"p",t:"Vue3"},["/front_end/front_end_framework/vue3/index.html"]],["v-2d1c40e2","/front_end/js_advanced/echarts/",{y:"p",t:"Echarts"},["/front_end/js_advanced/echarts/index.html"]],["v-58897f1a","/front_end/js_advanced/",{y:"p",t:"Js Advanced"},["/front_end/js_advanced/index.html"]],["v-299ca1d6","/front_end/front_end_framework/vue2/",{y:"p",t:"Vue2"},["/front_end/front_end_framework/vue2/index.html"]],["v-7e747335","/front_end/js_advanced/ajax/",{y:"p",t:"Ajax"},["/front_end/js_advanced/ajax/index.html"]],["v-5b2ca300","/tool/efficiency/software/",{y:"p",t:"Software"},["/tool/efficiency/software/index.html"]],["v-295ffbfe","/front_end/js_advanced/es6/",{y:"p",t:"Es6"},["/front_end/js_advanced/es6/index.html"]],["v-4bdef0f0","/front_end/js_advanced/typescript/",{y:"p",t:"Typescript"},["/front_end/js_advanced/typescript/index.html"]],["v-d0bc6108","/front_end/js_advanced/webpack/",{y:"p",t:"Webpack"},["/front_end/js_advanced/webpack/index.html"]],["v-cc046daa","/front_end/other/electron/",{y:"p",t:"Electron"},["/front_end/other/electron/index.html"]],["v-5f8133a2","/front_end/other/",{y:"p",t:"Other"},["/front_end/other/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴"},["/timeline/index.html"]]];var $l=M({name:"Vuepress",setup(){const n=Gv();return()=>i(n.value)}}),n_=()=>Z0.reduce((n,[e,s,a,t])=>(n.push({name:e,path:s,component:$l,meta:a},...t.map(o=>({path:o,redirect:s}))),n),[{name:"404",path:"/:catchAll(.*)",component:$l}]),e_=l1,s_=()=>{const n=z1({history:e_(qo("/")),routes:n_(),scrollBehavior:(e,s,a)=>a||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,s)=>{var a;(e.path!==s.path||s===Se)&&([Be.value]=await Promise.all([xe.resolvePageData(e.name),(a=Wr[e.name])==null?void 0:a.__asyncLoader()]))}),n},a_=n=>{n.component("ClientOnly",kt),n.component("Content",ni)},t_=(n,e,s)=>{const a=Y(e.currentRoute.value.path);ln(()=>e.currentRoute.value.path,f=>a.value=f);const t=E(()=>xe.resolveLayouts(s)),o=E(()=>xe.resolveRouteLocale(gs.value.locales,a.value)),p=E(()=>xe.resolveSiteLocaleData(gs.value,o.value)),r=E(()=>xe.resolvePageFrontmatter(Be.value)),c=E(()=>xe.resolvePageHeadTitle(Be.value,p.value)),u=E(()=>xe.resolvePageHead(c.value,r.value,p.value)),d=E(()=>xe.resolvePageLang(Be.value)),v=E(()=>xe.resolvePageLayout(Be.value,t.value));return n.provide(Fv,t),n.provide(Ur,r),n.provide(Kr,c),n.provide(Gr,u),n.provide(Yr,d),n.provide(Xr,v),n.provide(Bo,o),n.provide(Zr,p),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>r.value},$head:{get:()=>u.value},$headTitle:{get:()=>c.value},$lang:{get:()=>d.value},$page:{get:()=>Be.value},$routeLocale:{get:()=>o.value},$site:{get:()=>gs.value},$siteLocale:{get:()=>p.value},$withBase:{get:()=>Vn}}),{layouts:t,pageData:Be,pageFrontmatter:r,pageHead:u,pageHeadTitle:c,pageLang:d,pageLayout:v,routeLocale:o,siteData:gs,siteLocaleData:p}},o_=()=>{const n=Jv(),e=mt(),s=Y([]),a=()=>{n.value.forEach(o=>{const p=p_(o);p&&s.value.push(p)})},t=()=>{document.documentElement.lang=e.value,s.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),s.value.splice(0,s.value.length),n.value.forEach(o=>{const p=l_(o);p!==null&&(document.head.appendChild(p),s.value.push(p))})};ee(Kv,t),wn(()=>{a(),t(),ln(()=>n.value,()=>t())})},p_=([n,e,s=""])=>{const a=Object.entries(e).map(([r,c])=>cn(c)?`[${r}=${JSON.stringify(c)}]`:c===!0?`[${r}]`:"").join(""),t=`head > ${n}${a}`;return Array.from(document.querySelectorAll(t)).find(r=>r.innerText===s)||null},l_=([n,e,s])=>{if(!cn(n))return null;const a=document.createElement(n);return $o(e)&&Object.entries(e).forEach(([t,o])=>{cn(o)?a.setAttribute(t,o):o===!0&&a.setAttribute(t,"")}),cn(s)&&a.appendChild(document.createTextNode(s)),a},r_=Dv,i_=async()=>{var s;const n=r_({name:"VuepressApp",setup(){var a;o_();for(const t of Wa)(a=t.setup)==null||a.call(t);return()=>[i(Ci),...Wa.flatMap(({rootComponents:t=[]})=>t.map(o=>i(o)))]}}),e=s_();a_(n),t_(n,e,Wa);for(const a of Wa)await((s=a.enhance)==null?void 0:s.call(a,{app:n,router:e,siteData:gs}));return n.use(e),{app:n,router:e}};i_().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{fa as A,u_ as B,__ as C,Zp as D,Pn as E,Un as F,k_ as G,Nm as H,ee as I,cs as J,y_ as K,b_ as L,bf as M,Or as a,Ir as b,v_ as c,i_ as createVueApp,Ln as d,m_ as e,M as f,Y as g,wn as h,ln as i,Do as j,d_ as k,kn as l,E as m,bo as n,Md as o,f_ as p,$d as q,Kn as r,as as s,c_ as t,g_ as u,go as v,Qu as w,i as x,Om as y,ha as z};
