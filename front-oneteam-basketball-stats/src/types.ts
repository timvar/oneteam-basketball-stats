export interface Player {
  id: number;
  playerNumber: number;
  playerName: string;
}

export interface Event {
  type: string;
  data: string;
}

export type PlayerFormValues = Omit<Player, 'id'>;
