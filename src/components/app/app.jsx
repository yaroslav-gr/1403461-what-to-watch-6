import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';


const App = (props) => {
  const {films, movieDesc} = props;
  return (
    <React.Fragment>
      <Main films={films} movieDesc={movieDesc} />
    </React.Fragment>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired,
  movieDesc: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  })).isRequired
};

export default App;
