import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SingIn from './sing-in';
import configureStore from 'redux-mock-store';
import {fakeUserInfo} from '../../test/test-mocks/test-mocks';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const/const';

const mockStore = configureStore({});
let history;

describe(`SingIn should work correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it(`SingIn should render correctly`, () => {
    const store = mockStore({
      LOGIN: {
        isBadRequest: false
      }
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <SingIn/>
        </Router>
      </Provider>
    );
     
    screen.getAllByText(/Sign in/i).forEach(item => expect(item).toBeInTheDocument());
  });

  it(`SingIn should react correctly by users actions`, () => {
    const store = mockStore({
      LOGIN: {
        isBadRequest: false
      }
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <SingIn/>
        </Router>
      </Provider>
    );

    userEvent.type(screen.getByTestId(`user-email`), fakeUserInfo.email);
    expect(screen.getByDisplayValue(/fake@gmail.com/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`user-password`), `12345`);
    expect(screen.getByDisplayValue(/12345/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(`submit-button`));
    expect(store.dispatch).toBeCalled();
    expect(history.pathName === AppRoute.Router).toBe(true);
  });

  it(`SingIn should throw error messsage if user put invalid data`, () => {
    const store = mockStore({
      LOGIN: {
        isBadRequest: true
      }
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <SingIn/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  })
});
