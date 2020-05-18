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
import { Player } from '../../types';

interface Props {
  player: Player;
  handlePlayerUpdate: (player: Player) => void;
}

const PlayerItem: React.FC<Props> = ({ player, handlePlayerUpdate }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Typography variant="h6">{player.playerNumber}</Typography>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="h5" color="textSecondary">
            {player.playerName}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => handlePlayerUpdate(player)}>
          <EditIcon style={{ fontSize: 32, color: successColor }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default PlayerItem;
