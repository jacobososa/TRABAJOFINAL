import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
        <header>
            <nav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/informacion"}>REGISTRO E INFORMACION DE CLIENTES</Link>
                <Link to={"/tareas"}>Tareas A Realizar</Link>

            </nav>
        </header>
    </section>
  )
}

export default Header