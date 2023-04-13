import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import useAdmin from '../../Hooks/AdminHookToken';

const DashbordLaout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                        <li><Link className='font-bold' to={"/dashbord"}>Appointment</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link className='font-bold' to={"/dashbord/allUsers"}>All-Users</Link></li>
                                <li><Link className='font-bold' to={"/dashbord/addDoctor"}>Add-Doctor</Link></li>
                                <li><Link className='font-bold' to={"/dashbord/manageDoctor"}>Manage Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLaout;