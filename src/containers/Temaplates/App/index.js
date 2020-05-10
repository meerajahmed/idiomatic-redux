import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '../../../components/molecules/AppBar';
import Drawer from '../../../components/molecules/Drawer';
import Routes from '../../../routes';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <AppBar open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <main>
        <Routes />
      </main>
    </Box>
  );
};

export default App;
