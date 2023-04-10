import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate } from 'react-router-dom';

const PrivetRouters = ({children}) => {
    const {user, loding} = useContext(AuthContext)
    if(user){
        return children;
    }
    if(loding){
        return <button className="btn loading  lg:mt-24">loading</button>
    }
    return (
        <Navigate to={'/login'} state={{from : Location}} replace></Navigate>
    );
};

export default PrivetRouters;