import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";

function Layout({ children, titulo }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Header titulo={titulo} />
        {children}
      </div>
    </div>
  );
}

export default Layout;