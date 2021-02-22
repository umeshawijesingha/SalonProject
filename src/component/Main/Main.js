import React from 'react';
import img from '../../assets/mainImage.jpg';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';




import classes from './Main.module.css'


function Main(){
    

    return (

         <div className={classes.imagecontainer}>
             <div className={classes.mainimage} >
             <img src={img} className={classes.mainimage}  />
             </div>


            <div className={classes.subcontent}>

            <div className={classes.introduct}>
                <p>Having quality beauty products and professional beauticians can truly grow your beauty salon business.
               We promote wonderful services along with great discounts presented in a nice and irresistible manner.
               Our team is extremely talented and passionate. They are also among the most highly trained and educated technicians in the industry. 
                This ensures each and every one of our clients receives world-class service – each and every time. We want your experience to be unlike any other.</p>




             </div>
             
             <div className={classes.subimages}>

            <img src={img1} className={classes.sub}/>
            <img src={img2} className={classes.sub}/>
            <img src={img3} className={classes.sub}/>
            <img src={img4} className={classes.sub}/>
            </div>

            
             </div>
            
            

            <div className={classes.content}>

            <img src={img5} className={classes.contentimg}/>
            <img src={img6} className={classes.contentimg}/>
            <img src={img7} className={classes.contentimg}/>
            <img src={img8} className={classes.contentimg}/>
            
            </div>

        <div className={classes.discription}>
            
            <div className={classes.authorimgcontainer}>
            <img src={img9} className={classes.authorimg}/>
            </div>

            <div className={classes.authorintrocontainer}>
               <p>The journey toward a more beautiful look doesn't need to be a hassle.
                    Anyone who enjoys services at our Salon we are treated to be relaxed, satisfying atmosphere surrounded by a staff of engaging professionals.
                     Whether popping in for a quick hair trim or indulging in a full day of beauty treatments, you'll enjoy an environment like no other. 
                </p>

            </div>
        
        </div>

         </div> 
    );
}

export default Main;