import React, { useEffect, useState } from 'react';
import { addToLocalStorage, clearLocalStorage, getFromLocalStorage } from '../../Utilities/Utilities';
import Cart from './../Cart/Cart';
import './Products.css';
import SingleProductComponent from './SingleProductComponent';

const Products = () => {
    const [shoes, setShoes] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(shoes);

    useEffect(() => {
        fetch('shoes-data.json')
            .then(res => res.json())
            .then(data => setShoes(data))
    }, []);

    useEffect(() => {
        if (shoes.length) {
            const storedItemsId = getFromLocalStorage();
            // console.log(storedItems);
            const previousItems = [];
            for (const id in storedItemsId) {
                // console.log(id);
                const foundItem = shoes.find((shoe) => shoe.id == id);
                // console.log(foundItem); 
                if (foundItem) {
                    const quantity = storedItemsId[id];
                    foundItem.quantity = quantity;
                    previousItems.push(foundItem);
                }
            }
            setCart(previousItems);
        }
    }, [shoes]) // but mir vai ekhane dependenci na diye vitorer sobta ke if length er condition er diya dice


    const handleAddToCart = (selectedShoe) => {
        // const newCart = [...cart, selectedShoe]
        // setCart(newCart);
        let newCart = [];
        const exist = cart.find((shoe) => shoe.id == selectedShoe.id);
        if (!exist) {
            selectedShoe.quantity = 1;
            newCart = [...cart, selectedShoe]
        } else {
            const rest = cart.filter((shoe) => shoe.id !== selectedShoe.id);
            selectedShoe.quantity = selectedShoe.quantity + 1;
            newCart = [...rest, selectedShoe]
        }
        // console.log(exist);
        addToLocalStorage(selectedShoe.id);
        setCart(newCart);
    }
    const handleClearToCart = () => {
        // console.log('ClearToCart Handle');
        setCart([]);
        clearLocalStorage();
    }

    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 lg:col-span-3'>

        <div className='flex flex-col-reverse md:flex-row relative'>
            <div className='grid grid-cols-1 gap-6 p-5 md:grid-cols-2 lg:grid-cols-3  basis-12/12  md:basis-8/12 lg:basis-9/12'>
                {
                    shoes.map(shoe => <SingleProductComponent
                        key={shoe.id}
                        shoe={shoe}
                        handleAddToCart={handleAddToCart}
                    ></SingleProductComponent>)
                }
            </div>
            <div className='bg-neutral-50 sticky top-0 md:relative p-5 basis-12/12  md:basis-4/12 lg:basis-3/12'>
                <Cart
                    cart={cart}
                    shoes={shoes}
                    handleClearToCart={handleClearToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Products;