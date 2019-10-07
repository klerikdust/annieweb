import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
import App from './App';
import Documentation from './views/Documentation';
import Team from './views/Team';
import About from './views/About';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(0,102,153,0.7)'
    }
  }
})

const routing = (
    <Router>
      <div>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={App} />
        <Route path="/docs" component={Documentation} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />
      </ThemeProvider>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
