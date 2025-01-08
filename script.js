const carouselTrack = document.querySelector(".players-card-box");
const carouselCards = document.querySelectorAll(".player-card");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("page-info");

let cardWidth = 0;
let cardsPerView = 0;
let currentIndex = 0;

function updateCarousel() {
	cardWidth = carouselCards[0].offsetWidth + 20; 
	if (window.innerWidth <= 377) {
		cardsPerView = 1; 
	} else {
		cardsPerView = Math.floor(carouselTrack.offsetWidth / cardWidth);
	}
	const offset = -currentIndex * cardWidth;
	carouselTrack.style.transform = `translateX(${offset}px)`;
	const totalPages = Math.ceil(carouselCards.length / cardsPerView);

	const currentPage = Math.floor(currentIndex / cardsPerView) + 1;
	pageIndicator.textContent = ` ${currentPage} из ${totalPages}`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= carouselCards.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselCards.length - 1;
    }
    updateCarousel();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', updateCarousel);

updateCarousel();


nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

window.addEventListener("resize", updateCarousel);

updateCarousel();

updateCarousel();
function showSlides(n) {
	const slides = document.getElementsByClassName("slide");
	const dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}
