import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilms} from '../../store/api-actions';

const ErrorFilmsLoading = () => {
  const errorMessage = useSelector((state) => state.FILMS.errorMessage);
  const dispatch = useDispatch();

  const buttonStyle = {
    padding: 10,
    borderRadius: 8,
    border: 1,
    borderStyle: `solid`,
    borderColor: `rgba(84,80,62,.36)`,
    background: `rgba(84,80,62,.36)`,
    color: `#ffffff`,
  };

  return (
    <React.Fragment>
      <div className="page-content" style={{height: `100vh`}}>
        <p style={{fontSize: `30px`}}>{errorMessage}</p>
        <button onClick={() => dispatch(fetchFilms())} style={buttonStyle}>Try to load again</button>
      </div>
    </React.Fragment>
  );
};

export default ErrorFilmsLoading;
