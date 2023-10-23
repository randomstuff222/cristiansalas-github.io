$(document).ready(function () {
  var currentBox = null;
  $('.card').on('click', function () {
    var clickedBox = $(this);
    if (currentBox) {
      currentBox.removeClass('active-roll-in');
      currentBox.addClass('active-roll-out');
      currentBox.on('webkitAnimationEnd', function () {
        $(this).removeClass('active-roll-out');
      });
    }
    if (currentBox && currentBox[0] === clickedBox[0]) {
      currentBox = null;
      clickedBox.removeClass('active-roll-in');
      clickedBox.addClass('active-roll-out');
      clickedBox.on('webkitAnimationEnd', function () {
        $(this).removeClass('active-roll-out');
      });
      return;
    }
    clickedBox.addClass('active-roll-in');
    currentBox = clickedBox;
  });
});
