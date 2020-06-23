import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.primary.main,
      border: 0,
      borderRadius: 8,
      color: 'white',
      margin: '8px',
      boxShadow: '3px 3px 3px 1px #aaaaaa',
    },
    replayIcon: {
      marginRight: '4px',
    },
  })
);

interface Props {
  action: () => void;
}

const RestartButton: React.FC<Props> = ({ action }) => {
  const classes = useStyles();
  return (
    <Button onClick={action} className={classes.root}>
      <ReplayIcon className={classes.replayIcon} /> Restart
    </Button>
  );
};

export default RestartButton;
