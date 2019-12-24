import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Container from './components/Container'
import RestoreScroll from './components/RestoreScroll'


const routing = (
    <Router>
      <div>
        <RestoreScroll>
          <Container />
        </RestoreScroll>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.register();
