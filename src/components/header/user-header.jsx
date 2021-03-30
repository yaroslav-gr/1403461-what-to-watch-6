import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/const';
import {redirectToRoute} from '../../store/action';
import {userHeaderPropTypes} from '../../prop-types/prop-types';

const UserHeader = ({children}) => {
  const userInfo = useSelector((state) => state.USER.userInfo);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {children}
        <div className="user-block">
          <div className="user-block__avatar">
            <img
              onClick={() => dispatch(redirectToRoute(AppRoute.MY_LIST))}
              src={userInfo.avatarUrl}
              alt="User avatar"
              width="63"
              height="63" />
          </div>
        </div>
        <p style={{paddingLeft: 20}}>{userInfo.email}</p>
      </header>
    </React.Fragment>
  );
};

UserHeader.propTypes = userHeaderPropTypes;

export default UserHeader;
