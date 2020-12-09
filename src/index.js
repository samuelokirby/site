import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import muiTheme from './style/muiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={muiTheme}>
        <App/>
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);

