const timer = document.querySelector('.timer')
let i = 90
setTimeout(() => {
	setInterval(() => {
		if (i > 10 || i == 10) {
			timer.innerHTML = i
			i--
		}
		else if ((i < 10) && (i > -1)) {
			timer.innerHTML = `0${i}`
			i--
		}
	}, 1000)
}, 4000)