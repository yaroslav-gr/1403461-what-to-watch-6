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
          <Main films={films} />
        </Route>
        <Route exact path="/login">
          <SingIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id" render={() => <FilmDetails id={props.match.params.id} films={films}/>}>
        </Route>
        <Route exact path="/films/:id/review" render={() => <AddReview id={films[props.match.params.id].id} posterImage={films[props.match.params.id].poster_image} name={films[props.match.params.id].name}/>}>
        </Route>
        <Route exact path="/player/:id" render={() => <Player videoLink={films[props.match.params.id].video_link} posterImage={films[props.match.params.id].poster_image} />}>
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
