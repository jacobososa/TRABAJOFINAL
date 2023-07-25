import HeaderAdmin from '../../helpers/HeaderAdmin'

export const PaginaPrincipalAdmin = () => {
  return (
    <section>
        <HeaderAdmin/>
        <section className='PAGINAPRINCIPAL'>
        <h1>PAGINA PRINCIPAL</h1>
        <header className='header__PaginaPrincipalAdmin'> 
          <nav>
        <button>Clientes</button>
        <button>Ventas</button>
        <button>Tareas</button>
        </nav>
        </header>
        
        </section>
    </section>
  )
}
