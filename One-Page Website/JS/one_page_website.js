function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) { //next/prev slides
    showSlides(slideIndex += n);
}

function currentSlide(n) { // thumb image controls
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myCatSlides");
    var thumbs = document.getElementsByClassName("catThumb");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbs[slideIndex-1].className += " active";
    captionText.innerHTML = thumbs[slideIndex-1].alt;
}