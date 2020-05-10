import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

const AppBar = (props) => {
  const { setOpen } = props;
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1} />
      </Toolbar>
    </MuiAppBar>
  );
};

AppBar.defaultProps = {
  setOpen: () => {},
};

AppBar.propTypes = {
  setOpen: PropTypes.func,
};

export default AppBar;
