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

const nomeForm2 = document.getElementById("nomeNews");
const emailForm2 = document.getElementById("emailNews");
const submitForm2 = document.getElementById("form2");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const erroEmail = document.getElementById("erroMail");

let msgErro = false;



submitForm2.addEventListener("submit", function (event) {
    if (nomeForm2.value == "") {
        alert("O formulário não deve conter campos vazios")
        nomeForm2.style.backgroundColor = "pink"
        event.preventDefault()
    } else {
        nomeForm2.style.backgroundColor = "green"
    }
})



emailForm2.addEventListener("blur", function (event) {
    if (emailForm2.value.match(validRegex)) {
        emailForm2.style.backgroundColor = "green";
        if (msgErro == true) {
            erroEmail.style.display = "none"
            msgErro = false;
        }
    } else {
        event.preventDefault()
        emailForm2.style.backgroundColor = "pink"
        if (msgErro == false) {
            erroEmail.style.display = "block"
            msgErro = true;
        }
    }
})



