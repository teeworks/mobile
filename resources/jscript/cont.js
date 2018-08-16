
document.addEventListener("DOMContentLoaded", function(){
    let wrapper = document.getElementById("wrapper");
    let topLayer = wrapper.querySelector(".top");
    let handle = wrapper.querySelector(".handle");
    let skew = 0;
    let delta = 0;
    
    if(wrapper.className.indexOf("skewed") != -1){
        skew = 1000;
    }
    
    wrapper.addEventListener("mousemove", function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        
        handle.style.left = e.clientX + delta + "px";
        
        topLayer.style.width = e.clientX + skew + delta + "px";
    });
});   



$(document).ready(function() {
    
    var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


});
    
 
