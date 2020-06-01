import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Team } from '../../../store/team/types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (team: Team) => void;
  team: Team;
}

const TeamUpdateDialog: React.FC<Props> = ({
  modalOpen,
  onClose,
  onSubmit,
  team,
}) => {
  const [teamName, setTeamName] = React.useState<string>('');

  React.useEffect(() => {
    setTeamName(team.teamName);
  }, [team.teamName]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTeam: Team = {
      id: team.id,
      teamName,
    };
    setTeamName('');
    onSubmit(updatedTeam);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
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
              name="teamName"
              onChange={handleNameChange}
              placeholder="Team Name"
              required={true}
              size="small"
              type="text"
              value={teamName}
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

export default TeamUpdateDialog;
