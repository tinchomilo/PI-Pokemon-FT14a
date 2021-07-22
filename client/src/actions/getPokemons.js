import { GET_POKEMONS, USERS_ERROR } from './index';
import axios from 'axios'


export const getPokemons = ( page ) => async ( dispatch )  => {
    
    try{
        const  { data }  = await axios.get( "http://localhost:3001/pokemons", { params: page  } )
        const { data:tipos } = await axios.get( "http://localhost:3001/tipos" )
        dispatch( {
            type: GET_POKEMONS,
            payload: { data, tipos }
        })        
    }
    catch( error ){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log( error ),
        })
    }

}   