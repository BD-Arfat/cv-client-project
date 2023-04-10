import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Navbar = () => {
    const {logout, user} = useContext(AuthContext)

    const handelLogout = () =>{
        logout()
        .then(()=>{})
        .catch(error =>console.error(error))
    }

    const items = <>
        <li><Link to={'/'} className=' font-bold text-lg'>Home</Link></li>
        <li><Link to={'/appointment'} className=' font-bold text-lg'>Appointment</Link></li>
        {user?.email ?
            <li><Link onClick={handelLogout} to={'/login'} className='text-lg font-bold '>LogOut</Link></li> :
        <li><Link to={'/login'} className='text-lg font-bold '>Login</Link></li>}
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className="normal-case text-xl md:text-3xl font-bold">DOCTOR-PORTAL</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;