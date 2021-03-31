import React, {useRef, useState, useEffect} from 'react';
import Footer from '../footer/footer';
import SingInMessage from './sing-in-message';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute} from '../../const/const';

const SingIn = () => {
  const isBadRequest = useSelector((state) => state.LOGIN.isBadRequest);
  const dispatch = useDispatch();

  const [errorText, setErrorText] = useState(``);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!password.trim()) {
      setErrorText(`Please enter a valid password`);
      passwordRef.current.value = ``;
      passwordRef.current.focus();
      return;
    }
    dispatch(login({email, password}));
  };

  useEffect(() => {
    if (isBadRequest) {
      setErrorText(`Please enter a valid email address`);
    }
  }, [isBadRequest]);

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">

          {errorText && <SingInMessage message={errorText}/>}
          <form
            action="#"
            className="sign-in__form"
            onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">

                <input
                  ref={emailRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  required/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">

                <input
                  ref={passwordRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  required/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default SingIn;
