import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.secondary.light,
      border: 0,
      borderRadius: 8,
      color: 'white',
      height: 100,
      width: '100%',
      padding: '0 30px',
      margin: '8px',
      fontSize: 28,
      boxShadow: '5px 5px 5px 4px #b0bec5',
    },
  })
);

const EmptyButton: React.FC = () => {
  const classes = useStyles();

  return (
    <Button disabled className={classes.root}>
      ---
    </Button>
  );
};

export default EmptyButton;
