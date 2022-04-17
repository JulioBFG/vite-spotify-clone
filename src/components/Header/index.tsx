import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div className={classes.headerTextWrapper}>
          <Typography className={classes.headerText}>Spotify Clone</Typography>
        </div>
        <TextField
          id="filled-basic"
          label="Procure..."
          variant="filled"
          className={classes.TextField}
        />
        <IconButton>
          <a
            href={`${import.meta.env.VITE_AUTHORIZE_URL}?client_id=${
              import.meta.env.VITE_CLIENT_ID
            }&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}/&response_type=${
              import.meta.env.VITE_RESPONSE_TYPE
            }`}
          >
            <LoginIcon />
          </a>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
