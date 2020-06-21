import React from 'react';
import { Box, Grid } from '@material-ui/core';
import GreenButton from '../components/button/GreenButton';
import OrangeButton from '../components/button/OrangeButton';
import BlueButton from '../components/button/BlueButton';
import UndoButton from '../components/button/UndoButton';
import {
  ONEPM,
  TWOPM,
  THREEPM,
  ONEPA,
  TWOPA,
  THREEPA,
  ORB,
  TO,
  DRB,
  AST,
  BLK,
  STL,
} from '../constants/gameEvents';

interface Props {
  showPlayerButtons: (value: boolean) => void;
  setSnackbar: (value: boolean) => void;
  setOrangeSnack: (value: boolean) => void;
  setBlueSnack: (value: boolean) => void;
}

const EventButtons: React.FC<Props> = ({
  showPlayerButtons,
  setSnackbar,
  setOrangeSnack,
  setBlueSnack,
}) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <GreenButton
          gameEvent={ONEPM}
          showPlayerButtons={showPlayerButtons}
          setSnackbar={setSnackbar}
        />
        <GreenButton
          gameEvent={TWOPM}
          showPlayerButtons={showPlayerButtons}
          setSnackbar={setSnackbar}
        />
        <GreenButton
          gameEvent={THREEPM}
          showPlayerButtons={showPlayerButtons}
          setSnackbar={setSnackbar}
        />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <OrangeButton
          gameEvent={ONEPA}
          showPlayerButtons={showPlayerButtons}
          setOrangeSnack={setOrangeSnack}
        />
        <OrangeButton
          gameEvent={TWOPA}
          showPlayerButtons={showPlayerButtons}
          setOrangeSnack={setOrangeSnack}
        />
        <OrangeButton
          gameEvent={THREEPA}
          showPlayerButtons={showPlayerButtons}
          setOrangeSnack={setOrangeSnack}
        />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <BlueButton
          gameEvent={ORB}
          showPlayerButtons={showPlayerButtons}
          setBlueSnack={setBlueSnack}
        />
        <OrangeButton
          gameEvent={TO}
          showPlayerButtons={showPlayerButtons}
          setOrangeSnack={setOrangeSnack}
        />
        <BlueButton
          gameEvent={DRB}
          showPlayerButtons={showPlayerButtons}
          setBlueSnack={setBlueSnack}
        />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <BlueButton
          gameEvent={AST}
          showPlayerButtons={showPlayerButtons}
          setBlueSnack={setBlueSnack}
        />
        <BlueButton
          gameEvent={BLK}
          showPlayerButtons={showPlayerButtons}
          setBlueSnack={setBlueSnack}
        />
        <BlueButton
          gameEvent={STL}
          showPlayerButtons={showPlayerButtons}
          setBlueSnack={setBlueSnack}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="white"
        width="100%"
        paddingTop={2}
      >
        <UndoButton showPlayerButtons={showPlayerButtons} />
      </Box>
    </Grid>
  );
};

export default EventButtons;
