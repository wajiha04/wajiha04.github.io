
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// *****************

// // When the user scrolls down 25px from the top of the document, slide down the navbar
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
//         document.getElementById("header").style.top = "10px";
//     } else {
//         document.getElementById("header").style.top = "-45px";
//     }
// }

var animateHTML = function () {
  var screens,
    windowHeight;
  var init = function () {
    // get all elements with the class name hidden
    screens = document.getElementsByClassName('hidden');
    //check windowHeight
    windowHeight = window.innerHeight;
    // add event listeners to check position and animate
    _addEventHandlers()
  };
  var _addEventHandlers = function () {
    // on scroll check the scoll position
    window.addEventListener('scroll', _checkPosition);
    // when the elemnt has been resized run init
    window.addEventListener('resize', init);
  };
  var _checkPosition = function () {
    // itterate down the screen as we scroll
    for (var i = 0; i < screens.length; i++) {
      // get the value of the top of elements bounding box
      var posFromTop = screens[i].getBoundingClientRect().top;
      // if the top most point of the elements (posFromTop) - the windowHeight
      // is < or = to 0. change the class name hidden to fade-in-element
      if (posFromTop - windowHeight <= 0) {
        screens[i].className = screens[i].className.replace('hidden', 'fade-in-element');
      }
    }
  }
  return {
    // return and make init avalible to the outer scope
    init: init
  }
}
animateHTML().init()



// Image slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mobile-screen");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
