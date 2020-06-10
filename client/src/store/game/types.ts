import { Action } from 'redux';

export interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  gameNumber: string;
  description: string;
  gameDate: string;
  team: string;
}

export interface GameInput {
  homeTeam: string;
  awayTeam: string;
  gameNumber: string;
  description: string;
  gameDate: string;
  team: string;
}

export interface GameState {
  game: Game;
}

export const ADD_GAME = 'ADD_GAME';
export const ADD_TO_ROSTER = 'ADD_TO_ROSTER';
export const REMOVE_FROM_ROSTER = 'REMOVE_FROM_ROSTER';
export const RESET_GAME = 'RESET_GAME';

export interface AddGameAction extends Action<typeof ADD_GAME> {
  type: typeof ADD_GAME;
  payload: Game;
}

interface ResetGameAction extends Action<typeof RESET_GAME> {
  type: typeof RESET_GAME;
  payload: Game;
}

export type GameActionTypes = AddGameAction | ResetGameAction;
