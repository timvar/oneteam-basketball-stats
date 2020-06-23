import React from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, Drawer, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

import { orange, grey } from '@material-ui/core/colors';
import LoginDialog from '../../components/dialog/LoginDialog';
import { LoginInput } from '../../store/user/types';
import loginService from '../../services/login';
import { loginUser, logoutUser } from '../../store/user/actions';
import { initTeams, resetTeams } from '../../store/team/actions';
import { initPlayers, resetPlayers } from '../../store/player/actions';
import { setHeaderTitle } from '../../store/header/actions';
import { resetGame } from '../../store/game/actions';
import { resetRoster } from '../../store/roster/actions';
import { resetStats } from '../../store/stat/actions';
import store, { getHeaderTitle } from '../../store';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    avatar: {
      color: orange[800],
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: grey[300],
      boxShadow: '3px 3px 4px 2px #880e4f',
    },
    basketball: {
      fontSize: 36,
    },
    appbar: {
      borderRadius: 8,
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

interface Props {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

const Header: React.FC<Props> = ({ loggedIn, setLoggedIn }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const openDialog = (): void => {
    setDialogOpen(true);
  };
  const closeDialog = (): void => {
    setDialogOpen(false);
  };
  const handleLogin = async (values: LoginInput) => {
    closeDialog();
    try {
      const user = await loginService.login(values);
      dispatch(loginUser(user));
      window.localStorage.setItem('basketBallStatUser', JSON.stringify(user));
      setLoggedIn(true);
      dispatch(resetRoster());
      dispatch(resetStats());
      dispatch(initTeams());
      dispatch(initPlayers());
      dispatch(setHeaderTitle('Home'));
      history.push('/');
    } catch (error) {
      console.error('invalid username or password');
    }
  };
  const handleLogout = () => {
    dispatch(logoutUser(null));
    window.localStorage.removeItem('basketBallStatUser');
    setLoggedIn(false);
    dispatch(resetGame());
    dispatch(resetPlayers());
    dispatch(resetRoster());
    dispatch(resetStats());
    dispatch(resetTeams());
    dispatch(setHeaderTitle('Home'));
    history.push('/');
  };

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {loggedIn ? <LoggedInMenu /> : <LoggedOutMenu />}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            {getHeaderTitle(store.getState())}
          </Typography>
          <Typography variant="h6" className={classes.title} />
          {loggedIn ? (
            <IconButton onClick={() => handleLogout()}>
              <Avatar className={classes.avatar}>
                <SportsBasketballIcon className={classes.basketball} />
              </Avatar>
            </IconButton>
          ) : (
            <Button color="inherit" onClick={() => openDialog()}>
              Login
            </Button>
          )}
        </Toolbar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </AppBar>
      <LoginDialog
        modalOpen={dialogOpen}
        onClose={closeDialog}
        onSubmit={handleLogin}
      />
    </div>
  );
};

export default Header;
