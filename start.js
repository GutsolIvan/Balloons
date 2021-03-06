let start = new Promise((resolve) => {
	setTimeout(() => {
		document.querySelector('.pop-up__wrapper').style.display = 'none'
		document.querySelector('.reload').style.zIndex = '1000'
		resolve()
	}, 5000)
}).then(() => {
	setInterval(() => {
		if (i == 90 || (i < 90 && i > 75))
			balloonCreate()
	}, 1000)
}).then(() => {
	setInterval(() => {
		if (i == 75 || (i < 75 && i > 50))
			balloonCreate()
	}, 800)
}).then(() => {
	setInterval(() => {
		if (i == 50 || (i < 50 && i > 35))
			balloonCreate()
	}, 600)
}).then(() => {
	setInterval(() => {
		if (i == 35 || (i < 35 && i > 0))
			balloonCreate()
		if (i == 0)
			document.querySelector('.result__wrapper').style.opacity = '1'
	}, 400)
})
