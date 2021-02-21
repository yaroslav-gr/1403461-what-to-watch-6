import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './moks/films.js';


ReactDOM.render(
    <App
      films={films}
    />,
    document.querySelector(`#root`)
);
