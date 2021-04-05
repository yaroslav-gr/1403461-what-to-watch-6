import React from 'react'
import RemoveFavoriteButton from './remove-favorite-button';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

describe(`RemoveFavoriteButton shoulr work correctly`, () => {
  it(`RemoveFavoriteButton should render correctly`, () => {
    render(
      <Provider store={mockStore({})}>
        <RemoveFavoriteButton id={5}/>
      </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});
