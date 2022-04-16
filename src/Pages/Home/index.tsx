import Box from '@mui/material/Box';
import Header from 'components/Header';
import SongPlayer from 'components/SongPlayer';
import React from 'react';

function App() {
  return (
    <Box className="App">
      <Header />
      <div>
        <SongPlayer />
      </div>
    </Box>
  );
}

export default App;
