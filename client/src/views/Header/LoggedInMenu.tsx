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
import {
  HOME_TITLE,
  PLAYERS_TITLE,
  STATS_TITLE,
  TEAMS_TITLE,
  RECORD_TITLE,
} from '../../constants/text';

const LoggedInMenu: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem
        onClick={() => dispatch(setHeaderTitle(HOME_TITLE))}
        component={Link}
        to="/"
        button
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            {HOME_TITLE}
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle(PLAYERS_TITLE))}
        component={Link}
        to="/player"
        button
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            {PLAYERS_TITLE}
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle(TEAMS_TITLE))}
        component={Link}
        to="/team"
        button
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            {TEAMS_TITLE}
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle(RECORD_TITLE))}
        component={Link}
        to="/record"
        button
      >
        <ListItemIcon>
          <PlayCircleFilledIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            {RECORD_TITLE}
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => dispatch(setHeaderTitle(STATS_TITLE))}
        component={Link}
        to="/statselect"
        button
      >
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="button" display="block" color="textSecondary">
            {STATS_TITLE}
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default LoggedInMenu;
