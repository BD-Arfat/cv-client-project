import React from 'react';

const TestimonialItems = ({item}) => {
    const {body, image, dic, name} = item;

    return (
        <div className='shadow-2xl rounded-2xl px-8 py-6'>
            <div>
                <p className=' text-justify'>{body}</p>
            </div>
            <div className='flex justify-start mt-5 items-start'>
                <img src={image} alt="" className='w-16 border-teal-300 border-4 rounded-full' />
                <div className='ms-4'>
                <h1 className='font-bold'>{name}</h1>
                <h4>{dic}</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItems;