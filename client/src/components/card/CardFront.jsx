import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import Call from '@material-ui/icons/Call';
import Textsms from '@material-ui/icons/Textsms';

import { iconStyles, btnStyles } from '../../styles/styles.js';

class CardFront extends Component {
    render() {
        return (
            <div className="front">
            <div id='stencil-front' className='stencil-container'>
                <img src={require('../../assets/img/stencil.png')} className='stencil'/>
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
                    <a style={{ color: 'inherit' }} href='mailto:bloom510@protonmail.com'>
                        <IconButton
                            style={btnStyles}
                            variant='contained' 
                            color='inherit'>
                            <Email className='action' style={iconStyles} />
                        </IconButton>
                    </a>
                </li> 

                <li>
                    // (510) 367.1393 
                    <a style={{ color: 'inherit' }} href='tel:+1-510-367-1393'>
                        <IconButton
                            style={btnStyles}
                            variant='outlined' 
                            color='inherit'>
                            <Call className='action' style={iconStyles}/>
                        </IconButton>
                    </a>
                    <a style={{ color: 'inherit', textDecoration: 'none' }} href='sms:+1-510-367-1393'>
                        <IconButton
                            style={btnStyles}
                            variant='outlined' 
                            color='inherit'>
                            <Textsms className='action' style={iconStyles} />
                        </IconButton>
                    </a>
                </li>
            </ul>

            <span>// San Francisco Bay Area</span>
            
            {/* Any other components or content, like Flipper button */}
            { this.props.children }

        </div>
        );
    }
}

export default CardFront;