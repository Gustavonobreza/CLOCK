// Lógica : 

/**
 * 1. Relacionar variáveis com as tags HTML.
 * 2. Const's de tempo abrangentes.
 * 3. Mecanismos de contagem.
 * 4. Let's dos dados do horário.
 */

 
// ! 1:
let conteinerDisplay = document.querySelector(".conteiner");
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hor = document.querySelector(".hor");
let day = document.querySelector(".day");

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