import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    personAdd: {
      marginTop: theme.spacing(1),
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

const TeamAddButton: React.FC<Props> = ({ action }) => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.personAdd}
      size="medium"
      color="primary"
      onClick={action}
    >
      <GroupAddIcon className={classes.icon} />
    </Fab>
  );
};

export default TeamAddButton;
