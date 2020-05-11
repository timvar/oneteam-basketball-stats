import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { otherColor } from '../../styles/colors';

const useStyles = makeStyles({
  root: {
    background: otherColor,
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

interface Props {
  playerNumber: string;
  showPlayerButtons: (value: boolean) => void;
}

const BlueButton: React.FC<Props> = ({ playerNumber, showPlayerButtons }) => {
  const classes = useStyles();
  const handleClick = () => {
    showPlayerButtons(false);
    console.log('player: ', playerNumber);
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {playerNumber}
    </Button>
  );
};

export default BlueButton;
