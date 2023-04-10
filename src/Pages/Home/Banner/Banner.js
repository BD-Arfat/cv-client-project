import React from 'react';
import bannarImage from "../../../assets/images/chair.png"

const Banner = () => {
    return (
        <div className="hero my-4 lg:my-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannarImage} className=" rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div>
                    <h1 className=" text-xl md:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-info text-white font-bold">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;