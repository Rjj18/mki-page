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

// Validação dos Fomulários

let nomeForm2 = document.getElementById("nomeNews");
let emailForm2 = document.getElementById("emailNews");
let submitForm2 = document.getElementById("form2");

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitForm2.addEventListener("submit", function (event) {
    if (nomeForm2.value == "" || emailForm2.value == "") {
        event.preventDefault()
        alert("digite algo")
    }
})

submitForm2.addEventListener("submit", function (event) {
    if (emailForm2.value.match(validRegex)) {
    } else {
        event.preventDefault()
        alert("Digite um e-mail válido")
    }
})



