let allBolloon = document.querySelector('.all-bolloon__amount')
let allBolloonPoints = 0
let count = document.querySelector('.count__amount')
let points = 0

function balloonCreate() {
	let balloon = document.createElement('img')
	balloon.className = 'balloon'
	balloon.style.display = 'none'
	const colorsBalloon = ['./img/black.png', './img/blue.png', './img/green.png', './img/orange.png', './img/pinck.png', './img/red.png', './img/yellow.png']
	function colorsRandom() {
		let random = Math.floor(Math.random() * colorsBalloon.length)
		if (random > 6) {
			return 6
		}
		else return random
	}
	balloon.src = `${colorsBalloon[colorsRandom()]}`
	let randomSize = Math.floor(Math.random() * 200)
	if (randomSize < 50) randomSize = 50
	balloon.style.width = `${randomSize}px`
	let randomLeft = Math.floor(Math.random() * (document.body.clientWidth - 200))
	balloon.style.left = `${randomLeft}px`
	document.body.append(balloon)
	allBolloonPoints++
	allBolloon.innerHTML = allBolloonPoints
	let bolloonBottom = 0
	function emersion() {
		balloon.style.bottom = bolloonBottom + 'px'
		let step
		if (i == 90 || (i < 90 && i > 75)) {
			step = 1
		}
		else if (i == 75 || (i < 75 && i > 50)) {
			step = 2
		}
		else if (i == 50 || (i < 50 && i > 35)) {
			step = 3
		}
		else {
			step = 4
		}
		bolloonBottom = bolloonBottom + step
		balloon.style.display = 'block'
		if (Math.abs((balloon.offsetTop - (needle.offsetHeight - 6))) < 4 && Math.abs(((needle.offsetLeft + needle.clientWidth / 2) - (balloon.offsetLeft + balloon.clientWidth / 2))) < balloon.clientWidth) {
			balloon.remove()
			points++
			count.innerHTML = points
		}

		if (balloon.offsetTop < 0) {
			console.log(document.body.clientHeight)
			balloon.remove()
		}

	}
	setInterval(emersion, 1)
}