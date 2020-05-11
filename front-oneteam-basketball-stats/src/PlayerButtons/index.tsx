import React from 'react';
import { Box, Grid } from '@material-ui/core';
import PlayerButton from '../components/buttons/PlayerButton';
import EmptyButton from '../components/buttons/EmptyButton';
import { players } from '../data/players';

interface Props {
  showPlayerButtons: (value: boolean) => void;
}

const PlayerButtons: React.FC<Props> = ({ showPlayerButtons }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[0] ? (
          <PlayerButton
            playerNumber={players[0].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
        {players[1] ? (
          <PlayerButton
            playerNumber={players[1].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
        {players[2] ? (
          <PlayerButton
            playerNumber={players[2].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[3] ? (
          <PlayerButton
            playerNumber={players[3].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
        {players[4] ? (
          <PlayerButton
            playerNumber={players[4].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
        {players[5] ? (
          <PlayerButton
            playerNumber={players[5].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[6] ? (
          <PlayerButton
            playerNumber={players[6].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
        {players[7] ? (
          <PlayerButton
            playerNumber={players[7].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
        {players[8] ? (
          <PlayerButton
            playerNumber={players[8].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[9] ? (
          <PlayerButton
            playerNumber={players[9].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : null}
        {players[10] ? (
          <PlayerButton
            playerNumber={players[10].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[11] ? (
          <PlayerButton
            playerNumber={players[11].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
      </Box>
    </Grid>
  );
};

export default PlayerButtons;
