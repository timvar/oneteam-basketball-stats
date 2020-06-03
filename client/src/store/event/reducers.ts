import {
  EventState,
  SET_GAME_EVENT,
  SET_PLAYER,
  EventActionTypes,
} from './types';

const initialState: EventState = {
  gameEvent: '',
  playerNumber: 0,
};

const eventReducer = (
  state = initialState,
  action: EventActionTypes
): EventState => {
  switch (action.type) {
    case SET_GAME_EVENT:
      return { ...state, gameEvent: action.payload.gameEvent };
    case SET_PLAYER:
      return { ...state, playerNumber: action.payload.playerNumber };
    default:
      return state;
  }
};

export default eventReducer;
