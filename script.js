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

//Chave para validação do e-mail;

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Validação Formulário de Contato
const submitForm1 = document.getElementById("form1");
const erroForm1 = document.getElementsByClassName("valid1");
const emailForm1 = document.getElementById("erroMail1");
let msgErro1 = false;

submitForm1.addEventListener("submit", function (e) {
    for (let i = 0; i < erroForm1.length; i++) {
        if (erroForm1[i].value == "") {
            e.preventDefault();
            erroForm1[i].style.backgroundColor = "pink"
            msgErro1 = true;
        } else {
            erroForm1[i].style.backgroundColor = "green"
            msgErro1 = false;
        }
    } 
    if (msgErro1 == true) {
        e.preventDefault();
        alert("O formulário não pode conter campos vazios")
    } else {
        msgErro1 = false;
    }
})

//Validação Newsletter
const nomeForm2 = document.getElementById("nomeNews");
const emailForm2 = document.getElementById("emailNews");
const submitForm2 = document.getElementById("form2");
const erroEmail2 = document.getElementById("erroMail2");
let msgErro2 = false;

submitForm2.addEventListener("submit", function (event) {
    if (nomeForm2.value == "" || msgErro2 == true) {
        alert("O formulário possui erros e não pode ser enviado")
        nomeForm2.style.backgroundColor = "pink"
        emailForm2.style.backgroundColor = "pink";
        erroEmail2.style.display = "block";
        event.preventDefault()
    } else {
        nomeForm2.style.backgroundColor = "green"
    }
})


emailForm2.addEventListener("blur", function (event) {
    if (emailForm2.value.match(validRegex)) {
        emailForm2.style.backgroundColor = "green";
        erroEmail2.style.display = "none";
        msgErro2 = false;       
    } else {
        emailForm2.style.backgroundColor = "pink";
        erroEmail2.style.display = "block";
        msgErro2 = true;     
    }
})


