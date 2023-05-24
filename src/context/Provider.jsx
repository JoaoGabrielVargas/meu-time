import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import context from './Context';
import { footballApi, fetchCountries } from '../services/footballApi';

function Provider({ children }) {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [countryList, setCountryList] = useState([]);
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
    const response = await fetchCountries(key);
    console.log(response);
    setLoading(false);
  }, [setApiKey]);

  /* const onSelectChange = useCallback(async (value) => {
    setLoading(true);
    const response = await footballApi();
    console.log(response);
  }); */

  const value = useMemo(() => ({
    fetchCoutryList,
    onLogin,
    apiKey,
    setApiKey,
    error,
    user,
    loading,
  }), [onLogin, apiKey, error, user, loading]);
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
