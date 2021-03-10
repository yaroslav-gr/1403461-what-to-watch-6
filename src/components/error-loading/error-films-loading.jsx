import React from 'react';
import {connect} from 'react-redux';
import {fetchFilms} from '../../store/api-actions';

const ErrorFilmsLoading = (props) => {
  const {errorMessage, handleButton} = props;

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
        <button onClick={handleButton}  style={buttonStyle}>Try to load again</button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  handleButton() {
    dispatch(fetchFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorFilmsLoading);
