import React from 'react';
import Main from './main';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {fakeFilms, fakeUserInfo} from '../../test/test-mocks/test-mocks';
import {AuthorizationStatus} from '../../const/const';

let store;
let history;
const mockStore = configureStore({});

jest.mock(`../page-content/page-content`, () => {
  const pageContent = () => <div>This is mock PageContent</div>;
  pageContent.displayName = `PageContent`;
  return {
    __esModule: true,
    default: () => {
      return pageContent();
    }
  };
});

describe(`Main should work correctly`, () => {
  history = createMemoryHistory();
  store = mockStore({
    FILMS: {
      films: fakeFilms,
    },
    LOGIN: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
    USER: {
      userInfo: fakeUserInfo
    }
  });

  it(`Main should render correctly`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <Main/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Dardjeeling Limited/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock PageContent/i)).toBeInTheDocument();
    expect(screen.getByText(/fake@gmail.com/i)).toBeInTheDocument();
  });
});
