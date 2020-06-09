import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List } from '@material-ui/core';

import RosterItem from './RosterItem';
import store, { getPlayers } from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    teamSelect: {
      marginTop: 10,
    },
  })
);

interface Props {
  selectedTeam: string;
}

const ShowRoster: React.FC<Props> = ({ selectedTeam }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.teamSelect}
        />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <List>
            {getPlayers(store.getState())
              .filter((p) => p.team === selectedTeam)
              .map((p) => (
                <RosterItem key={p.id} player={p} />
              ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowRoster;
