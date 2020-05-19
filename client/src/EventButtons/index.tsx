import React from 'react';
import { Box, Grid } from '@material-ui/core';
import GreenButton from '../components/buttons/GreenButton';
import OrangeButton from '../components/buttons/OrangeButton';
import BlueButton from '../components/buttons/BlueButton';
import GreyButton from '../components/buttons/GreyButton';
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
}

const EventButtons: React.FC<Props> = ({ showPlayerButtons }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <GreenButton gameEvent={ONEPM} showPlayerButtons={showPlayerButtons} />
        <GreenButton gameEvent={TWOPM} showPlayerButtons={showPlayerButtons} />
        <GreenButton
          gameEvent={THREEPM}
          showPlayerButtons={showPlayerButtons}
        />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <OrangeButton gameEvent={ONEPA} showPlayerButtons={showPlayerButtons} />
        <OrangeButton gameEvent={TWOPA} showPlayerButtons={showPlayerButtons} />
        <OrangeButton
          gameEvent={THREEPA}
          showPlayerButtons={showPlayerButtons}
        />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <BlueButton gameEvent={ORB} showPlayerButtons={showPlayerButtons} />
        <OrangeButton gameEvent={TO} showPlayerButtons={showPlayerButtons} />
        <BlueButton gameEvent={DRB} showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <BlueButton gameEvent={AST} showPlayerButtons={showPlayerButtons} />
        <BlueButton gameEvent={BLK} showPlayerButtons={showPlayerButtons} />
        <BlueButton gameEvent={STL} showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box display="flex" bgcolor="white" width="100%" marginTop={0}>
        <GreyButton gameEvent="UNDO" showPlayerButtons={showPlayerButtons} />
      </Box>
    </Grid>
  );
};

export default EventButtons;
