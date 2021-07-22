import React from 'react'
import { Link } from 'react-router-dom';
import imgDefault from '../../images/quien.jpg';

import '../../styles/cardPokemon.css'   

export const CardPokemon = ({ name, type, img, id, tipos }) => {

    return (          
        <div className="card">
            <img 
                src={ img ? img : imgDefault } width="135" height="135"
                alt={ name } />
                <div className="names">
                    <Link to={`/pokemon/${ id }`}>
                        <span>{ name.replace(/^\w/, (c) => c.toUpperCase()) }</span>
                        {type?.map(  (elem, i) => ( <p key={i}>{elem}</p> ))  }
                        {tipos?.map( elem => ( <p key={elem.name}><span>{elem.name}</span></p> ))}
                    </Link>
                </div>
        </div>
    )
}
