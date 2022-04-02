import React from 'react';
import logo from '../../../logo.svg';

const Logo = () => {
    return (
        <div className='border-8 border-blue-600 w-16 h-16'>
            <img className='w-full h-full' src={logo} alt="" />
        </div>
    );
};

export default Logo;