import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  Team,
  ADD_TEAM,
  UPDATE_TEAM,
  INIT_TEAMS,
  RESET_TEAMS,
  InitTeamsAction,
} from './types';
import teamService from '../../services/teams';

export const addTeam = (payload: Team) => {
  return {
    type: ADD_TEAM,
    payload,
  };
};

export const updatePlayer = (payload: Team) => {
  return {
    type: UPDATE_TEAM,
    payload,
  };
};

export const initTeams: ActionCreator<ThunkAction<
  Promise<void>,
  Team[],
  null,
  InitTeamsAction
>> = () => {
  return async (dispatch: Dispatch) => {
    const payload = await teamService.getAll();
    dispatch({
      type: INIT_TEAMS,
      payload,
    });
  };
};

export const resetTeams = () => {
  return {
    type: RESET_TEAMS,
  };
};
