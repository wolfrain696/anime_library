import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@mui/material';
import {Provider} from 'react-redux';
import store from './store/Store';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <CssBaseline/>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

