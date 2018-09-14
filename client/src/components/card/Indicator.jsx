import React, { Component } from 'react';
// import './styles/Indicator.css';

export default class Indicator extends Component {
    constructor() {
        super();
        this.state = {
            indicators: [1,2,3],
        };
    }

    componentWillReceiveProps() {
        this.setState({focus: this.props.focus})
    }

    render() {
        return (
            <div className='indicator-container'
               
            >
                { this.state.indicators.map((o,n) => {
                    return ( 
                        <span key={n} 
                            className =
                            {n === this.props.focus ? 
                                'circle view-focus' : 'circle'}
                        ></span>
                    )
                }) }
                {this.props.navComponents('Back')}
            </div>
        );
    }
}