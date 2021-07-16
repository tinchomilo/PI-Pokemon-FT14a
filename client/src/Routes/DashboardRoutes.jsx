import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AddPokemon } from '../components/addPokemon/AddPokemon'
import { PokemonDetail } from '../components/detail/PokemonDetail'
import { GetPokemons } from '../components/getPokemons/GetPokemons'
import { NavBar } from '../components/nav/NavBar'

export const DashBoardRoutes = () => {
    return (
        <div className="conteiner">
            <NavBar />
            
            <div>
                
                <Switch>
                    <Route exact path='/' component={ GetPokemons } />
                    <Route exact path='/add' component={ AddPokemon } />
                    <Route exact path='/pokemon/:pokemonId' component={ PokemonDetail } />
                                        
                    <Redirect to='/' />

                </Switch>
            </div>
        </div>
    )
}
