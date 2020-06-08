import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { loginUser } from './store/user/actions';
import Header from './views/Header';
import Home from './views/Home';
import Record from './views/Record';
import PlayerView from './views/PlayerView';
import TeamView from './views/TeamView';
import Stats from './views/Stats';
import StatSelect from './views/StatSelect';
import GameStats from './views/GameStats';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const theme = createMuiTheme();

  React.useEffect(() => {
    const loggedInUser = window.localStorage.getItem('basketBallStatUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      dispatch(loginUser(user));
      setLoggedIn(true);
    }
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/player" render={() => <PlayerView />} />
          <Route path="/team" render={() => <TeamView />} />
          <Route path="/stats/:id" render={() => <GameStats />} />
          <Route path="/stats" render={() => <Stats />} />
          <Route path="/statselect" render={() => <StatSelect />} />
          <Route path="/record" render={() => <Record />} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
