import Header from "../../../helpers/Header"


const Tareas = () => {
  
  return (
    <section>
        <Header/>
        <h3 className="titutarea">Tareas</h3>
        <section class="table-container">
    <table class="creative-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Documento</th>
          <th>Tarea a Realizar</th>
          <th>Descripción de la Tarea</th>
        </tr>
      </thead>
      <tbody>
        <tr className="uno">
          <td data-label="Nombre">Juanito Pérez</td>
          <td data-label="Documento">1000295789</td>
          <td data-label="Tarea a Realizar">Lavar Verduras</td>
          <td data-label="Descripción de la Tarea">Lavar las verduras para ponerlas a la venta rapidamente.</td>
        </tr>
        <tr>
          <td data-label="Nombre">Roberto Cardona</td>
          <td data-label="Documento">10352945749</td>
          <td data-label="Tarea a Realizar">Limpiar Los Comederos</td>
          <td data-label="Descripción de la Tarea">Limpiarlos sin falta, es necesario para prevenir enfermedades en los animales.</td>
        </tr>
        <tr className="uno">
          <td data-label="Nombre">Maria Ossa</td>
          <td data-label="Documento">1050292769</td>
          <td data-label="Tarea a Realizar">Recolecta De Cosecha</td>
          <td data-label="Descripción de la Tarea">Revisar que frutas y verduras hay, despues recolectarlas.</td>
        </tr>
        <tr>
          <td data-label="Nombre">Robert Catalan</td>
          <td data-label="Documento">1060290779</td>
          <td data-label="Tarea a Realizar">Peinar Los Caballos</td>
          <td data-label="Descripción de la Tarea">Peinarlos de manera cuidadosa para que no se estresen.</td>
        </tr>
        <tr className="uno">
          <td data-label="Nombre">Alex Contreras</td>
          <td data-label="Documento">1099210100</td>
          <td data-label="Tarea a Realizar">Dar Comida A Los Animales</td>
          <td data-label="Descripción de la Tarea">Darle comida a cada uno de los animales sin falta.</td>
        </tr>
        <tr>
          <td data-label="Nombre">Andres Peña</td>
          <td data-label="Documento">11092857200</td>
          <td data-label="Tarea a Realizar">Plantar Semillas</td>
          <td data-label="Descripción de la Tarea">Debe lavar y escoger las semillas para despues plantarlas.</td>
        </tr>
        <tr className="uno">
          <td data-label="Nombre">Daniela Martinez</td>
          <td data-label="Documento">1300275199</td>
          <td data-label="Tarea a Realizar">Ordeñar Las Vacas</td>
          <td data-label="Descripción de la Tarea">Ordeñar cada una de las vacas con cuidado.</td>
        </tr>
        <tr>
          <td data-label="Nombre">Camila Salvador</td>
          <td data-label="Documento">1026565779</td>
          <td data-label="Tarea a Realizar">Limpiar Chiquero</td>
          <td data-label="Descripción de la Tarea">Limpiar el chiquero con cuidado, sin dañar nada.</td>
        </tr>
        <tr className="uno">
          <td data-label="Nombre">Gabriela Florez</td>
          <td data-label="Documento">1030195889</td>
          <td data-label="Tarea a Realizar">Recolecta De Huevos</td>
          <td data-label="Descripción de la Tarea">Debe recolectar los huevos de todos los gallineros.</td>
        </tr>
      </tbody>
    </table>
  </section>
    </section>
  )
}

export default Tareas