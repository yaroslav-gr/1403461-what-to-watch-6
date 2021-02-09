import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './moks/films.js';
import {filmDesc} from './moks/film-desc.js';


ReactDOM.render(
    <App
      films={films} filmDesc={filmDesc}
    />,
    document.querySelector(`#root`)
);
