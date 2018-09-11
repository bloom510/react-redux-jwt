import React, { Component } from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';
import Flipper from './Flipper';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            flipped: false,
        }
    }

    handleFlip(){
        const flipper = document.querySelector('.flipper');
        const back = document.querySelector('.back');

        if(!this.state.flipped) {
            flipper.classList.add('flipped');
            back.classList.add('expand');
            this.setState({
                flipped: true, 
                // width: this.props.resize(true).px
            })

        } else {
            const timeout = window.innerWidth <= 480 ? 0 : 1500;
            console.log('timeout', timeout)
            back.classList.remove('expand');
            setTimeout(() => {
                flipper.classList.remove('flipped');
                this.props.resize(false)
                this.setState({
                    flipped: false, 
                })

            } , timeout)
        }
        console.log(this.state)

    }
    
    reveal(){
        return (
            <div style={{marginLeft: '50%'}}>
                <small>I get rendered when the card flips</small>
            </div>
        )   
    }

    render() {
        return (
            <div>
                <div className="flip-container">
                <div className="flipper">
                    <CardFront>
                        <Flipper onClick={() => this.handleFlip()}>
                            See more
                        </Flipper>
                    </CardFront>
                    <CardBack flipped={this.state.flipped}>
                        <Flipper onClick={() => this.handleFlip()}>
                            Back
                        </ Flipper>
                    </CardBack>
                </div>
            </div>
            {/* You can conditionally render components based on card direction */}
            {/* For example: */}
            {/* {this.state.flipped ? this.reveal() : null} */}
        </div>
        );
    }
    
}

export default connect(null, actions)(Welcome);