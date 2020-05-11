import { Event } from '../types';

const SET_EVENT = 'SET_EVENT';
const SET_PLAYER = 'SET_PLAYER';
const RESET_EVENT = 'RESET_EVENT';

const initialState = {
  playerNumber: '',
  event: '',
};

export const setPlayer = (data: string) => {
  return {
    type: SET_PLAYER,
    data,
  };
};

export const setEvent = (data: string) => {
  return {
    type: SET_EVENT,
    data,
  };
};

export const resetEvent = () => {
  return {
    type: RESET_EVENT,
    data: '',
  };
};

const eventReducer = (state = initialState, action: Event) => {
  switch (action.type) {
    case SET_EVENT:
      return { ...state, event: action.data };
    case SET_PLAYER:
      return { ...state, playerNumber: action.data };
    case RESET_EVENT:
      return { playerNumber: '', event: '' };
    default:
      return state;
  }
};

export default eventReducer;
