import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, IconButton } from '@material-ui/core';

import RosterItem from './RosterItem';
import { Player, PlayerInput } from '../../store/player/types';
import { Team } from '../../store/team/types';
import store, { getPlayers, getTeams } from '../../store';

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

const Roster: React.FC<Props> = ({ selectedTeam }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [player, setPlayer] = React.useState<Player>({
    id: '',
    playerName: '',
    team: '',
    playerNumber: undefined,
  });

  const handleRosterUpdate = () => {
    console.log('roster update');
  };

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
                <RosterItem
                  key={p.id}
                  player={p}
                  handleRosterUpdate={handleRosterUpdate}
                />
              ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Roster;
