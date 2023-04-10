import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Service from '../Service/Service';
import Exceptional from '../Exceptional/Exceptional';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Banner2/>
            <Service/>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonial/>
        </div>
    );
};

export default Home;