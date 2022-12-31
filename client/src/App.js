
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom"

import { Navbar, Footer } from "./components";
import { Register, Login, Home, Single, Write } from "./pages"


const router = createBrowserRouter([
  {
  path: "/",
  element: 
    <div>
    
    <Navbar />
    <Home />
    <Footer />
    
    </div>
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
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
