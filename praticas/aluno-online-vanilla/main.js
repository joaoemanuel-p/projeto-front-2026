// Seleciona o formulário
const form = document.getElementById("loginForm");

// Seleciona os inputs
const email = document.getElementById("email");
const senha = document.getElementById("senha");

// Seleciona as mensagens de erro
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");


// Evento de envio do formulário
form.addEventListener("submit", function(event){

    // Impede o recarregamento da página
    event.preventDefault();

    let formularioValido = true;

    // Validação do email
    if(email.value.trim() === ""){
        erroEmail.textContent = "O campo de email é obrigatório.";
        email.classList.add("input-erro");
        formularioValido = false;
    }else{
        erroEmail.textContent = "";
        email.classList.remove("input-erro");
    }

    // Validação da senha
    if(senha.value.trim() === ""){
        erroSenha.textContent = "O campo de senha é obrigatório.";
        senha.classList.add("input-erro");
        formularioValido = false;
    }else{
        erroSenha.textContent = "";
        senha.classList.remove("input-erro");
    }

    // Se estiver tudo correto
    if(formularioValido){
        window.location.href = "dashboard.html";
    }

});


// Remove erro do email quando usuário começa a digitar
email.addEventListener("input", function(){

    if(email.value.trim() !== ""){
        erroEmail.textContent = "";
        email.classList.remove("input-erro");
    }

});


// Remove erro da senha quando usuário começa a digitar
senha.addEventListener("input", function(){

    if(senha.value.trim() !== ""){
        erroSenha.textContent = "";
        senha.classList.remove("input-erro");
    }

});