import React from 'react';
import { NavLink } from 'react-router-dom';

import background from '../../images/landing1.jpeg';
import pokebola from '../../images/pokebola.png'
import '../../styles/landing.css';

export const LandingPage = () => {
    return (
        <div className='background' style={{ backgroundImage: `url(${background})` }}>
            <h1>componentte landing</h1>
            <NavLink to='/' >
                <img id='pokebola' src={ pokebola } width="100" height="100" alt="" />            
            </NavLink>
            
        </div>
    )
}
