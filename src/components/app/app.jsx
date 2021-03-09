import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import AddReview from '../add-review/add-review';
import FilmDetails from '../film/film-details';
import MyList from '../my-list/my-list';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import SingIn from '../sing-in/sing-in';
import {appPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import {fetchFilms} from '../../store/api-actions';

const App = (props) => {
  const {films, isDataLoaded, loadFilms} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      loadFilms();
    }
  }, [isDataLoaded]);

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
        <Route exact path="/films/:id" render={(prop) => <FilmDetails film={films[prop.match.params.id]} films={films}/>}>
        </Route>
        <Route exact path="/films/:id/review" render={(prop) => <AddReview id={films[prop.match.params.id].id} posterImage={films[prop.match.params.id].posterImage} filmName={films[prop.match.params.id].name}/>}>
        </Route>
        <Route exact path="/player/:id" render={(prop) => <Player videoLink={films[prop.match.params.id].videoLink} posterImage={films[prop.match.params.id].posterImage} />}>
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
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(fetchFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
