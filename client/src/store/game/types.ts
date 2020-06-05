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
export const FINISH_GAME = 'FINISH_GAME';
export const ADD_TO_ROSTER = 'ADD_TO_ROSTER';
export const REMOVE_FROM_ROSTER = 'REMOVE_FROM_ROSTER';

export interface AddGameAction {
  type: typeof ADD_GAME;
  payload: Game;
}

interface FinishGameAction {
  type: typeof FINISH_GAME;
}

export type GameActionTypes = AddGameAction | FinishGameAction;
