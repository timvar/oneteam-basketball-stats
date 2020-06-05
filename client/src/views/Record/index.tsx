import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import GameAddDialog from '../../components/modals/GameAddDialog';
import { GameInput } from '../../store/game/types';
import { StatToDB } from '../../store/stat/types';
import Roster from '../SelectRoster';
import { addGame } from '../../store/game/actions';
import { setHeaderTitle } from '../../store/header/actions';
import store, { getGameTeam, getStats, getGameId } from '../../store';
import statService from '../../services/stats';

const Record: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showGameAddDialog, SetShowGameAddDialog] = React.useState<boolean>(
    true
  );
  const [showSelectRoster, SetShowSelectRoster] = React.useState<boolean>(
    false
  );
  const [showPlayerButtons, SetShowPlayerButtons] = React.useState<boolean>(
    true
  );
  const [addGameDialogOpen, setAddGameDialogOpen] = React.useState<boolean>(
    true
  );

  const closeAddGameDialog = (): void => {
    setAddGameDialogOpen(false);
  };
  const handleAddGame = async (values: GameInput) => {
    closeAddGameDialog();
    SetShowGameAddDialog(false);
    SetShowSelectRoster(true);
    try {
      dispatch(addGame(values));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRosterSelected = () => {
    SetShowSelectRoster(false);
  };

  const handleFinishRecording = () => {
    let statToDB: StatToDB;
    getStats(store.getState()).forEach((stat) => {
      statToDB = { ...stat, game: getGameId(store.getState()) };
      console.log('statToDB: ', statToDB);
      statService.createStat(statToDB);
    });
    dispatch(setHeaderTitle('Home'));
    console.log('done');
    history.push('/');
  };

  return (
    <>
      {showGameAddDialog && !showSelectRoster && (
        <GameAddDialog
          modalOpen={addGameDialogOpen}
          onClose={closeAddGameDialog}
          onSubmit={handleAddGame}
        />
      )}

      {!showGameAddDialog && showSelectRoster && (
        <>
          <Roster selectedTeam={getGameTeam(store.getState())} />
          <Button variant="outlined" onClick={handleRosterSelected}>
            Done
          </Button>
        </>
      )}

      {!showGameAddDialog &&
        !showSelectRoster &&
        (showPlayerButtons ? (
          <PlayerButtons
            showPlayerButtons={SetShowPlayerButtons}
            finishRecording={handleFinishRecording}
          />
        ) : (
          <EventButtons showPlayerButtons={SetShowPlayerButtons} />
        ))}
    </>
  );
};

export default Record;
