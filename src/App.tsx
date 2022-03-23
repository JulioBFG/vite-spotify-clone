import './App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

function App() {
  return (
    <Box className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography>Spotify Clone</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
