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

	const dotSelected = document.querySelectorAll(".dot");
	const nbSlide = dotSelected.length;
	const next = document.querySelector(".arrow_right");
	const previous = document.querySelector(".arrow_left");
	let imageChange = document.getElementById("1");
	let count = 0;

//					Next					//
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
function imageNext() {
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[count]["image"]
	document.getElementById("text").innerHTML = slides[count]["tagLine"];
	};
	next.addEventListener("click", (nextSlide));
	next.addEventListener("click", (imageNext));
//					Prev					//
	function previousSlide() {
		dotSelected[count].classList.remove("dot_selected");
			if(count > 0) {
				count--;
			}
			else {count = nbSlide -1;
			}
		dotSelected[count].classList.add("dot_selected")
		console.log(count);
	};
	function imagePrev() {
		document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[count]["image"]
		document.getElementById("text").innerHTML = slides[count]["tagLine"];
		};
	previous.addEventListener("click", (previousSlide));
	previous.addEventListener("click", (imagePrev));

	// document.querySelector()
	
	