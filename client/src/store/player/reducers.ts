import {
  PlayerState,
  ADD_PLAYER,
  UPDATE_PLAYER,
  INIT_PLAYERS,
  PlayerActionTypes,
  Player,
  RESET_PLAYERS,
} from './types';

const initialState: PlayerState = {
  players: [],
};

const playerReducer = (
  state = initialState,
  action: PlayerActionTypes
): PlayerState => {
  let currPlayer: Player;

  switch (action.type) {
    case INIT_PLAYERS:
      return { ...state, players: action.payload };
    case ADD_PLAYER:
      return { ...state, players: [...state.players, action.payload] };
    case UPDATE_PLAYER:
      if (state.players.find((p) => p.id === action.payload.id)) {
        currPlayer = state.players.find((p) => p.id === action.payload.id)!;
        currPlayer.playerName = action.payload.playerName;
        currPlayer.playerNumber = action.payload.playerNumber;
        const updatedPlayers = state.players.map((p) =>
          p.id === action.payload.id ? currPlayer : p
        );
        return { ...state, players: [...updatedPlayers] };
      }
      return state;
    case RESET_PLAYERS:
      return { ...state, players: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
