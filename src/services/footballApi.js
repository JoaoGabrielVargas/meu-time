import axios from 'axios';

async function footballApi(key) {
  const myHeaders = {
    'x-rapidapi-key': key,
    'x-rapidapi-host': 'v3.football.api-sports.io',
  };

  const requestOptions = {
    headers: myHeaders,
  };
  try {
    const response = await axios.get('https://v3.football.api-sports.io/status', requestOptions);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function fetchCountries(key) {
  const myHeaders = {
    'x-rapidapi-key': key,
    'x-rapidapi-host': 'v3.football.api-sports.io',
  };
  const requestOptions = {
    headers: myHeaders,
  };
  try {
    const response = await axios.get('https://v3.football.api-sports.io/countries', requestOptions);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function fetchLeagues(key, country) {
  const myHeaders = {
    'x-rapidapi-key': key,
    'x-rapidapi-host': 'v3.football.api-sports.io',
  };
  const requestOptions = {
    headers: myHeaders,
  };
  try {
    const response = await axios.get(`https://v3.football.api-sports.io/leagues?country=${country}`, requestOptions);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function fetchTeams(key, league) {
  const myHeaders = {
    'x-rapidapi-key': key,
    'x-rapidapi-host': 'v3.football.api-sports.io',
  };
  const requestOptions = {
    headers: myHeaders,
  };
  try {
    const response = await axios.get(`https://v3.football.api-sports.io/teams?league=${league}`, requestOptions);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export {
  footballApi, fetchCountries, fetchLeagues, fetchTeams,
};
