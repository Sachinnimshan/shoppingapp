import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {FaBars,FaTimes} from 'react-icons/fa';
import { MenubarData } from './MenubarData';

function Navbar() {

    const [MenuBar, SetMenuBar]= useState(false);
    const ShowMenuBar = ()=> SetMenuBar(!MenuBar);

    const CloseMenuBar = ()=> SetMenuBar(false);

    return (
        <nav>
            <nav className='top-navbar'>
                <div className='top-links-container'>
                    <Link to='/' className='about-links'>About Us</Link>
                    <Link to='/' className='about-links'>Contact Us</Link>
                </div>

                <div className='login-sign-container'>
                <Link to='/hero' className='login-sign-links'>Login / Signup</Link>
                </div>

            </nav>

            <nav className='middle-navbar'>
                <div className='shop-logo-container'>
                    <Link to='/'><img src='/shoplogo.png' className='shopping-logo'/></Link>
                </div>

                <div className='search-bar-container'>
                    <input type='text' placeholder='Search For Anything' className='search-bar'/>
                    <button className='search-btn'><img src='/Icons/search.png'/></button>
                </div>

            </nav>

            <nav className='bottom-navbar'>
                <div className='menu-bars' onClick={ShowMenuBar}>
                    {MenuBar ? <FaTimes/>: <FaBars/>}
                </div>
                <div>
                    <ul className={MenuBar? 'nav-menu active': 'nav-menu'}>
                        {MenubarData.map((item,index)=>{
                            return(
                                <li key={index} className='nav-item'>
                                    <Link to={item.Path} className={item.CName} onClick={CloseMenuBar}>{item.Icon}
                                    <span>{item.Title}  </span></Link>
                                </li>
                          );
                        })}

                    </ul>
                    </div>
            </nav>

        </nav>
        
    )
}

export default Navbar;
