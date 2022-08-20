const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const slides = document.getElementsByClassName("carousel-item")

let slidePosition = 0
const totalSlides = slides.length

prevBtn.addEventListener("click", moveToPrevSlide)
nextBtn.addEventListener("click", moveToNextSlide)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

function moveToNextSlide() {
    hideAllSlides()

    if (slidePosition === totalSlides - 1)   {
        slidePosition = 0
    } else {
        slidePosition += 1
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    hideAllSlides()

    if (slidePosition === 0)   {
        slidePosition = totalSlides - 1
    } else {
        slidePosition -= 1
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}

