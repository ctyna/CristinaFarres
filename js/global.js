'use strict'

// Menú desplegable en todas las pantallas

// Acción del menú desplegable

const nav =document.querySelector('.Nav')
const button =document.querySelector('.Header-btn')

// Funciones

const navHandler =  () => {
        nav.classList.toggle(`isActive`)
    }

// Asignaciones


button.addEventListener(`click`, navHandler )