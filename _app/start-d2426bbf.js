var ot=Object.defineProperty,lt=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var X=(n,t,s)=>t in n?ot(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,S=(n,t)=>{for(var s in t||(t={}))G.call(t,s)&&X(n,s,t[s]);if(N)for(var s of N(t))W.call(t,s)&&X(n,s,t[s]);return n},x=(n,t)=>lt(n,ct(t));var F=(n,t)=>{var s={};for(var e in n)G.call(n,e)&&t.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&N)for(var e of N(n))t.indexOf(e)<0&&W.call(n,e)&&(s[e]=n[e]);return s};import{S as ut,i as ft,s as ht,e as dt,c as _t,a as pt,d as R,b as C,f as k,t as gt,g as mt,h as wt,j,k as bt,l as w,m as M,n as vt,o as A,p as H,q as B,r as T,u as b,v as q,w as I,x as g,y as yt,z as Et,A as $t,B as K,C as z}from"./chunks/vendor-1f561ed5.js";import{_ as v}from"./chunks/preload-helper-ec9aa979.js";import{i as Rt}from"./chunks/singletons-12a22614.js";function Q(n){let t,s,e;const r=[n[2]||{}];var a=n[0][1];function o(i){let l={$$slots:{default:[Lt]},$$scope:{ctx:i}};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(o(n))),{c(){t&&j(t.$$.fragment),s=w()},l(i){t&&M(t.$$.fragment,i),s=w()},m(i,l){t&&A(t,i,l),k(i,s,l),e=!0},p(i,l){const c=l&4?H(r,[B(i[2]||{})]):{};if(l&1049&&(c.$$scope={dirty:l,ctx:i}),a!==(a=i[0][1])){if(t){T();const u=t;b(u.$$.fragment,1,0,()=>{q(u,1)}),I()}a?(t=new a(o(i)),j(t.$$.fragment),g(t.$$.fragment,1),A(t,s.parentNode,s)):t=null}else a&&t.$set(c)},i(i){e||(t&&g(t.$$.fragment,i),e=!0)},o(i){t&&b(t.$$.fragment,i),e=!1},d(i){i&&R(s),t&&q(t,i)}}}function Z(n){let t,s,e;const r=[n[3]||{}];var a=n[0][2];function o(i){let l={$$slots:{default:[kt]},$$scope:{ctx:i}};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(o(n))),{c(){t&&j(t.$$.fragment),s=w()},l(i){t&&M(t.$$.fragment,i),s=w()},m(i,l){t&&A(t,i,l),k(i,s,l),e=!0},p(i,l){const c=l&8?H(r,[B(i[3]||{})]):{};if(l&1041&&(c.$$scope={dirty:l,ctx:i}),a!==(a=i[0][2])){if(t){T();const u=t;b(u.$$.fragment,1,0,()=>{q(u,1)}),I()}a?(t=new a(o(i)),j(t.$$.fragment),g(t.$$.fragment,1),A(t,s.parentNode,s)):t=null}else a&&t.$set(c)},i(i){e||(t&&g(t.$$.fragment,i),e=!0)},o(i){t&&b(t.$$.fragment,i),e=!1},d(i){i&&R(s),t&&q(t,i)}}}function tt(n){let t,s,e;const r=[n[4]||{}];var a=n[0][3];function o(i){let l={};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(o())),{c(){t&&j(t.$$.fragment),s=w()},l(i){t&&M(t.$$.fragment,i),s=w()},m(i,l){t&&A(t,i,l),k(i,s,l),e=!0},p(i,l){const c=l&16?H(r,[B(i[4]||{})]):{};if(a!==(a=i[0][3])){if(t){T();const u=t;b(u.$$.fragment,1,0,()=>{q(u,1)}),I()}a?(t=new a(o()),j(t.$$.fragment),g(t.$$.fragment,1),A(t,s.parentNode,s)):t=null}else a&&t.$set(c)},i(i){e||(t&&g(t.$$.fragment,i),e=!0)},o(i){t&&b(t.$$.fragment,i),e=!1},d(i){i&&R(s),t&&q(t,i)}}}function kt(n){let t,s,e=n[0][3]&&tt(n);return{c(){e&&e.c(),t=w()},l(r){e&&e.l(r),t=w()},m(r,a){e&&e.m(r,a),k(r,t,a),s=!0},p(r,a){r[0][3]?e?(e.p(r,a),a&1&&g(e,1)):(e=tt(r),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(T(),b(e,1,1,()=>{e=null}),I())},i(r){s||(g(e),s=!0)},o(r){b(e),s=!1},d(r){e&&e.d(r),r&&R(t)}}}function Lt(n){let t,s,e=n[0][2]&&Z(n);return{c(){e&&e.c(),t=w()},l(r){e&&e.l(r),t=w()},m(r,a){e&&e.m(r,a),k(r,t,a),s=!0},p(r,a){r[0][2]?e?(e.p(r,a),a&1&&g(e,1)):(e=Z(r),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(T(),b(e,1,1,()=>{e=null}),I())},i(r){s||(g(e),s=!0)},o(r){b(e),s=!1},d(r){e&&e.d(r),r&&R(t)}}}function St(n){let t,s,e=n[0][1]&&Q(n);return{c(){e&&e.c(),t=w()},l(r){e&&e.l(r),t=w()},m(r,a){e&&e.m(r,a),k(r,t,a),s=!0},p(r,a){r[0][1]?e?(e.p(r,a),a&1&&g(e,1)):(e=Q(r),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(T(),b(e,1,1,()=>{e=null}),I())},i(r){s||(g(e),s=!0)},o(r){b(e),s=!1},d(r){e&&e.d(r),r&&R(t)}}}function et(n){let t,s=n[6]&&st(n);return{c(){t=dt("div"),s&&s.c(),this.h()},l(e){t=_t(e,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=pt(t);s&&s.l(r),r.forEach(R),this.h()},h(){C(t,"id","svelte-announcer"),C(t,"aria-live","assertive"),C(t,"aria-atomic","true"),C(t,"class","svelte-1j55zn5")},m(e,r){k(e,t,r),s&&s.m(t,null)},p(e,r){e[6]?s?s.p(e,r):(s=st(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&R(t),s&&s.d()}}}function st(n){let t;return{c(){t=gt(n[7])},l(s){t=mt(s,n[7])},m(s,e){k(s,t,e)},p(s,e){e&128&&wt(t,s[7])},d(s){s&&R(t)}}}function jt(n){let t,s,e,r;const a=[n[1]||{}];var o=n[0][0];function i(c){let u={$$slots:{default:[St]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)u=K(u,a[h]);return{props:u}}o&&(t=new o(i(n)));let l=n[5]&&et(n);return{c(){t&&j(t.$$.fragment),s=bt(),l&&l.c(),e=w()},l(c){t&&M(t.$$.fragment,c),s=vt(c),l&&l.l(c),e=w()},m(c,u){t&&A(t,c,u),k(c,s,u),l&&l.m(c,u),k(c,e,u),r=!0},p(c,[u]){const h=u&2?H(a,[B(c[1]||{})]):{};if(u&1053&&(h.$$scope={dirty:u,ctx:c}),o!==(o=c[0][0])){if(t){T();const _=t;b(_.$$.fragment,1,0,()=>{q(_,1)}),I()}o?(t=new o(i(c)),j(t.$$.fragment),g(t.$$.fragment,1),A(t,s.parentNode,s)):t=null}else o&&t.$set(h);c[5]?l?l.p(c,u):(l=et(c),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i(c){r||(t&&g(t.$$.fragment,c),r=!0)},o(c){t&&b(t.$$.fragment,c),r=!1},d(c){t&&q(t,c),c&&R(s),l&&l.d(c),c&&R(e)}}}function At(n,t,s){let{stores:e}=t,{page:r}=t,{components:a}=t,{props_0:o=null}=t,{props_1:i=null}=t,{props_2:l=null}=t,{props_3:c=null}=t;yt("__svelte__",e),Et(e.page.notify);let u=!1,h=!1,_=null;return $t(()=>{const d=e.page.subscribe(()=>{u&&(s(6,h=!0),s(7,_=document.title||"untitled page"))});return s(5,u=!0),d}),n.$$set=d=>{"stores"in d&&s(8,e=d.stores),"page"in d&&s(9,r=d.page),"components"in d&&s(0,a=d.components),"props_0"in d&&s(1,o=d.props_0),"props_1"in d&&s(2,i=d.props_1),"props_2"in d&&s(3,l=d.props_2),"props_3"in d&&s(4,c=d.props_3)},n.$$.update=()=>{n.$$.dirty&768&&e.page.set(r)},[a,o,i,l,c,u,h,_,e,r]}class qt extends ut{constructor(t){super();ft(this,t,At,jt,ht,{stores:8,page:9,components:0,props_0:1,props_1:2,props_2:3,props_3:4})}}const f=[()=>v(()=>import("./pages/__layout.svelte-3ce04212.js"),["pages/__layout.svelte-3ce04212.js","assets/Root.svelte_svelte_type_style_lang-e565d35f.css","chunks/vendor-1f561ed5.js","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/default-61e0bedf.js","chunks/Link-113eb781.js","chunks/stores-a51c5b0f.js"]),()=>v(()=>import("./error.svelte-2c1218e8.js"),["error.svelte-2c1218e8.js","chunks/vendor-1f561ed5.js"]),()=>v(()=>import("./pages/index.svelte-1a49aad8.js"),["pages/index.svelte-1a49aad8.js","chunks/vendor-1f561ed5.js","chunks/singletons-12a22614.js","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js"]),()=>v(()=>import("./pages/content/index.svelte-f23601e9.js"),["pages/content/index.svelte-f23601e9.js","chunks/vendor-1f561ed5.js"]),()=>v(()=>import("./pages/content/anagram-hash-ru.svx-1f06fdff.js"),["pages/content/anagram-hash-ru.svx-1f06fdff.js","chunks/vendor-1f561ed5.js","chunks/Algorithm-5f35ab56.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/katex.min-81799f2d.js","assets/katex.min-c0ab08c0.css","chunks/Link-113eb781.js"]),()=>v(()=>import("./pages/content/problem-001-ru.svx-e9c97afd.js"),["pages/content/problem-001-ru.svx-e9c97afd.js","chunks/vendor-1f561ed5.js","chunks/ProjectEuler-f3136485.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/katex.min-81799f2d.js","assets/katex.min-c0ab08c0.css","chunks/Link-113eb781.js"]),()=>v(()=>import("./pages/content/problem-002-ru.svx-66ab2fdb.js"),["pages/content/problem-002-ru.svx-66ab2fdb.js","chunks/vendor-1f561ed5.js","chunks/ProjectEuler-f3136485.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/katex.min-81799f2d.js","assets/katex.min-c0ab08c0.css","chunks/Link-113eb781.js"]),()=>v(()=>import("./pages/content/anagram-hash.svx-7637ca06.js"),["pages/content/anagram-hash.svx-7637ca06.js","chunks/vendor-1f561ed5.js","chunks/Algorithm-5f35ab56.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/katex.min-81799f2d.js","assets/katex.min-c0ab08c0.css","chunks/Link-113eb781.js"]),()=>v(()=>import("./pages/_lang_/__layout.svelte-e55241dd.js"),["pages/_lang_/__layout.svelte-e55241dd.js","chunks/vendor-1f561ed5.js","chunks/stores-a51c5b0f.js","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js"]),()=>v(()=>import("./pages/_lang_/projects/index.svelte-32b39c09.js"),["pages/_lang_/projects/index.svelte-32b39c09.js","assets/pages/_lang_/projects/index.svelte-005cca57.css","chunks/vendor-1f561ed5.js","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/default-61e0bedf.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/Card-64e3b4a7.js","chunks/util-c0549e5c.js"]),()=>v(()=>import("./pages/_lang_/gallery/index.svelte-904d1f31.js"),["pages/_lang_/gallery/index.svelte-904d1f31.js","chunks/vendor-1f561ed5.js"]),()=>v(()=>import("./pages/_lang_/about.svelte-42b3b9a8.js"),["pages/_lang_/about.svelte-42b3b9a8.js","chunks/vendor-1f561ed5.js"]),()=>v(()=>import("./pages/_lang_/blog/index.svelte-e643eb67.js"),["pages/_lang_/blog/index.svelte-e643eb67.js","assets/pages/_lang_/blog/index.svelte-974cdebb.css","assets/Root.svelte_svelte_type_style_lang-e565d35f.css","chunks/vendor-1f561ed5.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/Card-64e3b4a7.js","chunks/util-c0549e5c.js","chunks/ContentFilter-a475f63b.js"]),()=>v(()=>import("./pages/_lang_/home.svelte-4387397e.js"),["pages/_lang_/home.svelte-4387397e.js","assets/pages/_lang_/home.svelte-1ea0006d.css","assets/Root.svelte_svelte_type_style_lang-e565d35f.css","chunks/vendor-1f561ed5.js","chunks/timeline.module-ce2b1fe8.js","assets/timeline.module-ed8b46cf.css","chunks/i18n-3732cc7d.js","chunks/preload-helper-ec9aa979.js","chunks/Link-113eb781.js","chunks/util-c0549e5c.js","chunks/ContentFilter-a475f63b.js"])],V=decodeURIComponent,Ot=[[/^\/$/,[f[0],f[2]],[f[1]]],[/^\/content\/?$/,[f[0],f[3]],[f[1]]],[/^\/content\/anagram-hash-ru\/?$/,[f[0],f[4]],[f[1]]],[/^\/content\/problem-001-ru\/?$/,[f[0],f[5]],[f[1]]],[/^\/content\/problem-002-ru\/?$/,[f[0],f[6]],[f[1]]],[/^\/content\/anagram-hash\/?$/,[f[0],f[7]],[f[1]]],,,[/^\/([^/]+?)\/projects\/?$/,[f[0],f[8],f[9]],[f[1]],n=>({lang:V(n[1])})],[/^\/([^/]+?)\/gallery\/?$/,[f[0],f[8],f[10]],[f[1]],n=>({lang:V(n[1])})],[/^\/([^/]+?)\/about\/?$/,[f[0],f[8],f[11]],[f[1]],n=>({lang:V(n[1])})],[/^\/([^/]+?)\/blog\/?$/,[f[0],f[8],f[12]],[f[1]],n=>({lang:V(n[1])})],[/^\/([^/]+?)\/home\/?$/,[f[0],f[8],f[13]],[f[1]],n=>({lang:V(n[1])})]],Tt=[f[0](),f[1]()];function It(n){let t=n.baseURI;if(!t){const s=n.getElementsByTagName("base");t=s.length?s[0].href:n.URL}return t}let rt="";function Pt(n){rt=n.base,n.assets}function J(){return{x:pageXOffset,y:pageYOffset}}function nt(n){return n.composedPath().find(s=>s instanceof Node&&s.nodeName.toUpperCase()==="A")}function it(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class Ut{constructor({base:t,routes:s,trailing_slash:e,renderer:r}){this.base=t,this.routes=s,this.trailing_slash=e,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=x(S({},history.state||{}),{"sveltekit:scroll":J()});history.replaceState(a,document.title,window.location.href)},200)});const s=a=>{const o=nt(a);o&&o.href&&o.hasAttribute("sveltekit:prefetch")&&this.prefetch(it(o))};let e;const r=a=>{clearTimeout(e),e=setTimeout(()=>{s(a)},20)};addEventListener("touchstart",s),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const o=nt(a);if(!o||!o.href)return;const i=it(o),l=i.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(o.getAttribute("rel")||"").split(/\s+/);if(o.hasAttribute("download")||c&&c.includes("external")||(o instanceof SVGAElement?o.target.baseVal:o.target)||!this.owns(i))return;const u=o.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),_=location.href.indexOf("#"),d=h>=0?l.substring(0,h):l,y=_>=0?location.href.substring(0,_):location.href;history.pushState({},"",i.href),d===y&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(i,u?J():null,!1,[],i.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const o=new URL(location.href);this._navigate(o,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const s=t.pathname.slice(this.base.length)||"/",e=decodeURI(s),r=this.routes.filter(([i])=>i.test(e)),a=new URLSearchParams(t.search);return{id:`${s}?${a}`,routes:r,path:s,decoded_path:e,query:a}}}async goto(t,{noscroll:s=!1,replaceState:e=!1,keepfocus:r=!1,state:a={}}={},o){const i=new URL(t,It(document));return this.enabled&&this.owns(i)?(history[e?"replaceState":"pushState"](a,"",t),this._navigate(i,s?J():null,r,o,i.hash)):(location.href=i.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const s=this.parse(t);if(!s)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(s)}async _navigate(t,s,e,r,a){const o=this.parse(t);if(!o)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,o.path!=="/"){const i=o.path.endsWith("/");(i&&this.trailing_slash==="never"||!i&&this.trailing_slash==="always"&&!(o.path.split("/").pop()||"").includes("."))&&(o.path=i?o.path.slice(0,-1):o.path+"/",history.replaceState({},"",`${this.base}${o.path}${location.search}`))}await this.renderer.handle_navigation(o,r,!1,{hash:a,scroll:s,keepfocus:e}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function at(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Vt(n){let t=5381,s=n.length;if(typeof n=="string")for(;s;)t=t*33^n.charCodeAt(--s);else for(;s;)t=t*33^n[--s];return(t>>>0).toString(36)}function Dt(n){const t=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||t){const s=n.status;if(!n.error&&t)return{status:s||500,error:new Error};const e=typeof n.error=="string"?new Error(n.error):n.error;return e instanceof Error?!s||s<400||s>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:e}):{status:s,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Nt(n){const t=z(n);let s=!0;function e(){s=!0,t.update(o=>o)}function r(o){s=!1,t.set(o)}function a(o){let i;return t.subscribe(l=>{(i===void 0||s&&l!==i)&&o(i=l)})}return{notify:e,set:r,subscribe:a}}function Ct(n,t){const s=typeof n=="string"?n:n.url;let e=`script[data-type="svelte-data"][data-url=${JSON.stringify(s)}]`;t&&typeof t.body=="string"&&(e+=`[data-body="${Vt(t.body)}"]`);const r=document.querySelector(e);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:o}=a,i=F(a,["body"]);return Promise.resolve(new Response(o,i))}return fetch(n,t)}class Mt{constructor({Root:t,fallback:s,target:e,session:r,host:a}){this.Root=t,this.fallback=s,this.host=a,this.router,this.target=e,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Nt({}),navigating:z(null),session:z(r)},this.$session=null,this.root=null;let o=!1;this.stores.session.subscribe(async i=>{if(this.$session=i,!o||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),o=!0}async start({status:t,error:s,nodes:e,page:r}){const a=[];let o={},i,l;try{for(let c=0;c<e.length;c+=1){const u=c===e.length-1,h=await this._load_node({module:await e[c],page:r,stuff:o,status:u?t:void 0,error:u?s:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(s)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:r.path,query:r.query}}else h.loaded.stuff&&(o=S(S({},o),h.loaded.stuff))}i=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(s)throw c;i=await this._load_error({status:500,error:at(c),path:r.path,query:r.query})}if(i.redirect){location.href=new URL(i.redirect,location.href).href;return}this._init(i)}async handle_navigation(t,s,e,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,s,e,r)}async update(t,s,e,r){var l;const a=this.token={};let o=await this._get_navigation_result(t,e);if(a!==this.token)return;if(this.invalid.clear(),o.redirect)if(s.length>10||s.includes(t.path))o=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(o.redirect,{replaceState:!0},[...s,t.path]):location.href=new URL(o.redirect,location.href).href;return}if(o.reload?location.reload():this.started?(this.current=o.state,this.root.$set(o.props),this.stores.navigating.set(null)):this._init(o),r){const{hash:c,scroll:u,keepfocus:h}=r;h||((l=getSelection())==null||l.removeAllRanges(),document.body.focus());const _=Math.round(pageYOffset),d=document.documentElement.scrollHeight-innerHeight;await 0;const y=Math.round(pageYOffset),L=document.documentElement.scrollHeight-innerHeight;if(y===Math.min(_,L)||d-_==L-y){const O=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):O?O.scrollIntoView():scrollTo(0,0)}}else await 0;if(this.loading.promise=null,this.loading.id=null,!this.router)return;const i=o.state.branch[o.state.branch.length-1];i&&i.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const s=this.router&&this.router.parse(new URL(location.href));s&&await this.update(s,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const s=document.querySelector("style[data-svelte]");s&&s.remove(),this.root=new this.Root({target:this.target,props:S({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,s){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let e=0;e<t.routes.length;e+=1){const r=t.routes[e];let a=e+1;for(;a<t.routes.length;){const i=t.routes[a];if(i[0].toString()===r[0].toString())i[1].forEach(l=>l()),a+=1;else break}const o=await this._load({route:r,info:t},s);if(o)return o}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:s}){const e=s.filter(Boolean),r=e.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:s,session_id:this.session_id},props:{components:e.map(l=>l.module.default)}};for(let l=0;l<e.length;l+=1){const c=e[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const o=e[e.length-1],i=o.loaded&&o.loaded.maxage;if(i){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),_(),clearTimeout(h)},h=setTimeout(u,i*1e3),_=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:s,module:e,page:r,stuff:a}){const o={module:e,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},i={};for(const c in r.params)Object.defineProperty(i,c,{get(){return o.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(e.load){const{started:c}=this,u={page:{host:r.host,params:i,get path(){return o.uses.path=!0,r.path},get query(){return o.uses.query=!0,r.query}},get session(){return o.uses.session=!0,l},get stuff(){return o.uses.stuff=!0,S({},a)},fetch(_,d){const y=typeof _=="string"?_:_.url,{href:L}=new URL(y,new URL(r.path,document.baseURI));return o.uses.dependencies.push(L),c?fetch(_,d):Ct(_,d)}};s&&(u.status=t,u.error=s);const h=await e.load.call(null,u);if(!h)return;o.loaded=Dt(h),o.loaded.stuff&&(o.stuff=o.loaded.stuff)}return o}async _load({route:t,info:{path:s,decoded_path:e,query:r}},a){const o=`${e}?${r}`;if(!a){const p=this.cache.get(o);if(p)return p}const[i,l,c,u]=t,h=u?u(i.exec(e)):{},_=this.current.page&&{path:s!==this.current.page.path,params:Object.keys(h).filter(p=>this.current.page.params[p]!==h[p]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},d={host:this.host,path:s,query:r,params:h};let y=[],L={},Y=!1,O=200,U;l.forEach(p=>p());t:for(let p=0;p<l.length;p+=1){let m;try{if(!l[p])continue;const $=await l[p](),E=this.current.branch[p];if(!E||$!==E.module||_.path&&E.uses.path||_.params.some(P=>E.uses.params.has(P))||_.query&&E.uses.query||_.session&&E.uses.session||E.uses.dependencies.some(P=>this.invalid.has(P))||Y&&E.uses.stuff){m=await this._load_node({module:$,page:d,stuff:L});const P=p===l.length-1;if(m&&m.loaded){if(m.loaded.error&&(O=m.loaded.status,U=m.loaded.error),m.loaded.redirect)return{redirect:m.loaded.redirect,props:{},state:this.current};m.loaded.stuff&&(Y=!0)}else if(P&&$.load)return}else m=E}catch($){O=500,U=at($)}if(U){for(;p--;)if(c[p]){let $,E,D=p;for(;!(E=y[D]);)D-=1;try{if($=await this._load_node({status:O,error:U,module:await c[p](),page:d,stuff:E.stuff}),$&&$.loaded&&$.loaded.error)continue;y=y.slice(0,D+1).concat($);break t}catch{continue}}return await this._load_error({status:O,error:U,path:s,query:r})}else m&&m.loaded&&m.loaded.stuff&&(L=S(S({},L),m.loaded.stuff)),y.push(m)}return await this._get_navigation_result_from_branch({page:d,branch:y})}async _load_error({status:t,error:s,path:e,query:r}){const a={host:this.host,path:e,query:r,params:{}},o=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),i=[o,await this._load_node({status:t,error:s,module:await this.fallback[1],page:a,stuff:o&&o.loaded&&o.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:i})}}async function zt({paths:n,target:t,session:s,host:e,route:r,spa:a,trailing_slash:o,hydrate:i}){const l=new Mt({Root:qt,fallback:Tt,target:t,session:s,host:e}),c=r?new Ut({base:n.base,routes:Ot,trailing_slash:o,renderer:l}):null;Rt(c),Pt(n),i&&await l.start(i),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{zt as start};