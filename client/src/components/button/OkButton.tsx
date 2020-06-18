import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    okIcon: {
      fontSize: 52,
      color: teal[800],
    },
  })
);

const OkButton: React.FC = () => {
  const classes = useStyles();

  return (
    <IconButton edge="start" type="submit">
      <CheckCircleIcon className={classes.okIcon} />
    </IconButton>
  );
};

export default OkButton;
