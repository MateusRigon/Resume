function jumpScroll() {
	window.scroll(0, 0);
}

function jumpScrolla() {
   	window.scroll(0, 630);
}

function jumpScrollb() {
   	window.scroll(0, 1270);
}

function jumpScrollc() {
   	window.scroll(0, 1880);
}

function jumpScrolld() {
   	window.scroll(0, 2450);
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
 
}
