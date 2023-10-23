let $rootEl = document.getElementById('contact');
let $arrow = document.getElementById('bouncing-arrow');

// only add the class when the class is not present
// a.k.a when the animation is not playing
$rootEl.addEventListener('click', event => {
  if (!$arrow.classList.contains('bounce')) {
    $arrow.classList.toggle('bounce');
  }
});
// remove the class when the animation is done
// to prevent spamming and some error in the future
$arrow.addEventListener('webkitAnimationEnd', function () {
  $arrow.classList.remove('bounce');
});
