import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    headerText: {
      fontFamily: 'Cairo sans serif',
    },
    headerTextWrapper: {
      margin: 20,
    },
    TextField: {
      margin: 'auto',
    },
  }),
);

export default useStyles;
