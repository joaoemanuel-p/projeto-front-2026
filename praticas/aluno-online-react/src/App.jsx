import { Routes, Route } from "react-router";

import Layout from "./components/Layout/Layout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Faltas from "./pages/Faltas/Faltas";
import Boletos from "./pages/Boletos/Boletos";
import Requerimentos from "./pages/Requerimentos/Requerimentos";
import Notas from "./pages/Notas/Notas";

function App() {
  return (
    <Routes>
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
      </Route>
    </Routes>
  );
}

export default App;