import PropTypes from 'prop-types';

export const filmsPropTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster_image: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export const filmCardPropTypes = {
  name: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired,
  setCurrentFilmCard: PropTypes.func.isRequired,
};
