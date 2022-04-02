import React, { useEffect, useState } from 'react';

const Cart = ({ cart, shoes, handleClearToCart }) => {
    // console.log(shoes);
    // console.log(shoes[1]);
    const [freeShoe, setFreeShoe] = useState({});
    const [offer, setOffer] = useState(false);
    // console.log(offer);
    const hanleOffer = () => {
        const randomNumber = Math.floor(Math.random() * shoes.length);
        const rendomShoe = shoes[randomNumber]
        setFreeShoe(rendomShoe);
    }
    useEffect(() => {
        if (cart.length > 0) {
            setOffer(true);
        }else{
            setOffer(false);
        }
    }, [cart])

    return (
        <div className=' md:sticky md:top-0 '>
            <h1 className='text-4xl' > You Cart </h1>
            <div className=''>
                <h1 className='text-2xl py-4'> You Selected Items </h1>
                {
                    cart.map((item, index) => (
                        <div key={index} className=' flex border border-red-300 p-2 mt-2'>
                            <img className='w-12 h-12 mr-3' src={item.pairImage} alt="" />
                            <div className='flex justify-between w-full items-center'>
                                <div>
                                    <h3 className='font-bold'>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <p>{item.quantity}</p>
                            </div>
                        </div>
                    ))
                }
                <button onClick={handleClearToCart} className='border rounded-md px-10 py-2 my-6 w-full bg-red-300  hover:bg-red-500 font-bold'>Clear items</button>
            </div>

            <div className='border p-1 bg-slate-200 rounded-md'>
                <button onClick={hanleOffer} className={`border rounded-md px-10 py-2 my-2 w-full font-bold bg-green-400 ${offer ? 'opacity-100 hover:bg-green-600' : 'opacity-25'}`} disabled={!offer} >Get free 1 Shoe</button>
                <p> <small><b>NB:</b> if you want to get free 1 Shoe, you need to purchase minimum 1 item</small> </p>
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;


