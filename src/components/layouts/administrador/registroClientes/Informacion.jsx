import HeaderAdmin from "../../../helpers/HeaderAdmin"


const Informacion = () => {
  return (
    <section>
        <h1>REGISTRO E INFORMACION DE CLIENTES</h1>
        <section>
            <table>
                <thead>
                <tr>
                    <HeaderAdmin/>
                    <th>N°</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Telefono</th>
                    <th>Cedula</th>
                    <th>Direccion</th>
                </tr>
                </thead>
            </table>
        </section>
    </section>
  )
}

export default Informacion