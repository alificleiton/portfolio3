//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const nav = document.querySelector("nav");
  nav.classList.toggle('bg-primary', window.scrollY > 0);
});


//javascript of responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});


//javascript for scroll back to top
scrollBtn.addEventListener("click", () =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for( var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

//fazer um efeito de máquina de escrever no home
const titulo = document.querySelector('.titulo');
typeWritter(titulo);

function typeWritter(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML=' ';
  textoArray.forEach((letra, i) => {
    setTimeout(()=> elemento.innerHTML += letra, 75 * i)
  });
}


