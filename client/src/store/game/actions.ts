import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Game, ADD_GAME, AddGameAction, GameInput } from './types';
import gameService from '../../services/games';

export const addGame: ActionCreator<ThunkAction<
  Promise<AddGameAction>,
  Game,
  GameInput,
  AddGameAction
>> = (gameInput: GameInput) => {
  return async (dispatch: Dispatch) => {
    const payload = await gameService.createGame(gameInput);
    if (!payload) throw new Error('Game creation failed.');
    const addGameAction: AddGameAction = {
      type: ADD_GAME,
      payload,
    };
    return dispatch(addGameAction);
  };
};
