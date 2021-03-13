import React from 'react';

const SingInMessage = ({message}) => {
  return(
    <React.Fragment>
      <div className="sign-in__message">
        <p>{message}</p>
      </div>
    </React.Fragment>
  );
};

export default SingInMessage;