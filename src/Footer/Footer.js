import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import {FaFacebook,FaGooglePlay} from 'react-icons/fa';
import {AiFillInstagram,AiFillTwitterCircle,AiFillApple} from 'react-icons/ai';
import {Button} from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {FiSmartphone} from 'react-icons/fi';

function Footer() {
    return (
        <div>
        <nav className='main-footer'>
            <div className='footer-column'>
                <h4>Contact Us</h4>
                <ul>
                    <li><AiOutlineMail/> sachinnimshan@gmail.com</li>
                    <li><FiSmartphone/> (+94) 475788946 / (+94) 472245243</li>
                    <li>
                    <div className='footer-container'>
                    <h5>Find Us On Social Media</h5>
                    <Link className='social-links'><FaFacebook/></Link>
                    <Link className='social-links'><AiFillInstagram/></Link>
                    <Link className='social-links'><AiFillTwitterCircle/></Link>
                    </div>
                    </li>
                    <li>
                    <div className='footer-container'>
                    <h5>Download Our Mobile Application</h5>
                    <Link className='mobile-app-links'>
                        <img src='/Icons/android.png' className='mobile-app-logo'/>
                    </Link>
                    <Link className='mobile-app-links'>
                        <img src='/Icons/apple.png' className='mobile-app-logo'/></Link>
                    </div>
                    </li>
                    
                </ul>
            </div>

            <div className='footer-column'>
                <h4>Information</h4>
                <ul>
                    <li><Link className='footer-links'>About Us</Link></li>
                    <li><Link className='footer-links'>Terms and Conditions</Link></li>
                    <li><Link className='footer-links'>Privacy Policy</Link></li>
                    <li><Link className='footer-links'>FAQ</Link></li>
                    <li><Link className='footer-links'>Promote Your Voucher</Link></li>
                    <li><Link className='footer-links'>Contact Us</Link></li>
                </ul>
            </div>

            <div className='footer-column'>
                <h4>My Account</h4>
                <ul>
                    <li><Link className='footer-links'>Sign Up</Link></li>
                    <li><Link className='footer-links'>My Account</Link></li>
                    <li><Link className='footer-links'>My Vouchers</Link></li>
                    <li><Link className='footer-links'>My Wishlist</Link></li>
                </ul>
            </div>

            <div className='footer-column'>
                <h4>News Letter</h4>
                <div className='newsletter-container'>
                <input type='text' placeholder='Your E-Mail' className='news-text-field'/>
                <Button className='news-btn-subscribe'>SUBSCRIBE</Button>
                </div>
            </div>
        </nav>

        <div className='footer-end-container'>
          <span>
          <Link className='designer-links'>SNMART </Link> 
          (1995 - 2020) — Solution by 
          <Link className='designer-links'> Sachin Nimshan</Link>
          </span>

          <img src='/Icons/payments.png'/>


        </div>
        </div>
    )
}

export default Footer;
