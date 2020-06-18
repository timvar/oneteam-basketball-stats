import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cancelIcon: {
      fontSize: 52,
      color: theme.palette.primary.main,
    },
  })
);

interface Props {
  action: () => void;
}

const CancelButton: React.FC<Props> = ({ action }) => {
  const classes = useStyles();

  return (
    <IconButton edge="start" onClick={action}>
      <CancelOutlinedIcon className={classes.cancelIcon} />
    </IconButton>
  );
};

export default CancelButton;
