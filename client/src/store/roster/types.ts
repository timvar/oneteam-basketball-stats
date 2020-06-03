import { Action } from 'redux';
import { Player } from '../player/types';

export interface RosterState {
  roster: Player[];
}

export const ADD_TO_ROSTER = 'ADD_TO_ROSTER';
export const REMOVE_FROM_ROSTER = 'REMOVE_FROM_ROSTER';

interface AddToRosterAction extends Action<typeof ADD_TO_ROSTER> {
  type: typeof ADD_TO_ROSTER;
  payload: Player;
}

interface RemoveFromRosterAction extends Action<typeof REMOVE_FROM_ROSTER> {
  type: typeof REMOVE_FROM_ROSTER;
  payload: Player;
}

export type RosterActionTypes = AddToRosterAction | RemoveFromRosterAction;
