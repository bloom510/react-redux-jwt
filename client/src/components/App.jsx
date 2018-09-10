import React from 'react';
import Header from './Header';


// Render Header nav component to top, 
// children will be React Routing

export default ({ children }) => {
    return (
        <div className='app-container'>
            <Header />
            { children }
        </div>
    );
}