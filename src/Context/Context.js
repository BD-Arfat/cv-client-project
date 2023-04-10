import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Fairebase.config';


const auth = getAuth(app);

export const AuthContext = createContext()

const Context = ({children}) => {

    const [user, setUser] = useState();
    const [loding, setLoding] = useState(true);

    // register user

    const registerUser = (email, password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 

    const loginUser = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login and register

    const googleProvider = new GoogleAuthProvider();

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // logOut

    const logout = () =>{
        return signOut(auth)
    }



    /*********************/

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            setLoding(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    /*********************/

    const authInfo = {user, registerUser, loginUser, loding, logout, googleUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;