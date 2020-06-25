import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Snackbar from '@material-ui/core/Snackbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import GameAddDialog from '../../components/dialog/GameAddDialog';
import { GameInput } from '../../store/game/types';
import { StatToDB, StatEvent } from '../../store/stat/types';
import { addGame, resetGame } from '../../store/game/actions';
import { setHeaderTitle } from '../../store/header/actions';
import store, {
  getGameTeam,
  getStats,
  getGameId,
  getEvent,
  getEvents,
  getScore,
} from '../../store';
import statService from '../../services/stats';
import RecordStepper from '../../components/stepper/RecordStepper';
import SelectRosterDialog from '../../components/dialog/SelectRosterDialog';
import AlertDialog from '../../components/dialog/AlertDialog';
import { resetRoster } from '../../store/roster/actions';
import { resetStats, removeStat } from '../../store/stat/actions';
import { successColor, failColor, otherColor } from '../../constants/colors';
import { EventItem } from '../../store/event/types';
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
import { removeEvent } from '../../store/event/actions';
import DeleteButton from '../../components/button/DeleteButton';
import StopButton from '../../components/button/StopButton';

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
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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

const Record: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showStepper, setShowStepper] = React.useState<boolean>(true);
  const [showGameAddDialog, setShowGameAddDialog] = React.useState<boolean>(
    false
  );
  const [showSelectRoster, setShowSelectRoster] = React.useState<boolean>(
    false
  );
  const [showPlayerButtons, setShowPlayerButtons] = React.useState<boolean>(
    true
  );
  const [recordGame, setRecordGame] = React.useState<boolean>(false);
  const [addGameDialogOpen, setAddGameDialogOpen] = React.useState<boolean>(
    true
  );
  const [selectRosterDialogOpen, setSelectRosterDialogOpen] = React.useState<
    boolean
  >(true);
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const [greenSnack, setGreenSnack] = React.useState(false);
  const [orangeSnack, setOrangeSnack] = React.useState(false);
  const [blueSnack, setBlueSnack] = React.useState(false);

  const closeAddGameDialog = (): void => {
    setAddGameDialogOpen(false);
  };

  const closeSelectRosterDialog = (): void => {
    setSelectRosterDialogOpen(false);
  };
  const handleAddGame = async (values: GameInput) => {
    closeAddGameDialog();
    setShowGameAddDialog(false);
    setShowSelectRoster(true);
    try {
      dispatch(addGame(values));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRosterSelected = () => {
    setSelectRosterDialogOpen(false);
  };

  const closeDialog = (): void => {
    setDialogOpen(false);
  };

  const confirmFinishRecording = () => {
    setDialogOpen(true);
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
      let statToDB: StatToDB;
      getStats(store.getState()).forEach((stat) => {
        statToDB = { ...stat, game: getGameId(store.getState()) };
        console.log('statToDB: ', statToDB);
        statService.createStat(statToDB);
      });
      dispatch(resetRoster());
      dispatch(resetStats());
      dispatch(resetGame());
      dispatch(setHeaderTitle('Home'));
      console.log('done');
      history.push('/');
    } else {
      console.log('cancel');
    }
  };

  const handleNextStep = (value: number) => {
    switch (value) {
      case 1:
        setShowGameAddDialog(true);
        setShowSelectRoster(false);
        break;
      case 2:
        setShowGameAddDialog(false);
        setShowSelectRoster(true);
        break;
      case 3:
        setShowGameAddDialog(false);
        setShowSelectRoster(false);
        setShowStepper(false);
        setRecordGame(true);
        break;
      default:
        break;
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
      {showStepper && <RecordStepper showNextView={handleNextStep} />}
      {showGameAddDialog && (
        <GameAddDialog
          modalOpen={addGameDialogOpen}
          onClose={closeAddGameDialog}
          onSubmit={handleAddGame}
        />
      )}

      {showSelectRoster && (
        <SelectRosterDialog
          modalOpen={selectRosterDialogOpen}
          onClose={closeSelectRosterDialog}
          onSubmit={handleRosterSelected}
          selectedTeam={getGameTeam(store.getState())}
        />
      )}

      {recordGame && (
        <Box display="flex" flexDirection="row">
          <Box
            display="flex"
            flexDirection="row"
            marginTop={1}
            p={1}
            width="70%"
          >
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
      )}

      <Divider />

      {recordGame &&
        (showPlayerButtons ? (
          <PlayerButtons showPlayerButtons={setShowPlayerButtons} />
        ) : (
          <EventButtons
            showPlayerButtons={setShowPlayerButtons}
            setSnackbar={setGreenSnack}
            setOrangeSnack={setOrangeSnack}
            setBlueSnack={setBlueSnack}
          />
        ))}

      <Divider className={classes.divider} />

      {showPlayerButtons &&
        getEvents(store.getState()).map((evt) => (
          <Box
            key={evt.id}
            display="flex"
            flexDirection="row"
            border={1}
            borderColor="secondary.light"
            borderRadius={8}
            justifyContent="space-between"
            mx={5}
            px={1}
          >
            <Box
              display="flex"
              paddingTop={0}
              paddingBottom={0}
              px={4}
              alignItems="center"
            >
              <EventAvatar event={evt} />
              <Typography className={classes.gameEventList}>
                {evt.gameEvent}
              </Typography>
            </Box>
            <Box
              display="flex"
              paddingTop={0}
              paddingBottom={0}
              px={4}
              alignItems="center"
              justifyContent="center"
            >
              <DeleteButton action={() => handleDeleteEvent(evt)} />
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

export default Record;
