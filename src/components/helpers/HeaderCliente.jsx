import { Link } from "react-router-dom";
import Imagen from "../../../public/LogoFinca.jpg"

const HeaderCliente = () => {
  return (
    <section>
        <header className="header_Clientes">
          <img className="logodos" src={Imagen} alt="logo"/>
          <nav>
                <Link to={"/paginaclientes"}>Pagina Principal</Link>
                <Link to={"/tareaclientes"}>Tareas</Link>
                <Link to={"/tiendaclientes"}>Tienda</Link>
                <Link to={"/"}>Cerra Sesión</Link>
                </nav>
        </header>
    </section>
  )
}

export default HeaderCliente