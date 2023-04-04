import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>
                    {price.price}
                </span>
                <span className='text-2xl text-gray-700 font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <p className='font-bold underline py-2 text-yellow-700'>Features: </p>
            {
               price.featureList.map((feature, idx) => <Feature key={idx}
               feature = {feature}
               ></Feature>)
            }
            <button className='mt-6 w-full bg-green-700 hover:bg-green-950 py-2 text-white rounded-md font-bold'>Buy now</button>
        </div>
    );
};

export default PriceCard;