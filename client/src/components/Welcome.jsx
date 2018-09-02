import React, { Component } from 'react';
import './styles/welcome.css'

class Welcome extends Component {
    constructor() {
        super();
    }
    handleFlip(){
        const flipper = document.querySelector('.flipper');
        if(!flipper.classList.value.includes('flipped')) {
            flipper.classList.add('flipped');
        } else {
            flipper.classList.remove('flipped');
        }
    }
    render() {
        return (
                <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <div id='stencil-front' className='stencil-container'>
                            <img src={require('../assets/img/stencil.png')} className='stencil'/>
                        </div>
        
                        <strong>
                            <big>Nathan Bloomfield</big>
                        </strong>
        
                        <ul id='occupation'>
                            <li>// Creative Technologist</li> 
                            <li>// Full Stack Developer</li> 
                            <li>// New Media Artist </li>
                        </ul>
        
                        <ul id='contact'>
                            <li>// bloom510@protonmail.com</li> 
                            <li>// bloom510.art</li> 
                            <li>// (510).367.1393</li>
                        </ul>
        
                        <span>// San Francisco Bay Area</span>
        
                        <div className='flip-btn' onClick={() => this.handleFlip()}><small>See more</small></div>
        
                    </div>
        
                    <div className="back">
                        <p>
                        We are currently under construction. 
                        Check back later for Services, Portfolio, and Bio.
                        </p>
        
                        <p>
                        Need a full-stack developer to engineer scalable solutions for your business or get your next site up and running?
                        Drop me a line (see reverse for contact info).
                        </p>
        
                        <div id='stencil-front' className='stencil-container'>
                            <img src={require('../assets/img/diamond.png')} className='stencil'/>
                        </div>
        
                        <div className='flip-btn'  onClick={() => this.handleFlip()}><small>Back</small></div>
                    </div>
                </div>
            </div>
        );
    }
    
}
export default Welcome;