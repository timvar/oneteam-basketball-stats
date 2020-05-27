import React from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import store, { getUser } from '../../store';
import LoginDialog from '../../components/modals/LoginDialog';
import { LoginInput } from '../../store/user/types';
import loginService from '../../services/login';
import { loginUser, logoutUser } from '../../store/user/actions';

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
  })
);

interface Props {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

const Header: React.FC<Props> = ({ loggedIn, setLoggedIn }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [menuTitle, setMenuTitle] = React.useState<string>('');
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
    } catch (error) {
      console.error('invalid username or password');
    }
  };
  const handleLogout = () => {
    dispatch(logoutUser(null));
    window.localStorage.removeItem('basketBallStatUser');
    setLoggedIn(false);
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
      <List>
        <ListItem
          onClick={() => setMenuTitle('Home')}
          component={Link}
          to="/"
          button
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" display="block" color="textSecondary">
              Home
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => setMenuTitle('Team')}
          component={Link}
          to="/team"
          button
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" display="block" color="textSecondary">
              Team
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => setMenuTitle('Record')}
          component={Link}
          to="/record"
          button
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" display="block" color="textSecondary">
              Record
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => setMenuTitle('Stats')}
          component={Link}
          to="/stats"
          button
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" display="block" color="textSecondary">
              Stats
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => setMenuTitle('Login')}
          component={Link}
          to="/login"
          button
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" display="block" color="textSecondary">
              Login
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">{menuTitle}</Typography>
          <Typography variant="h6" className={classes.title} />
          {loggedIn ? (
            <Button color="inherit" onClick={() => handleLogout()}>
              Logout
            </Button>
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
