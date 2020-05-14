import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './views/Header';
import Home from './views/Home';
import Record from './views/Record';
import Team from './views/Team';
import Stats from './views/Stats';
import Login from './views/Login';

const App: React.FC = () => {
  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/team" render={() => <Team />} />
          <Route path="/stats" render={() => <Stats />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/record" render={() => <Record />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
