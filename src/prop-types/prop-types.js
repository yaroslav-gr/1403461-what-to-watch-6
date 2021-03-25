import PropTypes from 'prop-types';

export const filmShapePropTypes = {
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

export const filmPropTypes = {
  film: PropTypes.shape(filmShapePropTypes).isRequired,
};

export const filmsPropTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmShapePropTypes)).isRequired,
};

export const filmCardPropTypes = {
  film: filmPropTypes.film,
  isPlaying: PropTypes.bool.isRequired,
  handleHover: PropTypes.func.isRequired,
};

export const addReviewsPropTypes = {
  film: PropTypes.shape(filmShapePropTypes).isRequired,
};


export const inputRadioPropTypes = {
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export const filmInfoPagePropTypes = {
  id: PropTypes.number.isRequired,
};

export const videoPlayerPropTypes = {
  previewImage: filmShapePropTypes.previewImage,
  previewVideoLink: filmShapePropTypes.previewVideoLink,
  isPlaying: PropTypes.bool.isRequired,
};

export const userHeaderPropTypes = {
  children: PropTypes.object,
};

export const privateRoutePropTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export const singInMessagePropTypes = {
  message: PropTypes.string.isRequired,
  isBadRequest: PropTypes.bool.isRequired,
};

export const filmTabListPropTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleChangeTab: PropTypes.func.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
};

export const reviewItemPropTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export const filmReviewsPropTypes = {
  reviews: PropTypes.arrayOf(reviewItemPropTypes.review),
};
