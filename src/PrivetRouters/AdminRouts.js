import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate } from 'react-router-dom';
import useAdmin from '../Hooks/AdminHookToken';

const AdminRouters = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const [isAdmin, isAdminLoding] = useAdmin(user?.email)
    if(user && isAdmin){
        return children;
    }
    if(loding || isAdminLoding){
        return <button className="btn loading  lg:mt-24">loading</button>
    }
    return (
        <Navigate to={'/login'} state={{from : Location}} replace></Navigate>
    );
};

export default AdminRouters;