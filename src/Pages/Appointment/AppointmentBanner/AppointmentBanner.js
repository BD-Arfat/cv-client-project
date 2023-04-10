import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="hero my-4 lg:my-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div className='lg:mr-9'>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;