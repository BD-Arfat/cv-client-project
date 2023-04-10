import React from 'react';
import image from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-32'
        style={{background:`url(${appointment})`, height:420}}
        >
            <div className="hero md:w-5/6 md:mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="lg:-mt-7 hidden lg:block lg:w-1/2 rounded-lg" alt=''/>
                    <div className='text-white'>
                        <p className='font-bold text-teal-400'>Appointment</p>
                        <h1 className=" text-xl md:text-3xl font-bold ">Make an appointment Today</h1>
                        <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-info text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;