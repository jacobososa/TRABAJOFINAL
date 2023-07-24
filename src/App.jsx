import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Informacion from "./components/layouts/administrador/registroClientes/Informacion"
import Tareas from "./components/layouts/administrador/registroTareas/Tareas"
import Home from "./components/layouts/Home"
import PaginaPrincipal from "./components/layouts/clientes/PaginaPrincipal"
import TareasClientes from "./components/layouts/clientes/TareasClientes"
import Tienda from "./components/layouts/clientes/Tienda"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,

  },

  {
    path:"/informacion",
    element: <Informacion/>,

  },
  {
    path:"/tareas",
    element: <Tareas/>,

  },
 
  {
    path:"/paginaclientes",
    element: <PaginaPrincipal/>

  },

  {
    path:"/tareaclientes",
    element: <TareasClientes/>,

  },

  {
    path:"/tienda",
    element: <Tienda/>,

  },


]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
