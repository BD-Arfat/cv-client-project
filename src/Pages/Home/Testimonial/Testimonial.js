import React from 'react';
import man1 from '../../../assets/images/people1.png'
import man2 from '../../../assets/images/people2.png'
import man3 from '../../../assets/images/people3.png'
import TestimonialItems from './TestimonialItems';

const Testimonial = () => {
    const items = [
        {body : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', image : man1, name: 'Ariful Islam', dic : 'California', id: 1},
        {body : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', image : man2, name: 'Saima Islam', dic : 'California', id :2},
        {body : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', image : man3, name: 'Porna Islam', dic : 'California', id:3},
    ]

    return (
        <div>
            <div className=' w-11/12 mx-auto mt-14'>
                <p className='text-info font-bold'>Testimonial</p>
                <h1 className=' text-4xl'>What Our Patients Says</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16 '>
                {
                    items.map(item => <TestimonialItems
                    key={item.id}
                    item ={item}
                    ></TestimonialItems>)
                }
            </div>
        </div>
    );
};

export default Testimonial;