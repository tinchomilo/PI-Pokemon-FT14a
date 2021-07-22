import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../actions/getPokemons';

import '../../styles/pagination.css'


export const Pagination = () => {

    const dispatch = useDispatch();
    const pokemonsLoaded = useSelector( state  => state.pokemonsLoaded )  
    
    const { page } = pokemonsLoaded
    // console.log(pokemonsLoaded)
    // console.log('page',page)

    return (
        <div>
            <button 
                className="prevBtn" 
                // disabled={page === 0} 
                onClick={ () => dispatch( getPokemons( page - 1 ) ) }
                >Anterior
            </button>
            <button 
                className="nextBtn" 
                // disabled={page === page.length - 1} 
                onClick={ () => dispatch( getPokemons( page + 1 ) ) }
                >Siguiente
            </button>
            
        </div>
    )
}