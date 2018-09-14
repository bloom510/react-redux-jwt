import React, { Component } from 'react';
import CardBackContent from './CardBackContent';
// import './styles/CardBack.css'


class CardBack extends Component {
    render() {
        return (
            <div className="back">

            <CardBackContent 
                flipBtn={this.props.flipBtn}
                windowDims={this.props.windowDims}
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