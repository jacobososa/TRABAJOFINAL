import { Link } from "react-router-dom"

const HeaderAdmin = () => {
  return (
    <section>
    <header className="header_Administrador">
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/informacion"}>Registro e Infromación de clientes</Link>
            <Link to={"/tareas"}>Tareas A Realizar</Link>
            <Link to={"/paginaadministrador"}>Pagina Principal Administrador</Link>
        </nav>
    </header>
</section>
  )
}

export default HeaderAdmin