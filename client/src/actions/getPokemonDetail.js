import { GET_POKEMON_DETAIL, USERS_ERROR } from ".";
import axios from 'axios';


export const getPokemonDetail = ( id ) => async ( dispatch ) => {
    try {
       const { data } = await axios.get( `http://localhost:3001/pokemons/${ id }` )
       dispatch({
           type: GET_POKEMON_DETAIL,
           payload: data
       })
    } catch ( error ) {
        dispatch( {
            type: USERS_ERROR,
            payload: console.log( error )
        })
    }
}
