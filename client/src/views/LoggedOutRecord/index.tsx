import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Snackbar,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import { setHeaderTitle } from '../../store/header/actions';
import AlertDialog from '../../components/dialog/AlertDialog';
import store, { getEvent, getEvents, getScore } from '../../store';
import { StatEvent } from '../../store/stat/types';
import { EventItem } from '../../store/event/types';
import { removeStat } from '../../store/stat/actions';
import { removeEvent } from '../../store/event/actions';
import {
  ONEPM,
  TWOPM,
  THREEPM,
  ONEPA,
  TWOPA,
  THREEPA,
} from '../../constants/gameEvents';
import { reduceOne, reduceTwo, reduceThree } from '../../store/score/actions';
import StopButton from '../../components/button/StopButton';
import { successColor, failColor, otherColor } from '../../constants/colors';

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
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  score: {
    paddingLeft: theme.spacing(1),
  },
  gameEventList: {
    paddingLeft: theme.spacing(1),
  },
}));

interface AvatarProps {
  event: EventItem;
}

const EventAvatar: React.FC<AvatarProps> = ({ event }) => {
  const classes = useStyles();
  switch (event.gameEvent) {
    case ONEPM:
      return (
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: successColor }}
        >
          <Typography variant="h6">{event.playerNumber}</Typography>
        </Avatar>
      );
    case TWOPM:
      return (
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: successColor }}
        >
          <Typography variant="h6">{event.playerNumber}</Typography>
        </Avatar>
      );
    case THREEPM:
      return (
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: successColor }}
        >
          <Typography variant="h6">{event.playerNumber}</Typography>
        </Avatar>
      );
    case ONEPA:
      return (
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: failColor }}
        >
          <Typography variant="h6">{event.playerNumber}</Typography>
        </Avatar>
      );
    case TWOPA:
      return (
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: failColor }}
        >
          <Typography variant="h6">{event.playerNumber}</Typography>
        </Avatar>
      );
    case THREEPA:
      return (
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: failColor }}
        >
          <Typography variant="h6">{event.playerNumber}</Typography>
        </Avatar>
      );
    default:
      return (
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: otherColor }}
        >
          <Typography variant="h6">{event.playerNumber}</Typography>
        </Avatar>
      );
  }
};

const LoggedOutRecord: React.FC = () => {
  const classes = useStyles();
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

  const handleDeleteEvent = (event: EventItem) => {
    const statEvent: StatEvent = {
      gameEvent: event.gameEvent,
      playerNumber: event.playerNumber,
    };
    dispatch(removeStat(statEvent));
    dispatch(removeEvent(event.id));
    switch (event.gameEvent) {
      case ONEPM:
        dispatch(reduceOne());
        break;
      case TWOPM:
        dispatch(reduceTwo());
        break;
      case THREEPM:
        dispatch(reduceThree());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="row" marginTop={1} p={2} width="70%">
          <Typography align="left" variant="h4" color="secondary">
            Score:
          </Typography>
          <Typography align="left" variant="h4" className={classes.score}>
            {getScore(store.getState())}
          </Typography>
        </Box>
        <Box
          display="flex"
          marginTop={1}
          width="30%"
          alignItems="center"
          justifyContent="center"
        >
          <StopButton action={confirmFinishRecording} />
        </Box>
      </Box>
      {showPlayerButtons ? (
        <PlayerButtons showPlayerButtons={setShowPlayerButtons} />
      ) : (
        <EventButtons
          showPlayerButtons={setShowPlayerButtons}
          setSnackbar={setOpen}
        />
      )}
      {showPlayerButtons &&
        getEvents(store.getState()).map((evt) => (
          <Box key={evt.id} display="flex" flexDirection="row">
            <Box
              display="flex"
              border={1}
              paddingTop={0}
              paddingBottom={0}
              paddingLeft={3}
              width="70%"
              alignItems="center"
            >
              <EventAvatar event={evt} />
              <Typography className={classes.gameEventList}>
                {evt.gameEvent}
              </Typography>
            </Box>
            <Box
              display="flex"
              border={1}
              width="30%"
              paddingTop={0}
              paddingBottom={0}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton onClick={() => handleDeleteEvent(evt)}>
                <DeleteOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
      {getEvent(store.getState()) ? (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {getEvent(store.getState()).playerNumber} -{' '}
            {getEvent(store.getState()).gameEvent}
          </Alert>
        </Snackbar>
      ) : null}

      <AlertDialog
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        onSubmit={handleDialogSubmit}
      />
    </>
  );
};

export default LoggedOutRecord;
