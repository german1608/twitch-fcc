$(document).ready(function () {
  // For the navbar
  $(".button-collapse").sideNav();

  // For the tabs
  $('ul.tabs').tabs({
    swipeable: true
    // responsiveThreshold: $('.app').width()
  });
});