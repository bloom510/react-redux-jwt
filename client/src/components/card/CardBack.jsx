import React, { Component } from 'react';
import CardNav from './CardNav';
// import './styles/CardBack.css'


class CardBack extends Component {
    render() {
        return (
            <div className="back">
            {/* <p>
                Need a full-stack developer to engineer scalable solutions for your business or get your next site up and running?
                Drop me a line (see reverse for contact info).
            </p>
            
            <p>
                We are currently under construction. 
                Check back later for Services, Portfolio, and Bio.
            </p>

            <div id='stencil-front' className='stencil-container'>
                <img src={require('./assets/img/diamond.png')} className='stencil'/>
            </div> */}

            <CardNav 
                className='card-nav' 
                flipped={this.props.flipped} 
                />
            
            {/* We'd like to add any other content or components at the bottom */}
            {/* For example, a Flipper button */}
            { this.props.children }
        </div>
        )
    }
}

export default CardBack;