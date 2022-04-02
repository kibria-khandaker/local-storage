import React, { useState } from 'react';

const SingleProductComponent = ({shoe,handleAddToCart}) => {
    
    const {name,color,price,pairImage,sideImage,id}=shoe;
    const [cardImg, setCardImg]=useState(false);
    return (
        <div className='single_shoe_card border rounded-md border-slate-400 p-3'>
            <div onMouseEnter={()=>setCardImg(true)} onMouseLeave={()=>setCardImg(false)}>
                <img className='rounded-md ' src={cardImg ? sideImage : pairImage } alt="" />
            </div>
            <div className=' mt-5 mb-10'>
                <p> Name: {name} </p>
                <p> Color: {color} </p>
                <p> Price: {price} </p>
            </div>
            <div>
                <button onClick={()=>handleAddToCart(shoe)} className='border rounded-md px-10 py-2 my-1 w-full bg-slate-200  hover:bg-slate-300 font-bold'> Add To Cart </button>
            </div>
        </div>
    );
};

export default SingleProductComponent;