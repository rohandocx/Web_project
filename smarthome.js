


function currentSlide(n) {
    showSlides1(slideIndex = n);
  }
  
  function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1 ");
    let dots = document.getElementsByClassName("dot");
    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }




/// automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}     
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}

