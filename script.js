const cards = document.querySelectorAll('.player-card');
const totalCards = cards.length;
let currentIndex = 0;

function showCard(index) {
    const offset = -index * (100 / (window.innerWidth <= 600 ? 1 : 3)); // Смещение
    document.querySelector('.players-card-box').style.transform = `translateX(${offset}%)`;
    document.getElementById('page-info').textContent = `${Math.floor(index / (window.innerWidth <= 600 ? 1 : 3)) + 1} / ${Math.ceil(totalCards / (window.innerWidth <= 600 ? 1 : 3))}`;
}

function handleMobileSlider() {
    const mobileInterval = setInterval(() => {
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        showCard(currentIndex);
    }, 3000); 

    document.getElementById('prevBtn').addEventListener('click', () => {
        clearInterval(mobileInterval); 
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
        showCard(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        clearInterval(mobileInterval); 
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        showCard(currentIndex);
    });
}

function handleDesktopSlider() {
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
        showCard(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        showCard(currentIndex);
    });
}


if (window.innerWidth <= 600) {
    handleMobileSlider();
} else {
    handleDesktopSlider();
}

window.addEventListener('resize', () => {
    const newCardsPerPage = window.innerWidth <= 600 ? 1 : 3;
    const newTotalPages = Math.ceil(totalCards / newCardsPerPage);
    showCard(currentIndex); 
});


 setInterval(handleMobileSlider, 5000);

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}