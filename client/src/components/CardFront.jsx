import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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

class CardFront extends Component {
    render() {
        return (
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
                            color='inherit'
                            >
                        <Email className='action' style={iconStyles} />
                        </Button>
                    </li> 
                    <li>
                        // (510) 367.1393 
                        <Button 
                            style={btnStyles}
                            variant='text' 
                            color='inherit'>
                        <Call className='action' style={iconStyles} />
                        </Button>
                        <Button 
                            style={btnStyles}
                            variant='text' 
                            color='inherit'>
                        <Textsms className='action' style={iconStyles} />
                        </Button> 
                    </li>
                </ul>

            <span>// San Francisco Bay Area</span>

            <div className='flip-btn' onClick={() => this.handleFlip()}><small>See more</small></div>
        </div>
        )
    }
}

export default CardFront;