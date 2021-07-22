import React from 'react';
import { NavLink } from 'react-router-dom';

import background from '../../images/landing1.jpeg';
import pokebola from '../../images/pokebola.png'
import '../../styles/landing.css'

export const LandingScreen = () => {
    return (
        <div className='background' style={{ backgroundImage: `url(${background})` }}>
            <div className='intro'>
            <h1>Entra y atrapalos YA!!</h1>
            <NavLink to='/home' >
            <img className='pokebola' src={ pokebola } width="100" height="100" alt="" />
            </NavLink>
            </div>
        </div>
    )
}
