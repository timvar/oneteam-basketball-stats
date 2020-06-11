import { Action } from 'redux';

export interface Stat {
  playerNumber: number;
  onePm: number;
  twoPm: number;
  threePm: number;
  onePa: number;
  twoPa: number;
  threePa: number;
  orb: number;
  to: number;
  drb: number;
  ast: number;
  blk: number;
  stl: number;
}

export interface StatToDB {
  playerNumber: number;
  onePm: number;
  twoPm: number;
  threePm: number;
  onePa: number;
  twoPa: number;
  threePa: number;
  orb: number;
  to: number;
  drb: number;
  ast: number;
  blk: number;
  stl: number;
  game: string;
}

export interface StatFromDB {
  id: string;
  playerNumber: number;
  onePm: number;
  twoPm: number;
  threePm: number;
  onePa: number;
  twoPa: number;
  threePa: number;
  orb: number;
  to: number;
  drb: number;
  ast: number;
  blk: number;
  stl: number;
  game: string;
}

export interface StatEvent {
  gameEvent: string;
  playerNumber: number;
}

export interface StatState {
  stats: Stat[];
}

export const ADD_STAT = 'ADD_STAT';
export const RESET_STATS = 'RESET_STATS';
export const REMOVE_STAT = 'REMOVE_STAT';

interface AddStatAction extends Action<typeof ADD_STAT> {
  type: typeof ADD_STAT;
  payload: StatEvent;
}

interface ResetStatAction extends Action<typeof RESET_STATS> {
  type: typeof RESET_STATS;
  payload: Stat[];
}

interface RemoveStatAction extends Action<typeof REMOVE_STAT> {
  type: typeof REMOVE_STAT;
  payload: StatEvent;
}

export type StatActionTypes =
  | AddStatAction
  | ResetStatAction
  | RemoveStatAction;
