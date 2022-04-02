import React, { useState } from 'react';

const Cart = ({ cart,shoes, handleClearToCart }) => {
    // console.log(shoes);
    // console.log(shoes[1]);
    const [freeShoe, setFreeShoe]=useState({});
    const hanleOffer = () => {
        const randomNumber = Math.floor(Math.random()*shoes.length);
        const rendomShoe = shoes[randomNumber]
        setFreeShoe(rendomShoe);
    }

    return (
        <div className=' md:sticky md:top-0 '>
            <h1 className='text-4xl' > You Cart </h1>
            <div className=''>
                <h1 className='text-2xl py-4'> You Selected Items </h1>
                {
                    cart.map((item, index) => (
                        <div  key={index} className='flex border border-red-300 p-2 mt-2'>
                            <img className='w-12 h-12 mr-3' src={item.pairImage} alt="" />
                            <div>
                                <h3 className='font-bold'>{item.name}</h3>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    ))
                }
                <button onClick={handleClearToCart} className='border rounded-md px-10 py-2 my-6 w-full bg-red-300  hover:bg-red-500 font-bold'>Clear items</button>
            </div>
            <div>
                <button onClick={hanleOffer} className='border rounded-md px-10 py-2 my-2 w-full bg-green-400  hover:bg-green-600 font-bold'>Get free 1 Shoe among them</button>
                {Object.keys(freeShoe).length > 0 && (
                    <div>
                        <div className='flex border border-red-300 p-2 mt-2'>
                            <img className='w-12 h-12 mr-3' src={freeShoe.pairImage} alt="" />
                            <div>
                                <h3 className='font-bold'>{freeShoe.name}</h3>
                                <p>${freeShoe.price}</p>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;