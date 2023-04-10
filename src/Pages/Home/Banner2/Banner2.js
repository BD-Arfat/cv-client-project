import React from 'react';
import BannerItems from './BannerItems';
import image1 from "../../../assets/icons/clock.svg"
import image2 from "../../../assets/icons/marker.svg"
import image3 from "../../../assets/icons/phone.svg"

const Banner2 = () => {
    const items = [
        {name : "Opening Hours", id : 1, dic : "Lorem Ipsum is simply dummy text of the pri", img : image1},
        {name : "Visit our location", id : 2,  dic : "Brooklyn, NY 10036, United States", img : image2},
        {name : "Contact us now", id : 3, dic : "+000 123 456789", img : image3}
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white mx-2'>
            {
                items.map(item => <BannerItems
                key={item.id}
                item={item}
                ></BannerItems >)
            }
        </div>
    );
};

export default Banner2;