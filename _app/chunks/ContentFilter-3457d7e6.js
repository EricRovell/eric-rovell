import{S as I,i as j,s as q,e as d,k as E,t as C,c as p,a as v,n as L,g as S,d as g,b,f as k,E as h,T as O,h as z,R as A,F as T,a7 as w,H as B,a4 as H,a5 as J,j as K,m as M,o as P,I as R,J as U,K as X,a6 as Q,x as D,u as F,v as V,G as W,X as Y}from"./vendor-0fca65bf.js";import"./i18n-edc8ffef.js";import"./timeline.module-4e5beac1.js";function G(o,n,e){const u=o.slice();return u[6]=n[e].label,u[7]=n[e].value,u}function N(o){let n,e,u,f,c,l=o[6]+"",i,a,s,r;return{c(){n=d("label"),e=d("input"),c=E(),i=C(l),a=E(),this.h()},l(t){n=p(t,"LABEL",{class:!0});var _=v(n);e=p(_,"INPUT",{type:!0,name:!0}),c=L(_),i=S(_,l),a=L(_),_.forEach(g),this.h()},h(){b(e,"type","checkbox"),b(e,"name",o[2]),e.__value=u=o[7],e.value=e.__value,e.disabled=f=o[0].length===1&&o[0][0]===o[7],o[5][0].push(e),b(n,"class","svelte-1m8bqhz")},m(t,_){k(t,n,_),h(n,e),e.checked=~o[0].indexOf(e.__value),h(n,c),h(n,i),h(n,a),s||(r=O(e,"change",o[4]),s=!0)},p(t,_){_&4&&b(e,"name",t[2]),_&8&&u!==(u=t[7])&&(e.__value=u,e.value=e.__value),_&9&&f!==(f=t[0].length===1&&t[0][0]===t[7])&&(e.disabled=f),_&1&&(e.checked=~t[0].indexOf(e.__value)),_&8&&l!==(l=t[6]+"")&&z(i,l)},d(t){t&&g(n),o[5][0].splice(o[5][0].indexOf(e),1),s=!1,r()}}}function Z(o){let n,e,u,f,c=o[3],l=[];for(let i=0;i<c.length;i+=1)l[i]=N(G(o,c,i));return{c(){n=d("fieldset"),e=d("legend"),u=C(o[1]),f=E();for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){n=p(i,"FIELDSET",{class:!0});var a=v(n);e=p(a,"LEGEND",{class:!0});var s=v(e);u=S(s,o[1]),s.forEach(g),f=L(a);for(let r=0;r<l.length;r+=1)l[r].l(a);a.forEach(g),this.h()},h(){b(e,"class","svelte-1m8bqhz"),b(n,"class","svelte-1m8bqhz")},m(i,a){k(i,n,a),h(n,e),h(e,u),h(n,f);for(let s=0;s<l.length;s+=1)l[s].m(n,null)},p(i,[a]){if(a&2&&z(u,i[1]),a&13){c=i[3];let s;for(s=0;s<c.length;s+=1){const r=G(i,c,s);l[s]?l[s].p(r,a):(l[s]=N(r),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=c.length}},i:A,o:A,d(i){i&&g(n),T(l,i)}}}function y(o,n,e){let{legend:u}=n,{name:f}=n,{options:c}=n,{group:l=[]}=n;const i=[[]];function a(){l=w(i[0],this.__value,this.checked),e(0,l)}return o.$$set=s=>{"legend"in s&&e(1,u=s.legend),"name"in s&&e(2,f=s.name),"options"in s&&e(3,c=s.options),"group"in s&&e(0,l=s.group)},[l,u,f,c,a,i]}class x extends I{constructor(n){super();j(this,n,y,Z,q,{legend:1,name:2,options:3,group:0})}}function $(o){let n,e,u,f,c,l;const i=o[3].default,a=B(i,o,o[2],null);function s(t){o[4](t)}let r={legend:o[1]("message.content-language"),name:"content-lang",options:[{label:"English",value:"en"},{label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}]};return o[0]!==void 0&&(r.group=o[0]),f=new x({props:r}),H.push(()=>J(f,"group",s)),{c(){n=d("main"),a&&a.c(),e=E(),u=d("aside"),K(f.$$.fragment)},l(t){n=p(t,"MAIN",{});var _=v(n);a&&a.l(_),_.forEach(g),e=L(t),u=p(t,"ASIDE",{});var m=v(u);M(f.$$.fragment,m),m.forEach(g)},m(t,_){k(t,n,_),a&&a.m(n,null),k(t,e,_),k(t,u,_),P(f,u,null),l=!0},p(t,[_]){a&&a.p&&(!l||_&4)&&R(a,i,t,t[2],l?X(i,t[2],_,null):U(t[2]),null);const m={};_&2&&(m.legend=t[1]("message.content-language")),!c&&_&1&&(c=!0,m.group=t[0],Q(()=>c=!1)),f.$set(m)},i(t){l||(D(a,t),D(f.$$.fragment,t),l=!0)},o(t){F(a,t),F(f.$$.fragment,t),l=!1},d(t){t&&g(n),a&&a.d(t),t&&g(e),t&&g(u),V(f)}}}function ee(o,n,e){let u;W(o,Y,a=>e(1,u=a));let{$$slots:f={},$$scope:c}=n,{contentLanguage:l=[]}=n;function i(a){l=a,e(0,l)}return o.$$set=a=>{"contentLanguage"in a&&e(0,l=a.contentLanguage),"$$scope"in a&&e(2,c=a.$$scope)},[l,u,c,f,i]}class ae extends I{constructor(n){super();j(this,n,ee,$,q,{contentLanguage:0})}}export{ae as C};
