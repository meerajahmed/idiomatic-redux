import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../../../styles/theme';
import App from '../../../containers/Temaplates/App';

const appTheme = createMuiTheme(theme);

const Root = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={appTheme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default Root;
