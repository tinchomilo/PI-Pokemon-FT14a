import React from 'react'
import imgDefault from '../../images/quien.jpg';

export const PokemonFinded = ({ history, location }) => {
 
    const handleReturn = () => {
        history.goBack();        
    }

    const pokemon = location.state
    
    return (
        <>
            <div className='view'>
                <div className='title'> 
            <h1>{ pokemon.name.replace(/^\w/, (c) => c.toUpperCase()) }</h1>
            </div>
            <ul>      
                <li>
                    { pokemon.type?.map(  ( elem, i ) => ( <h4 key={ i }>{ elem }</h4> )) }                    
                </li>
                <li>
                    <h4>Altura: { pokemon.height }</h4>
                </li>           
                <li>
                    <h4>Defensa: { pokemon.defence }</h4>
                </li>      
                <li>
                    <h4>Fuerza: { pokemon.strength }</h4>
                </li>
                <li>
                    <h4>id: { pokemon.id }</h4>
                </li>                                           
                <li>
                    <h4>Peso: { pokemon.weight }</h4>
                </li>                
                <li>
                    <h4>Velocidad: { pokemon.speed }</h4>
                </li>
                <li>
                    <h4>Vida: { pokemon.health }</h4>
                </li>

            </ul>       
                <img src={ pokemon.img ? pokemon.img : imgDefault } alt='pokemon' width='250' />     
            </div> 
            <div>
                <button className='btn' onClick={ handleReturn }>Regresar</button>
            </div>
        </>
    )
}