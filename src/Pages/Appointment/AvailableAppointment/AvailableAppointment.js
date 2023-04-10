import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptiion from './AppointmentOptiion';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOptiions, setAppointmentOptiions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{
        fetch('Appointmentoptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptiions(data))
    },[])
    

    return (
        <div>
           <div>
           <h1 className='text-center text-info font-bold'>Available Services on {format(selectedDate, "PP")}</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appointmentOptiions.map(appointmentOptiion => <AppointmentOptiion
                key={appointmentOptiion._id}
                appointmentOptiion={appointmentOptiion}
                setTreatment={setTreatment}
                />)
            }
           </div>
           </div>
           {
            treatment &&
            <AppointmentModal
           treatment={treatment}
           selectedDate={selectedDate}
           setTreatment={setTreatment}
           />}
        </div>
    );
};

export default AvailableAppointment;