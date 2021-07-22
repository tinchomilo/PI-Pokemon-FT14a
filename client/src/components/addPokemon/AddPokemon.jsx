import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPokemon } from '../../actions/addPokemon'

import '../../styles/addPokemon.css'

export const AddPokemon = ({ history }) => {

    const pokemonTypes = useSelector((state) => state.pokemonTypes)
    const dispatch = useDispatch()
    const initialState = {
        name: '',
        type1: '',
        type2: '',
        health: '',
        strength: '',
        defence: '',
        speed: '',
        height: '',
        weight: '',
    }
    

    const [values, setValues] = useState(initialState)
    const [succes, setSucces] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit =  ( e ) => {
        e.preventDefault();
        if( values.name && values.type1 ){
            dispatch(addPokemon( values ) )
            setSucces(true)
            setValues(initialState)  
        } else {
            setError(true)
        }   
    }

    const handleChange = ( e ) => {
        setValues( values => ({
            ...values, [e.target.name]: e.target.value
        }))
    }
    const handleReturn = () => {
        history.goBack();        
    }

    return (
        <div className='plant'>
            <h1>Crea tu pokemon</h1>
            <form className='add' onSubmit={ handleSubmit }>
                <div>
                    <label>Tipo 1: </label>
                    <select value={ values.type1} name='type1' onChange={handleChange}>
                        {
                            pokemonTypes.map( (type) => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))
                        }                         
                    </select>
                </div>
                <div>
                        {
                            (values.type1 !== '') &&
                            <>
                            <label>Tipo 2: </label>
                            <select value={ values.type2} name='type2' onChange={handleChange} >
                                {
                                    pokemonTypes.map( (type) => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))
                                }
                            </select>
                            </>
                        }
                </div>                
                <div>
                    <label>Nombre: </label>
                    <input
                        type='text'
                        onChange={ handleChange }
                        value={ values.name }
                        name='name'
                        autoComplete='off'                    
                    />
                </div>
                <div>
                    <label>Vida: </label>
                    <input
                        type='text'
                        onChange={ handleChange }
                        value={ values.health }
                        name='health'
                        autoComplete='off'                    
                    />
                </div>
                <div>
                    <label>Fuerza: </label>
                    <input
                        type='text'
                        onChange={ handleChange }
                        value={ values.strength }
                        name='strength'
                        autoComplete='off'                    
                    />
                </div>
                <div>
                    <label>Defensa: </label>
                    <input
                        type='text'
                        onChange={ handleChange }
                        value={ values.defence }
                        name='defence'
                        autoComplete='off'                    
                    />
                </div>
                <div>
                    <label>Velocidad: </label>
                    <input
                        type='text'
                        onChange={ handleChange }
                        value={ values.speed }
                        name='speed'
                        autoComplete='off'                    
                    />
                </div>
                <div>
                    <label>Altura: </label>
                    <input
                        type='text'
                        onChange={ handleChange }
                        value={ values.height }
                        name='height'
                        autoComplete='off'                    
                    />
                </div>
                <div>
                    <label>Peso: </label>
                    <input
                        type='text'
                        onChange={ handleChange }
                        value={ values.weight }
                        name='weight'
                        autoComplete='off'                    
                    />
                </div>
                <div className='buttons'>
                <button>Crear!!</button>
                <button onClick={ handleReturn }>Regresar</button>
                </div>
            </form>
            {
                succes ? <h2>El pokemon fue creado con exito</h2> : null
            }
            {
                error ? <h2>El nombre y el tipo son obligatorios</h2> : null
            }
        </div>
    )
}
