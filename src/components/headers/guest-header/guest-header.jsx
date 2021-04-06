import React from 'react';
import Logo from '../../../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute, LogoClassNames} from '../../../../const/const';

const GuestHeader = () => {
  return (
    <React.Fragment>
      <header className="page-header">
        <Logo currentClasses={LogoClassNames.HEADER}/>
        <div className="user-block">
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
        </div>
      </header>
    </React.Fragment>
  );
};

export default GuestHeader;
