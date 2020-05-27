import React from 'react';
import Button from '@material-ui/core/Button';
import LoginDialog from '../../components/modals/LoginDialog';
import { User } from '../../store/user/types';

const Login: React.FC = () => {
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const openDialog = (): void => {
    setDialogOpen(true);
  };
  const closeDialog = (): void => {
    setDialogOpen(false);
  };
  const handleLogin = (values: User): void => {
    closeDialog();
    // dispatch(addPlayer(values));
    console.log('user: ', values);
  };
  return (
    <>
      <Button variant="outlined" onClick={() => openDialog()}>
        Login
      </Button>

      <LoginDialog
        modalOpen={dialogOpen}
        onClose={closeDialog}
        onSubmit={handleLogin}
      />
    </>
  );
};

export default Login;
