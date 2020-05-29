import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  Player,
  ADD_PLAYER,
  UPDATE_PLAYER,
  INIT_PLAYERS,
  InitPlayersAction,
} from './types';
import playerService from '../../services/players';

export const addPlayer = (payload: Player) => {
  return {
    type: ADD_PLAYER,
    payload,
  };
};

export const updatePlayer = (payload: Player) => {
  return {
    type: UPDATE_PLAYER,
    payload,
  };
};

export const initPlayers: ActionCreator<ThunkAction<
  Promise<void>,
  Player[],
  null,
  InitPlayersAction
>> = () => {
  return async (dispatch: Dispatch) => {
    const payload = await playerService.getAll();
    dispatch({
      type: INIT_PLAYERS,
      payload,
    });
  };
};
