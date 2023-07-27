import { Link } from "react-router-dom"

const HeaderAdmin = () => {
  return (
    <section>
    <header className="header_Administrador">
        <nav>
          <Link to={"/tareas"}>Tareas</Link>
          <Link to={"/informacion"}>Registro e Infromación de clientes</Link>
          <Link to={"/tienda_admin"} >Tienda</Link>
          <Link to={"/"}>Cerrar Seccion</Link>
        </nav>
    </header>
</section>
  )
}

export default HeaderAdmin