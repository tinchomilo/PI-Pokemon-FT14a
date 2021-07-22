import React, { useEffect /*useMemo*/, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../actions/getPokemons';
import { CardPokemon } from './CardPokemon';
import { findPokemon } from '../../actions/findPokemon';
import { Pagination } from '../pagination/Pagination';

import '../../styles/getPokemons.css'


export const GetPokemons = ({ history }) => {
    
    const pokemonsLoaded = useSelector( ( state ) => state.pokemonsLoaded )
    const dispatch = useDispatch()
    const pokemonFinded = useSelector( ( state ) => state.pokemonFinded )   
      
    useEffect(() => {
        dispatch(getPokemons())       
    }, [dispatch])    

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault();
        dispatch(findPokemon( inputValue ) )
        history.push('/finded', pokemonFinded)                
    }

    return (
       <div className='conteiner'>        
           <form onSubmit={ handleSubmit }>
               <input 
                    type='text'
                    value={ inputValue }
                    placeholder='Busca tu pokemon favorito'
                    onChange={ handleInputChange }/>
               <button id='btn' type='submit'>Buscar</button>
           </form>          
           <hr />
           <div className='grilla'>
                {
                    pokemonsLoaded.paginated?.map( ( pokemon ) => (
                        <CardPokemon key={ pokemon.id }
                        { ...pokemon } />
                    ))
                }
            </div>            
            
            <Pagination />           
       </div>
    )
}
