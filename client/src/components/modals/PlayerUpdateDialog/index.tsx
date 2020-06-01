import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Player } from '../../../store/player/types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (player: Player) => void;
  player: Player;
}

const PlayerUpdateDialog: React.FC<Props> = ({
  modalOpen,
  onClose,
  onSubmit,
  player,
}) => {
  const [playerName, setPlayerName] = React.useState<string>('');
  const [playerNumber, setPlayerNumber] = React.useState<string>('');

  React.useEffect(() => {
    setPlayerName(player.playerName);
    setPlayerNumber(String(player.playerNumber));
  }, [player.playerName, player.playerNumber]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedPlayer: Player = {
      id: player.id,
      playerName,
      team: player.team,
      playerNumber: Number(playerNumber),
    };
    setPlayerName('');
    setPlayerNumber('');
    onSubmit(updatedPlayer);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
    console.log(playerName);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerNumber(event.target.value);
    console.log(playerNumber);
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
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              style={{ marginBottom: 8, marginRight: 8 }}
            >
              Update
            </Button>
            <Button
              variant="outlined"
              onClick={onClose}
              color="secondary"
              style={{ marginBottom: 8, marginLeft: 8 }}
            >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlayerUpdateDialog;
