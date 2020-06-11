import { ADD_STAT, StatEvent, Stat, RESET_STATS, REMOVE_STAT } from './types';

export const addStat = (data: StatEvent) => {
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

export const removeStat = (data: StatEvent) => {
  return {
    type: REMOVE_STAT,
    payload: data,
  };
};
