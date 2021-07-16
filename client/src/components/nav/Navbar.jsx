import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/nav.css'
import { Filters } from '../filters/Filters'

export const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='grid'>
                <NavLink exact to='/add' activeClassName='active'>Crear pokemon</NavLink> 
                <NavLink exact to='/'>Home</NavLink>
                
                <Filters />
            </div>
        </nav>
    )
}
