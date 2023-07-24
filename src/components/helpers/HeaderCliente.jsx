import { Link } from "react-router-dom";

const HeaderCliente = () => {
  return (
    <section>
        <header className="header_Clientes">
          <nav>
                <Link to={"/paginaclientes"}>Pagina Principal</Link>
                <Link to={"/tareaclientes"}>Tareas</Link>
                <Link to={"/tiendaclientes"}>Tienda</Link>
                </nav>
        </header>
    </section>
  )
}

export default HeaderCliente