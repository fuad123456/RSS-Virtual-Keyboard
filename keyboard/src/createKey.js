export const createKey=function(el,classes,inner,type,secEl,secInner,secClass,code,data) {
	let r= document.createElement(el);
	r.classList.add(...classes);
	r.innerHTML=inner;
	r.type=type;
	let second=document.createElement(secEl)
	second.innerHTML=secInner;
	r.appendChild(second);
	second.classList.add(...secClass);
	r.setAttribute('data-key',code);
	r.setAttribute('data-isFunc',data);
	return r;
}