import { HeaderState, HeaderActionTypes, SET_TITLE } from './types';

const initialState: HeaderState = {
  title: '',
};

const headerReducer = (
  state = initialState,
  action: HeaderActionTypes
): HeaderState => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default headerReducer;
