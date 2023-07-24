import Header from "../helpers/Header.jsx"

const Home = () => {

  return (
    <main>
      <Header />
    <section className="contenedor__todo">
      <section class="caja__trasera">
        <section class="caja__trasera-login">
          <h3>¿Eres un administrador?</h3>
          <p>Dale al boton para iniciar sesión</p>
          <button id="btn__iniciar-sesión"> Iniciar Sesión</button>
        </section>
        <section class="caja__trasera-register">
          <h3>¿Eres un cliente?</h3>
          <p>Dale al boton para entrar a la pagina</p>
          <button id="btn__registrarse"> Cliente</button>
        </section>
      </section>
    </section>
    </main>
  );
};

export default Home;
