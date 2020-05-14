import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { successColor } from '../../constants/colors';
import { players } from '../../data/players';
import Player from './Player';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Team: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List>
            {players.map((p) => (
              <Player
                key={p.id}
                playerName={p.playerName}
                playerNumber={p.playerNumber}
              />
            ))}
          </List>
          <IconButton>
            <AddCircleOutlineIcon
              style={{ fontSize: 48, color: successColor }}
            />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
};

export default Team;
