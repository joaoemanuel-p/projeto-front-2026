import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuth } from "./hooks/useAuth";

import Layout from "./components/Layout/Layout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Faltas from "./pages/Faltas/Faltas";
import Boletos from "./pages/Boletos/Boletos";
import Requerimentos from "./pages/Requerimentos/Requerimentos";
import Notas from "./pages/Notas/Notas";
import Login from "./pages/Login/Login";

import RequerimentoForm from "./forms/RequerimentoForm";

function App() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
    );
  }

  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={<Layout titulo="Olá, Aluno!" />}
      >
        <Route index element={<Dashboard />} />
      </Route>

      <Route
        path="/notas"
        element={<Layout titulo="Minhas Notas" />}
      >
        <Route index element={<Notas />} />
      </Route>

      <Route
        path="/faltas"
        element={<Layout titulo="Minhas Faltas" />}
      >
        <Route index element={<Faltas />} />
      </Route>

      <Route
        path="/boletos"
        element={<Layout titulo="Meus Boletos" />}
      >
        <Route index element={<Boletos />} />
      </Route>

      <Route
        path="/requerimentos"
        element={
          <Layout titulo="Meus Requerimentos" />
        }
      >
        <Route index element={<Requerimentos />} />

        <Route
          path="novo"
          element={<RequerimentoForm />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;