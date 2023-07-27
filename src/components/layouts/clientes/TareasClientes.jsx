import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "./config/Tareaconnection";
import HeaderCliente from "../../helpers/HeaderCliente";

const TareasClientes = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const mostrarTareas = async () => {
    const tareasCollection = collection(database, "Tareas-Clientes");
    const data = await getDocs(tareasCollection);
    setListaTareas(data.docs.map((doc) => ({ ...doc.data() })));
    console.log(data.docs.map((doc) => ({ ...doc.data() })));
  };
  useEffect(() => {
    mostrarTareas();
  }, []);

  return (
    <section>
      <HeaderCliente/>
      <h3 className="titutarea">Tareas</h3>
      <section className="table-container">
        <table className="creative-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Tarea a Realizar</th>
              <th>Descripción de la Tarea</th>
              <th>Valor Tarea</th>
            </tr>
          </thead>
          <tbody>
            {listaTareas.map((tareaItem) => (
              <tr className="uno"  key={tareaItem.nombre}>
                <td>{tareaItem.nombre}</td>
                <td>{tareaItem.documento}</td>
                <td>{tareaItem.tarea}</td>
                <td>{tareaItem.descripción}</td>
                <td>{tareaItem.precio}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default TareasClientes;
