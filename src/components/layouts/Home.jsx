

const Home = () => {
  return (
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
      <section class="contenedor__login-register">
        <form action="" class="formulario__login">
          <h2>Administrador</h2>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Cotraseña" />
          <button type="button">Entrar</button>
        </form>
        <form action="" className="formulario__register">
          <h2>Cliente</h2>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Cotraseña" />
          <button type="button">Entrar</button>
        </form>
      </section>
    </section>
  );
};

export default Home;
