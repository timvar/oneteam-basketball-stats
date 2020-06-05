import {
  GameState,
  ADD_GAME,
  FINISH_GAME,
  GameActionTypes,
  Game,
} from './types';

const initialState: GameState = {
  game: {
    id: '',
    homeTeam: '',
    awayTeam: '',
    gameNumber: '',
    description: '',
    gameDate: '',
    team: '',
  },
};

const gameReducer = (
  state = initialState,
  action: GameActionTypes
): GameState => {
  switch (action.type) {
    case ADD_GAME:
      return { ...state, game: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
