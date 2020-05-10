import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../global/store';
import theme from '../../../styles/theme';
import App from '../../../containers/Temaplates/App';

const appTheme = createMuiTheme(theme);

const Root = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Root;
