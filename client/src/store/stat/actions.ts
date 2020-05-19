import { ADD_STAT, LastEvent } from './types';

export const addStat = (data: LastEvent) => {
  return {
    type: ADD_STAT,
    payload: data,
  };
};
