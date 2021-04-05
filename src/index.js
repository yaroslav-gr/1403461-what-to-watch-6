import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Router as BrowserRouter} from 'react-router-dom';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import App from './components/app/app';
import rootReducer from '../src/store/root-reducer';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const/const';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';
import browserHistory from './browser-history';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
