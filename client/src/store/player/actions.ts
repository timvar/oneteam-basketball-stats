import { Player, ADD_PLAYER, UPDATE_PLAYER, INIT_PLAYERS } from './types';

export const addPlayer = (payload: Player) => {
  return {
    type: ADD_PLAYER,
    payload,
  };
};

export const updatePlayer = (payload: Player) => {
  return {
    type: UPDATE_PLAYER,
    payload,
  };
};

export const initPlayers = (payload: Player[]) => {
  return {
    type: INIT_PLAYERS,
    payload,
  };
};
