import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    deleteIcon: {
      fontSize: 28,
      color: theme.palette.primary.main,
    },
  })
);

interface Props {
  action: () => void;
}

const DeleteButton: React.FC<Props> = ({ action }) => {
  const classes = useStyles();

  return (
    <IconButton edge="start" onClick={action}>
      <DeleteOutlinedIcon className={classes.deleteIcon} />
    </IconButton>
  );
};

export default DeleteButton;
