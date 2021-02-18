import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
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
        <Route exact path="/films/:id" render={(props) => <Film id={props.match.params.id} films={films}/>}>
        </Route>
        <Route exact path="/films/:id/review" render={(props) => <AddReview poster_image={films[props.match.params.id].poster_image} name={films[props.match.params.id].name}/>}>
        </Route>
        <Route exact path="/player/:id" render={(props) => <Player video_link={films[props.match.params.id].video_link} poster_image={films[props.match.params.id].poster_image} />}>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster_image: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
