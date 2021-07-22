import { FIND_POKEMON, USERS_ERROR } from ".";
import axios from 'axios';

export const findPokemon = ( name ) => async ( dispatch ) => {
    try {
        const { data } = await axios.get( `http://localhost:3001/pokemons/${ name }` )
        dispatch({
            type: FIND_POKEMON,
            payload: data
        })
     } catch ( error ) {
         dispatch( {
             type: USERS_ERROR,
             payload: console.log( error )
         })
     }
 }