import {createBrowserRouter} from "react-router-dom";
import {Home} from "./Home/Home";
import {Booking} from "./Booking/Booking";
import {SalonInfo} from "./Salons/SalonInfo";
import {Salons} from "./Salons/Salons"
import { BookingConfirmation } from "./Booking/BookingConfirmation";

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
    },
    {
        path: "/BookingConfirmation",
        element: <BookingConfirmation/>
    }

])