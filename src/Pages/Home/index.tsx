import Box from '@mui/material/Box';
import Header from 'components/Header';
import SongInfo from 'components/SongInfo';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [token, setToken] = useState('');
  token;
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);
  return (
    <Box className="App">
      <Header />
      <SongInfo />
    </Box>
  );
};

export default Home;
