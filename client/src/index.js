import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PokeApp } from './PokeApp';
import { store } from './store/'
import { BrowserRouter } from 'react-router-dom';

import './index.css'



ReactDOM.render(
  
    <Provider store = { store }>
      <BrowserRouter>
        <PokeApp />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

