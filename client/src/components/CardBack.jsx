import React, { Component } from 'react';


class CardBack extends Component {
    render() {
        return (
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
        )
    }
}

export default CardBack;