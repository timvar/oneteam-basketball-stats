import { Action } from 'redux';

export interface GameEvent {
  gameEvent: string;
}

export interface PlayerNumber {
  playerNumber: number;
}

export interface EventItem {
  id: string;
  gameEvent: string;
  playerNumber: number;
}

export interface EventState {
  events: EventItem[];
}

export const SET_GAME_EVENT = 'SET_GAME_EVENT';
export const SET_PLAYER = 'SET_PLAYER';
export const REMOVE_EVENT = 'REMOVE_EVENT';

interface SetGameEventAction extends Action<typeof SET_GAME_EVENT> {
  type: typeof SET_GAME_EVENT;
  payload: GameEvent;
}

interface SetPlayerAction extends Action<typeof SET_PLAYER> {
  type: typeof SET_PLAYER;
  payload: PlayerNumber;
}

interface RemoveGameEvent extends Action<typeof REMOVE_EVENT> {
  type: typeof REMOVE_EVENT;
  payload: EventItem['id'];
}

export type EventActionTypes =
  | SetGameEventAction
  | SetPlayerAction
  | RemoveGameEvent;
