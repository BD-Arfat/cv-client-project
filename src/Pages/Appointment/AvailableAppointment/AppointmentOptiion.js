import React from 'react';

const AppointmentOptiion = ({appointmentOptiion, setTreatment}) => {
    const { title, slots } = appointmentOptiion

    return (
        <div className="card gap-2 w-11/12 ms-8 md:ms-0 mx-auto bg-base-100 shadow-2xl mt-6">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-info font-bold">{title}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                <div className="card-actions">
                    <label
                        disabled = {slots.length === 0}
                        onClick={() => setTreatment(appointmentOptiion)}
                        htmlFor="Booking-modal" className="btn btn-info mt-5 text-white font-bold">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptiion;