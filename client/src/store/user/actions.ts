import { User, LOGIN, LOGOUT } from './types';

export const logoutUser = (payload: User) => {
  return {
    type: LOGOUT,
    payload,
  };
};

export const loginUser = (payload: User) => {
  return {
    type: LOGIN,
    payload,
  };
};

/* MALLI redux thunk action
export const loginUser: ActionCreator<ThunkAction<
  Promise<LoginAction>,
  User,
  LoginInput,
  LoginAction
>> = (credentials: LoginInput) => {
  return async (dispatch: Dispatch) => {
    const payload = await loginService.login(credentials);
    const loginAction: LoginAction = {
      type: LOGIN,
      payload,
    };
    return dispatch(loginAction);
  };
};

*/
