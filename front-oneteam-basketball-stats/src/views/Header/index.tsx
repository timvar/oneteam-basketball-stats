import React from 'react';
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
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import { Link } from 'react-router-dom';

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

const Header: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [menuTitle, setMenuTitle] = React.useState('');

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
          <Typography>{menuTitle}</Typography>
        </Toolbar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </AppBar>
    </div>
  );
};

export default Header;
