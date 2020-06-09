import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { otherColor } from '../../constants/colors';
import { setEvent } from '../../store/event/actions';
import { addStat } from '../../store/stat/actions';
import store, { getEvent } from '../../store';

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
  gameEvent: string;
  showPlayerButtons: (value: boolean) => void;
}

const BlueButton: React.FC<Props> = ({ gameEvent, showPlayerButtons }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    showPlayerButtons(true);
    dispatch(setEvent({ gameEvent }));
    dispatch(addStat(getEvent(store.getState())));
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {gameEvent}
    </Button>
  );
};

export default BlueButton;
