import React from 'react';
import {
  Typography,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { successColor } from '../../constants/colors';
import { Team } from '../../store/team/types';

interface Props {
  team: Team;
  handleTeamUpdate: (team: Team) => void;
}

const TeamItem: React.FC<Props> = ({ team, handleTeamUpdate }) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Typography variant="h5" color="textSecondary">
            {team.teamName}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => handleTeamUpdate(team)}>
          <EditIcon style={{ fontSize: 32, color: successColor }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TeamItem;
