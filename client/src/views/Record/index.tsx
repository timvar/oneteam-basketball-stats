import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import GameAddDialog from '../../components/dialog/GameAddDialog';
import { GameInput } from '../../store/game/types';
import { StatToDB } from '../../store/stat/types';
import { addGame, resetGame } from '../../store/game/actions';
import { setHeaderTitle } from '../../store/header/actions';
import store, { getGameTeam, getStats, getGameId } from '../../store';
import statService from '../../services/stats';
import RecordStepper from '../../components/stepper/RecordStepper';
import SelectRosterDialog from '../../components/dialog/SelectRosterDialog';
import AlertDialog from '../../components/dialog/AlertDialog';
import { resetRoster } from '../../store/roster/actions';
import { resetStats } from '../../store/stat/actions';

const Record: React.FC = () => {
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
  const [open, setOpen] = React.useState(false);
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

      {recordGame &&
        (showPlayerButtons ? (
          <>
            <PlayerButtons showPlayerButtons={setShowPlayerButtons} />
            <Button variant="outlined" onClick={confirmFinishRecording}>
              Finish Recording
            </Button>
          </>
        ) : (
          <EventButtons
            showPlayerButtons={setShowPlayerButtons}
            setSnackbar={setOpen}
            setOrangeSnack={setOrangeSnack}
            setBlueSnack={setBlueSnack}
          />
        ))}
      <AlertDialog
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        onSubmit={handleDialogSubmit}
      />
    </>
  );
};

export default Record;
