import React from 'react';
import image1 from '../../../assets/images/cavity.png'
import image2 from '../../../assets/images/fluoride.png'
import image3 from '../../../assets/images/whitening.png'
import ServicesItems from './ServicesItems.js';

const Service = () => {
    const items = [
        { id:1, name :"Fluoride Treatment", dic :"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img : image1},
        { id :2, name :"Cavity Filling", dic :"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img : image2},
        { id :3, name :"Teeth Whitening", dic :"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img : image3}
    ]

    return (
        <div>
            <h1 className='text-center mt-14 md:mt-28 font-bold text-emerald-500'>OUR SERVICES</h1>
            <h1 className='text-center text-4xl mt-4'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 lg:mt-20'>
            {
                items.map(item => <ServicesItems
                key={item.id}
                item = {item}
                ></ServicesItems>)
            }
            </div>
        </div>
    );
};

export default Service;