import React from 'react';
import {filmsPropTypes} from '../../prop-types/prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import AddReview from '../add-review/add-review';
import FilmDetails from '../film/film-details';
import MyList from '../my-list/my-list';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import SingIn from '../sing-in/sing-in';

const App = (props) => {
  const {films} = props;
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
          <MyList films={films}/>
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

App.propTypes = filmsPropTypes;

export default App;
