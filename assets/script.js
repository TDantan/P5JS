const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  const leftArrow = document.querySelector('.arrow_left');
  const rightArrow = document.querySelector('.arrow_right');
  let imgSlide = document.querySelector('.banner-img');
  const txtSlide = document.querySelector('.banner-txt');
  const dotsContainer = document.querySelector('.dots');
  
  let bulletpoint = `
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  `;
  dotsContainer.innerHTML = bulletpoint;
  
  let compteur = 0;
  let dot = document.querySelectorAll('.dot');
  dot[0].classList.add('dot_selected');
  
  leftArrow.addEventListener('click', function () {
	compteur--;
	if (compteur === -1) {
	  compteur = slides.length - 1;
	}
	updateDataCaroussel();
  });

  function updateDataCaroussel() {
	imgSlide.src = "./assets/images/slideshow/"+slides[compteur].image;
	txtSlide.innerHTML = slides[compteur].tagLine;
	updateDots();
  }
  
  rightArrow.addEventListener('click', function () {
	compteur++;
	if (compteur === slides.length) {
	  compteur = 0;
	}
	updateDataCaroussel()
  });
   
  function updateDots() {
	for (let i = 0; i < dot.length; i++) {
	  if (i === compteur) {
		dot[i].classList.add('dot_selected');
	  } else {
		dot[i].classList.remove('dot_selected');
	  }
	}
  }



