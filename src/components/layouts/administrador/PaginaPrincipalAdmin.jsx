import { Link } from 'react-router-dom'
import HeaderAdmin from '../../helpers/HeaderAdmin'

export const PaginaPrincipalAdmin = () => {
  return (
    <section>
        <header className='header__PaginaPrincipalAdmin'> 
        <HeaderAdmin />
        <section>
        <img className='logo' src="/LogoFinca.jpg" alt="" />
        </section>
        </header>
    </section>
  )
}
