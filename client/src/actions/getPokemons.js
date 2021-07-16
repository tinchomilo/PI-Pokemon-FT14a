import { GET_POKEMONS, USERS_ERROR } from './index';
import axios from 'axios'



export const getPokemons = () => async dispatch  => {
    
    try{
        const  { data }  = await axios.get("http://localhost:3001/pokemons")
        dispatch( {
            type: GET_POKEMONS,
            payload: data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}   