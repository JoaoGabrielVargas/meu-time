import React from 'react';
import PropTypes from 'prop-types';
import context from './Context';

function Provider({ children }) {
  value = {

  };
  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
