import React, {useState} from 'react';
import InputRadio from './input-radio';
import {Link} from 'react-router-dom';
import {addReviewsPropTypes} from '../../prop-types/prop-types';

const AddReview = (props) => {
  const [userForm, setUserForm] = useState({
    'review-text': ``,
    'rating': 0,
  });
  const {id, posterImage, filmName} = props;
  const INPUT_RADIO_COUNT = 10;

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={posterImage} alt={filmName} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/` + id} className="breadcrumbs__link">{filmName}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={filmName + ` poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form onSubmit={handleSubmit} action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">

                {new Array(INPUT_RADIO_COUNT).fill(1).map((item, index) => {
                  return (
                    <InputRadio key={index + 1} index={index + 1} handleChange={handleChange}/>
                  );
                })}

              </div>
            </div>

            <div className="add-review__text">
              <textarea onChange={handleChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = addReviewsPropTypes;

export default AddReview;
