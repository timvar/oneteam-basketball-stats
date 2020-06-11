import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { successColor } from '../../constants/colors';
import { setEvent } from '../../store/event/actions';
import { addStat } from '../../store/stat/actions';
import { addOne, addTwo, addThree } from '../../store/score/actions';
import store, { getEvent } from '../../store';
import { ONEPM, TWOPM, THREEPM } from '../../constants/gameEvents';

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
  setSnackbar: (value: boolean) => void;
}

const GreenButton: React.FC<Props> = ({
  gameEvent,
  showPlayerButtons,
  setSnackbar,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    showPlayerButtons(true);
    dispatch(setEvent({ gameEvent }));
    dispatch(addStat(getEvent(store.getState())));
    setSnackbar(true);
    switch (gameEvent) {
      case ONEPM:
        dispatch(addOne());
        break;
      case TWOPM:
        dispatch(addTwo());
        break;
      case THREEPM:
        dispatch(addThree());
        break;
      default:
        break;
    }
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {gameEvent}
    </Button>
  );
};

export default GreenButton;
