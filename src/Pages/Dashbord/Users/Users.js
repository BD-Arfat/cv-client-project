import React from 'react';
import { useQuery } from 'react-query';
import { AiOutlineTeam } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

const Users = () => {

    const { data:users = [], refetch} = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    // call admin
    const hendelAdmin = (id) =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: "PUT", 
            headers:{
                authorization : `bearer ${ localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successfull !!!!!!')
                refetch()
            }
        })
    }

    // delete methord
    const hendelDelete = id =>{
        const proceed = window.confirm(`Do you want to delete this User?`);
        if(proceed){
            fetch(`http://localhost:5000/users/${id}`, {
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
        <div className="overflow-x-auto">
            <h1 className='text-3xl font-bold mt-7 mb-5'>All Users</h1>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete Users</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td >{user?.role !== "admin" &&<span className='flex items-center' onClick={()=> hendelAdmin(user._id)}><AiOutlineTeam className='me-2 text-2xl text-success'/><span className='font-bold'>Add Admin</span></span>}</td>
                            <td className=''><AiTwotoneDelete onClick={()=> hendelDelete (user._id)} className='text-center text-error text-2xl'/></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;