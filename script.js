const menu = document.getElementById("menuP");
const hamburguer = document.getElementById("menuAbrir");
const menuFechar = document.getElementById("fechar");

function aparecer () {
    menu.style.display = "block";
    hamburguer.style.display = "none"
    menuFechar.style.display = "block"
}

function sumir () {
    menu.style.display = "none"
    hamburguer.style.display = "block"
    menuFechar.style.display = "none"
}