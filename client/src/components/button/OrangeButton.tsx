import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { failColor } from '../../constants/colors';
import { setEvent } from '../../store/event/actions';
import { addStat } from '../../store/stat/actions';
import store, { getEvent } from '../../store';

const useStyles = makeStyles({
  root: {
    background: failColor,
    border: 0,
    borderRadius: 8,
    color: 'white',
    height: 100,
    width: '100%',
    padding: '0 30px',
    margin: '8px',
    fontSize: 28,
    boxShadow: '5px 5px 5px 1px #aaaaaa',
  },
});

interface Props {
  gameEvent: string;
  showPlayerButtons: (value: boolean) => void;
  setOrangeSnack: (value: boolean) => void;
}

const OrangeButton: React.FC<Props> = ({
  gameEvent,
  showPlayerButtons,
  setOrangeSnack,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    showPlayerButtons(true);
    dispatch(setEvent({ gameEvent }));
    dispatch(addStat(getEvent(store.getState())));
    setOrangeSnack(true);
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {gameEvent}
    </Button>
  );
};

export default OrangeButton;
