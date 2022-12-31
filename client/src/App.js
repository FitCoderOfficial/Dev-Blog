
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // Route,
} from "react-router-dom"

import { Navbar, Footer } from "./components";
import { Register, Login, Home, Single, Write } from "./pages"

import './style.scss'


const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout />,
  children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },  
  {
    path: "/login",
    element: <Login />,
  },
 ]);


function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
