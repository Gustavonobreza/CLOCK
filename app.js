// Lógica : 

/**
 * 1. Relacionar variáveis com as tags HTML.
 * 2. Mecanismos de contagem. Atualização da hora no HTML.
 */


// ! 1:
let conteinerDisplay = document.querySelector(".conteiner");
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hor = document.querySelector(".hor");
let day = document.querySelector(".day");

let img = document.querySelector(".img");

// ! 2: 

function RefreshingTime() {
   let time = new Date();
   let now = time.toLocaleTimeString('pt-br').split(':');
   hor.innerHTML = now[0] + "<span>:</span>";
   min.innerHTML = now[1] + "<span>:</span>";
   sec.innerHTML = now[2]

   day.innerHTML = time.toLocaleDateString('pt-br');
};
setInterval(RefreshingTime, 1000)

// ! 3:
/* Obtendo o tamanho da janela(para o responsivo) */
window.addEventListener('DOMContentLoaded', function() {
   sizeOfThings()
});
window.addEventListener('resize', function() {
   sizeOfThings()
});

function sizeOfThings() {
   let windowWidth = window.innerWidth;
   // console.clear()
   // console.log(windowWidth);
   changeBg(windowWidth)
};

function changeBg(w) {
   if (w < 480) {
      img.src = './images/mobilePhoto.jpg'
   }else{
      img.src = './images/photo-bg.jpg'
   }
}