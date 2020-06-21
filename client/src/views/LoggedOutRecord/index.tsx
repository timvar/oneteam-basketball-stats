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
  TO,
} from '../../constants/gameEvents';
import { reduceOne, reduceTwo, reduceThree } from '../../store/score/actions';
import StopButton from '../../components/button/StopButton';
import { successColor, failColor, otherColor } from '../../constants/colors';

const useStyles = makeStyles((theme: Theme) => ({
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
  orangeSnack: {
    backgroundColor: failColor,
  },
  orangeSnackText: {
    color: '#fafafa',
  },
  blueSnack: {
    backgroundColor: otherColor,
  },
  blueSnackText: {
    color: '#fafafa',
  },
  greenSnack: {
    backgroundColor: successColor,
  },
  greenSnackText: {
    color: '#fafafa',
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
    case TO:
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
  const [greenSnack, setGreenSnack] = React.useState(false);
  const [blueSnack, setBlueSnack] = React.useState(false);
  const [orangeSnack, setOrangeSnack] = React.useState(false);

  const confirmFinishRecording = () => {
    setDialogOpen(true);
  };

  const closeDialog = (): void => {
    setDialogOpen(false);
  };

  const handleGreenClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setGreenSnack(false);
  };

  const handleOrangeClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOrangeSnack(false);
  };

  const handleBlueClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setBlueSnack(false);
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
          setSnackbar={setGreenSnack}
          setOrangeSnack={setOrangeSnack}
          setBlueSnack={setBlueSnack}
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
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={greenSnack}
          autoHideDuration={2000}
          onClose={handleGreenClose}
        >
          <Box
            className={classes.greenSnack}
            display="flex"
            border={2}
            width="30%"
            borderColor="white"
            borderRadius={8}
            height={50}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" className={classes.greenSnackText}>
              #{getEvent(store.getState()).playerNumber}{' '}
              {getEvent(store.getState()).gameEvent}
            </Typography>
          </Box>
        </Snackbar>
      ) : null}

      {getEvent(store.getState()) ? (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={orangeSnack}
          autoHideDuration={2000}
          onClose={handleOrangeClose}
        >
          <Box
            className={classes.orangeSnack}
            display="flex"
            border={2}
            width="30%"
            borderColor="white"
            borderRadius={8}
            height={50}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" className={classes.orangeSnackText}>
              #{getEvent(store.getState()).playerNumber}{' '}
              {getEvent(store.getState()).gameEvent}
            </Typography>
          </Box>
        </Snackbar>
      ) : null}

      {getEvent(store.getState()) ? (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={blueSnack}
          autoHideDuration={2000}
          onClose={handleBlueClose}
        >
          <Box
            className={classes.blueSnack}
            display="flex"
            border={2}
            width="30%"
            borderColor="white"
            borderRadius={8}
            height={50}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" className={classes.blueSnackText}>
              #{getEvent(store.getState()).playerNumber}{' '}
              {getEvent(store.getState()).gameEvent}
            </Typography>
          </Box>
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
