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
      boxShadow: '3px 4px 5px 0px rgba(0, 0, 0, 0.38)',
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
