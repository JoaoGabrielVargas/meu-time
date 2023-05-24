import React, { useContext, useEffect } from 'react';
import Select from './Select';
import style from './Header.module.css';
import context from '../context/Context';

function Header({ user }) {
  const {
    apiKey, teste, fetchCoutryList,
  } = useContext(context);

  useEffect(() => {
    console.log(fetchCoutryList);
    fetchCoutryList(apiKey);
  }, []);
  return (
    <header className={style.header}>
      Bem vindo ao
      {' '}
      <strong>Meu Time</strong>
      ,
      {' '}
      {user.fullname}
      !
      <form>
        <p>Primeiro, selecione o país:</p>
        <Select />
      </form>
    </header>
  );
}

export default Header;
