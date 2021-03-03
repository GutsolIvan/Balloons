let allBolloon = document.querySelector('.all-bolloon__amount')
let allBolloonPoints = 0
let count = document.querySelector('.count__amount')
let points = 0
let finish = document.querySelector('.finish')

function balloonCreate() {
	//Создаем шар
	let balloon = document.createElement('img')
	balloon.className = 'balloon'
	balloon.style.display = 'none'
	balloon.style.zIndex = '3'
	//Цвет шара
	const colorsBalloon = ['./img/black.png', './img/blue.png', './img/green.png', './img/orange.png', './img/pinck.png', './img/red.png', './img/yellow.png']
	function colorsRandom() {
		let random = Math.floor(Math.random() * colorsBalloon.length)
		if (random > 6) {
			return 6
		}
		else return random
	}
	balloon.src = `${colorsBalloon[colorsRandom()]}`
	//end
	//Ширина шара
	let randomSize = Math.floor(Math.random() * 200)
	if (randomSize < 50) randomSize = 50
	balloon.style.width = `${randomSize}px`
	//end
	//Отступ слева
	let randomLeft = Math.floor(Math.random() * (document.body.clientWidth - 200))
	balloon.style.left = `${randomLeft}px`
	document.body.append(balloon)
	//end
	//Количество шаров
	allBolloonPoints++
	allBolloon.innerHTML = allBolloonPoints
	//end
	let bolloonBottom = 0
	//функция поднятия на один шаг
	function emersion() {
		balloon.style.bottom = bolloonBottom + 'px'
		//шаг
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
		//end
		bolloonBottom = bolloonBottom + step
		balloon.style.display = 'block'
		//удаляем шарик при соприкосновении с иголкой
		if (Math.abs((balloon.offsetTop - (needle.offsetHeight - 6))) < 4 && Math.abs(((needle.offsetLeft + needle.clientWidth / 2) - (balloon.offsetLeft + balloon.clientWidth / 2))) < balloon.clientWidth) {
			balloon.remove()
			points++
			count.innerHTML = points
			finish.innerHTML = points
		}
		//end
		//удаляем оставшиеся шарики
		if (balloon.offsetTop < 0) {
			console.log(document.body.clientHeight)
			balloon.remove()
		}
		//end
	}
	//функция всплытия шарика
	setInterval(emersion, 1)
	//end
}