import React from 'react';
import ReactDOM from 'react-dom';
// Gives acceess to redux store
import { Provider } from 'react-redux' 
import { BrowserRouter as Router } from "react-router-dom";
import store from './redux/store.js'
import { Container, Row } from 'react-bootstrap'

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        <Row>
          <App />
        </Row>
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);