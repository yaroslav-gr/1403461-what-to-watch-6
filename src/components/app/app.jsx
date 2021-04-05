import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import SingIn from '../sing-in/sing-in';
import FilmInfoPage from '../film/film-info-page';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorFilmsLoading from '../error-loading/error-films-loading';
import PrivateRoute from '../private-route/private-route';
import {fetchFilms} from '../../store/api-actions';
import {AppRoute} from '../../const/const';

const App = () => {
  const films = useSelector((state) => state.FILMS.films);
  const isErrorLoading = useSelector((state) => state.FILMS.isErrorLoading);
  const isDataLoaded = useSelector((state) => state.FILMS.isDataLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchFilms());
    }
  }, [isDataLoaded]);

  if (isErrorLoading) {
    return <ErrorFilmsLoading />;
  }

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Main />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SingIn />
      </Route>
      <PrivateRoute
        exact
        path="/mylist"
        render={() => <MyList />}>
      </PrivateRoute>
      <Route exact path="/films/:id" render={(prop) => <FilmInfoPage id={Number(prop.match.params.id)}/>}>
      </Route>
      <PrivateRoute exact path="/films/:id/review" render={(prop) => <AddReview film={films.find((film) => film.id === Number(prop.match.params.id))} />}>
      </PrivateRoute>
      <Route exact path="/player/:id" render={(prop) => <Player film={films.find((film) => film.id === Number(prop.match.params.id))} />}>
      </Route>
      <Route exact path={AppRoute.NOT_FOUND}>
        <ErrorFilmsLoading/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
