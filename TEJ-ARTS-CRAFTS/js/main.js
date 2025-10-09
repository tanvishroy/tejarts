let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let progressBars = document.getElementsByClassName("progress-bar-wrap");

  // Handle looping from end to start
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Deactivate and reset all progress bars
  for (i = 0; i < progressBars.length; i++) {
    progressBars[i].className = progressBars[i].className.replace(" active", "");
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Activate the current progress bar to start its animation
  progressBars[slideIndex - 1].className += " active";
}

// Add click event listeners to the progress bars
let progressBars = document.getElementsByClassName("progress-bar-wrap");
for (let i = 0; i < progressBars.length; i++) {
  progressBars[i].addEventListener('click', function() {
    let index = parseInt(this.getAttribute('data-slide-index'));
    currentSlide(index);
  });
}