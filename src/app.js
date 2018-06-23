import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './store';
import LayoutContainer from './components/LayoutContainer';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00867d',
      main: '#4db6ac',
      dark: '#4f9b94',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#ffbb93',
      main: '#ff8a65',
      dark: '#c75b39',
      contrastText: '#fafafa',
    },
  },
});

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <LayoutContainer />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app'),
);

if (module.hot) module.hot.accept();
