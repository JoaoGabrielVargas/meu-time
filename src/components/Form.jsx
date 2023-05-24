import React from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

export default function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className={style.form}>{children}</form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
