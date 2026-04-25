import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'
function App() {

  return <div className='flex flex-col md:flex-row'>
    <aside className='hidden md:block bg-gray-300'>
      <header>
        <img src={logo} alt="imagem do logo"/>
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main className='flex flex-col mas-w-screen'>
      <header>
        <h1>Olá Aluno!</h1>
        <img src={avatar} alt="imagem avatar" />
      </header>
      <h2>Bem vindo ao portal do aluno</h2>
      <section>
        <article>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Incrição para o projeto de extensão</li>
            <li>Eleição para o representante de turma</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li>23/02 - Início do semestre letivo</li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Minhas Disciplinas</h3>
          <ul>
            <li>Construção de frontend</li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
    </main>
    </div>
}

export default App;