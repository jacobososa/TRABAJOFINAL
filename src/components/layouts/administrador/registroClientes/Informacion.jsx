import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "../../clientes/config/Tareaconnection";
import { Link } from "react-router-dom";


const Informacion = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const mostrarTareas = async () => {
    const tareasCollection = collection(database, "Registro_Clientes");
    const data = await getDocs(tareasCollection);
    setListaTareas(data.docs.map((doc) => ({ ...doc.data() })));
    console.log(data.docs.map((doc) => ({ ...doc.data() })));
  };
  useEffect(() => {
    mostrarTareas();
  }, []);
  return (
    <section>
      <h1 className="titutarea">REGISTRO E INFORMACION DE CLIENTES</h1>
              <Link className="boton_Inicio" to={"/paginaadministrador"}>Inicio</Link>
      <section className="table-container">
        <table className="creative-table">
          <thead>
            <tr>            
              <th>Nombre</th>
              <th>Cedula</th>
              <th>Telefono</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody>
            {listaTareas.map((tareaItem) => (
              <tr className="uno" key={tareaItem.nombre}>
                <td>{tareaItem.nombre}</td>
                <td>{tareaItem.documento}</td>
                <td>{tareaItem.telefono}</td>
                <td>{tareaItem.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Informacion;
