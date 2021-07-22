import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { Route, Switch} from 'react-router-dom';
import { LandingScreen } from './components/landing/LandingScreen';

import './App.css';



export const PokeApp = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ LandingScreen } />
        <Route path='/'home component ={AppRouter} />
      </Switch>
    </div>
  )
}
