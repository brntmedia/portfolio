import React from 'react';

import Hero from '../components/hero/Hero'
import Carousel from '../components/Carousel'
import "./css/HomePage.css"


function HomePage(props) {
    return(
            <div className="main">
                <Hero className="jumbo" title={props.title} subTitle={props.subTitle} text={props.text}/>
                <div className="carousel">
            <Carousel />
            </div>
            </div>    
        /*<div className="parent">
            <div className="pimg1">
                <div className="ptext">
                    <span className="border">
                        brntMedia 
                    </span>  
                </div>
            </div>*/
            
            /*</div>*/
            
    );
}

export default HomePage;