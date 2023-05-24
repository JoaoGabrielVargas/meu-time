import PropTypes from 'prop-types';
import React from 'react';
import style from './Input.module.css';

function Input({
  placeholder, type = 'text', required = false,
  onChange,
}) {
  return (
    <input
      type={type}
      className={style.input}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.any,
  placeholder: PropTypes.any,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.any,
}.isRequired;

export default Input;
