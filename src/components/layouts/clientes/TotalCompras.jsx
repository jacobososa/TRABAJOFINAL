import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "./config/Tareaconnection";
import HeaderCliente from "../../helpers/HeaderCliente";


const TotalCompras = () => {
    const [listaTareas, setListaTareas] = useState([]);
    const mostrarTareas = async () => {
    const tareasCollection = collection(database, "Total-Tienda");
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
    <h3 className="titutarea">Total compras</h3> 
    <section className="table-container">
        <table className="creative-table">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
          </thead>
    <tbody>
    {listaTareas.map((tareaItem) => (
     <tr className="uno"  key={tareaItem.nombre}>
    <td>{tareaItem.cantidad}</td>
    <td>{tareaItem.producto}</td>
    <td>{tareaItem.precio}</td>
    <td><img src={tareaItem.imagen} alt="imagen"/></td>
    </tr>
    ))
    }
    </tbody>
    </table>
    </section>
    </section>
  )
}

export default TotalCompras