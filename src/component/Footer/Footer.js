import React from 'react'
import classes from './Footer.module.css'
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

function Footer(){

    return(
        <div className={classes.footer}>
           
           <ul>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact Us</li>
            </ul>

            
            <ul>
            
                <li>Contact Us</li>
                <li>0111224558</li>
                <li>info@nishi.com</li>
                <li>www.salonnishi.com</li>
                <li> </li>
            </ul>

            <ul>
                <li>No.86,</li>
                <li>Station rd,</li>
                <li>Bambalapitiya,</li>
                <li>Colombo 4</li>
               
            </ul>
            
            
            </ul>

            <h2 className={classes.follow}>Follow Us</h2>

        <div className={classes.icons}>
            <h1><FaFacebook/></h1>
            <h1><FaTwitter/></h1>
            <h1><FaLinkedin/></h1>

        </div>
        </div>
    );
}

export default Footer;