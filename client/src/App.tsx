import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { initPlayers } from './store/player/actions';
import { playerList } from './data/players';
import Header from './views/Header';
import Home from './views/Home';
import Record from './views/Record';
import Team from './views/Team';
import Stats from './views/Stats';
import Login from './views/Login';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = createMuiTheme();

  React.useEffect(() => {
    dispatch(initPlayers(playerList));
  }, [dispatch]);

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