import "./Sidebar.css";
import logo from "../../assets/learn.svg";

function Sidebar() {
  return (
    <nav className="menu-lateral">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Aluno Online</h2>
      </div>

      <ul>
        <li>Dashboard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimentos</li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}

export default Sidebar;