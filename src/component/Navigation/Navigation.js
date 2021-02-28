import React from 'react';
import classess from './Navigation.module.css'
import {FaPhone} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaRegClone} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import classes from './Navigation.module.css';

function Navigation(){
    return (
        
        <div className={classess.navbar}>
            <ul>
            <li className={classes.active}><a href="#"><FaHome className={classes.icon}/>Home</a></li>
            <li><a href="#"><FaUsers className={classes.icon}/>About</a>
               <div className={classes.submenu}>
                    <ul>
                        <li><a href="#">Staff</a></li>
                        <li><a href="#">Products</a></li>
                        
                    </ul>

                </div>
                </li>
            <li><a href="#"><FaRegClone className={classes.icon} />Services</a>
                <div className={classes.submenu}>
                    <ul>
                        <li><a href="#">Hair Cut</a></li>
                        <li><a href="#">Hair Coloring</a></li>
                        <li><a href="#">Hair Treatments</a></li>
                        <li><a href="#">Facials</a></li>
                        <li><a href="#">Makeup</a></li>
                        <li><a href="#">Manicure</a></li>
                    </ul>

                </div>
            
            
            </li>
            <li><a href="#"><FaUsers className={classes.icon}/>Gallery</a></li>
            <li><a href="#"><FaPhone className={classes.icon}/>Contact Us</a></li> 
            <li><a href="#"><FaShoppingCart className={classes.icon}/>BOOK NOW</a></li>    

            
            
            </ul>
            
            
       </div>

        
    );
}

export default Navigation;