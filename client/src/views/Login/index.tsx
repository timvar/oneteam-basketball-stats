import React from 'react';
import Button from '@material-ui/core/Button';
import LoginDialog from '../../components/modals/LoginDialog';
import { LoginInput } from '../../store/user/types';
import loginService from '../../services/login';

const Login: React.FC = () => {
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const openDialog = (): void => {
    setDialogOpen(true);
  };
  const closeDialog = (): void => {
    setDialogOpen(false);
  };
  const handleLogin = async (values: LoginInput) => {
    closeDialog();
    // dispatch(addPlayer(values));
    console.log('user: ', values);
    const user = await loginService.login(values);
    console.log('logged in user:', user);
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
