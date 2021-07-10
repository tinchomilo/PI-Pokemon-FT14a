import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <h1>nav</h1>
            <NavLink to='/add' > Crear pokemon </NavLink>
            <input type='text' name='buscar' placeholder='busca tu pokemnon'/>

        </nav>
    )
}
