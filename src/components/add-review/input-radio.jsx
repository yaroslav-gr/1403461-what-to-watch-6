import React from 'react';
import {inputRadioPropTypes} from '../../prop-types/prop-types';

const InputRadio = (props) => {
  const {index, handleChange} = props;

  const handleChecked = (evt) => {
    if (evt.target.checked == true) {
      handleChange(evt)
    }
  }

  return (
    <React.Fragment>
      <input className="rating__input" id={"star-" + index} type="radio" name="rating" value={index} onChange={handleChecked}/>
      <label className="rating__label" htmlFor={"star-" + index}>Rating {index}</label>
    </React.Fragment>
  );
};

InputRadio.propTypes = inputRadioPropTypes;

export default InputRadio;