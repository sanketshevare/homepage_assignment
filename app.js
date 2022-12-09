const dropbtn = document.querySelector(".dropbtn");
const fa = document.querySelector(".fa fa-caret-down");
const service1 = document.querySelector(".service1");
const service2 = document.querySelector(".service2");
const service3 = document.querySelector(".service3");
const service4 = document.querySelector(".service4");
const service5 = document.querySelector(".service5");
const service6 = document.querySelector(".service6");
const service7 = document.querySelector(".service7");




dropbtn.addEventListener('click', () => {
    document.getElementById("dropdown").classList.toggle("show");


})




window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



service1.addEventListener('mouseover', () => {
    document.querySelector(".ser1").style.display = "inline-block";
    document.querySelector(".ser2").style.display = "none";
    document.querySelector(".ser3").style.display = "none";
    document.querySelector(".ser4").style.display = "none";
    document.querySelector(".ser5").style.display = "none";
    document.querySelector(".ser6").style.display = "none";
    document.querySelector(".ser7").style.display = "none";


 })
 service2.addEventListener('mouseover', () => {
    document.querySelector(".ser1").style.display = "none";
    document.querySelector(".ser2").style.display = "inline-block";
    document.querySelector(".ser3").style.display = "none";
    document.querySelector(".ser4").style.display = "none";
    document.querySelector(".ser5").style.display = "none";
    document.querySelector(".ser6").style.display = "none";
    document.querySelector(".ser7").style.display = "none";

 })

 service3.addEventListener('mouseover', () => {
    document.querySelector(".ser1").style.display = "none";
    document.querySelector(".ser2").style.display = "none";
    document.querySelector(".ser3").style.display = "inline-block";
    document.querySelector(".ser4").style.display = "none";
    document.querySelector(".ser5").style.display = "none";
    document.querySelector(".ser6").style.display = "none";
    document.querySelector(".ser7").style.display = "none";
 })


 service4.addEventListener('mouseover', () => {
    document.querySelector(".ser1").style.display = "none";
    document.querySelector(".ser2").style.display = "none";
    document.querySelector(".ser3").style.display = "none";
    document.querySelector(".ser4").style.display = "inline-block";
    document.querySelector(".ser5").style.display = "none";
    document.querySelector(".ser6").style.display = "none";
    document.querySelector(".ser7").style.display = "none";
     })



 service5.addEventListener('mouseover', () => {
    document.querySelector(".ser1").style.display = "none";
    document.querySelector(".ser2").style.display = "none";
    document.querySelector(".ser3").style.display = "none";
    document.querySelector(".ser4").style.display = "none";
    document.querySelector(".ser5").style.display = "inline-block";
    document.querySelector(".ser6").style.display = "none";
    document.querySelector(".ser7").style.display = "none";
     })

 service6.addEventListener('mouseover', () => {
    document.querySelector(".ser1").style.display = "none";
    document.querySelector(".ser2").style.display = "none";
    document.querySelector(".ser3").style.display = "none";
    document.querySelector(".ser4").style.display = "none";
    document.querySelector(".ser5").style.display = "none";
    document.querySelector(".ser6").style.display = "inline-block";
    document.querySelector(".ser7").style.display = "none";
 })


 service7.addEventListener('mouseover', () => {
    document.querySelector(".ser1").style.display = "none";
    document.querySelector(".ser2").style.display = "none";
    document.querySelector(".ser3").style.display = "none";
    document.querySelector(".ser4").style.display = "none";
    document.querySelector(".ser5").style.display = "none";
    document.querySelector(".ser6").style.display = "none";
    document.querySelector(".ser7").style.display = "inline-block";
 })




 let slideIndex = 0;
            showSlides();
            
            function showSlides() {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
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
              setTimeout(showSlides, 8000); // Change image every 2 seconds
            }