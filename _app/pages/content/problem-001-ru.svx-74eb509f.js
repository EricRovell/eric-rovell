import{S as fa,i as ya,s as _a,B as Gs,j as va,m as ba,o as ga,p as da,q as aa,x as wa,u as Ea,v as xa,a2 as na,e as c,t as l,k as u,a3 as qs,c as r,a as i,g as o,d as a,n as k,a4 as Cs,b as Q,f as p,E as t,R as Pa}from"../../chunks/vendor-d52601ec.js";import{P as ja}from"../../chunks/ProjectEuler-f42003c7.js";import"../../chunks/katex.min-82fbe678.js";import"../../chunks/i18n-ee1672a9.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/timeline.module-933e31ac.js";import"../../chunks/Link-e4135475.js";function Ma(E){let e,y,f,_,m,h,v,hs,U,S,fs,V,x,ta=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">multiples_sum</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
  total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
      total <span class="token operator">+=</span> number
  <span class="token keyword">return</span> number</code>`,W,g,ys,G,_s,vs,X,P,ea='<code class="language-python">  multiples_sum <span class="token operator">=</span> <span class="token keyword">lambda</span> limit<span class="token punctuation">:</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span> number <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span> <span class="token keyword">if</span> number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">or</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">)</span></code>',Y,T,bs,ss,j,la=`<code class="language-js"><span class="token keyword">function</span> <span class="token function">multiplesSum</span><span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> number <span class="token operator">&lt;</span> limit<span class="token punctuation">;</span> number<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>total <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> total <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      total <span class="token operator">+=</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,as,H,gs,ns,b,ds,q,ws,Es,C,xs,Ps,ps,d,js,J,Ms,Ss,ts,Z,oa='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mn>3</mn><mo separator="true">,</mo><mn>6</mn><mo separator="true">,</mo><mn>9</mn><mo separator="true">,</mo><mn>12</mn><mo separator="true">,</mo><mn>15</mn><mo separator="true">,</mo><mn>18...</mn></mrow><annotation encoding="application/x-tex">3, 6, 9, 12, 15, 18...</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">3</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">9</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">12</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">15</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">18...</span></span></span></span></span>',B,O,Ts,es,I,ma='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mn>3</mn><mo>\xD7</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>4</mn><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo>+</mo><mi>N</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">3 	imes (1 + 2 + 3 + 4 + ... + N)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">...</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mclose">)</span></span></span></span></span>',A,z,Hs,ls,D,ca='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub></mrow><mn>2</mn></mfrac><mo>\xD7</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">S_n = \frac{a_1 + a_n}{2} 	imes n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.9463em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.2603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span></span>',F,R,Os,os,$,zs,ms,w,Rs,K,$s,Ls,cs,L,Ns,rs,M,ra=`<code class="language-python">arithmetic_sum<span class="token punctuation">(</span>divisor<span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
  last_multiple <span class="token operator">=</span> floor<span class="token punctuation">(</span><span class="token punctuation">(</span>limit <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> divisor<span class="token punctuation">)</span>
  <span class="token keyword">return</span> divisor <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> last_multiple<span class="token punctuation">)</span> <span class="token operator">*</span> last_multiple <span class="token operator">/</span> <span class="token number">2</span>

multiples_sum<span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span> <span class="token operator">+</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span> <span class="token operator">-</span> arithmetic_sum<span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span></code>`;return{c(){e=c("h2"),y=l("\u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434"),f=u(),_=c("p"),m=l("\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443, \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0432 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0435\u0439 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0432\u0441\u0451 \u0436\u0435 \u0442\u044B\u0441\u044F\u0447\u0430 - \u0441\u043C\u0435\u0445\u043E\u0442\u0432\u043E\u0440\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438."),h=u(),v=c("p"),hs=l("\u0414\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0446\u0438\u043A\u043B\u0430, \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u043C \u043E\u0431\u0445\u043E\u0434 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044F \u0434\u0435\u043B\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0430 3 \u0438\u043B\u0438 5 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u043C \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0440\u0430\u0432\u0435\u043D \u043D\u0443\u043B\u044E - \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0448\u0435\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439. \u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043E\u0431\u0445\u043E\u0434\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u0440\u0435\u0448\u0435\u043D\u0430."),U=u(),S=c("h3"),fs=l("\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 Python"),V=u(),x=c("pre"),W=u(),g=c("p"),ys=l("\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E "),G=c("strong"),_s=l("list comprehension"),vs=l(":"),X=u(),P=c("pre"),Y=u(),T=c("h3"),bs=l("\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 JavaScript"),ss=u(),j=c("pre"),as=u(),H=c("h2"),gs=l("\u041F\u043E\u0438\u0441\u043A \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F"),ns=u(),b=c("p"),ds=l("\u041F\u0443\u0441\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u043E\u043B\u043D\u0438\u0435\u043D\u043E\u0441\u043D\u043E, \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0451 \u0436\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 "),q=c("strong"),ws=l("O(n)"),Es=l(", \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u043B\u0435 \u043F\u043E\u0438\u0441\u043A\u0430, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u043A. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u0440\u0443\u0433\u0438\u043C, \u0431\u043E\u043B\u0435\u0435 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0441\u043E \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E "),C=c("strong"),xs=l("O(1)"),Ps=l(". \u0412 \u044D\u0442\u043E\u043C \u043D\u0430\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u0430\u043B\u0433\u0435\u0431\u0440\u044B!"),ps=u(),d=c("p"),js=l("\u0412\u044B\u043F\u0438\u0441\u0430\u0432 \u043A\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u043B\u044F 3, \u0437\u0430\u043C\u0435\u0442\u0438\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0442 "),J=c("em"),Ms=l("\u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u044E"),Ss=l(":"),ts=u(),Z=new qs,B=u(),O=c("p"),Ts=l("\u0415\u0451 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u044C, \u0432\u044B\u043D\u0435\u0441\u044F \u0442\u0440\u043E\u0439\u043A\u0443 \u0437\u0430 \u0441\u043A\u043E\u0431\u043A\u0443:"),es=u(),I=new qs,A=u(),z=c("p"),Hs=l("\u0414\u043B\u044F \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u0432 \u0441\u043A\u043E\u0431\u043A\u0430\u0445 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0444\u043E\u0440\u043C\u0443\u043B\u0430 \u0441\u0443\u043C\u043C\u044B \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438, \u0437\u0430\u043F\u0438\u0448\u0435\u043C \u0435\u0451:"),ls=u(),D=new qs,F=u(),R=c("p"),Os=l("\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0444\u043E\u0440\u043C\u0443\u043B\u044B \u0441\u0443\u043C\u043C\u044B, \u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B 3 \u0438 5 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0430 \u043F\u043E\u0442\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0442\u044C. \u0412\u0435\u0440\u043D\u043E? \u041D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C. \u0422\u043E\u0440\u043E\u043F\u044F\u0441\u044C, \u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A\u0440\u0430\u0442\u043D\u044B\u043C\u0438 \u043A\u0430\u043A \u0434\u043B\u044F 3, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F 5. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 15. \u0413\u043E\u0432\u043E\u0440\u044F \u043D\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0438\u043C\u0435\u044E\u0442 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435. \u0412\u0437\u044F\u0432 \u0441\u0443\u043C\u043C\u0443 \u0434\u0432\u0443\u0445 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0439, \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F."),os=u(),$=c("p"),zs=l("\u0412\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u0441\u044F \u0442\u0435\u043C \u0436\u0435 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u043D\u0430\u0439\u0434\u0435\u043C \u0441\u0443\u043C\u043C\u0443 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0447\u0438\u0441\u0435\u043B, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438 5. \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0432\u044B\u0447\u0442\u0435\u043C \u0438\u0437 \u043E\u0431\u0449\u0435\u0439 \u0441\u0443\u043C\u043C\u044B."),ms=u(),w=c("p"),Rs=l("\u0412 \u0438\u0442\u043E\u0433\u0435, \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438. \u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 "),K=c("strong"),$s=l("O(1)"),Ls=l("!"),cs=u(),L=c("h2"),Ns=l("\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 Python"),rs=u(),M=c("pre"),this.h()},l(s){e=r(s,"H2",{});var n=i(e);y=o(n,"\u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434"),n.forEach(a),f=k(s),_=r(s,"P",{});var Js=i(_);m=o(Js,"\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443, \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0432 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0435\u0439 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0432\u0441\u0451 \u0436\u0435 \u0442\u044B\u0441\u044F\u0447\u0430 - \u0441\u043C\u0435\u0445\u043E\u0442\u0432\u043E\u0440\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438."),Js.forEach(a),h=k(s),v=r(s,"P",{});var Zs=i(v);hs=o(Zs,"\u0414\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B. \u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0446\u0438\u043A\u043B\u0430, \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u043C \u043E\u0431\u0445\u043E\u0434 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044F \u0434\u0435\u043B\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0430 3 \u0438\u043B\u0438 5 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u043C \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0440\u0430\u0432\u0435\u043D \u043D\u0443\u043B\u044E - \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0448\u0435\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439. \u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043E\u0431\u0445\u043E\u0434\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u0440\u0435\u0448\u0435\u043D\u0430."),Zs.forEach(a),U=k(s),S=r(s,"H3",{});var Bs=i(S);fs=o(Bs,"\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 Python"),Bs.forEach(a),V=k(s),x=r(s,"PRE",{class:!0});var ia=i(x);ia.forEach(a),W=k(s),g=r(s,"P",{});var is=i(g);ys=o(is,"\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E "),G=r(is,"STRONG",{});var Is=i(G);_s=o(Is,"list comprehension"),Is.forEach(a),vs=o(is,":"),is.forEach(a),X=k(s),P=r(s,"PRE",{class:!0});var ua=i(P);ua.forEach(a),Y=k(s),T=r(s,"H3",{});var As=i(T);bs=o(As,"\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0430 JavaScript"),As.forEach(a),ss=k(s),j=r(s,"PRE",{class:!0});var ka=i(j);ka.forEach(a),as=k(s),H=r(s,"H2",{});var Ds=i(H);gs=o(Ds,"\u041F\u043E\u0438\u0441\u043A \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F"),Ds.forEach(a),ns=k(s),b=r(s,"P",{});var N=i(b);ds=o(N,"\u041F\u0443\u0441\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u043E\u043B\u043D\u0438\u0435\u043D\u043E\u0441\u043D\u043E, \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u0441\u0451 \u0436\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 "),q=r(N,"STRONG",{});var Fs=i(q);ws=o(Fs,"O(n)"),Fs.forEach(a),Es=o(N,", \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u043B\u0435 \u043F\u043E\u0438\u0441\u043A\u0430, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u043A. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u0440\u0443\u0433\u0438\u043C, \u0431\u043E\u043B\u0435\u0435 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0441\u043E \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E "),C=r(N,"STRONG",{});var Ks=i(C);xs=o(Ks,"O(1)"),Ks.forEach(a),Ps=o(N,". \u0412 \u044D\u0442\u043E\u043C \u043D\u0430\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u0430\u043B\u0433\u0435\u0431\u0440\u044B!"),N.forEach(a),ps=k(s),d=r(s,"P",{});var us=i(d);js=o(us,"\u0412\u044B\u043F\u0438\u0441\u0430\u0432 \u043A\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u043B\u044F 3, \u0437\u0430\u043C\u0435\u0442\u0438\u043C, \u0447\u0442\u043E \u043E\u043D\u0438 \u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0442 "),J=r(us,"EM",{});var Qs=i(J);Ms=o(Qs,"\u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u044E"),Qs.forEach(a),Ss=o(us,":"),us.forEach(a),ts=k(s),Z=Cs(s),B=k(s),O=r(s,"P",{});var Us=i(O);Ts=o(Us,"\u0415\u0451 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0443\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u044C, \u0432\u044B\u043D\u0435\u0441\u044F \u0442\u0440\u043E\u0439\u043A\u0443 \u0437\u0430 \u0441\u043A\u043E\u0431\u043A\u0443:"),Us.forEach(a),es=k(s),I=Cs(s),A=k(s),z=r(s,"P",{});var Vs=i(z);Hs=o(Vs,"\u0414\u043B\u044F \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441\u0443\u043C\u043C\u044B \u0432 \u0441\u043A\u043E\u0431\u043A\u0430\u0445 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0444\u043E\u0440\u043C\u0443\u043B\u0430 \u0441\u0443\u043C\u043C\u044B \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438, \u0437\u0430\u043F\u0438\u0448\u0435\u043C \u0435\u0451:"),Vs.forEach(a),ls=k(s),D=Cs(s),F=k(s),R=r(s,"P",{});var Ws=i(R);Os=o(Ws,"\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0444\u043E\u0440\u043C\u0443\u043B\u044B \u0441\u0443\u043C\u043C\u044B, \u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B 3 \u0438 5 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0430 \u043F\u043E\u0442\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0442\u044C. \u0412\u0435\u0440\u043D\u043E? \u041D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C. \u0422\u043E\u0440\u043E\u043F\u044F\u0441\u044C, \u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A\u0440\u0430\u0442\u043D\u044B\u043C\u0438 \u043A\u0430\u043A \u0434\u043B\u044F 3, \u0442\u0430\u043A \u0438 \u0434\u043B\u044F 5. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 15. \u0413\u043E\u0432\u043E\u0440\u044F \u043D\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043A\u0440\u0430\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0438\u043C\u0435\u044E\u0442 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435. \u0412\u0437\u044F\u0432 \u0441\u0443\u043C\u043C\u0443 \u0434\u0432\u0443\u0445 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0439, \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u044E\u0442\u0441\u044F."),Ws.forEach(a),os=k(s),$=r(s,"P",{});var Xs=i($);zs=o(Xs,"\u0412\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u0441\u044F \u0442\u0435\u043C \u0436\u0435 \u043E\u0440\u0443\u0436\u0438\u0435\u043C, \u043D\u0430\u0439\u0434\u0435\u043C \u0441\u0443\u043C\u043C\u0443 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0447\u0438\u0441\u0435\u043B, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438 5. \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0432\u044B\u0447\u0442\u0435\u043C \u0438\u0437 \u043E\u0431\u0449\u0435\u0439 \u0441\u0443\u043C\u043C\u044B."),Xs.forEach(a),ms=k(s),w=r(s,"P",{});var ks=i(w);Rs=o(ks,"\u0412 \u0438\u0442\u043E\u0433\u0435, \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438. \u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 "),K=r(ks,"STRONG",{});var Ys=i(K);$s=o(Ys,"O(1)"),Ys.forEach(a),Ls=o(ks,"!"),ks.forEach(a),cs=k(s),L=r(s,"H2",{});var sa=i(L);Ns=o(sa,"\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 Python"),sa.forEach(a),rs=k(s),M=r(s,"PRE",{class:!0});var ha=i(M);ha.forEach(a),this.h()},h(){Q(x,"class","language-python"),Q(P,"class","language-python"),Q(j,"class","language-js"),Z.a=B,I.a=A,D.a=F,Q(M,"class","language-python")},m(s,n){p(s,e,n),t(e,y),p(s,f,n),p(s,_,n),t(_,m),p(s,h,n),p(s,v,n),t(v,hs),p(s,U,n),p(s,S,n),t(S,fs),p(s,V,n),p(s,x,n),x.innerHTML=ta,p(s,W,n),p(s,g,n),t(g,ys),t(g,G),t(G,_s),t(g,vs),p(s,X,n),p(s,P,n),P.innerHTML=ea,p(s,Y,n),p(s,T,n),t(T,bs),p(s,ss,n),p(s,j,n),j.innerHTML=la,p(s,as,n),p(s,H,n),t(H,gs),p(s,ns,n),p(s,b,n),t(b,ds),t(b,q),t(q,ws),t(b,Es),t(b,C),t(C,xs),t(b,Ps),p(s,ps,n),p(s,d,n),t(d,js),t(d,J),t(J,Ms),t(d,Ss),p(s,ts,n),Z.m(oa,s,n),p(s,B,n),p(s,O,n),t(O,Ts),p(s,es,n),I.m(ma,s,n),p(s,A,n),p(s,z,n),t(z,Hs),p(s,ls,n),D.m(ca,s,n),p(s,F,n),p(s,R,n),t(R,Os),p(s,os,n),p(s,$,n),t($,zs),p(s,ms,n),p(s,w,n),t(w,Rs),t(w,K),t(K,$s),t(w,Ls),p(s,cs,n),p(s,L,n),t(L,Ns),p(s,rs,n),p(s,M,n),M.innerHTML=ra},p:Pa,d(s){s&&a(e),s&&a(f),s&&a(_),s&&a(h),s&&a(v),s&&a(U),s&&a(S),s&&a(V),s&&a(x),s&&a(W),s&&a(g),s&&a(X),s&&a(P),s&&a(Y),s&&a(T),s&&a(ss),s&&a(j),s&&a(as),s&&a(H),s&&a(ns),s&&a(b),s&&a(ps),s&&a(d),s&&a(ts),s&&Z.d(),s&&a(B),s&&a(O),s&&a(es),s&&I.d(),s&&a(A),s&&a(z),s&&a(ls),s&&D.d(),s&&a(F),s&&a(R),s&&a(os),s&&a($),s&&a(ms),s&&a(w),s&&a(cs),s&&a(L),s&&a(rs),s&&a(M)}}}function Sa(E){let e,y,f,_;return{c(){e=c("section"),y=l(`\u0415\u0441\u043B\u0438 \u0432\u044B\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043C\u0435\u043D\u044C\u0448\u0435 10, \u043A\u0440\u0430\u0442\u043D\u044B\u0435 3 \u0438\u043B\u0438 5, \u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C 3, 5, 6 \u0438 9. \u0421\u0443\u043C\u043C\u0430 \u044D\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u0430 23.
`),f=c("p"),_=l("\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0435\u043D\u044C\u0448\u0435 1000, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438\u043B\u0438 5."),this.h()},l(m){e=r(m,"SECTION",{slot:!0});var h=i(e);y=o(h,`\u0415\u0441\u043B\u0438 \u0432\u044B\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043C\u0435\u043D\u044C\u0448\u0435 10, \u043A\u0440\u0430\u0442\u043D\u044B\u0435 3 \u0438\u043B\u0438 5, \u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C 3, 5, 6 \u0438 9. \u0421\u0443\u043C\u043C\u0430 \u044D\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u0430 23.
`),f=r(h,"P",{});var v=i(f);_=o(v,"\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0435\u043D\u044C\u0448\u0435 1000, \u043A\u0440\u0430\u0442\u043D\u044B\u0445 3 \u0438\u043B\u0438 5."),v.forEach(a),h.forEach(a),this.h()},h(){Q(e,"slot","problem")},m(m,h){p(m,e,h),t(e,y),t(e,f),t(f,_)},d(m){m&&a(e)}}}function Ta(E){let e,y;const f=[E[0],pa];let _={$$slots:{problem:[Sa],default:[Ma]},$$scope:{ctx:E}};for(let m=0;m<f.length;m+=1)_=Gs(_,f[m]);return e=new ja({props:_}),{c(){va(e.$$.fragment)},l(m){ba(e.$$.fragment,m)},m(m,h){ga(e,m,h),y=!0},p(m,[h]){const v=h&1?da(f,[h&1&&aa(m[0]),h&0&&aa(pa)]):{};h&2&&(v.$$scope={dirty:h,ctx:m}),e.$set(v)},i(m){y||(wa(e.$$.fragment,m),y=!0)},o(m){Ea(e.$$.fragment,m),y=!1},d(m){xa(e,m)}}}const pa={title:"\u041F\u0440\u043E\u0435\u043A\u0442 \u042D\u0439\u043B\u0435\u0440\u0430 #1: \u0427\u0438\u0441\u043B\u0430, \u043A\u0440\u0430\u0442\u043D\u044B\u0435 3 \u0438\u043B\u0438 5",series:"project-euler",lang:"ru",created:"2021-06-10T00:00:00.000Z",updated:"2021-08-26T00:00:00.000Z",slug:"project-euler-001-ru",layout:"project-euler",references:[{label:"Project Euler, Problem 1: Multiples of 3 or 5",href:"https://projecteuler.net/problem=1"},{label:"Project Euler, Problem 1: Multiples of 3 or 5",href:"https://projecteuler.net/problem=1"}]};function Ha(E,e,y){return E.$$set=f=>{y(0,e=Gs(Gs({},e),na(f)))},e=na(e),[e]}class qa extends fa{constructor(e){super();ya(this,e,Ha,Ta,_a,{})}}export{qa as default,pa as metadata};
