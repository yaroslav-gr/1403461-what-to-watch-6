import PropTypes from 'prop-types';

// export const filmsPropTypes = {
//   films: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     posterImage: PropTypes.string.isRequired,
//     backgroundImage: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//   })).isRequired,
// };

export const filmCardPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  setCurrentFilmCard: PropTypes.func.isRequired,
};

export const addReviewsPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
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

export const filmsPropTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
}
