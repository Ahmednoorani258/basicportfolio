let colorBox = document.querySelector(".colorbox");
let button = document.querySelector(".colorbtn");
const root = document.documentElement;

button.addEventListener("click", function () {
  
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  root.style.setProperty("--text-color2", "#" + randomColor);
  

});

const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



