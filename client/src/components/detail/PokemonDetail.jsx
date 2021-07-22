import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cleanPage } from '../../actions/cleanPage'
import { getPokemonDetail } from '../../actions/getPokemonDetail'


import imgDefault from '../../images/quien.jpg';
import '../../styles/pokemonDetail.css'


export const PokemonDetail = ( { history } ) => {
    
    const pokemonDetail = useSelector( ( state ) => state.pokemonDetail)    
    
    const dispatch = useDispatch()
    const { pokemonId } = useParams();

    const handleReturn = () => {
       
        history.goBack();
        
    }   

    useEffect(() => {
        dispatch(getPokemonDetail( pokemonId ))
        return () => {
            dispatch(cleanPage())
        }
    }, [pokemonId, dispatch])

    return (
        <>
            <div className='view'>
                <div className='title'> 
            <h1>{ pokemonDetail.name?.replace(/^\w/, (c) => c.toUpperCase()) }</h1>
            </div>
            <ul>      
                <li>
                    
                    { pokemonDetail.type?.map(  ( elem, i ) => ( <h4 key={ i }>{ elem }</h4> )) }
                    { pokemonDetail.tipos?.map( elem => ( <h4 key={elem.name}><span>{elem.name}</span></h4> )) }                    
                </li>
                <li>
                    <h4>Altura: { pokemonDetail.height }</h4>
                </li>           
                <li>
                    <h4>Defensa: { pokemonDetail.defence }</h4>
                </li>      
                <li>
                    <h4>Fuerza: { pokemonDetail.strength }</h4>
                </li>
                <li>
                    <h4>id: { pokemonDetail.id }</h4>
                </li>                                           
                <li>
                    <h4>Peso: { pokemonDetail.weight }</h4>
                </li>                
                <li>
                    <h4>Velocidad: { pokemonDetail.speed }</h4>
                </li>
                <li>
                    <h4>Vida: { pokemonDetail.health }</h4>
                </li>

            </ul>       
                <img src={ pokemonDetail.img ? pokemonDetail.img : imgDefault } alt='pokemon' width='250' />     
            </div> 
            <div>
                <button className='btn' onClick={ handleReturn }>Regresar</button>
            </div>
        </>
    )
}
