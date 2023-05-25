import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import context from './Context';
import {
  footballApi, fetchCountries, fetchLeagues, fetchTeams,
} from '../services/footballApi';

function Provider({ children }) {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [leagueList, setLeagueList] = useState([]);
  const [league, setLeague] = useState('');
  const [country, setCountry] = useState('');
  const [seasonsList, setSeasonsList] = useState([]);
  const [season, setSeason] = useState('');
  const [user, setUser] = useState({
    fullname: '',
    email: '',
  });

  const navigate = useNavigate();

  const onLogin = useCallback(async (key) => {
    setLoading(true);
    setApiKey(key);
    const { data, data: { response: { account } } } = await footballApi(key);
    if (data.errors.token) return setError('Digite uma chave API da Football-Api válida');
    setUser({
      fullname: `${account.firstname} ${account.lastname}`,
      email: account.email,
    });
    setLoading(false);
    navigate('/home');
    return user;
  }, [setApiKey]);

  const fetchCoutryList = useCallback(async (key) => {
    setLoading(true);
    const { data: { response } } = await fetchCountries(key);
    console.log(response);
    setCountryList(response);
    setLoading(false);
  }, [setApiKey]);

  const fetchLeagueList = useCallback(async () => {
    setLoading(true);
    const { data: { response } } = await fetchLeagues(apiKey, country.name);
    const leagueArray = response.map((e) => (
      {
        name: e.league.name, flag: e.league.logo, id: e.league.id, seasons: e.seasons,
      }));
    setLeagueList(leagueArray);
    setLoading(false);
  }, [country]);

  const onChangeCountry = useCallback(async (e) => {
    setLoading(true);
    setCountry(e);
    await fetchLeagueList();
    setLoading(false);
  }, [country]);

  const onChangeLeague = useCallback(async (e) => {
    setLoading(true);
    setLeague(e);
    const { seasons } = league;
    const seasonsArray = seasons.map((el) => (
      {
        name: el.year,
      }));
    setSeasonsList(seasonsArray);

    setLoading(false);
  }, [league]);

  const onChangeSeasons = useCallback(async (e) => {
    setLoading(true);
    setSeason(e);

    setLoading(false);
  }, [season]);

  /* const fetchTeamList = useCallback(async () => {
    setLoading(true);
    const result = await fetchTeams(apiKey, league.id, season.name);
    coonsole.log(result);
    setLoading(false);
  }, [season]); */

  /* const onChangeTeam = useCallback(async (e) => {
    setLoading(true);
    setCountry(e);
    await fetchLeagueList();
    setLoading(false);
  }, [country]); */

  const value = useMemo(() => ({
    fetchCoutryList,
    onLogin,
    apiKey,
    setApiKey,
    error,
    user,
    loading,
    countryList,
    onChangeCountry,
    country,
    fetchLeagueList,
    leagueList,
    onChangeLeague,
    seasonsList,
    onChangeSeasons,
    season,
  }), [onLogin,
    apiKey, error, user, loading, countryList, country, leagueList, seasonsList, season]);
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
