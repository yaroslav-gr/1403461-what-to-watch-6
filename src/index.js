import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {films} from './moks/films.js';
import {reducer} from '../src/store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App
      films={films}
    />
  </Provider>,
  document.querySelector(`#root`)
);
