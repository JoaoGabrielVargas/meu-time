import React from 'react';
import Select from 'react-select';
import style from './SelectInput.module.css';

function SelectInput({
  placeholder, data, onChange, value,
}) {
  console.log(data);
  return (
    <div className={style.select}>
      <Select
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        options={data}
        closeMenuOnSelect
        getOptionLabel={(e) => (
          <div className={style.label}>
            <img src={e.flag} />
            <span>{e.name}</span>
          </div>
        )}
      />
    </div>
  );
}

export default SelectInput;
