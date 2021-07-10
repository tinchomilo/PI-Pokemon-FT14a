import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LandingPage } from '../components/landing/LandingPage';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRoute = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route excat path="/landing" component={ LandingPage } />

                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
        
    )
}
