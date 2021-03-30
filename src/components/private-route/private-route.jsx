import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const/const';
import {AppRoute} from '../../const/const';
import {privateRoutePropTypes} from '../../prop-types/prop-types';

const PrivateRoute = ({render, path, exact}) => {
  const authorizationStatus = useSelector((state) => state.LOGIN.authorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = privateRoutePropTypes;

export {PrivateRoute};
export default PrivateRoute;
