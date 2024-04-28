'use strict'

const intro1 = document.querySelector(`.Intro-slide`)
const intro2 = document.querySelector(`.Intro-slide2`)



// Funciones

// Animación intro

const windowHandler = () => {
    setTimeout(() => {
     
        setTimeout(() =>{
            intro1.style.top = '-100vh'
        }, 1300);
   
    
    setTimeout(()=>
    {   intro2.style.bottom= '100vh'
}, 1300);

    
    });

}



// Asignaciones
window.addEventListener('DOMContentLoaded', windowHandler);


