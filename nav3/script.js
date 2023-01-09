const nav_btn = document.getElementById('nav_btn');
const links = document.getElementById('links');
const ul1 = document.getElementById('ul1');
const ul2 = document.getElementById('ul2');
const ul3 = document.getElementById('ul3');
const genre = document.getElementById('genre');
const left = document.getElementById('left');
const right = document.getElementById('right');


nav_btn.addEventListener("click", ()=>{
    links.classList.toggle('linksa')
    ul1.classList.toggle('ul12')
    ul2.classList.toggle('ul23')
    ul3.classList.toggle('ul34')
})

genre.addEventListener("mouseover", ()=>{
    left.classList.add('lt')
    right.classList.add('rt')
})

genre.addEventListener("mouseout", ()=>{
    left.classList.remove('lt')
    right.classList.remove('rt')
})

