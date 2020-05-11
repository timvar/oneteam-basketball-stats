import React from 'react';
import { Box, Container } from '@material-ui/core';
import GreenButton from './GreenButton';
import OrangeButton from './OrangeButton';
import BlueButton from './BlueButton';
import GreyButton from './GreyButton';

const ButtonRow: React.FC = () => {
  return (
    <div>
      <Container>
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
          <BlueButton item="ORB" />
          <OrangeButton item="TO" />
          <BlueButton item="DRB" />
        </Box>
        <Box
          display="flex"
          bgcolor="white"
          width="100%"
          height="100%"
          marginTop={0}
        >
          <BlueButton item="AST" />
          <BlueButton item="BLK" />
          <BlueButton item="STL" />
        </Box>
        <Box display="flex" bgcolor="white" width="100%" marginTop={0}>
          <GreyButton item="UNDO" />
        </Box>
      </Container>
    </div>
  );
};

export default ButtonRow;
