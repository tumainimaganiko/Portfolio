let btnMenu = document.getElementById('hamburger');
let xBtn = document.getElementById("x-mark");

btnMenu.addEventListener('click',myFunction);

function myFunction(){
    let element = document.querySelector(".toolbar");   
    let list = document.getElementById('option');
    element.style.display = "none";
    list.style.display = "block";
}

xBtn.addEventListener('click', closing);

function closing(){
    let element = document.querySelector(".toolbar");   
    let list = document.getElementById('option');
    element.style.display = "flex";
    list.style.display = "none";
}

let btn1 = document.getElementById('about-link');
let btn2 = document.getElementById('contact-link');
let btn3 = document.getElementById('port');


btn1.addEventListener('click', closing);
btn2.addEventListener('click',closing);
btn3.addEventListener('click',closing);