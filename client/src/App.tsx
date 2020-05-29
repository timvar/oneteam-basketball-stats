import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { initPlayers } from './store/player/actions';
import { loginUser } from './store/user/actions';
import { playerList } from './data/players';
import Header from './views/Header';
import Home from './views/Home';
import Record from './views/Record';
import Team from './views/Team';
import Stats from './views/Stats';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const theme = createMuiTheme();

  /* TODO REMOVE
  React.useEffect(() => {
    
    dispatch(initPlayers(playerList));
  }, [dispatch]);
  */

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
          <Route path="/team" render={() => <Team />} />
          <Route path="/stats" render={() => <Stats />} />
          <Route path="/record" render={() => <Record />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
