import { createStore } from 'redux';
import { pokes } from '../reducers';

// imp reducer de la carpera reducer    

export const store = createStore( 
    pokes, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);