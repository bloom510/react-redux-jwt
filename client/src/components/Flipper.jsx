import React, { Component } from 'react';

export default class Flipper extends Component {
    render() {
        return (
            <div className='flip-btn' 
                onClick={this.props.onClick}>
                <small>See more</small>
            </div>
        );
    }
}