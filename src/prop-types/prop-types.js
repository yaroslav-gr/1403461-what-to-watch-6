import PropTypes from 'prop-types';

export const filmPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export const filmsPropTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired
};

export const filmCardPropTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handleHover: PropTypes.func.isRequired,
};

export const addReviewsPropTypes = {
  id: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export const playerPropTypes = {
  videoLink: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export const inputRadioPropTypes = {
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export const filmDetailsPropTypes = Object.assign(filmsPropTypes, {
  film: PropTypes.shape(filmPropTypes)
});

export const videoPlayerPropTypes = {
  previewImage: filmPropTypes.previewImage,
  previewVideoLink: filmPropTypes.previewVideoLink,
  isPlaying: PropTypes.bool.isRequired,
};
