import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editIcon: {
      fontSize: 24,
      color: theme.palette.primary.main,
    },
  })
);

interface Props {
  action: () => void;
}

const EditButton: React.FC<Props> = ({ action }) => {
  const classes = useStyles();

  return (
    <IconButton edge="start" onClick={action}>
      <EditIcon className={classes.editIcon} />
    </IconButton>
  );
};

export default EditButton;
