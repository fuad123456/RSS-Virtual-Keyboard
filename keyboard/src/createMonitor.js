export const createMonitor=()=>{
	let monitor=document.createElement('textarea');
	monitor.setAttribute('cols',55)
	monitor.setAttribute('rows',8)
	monitor.classList.add('monitor');
	return monitor;
}