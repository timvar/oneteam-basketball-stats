import { uuid } from 'uuidv4';
import {
  EventState,
  SET_GAME_EVENT,
  SET_PLAYER,
  EventActionTypes,
  EventItem,
} from './types';

const initialState: EventState = {
  events: [],
};

const eventReducer = (
  state = initialState,
  action: EventActionTypes
): EventState => {
  let newEvent: EventItem;
  let newEventList: EventItem[];
  switch (action.type) {
    case SET_GAME_EVENT:
      newEventList = [...state.events];
      newEventList[0].gameEvent = action.payload.gameEvent;
      return { ...state, events: newEventList };
    case SET_PLAYER:
      newEvent = {
        id: uuid(),
        gameEvent: '',
        playerNumber: action.payload.playerNumber,
      };
      newEventList = [...state.events];
      newEventList.unshift(newEvent);
      if (newEventList.length > 5) {
        newEventList.pop();
      }
      return { ...state, events: newEventList };
    default:
      return state;
  }
};

export default eventReducer;
