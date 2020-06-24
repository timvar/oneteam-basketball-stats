import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Checkbox, Box } from '@material-ui/core';
import { Player } from '../../../store/player/types';
import { addToRoster, removeFromRoster } from '../../../store/roster/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
    },
    checkbox: {
      color: theme.palette.primary.main,
    },
  })
);

interface Props {
  player: Player;
}

const RosterItem: React.FC<Props> = ({ player }) => {
  const classes = useStyles();
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
    <Box
      borderColor="secondary.light"
      border={1}
      borderRadius={8}
      display="flex"
      flexDirection="row"
      width="100%"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="center"
        width="20%"
        marginLeft={1}
        py={1}
      >
        <Avatar className={classes.avatar}>
          <Typography variant="h6">{player.playerNumber}</Typography>
        </Avatar>
      </Box>
      <Box display="flex" justifyContent="center" py={1} px={1}>
        <Typography variant="h6" color="textPrimary">
          {player.playerName}
        </Typography>
      </Box>
      <Box flexGrow={1} />
      <Box>
        <Checkbox
          className={classes.checkbox}
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Box>
    </Box>
  );
};

export default RosterItem;
