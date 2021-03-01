import React, {Component} from 'react';
import Header from '../../component/Header/Header'
//import img from '../../assets/logo.jpg'
import Navigation from '../../component/Navigation/Navigation'
import Main from '../../component/Main/Main'
import Footer from '../../component/Footer/Footer'
import Modal from '../../component/UI/Modal/Modal'
import { FaSignInAlt } from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import classes from './SalonBuilder.module.css';
import Backdrop from '../../component/UI/Backdrop/Backdrop';
//import classes from '*.module.css';
//import classes from '*.module.css';


class SalonBuilder extends Component {

    state={
        name:'Nishi',
        signin:false,
        login:false
        
    }

    signUp=()=>{


     this.setState({
         signin:!this.state.signin,
         login:false
       
    });   
    }

    logIn=()=>{

        this.setState({
            login:!this.state.login,
            signin:false
           
        
        })
        


    }

    


    

    render(){

        
       


        return(



            <div>
                <Header 
                name={this.state.name} 
                signUpClicked={this.signUp}
                logInClicked={this.logIn}
                       
                />
                <Navigation/>
                
                <Main/>
                

                {this.state.login  ?
                <div>
                   <Backdrop login= {this.state.login} removed={this.logIn}/>
                   
                    <Modal>

                        
                        
                        <button onClick={this.logIn} className={classes.close}>X</button>
                        
                         <h2 className={classes.title}>Log In</h2> 

                            {/* <FaUser size={50}/> */}
                            <br/>
                        <label className={classes.label}>Email</label><br/>
                        <input  className={classes.inputField} type="Email" placeholder="Email" /><br/>
                        <label className={classes.label}>Password</label><br/>
                        <input className={classes.inputField} type="password" placeholder="Password"/><br/><br/>
                        <button className={classes.submitbtn}>Submit</button>
                
                    </Modal>
                   

                </div>:null}



                    {this.state.signin ?
                    <div>

                    <Backdrop signin= {this.state.signin} removed={this.signUp}></Backdrop>

                    <Modal  >
                    <button onClick={this.signUp} className={classes.close}>X</button>
                    <h2 className={classes.title}>Sign Up</h2>

                    <label className={classes.label} width="30px">First Name</label><br/>
                    <input  className={classes.inputField} type="text" placeholder="First Name" /><br/>
                    <label className={classes.label} width="30px">Last Name</label><br/>
                    <input  className={classes.inputField} type="text" placeholder="Last Name" /><br/>
                    <label className={classes.label} width="30px">Contact No</label><br/>
                    <input  className={classes.inputField} type="number" placeholder="Contact No" /><br/>
                    <label className={classes.label} width="30px">Email</label><br/>
                    <input  className={classes.inputField} type="Email" placeholder="Email" /><br/>
                    <label className={classes.label} width="30px">Password</label><br/>
                    <input  className={classes.inputField} type="password" placeholder="Password" /><br/><br/>

                    <button className={classes.submitbtn}>Submit</button>



                    </Modal>
                    

                    </div>:null}
                    

               
                <Footer/>
            </div>
        );
    }

}

export default SalonBuilder;
