import { Outlet } from "react-router";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import "./Layout.css";

function Layout({ titulo }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Header titulo={titulo} />

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;