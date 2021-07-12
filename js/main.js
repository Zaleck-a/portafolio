// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});


const nav = document.querySelector('#nav');

hamburger.addEventListener('click', function(e){
    nav.classList.toggle('slide')
});
