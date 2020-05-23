const btnmenu = document.querySelector(".btnmenu");
const menu = document.querySelector(".nav");
const text_w = document.querySelector(".text-welcome");

btnmenu.onclick = function(){
    menu.classList.toggle("mostrar");
    text_w.classList.toggle("movertextw");
}