import React from 'react';
import AddFavoriteButton from './add-favorite-button';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const/const';

const mockStore = configureStore({});
let store;

describe(`AddFavoriteButton should work correctly`, () => {
  store = mockStore({
    LOGIN: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  it(`AddFavoriteButton should render correctly`, () => {
    render(
        <Provider store={store}>
          <AddFavoriteButton id={5}/>
        </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});
