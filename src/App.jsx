import './App.css';
import {RouterProvider} from "react-router-dom";
import {Router} from "./Router"
import {Data} from "./Data"


function App() {

  return (
    <>
    <Data> <RouterProvider router={Router}/></Data>
    </>
  )
}

export default App
