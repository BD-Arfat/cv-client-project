import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/Context';
import { useQuery } from 'react-query';
import { AiTwotoneDelete } from 'react-icons/ai'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ChakoutForm from '../Payment/ChakoutForm';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState(null);

    const { data: bookings = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookingTreatment?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    // Delete

    const hendelDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this service?');
        if (proceed) {
            fetch(`http://localhost:5000/bookingTreatment/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success('Your Delete is Successfull !!!!!!')
                    }
                    const remaning = bookings.filter(booking => booking._id !== id);
                    remaning();
                })
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-bold mb-7'>My Appointment</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Patient Name</th>
                                <th>Treatment Name</th>
                                <th>AppointmentDate</th>
                                <th>Times</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length > 0 &&
                                bookings.map((booking, i) => <tr booking={booking} key={booking._id}>
                                    <th>{i + 1}</th>
                                    <th>{booking.name}</th>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link to={`/dashbord/payment/${booking._id}`}><button className='btn btn-info btn-sm text-white'>Pay</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='btn btn-sm btn-success'>Paid</span>
                                        }
                                    </td>
                                    <td onClick={() => hendelDelete(booking._id)} className='text-xl text-error'><AiTwotoneDelete className='icons delete w-12' /></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;