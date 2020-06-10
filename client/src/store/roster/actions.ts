import { ADD_TO_ROSTER, REMOVE_FROM_ROSTER, RESET_ROSTER } from './types';
import { Player } from '../player/types';

export const addToRoster = (payload: Player) => {
  return {
    type: ADD_TO_ROSTER,
    payload,
  };
};

export const removeFromRoster = (payload: Player) => {
  return {
    type: REMOVE_FROM_ROSTER,
    payload,
  };
};

export const resetRoster = (payload: Player[] = []) => {
  return {
    type: RESET_ROSTER,
    payload,
  };
};
