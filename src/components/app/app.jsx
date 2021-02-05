import React from 'react';
import Main from '../main/main';

const App = (props) => {
  const {films, movieDesc} = props;
  return (
    <React.Fragment>
      <Main films={films} movieDesc={movieDesc} />
    </React.Fragment>
  );
};

export default App;
