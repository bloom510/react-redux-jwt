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

        //TODO: Achieve the following iteratively
        const flipBtnOne = document.querySelectorAll('.flip-btn')[0]
        const flipBtnTwo = document.querySelectorAll('.flip-btn')[1]
        
        flipBtnOne.addEventListener('click', () => {
            this.handleFlip()
        })

        flipBtnTwo.addEventListener('click', () => {
            this.handleFlip()
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

renderFlipBtn(text) {
    return( 
        <Flipper>{text}</Flipper>
    )
}

    render() {
        return (
            <div>
                <div className="flip-container">
                <div className="flipper">
                    <CardFront flipBtn={this.renderFlipBtn} />
                    <CardBack windowDims={this.state.windowDims} flipped={this.state.flipped} flipBtn={this.renderFlipBtn} />
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