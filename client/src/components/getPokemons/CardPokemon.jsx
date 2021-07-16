import React from 'react'
import { Link } from 'react-router-dom';
import quien from '../../images/quien.jpg';

import '../../styles/cardPokemon.css'   


export const CardPokemon = ({ name, type, img, id}) => {
       return (
        <div className="card">
            <img 
                src={ img ? img : quien } width="226" height="250"
                alt={ name } />

                <div className="names">
                    <Link to={`/pokemon/${ id }`}>
                        <span>{ name }</span>
                        <span>Tipo: { type }</span>
                    </Link>
                </div>
        </div>
    )
}
