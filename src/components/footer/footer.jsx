import React from 'react';
import Logo from '../logo/logo';
import {LogoClassNames} from '../../const/const';

const Footer = () => {

  return (
    <React.Fragment>
      <footer className="page-footer">
        <Logo currentClasses={LogoClassNames.FOOTER} />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
