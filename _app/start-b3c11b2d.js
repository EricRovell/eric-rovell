var nt=Object.defineProperty,ot=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var Y=(n,t,e)=>t in n?nt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,R=(n,t)=>{for(var e in t||(t={}))G.call(t,e)&&Y(n,e,t[e]);if(C)for(var e of C(t))M.call(t,e)&&Y(n,e,t[e]);return n},H=(n,t)=>ot(n,at(t));var X=(n,t)=>{var e={};for(var s in n)G.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&C)for(var s of C(n))t.indexOf(s)<0&&M.call(n,s)&&(e[s]=n[s]);return e};import{S as lt,i as ct,s as ut,e as ft,c as ht,a as dt,d as E,b as N,f as L,t as _t,g as pt,h as mt,j as q,k as gt,l as b,m as D,n as wt,o as j,p as B,q as K,r as T,u as y,v as A,w as P,x as g,y as bt,z as yt,A as vt,B as x,C as z}from"./chunks/vendor-5f5924ad.js";import{s as Et}from"./chunks/paths-28a87002.js";function F(n){let t,e,s;const r=[n[2]||{}];var o=n[0][1];function i(a){let l={$$slots:{default:[$t]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return o&&(t=new o(i(n))),{c(){t&&q(t.$$.fragment),e=b()},l(a){t&&D(t.$$.fragment,a),e=b()},m(a,l){t&&j(t,a,l),L(a,e,l),s=!0},p(a,l){const c=l&4?B(r,[K(a[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:a}),o!==(o=a[0][1])){if(t){T();const u=t;y(u.$$.fragment,1,0,()=>{A(u,1)}),P()}o?(t=new o(i(a)),q(t.$$.fragment),g(t.$$.fragment,1),j(t,e.parentNode,e)):t=null}else o&&t.$set(c)},i(a){s||(t&&g(t.$$.fragment,a),s=!0)},o(a){t&&y(t.$$.fragment,a),s=!1},d(a){a&&E(e),t&&A(t,a)}}}function Q(n){let t,e,s;const r=[n[3]||{}];var o=n[0][2];function i(a){let l={};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return o&&(t=new o(i())),{c(){t&&q(t.$$.fragment),e=b()},l(a){t&&D(t.$$.fragment,a),e=b()},m(a,l){t&&j(t,a,l),L(a,e,l),s=!0},p(a,l){const c=l&8?B(r,[K(a[3]||{})]):{};if(o!==(o=a[0][2])){if(t){T();const u=t;y(u.$$.fragment,1,0,()=>{A(u,1)}),P()}o?(t=new o(i()),q(t.$$.fragment),g(t.$$.fragment,1),j(t,e.parentNode,e)):t=null}else o&&t.$set(c)},i(a){s||(t&&g(t.$$.fragment,a),s=!0)},o(a){t&&y(t.$$.fragment,a),s=!1},d(a){a&&E(e),t&&A(t,a)}}}function $t(n){let t,e,s=n[0][2]&&Q(n);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,o){s&&s.m(r,o),L(r,t,o),e=!0},p(r,o){r[0][2]?s?(s.p(r,o),o&1&&g(s,1)):(s=Q(r),s.c(),g(s,1),s.m(t.parentNode,t)):s&&(T(),y(s,1,1,()=>{s=null}),P())},i(r){e||(g(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&E(t)}}}function kt(n){let t,e,s=n[0][1]&&F(n);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,o){s&&s.m(r,o),L(r,t,o),e=!0},p(r,o){r[0][1]?s?(s.p(r,o),o&1&&g(s,1)):(s=F(r),s.c(),g(s,1),s.m(t.parentNode,t)):s&&(T(),y(s,1,1,()=>{s=null}),P())},i(r){e||(g(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&E(t)}}}function Z(n){let t,e=n[5]&&tt(n);return{c(){t=ft("div"),e&&e.c(),this.h()},l(s){t=ht(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=dt(t);e&&e.l(r),r.forEach(E),this.h()},h(){N(t,"id","svelte-announcer"),N(t,"aria-live","assertive"),N(t,"aria-atomic","true"),N(t,"class","svelte-1j55zn5")},m(s,r){L(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&E(t),e&&e.d()}}}function tt(n){let t;return{c(){t=_t(n[6])},l(e){t=pt(e,n[6])},m(e,s){L(e,t,s)},p(e,s){s&64&&mt(t,e[6])},d(e){e&&E(t)}}}function Rt(n){let t,e,s,r;const o=[n[1]||{}];var i=n[0][0];function a(c){let u={$$slots:{default:[kt]},$$scope:{ctx:c}};for(let f=0;f<o.length;f+=1)u=x(u,o[f]);return{props:u}}i&&(t=new i(a(n)));let l=n[4]&&Z(n);return{c(){t&&q(t.$$.fragment),e=gt(),l&&l.c(),s=b()},l(c){t&&D(t.$$.fragment,c),e=wt(c),l&&l.l(c),s=b()},m(c,u){t&&j(t,c,u),L(c,e,u),l&&l.m(c,u),L(c,s,u),r=!0},p(c,[u]){const f=u&2?B(o,[K(c[1]||{})]):{};if(u&525&&(f.$$scope={dirty:u,ctx:c}),i!==(i=c[0][0])){if(t){T();const h=t;y(h.$$.fragment,1,0,()=>{A(h,1)}),P()}i?(t=new i(a(c)),q(t.$$.fragment),g(t.$$.fragment,1),j(t,e.parentNode,e)):t=null}else i&&t.$set(f);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&g(t.$$.fragment,c),r=!0)},o(c){t&&y(t.$$.fragment,c),r=!1},d(c){t&&A(t,c),c&&E(e),l&&l.d(c),c&&E(s)}}}function Lt(n,t,e){let{stores:s}=t,{page:r}=t,{components:o}=t,{props_0:i=null}=t,{props_1:a=null}=t,{props_2:l=null}=t;bt("__svelte__",s),yt(s.page.notify);let c=!1,u=!1,f=null;return vt(()=>{const h=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,f=document.title||"untitled page"))});return e(4,c=!0),h}),n.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,r=h.page),"components"in h&&e(0,o=h.components),"props_0"in h&&e(1,i=h.props_0),"props_1"in h&&e(2,a=h.props_1),"props_2"in h&&e(3,l=h.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(r)},[o,i,a,l,c,u,f,s,r]}class St extends lt{constructor(t){super();ct(this,t,Lt,Rt,ut,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const qt="modulepreload",et={},jt="/_app/",$=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${jt}${s}`,s in et)return;et[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":qt,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((a,l)=>{i.addEventListener("load",a),i.addEventListener("error",l)})})).then(()=>t())},d=[()=>$(()=>import("./pages/__layout.svelte-cff0f44f.js"),["pages/__layout.svelte-cff0f44f.js","assets/pages/__layout.svelte-0542940a.css","chunks/vendor-5f5924ad.js","chunks/paths-bc636671.js","chunks/paths-28a87002.js","chunks/default-2d4a8e8c.js","chunks/timeline.module-4482dd15.js","assets/timeline.module-a1dc6104.css","chunks/theme-dba92e55.js"]),()=>$(()=>import("./error.svelte-2f5a2d3e.js"),["error.svelte-2f5a2d3e.js","chunks/vendor-5f5924ad.js"]),()=>$(()=>import("./pages/index.svelte-fb5f214e.js"),["pages/index.svelte-fb5f214e.js","chunks/vendor-5f5924ad.js","chunks/timeline.module-4482dd15.js","assets/timeline.module-a1dc6104.css","chunks/theme-dba92e55.js","chunks/WorkInProgress-403f09dc.js"]),()=>$(()=>import("./pages/projects/index.svelte-3c9849eb.js"),["pages/projects/index.svelte-3c9849eb.js","assets/pages/projects/index.svelte-9d2ec692.css","chunks/vendor-5f5924ad.js","chunks/default-2d4a8e8c.js","chunks/timeline.module-4482dd15.js","assets/timeline.module-a1dc6104.css","chunks/theme-dba92e55.js","chunks/Datetime-7b28c6c9.js"]),()=>$(()=>import("./pages/content/problem-001-ru.svx-7a7a1b1a.js"),["pages/content/problem-001-ru.svx-7a7a1b1a.js","chunks/vendor-5f5924ad.js","chunks/LayoutProjectEuler-2c8fd127.js","assets/LayoutProjectEuler-3ed1f3b3.css","chunks/theme-dba92e55.js"]),()=>$(()=>import("./pages/content/problem-002-ru.svx-ebccc333.js"),["pages/content/problem-002-ru.svx-ebccc333.js","chunks/vendor-5f5924ad.js","chunks/LayoutProjectEuler-2c8fd127.js","assets/LayoutProjectEuler-3ed1f3b3.css","chunks/theme-dba92e55.js"]),()=>$(()=>import("./pages/gallery/index.svelte-63352bb0.js"),["pages/gallery/index.svelte-63352bb0.js","chunks/vendor-5f5924ad.js","chunks/timeline.module-4482dd15.js","assets/timeline.module-a1dc6104.css","chunks/theme-dba92e55.js","chunks/WorkInProgress-403f09dc.js"]),()=>$(()=>import("./pages/about.svelte-00d2091f.js"),["pages/about.svelte-00d2091f.js","chunks/vendor-5f5924ad.js","chunks/timeline.module-4482dd15.js","assets/timeline.module-a1dc6104.css","chunks/theme-dba92e55.js","chunks/WorkInProgress-403f09dc.js"]),()=>$(()=>import("./pages/blog/index.svelte-b4b1e565.js"),["pages/blog/index.svelte-b4b1e565.js","chunks/vendor-5f5924ad.js","chunks/paths-bc636671.js","chunks/paths-28a87002.js","chunks/timeline.module-4482dd15.js","assets/timeline.module-a1dc6104.css","chunks/theme-dba92e55.js","chunks/Datetime-7b28c6c9.js"])],At=[[/^\/$/,[d[0],d[2]],[d[1]]],[/^\/projects\/?$/,[d[0],d[3]],[d[1]]],[/^\/content\/problem-001-ru\/?$/,[d[0],d[4]],[d[1]]],[/^\/content\/problem-002-ru\/?$/,[d[0],d[5]],[d[1]]],[/^\/gallery\/?$/,[d[0],d[6]],[d[1]]],[/^\/about\/?$/,[d[0],d[7]],[d[1]]],[/^\/blog\/?$/,[d[0],d[8]],[d[1]]],[/^\/api\/blog\/posts\.json$/]],Ut=[d[0](),d[1]()];function Ot(n){let t=n.baseURI;if(!t){const e=n.getElementsByTagName("base");t=e.length?e[0].href:n.URL}return t}function J(){return{x:pageXOffset,y:pageYOffset}}function st(n){for(;n&&n.nodeName.toUpperCase()!=="A";)n=n.parentNode;return n}function rt(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class Tt{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const o=H(R({},history.state||{}),{"sveltekit:scroll":J()});history.replaceState(o,document.title,window.location.href)},50)});const e=o=>{const i=st(o.target);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(rt(i))};let s;const r=o=>{clearTimeout(s),s=setTimeout(()=>{e(o)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",o=>{if(!this.enabled||o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const i=st(o.target);if(!i||!i.href)return;const a=rt(i),l=a.toString();if(l===location.href){location.hash||o.preventDefault();return}const c=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||c&&c.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(a))return;const u=i.hasAttribute("sveltekit:noscroll"),f=l.indexOf("#"),h=location.href.indexOf("#"),k=f>=0?l.substring(0,f):l,v=h>=0?location.href.substring(0,h):location.href;history.pushState({},"",a.href),k===v&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(a,u?J():null,!1,[],a.hash),o.preventDefault()}),addEventListener("popstate",o=>{if(o.state&&this.enabled){const i=new URL(location.href);this._navigate(i,o.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([a])=>a.test(s)),o=new URLSearchParams(t.search);return{id:`${e}?${o}`,routes:r,path:e,decoded_path:s,query:o}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:o={}}={},i){const a=new URL(t,Ot(document));return this.enabled&&this.owns(a)?(history[s?"replaceState":"pushState"](o,"",t),this._navigate(a,e?J():null,r,i,a.hash)):(location.href=a.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,o){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(i.path!=="/"){const a=i.path.endsWith("/");(a&&this.trailing_slash==="never"||!a&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=a?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}this.renderer.notify({path:i.path,query:i.query}),await this.renderer.update(i,r,!1,{hash:o,scroll:e,keepfocus:s})}}function it(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Pt(n){let t=5381,e=n.length;if(typeof n=="string")for(;e;)t=t*33^n.charCodeAt(--e);else for(;e;)t=t*33^n[--e];return(t>>>0).toString(36)}function It(n){const t=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||t){const e=n.status;if(!n.error&&t)return{status:e||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Vt(n){const t=z(n);let e=!0;function s(){e=!0,t.update(i=>i)}function r(i){e=!1,t.set(i)}function o(i){let a;return t.subscribe(l=>{(a===void 0||e&&l!==a)&&i(a=l)})}return{notify:s,set:r,subscribe:o}}function Ct(n,t){const e=typeof n=="string"?n:n.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Pt(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const o=JSON.parse(r.textContent),{body:i}=o,a=X(o,["body"]);return Promise.resolve(new Response(i,a))}return fetch(n,t)}class Nt{constructor({Root:t,fallback:e,target:s,session:r,host:o}){this.Root=t,this.fallback=e,this.host=o,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Vt({}),navigating:z(null),session:z(r)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async a=>{if(this.$session=a,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:r}){const o=[];let i={},a,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,f=await this._load_node({module:await s[c],page:r,stuff:i,status:u?t:void 0,error:u?e:void 0});if(o.push(f),f&&f.loaded)if(f.loaded.error){if(e)throw f.loaded.error;l={status:f.loaded.status,error:f.loaded.error,path:r.path,query:r.query}}else f.loaded.stuff&&(i=R(R({},i),f.loaded.stuff))}a=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:o})}catch(c){if(e)throw c;a=await this._load_error({status:500,error:it(c),path:r.path,query:r.query})}if(a.redirect){location.href=new URL(a.redirect,location.href).href;return}this._init(a)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e,s,r){const o=this.token={};let i=await this._get_navigation_result(t,s);if(o!==this.token)return;if(this.invalid.clear(),i.redirect)if(e.length>10||e.includes(t.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(i.redirect,location.href).href;return}if(i.reload?location.reload():this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i),r){const{hash:l,scroll:c,keepfocus:u}=r;u||document.body.focus();const f=l&&document.getElementById(l.slice(1));c?scrollTo(c.x,c.y):f?f.scrollIntoView():scrollTo(0,0)}if(await 0,dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null,!this.router)return;const a=i.state.branch[i.state.branch.length-1];a&&a.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:R({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];if(r.length===1)return{reload:!0,props:{},state:this.current};let o=s+1;for(;o<t.routes.length;){const a=t.routes[o];if(a[0].toString()===r[0].toString())a.length!==1&&a[1].forEach(l=>l()),o+=1;else break}const i=await this._load({route:r,info:t},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),o={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;o.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(o.props.page=t);const i=s[s.length-1],a=i.loaded&&i.loaded.maxage;if(a){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===o&&this.cache.delete(l),h(),clearTimeout(f)},f=setTimeout(u,a*1e3),h=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,o)}return o}async _load_node({status:t,error:e,module:s,page:r,stuff:o}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:o},a={};for(const c in r.params)Object.defineProperty(a,c,{get(){return i.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:a,get path(){return i.uses.path=!0,r.path},get query(){return i.uses.query=!0,r.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,R({},o)},fetch(h,k){const v=typeof h=="string"?h:h.url,{href:U}=new URL(v,new URL(r.path,document.baseURI));return i.uses.dependencies.push(U),c?fetch(h,k):Ct(h,k)}};e&&(u.status=t,u.error=e);const f=await s.load.call(null,u);if(!f)return;i.loaded=It(f),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:t,info:{path:e,decoded_path:s,query:r}},o){const i=`${s}?${r}`;if(!o){const _=this.cache.get(i);if(_)return _}const[a,l,c,u]=t,f=u?u(a.exec(s)):{},h=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(f).filter(_=>this.current.page.params[_]!==f[_]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},k={host:this.host,path:e,query:r,params:f};let v=[],U={},W=!1,I=200,O;l.forEach(_=>_());t:for(let _=0;_<l.length;_+=1){let p;try{if(!l[_])continue;const w=await l[_](),m=this.current.branch[_];if(!m||w!==m.module||h.path&&m.uses.path||h.params.some(S=>m.uses.params.has(S))||h.query&&m.uses.query||h.session&&m.uses.session||m.uses.dependencies.some(S=>this.invalid.has(S))||W&&m.uses.stuff){p=await this._load_node({module:w,page:k,stuff:U});const S=_===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(I=p.loaded.status,O=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(W=!0)}else if(S&&w.load)return}else p=m}catch(w){I=500,O=it(w)}if(O){for(;_--;)if(c[_]){let w,m,V=_;for(;!(m=v[V]);)V-=1;try{if(w=await this._load_node({status:I,error:O,module:await c[_](),page:k,stuff:m.stuff}),w&&w.loaded&&w.loaded.error)continue;v=v.slice(0,V+1).concat(w);break t}catch{continue}}return await this._load_error({status:I,error:O,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&(U=R(R({},U),p.loaded.stuff)),v.push(p)}return await this._get_navigation_result_from_branch({page:k,branch:v})}async _load_error({status:t,error:e,path:s,query:r}){const o={host:this.host,path:s,query:r,params:{}},i=await this._load_node({module:await this.fallback[0],page:o,stuff:{}}),a=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:o,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:o,branch:a})}}async function xt({paths:n,target:t,session:e,host:s,route:r,spa:o,trailing_slash:i,hydrate:a}){const l=new Nt({Root:St,fallback:Ut,target:t,session:e,host:s}),c=r?new Tt({base:n.base,routes:At,trailing_slash:i,renderer:l}):null;Et(n),a&&await l.start(a),c&&(o&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{xt as start};
