import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const/const';
import {logoPropTypes} from '../../../prop-types/prop-types';

const Logo = ({currentClasses}) => {
  return (
    <React.Fragment>
      <div className="logo">
        <Link to={AppRoute.ROOT} className={currentClasses}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
    </React.Fragment>
  );
};

Logo.propTypes = logoPropTypes;

export default Logo;
