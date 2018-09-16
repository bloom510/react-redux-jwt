import React, { Component } from 'react';

export default class Bio extends Component {
    render() {
        return (
            <div>
                <img className='avatar' src={require('../../assets/img/headshot2.jpg')} style={{height:'300px', borderRadius:'50%', boxShadow:' 0 0 900px 0 #F0F8FF'}} />

                <h2>Bio</h2>

                <p>
                    Please note: we're under construction here. Thanks for bearing with us! <br />               
                </p>
                <p>
                    The same algorithm used to encrypt can also be utilized to make beautiful, architecturally sound music or visual art. As a jazz-conservatory trained musician and front-end engineer, I bridge the gap between technology and creativity by bringing a unique blend of creative and analytical to the table. 

                    Skills:
                    <ul>
                    <li>- Modern JavaScript (React, Node, Express, ES6+)</li>
                    <li>- Frontend frameworks like Materialize and Bootstrap</li>
                    <li>- Real-time apps with Socket.io</li>
                    <li>- SQL and NoSQL database solutions</li>
                    <li>- Intuitive, conversational UI with a high degree of user empathy</li> 
                    </ul>
                    Good programming is language agnostic! I am willing to take on projects in JavaScript, PHP, and Python for individuals and small businesses. <a href='#'>Take a look</a> and see for yourself!
            </p>

            </div>
        )
    }
}
