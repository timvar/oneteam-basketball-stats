import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { LoginInput } from '../../../store/user/types';

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
    console.log(username);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
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
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              style={{ marginBottom: 8, marginRight: 8 }}
            >
              Login
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

export default LoginDialog;
