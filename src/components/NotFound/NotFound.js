import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1 className='text-2xl text-center mt-5'> 
                Your Result Not Found Here Go Back 
                <span className='text-3xl text-center ml-5 text-orange-500'>
                     <Link to="/">Home</Link>
                </span>
            </h1>
        </div>
    );
};
export default NotFound;