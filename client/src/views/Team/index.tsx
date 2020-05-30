import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { successColor } from '../../constants/colors';

import PlayerItem from './PlayerItem';
import { Player, PlayerInput } from '../../store/player/types';
import { Team, TeamInput } from '../../store/team/types';
import PlayerAddDialog from '../../components/modals/PlayerAddDialog';
import TeamAddDialog from '../../components/modals/TeamAddDialog';
import PlayerUpdateDialog from '../../components/modals/PlayerUpdateDialog';
import store, { getPlayers, getTeams } from '../../store';
import { addPlayer, updatePlayer } from '../../store/player/actions';
import playerService from '../../services/players';
import teamService from '../../services/teams';
import TeamSelect from '../../components/selects/TeamSelect';

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

const TeamView: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [selectedTeam, setSelectedTeam] = React.useState<Team['id']>('');
  const [addDialogOpen, setAddDialogOpen] = React.useState<boolean>(false);
  const [addTeamDialogOpen, setAddTeamDialogOpen] = React.useState<boolean>(
    false
  );
  const [updateDialogOpen, setUpdateDialogOpen] = React.useState<boolean>(
    false
  );
  const [player, setPlayer] = React.useState<Player>({
    id: '',
    playerName: '',
    playerNumber: undefined,
  });

  const openAddDialog = (): void => {
    setAddDialogOpen(true);
  };
  const closeAddDialog = (): void => {
    setAddDialogOpen(false);
  };
  const openAddTeamDialog = (): void => {
    setAddTeamDialogOpen(true);
  };
  const closeAddTeamDialog = (): void => {
    setAddTeamDialogOpen(false);
  };

  const openUpdateDialog = (playerToUpdate: Player): void => {
    console.log('updatePlayer', playerToUpdate);
    setPlayer(playerToUpdate);
    setUpdateDialogOpen(true);
  };

  const closeUpdateDialog = (): void => {
    setUpdateDialogOpen(false);
  };

  const handleAddPlayer = async (values: PlayerInput) => {
    closeAddDialog();
    try {
      const newPlayer = await playerService.createPlayer(values);
      console.log('add player', newPlayer);
      // dispatch(addPlayer(values));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAddTeam = async (values: TeamInput) => {
    closeAddTeamDialog();
    try {
      const newTeam = await teamService.createTeam(values);
      console.log('add team', newTeam);
      // dispatch(addTeam(values));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdatePlayer = (values: Player): void => {
    closeUpdateDialog();
    dispatch(updatePlayer(values));
    console.log('update player', values);
  };

  const handleTeamSelect = (value: Team['id']) => {
    setSelectedTeam(value);
    console.log('selected team', value);
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
          <IconButton onClick={() => openAddTeamDialog()}>
            <GroupAddIcon style={{ fontSize: 36, color: successColor }} />
          </IconButton>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <List>
            {getPlayers(store.getState()).players.map((p) => (
              <PlayerItem
                key={p.id}
                player={p}
                handlePlayerUpdate={openUpdateDialog}
              />
            ))}
          </List>
          <IconButton onClick={() => openAddDialog()}>
            <AddCircleOutlineIcon
              style={{ fontSize: 48, color: successColor }}
            />
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
          />

          <TeamAddDialog
            modalOpen={addTeamDialogOpen}
            onClose={closeAddTeamDialog}
            onSubmit={handleAddTeam}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamView;
