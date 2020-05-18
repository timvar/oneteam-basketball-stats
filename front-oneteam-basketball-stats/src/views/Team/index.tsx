import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { successColor } from '../../constants/colors';

import PlayerItem from './PlayerItem';
import { Player } from '../../store/player/types';
import PlayerAddDialog from '../../components/modals/PlayerAddDialog';
import PlayerUpdateDialog from '../../components/modals/PlayerUpdateDialog';
import store, { getPlayers } from '../../store';
import { addPlayer, updatePlayer } from '../../store/player/actions';

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const [addDialogOpen, setAddDialogOpen] = React.useState<boolean>(false);
  const [updateDialogOpen, setUpdateDialogOpen] = React.useState<boolean>(
    false
  );
  const [player, setPlayer] = React.useState<Player>({
    id: undefined,
    playerName: '',
    playerNumber: undefined,
  });

  const openAddDialog = (): void => setAddDialogOpen(true);
  const openUpdateDialog = (playerToUpdate: Player): void => {
    console.log('updatePlayer', playerToUpdate);
    setPlayer(playerToUpdate);
    setUpdateDialogOpen(true);
  };

  const closeAddDialog = (): void => {
    setAddDialogOpen(false);
  };
  const closeUpdateDialog = (): void => {
    setUpdateDialogOpen(false);
  };

  const handleAddPlayer = (values: Player): void => {
    closeAddDialog();
    dispatch(addPlayer(values));
    console.log('add player', values);
  };

  const handleUpdatePlayer = (values: Player): void => {
    closeUpdateDialog();
    dispatch(updatePlayer(values));
    console.log('update player', values);
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
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
        </div>
      </Grid>
    </div>
  );
};

export default Team;
