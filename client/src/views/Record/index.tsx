import React from 'react';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import GameAddDialog from '../../components/modals/GameAddDialog';
import { GameInput } from '../../store/game/types';

const Record: React.FC = () => {
  const [showGameAddDialog, SetShowGameAddDialog] = React.useState<boolean>(
    true
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
    try {
      // dispatch(addGame(values));
      console.log('add game: ', values);
    } catch (error) {
      console.error(error.message);
    }
  };

  // 

  return (
    <>
      {showGameAddDialog && (
        <GameAddDialog
          modalOpen={addGameDialogOpen}
          onClose={closeAddGameDialog}
          onSubmit={handleAddGame}
        />
      )}
      
      {showPlayerButtons ? (
        <PlayerButtons showPlayerButtons={SetShowPlayerButtons} />
      ) : (
        <EventButtons showPlayerButtons={SetShowPlayerButtons} />
      )}
    </>
  );
};

export default Record;
