import {
  StatState,
  ADD_STAT,
  StatActionTypes,
  Stat,
  RESET_STATS,
  REMOVE_STAT,
} from './types';
import {
  ONEPM,
  TWOPM,
  THREEPM,
  ONEPA,
  TWOPA,
  THREEPA,
  ORB,
  TO,
  DRB,
  AST,
  BLK,
  STL,
} from '../../constants/gameEvents';

const initialState: StatState = {
  stats: [],
};

const addStat = (stat: Stat, event: string): Stat => {
  const newStat = stat;
  switch (event) {
    case ONEPM:
      newStat.onePm += 1;
      newStat.onePa += 1;
      return newStat;
    case TWOPM:
      newStat.twoPm += 1;
      newStat.twoPa += 1;
      return newStat;
    case THREEPM:
      newStat.threePm += 1;
      newStat.threePa += 1;
      return newStat;
    case ONEPA:
      newStat.onePa += 1;
      return newStat;
    case TWOPA:
      newStat.twoPa += 1;
      return newStat;
    case THREEPA:
      newStat.threePa += 1;
      return newStat;
    case ORB:
      newStat.orb += 1;
      return newStat;
    case TO:
      newStat.to += 1;
      return newStat;
    case DRB:
      newStat.drb += 1;
      return newStat;
    case AST:
      newStat.ast += 1;
      return newStat;
    case BLK:
      newStat.blk += 1;
      return newStat;
    case STL:
      newStat.stl += 1;
      return newStat;
    default:
      return stat;
  }
};

const removeStat = (stat: Stat, event: string): Stat => {
  const newStat = stat;
  switch (event) {
    case ONEPM:
      newStat.onePm -= 1;
      newStat.onePa -= 1;
      return newStat;
    case TWOPM:
      newStat.twoPm -= 1;
      newStat.twoPa -= 1;
      return newStat;
    case THREEPM:
      newStat.threePm -= 1;
      newStat.threePa -= 1;
      return newStat;
    case ONEPA:
      newStat.onePa -= 1;
      return newStat;
    case TWOPA:
      newStat.twoPa -= 1;
      return newStat;
    case THREEPA:
      newStat.threePa -= 1;
      return newStat;
    case ORB:
      newStat.orb -= 1;
      return newStat;
    case TO:
      newStat.to -= 1;
      return newStat;
    case DRB:
      newStat.drb -= 1;
      return newStat;
    case AST:
      newStat.ast -= 1;
      return newStat;
    case BLK:
      newStat.blk -= 1;
      return newStat;
    case STL:
      newStat.stl -= 1;
      return newStat;
    default:
      return stat;
  }
};

const statReducer = (
  state = initialState,
  action: StatActionTypes
): StatState => {
  const emptyStat: Stat = {
    playerNumber: 0,
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
  let currStat: Stat;

  switch (action.type) {
    case ADD_STAT:
      if (
        state.stats.find((s) => s.playerNumber === action.payload.playerNumber)
      ) {
        currStat = state.stats.find(
          (s) => s.playerNumber === action.payload.playerNumber
        )!;
        currStat = addStat(currStat, action.payload.gameEvent);
        const updatedStats = state.stats.map((s) =>
          s.playerNumber === action.payload.playerNumber ? currStat : s
        );
        return { stats: [...updatedStats] };
      }
      currStat = emptyStat;
      currStat.playerNumber = action.payload.playerNumber;
      currStat = addStat(currStat, action.payload.gameEvent);
      return { ...state, stats: [...state.stats, currStat] };
    case RESET_STATS:
      return { ...state, stats: action.payload };
    case REMOVE_STAT:
      if (
        state.stats.find((s) => s.playerNumber === action.payload.playerNumber)
      ) {
        currStat = state.stats.find(
          (s) => s.playerNumber === action.payload.playerNumber
        )!;
        currStat = removeStat(currStat, action.payload.gameEvent);
        const updatedStats = state.stats.map((s) =>
          s.playerNumber === action.payload.playerNumber ? currStat : s
        );
        return { ...state, stats: [...updatedStats] };
      }
      return state;
    default:
      return state;
  }
};

export default statReducer;
