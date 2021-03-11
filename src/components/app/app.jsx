import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import AddReview from '../add-review/add-review';
import FilmDetails from '../film/film-details';
import MyList from '../my-list/my-list';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import SingIn from '../sing-in/sing-in';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorFilmsLoading from '../error-loading/error-films-loading';
import {appPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import {fetchFilms} from '../../store/api-actions';

const App = (props) => {
  const {films, isDataLoaded, loadFilms, isErrorLoading} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      loadFilms();
    }
  }, [isDataLoaded]);

  if (isErrorLoading) {
    return <ErrorFilmsLoading />;
  }

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SingIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id" render={(prop) => <FilmDetails id={prop.match.params.id * 1} films={films}/>}>
        </Route>
        <Route exact path="/films/:id/review" render={(prop) => <AddReview film={films.find((film) => film.id === prop.match.params.id * 1)} />}>
        </Route>
        <Route exact path="/player/:id" render={(prop) => <Player film={films.find((film) => film.id === prop.match.params.id * 1)} />}>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appPropTypes;

const mapStateToProps = (state) => ({
  films: state.films,
  isDataLoaded: state.isDataLoaded,
  isErrorLoading: state.isErrorLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(fetchFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
