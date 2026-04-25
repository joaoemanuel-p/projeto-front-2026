import "./MainLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function MainLayout({ children }) {
  return (
    <main className="layout">
      <Sidebar />

      <section className="conteudo">
        <Header />
        {children}
      </section>
    </main>
  );
}