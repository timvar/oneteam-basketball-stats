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

interface SetGameEventAction extends Action<typeof SET_GAME_EVENT> {
  type: typeof SET_GAME_EVENT;
  payload: GameEvent;
}

interface SetPlayerAction extends Action<typeof SET_PLAYER> {
  type: typeof SET_PLAYER;
  payload: PlayerNumber;
}

export type EventActionTypes = SetGameEventAction | SetPlayerAction;
