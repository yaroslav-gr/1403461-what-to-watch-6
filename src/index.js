import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './moks/films.js';
import {movieDesc} from './moks/movie-desc.js';


ReactDOM.render(
    <App
      films={films} movieDesc={movieDesc}
    />,
    document.querySelector(`#root`)
);
