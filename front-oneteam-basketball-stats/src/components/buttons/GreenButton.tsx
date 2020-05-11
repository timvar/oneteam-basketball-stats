import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { successColor } from '../../styles/colors';

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
  item: string;
}

const GreenButton: React.FC<Props> = ({ item }) => {
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

export default GreenButton;
