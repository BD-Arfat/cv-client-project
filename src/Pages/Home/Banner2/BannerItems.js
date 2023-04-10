import React from 'react';

const BannerItems = ({item}) => {
    const { name, dic, img } = item
    return (
        <div className="card card-side bg-teal-400 md:px-6 py-1 text-start  pt-3 lg:pt-0 md:shadow-xl justify-center flex-col lg:flex-row-reverse">
            <figure className=' md:pt-4'><img className='w-12 md:w-14' src={img} alt="Movie" /></figure>
             <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p>{dic}</p>
            </div>
        </div>
    );
};

export default BannerItems;