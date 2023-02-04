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

//Validação Formulário de Contato

const submitForm1 = document.getElementById("form1");

//Validação Newsletter
const nomeForm2 = document.getElementById("nomeNews");
const emailForm2 = document.getElementById("emailNews");
const submitForm2 = document.getElementById("form2");
const erroEmail = document.getElementById("erroMail");


const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let msgErro = false;



submitForm2.addEventListener("submit", function (event) {
    if (nomeForm2.value == "" || msgErro == true) {
        alert("O formulário possui erros e não pode ser enviado")
        nomeForm2.style.backgroundColor = "pink"
        event.preventDefault()
    } else {
        nomeForm2.style.backgroundColor = "green"
    }
})


emailForm2.addEventListener("blur", function (event) {
    if (emailForm2.value.match(validRegex)) {
        emailForm2.style.backgroundColor = "green";
        erroEmail.style.display = "none";
        msgErro = false;       
    } else {
        emailForm2.style.backgroundColor = "pink";
        erroEmail.style.display = "block";
        msgErro = true;     
    }
})



// if (msgErro == true) {
        //     erroEmail.style.display = "none"
        //     msgErro = false;
        // }

// if (msgErro == false) {
        //     erroEmail.style.display = "block"
        //     msgErro = true;
        // }
