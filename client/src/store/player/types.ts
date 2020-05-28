export interface Player {
  id: number | undefined;
  playerNumber: number | undefined;
  playerName: string;
}

export interface PlayerInput {
  playerNumber: number | undefined;
  playerName: string;
}

export interface PlayerState {
  players: Player[];
}

export const ADD_PLAYER = 'ADD_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const INIT_PLAYERS = 'INIT_PLAYERS';

interface AddPlayerAction {
  type: typeof ADD_PLAYER;
  payload: Player;
}

interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  payload: Player;
}

interface InitPlayersAction {
  type: typeof INIT_PLAYERS;
  payload: Player[];
}

export type PlayerActionTypes =
  | AddPlayerAction
  | UpdatePlayerAction
  | InitPlayersAction;
