const needle = document.querySelector('.needle')
document.body.onmousemove = () => {
	if (event.clientX < (document.body.clientWidth - needle.clientWidth))
		needle.style.marginLeft = `${event.clientX}px`
}