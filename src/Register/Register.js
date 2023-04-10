import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { register, handleSubmit, } = useForm();
    const {registerUser, googleUser} = useContext(AuthContext);

    const handelRegister = data =>{
        console.log(data);
        registerUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success("Your Register is Successfull !!!!!!")
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message)
        })
    }

    // google user register

    const hendelGoogleRegister = () =>{
        googleUser()
        .then(()=>{
            toast.success('You have successfully registered with Google')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className="w-96 p-7">
                <h1 className='text-2xl text-center font-bold'>Register</h1>
                <form onSubmit={handleSubmit(handelRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" {...register("name")}  className="input input-bordered w-full" required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email")}  className="input input-bordered w-full" required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" {...register("password")}  className="input input-bordered w-full" required/>
                    </div>
                    <input className='btn w-full mt-7' type="submit" />
                    <p className='mt-3'>Already have an account? <Link to={"/login"} className='text-info font-bold'>Please login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={hendelGoogleRegister} className="btn btn-outline  w-full mt-1">Register WHIT GOOGLE</button>
                </form> 
            </div>
        </div>
    );
};

export default Register;