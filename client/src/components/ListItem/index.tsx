import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Player } from '../../store/player/types';
import EditButton from '../button/EditButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

interface Props {
  player: Player;
  handlePlayerUpdate: (player: Player) => void;
}

const ListItem: React.FC<Props> = ({ player, handlePlayerUpdate }) => {
  const classes = useStyles();
  return (
    <div>
      <Box
        borderColor="secondary.light"
        border={1}
        borderRadius={8}
        display="flex"
        flexDirection="row"
        width="100%"
      >
        <Box display="flex" justifyContent="center" width="20%" py={1}>
          <Avatar className={classes.avatar}>
            <Typography variant="h6">{player.playerNumber}</Typography>
          </Avatar>
        </Box>
        <Box display="flex" justifyContent="center" py={1}>
          <Typography variant="h6" color="textPrimary">
            {player.playerName}
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box>
          <EditButton action={() => handlePlayerUpdate(player)} />
        </Box>
      </Box>
    </div>
  );
};

export default ListItem;
