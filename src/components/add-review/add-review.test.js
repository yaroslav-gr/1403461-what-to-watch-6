import React from 'react';
import {fireEvent, getByTestId, getByText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import AddReview from './add-review';

const mockStore = configureStore({});
let history;
let store;

const fakeFilm = {
  backgroundColor: `#AD9F8B`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Dardjeeling_Limited.jpg`,
  description: `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
  director: `Wes Anderson`,
  genre: `Adventure`,
  id: 3,
  isFavorite: true,
  name: `Dardjeeling Limited`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Dardjeeling_Limited.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/dardjeeling_limited.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 3.6,
  released: 2007,
  runTime: 91,
  scoresCount: 165106,
  starring: [`Owen Wilson`, `Adrien Brody`, `Jason Schwartzman`],
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};
const fakeShortComment = fakeFilm.name;
const fakeLongComment = fakeFilm.description;

describe(`Test AddReview`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      FILMS: {uploadCommentStatus: false, isErrorUploadComment: false},
      USER: {userInfo: {}}
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