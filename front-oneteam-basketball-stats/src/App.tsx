import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ButtonRow from './ButtonRow';

const App: React.FC = () => {
  return (
    <Container>
      <Typography>Halo</Typography>
      <ButtonRow />
    </Container>
  );
};

export default App;
