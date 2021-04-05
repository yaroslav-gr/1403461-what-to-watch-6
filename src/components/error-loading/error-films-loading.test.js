import React from 'react';
import ErrorFilmsLoading from './error-films-loading';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});
let store;

describe(`ErrorFilmsLoading should work correctly`, () => {
  store = mockStore({
    FILMS: {
      errorMessage: `some message`
    }
  });

  it(`ErrorFilmsLoading should render correctly`, () => {
    render(
        <Provider store={store}>
          <ErrorFilmsLoading/>
        </Provider>
    );

    expect(screen.getByText(/some message/i)).toBeInTheDocument();
  });
});
