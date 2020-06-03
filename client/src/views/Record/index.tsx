import React from 'react';
import { useDispatch } from 'react-redux';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import GameAddDialog from '../../components/modals/GameAddDialog';
import { GameInput } from '../../store/game/types';
import Roster from '../SelectRoster';
import { addGame } from '../../store/game/actions';
import store, { getPlayers, getTeams, getGameTeam } from '../../store';

const Record: React.FC = () => {
  const dispatch = useDispatch();
  const [showGameAddDialog, SetShowGameAddDialog] = React.useState<boolean>(
    true
  );
  const [showSelectRoster, SetShowSelectRoster] = React.useState<boolean>(
    false
  );
  const [showPlayerButtons, SetShowPlayerButtons] = React.useState<boolean>(
    true
  );
  const [gameOn, setGameOn] = React.useState<boolean>(false);
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
        <Roster selectedTeam={getGameTeam(store.getState())} />
      )}

      {!showGameAddDialog &&
        !showSelectRoster &&
        (showPlayerButtons ? (
          <PlayerButtons showPlayerButtons={SetShowPlayerButtons} />
        ) : (
          <EventButtons showPlayerButtons={SetShowPlayerButtons} />
        ))}
    </>
  );
};

export default Record;
