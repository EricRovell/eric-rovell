import{S as Y,i as Z,s as $,e as L,w as q,k as B,c as R,a as A,x as G,m as D,d as E,f as ee,b as N,g as P,y as j,H as v,q as I,o as M,B as F,t as S,h as C,j as T,n as fe,p as ce,I as ie,J as K,K as oe,$ as _e,L as V,M as z,N as Q,O as W}from"./vendor-2b63bcc2.js";import{w as ue}from"./timeline.module-b536b1c3.js";import{L as he}from"./Link-fef56dc8.js";import{M as de}from"./Meta-731d21ba.js";import{D as me}from"./Datetime-0deb0687.js";function te(l,t,s){const n=l.slice();return n[2]=t[s].level,n[3]=t[s].title,n[4]=t[s].id,n}function ge(l){let t=l[3]+"",s;return{c(){s=S(t)},l(n){s=C(n,t)},m(n,f){P(n,s,f)},p(n,f){f&1&&t!==(t=n[3]+"")&&T(s,t)},d(n){n&&E(s)}}}function le(l){let t,s,n,f;return s=new he({props:{href:`#${l[4]}`,$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){t=L("li"),q(s.$$.fragment),n=B(),this.h()},l(i){t=R(i,"LI",{style:!0,class:!0});var h=A(t);G(s.$$.fragment,h),n=D(h),h.forEach(E),this.h()},h(){ee(t,"--toc-level",l[2]-2),N(t,"class","svelte-sgea57")},m(i,h){P(i,t,h),j(s,t,null),v(t,n),f=!0},p(i,h){const g={};h&1&&(g.href=`#${i[4]}`),h&129&&(g.$$scope={dirty:h,ctx:i}),s.$set(g),(!f||h&1)&&ee(t,"--toc-level",i[2]-2)},i(i){f||(I(s.$$.fragment,i),f=!0)},o(i){M(s.$$.fragment,i),f=!1},d(i){i&&E(t),F(s)}}}function pe(l){let t,s,n=l[1]("message.toc")+"",f,i,h,g,p=l[0],a=[];for(let _=0;_<p.length;_+=1)a[_]=le(te(l,p,_));const y=_=>M(a[_],1,1,()=>{a[_]=null});return{c(){t=L("nav"),s=L("h2"),f=S(n),i=B(),h=L("ol");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){t=R(_,"NAV",{class:!0});var u=A(t);s=R(u,"H2",{class:!0});var r=A(s);f=C(r,n),r.forEach(E),i=D(u),h=R(u,"OL",{class:!0});var o=A(h);for(let k=0;k<a.length;k+=1)a[k].l(o);o.forEach(E),u.forEach(E),this.h()},h(){N(s,"class","svelte-sgea57"),N(h,"class","svelte-sgea57"),N(t,"class","svelte-sgea57")},m(_,u){P(_,t,u),v(t,s),v(s,f),v(t,i),v(t,h);for(let r=0;r<a.length;r+=1)a[r].m(h,null);g=!0},p(_,[u]){if((!g||u&2)&&n!==(n=_[1]("message.toc")+"")&&T(f,n),u&1){p=_[0];let r;for(r=0;r<p.length;r+=1){const o=te(_,p,r);a[r]?(a[r].p(o,u),I(a[r],1)):(a[r]=le(o),a[r].c(),I(a[r],1),a[r].m(h,null))}for(fe(),r=p.length;r<a.length;r+=1)y(r);ce()}},i(_){if(!g){for(let u=0;u<p.length;u+=1)I(a[u]);g=!0}},o(_){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)M(a[u]);g=!1},d(_){_&&E(t),ie(a,_)}}}function ve(l,t,s){let n;K(l,oe,i=>s(1,n=i));let{headings:f=[]}=t;return l.$$set=i=>{"headings"in i&&s(0,f=i.headings)},[f,n]}class be extends Y{constructor(t){super();Z(this,t,ve,pe,$,{headings:0})}}const Ee="_header_ux4i6_1";var we={header:Ee};function se(l,t,s){const n=l.slice();return n[10]=t[s],n}function ne(l){let t,s=l[10]+"",n;return{c(){t=L("li"),n=S(s)},l(f){t=R(f,"LI",{});var i=A(t);n=C(i,s),i.forEach(E)},m(f,i){P(f,t,i),v(t,n)},p(f,i){i&4&&s!==(s=f[10]+"")&&T(n,s)},d(f){f&&E(t)}}}function ke(l){let t,s,n,f,i,h,g,p,a,y,_,u=l[3](`message.${l[7]}`)+"",r,o,k,b,O=l[2].split(","),d=[];for(let e=0;e<O.length;e+=1)d[e]=ne(se(l,O,e));return k=new me({props:{date:l[6],locale:l[4],options:l[5],relative:!0}}),{c(){t=L("header"),s=L("h1"),n=S(l[0]),f=B(),i=L("p"),h=S(l[1]),g=B(),p=L("footer"),a=L("ul");for(let e=0;e<d.length;e+=1)d[e].c();y=B(),_=L("span"),r=S(u),o=S(": "),q(k.$$.fragment),this.h()},l(e){t=R(e,"HEADER",{class:!0});var c=A(t);s=R(c,"H1",{});var w=A(s);n=C(w,l[0]),w.forEach(E),f=D(c),i=R(c,"P",{});var m=A(i);h=C(m,l[1]),m.forEach(E),g=D(c),p=R(c,"FOOTER",{});var H=A(p);a=R(H,"UL",{});var x=A(a);for(let U=0;U<d.length;U+=1)d[U].l(x);x.forEach(E),y=D(H),_=R(H,"SPAN",{});var J=A(_);r=C(J,u),o=C(J,": "),G(k.$$.fragment,J),J.forEach(E),H.forEach(E),c.forEach(E),this.h()},h(){N(t,"class",we.header)},m(e,c){P(e,t,c),v(t,s),v(s,n),v(t,f),v(t,i),v(i,h),v(t,g),v(t,p),v(p,a);for(let w=0;w<d.length;w+=1)d[w].m(a,null);v(p,y),v(p,_),v(_,r),v(_,o),j(k,_,null),b=!0},p(e,[c]){if((!b||c&1)&&T(n,e[0]),(!b||c&2)&&T(h,e[1]),c&4){O=e[2].split(",");let m;for(m=0;m<O.length;m+=1){const H=se(e,O,m);d[m]?d[m].p(H,c):(d[m]=ne(H),d[m].c(),d[m].m(a,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=O.length}(!b||c&8)&&u!==(u=e[3](`message.${e[7]}`)+"")&&T(r,u);const w={};c&16&&(w.locale=e[4]),k.$set(w)},i(e){b||(I(k.$$.fragment,e),b=!0)},o(e){M(k.$$.fragment,e),b=!1},d(e){e&&E(t),ie(d,e),F(k)}}}function ye(l,t,s){let n,f;K(l,oe,r=>s(3,n=r)),K(l,_e,r=>s(4,f=r));let{title:i}=t,{description:h}=t,{keywords:g=""}=t,{created:p}=t,{updated:a}=t;const y={year:"numeric",month:"short",day:"numeric"},[_,u]=p!==a?[a,"last-updated-at"]:[p,"created-at"];return l.$$set=r=>{"title"in r&&s(0,i=r.title),"description"in r&&s(1,h=r.description),"keywords"in r&&s(2,g=r.keywords),"created"in r&&s(8,p=r.created),"updated"in r&&s(9,a=r.updated)},[i,h,g,n,f,y,_,u,p,a]}class Le extends Y{constructor(t){super();Z(this,t,ye,ke,$,{title:0,description:1,keywords:2,created:8,updated:9})}}const Re="_body_fhccb_5",Ae="_article_fhccb_33",Ie="_sidebar_fhccb_53";var X={body:Re,article:Ae,sidebar:Ie};const Oe=l=>({}),ae=l=>({}),He=l=>({}),re=l=>({});function Me(l){let t,s,n,f,i,h,g,p,a,y,_,u;t=new de({props:{title:l[0],meta:{description:l[1],keywords:l[2],language:l[3]},openGraph:{title:l[0],description:l[1],locale:l[3],type:"article",tag:l[2],section:l[6],site_name:"Eric Rovell",author:"Eric Rovell",url:l[8],"article:published_time":l[4],"article:modified_time":l[5]},twitter:{card:"summary",title:l[0],description:l[1],url:l[8]}}}),f=new Le({props:{title:l[0],description:l[1],keywords:l[2],created:l[4],updated:l[5]}}),g=new be({props:{headings:l[7]}});const r=l[10]["pre-content"],o=V(r,l,l[9],re),k=l[10].default,b=V(k,l,l[9],null),O=l[10]["post-content"],d=V(O,l,l[9],ae);return{c(){q(t.$$.fragment),s=B(),n=L("article"),q(f.$$.fragment),i=B(),h=L("aside"),q(g.$$.fragment),p=B(),a=L("main"),o&&o.c(),y=B(),b&&b.c(),_=B(),d&&d.c(),this.h()},l(e){G(t.$$.fragment,e),s=D(e),n=R(e,"ARTICLE",{class:!0});var c=A(n);G(f.$$.fragment,c),i=D(c),h=R(c,"ASIDE",{class:!0});var w=A(h);G(g.$$.fragment,w),w.forEach(E),p=D(c),a=R(c,"MAIN",{class:!0});var m=A(a);o&&o.l(m),y=D(m),b&&b.l(m),_=D(m),d&&d.l(m),m.forEach(E),c.forEach(E),this.h()},h(){N(h,"class",X.sidebar),N(a,"class",X.article),N(n,"class",X.body)},m(e,c){j(t,e,c),P(e,s,c),P(e,n,c),j(f,n,null),v(n,i),v(n,h),j(g,h,null),v(n,p),v(n,a),o&&o.m(a,null),v(a,y),b&&b.m(a,null),v(a,_),d&&d.m(a,null),u=!0},p(e,[c]){const w={};c&1&&(w.title=e[0]),c&14&&(w.meta={description:e[1],keywords:e[2],language:e[3]}),c&383&&(w.openGraph={title:e[0],description:e[1],locale:e[3],type:"article",tag:e[2],section:e[6],site_name:"Eric Rovell",author:"Eric Rovell",url:e[8],"article:published_time":e[4],"article:modified_time":e[5]}),c&259&&(w.twitter={card:"summary",title:e[0],description:e[1],url:e[8]}),t.$set(w);const m={};c&1&&(m.title=e[0]),c&2&&(m.description=e[1]),c&4&&(m.keywords=e[2]),c&16&&(m.created=e[4]),c&32&&(m.updated=e[5]),f.$set(m);const H={};c&128&&(H.headings=e[7]),g.$set(H),o&&o.p&&(!u||c&512)&&z(o,r,e,e[9],u?W(r,e[9],c,He):Q(e[9]),re),b&&b.p&&(!u||c&512)&&z(b,k,e,e[9],u?W(k,e[9],c,null):Q(e[9]),null),d&&d.p&&(!u||c&512)&&z(d,O,e,e[9],u?W(O,e[9],c,Oe):Q(e[9]),ae)},i(e){u||(I(t.$$.fragment,e),I(f.$$.fragment,e),I(g.$$.fragment,e),I(o,e),I(b,e),I(d,e),u=!0)},o(e){M(t.$$.fragment,e),M(f.$$.fragment,e),M(g.$$.fragment,e),M(o,e),M(b,e),M(d,e),u=!1},d(e){F(t,e),e&&E(s),e&&E(n),F(f),F(g),o&&o.d(e),b&&b.d(e),d&&d.d(e)}}}function Be(l,t,s){let n;K(l,ue,o=>s(8,n=o));let{$$slots:f={},$$scope:i}=t,{title:h}=t,{description:g}=t,{keywords:p}=t,{lang:a}=t,{created:y}=t,{updated:_}=t,{series:u}=t,{toc:r=[]}=t;return l.$$set=o=>{"title"in o&&s(0,h=o.title),"description"in o&&s(1,g=o.description),"keywords"in o&&s(2,p=o.keywords),"lang"in o&&s(3,a=o.lang),"created"in o&&s(4,y=o.created),"updated"in o&&s(5,_=o.updated),"series"in o&&s(6,u=o.series),"toc"in o&&s(7,r=o.toc),"$$scope"in o&&s(9,i=o.$$scope)},[h,g,p,a,y,_,u,r,n,i,f]}class Te extends Y{constructor(t){super();Z(this,t,Be,Me,$,{title:0,description:1,keywords:2,lang:3,created:4,updated:5,series:6,toc:7})}}export{Te as B};
