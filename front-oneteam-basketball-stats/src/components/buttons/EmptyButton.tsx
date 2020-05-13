import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { unusedColor } from '../../constants/colors';

const useStyles = makeStyles({
  root: {
    background: unusedColor,
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 100,
    width: '100%',
    padding: '0 30px',
    margin: '8px',
    fontSize: 28,
  },
});

const EmptyButton: React.FC = () => {
  const classes = useStyles();

  return (
    <Button disabled className={classes.root}>
      ---
    </Button>
  );
};

export default EmptyButton;
