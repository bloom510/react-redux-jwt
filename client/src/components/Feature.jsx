import React, { Component } from 'react';
import Editor from './Editor';
import requireAuth from './requireAuth';

class Feature extends Component {
    render(){
        return (
            <div>
                This is the feature!
                <Editor />
            </div>
        );
    }
}

export default requireAuth(Feature);