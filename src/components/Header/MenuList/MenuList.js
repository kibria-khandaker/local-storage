import React from 'react';
import { Link } from "react-router-dom";
import './MenuList.css';

const MenuList = () => {
    return (
        <div className='menuList border-8 border-fuchsia-600 flex flex-col md:flex-row'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/TestLocalStorage">Test Local Storage</Link>
        </div>
    );
};

export default MenuList;