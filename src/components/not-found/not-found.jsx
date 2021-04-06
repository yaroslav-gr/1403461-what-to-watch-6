import React from 'react';
import Logo from '../common/logo/logo';
import {LogoClassNames} from '../../const/const';

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo currentClasses={LogoClassNames.HEADER} />
          <h1 className="page-title user-page__title">404 Page Not Found</h1>
        </header>
        <div className="sign-in user-page__content">
        </div>
        <footer className="page-footer">
          <Logo currentClasses={LogoClassNames.FOOTER} />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
