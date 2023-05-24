import React, { useContext } from 'react';
import context from '../context/Context';

function Select({ disabled }) {
  const { country, setCountry } = useContext(context);
  return (
    <label htmlFor="country">
      <select name="country" onChange={(e) => setCountry(e.target.value)}>
        <option value="Mercado Livre" defaultValue>Mercado Livre</option>
        <option value="Buscapé">Buscapé</option>
      </select>
    </label>
  );
}

export default Select;
