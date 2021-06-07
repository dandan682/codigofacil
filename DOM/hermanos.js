const title = document.getElementById('title')
title.innerHTML = 'Cursos'

const descripcion = document.getElementById('description')
// description.innerHTML = 'Lista de cursos'

const items = document.querySelectorAll('li:nth-child(even')
for (let i = 0; i < items.length; i++) {
    let element = items[i]
    element.style.background = '#c5c0f7'
}

const element = document.querySelector('div.row > ul.list-group > li')
console.log(element.parentElement)
console.log(element.nextElementSibling)

const last_element = document.getElementById('last-course')
console.log(last_element.previousElementSibling)
