import React from 'react';
import classess from './Navigation.module.css'
import {FaPhone} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaRegClone} from 'react-icons/fa'
import classes from './Navigation.module.css';

function Navigation(){
    return (
        
        <div className={classess.navbar}>
            <ul>
            <li className={classes.active}><a href="#"><FaHome className={classes.icon}/>Home</a></li>
            <li><a href="#"><FaRegClone className={classes.icon} />Services</a>
                <div className={classes.submenu}>
                    <ul>
                        <li>List01</li>
                        <li>List02</li>
                        <li>List03</li>
                    </ul>

                </div>
            
            
            </li>
            <li><a href="#"><FaUsers className={classes.icon}/>About</a></li>
            <li><a href="#"><FaPhone className={classes.icon}/>Contact</a></li>    
            
            
            </ul>
            
            
       </div>

        
    );
}

export default Navigation;