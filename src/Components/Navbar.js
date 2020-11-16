import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {BsSearch} from 'react-icons/bs';
import {FaBars,FaTimes} from 'react-icons/fa';
import {HiMenuAlt2} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import { MenubarData } from './MenubarData';

function Navbar() {

    const [MenuBar, SetMenuBar]= useState(false);
    const ShowMenuBar = ()=> SetMenuBar(!MenuBar);

    return (
        <nav>
            <nav className='top-navbar'>
                <div className='top-links-container'>
                    <Link to='/' className='about-links'>About Us</Link>
                    <Link to='/' className='about-links'>Contact Us</Link>
                </div>

                <div className='login-sign-container'>
                <Link to='/' className='login-sign-links'>Login / Signup</Link>
                </div>

            </nav>

            <nav className='middle-navbar'>
                <div className='shop-logo-container'>
                    <Link to='/'><img src='/shoplogo.png' className='shopping-logo'/></Link>
                </div>

                <div className='search-bar-container'>
                    <input type='text' placeholder='Search For Anything' className='search-bar'/>
                    <button className='search-btn'><BsSearch/></button>
                </div>

            </nav>

            <nav className='bottom-navbar'>
                <div className='menu-bars' onClick={ShowMenuBar}>
                    {MenuBar ? <FaTimes/>: <FaBars/>}
                </div>
                    <ul className={MenuBar? 'nav-menu active': 'nav-menu'}>
                        {MenubarData.map((item,index)=>{
                            return(
                                <li key={index} className='nav-item'>
                                    <Link to={item.Path} className={item.CName}>{item.Icon}
                                    <span>{item.Title}  </span></Link>
                                </li>
                          );
                        })}

                    </ul>
            </nav>

        </nav>
        
    )
}

export default Navbar;
