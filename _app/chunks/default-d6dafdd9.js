import{S as M,i as Z,s as S,P as d,t as V,Q as g,a as b,g as y,d as h,f as v,D as k,h as B,b as r,l as w,E as A}from"./vendor-2de8850f.js";import"./timeline.module-47c77b75.js";function L(a){let e,i;return{c(){e=d("title"),i=V(a[1])},l(n){e=g(n,"title",{});var u=b(e);i=y(u,a[1]),u.forEach(h)},m(n,u){v(n,e,u),k(e,i)},p(n,u){u&2&&B(i,n[1])},d(n){n&&h(e)}}}function H(a){let e;return{c(){e=d("path"),this.h()},l(i){e=g(i,"path",{d:!0}),b(e).forEach(h),this.h()},h(){r(e,"d",a[3])},m(i,n){v(i,e,n)},p(i,n){n&8&&r(e,"d",i[3])},d(i){i&&h(e)}}}function C(a){let e;return{c(){e=d("g")},l(i){e=g(i,"g",{});var n=b(e);n.forEach(h)},m(i,n){v(i,e,n),e.innerHTML=a[4]},p(i,n){n&16&&(e.innerHTML=i[4])},d(i){i&&h(e)}}}function E(a){let e,i,n,u,m,t=a[1]&&L(a),f=a[3]&&H(a),s=a[4]&&C(a);return{c(){e=d("svg"),t&&t.c(),i=w(),f&&f.c(),n=w(),s&&s.c(),this.h()},l(l){e=g(l,"svg",{xmlns:!0,id:!0,viewBox:!0,style:!0,width:!0,height:!0,"aria-labelledby":!0,role:!0,class:!0});var o=b(e);t&&t.l(o),i=w(),f&&f.l(o),n=w(),s&&s.l(o),o.forEach(h),this.h()},h(){var l;r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"id",a[0]),r(e,"viewBox",a[2]),r(e,"style",u=`--icon-margin: ${a[7]}; ${a[5]?`--icon-color: var(--color-${a[5]});`:""} ${a[8]}`),r(e,"width",a[6]),r(e,"height",a[6]),r(e,"aria-labelledby",m=(l=a[1])!=null?l:null),r(e,"role","presentation"),r(e,"class","svelte-1c65o49")},m(l,o){v(l,e,o),t&&t.m(e,null),k(e,i),f&&f.m(e,null),k(e,n),s&&s.m(e,null)},p(l,[o]){var _;l[1]?t?t.p(l,o):(t=L(l),t.c(),t.m(e,i)):t&&(t.d(1),t=null),l[3]?f?f.p(l,o):(f=H(l),f.c(),f.m(e,n)):f&&(f.d(1),f=null),l[4]?s?s.p(l,o):(s=C(l),s.c(),s.m(e,null)):s&&(s.d(1),s=null),o&1&&r(e,"id",l[0]),o&4&&r(e,"viewBox",l[2]),o&416&&u!==(u=`--icon-margin: ${l[7]}; ${l[5]?`--icon-color: var(--color-${l[5]});`:""} ${l[8]}`)&&r(e,"style",u),o&64&&r(e,"width",l[6]),o&64&&r(e,"height",l[6]),o&2&&m!==(m=(_=l[1])!=null?_:null)&&r(e,"aria-labelledby",m)},i:A,o:A,d(l){l&&h(e),t&&t.d(),f&&f.d(),s&&s.d()}}}function z(a,e,i){let{id:n=void 0}=e,{title:u=null}=e,{viewBox:m="0 0 100 100"}=e,{path:t=void 0}=e,{markup:f=void 0}=e,{color:s=""}=e,{size:l="1em"}=e,{margin:o="0"}=e,{style:_=""}=e;return a.$$set=c=>{"id"in c&&i(0,n=c.id),"title"in c&&i(1,u=c.title),"viewBox"in c&&i(2,m=c.viewBox),"path"in c&&i(3,t=c.path),"markup"in c&&i(4,f=c.markup),"color"in c&&i(5,s=c.color),"size"in c&&i(6,l=c.size),"margin"in c&&i(7,o=c.margin),"style"in c&&i(8,_=c.style)},[n,u,m,t,f,s,l,o,_]}class I extends M{constructor(e){super();Z(this,e,z,E,S,{id:0,title:1,viewBox:2,path:3,markup:4,color:5,size:6,margin:7,style:8})}}const q="M99,50c0,21.49,0,33.43-7.8,41.23C84.94,97.53,76,98.75,61.46,99a2.27,2.27,0,0,1-.13-.77c0-.48,0-2.17,0-4.44,0-4.58,0-11.5,0-15.4,0-4.08-1.44-6.75-3.06-8.1C68.37,69.2,78.93,65.5,78.93,48.7A16.57,16.57,0,0,0,74.28,37c.47-1.11,2-5.55-.44-11.57,0,0-3.78-1.18-12.4,4.48a44.13,44.13,0,0,0-22.59,0c-8.62-5.66-12.41-4.48-12.41-4.48C24,31.42,25.53,35.86,26,37A16.64,16.64,0,0,0,21.35,48.7c0,16.76,10.54,20.51,20.56,21.62a9.13,9.13,0,0,0-2.86,5.84c-2.58,1.12-9.12,3-13.14-3.63,0,0-2.38-4.2-6.91-4.51,0,0-4.41-.06-.32,2.65,0,0,3,1.35,5,6.4,0,0,2.65,8.5,15.2,5.87,0,3.64.06,14.25.06,15.28a2.31,2.31,0,0,1-.12.78c-14.68-.23-23.73-1.42-30.06-7.75C1,83.45,1,71.51,1,50S1,16.6,8.78,8.8,28.52,1,50,1,83.43,1,91.22,8.8,99,28.54,99,50Z",D="M95,14a20.76,20.76,0,0,0-9-9C78.25,1,67.17,1,50,1S21.75,1,14,5a20.76,20.76,0,0,0-9,9C1,21.75,1,32.83,1,50S1,78.25,5,86a20.76,20.76,0,0,0,9,9c7.73,4,18.81,4,36,4s28.25,0,36-4a20.76,20.76,0,0,0,9-9c4-7.73,4-18.81,4-36S99,21.75,95,14ZM50,33.12v45H21.88V21.88H78.12V78.12H66.88v-45Z",G="M42.14,100h1.19a2.93,2.93,0,0,0,3-2.89V63.42L67.86,96.88a3,3,0,0,0,4.1.91l1-.61a2.86,2.86,0,0,0,.94-4L50.15,56.34a8.52,8.52,0,0,0,1.59-5,8.66,8.66,0,0,0-1.62-5L33.81,50.25a8.32,8.32,0,0,0-.07,1.12,8.61,8.61,0,0,0,1.59,5L11.57,93.21a2.85,2.85,0,0,0,.94,4l1,.61a3,3,0,0,0,4.1-.91L39.17,63.42V97.11A2.93,2.93,0,0,0,42.14,100ZM6.68,48.63c.13,0,13.87-3.26,13.87-3.26A33.61,33.61,0,0,1,16.72,36a33.16,33.16,0,0,1-1-10L2.18,29.15C0,29.67-.65,34.43.7,39.8,2,44.85,4.56,48.63,6.68,48.63Zm34-33.11L22.29,19.88a2.94,2.94,0,0,0-1.72,1.31,6.79,6.79,0,0,0-.88,2,10.86,10.86,0,0,0-.37,1.87,27.9,27.9,0,0,0,.85,10.1,28.61,28.61,0,0,0,4,9.33A12.05,12.05,0,0,0,25.44,46a7.18,7.18,0,0,0,1.72,1.38,3.33,3.33,0,0,0,1.58.45,2.1,2.1,0,0,0,.56-.07l17.53-4.17.92-.22a38.69,38.69,0,0,1-6-13.45,38.65,38.65,0,0,1-1.11-14.18C40.63,15.66,40.64,15.59,40.66,15.52ZM99.91,31.67,92.5,2.21A3,3,0,0,0,89.61,0a2.92,2.92,0,0,0-.71.08l-41,9.78a3,3,0,0,0-1.33.69,5.65,5.65,0,0,0-1.48,2.14,10.68,10.68,0,0,0-.61,1.93c-.85,3.6-.66,8.85.76,14.46s3.84,10.57,6.36,13.36a11.11,11.11,0,0,0,1.54,1.42,2.75,2.75,0,0,0,.44.28,5.22,5.22,0,0,0,3.78.49l40.41-9.48A2.86,2.86,0,0,0,99.91,31.67Z",N="M91.2,8.8C83.41,1,71.47,1,50,1S16.59,1,8.8,8.8,1,28.53,1,50,1,83.41,8.8,91.2,28.53,99,50,99s33.41,0,41.2-7.8S99,71.47,99,50,99,16.59,91.2,8.8Zm-16.81,66A10.26,10.26,0,0,1,64.14,85H25.25A10.26,10.26,0,0,1,15,74.75V35.86A10.26,10.26,0,0,1,25.25,25.61H46.46a3.18,3.18,0,1,1,0,6.36H25.25a3.89,3.89,0,0,0-3.89,3.89V74.75a3.9,3.9,0,0,0,3.89,3.89H64.14A3.89,3.89,0,0,0,68,74.75V53.54a3.18,3.18,0,1,1,6.36,0ZM85,39.39a3.18,3.18,0,1,1-6.36,0V25.86L45.18,59.32a3.18,3.18,0,0,1-4.5-4.5L74.14,21.36H60.61a3.18,3.18,0,1,1,0-6.36H81.82a3.06,3.06,0,0,1,1.18.23,3,3,0,0,1,1,.69h0a3.21,3.21,0,0,1,.68,1A3.31,3.31,0,0,1,85,18.18Z";export{I,q as a,D as b,N as c,G as i};
