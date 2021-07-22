import { GET_POKEMONS, GET_POKEMON_DETAIL, FIND_POKEMON, CLEAN_PAGE, SORT_DESC, FILTER_BY_TYPE, CLEAN_FILTERS } from '../actions'


const inititalState = {
    pokemonsLoaded: [],
    pokemonDetail: {},
    pokemonTypes: [],
    pokemonFinded: {},
}

function rootReducer(state = inititalState, action) {
    switch( action.type ) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemonsLoaded: action.payload.data,
                pokemonTypes: action.payload.tipos
            }
        
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        
            case FIND_POKEMON: 
                return {
                    ...state,
                    pokemonFinded: action.payload
                }

            case CLEAN_PAGE:
                return {
                    ...state,
                    pokemonDetail: action.payload
                }

            case SORT_DESC:
                return {
                    ...state,
                    pokemonsLoaded: action.payload
                }
            
            case FILTER_BY_TYPE:
                return {
                    ...state,
                    pokemonsLoaded: action.payload
                }
            
            case CLEAN_FILTERS:
                return {
                    ...state,
                    pokemonsLoaded: action.payload
                }
                
        default: return state;
    }
    
}

export default rootReducer;