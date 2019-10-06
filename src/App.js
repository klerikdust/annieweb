import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import MainPage from './views/mainPage.js';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(0,204,255,0.7)'
    }
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
