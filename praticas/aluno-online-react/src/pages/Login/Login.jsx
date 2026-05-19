import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  const [errors, setErrors] = useState({});

  const { login } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!email) {
      newErrors.email = "E-mail obrigatório";
    } else if (!email.includes("@")) {
      newErrors.email = "E-mail inválido";
    }

    if (!senha) {
      newErrors.senha = "Senha obrigatória";
    } else if (senha.length < 6) {
      newErrors.senha =
        "Senha deve ter no mínimo 6 caracteres";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      login({
        nome: "João",
        email,
      });

      navigate("/");
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <Input
          label="E-mail"
          type="text"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          error={errors.email}
        />

        <Input
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
          error={errors.senha}
        />

        <Button text="Entrar" />
      </form>
    </div>
  );
}