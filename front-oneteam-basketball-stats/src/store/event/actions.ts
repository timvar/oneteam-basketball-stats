import { GameEvent, PlayerNumber, SET_GAME_EVENT, SET_PLAYER } from './types';

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
