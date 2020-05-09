import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Box, Grid } from '@material-ui/core';
import MyButton from './MyButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    box: {
      color: 'red',
    },
  })
);

const ButtonRow: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <MyButton item="1PM" />
        </Grid>
        <Grid item xs={4}>
          <MyButton item="2PM" />
        </Grid>
        <Grid item xs={4}>
          <MyButton item="3PM" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonRow;
