const slides = document.querySelectorAll('.mobile-slide');
const nextSlide = document.querySelector('.mobile-btn-next');
const prevSlide = document.querySelector('.mobile-btn-prev');
var intervalLoad;
var timer;

// loop through slides and set each slide's translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// the following code is to automate the banner to switch between slides every 5 seconds
// unless user clicks to swithc between slides

function resetInterval(newCount) {
  clearInterval(intervalLoad);
  intervalLoad = setInterval(moveToNextSlide, newCount);
}

// Function to move to the next slide
function moveToNextSlide() {
  clearInterval(intervalLoad);
  slideTimer();
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

// Function to move to the previous slide
function moveToPrevSlide() {
  clearInterval(intervalLoad);
  slideTimer();
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
}

function slideTimer() {
  // Clear the previous timer
  clearTimeout(timer);

  // Set a new timer to reset the interval after 20 seconds of no clicks
  timer = setTimeout(function () {
    resetInterval(5000); // After 10 seconds of no clicks, switch back to 5 seconds
  }, 10000);
}

// Start the initial interval
intervalLoad = setInterval(moveToNextSlide, 5000);

// add event listeners
nextSlide.addEventListener('click', moveToNextSlide);
prevSlide.addEventListener('click', moveToPrevSlide);
