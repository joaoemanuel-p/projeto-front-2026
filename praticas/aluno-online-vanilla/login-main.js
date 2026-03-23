const emailErro = document.querySelector("#emailErro");
const senhaErro = document.querySelector("#senhaErro");
const form = document.querySelector('#loginForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const emailErro = document.querySelector("#error-email");
  const senhaErro = document.querySelector("#error-senha");

  // limpa erros
  emailErro.textContent = "";
  senhaErro.textContent = "";

  let valido = true;

  if (email.value.trim() === '') {
    emailErro.textContent = "O campo de email é obrigatório.";
    valido = false;
  }

  if (senha.value.trim() === '') {
    senhaErro.textContent = "O campo de senha é obrigatório.";
    valido = false;
  } else if (senha.value.length < 8) {
    senhaErro.textContent = "A senha deve ter no mínimo 8 caracteres.";
    valido = false;
  }

  if (valido) {
    window.location.href = "login.html";
  }
});