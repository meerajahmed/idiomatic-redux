import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(8, 8, 4, 8),
    '& .MuiLink-root': {
      marginLeft: theme.spacing(4),
      fontSize: '1rem',
    },
  },
}));

export default useStyles;
