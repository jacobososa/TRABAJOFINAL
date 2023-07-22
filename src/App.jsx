import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/helpers/Header"
import Informacion from "./components/layouts/administrador/registroClientes/Informacion";
import Tareas from "./components/layouts/administrador/registroTareas/Tareas";
import Home from "./components/layouts/Home";

const router = createBrowserRouter([

  {
    path:"/informacion",
    element: <Informacion/>,

  },
  {
    path:"/tareas",
    element: <Tareas/>,

  },
  {
    path:"/",
    element: <Home/>,

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
