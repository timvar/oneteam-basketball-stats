import React from 'react';
import { Box, Grid } from '@material-ui/core';
import PlayerButton from '../components/buttons/PlayerButton';
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
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
        <PlayerButton playerNumber="21" showPlayerButtons={showPlayerButtons} />
      </Box>
    </Grid>
  );
};

export default PlayerButtons;
