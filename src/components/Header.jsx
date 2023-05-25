import React, { useContext, useEffect } from 'react';
import SelectInput from './SelectInput';
import style from './Header.module.css';
import context from '../context/Context';

function Header({ user }) {
  const {
    apiKey,
    fetchCoutryList, countryList, onChangeCountry, country, leagueList, onChangeLeague, league,
  } = useContext(context);

  useEffect(() => {
    fetchCoutryList(apiKey);
  }, []);
  return (
    <header className={style.header}>
      <p>
        Bem vindo ao
        <strong> Meu Time, </strong>
        {user.fullname}
      </p>
      <p>
        Primeiro, selecione um país.
      </p>
      <form>
        <SelectInput
          placeholder="Selecione o país"
          data={countryList}
          onChange={onChangeCountry}
          value={country}
        />
        <SelectInput
          placeholder="Selecione a liga"
          data={leagueList}
          onChange={onChangeLeague}
          value={league}
        />
        <SelectInput
          placeholder="Selecione o time"
          data={leagueList}
          onChange={onChangeLeague}
          value={league}
        />
      </form>
    </header>
  );
}

export default Header;
