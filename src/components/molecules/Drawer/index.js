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
        <ListItemLink to={process.env.ROUTE_TODO} primary="Todo" />
        <ListItemLink to={process.env.ROUTE_TASK} primary="Task" />
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
