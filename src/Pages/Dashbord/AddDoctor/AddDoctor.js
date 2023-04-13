import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, } = useForm();
    const imageHosting = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()

    const { data: Specialtys = [] } = useQuery({
        queryKey: ["appointment"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointment`);
            const data = await res.json();
            return data;
        }
    })

    const hendelAddDoctor = (data) => {
        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHosting}`;
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    // console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch("http://localhost:5000/doctors", {
                        method: "POST", // or 'PUT'
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(doctor),
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('The doctor you tried to add was successful');
                        navigate('/dashbord/manageDoctor')
                    })
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl mt-7 mb-5 font-bold'>Add Doctors</h1>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(hendelAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input input-bordered w-full" required />
                    </div>
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty")} className="select w-full select-bordered max-w-xs">
                        {
                            Specialtys.map(specialty => <option
                                key={specialty._id}
                            >{specialty.title}</option>)
                        }
                    </select>
                    <div className="form-control  max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="file" {...register("image")} className="input input-bordered w-full" required />
                    </div>
                    <input className='btn mt-7 w-full' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;