
// let slider = document.querySelector(".slider");
//         let currentSlide = 0;
//         let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

//         slider.querySelector(".control .up").addEventListener("click", function () {
//             if (currentSlide == 0) {
//                 return;
//             }
//             currentSlide--;
//             slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
//             slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`;
//         });

//         slider.querySelector(".control .down").addEventListener("click", function () {
//             if (currentSlide == totalSlides) {
//                 return;
//             }
//             currentSlide++;
//             slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
//             slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`;
//         });


let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;
let autoSlideInterval;

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % (totalSlides + 1);
    updateSlide();
}

// Function to update the slide position
function updateSlide() {
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`;
}

// Start auto sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); // Change 5000 to your desired interval in milliseconds
}

// Start auto slide on page load
startAutoSlide();

// Add event listeners for control buttons
slider.querySelector(".control .up").addEventListener("click", function () {
    currentSlide = Math.max(0, currentSlide - 1);
    updateSlide();
    clearInterval(autoSlideInterval); // Stop auto sliding when manual control is used
});

slider.querySelector(".control .down").addEventListener("click", function () {
    currentSlide = Math.min(totalSlides, currentSlide + 1);
    updateSlide();
    clearInterval(autoSlideInterval); // Stop auto sliding when manual control is used
});
