import "./Dashboard.css";
import MainLayout from "../../components/MainLayout/MainLayout";
import Cards from "../../components/Cards/Cards";

export default function Dashboard() {
  return (
    <MainLayout>
      <section>
        <h2>Bem-vindo ao portal do aluno</h2>
        <Cards />
      </section>
    </MainLayout>
  );
}