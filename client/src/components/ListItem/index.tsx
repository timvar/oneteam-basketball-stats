import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { Player } from '../../store/player/types';
import { successColor } from '../../constants/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(1),
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
    <div className={classes.root}>
      <Box display="flex" flexDirection="row" border={1} width="100%">
        <Box display="flex" justifyContent="center" border={1} width="20%">
          <Avatar>
            <Typography variant="h6">{player.playerNumber}</Typography>
          </Avatar>
        </Box>
        <Box border={1}>Name</Box>
        <Box border={1} flexGrow={1}>
          spacer
        </Box>
        <Box border={1}>edit</Box>
      </Box>
    </div>
  );
};

export default ListItem;
