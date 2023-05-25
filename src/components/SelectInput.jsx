import React, { useContext } from 'react';
import Select from 'react-select';
import context from '../context/Context';
import style from './SelectInput.module.css';

function SelectInput({
  placeholder, data, onChange, value,
}) {
  console.log(data);
  console.log(value);
  return (
    <Select
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      options={data}
      getOptionLabel={(e) => (
        <div className={style.label}>
          <img src={e.flag} />
          <span>{e.name}</span>
        </div>
      )}
    />
  );
}

export default SelectInput;
