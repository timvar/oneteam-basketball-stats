import { StatState, ADD_STAT, StatActionTypes, Stat } from './types';

const initialState: StatState = {
  stats: [],
};

const getStat = (stats: Stat[], playerNumber: string): Stat => {
  let emptyStat: Stat = {
    playerNumber: '',
    onePm: 0,
    twoPm: 0,
    threePm: 0,
    onePa: 0,
    twoPa: 0,
    threePa: 0,
    orb: 0,
    to: 0,
    drb: 0,
    ast: 0,
    blk: 0,
    stl: 0,
  };
  if (stats.find((s) => s.playerNumber === playerNumber)) {
    return stats.find((s) => s.playerNumber === playerNumber)!;
  }
  emptyStat = { ...emptyStat, playerNumber };
  return emptyStat;
};

const statReducer = (
  state = initialState,
  action: StatActionTypes
): StatState => {
  const currStat = getStat(state.stats, action.payload.playerNumber);
  switch (action.type) {
    case ADD_STAT:
      if (
        state.stats.find((s) => s.playerNumber === action.payload.playerNumber)
      ) {
        const updatedStats = state.stats.map((s) => {
          return s.playerNumber === action.payload.playerNumber ? currStat : s;
        });
        return { stats: [...updatedStats] };
      }
      return { stats: [...state.stats, currStat] };

    default:
      return state;
  }
};

export default statReducer;
