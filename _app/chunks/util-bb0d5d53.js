async function n(t,e={}){try{const o=await fetch(t,e);if(!o.ok)throw new Error(`An error has occured: ${o.status}`);return await o.json()}catch(o){console.error(o.message)}}function c(t,e){return t.reduce((o,r)=>{const s=e(r);return o[s]||(o[s]=[]),o[s].push(r),o},{})}function l(t){if(!!globalThis.window)if(t)document.body.style.cssText=`
			top: -${window.scrollY}px;
			position: fixed;
			overflow-y: scroll;
		`;else{const e=parseInt(document.body.style.top||"0");document.body.style.cssText="",window.scrollTo({top:-1*e,behavior:"auto"})}}export{n as f,c as g,l as p};
