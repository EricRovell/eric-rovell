import{S as Y,i as Z,s as $,e as k,j as O,k as H,c as w,a as y,m as T,n as M,d as g,a5 as x,b as q,f as G,o as F,E as p,x as j,u as A,v as J,t as K,g as V,h as X,r as ne,w as ie,F as oe,G as ee,X as re,H as z,I as P,J as Q,K as U}from"./vendor-81997168.js";import{w as ce}from"./timeline.module-2126882f.js";import"./i18n-935aa682.js";import{L as fe}from"./Link-13ad004d.js";import{M as _e}from"./Meta-ed0cbf73.js";function te(s,t,l){const a=s.slice();return a[2]=t[l].level,a[3]=t[l].title,a[4]=t[l].id,a}function ue(s){let t=s[3]+"",l;return{c(){l=K(t)},l(a){l=V(a,t)},m(a,f){G(a,l,f)},p(a,f){f&1&&t!==(t=a[3]+"")&&X(l,t)},d(a){a&&g(l)}}}function se(s){let t,l,a,f;return l=new fe({props:{href:`#${s[4]}`,$$slots:{default:[ue]},$$scope:{ctx:s}}}),{c(){t=k("li"),O(l.$$.fragment),a=H(),this.h()},l(r){t=w(r,"LI",{style:!0,class:!0});var _=y(t);T(l.$$.fragment,_),a=M(_),_.forEach(g),this.h()},h(){x(t,"--toc-level",s[2]-2),q(t,"class","svelte-sgea57")},m(r,_){G(r,t,_),F(l,t,null),p(t,a),f=!0},p(r,_){const d={};_&1&&(d.href=`#${r[4]}`),_&129&&(d.$$scope={dirty:_,ctx:r}),l.$set(d),(!f||_&1)&&x(t,"--toc-level",r[2]-2)},i(r){f||(j(l.$$.fragment,r),f=!0)},o(r){A(l.$$.fragment,r),f=!1},d(r){r&&g(t),J(l)}}}function me(s){let t,l,a=s[1]("message.toc")+"",f,r,_,d,h=s[0],o=[];for(let n=0;n<h.length;n+=1)o[n]=se(te(s,h,n));const L=n=>A(o[n],1,1,()=>{o[n]=null});return{c(){t=k("nav"),l=k("h2"),f=K(a),r=H(),_=k("ol");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){t=w(n,"NAV",{class:!0});var u=y(t);l=w(u,"H2",{class:!0});var c=y(l);f=V(c,a),c.forEach(g),r=M(u),_=w(u,"OL",{class:!0});var i=y(_);for(let I=0;I<o.length;I+=1)o[I].l(i);i.forEach(g),u.forEach(g),this.h()},h(){q(l,"class","svelte-sgea57"),q(_,"class","svelte-sgea57"),q(t,"class","svelte-sgea57")},m(n,u){G(n,t,u),p(t,l),p(l,f),p(t,r),p(t,_);for(let c=0;c<o.length;c+=1)o[c].m(_,null);d=!0},p(n,[u]){if((!d||u&2)&&a!==(a=n[1]("message.toc")+"")&&X(f,a),u&1){h=n[0];let c;for(c=0;c<h.length;c+=1){const i=te(n,h,c);o[c]?(o[c].p(i,u),j(o[c],1)):(o[c]=se(i),o[c].c(),j(o[c],1),o[c].m(_,null))}for(ne(),c=h.length;c<o.length;c+=1)L(c);ie()}},i(n){if(!d){for(let u=0;u<h.length;u+=1)j(o[u]);d=!0}},o(n){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)A(o[u]);d=!1},d(n){n&&g(t),oe(o,n)}}}function he(s,t,l){let a;ee(s,re,r=>l(1,a=r));let{headings:f=[]}=t;return s.$$set=r=>{"headings"in r&&l(0,f=r.headings)},[f,a]}class de extends Y{constructor(t){super();Z(this,t,he,me,$,{headings:0})}}const ge="_body_9iq1c_5",pe="_header_9iq1c_29",ve="_article_9iq1c_45",be="_sidebar_9iq1c_65";var S={body:ge,header:pe,article:ve,sidebar:be};const Ee=s=>({}),le=s=>({}),ke=s=>({}),ae=s=>({});function we(s){let t,l,a,f,r,_,d,h,o,L,n,u,c,i;t=new _e({props:{title:s[0],meta:{description:s[1],keywords:s[2],language:s[3]},openGraph:{title:s[0],description:s[1],locale:s[3],type:"article",tag:s[2],section:s[6],site_name:"Eric Rovell",author:"Eric Rovell",url:s[8],"article:published_time":s[4],"article:modified_time":s[5]},twitter:{card:"summary",title:s[0],description:s[1],url:s[8]}}}),o=new de({props:{headings:s[7]}});const I=s[10]["pre-content"],v=z(I,s,s[9],ae),D=s[10].default,b=z(D,s,s[9],null),N=s[10]["post-content"],E=z(N,s,s[9],le);return{c(){O(t.$$.fragment),l=H(),a=k("article"),f=k("header"),r=k("h1"),_=K(s[0]),d=H(),h=k("aside"),O(o.$$.fragment),L=H(),n=k("main"),v&&v.c(),u=H(),b&&b.c(),c=H(),E&&E.c(),this.h()},l(e){T(t.$$.fragment,e),l=M(e),a=w(e,"ARTICLE",{class:!0});var m=y(a);f=w(m,"HEADER",{class:!0});var R=y(f);r=w(R,"H1",{});var C=y(r);_=V(C,s[0]),C.forEach(g),R.forEach(g),d=M(m),h=w(m,"ASIDE",{class:!0});var W=y(h);T(o.$$.fragment,W),W.forEach(g),L=M(m),n=w(m,"MAIN",{class:!0});var B=y(n);v&&v.l(B),u=M(B),b&&b.l(B),c=M(B),E&&E.l(B),B.forEach(g),m.forEach(g),this.h()},h(){q(f,"class",S.header),q(h,"class",S.sidebar),q(n,"class",S.article),q(a,"class",S.body)},m(e,m){F(t,e,m),G(e,l,m),G(e,a,m),p(a,f),p(f,r),p(r,_),p(a,d),p(a,h),F(o,h,null),p(a,L),p(a,n),v&&v.m(n,null),p(n,u),b&&b.m(n,null),p(n,c),E&&E.m(n,null),i=!0},p(e,[m]){const R={};m&1&&(R.title=e[0]),m&14&&(R.meta={description:e[1],keywords:e[2],language:e[3]}),m&383&&(R.openGraph={title:e[0],description:e[1],locale:e[3],type:"article",tag:e[2],section:e[6],site_name:"Eric Rovell",author:"Eric Rovell",url:e[8],"article:published_time":e[4],"article:modified_time":e[5]}),m&259&&(R.twitter={card:"summary",title:e[0],description:e[1],url:e[8]}),t.$set(R),(!i||m&1)&&X(_,e[0]);const C={};m&128&&(C.headings=e[7]),o.$set(C),v&&v.p&&(!i||m&512)&&P(v,I,e,e[9],i?U(I,e[9],m,ke):Q(e[9]),ae),b&&b.p&&(!i||m&512)&&P(b,D,e,e[9],i?U(D,e[9],m,null):Q(e[9]),null),E&&E.p&&(!i||m&512)&&P(E,N,e,e[9],i?U(N,e[9],m,Ee):Q(e[9]),le)},i(e){i||(j(t.$$.fragment,e),j(o.$$.fragment,e),j(v,e),j(b,e),j(E,e),i=!0)},o(e){A(t.$$.fragment,e),A(o.$$.fragment,e),A(v,e),A(b,e),A(E,e),i=!1},d(e){J(t,e),e&&g(l),e&&g(a),J(o),v&&v.d(e),b&&b.d(e),E&&E.d(e)}}}function ye(s,t,l){let a;ee(s,ce,i=>l(8,a=i));let{$$slots:f={},$$scope:r}=t,{title:_}=t,{description:d}=t,{keywords:h}=t,{lang:o}=t,{created:L}=t,{updated:n}=t,{series:u}=t,{toc:c=[]}=t;return s.$$set=i=>{"title"in i&&l(0,_=i.title),"description"in i&&l(1,d=i.description),"keywords"in i&&l(2,h=i.keywords),"lang"in i&&l(3,o=i.lang),"created"in i&&l(4,L=i.created),"updated"in i&&l(5,n=i.updated),"series"in i&&l(6,u=i.series),"toc"in i&&l(7,c=i.toc),"$$scope"in i&&l(9,r=i.$$scope)},[_,d,h,o,L,n,u,c,a,r,f]}class Ie extends Y{constructor(t){super();Z(this,t,ye,we,$,{title:0,description:1,keywords:2,lang:3,created:4,updated:5,series:6,toc:7})}}export{Ie as B};
