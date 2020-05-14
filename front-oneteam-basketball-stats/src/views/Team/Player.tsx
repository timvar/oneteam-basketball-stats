import React from 'react';
import {
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { successColor } from '../../constants/colors';

interface Props {
  playerNumber: number;
  playerName: string;
}

const Player: React.FC<Props> = ({ playerName, playerNumber }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Typography variant="h6">{playerNumber}</Typography>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="h5" color="textSecondary">
            {playerName}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <EditIcon style={{ fontSize: 32, color: successColor }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Player;
