import React, { Component } from 'react';
import './styles/welcome.css'
import Button from '@material-ui/core/Button';
import Call from '@material-ui/icons/Call';
import Textsms from '@material-ui/icons/Textsms';
import Email from '@material-ui/icons/Email';


let iconStyles = {
    fontSize: '14px'
};

const btnStyles = {
    maxWidth: '30px', 
    maxHeight: '30px', 
    minWidth: '30px', 
    minHeight: '30px',
};

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            flipped: false
        }
    }
    handleFlip(){
        const flipper = document.querySelector('.flipper');
        if(!this.state.flipped) {
            flipper.classList.add('flipped');
            this.setState({flipped: true})
        } else {
            flipper.classList.remove('flipped');
            this.setState({flipped: false})
        }
    }
    reveal(){
        return (
            <div style={{marginLeft: '10%'}}>
                <small>I get rendered when the card flips</small>
            </div>
        )   
    }
    render() {
        return (
            <div>
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
                            <li>
                                // bloom510@protonmail.com 
                                <Button 
                                    style={btnStyles}
                                    variant='text' 
                                    size='mini' 
                                    color='inherit'
                                    >
                                <Email className='action' style={iconStyles} />
                                </Button>
                            </li> 
                            <li>
                                // (510).367.1393 
                                <Button 
                                    style={btnStyles}
                                    variant='text' 
                                    size='mini' 
                                    color='inherit'>
                                <Call className='action' style={iconStyles} />
                                </Button>
                                <Button 
                                    style={btnStyles}
                                    variant='text' 
                                    size='mini' 
                                    color='inherit'>
                                <Textsms className='action' style={iconStyles} />
                                </Button> 
                            </li>
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
        
                        <div className='flip-btn'  onClick={() => this.handleFlip()}><small>Home</small></div>
                    </div>
                </div>
            </div>
            {this.state.flipped ? this.reveal() : null}
        </div>
        );
    }
    
}
export default Welcome;