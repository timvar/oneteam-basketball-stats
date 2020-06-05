import { Action } from 'redux';

export interface Team {
  id: string;
  teamName: string;
}

export interface TeamInput {
  teamName: string;
}

export interface TeamState {
  teams: Team[];
}

export const ADD_TEAM = 'ADD_TEAM';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const INIT_TEAMS = 'INIT_TEAMS';
export const RESET_TEAMS = 'RESET_TEAMS';

export interface AddTeamAction extends Action<typeof ADD_TEAM> {
  type: typeof ADD_TEAM;
  payload: Team;
}

export interface UpdateTeamAction extends Action<typeof UPDATE_TEAM> {
  type: typeof UPDATE_TEAM;
  payload: Team;
}

export interface InitTeamsAction extends Action<typeof INIT_TEAMS> {
  type: typeof INIT_TEAMS;
  payload: Team[];
}

interface ResetTeamsAction extends Action<typeof RESET_TEAMS> {
  type: typeof RESET_TEAMS;
}

export type TeamActionTypes =
  | AddTeamAction
  | UpdateTeamAction
  | InitTeamsAction
  | ResetTeamsAction;
