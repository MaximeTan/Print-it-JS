const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentDot = document.querySelector(".dot");
let currentImage = document.getElementById("2");

	if (currentImage = currentDot) {
		currentDot.classList.add('dot_selected')
	};




// un peu de funz
	const arrowClick = document.querySelector('.arrow_right');
	arrowClick.addEventListener("click" , ()=>  {
		const body = document.querySelector("body")
		body.style.backgroundColor="blue"
	})
	const arrowClick2 = document.querySelector('.arrow_left');
	arrowClick2.addEventListener("click" , ()=>  {
		const body = document.querySelector("body")
		body.style.backgroundColor="red"
	})	
