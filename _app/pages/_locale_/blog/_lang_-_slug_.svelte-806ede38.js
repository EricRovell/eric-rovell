import{_ as s}from"../../../chunks/preload-helper-e4860ae8.js";import{S as a,i,s as u,w as c,x as _,y as l,I as m,q as p,o as d,B as f}from"../../../chunks/vendor-bff07850.js";function g(o){switch(o){case"../../../content/blogpost/anagram-hash/index-en.svx":return s(()=>import("../../../chunks/index-en-d0632b4b.js"),["chunks/index-en-d0632b4b.js","chunks/vendor-bff07850.js","chunks/katex.min-3366c539.js","assets/katex.min-390e28bc.css","chunks/timeline.module-cb7c36d6.js","assets/timeline.module-afc1a635.css","chunks/Link-90966869.js","chunks/Meta-0ad45a8f.js","chunks/Datetime-b115bc23.js"]);case"../../../content/blogpost/anagram-hash/index-ru.svx":return s(()=>import("../../../chunks/index-ru-21bd1841.js"),["chunks/index-ru-21bd1841.js","chunks/vendor-bff07850.js","chunks/katex.min-3366c539.js","assets/katex.min-390e28bc.css","chunks/timeline.module-cb7c36d6.js","assets/timeline.module-afc1a635.css","chunks/Link-90966869.js","chunks/Meta-0ad45a8f.js","chunks/Datetime-b115bc23.js"]);case"../../../content/blogpost/project-euler-001/index-ru.svx":return s(()=>import("../../../chunks/index-ru-2f40328f.js"),["chunks/index-ru-2f40328f.js","chunks/vendor-bff07850.js","chunks/katex.min-3366c539.js","assets/katex.min-390e28bc.css","chunks/timeline.module-cb7c36d6.js","assets/timeline.module-afc1a635.css","chunks/Link-90966869.js","chunks/Meta-0ad45a8f.js","chunks/Datetime-b115bc23.js","chunks/EulerProblem-d835a297.js","chunks/Icon-ce5b6925.js","chunks/default-c9b5f240.js"]);case"../../../content/blogpost/project-euler-002/index-ru.svx":return s(()=>import("../../../chunks/index-ru-faeed148.js"),["chunks/index-ru-faeed148.js","chunks/vendor-bff07850.js","chunks/katex.min-3366c539.js","assets/katex.min-390e28bc.css","chunks/timeline.module-cb7c36d6.js","assets/timeline.module-afc1a635.css","chunks/Link-90966869.js","chunks/Meta-0ad45a8f.js","chunks/Datetime-b115bc23.js","chunks/EulerProblem-d835a297.js","chunks/Icon-ce5b6925.js","chunks/default-c9b5f240.js"]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function v(o){let t,n;return t=new o[0]({}),{c(){c(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,r){l(t,e,r),n=!0},p:m,i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}const E=async({params:o})=>{const{lang:t="en",slug:n}=o;try{return{props:{Post:(await g(`../../../content/blogpost/${n}/index-${t}.svx`)).default}}}catch{return{status:404,error:"Page Not Found"}}};function x(o,t,n){let{Post:e}=t;return o.$$set=r=>{"Post"in r&&n(0,e=r.Post)},[e]}class b extends a{constructor(t){super();i(this,t,x,v,u,{Post:0})}}export{b as default,E as load};