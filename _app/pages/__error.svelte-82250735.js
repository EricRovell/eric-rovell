import{S as o,i as l,s as c,e as f,t as d,c as h,a as u,g as m,d as i,f as _,E as p,h as g,R as r}from"../chunks/vendor-0fca65bf.js";function v(s){let t,n;return{c(){t=f("h1"),n=d(s[0])},l(e){t=h(e,"H1",{});var a=u(t);n=m(a,s[0]),a.forEach(i)},m(e,a){_(e,t,a),p(t,n)},p(e,[a]){a&1&&g(n,e[0])},i:r,o:r,d(e){e&&i(t)}}}function E({error:s,status:t}){return{props:{title:`${t}: ${s.message}`}}}function x(s,t,n){let{title:e}=t;return s.$$set=a=>{"title"in a&&n(0,e=a.title)},[e]}class S extends o{constructor(t){super();l(this,t,x,v,c,{title:0})}}export{S as default,E as load};
