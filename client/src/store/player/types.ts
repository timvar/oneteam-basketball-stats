import { Action } from 'redux';

export interface Player {
  id: string;
  playerNumber: number;
  playerName: string;
  team: string;
}

export interface PlayerInput {
  playerNumber: number;
  playerName: string;
  team: string;
}

export interface PlayerState {
  players: Player[];
}

export const ADD_PLAYER = 'ADD_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const INIT_PLAYERS = 'INIT_PLAYERS';
export const RESET_PLAYERS = 'RESET_PLAYERS';

export interface AddPlayerAction extends Action<typeof ADD_PLAYER> {
  type: typeof ADD_PLAYER;
  payload: Player;
}

interface UpdatePlayerAction extends Action<typeof UPDATE_PLAYER> {
  type: typeof UPDATE_PLAYER;
  payload: Player;
}

export interface InitPlayersAction extends Action<typeof INIT_PLAYERS> {
  type: typeof INIT_PLAYERS;
  payload: Player[];
}

interface ResetPlayersAction extends Action<typeof RESET_PLAYERS> {
  type: typeof RESET_PLAYERS;
  payload: Player[];
}

export type PlayerActionTypes =
  | AddPlayerAction
  | UpdatePlayerAction
  | InitPlayersAction
  | ResetPlayersAction;
