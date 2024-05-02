'use strict'

// Carrousel parts

const carrouselContainer = document.querySelector(`.Carrousel-container`)
const arrowPrev = document.querySelector(`.Carrousel-arrow.Prev`)
const arrowNext = document.querySelector(`.Carrousel-arrow.Next`)
const carrouselImg = document.querySelectorAll(`.Carrousel-img`)
let posicion =  0

// Muestra por consola



console.log(arrowPrev)
console.log(arrowNext)
console.log(carrouselContainer)

// Funciones


// Carrousel 
const arrowNextHandler =   () => {
        posicion++
        if (posicion >= 3) {
            posicion = 0
        }

     carrouselContainer.style.transform = `translateX(-${posicion*(100 / 3)}%)`
    
    }
const arrowPrevHandler = () => {
    posicion--
    if(posicion < 0){
        posicion = 2
    }

    console.log( posicion )

    carrouselContainer.style.transform = `translateX(-${posicion*(100 / 3)}%)`
}


// Asignaciones


arrowNext.addEventListener(`click`, arrowNextHandler);

arrowPrev.addEventListener(`click` , arrowPrevHandler )


setInterval (arrowNextHandler , 3000)

