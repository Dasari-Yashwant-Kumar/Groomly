import {createBrowserRouter} from "react-router-dom";
import {Home} from "./Home/Home";
import {Booking} from "./Salons/Booking";
import {SalonInfo} from "./Salons/SalonInfo";
import {Salons} from "./Salons/Salons"

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/Salons",
        element: <Salons/>
    },
    {
        path: "/SalonInfo",
        element: <SalonInfo/>
    },
    {
        path: "/Booking",
        element: <Booking/>
    }
])