import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { json } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';

const AppointmentModal = ({ treatment, setTreatment, refetch, selectedDate }) => {

    const { title, slots, price } = treatment;
    const formatDate = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)

    const hendelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const booking = {
            appointmentDate: formatDate,
            treatment: title,
            name,
            slot,
            email,
            phone,
            price
        };

        fetch(`http://localhost:5000/bookingTreatment`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    refetch()
                    toast.success('Your Booking is Successfull !!!!!!!!!!!');
                }
                else{
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={hendelSubmit}>
                        <input type="text" disabled value={formatDate} className="input input-bordered w-full mt-3 font-bold" />
                        <select name='slot' className="select select-bordered w-full mt-3">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="your name" className="input input-bordered w-full mt-3" required />
                        <input type="email" name='email' disabled defaultValue={user?.email} placeholder="your email" className="input input-bordered w-full mt-3" required />
                        <input type="phone" name='phone' placeholder="your phone" className="input input-bordered w-full mt-3" required /><br />
                        <button type="submit" className='btn mt-2 w-full'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;