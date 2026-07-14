let slideIndex = 1;
let timer;

showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("slides");

    if (slides.length === 0) return;

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    timer = setTimeout(function () {
        plusSlides(1);
    }, 4000);
}

// Footer Year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}