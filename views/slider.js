var sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#chevron_left"),
arrowRight = document.querySelector("#chevron_right"),
slidesNumber = sliderImages.length,
current = 0;

function reset() {
for(let i = 0; i < slidesNumber; i++) {
    sliderImages[i].style.display = "none";
}
}

function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
sliderImages[current - 1].classList.add('fade-in');
setTimeout(() => sliderImages[current].classList.remove('fade-in'),500);
current--;
}

function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
sliderImages[current + 1].classList.add('fade-in');
setTimeout(() => sliderImages[current].classList.remove('fade-in'),500);
current++;
}

arrowLeft.addEventListener("click", function() {
if(current === 0){
    current = slidesNumber;
}
slideLeft();
});

arrowRight.addEventListener("click", function() {
if(current === slidesNumber - 1){
    current = -1;
}
slideRight();
});

startSlide();
