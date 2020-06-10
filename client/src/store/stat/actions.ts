import { ADD_STAT, LastEvent, Stat, RESET_STATS } from './types';

export const addStat = (data: LastEvent) => {
  return {
    type: ADD_STAT,
    payload: data,
  };
};

export const resetStats = (payload: Stat[] = []) => {
  return {
    type: RESET_STATS,
    payload,
  };
};
