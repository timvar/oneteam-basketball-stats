import { Action } from 'redux';

export const ADD_ONE = 'ADD_ONE';
export const ADD_TWO = 'ADD_TWO';
export const ADD_THREE = 'ADD_THREE';
export const REDUCE_ONE = 'REDUCE_ONE';
export const REDUCE_TWO = 'REDUCE_TWO';
export const REDUCE_THREE = 'REDUCE_THREE';

export interface ScoreState {
  score: number;
}

interface AddOneAction extends Action<typeof ADD_ONE> {}

interface AddTwoAction extends Action<typeof ADD_TWO> {}

interface AddThreeAction extends Action<typeof ADD_THREE> {}

interface ReduceOneAction extends Action<typeof REDUCE_ONE> {}

interface ReduceTwoAction extends Action<typeof REDUCE_TWO> {}

interface ReduceThreeAction extends Action<typeof REDUCE_THREE> {}

export type ScoreActionTypes =
  | AddOneAction
  | AddTwoAction
  | AddThreeAction
  | ReduceOneAction
  | ReduceTwoAction
  | ReduceThreeAction;
