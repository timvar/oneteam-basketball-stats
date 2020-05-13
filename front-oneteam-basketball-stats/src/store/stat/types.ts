export interface Stat {
  playerNumber: string;
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

export interface LastEvent {
  gameEvent: string;
  playerNumber: string;
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
