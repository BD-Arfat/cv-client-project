import React from 'react';
import { useQuery } from 'react-query';
import { AiTwotoneDelete } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

const ManageDoctor = () => {

    const { data: doctors = [], refetch} = useQuery({
        queryKey: ["doctors",],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`);
            const data = await res.json();
            return data;
        }
    });

    // delete doctor
    const hendelDelete = (id) =>{
        const proceed = window.confirm(`Do you want to delete this User?`);
        if(proceed){
            fetch(`http://localhost:5000/doctors/${id}`, {
                method: "DELETE", 
            })
            .then(res =>res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Your Delete is Successfull !!!!!!')
                }
                refetch()
            })
        }
    }

    return (
        <div>
            <h2 className='text-3xl font-bold mt-7 mb-5'>Doctors</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Delete Doctors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>
                                    <label>
                                        {i + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask w-14 rounded-full">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-lg font-bold'>
                                    {doctor.name}
                                </td>
                                <td className='text-lg font-bold'>{doctor.email}</td>
                                <th>
                                    <button className="text-lg font-bold">{doctor.specialty}</button>
                                </th>
                                <td className=''><AiTwotoneDelete onClick={()=> hendelDelete (doctor._id)} className='text-center text-error text-2xl'/></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;