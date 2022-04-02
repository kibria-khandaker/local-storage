import React from 'react';

const TestLocalStorage = () => {

    const handleadd = () =>{
        //------- 1
        // localStorage.setItem('cart', 2022);
        //------- 2
        localStorage.setItem('cart', JSON.stringify({abc:1}));
    };
    const handleShow = () =>{
        //------- 1
        // const itemData = localStorage.getItem('cart');
        //------- 2
        const itemData = JSON.parse(localStorage.getItem('cart'));
        console.log(itemData);
        // return itemData;
    };
    const handleRemove = () =>{
        localStorage.removeItem('cart');
    };
    return (
        <div className=' text-center'>
            <h1> Test Local Storage </h1> <hr /><br />
            <button onClick={handleadd} className=' border py-2 px-5 mt-1 bg-slate-300'>Add</button> <br />
            <button onClick={handleShow} className=' border py-3 px-5 mt-1 bg-slate-300'>Read/Show</button> <br />
            <button onClick={handleRemove} className=' border py-3 px-5 mt-1 bg-slate-300'>Remove</button>
        </div>
    );
};

export default TestLocalStorage;