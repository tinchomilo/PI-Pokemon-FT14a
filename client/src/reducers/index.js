import { GET_POKEMONS } from '../actions'


const inititalState = {
    pokemonsLoaded: [],
    

}

function rootReducer(state = inititalState, action) {
    switch( action.type ) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemonsLoaded: action.payload
            }
        default: return state;
    }
    
}

export default rootReducer;