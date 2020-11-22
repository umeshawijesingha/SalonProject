import React from 'react';
import clasess from './Header.module.css';
import SalonBuilder from '../../container/SalonBuilder/SalonBuilder'
import Img from '../../assets/logo.jpg'
import { IoIosCall } from 'react-icons/io'
import classes from './Header.module.css';
import Modal from '../UI/Modal';


function Header(props){
    

    return(

    

    <div className={clasess.Head}>
        <img className={classes.logo}  src={Img}  height="80px"/> 
        <h1 className={classes.name}>Salon {props.name}</h1>
        
            
              <button className={classes.signUp}>
              Sign Up
              </button>

              <button className={classes.logIn}>
                  Log In
              </button>
    
        <IoIosCall className={classes.callIcon} />
        <p className={classes.phone}> 0111224558</p>

       
        {/* <a href="#" className={clasess.signUp}><strong>Sign Up</strong></a>
        <a href="#" className={clasess.logIn}><strong>Log In</strong></a> */}

       
       
    </div>

    );
   

   
}

export default Header;