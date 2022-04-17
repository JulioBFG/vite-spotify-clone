import PlayCircle from '@mui/icons-material/PlayCircle';
import SkipNext from '@mui/icons-material/SkipNext';
import SkipPrevious from '@mui/icons-material/SkipPrevious';
import { Button, ButtonGroup } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import useStyles from './styles';
import { SongPlayerProps } from './types';

const renderButtonGroup = () => (
  <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button>
      <SkipPrevious />
    </Button>
    <Button>
      <PlayCircle />
    </Button>
    <Button>
      <SkipNext />
    </Button>
  </ButtonGroup>
);

const SongPlayer: React.FC<SongPlayerProps> = ({ actualTime, remainingTime }) => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar variant="dense">
        <Typography>Image</Typography>
        <div className={classes.buttonGroup}>
          {renderButtonGroup()}
          <Typography>{actualTime}</Typography>
          <LinearProgress variant="determinate" value={10} />
          <Typography>{remainingTime}</Typography>
        </div>
      </Toolbar>
    </div>
  );
};

export default SongPlayer;
