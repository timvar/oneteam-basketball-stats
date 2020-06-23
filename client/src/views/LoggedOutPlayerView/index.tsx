import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PlayerItem from '../../components/ListItem';
import { Player, PlayerInput } from '../../store/player/types';
import PlayerAddDialog from '../../components/dialog/PlayerAddDialog';
import PlayerUpdateDialog from '../../components/dialog/PlayerUpdateDialog';
import store, { getPlayers } from '../../store';
import { addLoggedOutPlayer, updatePlayer } from '../../store/player/actions';
import { addToRoster } from '../../store/roster/actions';
import PersonAddButton from '../../components/button/PersonAddButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      flexGrow: 1,
    },
  })
);

const LoggedOutPlayerView: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
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

  const handleAddPlayer = (values: PlayerInput) => {
    closeAddDialog();
    const newPlayer: Player = {
      id: `${values.playerName}-${values.playerNumber}`,
      playerName: values.playerName,
      playerNumber: values.playerNumber,
      team: 'none',
    };
    dispatch(addLoggedOutPlayer(newPlayer));
    dispatch(addToRoster(newPlayer));
  };

  const handleUpdatePlayer = (values: Player): void => {
    closeUpdateDialog();
    dispatch(updatePlayer(values));
  };

  return (
    <div className={classes.root}>
      {getPlayers(store.getState())
        .filter((p) => p.team === 'none')
        .map((p) => (
          <PlayerItem
            key={p.id}
            player={p}
            handlePlayerUpdate={openUpdateDialog}
          />
        ))}

      <PersonAddButton action={() => openAddDialog()} />

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
        selectedTeam="none"
      />
    </div>
  );
};

export default LoggedOutPlayerView;
