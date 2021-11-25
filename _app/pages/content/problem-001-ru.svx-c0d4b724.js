import{S as Oa,i as Ta,s as za,B as Fs,j as ua,m as ka,o as fa,p as Na,q as ha,x as _a,u as ya,v as va,a2 as ba,e as l,t as o,k as u,a3 as Ks,c as m,a as r,g as c,d as a,n as k,a4 as Qs,b as Y,f as t,E as e}from"../../chunks/vendor-1f561ed5.js";import{P as Ra}from"../../chunks/ProjectEuler-98380253.js";import{L as Ga}from"../../chunks/Link-aba92704.js";import"../../chunks/timeline.module-0544b479.js";import"../../chunks/i18n-f3e80449.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/katex.min-901af895.js";function qa(g){let p;return{c(){p=o("Project Euler, Problem 1: Multiples of 3 or 5")},l(f){p=c(f,"Project Euler, Problem 1: Multiples of 3 or 5")},m(f,h){t(f,p,h)},d(f){f&&a(p)}}}function Ca(g){let p,f,h,y,i,_,v,ds,ss,S,Es,as,P,wa=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">multiples_sum</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
  total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
      total <span class="token operator">+=</span> number
  <span class="token keyword">return</span> number</code>`,ns,w,xs,I,Ps,$s,ts,$,da='<code class="language-python">  multiples_sum <span class="token operator">=</span> <span class="token keyword">lambda</span> limit<span class="token punctuation">:</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span> number <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span> <span class="token keyword">if</span> number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">)</span></code>',ps,H,js,es,j,Ea=`<code class="language-js"><span class="token keyword">function</span> <span class="token function">multiplesSum</span><span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> number <span class="token operator">&lt;</span> limit<span class="token punctuation">;</span> number<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>total <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> total <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      total <span class="token operator">+=</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,ls,L,Ms,os,b,Ss,J,Hs,Ls,Z,Os,Ts,ms,d,zs,B,Ns,Rs,rs,A,xa='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mn>3</mn><mo separator="true">,</mo><mn>6</mn><mo separator="true">,</mo><mn>9</mn><mo separator="true">,</mo><mn>12</mn><mo separator="true">,</mo><mn>15</mn><mo separator="true">,</mo><mn>18...</mn></mrow><annotation encoding="application/x-tex">3, 6, 9, 12, 15, 18...</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">3</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">9</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">12</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">15</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">18...</span></span></span></span></span>',D,O,Gs,cs,F,Pa='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mn>3</mn><mo>\xD7</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>4</mn><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo>+</mo><mi>N</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">3 	imes (1 + 2 + 3 + 4 + ... + N)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">...</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mclose">)</span></span></span></span></span>',K,T,qs,is,Q,$a='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub></mrow><mn>2</mn></mfrac><mo>\xD7</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">S_n = \frac{a_1 + a_n}{2} 	imes n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.9463em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.2603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span></span>',U,z,Cs,us,N,Is,ks,E,Js,V,Zs,Bs,fs,R,As,hs,M,ja=`<code class="language-python">arithmetic_sum<span class="token punctuation">(</span>divisor<span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
  last_multiple <span class="token operator">=</span> floor<span class="token punctuation">(</span><span class="token punctuation">(</span>limit <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> divisor<span class="token punctuation">)</span>
  <span class="token keyword">return</span> divisor <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> last_multiple<span class="token punctuation">)</span> <span class="token operator">*</span> last_multiple <span class="token operator">/</span> <span class="token number">2</span>

multiples_sum<span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span> <span class="token operator">+</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span> <span class="token operator">-</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span></code>`,_s,G,Ds,ys,q,W,x,vs;return x=new Ga({props:{href:"https://projecteuler.net/problem=1",rel:"nofollow",$$slots:{default:[qa]},$$scope:{ctx:g}}}),{c(){p=l("h2"),f=o("\u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434"),h=u(),y=l("p"),i=o("\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443, \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0432 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0435\u0439 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0432\u0441\u0451 \u0436\u0435 \u0442\u044B\u0441\u044F\u0447\u0430 - \u0441\u043C\u0435\u0445\u043E\u0442\u0432\u043E\u0440\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438."),_=u(),v=l("p"),ds=o("\u0414\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0446\u0438\u043A\u043B\u0430, \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u043C \u043E\u0431\u0445\u043E\u0434 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044F \u0434\u0435\u043B\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0430 3 \u0438\u043B\u0438 5 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u043C \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0440\u0430\u0432\u0435\u043D \u043D\u0443\u043B\u044E - \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0448\u0435\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439. \u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043E\u0431\u0445\u043E\u0434\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u0440\u0435\u0448\u0435\u043D\u0430."),ss=u(),S=l("h3"),Es=o("\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 Python"),as=u(),P=l("pre"),ns=u(),w=l("p"),xs=o("\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E "),I=l("strong"),Ps=o("list comprehension"),$s=o(":"),ts=u(),$=l("pre"),ps=u(),H=l("h3"),js=o("\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 JavaScript"),es=u(),j=l("pre"),ls=u(),L=l("h2"),Ms=o("\u041F\u043E\u0438\u0441\u043A \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F"),os=u(),b=l("p"),Ss=o("\u041F\u0443\u0441\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u043E\u043B\u043D\u0438\u0435\u043D\u043E\u0441\u043D\u043E, \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0451 \u0436\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 "),J=l("strong"),Hs=o("O(n)"),Ls=o(", \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u043B\u0435 \u043F\u043E\u0438\u0441\u043A\u0430, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u043A. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u0440\u0443\u0433\u0438\u043C, \u0431\u043E\u043B\u0435\u0435 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0441\u043E \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E "),Z=l("strong"),Os=o("O(1)"),Ts=o(". \u0412 \u044D\u0442\u043E\u043C \u043D\u0430\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u0430\u043B\u0433\u0435\u0431\u0440\u044B!"),ms=u(),d=l("p"),zs=o("\u0412\u044B\u043F\u0438\u0441\u0430\u0432 \u043A\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u043B\u044F 3, \u0437\u0430\u043C\u0435\u0442\u0438\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0442 "),B=l("em"),Ns=o("\u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u044E"),Rs=o(":"),rs=u(),A=new Ks,D=u(),O=l("p"),Gs=o("\u0415\u0451 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u044C, \u0432\u044B\u043D\u0435\u0441\u044F \u0442\u0440\u043E\u0439\u043A\u0443 \u0437\u0430 \u0441\u043A\u043E\u0431\u043A\u0443:"),cs=u(),F=new Ks,K=u(),T=l("p"),qs=o("\u0414\u043B\u044F \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u0432 \u0441\u043A\u043E\u0431\u043A\u0430\u0445 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0444\u043E\u0440\u043C\u0443\u043B\u0430 \u0441\u0443\u043C\u043C\u044B \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438, \u0437\u0430\u043F\u0438\u0448\u0435\u043C \u0435\u0451:"),is=u(),Q=new Ks,U=u(),z=l("p"),Cs=o("\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0444\u043E\u0440\u043C\u0443\u043B\u044B \u0441\u0443\u043C\u043C\u044B, \u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B 3 \u0438 5 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0430 \u043F\u043E\u0442\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0442\u044C. \u0412\u0435\u0440\u043D\u043E? \u041D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C. \u0422\u043E\u0440\u043E\u043F\u044F\u0441\u044C, \u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A\u0440\u0430\u0442\u043D\u044B\u043C\u0438 \u043A\u0430\u043A \u0434\u043B\u044F 3, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F 5. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 15. \u0413\u043E\u0432\u043E\u0440\u044F \u043D\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0438\u043C\u0435\u044E\u0442 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435. \u0412\u0437\u044F\u0432 \u0441\u0443\u043C\u043C\u0443 \u0434\u0432\u0443\u0445 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0439, \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F."),us=u(),N=l("p"),Is=o("\u0412\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u0441\u044F \u0442\u0435\u043C \u0436\u0435 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u043D\u0430\u0439\u0434\u0435\u043C \u0441\u0443\u043C\u043C\u0443 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0447\u0438\u0441\u0435\u043B, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438 5. \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0432\u044B\u0447\u0442\u0435\u043C \u0438\u0437 \u043E\u0431\u0449\u0435\u0439 \u0441\u0443\u043C\u043C\u044B."),ks=u(),E=l("p"),Js=o("\u0412 \u0438\u0442\u043E\u0433\u0435, \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438. \u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 "),V=l("strong"),Zs=o("O(1)"),Bs=o("!"),fs=u(),R=l("h2"),As=o("\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 Python"),hs=u(),M=l("pre"),_s=u(),G=l("h2"),Ds=o("\u0421\u0441\u044B\u043B\u043A\u0438"),ys=u(),q=l("ol"),W=l("li"),ua(x.$$.fragment),this.h()},l(s){p=m(s,"H2",{});var n=r(p);f=c(n,"\u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434"),n.forEach(a),h=k(s),y=m(s,"P",{});var X=r(y);i=c(X,"\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443, \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0432 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0435\u0439 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0432\u0441\u0451 \u0436\u0435 \u0442\u044B\u0441\u044F\u0447\u0430 - \u0441\u043C\u0435\u0445\u043E\u0442\u0432\u043E\u0440\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438."),X.forEach(a),_=k(s),v=m(s,"P",{});var Us=r(v);ds=c(Us,"\u0414\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0446\u0438\u043A\u043B\u0430, \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u043C \u043E\u0431\u0445\u043E\u0434 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044F \u0434\u0435\u043B\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0430 3 \u0438\u043B\u0438 5 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u043C \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0440\u0430\u0432\u0435\u043D \u043D\u0443\u043B\u044E - \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0448\u0435\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439. \u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043E\u0431\u0445\u043E\u0434\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u0440\u0435\u0448\u0435\u043D\u0430."),Us.forEach(a),ss=k(s),S=m(s,"H3",{});var Vs=r(S);Es=c(Vs,"\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 Python"),Vs.forEach(a),as=k(s),P=m(s,"PRE",{class:!0});var Ma=r(P);Ma.forEach(a),ns=k(s),w=m(s,"P",{});var bs=r(w);xs=c(bs,"\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E "),I=m(bs,"STRONG",{});var Ws=r(I);Ps=c(Ws,"list comprehension"),Ws.forEach(a),$s=c(bs,":"),bs.forEach(a),ts=k(s),$=m(s,"PRE",{class:!0});var Sa=r($);Sa.forEach(a),ps=k(s),H=m(s,"H3",{});var Xs=r(H);js=c(Xs,"\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 JavaScript"),Xs.forEach(a),es=k(s),j=m(s,"PRE",{class:!0});var Ha=r(j);Ha.forEach(a),ls=k(s),L=m(s,"H2",{});var Ys=r(L);Ms=c(Ys,"\u041F\u043E\u0438\u0441\u043A \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F"),Ys.forEach(a),os=k(s),b=m(s,"P",{});var C=r(b);Ss=c(C,"\u041F\u0443\u0441\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u043E\u043B\u043D\u0438\u0435\u043D\u043E\u0441\u043D\u043E, \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0451 \u0436\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 "),J=m(C,"STRONG",{});var sa=r(J);Hs=c(sa,"O(n)"),sa.forEach(a),Ls=c(C,", \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u043B\u0435 \u043F\u043E\u0438\u0441\u043A\u0430, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u043A. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u0440\u0443\u0433\u0438\u043C, \u0431\u043E\u043B\u0435\u0435 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0441\u043E \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E "),Z=m(C,"STRONG",{});var aa=r(Z);Os=c(aa,"O(1)"),aa.forEach(a),Ts=c(C,". \u0412 \u044D\u0442\u043E\u043C \u043D\u0430\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u0430\u043B\u0433\u0435\u0431\u0440\u044B!"),C.forEach(a),ms=k(s),d=m(s,"P",{});var gs=r(d);zs=c(gs,"\u0412\u044B\u043F\u0438\u0441\u0430\u0432 \u043A\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u043B\u044F 3, \u0437\u0430\u043C\u0435\u0442\u0438\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0442 "),B=m(gs,"EM",{});var na=r(B);Ns=c(na,"\u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u044E"),na.forEach(a),Rs=c(gs,":"),gs.forEach(a),rs=k(s),A=Qs(s),D=k(s),O=m(s,"P",{});var ta=r(O);Gs=c(ta,"\u0415\u0451 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u044C, \u0432\u044B\u043D\u0435\u0441\u044F \u0442\u0440\u043E\u0439\u043A\u0443 \u0437\u0430 \u0441\u043A\u043E\u0431\u043A\u0443:"),ta.forEach(a),cs=k(s),F=Qs(s),K=k(s),T=m(s,"P",{});var pa=r(T);qs=c(pa,"\u0414\u043B\u044F \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u0432 \u0441\u043A\u043E\u0431\u043A\u0430\u0445 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0444\u043E\u0440\u043C\u0443\u043B\u0430 \u0441\u0443\u043C\u043C\u044B \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438, \u0437\u0430\u043F\u0438\u0448\u0435\u043C \u0435\u0451:"),pa.forEach(a),is=k(s),Q=Qs(s),U=k(s),z=m(s,"P",{});var ea=r(z);Cs=c(ea,"\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0444\u043E\u0440\u043C\u0443\u043B\u044B \u0441\u0443\u043C\u043C\u044B, \u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B 3 \u0438 5 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0430 \u043F\u043E\u0442\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0442\u044C. \u0412\u0435\u0440\u043D\u043E? \u041D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C. \u0422\u043E\u0440\u043E\u043F\u044F\u0441\u044C, \u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A\u0440\u0430\u0442\u043D\u044B\u043C\u0438 \u043A\u0430\u043A \u0434\u043B\u044F 3, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F 5. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 15. \u0413\u043E\u0432\u043E\u0440\u044F \u043D\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0438\u043C\u0435\u044E\u0442 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435. \u0412\u0437\u044F\u0432 \u0441\u0443\u043C\u043C\u0443 \u0434\u0432\u0443\u0445 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0439, \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F."),ea.forEach(a),us=k(s),N=m(s,"P",{});var la=r(N);Is=c(la,"\u0412\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u0441\u044F \u0442\u0435\u043C \u0436\u0435 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u043D\u0430\u0439\u0434\u0435\u043C \u0441\u0443\u043C\u043C\u0443 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0447\u0438\u0441\u0435\u043B, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438 5. \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0432\u044B\u0447\u0442\u0435\u043C \u0438\u0437 \u043E\u0431\u0449\u0435\u0439 \u0441\u0443\u043C\u043C\u044B."),la.forEach(a),ks=k(s),E=m(s,"P",{});var ws=r(E);Js=c(ws,"\u0412 \u0438\u0442\u043E\u0433\u0435, \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438. \u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 "),V=m(ws,"STRONG",{});var oa=r(V);Zs=c(oa,"O(1)"),oa.forEach(a),Bs=c(ws,"!"),ws.forEach(a),fs=k(s),R=m(s,"H2",{});var ma=r(R);As=c(ma,"\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 Python"),ma.forEach(a),hs=k(s),M=m(s,"PRE",{class:!0});var La=r(M);La.forEach(a),_s=k(s),G=m(s,"H2",{});var ra=r(G);Ds=c(ra,"\u0421\u0441\u044B\u043B\u043A\u0438"),ra.forEach(a),ys=k(s),q=m(s,"OL",{});var ca=r(q);W=m(ca,"LI",{});var ia=r(W);ka(x.$$.fragment,ia),ia.forEach(a),ca.forEach(a),this.h()},h(){Y(P,"class","language-python"),Y($,"class","language-python"),Y(j,"class","language-js"),A.a=D,F.a=K,Q.a=U,Y(M,"class","language-python")},m(s,n){t(s,p,n),e(p,f),t(s,h,n),t(s,y,n),e(y,i),t(s,_,n),t(s,v,n),e(v,ds),t(s,ss,n),t(s,S,n),e(S,Es),t(s,as,n),t(s,P,n),P.innerHTML=wa,t(s,ns,n),t(s,w,n),e(w,xs),e(w,I),e(I,Ps),e(w,$s),t(s,ts,n),t(s,$,n),$.innerHTML=da,t(s,ps,n),t(s,H,n),e(H,js),t(s,es,n),t(s,j,n),j.innerHTML=Ea,t(s,ls,n),t(s,L,n),e(L,Ms),t(s,os,n),t(s,b,n),e(b,Ss),e(b,J),e(J,Hs),e(b,Ls),e(b,Z),e(Z,Os),e(b,Ts),t(s,ms,n),t(s,d,n),e(d,zs),e(d,B),e(B,Ns),e(d,Rs),t(s,rs,n),A.m(xa,s,n),t(s,D,n),t(s,O,n),e(O,Gs),t(s,cs,n),F.m(Pa,s,n),t(s,K,n),t(s,T,n),e(T,qs),t(s,is,n),Q.m($a,s,n),t(s,U,n),t(s,z,n),e(z,Cs),t(s,us,n),t(s,N,n),e(N,Is),t(s,ks,n),t(s,E,n),e(E,Js),e(E,V),e(V,Zs),e(E,Bs),t(s,fs,n),t(s,R,n),e(R,As),t(s,hs,n),t(s,M,n),M.innerHTML=ja,t(s,_s,n),t(s,G,n),e(G,Ds),t(s,ys,n),t(s,q,n),e(q,W),fa(x,W,null),vs=!0},p(s,n){const X={};n&2&&(X.$$scope={dirty:n,ctx:s}),x.$set(X)},i(s){vs||(_a(x.$$.fragment,s),vs=!0)},o(s){ya(x.$$.fragment,s),vs=!1},d(s){s&&a(p),s&&a(h),s&&a(y),s&&a(_),s&&a(v),s&&a(ss),s&&a(S),s&&a(as),s&&a(P),s&&a(ns),s&&a(w),s&&a(ts),s&&a($),s&&a(ps),s&&a(H),s&&a(es),s&&a(j),s&&a(ls),s&&a(L),s&&a(os),s&&a(b),s&&a(ms),s&&a(d),s&&a(rs),s&&A.d(),s&&a(D),s&&a(O),s&&a(cs),s&&F.d(),s&&a(K),s&&a(T),s&&a(is),s&&Q.d(),s&&a(U),s&&a(z),s&&a(us),s&&a(N),s&&a(ks),s&&a(E),s&&a(fs),s&&a(R),s&&a(hs),s&&a(M),s&&a(_s),s&&a(G),s&&a(ys),s&&a(q),va(x)}}}function Ia(g){let p,f,h,y;return{c(){p=l("section"),f=o(`\u0415\u0441\u043B\u0438 \u0432\u044B\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043C\u0435\u043D\u044C\u0448\u0435 10, \u043A\u0440\u0430\u0442\u043D\u044B\u0435 3 \u0438\u043B\u0438 5, \u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C 3, 5, 6 \u0438 9. \u0421\u0443\u043C\u043C\u0430 \u044D\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u0430 23.
`),h=l("p"),y=o("\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0435\u043D\u044C\u0448\u0435 1000, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438\u043B\u0438 5."),this.h()},l(i){p=m(i,"SECTION",{slot:!0});var _=r(p);f=c(_,`\u0415\u0441\u043B\u0438 \u0432\u044B\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043C\u0435\u043D\u044C\u0448\u0435 10, \u043A\u0440\u0430\u0442\u043D\u044B\u0435 3 \u0438\u043B\u0438 5, \u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C 3, 5, 6 \u0438 9. \u0421\u0443\u043C\u043C\u0430 \u044D\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u0430 23.
`),h=m(_,"P",{});var v=r(h);y=c(v,"\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0435\u043D\u044C\u0448\u0435 1000, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438\u043B\u0438 5."),v.forEach(a),_.forEach(a),this.h()},h(){Y(p,"slot","problem")},m(i,_){t(i,p,_),e(p,f),e(p,h),e(h,y)},d(i){i&&a(p)}}}function Ja(g){let p,f;const h=[g[0],ga];let y={$$slots:{problem:[Ia],default:[Ca]},$$scope:{ctx:g}};for(let i=0;i<h.length;i+=1)y=Fs(y,h[i]);return p=new Ra({props:y}),{c(){ua(p.$$.fragment)},l(i){ka(p.$$.fragment,i)},m(i,_){fa(p,i,_),f=!0},p(i,[_]){const v=_&1?Na(h,[_&1&&ha(i[0]),_&0&&ha(ga)]):{};_&2&&(v.$$scope={dirty:_,ctx:i}),p.$set(v)},i(i){f||(_a(p.$$.fragment,i),f=!0)},o(i){ya(p.$$.fragment,i),f=!1},d(i){va(p,i)}}}const ga={title:"\u041F\u0440\u043E\u0435\u043A\u0442 \u042D\u0439\u043B\u0435\u0440\u0430 #1: \u0427\u0438\u0441\u043B\u0430, \u043A\u0440\u0430\u0442\u043D\u044B\u0435 3 \u0438\u043B\u0438 5",series:"project-euler",lang:"ru",created:"2021-06-10T00:00:00.000Z",updated:"2021-08-26T00:00:00.000Z",slug:"project-euler-001-ru",layout:"project-euler"};function Za(g,p,f){return g.$$set=h=>{f(0,p=Fs(Fs({},p),ba(h)))},p=ba(p),[p]}class Va extends Oa{constructor(p){super();Ta(this,p,Za,Ja,za,{})}}export{Va as default,ga as metadata};
