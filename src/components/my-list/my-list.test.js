import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import MyList from './my-list';
import { fakeFilms, fakeUserInfo } from '../../test/test-mocks/test-mocks';
import { AuthorizationStatus } from '../../const/const';

let store;
let history;
const mockStore = configureStore({});

describe(`MyList should work correctly`, () => {
  history = createMemoryHistory();
  store = mockStore({
    FILMS: {
      films: fakeFilms
    },
    USER: {
      userInfo: fakeUserInfo
    },
  });

  it(`MyList should render correctly`, () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MyList/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/You don't have any favorite movies yet./i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});