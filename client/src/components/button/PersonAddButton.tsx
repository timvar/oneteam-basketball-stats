import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      fontSize: 32,
      padding: theme.spacing(1),
    },
  })
);

interface Props {
  action: () => void;
}

const PersonAddButton: React.FC<Props> = ({ action }) => {
  const classes = useStyles();

  return (
    <Fab size="medium" color="primary" onClick={action}>
      <PersonAddIcon className={classes.icon} />
    </Fab>
  );
};

export default PersonAddButton;
