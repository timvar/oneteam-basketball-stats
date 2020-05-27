export interface LoginInput {
  username: string;
  password: string;
}

interface LoggedInUser {
  username: string;
  token: string;
}

export type User = LoggedInUser | null;

export interface UserState {
  user: User;
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
  payload: undefined;
}

export type UserActionTypes = LoginAction | LogoutAction;
