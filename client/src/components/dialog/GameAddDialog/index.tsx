import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { GameInput } from '../../../store/game/types';
import TeamSelect from '../../select/TeamSelect';
import store, { getTeams } from '../../../store';
import { Team } from '../../../store/team/types';
import OkButton from '../../button/OkButton';
import CancelButton from '../../button/CancelButton';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (game: GameInput) => void;
}

const GameAddDialog: React.FC<Props> = ({ modalOpen, onClose, onSubmit }) => {
  const [homeTeam, setHomeTeam] = React.useState<string>('');
  const [awayTeam, setAwayTeam] = React.useState<string>('');
  const [gameNumber, setGameNumber] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [gameDate, setGameDate] = React.useState<string>('');
  const [selectedTeam, setSelectedTeam] = React.useState<Team['id']>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const game = {
      homeTeam,
      awayTeam,
      gameNumber,
      description,
      gameDate,
      team: selectedTeam,
      roster: [],
    };
    setHomeTeam('');
    setAwayTeam('');
    setGameNumber('');
    setDescription('');
    setGameDate('');

    onSubmit(game);
  };

  const handleHomeTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHomeTeam(event.target.value);
  };

  const handleAwayTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAwayTeam(event.target.value);
  };

  const handleGameNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGameNumber(event.target.value);
  };

  const handleGameDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameDate(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleTeamSelect = (value: Team['id']) => {
    setSelectedTeam(value);
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
              name="homeTeam"
              onChange={handleHomeTeamChange}
              placeholder="Home Team"
              required={true}
              size="small"
              type="text"
              value={homeTeam}
              variant="outlined"
            />
            <TextField
              fullWidth
              style={{ marginBottom: 24 }}
              name="awayTeam"
              onChange={handleAwayTeamChange}
              placeholder="Away Team"
              required={true}
              size="small"
              value={awayTeam}
              variant="outlined"
            />
            <TextField
              fullWidth
              style={{ marginBottom: 24 }}
              name="gameNumber"
              onChange={handleGameNumberChange}
              placeholder="Game Number"
              required={true}
              size="small"
              value={gameNumber}
              variant="outlined"
            />
            <TextField
              fullWidth
              style={{ marginBottom: 24 }}
              name="gameDate"
              onChange={handleGameDateChange}
              placeholder="Game Date"
              required={true}
              size="small"
              value={gameDate}
              variant="outlined"
            />
            <TextField
              fullWidth
              style={{ marginBottom: 24 }}
              name="description"
              onChange={handleDescriptionChange}
              placeholder="Description"
              required={true}
              size="small"
              value={description}
              variant="outlined"
            />
            <Box>
              <TeamSelect
                teams={getTeams(store.getState())}
                submit={handleTeamSelect}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              px={5}
            >
              <OkButton />
              <CancelButton action={onClose} />
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameAddDialog;
