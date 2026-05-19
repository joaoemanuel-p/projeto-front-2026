import { NavLink } from "react-router";

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
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/notas"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Notas
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/faltas"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Faltas
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/boletos"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Boletos
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/requerimentos"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Requerimentos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;