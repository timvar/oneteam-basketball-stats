import React from 'react';
import { Grid } from '@material-ui/core';
import EventButtons from './EventButtons';

const App: React.FC = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <EventButtons />
    </Grid>
  );
};

export default App;
