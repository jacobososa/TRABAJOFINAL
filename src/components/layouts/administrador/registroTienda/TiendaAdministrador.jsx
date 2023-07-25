import { Link } from "react-router-dom"


const TiendaAdministrador = () => {
  return (
    <section>
        <h1>TIENDA CLIENTE</h1>
        <Link className="boton_Inicio" to={"/paginaadministrador"} >Inicio</Link>
    </section>
  )
}

export default TiendaAdministrador