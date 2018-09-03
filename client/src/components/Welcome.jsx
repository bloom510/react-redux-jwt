import React, { Component } from 'react';
import './styles/welcome.css'
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Call from '@material-ui/icons/Call';
import Textsms from '@material-ui/icons/Textsms';
import Email from '@material-ui/icons/Email';

let iconStyles = {
    fontSize: '14px'
};

const btnStyles = {
    maxWidth: '40px', 
    maxHeight: '30px', 
    minWidth: '40px', 
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
            <div style={{marginLeft: '50%'}}>
                <small>I get rendered when the card flips</small>
            </div>
        )   
    }

    render() {
        const { classes } = this.props;
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
                                <IconButton
                                style={btnStyles}
                                variant='text' 
                                color='inherit'>
                                    <Email className='action' style={iconStyles} />
                            </IconButton>
                            </li> 
                            <li>
                                // (510) 367.1393 
                                <IconButton
                                style={btnStyles}
                                variant='text' 
                                color='inherit'>
                                    <Call className='action' style={iconStyles} />
                                </IconButton>
                                <IconButton
                                style={btnStyles}
                                variant='text' 
                                color='inherit'>
                                    <Textsms className='action' style={iconStyles} />
                            </IconButton>
                            </li>
                        </ul>
        
                        <span>// San Francisco Bay Area</span>
        
                        <div className='flip-btn' onClick={() => this.handleFlip()}><small>See more</small></div>
        
                    </div>
        
                    <div className="back">
                        <p>
                        Need a full-stack developer to engineer scalable solutions for your business or get your next site up and running?
                        Drop me a line (see reverse for contact info).
                        </p>
                        <p>
                        We are currently under construction. 
                        Check back later for Services, Portfolio, and Bio.
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