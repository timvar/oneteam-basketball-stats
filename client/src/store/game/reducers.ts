import { GameState, ADD_GAME, GameActionTypes, RESET_GAME } from './types';

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
    case RESET_GAME:
      return { ...state, game: action.payload };
    case ADD_GAME:
      return { ...state, game: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
