import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import { toast } from 'react-hot-toast';
import useToken from '../Hooks/HooksToken';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {loginUser, googleUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if(token){
        navigate(from,{replace : true})
    }

    const handleLogin = data =>{
        loginUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            setLoginUserEmail(data.email);
            toast.success("Your Login is Successfull !!!!!!");
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message)
        })
    }

    // google login user

    const hendelGoogleLogin = () =>{
        googleUser()
        .then(()=>{
            navigate(from,{replace : true})
            toast.success('You have successfully Login with Google')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className="w-96 p-7">
                <h1 className='text-2xl text-center font-bold'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" {...register("email")}  className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" {...register("password")}  className="input input-bordered w-full" />
                    </div>
                    <input className='btn w-full mt-7' type="submit" />
                    <p className='mt-3'>New to Doctors Portal? <Link to={"/register"} className='text-info font-bold'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={hendelGoogleLogin} className="btn btn-outline  w-full mt-1">LOGIN WHIT GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;