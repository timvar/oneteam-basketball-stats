import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StopIcon from '@material-ui/icons/Stop';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconbutton: {
      border: 'solid 3px #e91e63',
    },
    stopIcon: {
      fontSize: 36,
      color: theme.palette.primary.main,
    },
  })
);

interface Props {
  action: () => void;
}

const StopButton: React.FC<Props> = ({ action }) => {
  const classes = useStyles();

  return (
    <IconButton size="small" className={classes.iconbutton} onClick={action}>
      <StopIcon className={classes.stopIcon} />
    </IconButton>
  );
};

export default StopButton;
