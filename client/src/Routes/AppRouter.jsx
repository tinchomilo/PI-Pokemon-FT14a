import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { LandingScreen } from '../components/landing/LandingScreen';
import { DashBoardRoutes } from './DashBoardRoutes';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/landing" component={ LandingScreen } />

                    <Route path="/" component={ DashBoardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
