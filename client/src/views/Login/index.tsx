import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import LoginDialog from '../../components/modals/LoginDialog';
import { LoginInput } from '../../store/user/types';
import loginService from '../../services/login';
import { loginUser, logoutUser } from '../../store/user/actions';
import store, { getUser } from '../../store';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);

  const openDialog = (): void => {
    setDialogOpen(true);
  };
  const closeDialog = (): void => {
    setDialogOpen(false);
  };
  const handleLogin = async (values: LoginInput) => {
    closeDialog();
    try {
      const user = await loginService.login(values);
      dispatch(loginUser(user));
      window.localStorage.setItem('basketBallStatUser', JSON.stringify(user));
    } catch (error) {
      console.error('invalid username or password');
    }
  };
  const handleLogout = () => {
    dispatch(logoutUser(null));
    window.localStorage.removeItem('basketBallStatUser');
  };
  return (
    <>
      {getUser(store.getState()).user ? (
        <Button variant="outlined" onClick={() => handleLogout()}>
          Logout
        </Button>
      ) : (
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
      )}
    </>
  );
};

export default Login;
