import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { TeamInput } from '../../../store/team/types';
import OkButton from '../../button/OkButton';
import CancelButton from '../../button/CancelButton';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (team: TeamInput) => void;
}

const TeamAddDialog: React.FC<Props> = ({ modalOpen, onClose, onSubmit }) => {
  const [teamName, setTeamName] = React.useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const team = {
      teamName,
    };
    setTeamName('');
    onSubmit(team);
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
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              px={2}
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

export default TeamAddDialog;
