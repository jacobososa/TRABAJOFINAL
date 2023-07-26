import { Link } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "../../clientes/config/Tareaconnection";


const TiendaAdministrador = () => {
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

  const [Valor, setValor] = useState(0);
  const Sumar = () =>{
    setValor(Valor+1);
  }
  return (
    <section>
        <Link className="boton_Inicio" to={"/paginaadministrador"} >Inicio</Link>
        <main className="imagen-fondo">
        <section className="tienda">
        <section className="carrito">
          <h1>Tienda El Benecefactor</h1>
        <FaShoppingCart className='compras'/>
        <section className='contador'>
        <h3>{Valor}</h3>
        </section>
        </section>
      {listaTareas.map((tareaItem) => (
        <section className="secciones-tienda" key={tareaItem.nombre}>
          <h2>{tareaItem.nombre}</h2>
          <h2>{tareaItem.precio}</h2>
          <img src={tareaItem.imagen} alt="verdura" />
          <button onClick={Sumar}>{tareaItem.boton} Agregar Al Carrito</button>
        </section>
      ))}
    </section>
    </main>
    </section>
  )
}

export default TiendaAdministrador