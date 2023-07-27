import HeaderCliente from "../../helpers/HeaderCliente";

const PaginaPrincipalCliente = () => {
  return (
    <section>
      <HeaderCliente />
      <footer className="footer">
        <h5>Contacto</h5>
        <h5>
          N°: 304 5580999 - Francisco Gonzales | 311 3567941 - Berta de Gonzales
        </h5>
        <h5>Berta@gmail.com - francisco@hotmail.com</h5>
      </footer>
      <section className="informacion_inicio_clientes">
        <img className="imagen-bienvenidos" src="/public/Tienda.jpg" alt="" />
        <p>
          Ofrecemos un servicio para jovenes con bajo recursos el cual lleva
          acabo un serie de tareas que cada uno debe de realizar durante
          el dia. Se les genera todos los implementos para realizar dichas tareas
          y hay algunas tareas que necesitan de cierta inducción para poderse
          realizar, cada una lleva consigo el precio de cada tarea.
        </p>
        <p>
          Tambien facilitamos una tienda de los productos que se recolectan y se fabrican en nuestra finca  
        </p>
      </section>
    </section>
  );
};

export default PaginaPrincipalCliente;
