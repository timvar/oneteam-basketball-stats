import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from '@material-ui/core';
import { Player } from '../../store/player/types';
import { addToRoster, removeFromRoster } from '../../store/roster/actions';

interface Props {
  player: Player;
}

const RosterItem: React.FC<Props> = ({ player }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log('player', player.playerName);
    console.log('checkbox', event.target.checked);
    const rosterUpdate: Player = {
      id: player.id,
      playerNumber: player.playerNumber,
      playerName: player.playerName,
      team: player.team,
    };
    if (event.target.checked) {
      dispatch(addToRoster(rosterUpdate));
    } else {
      dispatch(removeFromRoster(rosterUpdate));
    }
  };

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
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default RosterItem;
