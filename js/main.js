// Preloader
const preloaderContain = document.querySelector('#preloader-contain');
const percent = document.querySelector('#percent')
let flag = 0;

setInterval(() => {
  percent.textContent = `${flag}%`
  if(flag < 100){
    flag++
  }
}, 15);

setTimeout(()=>{
  preloaderContain.classList.add('close');
}, 2000)


// MODAL

const profile = document.querySelector('.profile');
const modalContain = document.querySelector('#modal-contain');

profile.addEventListener('click', () =>{
  modalContain.classList.add('visible')
})

modalContain.addEventListener('click', () =>{
  if(modalContain.classList.contains('visible')){
    modalContain.classList.remove('visible');
  }
})


// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
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
