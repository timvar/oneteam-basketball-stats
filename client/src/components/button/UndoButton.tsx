import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cancelIcon: {
      fontSize: 64,
      color: theme.palette.primary.main,
    },
  })
);

interface Props {
  showPlayerButtons: (value: boolean) => void;
}

const UndoButton: React.FC<Props> = ({ showPlayerButtons }) => {
  const classes = useStyles();
  const handleClick = () => {
    showPlayerButtons(true);
  };

  return (
    <IconButton onClick={handleClick} edge="start">
      <CancelOutlinedIcon className={classes.cancelIcon} />
    </IconButton>
  );
};

export default UndoButton;
