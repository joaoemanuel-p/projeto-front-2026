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
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="notas" element={<Notas />} />

        <Route path="faltas" element={<Faltas />} />

        <Route path="boletos" element={<Boletos />} />

        <Route
          path="requerimentos"
          element={<Requerimentos />}
        />
      </Route>
    </Routes>
  );
}

export default App;