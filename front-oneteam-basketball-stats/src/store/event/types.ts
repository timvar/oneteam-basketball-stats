export interface GameEvent {
  gameEvent: string;
}

export interface PlayerNumber {
  playerNumber: number;
}

export interface EventState {
  gameEvent: string;
  playerNumber: number | undefined;
}

export const SET_GAME_EVENT = 'SET_GAME_EVENT';
export const SET_PLAYER = 'SET_PLAYER';

interface SetGameEventAction {
  type: typeof SET_GAME_EVENT;
  payload: GameEvent;
}

interface SetPlayerAction {
  type: typeof SET_PLAYER;
  payload: PlayerNumber;
}

export type EventActionTypes = SetGameEventAction | SetPlayerAction;
