import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { filter_type } from '../../actions/filerByType'
import { sort_desc } from '../../actions/sort_desc'

import '../../styles/filters.css'

export const Filters = () => {

    const dispatch = useDispatch()
    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const pokemons = useSelector(state => state.pokemonsLoaded)
    
    let {paginated} = pokemons
    // console.log('paginated',paginated)    
    
    const [ordered, setOrdered] = useState(paginated)
    // console.log('ordered', ordered)

    const [typeActive, setTypeActive] = useState('')
    const [pokesFiltered, setPokesFiltered] = useState([])
    const [valueActive, setValueActive] = useState('')    

    const handleChange = ( e ) => {
        
        setValueActive( e.target.value )
        if( valueActive === 'ascendente')
            ordered.sort((a, b) => {
                if( a.name < b.name ) return 1;
                if( a.name > b.name ) return -1;
                return 0;
            })

        if( valueActive === 'descendente')
        ordered.sort((a, b) => {
            if( a.name < b.name ) return -1;
            if( a.name > b.name ) return 1;
            return 0;
        })
        console.log('////', ordered)
        setOrdered( ordered )
        dispatch(sort_desc( ordered ) )
    }


    const handleTypeChange = ( e ) => {
        setTypeActive( e.target.value )
        setPokesFiltered( paginated.filter( (poke) => poke.type === typeActive))
        dispatch( filter_type( pokesFiltered) )
    }


    return (
        <div className='filter'>
            <label>
                    orden  
                        <select 
                        className='orden'
                        value={ valueActive }
                        onChange={ handleChange }
                        >
                            <option value="ascendente">Ascendente</option>
                            <option value="descendente">Descendente</option>
                        </select>
                </label>
                <label>
                    tipo  
                    <select 
                        className='tipo'
                        value={ typeActive }
                        onChange={ handleTypeChange }
                        >
                        {
                            pokemonTypes.map( (type) => (
                                <option key={type.id} value={type.name}>{type.name}</option>
                            ))
                        }                         
                    </select>
                </label>
        </div>
    )
}