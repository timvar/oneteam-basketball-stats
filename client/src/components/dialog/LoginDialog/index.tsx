import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { LoginInput } from '../../../store/user/types';
import OkButton from '../../button/OkButton';
import CancelButton from '../../button/CancelButton';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (user: LoginInput) => void;
}

const LoginDialog: React.FC<Props> = ({ modalOpen, onClose, onSubmit }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    setUsername('');
    setPassword('');
    onSubmit(user);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
              name="username"
              onChange={handleUsernameChange}
              placeholder="Username"
              required={true}
              size="small"
              type="text"
              value={username}
              variant="outlined"
            />
            <TextField
              fullWidth
              style={{ marginBottom: 24 }}
              name="password"
              onChange={handlePasswordChange}
              placeholder="Password"
              required={true}
              size="small"
              type="password"
              value={password}
              variant="outlined"
            />
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

export default LoginDialog;
