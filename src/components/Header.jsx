import React, { useContext, useEffect } from 'react';
import SelectInput from './SelectInput';
import style from './Header.module.css';
import context from '../context/Context';

function Header({ user }) {
  const {
    apiKey,
    fetchCoutryList,
    countryList,
    seasonsList,
    onChangeSeasons,
    season,
    onChangeCountry, country, leagueList, onChangeLeague, league, team, onChangeTeam, teamList,
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
          placeholder="Selecione a temporada"
          data={seasonsList}
          onChange={onChangeSeasons}
          value={season}
        />
        <SelectInput
          placeholder="Selecione o time"
          data={teamList}
          onChange={onChangeTeam}
          value={team}
        />
      </form>
    </header>
  );
}

export default Header;
