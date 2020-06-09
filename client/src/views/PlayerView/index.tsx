import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { successColor } from '../../constants/colors';

import PlayerItem from './PlayerItem';
import { Player, PlayerInput } from '../../store/player/types';
import { Team } from '../../store/team/types';
import PlayerAddDialog from '../../components/dialog/PlayerAddDialog';
import PlayerUpdateDialog from '../../components/dialog/PlayerUpdateDialog';
import store, { getPlayers, getTeams } from '../../store';
import { addPlayer, updatePlayer } from '../../store/player/actions';
import TeamSelect from '../../components/select/TeamSelect';

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

const PlayerView: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [selectedTeam, setSelectedTeam] = React.useState<Team['id']>('');
  const [addDialogOpen, setAddDialogOpen] = React.useState<boolean>(false);
  const [updateDialogOpen, setUpdateDialogOpen] = React.useState<boolean>(
    false
  );
  const [player, setPlayer] = React.useState<Player>({
    id: '',
    playerName: '',
    team: '',
    playerNumber: 0,
  });

  const openAddDialog = (): void => {
    setAddDialogOpen(true);
  };
  const closeAddDialog = (): void => {
    setAddDialogOpen(false);
  };

  const openUpdateDialog = (playerToUpdate: Player): void => {
    setPlayer(playerToUpdate);
    setUpdateDialogOpen(true);
  };

  const closeUpdateDialog = (): void => {
    setUpdateDialogOpen(false);
  };

  const handleAddPlayer = async (values: PlayerInput) => {
    closeAddDialog();
    try {
      dispatch(addPlayer(values));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdatePlayer = (values: Player): void => {
    closeUpdateDialog();
    dispatch(updatePlayer(values));
  };

  const handleTeamSelect = (value: Team['id']) => {
    setSelectedTeam(value);
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
        >
          <TeamSelect
            teams={getTeams(store.getState())}
            submit={handleTeamSelect}
          />
        </Grid>
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
                <PlayerItem
                  key={p.id}
                  player={p}
                  handlePlayerUpdate={openUpdateDialog}
                />
              ))}
          </List>
          <IconButton onClick={() => openAddDialog()}>
            <PersonAddIcon style={{ fontSize: 48, color: successColor }} />
          </IconButton>

          <PlayerUpdateDialog
            modalOpen={updateDialogOpen}
            player={player}
            onClose={closeUpdateDialog}
            onSubmit={handleUpdatePlayer}
          />

          <PlayerAddDialog
            modalOpen={addDialogOpen}
            onClose={closeAddDialog}
            onSubmit={handleAddPlayer}
            selectedTeam={selectedTeam}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PlayerView;
