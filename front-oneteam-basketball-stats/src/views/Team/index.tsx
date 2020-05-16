import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { successColor } from '../../constants/colors';
import { players } from '../../data/players';
import Player from './Player';
import { PlayerFormValues } from '../../types';
import PlayerAddDialog from '../../components/modals/PlayerAddDialog';

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
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const openModal = (): void => setModalOpen(true);
  const closeModal = (): void => {
    setModalOpen(false);
  };
  const submitPlayer = (values: PlayerFormValues): void => {
    closeModal();
    console.log('team values', values);
  };

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
          <IconButton onClick={() => openModal()}>
            <AddCircleOutlineIcon
              style={{ fontSize: 48, color: successColor }}
            />
          </IconButton>

          <PlayerAddDialog
            modalOpen={modalOpen}
            onClose={closeModal}
            onSubmit={submitPlayer}
          />
        </div>
      </Grid>
    </div>
  );
};

export default Team;
