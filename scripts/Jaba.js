document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector("header").classList.toggle("open")
	})
})

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('fbtn').addEventListener('click', function () {
		document.querySelector('main').classList.toggle('open')
	})
})

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('themeToggle').addEventListener('click', function () {
		document.querySelector('body').classList.toggle('dark-theme')
		document.querySelector('header').classList.toggle('dark-theme')
		document.querySelector('footer').classList.toggle('dark-theme')
		document.querySelector('main').classList.toggle('dark-theme')
	})
})