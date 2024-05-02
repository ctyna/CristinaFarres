'use strict'



// Quiero que en los diferentes textos se añada
//  y se quite la clase isActive.
const text1 = document.querySelector(`.Introduction-h3`)
const text2 = document.querySelector(`.Introduction-h3--2`)




function cambiarTexto() {
    text1.classList.toggle(`isActive`);
    text2.classList.toggle(`isActive`)
}

setInterval(cambiarTexto, 3000);

