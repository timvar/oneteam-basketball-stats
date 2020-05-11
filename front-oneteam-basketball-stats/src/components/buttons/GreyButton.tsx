import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { undoColor } from '../../styles/colors';

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
  item: string;
}

const GreyButton: React.FC<Props> = ({ item }) => {
  const classes = useStyles();
  const handleClick = () => {
    console.log('click');
  };
  return (
    <Button onClick={handleClick} className={classes.root}>
      {item}
    </Button>
  );
};

export default GreyButton;
