import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/home/Home'
import { AddPokemon } from '../components/addPokemon/AddPokemon';
import { Navbar } from '../components/nav/Navbar';
import { SearchBar } from '../components/search/SearchBar';


export const DashboardRoutes = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Switch>
                     <Route exact path='/add' component={ AddPokemon } />
                     <Route exact path='/search' component={ SearchBar } />
                </Switch>
            </div>           

        </div>        
    )
}
