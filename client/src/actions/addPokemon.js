import { ADD_POKEMON } from ".";
import axios from 'axios';

export const addPokemon = ({name, health, attack, defense, speed, weight, height, type1, type2}) => {
    return async (dispatch) => {
    try {
        await axios.post( 'http://localhost:3001/pokemons/',
         {
             name,
             health,
             attack,
             defense,
             speed,
             weight,
             height,
             type1,
             type2
         })     
            dispatch({
            type: ADD_POKEMON,
            
        })
     } catch ( error ) {
         if(error.response?.status === 404){
             alert('no se creo el pokemon ')
         }
         dispatch( {
             type: ADD_POKEMON
         })
        }
    }
}