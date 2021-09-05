import{S as n,i as a,s,B as t,j as p,m as o,o as e,p as c,q as r,x as l,u,v as k,X as i,e as m,t as f,k as h,c as g,a as d,g as b,d as $,n as E,b as v,f as y,E as w,R as P}from"../../chunks/vendor-c811b0ff.js";import{B as _,M as S}from"../../chunks/Math-ed62392c.js";import"../../chunks/theme-a188ce45.js";function O(n){let a,s,t,c,r,i,_,O,T,H,M,R,j,x,N,G,L,B,J,Z,q,X,z,A,C,D,F,I,K,Q,U,V,W,Y,nn,an,sn,tn,pn,on,en,cn,rn,ln,un,kn,mn,fn,hn,gn,dn,bn,$n,En,vn,yn,wn,Pn,_n,Sn,On,Tn,Hn,Mn,Rn,jn,xn,Nn,Gn,Ln,Bn,Jn,Zn,qn,Xn,zn,An,Cn,Dn,Fn,In,Kn;return En=new S({props:{math:String.raw`3, 6, 9, 12, 15, 18...`}}),_n=new S({props:{math:String.raw`3 \times (1 + 2 + 3 + 4 + ... + N)`}}),Mn=new S({props:{math:String.raw`S_n = \frac{a_1 + a_n}{2} \times n`}}),{c(){a=m("p"),s=m("em"),t=f("Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23."),c=h(),r=m("p"),i=m("em"),_=f("Найдите сумму всех чисел меньше 1000, кратных 3 или 5."),O=h(),T=m("h2"),H=f("Вычислительный подход"),M=h(),R=m("p"),j=f("Попробуем решить задачу, вычислив сумму всех множителей напрямую, всё же тысяча - смехотворный объем работы для современной вычислительной техники."),x=h(),N=m("p"),G=f("Для решения задачи создадим переменную для хранения значения суммы кратных чисел. С помощью цикла, совершим обход натуральных чисел, проверяя делимость на 3 или 5 остатком от деления. Если остаток равен нулю - добавляем значение к нашей переменной. После окончания обхода задача решена."),L=h(),B=m("h3"),J=f("Пример реализации на Python"),Z=h(),q=m("pre"),X=h(),z=m("p"),A=f("Можно попробовать решить задачу с помощью "),C=m("strong"),D=f("list comprehension"),F=f(":"),I=h(),K=m("pre"),Q=h(),U=m("h3"),V=f("Пример реализации на JavaScript"),W=h(),Y=m("pre"),nn=h(),an=m("h2"),sn=f("Поиск оптимального решения"),tn=h(),pn=m("p"),on=f("Пусть прямолинейное решение и работает молниеносно, сложность всё же составляет "),en=m("strong"),cn=f("O(n)"),rn=f(", другими словами, чем больше поле поиска, тем больше проверок. Попробуем решить поставленную задачу другим, более оптимальным способом со сложностью "),ln=m("strong"),un=f("O(1)"),kn=f(". В этом нам поможет школьный курс алгебры!"),mn=h(),fn=m("p"),hn=f("Выписав кратные для 3, заметим, что они образуют "),gn=m("em"),dn=f("арифметическую прогрессию"),bn=f(":"),$n=h(),p(En.$$.fragment),vn=h(),yn=m("p"),wn=f("Её можно заметно упростить, вынеся тройку за скобку:"),Pn=h(),p(_n.$$.fragment),Sn=h(),On=m("p"),Tn=f("Для нахождения суммы в скобках понадобится формула суммы арифметической прогрессии, запишем её:"),Hn=h(),p(Mn.$$.fragment),Rn=h(),jn=m("p"),xn=f("С помощью формулы суммы, можем найти сумму всех кратных чисел 3 и 5 по отдельности, а потом сложить. Верно? Не совсем. Торопясь, можно упустить небольшую деталь. Некоторые числа являются кратными как для 3, так и для 5. Например, 15. Говоря на математическом языке, множества кратных чисел имеют пересечение. Взяв сумму двух прогрессий, некоторые значения дублируются."),Nn=h(),Gn=m("p"),Ln=f("Воспользуемся тем же оружием, найдем сумму прогрессии чисел, кратных 3 и 5. Полученную сумму вычтем из общей суммы."),Bn=h(),Jn=m("p"),Zn=f("В итоге, мы получили математическое выражение для решения задачи. Сложность алгоритма "),qn=m("strong"),Xn=f("O(1)"),zn=f("!"),An=h(),Cn=m("h2"),Dn=f("Реализация на Python"),Fn=h(),In=m("pre"),this.h()},l(n){a=g(n,"P",{});var p=d(a);s=g(p,"EM",{});var e=d(s);t=b(e,"Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23."),e.forEach($),p.forEach($),c=E(n),r=g(n,"P",{});var l=d(r);i=g(l,"EM",{});var u=d(i);_=b(u,"Найдите сумму всех чисел меньше 1000, кратных 3 или 5."),u.forEach($),l.forEach($),O=E(n),T=g(n,"H2",{});var k=d(T);H=b(k,"Вычислительный подход"),k.forEach($),M=E(n),R=g(n,"P",{});var m=d(R);j=b(m,"Попробуем решить задачу, вычислив сумму всех множителей напрямую, всё же тысяча - смехотворный объем работы для современной вычислительной техники."),m.forEach($),x=E(n),N=g(n,"P",{});var f=d(N);G=b(f,"Для решения задачи создадим переменную для хранения значения суммы кратных чисел. С помощью цикла, совершим обход натуральных чисел, проверяя делимость на 3 или 5 остатком от деления. Если остаток равен нулю - добавляем значение к нашей переменной. После окончания обхода задача решена."),f.forEach($),L=E(n),B=g(n,"H3",{});var h=d(B);J=b(h,"Пример реализации на Python"),h.forEach($),Z=E(n),q=g(n,"PRE",{class:!0}),d(q).forEach($),X=E(n),z=g(n,"P",{});var v=d(z);A=b(v,"Можно попробовать решить задачу с помощью "),C=g(v,"STRONG",{});var y=d(C);D=b(y,"list comprehension"),y.forEach($),F=b(v,":"),v.forEach($),I=E(n),K=g(n,"PRE",{class:!0}),d(K).forEach($),Q=E(n),U=g(n,"H3",{});var w=d(U);V=b(w,"Пример реализации на JavaScript"),w.forEach($),W=E(n),Y=g(n,"PRE",{class:!0}),d(Y).forEach($),nn=E(n),an=g(n,"H2",{});var P=d(an);sn=b(P,"Поиск оптимального решения"),P.forEach($),tn=E(n),pn=g(n,"P",{});var S=d(pn);on=b(S,"Пусть прямолинейное решение и работает молниеносно, сложность всё же составляет "),en=g(S,"STRONG",{});var Kn=d(en);cn=b(Kn,"O(n)"),Kn.forEach($),rn=b(S,", другими словами, чем больше поле поиска, тем больше проверок. Попробуем решить поставленную задачу другим, более оптимальным способом со сложностью "),ln=g(S,"STRONG",{});var Qn=d(ln);un=b(Qn,"O(1)"),Qn.forEach($),kn=b(S,". В этом нам поможет школьный курс алгебры!"),S.forEach($),mn=E(n),fn=g(n,"P",{});var Un=d(fn);hn=b(Un,"Выписав кратные для 3, заметим, что они образуют "),gn=g(Un,"EM",{});var Vn=d(gn);dn=b(Vn,"арифметическую прогрессию"),Vn.forEach($),bn=b(Un,":"),Un.forEach($),$n=E(n),o(En.$$.fragment,n),vn=E(n),yn=g(n,"P",{});var Wn=d(yn);wn=b(Wn,"Её можно заметно упростить, вынеся тройку за скобку:"),Wn.forEach($),Pn=E(n),o(_n.$$.fragment,n),Sn=E(n),On=g(n,"P",{});var Yn=d(On);Tn=b(Yn,"Для нахождения суммы в скобках понадобится формула суммы арифметической прогрессии, запишем её:"),Yn.forEach($),Hn=E(n),o(Mn.$$.fragment,n),Rn=E(n),jn=g(n,"P",{});var na=d(jn);xn=b(na,"С помощью формулы суммы, можем найти сумму всех кратных чисел 3 и 5 по отдельности, а потом сложить. Верно? Не совсем. Торопясь, можно упустить небольшую деталь. Некоторые числа являются кратными как для 3, так и для 5. Например, 15. Говоря на математическом языке, множества кратных чисел имеют пересечение. Взяв сумму двух прогрессий, некоторые значения дублируются."),na.forEach($),Nn=E(n),Gn=g(n,"P",{});var aa=d(Gn);Ln=b(aa,"Воспользуемся тем же оружием, найдем сумму прогрессии чисел, кратных 3 и 5. Полученную сумму вычтем из общей суммы."),aa.forEach($),Bn=E(n),Jn=g(n,"P",{});var sa=d(Jn);Zn=b(sa,"В итоге, мы получили математическое выражение для решения задачи. Сложность алгоритма "),qn=g(sa,"STRONG",{});var ta=d(qn);Xn=b(ta,"O(1)"),ta.forEach($),zn=b(sa,"!"),sa.forEach($),An=E(n),Cn=g(n,"H2",{});var pa=d(Cn);Dn=b(pa,"Реализация на Python"),pa.forEach($),Fn=E(n),In=g(n,"PRE",{class:!0}),d(In).forEach($),this.h()},h(){v(q,"class","language-python"),v(K,"class","language-python"),v(Y,"class","language-js"),v(In,"class","language-python")},m(n,p){y(n,a,p),w(a,s),w(s,t),y(n,c,p),y(n,r,p),w(r,i),w(i,_),y(n,O,p),y(n,T,p),w(T,H),y(n,M,p),y(n,R,p),w(R,j),y(n,x,p),y(n,N,p),w(N,G),y(n,L,p),y(n,B,p),w(B,J),y(n,Z,p),y(n,q,p),q.innerHTML='<code class="language-python"><span class="token keyword">def</span> <span class="token function">multiples_sum</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  total <span class="token operator">=</span> <span class="token number">0</span>\n  <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>\n      total <span class="token operator">+=</span> number\n  <span class="token keyword">return</span> number</code>',y(n,X,p),y(n,z,p),w(z,A),w(z,C),w(C,D),w(z,F),y(n,I,p),y(n,K,p),K.innerHTML='<code class="language-python">  multiples_sum <span class="token operator">=</span> <span class="token keyword">lambda</span> limit<span class="token punctuation">:</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span> number <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span> <span class="token keyword">if</span> number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">)</span></code>',y(n,Q,p),y(n,U,p),w(U,V),y(n,W,p),y(n,Y,p),Y.innerHTML='<code class="language-js"><span class="token keyword">function</span> <span class="token function">multiplesSum</span><span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> number <span class="token operator">&lt;</span> limit<span class="token punctuation">;</span> number<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>total <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> total <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      total <span class="token operator">+=</span> number<span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span>\n  <span class="token keyword">return</span> total<span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',y(n,nn,p),y(n,an,p),w(an,sn),y(n,tn,p),y(n,pn,p),w(pn,on),w(pn,en),w(en,cn),w(pn,rn),w(pn,ln),w(ln,un),w(pn,kn),y(n,mn,p),y(n,fn,p),w(fn,hn),w(fn,gn),w(gn,dn),w(fn,bn),y(n,$n,p),e(En,n,p),y(n,vn,p),y(n,yn,p),w(yn,wn),y(n,Pn,p),e(_n,n,p),y(n,Sn,p),y(n,On,p),w(On,Tn),y(n,Hn,p),e(Mn,n,p),y(n,Rn,p),y(n,jn,p),w(jn,xn),y(n,Nn,p),y(n,Gn,p),w(Gn,Ln),y(n,Bn,p),y(n,Jn,p),w(Jn,Zn),w(Jn,qn),w(qn,Xn),w(Jn,zn),y(n,An,p),y(n,Cn,p),w(Cn,Dn),y(n,Fn,p),y(n,In,p),In.innerHTML='<code class="language-python">arithmetic_sum<span class="token punctuation">(</span>divisor<span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  last_multiple <span class="token operator">=</span> floor<span class="token punctuation">(</span><span class="token punctuation">(</span>limit <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> divisor<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> divisor <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> last_multiple<span class="token punctuation">)</span> <span class="token operator">*</span> last_multiple <span class="token operator">/</span> <span class="token number">2</span>\n\nmultiples_sum<span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  <span class="token keyword">return</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span> <span class="token operator">+</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span> <span class="token operator">-</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span></code>',Kn=!0},p:P,i(n){Kn||(l(En.$$.fragment,n),l(_n.$$.fragment,n),l(Mn.$$.fragment,n),Kn=!0)},o(n){u(En.$$.fragment,n),u(_n.$$.fragment,n),u(Mn.$$.fragment,n),Kn=!1},d(n){n&&$(a),n&&$(c),n&&$(r),n&&$(O),n&&$(T),n&&$(M),n&&$(R),n&&$(x),n&&$(N),n&&$(L),n&&$(B),n&&$(Z),n&&$(q),n&&$(X),n&&$(z),n&&$(I),n&&$(K),n&&$(Q),n&&$(U),n&&$(W),n&&$(Y),n&&$(nn),n&&$(an),n&&$(tn),n&&$(pn),n&&$(mn),n&&$(fn),n&&$($n),k(En,n),n&&$(vn),n&&$(yn),n&&$(Pn),k(_n,n),n&&$(Sn),n&&$(On),n&&$(Hn),k(Mn,n),n&&$(Rn),n&&$(jn),n&&$(Nn),n&&$(Gn),n&&$(Bn),n&&$(Jn),n&&$(An),n&&$(Cn),n&&$(Fn),n&&$(In)}}}function T(n){let a,s;const i=[n[0],H];let m={$$slots:{default:[O]},$$scope:{ctx:n}};for(let p=0;p<i.length;p+=1)m=t(m,i[p]);return a=new _({props:m}),{c(){p(a.$$.fragment)},l(n){o(a.$$.fragment,n)},m(n,t){e(a,n,t),s=!0},p(n,[s]){const t=1&s?c(i,[1&s&&r(n[0]),0&s&&r(H)]):{};2&s&&(t.$$scope={dirty:s,ctx:n}),a.$set(t)},i(n){s||(l(a.$$.fragment,n),s=!0)},o(n){u(a.$$.fragment,n),s=!1},d(n){k(a,n)}}}const H={title:"Проект Эйлера #1: Числа, кратные 3 или 5",series:"Проект Эйлера",lang:"ru",created:"2021-06-10T00:00:00.000Z",updated:"2021-08-26T00:00:00.000Z",slug:"project-euler-001-ru",layout:"blogpost"};function M(n,a,s){return n.$$set=n=>{s(0,a=t(t({},a),i(n)))},[a=i(a)]}class R extends n{constructor(n){super(),a(this,n,M,T,s,{})}}export{R as default,H as metadata};