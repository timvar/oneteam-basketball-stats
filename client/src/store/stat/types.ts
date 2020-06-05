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

export interface LastEvent {
  gameEvent: string;
  playerNumber: number;
}

export interface StatState {
  stats: Stat[];
}

export const ADD_STAT = 'ADD_STAT';

interface AddStatAction {
  type: typeof ADD_STAT;
  payload: LastEvent;
}

export type StatActionTypes = AddStatAction;
