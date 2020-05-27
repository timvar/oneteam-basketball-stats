import { UserState, LOGIN, LOGOUT, UserActionTypes } from './types';

const initialState: UserState = {
  user: null,
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
export default userReducer;
