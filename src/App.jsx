import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Informacion from "./components/layouts/administrador/registroClientes/Informacion";
import Tareas from "./components/layouts/administrador/registroTareas/Tareas";
import Home from "./components/layouts/Home";
import PaginaPrincipal from "./components/layouts/clientes/PaginaPrincipal";
import TareasClientes from "./components/layouts/clientes/TareasClientes";
import Tienda from "./components/layouts/clientes/Tienda";
import { PaginaPrincipalAdmin } from "./components/layouts/administrador/PaginaPrincipalAdmin";
import TiendaAdministrador from "./components/layouts/administrador/registroTienda/TiendaAdministrador";
import TotalCompras from "./components/layouts/clientes/TotalCompras";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/informacion",
    element: <Informacion />,
  },
  {
    path: "/tareas",
    element: <Tareas />,
  },

  {
    path: "/paginaclientes",
    element: <PaginaPrincipal />,
  },

  {
    path: "/paginaadministrador",
    element: <PaginaPrincipalAdmin />,
  },

  {
    path: "/tareaclientes",
    element: <TareasClientes />,
  },

  {
    path: "/tiendaclientes",
    element: <Tienda />,
  },

  { 
    path: "/cliente",
    element: <PaginaPrincipal /> },

  { 
    path: "/tienda_admin", 
    element: <TiendaAdministrador /> 
  },
  { 
    path: "/total",
    element: <TotalCompras/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
