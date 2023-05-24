import PropTypes from 'prop-types';
import React from 'react';
import style from './Button.module.css';

function Button(props) {
  const {
    children, type = 'button', onClick, disabled = false,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={style.button}
    >
      {children}

    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  onClick: PropTypes.any,
  type: PropTypes.string,
}.isRequired;

export default Button;
