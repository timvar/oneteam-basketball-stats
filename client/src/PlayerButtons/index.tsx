import React from 'react';
import { Box, Grid } from '@material-ui/core';
import PlayerButton from '../components/button/PlayerButton';
import EmptyButton from '../components/button/EmptyButton';
import { Player } from '../store/player/types';
import store, { getRoster } from '../store';

interface Props {
  showPlayerButtons: (value: boolean) => void;
}

const PlayerButtons: React.FC<Props> = ({ showPlayerButtons }) => {
  const [players, SetPlayers] = React.useState<Player[]>([]);

  React.useEffect(() => {
    SetPlayers(
      getRoster(store.getState()).sort(
        (a, b) => a.playerNumber - b.playerNumber
      )
    );
  }, []);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[0] && players[0].playerNumber ? (
          <PlayerButton
            playerNumber={players[0].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[1] && players[1].playerNumber ? (
          <PlayerButton
            playerNumber={players[1].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[2] && players[2].playerNumber ? (
          <PlayerButton
            playerNumber={players[2].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[3] && players[3].playerNumber ? (
          <PlayerButton
            playerNumber={players[3].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[4] && players[4].playerNumber ? (
          <PlayerButton
            playerNumber={players[4].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[5] && players[5].playerNumber ? (
          <PlayerButton
            playerNumber={players[5].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[6] && players[6].playerNumber ? (
          <PlayerButton
            playerNumber={players[6].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[7] && players[7].playerNumber ? (
          <PlayerButton
            playerNumber={players[7].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[8] && players[8].playerNumber ? (
          <PlayerButton
            playerNumber={players[8].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        {players[9] && players[9].playerNumber ? (
          <PlayerButton
            playerNumber={players[9].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[10] && players[10].playerNumber ? (
          <PlayerButton
            playerNumber={players[10].playerNumber}
            showPlayerButtons={showPlayerButtons}
          />
        ) : (
          <EmptyButton />
        )}
        {players[11] && players[11].playerNumber ? (
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
