import React from 'react';

const LoadingScreen = () => {
  return (
    <React.Fragment>
      <div className="page-content" style={{height: `100vh`}}>
        <div style={{fontSize: `30px`}}>Loading...</div>
      </div>
    </React.Fragment>
  );
};

export default LoadingScreen;
