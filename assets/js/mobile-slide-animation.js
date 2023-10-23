// this function does the following:
// every 5 seconds, it will switch between the carousel
// if the user clicks an element, it will make that element active
// and increase the timer by 20 seconds,
// if the user doesn't click anything during those 20 seconds,
// the it will go back to switching every 5 seconds
$(document).ready(function () {
  var intervalLoad;
  var count = 5000;

  function shiftActiveClass() {
    var $elements = $('.mobile-slide');
    var $bayElement = $elements.filter('.active');

    var index = $elements.index($bayElement);
    $bayElement.removeClass('active');

    var nextIndex = (index + 1) % $elements.length;
    $elements.eq(nextIndex).addClass('active');
  }

  function resetInterval(newCount) {
    clearInterval(intervalLoad);
    intervalLoad = setInterval(shiftActiveClass, newCount);
  }

  // Start the initial interval
  intervalLoad = setInterval(shiftActiveClass, count);

  // Event handler to change the interval and switch the class
  $('.mobile-btn-next').click(function () {
    $('.option').removeClass('active');
    $(this).addClass('active');
    resetInterval(20000); // Change the interval to 20 seconds
  });
  $('.mobile-btn-prev').click(function () {
    $('.option').removeClass('active');
    $(this).addClass('active');
    resetInterval(20000); // Change the interval to 20 seconds
  });

  // Set a timer to switch back to 5 seconds if no clicks occur
  var timer;
  $(document).on('click', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      resetInterval(5000); // After 20 seconds of no clicks, switch back to 5 seconds
    }, 20000);
  });
});
