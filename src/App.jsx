import './App.css';
import {Home} from "./Home/Home";
import {Salons} from "./Salons/Salons";
import {SalonInfo} from "./Salons/SalonInfo";
import {Booking} from "./Salons/Booking";
import {RouterProvider} from "react-router-dom";
import {Router} from "./Router"

function App() {

  return (
    <>
     <RouterProvider router={Router}/>
    </>
  )
}

export default App
