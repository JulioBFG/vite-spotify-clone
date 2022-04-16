import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography>Spotify Clone</Typography>
        <TextField id="filled-basic" label="Procure..." variant="filled" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
