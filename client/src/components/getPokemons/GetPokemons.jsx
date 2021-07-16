import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../actions/getPokemons';
import { CardPokemon } from './CardPokemon';

import '../../styles/getPokemons.css'


export const GetPokemons = () => {
    const dispatch = useDispatch()
    const pokemonsLoaded = useSelector((state) => state.pokemonsLoaded)
    console.log('estado----->',pokemonsLoaded)
     useEffect(() => {
         dispatch(getPokemons())
         }, [dispatch])

    return (
       <div>
           <h1>aca se deberian ver los pokemons</h1>
           <hr />
            <div className='grilla'>
                {
                    pokemonsLoaded.map( ( pokemon ) => (
                        <CardPokemon key={ pokemon.id }
                        { ...pokemon } />
                    ))
                }
            </div>
            
       </div>
    )
}
