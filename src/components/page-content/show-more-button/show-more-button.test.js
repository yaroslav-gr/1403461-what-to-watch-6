import React from 'react';
import {render, screen} from '@testing-library/react';
import ShowMoreButton from './show-more-button';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

let store;
const mockStore = configureStore({});

describe(`ShowMoreButton should work correctly`, () => {
  store = mockStore({});

  it(`ShowMoreButton sgould render correctly`, () => {
    render(
        <Provider store={store}>
          <ShowMoreButton/>
        </Provider>
    );

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
});
