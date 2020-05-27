import { User, LOGIN, LOGOUT } from './types';

export const loginUser = (payload: User) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logoutUser = (payload: User) => {
  return {
    type: LOGOUT,
    payload,
  };
};
