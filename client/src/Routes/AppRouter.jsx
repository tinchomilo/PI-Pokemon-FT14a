import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { AddPokemon } from '../components/addPokemon/AddPokemon'
import { PokemonDetail } from '../components/detail/PokemonDetail'
import { GetPokemons } from '../components/getPokemons/GetPokemons'
import { PokemonFinded } from '../components/getPokemons/PokemonFinded'
import { NavBar } from '../components/nav/NavBar'


export const AppRouter = () => {
    return (        
            <div className="conteiner">
                <NavBar />
                    <>
                        <Switch>                         
                            <Route exact path='/home' component={ GetPokemons } />
                            <Route path="/add" component={ AddPokemon } />
                            <Route path='/pokemon/:pokemonId' component={ PokemonDetail } />
                            <Route path='/finded' component={ PokemonFinded } />                                             
                            <Redirect to='/home' />                            
                        </Switch>
                    </>
            </div>        
    )
}
