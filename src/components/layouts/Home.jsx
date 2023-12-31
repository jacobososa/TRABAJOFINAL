import { Link } from "react-router-dom";
import { useState } from "react";
import imagen_logo from "../../assets/login.jpg";

const Home = () => {
  const [PinValid, setPinValid] = useState(false);
  const [inputPin, setInputPin] = useState("");
  const PinValidacion = () => {
    if (inputPin == "2222") {
      setPinValid(true);
    } else {
      alert("El pin es incorrecto");
    }
  };
  if (PinValid) {
    window.location.href = "/paginaadministrador";
    return null;
  }

  return (
    <section>
      <img className="logo_login" src={imagen_logo} alt="login"></img>
      <main className="contenedor__todo">
        <section class="caja__trasera">
          <section class="caja__trasera-login">
            <h3>¿Eres un administrador?</h3>
            <p>Ingrese el pin correcto y dale al boton para iniciar sesión</p>
            <input
              className="InputValidacion"
              type="password"
              placeholder="Ingrese el pin"
              onChange={(e) => setInputPin(e.target.value)}
            />
            <Link
              to={PinValidacion ? { pathname: "/" } : "/paginaadministrador"}
              onClick={PinValidacion} className="btn-login-admin">{" "}Administracion</Link>
          </section>
          <section class="caja__trasera-register">
            <h3>¿Eres un cliente?</h3>
            <p>Dale al boton para entrar a la pagina</p>
            <Link to={"/cliente"}> Cliente</Link>
          </section>
        </section>
      </main>
    </section>    
  );
};

export default Home;
