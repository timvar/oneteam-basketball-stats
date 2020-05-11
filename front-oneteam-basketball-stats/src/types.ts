export interface Player {
  id: number;
  playerNumber: string;
}

export interface Event {
  type: string;
  data: string;
}

export interface PlayerEvent {
  playerNumber: string;
  event: string;
}
