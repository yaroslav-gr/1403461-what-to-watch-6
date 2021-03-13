import React from 'react';
import {singInMessagePropTypes} from '../../prop-types/prop-types';

const SingInMessage = ({message}) => {
  return(
    <React.Fragment>
      <div className="sign-in__message">
        <p>{message}</p>
      </div>
    </React.Fragment>
  );
};

SingInMessage.propTypes = singInMessagePropTypes;

export default SingInMessage;