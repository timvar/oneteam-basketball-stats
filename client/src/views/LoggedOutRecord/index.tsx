import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import { setHeaderTitle } from '../../store/header/actions';
import AlertDialog from '../../components/dialog/AlertDialog';
import store, { getEvent } from '../../store';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const LoggedOutRecord: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPlayerButtons, setShowPlayerButtons] = React.useState<boolean>(
    true
  );
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);

  const confirmFinishRecording = () => {
    setDialogOpen(true);
  };

  const closeDialog = (): void => {
    setDialogOpen(false);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleDialogSubmit = (saveStats: boolean) => {
    closeDialog();
    if (saveStats) {
      dispatch(setHeaderTitle('Stat'));
      history.push('/loggedoutstats');
    } else {
      console.log('cancel');
    }
  };

  return (
    <>
      {showPlayerButtons ? (
        <>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {getEvent(store.getState()).playerNumber} -{' '}
              {getEvent(store.getState()).gameEvent}
            </Alert>
          </Snackbar>

          <PlayerButtons showPlayerButtons={setShowPlayerButtons} />
          <Button variant="outlined" onClick={confirmFinishRecording}>
            Finish Recording
          </Button>
        </>
      ) : (
        <EventButtons
          showPlayerButtons={setShowPlayerButtons}
          setSnackbar={setOpen}
        />
      )}

      <AlertDialog
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        onSubmit={handleDialogSubmit}
      />
    </>
  );
};

export default LoggedOutRecord;
