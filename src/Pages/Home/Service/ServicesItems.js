import React from 'react';

const ServicesItems = ({item}) => {
    const { name, dic, img } = item;
    return (
        <div className="card  bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src= {img} alt="Shoes" className="rounded-xl w-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{dic}</p>
            </div>
        </div>
    );
};

export default ServicesItems;
