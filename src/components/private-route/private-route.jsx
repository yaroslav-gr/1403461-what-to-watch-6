import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const/const';
import {AppRoute} from '../../const/const';
import {privateRoutePropTypes} from '../../prop-types/prop-types';

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
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

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

PrivateRoute.propTypes = privateRoutePropTypes;

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
