import React from "react";
import "./MainLayout.css";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Cards from "../Cards";

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