import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
        <header>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/informacion"}>Registro e Infromación de clientes</Link>
                <Link to={"/tareas"}>Tareas A Realizar</Link>
                <Link to={"/paginaclientes"}>Pagina Principal</Link>
                <Link to={"/tareaclientes"}>Tareas</Link>
                <Link to={"/tiendaclientes"}>Tienda</Link>
            </nav>
        </header>
    </section>
  )
}

export default Header