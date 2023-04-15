import { createBrowserRouter } from "react-router-dom";
import Laout from "../Laouts/Laout";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivetRouters from "../PrivetRouters/PrivetRouters";
import DashbordLaout from "../Laouts/DashbordLaout/DashbordLaout";
import Dashbor from "../Pages/Dashbord/Dashbor";
import MyAppointment from "../Pages/Dashbord/MyAppointment/MyAppointment";
import Users from "../Pages/Dashbord/Users/Users";
import AdminRouters from "../PrivetRouters/AdminRouts";
import AddDoctor from "../Pages/Dashbord/AddDoctor/AddDoctor";
import ManageDoctor from "../Pages/Dashbord/ManageDoctor/ManageDoctor";
import Payment from "../Pages/Dashbord/Payment/Payment";

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
    },
    {
        path:'/dashbord',
        element: <PrivetRouters><DashbordLaout></DashbordLaout></PrivetRouters>,
        children:[
            {
                path : "/dashbord",
                element:<MyAppointment/>
            },
            {
                path : "/dashbord/allUsers",
                element:<AdminRouters><Users/></AdminRouters>
            },
            {
                path : "/dashbord/addDoctor",
                element:<AdminRouters><AddDoctor/></AdminRouters>
            },
            {
                path : "/dashbord/manageDoctor",
                element:<AdminRouters><ManageDoctor/></AdminRouters>
            },
            {
                path : "/dashbord/payment/:id",
                element:<AdminRouters><Payment/></AdminRouters>,
                loader: ({params})=> fetch(`http://localhost:5000/bookingTreatment/${params.id}`)
            }
        ]
    }
])