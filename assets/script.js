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

// let bannerSlider = document.querySelector("")


// let currentDot = document.querySelector(".dot");
// let currentImage = document.getElementById("2");

// 	if (currentImage = currentDot) {
// 		currentDot.classList.add('dot_selected')
// 	};
// const clickDroit = document.querySelector('.arrow_right');
// clickDroit.addEventListener("click" ,(event)=>  {
// 	const movingRight = document.getElementById("banner")
// 	movingRight.scrollRight, nbr+=1;
// 	console.log(event)
// })
// const clickGauche = document.querySelector('.arrow_left');
// clickGauche.addEventListener("click" , ()=>  {
// 	const movingLeft = document.getElementById("banner")
// 	movingLeft, p-=1;
// })

	const dotSelected = document.querySelectorAll(".dot");
	const nbSlide = dotSelected.length;
	const next = document.querySelector(".arrow_right");
	const previous = document.querySelector(".arrow_left");
	let count = 0;

	function nextSlide() {
		dotSelected[count].classList.remove("dot_selected");
			
			if(count < nbSlide - 1) {
				count++;
			}
			else {count = 0
			};
		dotSelected[count].classList.add("dot_selected")
		console.log(count);
	}

	next.addEventListener("click", (nextSlide));

	function previousSlide() {
		dotSelected[count].classList.remove("dot_selected");
			
			if(count > 0) {
				count--;
			}
			else {count = nbSlide -1;
			}
		dotSelected[count].classList.add("dot_selected")
		console.log(count);
	}

	previous.addEventListener("click", (previousSlide));

		