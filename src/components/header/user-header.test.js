import React from 'react'
import UserHeader from './user-header';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router';

let store;
let history;
const mockStore = configureStore({});

describe(`UserHeader should work correctly`, () => {
    history = createMemoryHistory();
    store = mockStore({
      USER: {
        userInfo: {
          avatarUrl: ``,
          email: `q@gmail.com`
        }
      }
    });

    it(`UserHeader should render correctly`, () => {
      render(
        <Provider store={store}>
          <Router history={history}>
            <UserHeader children={() => {}}/>
          </Router>
        </Provider>
      );

      expect(screen.getByText(/q@gmail.com/i)).toBeInTheDocument();
    });
  });