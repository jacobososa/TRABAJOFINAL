import HeaderCliente from '../helpers/HeaderCliente'
import HeaderAdmin from '../helpers/HeaderAdmin'
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <main>
      <HeaderAdmin />
      <HeaderCliente />
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
          <Link  to={"/cliente"}> Cliente</Link>
        </section>
      </section>
    </section>
    </main>
  );
};

export default Home;
