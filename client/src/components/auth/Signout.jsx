
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    renderRedirect = () => {
        console.log(this.state)
            setTimeout(() => {
                this.setState({ redirect: true })
                console.log(this.state)
            } , 5000);
      }

    componentDidMount(){
        this.props.signout();
        this.renderRedirect();
    }
    
    render() {
        return(
            <div>
            {
                !this.state.redirect ? 
                    `If you're not redirected in 5 seconds, click here.` 
                    : 
                    <Redirect to='/' />
            }
            </div>
        );
    }
}

export default connect(null, actions)(Signout);