import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import TableChartIcon from '@material-ui/icons/TableChart';
import { setHeaderTitle } from '../../store/header/actions';

const LoggedInMenu: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem
        onClick={() => dispatch(setHeaderTitle('Home'))}
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
        onClick={() => dispatch(setHeaderTitle('Player'))}
        component={Link}
        to="/player"
        button
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            Player
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle('Team'))}
        component={Link}
        to="/team"
        button
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            Team
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle('Record'))}
        component={Link}
        to="/record"
        button
      >
        <ListItemIcon>
          <PlayCircleFilledIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            Record
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle('StatSelect'))}
        component={Link}
        to="/statselect"
        button
      >
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            Statselect
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle('Stats'))}
        component={Link}
        to="/stats"
        button
      >
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            Stats
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default LoggedInMenu;
