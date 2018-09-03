import React, { Component } from 'react';

export default class Flipper extends Component {
    render() {
        return (
            // Click handler is passed as a prop so we can customize actions based on context
            // Button text is set to children so it may be customized based on context
            <div 
                className='flip-btn'
                onClick={this.props.onClick}
            >
                <small>{this.props.children}</small>
            </div>
        );
    }
}