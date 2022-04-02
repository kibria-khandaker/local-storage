import React, { useEffect, useState } from 'react';
import './Products.css';
import SingleProductComponent from './SingleProductComponent';
import Cart from './../Cart/Cart';

const Products = () => {
    const [shoes, setShoes]= useState([]);
    useEffect(()=>{
        fetch('shoes-data.json')
        .then(res=>res.json())
        .then(data=>setShoes(data))
    },[]);

    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 lg:col-span-3'>
<div className='flex flex-col-reverse md:flex-row relative'>
    <div className='grid grid-cols-1 gap-6 p-5 md:grid-cols-2 lg:grid-cols-3  basis-12/12  md:basis-8/12 lg:basis-9/12'>
        { 
            shoes.map(shoe=><SingleProductComponent 
                key={shoe.id} 
                shoe={shoe} 
            ></SingleProductComponent>)
        }
    </div>
    <div className='bg-neutral-50 sticky top-0 md:relative p-5 basis-12/12  md:basis-4/12 lg:basis-3/12'>
        <Cart></Cart>
    </div>
</div>
    );
};

export default Products;