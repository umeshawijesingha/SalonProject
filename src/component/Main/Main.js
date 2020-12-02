import React from 'react';
import img from '../../assets/mainImage.jpg';

import classes from './Main.module.css'


function Main(){
    

    return (

         <div className={classes.imagecontainer}>
             <img src={img}  className={classes.mainimage}   />

         </div> 
    );
}

export default Main;