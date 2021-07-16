import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PokeApp } from './PokeApp';
import { store } from './store/'

import './index.css'



ReactDOM.render(
  
    <Provider store = { store }>
      <PokeApp />
    </Provider>,
  document.getElementById('root')
);

