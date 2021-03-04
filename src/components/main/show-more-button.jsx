import React from 'react';
import {connect} from 'react-redux';

const ShowMoreButton = () => {
  return (
    <React.Fragment>
      <button className="catalog__button" type="button">Show more</button>
    </React.Fragment>
  )
};

export default connect(null, null) (ShowMoreButton);
