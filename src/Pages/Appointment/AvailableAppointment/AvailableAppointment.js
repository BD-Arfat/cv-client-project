import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptiion from './AppointmentOptiion';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from 'react-query';
import Loding from '../../../Laouts/Loding/Loding';

const AvailableAppointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP')

    const {data : appointmentOptiions = [], refetch, isLoading} = useQuery({
        queryKey : ['appointment', date],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/appointment?date=${date}`);
            const data = await res.json();
            return data
        }
    })
    if(isLoading){
       return <Loding/>
    }
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
           refetch = {refetch}
           />}
        </div>
    );
};

export default AvailableAppointment;