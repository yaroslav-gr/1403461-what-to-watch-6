import React from 'react';
import {inputRadioPropTypes} from '../../../prop-types/prop-types';

const InputRadio = ({index, onHandleChange}) => {
  const handleChecked = (evt) => {
    if (evt.target.checked === true) {
      onHandleChange(evt);
    }
  };

  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-` + index}
        type="radio" name="rating"
        value={index}
        onChange={handleChecked}
        data-testid="input-radio"/>
      <label className="rating__label" htmlFor={`star-` + index}>Rating {index}</label>
    </React.Fragment>
  );
};

InputRadio.propTypes = inputRadioPropTypes;

export default InputRadio;
