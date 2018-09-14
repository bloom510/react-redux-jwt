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
            windowDims: { width: window.innerWidth, height: window.innerHeight }
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.handleResize()
        })
    }

    handleResize(){
        const update = { 
            width: window.innerWidth, 
            height: window.innerHeight 
        }
        this.setState({ 
            windowDims: update
        })
    }

    handleFlip(){
        const flipper = document.querySelector('.flipper');
        const back = document.querySelector('.back');

        if(!this.state.flipped) {
            flipper.classList.add('flipped');
            back.classList.add('expand');

            this.setState({
                flipped: true, 
            })

        } else {
            
            const timeoutLength = window.innerWidth <= 480 ? 0 : 1500;
            back.classList.remove('expand');
            
            setTimeout(() => {
                flipper.classList.remove('flipped');
                this.props.resize(false)
                this.setState({
                    flipped: false, 
                })
            }, timeoutLength)
        }
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
                    <CardBack windowDims={this.state.windowDims} flipped={this.state.flipped}>
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