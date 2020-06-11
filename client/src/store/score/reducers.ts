import {
  ScoreActionTypes,
  ScoreState,
  ADD_ONE,
  ADD_TWO,
  ADD_THREE,
  REDUCE_ONE,
  REDUCE_TWO,
  REDUCE_THREE,
} from './types';

const initialState: ScoreState = {
  score: 0,
};

const scoreReducer = (
  state = initialState,
  action: ScoreActionTypes
): ScoreState => {
  let newScore: number;
  switch (action.type) {
    case ADD_ONE:
      newScore = state.score + 1;
      return { ...state, score: newScore };
    case ADD_TWO:
      newScore = state.score + 2;
      return { ...state, score: newScore };
    case ADD_THREE:
      newScore = state.score + 3;
      return { ...state, score: newScore };
    case REDUCE_ONE:
      newScore = state.score - 1;
      return { ...state, score: newScore };
    case REDUCE_TWO:
      newScore = state.score - 2;
      return { ...state, score: newScore };
    case REDUCE_THREE:
      newScore = state.score - 3;
      return { ...state, score: newScore };
    default:
      return state;
  }
};

export default scoreReducer;
