import React from 'react';
import image from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className="hero mt-12 md:mt-28">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className=" rounded-lg shadow-2xl lg:w-1/2" style={{height:450, width:400}} alt=''/>
                <div className='lg:ps-10 text-justify lg:w-1/2'>
                    <h1 className="text-xl md:text-4xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-info text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;