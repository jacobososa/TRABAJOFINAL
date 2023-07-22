import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
        <header>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/informacion"}>REGISTRO E INFORMACION DE CLIENTES</Link>
                <Link to={"/tareas"}>Tareas A Realizar</Link>
                <h1>hola</h1>
            </nav>
        </header>
    </section>
  )
}

export default Header