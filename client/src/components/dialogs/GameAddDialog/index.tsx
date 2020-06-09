import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { GameInput } from '../../../store/game/types';
import TeamSelect from '../../select/TeamSelect';
import store, { getTeams } from '../../../store';
import { Team } from '../../../store/team/types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (game: GameInput) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttoncontainer: {
      marginTop: 20,
    },
    teamSelect: {
      marginTop: 10,
    },
  })
);

const GameAddDialog: React.FC<Props> = ({ modalOpen, onClose, onSubmit }) => {
  const classes = useStyles();
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
            <Grid container>
              <TeamSelect
                teams={getTeams(store.getState())}
                submit={handleTeamSelect}
              />
            </Grid>
            <Grid container className={classes.buttoncontainer}>
              <Button
                variant="outlined"
                type="submit"
                color="primary"
                style={{ marginBottom: 8, marginRight: 8 }}
              >
                Add
              </Button>
              <Button
                variant="outlined"
                onClick={onClose}
                color="secondary"
                style={{ marginBottom: 8, marginLeft: 8 }}
              >
                Cancel
              </Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameAddDialog;
