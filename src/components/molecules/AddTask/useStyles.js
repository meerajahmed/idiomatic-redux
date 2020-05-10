import makeStyles from '@material-ui/core/styles/makeStyles';

const CARD_MIN_WIDTH = 345;

const useStyles = makeStyles(() => ({
  card: {
    minWidth: CARD_MIN_WIDTH,
  },
}));

export default useStyles;
