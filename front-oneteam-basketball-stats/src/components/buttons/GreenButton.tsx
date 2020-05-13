import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { successColor } from '../../styles/colors';
import { setEvent } from '../../store/event/actions';

const useStyles = makeStyles({
  root: {
    background: successColor,
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
  gameEvent: string;
  showPlayerButtons: (value: boolean) => void;
}

const GreenButton: React.FC<Props> = ({ gameEvent, showPlayerButtons }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    showPlayerButtons(true);
    dispatch(setEvent({ gameEvent }));
    console.log('gameEvent: ', gameEvent);
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {gameEvent}
    </Button>
  );
};

export default GreenButton;
