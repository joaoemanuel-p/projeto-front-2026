console.log("JS CARREGOU");

const form = document.getElementById("form-login");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("SUBMIT CAPTURADO");

  let valido = true;

  erroEmail.textContent = "";
  erroSenha.textContent = "";

  if (email.value.trim() === "") {
    erroEmail.textContent = "E-mail obrigatório";
    valido = false;
  }

  if (senha.value.trim() === "") {
    erroSenha.textContent = "Senha obrigatória";
    valido = false;
  }

  if (valido) {
    console.log("REDIRECIONANDO");
    window.location.href = "index.html";
  }
});

email.addEventListener("input", () => {
  erroEmail.textContent = "";
});

senha.addEventListener("input", () => {
  erroSenha.textContent = "";
});