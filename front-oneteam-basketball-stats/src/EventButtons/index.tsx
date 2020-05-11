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
        <GreenButton item="1PM" />
        <GreenButton item="2PM" />
        <GreenButton item="3PM" />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <OrangeButton item="1PA" />
        <OrangeButton item="2PA" />
        <OrangeButton item="3PA" />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <BlueButton item="ORB" showPlayerButtons={showPlayerButtons} />
        <OrangeButton item="TO" />
        <OrangeButton item="DRB" />
      </Box>
      <Box
        display="flex"
        bgcolor="white"
        width="100%"
        height="100%"
        marginTop={0}
      >
        <OrangeButton item="AST" />
        <OrangeButton item="BLK" />
        <OrangeButton item="STL" />
      </Box>
      <Box display="flex" bgcolor="white" width="100%" marginTop={0}>
        <GreyButton item="UNDO" />
      </Box>
    </Grid>
  );
};

export default EventButtons;
