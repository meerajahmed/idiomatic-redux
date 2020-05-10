import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MuiDrawer from '@material-ui/core/Drawer';
import useStyles from './useStyles';
import ListItemLink from '../ListItemLink';

const Drawer = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();
  return (
    <MuiDrawer
      className={classes.drawer}
      open={open}
      onClick={() => setOpen(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader} />
      <Divider />
      <List>
        <ListItemLink to={process.env.ROUTE_HOME} primary="Home" />
        <ListItemLink to={process.env.ROUTE_DEV} primary="Dev" />
        <ListItemLink to={process.env.ROUTE_TASK} primary="Task" />
        <ListItemLink to={process.env.ROUTE_ABOUT} primary="About" />
      </List>
    </MuiDrawer>
  );
};

Drawer.defaultProps = {
  open: false,
  setOpen: () => {},
};

Drawer.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Drawer;
