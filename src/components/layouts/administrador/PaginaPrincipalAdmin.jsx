import { Link } from 'react-router-dom'
import HeaderAdmin from '../../helpers/HeaderAdmin'

export const PaginaPrincipalAdmin = () => {
  return (
    <section>
        <HeaderAdmin/>
        <section className='PAGINAPRINCIPAL'>
        <h1>PAGINA PRINCIPAL</h1>
        
        <header className='header__PaginaPrincipalAdmin'> 
          <nav>
        <Link to={"/tareas"}>Tareas</Link>
        <Link to={"/informacion"}>Registro e Infromación de clientes</Link>
        <Link to={"/tienda_admin"} >Tienda</Link>
        
        <img className='logo' src="/LogoFinca.jpg" alt="" />
        </nav>
        </header>
        
        </section>
    </section>
  )
}
