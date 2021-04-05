import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import AddReview from './add-review';
import {fakeFilm, fakeUserInfo} from '../../test/test-mocks/test-mocks';

const mockStore = configureStore({});
let history;
let store;

const fakeShortComment = fakeFilm.name;
const fakeLongComment = fakeFilm.description;

describe(`Test AddReview`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      FILMS: {uploadCommentStatus: false, isErrorUploadComment: false},
      USER: {userInfo: fakeUserInfo}
    });
  });

  it(`AddReview should render correctly`, () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview film={fakeFilm} />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Dardjeeling Limited/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByRole(`button`)).toHaveTextContent(/Post/i);
  });

  it(`Form should responds correctly to user's action `, () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview film={fakeFilm} />
        </Router>
      </Provider>
    );

    userEvent.type(screen.getByTestId(`review`), fakeShortComment);
    expect(screen.getByDisplayValue(/Dardjeeling Limited/i)).toBeInTheDocument();
    expect(screen.getByTestId(`review`)).toHaveAttribute(`minLength`, `50`);
    expect(screen.getByTestId(`review`)).toHaveAttribute(`maxLength`, `400`);
    expect(screen.getByRole(`button`, {type: `submit`})).toHaveAttribute(`disabled`);

    userEvent.type(screen.getByTestId(`review`), fakeLongComment);
    expect(screen.getByDisplayValue(/A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other./i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Rating 5/i));
    expect(screen.getByRole(`button`, {type: `submit`})).not.toHaveAttribute(`disabled`);
  });
});