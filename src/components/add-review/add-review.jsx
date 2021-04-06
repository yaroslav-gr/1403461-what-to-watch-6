import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InputRadio from './input-radio';
import UserHeader from '../header/user-header';
import ErrorMessage from './error-message';
import {postComment} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {filmPropTypes} from '../../prop-types/prop-types';
import {AppRoute} from '../../const/const';
import {setUploadCommentStatus} from '../../store/action';

const AddReview = ({film}) => {
  const dispatch = useDispatch();
  const uploadCommentStatus = useSelector((state) => state.FILMS.uploadCommentStatus);
  const isErrorUploadComment = useSelector((state) => state.FILMS.isErrorUploadComment);
  const [userForm, setUserForm] = useState({
    'rating': ``,
    'review-text': ``,
  });

  const INPUT_RADIO_COUNT = 10;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setUploadCommentStatus(true));
    const {rating, [`review-text`]: comment} = userForm;
    dispatch(postComment({rating, comment}, film.id));
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  const checkUserFormValues = () => {
    return !!(userForm.rating && userForm[`review-text`]);
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <UserHeader>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.FILM_DETAILS}${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </UserHeader>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name + ` poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            onSubmit={handleSubmit}
            action="#"
            className="add-review__form"
            data-testid="form">
            <div className="rating">
              <div className="rating__stars">

                {new Array(INPUT_RADIO_COUNT).fill(1).map((_item, index) => {
                  return (
                    <InputRadio key={index + 1} index={index + 1} onHandleChange={handleChange}/>
                  );
                })}

              </div>
            </div>

            <div className="add-review__text">
              <textarea
                disabled={uploadCommentStatus}
                minLength="50" maxLength="400"
                onChange={handleChange}
                className="add-review__textarea"
                name="review-text" id="review-text"
                placeholder="Review text"
                data-testid="review"></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={!(!uploadCommentStatus && checkUserFormValues())}
                >Post</button>
              </div>
            </div>
          </form>
          {isErrorUploadComment ? <ErrorMessage/> : ``}
        </div>

      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = filmPropTypes;

export default AddReview;
