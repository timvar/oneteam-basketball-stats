import {
  GameEvent,
  PlayerNumber,
  SET_GAME_EVENT,
  SET_PLAYER,
  REMOVE_EVENT,
  EventItem,
} from './types';

export const setPlayer = (data: PlayerNumber) => {
  return {
    type: SET_PLAYER,
    payload: data,
  };
};

export const setEvent = (data: GameEvent) => {
  return {
    type: SET_GAME_EVENT,
    payload: data,
  };
};

export const removeEvent = (data: EventItem['id']) => {
  return {
    type: REMOVE_EVENT,
    payload: data,
  };
};
