export interface Player {
  id: number | undefined;
  playerNumber: number | undefined;
  playerName: string;
}

export interface Event {
  type: string;
  data: string;
}

export type PlayerFormValues = Omit<Player, 'id'>;
