import React from 'react';
import SalonBuilder from '../../../container/SalonBuilder/SalonBuilder';
import classes from './Backdrop.module.css';


const Backdrop=(props)=>{

   //  props.login ? <div className={classes.Backdrop}></div>:null

   return( 
       <div onClick={props.removed}>
       props.login || props.signin ? <div className={classes.Backdrop}></div>:null
       
       </div>
       
       
       );
   // <h3>Hello</h3>

  //  return null;return();

//   <div className={classes.Backdrop}>
//   {props.children}


// </div>



};

export default Backdrop;