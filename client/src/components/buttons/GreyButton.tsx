import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { undoColor } from '../../constants/colors';

const useStyles = makeStyles({
  root: {
    background: undoColor,
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 80,
    width: '100%',
    padding: '0 30px',
    margin: '8px',
    fontSize: 28,
  },
});

interface Props {
  gameEvent: string;
  showPlayerButtons: (value: boolean) => void;
}

const GreyButton: React.FC<Props> = ({ gameEvent, showPlayerButtons }) => {
  const classes = useStyles();
  const handleClick = () => {
    showPlayerButtons(true);
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {gameEvent}
    </Button>
  );
};

export default GreyButton;
