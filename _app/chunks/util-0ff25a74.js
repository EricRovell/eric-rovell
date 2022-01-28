function s(t,e){return t.reduce((o,n)=>{const l=e(n);return o[l]||(o[l]=[]),o[l].push(n),o},{})}function c(t){if(!!globalThis.window)if(t)document.body.style.cssText=`
			top: -${window.scrollY}px;
			position: fixed;
			overflow-y: scroll;
		`;else{const e=parseInt(document.body.style.top||"0");document.body.style.cssText="",window.scrollTo({top:-1*e,behavior:"auto"})}}export{s as g,c as p};
