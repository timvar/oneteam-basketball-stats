import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { PlayerInput } from '../../../store/player/types';
import OkButton from '../../button/OkButton';
import CancelButton from '../../button/CancelButton';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (player: PlayerInput) => void;
  selectedTeam: string;
}

const PlayerAddDialog: React.FC<Props> = ({
  modalOpen,
  onClose,
  onSubmit,
  selectedTeam,
}) => {
  const [playerName, setPlayerName] = React.useState<string>('');
  const [playerNumber, setPlayerNumber] = React.useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const player: PlayerInput = {
      playerNumber: Number(playerNumber),
      playerName,
      team: selectedTeam,
    };
    setPlayerName('');
    setPlayerNumber('');
    onSubmit(player);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerNumber(event.target.value);
  };

  return (
    <div>
      <Dialog open={modalOpen} onClose={onClose}>
        <DialogContent>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              autoFocus={true}
              fullWidth
              style={{ marginBottom: 16 }}
              name="playerName"
              onChange={handleNameChange}
              placeholder="Player Name"
              required={true}
              size="small"
              type="text"
              value={playerName}
              variant="outlined"
            />
            <TextField
              fullWidth
              style={{ marginBottom: 24 }}
              name="playerNumber"
              onChange={handleNumberChange}
              placeholder="Player Number"
              required={true}
              size="small"
              value={playerNumber}
              variant="outlined"
            />
            <Box display="flex" flexDirection="row" justifyContent="center">
              <OkButton />
              <Box width="30%" />
              <CancelButton action={onClose} />
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlayerAddDialog;
