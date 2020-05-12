import React from 'react';
import { Box, Grid } from '@material-ui/core';
import GreenButton from '../components/buttons/GreenButton';
import OrangeButton from '../components/buttons/OrangeButton';
import BlueButton from '../components/buttons/BlueButton';
import GreyButton from '../components/buttons/GreyButton';

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
        <GreenButton gameEvent="1PM" showPlayerButtons={showPlayerButtons} />
        <GreenButton gameEvent="2PM" showPlayerButtons={showPlayerButtons} />
        <GreenButton gameEvent="3PM" showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <OrangeButton gameEvent="1PA" showPlayerButtons={showPlayerButtons} />
        <OrangeButton gameEvent="2PA" showPlayerButtons={showPlayerButtons} />
        <OrangeButton gameEvent="3PA" showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <BlueButton gameEvent="ORB" showPlayerButtons={showPlayerButtons} />
        <OrangeButton gameEvent="TO" showPlayerButtons={showPlayerButtons} />
        <BlueButton gameEvent="DRB" showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <BlueButton gameEvent="AST" showPlayerButtons={showPlayerButtons} />
        <BlueButton gameEvent="BLK" showPlayerButtons={showPlayerButtons} />
        <BlueButton gameEvent="STL" showPlayerButtons={showPlayerButtons} />
      </Box>
      <Box display="flex" bgcolor="white" width="100%" marginTop={0}>
        <GreyButton gameEvent="UNDO" showPlayerButtons={showPlayerButtons} />
      </Box>
    </Grid>
  );
};

export default EventButtons;
