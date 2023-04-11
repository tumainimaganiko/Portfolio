let div = document.createElement("div");
div.id = 'menu-container';

let ul = document.createElement('ul');
ul.id = 'outer-list';
let li = document.createElement('li');
let text = document.createTextNode("Portfolio");
li.appendChild(text);
ul.appendChild(li);

let li2 = document.createElement('li');
let text2 = document.createTextNode("Contact");
li2.appendChild(text2);
ul.appendChild(li2);

let li3 = document.createElement('li');
let text3 = document.createTextNode("About");
li3.appendChild(text3);
ul.appendChild(li3);

div.appendChild(ul);

function myFunction(){
    const element = document.getElementById("my-logo");
    element.appendChild(div);
}

let btnMenu = document.querySelector('header');
btnMenu.addEventListener('click',myFunction);