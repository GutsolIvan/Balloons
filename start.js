let start = new Promise((resolve) => {
	setInterval(() => {
		if (i == 90 || (i < 90 && i > 75))
			balloonCreate()
	}, 1000)
	resolve()
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
	}, 400)
})