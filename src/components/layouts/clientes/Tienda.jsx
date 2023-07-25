import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "./config/Tareaconnection";
import HeaderCliente from '../../helpers/HeaderCliente'

const Tienda = () => {
    const [listaTareas, setListaTareas] = useState([]);
    const mostrarTareas = async () => {
      const tareasCollection = collection(database, "Tienda");
      const data = await getDocs(tareasCollection);
      setListaTareas(data.docs.map((doc) => ({ ...doc.data() })));
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
    };
    useEffect(() => {
      mostrarTareas();
    }, []);

  return (
    <main className="imagen-fondo">
        <HeaderCliente/>
        <section className="tienda">
      {listaTareas.map((tareaItem) => (
        <section key={tareaItem.nombre}>
          <img src={tareaItem.imagen} alt="verdura" />
          <h2>{tareaItem.nombre}</h2>
          <p>{tareaItem.precio}</p>
        </section>
      ))}
    </section>
    </main>
  )
}

export default Tienda