import{S as V,i as X,s as z,e as L,v as P,j as H,c as j,a as A,w as T,l as M,d as E,a5 as ee,b as S,f as B,x as F,E as v,p as R,n as O,A as q,t as C,g as G,h as N,m as fe,o as ce,F as te,G as K,X as le,H as Q,I as W,J as Y,K as Z}from"./vendor-614e74e4.js";import{w as _e}from"./timeline.module-548b7137.js";import{l as ue}from"./i18n-6ba77132.js";import{L as he}from"./Link-e060064e.js";import{M as de}from"./Meta-97f7a04b.js";import{D as me}from"./Datetime-e705ca00.js";function se(l,t,s){const n=l.slice();return n[2]=t[s].level,n[3]=t[s].title,n[4]=t[s].id,n}function ge(l){let t=l[3]+"",s;return{c(){s=C(t)},l(n){s=G(n,t)},m(n,f){B(n,s,f)},p(n,f){f&1&&t!==(t=n[3]+"")&&N(s,t)},d(n){n&&E(s)}}}function ne(l){let t,s,n,f;return s=new he({props:{href:`#${l[4]}`,$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){t=L("li"),P(s.$$.fragment),n=H(),this.h()},l(r){t=j(r,"LI",{style:!0,class:!0});var h=A(t);T(s.$$.fragment,h),n=M(h),h.forEach(E),this.h()},h(){ee(t,"--toc-level",l[2]-2),S(t,"class","svelte-sgea57")},m(r,h){B(r,t,h),F(s,t,null),v(t,n),f=!0},p(r,h){const g={};h&1&&(g.href=`#${r[4]}`),h&129&&(g.$$scope={dirty:h,ctx:r}),s.$set(g),(!f||h&1)&&ee(t,"--toc-level",r[2]-2)},i(r){f||(R(s.$$.fragment,r),f=!0)},o(r){O(s.$$.fragment,r),f=!1},d(r){r&&E(t),q(s)}}}function pe(l){let t,s,n=l[1]("message.toc")+"",f,r,h,g,p=l[0],a=[];for(let _=0;_<p.length;_+=1)a[_]=ne(se(l,p,_));const y=_=>O(a[_],1,1,()=>{a[_]=null});return{c(){t=L("nav"),s=L("h2"),f=C(n),r=H(),h=L("ol");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){t=j(_,"NAV",{class:!0});var u=A(t);s=j(u,"H2",{class:!0});var i=A(s);f=G(i,n),i.forEach(E),r=M(u),h=j(u,"OL",{class:!0});var o=A(h);for(let k=0;k<a.length;k+=1)a[k].l(o);o.forEach(E),u.forEach(E),this.h()},h(){S(s,"class","svelte-sgea57"),S(h,"class","svelte-sgea57"),S(t,"class","svelte-sgea57")},m(_,u){B(_,t,u),v(t,s),v(s,f),v(t,r),v(t,h);for(let i=0;i<a.length;i+=1)a[i].m(h,null);g=!0},p(_,[u]){if((!g||u&2)&&n!==(n=_[1]("message.toc")+"")&&N(f,n),u&1){p=_[0];let i;for(i=0;i<p.length;i+=1){const o=se(_,p,i);a[i]?(a[i].p(o,u),R(a[i],1)):(a[i]=ne(o),a[i].c(),R(a[i],1),a[i].m(h,null))}for(fe(),i=p.length;i<a.length;i+=1)y(i);ce()}},i(_){if(!g){for(let u=0;u<p.length;u+=1)R(a[u]);g=!0}},o(_){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)O(a[u]);g=!1},d(_){_&&E(t),te(a,_)}}}function ve(l,t,s){let n;K(l,le,r=>s(1,n=r));let{headings:f=[]}=t;return l.$$set=r=>{"headings"in r&&s(0,f=r.headings)},[f,n]}class be extends V{constructor(t){super();X(this,t,ve,pe,z,{headings:0})}}const Ee="_header_ux4i6_1";var we={header:Ee};function ae(l,t,s){const n=l.slice();return n[10]=t[s],n}function ie(l){let t,s=l[10]+"",n;return{c(){t=L("li"),n=C(s)},l(f){t=j(f,"LI",{});var r=A(t);n=G(r,s),r.forEach(E)},m(f,r){B(f,t,r),v(t,n)},p(f,r){r&4&&s!==(s=f[10]+"")&&N(n,s)},d(f){f&&E(t)}}}function ke(l){let t,s,n,f,r,h,g,p,a,y,_,u=l[3](`message.${l[7]}`)+"",i,o,k,b,I=l[2].split(","),d=[];for(let e=0;e<I.length;e+=1)d[e]=ie(ae(l,I,e));return k=new me({props:{date:l[6],locale:l[4],options:l[5],relative:!0}}),{c(){t=L("header"),s=L("h1"),n=C(l[0]),f=H(),r=L("p"),h=C(l[1]),g=H(),p=L("footer"),a=L("ul");for(let e=0;e<d.length;e+=1)d[e].c();y=H(),_=L("span"),i=C(u),o=C(": "),P(k.$$.fragment),this.h()},l(e){t=j(e,"HEADER",{class:!0});var c=A(t);s=j(c,"H1",{});var w=A(s);n=G(w,l[0]),w.forEach(E),f=M(c),r=j(c,"P",{});var m=A(r);h=G(m,l[1]),m.forEach(E),g=M(c),p=j(c,"FOOTER",{});var D=A(p);a=j(D,"UL",{});var x=A(a);for(let U=0;U<d.length;U+=1)d[U].l(x);x.forEach(E),y=M(D),_=j(D,"SPAN",{});var J=A(_);i=G(J,u),o=G(J,": "),T(k.$$.fragment,J),J.forEach(E),D.forEach(E),c.forEach(E),this.h()},h(){S(t,"class",we.header)},m(e,c){B(e,t,c),v(t,s),v(s,n),v(t,f),v(t,r),v(r,h),v(t,g),v(t,p),v(p,a);for(let w=0;w<d.length;w+=1)d[w].m(a,null);v(p,y),v(p,_),v(_,i),v(_,o),F(k,_,null),b=!0},p(e,[c]){if((!b||c&1)&&N(n,e[0]),(!b||c&2)&&N(h,e[1]),c&4){I=e[2].split(",");let m;for(m=0;m<I.length;m+=1){const D=ae(e,I,m);d[m]?d[m].p(D,c):(d[m]=ie(D),d[m].c(),d[m].m(a,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=I.length}(!b||c&8)&&u!==(u=e[3](`message.${e[7]}`)+"")&&N(i,u);const w={};c&16&&(w.locale=e[4]),k.$set(w)},i(e){b||(R(k.$$.fragment,e),b=!0)},o(e){O(k.$$.fragment,e),b=!1},d(e){e&&E(t),te(d,e),q(k)}}}function ye(l,t,s){let n,f;K(l,le,i=>s(3,n=i)),K(l,ue,i=>s(4,f=i));let{title:r}=t,{description:h}=t,{keywords:g=""}=t,{created:p}=t,{updated:a}=t;const y={year:"numeric",month:"short",day:"numeric"},[_,u]=p!==a?[a,"last-updated-at"]:[p,"created-at"];return l.$$set=i=>{"title"in i&&s(0,r=i.title),"description"in i&&s(1,h=i.description),"keywords"in i&&s(2,g=i.keywords),"created"in i&&s(8,p=i.created),"updated"in i&&s(9,a=i.updated)},[r,h,g,n,f,y,_,u,p,a]}class Le extends V{constructor(t){super();X(this,t,ye,ke,z,{title:0,description:1,keywords:2,created:8,updated:9})}}const je="_body_fhccb_5",Ae="_article_fhccb_33",Re="_sidebar_fhccb_53";var $={body:je,article:Ae,sidebar:Re};const Ie=l=>({}),re=l=>({}),De=l=>({}),oe=l=>({});function He(l){let t,s,n,f,r,h,g,p,a,y,_,u;t=new de({props:{title:l[0],meta:{description:l[1],keywords:l[2],language:l[3]},openGraph:{title:l[0],description:l[1],locale:l[3],type:"article",tag:l[2],section:l[6],site_name:"Eric Rovell",author:"Eric Rovell",url:l[8],"article:published_time":l[4],"article:modified_time":l[5]},twitter:{card:"summary",title:l[0],description:l[1],url:l[8]}}}),f=new Le({props:{title:l[0],description:l[1],keywords:l[2],created:l[4],updated:l[5]}}),g=new be({props:{headings:l[7]}});const i=l[10]["pre-content"],o=Q(i,l,l[9],oe),k=l[10].default,b=Q(k,l,l[9],null),I=l[10]["post-content"],d=Q(I,l,l[9],re);return{c(){P(t.$$.fragment),s=H(),n=L("article"),P(f.$$.fragment),r=H(),h=L("aside"),P(g.$$.fragment),p=H(),a=L("main"),o&&o.c(),y=H(),b&&b.c(),_=H(),d&&d.c(),this.h()},l(e){T(t.$$.fragment,e),s=M(e),n=j(e,"ARTICLE",{class:!0});var c=A(n);T(f.$$.fragment,c),r=M(c),h=j(c,"ASIDE",{class:!0});var w=A(h);T(g.$$.fragment,w),w.forEach(E),p=M(c),a=j(c,"MAIN",{class:!0});var m=A(a);o&&o.l(m),y=M(m),b&&b.l(m),_=M(m),d&&d.l(m),m.forEach(E),c.forEach(E),this.h()},h(){S(h,"class",$.sidebar),S(a,"class",$.article),S(n,"class",$.body)},m(e,c){F(t,e,c),B(e,s,c),B(e,n,c),F(f,n,null),v(n,r),v(n,h),F(g,h,null),v(n,p),v(n,a),o&&o.m(a,null),v(a,y),b&&b.m(a,null),v(a,_),d&&d.m(a,null),u=!0},p(e,[c]){const w={};c&1&&(w.title=e[0]),c&14&&(w.meta={description:e[1],keywords:e[2],language:e[3]}),c&383&&(w.openGraph={title:e[0],description:e[1],locale:e[3],type:"article",tag:e[2],section:e[6],site_name:"Eric Rovell",author:"Eric Rovell",url:e[8],"article:published_time":e[4],"article:modified_time":e[5]}),c&259&&(w.twitter={card:"summary",title:e[0],description:e[1],url:e[8]}),t.$set(w);const m={};c&1&&(m.title=e[0]),c&2&&(m.description=e[1]),c&4&&(m.keywords=e[2]),c&16&&(m.created=e[4]),c&32&&(m.updated=e[5]),f.$set(m);const D={};c&128&&(D.headings=e[7]),g.$set(D),o&&o.p&&(!u||c&512)&&W(o,i,e,e[9],u?Z(i,e[9],c,De):Y(e[9]),oe),b&&b.p&&(!u||c&512)&&W(b,k,e,e[9],u?Z(k,e[9],c,null):Y(e[9]),null),d&&d.p&&(!u||c&512)&&W(d,I,e,e[9],u?Z(I,e[9],c,Ie):Y(e[9]),re)},i(e){u||(R(t.$$.fragment,e),R(f.$$.fragment,e),R(g.$$.fragment,e),R(o,e),R(b,e),R(d,e),u=!0)},o(e){O(t.$$.fragment,e),O(f.$$.fragment,e),O(g.$$.fragment,e),O(o,e),O(b,e),O(d,e),u=!1},d(e){q(t,e),e&&E(s),e&&E(n),q(f),q(g),o&&o.d(e),b&&b.d(e),d&&d.d(e)}}}function Me(l,t,s){let n;K(l,_e,o=>s(8,n=o));let{$$slots:f={},$$scope:r}=t,{title:h}=t,{description:g}=t,{keywords:p}=t,{lang:a}=t,{created:y}=t,{updated:_}=t,{series:u}=t,{toc:i=[]}=t;return l.$$set=o=>{"title"in o&&s(0,h=o.title),"description"in o&&s(1,g=o.description),"keywords"in o&&s(2,p=o.keywords),"lang"in o&&s(3,a=o.lang),"created"in o&&s(4,y=o.created),"updated"in o&&s(5,_=o.updated),"series"in o&&s(6,u=o.series),"toc"in o&&s(7,i=o.toc),"$$scope"in o&&s(9,r=o.$$scope)},[h,g,p,a,y,_,u,i,n,r,f]}class Pe extends V{constructor(t){super();X(this,t,Me,He,z,{title:0,description:1,keywords:2,lang:3,created:4,updated:5,series:6,toc:7})}}export{Pe as B};
