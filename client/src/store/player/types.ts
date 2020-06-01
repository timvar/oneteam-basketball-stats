import { Action } from 'redux';

export interface Player {
  id: string;
  playerNumber: number | undefined;
  playerName: string;
  team: string;
}

export interface PlayerInput {
  playerNumber: number | undefined;
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

export interface AddPlayerAction {
  type: typeof ADD_PLAYER;
  payload: Player;
}

interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  payload: Player;
}

export interface InitPlayersAction extends Action<'INIT_PLAYERS'> {
  type: typeof INIT_PLAYERS;
  payload: Player[];
}

interface ResetPlayersAction {
  type: typeof RESET_PLAYERS;
}

export type PlayerActionTypes =
  | AddPlayerAction
  | UpdatePlayerAction
  | InitPlayersAction
  | ResetPlayersAction;
