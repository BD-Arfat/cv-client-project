import { createBrowserRouter } from "react-router-dom";
import Laout from "../Laouts/Laout";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivetRouters from "../PrivetRouters/PrivetRouters";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Laout/>,
        children : [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/appointment',
                element:<PrivetRouters><Appointment/></PrivetRouters>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])