import React, {Component} from 'react';
import Header from '../../component/Header/Header'
//import img from '../../assets/logo.jpg'
import Navigation from '../../component/Navigation/Navigation'
import Main from '../../component/Main/Main'
import Footer from '../../component/Footer/Footer'
import Modal from '../../component/UI/Modal'


class SalonBuilder extends Component {

    state={
        name:'Amaya'
    }


    

    render(){
        return(
            <div>
                <Header name={this.state.name} />
                <Navigation/>
                
                <Main/>
                
                <Footer/>
            </div>
        );
    }

}

export default SalonBuilder;
