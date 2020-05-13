import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { otherColor } from '../../styles/colors';
import { setPlayer } from '../../store/event/actions';

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

const PlayerButton: React.FC<Props> = ({ playerNumber, showPlayerButtons }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setPlayer({ playerNumber }));
    showPlayerButtons(false);
    console.log('player: ', playerNumber);
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {playerNumber}
    </Button>
  );
};

export default PlayerButton;
