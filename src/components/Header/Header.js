import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { HiMenu } from 'react-icons/hi';
import './Header.css';
import Logo from './Logo/Logo';
import MenuList from './MenuList/MenuList';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='header_section pb-4 bg-slate-500 border-0 border-red-600'>
            <div onClick={() => setOpen(!open)} className='responsive_icon cursor-pointer bg-white w-12 h-12 md:hidden border-8 border-yellow-400 text-3xl'>
                {open ? <GrClose className='ml-4 bg-slate-300'></GrClose> : <HiMenu className='ml-4 bg-slate-200'> </HiMenu>}
            </div>
            <div className={`header_main md:flex justify-between  py-5 border-8 border-lime-500 bg-indigo-200 w-full md:static absolute duration-500 ease-in ${open ? 'top-12' : 'top-[-550px]'}`}>
                <Logo></Logo>
                <MenuList></MenuList>
            </div>
        </div>
    );
};

export default Header;