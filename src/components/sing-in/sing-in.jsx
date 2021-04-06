import React, {useRef, useState, useEffect} from 'react';
import Footer from '../common/footer/footer';
import SingInMessage from './sing-in-message/sing-in-message';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {LogoClassNames} from '../../const/const';
import Logo from '../common/logo/logo';

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
          <Logo currentClasses={LogoClassNames.HEADER}/>
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
                  required
                  data-testid="user-email"/>
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
                  required
                  data-testid="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
                data-testid="submit-button">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default SingIn;
